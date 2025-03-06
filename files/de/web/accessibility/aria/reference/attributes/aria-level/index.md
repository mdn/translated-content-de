---
title: aria-level
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-level
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-level`-Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen erscheinen in Überschriften, Bäumen, verschachtelten Grids, verschachtelten Listen und mehr. Wenn die DOM-Erbfolge die Ebene nicht genau darstellt, sollte das `aria-level`-Attribut verwendet werden, um die hierarchischen Ebenen in ihren Strukturen zu definieren. Die Ebenen steigen mit der Tiefe. Der Wert für aria-level ist eine ganze Zahl, die größer oder gleich `1` ist.

In Bezug auf die Überschriften in einer Dokumentstruktur können Sie Überschriften der ersten Ebene, der zweiten Ebene, der dritten Ebene usw. haben. In Bäumen haben Sie das Wurzelelement, seine Kinder, die Kinder der Kinder (oder Enkelkinder) und so weiter.

Das `aria-level`-Attribut macht Hierarchien für unterstützende Technologien sichtbar, sodass sie den Benutzern mitgeteilt werden können. Wie alle ARIA-Attribute hat es keinen Einfluss auf den User-Agent und damit auch keinen Einfluss auf die Bestimmung der Dokumentstruktur durch den User-Agent.

Wenn die DOM-Erbfolge die Ebene genau darstellt, kann der User-Agent die Ebene eines Elements aus der Dokumentstruktur berechnen, was `aria-level` nicht nur überflüssig macht, sondern auch das Risiko besteht, Fehlinformationen zu erzeugen. `aria-level` sollte wirklich nur verwendet werden, um eine explizite Angabe der Ebene bereitzustellen, wenn es nicht möglich ist, diese aus der Dokumentstruktur zu berechnen. Testen Sie, ob dieses Attribut benötigt wird. Wenn der User-Agent die Ebene berechnen kann, ist es am besten, das `aria-level`-Attribut wegzulassen.

### Mit `heading`-Rolle

Das `aria-level`-Attribut ist ein erforderliches Attribut der [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)-Rolle, die unterstützenden Technologien anzeigt, dass das Element als Überschrift behandelt werden soll. `<div role="heading" aria-level="1">` definiert das `<div>` als Hauptüberschrift der Seite. Eine Ebene-2-Überschrift, definiert mit `aria-level="2"`, wäre der erste Unterabschnitt, eine Ebene 3 ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Verwenden Sie stattdessen die {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}}-Elemente.

### Innerhalb der `treegrid`-Rolle

Im Fall eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) wird `aria-level` bei Elementen mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) unterstützt, nicht bei Elementen mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Reihen fungieren als Blattknoten in der vertikalen Orientierung des Grids. Gitterzellen sind Blattknoten in der horizontalen Orientierung jeder Zeile. `Aria-level` wird bei Zellen innerhalb von Reihen nicht unterstützt. In Baumgittern wird das `aria-level`-Attribut daher auf das Element mit der Rolle `row` angewendet.

Wenn ein vollständiger Satz verfügbarer Knoten im DOM aufgrund dynamischer Ladeprozesse bei Fokusänderung oder Scrollen im Baum nicht vorhanden ist, enthält jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset).

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich 1 ist

## Zugehörige Schnittstellen

- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-level`-Attributs wider.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-level`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnittsüberelemente](/de/docs/Web/HTML/Element/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}})
