import React, { useState, useEffect, useRef } from 'react';
import './Auth.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPECIAL_CHARS = /[!@#$%^&*]/;

export default function AuthContainer({ view, setView, onComplete }) {
  return (
    <div className="auth-container">
      <div className="auth-bg"></div>
      <div className="auth-bg-overlay"></div>
      
      <div className="glass-card">
        {view === 'login' && <Login setView={setView} onComplete={onComplete} />}
        {view === 'signup' && <Signup setView={setView} onComplete={onComplete} />}
        {view === 'forgot' && <ForgotPassword setView={setView} />}
      </div>
    </div>
  );
}

function Login({ setView, onComplete }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [shakeField, setShakeField] = useState(null);

  const validateEmail = () => {
    if (!email) {
      setEmailErr('Email is required');
      setShakeField('email');
      return false;
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      setEmailErr('Invalid email format');
      setShakeField('email');
      return false;
    }
    setEmailErr('valid');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPassErr('Password is required');
      setShakeField('password');
      return false;
    }
    setPassErr('valid');
    return true;
  };

  useEffect(() => {
    if (shakeField) {
      const t = setTimeout(() => setShakeField(null), 450);
      return () => clearTimeout(t);
    }
  }, [shakeField]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPassValid = validatePassword();
    if (isEmailValid && isPassValid) {
      onComplete();
    }
  };

  return (
    <div>
      <h2 className="auth-heading">Welcome Back</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="login-email">Email Address</label>
          <input 
            id="login-email"
            type="email" 
            className={`form-input ${emailErr && emailErr !== 'valid' ? 'error' : ''} ${emailErr === 'valid' ? 'success' : ''} ${shakeField === 'email' ? 'shake' : ''}`}
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailErr(''); }}
            onBlur={validateEmail}
            aria-describedby="email-desc"
          />
          {emailErr && emailErr !== 'valid' && <div id="email-desc" className="validation-msg error"><i className="ti ti-alert-circle"></i>{emailErr}</div>}
          {emailErr === 'valid' && <div id="email-desc" className="validation-msg success pulse-success" aria-live="polite"><i className="ti ti-check"></i>Email valid</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="login-password">Password</label>
          <div className="password-wrapper">
            <input 
              id="login-password"
              type={showPassword ? "text" : "password"} 
              className={`form-input ${passErr && passErr !== 'valid' ? 'error' : ''} ${passErr === 'valid' ? 'success' : ''} ${shakeField === 'password' ? 'shake' : ''}`}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPassErr(''); }}
              onBlur={validatePassword}
              style={{ paddingRight: '40px' }}
            />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
              <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`}></i>
            </button>
          </div>
          {passErr && passErr !== 'valid' && <div className="validation-msg error"><i className="ti ti-alert-circle"></i>{passErr}</div>}
          {passErr === 'valid' && <div className="validation-msg success pulse-success" aria-live="polite"><i className="ti ti-check"></i>Password entered</div>}
        </div>

        <div style={{ textAlign: 'right', marginBottom: '16px' }}>
          <button type="button" className="link-btn" onClick={() => setView('forgot')}>Forgot Password?</button>
        </div>

        <button type="submit" className="auth-btn btn-amber" style={{ backgroundColor: 'var(--amber)', color: 'white' }}>
          Sign In
        </button>

        <div className="divider">Or</div>

        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#888780' }}>Don't have an account? </span>
          <button type="button" className="link-btn" onClick={() => setView('signup')}>Sign up</button>
        </div>
      </form>
    </div>
  );
}

function Signup({ setView, onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirm: '', terms: false,
    accessBlind: false, accessDeaf: false, accessWheel: false,
    pace: '', group: '', destinations: []
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const finishSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => onComplete(), 500);
    }, 1500);
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <i className="ti ti-check-circle pulse-success" style={{ fontSize: '48px', color: 'var(--teal)' }}></i>
        <h2 className="auth-heading" style={{ marginTop: '16px' }}>Account created!</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="auth-heading">Create Account</h2>
      <div className="step-indicator">
        <div className={`step-dot ${step >= 1 ? 'active' : ''}`}></div>
        <div className={`step-dot ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`step-dot ${step >= 3 ? 'active' : ''}`}></div>
      </div>

      {step === 1 && <SignupStep1 data={formData} update={(d) => setFormData({...formData, ...d})} onNext={() => setStep(2)} />}
      {step === 2 && <SignupStep2 data={formData} update={(d) => setFormData({...formData, ...d})} onNext={() => setStep(3)} onPrev={() => setStep(1)} />}
      {step === 3 && <SignupStep3 data={formData} update={(d) => setFormData({...formData, ...d})} onNext={finishSignup} onPrev={() => setStep(2)} loading={loading} />}

      {step === 1 && (
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <span style={{ fontSize: '14px', color: '#888780' }}>Already have an account? </span>
          <button type="button" className="link-btn" onClick={() => setView('login')}>Sign in</button>
        </div>
      )}
    </div>
  );
}

function SignupStep1({ data, update, onNext }) {
  const [showPassword, setShowPassword] = useState(false);
  
  const validateEmail = (e) => !e || !EMAIL_REGEX.test(e) ? false : true; // In real app, check uniqueness
  const reqs = {
    length: data.password.length >= 8,
    upper: /[A-Z]/.test(data.password),
    num: /[0-9]/.test(data.password),
    special: SPECIAL_CHARS.test(data.password)
  };
  const score = Object.values(reqs).filter(Boolean).length;
  const strengthColors = ['#E24B4A', '#E24B4A', '#EF9F27', '#EF9F27', '#1D9E75'];
  const barWidth = `${(score / 4) * 100}%`;
  
  const isValid = 
    data.name.length >= 2 && data.name.length <= 100 &&
    validateEmail(data.email) &&
    score === 4 &&
    data.password === data.confirm &&
    data.terms;

  return (
    <div style={{ animation: 'slide-up-fade 200ms ease' }}>
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input 
          type="text" className="form-input" 
          value={data.name} onChange={e => update({name: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input 
          type="email" className={`form-input ${validateEmail(data.email) ? 'success' : ''}`}
          value={data.email} onChange={e => update({email: e.target.value})}
        />
        {validateEmail(data.email) && <div className="validation-msg success pulse-success"><i className="ti ti-check"></i>Email available</div>}
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="password-wrapper">
          <input 
            type={showPassword ? "text" : "password"} className="form-input"
            value={data.password} onChange={e => update({password: e.target.value})}
            style={{ paddingRight: '40px' }}
          />
          <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`}></i>
          </button>
        </div>
        <div className="strength-meter-bg">
          <div className="strength-meter-fill" style={{ width: barWidth, backgroundColor: strengthColors[score] }}></div>
        </div>
        <div className="req-list">
          <div className={reqs.length ? 'req-met' : ''}>• 8+ characters</div>
          <div className={reqs.upper ? 'req-met' : ''}>• 1 uppercase letter</div>
          <div className={reqs.num ? 'req-met' : ''}>• 1 number</div>
          <div className={reqs.special ? 'req-met' : ''}>• 1 special char (!@#$%^&*)</div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input 
          type="password" className={`form-input ${(data.confirm && data.password === data.confirm) ? 'success' : ''}`}
          value={data.confirm} onChange={e => update({confirm: e.target.value})}
        />
      </div>

      <label className="checkbox-label" style={{ marginTop: '16px' }}>
        <input type="checkbox" style={{ display: 'none' }} checked={data.terms} onChange={e => update({terms: e.target.checked})} />
        <div className="custom-checkbox">
          {data.terms && <i className="ti ti-check" style={{ color: 'white', fontSize: '14px' }}></i>}
        </div>
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>

      <button type="button" className="auth-btn btn-amber" style={{ backgroundColor: 'var(--amber)', color: 'white' }} disabled={!isValid} onClick={onNext}>
        Continue
      </button>
    </div>
  );
}

function SignupStep2({ data, update, onNext, onPrev }) {
  return (
    <div style={{ animation: 'slide-up-fade 200ms ease' }}>
      <div className="info-box">
        <i className="ti ti-info-circle" style={{ fontSize: '20px' }}></i>
        Your profile helps personalize your experience. Change anytime.
      </div>

      <div className={`access-card ${data.accessBlind ? 'selected' : ''}`} onClick={() => update({accessBlind: !data.accessBlind})}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontWeight: '600' }}>
          <div className="custom-checkbox" style={{ borderColor: data.accessBlind ? 'var(--teal)' : '#D3D1C7', backgroundColor: data.accessBlind ? 'var(--teal)' : 'transparent' }}>
            {data.accessBlind && <i className="ti ti-check" style={{ color: 'white', fontSize: '14px' }}></i>}
          </div>
          <i className="ti ti-eye-off" style={{ fontSize: '20px', color: data.accessBlind ? 'var(--teal)' : '#888780' }}></i>
          Blind or Low Vision
        </div>
        {data.accessBlind && (
          <div className="access-features">
            Features: Screen reader, high contrast, text sizing, audio descriptions, keyboard nav, text-to-speech
          </div>
        )}
      </div>

      <div className={`access-card ${data.accessDeaf ? 'selected' : ''}`} onClick={() => update({accessDeaf: !data.accessDeaf})}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontWeight: '600' }}>
          <div className="custom-checkbox" style={{ borderColor: data.accessDeaf ? 'var(--teal)' : '#D3D1C7', backgroundColor: data.accessDeaf ? 'var(--teal)' : 'transparent' }}>
            {data.accessDeaf && <i className="ti ti-check" style={{ color: 'white', fontSize: '14px' }}></i>}
          </div>
          <i className="ti ti-player-volume-2" style={{ fontSize: '20px', color: data.accessDeaf ? 'var(--teal)' : '#888780' }}></i>
          Deaf or Hard of Hearing
        </div>
        {data.accessDeaf && (
          <div className="access-features">
            Features: Captions, transcripts, visual alerts, vibration, sign language, text-based comms
          </div>
        )}
      </div>

      <div className={`access-card ${data.accessWheel ? 'selected' : ''}`} onClick={() => update({accessWheel: !data.accessWheel})}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontWeight: '600' }}>
          <div className="custom-checkbox" style={{ borderColor: data.accessWheel ? 'var(--teal)' : '#D3D1C7', backgroundColor: data.accessWheel ? 'var(--teal)' : 'transparent' }}>
            {data.accessWheel && <i className="ti ti-check" style={{ color: 'white', fontSize: '14px' }}></i>}
          </div>
          <i className="ti ti-wheelchair" style={{ fontSize: '20px', color: data.accessWheel ? 'var(--teal)' : '#888780' }}></i>
          Wheelchair / Mobility
        </div>
        {data.accessWheel && (
          <div className="access-features">
            Features: Accessibility ratings, elevator info, parking, accessible bathrooms, routes, accommodations
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        <button type="button" className="auth-btn" style={{ backgroundColor: 'transparent', color: '#888780', border: '1px solid #D3D1C7' }} onClick={onPrev}>Back</button>
        <button type="button" className="auth-btn btn-amber" style={{ backgroundColor: 'var(--amber)', color: 'white', marginTop: 0 }} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}

function SignupStep3({ data, update, onNext, onPrev, loading }) {
  const paces = ['Slow', 'Moderate', 'Fast-Paced', 'Flexible'];
  const groups = ['Solo', 'Partner', 'Family', 'Friends', 'Flexible'];
  const dests = ['Cities', 'Beaches', 'Nature', 'Historical', 'Quiet', 'Food & Wine'];

  const toggleDest = (d) => {
    if (data.destinations.includes(d)) update({destinations: data.destinations.filter(x => x !== d)});
    else update({destinations: [...data.destinations, d]});
  };

  const isValid = data.pace && data.group && data.destinations.length > 0;

  return (
    <div style={{ animation: 'slide-up-fade 200ms ease' }}>
      
      <div style={{ marginBottom: '20px' }}>
        <label className="form-label">Travel Pace</label>
        <div className="pref-grid">
          {paces.map(p => (
            <button key={p} type="button" className={`pref-btn ${data.pace === p ? 'selected' : ''}`} onClick={() => update({pace: p})}>{p}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label className="form-label">Group Size</label>
        <div className="pref-grid">
          {groups.map(g => (
            <button key={g} type="button" className={`pref-btn ${data.group === g ? 'selected' : ''}`} onClick={() => update({group: g})}>{g}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label className="form-label">Destination Types</label>
        <div className="pref-grid">
          {dests.map(d => (
            <button key={d} type="button" className={`pref-btn ${data.destinations.includes(d) ? 'selected' : ''}`} onClick={() => toggleDest(d)}>{d}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        <button type="button" className="auth-btn" style={{ backgroundColor: 'transparent', color: '#888780', border: '1px solid #D3D1C7', flex: 1 }} onClick={onPrev}>Back</button>
        <button type="button" className="auth-btn" style={{ backgroundColor: 'var(--teal)', color: 'white', marginTop: 0, flex: 2 }} disabled={!isValid || loading} onClick={onNext}>
          {loading ? <><i className="ti ti-loader ti-spin" style={{ marginRight: '8px' }}></i>Creating account...</> : 'Create Account'}
        </button>
      </div>
    </div>
  );
}

function ForgotPassword({ setView }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [timer, setTimer] = useState(45);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(email)) {
      setSent(true);
    }
  };

  useEffect(() => {
    if (sent && timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [sent, timer]);

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0', animation: 'slide-up-fade 200ms ease' }}>
        <i className="ti ti-check-circle pulse-success" style={{ fontSize: '48px', color: 'var(--teal)' }}></i>
        <h2 className="auth-heading" style={{ marginTop: '16px' }}>Check your email</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>We've sent a password reset link to {email}</p>
        
        <p style={{ color: '#888780', fontSize: '14px', marginBottom: '24px' }}>
          Resend in {timer} seconds
        </p>

        <button type="button" className="link-btn" onClick={() => setView('login')} style={{ width: '100%' }}>
          Back to login
        </button>
      </div>
    );
  }

  return (
    <div style={{ animation: 'slide-up-fade 200ms ease' }}>
      <h2 className="auth-heading">Reset your password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" className="form-input" 
            value={email} onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn btn-amber" style={{ backgroundColor: 'var(--amber)', color: 'white' }}>
          Send Reset Link
        </button>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button type="button" className="link-btn" onClick={() => setView('login')}>Back to login</button>
        </div>
      </form>
    </div>
  );
}
