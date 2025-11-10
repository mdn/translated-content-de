---
title: "AuthenticatorAssertionResponse: authenticatorData-Eigenschaft"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

Die **`authenticatorData`**-Eigenschaft des [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Interfaces gibt ein {{jsxref("ArrayBuffer")}} zurück, das Informationen vom Authentifikator enthält, wie den Relying Party ID Hash (rpIdHash), einen Signaturzähler, einen Test der Benutzeranwesenheit, Benutzerüberprüfungs-Flags und alle vom Authentifikator verarbeiteten Erweiterungen.

## Wert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength", "byteLength")}} von mindestens 37 Bytes, das die Datenstruktur enthält, die in [Authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärt wird.

## Beispiele

Siehe [Abrufen eines öffentlichen Schlüssel-Zertifikats](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
