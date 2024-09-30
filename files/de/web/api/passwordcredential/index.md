---
title: PasswordCredential
slug: Web/API/PasswordCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`PasswordCredential`**-Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) bietet Informationen über ein Benutzername/Passwort-Paar. In unterstützten Browsern kann eine Instanz dieser Klasse im `credential`-Mitglied des `init`-Objekts für globales [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden.

> [!NOTE]
> Dieses Interface ist auf oberste Kontexte beschränkt und kann nicht innerhalb eines {{HTMLElement("iframe")}} verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) {{Experimental_Inline}}
  - : Erstellt ein neues `PasswordCredential`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`PasswordCredential.iconURL`](/de/docs/Web/API/PasswordCredential/iconURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenkette, die eine URL enthält, die auf ein Bild für ein Symbol verweist. Dieses Bild ist für die Anzeige in einem Anmeldeauswahl-Dialog gedacht. Die URL muss ohne Authentifizierung zugänglich sein.
- [`PasswordCredential.name`](/de/docs/Web/API/PasswordCredential/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine menschenlesbare Zeichenkette, die einen öffentlichen Namen für die Anzeige in einem Anmeldeauswahl-Dialog bietet.
- [`PasswordCredential.password`](/de/docs/Web/API/PasswordCredential/password) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenkette, die das Passwort der Anmeldedaten enthält.

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
