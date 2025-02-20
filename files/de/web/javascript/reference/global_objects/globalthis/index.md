---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`globalThis`** enthält den [globalen `this`-Wert](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der meist dem {{Glossary("Global_object", "globalen Objekt")}} ähnelt.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - globalThis", "shorter")}}

```js interactive-example
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
```

## Wert

Das globale Objekt `this`.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die Eigenschaft `globalThis` ist konfigurierbar und beschreibbar, sodass Codeautoren sie verbergen können, wenn nicht vertrauenswürdiger Code ausgeführt wird, um zu verhindern, dass das globale Objekt offengelegt wird.

## Beschreibung

Historisch war der Zugriff auf das globale Objekt in verschiedenen JavaScript-Umgebungen von unterschiedlicher Syntax abhängig. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden – in [Web-Workern](/de/docs/Web/API/Worker) funktioniert jedoch nur `self`. In Node.js funktionieren keiner dieser Ansätze, stattdessen muss `global` verwendet werden. Das Schlüsselwort `this` konnte in Funktionen, die im Nicht-Strikt-Modus ausgeführt wurden, verwendet werden, aber `this` ist in Modulen und in Funktionen, die im strikten Modus ausgeführt werden, `undefined`. Außerdem können Sie `Function('return this')()` nutzen, jedoch verhindern Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie {{Glossary("CSP", "CSP")}} in Browsern, die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die Eigenschaft `globalThis` bietet eine standardisierte Methode, den globalen `this`-Wert (und damit das globale Objekt selbst) in verschiedenen Umgebungen zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` ist garantiert, dass sie sowohl in Fenster- als auch in Nicht-Fenster-Kontexten funktioniert. Auf diese Weise können Sie auf das globale Objekt auf konsistente Weise zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Zur Erinnerung an den Namen: Im globalen Gültigkeitsbereich ist der Wert von `this` `globalThis`.

> **Hinweis:** `globalThis` entspricht im Allgemeinen demselben Konzept wie das globale Objekt (das heißt, das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) – dies gilt für Browser und Node – aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

### HTML und die WindowProxy

In vielen Engines ist `globalThis` eine Referenz auf das tatsächliche globale Objekt, in Web-Browsern jedoch verweist es aufgrund von Sicherheitsüberlegungen in Bezug auf iframes und Cross-Window auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt (auf das Sie nicht direkt zugreifen können). Dieser Unterschied ist in der üblichen Nutzung selten relevant, aber es ist wichtig, ihn zu kennen.

### Benennung

Mehrere andere populäre Namensoptionen wie `self` und `global` wurden aus der Betrachtung ausgeschlossen, da sie die Abwärtskompatibilität mit existierendem Code gefährden könnten. Weitere Details finden Sie im ["naming"-Dokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist buchstäblich der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer Nicht-Strikt-Funktion, die ohne Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Gültigkeitsbereich eines Skripts.

## Beispiele

### Suche nach dem globalen Objekt in verschiedenen Umgebungen

Normalerweise muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem das globale Objekt explizit aufgerufen werden muss, ist das _Schreiben_ darauf, meist für den Zweck eines {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch [CSP](/de/docs/Web/HTTP/CSP)-Verletzungen in einigen Einstellungen, weshalb Autoren eine stückweise Definition wie diese verwenden würden (leicht angepasst aus dem [ursprünglichen core-js-Quellcode](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nachdem das globale Objekt erhalten wurde, können wir neue globale Variablen darauf definieren. Beispielsweise eine Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl):

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

Mit `globalThis` ist die zusätzliche Suche nach dem globalen Objekt in verschiedenen Umgebungen nicht mehr nötig:

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
- {{jsxref("Operators/this", "this")}}
