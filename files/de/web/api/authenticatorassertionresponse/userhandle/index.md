---
title: "AuthenticatorAssertionResponse: userHandle-Eigenschaft"
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`userHandle`** schreibgeschützte Eigenschaft der [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Schnittstelle ist ein {{jsxref("ArrayBuffer")}}-Objekt, das einen undurchsichtigen Bezeichner für den angegebenen Benutzer bereitstellt. Ein solcher Bezeichner kann vom Server der vertrauenden Partei verwendet werden, um das Benutzerkonto mit den entsprechenden Anmeldedaten und anderen Daten zu verknüpfen.

Dieser Wert wird als `user.id` in den Optionen angegeben, die beim ursprünglichen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben werden.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das einen Bezeichner für den aktuellen Benutzer darstellt. Dieser ist nicht dazu gedacht, von Menschen gelesen zu werden. Die vertrauende Partei sollte sicherstellen, dass die in den ursprünglichen `create()`-Aufruf übermittelte `user.id` **keine** persönlichen Informationen (wie Benutzername, E-Mail oder Telefonnummer) enthält.

Für [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufe mit einem nicht-leeren `allowCredentials`-Eigenschaften kann die zurückgegebene `userHandle` null sein.

## Beispiele

Sehen Sie sich [Benutzeranmeldung mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), das den Wert dieser Eigenschaft festlegt
