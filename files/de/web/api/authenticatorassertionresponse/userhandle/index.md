---
title: "AuthenticatorAssertionResponse: userHandle-Eigenschaft"
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`userHandle`**-Eigenschaft des [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Interfaces ist eine schreibgeschützte {{jsxref("ArrayBuffer")}}-Objekt, das einen opaken Bezeichner für den gegebenen Benutzer bereitstellt. Ein solcher Bezeichner kann vom Server der vertrauenden Partei verwendet werden, um das Benutzerkonto mit den entsprechenden Anmeldedaten und anderen Daten zu verknüpfen.

Dieser Wert wird als `user.id` in den Optionen angegeben, die an den ursprünglichen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben werden.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das einen Bezeichner für den aktuellen Benutzer darstellt. Dieser ist nicht für die menschliche Lesbarkeit vorgesehen. Die vertrauende Partei sollte sicherstellen, dass die an den ursprünglichen Aufruf von `create()` übergebene `user.id` **keine** persönlich identifizierbaren Informationen enthält (zum Beispiel Benutzername, E-Mail oder Telefonnummer).

Für [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufe, die mit nicht leeren `allowCredentials`-Eigenschaften getätigt werden, kann der zurückgegebene `userHandle` null sein.

## Beispiele

Siehe [Abrufen eines Public Key Credential](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), das den Wert dieser Eigenschaft festlegt.
