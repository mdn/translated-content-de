---
title: "Window: structuredClone() Methode"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("HTML DOM")}}

Die **`structuredClone()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes unter Verwendung des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode ermöglicht es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert _zu transferieren_, anstatt sie in das neue Objekt zu klonen. Übertragene Objekte werden vom ursprünglichen Objekt abgetrennt und dem neuen Objekt zugeordnet; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [strukturiert klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die verschoben statt geklont werden sollen, um das zurückgegebene Objekt zu erstellen.

### Rückgabewert

Eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewerts nicht serialisierbar ist.

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

### Übertragung von Werten

[Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) (nur) können unter Verwendung der `transfer`-Eigenschaft des `options`-Parameters übertragen anstatt in das geklonte Objekt dupliziert werden. Die Übertragung macht das ursprüngliche Objekt unbrauchbar.

> [!NOTE]
> Ein Szenario, in dem dies nützlich sein könnte, ist die asynchrone Validierung von Daten in einem Puffer, bevor sie gespeichert werden.
> Um zu vermeiden, dass der Puffer modifiziert wird, bevor die Daten gespeichert werden, können Sie den Puffer klonen und die Daten validieren.
> Wenn Sie die Daten auch _übertragen_, wird jeder Versuch, den ursprünglichen Puffer zu ändern, fehlschlagen und ein unbeabsichtigtes Fehlverhalten verhindern.

Der folgende Code zeigt, wie man ein Array klont und dessen zugrundeliegende Ressourcen auf das neue Objekt überträgt. Nach der Rückgabe wird das ursprüngliche `uInt8Array.buffer` geleert.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können beliebig viele Objekte klonen und eine beliebige Teilmenge dieser Objekte übertragen. Zum Beispiel würde der untenstehende Code `arrayBuffer1` aus dem übergebenen Wert übertragen, aber nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Klonen eines Objekts

In diesem Beispiel klonen wir ein Objekt mit einem Mitglied, das ein Array ist. Nach dem Klonen beeinflussen Änderungen an jedem Objekt das andere Objekt nicht.

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

### Übertragung eines Objekts

In diesem Beispiel erstellen wir ein {{jsxref("ArrayBuffer")}} und klonen dann das Objekt, dessen Mitglied er ist, und übertragen den Puffer. Wir können den Puffer im geklonten Objekt verwenden, aber wenn wir versuchen, den ursprünglichen Puffer zu verwenden, erhalten wir eine Ausnahme.

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
- [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured Clone Polyfill](https://github.com/ungap/structured-clone)
