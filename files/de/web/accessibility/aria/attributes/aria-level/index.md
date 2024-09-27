---
title: aria-level
slug: Web/Accessibility/ARIA/Attributes/aria-level
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-level` Attribut definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.

## Beschreibung

Hierarchieebenen erscheinen in Überschriften, Bäumen, verschachtelten Rastern, verschachtelten Registerkartenlisten und mehr. Wenn die DOM-Vorfahren die Ebene nicht genau darstellen, sollte das `aria-level` Attribut verwendet werden, um die hierarchische Ebene der Elemente innerhalb ihrer hierarchischen Strukturen zu definieren. Die Ebenen nehmen mit der Tiefe zu. Der Wert für aria-level ist eine ganze Zahl, die größer oder gleich `1` ist.

Bei den Überschriften in einer Dokumentstruktur gibt es Überschriften erster Ebene, Überschriften zweiter Ebene, Überschriften dritter Ebene usw. In Baumstrukturen gibt es das Wurzelelement, dessen Kinder, die Kinder der Kinder (oder Enkelkinder) usw.

Das `aria-level` Attribut macht die Hierarchie für unterstützende Technologien sichtbar, sodass diese den Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf das Benutzeragent und damit keinen Einfluss auf die Bestimmung der Dokumentstruktur durch das Benutzeragent.

Wenn die DOM-Vorfahren die Ebene genau darstellen, kann das Benutzeragent die Ebene eines Elements aus der Dokumentstruktur berechnen, wodurch `aria-level` nicht nur überflüssig, sondern ein Risiko für die Erzeugung falscher Informationen wird. `Aria-level` sollte wirklich nur verwendet werden, um eine explizite Angabe der Ebene zu geben, wenn es nicht möglich ist, diese aus der Dokumentstruktur zu berechnen. Testen Sie, ob dieses Attribut benötigt wird. Wenn das Benutzeragent die Ebene berechnen kann, ist es am besten, auf das `aria-level` Attribut zu verzichten.

### Mit `heading` Rolle

Das `aria-level` Attribut ist ein erforderliches Attribut der [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role) Rolle, die unterstützenden Technologien signalisiert, dass das Element als Überschrift behandelt werden sollte. `<div role="heading" aria-level="1">` definiert das `<div>` als die Hauptüberschrift der Seite. Eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, wäre der erste Unterabschnitt, eine Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="3">Heading for this sub section</div>
```

Wählen Sie stattdessen die Verwendung der {{htmlelement("Heading_Elements", "h1")}} bis {{htmlelement("Heading_Elements", "h6")}} Elemente.

### Innerhalb der `treegrid` Rolle

Im Fall einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist `aria-level` auf Elementen mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und nicht auf Elementen mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) unterstützt. Reihen agieren als Blattknoten innerhalb der vertikalen Orientierung des Rasters. Gridcells sind Blattknoten innerhalb der horizontalen Orientierung jeder Zeile. `Aria-level` wird nicht auf Zellen innerhalb von Reihen unterstützt. In Baumrastern wird daher das `aria-level` Attribut auf das Element mit der Rolle `row` angewendet.

Wenn ein vollständiger Satz verfügbarer Knoten nicht im DOM vorhanden ist, da während des Scrollens oder der Fokussierung des Benutzers dynamisch geladen wird, hat jeder Knoten `aria-level`, [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) enthalten.

## Werte

- `<integer>`
  - : Eine ganze Zahl größer oder gleich 1

## Zugehörige Schnittstellen

- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/Element/ariaLevel) Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist, spiegelt den Wert des `aria-level` Attributs wider.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Die [`ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel) Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle ist, spiegelt den Wert des `aria-level` Attributs wider.

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
