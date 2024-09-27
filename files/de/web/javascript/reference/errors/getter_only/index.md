---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
l10n:
  sourceCommit: faee5a3a8399d43ca3ef49912fcb6cba5be6834c
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme "setting getter-only property" tritt auf, wenn versucht wird, einer Eigenschaft einen neuen Wert zuzuweisen, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist, oder wenn eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) gesetzt wird, die ähnlich nur einen Getter definiert hat.

## Nachricht

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Es wird versucht, einer Eigenschaft, für die nur ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert ist, einen neuen Wert zuzuweisen. Während dies im Nicht-Strict-Modus stillschweigend ignoriert wird, wirft es im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}}. Klassen befinden sich immer im Strict-Modus, daher wirft das Zuweisen zu einer Getter-only privaten Eigenschaft immer diesen Fehler.

## Beispiele

### Eigenschaft ohne Setter

Das nachfolgende Beispiel zeigt, wie man einen Getter für eine Eigenschaft einrichtet. Es wird kein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) angegeben, daher wird ein `TypeError` ausgelöst, wenn versucht wird, die `temperature`-Eigenschaft auf `30` zu setzen. Für weitere Details siehe auch die Seite {{jsxref("Object.defineProperty()")}}.

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
