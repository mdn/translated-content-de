---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`globalThis`** enthält den [globalen `this`](/de/docs/Web/JavaScript/Reference/Operators/this#global_context)-Wert, der normalerweise dem [globalen Objekt](/de/docs/Glossary/Global_object) ähnlich ist.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html", "shorter")}}

## Wert

Das globale `this`-Objekt.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Die `globalThis`-Eigenschaft ist konfigurierbar und beschreibbar, sodass Code-Autoren sie verbergen können, wenn sie nicht vertrauenswürdigem Code ausführen, um zu verhindern, dass das globale Objekt offengelegt wird.

## Beschreibung

Historisch gesehen erforderte der Zugriff auf das globale Objekt unterschiedliche Syntax in verschiedenen JavaScript-Umgebungen. Im Web können Sie [`window`](/de/docs/Web/API/Window/window), [`self`](/de/docs/Web/API/Window/self) oder [`frames`](/de/docs/Web/API/Window/frames) verwenden - aber in [Web Workers](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktionieren keine dieser Optionen, und Sie müssen stattdessen `global` verwenden. Das `this`-Schlüsselwort konnte innerhalb von Funktionen verwendet werden, die im Nicht-Strict-Modus laufen, aber `this` wird `undefined` in Modulen und innerhalb von Funktionen sein, die im Strict-Modus laufen. Sie können auch `Function('return this')()` verwenden, aber Umgebungen, die {{jsxref("Global_Objects/eval", "eval()")}} deaktivieren, wie z. B. [CSP](/de/docs/Glossary/CSP) in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die `globalThis`-Eigenschaft bietet eine standardisierte Möglichkeit, auf den globalen `this`-Wert (und damit auf das globale Objekt selbst) in verschiedenen Umgebungen zuzugreifen. Anders als ähnliche Eigenschaften wie `window` und `self` ist es garantiert, dass `globalThis` in Fenster- und Nicht-Fenster-Kontexten funktioniert. So können Sie auf das globale Objekt in konsistenter Weise zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um sich den Namen zu merken, denken Sie einfach daran, dass im globalen Bereich der `this`-Wert `globalThis` ist.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d. h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) – dies ist der Fall bei Browsern und Node – aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

### HTML und der WindowProxy

In vielen Engines wird `globalThis` eine Referenz auf das eigentliche globale Objekt sein, aber in Web-Browsern verweist es aufgrund von iframe- und fensterübergreifenden Sicherheitsüberlegungen auf einen {{jsxref("Proxy")}} um das tatsächliche globale Objekt (auf das Sie nicht direkt zugreifen können). Diese Unterscheidung ist in der üblichen Anwendung selten relevant, aber wichtig zu beachten.

### Benennung

Mehrere andere populäre Namensauswahlen wie `self` und `global` wurden aus Überlegungen zur Kompatibilität mit bestehendem Code entfernt. Siehe das [Namensdokument des Sprachvorschlags](https://github.com/tc39/proposal-global/blob/master/NAMING.md) für weitere Details.

`globalThis` ist im wahrsten Sinne des Wortes der globale `this`-Wert. Es ist derselbe Wert wie der `this`-Wert in einer nicht-strikten Funktion, die ohne ein Objekt aufgerufen wird. Es ist auch der Wert von `this` im globalen Bereich eines Skripts.

## Beispiele

### Suchen des globalen Objekts in verschiedenen Umgebungen

Normalerweise muss das globale Objekt nicht explizit angegeben werden – seine Eigenschaften sind automatisch als globale Variablen zugänglich.

```js
console.log(window.Math === Math); // true
```

Ein Fall, in dem explizit auf das globale Objekt zugegriffen werden muss, ist, wenn man darauf _schreiben_ möchte, normalerweise zum Zweck von [Polyfills](/de/docs/Glossary/Polyfill).

Vor `globalThis` war die einzige zuverlässige plattformübergreifende Möglichkeit, das globale Objekt für eine Umgebung zu erhalten, `Function('return this')()`. Dies verursacht jedoch in einigen Einstellungen [CSP](/de/docs/Web/HTTP/CSP)-Verletzungen, sodass Autoren eine partielle Definition verwenden würden, wie in diesem Beispiel (leichter angepasst aus der [ursprünglichen core-js-Quelle](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)):

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

Nach Erhalten des globalen Objekts können wir neue Globals darauf definieren. Zum Beispiel, indem wir eine Implementierung für [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) hinzufügen:

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

Mit `globalThis` verfügbar ist die zusätzliche Suche nach dem globalen Objekt in verschiedenen Umgebungen nicht mehr notwendig:

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
