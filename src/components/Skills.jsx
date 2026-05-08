import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ── Google Cloud Icon ── */
const GCPIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gcpGrad" x1="0" y1="7" x2="21" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4"/><stop offset="35%" stopColor="#EA4335"/>
        <stop offset="70%" stopColor="#FBBC05"/><stop offset="100%" stopColor="#34A853"/>
      </linearGradient>
    </defs>
    <path d="M18 10.5c-.5-2.5-2.7-4.5-5.3-4.5C11 6 9.5 6.7 8.4 7.7 7.6 7.3 6.8 7 6 7c-2.2 0-4 1.8-4 4 0 .2 0 .4.1.5C.8 12 0 13.1 0 14.4 0 16.4 1.6 18 3.6 18H18c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.5-3" fill="url(#gcpGrad)" transform="translate(0.5 0)"/>
  </svg>
);
const IBMIcon = () => (
  <svg viewBox="0 0 48 20" width="38" height="15" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="16" fontSize="18" fontWeight="900" fill="#1F70C1" fontFamily="Arial Black, Arial" letterSpacing="-1">IBM</text>
    <rect x="2" y="4" width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="9" width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="14" width="44" height="2.5" fill="white" opacity="0.5"/>
  </svg>
);
const CiscoIcon = () => (
  <svg viewBox="0 0 60 28" width="46" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="2" width="8" height="14" rx="4" fill="#00BCEB"/>
    <rect x="18" y="5" width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="36" y="5" width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="10" y="9" width="6" height="7" rx="3" fill="#00BCEB"/>
    <rect x="44" y="9" width="6" height="7" rx="3" fill="#00BCEB"/>
    <rect x="3" y="12" width="5" height="4" rx="2" fill="#00BCEB"/>
    <rect x="52" y="12" width="5" height="4" rx="2" fill="#00BCEB"/>
    <text x="30" y="27" fontSize="7" fontWeight="700" fill="#00BCEB" fontFamily="Arial" textAnchor="middle" letterSpacing="1.5">CISCO</text>
  </svg>
);
const AWSS3Icon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2Z" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
    <text x="6.5" y="14.5" fontSize="5" fontWeight="900" fill="#E05243" fontFamily="Arial">S3</text>
  </svg>
);
const AWSSQSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="10" rx="2" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
    <path d="M6 10h8M6 14h5" stroke="#E05243" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="18" cy="10" r="1.5" fill="#E05243"/>
  </svg>
);
const AWSLambdaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2Z" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
    <path d="M8 17l3-9 3 5 2-3" stroke="#E05243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const AWSECSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="7" height="7" rx="1.5" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
    <rect x="14" y="5" width="7" height="7" rx="1.5" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
    <rect x="8" y="14" width="8" height="5" rx="1.5" fill="#E05243" opacity=".12" stroke="#E05243" strokeWidth="1.3"/>
  </svg>
);
const TerraformIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4l6 3.5v7L9 11V4z" fill="#7B42BC" opacity=".85"/>
    <path d="M16.5 7.5l5 2.9v7l-5-2.9v-7z" fill="#7B42BC" opacity=".5"/>
    <path d="M2.5 7.5l5 2.9v7l-5-2.9v-7z" fill="#7B42BC" opacity=".35"/>
  </svg>
);
const LocalStackIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="7" rx="8" ry="3" stroke="#00AEEF" strokeWidth="1.3" fill="#00AEEF" opacity=".12"/>
    <path d="M4 7v4c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="#00AEEF" strokeWidth="1.3" fill="none"/>
    <path d="M4 11v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#00AEEF" strokeWidth="1.3" fill="none"/>
  </svg>
);
const ServerlessIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-10z" fill="#FD5750" strokeLinejoin="round"/>
  </svg>
);
const KubernetesIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="#326CE5" strokeWidth="1.3"/>
    <circle cx="12" cy="12" r="3" fill="#326CE5"/>
    <line x1="12" y1="9" x2="12" y2="2.5" stroke="#326CE5" strokeWidth="1.3"/>
    <line x1="12" y1="15" x2="12" y2="21.5" stroke="#326CE5" strokeWidth="1.3"/>
    <line x1="9.3" y1="10.5" x2="3.5" y2="7" stroke="#326CE5" strokeWidth="1.3"/>
    <line x1="14.7" y1="13.5" x2="20.5" y2="17" stroke="#326CE5" strokeWidth="1.3"/>
    <line x1="14.7" y1="10.5" x2="20.5" y2="7" stroke="#326CE5" strokeWidth="1.3"/>
    <line x1="9.3" y1="13.5" x2="3.5" y2="17" stroke="#326CE5" strokeWidth="1.3"/>
  </svg>
);
const GHActionsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#2088FF" strokeWidth="1.3"/>
    <path d="M8 12l3 3 5-5" stroke="#2088FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const CICDIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="12" r="2.5" fill="none" stroke="#F05A28" strokeWidth="1.3"/>
    <circle cx="19" cy="12" r="2.5" fill="none" stroke="#F05A28" strokeWidth="1.3"/>
    <path d="M7.5 12h9" stroke="#F05A28" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M15 9l3 3-3 3" stroke="#F05A28" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const CloudRunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10.5c-.5-2.5-2.7-4.5-5.3-4.5C11 6 9.5 6.7 8.4 7.7 7.6 7.3 6.8 7 6 7c-2.2 0-4 1.8-4 4 0 .2 0 .4.1.5C.8 12 0 13.1 0 14.4 0 16.4 1.6 18 3.6 18H18c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.5-3" fill="none" stroke="#4285F4" strokeWidth="1.3" transform="translate(0.5 0)"/>
    <path d="M10 11l4-3-4-3" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(1 3)"/>
  </svg>
);
const VPCIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="#FF9900" strokeWidth="1.3" strokeDasharray="3 1.5"/>
    <rect x="5" y="7" width="6" height="4" rx="1" fill="#FF9900" opacity=".2" stroke="#FF9900" strokeWidth="1"/>
    <rect x="13" y="7" width="6" height="4" rx="1" fill="#FF9900" opacity=".2" stroke="#FF9900" strokeWidth="1"/>
    <line x1="8" y1="11" x2="12" y2="15" stroke="#FF9900" strokeWidth="1" opacity=".6"/>
    <line x1="16" y1="11" x2="12" y2="15" stroke="#FF9900" strokeWidth="1" opacity=".6"/>
  </svg>
);
const PytestIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="#009FE3" strokeWidth="1.3"/>
    <path d="M9 7h6l-3 5h3l-5 5" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031V15.1s-.109-3.402 3.351-3.402h5.769s3.24.052 3.24-3.131V3.23S18.28 0 11.914 0zm-3.21 1.866a1.047 1.047 0 11.001 2.094 1.047 1.047 0 010-2.094z" fill="#366A96"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963H18.566V8.9s.109 3.402-3.351 3.402H9.446S6.206 12.25 6.206 15.433v5.337S5.72 24 12.086 24zm3.21-1.866a1.047 1.047 0 110-2.094 1.047 1.047 0 010 2.094z" fill="#FFC331"/>
  </svg>
);
const CppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 1.71L2.38 6.37A1.74 1.74 0 001.5 7.88v8.24c0 .62.33 1.2.88 1.51l8.12 4.66a1.74 1.74 0 001.75 0l8.12-4.66c.55-.31.88-.89.88-1.51V7.88c0-.62-.33-1.2-.88-1.51L12.25 1.71a1.74 1.74 0 00-1.75 0z" fill="#00599C"/>
    <path d="M7.5 14.5A2.5 2.5 0 019.5 9c.47 0 .91.13 1.28.36" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    <line x1="14" y1="10" x2="14" y2="14" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="12" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="17.5" y1="10" x2="17.5" y2="14" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="15.5" y1="12" x2="19.5" y2="12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.25l-9 5.19v10.37l9 5.19 9-5.19V7.44L12 2.25z" fill="#8CC84B" opacity=".15" stroke="#8CC84B" strokeWidth="1.3"/>
    <path d="M9 8v8M12 8v5.5M15 8v8" stroke="#8CC84B" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 16c0 1.1.9 2 3 2s3-.9 3-2" stroke="#8CC84B" strokeWidth="1.3" fill="none"/>
  </svg>
);
const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2v8L4 17c-1.1 2 .3 5 3.5 5h9c3.2 0 4.6-3 3.5-5l-5-7V2" stroke="var(--text2)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="7.5" y1="12" x2="16.5" y2="12" stroke="var(--text2)" strokeWidth="1.2" opacity=".5"/>
    <circle cx="9" cy="16" r="1" fill="var(--text2)" opacity=".6"/>
    <circle cx="13" cy="18" r="1.2" fill="var(--text2)" opacity=".4"/>
    <line x1="9" y1="2" x2="15" y2="2" stroke="var(--text2)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const FastAPIIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#049688" opacity=".12" stroke="#049688" strokeWidth="1.3"/>
    <path d="M13 4L7 13h5l-1 7 6-9h-5l1-7z" fill="#049688"/>
  </svg>
);
const RESTIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="4" rx="2" fill="#6366F1" opacity=".15" stroke="#6366F1" strokeWidth="1.2"/>
    <rect x="2" y="11" width="20" height="4" rx="2" fill="#6366F1" opacity=".1" stroke="#6366F1" strokeWidth="1.2"/>
    <rect x="2" y="17" width="12" height="3" rx="1.5" fill="#6366F1" opacity=".08" stroke="#6366F1" strokeWidth="1.2"/>
    <text x="4" y="8.5" fontSize="4" fontWeight="900" fill="#6366F1" fontFamily="Arial">GET</text>
    <text x="4" y="14.5" fontSize="4" fontWeight="900" fill="#6366F1" fontFamily="Arial">POST</text>
    <text x="4" y="19.5" fontSize="3.5" fontWeight="900" fill="#6366F1" fontFamily="Arial">PUT</text>
  </svg>
);
const MicroservicesIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.5" fill="#F59E0B" opacity=".8"/>
    <circle cx="4" cy="7" r="2" fill="#F59E0B" opacity=".5"/>
    <circle cx="20" cy="7" r="2" fill="#F59E0B" opacity=".5"/>
    <circle cx="4" cy="17" r="2" fill="#F59E0B" opacity=".5"/>
    <circle cx="20" cy="17" r="2" fill="#F59E0B" opacity=".5"/>
    <line x1="6" y1="8" x2="10" y2="11" stroke="#F59E0B" strokeWidth="1.2"/>
    <line x1="18" y1="8" x2="14" y2="11" stroke="#F59E0B" strokeWidth="1.2"/>
    <line x1="6" y1="16" x2="10" y2="13" stroke="#F59E0B" strokeWidth="1.2"/>
    <line x1="18" y1="16" x2="14" y2="13" stroke="#F59E0B" strokeWidth="1.2"/>
  </svg>
);
const EventDrivenIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c2-4 5-6 8-4s5 6 8 4" stroke="#EC4899" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="5" cy="10" r="1.8" fill="#EC4899" opacity=".7"/>
    <circle cx="12" cy="14" r="1.8" fill="#EC4899" opacity=".7"/>
    <circle cx="19" cy="10" r="1.8" fill="#EC4899" opacity=".7"/>
  </svg>
);
const NoSQLIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5.5" rx="8" ry="2.5" fill="#10B981" opacity=".15" stroke="#10B981" strokeWidth="1.3"/>
    <path d="M4 5.5v5C4 12.16 7.58 13.5 12 13.5s8-1.34 8-3V5.5" stroke="#10B981" strokeWidth="1.3" fill="none"/>
    <path d="M4 10.5v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#10B981" strokeWidth="1.3" fill="none"/>
  </svg>
);
const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#00618A" opacity=".1"/>
    <text x="3" y="16" fontSize="9" fontWeight="900" fill="#00618A" fontFamily="Arial">MySQL</text>
  </svg>
);
const MongoIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.466-.803-.49-1.08-.03.263-.11.468-.255.589-1.429 1.15-4.265 4.931-4.2 11.566.033 4.26 2.26 7.325 4.232 8.964 1.97 1.638 4.576 1.97 4.576 1.97s3.085-2.83 3.085-7.19c0-4.36-2.371-6.704-2.375-6.704z" fill="#4DB33D"/>
  </svg>
);
const RedisIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M10.5 6.3l3.3 1.5-3.3 1.5-3.3-1.5 3.3-1.5z" fill="#A41E11"/>
    <path d="M2 8.5l8.5 3.9 8.5-3.9" fill="none" stroke="#A41E11" strokeWidth="1.2"/>
    <ellipse cx="10.5" cy="12.4" rx="8.5" ry="3.9" fill="none" stroke="#A41E11" strokeWidth="1.2"/>
    <text x="2" y="20" fontSize="6.5" fontWeight="900" fill="#A41E11" fontFamily="Arial">Redis</text>
  </svg>
);
const DynamoIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="none" stroke="#4053D6" strokeWidth="1.3"/>
    <text x="5.5" y="14" fontSize="4.5" fontWeight="900" fill="#4053D6" fontFamily="Arial">DDB</text>
  </svg>
);
const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791" opacity=".15"/>
    <path d="M14.5 7c0-1.1-.9-2-2-2s-2 .9-2 2v3h4V7z" fill="#336791"/>
    <rect x="8.5" y="10" width="7" height="7" rx="1" fill="#336791" opacity=".8"/>
  </svg>
);
const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#F05032">
    <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.946 2.986 1.838 1.838 0 01-2.308-2.308L13.468 8.66v6.237a1.836 1.836 0 11-1.524-.012V8.568a1.836 1.836 0 01-1.253-2.449L7.964 3.35.452 10.85a1.55 1.55 0 000 2.19l10.48 10.477a1.55 1.55 0 002.189 0l10.425-10.42a1.55 1.55 0 000-2.168z"/>
  </svg>
);
const GithubIconSvg = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a1 1 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a1 1 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC"/>
  </svg>
);
const PrometheusIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <circle cx="12" cy="12" r="10" fill="#E6522C" opacity=".15"/>
    <circle cx="12" cy="12" r="4" fill="#E6522C"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#E6522C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const DockerIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.184.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
  </svg>
);
const W3CIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <rect width="24" height="24" rx="4" fill="#005A9C" opacity=".12"/>
    <text x="2" y="16" fontSize="8" fontWeight="900" fill="#005A9C" fontFamily="Arial">W3C</text>
  </svg>
);
const DSAIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--cyan)" strokeWidth="1.6">
    <polyline points="3,17 7,11 11,14 16,7 21,10"/>
    <circle cx="7" cy="11" r="1.5" fill="var(--cyan)"/>
    <circle cx="11" cy="14" r="1.5" fill="var(--cyan)"/>
    <circle cx="16" cy="7" r="1.5" fill="var(--cyan)"/>
  </svg>
);
const DistribIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--purple)" strokeWidth="1.5">
    <circle cx="12" cy="12" r="2"/>
    <circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/>
    <circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
    <line x1="6" y1="7" x2="10" y2="11"/><line x1="18" y1="7" x2="14" y2="11"/>
    <line x1="6" y1="17" x2="10" y2="13"/><line x1="18" y1="17" x2="14" y2="13"/>
  </svg>
);
const OSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="var(--text3)" strokeWidth="1.5"/>
    <line x1="2" y1="8" x2="22" y2="8" stroke="var(--text3)" strokeWidth="1.5"/>
    <circle cx="5" cy="6" r="1" fill="#f87171"/><circle cx="8.5" cy="6" r="1" fill="#fbbf24"/><circle cx="12" cy="6" r="1" fill="#34d399"/>
    <rect x="5" y="11" width="6" height="1.5" rx=".5" fill="var(--text3)" opacity=".6"/>
    <rect x="5" y="14" width="10" height="1.5" rx=".5" fill="var(--text3)" opacity=".4"/>
  </svg>
);
const RateLimitIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <circle cx="12" cy="12" r="9" stroke="var(--cyan2)" strokeWidth="1.5"/>
    <path d="M12 7v5l3 3" stroke="var(--cyan2)" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const OOPIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--purple)" strokeWidth="1.5">
    <rect x="3" y="3" width="6" height="6" rx="1.5"/>
    <rect x="15" y="3" width="6" height="6" rx="1.5"/>
    <rect x="9" y="15" width="6" height="6" rx="1.5"/>
    <line x1="6" y1="9" x2="12" y2="15"/><line x1="18" y1="9" x2="12" y2="15"/>
  </svg>
);
const DBMSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#fbbf24" strokeWidth="1.5"/>
    <path d="M4 6v5c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="#fbbf24" strokeWidth="1.5"/>
    <path d="M4 11v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#fbbf24" strokeWidth="1.5"/>
  </svg>
);
const DLQIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="#f87171" strokeWidth="1.5"/>
    <path d="M6 10h12M6 14h8" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="19" cy="5" r="3" fill="#f87171"/>
    <text x="17.5" y="6.8" fontSize="4" fontWeight="900" fill="white" fontFamily="Arial">!</text>
  </svg>
);

/* ── Focus dot for highlighted skills ── */
function FocusDot() {
  return (
    <motion.span
      animate={{ opacity: [1, 0.3, 1], scale: [1, 0.75, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        display: 'inline-block', width: 5, height: 5, borderRadius: '50%',
        background: '#00f5c8', marginLeft: 5, verticalAlign: 'middle',
        boxShadow: '0 0 6px #00f5c8', flexShrink: 0,
      }}
    />
  );
}

const SKILLS = [
  {
    cat: 'Cloud & Infrastructure',
    items: [
      { icon: <AWSS3Icon />, label: 'AWS S3' },
      { icon: <AWSSQSIcon />, label: 'AWS SQS' },
      { icon: <AWSLambdaIcon />, label: 'AWS Lambda' },
      { icon: <AWSECSIcon />, label: 'AWS ECS' },
      { icon: <GCPIcon />, label: 'GCP' },
      { icon: <TerraformIcon />, label: 'Terraform' },
      { icon: <LocalStackIcon />, label: 'LocalStack' },
      { icon: <ServerlessIcon />, label: 'Serverless' },
    ],
  },
  {
    cat: 'DevOps & Automation',
    items: [
      { icon: <DockerIcon />, label: 'Docker' },
      { icon: <KubernetesIcon />, label: 'Kubernetes' },
      { icon: <GHActionsIcon />, label: 'GitHub Actions' },
      { icon: <CICDIcon />, label: 'CI / CD' },
      { icon: <CloudRunIcon />, label: 'Cloud Run' },
      { icon: <VPCIcon />, label: 'VPC' },
      { icon: <PytestIcon />, label: 'Pytest' },
    ],
  },
  {
    cat: 'Backend & APIs',
    items: [
      { icon: <PythonIcon />, label: 'Python' },
      { icon: <CppIcon />, label: 'C++' },
      { icon: <NodeIcon />, label: 'Node.js' },
      { icon: <FlaskIcon />, label: 'Flask' },
      { icon: <FastAPIIcon />, label: 'FastAPI' },
      { icon: <RESTIcon />, label: 'REST APIs' },
      { icon: <MicroservicesIcon />, label: 'Microservices' },
      { icon: <EventDrivenIcon />, label: 'Event-Driven' },
    ],
  },
  {
    cat: 'Databases',
    items: [
      { icon: <MySQLIcon />, label: 'MySQL' },
      { icon: <MongoIcon />, label: 'MongoDB' },
      { icon: <RedisIcon />, label: 'Redis' },
      { icon: <DynamoIcon />, label: 'DynamoDB' },
      { icon: <PostgresIcon />, label: 'PostgreSQL' },
      { icon: <NoSQLIcon />, label: 'NoSQL' },
    ],
  },
  {
    cat: 'Architecture',
    items: [
      { icon: <DistribIcon />, label: 'Distributed Systems' },
      { icon: <RateLimitIcon />, label: 'Rate Limiting' },
      { icon: <DLQIcon />, label: 'Dead Letter Queue' },
      { icon: <OOPIcon />, label: 'OOP' },
      { icon: <DSAIcon />, label: 'DSA' },
      { icon: <DBMSIcon />, label: 'DBMS' },
    ],
  },
  {
    cat: 'Monitoring & Tools',
    items: [
      { icon: <PrometheusIcon />, label: 'Prometheus' },
      { icon: <GitIcon />, label: 'Git' },
      { icon: <GithubIconSvg />, label: 'GitHub' },
      { icon: <VSCodeIcon />, label: 'VS Code' },
      { icon: <DockerIcon />, label: 'Docker SDK' },
      { icon: <W3CIcon />, label: 'W3C Tracing' },
    ],
  },
];

const MARQUEE_ICONS = [
  { icon: <AWSS3Icon />, label: 'AWS' },
  { icon: <TerraformIcon />, label: 'Terraform' },
  { icon: <DockerIcon />, label: 'Docker' },
  { icon: <KubernetesIcon />, label: 'Kubernetes' },
  { icon: <PythonIcon />, label: 'Python' },
  { icon: <NodeIcon />, label: 'Node.js' },
  { icon: <GHActionsIcon />, label: 'GitHub Actions' },
  { icon: <MongoIcon />, label: 'MongoDB' },
  { icon: <PrometheusIcon />, label: 'Prometheus' },
  { icon: <GCPIcon />, label: 'GCP' },
  { icon: <RedisIcon />, label: 'Redis' },
  { icon: <FastAPIIcon />, label: 'FastAPI' },
];

function Marquee() {
  const doubled = [...MARQUEE_ICONS, ...MARQUEE_ICONS];
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', marginTop: '3rem',
      padding: '1.2rem 0',
      borderTop: '1px solid rgba(0,245,255,0.08)',
      borderBottom: '1px solid rgba(0,245,255,0.08)',
    }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, var(--bg, #060b14), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, var(--bg, #060b14), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '2.5rem', width: 'max-content', alignItems: 'center' }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 8,
            border: '1px solid rgba(0,245,255,0.1)',
            background: 'rgba(0,245,255,0.03)',
            whiteSpace: 'nowrap',
          }}>
            {item.icon}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.06em' }}>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function IconBadge({ icon, label }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 5, padding: '10px 8px', borderRadius: 10,
        background: 'var(--bg3)', border: '1px solid var(--border)',
        minWidth: 62, cursor: 'default',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20 }}>
        {icon}
      </div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--text3)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
        {label}
      </span>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 },
  }),
};

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section id="skills" className="section-pad" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint grid backdrop */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%2300f5ff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '48px 48px',
      }} />
      {/* Parallax orbs */}
      <motion.div style={{ position: 'absolute', top: '10%', right: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)', pointerEvents: 'none', y: parallaxY1, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', bottom: '15%', left: '-6%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none', y: parallaxY2, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', top: '45%', left: '10%', width: 120, height: 120, border: '1px solid rgba(0,245,200,0.07)', borderRadius: 24, transform: 'rotate(20deg)', pointerEvents: 'none', y: parallaxY3, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', top: '20%', right: '15%', width: 70, height: 70, border: '1px solid rgba(244,114,182,0.09)', borderRadius: 14, transform: 'rotate(-30deg)', pointerEvents: 'none', y: parallaxY1, zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">My Toolkit</div>
          <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
          <div className="section-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4rem' }} className="skills-grid">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.cat} custom={i} variants={cardVariants}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                padding: '1.8rem', borderRadius: 16,
                background: 'var(--card)', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-card)', cursor: 'default',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
            >
              {skill.icon && <div style={{ fontSize: '1.9rem', marginBottom: '0.9rem' }}>{skill.icon}</div>}
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.97rem', marginBottom: '1rem', color: 'var(--text)' }}>
                {skill.cat}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skill.items.map(item => <IconBadge key={item.label} icon={item.icon} label={item.label} />)}
              </div>
            </motion.div>
          ))}
        </div>

        <Marquee />
      </div>
      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
