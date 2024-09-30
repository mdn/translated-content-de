---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Standardsuchvorschlag, der im Dropdown-Menü der Adressleiste erscheint, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

Sobald der Benutzer Ihr Stichwort eingegeben und begonnen hat, mit Ihrer Erweiterung zu interagieren, erscheint der Standardsuchvorschlag immer als erstes im Dropdown-Menü. Im Gegensatz zu den Vorschlägen, die Sie in {{WebExtAPIRef("omnibox.onInputChanged")}} bereitstellen, kann dieser Eintrag nicht ausgewählt werden. Verwenden Sie ihn, um dem Benutzer Hinweise zu geben, was er eingeben sollte und was er erwarten kann zu sehen, wenn er dies tut.

## Syntax

```js-nolint
browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameter

- `suggestion`
  - : `object`. Ein Objekt, das eine einzelne Zeichenketteneigenschaft `description` enthält, welche als erster Eintrag im Dropdown-Menü angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

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
> Diese API basiert auf Chromiums [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
