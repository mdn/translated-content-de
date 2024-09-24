---
title: StrukturierteClone() globale Funktion
short-title: strukturierteClone()
slug: Web/API/structuredClone
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`structuredClone()`**-Methode erzeugt einen [tiefen Klon](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes mittels des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode erlaubt es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert eher zu _übertragen_ als zu klonen in das neue Objekt.
Übertragene Objekte werden vom ursprünglichen Objekt abgetrennt und an das neue Objekt angehängt; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [strukturierte klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die eher in das zurückgegebene Objekt verschoben als geklont werden.

### Rückgabewert

Der zurückgegebene Wert ist eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Teil des Eingabewertes nicht serialisierbar ist.

## Beschreibung

Diese Funktion kann verwendet werden, um JavaScript-Werte [tief zu kopieren](/de/docs/Glossary/Deep_copy).
Sie unterstützt auch zirkuläre Referenzen, wie unten gezeigt:

```js
// Erstellen Sie ein Objekt mit einem Wert und einem zirkulären Verweis auf sich selbst.
const original = { name: "MDN" };
original.itself = original;

// Klonen Sie es
const clone = structuredClone(original);

console.assert(clone !== original); // die Objekte sind nicht identisch (nicht die gleiche Identität)
console.assert(clone.name === "MDN"); // sie haben die gleichen Werte
console.assert(clone.itself === clone); // und der zirkuläre Verweis bleibt erhalten
```

### Werte übertragen

[Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) (nur) können anstelle einer Duplizierung im geklonten Objekt unter Verwendung der `transfer`-Eigenschaft des `options`-Parameters übertragen werden. Das Übertragen macht das ursprüngliche Objekt unbenutzbar.

> [!NOTE]
> Ein Szenario, in dem dies nützlich sein könnte, ist die asynchrone Validierung einiger Daten in einem Puffer bevor sie gespeichert werden.
> Um zu vermeiden, dass der Puffer modifiziert wird, bevor die Daten gespeichert werden, können Sie den Puffer klonen und die Daten validieren.
> Wenn Sie die Daten auch _übertragen_, schlägt jeder Versuch, den ursprünglichen Puffer zu modifizieren, fehl und verhindert so dessen versehentlichen Missbrauch.

Der folgende Code zeigt, wie man ein Array klont und dessen zugrunde liegende Ressourcen an das neue Objekt überträgt.
Beim Rückgabewert wird der originale `uInt8Array.buffer` geleert.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Sie können eine beliebige Anzahl von Objekten klonen und jede Teilmenge dieser Objekte übertragen.
Zum Beispiel würde der unten stehende Code `arrayBuffer1` von dem übergebenen Wert übertragen, aber nicht `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Beispiele

### Ein Objekt klonen

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

### Ein Objekt übertragen

In diesem Beispiel erstellen wir ein {{jsxref("ArrayBuffer")}} und klonen dann das Objekt, dessen Mitglied es ist, indem wir den Puffer übertragen. Wir können den Puffer im geklonten Objekt verwenden, aber wenn wir versuchen, den ursprünglichen Puffer zu verwenden, erhalten wir eine Ausnahme.

```js
// Erstellen Sie einen ArrayBuffer mit einer Größe in Bytes
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// Klonen Sie das Objekt, das den Puffer enthält, und übertragen Sie es
const object2 = structuredClone(object1, { transfer: [buffer1] });

// Erstellen Sie ein Array aus dem geklonten Puffer
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// Die Erstellung eines Arrays aus dem ursprünglichen Puffer löst einen TypeError aus
const int32View1 = new Int32Array(object1.buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [Strukturierter Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Polyfill für strukturierten Klon](https://github.com/ungap/structured-clone)
