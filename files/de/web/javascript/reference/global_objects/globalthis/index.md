---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`globalThis`** enthält den Wert von [global `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der normalerweise dem {{Glossary("Global_object", "globalen Objekt")}} ähnelt.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - globalThis", "shorter")}}

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
> Die `globalThis`-Eigenschaft ist konfigurierbar und beschreibbar, sodass Codeautoren sie verbergen können, wenn nicht vertrauenswürdiger Code ausgeführt wird und das globale Objekt nicht offengelegt werden soll.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntaxen in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden - aber in [Web-Workern](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktionieren keine dieser Optionen, und Sie müssen stattdessen `global` verwenden. Das Schlüsselwort `this` konnte in Funktionen verwendet werden, die im nicht-strikten Modus laufen, aber `this` wird in Modulen und Funktionen im strikten Modus `undefined` sein. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie {{Glossary("CSP", "CSP")}} in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Möglichkeit, auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) in verschiedenen Umgebungen zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` ist sichergestellt, dass es in Fenster- und Nicht-Fenster-Kontexten funktioniert. Auf diese Weise können Sie auf das globale Objekt auf konsistente Weise zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um Ihnen zu helfen, sich den Namen zu merken, denken Sie einfach daran, dass im globalen Umfang der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) - das ist der Fall für Browser und Node - aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nichts mit dem globalen Objekt zu tun hat.

### HTML und der WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das tatsächliche globale Objekt sein, aber in Webbrowsern referenziert es aufgrund von iframe- und sicherheitsrelevanten Überlegungen ein {{jsxref("Proxy")}} um das tatsächliche globale Objekt (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist in der allgemeinen Nutzung selten von Bedeutung, aber wichtig zu wissen.

### Benennung

Einige andere populäre Namensvorschläge wie `self` und `global` wurden wegen ihrer möglichen Beeinträchtigung der Kompatibilität mit bestehendem Code aus der Überlegung ausgeschlossen. Weitere Einzelheiten finden Sie im [Benennungsdokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

`globalThis` ist, wörtlich genommen, der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Umfang eines Skripts.

## Beispiele

### Suche nach dem Globalen in verschiedenen Umgebungen

Normalerweise muss das globale Objekt nicht explizit spezifiziert werden - seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem das globale Objekt explizit zugegriffen werden muss, ist, wenn darauf _geschrieben_ wird, normalerweise für den Zweck von {{Glossary("Polyfill", "Polyfills")}}.

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch [CSP](/de/docs/Web/HTTP/CSP)-Verstöße in einigen Einstellungen, daher würden Autoren eine abschnittsweise Definition wie diese (leicht adaptiert aus dem [original core-js source](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)) verwenden:

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

Nachdem wir das globale Objekt erhalten haben, können wir neue globale Variablen darauf definieren. Zum Beispiel das Hinzufügen einer Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl):

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

Mit `globalThis` verfügbar ist die zusätzliche Suche nach dem globalen Objekt in verschiedenen Umgebungen nicht mehr erforderlich:

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
