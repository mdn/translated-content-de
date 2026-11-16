---
title: "ARIA: aria-colspan-Attribut"
short-title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-colspan` definiert die Anzahl der Spalten, über die sich eine Zelle oder gridcell innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) erstreckt.

## Beschreibung

Die Eigenschaft `aria-colspan` ist für [`cell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) und [`gridcell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) vorgesehen, die sich nicht in einer nativen HTML-{{HTMLElement('table')}} befinden. Ihr Wert definiert, über wie viele Spalten sich eine einzelne Zelle einer ARIA-[`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), eines ARIA-[`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder eines ARIA-[`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) erstreckt.

In HTML verfügen {{HTMLElement('th')}}- und {{HTMLElement('td')}}-Elemente über das Attribut [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#attributes). Wenn Sie eine semantische {{HTMLElement('table')}} verwenden, nutzen Sie das native Attribut `colspan`. Dieses ARIA-Attribut ist für Zellen und gridcells vorgesehen, die sich nicht in einer nativen Tabelle befinden. Wird es für eine Zelle in einer {{HTMLElement('table')}} verwendet, wird es ignoriert.

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die bereits die erforderliche Semantik und das erforderliche Verhalten bietet, sollten Sie dies tun, statt ein Element zweckzuentfremden und eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft **hinzuzufügen**, um es zugänglich zu machen. Verwenden Sie nach Möglichkeit HTML-{{HTMLelement('table')}}-Elemente einschließlich {{HTMLelement('td')}} und {{HTMLelement('th')}} mit dem Attribut `colspan` statt nicht semantischer Elemente mit ARIA-Rollen und -Attributen.

Der Wert von `aria-colspan` sollte eine positive Ganzzahl sein. Der Standardwert beziehungsweise angenommene Wert für die Spaltenanzahl einer Zelle ist 1. Stellen Sie sicher, dass der angegebene Wert nicht dazu führt, dass sich die Zelle oder gridcell mit der nächsten Zelle oder gridcell derselben Zeile überschneidet oder über die umgebende Tabelle, das grid oder das treegrid hinaus erstreckt.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die mindestens dem Standardwert 1 entspricht und die Anzahl der Spalten definiert, über die sich die Zelle erstreckt. Der Wert muss so klein sein, dass sich die Zelle nicht mit der nächsten Zelle derselben Zeile überschneidet.

## Zugehörige Schnittstellen

- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Die Eigenschaft [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan), die zur Schnittstelle jedes Elements gehört, spiegelt den Wert des Attributs `aria-colspan` wider. Dieses definiert die Anzahl der Spalten, über die sich eine Zelle oder gridcell innerhalb einer Tabelle, eines grid oder eines treegrid erstreckt.

## Zugehörige Rollen

Verwendet in der Rolle:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Wird an folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## Beispiel

Das folgende Beispiel zeigt einen Ausschnitt aus einer Ergebnistabelle einer Bowling-Turnierliga. Jedes Spiel umfasst 10 Frames, und jeder Frame umfasst drei Wertungsfelder: zwei Würfe und die aktuelle Gesamtpunktzahl. Der zehnte und letzte Frame jedes Spiels erstreckt sich über vier Spalten, falls jemand ausschließlich Strikes erzielt.

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

Wenn wir eine {{HTMLElement('table')}} und semantische Tabellenelemente verwendet hätten, wäre unser Markup weniger umfangreich und standardmäßig zugänglich gewesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Attribut [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#attributes) der Elemente {{HTMLElement('th')}} und {{HTMLElement('td')}}
- Die Eigenschaft [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- Die Eigenschaft [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- Die Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- Die Rolle [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- Die Rolle [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
