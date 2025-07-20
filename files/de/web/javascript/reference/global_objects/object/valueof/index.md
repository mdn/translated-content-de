---
title: Object.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die Methode **`valueOf()`** von {{jsxref("Object")}} Instanzen konvertiert den `this` Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten für benutzerdefinierte [Typkonvertierungslogik](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object = new MyNumberType(4);

console.log(object + 3);
// Expected output: 7
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this` Wert, in ein Objekt konvertiert.

> [!NOTE]
> Damit `valueOf` während der Typkonvertierung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()` Methoden haben, ruft ein Aufruf von `aPrimitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf` Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die `valueOf` Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt an einer Stelle erwartet wird, an der ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei der [numerischen Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitiven Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) verwendet, aber [Zeichenkettenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) ruft prioritär `toString()` auf, und `toString()` wird sehr wahrscheinlich einen Zeichenkettenwert zurückgeben (selbst bei der Grundimplementierung von {{jsxref("Object.prototype.toString()")}}), sodass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (das heißt alle, außer [`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()` Methode. Die Grundimplementierung von `Object.prototype.valueOf()` ist absichtlich nutzlos: Durch die Rückgabe eines Objekts wird sein Rückgabewert niemals von einem [Algorithmus zur primitiven Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen passenden primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, damit Ihr benutzerdefiniertes Objekt in einen primitiven Wert umgewandelt werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der am sinnvollsten für das Objekt ist — im Gegensatz zu `toString()` muss es sich dabei nicht um eine Zeichenkette handeln. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeder Typkonvertierung immer `valueOf` oder `toString` vorgezogen wird.

## Beispiele

### Verwendung von valueOf()

Die Grundmethode `valueOf()` gibt den `this`-Wert selbst zurück, in ein Objekt umgewandelt, falls es nicht bereits ein Objekt ist. Daher wird ihr Rückgabewert niemals von einem primitiven Konvertierungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standardmethode `valueOf` aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie während der Typkonvertierung keine übergeben bekommt.

Zum Beispiel können Sie eine `valueOf` Methode zu Ihrer benutzerdefinierten Klasse `Box` hinzufügen.

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

Mit dem obigen Code wird jedes Mal, wenn ein Objekt des Typs `Box` in einem Kontext verwendet wird, in dem es als ein primitiver Wert (aber nicht spezifisch als eine Zeichenkette) dargestellt werden soll, die im obigen Code definierte Funktion automatisch von JavaScript aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf` Methode eines Objekts wird normalerweise von JavaScript aufgerufen, aber Sie können sie auch selbst aufrufen:

```js
box.valueOf();
```

### Verwenden des unären Plus auf Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) auf seinem Operanden durch, was bedeutet, dass bei den meisten Objekten ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) deren `valueOf()` aufgerufen wird. Hat das Objekt jedoch keine benutzerdefinierte `valueOf()` Methode, führt die Grundimplementierung dazu, dass `valueOf()` ignoriert wird und stattdessen der Rückgabewert von `toString()` verwendet wird.

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
