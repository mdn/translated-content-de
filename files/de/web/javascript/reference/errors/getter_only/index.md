---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) vorkommende JavaScript-Ausnahme "setting getter-only property" tritt auf, wenn versucht wird, einem Eigenschaftswert einen neuen Wert zuzuweisen, für den nur ein [getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist, oder wenn eine [private accessor-Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) gesetzt wird, die ebenfalls nur einen Getter hat.

## Nachricht

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## Fehlerart

{{jsxref("TypeError")}} in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) nur.

## Was ist schiefgelaufen?

Es wird versucht, einer Eigenschaft, für die nur ein [getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist, einen neuen Wert zuzuweisen. Während dies im nicht-strengen Modus stillschweigend ignoriert wird, löst es im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} aus. Klassen sind immer im strengen Modus, daher löst die Zuweisung zu einem rein lesenden privaten Element immer diesen Fehler aus.

## Beispiele

### Eigenschaft ohne Setter

Das folgende Beispiel zeigt, wie ein Getter für eine Eigenschaft gesetzt wird. Es wird kein [setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert, daher wird ein `TypeError` ausgelöst, wenn versucht wird, die `temperature`-Eigenschaft auf `30` zu setzen. Für weitere Details siehe auch die Seite {{jsxref("Object.defineProperty()")}}.

```js example-bad
"use strict";

function Archiver() {
  const temperature = null;
  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
  });
}

const arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

Um diesen Fehler zu beheben, müssen Sie entweder die Zeile `arc.temperature = 30`, die versucht, die temperature-Eigenschaft zu setzen, entfernen oder einen [setter](/de/docs/Web/JavaScript/Reference/Functions/set) dafür implementieren, zum Beispiel so:

```js example-good
"use strict";

function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
