const spanjs = (selector) => {

    const isMobile = () => {
        const details = window.navigator.userAgent;
        const regexp = /android|iphone|kindle|ipad|Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
        return regexp.test(details);
    },
    parseJSON = (str) => {
        try {
            return JSON.parse(str)
        } catch (error) {
            return false
        }
    },
    on = (event, callback) => {
        document.addEventListener(event, callback)
    },
    hide = () => {
        self.elements.forEach(e => {
            e.display.style = 'none'
        })
    },
    show = (display = '') => {
        self.elements.forEach(e => {
            e.display.style = display
        })
    },
    attr = (name, val) => {
        if (val === null) {
            self.elements.forEach(e => {
                e.getAttribute(name)
            })
        } else {
            self.elements.forEach(e => {
                e.setAttribute(name, val)
            })
        }
    },
    addClass = (val) => {
        self.elements.forEach(e => {
            e.classList.add(val)
        })
    },
    removeClass = (val) => {
        self.elements.forEach(e => {
            e.className += e.className.replace(val, '')
        })
    },
    toggleClass = (val) => {
        self.elements.forEach(e => {
            e.classList.toggle(val)
        })
    },
    hasClass = (val) => {
        return self.element.classList.includes(val)
    }

    const self = {
        element: document.querySelector(selector),
        elements: document.querySelectorAll(selector),
        html: () => self.elements,
        on,
        hide,
        show,
        isMobile,
        parseJSON,
        addClass,
        removeClass,
        toggleClass,
        attr,
        hasClass
    }
    window.spanjs = spanjs

    return self
}

module.exports = spanjs