---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die globale Eigenschaft **`globalThis`** enthält den [globalen `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context)-Wert, der normalerweise dem [globalen Objekt](/de/docs/Glossary/Global_object) ähnelt.

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
> Die Eigenschaft `globalThis` ist konfigurierbar und beschreibbar, sodass Code-Autoren diese verstecken können, wenn nicht vertrauenswürdiger Code ausgeführt wird, um das globale Objekt nicht offenzulegen.

## Beschreibung

Historisch betrachtet, erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – aber in [Webarbeitern](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keiner dieser Ansätze, stattdessen muss man `global` verwenden. Das Schlüsselwort `this` konnte innerhalb von Funktionen verwendet werden, die im nicht-strikten Modus ausgeführt werden, aber in Modulen und in Funktionen, die im strikten Modus ausgeführt werden, ist `this` `undefined`. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie [CSP](/de/docs/Glossary/CSP) in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die Eigenschaft `globalThis` bietet eine standardisierte Methode, um auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) in unterschiedlichen Umgebungen zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` funktioniert sie garantiert sowohl in Fenster- als auch in Nicht-Fenster-Kontexten. Auf diese Weise können Sie auf das globale Objekt auf konsistente Weise zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um Ihnen zu helfen, sich den Namen zu merken: Im globalen Scope ist der `this`-Wert `globalThis`.

> [!NOTE]
> `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. wenn Sie Eigenschaften zu `globalThis` hinzufügen, werden sie zu globalen Variablen) – dies ist der Fall für Browser und Node – aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nichts mit dem globalen Objekt zu tun hat.

### HTML und das WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das eigentliche globale Objekt sein, aber in Webbrowsern verweist es aufgrund von Sicherheitsaspekten bei iframes und fensterübergreifendem Zugriff auf einen {{jsxref("Proxy")}} um das eigentliche globale Objekt (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist in der üblichen Nutzung selten relevant, aber wichtig zu wissen.

### Benennung

Mehrere andere beliebte Namensoptionen wie `self` und `global` wurden aufgrund ihres Potentials, die Kompatibilität mit bestehendem Code zu brechen, aus der Betrachtung genommen. Weitere Details finden Sie im [„Namensgebung“-Dokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist buchstäblich der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Scope eines Skripts.

## Beispiele

### Suche nach dem Globalen in verschiedenen Umgebungen

Normalerweise muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem das globale Objekt jedoch explizit angesprochen werden muss, ist, wenn darauf _geschrieben_ wird, normalerweise zwecks [Polyfills](/de/docs/Glossary/Polyfill).

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Allerdings führt dies in einigen Einstellungen zu [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen, so dass Autoren eine stückweise Definition wie diese verwenden würden (leicht angepasst aus dem [originalen core-js-Quellcode](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nachdem das globale Objekt erhalten wurde, können wir neue globale Eigenschaften darauf definieren. Zum Beispiel das Hinzufügen einer Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl):

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

Mit `globalThis` verfügbar, ist die zusätzliche Suche nach dem Globalen in verschiedenen Umgebungen nicht mehr notwendig:

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
- [es-shims polyfill von `globalThis`](https://www.npmjs.com/package/globalthis)
- {{jsxref("Operators/this", "this")}}
