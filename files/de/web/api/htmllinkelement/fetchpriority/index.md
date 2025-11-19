---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces stellt einen Hinweis für den Browser dar, wie er das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs priorisieren sollte. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority)-Inhaltsattribut des `<link>`-Elements wider.

## Wert

Ein String. Die erlaubten Werte finden Sie im HTML-Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Beispiele

```js
const preloadLink = document.createElement("link");
preloadLink.href = "my-image.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
- HTTP {{httpheader("Link")}}-Header
- [Optimieren der Ressourcennutzung mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
