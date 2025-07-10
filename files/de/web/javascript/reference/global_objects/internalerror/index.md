---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Das **`InternalError`**-Objekt zeigt einen internen Fehler in der JavaScript-Engine an.

Beispielhafte Fälle treten meist auf, wenn etwas zu groß ist, z.B.:

- "zu viele switch-Fälle",
- "zu viele Klammern in regulärem Ausdruck",
- "Array-Initialisierer zu groß",
- "zu viel Rekursion".

`InternalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{non-standard_inline}}
  - : Erstellt ein neues `InternalError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `InternalError.prototype` definiert und werden von allen `InternalError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `InternalError`-Instanzen ist der anfängliche Wert der {{jsxref("InternalError/InternalError", "InternalError")}}-Konstruktor.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `InternalError.prototype.name` ist der anfängliche Wert `"InternalError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("Error")}}_.

## Beispiele

### Zu viel Rekursion

Diese rekursive Funktion läuft 10 Mal, gemäß der Ausstiegsbedingung.

```js
function loop(x) {
  // "x >= 10" is the exit condition
  if (x >= 10) return;

  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Wenn diese Bedingung auf einen extrem hohen Wert gesetzt wird, funktioniert es möglicherweise nicht:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

Für weitere Informationen siehe [InternalError: too much recursion.](/de/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- [InternalError: too much recursion](/de/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
