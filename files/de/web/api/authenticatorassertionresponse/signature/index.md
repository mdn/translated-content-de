---
title: "AuthenticatorAssertionResponse: signature-Eigenschaft"
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`signature`**-Eigenschaft der [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Schnittstelle ist ein {{jsxref("ArrayBuffer")}}-Objekt, das die Signatur des Authentikators für sowohl [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) als auch einen SHA-256-Hash der Client-Daten ([`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) ist.

Diese Signatur wird als Teil der Antwort an den Server zur Überprüfung gesendet. Sie stellt den Nachweis dar, dass ein Authentikator den privaten Schlüssel besitzt, der zur Erstellung der Anmeldedaten verwendet wurde.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das die Signatur des Authentikators (unter Verwendung seines privaten Schlüssels) sowohl für [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) als auch einen vom Client für seine Daten (die Herausforderung, der Ursprung usw., verfügbar über [`AuthenticatorAssertionResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) bereitgestellten SHA-256-Hash ist.

## Beispiele

Sehen Sie sich [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
