// bangla.js

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
            .then(data => {
              callback(data);
            });
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
          if (this.elements[0]) {
            return this.elements[0].value;
          }
          return null;
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
          if (this.elements[0]) {
            return this.elements[0].getAttribute(attr);
          }
          return null;
        },
        html_দাও(html) {
          this.elements.forEach(el => el.innerHTML = html);
          return this;
        },
        html_নাও() {
          if (this.elements[0]) {
            return this.elements[0].innerHTML;
          }
          return null;
        },
        প্রথম() {
          return createWrapper([this.elements[0]]);
        },
        প্রতিটি(callback) {
          this.elements.forEach(callback);
          return this;
        }
      };
    }
  
    const $B = function (selector) {
      const elements = Array.from(document.querySelectorAll(selector));
      return createWrapper(elements);
    };
  
    $B.নির্বাচন = $B;
  
    global.$B = $B;
  
  })(window);
  