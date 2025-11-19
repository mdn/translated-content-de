---
title: "HTML-Attribut: fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 1889aacdd5cb4dd3e6e5a5ef2f305fda0985c89b
---

Das **`fetchpriority`**-Attribut ermöglicht es einem Entwickler, zu signalisieren, dass das Abrufen eines bestimmten Bildes früh im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise ableiten kann, wenn er eine interne Priorität zuweist. Dies erlaubt es dem Browser, die Priorität zu erhöhen oder zu verringern und das Bild potenziell früher oder später zu laden, als es sonst der Fall wäre.

Dieses Attribut kann auf {{HTMLElement("img")}}, {{HTMLElement("link")}} und {{HTMLElement("script")}}-Elemente angewendet werden. Es hat auch ein [SVG-Pendant](/de/docs/Web/SVG/Reference/Attribute/fetchpriority).

Die Abrufpriorität kann verwendet werden, um das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen. Dadurch kann ein Entwickler die Priorität über weniger einflussreiche Ressourcen hinaus erhöhen, die eine höhere Standardpriorität haben. Wenn ein Entwickler beispielsweise weiß, dass ein bestimmtes Bild erheblich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für das Bild hinzufügen und dann die Priorität weiter mit dem `fetchpriority`-Attribut erhöhen.

Beachten Sie, dass sowohl die interne Priorität einer Abrufoperation als auch der Einfluss von `fetchpriority` auf die Priorität vollständig vom Browser abhängig sind.

Dieses Attribut ist {{Glossary("Enumerated", "enumeriert")}} und kann einen der folgenden Werte haben:

- `high`
  - : Ruft die externe Ressource mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
- `low`
  - : Ruft die externe Ressource mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
- `auto`
  - : Setzt keine Präferenz für die Abrufpriorität.
    Es wird verwendet, wenn kein oder ein ungültiger Wert gesetzt ist.
    Dies ist der Standard.

## Verwendungshinweise

Das Attribut sollte sparsam eingesetzt werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG [`fetchpriority`](/de/docs/Web/SVG/Reference/Attribute/fetchpriority)-Attribut
