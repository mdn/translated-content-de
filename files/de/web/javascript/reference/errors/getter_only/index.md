---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Ausnahme "setting getter-only property" tritt auf, wenn versucht wird, einer Eigenschaft einen neuen Wert zuzuweisen, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist, oder wenn versucht wird, eine [private Zugriffsorndereigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) zu setzen, die ebenfalls nur einen Getter definiert hat.

## Meldung

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schief gelaufen?

Es wird versucht, einer Eigenschaft einen neuen Wert zuzuweisen, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist. Während dies im Nicht-Strict-Modus stillschweigend ignoriert wird, wird im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ein {{jsxref("TypeError")}} ausgelöst. Klassen sind immer im Strict-Modus, daher führt die Zuweisung zu einem Getter-only-Private-Element immer zu diesem Fehler.

## Beispiele

### Eigenschaft ohne Setter

Das folgende Beispiel zeigt, wie ein Getter für eine Eigenschaft festgelegt wird. Es wird kein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) angegeben, daher wird ein `TypeError` ausgelöst, wenn versucht wird, die `temperature`-Eigenschaft auf `30` zu setzen. Weitere Details finden Sie auch auf der Seite {{jsxref("Object.defineProperty()")}}.

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

Um diesen Fehler zu beheben, müssen Sie entweder die Zeile `arc.temperature = 30` entfernen, die versucht, die Temperatureigenschaft zu setzen, oder Sie müssen einen [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) dafür implementieren, zum Beispiel so:

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
