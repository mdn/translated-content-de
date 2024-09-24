---
title: aria-colindex
slug: Web/Accessibility/ARIA/Attributes/aria-colindex
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer `table`, `grid` oder `treegrid`.

## Beschreibung

Einige Tabellen sind sehr groß und deshalb wird nur ein Teil ihres Inhalts zunächst angezeigt. Während das Laden nur eines Abschnitts der Spalten die Benutzererfahrung verbessern kann, müssen Sie allen Nutzern mitteilen, welche Teile des Inhalts angezeigt werden und dass nicht der gesamte Inhalt der Tabelle vorhanden ist.

ARIA bietet mehrere Attribute, um Informationen über Strukturen wie `table`, `grid` und `treegrid` bereitzustellen. Das Attribut `aria-colindex` definiert die Unterstruktur, den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb solcher Strukturen.

In Verbindung mit dem Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), das assistiven Technologien mitteilt, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären, wird `aria-colindex` verwendet, um den Spaltenindex oder die Position eines Elements in Bezug auf diese Gesamtanzahl der Spalten anzugeben.

Wenn alle Spalten im DOM vorhanden sind, ist es nicht notwendig, `aria-colindex` zu inkludieren, da User Agents den Spaltenindex jeder Zelle oder jedes Gitterfeldes berechnen können. Wenn jedoch zu einem beliebigen Zeitpunkt Spalten aus dem DOM entfernt werden, verwenden Sie `aria-colindex`, um die Spalte jeder Zelle oder jedes Gitterfeldes in Bezug auf die gesamte Tabelle anzugeben.

Der Wert für `aria-colindex` ist eine Ganzzahl, die größer oder gleich 1 ist. Jeder Wert sollte größer sein als der `aria-colindex` der vorherigen Spalte und kleiner oder gleich der Anzahl der Spalten in der vollständigen Tabelle.

Wenn eine Zelle oder ein Gitterfeld mehrere Spalten überspannt, setzen Sie [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) auf die Anzahl der Spalten, die es überspannt, falls Sie nicht die HTML-Elemente {{htmlelement('td')}} und {{htmlelement('th')}} verwenden, und setzen Sie `aria-colindex` auf den Wert des Beginns der Spanne; den Wert, den es gehabt hätte, wenn es nur eine Spalte breit wäre und nur die erste seiner Spalten überspannen würde.

Wenn die im DOM vorhandene Spaltenmenge zusammenhängend ist und es keine Zellen gibt, die innerhalb dieses Satzes mehr als eine Zeile oder Spalte überspannen, müssen Sie den `aria-colindex` nur einmal in jeder Zeile in der ersten Spalte des Satzes angeben. Wenn die Spalten nicht zusammenhängend sind, geben Sie den `aria-colindex`-Wert für alle Kinder oder zugeordneten Elemente jeder Zeile an.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtzahl der Spalten, aus denen die Tabelle besteht, ist als `aria-colcount="6"` an der Tabelle selbst eingestellt. Da die Spalten nicht zusammenhängend sind, haben alle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)-Elemente - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) - das Attribut `aria-colindex` gesetzt.

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

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie ein natives Feature verwenden können, dessen Semantik und Verhalten bereits eingebaut sind, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantik mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. verwenden und nur einen Teil der Spalten anzeigen, sind die Attribute `aria-colcount` und `aria-colindex` dennoch erforderlich, aber das Markup ist nicht so umfangreich.

Wenn semantische Tabellenkopfelemente verwendet werden und nicht alle Spalten im DOM vorhanden sind, muss das Attribut `aria-colindex` nur einmal pro Spalte in der Spaltenüberschrift {{HTMLElement('th')}} definiert werden.

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
  - : Ganzzahl, die größer oder gleich 1 und kleiner oder gleich der Gesamtzahl der Spalten ist, wenn alle vorhanden wären.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaColIndex")}}
  - : Die [`ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.
- {{domxref("ElementInternals.ariaColIndex")}}
  - : Die [`ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.

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

- Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext)
- Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- HTML-Element {{HTMLElement('table')}}
- HTML-Element {{HTMLElement('th')}}
- HTML-Element {{HTMLElement('td')}}
