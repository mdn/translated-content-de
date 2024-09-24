---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt, das in einem privilegierten Bereich definiert ist, zu nehmen und einen [strukturierten Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) davon in einem weniger privilegierten Bereich zu erstellen. Es gibt eine Referenz auf den Klon zurück:

```js
var clonedObject = cloneInto(myObject, targetWindow);
```

Sie können dann den Klon einem Objekt im Zielbereich als Expando-Eigenschaft zuweisen, und Skripte, die in diesem Bereich laufen, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegierten Code, wie einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie einem Skript auf einer Webseite, zu teilen.

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
      - : `boolean`. Ob die Funktionen des Objekts geklont werden sollen. Standardmäßig `false`. Geklonte Funktionen haben die gleichen Eigenschaften wie Funktionen, die mit [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/Content_scripts/exportFunction) exportiert werden. Siehe [Klonen von Objekten, die Funktionen haben](#klonen_von_objekten,_die_funktionen_haben). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Ob DOM-Objekte als Referenz anstelle von Klonen übergeben werden sollen. DOM-Objekte sind normalerweise nicht klonbar. Standardmäßig `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Inhalts-Skript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

```js
// content script
var addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Skripte, die auf der Seite laufen, können auf das Objekt zugreifen:

```js
// page script
button.addEventListener(
  "click",
  function () {
    console.log(window.addonScriptObject.greeting); // "hello from your extension"
  },
  false,
);
```

Natürlich müssen Sie den Klon nicht direkt dem Fenster zuweisen; Sie können ihn auch einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können es auch in eine Funktion auf der Seite übergeben. Angenommen, das Skript der Seite definiert eine Funktion wie diese:

```js
// page script
function foo(greeting) {
  console.log("they said: " + greeting.message);
}
```

Das Inhalts-Skript kann ein Objekt definieren, es klonen und an diese Funktion übergeben:

```js
// content script
var addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Klonen von Objekten, die Funktionen haben

Falls das zu klonende Objekt Funktionen enthält, müssen Sie das `{cloneFunctions:true}`-Flag übergeben, sonst tritt ein Fehler auf. Wenn Sie dieses Flag übergeben, werden die Funktionen im Objekt auf die gleiche Weise geklont wie bei [`Components.utils.exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction):

```js
// content script
var addonScriptObject = {
  greetMe: function () {
    alert("hello from your extension");
  },
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  cloneFunctions: true,
});
```

```js
// page script
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.addonScriptObject.greetMe();
  },
  false,
);
```

### Klonen von Objekten, die DOM-Elemente enthalten

Standardmäßig schlägt die Klonoperation fehl, wenn das zu klonende Objekt aus C++ reflektierte Objekte, wie DOM-Elemente, enthält. Wenn Sie das `{wrapReflectors:true}`-Flag übergeben, enthält das Objekt, das Sie klonen, diese Objekte:

```js
// content script
var addonScriptObject = {
  body: window.document.body,
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  wrapReflectors: true,
});
```

```js
// page script
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    console.log(window.addonScriptObject.body.innerHTML);
  },
  false,
);
```

Der Zugriff auf diese Objekte im Zielbereich unterliegt den normalen [Skriptsicherheitsprüfungen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
