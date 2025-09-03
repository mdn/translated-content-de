---
title: IdentityCredentialError
slug: Web/API/IdentityCredentialError
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Die **`IdentityCredentialError`**-Schnittstelle der [FedCM API](/de/docs/Web/API/FedCM_API) beschreibt einen Authentifizierungsfehler, der darauf hinweist, dass der Benutzeragent keine Identitätsaussage erhalten hat, nachdem der Benutzer die Verwendung eines föderierten Kontos angefordert hat. Dies kann passieren, wenn der Client nicht autorisiert ist oder der Server vorübergehend nicht verfügbar ist, zum Beispiel.

Browser können diesen Fehlertyp verwenden, um die Fehlermeldung in der Benutzeroberfläche anzuzeigen.

{{InheritanceDiagram}}

## Konstruktor

- [`IdentityCredentialError()`](/de/docs/Web/API/IdentityCredentialError/IdentityCredentialError)
  - : Erstellt eine neue Instanz des `IdentityCredentialError`-Objekts.

## Instanz-Eigenschaften

_Zusätzlich zu den unten stehenden Eigenschaften erbt `IdentityCredentialError` Eigenschaften von seinem Elternobjekt, [`DOMException`](/de/docs/Web/API/DOMException)_.

- [`error`](/de/docs/Web/API/IdentityCredentialError/error) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String. Dies kann entweder einer der in der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) aufgeführten Werte sein oder ein beliebiger String.
- [`url`](/de/docs/Web/API/IdentityCredentialError/url) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine URL, die auf menschenlesbare Informationen über den Fehler verweist, um sie den Benutzern anzuzeigen, z. B. wie der Fehler behoben werden kann oder wie der Kundenservice kontaktiert werden kann.

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
- [ID-Aussagefehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
