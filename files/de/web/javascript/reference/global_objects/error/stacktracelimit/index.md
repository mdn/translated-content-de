---
title: Error.stackTraceLimit
short-title: stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

> [!NOTE]
> Diese Funktion ist Teil der derzeit nicht standardisierten [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api). Aus Kompatibilitätsgründen wird sie jedoch auch von JavaScriptCore implementiert.

Die **`Error.stackTraceLimit`** statische Dateneigenschaft gibt die maximale Anzahl von Stack-Frames an, die durch den Stack-Trace eines Fehlers erfasst werden. Sie kann durch Benutzer-Code gesetzt werden, um das Verhalten der Engine zu ändern.

Im Allgemeinen ist das _Lesen_ dieser Eigenschaft nicht sehr nützlich, aber sie kann auf einen neuen Wert _gesetzt_ werden. Das Setzen auf einen größeren Wert kann beim Debuggen hilfreich sein, da es ermöglicht, mehr vom Call-Stack zu sehen. Das Setzen auf einen kleineren Wert kann die Leistung verbessern, da es die Menge des erfassten Stacks reduziert.

## Wert

Ein Integer, der die maximale Anzahl von Stack-Frames darstellt, die durch den Stack-Trace eines Fehlers erfasst werden.

{{js_property_attributes(1, 1, 1)}}

## Beschreibung

Da `stackTraceLimit` eine statische Eigenschaft von `Error` ist, wird sie immer als `Error.stackTraceLimit` verwendet und nicht als Eigenschaft eines von Ihnen erstellten `Error`-Objekts. Wenn Sie den Stack-Trace nur für einen einzigen Fehler anpassen möchten, müssen Sie die Eigenschaft möglicherweise setzen, den Fehler erstellen und dann die Eigenschaft auf ihren ursprünglichen Wert zurücksetzen.

## Beispiele

### Setzen von Error.stackTraceLimit

Dieser Code ist sicher auszuführen, selbst in Umgebungen, die `Error.stackTraceLimit` nicht unterstützen, da er die Eigenschaft nicht liest, sondern nur setzt, und Engines, die sie nicht unterstützen, die Einstellung ignorieren werden.

```js
Error.stackTraceLimit = 2;
const a = () => b();
const b = () => c();
const c = () => d();
const d = () => e();
const e = () => {
  throw new Error("My error");
};
try {
  a();
} catch (e) {
  console.log(e.stack);
}
// Only two frames in supporting engines; all frames in others
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.captureStackTrace()")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
