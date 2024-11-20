---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interface stellt einen Hinweis für den Browser dar, wie das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs priorisiert werden sollte. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority)-Attribut des entsprechenden {{htmlelement("link")}}-Elements wider.

Die Eigenschaft ermöglicht es einem Entwickler, darauf hinzuweisen, dass das frühe Abrufen einer bestimmten Ressource im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise ableiten kann, wenn er eine interne Priorität zuweist, insbesondere wenn Ressourcen vorgeladen werden. Dies ermöglicht es dem Browser wiederum, die Priorität zu erhöhen oder zu verringern, und möglicherweise die Ressource früher oder später zu laden, als er es sonst tun würde. Die Eigenschaft sollte sparsam eingesetzt werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Abrufpriorität kann verwendet werden, um das [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) zu ergänzen, sodass ein Entwickler die Priorität einer Ressource vor weniger wichtigen Ressourcen erhöhen kann, die standardmäßig mit höherer Priorität vorgeladen werden. Wenn beispielsweise ein bestimmtes Bild wesentlich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte es so eingestellt werden, dass es vorgeladen und mit einer hohen Abrufpriorität versehen wird.

Beachten Sie, dass sowohl die interne Priorität eines Abrufvorgangs als auch die Auswirkung von `fetchPriority` auf die Priorität vollständig vom Browser abhängig sind.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Ruft die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorisierung ab.
- `low`
  - : Ruft die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorisierung ab.
- `auto`
  - : Setzt keine Präferenz für die Abrufpriorität.
    Dies ist der Standardwert.
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

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
- HTTP {{httpheader("Link")}} Header
- [Ressourcenladezeiten optimieren mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
