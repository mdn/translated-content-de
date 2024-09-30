---
title: aria-level
slug: Web/Accessibility/ARIA/Attributes/aria-level
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-level`-Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen erscheinen in Überschriften, Bäumen, verschachtelten Gittern, verschachtelten Tabellisten und mehr. Wenn die DOM-Abstammung die Ebene nicht genau darstellt, sollte das `aria-level`-Attribut verwendet werden, um die hierarchischen Ebenen der Elemente innerhalb ihrer hierarchischen Strukturen zu definieren. Die Ebenen erhöhen sich mit der Tiefe. Der Wert für `aria-level` ist eine ganze Zahl größer oder gleich `1`.

Bei Dokumentstrukturen gibt es beispielsweise erste Überschriftenebenen, zweite Überschriftenebenen, dritte Überschriftenebenen usw. In Bäumen haben Sie das Wurzelelement, dessen Kinder, die Kinder der Kinder (oder Enkel) und so weiter.

Das `aria-level`-Attribut macht Hierarchien assistiven Technologien zugänglich, damit sie den Nutzern kommuniziert werden können. Wie alle ARIA-Attribute hat es keinen Einfluss auf den User-Agent und somit keinen Einfluss auf die Bestimmung der Dokumentstruktur durch den User-Agent.

Wenn die DOM-Abstammung die Ebene genau darstellt, kann der User-Agent die Ebene eines Elements aus der Dokumentstruktur berechnen, wodurch `aria-level` nicht nur redundant, sondern auch ein Risiko für Fehlinformationen wird. `Aria-level` sollte wirklich nur verwendet werden, um eine explizite Anzeige der Ebene zu geben, wenn dies nicht aus der Dokumentstruktur berechnet werden kann. Testen Sie, ob dieses Attribut benötigt wird. Wenn der User-Agent die Ebene berechnen kann, ist es am besten, das `aria-level`-Attribut wegzulassen.

### Mit der Rolle `heading`

Das `aria-level`-Attribut ist ein erforderliches Attribut der [Rolle `heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role), die assistiven Technologien anzeigt, dass das Element als Überschrift behandelt werden sollte. `<div role="heading" aria-level="1">` definiert das `<div>` als Hauptüberschrift der Seite. Eine Ebene-2-Überschrift, definiert mit `aria-level="2"`, wäre der erste Unterabschnitt, eine Ebene-3 wäre ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Es ist besser, die {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}} Elemente zu verwenden.

### Innerhalb der Rolle `treegrid`

Im Fall eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) wird `aria-level` auf Elemente mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) unterstützt, nicht auf Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role). Reihen fungieren als Blattknoten innerhalb der vertikalen Orientierung des Gitters. Rasterzellen sind Blattknoten innerhalb der horizontalen Orientierung jeder Reihe. `Aria-level` wird nicht auf Zellen innerhalb von Reihen unterstützt. In Treegrids wird das `aria-level`-Attribut also auf das Element mit der Rolle `row` angewendet.

Wenn ein vollständiger Satz verfügbarer Knoten aufgrund dynamischen Ladens, während der Benutzer den Fokus verschiebt oder im Baum scrollt, nicht im DOM vorhanden ist, hat jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) enthalten.

## Werte

- `<integer>`
  - : Eine ganze Zahl größer oder gleich 1

## Zugehörige Schnittstellen

- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-level`-Attributs wider.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-level`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML Abschnittsüberschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}})
