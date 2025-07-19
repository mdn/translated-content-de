---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: 7348ad4bf0fa7351041e9a3661c8a2bd2659d6e5
---

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt, das in einem privilegierten Geltungsbereich definiert ist, in einen [strukturierten Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) in einem weniger privilegierten Geltungsbereich zu verwandeln. Sie gibt eine Referenz auf den Klon zurück:

```js
const clonedObject = cloneInto(myObject, targetWindow);
```

Sie können dann den Klon einem Objekt im Zielbereich als "expando"-Eigenschaft zuweisen, und Skripte, die in diesem Bereich laufen, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegiertem Code, wie einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie einem Webseitenskript, zu teilen.

## Syntax

```js-nolint
let clonedObject = cloneInto(
  obj,               // object
  targetScope,       // object
  options            // optional object
);
```

### Parameter

- `obj`
  - : `object`. Das zu klonende Objekt.
- `targetScope`
  - : `object`. Das Objekt, an das das Objekt angehängt werden soll.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `cloneFunctions` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Funktionen des Objekts geklont werden sollen. Standardmäßig `false`. Geklonte Funktionen haben die gleichen Semantiken wie Funktionen, die mit [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) exportiert werden. Siehe [Klonen von Objekten, die Funktionen enthalten](#klonen_von_objekten,_die_funktionen_enthalten). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Gibt an, ob DOM-Objekte per Referenz statt durch Klonen übergeben werden sollen. DOM-Objekte sind normalerweise nicht klonbar. Standardmäßig `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Inhaltsskript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

```js
// content script
const addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Skripte, die in der Seite laufen, können auf das Objekt zugreifen:

```js
// page script
button.addEventListener(
  "click",
  () => {
    console.log(window.addonScriptObject.greeting); // "hello from your extension"
  },
  false,
);
```

Natürlich müssen Sie den Klon nicht dem Fenster selbst zuweisen; Sie können ihn einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können es auch an eine Funktion übergeben, die im Seitenskript definiert ist. Angenommen, das Seitenskript definiert eine Funktion wie diese:

```js
// page script
function foo(greeting) {
  console.log(`they said: ${greeting.message}`);
}
```

Das Inhaltsskript kann ein Objekt definieren, es klonen und in diese Funktion übergeben:

```js
// content script
const addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Klonen von Objekten, die Funktionen enthalten

Wenn das zu klonende Objekt Funktionen enthält, müssen Sie das Flag `{ cloneFunctions: true }` übergeben, sonst erhalten Sie einen Fehler. Wenn Sie dieses Flag übergeben, werden die Funktionen im Objekt mit demselben Mechanismus geklont, der in [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) verwendet wird:

```js
// content script
const addonScriptObject = {
  greetMe() {
    alert("hello from your extension");
  },
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  cloneFunctions: true,
});
```

```js
// page script
const test = document.getElementById("test");
test.addEventListener(
  "click",
  () => {
    window.addonScriptObject.greetMe();
  },
  false,
);
```

### Klonen von Objekten, die DOM-Elemente enthalten

Standardmäßig schlägt der Klonvorgang mit einem Fehler fehl, wenn das zu klonende Objekt Objekte enthält, die von C++ reflektiert werden, wie DOM-Elemente. Wenn Sie das Flag `{ wrapReflectors: true }` übergeben, enthält das geklonte Objekt diese Objekte:

```js
// content script
const addonScriptObject = {
  body: window.document.body,
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  wrapReflectors: true,
});
```

```js
// page script
const test = document.getElementById("test");
test.addEventListener(
  "click",
  () => {
    console.log(window.addonScriptObject.body.innerHTML);
  },
  false,
);
```

Der Zugriff auf diese Objekte im Zielbereich unterliegt den normalen [Skript-Sicherheitsprüfungen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
