---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Interfaces stellt einen Hinweis für den Browser dar, wie er das Laden eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll.
Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/script#fetchpriority) Inhaltsattribut des `<script>`-Elements wider.

## Wert

Ein String. Die erlaubten Werte finden Sie im HTML-Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Beispiele

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Output: "high"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
- HTTP {{httpheader("Link")}} Header
- [Optimieren der Ressourcennutzung mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
