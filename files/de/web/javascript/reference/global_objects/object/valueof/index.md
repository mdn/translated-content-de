---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("Object")}}-Instanzen konvertiert den `this`-Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten für eine benutzerdefinierte [Typkonvertierungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) überschrieben werden.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this`-Wert, konvertiert zu einem Objekt.

> [!NOTE]
> Damit `valueOf` bei der Typkonvertierung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()`-Methoden haben, ruft der Aufruf von `aPrimitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um [ein Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Data_structures#type_coercion). Sie müssen die `valueOf`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt angetroffen wird, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig von [numerischer Konvertierung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitiver Konvertierung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) aufgerufen, aber [Zeichenkettenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) ruft vorrangig `toString()` auf, und `toString()` wird sehr wahrscheinlich einen Zeichenkettenwert zurückgeben (selbst für die {{jsxref("Object.prototype.toString()")}}-Basisimplementierung), daher wird `valueOf()` in diesem Fall normalerweise nicht aufgerufen.

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Die Basisimplementierung von `Object.prototype.valueOf()` ist absichtlich nutzlos: Indem sie ein Objekt zurückgibt, wird ihr Rückgabewert nie von einem [Primitive-Konvertierungsalgorithmus](/de/docs/Web/JavaScript/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen primitiven Wert umgewandelt werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am bedeutungsvollsten ist — im Gegensatz zu `toString()` muss es sich nicht um eine Zeichenkette handeln. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeder Typkonvertierung immer gegenüber `valueOf` oder `toString` bevorzugt wird.

## Beispiele

### Verwenden von valueOf()

Die Basis `valueOf()`-Methode gibt den `this`-Wert selbst zurück, konvertiert zu einem Objekt, wenn es nicht bereits eines ist. Daher wird ihr Rückgabewert nie von einem primitiven Konvertierungsalgorithmus verwendet werden.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`valueOf`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie während der Typkonvertierung keine übergeben bekommt.

Zum Beispiel können Sie eine `valueOf`-Methode zu Ihrer benutzerdefinierten Klasse `Box` hinzufügen.

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

Mit dem vorhergehenden Code wird jedes Mal, wenn ein Objekt des Typs `Box` in einem Kontext verwendet wird, wo es als primitiver Wert (jedoch nicht speziell als Zeichenkette) dargestellt werden soll, automatisch die im vorhergehenden Code definierte Funktion aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf`-Methode eines Objekts wird normalerweise von JavaScript aufgerufen, aber Sie können sie selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwenden des unären Plus auf Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt [Zahlenkoerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) auf seinem Operanden aus, was für die meisten Objekte ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Wenn jedoch das Objekt keine benutzerdefinierte `valueOf()`-Methode hat, führt die Basisimplementierung dazu, dass `valueOf()` ignoriert wird und stattdessen der Rückgabewert von `toString()` verwendet wird.

```js
+new Date(); // the current timestamp; same as new Date().getTime()
+{}; // NaN (toString() returns "[object Object]")
+[]; // 0 (toString() returns an empty string list)
+[1]; // 1 (toString() returns "1")
+[1, 2]; // NaN (toString() returns "1,2")
+new Set([1]); // NaN (toString() returns "[object Set]")
+{ valueOf: () => 42 }; // 42
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
