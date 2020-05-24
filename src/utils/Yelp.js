const apiKey = '33aZelv9bHQibSXgGIpZciYy7c_bcbKzfMEIqXtWzQRHqPfcSCWD61FL9y6TqIg20_NGc1ij8wLNa7hM1BWwICUv7XX52TpZIT9nrs5bGEgH8ajSXBuO0RrLp5bJXnYx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: { Authorization: `Bearer ${apiKey}`}
            }).then(response => response.json())
            .then(jsonResponse => {
                if(jsonResponse.hasOwnProperty('businesses')){
                    const businesses = jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount
                        }
                    })

                    return businesses;
                }else{
                    return [];
                };

            })
    }
};
