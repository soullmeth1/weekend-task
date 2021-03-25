export default function intersection(el, callback) {
  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        callback(entry.target, i);
        observe.unobserve(entry.target);
      }
    });
  });

  if (el.current.length) {
    el.current.forEach((element) => {
      observer.observe(element);
    });
  } else {
    observer.observe(el.current);
  }
  // return observer;
}
