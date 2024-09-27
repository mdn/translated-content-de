---
title: "AuthenticatorAssertionResponse: authenticatorData-Eigenschaft"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

Die **`authenticatorData`**-Eigenschaft des [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Interfaces gibt einen {{jsxref("ArrayBuffer")}} zurück, der Informationen vom Authenticator enthält, wie den Relying Party ID Hash (rpIdHash), einen Signaturzähler, einen Test der Benutzerpräsenz, Benutzerauthentifizierungsflags und alle vom Authenticator verarbeiteten Erweiterungen.

## Wert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, der die in [Authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erläuterte Datenstruktur enthält.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
