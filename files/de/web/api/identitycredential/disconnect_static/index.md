---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`disconnect()`** statische Methode des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces trennt ein angegebenes föderiertes Anmeldekonto von dem {{Glossary("Identity_provider", "IdP")}}, der verwendet wurde, um das Anmeldedaten zu erhalten.

Danach erfordert die Nutzung dieses Kontos für eine föderierte Anmeldung, dass der Anmeldeprozess erneut gestartet wird.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Kontohinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — beispielsweise eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der Konto-ID übereinstimmen, die vom [Kontolistenendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) angegeben wird.
    - `clientId`
      - : Ein String, der den Client-Bezeichner des {{Glossary("Relying_party", "RP")}} angibt, wie in der `providers` [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid)-Eigenschaft während der Anmeldung spezifiziert.
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt, wie in der `providers` [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl)-Eigenschaft während der Anmeldung spezifiziert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} erfüllt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder den `disconnect_enpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Der Browser keine Verbindung zum IdP herstellen kann.
    - Die Anfrage durch einen [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} verboten ist.
    - Ein anderer `disconnect()`-Aufruf zuvor gemacht wurde, der noch nicht gelöst wurde.
    - Die FedCM API global deaktiviert wurde.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das einbettende `<iframe>` keine gesetzte {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) hat, um die Verwendung von `disconnect()` zu erlauben oder wenn die FedCM API global durch eine auf dem Top-Level-Dokument gesetzte Richtlinie deaktiviert ist.

## Beispiele

### Grundlegende `disconnect()`-Nutzung

Der RP kann ein angegebenes föderiertes Anmeldekonto von dem zugehörigen IdP trennen, indem er `disconnect()` aufruft. Diese Funktion kann aus einem Top-Level RP-Frame heraus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Weitere Details zur zugrundeliegenden HTTP-Kommunikation finden Sie unter [Der Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
