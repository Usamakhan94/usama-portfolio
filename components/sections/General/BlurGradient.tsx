const BlurGradient = () => {
  return (
    <div className="fixed bottom-0 left-0 h-48 w-full pointer-events-none z-40">
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 1,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(0.0546875px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 2,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(0.109375px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 3,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(0.21875px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 4,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(0.4375px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 5,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(0.875px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 6,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(1.75px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 7,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(3.5px)",
            willChange: "auto",
          }}
        />
        <div
          style={{
            opacity: 1,
            position: "absolute",
            inset: "0px",
            zIndex: 8,
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
            borderRadius: "0px",
            pointerEvents: "none",
            backdropFilter: "blur(7px)",
            willChange: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default BlurGradient;
