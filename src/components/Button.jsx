const Button = ({ text, className, id }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById("counter"); // Find the section with ID "counter"

        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
        <img src="images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};

export default Button;