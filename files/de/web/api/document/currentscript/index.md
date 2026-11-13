---
title: "Dokument: currentScript-Eigenschaft"
short-title: currentScript
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`currentScript`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt das {{HTMLElement("script")}}-Element zurück, dessen Skript gerade verarbeitet wird, sofern es sich [nicht um ein JavaScript-Modul handelt](https://github.com/whatwg/html/issues/997). (Verwenden Sie für Module stattdessen [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta).)

Beachten Sie, dass diese Eigenschaft nicht auf das {{HTMLElement("script")}}-Element verweist, wenn der Code im Skript als Callback oder Event-Handler aufgerufen wird. Sie verweist nur während der anfänglichen Verarbeitung des Skripts auf das Element.

## Wert

Ein [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) oder null.

## Beispiele

Dieses Beispiel prüft, ob das Skript asynchron ausgeführt wird:

```js
if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}
```

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- {{HTMLElement("script")}}
- `afterscriptexecute`-Event von `Document` ([Referenz](/de/docs/Web/API/Document/afterscriptexecute_event))
- `beforescriptexecute`-Event von `Document` ([Referenz](/de/docs/Web/API/Document/beforescriptexecute_event))
