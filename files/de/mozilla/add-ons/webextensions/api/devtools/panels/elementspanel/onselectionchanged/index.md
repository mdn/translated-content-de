---
title: onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer ein anderes Seitenelement zur Inspektion mit den Entwicklerwerkzeugen des Browsers auswählt, zum Beispiel durch die Auswahl des Kontextmenüelements "Element untersuchen" in Firefox.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Argumente übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hören Sie auf Ereignisse der geänderten Auswahl und protokollieren Sie den Textinhalt des neu ausgewählten Elements:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
