// ===== NAVEGACIÓN MÓVIL =====
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  // Toggle del menú móvil
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animación del icono hamburguesa
      const bars = navToggle.querySelectorAll(".bar")
      bars.forEach((bar, index) => {
        if (navMenu.classList.contains("active")) {
          if (index === 0) bar.style.transform = "rotate(45deg) translate(5px, 5px)"
          if (index === 1) bar.style.opacity = "0"
          if (index === 2) bar.style.transform = "rotate(-45deg) translate(7px, -6px)"
        } else {
          bar.style.transform = "none"
          bar.style.opacity = "1"
        }
      })
    })
  }

  // Cerrar menú al hacer click en un enlace
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
        const bars = navToggle.querySelectorAll(".bar")
        bars.forEach((bar) => {
          bar.style.transform = "none"
          bar.style.opacity = "1"
        })
      }
    })
  })
})

// ===== FILTROS DE PORTAFOLIO =====
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter")

        // Actualizar botón activo
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")

        // Filtrar proyectos
        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category")

          if (filter === "all" || category === filter) {
            card.style.display = "block"
            card.style.animation = "fadeInUp 0.6s ease-out"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }
})

// ===== FORMULARIO DE CONTACTO =====
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Obtener datos del formulario
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Validación básica
      if (!data.name || !data.email || !data.message) {
        showNotification("Por favor, completa todos los campos requeridos.", "error")
        return
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        showNotification("Por favor, ingresa un email válido.", "error")
        return
      }

      // Simular envío del formulario
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML

      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
      submitButton.disabled = true

      // Simular delay de envío
      setTimeout(() => {
        showNotification("¡Mensaje enviado correctamente! Te contactaré pronto.", "success")
        contactForm.reset()
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }, 2000)
    })
  }
})

// ===== SISTEMA DE NOTIFICACIONES =====
function showNotification(message, type = "info") {
  // Crear elemento de notificación
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `

  // Estilos para la notificación
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `

  // Agregar al DOM
  document.body.appendChild(notification)

  // Cerrar notificación
  const closeButton = notification.querySelector(".notification-close")
  closeButton.addEventListener("click", () => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  })

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease-out"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }
  }, 5000)
}

// ===== SCROLL SUAVE PARA NAVEGACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

// ===== EFECTOS DE SCROLL =====
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "none"
    }
  })
})

// ===== ANIMACIONES DE ENTRADA =====
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos que necesitan animación
  const animatedElements = document.querySelectorAll(".project-card, .skill-card, .faq-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })
})

// ===== MEJORAS DE ACCESIBILIDAD =====
document.addEventListener("DOMContentLoaded", () => {
  // Manejo de teclado para navegación
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const navMenu = document.querySelector(".nav-menu")
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const navToggle = document.querySelector(".nav-toggle")
        const bars = navToggle.querySelectorAll(".bar")
        bars.forEach((bar) => {
          bar.style.transform = "none"
          bar.style.opacity = "1"
        })
      }
    }
  })

  // Focus trap para menú móvil
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  if (navMenu && navLinks.length > 0) {
    navLinks[navLinks.length - 1].addEventListener("keydown", (e) => {
      if (e.key === "Tab" && !e.shiftKey && navMenu.classList.contains("active")) {
        e.preventDefault()
        navLinks[0].focus()
      }
    })

    navLinks[0].addEventListener("keydown", (e) => {
      if (e.key === "Tab" && e.shiftKey && navMenu.classList.contains("active")) {
        e.preventDefault()
        navLinks[navLinks.length - 1].focus()
      }
    })
  }
})

// ===== LAZY LOADING PARA IMÁGENES =====
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[src*="placeholder"]')

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "0"
        img.style.transition = "opacity 0.3s ease-in-out"

        setTimeout(() => {
          img.style.opacity = "1"
        }, 100)

        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
})

// ===== AGREGAR ESTILOS PARA NOTIFICACIONES =====
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 0.25rem;
            transition: background-color 0.2s ease;
        }
        
        .notification-close:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `
  document.head.appendChild(style)
})
