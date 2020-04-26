import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image} from 'react-native';

const URL = 'http://localhost:3000/api/v1/codes';

const Home = () => {
  const [qRCodes, setQRCodes] = useState([]);

  const getQRCodes = useCallback(async () => {
    const response = await fetch(URL);
    const qrs = await response.json();

    if (response.ok) {
      setQRCodes(qrs.data);
    }
  }, []);

  useEffect(() => {
    getQRCodes();
  }, []);

  return (
    <View>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKjSURBVO3BQW7gSAwEwSxC//9yro88NSBI8noIRsQfrDGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1y8VASfpPKSRI6lS4JncpJEn6TyhPFGqVYoxRrlIuXqbwpCXeonKg8ofKmJLypWKMUa5RijXLxsSTcoXJHEk5UuiR0Kk8k4Q6VLxVrlGKNUqxRLoZROVHpktCp/MuKNUqxRinWKBfDJOFEZbJijVKsUYo1ysXHVP6SJHQqT6j8JcUapVijFGuUi5cl4f+k0iWhU+mS0KmcJOEvK9YoxRqlWKPEH/zDknCHymTFGqVYoxRrlPiDB5LQqXRJeJPKSRLuUDlJwptUvlSsUYo1SrFGufiYypeS0Kl0SThJQqfSqZwk4UTlJAmdyhPFGqVYoxRrlIuHVE6ScIdKl4RO5SQJncpJErok3KHSJeEkCZ3Km4o1SrFGKdYoFw8l4QmVE5U7VLok3KFyRxJOktCpdEnoVJ4o1ijFGqVYo1z8MpWTJHxJpUtCl4Q7VO5IwpeKNUqxRinWKPEH/7AknKicJKFTuSMJncr/qVijFGuUYo1y8VASfpNKp3KShBOVLgmdSpeETqVLQqfSJaFTeVOxRinWKMUa5eJlKm9KwkkSOpVO5Q6VNyXhJAmdyhPFGqVYoxRrlIuPJeEOlTcl4USlS8ITKnck4U3FGqVYoxRrlIthktCpnCShUzlJQpeETuUOlTcVa5RijVKsUS7WIypdEk5UvlSsUYo1SrFGufiYypdUTpJwRxI6lU7lLyvWKMUapVijXLwsCb8pCZ1Kp/JEEk5UOpWTJHQqbyrWKMUapVijxB+sMYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijfIfpYcH5aVnI3cAAAAASUVORK5CYII=',
        }}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
