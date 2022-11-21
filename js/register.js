const principalImagePersonalization = document.querySelector(".personalization-main__principal-profile");

principalImagePersonalization.src = `../assets/personalization-profiles/profile-9.svg`

const profilesImages = document.querySelectorAll(".personalization-main__profiles-grid img")

profilesImages.forEach((profileImage) => {
    profileImage.addEventListener("click", () => {
        principalImagePersonalization.src = `../assets/personalization-profiles/profile-${profileImage.dataset.profileNumber}.svg`
    })
})