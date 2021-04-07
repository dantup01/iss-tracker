const issJson = () => {
  fetch("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then((data) => {
      const latitude = data.iss_position.latitude;
      const longitude = data.iss_position.longitude;
    });
}

export { issJson };
