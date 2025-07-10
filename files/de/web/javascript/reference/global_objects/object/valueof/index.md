---
title: Object.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`valueOf()`**-Methode von {{jsxref("Object")}}-Instanzen wandelt den `this`-Wert [in ein Objekt um](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten für benutzerdefinierte [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this`-Wert, in ein Objekt konvertiert.

> [!NOTE]
> Damit `valueOf` bei der Typkonvertierung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()`-Methoden haben, ruft der Aufruf von `aPrimitiveValue.valueOf()` in der Regel nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um ein [Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die `valueOf`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt anstelle eines primitiven Werts erwartet wird.

Diese Methode wird vorrangig bei der [numerischen Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitiven Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) aufgerufen, jedoch ruft die [Zeichenfolgenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) `toString()` vorrangig auf, und `toString()` liefert sehr wahrscheinlich einen Zeichenfolgenwert zurück (sogar in der {{jsxref("Object.prototype.toString()")}}-Basisimplementierung), so dass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (d.h. alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Die `Object.prototype.valueOf()`-Basisimplementierung ist bewusst nutzlos: Indem sie ein Objekt zurückgibt, wird ihr Rückgabewert niemals von einem [primitiven Konvertierungsalgorithmus](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, so dass Ihr benutzerdefiniertes Objekt in einen primitiven Wert konvertiert werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am sinnvollsten ist — im Gegensatz zu `toString()` muss es kein String sein. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und immer gegenüber `valueOf` oder `toString` bei jeder Typkonvertierung bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis-`valueOf()`-Methode gibt den `this`-Wert selbst zurück, der in ein Objekt konvertiert wird, wenn er es noch nicht ist. Daher wird ihr Rückgabewert niemals von einem primitiven Konvertierungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`valueOf`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da ihr keine übergeben werden, wenn sie während der Typkonvertierung aufgerufen wird.

Beispielsweise können Sie Ihrer benutzerdefinierten Klasse `Box` eine `valueOf`-Methode hinzufügen.

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

Mit dem obigen Code wird jedes Mal, wenn ein Objekt vom Typ `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert dargestellt werden soll (aber nicht speziell als String), automatisch die im obigen Code definierte Funktion aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Eine `valueOf`-Methode eines Objekts wird in der Regel von JavaScript aufgerufen, aber Sie können sie auch selbst aufrufen, wie folgt:

```js
box.valueOf();
```

### Verwendung von einstelligen Plus auf Objekten

[Einstelliges Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) auf seinem Operanden durch, was bei den meisten Objekten ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Hat das Objekt jedoch keine benutzerdefinierte `valueOf()`-Methode, bewirkt die Basisimplementierung, dass `valueOf()` ignoriert wird und der Rückgabewert von `toString()` stattdessen verwendet wird.

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
