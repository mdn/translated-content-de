---
title: Boolean() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Boolean()`** Konstruktor erstellt {{jsxref("Boolean")}}-Objekte. Wird die Funktion aufgerufen, gibt sie primitive Werte des Typs Boolean zurück.

{{InteractiveExample("JavaScript-Demo: Boolean-Konstruktor", "shorter")}}

```js interactive-example
const flag = new Boolean();

console.log(flag);
// Expected output: false
```

## Syntax

```js-nolint
new Boolean(value)
Boolean(value)
```

> **Hinweis:** `Boolean()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat jedoch unterschiedliche Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der initiale Wert des `Boolean`-Objekts.

### Rückgabewert

Wird `Boolean()` als Funktion aufgerufen (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)), gibt sie `value` [in einen boolean-Primitivwert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) zurück.

Wird `Boolean()` als Konstruktor aufgerufen (mit `new`), wandelt sie `value` in einen boolean-Primitivwert um und gibt ein umschließendes {{jsxref("Boolean")}}-Objekt zurück, das **kein** Primitivwert ist.

> [!WARNING]
> Sie sollten nur selten den `Boolean`-Konstruktor verwenden.

## Beschreibung

Der als erster Parameter übergebene Wert wird [in einen boolean-Wert konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Wenn der Wert weggelassen wird oder `0`, `-0`, `0n`, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`) ist, hat das Objekt einen Initialwert von `false`. Alle anderen Werte – einschließlich jedes Objekts, eines leeren Arrays (`[]`) oder des Strings `"false"` – erzeugen ein Objekt mit einem Initialwert von `true`.

> [!NOTE]
> Wenn die nicht-standardspezifische Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) als Argument für diesen Konstruktor verwendet wird, ist das Resultat ein `Boolean`-Objekt mit dem Wert `false`. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

## Beispiele

### Boolean-Objekte mit einem Initialwert von false erstellen

```js
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

typeof bfalse; // "object"
Boolean(bfalse); // true
```

Beachten Sie, dass die Konvertierung eines `Boolean`-Objekts in einen Primitivwert mit `Boolean()` immer `true` ergibt, selbst wenn das Objekt den Wert `false` enthält. Es wird daher dringend empfohlen, das Erstellen von `Boolean`-Wrapper-Objekten zu vermeiden.

Falls Sie den primitiven Wert aus dem Wrapper-Objekt extrahieren müssen, verwenden Sie stattdessen die Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) des Objekts anstelle der Funktion `Boolean()`.

```js
const bfalse = new Boolean(false);

bfalse.valueOf(); // false
```

### `Boolean`-Objekte mit einem Initialwert von `true` erstellen

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
