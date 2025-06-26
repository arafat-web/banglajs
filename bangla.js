(function (global) {
  function createWrapper(elements) {
    return {
      elements,

      লেখো(text) {
        this.elements.forEach(el => el.textContent = text);
        return this;
      },

      রং(color) {
        this.elements.forEach(el => el.style.color = color);
        return this;
      },

      ব্যাকগ্রাউন্ডরং(color) {
        this.elements.forEach(el => el.style.backgroundColor = color);
        return this;
      },

      ক্লাস_দাও(cls) {
        this.elements.forEach(el => el.classList.add(cls));
        return this;
      },

      ক্লাস_বাদ_দাও(cls) {
        this.elements.forEach(el => el.classList.remove(cls));
        return this;
      },

      ক্লিক(callback) {
        this.elements.forEach(el => el.addEventListener('click', callback));
        return this;
      },

      ডাবল_ক্লিক(callback) {
        this.elements.forEach(el => el.addEventListener('dblclick', callback));
        return this;
      },

      মাউস_ওভার(callback) {
        this.elements.forEach(el => el.addEventListener('mouseover', callback));
        return this;
      },

      মাউস_আউট(callback) {
        this.elements.forEach(el => el.addEventListener('mouseout', callback));
        return this;
      },

      কীবোর্ড(callback) {
        this.elements.forEach(el => el.addEventListener('keydown', callback));
        return this;
      },

      ফোকাস(callback) {
        this.elements.forEach(el => el.addEventListener('focus', callback));
        return this;
      },

      ব্লার(callback) {
        this.elements.forEach(el => el.addEventListener('blur', callback));
        return this;
      },

      সক্রিয়_করো() {
        this.elements.forEach(el => el.disabled = false);
        return this;
      },

      নিষ্ক্রিয়_করো() {
        this.elements.forEach(el => el.disabled = true);
        return this;
      },

      লুকাও() {
        this.elements.forEach(el => el.style.display = 'none');
        return this;
      },

      দেখাও() {
        this.elements.forEach(el => el.style.display = '');
        return this;
      },

      css(styles) {
        this.elements.forEach(el => {
          for (const prop in styles) {
            el.style[prop] = styles[prop];
          }
        });
        return this;
      },

      আনো(url, callback) {
        fetch(url)
          .then(response => response.text())
          .then(data => callback(data))
          .catch(error => console.error('Ajax Error:', error));
        return this;
      },

      জমা(callback) {
        this.elements.forEach(el => el.addEventListener('submit', function (e) {
          e.preventDefault();
          callback(e);
        }));
        return this;
      },

      মান_নাও() {
        return this.elements[0] ? this.elements[0].value : null;
      },

      মান_দাও(value) {
        this.elements.forEach(el => el.value = value);
        return this;
      },

      অ্যাট্রিবিউট_দাও(attr, value) {
        this.elements.forEach(el => el.setAttribute(attr, value));
        return this;
      },

      অ্যাট্রিবিউট_নাও(attr) {
        return this.elements[0] ? this.elements[0].getAttribute(attr) : null;
      },

      html_দাও(html) {
        this.elements.forEach(el => el.innerHTML = html);
        return this;
      },

      html_নাও() {
        return this.elements[0] ? this.elements[0].innerHTML : null;
      },

      যুক্ত_করো(html) {
        this.elements.forEach(el => el.insertAdjacentHTML('beforeend', html));
        return this;
      },

      খালি_করো() {
        this.elements.forEach(el => el.innerHTML = '');
        return this;
      },

      সরাও() {
        this.elements.forEach(el => el.remove());
        return this;
      },

      প্রথম() {
        return createWrapper([this.elements[0]]);
      },

      শেষ() {
        return createWrapper([this.elements[this.elements.length - 1]]);
      },

      প্রতিটি(callback) {
        this.elements.forEach(callback);
        return this;
      },

      সংখ্যা() {
        return this.elements.length;
      },

      // বাংলা API ম্যানিপুলেশন ফাংশনসমূহ
      আনো_ডাটা(url, callback) {
        fetch(url)
          .then(res => res.json())
          .then(data => callback(null, data))
          .catch(err => callback(err));
        return this;
      },

      পাঠাও_ডাটা(url, data, callback) {
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => callback(null, data))
          .catch(err => callback(err));
        return this;
      },

      হালনাগাদ_করো(url, data, callback) {
        fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => callback(null, data))
          .catch(err => callback(err));
        return this;
      },

      মুছে_ফেলো(url, callback) {
        fetch(url, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => callback(null, data))
          .catch(err => callback(err));
        return this;
      }
    };
  }

  const $B = function (selector) {
    if (typeof selector === 'function') {
      document.addEventListener('DOMContentLoaded', selector);
      return;
    }
    const elements = Array.from(document.querySelectorAll(selector));
    return createWrapper(elements);
  };

  $B.নির্বাচন = $B;

  global.$B = $B;

})(window);
