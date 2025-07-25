---
title: "IdentityCredential: disconnect() statische Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`disconnect()`** der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle trennt ein angegebenes föderiertes Anmeldekonto von dem {{Glossary("Identity_provider", "IdP")}}, der zur Erhalt der Berechtigung verwendet wurde.

Danach erfordert die Verwendung dieses Kontos für die föderierte Anmeldung, den föderierten Anmeldeprozess erneut zu starten.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein String, der einen Konto-Hinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann ein beliebiger String sein, solange der [disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann — beispielsweise eine E-Mail-Adresse oder Benutzer-ID. Dies muss nicht unbedingt mit der Konto-ID übereinstimmen, die vom [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellt wird.
    - `clientId`
      - : Ein String, der die Client-Identifikation des {{Glossary("Relying_party", "RP")}} spezifiziert, wie sie in der `providers`-Eigenschaft [`clientId`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid) bei der Anmeldung festgelegt ist.
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP spezifiziert, wie sie in der `providers`-Eigenschaft [`configURL`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl) bei der Anmeldung festgelegt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder der `disconnect_enpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Der Browser keine Verbindung zum IdP herstellen kann.
    - Die Anfrage durch eine [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}} untersagt wird.
    - Ein anderer `disconnect()`-Aufruf zuvor gemacht wurde, der noch nicht aufgelöst wurde.
    - Die FedCM API global deaktiviert wurde.
    - Die `configURL` des IdP weder sicher noch [potentiell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das eingebettete `<iframe>` nicht über eine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verfügt, um die Nutzung von `disconnect()` zu erlauben oder wenn die FedCM API global durch eine auf dem Hauptdokument festgelegte Richtlinie deaktiviert ist.

## Beispiele

### Grundlegende Verwendung von `disconnect()`

Der RP kann ein angegebenes föderiertes Anmeldekonto vom zugehörigen IdP trennen, indem er `disconnect()` aufruft. Diese Funktion kann aus einem Top-Level RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seiner Konfigurationsdatei enthalten. Siehe [Der disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) für weitere Details zur zugrunde liegenden HTTP-Kommunikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [API für föderiertes Credential-Management](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
