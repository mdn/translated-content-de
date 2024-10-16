---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle stellt einen Hinweis für den Browser dar, wie er das Laden einer bestimmten Ressource im Verhältnis zu anderen Ressourcen desselben Typs priorisieren sollte. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority)-Attribut des entsprechenden {{htmlelement("link")}}-Elements wider.

Mit der Eigenschaft kann ein Entwickler signalisieren, dass das frühzeitige Laden einer bestimmten Ressource im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise bei der Zuweisung einer internen Priorität ableiten kann, insbesondere beim Vorladen von Ressourcen. Dies ermöglicht es dem Browser, die Priorität zu erhöhen oder zu verringern und die Ressource potenziell früher oder später zu laden, als er es sonst tun würde. Die Eigenschaft sollte sparsam eingesetzt werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Ladepriorität kann verwendet werden, um das [Vorladen](/de/docs/Web/HTML/Attributes/rel/preload) zu ergänzen, indem ein Entwickler die Priorität einer Ressource vor weniger wichtigen Ressourcen erhöht, die standardmäßig mit höherer Priorität vorgeladen werden. Beispielsweise könnte ein bestimmtes Bild, das erheblich zum {{Glossary("Largest_contentful_paint", "Größten inhaltsbezogenen Rendering")}} (LCP) der Website beiträgt, so eingestellt werden, dass es vorgeladen wird und mit hoher Ladepriorität versehen wird.

Beachten Sie, dass sowohl die interne Priorität jeder Ladevorgang als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis darstellt.
Mögliche Werte sind:

- `high`
  - : Lade die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs und interner Priorisierung.
- `low`
  - : Lade die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs und interner Priorisierung.
- `auto`
  - : Setzt keine Präferenz für die Ladepriorität.
    Dies ist der Standardwert.
    Er wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt wird.

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
- [Optimieren Sie das Laden von Ressourcen mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
