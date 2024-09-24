---
title: aria-colspan
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-colspan` definiert die Anzahl der Spalten, die von einer Zelle oder Grid-Zelle innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

## Beschreibung

Gedacht für [`cells`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) und [`gridcells`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), die nicht in einer nativen HTML {{HTMLElement('table')}} enthalten sind. Der Wert der `aria-colspan` Eigenschaft legt die Anzahl der Spalten fest, die von einer einzelnen Zelle in einer ARIA [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

In HTML haben {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente das Attribut [`colspan`](/de/docs/Web/HTML/Element/td#attributes). Wenn Sie die semantische {{HTMLElement('table')}} verwenden, nutzen Sie das native `colspan` Attribut wie vorgesehen. Dieses ARIA-Attribut ist für Zellen und Grid-Zellen gedacht, die nicht in einer nativen Tabelle enthalten sind, und wird ignoriert, wenn es auf einer Zelle in einer {{HTMLElement('table')}} verwendet wird.

> [!NOTE]
> Die erste Regel für den Einsatz von ARIA lautet: Wenn Sie ein natives Feature mit der benötigten Semantik und verhalten nutzen können, anstatt ein Element umzufunktionieren und **ein** ARIA-Rolle, -Status oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie HTML {{HTMLelement('table')}}-Elemente, einschließlich {{HTMLelement('td')}} und {{HTMLelement('th')}} mit dem `colspan` Attribut, anstelle von nicht-semantischen Elementen mit ARIA-Rollen und -Attributen, wann immer möglich.

Der Wert von `aria-colspan` sollte eine positive ganze Zahl sein. Der Standard- oder angenommene Wert einer Zellenspanne beträgt 1. Stellen Sie sicher, dass der enthaltene Wert nicht dazu führt, dass die Zelle oder Grid-Zelle die nächste Zelle oder Grid-Zelle in derselben Zeile überlappt und nicht dazu führt, dass die Zelle außerhalb der enthaltenden Tabelle, des Gitters oder des Baumgitters gespannt wird.

## Beispiel

Das folgende Beispiel zeigt einen Ausschnitt seiner eines Bowling-Turnier-Liga-Punktzettels. Jedes Spiel umfasst 10 Frames, und jeder Frame umfasst 3 Punkte: zwei Würfe und das aktuelle Gesamtergebnis. Der 10. (und letzte) Frame in jedem Spiel umfasst 4 Spalten, falls jemand alle Strikes erzielt.

```html
<div role="grid" aria-rowcount="27">
  aria-label="Bowling League Scores"
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan und aria-colspan stellen
            unterstützenden Technologien die korrekten Datenzellen-Kopfzeilen-
            informationen zur Verfügung, wenn Kopfzeilen-Zellen mehr als eine
            Zeile oder Spalte umfassen.
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

Hätten wir eine {{HTMLElement('table')}} und semantische Tabellenelemente verwendet, wäre unser Markup weniger ausführlich und von Haus aus zugänglicher gewesen.

## Werte

- `<integer>`
  - : Eine ganze Zahl größer oder gleich dem Standardwert von 1, die die Anzahl der Spalten definiert, die von der Zelle überspannt werden. Der Wert muss kleiner sein als der, der dazu führen würde, dass eine Zelle die nächste Zelle in derselben Zeile überlappt.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaColSpan")}}
  - : Die [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan) Eigenschaft, Teil der Schnittstelle jedes Elements, spiegelt den Wert des `aria-colspan` Attributs wider, das die Anzahl der Spalten definiert, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Gitters oder eines Baumgitters überspannt werden.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('th')}} und {{HTMLElement('td')}} [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Eigenschaft
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) Eigenschaft
- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) Rolle
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
