---
title: devtools.panels.ElementsPanel.setExpression()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Bewertet einen Ausdruck im Kontext der inspizierten Seite und zeigt das Ergebnis im Seitenleistenbereich der Erweiterung an.

Der Ausführungskontext des Ausdrucks ist derselbe wie bei [`inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval).

JSON-Objekte und DOM-Knoten werden als erweiterbarer Baum angezeigt, wie im [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. Sie können optional eine `rootTitle`-Zeichenfolge angeben: Diese wird als Titel der Wurzel des Baums angezeigt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let evaluating = browser.devtools.panels.setExpression(
  expression,       // string
  rootTitle         // string
)
```

### Parameter

- `expression`
  - : `string`. Der zu bewertende Ausdruck.
- `rootTitle` {{optional_inline}}
  - : string. Der Titel der Wurzel des Baums, in dem die Ergebnisse angezeigt werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald der Ausdruck ausgewertet wurde.

## Beispiele

Dieser Code erstellt einen Seitenleistenbereich, der den [`tagName`](/de/docs/Web/API/Element/tagName) des aktuell ausgewählten Elements anzeigt:

```js
function onCreated(sidebarPane) {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    const exp = "$0 && $0.tagName";
    const title = "Selected Element tagName";
    sidebarPane.setExpression(exp, title);
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.
