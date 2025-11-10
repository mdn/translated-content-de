---
title: "AuthenticatorAssertionResponse: signature-Eigenschaft"
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`signature`**-Eigenschaft des
[`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Interfaces ist ein {{jsxref("ArrayBuffer")}}-
Objekt, das die Signatur des Authenticator für sowohl die
[`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) als auch einen SHA-256-Hash der
Client-Daten
([`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) darstellt.

Diese Signatur wird als Teil der Antwort an den Server zur Kontrolle gesendet. Sie bietet
den Beweis, dass ein Authenticator den privaten Schlüssel besitzt, der zur Erstellung der
Anmeldung verwendet wurde.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das die Signatur des Authenticators (mit seinem
privaten Schlüssel) für sowohl [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)
als auch einen vom Client bereitgestellten SHA-256-Hash seiner Daten (die Herausforderung, die Herkunft, usw. und
verfügbar von
[`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) darstellt.

## Beispiele

Siehe [Abrufen eines öffentlichen Schlüssel-Zertifikats](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
