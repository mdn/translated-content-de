---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, eine Funktion aus einem privilegierten Bereich in einen weniger privilegierten Bereich zugänglich zu machen. Dies ermöglicht es privilegiertem Code, wie einer Erweiterung, Code mit weniger privilegiertem Code, wie einem Standard-Webseitenskript, zu teilen. Eine aus privilegiertem Code exportierte Funktion kann im Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugriff auf ihren umgebenden Abschluss, als ob sie im privilegierten Kontext aufgerufen würde.

Die exportierte Funktion muss nicht zum globalen `window`-Objekt des weniger privilegierten Codes hinzugefügt werden; sie kann in jedes Objekt im Zielbereich exportiert werden.

Siehe [Funktionen exportieren, die Argumente akzeptieren](#funktionen_exportieren,_die_argumente_akzeptieren), um zu verstehen, was passiert, wenn die exportierten Funktionen Argumente akzeptieren.

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
  - : `object`. Das Objekt, an das die Funktion angehängt werden soll. Dies muss nicht das globale `window`-Objekt sein; es könnte ein Objekt im Ziel-Fenster sein oder vom Aufrufer erstellt werden.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion.

    - `defineAs` {{optional_inline}}
      - : `string`. Der Name der Funktion in `targetScope`. Wenn weggelassen, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielbereich zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob überprüft werden soll, dass die Argumente der exportierten Funktion vom Aufrufer [übernommen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) werden. Dies erlaubt dem Aufrufer, Objekte mit einem anderen Ursprung in die exportierte Funktion zu übergeben, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu stellen. Standardmäßig `false`.

### Rückgabewert

Die Platzhalterfunktion, die im Zielkontext erstellt wurde.

## Funktionen exportieren, die Argumente akzeptieren

Alle Argumente, die an die Funktion übergeben werden, werden nicht geklont. Stattdessen werden sie als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in den privilegierten Bereich übergeben.

### Das Argument modifizieren

Ein Xray für ein Objekt bezieht sich auf das Original. Änderungen am Argument, die in der exportierten Funktion vorgenommen werden, beeinflussen das ursprüngliche übergebene Objekt. Zum Beispiel:

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

Dieses Verhalten unterliegt den normalen Regeln von Xrays. Zum Beispiel ist eine Expando-Eigenschaft, die einem DOM-Knoten hinzugefügt wird, im ursprünglichen Objekt nicht sichtbar.

### Xray-Filterung und -Verzicht

Xrays bieten eine gefilterte Sicht auf das Originalobjekt. Beispielsweise sind Funktionen in den Xrays von JavaScript-[`Objekt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Typen nicht sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie [auf Xrays verzichten](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

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

Wenn Funktionen als Argumente gegeben werden, werden diese ebenfalls als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, bedeutet dies, dass das Übergeben von Rückruffunktionen in die exportierte Funktion funktioniert:

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

### Überprüfung der plattformübergreifenden Herkunft

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer das Argument [übernimmt](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies verhindert, dass plattformübergreifende Objekte (wie `Window` oder `Location`) an privilegierte Funktionen übergeben werden, da der privilegierte Code vollen Zugriff auf diese Objekte hat und unbeabsichtigt etwas Gefährliches tun könnte. Diese Bestimmung kann durch Übergeben von `{ allowCrossOriginArguments: true }` an `exportFunction` außer Kraft gesetzt werden.

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

Auf beide Arten kann der Code, der im Geltungsbereich des Inhaltsfensters läuft, die Funktion aufrufen:

```js
// page-script.js
var greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export zu einem bestehenden lokalen Objekt

Anstatt die Funktion an das globale `window`-Objekt des Ziels anzuhängen, kann der Aufrufer sie an ein anderes Objekt im Zielkontext anhängen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

```js
// page-script.js
var bar = {};
```

Nun kann das Erweiterungsskript die Funktion an `bar` anhängen:

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
