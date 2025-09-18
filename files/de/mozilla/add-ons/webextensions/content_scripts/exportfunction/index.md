---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Diese Funktion bietet eine sichere Möglichkeit, eine Funktion aus einem privilegierten Kontext zu einem weniger privilegierten Kontext freizugeben. Dies ermöglicht es, dass priviligierter Code, wie z.B. eine Erweiterung, Code mit weniger privilegiertem Code, wie z.B. einem Skript einer Standardwebseite, teilt. Eine Funktion, die von privilegiertem zu weniger privilegiertem Code exportiert wird, kann aus dem Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugriff auf ihren umgebenden Abschluss, als ob sie im privilegierten Kontext aufgerufen wurde.

Die exportierte Funktion muss nicht dem globalen `window`-Objekt des weniger privilegierten Codes hinzugefügt werden; sie kann auf beliebige Objekte im Zielkontext exportiert werden.

Sehen Sie [Exportieren von Funktionen, die Argumente akzeptieren](#exportieren_von_funktionen,_die_argumente_akzeptieren), um zu verstehen, was passiert, wenn die exportierten Funktionen Argumente akzeptieren.

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
      - : `string`. Der Name der Funktion in `targetScope`. Falls weggelassen, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielkontext zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob geprüft werden soll, dass Argumente der exportierten Funktion vom Aufrufer [übernommen werden](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies erlaubt es dem Aufrufer, Objekte mit einem anderen Ursprung in die exportierte Funktion einzubringen, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu machen. Standard ist `false`.

### Rückgabewert

Die im Zielkontext erstellte Platzhalterfunktion.

## Exportieren von Funktionen, die Argumente akzeptieren

Alle an die Funktion übergebenen Argumente werden nicht geklont. Stattdessen werden sie durch den privilegierten Kontext als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) geleitet.

### Das Argument modifizieren

Ein Xray für ein Objekt bezieht sich auf das Original. Jegliche Änderungen am Argument, die in der exportierten Funktion vorgenommen werden, beeinflussen das übergebene Originalobjekt. Zum Beispiel:

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
const user = { name: "Jim" };
const test = document.getElementById("test");
test.addEventListener("click", () => {
  console.log(user.name); // "Jim"
  window.changeMyName(user);
  console.log(user.name); // "Bill"
});
```

Dieses Verhalten unterliegt den normalen Regeln von Xrays. Zum Beispiel ist eine zu einem DOM-Knoten hinzugefügte Expando-Eigenschaft im Originalobjekt nicht sichtbar.

### Xray-Filterung und Verzicht

Xrays bieten eine gefilterte Ansicht des Originalobjekts. Zum Beispiel sind Funktionen in den Xrays von JavaScript-[`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Typen nicht sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie [Xrays verzichten](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

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
const user = {
  getUser() {
    return "Bill";
  },
};
const test = document.getElementById("test");
test.addEventListener("click", () => {
  window.logUser(user);
});
```

Weitere Informationen finden Sie unter [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in der Firefox-Source-Tree-Dokumentation.

### Funktionen als Argumente übergeben

Wenn Funktionen als Argumente gegeben werden, werden diese ebenfalls als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, funktioniert das Übergeben von Rückruffunktionen in die exportierte Funktion:

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
const test = document.getElementById("test");
test.addEventListener("click", () => {
  window.logUser(getUser);
});
```

### Cross-Origin-Prüfung

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer [dieses Argument übernimmt](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies verhindert, dass Cross-Origin-Objekte (wie `Window` oder `Location`) an privilegierte Funktionen übergeben werden, da der privilegierte Code vollen Zugriff auf diese Objekte hat und unbeabsichtigt etwas Gefährliches tun könnte. Diese Regelung kann durch das Übergeben von `{ allowCrossOriginArguments: true }` an `exportFunction` überschrieben werden.

## Beispiele

### Export in den globalen Kontext

Dieses Skript definiert eine Funktion und exportiert sie dann in ein Inhaltsfenster:

```js
// extension-script.js
const salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
exportFunction(greetMe, window, { defineAs: "foo" });
```

Anstelle der Verwendung von `defineAs` kann das Skript das Ergebnis von `exportFunction` einem Objekt im Zielkontext zuweisen:

```js
// extension-script.js
const salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
```

In beiden Fällen kann der im Inhaltsfenster laufende Code die Funktion aufrufen:

```js
// page-script.js
const greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export zu einem bestehenden lokalen Objekt

Anstelle des Anhängens der Funktion an das globale `window`-Objekt des Ziels, kann der Aufrufer sie an ein beliebiges anderes Objekt im Zielkontext anhängen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

```js
// page-script.js
const bar = {};
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
const value = bar.greetMe("bob");
console.log(value);
// "hello bob"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
