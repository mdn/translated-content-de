---
title: "AuthenticatorAssertionResponse: signature-Eigenschaft"
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signature`**-Eigenschaft des schreibgeschützten {{domxref("AuthenticatorAssertionResponse")}}-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt, welches die Signatur des Authenticators für sowohl {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} als auch einen SHA-256-Hash der Client-Daten ({{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}) ist.

Diese Signatur wird als Teil der Antwort an den Server gesendet, um eine Überprüfung durchzuführen. Sie liefert den Nachweis, dass ein Authenticator den privaten Schlüssel besitzt, der zur Erzeugung der Berechtigung verwendet wurde.

## Wert

Ein {{jsxref("ArrayBuffer")}}-Objekt, welches die Signatur des Authenticators (unter Verwendung seines privaten Schlüssels) für sowohl {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} als auch einen vom Client bereitgestellten SHA-256-Hash seiner Daten (die Herausforderung, der Ursprung usw. und verfügbar von {{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}) ist.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
