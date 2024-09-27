---
title: "AuthenticatorAssertionResponse: signature-Eigenschaft"
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`signature`**-Eigenschaft der [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Schnittstelle ist ein {{jsxref("ArrayBuffer")}}-Objekt, welches die Signatur des Authentifikators für sowohl [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) als auch einen SHA-256-Hash der Client-Daten ([`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) darstellt.

Diese Signatur wird als Teil der Antwort an den Server zur Kontrolle gesendet. Sie liefert den Nachweis, dass ein Authentifikator tatsächlich den privaten Schlüssel besitzt, der zur Erstellung der Anmeldeinformation verwendet wurde.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das die Signatur des Authentifikators (unter Verwendung seines privaten Schlüssels) für sowohl [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) als auch einen vom Client bereitgestellten SHA-256-Hash seiner Daten (die Herausforderung, der Ursprung, etc. und verfügbar unter [`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) darstellt.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
