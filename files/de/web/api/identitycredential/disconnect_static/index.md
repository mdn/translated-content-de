---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`disconnect()`** statische Methode der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Schnittstelle trennt ein angegebenes föderiertes Anmeldekonto von dem verwendeten {{Glossary("Identity_provider", "IdP")}}, um den Berechtigungsnachweis zu erhalten.

Danach erfordert die Verwendung dieses Kontos für eine föderierte Anmeldung, dass der Anmeldeprozess erneut gestartet wird.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Kontohinweis angibt, den der IdP nutzt, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — z.B. eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der Konto-ID übereinstimmen, die vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) angegeben wurde.
    - `clientId`
      - : Ein String, der die Client-ID des {{Glossary("Relying_party", "RP")}} angibt, wie im `providers` [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid) Eigenschaft während der Anmeldung spezifiziert.
    - `configURL`
      - : Ein String, der die Konfigurationsdatei-URL des IdP angibt, wie im `providers` [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl) Eigenschaft während der Anmeldung spezifiziert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} erfüllt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder den `disconnect_endpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Browser nicht in der Lage ist, eine Verbindung zum IdP herzustellen.
    - Die Anfrage durch eine [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} untersagt wird.
    - Ein anderer `disconnect()` Aufruf vorher gemacht wurde, der noch nicht aufgelöst ist.
    - Die FedCM API wurde global deaktiviert.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das eingebettete `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Verwendung von `disconnect()` zu erlauben oder wenn die FedCM API global durch eine auf das oberste Dokument gesetzte Richtlinie deaktiviert wurde.

## Beispiele

### Grundlegende `disconnect()` Nutzung

Der RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem er `disconnect()` aufruft. Diese Funktion kann von einem Top-Level RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()` Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei einfügen. Siehe [Der Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrundeliegenden HTTP-Kommunikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
