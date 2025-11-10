---
title: DataView.prototype.byteOffset
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`byteOffset`**-Zugriffseigenschaft von {{jsxref("DataView")}}-Instanzen gibt den Offset (in Bytes) dieses View im Vergleich zum Beginn seines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück.

{{InteractiveExample("JavaScript Demo: DataView.prototype.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## Beschreibung

Die `byteOffset`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des `DataView` festgelegt und kann nicht geändert werden. Der `byteOffset` wird jedoch zu 0, wenn der zugrundeliegende Puffer so weit verkleinert wird, dass der angezeigte Bereich nicht mehr gültig ist.

## Beispiele

### Verwendung der byteOffset-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteOffset; // 4
buffer2.resize(3);
dataviewLengthTracking.byteOffset; // 0 (viewed range is no longer valid)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
