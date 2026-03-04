import { Suspense } from 'react';
import { LabContent } from './content';

const LoadingFallback = () => (
  <div style={{ 
    padding: '4rem 1.5rem', 
    textAlign: 'center',
    color: 'rgba(26, 26, 26, 0.6)'
  }}>
    Loading...
  </div>
);

export default function InsightLabPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LabContent />
    </Suspense>
  );
}