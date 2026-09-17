---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das Interface **`AuthenticatorAttestationResponse`** der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Anmeldedatenregistrierung. Es enthält Informationen über die Anmeldedaten, die der Server benötigt, um WebAuthn-Assertions durchzuführen, beispielsweise deren Anmeldedaten-ID und öffentlichen Schlüssel.

Eine `AuthenticatorAttestationResponse`-Objektinstanz ist in der Eigenschaft [`response`](/de/docs/Web/API/PublicKeyCredential/response) eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das von einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wird.

Dieses Interface erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist auf Kontexte der obersten Ebene beschränkt. Die Verwendung seiner Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem übergeordneten Interface [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der Authenticator-Daten und eine Attestation-Anweisung für ein neues, vom Authenticator erzeugtes Schlüsselpaar enthält.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Diese von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) geerbte Eigenschaft enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authenticator übergeben werden, um diese Anmeldedaten zu erzeugen – also wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den an den Aufruf von `create()` übergebenen Optionen sowie einige vom Browser gesteuerte Informationen.

## Instanzmethoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die in der Eigenschaft [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) enthaltenen Authenticator-Daten enthält.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die DER-`SubjectPublicKeyInfo` der neuen Anmeldedaten enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/info/rfc5280/#section-4.1.2.7)), oder `null`, falls diese nicht verfügbar ist.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einer [COSE-Algorithmuskennung](https://www.iana.org/assignments/cose#algorithms) entspricht und den für die neuen Anmeldedaten verwendeten kryptografischen Algorithmus repräsentiert.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Strings zurück, die beschreiben, welche Transportmethoden (z. B. `usb`, `nfc`) vermutlich mit dem Authenticator unterstützt werden. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Ein detailliertes Beispiel finden Sie unter [Erstellen einer Anmeldedate mit öffentlichem Schlüssel](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): das Interface für den Antworttyp beim Abrufen bestehender Anmeldedaten
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): das übergeordnete Interface
