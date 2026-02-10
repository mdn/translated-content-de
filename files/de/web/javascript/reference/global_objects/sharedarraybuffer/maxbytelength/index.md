---
title: SharedArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`maxByteLength`** Zugriffs-Eigenschaft von {{jsxref("SharedArrayBuffer")}} Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser `SharedArrayBuffer` vergrößert werden kann.

## Beschreibung

Die `maxByteLength` Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird bei der Konstruktion des Shared-Arrays festgelegt, über die `maxByteLength`-Option des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} Konstruktors gesetzt und kann nicht geändert werden.

Wenn dieser `SharedArrayBuffer` ohne Angabe eines `maxByteLength` Wertes erstellt wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert des {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} des `SharedArrayBuffer` entspricht.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Byte vergrößerbar ist, und geben dann dessen `maxByteLength` zurück:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
