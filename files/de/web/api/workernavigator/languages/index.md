---
title: "WorkerNavigator: languages Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.languages`** gibt ein Array von Zeichenfolgen zurück, die die bevorzugten Sprachen des Benutzers darstellen. Die Sprache wird unter Verwendung von Sprach-Tags gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen Array sind sie nach Vorliebe geordnet, wobei die am meisten bevorzugte Sprache zuerst steht.

Der Wert von {{domxref("WorkerNavigator.language","navigator.language")}} ist das erste Element des zurückgegebenen Arrays.

Wenn sich dieser Wert ändert, da die bevorzugten Sprachen des Benutzers geändert werden, wird ein {{domxref("Window.languagechange_event", "languagechange")}}-Ereignis auf dem {{domxref("WorkerGlobalScope")}}-Objekt ausgelöst.

Der `Accept-Language` HTTP-Header in jeder HTTP-Anfrage vom Browser des Benutzers verwendet denselben Wert für die `navigator.languages`-Eigenschaft, abgesehen vom zusätzlichen `qvalues` (Qualitätswert) Feld (z. B. `en-US;q=0.8`).

## Wert

Ein Array oder Zeichenfolgen.

## Beispiele

Sie können dies in einem Web Worker ausführen:

```js
navigator.language; //"en-US"
navigator.languages; //["en-US", "zh-CN", "ja-JP"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WorkerNavigator.language")}}
- {{domxref("WorkerNavigator")}}
- {{domxref("WorkerGlobalScope.languagechange_event", "languagechange")}}-Ereignis
