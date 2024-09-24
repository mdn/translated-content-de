---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`globalThis`** enthält den [globalen `this`-Wert](/de/docs/Web/JavaScript/Reference/Operators/this#global_context), der normalerweise dem [globalen Objekt](/de/docs/Glossary/Global_object) ähnelt.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html", "shorter")}}

## Wert

Das globale `this`-Objekt.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die Eigenschaft `globalThis` ist konfigurierbar und beschreibbar, sodass Codeautoren sie verbergen können, wenn sie nicht vertrauenswürdigen Code ausführen, und verhindern, dass das globale Objekt offengelegt wird.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt in verschiedenen JavaScript-Umgebungen unterschiedliche Syntax. Im Web können Sie {{domxref("Window/window", "window")}}, {{domxref("Window/self", "self")}} oder {{domxref("Window/frames", "frames")}} verwenden – aber in [Web Workern](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keine dieser Optionen und stattdessen muss `global` verwendet werden. Das `this`-Schlüsselwort könnte innerhalb von Funktionen verwendet werden, die im Nicht-strikten Modus laufen, aber `this` wird in Modulen und innerhalb von Funktionen im strikten Modus `undefined` sein. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie z.B. {{Glossary("CSP")}} in Browsern, verhindern die Nutzung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Möglichkeit, auf den globalen `this`-Wert (und somit auf das globale Objekt selbst) über verschiedene Umgebungen hinweg zuzugreifen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` funktioniert es garantiert in Fenster- und Nicht-Fenster-Kontexten. Auf diese Weise können Sie das globale Objekt auf konsistente Weise zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um Ihnen zu helfen, sich den Namen zu merken, denken Sie einfach daran, dass im globalen Bereich der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies gilt für Browser und Node — aber die Gastgeber können einen anderen Wert für `globalThis` anbieten, der nicht mit dem globalen Objekt zusammenhängt.

### HTML und der WindowProxy

In vielen Engines wird `globalThis` ein Verweis auf das tatsächliche globale Objekt sein, aber in Webbrowsern verweist es, aufgrund von Sicherheitsüberlegungen bezüglich iframes und Übergreifenden Fenstern, auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist selten in der üblichen Nutzung relevant, aber wichtig zu wissen.

### Benennung

Mehrere andere populäre Namensmöglichkeiten wie `self` und `global` wurden von der Betrachtung ausgeschlossen, weil sie die Kompatibilität mit bestehendem Code beeinträchtigen könnten. Siehe das [Namensdokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md) für weitere Details.

`globalThis` ist buchstäblich der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Bereich eines Skripts.

## Beispiele

### Suche nach dem Globalen über verschiedene Umgebungen hinweg

In der Regel muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem man jedoch explizit auf das globale Objekt zugreifen muss, ist beim _Schreiben_ darauf, in der Regel für den Zweck von [Polyfills](/de/docs/Glossary/Polyfill).

Vor `globalThis` war die einzige zuverlässige plattformübergreifende Möglichkeit, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch in einigen Einstellungen [CSP](/de/docs/Web/HTTP/CSP)-Verletzungen, daher würden Autoren eine Stück-für-Stück-Definition wie diese verwenden (etwas angepasst von der [ursprünglichen core-js-Quelle](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

```js
function check(it) {
  // Math ist bekannt dafür, als global in jeder Umgebung existieren.
  return it && it.Math === Math && it;
}

const globalObject =
  check(typeof window === "object" && window) ||
  check(typeof self === "object" && self) ||
  check(typeof global === "object" && global) ||
  // Dies gibt undefined zurück, wenn es im strikten Modus ausgeführt wird.
  (function () {
    return this;
  })() ||
  Function("return this")();
```

Nachdem das globale Objekt erhalten wurde, können wir neue Globale darauf definieren. Zum Beispiel, indem wir eine Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) hinzufügen:

```js
if (typeof globalObject.Intl === "undefined") {
  // Kein Intl in dieser Umgebung; definieren wir unser eigenes im globalen Bereich
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Unsere Intl-Implementierung
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

Mit `globalThis` verfügbar ist die zusätzliche Suche nach dem Globalen über Umgebungen nicht mehr notwendig:

```js
if (typeof globalThis.Intl === "undefined") {
  Object.defineProperty(globalThis, "Intl", {
    value: {
      // Unsere Intl-Implementierung
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
