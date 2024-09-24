---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}{{Non-standard_Header}}

Das **`InternalError`**-Objekt weist auf einen Fehler hin, der intern in der JavaScript-Engine aufgetreten ist.

Beispielsituationen sind vor allem dann gegeben, wenn etwas zu groß ist, z.B.:

- "zu viele switch-Fälle",
- "zu viele Klammern im regulären Ausdruck",
- "Array-Initialisierer zu groß",
- "zu viel Rekursion".

`InternalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{non-standard_inline}}
  - : Erstellt ein neues `InternalError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `InternalError.prototype` definiert und werden von allen `InternalError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `InternalError`-Instanzen ist der Anfangswert der {{jsxref("InternalError/InternalError", "InternalError")}}-Konstruktor.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `InternalError.prototype.name` ist der Anfangswert `"InternalError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Zu viel Rekursion

Diese rekursive Funktion läuft 10 Mal, gemäß der Abbruchbedingung.

```js
function loop(x) {
  // "x >= 10" ist die Abbruchbedingung
  if (x >= 10) return;

  // Ausführen von Aufgaben
  loop(x + 1); // der rekursive Aufruf
}
loop(0);
```

Wenn diese Bedingung auf einen extrem hohen Wert gesetzt wird, funktioniert es möglicherweise nicht:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  // Ausführen von Aufgaben
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
