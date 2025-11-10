---
title: IdentityCredentialError
slug: Web/API/IdentityCredentialError
l10n:
  sourceCommit: f1251a98115e7a6d566331512256dcbbc4cf7c24
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`IdentityCredentialError`** Interface der [FedCM API](/de/docs/Web/API/FedCM_API) beschreibt einen Authentifizierungsfehler, der darauf hinweist, dass der Benutzeragent nach der Anforderung eines föderierten Kontos durch den Benutzer keine Identitätsbestätigung erhalten hat. Dies kann passieren, wenn der Client nicht autorisiert ist oder der Server vorübergehend nicht verfügbar ist.

Browser können diesen Fehlertyp verwenden, um die Fehlermeldung in der Benutzeroberfläche anzuzeigen.

{{InheritanceDiagram}}

## Konstruktor

- [`IdentityCredentialError()`](/de/docs/Web/API/IdentityCredentialError/IdentityCredentialError) {{experimental_inline}}
  - : Erstellt eine neue Instanz des `IdentityCredentialError` Objekts.

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften erbt `IdentityCredentialError` Eigenschaften von seinem Elternteil, [`DOMException`](/de/docs/Web/API/DOMException)_.

- [`error`](/de/docs/Web/API/IdentityCredentialError/error) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String. Dies kann entweder einer der in der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) aufgeführten Werte sein oder ein beliebiger String.
- [`url`](/de/docs/Web/API/IdentityCredentialError/url) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine URL, die auf menschenlesbare Informationen über den Fehler verweist, um Benutzern anzuzeigen, wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert werden kann.

## Beispiele

```js
try {
  const cred = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://idp.example/manifest.json",
          clientId: "1234",
        },
      ],
    },
  });
} catch (e) {
  const error = e.error;
  const url = e.url;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [ID Assertion Error Responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
