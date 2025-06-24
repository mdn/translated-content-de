---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, eine Funktion aus einem privilegierten Bereich in einen weniger privilegierten Bereich zu übertragen. Dies ermöglicht es privilegiertem Code, wie einer Erweiterung, Code mit weniger privilegiertem Code, wie einem Standardskript auf einer Webseite, zu teilen. Eine Funktion, die von privilegiertem zu weniger privilegiertem Code exportiert wird, kann im Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugriff auf ihre umgebende Closure, als ob sie im privilegierten Kontext aufgerufen wurde.

Die exportierte Funktion muss nicht dem globalen `window`-Objekt des weniger privilegierten Codes hinzugefügt werden; sie kann an ein beliebiges Objekt im Zielbereich exportiert werden.

Siehe [Exportieren von Funktionen, die Argumente nehmen](#exportieren_von_funktionen,_die_argumente_nehmen), um zu verstehen, was passiert, wenn die von Ihnen exportierten Funktionen Argumente akzeptieren.

## Syntax

```js-nolint
let exportedFunction = exportFunction(
  func,              // function
  targetScope,       // object
  options            // optional object
);
```

### Parameter

- `func`
  - : `function`. Die zu exportierende Funktion.
- `targetScope`
  - : `object`. Das Objekt, an das die Funktion angehängt werden soll. Dies muss nicht das globale `window`-Objekt sein; es könnte ein Objekt im Ziel-Fenster oder vom Aufrufer erstellt sein.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `defineAs` {{optional_inline}}
      - : `string`. Der Name der Funktion im `targetScope`. Wenn weggelassen, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielbereich zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob geprüft werden soll, dass Argumente der exportierten Funktion vom Aufrufer [untergeordnet](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) sind. Dadurch kann der Aufrufer Objekte mit einem anderen Ursprung an die exportierte Funktion übergeben, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu machen. Standardwert ist `false`.

### Rückgabewert

Die Platzhalterfunktion, die im Zielkontext erstellt wurde.

## Exportieren von Funktionen, die Argumente nehmen

Alle in die Funktion übergebenen Argumente werden nicht geklont. Stattdessen werden sie als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in den privilegierten Bereich weitergereicht.

### Änderung des Arguments

Ein Xray für ein Objekt bezieht sich auf das Original. Alle Änderungen am Argument, die in der exportierten Funktion vorgenommen werden, wirken sich auf das ursprüngliche übergebene Objekt aus. Zum Beispiel:

```js
// privileged scope: for example, a content script
function changeMyName(user) {
  user.name = "Bill";
}
exportFunction(changeMyName, window, {
  defineAs: "changeMyName",
});
```

```js
// less-privileged scope: for example, a page script
var user = { name: "Jim" };
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    console.log(user.name); // "Jim"
    window.changeMyName(user);
    console.log(user.name); // "Bill"
  },
  false,
);
```

Dieses Verhalten unterliegt den normalen Regeln von Xrays. Eine zum Beispiel hinzugefügte Expando-Eigenschaft zu einem DOM-Knoten ist im ursprünglichen Objekt nicht sichtbar.

### Xray-Filterung und Verzicht

Xrays bieten eine gefilterte Ansicht des ursprünglichen Objekts. Funktionen sind beispielsweise nicht in den Xrays von JavaScript-`Object`-Typen sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie auf [Xrays verzichten](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

```js
// privileged scope: for example, a content script
function logUser(user) {
  // console.log(user.getUser());                 // error
  console.log(user.wrappedJSObject.getUser()); // "Bill"
}
exportFunction(logUser, window, {
  defineAs: "logUser",
});
```

```js
// less-privileged scope: for example, a page script
var user = {
  getUser: function () {
    return "Bill";
  },
};
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.logUser(user);
  },
  false,
);
```

Weitere Informationen finden Sie unter [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in der Firefox Source Tree-Dokumentation.

### Funktionen als Argumente übergeben

Wenn Funktionen als Argumente übergeben werden, werden diese ebenfalls als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, funktioniert das Übergeben von Callbacks in die exportierte Funktion:

```js
// privileged scope: for example, a content script
function logUser(getUser) {
  console.log(getUser()); // "Bill"
}
exportFunction(logUser, unsafeWindow, {
  defineAs: "logUser",
});
```

```js
// less-privileged scope: for example, a page script
function getUser() {
  return "Bill";
}
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.logUser(getUser);
  },
  false,
);
```

### Cross-Origin-Prüfung

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer dieses Argument [untergeordnet](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies verhindert das Übergeben von Cross-Origin-Objekten (wie `Window` oder `Location`) an privilegierte Funktionen, da der privilegierte Code vollen Zugang zu diesen Objekten hat und unbeabsichtigt etwas Gefährliches tun könnte. Diese Bestimmung kann durch Übergabe von `{ allowCrossOriginArguments: true }` an `exportFunction` außer Kraft gesetzt werden.

## Beispiele

### Export in den globalen Bereich

Dieses Skript definiert eine Funktion und exportiert sie dann in ein Inhaltsfenster:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
exportFunction(greetMe, window, { defineAs: "foo" });
```

Anstatt `defineAs` zu verwenden, kann das Skript das Ergebnis von `exportFunction` einem Objekt im Zielbereich zuweisen:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
```

In jedem Fall kann Code, der im Bereich des Inhaltsfensters läuft, die Funktion aufrufen:

```js
// page-script.js
var greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export in ein bestehendes lokales Objekt

Anstatt die Funktion an das globale `window`-Objekt des Ziels anzuhängen, kann der Aufrufer sie an ein beliebiges anderes Objekt im Zielkontext anhängen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

```js
// page-script.js
var bar = {};
```

Jetzt kann das Erweiterungsskript die Funktion an `bar` anhängen:

```js
// extension-script.js
exportFunction(greetMe, window.bar, {
  defineAs: "greetMe",
});
```

```js
// page-script.js
var value = bar.greetMe("bob");
console.log(value);
// "hello bob"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
