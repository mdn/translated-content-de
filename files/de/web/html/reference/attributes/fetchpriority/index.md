---
title: "HTML-Attribut: fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

Das **`fetchpriority`**-Attribut ermöglicht es einem Entwickler zu signalisieren, dass das frühzeitige Laden eines bestimmten Bildes mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser beim Zuweisen einer internen Priorität vernünftigerweise annehmen kann. Dies wiederum erlaubt es dem Browser, die Priorität zu erhöhen oder zu verringern und das Bild möglicherweise früher oder später zu laden, als es sonst der Fall wäre.

Dieses Attribut kann auf {{HTMLElement("img")}}, {{HTMLElement("link")}} und {{HTMLElement("script")}} Elemente angewendet werden. Es hat auch ein [SVG-Gegenstück](/de/docs/Web/SVG/Reference/Attribute/fetchpriority).

Die Ladepriorität kann verwendet werden, um das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen, sodass ein Entwickler die Priorität über weniger einflussreiche Ressourcen mit höherer Standardpriorität hinaus erhöhen kann. Wenn beispielsweise ein Entwickler weiß, dass ein bestimmtes Bild erheblich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er für das Bild [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) hinzufügen und dann die Priorität weiter mit dem `fetchpriority`-Attribut erhöhen.

Beachten Sie, dass sowohl die interne Priorität eines jeden Ladevorgangs als auch der Einfluss von `fetchpriority` auf die Priorität vollständig browserabhängig sind.

Dieses Attribut ist {{Glossary("Enumerated", "enumeriert")}} und kann einen der folgenden Werte annehmen:

- `high`
  - : Lädt die externe Ressource mit hoher Priorität im Vergleich zu anderen externen Ressourcen.
- `low`
  - : Lädt die externe Ressource mit niedriger Priorität im Vergleich zu anderen externen Ressourcen.
- `auto`
  - : Setzt keine Präferenz für die Ladepriorität.
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
    Dies ist der Standardwert.

## Verwendungshinweise

Das Attribut sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{svgattr("fetchpriority")}} Attribut
