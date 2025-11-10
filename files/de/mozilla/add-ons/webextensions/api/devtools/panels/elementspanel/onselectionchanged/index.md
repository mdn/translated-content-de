---
title: onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Benutzer ein anderes Seitenelement zur Inspektion mit den Entwicklerwerkzeugen des Browsers auswählt, zum Beispiel durch Auswahl des Kontextmenüeintrags "Element untersuchen" in Firefox.

## Syntax

```js-nolint
browser.devtools.panels.elements.onSelectionChanged.addListener(listener)
browser.devtools.panels.elements.onSelectionChanged.removeListener(listener)
browser.devtools.panels.elements.onSelectionChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Argumente übergeben.

## Beispiele

Hören Sie auf Ereignisse für geänderte Auswahlen und protokollieren Sie den Textinhalt des neu ausgewählten Elements:

```js
function handleSelectedElement() {
  browser.devtools.inspectedWindow.eval("$0.textContent").then((result) => {
    console.log(result[0]);
  });
}

browser.devtools.panels.elements.onSelectionChanged.addListener(
  handleSelectedElement,
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools)-API.
