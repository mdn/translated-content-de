---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Objects")}}

Die **`globalThis`**-globale Eigenschaft enthält den [globalen `this`-Wert](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der normalerweise dem {{Glossary("Global_object", "globalen Objekt")}} ähnlich ist.

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
> Die `globalThis`-Eigenschaft ist konfigurierbar und beschreibbar, sodass Codeentwickler sie verstecken können, wenn sie unsicheren Code ausführen, um zu verhindern, dass das globale Objekt offengelegt wird.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – aber in [Web Workern](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keiner dieser Ansätze, sodass Sie stattdessen `global` verwenden müssen. Das `this`-Schlüsselwort konnte innerhalb von Funktionen verwendet werden, die im Nicht-Strikt-Modus ausgeführt werden, aber `this` wird in Modulen und innerhalb von Funktionen im Striktmodus `undefined` sein. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}}, wie {{Glossary("CSP", "CSP")}} in Browsern, deaktiviert haben, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Möglichkeit, den globalen `this`-Wert (und damit das globale Objekt selbst) plattformübergreifend zuzugreifen. Anders als ähnliche Eigenschaften wie `window` und `self` garantiert sie das Funktionieren in Fenster- und Nicht-Fenster-Kontexten. Auf diese Weise können Sie ohne Kenntnis der Ausführungsumgebung konsistent auf das globale Objekt zugreifen. Um sich den Namen zu merken, denken Sie einfach daran, dass im globalen Bereich der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen das gleiche Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies ist der Fall in Browsern und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt in Zusammenhang steht.

### HTML und das WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das eigentliche globale Objekt sein, aber in Webbrowsern, aufgrund von iframe- und Sicherheitsbedenken bei Mehrfenstern, verweist es auf einen {{jsxref("Proxy")}} um das eigentliche globale Objekt (auf das Sie nicht direkt zugreifen können). Dieser Unterschied ist bei üblicher Verwendung selten relevant, aber wichtig zu beachten.

### Benennung

Einige andere beliebte Namensvorschläge wie `self` und `global` wurden ausgeschlossen, da sie die Kompatibilität mit bestehendem Code gefährden könnten. Weitere Details finden Sie im [Namensdokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist buchstäblich der globale `this`-Wert. Es ist der gleiche Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der `this`-Wert im globalen Bereich eines Skripts.

## Beispiele

### Suche nach dem Globalen über Umgebungen hinweg

Normalerweise muss das globale Objekt nicht explizit angegeben werden — seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem expliziter Zugriff auf das globale Objekt erforderlich ist, ist beim _Schreiben_ darauf, normalerweise für {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies führt jedoch in einigen Situationen zu [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen, daher würden Entwickler eine stückweise Definition wie diese verwenden (leicht angepasst aus dem [ursprünglichen core-js-Quellcode](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nachdem das globale Objekt erhalten wurde, können wir neue globale Variablen darauf definieren. Zum Beispiel das Hinzufügen einer Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl):

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

Mit verfügbarer `globalThis`-Eigenschaft ist die zusätzliche Suche nach dem Globalen über Umgebungen hinweg nicht mehr erforderlich:

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
