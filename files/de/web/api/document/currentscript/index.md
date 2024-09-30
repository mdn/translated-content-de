---
title: "Document: currentScript-Eigenschaft"
short-title: currentScript
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`Document.currentScript`**-Eigenschaft gibt das {{HTMLElement("script")}}-Element zurück, dessen Skript momentan verarbeitet wird und [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997). (Für Module verwenden Sie stattdessen [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta).)

Es ist wichtig zu beachten, dass dies nicht auf das {{HTMLElement("script")}}-Element verweist, wenn der Code im Skript als Callback oder Ereignishandler aufgerufen wird; es wird nur auf das Element verweisen, während es ursprünglich verarbeitet wird.

## Wert

Ein [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) oder null.

## Beispiele

Dieses Beispiel überprüft, ob das Skript asynchron ausgeführt wird:

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
- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event)-Ereignis von `Document`
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event)-Ereignis von `Document`
