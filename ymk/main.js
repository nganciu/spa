window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('is-scrolling')
    } else {
      document.querySelector('header').classList.remove('is-scrolling')
    }
  })

  const menu_btn = document.querySelector('.hamburger')
  const mobile_menu = document.querySelector('.mobile-nav')

  menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })

  mobile_menu.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  })

  const viewGalleryBtn = document.querySelector('#view-gallery')

  viewGalleryBtn.addEventListener('click', () => {
    const hiddenGalleryItems = document.querySelectorAll(
      '.gallery-item.hidden-item',
    )

    hiddenGalleryItems.forEach(item => {
      item.classList.remove('hidden-item')
    })

    viewGalleryBtn.style.display = 'none'
    return false
  })

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwiEHNX5uFFI8XoXDFJs86q1sdsQXUXdRl9RodDmI7rsTeqdPgiCQFnoRC3nAeDRZHl/exec'
  const form = document.forms['submit-to-GDrive']

  form.addEventListener('submit', async e => {
    e.preventDefault()

    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      document.querySelector('.message-success').removeAttribute('hidden')
      console.log('Success!')
    } catch (error) {
      console.error('Error!', error.message)
      document.querySelector('.message-error').removeAttribute('hidden')
    } finally {
      const hideOnSubmit = document.querySelectorAll('.hide-on-submit')
      hideOnSubmit.forEach(element => element.setAttribute('hidden', ''))
      document.querySelector('#contact-form').style.display = 'none'
    }
  })
}
