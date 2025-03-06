---
title: aria-rowcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-rowcount` definiert die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster.

## Beschreibung

Einige Tabellen haben Hunderte, sogar Millionen von Zeilen. Selbst für Tabellen mit weniger Zeilen kann es ein Entwurfsanforderung sein, nur einen Teil der Zeilen zu laden, um die Leistung zu verbessern oder die Benutzererfahrung zu erhöhen. Wenn nur ein Teil der Zeilen geladen wird, müssen Sie alle Benutzer darüber informieren, dass nur ein Teil der Daten angezeigt wird. Das Attribut `aria-rowcount` wird verwendet, um die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster zu definieren.

Wenn es auf das {{HTMLElement('table')}}-Element oder auf ein Element mit einer Rolle von [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) angewendet wird, entspricht der Wert der Anzahl der Zeilen in der gesamten Tabelle als Ganzzahl. Wenn die Gesamtanzahl der Zeilen nicht bekannt ist, geben Sie `aria-rowcount="-1"` an, was dem Browser mitteilt, die Gesamtanzahl der Zeilen nicht zu zählen.

Wenn alle Zeilen geladen und im DOM sind, müssen Sie `aria-rowcount` nicht einfügen, da Browser die Gesamtanzahl der Zeilen automatisch zählen. Sollte jedoch nicht alle Zeilen jederzeit im DOM vorhanden sein, ist dieses Attribut erforderlich, um die Anzahl der Zeilen anzugeben, wenn die vollständige Tabellengröße bekannt ist, und dem Browser mitzuteilen, die Zeilen nicht automatisch zu zählen, wenn die Gesamtanzahl der Zeilen nicht bekannt ist.

## Beispiel

Das folgende Beispiel zeigt ein Raster mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 9 dem Benutzer angezeigt werden.

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

## Werte

- `<integer>`
  - : Die Anzahl der Zeilen in der vollständigen Tabelle oder `-1`, wenn die Tabellengröße nicht bekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Die Eigenschaft [`ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount), Teil der Schnittstelle [`Element`](/de/docs/Web/API/Element), spiegelt den Wert des Attributs `aria-rowcount` wider.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Die Eigenschaft [`ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount), Teil der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals), spiegelt den Wert des Attributs `aria-rowcount` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Vererbt in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
