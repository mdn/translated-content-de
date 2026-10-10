---
title: "Window: structuredClone()-Methode"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("HTML DOM")}}

Die Methode **`structuredClone()`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt mithilfe des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines Werts.

Die Methode ermöglicht es außerdem, [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert auf das neue Objekt zu _übertragen_, statt sie zu klonen. Übertragene Objekte werden vom ursprünglichen Objekt gelöst und dem neuen Objekt zugeordnet. Im ursprünglichen Objekt sind sie nicht mehr zugänglich.

> [!NOTE]
> Bis Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` Objekte fälschlicherweise im [Realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) des Aufrufers statt im Realm des iframe. In Firefox 149 wurde die Implementierung so geändert, dass Objekte im `this`-Realm erstellt werden. Damit entspricht das Verhalten der Methode genauer der Spezifikation.
>
> In allen Browsern klont ein direkter Aufruf von `structuredClone(value)` Werte im Realm des Aufrufers. Ab Firefox 149 können [Content Scripts von WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) `window.structuredClone(value)` aufrufen, um Werte im Realm der Seite zu klonen, und `globalThis.structuredClone(value)`, um sie in den Realm des Content Scripts zu klonen. Weitere Informationen finden Sie unter [`structuredClone` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt. Es kann ein beliebiger [Typ sein, der mit dem Structured-Clone-Algorithmus geklont werden kann](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die auf das zurückgegebene Objekt übertragen statt geklont werden.

### Rückgabewert

Eine {{Glossary("Deep_copy", "tiefe Kopie")}} des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewerts nicht serialisierbar ist.

## Beschreibung

Mit dieser Funktion können Sie {{Glossary("Deep_copy", "tiefe Kopien")}} von JavaScript-Werten erstellen. Sie unterstützt auch zyklische Referenzen, wie unten gezeigt:

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

[Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) können mithilfe der Eigenschaft `transfer` des Parameters `options` auf das geklonte Objekt übertragen statt dupliziert werden. Nur übertragbare Objekte lassen sich auf diese Weise übertragen. Durch die Übertragung wird das ursprüngliche Objekt unbrauchbar.

> [!NOTE]
> Dies kann nützlich sein, wenn Sie Daten in einem Buffer asynchron validieren, bevor Sie sie speichern.
> Damit der Buffer nicht verändert wird, bevor die Daten gespeichert sind, können Sie ihn klonen und die Daten in der Kopie validieren.
> Wenn Sie die Daten außerdem _übertragen_, schlagen alle Versuche fehl, den ursprünglichen Buffer zu verändern. So wird eine versehentliche Verwendung verhindert.

Der folgende Code zeigt, wie Sie ein Array klonen und seine zugrunde liegenden Ressourcen auf das neue Objekt übertragen. Nach der Rückgabe ist der ursprüngliche `uInt8Array.buffer` geleert.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können beliebig viele Objekte klonen und eine beliebige Teilmenge davon übertragen. Der folgende Code überträgt beispielsweise `arrayBuffer1` aus dem übergebenen Wert, aber nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Ein Objekt klonen

In diesem Beispiel klonen wir ein Objekt mit einer Eigenschaft, deren Wert ein Array ist. Nach dem Klonen wirken sich Änderungen an einem der beiden Objekte nicht auf das andere aus.

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

### Ein Objekt übertragen

In diesem Beispiel erstellen wir einen {{jsxref("ArrayBuffer")}} und klonen anschließend das Objekt, zu dem er gehört. Dabei übertragen wir den Buffer. Wir können den Buffer im geklonten Objekt verwenden. Wenn wir jedoch versuchen, den ursprünglichen Buffer zu verwenden, wird eine Ausnahme ausgelöst.

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

- [Ein Polyfill für `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
