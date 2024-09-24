---
title: aria-level
slug: Web/Accessibility/ARIA/Attributes/aria-level
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-level` Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen treten in Überschriften, Bäumen, verschachtelten Gittern, verschachtelten Reitern und mehr auf. Wenn die DOM-Vorfahrenstruktur die Ebene nicht genau widerspiegelt, sollte das `aria-level` Attribut verwendet werden, um die hierarchische Ebene von Elementen innerhalb ihrer hierarchischen Strukturen zu definieren. Die Ebenen nehmen mit der Tiefe zu. Der Wert für aria-level ist eine Ganzzahl größer oder gleich `1`.

Im Hinblick auf die Überschriften in einer Dokumentstruktur können Sie erste, zweite, dritte usw. Ebene von Überschriften haben. In Bäumen gibt es das Stamm-Element, seine Kinder, die Kindeskinder (oder Enkel), und so weiter.

Das `aria-level` Attribut macht die Hierarchie für unterstützende Technologien sichtbar, damit sie den Benutzern kommuniziert werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf den Benutzeragenten und daher auch keinen Einfluss auf die Bestimmung der Dokumentstruktur durch den Benutzeragenten.

Wenn die DOM-Vorfahrenstruktur die Ebene genau darstellt, kann der Benutzeragent die Ebene eines Elements aus der Dokumentstruktur berechnen, was `aria-level` nicht nur überflüssig, sondern ein Risiko für die Schaffung von Fehlinformationen macht. `aria-level` sollte wirklich nur verwendet werden, um eine explizite Angabe der Ebene zu geben, wenn es nicht möglich ist, diese aus der Dokumentstruktur zu berechnen. Prüfen Sie, ob dieses Attribut benötigt wird. Wenn der Benutzeragent die Ebene berechnen kann, ist es am besten, das `aria-level` Attribut wegzulassen.

### Mit `heading` Rolle

Das `aria-level` Attribut ist ein erforderliches Attribut der [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role) Rolle, die unterstützenden Technologien anzeigt, dass das Element als Überschrift behandelt werden soll. `<div role="heading" aria-level="1">` definiert das `<div>` als die Hauptüberschrift der Seite. Eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, wäre die erste Untersektion, eine Überschrift der Ebene 3 ist eine Untersektion davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Es ist vorzuziehen, die {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}} Elemente zu verwenden.

### Innerhalb der `treegrid` Rolle

Im Fall eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) wird `aria-level` bei Elementen mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) unterstützt, nicht bei Elementen mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role). Zeilen agieren als Blattknoten innerhalb der vertikalen Orientierung des Gitters. Gitterzellen sind Blattknoten innerhalb der horizontalen Orientierung jeder Zeile. `Aria-level` wird nicht bei Zellen innerhalb von Zeilen unterstützt. In Baumgittern wird das `aria-level` Attribut auf das Element mit der Rolle `row` angewendet.

Wenn eine vollständige Menge verfügbarer Knoten aufgrund des dynamischen Ladens beim Verschieben des Fokus oder Scrollen im Baum nicht im DOM vorhanden ist, hat jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) eingeschlossen.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich 1 ist

## Zugehörige Schnittstellen

- {{domxref("Element.ariaLevel")}}
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-level` Attributs wider.
- {{domxref("ElementInternals.ariaLevel")}}
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-level` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnittsüberschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}})
