import React from 'react';

export const AuroraBackground = () => {
  return (
    <>
      {/* Aurora Background Layer */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
            linear-gradient(to right, #696969, #808080, #A9A9A9, #C0C0C0, #778899, #696969)
          `,
          backgroundSize: '100% 100%, 300% 300%',
          animation: 'aurora-movement 20s ease-in-out infinite',
        }}
      >
        {/* Aurora Animation Styles */}
        <style jsx>{`
          @keyframes aurora-movement {
            0%, 100% { 
              background-position: 0% 0%, 0% 50%; 
              filter: hue-rotate(0deg);
            }
            33% { 
              background-position: 0% 0%, 100% 50%; 
              filter: hue-rotate(30deg);
            }
            66% { 
              background-position: 0% 0%, 50% 100%; 
              filter: hue-rotate(-30deg);
            }
          }
        `}</style>
      </div>
      
      {/* Overlay for subtle texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(255, 255, 255, 0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(255, 255, 255, 0.03) 100px
            )
          `,
        }}
      />
    </>
  );
};