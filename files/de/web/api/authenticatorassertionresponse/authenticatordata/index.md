---
title: "AuthenticatorAssertionResponse: authenticatorData-Eigenschaft"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

Die schreibgeschützte Eigenschaft **`authenticatorData`** der Schnittstelle [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) gibt einen {{jsxref("ArrayBuffer")}} zurück. Dieser enthält Informationen vom Authenticator, darunter den Relying Party ID Hash (rpIdHash), einen Signaturzähler, Angaben zur Anwesenheit und Verifizierung des Benutzers sowie alle vom Authenticator verarbeiteten Erweiterungen.

## Wert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength", "byteLength")}} von mindestens 37 Bytes, der die unter [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erläuterte Datenstruktur enthält.

## Beispiele

Ein ausführliches Beispiel finden Sie unter [Anmeldedaten mit öffentlichem Schlüssel abrufen](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
