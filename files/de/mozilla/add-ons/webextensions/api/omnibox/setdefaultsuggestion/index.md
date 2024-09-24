---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzen Sie den Standardsuchvorschlag, der in der Dropdown-Liste der Adressleiste erscheint, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

Sobald der Benutzer Ihr Schlüsselwort eingegeben und begonnen hat, mit Ihrer Erweiterung zu interagieren, erscheint der Standardsuchvorschlag immer an erster Stelle in der Dropdown-Liste. Im Gegensatz zu den Vorschlägen, die Sie in {{WebExtAPIRef("omnibox.onInputChanged")}} bereitstellen, kann dieses Element nicht ausgewählt werden. Verwenden Sie es, um dem Benutzer eine Anleitung zu geben, was er eingeben soll und was er erwarten kann zu sehen.

## Syntax

```js-nolint
browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameter

- `suggestion`
  - : `object`. Ein Objekt, das eine einzelne Zeichenfolgen-Eigenschaft `description` enthält, die als erstes Element in der Dropdown-Liste angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
