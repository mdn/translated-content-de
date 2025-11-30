---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`disconnect()`** der Schnittstelle [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) trennt ein angegebenes föderiertes Anmeldekonto vom {{Glossary("Identity_provider", "IdP")}}, das verwendet wurde, um die Berechtigung zu erhalten.

Danach erfordert die Verwendung dieses Kontos für die föderierte Anmeldung, dass der föderierte Anmeldeprozess erneut gestartet wird.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Hinweis auf das Konto angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [Trennendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — beispielsweise eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der vom [Kontenlistenendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellten Konto-ID übereinstimmen.
    - `clientId`
      - : Ein String, der den Mandanten-Identifikator (Client ID) des {{Glossary("Relying_party", "RP")}} angibt, wie im `providers` [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid)-Eigentum während der Anmeldung angegeben.
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt, wie im `providers` [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl)-Eigentum während der Anmeldung angegeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder den `disconnect_endpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Browser nicht in der Lage ist, sich mit dem IdP zu verbinden.
    - Die Anfrage von einem [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} nicht erlaubt wird.
    - Ein anderes `disconnect()` zuvor aufgerufen wurde, das noch nicht abgeschlossen ist.
    - Die FedCM API global deaktiviert wurde.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das eingebettete `<iframe>` nicht über eine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verfügt, um die Nutzung von `disconnect()` zu erlauben, oder wenn die FedCM API global durch eine auf dem Top-Level-Dokument gesetzte Richtlinie deaktiviert ist.

## Beispiele

### Grundlegende Nutzung von `disconnect()`

Das RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem es `disconnect()` aufruft. Diese Funktion kann von einem Top-Level-RP-Frame aus aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Weitere Details zur zugrunde liegenden HTTP-Kommunikation finden Sie unter [Der Trennendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
