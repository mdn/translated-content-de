---
title: "ARIA: aria-rowcount-Attribut"
short-title: aria-rowcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-rowcount`-Attribut definiert die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster.

## Beschreibung

Einige Tabellen haben Hunderte, sogar Millionen von Zeilen. Selbst bei Tabellen mit weniger Zeilen kann es eine Designanforderung sein, nur einen Teilbereich von Zeilen zu laden, um die Leistung zu verbessern oder die Benutzererfahrung zu optimieren. Wenn nur ein Teil der Zeilen geladen wird, müssen alle Benutzer darüber informiert werden, dass nur eine Teilmenge der Daten angezeigt wird. Das `aria-rowcount`-Attribut wird verwendet, um die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster zu definieren.

Wenn es auf das {{HTMLElement('table')}}-Element oder auf ein Element mit der Rolle [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) angewendet wird, ist der Wert die Anzahl der Zeilen in der vollständigen Tabelle als Ganzzahl. Wenn die Gesamtanzahl der Zeilen nicht bekannt ist, fügen Sie `aria-rowcount="-1"` hinzu, was dem Browser mitteilt, die Gesamtanzahl der Zeilen nicht zu zählen.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowcount` nicht hinzufügen, da Browser die Gesamtanzahl der Zeilen automatisch zählen. Wenn jedoch nicht alle Zeilen jederzeit im DOM vorhanden sind, wird dieses Attribut benötigt, um die Anzahl der Zeilen anzugeben, wenn die vollständige Tabellengröße bekannt ist, und um dem Browser mitzuteilen, die Zeilen nicht automatisch zu zählen, wenn die Gesamtanzahl der Zeilen nicht bekannt ist.

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
  - : Die [`ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des `aria-rowcount`-Attributs wider.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Die [`ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des `aria-rowcount`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Übernommen in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
