---
title: "`fetchpriority` HTML-Attribut"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das Attribut **`fetchpriority`** ermöglicht es einem Entwickler zu signalisieren, dass das frühzeitige Laden eines bestimmten Bildes im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise ableiten kann, wenn er eine interne Priorität zuweist. Dies ermöglicht es dem Browser, die Priorität zu erhöhen oder zu verringern und das Bild möglicherweise früher oder später zu laden, als es sonst der Fall wäre.

Dieses Attribut kann auf {{HTMLElement("img")}}, {{HTMLElement("link")}} und {{HTMLElement("script")}}-Elemente angewendet werden. Es hat auch ein [SVG-Gegenstück](/de/docs/Web/SVG/Reference/Attribute/fetchpriority).

Die Abrufpriorität kann verwendet werden, um das [Vorabladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen, sodass ein Entwickler die Priorität vor weniger wichtigen Ressourcen mit höherer Standardpriorität erhöhen kann. Wenn ein Entwickler beispielsweise weiß, dass ein bestimmtes Bild wesentlich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er `<link rel="preload">` für das Bild hinzufügen und dann die Priorität weiter mit dem `fetchpriority`-Attribut erhöhen.

Beachten Sie, dass sowohl die interne Priorität jedes Abrufvorgangs als auch der Einfluss von `fetchpriority` auf die Priorität vollständig vom Browser abhängen.

Dieses Attribut ist {{Glossary("Enumerated", "aufgezählt")}} und kann einen der folgenden Werte haben:

- `high`
  - : Lädt die externe Ressource mit hoher Priorität im Vergleich zu anderen externen Ressourcen.
- `low`
  - : Lädt die externe Ressource mit niedriger Priorität im Vergleich zu anderen externen Ressourcen.
- `auto`
  - : Legt keine Präferenz für die Abrufpriorität fest.
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
    Dies ist der Standardwert.

## Nutzungshinweise

Das Attribut sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{svgattr("fetchpriority")}}
