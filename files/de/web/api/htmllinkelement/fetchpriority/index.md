---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces stellt einen Hinweis für den Browser dar, wie er das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs priorisieren sollte.
Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority)-Attribut des entsprechenden {{htmlelement("link")}}-Elements wider.

Die Eigenschaft erlaubt es einem Entwickler, dem Browser mitzuteilen, dass das frühzeitige Abrufen einer bestimmten Ressource einen größeren oder geringeren Einfluss auf die Benutzererfahrung hat, als der Browser vernünftigerweise bei der Zuweisung einer internen Priorität ableiten kann, insbesondere beim Vorladen von Ressourcen.
Dies ermöglicht es dem Browser wiederum, die Priorität zu erhöhen oder zu verringern und die Ressource möglicherweise früher oder später als sonst zu laden.
Die Eigenschaft sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Ladepriorität kann dazu verwendet werden, das [Vorladen](/de/docs/Web/HTML/Attributes/rel/preload) zu ergänzen, sodass ein Entwickler die Priorität einer Ressource im Vergleich zu weniger wichtigen Ressourcen erhöhen kann, die standardmäßig mit einer höheren Priorität vorabgeladen werden.
Zum Beispiel könnte ein bestimmtes Bild, das wesentlich zur {{Glossary("Largest_contentful_paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, auf Vorladen mit hoher Ladepriorität gesetzt werden.

Es ist zu beachten, dass sowohl die interne Priorität eines jeden Abrufvorgangs als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis darstellt.
Mögliche Werte sind:

- `high`
  - : Abrufen der Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorisierung.
- `low`
  - : Abrufen der Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorisierung.
- `auto`
  - : Keine Präferenz für die Abrufpriorität festlegen.
    Dies ist die Standardeinstellung.
    Sie wird verwendet, wenn kein Wert festgelegt oder ein ungültiger Wert gesetzt wird.

## Beispiele

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myimage.jpg";
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
- [Optimieren Sie das Laden von Ressourcen mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority), um Informationen darüber zu erhalten, wie sich diese API auf Prioritäten in Chrome auswirkt.
