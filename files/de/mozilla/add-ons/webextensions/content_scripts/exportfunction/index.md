---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Diese Funktion bietet eine sichere Methode, eine Funktion aus einem privilegierten Bereich in einen weniger privilegierten Bereich zu übertragen. Dies ermöglicht es, dass privilegierter Code, wie eine Erweiterung, Code mit weniger privilegiertem Code, wie einem Standardskript einer Webseite, teilt. Eine von privilegiertem zu weniger privilegiertem Code exportierte Funktion kann aus dem Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugriff auf ihre umgebende Closure, als ob sie im privilegierten Kontext aufgerufen wurde.

Die exportierte Funktion muss nicht zum globalen `window`-Objekt des weniger privilegierten Codes hinzugefügt werden; sie kann in jedem Objekt im Zielbereich exportiert werden.

Siehe [Exportieren von Funktionen, die Argumente entgegennehmen](#exportieren_von_funktionen,_die_argumente_entgegennehmen), um zu verstehen, was passiert, wenn die von Ihnen exportierten Funktionen Argumente akzeptieren.

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
  - : `object`. Das Objekt, an das die Funktion angehängt werden soll. Dies muss nicht das globale `window`-Objekt sein; es kann ein Objekt im Ziel-Fenster oder vom Aufrufer erstellt sein.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `defineAs` {{optional_inline}}
      - : `string`. Der Name der Funktion in `targetScope`. Wenn weggelassen, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielbereich zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob überprüft werden soll, dass Argumente der exportierten Funktion vom Aufrufer [subsumed](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) sind. Dadurch kann der Aufrufer Objekte mit einem anderen Ursprung in die exportierte Funktion übergeben, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu machen. Standard ist `false`.

### Rückgabewert

Die Platzhalterfunktion, die im Zielkontext erstellt wurde.

## Exportieren von Funktionen, die Argumente entgegennehmen

Alle Argumente, die in die Funktion übergeben werden, werden nicht geklont. Stattdessen werden sie als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) an den privilegierten Bereich weitergereicht.

### Modifizierung des Arguments

Ein Xray für ein Objekt bezieht sich auf das Original. Alle Änderungen am Argument, die in der exportierten Funktion vorgenommen werden, beeinflussen das Originalobjekt. Zum Beispiel:

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

Dieses Verhalten unterliegt den normalen Regeln der Xrays. Zum Beispiel ist eine hinzugefügte Expando-Eigenschaft bei einem DOM-Knoten im Originalobjekt nicht sichtbar.

### Xray-Filterung und Xray-Verzicht

Xrays bieten eine gefilterte Ansicht des Originalobjekts. Zum Beispiel sind Funktionen in den Xrays von JavaScript-[`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Typen nicht sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie auf [Xray-Verzicht](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision) zurückgreifen:

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

Weitere Informationen finden Sie unter [Xray Vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in der Firefox Source Tree Dokumentation.

### Übergeben von Funktionen als Argumente

Wenn Funktionen als Argumente übergeben werden, werden diese auch als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, bedeutet dies, dass das Übergeben von Rückruffunktionen in die exportierte Funktion funktioniert:

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

### Cross-Origin-Überprüfung

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer dieses Argument [subsumed](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies verhindert, dass Cross-Origin-Objekte (wie `Window` oder `Location`) an privilegierte Funktionen übergeben werden, da der privilegierte Code vollen Zugriff auf diese Objekte hat und unbeabsichtigt etwas Gefährliches tun könnte. Diese Bestimmung kann durch Übergeben von `{ allowCrossOriginArguments: true }` an `exportFunction` überschrieben werden.

## Beispiele

### Export in den globalen Bereich

Dieses Skript definiert eine Funktion und exportiert sie in ein Inhaltsfenster:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
exportFunction(greetMe, window, { defineAs: "foo" });
```

Anstelle von `defineAs` kann das Skript das Ergebnis von `exportFunction` einem Objekt im Zielbereich zuweisen:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
```

In jedem Fall kann der Code, der im Kontext des Inhaltsfensters läuft, die Funktion aufrufen:

```js
// page-script.js
var greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export zu einem bestehenden lokalen Objekt

Anstatt die Funktion an das globale `window`-Objekt des Ziels zu hängen, kann der Aufrufer sie an irgendein anderes Objekt im Zielkontext anhängen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

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
