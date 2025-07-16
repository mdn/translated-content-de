---
title: onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer ein anderes Seitenelement zur Inspektion mit den Entwicklertools des Browsers auswählt, zum Beispiel durch Auswahl des Kontextmenüpunktes "Element untersuchen" in Firefox.

## Syntax

```js-nolint
browser.devtools.panels.elements.onSelectionChanged.addListener(listener)
browser.devtools.panels.elements.onSelectionChanged.removeListener(listener)
browser.devtools.panels.elements.onSelectionChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Argumente übergeben.

## Beispiele

Hören Sie auf Ereignisse, bei denen die Auswahl geändert wurde, und protokollieren Sie den Textinhalt des neu ausgewählten Elements:

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
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.
