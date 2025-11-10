---
title: "ARIA: aria-colspan-Attribut"
short-title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-colspan`-Attribut definiert die Anzahl der Spalten, die von einer Zelle oder einem gridcell in einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) überspannt werden.

## Beschreibung

Vorgesehen für [`cell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) und [`gridcell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), die nicht in einem nativen HTML-{{HTMLElement('table')}} enthalten sind, definiert der Wert der `aria-colspan`-Eigenschaft die Anzahl der Spalten, die von einer einzelnen Zelle in einer ARIA-[`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) überspannt werden.

In HTML verfügen die {{HTMLElement('th')}}- und {{HTMLElement('td')}}-Elemente über das [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#attributes)-Attribut. Wenn Sie die semantische {{HTMLElement('table')}} verwenden, nutzen Sie das native `colspan`-Attribut wie vorgesehen. Dieses ARIA-Attribut ist für Zellen und gridcells gedacht, die nicht in einer nativen Tabelle enthalten sind, und wird ignoriert, wenn es auf eine Zelle in einer {{HTMLElement('table')}} angewendet wird.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen bereits integriert nutzen können, anstatt ein Element umzufunktionieren und **ein** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es barrierefrei zu machen, dann tun Sie dies. Verwenden Sie HTML-{{HTMLelement('table')}}-Elemente, einschließlich {{HTMLelement('td')}} und {{HTMLelement('th')}} mit dem `colspan`-Attribut anstelle von nicht-semantischen Elementen mit ARIA-Rollen und -Attributen, wann immer möglich.

Der Wert von `aria-colspan` sollte eine positive ganze Zahl sein. Der Standardwert oder der angenommene Wert einer Zellenspan ist 1. Stellen Sie sicher, dass der angegebene Wert nicht dazu führt, dass die Zelle oder das gridcell mit der nächsten Zelle oder dem nächsten gridcell in derselben Zeile überlappt und nicht dazu führt, dass die Zelle außerhalb der enthaltenen Tabelle, des Grid oder des Treegrid reicht.

## Beispiel

Das folgende Beispiel ist ein Teil einer Punkte-Tabelle einer Bowling-Turnierliga. Jedes Spiel umfasst 10 Frames, und jedes Frame erstreckt sich über 3 Punktzahlen: zwei Würfe und das aktuelle Gesamtergebnis. Das 10. (und letzte) Frame in jedem Spiel umfasst 4 Spalten, falls jemand nur Strikes erzielt.

```html
<div role="grid" aria-rowcount="27">
  aria-label="Bowling League Scores"
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan and aria-colspan provide
            assistive technologies with the correct data cell header information
            when header cells span more than one row or column.
          -->

      <span role="columnheader" aria-rowspan="2">Team</span>
      <span role="columnheader" aria-colspan="2">Player</span>
      <span role="columnheader" aria-colspan="31">Game 1 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 2 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 3 Frames</span>
      <span role="columnheader" aria-rowspan="2">Total</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">Last Name</span>
      <span role="columnheader">First Name</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">The Mighty Quokkas</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

Hätten wir eine {{HTMLElement('table')}} und semantische Tabellen-Elemente verwendet, wäre unser Markup weniger ausführlich und von vornherein zugänglich gewesen.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich dem Standardwert von 1 ist und die Anzahl der von der Zelle überspannten Spalten definiert. Der Wert muss kleiner sein, als dass er dazu führen würde, dass eine Zelle mit der nächsten Zelle in derselben Zeile überlappt.

## Zugehörige Schnittstellen

- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Die [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)-Eigenschaft, Teil der Schnittstelle jedes Elements, spiegelt den Wert des `aria-colspan`-Attributs wider, welches die Anzahl der von einer Zelle oder gridcell in einer Tabelle, Grid oder Treegrid überspannten Spalten definiert.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Erbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('th')}} und {{HTMLElement('td')}} [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#attributes)-Attribut
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Eigenschaft
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Eigenschaft
- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)-Rolle
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-Rolle
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-Rolle
