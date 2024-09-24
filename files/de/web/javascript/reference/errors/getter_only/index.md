---
title: "TypeError: Festlegen der nur-Getter-Eigenschaft \"x\""
slug: Web/JavaScript/Reference/Errors/Getter_only
l10n:
  sourceCommit: faee5a3a8399d43ca3ef49912fcb6cba5be6834c
---

{{jsSidebar("Errors")}}

Die JavaScript-[strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only Ausnahme "Festlegen der nur-Getter-Eigenschaft" tritt auf, wenn versucht wird, einer Eigenschaft, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) festgelegt ist, einen neuen Wert zuzuweisen, oder wenn versucht wird, eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) festzulegen, die ebenfalls nur einen Getter definiert hat.

## Meldung

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schief gelaufen?

Es wird versucht, einer Eigenschaft, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) festgelegt ist, einen neuen Wert zuzuweisen. Während dies im nicht-strict mode stillschweigend ignoriert wird, wirft es im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}}. Klassen sind immer im strict mode, sodass das Zuweisen zu einer nur-Getter-Eigenschaft immer diesen Fehler auslöst.

## Beispiele

### Eigenschaft ohne Setter

Das folgende Beispiel zeigt, wie ein Getter für eine Eigenschaft gesetzt wird. Es wird kein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) festgelegt, sodass beim Versuch, die Eigenschaft `temperature` auf `30` zu setzen, ein `TypeError` ausgelöst wird. Weitere Details finden Sie auch auf der Seite {{jsxref("Object.defineProperty()")}}.

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

Um diesen Fehler zu beheben, müssen Sie entweder die Zeile `arc.temperature = 30` entfernen, die versucht, die temperature-Eigenschaft zu setzen, oder Sie müssen einen [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) dafür implementieren, zum Beispiel so:

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
