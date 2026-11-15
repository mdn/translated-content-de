---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
l10n:
  sourceCommit: a15956e15e80eeb4641bb508c4b0f32940b8301d
---

Legt den Standardvorschlag fest, der in der Dropdown-Liste der Adressleiste angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

Nachdem der Benutzer Ihr Schlüsselwort eingegeben hat und beginnt, mit Ihrer Erweiterung zu interagieren, erscheint der Standardvorschlag an erster Stelle in der Dropdown-Liste. Anders als die Vorschläge, die Sie in {{WebExtAPIRef("omnibox.onInputChanged")}} bereitstellen, kann dieser Eintrag nicht ausgewählt werden. Verwenden Sie ihn, um dem Benutzer zu zeigen, was er eingeben kann und welche Ergebnisse er erwarten kann.

## Syntax

```js-nolint
let settingDefaultSuggestion = browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameter

- `suggestion`
  - : `object`. Ein Objekt mit der String-Eigenschaft `description`, die als erster Eintrag in der Dropdown-Liste angezeigt wird, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die ohne Argumente erfüllt wird, sobald der Standardvorschlag festgelegt ist.

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
