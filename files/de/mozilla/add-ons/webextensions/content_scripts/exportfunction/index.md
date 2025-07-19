---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 7348ad4bf0fa7351041e9a3661c8a2bd2659d6e5
---

Diese Funktion bietet eine sichere Möglichkeit, eine Funktion aus einem privilegierten in einen weniger privilegierten Bereich zu exportieren. Dadurch kann privilegierter Code, wie z.B. eine Erweiterung, Code mit weniger privilegiertem Code, wie z.B. einem Standard-Webseitenskript, teilen. Eine Funktion, die von privilegiertem zu weniger privilegiertem Code exportiert wird, kann im Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugang zu ihrem umgebenden Abschluss, als ob sie im privilegierten Kontext aufgerufen wurde.

Die exportierte Funktion muss dem globalen Fensterobjekt des weniger privilegierten Codes nicht hinzugefügt werden; sie kann in ein beliebiges Objekt im Zielbereich exportiert werden.

Sehen Sie sich [Exporting functions that take arguments](#exportieren_von_funktionen,_die_argumente_annehmen) an, um zu verstehen, was passiert, wenn die von Ihnen exportierten Funktionen Argumente akzeptieren.

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
  - : `object`. Das Objekt, an das die Funktion angehängt werden soll. Dies muss nicht das globale Fensterobjekt sein; es könnte ein Objekt im Zielbereich sein oder vom Aufrufer erstellt werden.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion.
    - `defineAs` {{optional_inline}}
      - : `string`. Der Name der Funktion in `targetScope`. Wenn weggelassen, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielbereich zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob überprüft werden soll, dass Argumente an die exportierte Funktion [subsumed](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) sind durch den Aufrufer. Dies ermöglicht es dem Aufrufer, Objekte mit einem anderen Ursprung in die exportierte Funktion zu übergeben, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu machen. Standardeinstellung ist `false`.

### Rückgabewert

Die Platzhalterfunktion, die im Zielkontext erstellt wird.

## Exportieren von Funktionen, die Argumente annehmen

Alle Argumente, die in die Funktion übergeben werden, werden nicht geklont. Stattdessen werden sie als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) an den privilegierten Bereich weitergegeben.

### Modifikation des Arguments

Ein Xray für ein Objekt bezieht sich auf das Original. Alle Änderungen an dem Argument, die in der exportierten Funktion gemacht werden, beeinflussen das ursprüngliche übergebene Objekt. Zum Beispiel:

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
test.addEventListener(
  "click",
  () => {
    console.log(user.name); // "Jim"
    window.changeMyName(user);
    console.log(user.name); // "Bill"
  },
  false,
);
```

Dieses Verhalten unterliegt den normalen Regeln von Xrays. Zum Beispiel ist eine expando-Eigenschaft, die einem DOM-Knoten hinzugefügt wird, im ursprünglichen Objekt nicht sichtbar.

### Xray-Filterung und Verzicht

Xrays bieten eine gefilterte Ansicht des ursprünglichen Objekts. Zum Beispiel sind Funktionen in den Xrays von JavaScript-[`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Typen nicht sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie [Xrays verzichten](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

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
test.addEventListener(
  "click",
  () => {
    window.logUser(user);
  },
  false,
);
```

Weitere Informationen finden Sie unter [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in der Firefox Source Tree Dokumentation.

### Funktionen als Argumente übergeben

Wenn Funktionen als Argumente angegeben werden, werden diese ebenfalls als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, bedeutet dies, dass das Übergeben von Callbacks an die exportierte Funktion funktioniert:

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
test.addEventListener(
  "click",
  () => {
    window.logUser(getUser);
  },
  false,
);
```

### Cross-Origin-Prüfung

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer [subsumes](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) dieses Argument. Dies verhindert, dass Cross-Origin-Objekte (wie `Window` oder `Location`) an privilegierte Funktionen übergeben werden, da der privilegierte Code vollständigen Zugriff auf diese Objekte hat und unbeabsichtigt etwas Gefährliches tun könnte. Diese Bestimmung kann durch Übergabe von `{ allowCrossOriginArguments: true }` an `exportFunction` außer Kraft gesetzt werden.

## Beispiele

### Exportieren in den globalen Bereich

Dieses Skript definiert eine Funktion und exportiert sie dann in ein Inhaltsfenster:

```js
// extension-script.js
const salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
exportFunction(greetMe, window, { defineAs: "foo" });
```

Anstatt `defineAs` zu verwenden, kann das Skript das Ergebnis von `exportFunction` einem Objekt im Zielbereich zuweisen:

```js
// extension-script.js
const salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
```

So oder so kann der im Inhaltsfenster laufende Code die Funktion aufrufen:

```js
// page-script.js
const greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export in ein bestehendes lokales Objekt

Anstatt die Funktion an das globale `window`-Objekt des Ziels anzuheften, kann der Aufrufer sie an jedes andere Objekt im Zielkontext anhängen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

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
