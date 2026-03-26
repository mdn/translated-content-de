---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: d1d2fb19fa649240ce6e25c4d79e21d9a5f6de37
---

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt aus einem privilegierten Bereich zu nehmen und einen [strukturierten Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) davon in einem weniger privilegierten Bereich zu erstellen. Es gibt eine Referenz auf den Klon zurück:

```js
const clonedObject = cloneInto(myObject, targetWindow);
```

Sie können dann den Klon einem Objekt im Zielbereich als Expando-Eigenschaft zuweisen, und Skripte, die in diesem Bereich laufen, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegiertem Code, wie z.B. einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie z.B. einem Skript auf einer Webseite, zu teilen.

> [!NOTE]
> Sie können auch [`structuredClone`](/de/docs/Web/API/Window/structuredClone) verwenden, um strukturierte Klone zu erstellen. Ab Firefox 149 klont `targetWindow.structuredClone(value)` den Wert in das [Realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) des Ziel-Fensters.

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
  - : `object`. Das Objekt, an das das zu klonende Objekt angehängt wird.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `cloneFunctions` {{optional_inline}}
      - : `boolean`. Ob die Funktionen des Objekts geklont werden sollen. Standardmäßig `false`. Geklonte Funktionen haben die gleichen Semantiken wie Funktionen, die unter Verwendung von [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) exportiert wurden. Siehe [Klonen von Objekten, die Funktionen enthalten](#klonen_von_objekten,_die_funktionen_enthalten). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Ob DOM-Objekte durch Referenz statt durch Klonen weitergegeben werden sollen. DOM-Objekte sind normalerweise nicht klonbar. Standardmäßig `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Content-Skript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

```js
// content script
const addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Skripte, die auf der Seite laufen, können auf das Objekt zugreifen:

```js
// page script
button.addEventListener("click", () => {
  console.log(window.addonScriptObject.greeting); // "hello from your extension"
});
```

Natürlich müssen Sie den Klon nicht dem Fenster selbst zuweisen; Sie können ihn auch einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können ihn auch in eine im Seitenskript definierte Funktion übergeben. Angenommen, das Seitenskript definiert eine Funktion wie diese:

```js
// page script
function foo(greeting) {
  console.log(`they said: ${greeting.message}`);
}
```

Das Content-Skript kann ein Objekt definieren, es klonen und in diese Funktion übergeben:

```js
// content script
const addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Klonen von Objekten, die Funktionen enthalten

Wenn das zu klonende Objekt Funktionen enthält, müssen Sie das Flag `{ cloneFunctions: true }` übergeben, andernfalls erhalten Sie einen Fehler. Wenn Sie dieses Flag übergeben, werden die Funktionen im Objekt mit dem gleichen Mechanismus geklont, der in [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) verwendet wird:

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
test.addEventListener("click", () => {
  window.addonScriptObject.greetMe();
});
```

### Klonen von Objekten, die DOM-Elemente enthalten

Standardmäßig schlägt die Klonoperation fehl, wenn das Objekt, das Sie klonen, Objekte enthält, die von C++ reflektiert werden, wie z.B. DOM-Elemente. Wenn Sie das Flag `{ wrapReflectors: true }` übergeben, enthält das Objekt, das Sie klonen, diese Objekte:

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
test.addEventListener("click", () => {
  console.log(window.addonScriptObject.body.innerHTML);
});
```

Der Zugriff auf diese Objekte im Zielbereich unterliegt den normalen [Skript-Sicherheitsüberprüfungen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
