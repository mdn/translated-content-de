---
title: aria-rowindex
slug: Web/Accessibility/ARIA/Attributes/aria-rowindex
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-rowindex` Attribut definiert die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Gitters oder Baumgitters.

## Beschreibung

Einige Tabellen haben sehr viele Zeilen. Es kann erforderlich sein, nur einen Teil der Zeilen zu laden, um die Leistung zu verbessern oder die Benutzererfahrung zu optimieren.

Wenn nur ein Teil der Zeilen geladen wird, müssen Sie alle Benutzer darüber informieren, welche Teile der Zeilen angezeigt werden. Das `aria-rowindex` Attribut wird verwendet, um den Zeilenindex oder die Position der Zelle oder Zeile in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Gitters oder Baumgitters zu definieren.

Eingefügt auf dem {{HTMLElement('tr')}} Element oder auf einem Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role), oder direkt auf dem {{HTMLElement('td')}}, {{HTMLElement('th')}} oder einem Element mit der Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), ist der Wert die Position der Zeile in Bezug auf die vollständige Tabelle.

Der Wert für `aria-rowindex` ist eine Ganzzahl, die größer oder gleich `1` ist, größer als der `aria-rowindex` Wert aller vorherigen Zeilen und kleiner oder gleich der Anzahl der Zeilen in der gesamten Tabelle.

Wenn alle Zeilen geladen sind und im DOM vorhanden sind, müssen Sie `aria-rowindex` nicht einfügen, da Browser den Index jeder Zeile automatisch berechnen. Wenn jedoch nur ein Teil der Zeilen im DOM vorhanden ist, ist `aria-rowindex` erforderlich, um die Position jeder Zeile in Bezug auf die vollständige Tabelle anzugeben. Wenn nur ein Teil der Zeilen geladen ist, müssen Sie auch [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) auf dem Tabellevorfahren einschließen, selbst wenn Sie die Gesamtanzahl der Zeilen nicht kennen.

Wenn die Tabelle mit nur einem Teil der Zeilen eine Zelle hat, die sich über mehr als eine Zeile erstreckt, müssen sowohl die Zeile als auch die Zelle das `aria-rowspan` Attribut gesetzt haben. Wenn eine Zelle sich über mehr als eine Zeile erstreckt－wenn eine Zellrolle das `aria-rowspan` Attribut enthält oder die HTML-Zelle ein `rowspan` Attribut mit einem Wert größer als 1 hat－fügen Sie den `aria-rowindex` Wert der Zeile auf der sich erstreckenden Zelle zusätzlich zu dem entsprechenden Reihen-Spannattribut ein. Der Wert sollte der Zeilenindex der Zeile sein, an der die Span beginnt.

> [!NOTE]
> Das `aria-rowindex` muss zu jeder Zeile hinzugefügt werden, ist aber für die Zellen optional, mit Ausnahme von Zellen, die sich über Reihen erstrecken: Das `aria-rowindex` Attribut ist für alle sich erstreckenden Zellen erforderlich.

## Beispiele

Das folgende Beispiel zeigt ein Gitter mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 10 dem Benutzer angezeigt werden. Die letzte "position" Zelle erstreckt sich über die Spalten 9 und 10.

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

Beachten Sie, dass sowohl `aria-rowspan` als auch `aria-rowindex` in der Torhüterzelle vorhanden sind, die sich über zwei Zeilen erstreckt.

## Werte

- `<integer>`
  - : Eine Ganzzahl größer oder gleich 1, größer als der `aria-rowindex` der vorherigen Zeile, falls vorhanden, und kleiner oder gleich dem Wert von [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount).

## Zugehörige Schnittstellen

- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Die [`ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowindex` Attributs wider.

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
- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribut auf {{HTMLElement('td')}}
