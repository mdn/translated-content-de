---
title: Error.stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
l10n:
  sourceCommit: 1a6926fa459b62c69cc5bcab1d15f247a2bbdf7e
---

{{JSRef}}{{Non-standard_Header}}

> [!NOTE]
> Diese Funktion ist Teil der derzeit nicht standardisierten [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api). Aus Kompatibilitätsgründen wird sie jedoch auch von JavaScriptCore implementiert.

Die statische Daten-Eigenschaft **`Error.stackTraceLimit`** gibt die maximale Anzahl an Stack-Frames an, die durch den Stack-Trace eines Fehlers erfasst werden. Sie kann durch Benutzer-Code gesetzt werden, um das Verhalten der Engine zu ändern.

Im Allgemeinen ist das _Auslesen_ dieser Eigenschaft nicht besonders nützlich, aber Sie können sie auf einen neuen Wert _setzen_. Das Festlegen auf einen größeren Wert kann beim Debugging hilfreich sein, da es Ihnen ermöglicht, mehr vom Call-Stack zu sehen. Das Festlegen auf einen kleineren Wert kann die Leistung verbessern, da die Menge des erfassten Stacks reduziert wird.

## Wert

Ein Integer-Wert, der die maximale Anzahl an Stack-Frames darstellt, die vom Stack-Trace eines Fehlers erfasst werden.

{{js_property_attributes(1, 1, 1)}}

## Beschreibung

Da `stackTraceLimit` eine statische Eigenschaft von `Error` ist, verwenden Sie sie immer als `Error.stackTraceLimit` und nicht als Eigenschaft eines von Ihnen erstellten `Error`-Objekts. Wenn Sie den Stack-Trace nur für einen einzelnen Fehler anpassen möchten, müssen Sie möglicherweise die Eigenschaft setzen, den Fehler erstellen und dann die Eigenschaft auf ihren ursprünglichen Wert zurücksetzen.

## Beispiele

### Error.stackTraceLimit setzen

Dieser Code kann sicher in Umgebungen ausgeführt werden, die `Error.stackTraceLimit` nicht unterstützen, da er die Eigenschaft nicht ausliest, sondern nur setzt. Engines, die die Eigenschaft nicht unterstützen, ignorieren die Einstellung.

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
