---
title: "HTML-Attribut: fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{SeeCompatTable}}{{non-standard_header}}

Das **`fetchpriority`**-Attribut ermöglicht es einem Entwickler, anzugeben, dass das frühzeitige Laden eines bestimmten Bildes einen größeren oder geringeren Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise ableiten kann, wenn er eine interne Priorität zuweist. Dies ermöglicht es dem Browser, die Priorität zu erhöhen oder zu verringern und das Bild möglicherweise früher oder später zu laden, als es sonst der Fall wäre.

Dieses Attribut kann auf die {{HTMLElement("img")}}, {{HTMLElement("link")}} und {{HTMLElement("script")}} Elemente angewendet werden. Es gibt auch ein [SVG-Pendant](/de/docs/Web/SVG/Reference/Attribute/fetchpriority).

Die Abrufpriorität kann genutzt werden, um das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen, was es einem Entwickler ermöglicht, die Priorität gegenüber weniger wichtigen Ressourcen mit einer höheren Standardpriorität zu erhöhen. Zum Beispiel, wenn ein Entwickler weiß, dass ein bestimmtes Bild entscheidend zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er `<link rel="preload">` für das Bild hinzufügen und dann die Priorität mithilfe des `fetchpriority`-Attributs weiter erhöhen.

Beachten Sie, dass sowohl die interne Priorität eines jeden Abrufvorgangs als auch der Einfluss von `fetchpriority` auf die Priorität ausschließlich vom Browser abhängen.

Dieses Attribut ist {{Glossary("Enumerated", "enumeriert")}} und kann einen der folgenden Werte haben:

- `high`
  - : Ruft die externe Ressource mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
- `low`
  - : Ruft die externe Ressource mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
- `auto`
  - : Setzt keine Präferenz für die Abrufpriorität.
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
    Dies ist der Standard.

## Nutzungshinweise

Das Attribut sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierungen die Leistung beeinträchtigen können.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut [`fetchpriority`](/de/docs/Web/SVG/Reference/Attribute/fetchpriority)
