---
title: PasswordCredential
slug: Web/API/PasswordCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`PasswordCredential`** Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) bietet Informationen über ein Benutzername/Passwort-Paar. In unterstützenden Browsern kann eine Instanz dieser Klasse im `credential`-Mitglied des `init`-Objekts für globales {{domxref("Window/fetch", "fetch()")}} übergeben werden.

> [!NOTE]
> Dieses Interface ist auf Kontexte der obersten Ebene beschränkt und kann nicht von einem {{HTMLElement("iframe")}} verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PasswordCredential.PasswordCredential()","PasswordCredential()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `PasswordCredential` Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, {{domxref("Credential")}}._

- {{domxref("PasswordCredential.iconURL")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der eine URL enthält, die auf ein Bild für ein Icon verweist. Dieses Bild ist zur Anzeige in einem Anmelde-Auswahl-Dialog gedacht. Die URL muss ohne Authentifizierung zugänglich sein.
- {{domxref("PasswordCredential.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein menschenlesbarer String, der einen öffentlichen Namen zur Anzeige in einem Anmelde-Auswahl-Dialog bietet.
- {{domxref("PasswordCredential.password")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der das Passwort der Anmeldeinformation enthält.

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
