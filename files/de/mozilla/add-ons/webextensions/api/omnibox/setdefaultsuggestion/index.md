---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legen Sie den Standardvorschlag fest, der in der Dropdown-Liste der Adressleiste erscheint, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

Sobald der Benutzer Ihr Schlüsselwort eingegeben hat und mit Ihrer Erweiterung zu interagieren beginnt, wird der Standardvorschlag immer zuerst in der Dropdown-Liste angezeigt. Im Gegensatz zu den Vorschlägen, die Sie in {{WebExtAPIRef("omnibox.onInputChanged")}} bereitstellen, kann dieses Element nicht ausgewählt werden. Verwenden Sie es, um dem Benutzer einige Hinweise darauf zu geben, was er eingeben kann und was er zu sehen erwarten kann, wenn er dies tut.

## Syntax

```js-nolint
browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameter

- `suggestion`
  - : `object`. Ein Objekt mit einer einzelnen Zeichenfolgen-Eigenschaft `description`, die als erstes Element im Dropdown angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

### Rückgabewert

Keiner.

## Beispiele

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
