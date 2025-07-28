---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`disconnect()`** statische Methode der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Schnittstelle trennt ein angegebenes föderiertes Anmeldekonto vom {{Glossary("Identity_provider", "IdP")}}, das zur Erlangung der Berechtigung verwendet wurde.

Danach erfordert die Verwendung dieses Kontos für eine föderierte Anmeldung, den Anmeldeprozess erneut zu starten.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Hinweis auf das Konto angibt, das der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — zum Beispiel eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der vom [Kontolistenendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellten Konto-ID übereinstimmen.
    - `clientId`
      - : Ein String, der die Client-ID des {{Glossary("Relying_party", "RP")}} angibt, wie im `providers` [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid) Attribut während der Anmeldung angegeben.
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt, wie im `providers` [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl) Attribut während der Anmeldung angegeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder den `disconnect_endpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Browser keine Verbindung zum IdP herstellen kann.
    - Die Anfrage durch eine [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} abgelehnt wird.
    - Ein anderer `disconnect()` Aufruf vorher gestellt wurde, der noch nicht aufgelöst wurde.
    - Die FedCM API global deaktiviert wurde.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das eingebettete `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Verwendung von `disconnect()` zu erlauben, oder wenn die FedCM API global durch eine auf das Top-Level-Dokument gesetzte Richtlinie deaktiviert ist.

## Beispiele

### Grundlegende `disconnect()` Nutzung

Der RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem er `disconnect()` aufruft. Diese Funktion kann aus einem Top-Level RP Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()` Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/en-US//docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der Trennungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
