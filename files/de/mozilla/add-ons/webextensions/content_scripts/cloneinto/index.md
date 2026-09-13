---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt, das in einem privilegierten Bereich definiert ist, zu nehmen und einen [strukturierten Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) davon in einem weniger privilegierten Bereich zu erstellen. Sie gibt eine Referenz auf den Klon zurück:

```js
const clonedObject = cloneInto(myObject, targetWindow);
```

Sie können den Klon dann einem Objekt im Zielbereich als Expando-Eigenschaft zuweisen, und Skripte, die in diesem Bereich ausgeführt werden, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegiertem Code, wie beispielsweise einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie einem Skript einer Webseite, zu teilen.

> [!NOTE]
> Sie können auch [`structuredClone`](/de/docs/Web/API/Window/structuredClone) verwenden, um strukturierte Klone zu erzeugen. Ab Firefox 149 klont `targetWindow.structuredClone(value)` den Wert in das [realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) des Ziel-Fensters.

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
      - : `boolean`. Ob die Funktionen des Objekts geklont werden sollen. Standardmäßig `false`. Geklonte Funktionen haben die gleichen Semantiken wie Funktionen, die mit [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) exportiert wurden. Siehe [Klonen von Objekten, die Funktionen enthalten](#klonen_von_objekten,_die_funktionen_enthalten). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Ob DOM-Objekte per Referenz statt geklont übergeben werden sollen. DOM-Objekte sind normalerweise nicht klonbar. Standardmäßig `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Inhalts-Skript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

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

Natürlich müssen Sie den Klon nicht dem Fenster selbst zuweisen; Sie können ihn einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können es auch in eine Funktion übergeben, die im Seitenskript definiert ist. Angenommen, das Seitenskript definiert eine Funktion wie diese:

```js
// page script
function foo(greeting) {
  console.log(`they said: ${greeting.message}`);
}
```

Das Inhalts-Skript kann ein Objekt definieren, es klonen und in diese Funktion übergeben:

```js
// content script
const addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Klonen von Objekten, die Funktionen enthalten

Wenn das zu klonende Objekt Funktionen enthält, müssen Sie das `{ cloneFunctions: true }`-Flag übergeben, sonst erhalten Sie einen Fehler. Wenn Sie dieses Flag übergeben, werden die Funktionen im Objekt mit dem gleichen Mechanismus geklont, der in [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) verwendet wird:

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

Standardmäßig schlägt die Klonoperation fehl, wenn das zu klonende Objekt Objekte enthält, die aus C++ reflektiert werden, wie DOM-Elemente. Wenn Sie das `{ wrapReflectors: true }`-Flag übergeben, enthält das geklonte Objekt diese Objekte:

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
