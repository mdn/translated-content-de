---
title: "TypeError: zyklischer Objektwert"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "cyclic object value" tritt auf, wenn in [JSON](https://www.json.org/) Objektverweise gefunden werden. {{jsxref("JSON.stringify()")}} versucht nicht, diese zu lösen und schlägt dementsprechend fehl.

## Meldung

```plain
TypeError: Converting circular structure to JSON (V8-based)
TypeError: cyclic object value (Firefox)
TypeError: JSON.stringify cannot serialize cyclic structures. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Das [JSON-Format](https://www.json.org/) unterstützt an sich keine Objektverweise (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), daher versucht {{jsxref("JSON.stringify()")}} nicht, diese zu lösen, und schlägt dementsprechend fehl.

## Beispiele

### Zyklische Referenzen

In einer zyklischen Struktur wie der folgenden

```js
const circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

wird {{jsxref("JSON.stringify()")}} fehlschlagen

```js example-bad
JSON.stringify(circularReference);
// TypeError: cyclic object value
```

Um zyklische Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die diese unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)) oder selbst eine Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Das folgende Snippet veranschaulicht, wie man eine zyklische Referenz mithilfe des `replacer`-Parameters von {{jsxref("JSON.stringify()")}} findet und filtert (was zu Datenverlust führt):

```js
function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` ist das Objekt, in dem der Wert enthalten ist,
    // d.h., sein direkter Elternteil.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123,"myself":"[Circular]"}

const o = {};
const notCircularReference = [o, o];
JSON.stringify(notCircularReference, getCircularReplacer());
// [{},{}]
```

## Siehe auch

- {{jsxref("JSON.stringify()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) auf GitHub
