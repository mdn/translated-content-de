---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzen Sie den Standardsvorschlag, der in der Adressleiste angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

Sobald der Benutzer Ihr Schlüsselwort eingegeben und begonnen hat, mit Ihrer Erweiterung zu interagieren, wird der Standardsvorschlag immer an erster Stelle in der Liste erscheinen. Anders als die Vorschläge, die Sie in {{WebExtAPIRef("omnibox.onInputChanged")}} liefern, kann dieses Element nicht ausgewählt werden. Verwenden Sie es, um dem Benutzer Hinweise zu geben, was er eingeben soll und was er erwarten kann, zu sehen.

## Syntax

```js-nolint
browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameter

- `suggestion`
  - : `object`. Ein Objekt, das eine einzelne Zeichenfolgeigenschaft `description` enthält, die als erstes Element in der Liste angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

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
> Diese API basiert auf der [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
