---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`disconnect()`** des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces trennt ein angegebenes föderiertes Anmeldekonto von dem {{Glossary("Identity_provider", "IdP")}}, der zum Abrufen des Anmeldedatensatzes verwendet wurde.

Anschließend erfordert die Nutzung dieses Kontos für eine föderierte Anmeldung, dass der föderierte Anmeldeprozess erneut gestartet wird.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Kontohinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [Disconnect-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — zum Beispiel eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der Konto-ID übereinstimmen, die vom [kontolisten-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellt wird.
    - `clientId`
      - : Ein String, der die Client-ID des {{Glossary("Relying_party", "RP")}} angibt, wie sie in der `providers`-Eigenschaft [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid) während der Anmeldung angegeben ist.
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt, wie sie in der `providers`-Eigenschaft [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl) während der Anmeldung angegeben ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder der `disconnect_endpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Browser keine Verbindung zum IdP herstellen kann.
    - Die Anfrage durch eine [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} untersagt ist.
    - Ein anderer `disconnect()`-Aufruf früher gemacht wurde, der noch nicht abgeschlossen ist.
    - Die FedCM-API global deaktiviert ist.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das eingebettete `<iframe>` keine entsprechend gesetzte {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) hat, um die Verwendung von `disconnect()` zu ermöglichen oder wenn die FedCM-API global durch eine Richtlinie im Top-Level-Dokument deaktiviert ist.

## Beispiele

### Grundlegende Nutzung von `disconnect()`

Der RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem er `disconnect()` aufruft. Diese Funktion kann von einem Top-Level-RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Disconnect-Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
