---
title: aria-rowindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-rowindex` Attribut definiert die Position eines Elements in Bezug auf die Gesamtzahl der Reihen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters.

## Beschreibung

Einige Tabellen enthalten sehr viele Reihen. Das Laden nur eines Teilausschnitts von Reihen kann eine Designanforderung sein, um die Leistung zu verbessern oder die Benutzererfahrung zu optimieren.

Wenn nur ein Teil der Reihen geladen wird, müssen alle Benutzer darüber informiert werden, welche Reihenabschnitte angezeigt werden. Das `aria-rowindex` Attribut wird verwendet, um den Index oder die Position der Zelle oder Reihe in Bezug auf die Gesamtanzahl der Reihen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters zu definieren.

Es kann auf das {{HTMLElement('tr')}} Element oder auf ein Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) angewendet werden oder direkt auf das {{HTMLElement('td')}}, {{HTMLElement('th')}} oder ein Element mit der Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Der Wert stellt die Position der Reihe in Bezug auf die komplette Tabelle dar.

Der Wert für `aria-rowindex` ist eine Ganzzahl größer oder gleich `1`, größer als der `aria-rowindex` Wert aller vorhergehenden Reihen und kleiner oder gleich der Anzahl der Reihen in der vollständigen Tabelle.

Wenn alle Reihen geladen sind und sich im DOM befinden, müssen Sie `aria-rowindex` nicht einfügen, da Browser den Index jeder Reihe automatisch berechnen. Wenn jedoch nur ein Teil der Reihen im DOM vorhanden ist, wird `aria-rowindex` benötigt, um die Position jeder Reihe in Bezug auf die vollständige Tabelle anzuzeigen. Wenn nur ein Teil der Reihen geladen ist, müssen Sie auch [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem tabellenbezogenen Element hinzufügen, selbst wenn Sie die Gesamtanzahl der Reihen nicht kennen.

Wenn die Tabelle mit nur einem Teil der Reihen eine Zelle hat, die mehr als eine Reihe umfängt, müssen sowohl die Reihe als auch die Zelle das `aria-rowindex` Attribut gesetzt haben. Wenn eine Zelle mehr als eine Reihe umfasst – wenn die Rolle einer Zelle das `aria-rowspan` Attribut oder die HTML-Zelle ein `rowspan` Attribut mit einem Wert größer als 1 hat – sollte der `aria-rowindex` Wert der Reihe, in der die Umspannung beginnt, auch auf die überlappende Zelle angewendet werden, zusätzlich zum entsprechenden Umspanungsattribut.

> [!NOTE]
> Das `aria-rowindex` muss bei jeder Reihe hinzugefügt werden, ist jedoch in den Zellen optional, außer bei Zellen, die Reihen umfassen: das `aria-rowindex` Attribut ist bei allen überlappenden Zellen erforderlich.

## Beispiele

Das folgende Beispiel zeigt ein Raster mit 24 Reihen, von denen die erste Reihe und die Reihen 7 bis 10 dem Benutzer angezeigt werden. Die letzte "position" Zelle umfasst Spalte 9 und 10.

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
      <span role="gridcell" aria-rowspan="2" aria-rowindex="9">Goalkeeper</span>
    </div>
    <div role="row" aria-rowindex="10">
      <span role="gridcell">Alyssa</span>
      <span role="gridcell">Naeher</span>
    </div>
  </div>
</div>
```

Beachten Sie, dass sowohl `aria-rowspan` als auch `aria-rowindex` auf der Torwartzelle vorhanden sind, die zwei Reihen umfasst.

## Werte

- `<integer>`
  - : Ein Ganzzahlwert, der größer oder gleich 1 ist, größer als der `aria-rowindex` der vorhergehenden Reihe, falls vorhanden, und kleiner oder gleich dem Wert von [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount).

## Zugehörige Schnittstellen

- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- Das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribut auf {{HTMLElement('td')}}
