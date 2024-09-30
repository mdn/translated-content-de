---
title: "Window: structuredClone() Methode"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("HTML DOM")}}

Die **`structuredClone()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes unter Verwendung des [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode ermöglicht es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert _zu übertragen_ statt sie zu klonen. Übertragene Objekte werden vom ursprünglichen Objekt getrennt und an das neue Objekt gebunden; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [structured-clonebare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die zum zurückgegebenen Objekt verschoben und nicht geklont werden.

### Rückgabewert

Eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewertes nicht serialisierbar ist.

## Beschreibung

Diese Funktion kann verwendet werden, um JavaScript-Werte [tief zu kopieren](/de/docs/Glossary/Deep_copy).
Sie unterstützt auch zirkuläre Referenzen, wie unten gezeigt:

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```

### Werte übertragen

[Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) können (nur) statt dupliziert zu werden im geklonten Objekt übertragen werden, indem die `transfer` Eigenschaft des `options` Parameters verwendet wird. Das Übertragen macht das ursprüngliche Objekt unbrauchbar.

> [!NOTE]
> Ein Szenario, in dem dies nützlich sein könnte, ist das asynchrone Validieren von Daten in einem Puffer, bevor sie gespeichert werden.
> Um zu vermeiden, dass der Puffer geändert wird, bevor die Daten gespeichert sind, können Sie den Puffer klonen und diese Daten validieren.
> Wenn Sie die Daten auch _übertragen_, schlagen alle Versuche, den ursprünglichen Puffer zu ändern, fehl, was einen versehentlichen Missbrauch verhindert.

Der folgende Code zeigt, wie ein Array geklont und seine zugrunde liegenden Ressourcen an das neue Objekt übertragen werden.
Nach der Rückkehr wird der ursprüngliche `uInt8Array.buffer` gelöscht.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können eine beliebige Anzahl von Objekten klonen und jede Teilmenge dieser Objekte übertragen.
Zum Beispiel würde der unten stehende Code `arrayBuffer1` aus dem übergebenen Wert übertragen, aber nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Klonen eines Objekts

In diesem Beispiel klonen wir ein Objekt mit einem Mitglied, das ein Array ist. Nach dem Klonen beeinflussen Änderungen an jedem Objekt das andere nicht.

```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### Übertragen eines Objekts

In diesem Beispiel erstellen wir einen {{jsxref("ArrayBuffer")}} und klonen dann das Objekt, dessen Mitglied er ist, und übertragen den Puffer. Wir können den Puffer im geklonten Objekt verwenden, aber wenn wir versuchen, den originalen Puffer zu verwenden, werden wir eine Ausnahme erhalten.

```js
// Create an ArrayBuffer with a size in bytes
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// Clone the object containing the buffer, and transfer it
const object2 = structuredClone(object1, { transfer: [buffer1] });

// Create an array from the cloned buffer
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// Creating an array from the original buffer throws a TypeError
const int32View1 = new Int32Array(object1.buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [Structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone Polyfill](https://github.com/ungap/structured-clone)
