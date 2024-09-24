---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{AddonSidebar()}}

Diese Funktion bietet eine sichere Möglichkeit, eine Funktion aus einem privilegierten Bereich in einen weniger privilegierten Bereich zu exportieren. Dies ermöglicht es privilegiertem Code, wie z.B. einer Erweiterung, Code mit weniger privilegiertem Code, wie z.B. einem Standard-Webseiten-Skript, zu teilen. Eine aus privilegiertem zu weniger privilegiertem Code exportierte Funktion kann aus dem Kontext des weniger privilegierten Codes aufgerufen werden.

Die Funktion hat Zugriff auf ihren umgebenden Abschluss, als ob sie im privilegierten Kontext aufgerufen wurde.

Die exportierte Funktion muss nicht dem globalen Fensterobjekt des weniger privilegierten Codes hinzugefügt werden; sie kann stattdessen zu jedem Objekt im Zielbereich exportiert werden.

Siehe [Export von Funktionen, die Argumente übernehmen](#export_von_funktionen,_die_argumente_übernehmen), um zu verstehen, was passiert, wenn die von Ihnen exportierten Funktionen Argumente akzeptieren.

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
  - : `function`. Die Funktion, die exportiert werden soll.
- `targetScope`
  - : `object`. Das Objekt, dem die Funktion hinzugefügt werden soll. Dies muss nicht das globale Fensterobjekt sein; es könnte ein Objekt im Ziel-Fenster oder vom Aufrufer erstellt sein.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion.

    - `defineAs` {{optional_inline}}
      - : `string`. Der Name der Funktion im `targetScope`. Falls nicht angegeben, müssen Sie den Rückgabewert von `exportFunction()` einem Objekt im Zielbereich zuweisen.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Ob geprüft werden soll, dass Argumente der exportierten Funktion vom Aufrufer [übernommen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) werden. Dies erlaubt dem Aufrufer, Objekte mit einem anderen Ursprung in die exportierte Funktion zu übergeben, die dann ihren privilegierten Status nutzen kann, um Cross-Origin-Anfragen mit dem Objekt zu machen. Standard ist `false`.

### Rückgabewert

Die Platzhalterfunktion, die im Zielkontext erstellt wurde.

## Export von Funktionen, die Argumente übernehmen

Alle an die Funktion übergebenen Argumente werden nicht geklont. Stattdessen werden sie als [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) an den privilegierten Bereich weitergegeben.

### Modifikation des Arguments

Ein Xray für ein Objekt bezieht sich auf das Original. Jede Änderung am Argument, die in der exportierten Funktion vorgenommen wird, beeinflusst das ursprüngliche Objekt. Zum Beispiel:

```js
// privilegierter Bereich: z.B. ein Inhaltsskript
function changeMyName(user) {
  user.name = "Bill";
}
exportFunction(changeMyName, window, {
  defineAs: "changeMyName",
});
```

```js
// weniger privilegierter Bereich: z.B. ein Seitenskript
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

Dieses Verhalten unterliegt den normalen Regeln der Xrays. Zum Beispiel ist eine Expando-Eigenschaft, die einem DOM-Knoten hinzugefügt wurde, im ursprünglichen Objekt nicht sichtbar.

### Xray-Filterung und Verzicht

Xrays bieten eine gefilterte Ansicht des ursprünglichen Objekts. Zum Beispiel sind Funktionen in den Xrays von JavaScript-[`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Typen nicht sichtbar. Wenn Sie ungefilterten Zugriff auf das Original benötigen, können Sie [auf Xrays verzichten](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

```js
// privilegierter Bereich: z.B. ein Inhaltsskript
function logUser(user) {
  // console.log(user.getUser());                 // Fehler
  console.log(user.wrappedJSObject.getUser()); // "Bill"
}
exportFunction(logUser, window, {
  defineAs: "logUser",
});
```

```js
// weniger privilegierter Bereich: z.B. ein Seitenskript
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

Weitere Informationen finden Sie in der [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in der Dokumentation des Firefox Source Tree.

### Übergeben von Funktionen als Argumente

Wenn Funktionen als Argumente übergeben werden, werden auch diese als Xrays übergeben. Da Sie `Function`-Xrays wie normale Funktionen aufrufen können, funktioniert das Übergeben von Rückruffunktionen in die exportierte Funktion:

```js
// privilegierter Bereich: z.B. ein Inhaltsskript
function logUser(getUser) {
  console.log(getUser()); // "Bill"
}
exportFunction(logUser, unsafeWindow, {
  defineAs: "logUser",
});
```

```js
// weniger privilegierter Bereich: z.B. ein Seitenskript
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

Wenn die exportierte Funktion aufgerufen wird, wird jedes Argument, einschließlich `this`, überprüft, um sicherzustellen, dass der Aufrufer dieses Argument [übernimmt](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes). Dies verhindert das Übergeben von Cross-Origin-Objekten (z.B. `Window` oder `Location`) an privilegierte Funktionen, da der privilegierte Code vollen Zugriff auf diese Objekte hat und möglicherweise unbeabsichtigt etwas Gefährliches tun könnte. Diese Bestimmung kann durch Übergeben von `{ allowCrossOriginArguments: true }` an `exportFunction` außer Kraft gesetzt werden.

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

Statt `defineAs` zu verwenden, kann das Skript das Ergebnis von `exportFunction` einem Objekt im Zielbereich zuweisen:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
```

In jedem Fall kann der im Bereich des Inhaltsfensters laufende Code die Funktion aufrufen:

```js
// page-script.js
var greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export zu einem bestehenden lokalen Objekt

Statt die Funktion dem globalen `window`-Objekt des Ziels hinzuzufügen, kann der Aufrufer sie an ein anderes Objekt im Zielkontext hinzufügen. Angenommen, das Inhaltsfenster definiert eine lokale Variable `bar`:

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
