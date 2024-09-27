---
title: aria-colindex
slug: Web/Accessibility/ARIA/Attributes/aria-colindex
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-colindex`-Attribut definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer `table`, `grid` oder `treegrid`.

## Beschreibung

Einige Tabellen sind sehr groß, und daher wird anfänglich nur ein Teil ihres Inhalts angezeigt. Obwohl das Laden nur eines Teilabschnitts der Spalten die Benutzererfahrung verbessern kann, müssen Sie alle Benutzer darüber informieren, welche Teile des Inhalts angezeigt werden und dass nicht der gesamte Tabelleninhalt vorhanden ist.

ARIA bietet mehrere Attribute, um Informationen über `table`, `grid` und `treegrid`-Strukturen bereitzustellen. Das `aria-colindex`-Attribut definiert die Substruktur, den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb solcher Strukturen.

In Verbindung mit dem [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut, das unterstützenden Technologien mitteilt, wie viele Spalten die Tabelle hätten, wenn alle Spalten vorhanden wären, wird `aria-colindex` verwendet, um den Spaltenindex oder die Position eines Elements in Bezug auf diese Gesamtzahl der Spalten anzugeben.

Wenn alle Spalten im DOM vorhanden sind, ist `aria-colindex` nicht erforderlich, da Benutzeragenten den Spaltenindex jeder Zelle oder jedes Rasterfelds berechnen können. Wenn jedoch eine beliebige Spalte zu irgendeinem Zeitpunkt aus dem DOM ausgelassen wird, verwenden Sie `aria-colindex`, um die Spalte jeder Zelle oder jedes Rasterfelds in Bezug auf die vollständige Tabelle zu kennzeichnen.

Der Wert für `aria-colindex` ist eine Ganzzahl, die größer oder gleich 1 ist. Jeder Wert sollte größer als der `aria-colindex` der vorherigen Spalte und kleiner oder gleich der Anzahl der Spalten in der vollständigen Tabelle sein.

Wenn eine Zelle oder ein Rasterfeld sich über mehrere Spalten erstreckt, setzen Sie [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) auf die Anzahl der Spalten, die es überspannt, wenn Sie nicht die {{htmlelement('td')}} und {{htmlelement('th')}} HTML-Elemente verwenden, und setzen Sie `aria-colindex` auf den Wert des Beginns der Spanne; den Wert, den es hätte, wenn es nur eine Spalte breit wäre und sich nur über seine erste Spalte erstreckte.

Wenn die Menge der Spalten, die im DOM vorhanden ist, zusammenhängend ist und es in diesem Satz keine Zellen gibt, die sich über mehr als eine Zeile oder Spalte erstrecken, müssen Sie `aria-colindex` nur einmal pro Zeile in der ersten Spalte des Satzes setzen. Wenn die Spalten nicht zusammenhängend sind, geben Sie den `aria-colindex`-Wert für alle Kinder oder besessenen Elemente jeder Zeile an.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, die die Tabelle bilden, wird als `aria-colcount="6"` auf der Tabelle selbst festgelegt. Da die Spalten nicht zusammenhängend sind, haben alle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Elemente - das `aria-colindex`-Attribut gesetzt.

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

Die erste Regel zur Verwendung von ARIA ist: "Wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} etc. verwenden und nur einen Teilabschnitt der Spalten anzeigen, sind das `aria-colcount`- und `aria-colindex`-Attribut immer noch notwendig, aber das Markup ist nicht so ausführlich.

Wenn semantische Tabellenkopf-Elemente verwendet werden und nicht alle Spalten im DOM sind, muss das `aria-colindex`-Attribut nur einmal pro Spalte im Tabellenkopf {{HTMLElement('th')}} definiert werden.

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">First name</th>
      <th aria-colindex="2" scope="col">Last name</th>
      <th aria-colindex="5" scope="col">City</th>
      <th aria-colindex="6" scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>New York</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

Wenn alle Spalten im DOM vorhanden sind, sind weder `aria-colcount` noch `aria-colindex` erforderlich.

## Werte

- `<integer>`
  - : Ganzzahl, die größer oder gleich 1 ist und kleiner oder gleich der Gesamtanzahl der Spalten, wenn alle vorhanden wären.

## Zugehörige Schnittstellen

- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) Attribut
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) Attribut
- HTML {{HTMLElement('table')}} Element
- HTML {{HTMLElement('th')}} Element
- HTML {{HTMLElement('td')}} Element
