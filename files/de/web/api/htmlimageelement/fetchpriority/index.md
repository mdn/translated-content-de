---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein Hinweis für den Browser, wie er das Laden eines bestimmten Bildes im Verhältnis zu anderen Bildern priorisieren sollte. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/img#fetchpriority)-Attribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert entweder `high`, `low` oder `auto` ist. Für die Bedeutungen siehe das HTML-Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Beispiele

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
- HTTP {{httpheader("Link")}} Header
- [Optimieren Sie das Laden von Ressourcen mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
