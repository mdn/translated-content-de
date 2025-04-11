---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces stellt einen Hinweis für den Browser dar, wie er das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs priorisieren soll.
Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority)-Attribut des entsprechenden {{htmlelement("link")}}-Elements wider.

Die Eigenschaft ermöglicht es einem Entwickler, zu signalisieren, dass das frühzeitige Abrufen einer bestimmten Ressource im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise ableiten kann, wenn er eine interne Priorität zuweist, insbesondere beim Vorladen von Ressourcen.
Dies erlaubt es dem Browser wiederum, die Priorität zu erhöhen oder zu verringern und die Ressource möglicherweise früher oder später zu laden, als er es sonst tun würde.
Die Eigenschaft sollte sparsam verwendet werden, da eine übermäßige oder falsche Priorisierung die Leistung verschlechtern kann.

Die Abrufpriorität kann verwendet werden, um das [Vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen und einem Entwickler zu ermöglichen, die Priorität einer Ressource gegenüber weniger einflussreichen Ressourcen zu erhöhen, die standardmäßig mit einer höheren Priorität vorab geladen werden.
Zum Beispiel, wenn ein bestimmtes Bild signifikant zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte es so eingestellt werden, dass es vorab geladen wird und mit einer hohen Abrufpriorität.

Beachten Sie, dass sowohl die interne Priorität jeder Abrufoperation als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängig sind.

## Wert

Ein String, der den Prioritätshinweis darstellt.
Mögliche Werte sind:

- `high`
  - : Ruft die Ressource mit einer hohen Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorität ab.
- `low`
  - : Ruft die Ressource mit einer niedrigen Priorität im Vergleich zu anderen Ressourcen desselben Typs und interner Priorität ab.
- `auto`
  - : Keine Präferenz für die Abrufpriorität setzen.
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
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
