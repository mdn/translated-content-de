---
title: "Window: structuredClone() Methode"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("HTML DOM")}}

Die **`structuredClone()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Werts unter Verwendung des [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode ermöglicht auch, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert _übertragen_ anstatt geklont werden. Übertragene Objekte werden vom ursprünglichen Objekt getrennt und dem neuen Objekt zugeordnet; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt. Dies kann jeder [strukturklonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die anstatt geklont, in das zurückgegebene Objekt verschoben werden.

### Rückgabewert

Eine {{Glossary("Deep_copy", "tiefe Kopie")}} des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewertes nicht serialisierbar ist.

## Beschreibung

Diese Funktion kann verwendet werden, um JavaScript-Werte {{Glossary("Deep_copy", "tief zu kopieren")}}.
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

### Übertragen von Werten

[Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) (nur) können anstelle der Duplizierung im geklonten Objekt übertragen werden, indem die `transfer`-Eigenschaft des `options`-Parameters verwendet wird. Das Übertragen macht das ursprüngliche Objekt unbrauchbar.

> [!NOTE]
> Ein Szenario, in dem dies nützlich sein könnte, ist, wenn Daten in einem Puffer asynchron validiert werden, bevor sie gespeichert werden. Um zu vermeiden, dass der Puffer verändert wird, bevor die Daten gespeichert werden, können Sie den Puffer klonen und diese Daten validieren. Wenn Sie die Daten auch _übertragen_, werden alle Versuche, den ursprünglichen Puffer zu ändern, fehlschlagen, was einen versehentlichen Missbrauch verhindert.

Der folgende Code zeigt, wie man ein Array klont und dessen zugrunde liegende Ressourcen in das neue Objekt überträgt. Nach der Rückkehr wird der ursprüngliche `uInt8Array.buffer` geleert.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können beliebig viele Objekte klonen und einen Teil dieser Objekte übertragen. Zum Beispiel würde der untenstehende Code `arrayBuffer1` aus dem übergebenen Wert übertragen, jedoch nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Klonen eines Objekts

In diesem Beispiel klonen wir ein Objekt mit einem Mitglied, welches ein Array ist. Nach dem Klonen beeinflussen Änderungen an jedem Objekt nicht das andere Objekt.

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

In diesem Beispiel erstellen wir ein {{jsxref("ArrayBuffer")}} und klonen dann das Objekt, dessen Mitglied es ist, wobei der Puffer übertragen wird. Wir können den Puffer im geklonten Objekt verwenden, aber wenn wir versuchen, den ursprünglichen Puffer zu verwenden, erhalten wir eine Ausnahme.

```js
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const object1 = {
  buffer,
};

// Clone the object containing the buffer, and transfer it
const object2 = structuredClone(object1, { transfer: [buffer] });

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
- [Structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone polyfill](https://github.com/ungap/structured-clone)
