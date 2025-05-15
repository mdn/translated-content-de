---
title: "ARIA: aria-level Attribut"
short-title: aria-level
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-level
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-level` Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen erscheinen in Überschriften, Bäumen, verschachtelten Rasterstrukturen, verschachtelten Registerkartenlisten und mehr. Wenn die DOM-Vorfahren die Ebene nicht genau wiedergeben, sollte das `aria-level` Attribut verwendet werden, um die hierarchischen Ebenen von Elementen innerhalb ihrer hierarchischen Strukturen zu definieren. Die Ebenen steigen mit der Tiefe. Der Wert für `aria-level` ist eine ganze Zahl, die größer oder gleich `1` ist.

In Bezug auf die Überschriften in einer Dokumentstruktur können Sie Überschriften der ersten Ebene, der zweiten Ebene, der dritten Ebene usw. haben. In Bäumen haben Sie das Wurzelelement, seine Kinder, die Kinder der Kinder (oder Enkelkinder) und so weiter.

Das `aria-level` Attribut macht die Hierarchie für unterstützende Technologien sichtbar, sodass sie den Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf den User-Agent und damit keinen Einfluss auf die Bestimmung der Dokumentenstruktur durch den User-Agent.

Wenn die DOM-Vorfahren die Ebene genau wiedergeben, kann der User-Agent die Ebene eines Elements aus der Dokumentenstruktur berechnen, wodurch `aria-level` nicht nur überflüssig, sondern auch eine Gefahr für falsche Informationen darstellt. `aria-level` sollte wirklich nur verwendet werden, um eine explizite Angabe der Ebene zu liefern, wenn es nicht möglich ist, diese aus der Dokumentenstruktur zu berechnen. Testen Sie, ob dieses Attribut benötigt wird. Wenn der User-Agent die Ebene berechnen kann, ist es am besten, das `aria-level` Attribut wegzulassen.

### Mit der Rolle `heading`

Das `aria-level` Attribut ist ein erforderliches Attribut der [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) Rolle, die unterstützenden Technologien anzeigt, dass das Element als Überschrift behandelt werden soll. `<div role="heading" aria-level="1">` definiert das `<div>` als die Hauptüberschrift der Seite. Eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, wäre der erste Unterabschnitt, eine Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Verwenden Sie besser die {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}} Elemente.

### Innerhalb der Rolle `treegrid`

Im Fall eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) wird `aria-level` auf Elementen unterstützt, die die Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) haben, nicht auf Elementen mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Reihen fungieren als Blattknoten innerhalb der vertikalen Ausrichtung des Rasters. Rasterzellen sind Blattknoten innerhalb der horizontalen Ausrichtung jeder Reihe. `Aria-level` wird nicht auf Zellen innerhalb von Reihen unterstützt. In Baumstrukturen wird das `aria-level` Attribut also auf das Element mit der Rolle `row` angewendet.

Wenn ein vollständiger Satz verfügbarer Knoten aufgrund dynamischen Ladens nicht im DOM vorhanden ist, während der Benutzer den Fokus bewegt oder durch den Baum scrollt, hat jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) hinzugefügt.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich 1 ist

## Zugehörige Schnittstellen

- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-level` Attributs wider.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-level` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML Sektion-Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}})
