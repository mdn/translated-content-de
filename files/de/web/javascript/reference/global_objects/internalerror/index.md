---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}{{Non-standard_Header}}

Das **`InternalError`**-Objekt zeigt einen Fehler an, der intern in der JavaScript-Engine aufgetreten ist.

Beispielhafte Fälle treten meist auf, wenn etwas zu groß ist, z.B.:

- "zu viele switch-Fälle",
- "zu viele Klammern im regulären Ausdruck",
- "Array-Initializer zu groß",
- "zu viel Rekursion".

`InternalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{non-standard_inline}}
  - : Erstellt ein neues `InternalError`-Objekt.

## Instanz-Eigenschaften

_Berbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `InternalError.prototype` definiert und werden von allen `InternalError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanz-Objekt erstellt hat. Für `InternalError`-Instanzen ist der Anfangswert der {{jsxref("InternalError/InternalError", "InternalError")}}-Konstruktor.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `InternalError.prototype.name` ist der Anfangswert `"InternalError"`.

## Instanz-Methoden

_Berbt Instanz-Methoden von seinem übergeordneten {{jsxref("Error")}}_.

## Beispiele

### Zu viel Rekursion

Diese rekursive Funktion läuft 10 Mal, entsprechend der Abbruchbedingung.

```js
function loop(x) {
  // "x >= 10" is the exit condition
  if (x >= 10) return;

  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Wenn Sie diese Bedingung auf einen extrem hohen Wert setzen, funktioniert es möglicherweise nicht:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

Weitere Informationen finden Sie unter [InternalError: too much recursion.](/de/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- [InternalError: too much recursion](/de/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
