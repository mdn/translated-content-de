---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`globalThis`** globale Eigenschaft enthält den [globalen `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context)-Wert, welcher üblicherweise dem {{Glossary("Global_object", "globalen Objekt")}} ähnelt.

{{InteractiveExample("JavaScript Demo: globalThis", "shorter")}}

```js interactive-example
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
```

## Wert

Das globale `this` Objekt.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die `globalThis`-Eigenschaft ist konfigurierbar und beschreibbar, sodass Code-Autoren sie verbergen können, wenn nicht vertrauenswürdiger Code ausgeführt wird, um das globale Objekt vor einer Offenlegung zu schützen.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – aber in [Web Workers](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keine dieser Optionen, und Sie müssen stattdessen `global` verwenden. Das `this`-Schlüsselwort konnte innerhalb von Funktionen im Nicht-strikt-Modus verwendet werden, aber `this` ist innerhalb von Modulen und in Funktionen im strengen Modus `undefined`. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie {{Glossary("CSP", "CSP")}} in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Methode zum Zugriff auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) über verschiedene Umgebungen hinweg. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` funktioniert es garantiert in Kontexten mit und ohne Fenster. Auf diese Weise können Sie in konsistenter Weise auf das globale Objekt zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um sich den Namen zu merken, bedenken Sie einfach, dass im globalen Bereich der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — das ist der Fall in Browsern und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

### HTML und das WindowProxy

In vielen Engines wird `globalThis` ein Verweis auf das tatsächliche globale Objekt sein, aber in Webbrowsern verweist es aufgrund von Sicherheitsüberlegungen zu iframes und Fensterübergriffen auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt herum (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist in der alltäglichen Nutzung selten relevant, aber es ist wichtig, sich dessen bewusst zu sein.

### Benennung

Mehrere andere beliebte Namenswahlen wie `self` und `global` wurden von der Überlegung ausgeschlossen, da sie die Kompatibilität mit bereits vorhandenem Code beeinträchtigen könnten. Weitere Details finden Sie im [Benennungsdokument der Sprachvorschläge](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist, ganz wörtlich, der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Bereich eines Skripts.

## Beispiele

### Suche nach dem Globalen über Umgebungen hinweg

Normalerweise muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem man explizit auf das globale Objekt zugreifen muss, ist das _Schreiben_ darauf, normalerweise zum Zweck von {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war die einzige verlässliche plattformübergreifende Methode, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies führt jedoch in einigen Einstellungen zu [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen, sodass Autoren eine stückweise Definition wie diese verwenden würden (leicht angepasst aus der [ursprünglichen core-js Quelle](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nachdem das globale Objekt erlangt wurde, können wir neue globale Variablen darauf definieren. Zum Beispiel, indem wir eine Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) hinzufügen:

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

Mit `globalThis` verfügbar ist die zusätzliche Suche nach dem Globalen über Umgebungen hinweg nicht mehr erforderlich:

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
