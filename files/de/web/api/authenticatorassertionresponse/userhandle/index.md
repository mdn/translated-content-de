---
title: "AuthenticatorAssertionResponse: userHandle-Eigenschaft"
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`userHandle`**-Schreibgeschützte Eigenschaft des {{domxref("AuthenticatorAssertionResponse")}}-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt, das einen undurchsichtigen Bezeichner für den gegebenen Benutzer bereitstellt. Ein solcher Bezeichner kann vom Server der vertrauenden Partei verwendet werden, um das Benutzerkonto mit den entsprechenden Anmeldedaten und anderen Daten zu verknüpfen.

Dieser Wert ist als `user.id` in den Optionen angegeben, die dem ursprünglichen {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}-Aufruf übergeben wurden.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das einen Bezeichner für den aktuellen Benutzer darstellt. Dieser ist nicht dafür gedacht, von Menschen gelesen zu werden. Die vertrauende Partei sollte sicherstellen, dass die `user.id`, die in den ursprünglichen `create()`-Aufruf übergeben wird, **keine** personenbezogenen Informationen enthält (zum Beispiel Benutzername, E-Mail oder Telefonnummer).

Für {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}-Aufrufe, die mit nicht-leeren `allowCredentials`-Eigenschaften gemacht werden, kann die zurückgegebene `userHandle` null sein.

## Beispiele

Sehen Sie sich [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CredentialsContainer.create()")}}, das den Wert dieser Eigenschaft festlegt
