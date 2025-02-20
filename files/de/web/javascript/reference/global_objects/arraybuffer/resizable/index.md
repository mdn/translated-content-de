---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`resizable`** Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt zurück, ob dieser ArrayBuffer vergrößert bzw. verkleinert werden kann oder nicht.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Expected output: true

console.log(buffer2.resizable);
// Expected output: false
```

## Beschreibung

Die `resizable`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird bei der Erstellung des Arrays festgelegt. Wenn die `maxByteLength`-Option im Konstruktor festgelegt wurde, gibt `resizable` `true` zurück; andernfalls gibt es `false` zurück.

## Beispiele

### Verwendung von resizable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, prüfen anschließend seine `resizable`-Eigenschaft und verändern seine Größe, falls `resizable` `true` zurückgibt:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
