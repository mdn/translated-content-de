---
title: SharedArrayBuffer.prototype.growable
short-title: growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`growable`** Zugriffs-Eigenschaft von {{jsxref("SharedArrayBuffer")}} Instanzen gibt zurück, ob dieser `SharedArrayBuffer` erweiterbar ist oder nicht.

## Beschreibung

Die `growable` Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Zugriffsfunktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird bei der Konstruktion des Arrays festgelegt. Wenn im Konstruktor die Option `maxByteLength` gesetzt wurde, wird `growable` `true` zurückgeben; andernfalls wird es `false` zurückgeben.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder von einer beliebigen Webseite aus ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von growable

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, überprüfen dann seine `growable` Eigenschaft und erweitern ihn, wenn `growable` `true` zurückgibt:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
