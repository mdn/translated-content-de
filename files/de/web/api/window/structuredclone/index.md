---
title: "Window: structuredClone() Methode"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: d1d2fb19fa649240ce6e25c4d79e21d9a5f6de37
---

{{APIRef("HTML DOM")}}

Die **`structuredClone()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt einen {{Glossary("Deep_copy", "tiefen Klon")}} eines Wertes unter Verwendung des [Structured Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode erlaubt es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im Originalwert _zu übertragen_ anstatt sie zu klonen und in das neue Objekt zu verschieben. Übertragene Objekte werden vom Originalobjekt getrennt und an das neue Objekt angehängt; sie sind im Originalobjekt nicht mehr zugänglich.

> [!NOTE]
> Bis einschließlich Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` fälschlicherweise Objekte im [Realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) des Aufrufers anstatt im Realm des iframes. In Firefox 149 wurde die Implementierung geändert, um Objekte im `this`-Realm zu instanziieren, sodass das Verhalten der Methode enger an die Spezifikation heranreicht.
>
> In allen Browsern klont ein direkter Aufruf `structuredClone(value)` Werte im Realm des Aufrufers. Ab Firefox 149 können [Web-Erweiterungs-Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) `window.structuredClone(value)` aufrufen, um Werte im Realm der Seite zu klonen und `globalThis.structuredClone(value)`, um in das Realm des Content-Skripts zu klonen. Weitere Informationen finden Sie in [`structuredClone` in Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeden [strukturiert klonbaren Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) umfassen.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die verschoben statt geklont werden, um das zurückgegebene Objekt zu bilden.

### Rückgabewert

Eine {{Glossary("Deep_copy", "tiefe Kopie")}} des originalen `value`.

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

### Werte übertragen

[Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) (nur diese) können anstatt dupliziert in das geklonte Objekt über die `transfer` Eigenschaft des `options`-Parameters übertragen werden. Das Übertragen macht das Originalobjekt unbrauchbar.

> [!NOTE]
> Ein Szenario, in dem dies nützlich sein könnte, ist die asynchrone Validierung von Daten in einem Puffer, bevor diese gespeichert werden. Um zu vermeiden, dass der Puffer verändert wird, bevor die Daten gespeichert sind, können Sie den Puffer klonen und diese Daten validieren. Wenn Sie die Daten zusätzlich _übertragen_, schlagen Versuche, den ursprünglichen Puffer zu ändern, fehl und verhindern so eine versehentliche Fehlverwendung.

Dieser Code zeigt, wie man ein Array klont und dessen zugrundeliegende Ressourcen an das neue Objekt überträgt. Bei Rückkehr ist das ursprüngliche `uInt8Array.buffer` gelöscht.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können eine beliebige Anzahl von Objekten klonen und davon eine beliebige Teilmenge übertragen. Dieses Beispiel überträgt `arrayBuffer1` aus dem übergebenen Wert, aber nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Ein Objekt klonen

In diesem Beispiel klonen wir ein Objekt mit einem Element, das ein Array ist. Nach dem Klonen wirken sich Änderungen an jedem Objekt nicht auf das andere Objekt aus.

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

In diesem Beispiel erstellen wir einen {{jsxref("ArrayBuffer")}} und klonen dann das Objekt, dem es zugehörig ist, und übertragen den Puffer. Wir können den Puffer im geklonten Objekt verwenden, jedoch führt ein Versuch, den ursprünglichen Puffer zu verwenden, zu einer Ausnahme.

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

- [Ein Polyfill von `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [Structured Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured Clone Polyfill](https://github.com/ungap/structured-clone)
