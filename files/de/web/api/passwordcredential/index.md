---
title: PasswordCredential
slug: Web/API/PasswordCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`PasswordCredential`**-Schnittstelle der [Credential Management API](/de/docs/Web/API/Credential_Management_API) bietet Informationen über ein Benutzername/Passwort-Paar. In unterstützenden Browsern kann eine Instanz dieser Klasse im `credential`-Mitglied des `init`-Objekts für globales [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden.

> [!NOTE]
> Diese Schnittstelle ist auf oberste Ebenen beschränkt und kann nicht von einem {{HTMLElement("iframe")}} aus verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) {{Experimental_Inline}}
  - : Erstellt ein neues `PasswordCredential`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`PasswordCredential.iconURL`](/de/docs/Web/API/PasswordCredential/iconURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der eine URL enthält, die auf ein Bild für ein Symbol verweist. Dieses Bild ist für die Anzeige in einem Anmeldewähler vorgesehen. Die URL muss ohne Authentifizierung zugänglich sein.
- [`PasswordCredential.name`](/de/docs/Web/API/PasswordCredential/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein menschenlesbarer String, der einen öffentlichen Namen für die Anzeige in einem Anmeldewähler bereitstellt.
- [`PasswordCredential.password`](/de/docs/Web/API/PasswordCredential/password) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der das Passwort der Berechtigung enthält.

## Instanz-Methoden

Keine.

## Beispiele

```js
const cred = new PasswordCredential({
  id,
  password,
  name,
  iconURL,
});

navigator.credentials.store(cred).then(() => {
  // Do something else.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
