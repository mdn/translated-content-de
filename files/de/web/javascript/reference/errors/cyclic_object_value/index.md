---
title: "TypeError: cyclic object value"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "cyclic object value" tritt auf, wenn Objektverweise in [JSON](https://www.json.org/) gefunden werden. {{jsxref("JSON.stringify()")}} versucht nicht, diese zu lösen, und scheitert entsprechend.

## Nachricht

```plain
TypeError: Converting circular structure to JSON (V8-based)
TypeError: cyclic object value (Firefox)
TypeError: JSON.stringify cannot serialize cyclic structures. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Das [JSON-Format](https://www.json.org/) unterstützt an sich keine Objektverweise (obwohl ein [IETF-Draft existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), daher versucht {{jsxref("JSON.stringify()")}} nicht, sie zu lösen, und scheitert entsprechend.

## Beispiele

### Zirkuläre Referenzen

In einer zirkulären Struktur wie der folgenden:

```js
const circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

wird {{jsxref("JSON.stringify()")}} fehlschlagen

```js example-bad
JSON.stringify(circularReference);
// TypeError: cyclic object value
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)) oder selbst eine Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Der folgende Codeausschnitt zeigt, wie man mit dem `replacer`-Parameter von {{jsxref("JSON.stringify()")}} eine zyklische Referenz findet und filtert (was zu Datenverlust führt):

```js
function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
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
