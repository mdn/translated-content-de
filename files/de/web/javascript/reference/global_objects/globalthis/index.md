---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die globale Eigenschaft **`globalThis`** enthält den Wert von [globalem `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der in der Regel dem {{Glossary("Global_object", "globalen Objekt")}} entspricht.

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
> Die Eigenschaft `globalThis` ist konfigurierbar und beschreibbar. So können Entwickler sie bei der Ausführung nicht vertrauenswürdigen Codes verbergen und verhindern, dass das globale Objekt offengelegt wird.

## Beschreibung

Früher war für den Zugriff auf das globale Objekt je nach JavaScript-Umgebung eine andere Syntax erforderlich. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – in [Web Workers](/de/docs/Web/API/Worker) funktioniert jedoch nur `self`. In Node.js funktioniert keiner dieser Bezeichner; stattdessen müssen Sie `global` verwenden. Das Schlüsselwort `this` ließ sich innerhalb von Funktionen verwenden, die nicht im Strict Mode ausgeführt werden. In Modulen und innerhalb von Funktionen im Strict Mode ist `this` jedoch `undefined`. Sie können auch `Function('return this')()` verwenden. Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, etwa Browser mit {{Glossary("CSP", "CSP")}}, verhindern allerdings, dass {{jsxref("Function")}} auf diese Weise verwendet wird.

Die Eigenschaft `globalThis` bietet eine standardisierte Möglichkeit, umgebungsübergreifend auf den globalen `this`-Wert und damit auf das globale Objekt selbst zuzugreifen. Anders als bei ähnlichen Eigenschaften wie `window` und `self` ist garantiert, dass sie sowohl in Fensterkontexten als auch außerhalb davon funktioniert. So können Sie einheitlich auf das globale Objekt zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um sich den Namen zu merken, denken Sie daran: Im globalen Gültigkeitsbereich ist der Wert von `this` gleich `globalThis`.

> [!NOTE]
> `globalThis` entspricht im Allgemeinen dem globalen Objekt: Wenn Sie `globalThis` Eigenschaften hinzufügen, werden diese zu globalen Variablen. Dies gilt für Browser und Node. Host-Umgebungen dürfen für `globalThis` jedoch einen anderen Wert bereitstellen, der keinen Bezug zum globalen Objekt hat.

### HTML und WindowProxy

In vielen Engines ist `globalThis` eine Referenz auf das tatsächliche globale Objekt. In Webbrowsern verweist es aufgrund von Sicherheitsanforderungen im Zusammenhang mit iframes und fensterübergreifendem Zugriff jedoch auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt, auf das Sie nicht direkt zugreifen können. Dieser Unterschied ist bei der üblichen Verwendung selten relevant, sollte Ihnen aber bekannt sein.

### Benennung

Mehrere andere naheliegende Namen wie `self` und `global` wurden nicht berücksichtigt, da sie möglicherweise die Kompatibilität mit bestehendem Code beeinträchtigt hätten. Weitere Informationen finden Sie im [Dokument zur Benennung des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist im wörtlichen Sinne der globale `this`-Wert. Er entspricht dem `this`-Wert in einer Funktion, die nicht im Strict Mode ausgeführt und ohne Objekt aufgerufen wird. Er ist auch der Wert von `this` im globalen Gültigkeitsbereich eines Skripts.

## Beispiele

### Das globale Objekt umgebungsübergreifend finden

Normalerweise muss das globale Objekt nicht ausdrücklich angegeben werden: Auf seine Eigenschaften kann automatisch als globale Variablen zugegriffen werden.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem ausdrücklich auf das globale Objekt zugegriffen werden muss, ist jedoch das _Schreiben_ von Eigenschaften darauf, in der Regel für {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war `Function('return this')()` die einzige zuverlässige plattformübergreifende Möglichkeit, das globale Objekt einer Umgebung zu erhalten. In manchen Konfigurationen führt dies jedoch zu Verstößen gegen die [CSP](/de/docs/Web/HTTP/Guides/CSP). Deshalb verwendeten Entwickler eine Definition mit mehreren Alternativen wie diese (leicht angepasst aus dem [ursprünglichen Quellcode von core-js](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nachdem wir das globale Objekt erhalten haben, können wir darauf neue globale Eigenschaften definieren. Beispielsweise können wir eine Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) hinzufügen:

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

Mit `globalThis` ist die zusätzliche umgebungsübergreifende Suche nach dem globalen Objekt nicht mehr nötig:

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

- [Polyfill für `globalThis` in `core-js`](https://core-js.io/docs/features/ecmascript/global-this)
- [Polyfill für `globalThis` von es-shims](https://www.npmjs.com/package/globalthis)
- {{jsxref("this")}}
