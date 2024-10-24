---
title: aria-rowindex
slug: Web/Accessibility/ARIA/Attributes/aria-rowindex
l10n:
  sourceCommit: 4982b41a03b0dda8d1c3db43e8e644e77de1390d
---

{{AccessibilitySidebar}}

Das `aria-rowindex`-Attribut definiert die Position eines Elements in Bezug auf die Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters.

## Beschreibung

Einige Tabellen haben sehr viele Zeilen. Das Laden nur eines Teilabschnitts von Zeilen kann als Designanforderung erfolgen, um die Leistung zu verbessern oder die Benutzererfahrung zu optimieren.

Wenn nur ein Teil der Zeilen geladen wird, müssen alle Benutzer wissen, welche Teilmengen von Zeilen angezeigt werden. Das `aria-rowindex`-Attribut wird verwendet, um den Zeilenindex oder die Position der Zelle oder Zeile in Bezug auf die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster zu definieren.

Eingebunden in das {{HTMLElement('tr')}}-Element oder in ein Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role), oder direkt in das {{HTMLElement('td')}}, {{HTMLElement('th')}} oder ein Element mit der Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), ist der Wert die Position der Zeile in Bezug auf die gesamte Tabelle.

Der Wert für `aria-rowindex` ist eine ganze Zahl, die größer oder gleich `1` ist, größer als der `aria-rowindex`-Wert aller vorhergehenden Zeilen, und kleiner oder gleich der Anzahl der Zeilen in der gesamten Tabelle.

Wenn alle Zeilen geladen und im DOM sind, müssen Sie `aria-rowindex` nicht einbeziehen, da Browser automatisch den Index jeder Zeile berechnen. Wenn jedoch nur ein Teil der Zeilen im DOM vorhanden ist, wird `aria-rowindex` benötigt, um die Position jeder Zeile in Bezug auf die gesamte Tabelle anzuzeigen. Wenn nur ein Teil der Zeilen geladen ist, müssen Sie auch [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) beim Tabellen-Vorfahren einfügen, selbst wenn Sie die Gesamtanzahl der Zeilen nicht kennen.

Wenn die Tabelle mit nur einem Teil der Zeilen eine Zelle hat, die sich über mehr als eine Zeile erstreckt, müssen sowohl die Zeile als auch die Zelle das `aria-rowindex` gesetzt haben. Wenn eine Zelle sich über mehr als eine Zeile erstreckt－wenn eine Zellenrolle das `aria-rowspan`-Attribut umfasst oder die HTML-Zelle ein `rowspan`-Attribut mit einem Wert größer als 1 hat－muss der `aria-rowindex`-Wert der Zeile in der übergreifenden Zelle zusätzlich zum entsprechenden Zeilenspan-Attribut enthalten sein. Der Wert sollte der Zeilenindex der Zeile sein, bei der der Span beginnt.

> [!NOTE]
> Der `aria-rowindex` muss zu jeder Zeile hinzugefügt werden, ist aber optional für die Zellen, außer für Zellen, die sich über Zeilen erstrecken: das `aria-rowindex`-Attribut ist für alle übergreifenden Zellen erforderlich.

## Beispiele

Das folgende Beispiel zeigt ein Raster mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 10 dem Benutzer angezeigt werden. Die letzte "position"-Zelle erstreckt sich über Spalte 9 und 10.

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

Beachten Sie, dass sowohl `aria-rowspan` als auch `aria-rowindex` in der Torhüter-Zelle vorhanden sind, die sich über zwei Zeilen erstreckt.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich 1 ist, größer als der `aria-rowindex` der vorherigen Zeile, falls vorhanden, und kleiner oder gleich dem Wert von [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount).

## Zugehörige Schnittstellen

- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowindex`-Attributs wider.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowindex`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut auf {{HTMLElement('td')}}
