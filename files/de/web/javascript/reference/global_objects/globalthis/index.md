---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`globalThis`** enthält den Wert von [global `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der normalerweise dem {{Glossary("Global_object", "globalen Objekt")}} ähnelt.

{{InteractiveExample("JavaScript Demo: globalThis", "shorter")}}

```js interactive-example
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
```

## Wert

Das globale `this`-Objekt.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die Eigenschaft `globalThis` ist konfigurierbar und beschreibbar, sodass Code-Autoren sie verbergen können, wenn nicht vertrauenswürdiger Code ausgeführt wird, um zu verhindern, dass das globale Objekt exponiert wird.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – aber in [Web Workern](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keiner dieser Ansätze und Sie müssen stattdessen `global` verwenden. Das `this`-Schlüsselwort konnte innerhalb von Funktionen verwendet werden, die im Nicht-Strikten Modus ausgeführt wurden, aber `this` wird in Modulen und innerhalb von Funktionen, die im Strikten Modus ausgeführt werden, `undefined` sein. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie {{Glossary("CSP", "CSP")}} in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die Eigenschaft `globalThis` bietet eine standardisierte Methode, um auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) über Umgebungen hinweg zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self`, funktioniert es garantiert sowohl in Fenster- als auch in Nicht-Fenster-Kontexten. Auf diese Weise können Sie das globale Objekt auf konsistente Weise erreichen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Ein hilfreicher Merksatz: Im globalen Gültigkeitsbereich ist der `this`-Wert `globalThis`.

> [!NOTE] > `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) – dies ist der Fall für Browser und Node – aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt in Verbindung steht.

### HTML und das WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das eigentliche globale Objekt sein, aber in Webbrowsern verweist es aufgrund von Sicherheitsüberlegungen bezüglich iframes und Fenstern übergreifendem Zugriff auf einen {{jsxref("Proxy")}} um das eigentliche globale Objekt (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist selten bei der allgemeinen Nutzung relevant, sollte aber bekannt sein.

### Namensgebung

Mehrere andere populäre Namensoptionen wie `self` und `global` wurden aus der Betrachtung entfernt, da sie bestehende Codes aufgrund von Kompatibilitätsproblemen unterbrechen könnten. Weitere Details finden Sie im [„Naming“-Dokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist wörtlich der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Gültigkeitsbereich eines Skripts.

## Beispiele

### Suche nach dem Globalen über Umgebungen hinweg

In der Regel muss das globale Objekt nicht explizit angegeben werden — seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, bei dem man explizit auf das globale Objekt zugreifen muss, ist, wenn man darauf _schreiben_ muss, meist für den Zweck von {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, das globale Objekt einer Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen in einigen Einstellungen, daher würden Autoren eine stückweise Definition wie diese verwenden (leicht angepasst von der [ursprünglichen core-js Quelle](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

```js
function check(it) {
  // Math is known to exist as a global in every environment.
  return it && it.Math === Math && it;
}

const globalObject =
  check(typeof window === "object" && window) ||
  check(typeof self === "object" && self) ||
  check(typeof global === "object" && global) ||
  // This returns undefined when running in strict mode
  (function () {
    return this;
  })() ||
  Function("return this")();
```

Nachdem das globale Objekt erhalten wurde, können wir neue globale Variablen darauf definieren. Beispielsweise das Hinzufügen einer Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl):

```js
if (typeof globalObject.Intl === "undefined") {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

Mit `globalThis` verfügbar, ist die zusätzliche Suche nach dem Globalen über Umgebungen hinweg nicht mehr notwendig:

```js
if (typeof globalThis.Intl === "undefined") {
  Object.defineProperty(globalThis, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `globalThis` in `core-js`](https://github.com/zloirock/core-js#ecmascript-globalthis)
- [es-shims Polyfill von `globalThis`](https://www.npmjs.com/package/globalthis)
- {{jsxref("Operators/this", "this")}}
