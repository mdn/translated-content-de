---
title: "AuthenticatorAssertionResponse: authenticatorData-Eigenschaft"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

Die **`authenticatorData`**-Eigenschaft der {{domxref("AuthenticatorAssertionResponse")}}-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der Informationen vom Authenticator enthält, wie z.B. den Relying Party ID Hash (rpIdHash), einen Signaturzähler, den Nachweis der Benutzerpräsenz, Benutzerverifikationsflags und alle vom Authenticator verarbeiteten Erweiterungen.

## Wert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, das die in [Authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärte Datenstruktur enthält.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
