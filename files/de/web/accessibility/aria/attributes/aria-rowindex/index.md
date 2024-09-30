---
title: aria-rowindex
slug: Web/Accessibility/ARIA/Attributes/aria-rowindex
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-rowindex` Attribut definiert die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Gitters oder eines Baumgitters.

## Beschreibung

Einige Tabellen haben sehr viele Zeilen. Es kann als Design-Anforderung gewünscht werden, nur einen Teil der Zeilen zu laden, um die Leistung zu verbessern oder die Benutzererfahrung zu verbessern.

Wenn nur ein Teil der Zeilen geladen wird, müssen alle Nutzer informiert werden, welche Teilbereiche der Zeilen angezeigt werden. Das `aria-rowindex` Attribut wird verwendet, um die Zeilenindex oder Position einer Zelle oder Zeile in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Gitters oder eines Baumgitters zu definieren.

Verwendet auf dem {{HTMLElement('tr')}} Element oder auf einem Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role), oder direkt auf dem {{HTMLElement('td')}}, {{HTMLElement('th')}}, oder einem Element mit der Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), ist der Wert die Position der Zeile in Bezug auf die gesamte Tabelle.

Der Wert für `aria-rowindex` ist eine ganze Zahl, die größer oder gleich `1` ist, größer als der `aria-rowindex` Wert aller vorhergehenden Zeilen und kleiner oder gleich der Anzahl der Zeilen in der vollständigen Tabelle.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowindex` nicht einschließen, da Browser den Index jeder Zeile automatisch berechnen. Wenn jedoch nur ein Teil der Zeilen im DOM vorhanden ist, wird `aria-rowindex` benötigt, um die Position jeder Zeile in Bezug auf die vollständige Tabelle anzugeben. Wenn nur ein Teil der Zeilen geladen ist, müssen Sie auch [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) beim übergeordneten Tabellenelement einschließen, selbst wenn Sie die Gesamtanzahl der Zeilen nicht kennen.

Wenn die Tabelle mit nur einem Teil der Zeilen eine Zelle enthält, die mehr als eine Zeile überspannt, müssen sowohl die Zeile als auch die Zelle mit `aria-rowspan` versehen werden. Wenn eine Zelle mehr als eine Zeile überspannt – wenn eine Zellrolle das `aria-rowspan` Attribut enthält oder HTML-Zelle eine `rowspan` Attribut mit einem Wert größer als 1 gesetzt hat – muss der `aria-rowindex` Wert der Zeile auf der überspannenden Zelle zusätzlich zum entsprechenden Überspannattribute angegeben werden. Der Wert sollte der Zeilenindex der Zeile sein, in der die Überspannung beginnt.

> [!NOTE]
> Das `aria-rowindex` muss jeder Zeile hinzugefügt werden, ist jedoch optional für die Zellen, außer für Zellen, die Zeilen überspannen: Das `aria-rowindex` Attribut ist für alle überspannenden Zellen erforderlich.

## Beispiele

Das folgende Beispiel zeigt ein Gitter mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 10 dem Nutzer angezeigt werden. Die letzte "Position"-Zelle überspannt die Spalten 9 und 10.

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

Beachten Sie, dass sowohl `aria-rowspan` als auch `aria-rowindex` auf der Torhüterzelle vorhanden sind, die zwei Zeilen überspannt.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich 1 ist, größer als der `aria-rowindex` der vorhergehenden Zeile, falls vorhanden, und kleiner oder gleich dem Wert von [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount).

## Zugeordnete Schnittstellen

- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.

## Zugeordnete Rollen

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
- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribut auf {{HTMLElement('td')}}
