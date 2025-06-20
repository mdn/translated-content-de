---
title: Error.stackTraceLimit
short-title: stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{Non-standard_Header}}

> [!NOTE]
> Dieses Feature ist Teil der derzeit nicht standardisierten [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api). Aus Kompatibilitätsgründen wird es jedoch auch von JavaScriptCore implementiert.

Die statische Dateneigenschaft **`Error.stackTraceLimit`** gibt die maximale Anzahl von Stapelrahmen an, die durch den Stack-Trace eines Fehlers erfasst werden. Sie kann von Benutzer-Code gesetzt werden, um das Verhalten der Engine zu ändern.

Im Allgemeinen ist das _Lesen_ dieser Eigenschaft nicht sehr nützlich, aber Sie können sie auf einen neuen Wert _setzen_. Das Setzen auf einen größeren Wert kann beim Debuggen nützlich sein, da es Ihnen ermöglicht, mehr vom Aufrufstapel zu sehen. Das Setzen auf einen kleineren Wert kann die Leistung verbessern, da die erfasste Stapelgröße reduziert wird.

## Wert

Ein ganzzahliger Wert, der die maximale Anzahl der vom Stack-Trace eines Fehlers erfassten Stapelrahmen darstellt.

{{js_property_attributes(1, 1, 1)}}

## Beschreibung

Da `stackTraceLimit` eine statische Eigenschaft von `Error` ist, verwenden Sie es immer als `Error.stackTraceLimit` und nicht als Eigenschaft eines von Ihnen erstellten `Error`-Objekts. Wenn Sie den Stack-Trace nur für einen einzelnen Fehler anpassen möchten, müssen Sie möglicherweise die Eigenschaft setzen, den Fehler erstellen und dann die Eigenschaft auf ihren ursprünglichen Wert zurücksetzen.

## Beispiele

### Setzen von Error.stackTraceLimit

Dieser Code kann sicher ausgeführt werden, auch in Umgebungen, die `Error.stackTraceLimit` nicht unterstützen, da die Eigenschaft nicht gelesen, sondern nur gesetzt wird und Engines, die sie nicht unterstützen, die Einstellung ignorieren werden.

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
