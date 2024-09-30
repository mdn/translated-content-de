---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{jsSidebar("Objects")}}

Die **`globalThis`** globale Eigenschaft enthält den [globalen `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context) Wert, der in der Regel dem [globalen Objekt](/de/docs/Glossary/Global_object) ähnelt.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html", "shorter")}}

## Wert

Das globale `this`-Objekt.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die `globalThis`-Eigenschaft ist konfigurierbar und beschreibbar, sodass Codeautoren sie verstecken können, wenn nicht vertrauenswürdiger Code ausgeführt wird, um zu verhindern, dass das globale Objekt überbelichtet wird.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden - aber in [Web Workers](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keiner dieser Zugriffe, stattdessen muss `global` verwendet werden. Das `this`-Schlüsselwort konnte innerhalb von Funktionen, die im nicht-strikten Modus laufen, verwendet werden, aber `this` ist `undefined` in Modulen und innerhalb von Funktionen, die im strikten Modus laufen. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie [CSP](/de/docs/Glossary/CSP) in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Möglichkeit, auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) in verschiedenen Umgebungen zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` funktioniert es garantiert in Fenster- und Nicht-Fenster-Kontexten. Auf diese Weise können Sie auf das globale Objekt konsistent zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um Ihnen den Namen zu merken, denken Sie einfach daran, dass im globalen Gültigkeitsbereich der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) – dies ist der Fall für Browser und Node – aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nichts mit dem globalen Objekt zu tun hat.

### HTML und der WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das tatsächliche globale Objekt sein, aber in Webbrowsern, aufgrund von Sicherheitsüberlegungen bei iframes und fensterübergreifenden Verbindungen, verweist es auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt (auf das Sie nicht direkt zugreifen können). Dieser Unterschied ist in der gewöhnlichen Nutzung selten von Bedeutung, aber wichtig zu beachten.

### Namensgebung

Mehrere andere beliebte Namensvorschläge wie `self` und `global` wurden aus der Überlegung herausgenommen, weil sie die Kompatibilität mit bestehendem Code gefährden könnten. Siehe das [Dokument zur Namensgebung des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md) für weitere Details.

`globalThis` ist buchstäblich der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Gültigkeitsbereich eines Skripts.

## Beispiele

### Suchen nach dem Globalen in verschiedenen Umgebungen

Normalerweise muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem das globale Objekt jedoch explizit angesprochen werden muss, ist, wenn darauf _geschrieben_ werden soll, üblicherweise für [Polyfills](/de/docs/Glossary/Polyfill).

Vor `globalThis` war der einzige zuverlässige plattformübergreifende Weg, um das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch [CSP](/de/docs/Web/HTTP/CSP)-Verletzungen in einigen Einstellungen, daher würden Autoren eine Stückweise-Definition wie diese verwenden (leicht angepasst von der [originalen core-js-Quelle](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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
- {{jsxref("Operators/this", "this")}}
