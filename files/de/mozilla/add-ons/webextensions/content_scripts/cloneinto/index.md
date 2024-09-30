---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt, das in einen privilegierten Bereich definiert wurde, zu nehmen und davon einen [strukturierten Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) in einem weniger privilegierten Bereich zu erstellen. Sie gibt eine Referenz auf den Klon zurück:

```js
var clonedObject = cloneInto(myObject, targetWindow);
```

Sie können den Klon dann einem Objekt im Zielbereich als Expando-Eigenschaft zuweisen, und Skripte, die in diesem Bereich ausgeführt werden, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegiertem Code, wie z. B. einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie z. B. einem Skript auf einer Webseite, zu teilen.

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
      - : `boolean`. Ob die Funktionen des Objekts geklont werden sollen. Standardmäßig `false`. Geklonte Funktionen haben die gleichen Semantiken wie Funktionen, die mit [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/Content_scripts/exportFunction) exportiert werden. Siehe [Klonen von Objekten, die Funktionen enthalten](#klonen_von_objekten,_die_funktionen_enthalten). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Ob DOM-Objekte per Referenz übergeben anstatt geklont werden sollen. DOM-Objekte sind normalerweise nicht klonbar. Standardmäßig `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Inhalts-Skript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

```js
// content script
var addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Skripte, die auf der Seite ausgeführt werden, können auf das Objekt zugreifen:

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

Natürlich müssen Sie den Klon nicht dem Fenster selbst zuweisen; Sie können ihn einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können ihn auch an eine im Seitenskript definierte Funktion übergeben. Angenommen, das Seitenskript definiert eine Funktion so:

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

### Klonen von Objekten, die Funktionen enthalten

Wenn das zu klonende Objekt Funktionen enthält, müssen Sie das `{cloneFunctions:true}` Flag setzen, oder Sie erhalten einen Fehler. Wenn Sie dieses Flag setzen, werden die Funktionen im Objekt mit dem gleichen Mechanismus geklont, der in [`Components.utils.exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction) verwendet wird:

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

Standardmäßig schlägt der Klonvorgang fehl, wenn das zu klonende Objekt aus C++ reflektierte Objekte wie DOM-Elemente enthält. Wenn Sie das `{wrapReflectors:true}` Flag übergeben, enthält das Objekt, das Sie klonen, diese Objekte:

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

Der Zugriff auf diese Objekte im Zielbereich unterliegt den normalen [Skriptsicherheitsüberprüfungen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
