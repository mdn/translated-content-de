---
title: "ARIA: Attribut aria-rowcount"
short-title: aria-rowcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-rowcount` definiert die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid.

## Beschreibung

Manche Tabellen haben Hunderte oder sogar Millionen von Zeilen. Auch bei Tabellen mit weniger Zeilen kann es aus gestalterischen Gründen erforderlich sein, nur einen Teil der Zeilen zu laden. Dies kann außerdem die Leistung oder die Benutzerfreundlichkeit verbessern. Wenn nur ein Teil der Zeilen geladen wird, müssen alle Benutzer darüber informiert werden, dass nur ein Teil der Daten angezeigt wird. Mit dem Attribut `aria-rowcount` wird die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid angegeben.

Wird das Attribut auf dem Element {{HTMLElement('table')}} oder auf einem Element mit der Rolle [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) verwendet, gibt sein Wert die Anzahl der Zeilen in der vollständigen Tabelle als Ganzzahl an. Ist die Gesamtzahl der Zeilen nicht bekannt, verwenden Sie `aria-rowcount="-1"`. Dadurch wird der Browser angewiesen, die Gesamtzahl der Zeilen nicht zu zählen.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowcount` nicht angeben, da Browser die Gesamtzahl der Zeilen automatisch zählen. Wenn jedoch zu keinem Zeitpunkt alle Zeilen im DOM vorhanden sind, wird dieses Attribut benötigt: Bei bekannter Tabellengröße gibt es die Gesamtzahl der Zeilen an; bei unbekannter Gesamtzahl weist es den Browser an, die Zeilen nicht automatisch zu zählen.

## Werte

- `<integer>`
  - : Die Anzahl der Zeilen in der vollständigen Tabelle oder `-1`, wenn die Tabellengröße nicht bekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Die Eigenschaft [`ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-rowcount` wider.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Die Eigenschaft [`ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-rowcount` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Wird an folgende Rollen vererbt:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)

## Beispiel

Das folgende Beispiel zeigt ein Grid mit 24 Zeilen, von denen die erste Zeile sowie die Zeilen 7 bis 9 angezeigt werden.

```html
<div role="grid" aria-rowcount="24">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Position</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="7">
      <span role="gridcell">Morgan</span>
      <span role="gridcell">Brian</span>
      <span role="gridcell">Midfielder</span>
    </div>
    <div role="row" aria-rowindex="8">
      <span role="gridcell">Abby</span>
      <span role="gridcell">Dahlkemper</span>
      <span role="gridcell">Defender</span>
    </div>
    <div role="row" aria-rowindex="9">
      <span role="gridcell">Ashlyn</span>
      <span role="gridcell">Harris</span>
      <span role="gridcell">Goalkeeper</span>
    </div>
  </div>
</div>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
