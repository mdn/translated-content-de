---
title: aria-level
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-level
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-level` Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen erscheinen in Überschriften, Bäumen, verschachtelten Rastern, verschachtelten Tablisten und mehr. Wenn die DOM-Abstammung die Ebene nicht genau wiedergibt, sollte das `aria-level` Attribut verwendet werden, um die hierarchischen Ebenen der Elemente innerhalb ihrer hierarchischen Strukturen zu definieren. Die Ebenen steigen mit der Tiefe an. Der Wert für aria-level ist eine Ganzzahl, die größer oder gleich `1` ist.

Bei Überschriften in einer Dokumentenstruktur können Sie Überschriften der ersten Ebene, Überschriften der zweiten Ebene, Überschriften der dritten Ebene usw. haben. In Bäumen haben Sie das Wurzelelement, seine Kinder, die Kinder der Kinder (oder Enkel) usw.

Das `aria-level` Attribut gibt die Hierarchie für unterstützende Technologien frei, damit sie den Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keine Auswirkung auf das User-Agent und damit auch keinen Einfluss auf die Bestimmung der Dokumentenstruktur durch das User-Agent.

Wenn die DOM-Abstammung die Ebene genau wiedergibt, kann das User-Agent die Ebene eines Elements aus der Dokumentenstruktur berechnen, wodurch `aria-level` nicht nur überflüssig, sondern auch das Risiko besteht, Fehlinformationen zu erzeugen. `aria-level` sollte wirklich nur verwendet werden, um eine explizite Angabe der Ebene zu liefern, wenn eine Berechnung aus der Dokumentenstruktur nicht möglich ist. Testen Sie, ob dieses Attribut benötigt wird. Wenn das User-Agent die Ebene berechnen kann, ist es am besten, das `aria-level` Attribut wegzulassen.

### Mit der Rolle `heading`

Das `aria-level` Attribut ist ein erforderliches Attribut der [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) Rolle, das unterstützenden Technologien angibt, dass das Element als Überschrift behandelt werden soll. `<div role="heading" aria-level="1">` definiert das `<div>` als die Hauptüberschrift der Seite. Eine Ebene 2 Überschrift, definiert mit `aria-level="2"`, wäre der erste Unterabschnitt, eine Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Verwenden Sie stattdessen die {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}} Elemente.

### Innerhalb der Rolle `treegrid`

Im Falle eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) wird `aria-level` für Elemente mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) unterstützt, nicht für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Zeilen agieren als Blätter im vertikalen Orientierungsschema des Rasters. Rasterzellen sind Blätter innerhalb der horizontalen Orientierung jeder Zeile. `Aria-level` wird nicht für Zellen innerhalb von Zeilen unterstützt. Daher wird in Baumrastern das `aria-level` Attribut auf das Element mit der Rolle `row` angewendet.

Wenn aufgrund dynamischen Ladens während der Nutzer den Fokus ändert oder durch den Baum scrollt, kein vollständiger Satz von verfügbaren Knoten im DOM vorliegt, hat jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) enthalten.

## Werte

- `<integer>`
  - : Eine Ganzzahl größer oder gleich 1

## Zugehörige Schnittstellen

- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel) Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist, spiegelt den Wert des `aria-level` Attributs wider.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel) Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle ist, spiegelt den Wert des `aria-level` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}})
