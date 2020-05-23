const apiKey = '33aZelv9bHQibSXgGIpZciYy7c_bcbKzfMEIqXtWzQRHqPfcSCWD61FL9y6TqIg20_NGc1ij8wLNa7hM1BWwICUv7XX52TpZIT9nrs5bGEgH8ajSXBuO0RrLp5bJXnYx';

class Yelp {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, `Bearer ${apiKey}`)
            .then(response =>
                return response.json()).then(jsonResponse => {
                if (jsonResponse.hasOwnProperty('businesses')) {
                    jsonResponse.businesses.map(business =>
                        return {
                            id: business.id,
                            imageSrc: business.imageSrc,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount,
                        };
                    )
                };
            }
        );
    }
};

export default Yelp;
