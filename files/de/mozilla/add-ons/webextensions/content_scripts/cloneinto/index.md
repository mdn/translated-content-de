---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, ein Objekt, das in einem privilegierten Bereich definiert ist, in einem weniger privilegierten Bereich als [strukturellen Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) zu erstellen. Sie gibt eine Referenz auf den Klon zurück:

```js
var clonedObject = cloneInto(myObject, targetWindow);
```

Sie können den Klon dann als Expando-Eigenschaft einem Objekt im Zielbereich zuweisen, und Skripte, die in diesem Bereich ausgeführt werden, können darauf zugreifen:

```js
targetWindow.foo = clonedObject;
```

Dies ermöglicht es privilegiertem Code, wie einer Erweiterung, ein Objekt mit weniger privilegiertem Code, wie einem Skript auf einer Webseite, zu teilen.

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
  - : `object`. Das Objekt, dem das Objekt angefügt werden soll.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `cloneFunctions` {{optional_inline}}
      - : `boolean`. Ob die Funktionen des Objekts geklont werden sollen. Standard ist `false`. Geklonte Funktionen haben die gleichen Semantiken wie Funktionen, die mit [`exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/Content_scripts/exportFunction) exportiert werden. Siehe [Klonen von Objekten, die Funktionen enthalten](#klonen_von_objekten,_die_funktionen_enthalten). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Ob DOM-Objekte als Referenz statt als Klon übergeben werden sollen. DOM-Objekte sind in der Regel nicht klonbar. Standard ist `false`. Siehe [Klonen von Objekten, die DOM-Elemente enthalten](#klonen_von_objekten,_die_dom-elemente_enthalten).

### Rückgabewert

Eine Referenz auf das geklonte Objekt.

## Beispiele

Dieses Inhalteskript erstellt ein Objekt, klont es in das Inhaltsfenster und macht es zu einer Eigenschaft des globalen Inhaltsfensters:

```js
// content script
var addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Skripte, die in der Seite laufen, können auf das Objekt zugreifen:

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

Natürlich müssen Sie den Klon nicht dem Fenster selbst zuweisen; Sie können ihn auch einem anderen Objekt im Zielbereich zuweisen:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

Sie können es auch in eine Funktion übergeben, die im Seitenskript definiert ist. Angenommen, das Seitenskript definiert eine Funktion wie diese:

```js
// page script
function foo(greeting) {
  console.log("they said: " + greeting.message);
}
```

Das Inhalteskript kann ein Objekt definieren, es klonen und in diese Funktion einfügen:

```js
// content script
var addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Klonen von Objekten, die Funktionen enthalten

Wenn das zu klonende Objekt Funktionen enthält, müssen Sie das Flag `{cloneFunctions:true}` übergeben, sonst erhalten Sie einen Fehler. Wenn Sie dieses Flag übergeben, werden die Funktionen im Objekt mithilfe des gleichen Mechanismus geklont, der in [`Components.utils.exportFunction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction) verwendet wird:

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

Standardmäßig schlägt der Klonvorgang mit einem Fehler fehl, wenn das zu klonende Objekt von C++ reflektierte Objekte, wie DOM-Elemente, enthält. Wenn Sie das Flag `{wrapReflectors:true}` übergeben, enthält das geklonte Objekt diese Objekte:

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

Der Zugriff auf diese Objekte im Zielbereich unterliegt den normalen [Skript-Sicherheitsüberprüfungen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
