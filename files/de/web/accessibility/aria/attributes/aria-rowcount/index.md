---
title: aria-rowcount
slug: Web/Accessibility/ARIA/Attributes/aria-rowcount
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-rowcount` Attribut definiert die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster.

## Beschreibung

Einige Tabellen haben hunderte, sogar Millionen von Zeilen. Auch für Tabellen mit weniger Zeilen kann es ein Designbedarf sein, nur einen Ausschnitt der Zeilen zu laden, die Leistung zu verbessern oder die Benutzererfahrung zu verbessern. Wenn nur ein Teil der Zeilen geladen wird, müssen alle Benutzer informiert werden, dass nur ein Teil der Daten angezeigt wird. Das `aria-rowcount` Attribut wird verwendet, um die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster zu definieren.

Eingebunden in das {{HTMLElement('table')}} Element oder in ein Element mit der Rolle [`table`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), ist der Wert die Anzahl der Zeilen in der gesamten Tabelle als Ganzzahl. Wenn die Gesamtanzahl der Zeilen nicht bekannt ist, geben Sie `aria-rowcount="-1"` ein, was dem Browser mitteilt, die Gesamtanzahl der Zeilen nicht zu zählen.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowcount` nicht einfügen, da die Browser automatisch die Gesamtanzahl der Zeilen zählen. Wenn jedoch nicht alle Zeilen jederzeit im DOM vorhanden sind, wird dieses Attribut benötigt, um die Anzahl der Zeilen bereitzustellen, wenn die volle Tabellengröße bekannt ist, und um dem Browser mitzuteilen, die Zeilen nicht automatisch zu zählen, wenn die Gesamtanzahl der Zeilen nicht bekannt ist.

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
  - : Die Anzahl der Zeilen in der vollständigen Tabelle oder `-1`, falls die Tabellengröße nicht bekannt ist.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRowCount")}}
  - : Die [`ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, gibt den Wert des `aria-rowcount` Attributs wieder.
- {{domxref("ElementInternals.ariaRowCount")}}
  - : Die [`ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, gibt den Wert des `aria-rowcount` Attributs wieder.

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Erbt in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
