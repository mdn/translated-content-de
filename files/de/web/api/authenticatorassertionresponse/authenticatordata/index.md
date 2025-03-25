---
title: "AuthenticatorAssertionResponse: authenticatorData-Eigenschaft"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

Die **`authenticatorData`**-Eigenschaft der [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der Informationen vom Authenticator enthält, wie den Relying Party ID Hash (rpIdHash), einen Signaturzähler, einen Test für die Anwesenheit des Benutzers, Benutzerverifizierungsflags und alle vom Authenticator verarbeiteten Erweiterungen.

## Wert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, der die in [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erläuterte Datenstruktur enthält.

## Beispiele

Siehe [Abrufen eines Public Key Credentials](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
