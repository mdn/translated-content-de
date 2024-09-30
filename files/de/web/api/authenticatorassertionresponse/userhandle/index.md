---
title: "AuthenticatorAssertionResponse: userHandle-Eigenschaft"
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`userHandle`**-Eigenschaft des Lesezugriffs des [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt, das einen undurchsichtigen Bezeichner für den angegebenen Benutzer bereitstellt. Ein solcher Bezeichner kann vom Server der vertrauenden Partei verwendet werden, um das Benutzerkonto mit den entsprechenden Anmeldeinformationen und anderen Daten zu verknüpfen.

Dieser Wert wird als `user.id` in den Optionen angegeben, die dem ursprünglichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf übergeben werden.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das einen Bezeichner für den aktuellen Benutzer darstellt. Dieser ist nicht für den Menschen lesbar. Die vertrauende Partei sollte sicherstellen, dass die in den ursprünglichen `create()`-Aufruf übergebene `user.id` **keine** persönlich identifizierbaren Informationen (wie zum Beispiel Benutzername, E-Mail oder Telefonnummer) enthält.

Für [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufe, die mit nicht-leeren `allowCredentials`-Eigenschaften erfolgen, kann das zurückgegebene `userHandle` null sein.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), das den Wert dieser Eigenschaft festlegt
