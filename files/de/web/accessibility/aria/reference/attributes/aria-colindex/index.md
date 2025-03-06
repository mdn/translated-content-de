---
title: aria-colindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-colindex`-Attribut definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer `table`, `grid` oder `treegrid`.

## Beschreibung

Einige Tabellen sind sehr groß und daher wird nur ein Teil ihres Inhalts initial angezeigt. Während das Laden nur eines Abschnitts der Spalten die Benutzererfahrung verbessern kann, müssen alle Benutzer informiert werden, welche Teile des Inhalts angezeigt werden und dass nicht der gesamte Inhalt der Tabelle vorhanden ist.

ARIA bietet mehrere Attribute, um Informationen über `table`, `grid` und `treegrid`-Strukturen bereitzustellen. Das `aria-colindex`-Attribut definiert die Substruktur, den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb solcher Strukturen.

In Verbindung mit dem [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)-Attribut, das unterstützende Technologien darüber informiert, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären, wird `aria-colindex` verwendet, um den Spaltenindex oder die Position eines Elements in Bezug auf diese Gesamtanzahl der Spalten zu definieren.

Wenn alle Spalten im DOM vorhanden sind, ist es nicht notwendig, `aria-colindex` hinzuzufügen, da Benutzeragenten den Spaltenindex jeder Zelle oder Gridcell berechnen können. Wenn jedoch zu irgendeinem Zeitpunkt Spalten im DOM fehlen, verwenden Sie `aria-colindex`, um die Spalte jeder Zelle oder Gridcell in Bezug auf die vollständige Tabelle anzugeben.

Der Wert für `aria-colindex` ist eine Ganzzahl, die größer oder gleich 1 ist. Jeder Wert sollte größer als der `aria-colindex` der vorherigen Spalte und kleiner oder gleich der Anzahl der Spalten in der vollständigen Tabelle sein.

Wenn eine Zelle oder Gridcell mehrere Spalten überspannt, setzen Sie [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) auf die Anzahl der Spalten, die sie überspannt, falls Sie nicht die {{htmlelement('td')}}- und {{htmlelement('th')}}-HTML-Elemente verwenden, und setzen Sie `aria-colindex` auf den Wert des Anfangs des Spannenbereichs; den Wert, den sie hätte, wenn sie nur eine Spalte breit wäre, die nur die erste deiner Spalten überspannt.

Wenn der Satz der im DOM vorhandenen Spalten zusammenhängend ist und es keine Zellen gibt, die mehr als eine Zeile oder Spalte in diesem Satz überspannen, müssen Sie `aria-colindex` nur einmal in jeder Zeile auf die erste Spalte des Satzes setzen. Wenn die Spalten nicht zusammenhängend sind, fügen Sie den `aria-colindex`-Wert für alle Kinder oder besessenen Elemente jeder Zeile ein.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, die die Tabelle bilden, wird mit `aria-colcount="6"` auf der Tabelle selbst festgelegt. Da die Spalten nicht zusammenhängend sind, wird bei jedem [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Elementen - das `aria-colindex`-Attribut gesetzt.

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

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. verwenden und nur einen Teilabschnitt der Spalten anzeigen, sind die Attribute `aria-colcount` und `aria-colindex` zwar immer noch notwendig, aber das Markieren ist nicht so umfangreich.

Wenn Sie semantische Tabellenkopf-Elemente verwenden und nicht alle Spalten im DOM vorhanden sind, muss das `aria-colindex`-Attribut nur einmal pro Spalte im Tabellenkopf {{HTMLElement('th')}} definiert werden.

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

Wenn alle Spalten im DOM vorhanden sind, sind weder `aria-colcount` noch `aria-colindex` notwendig.

## Werte

- `<integer>`
  - : Eine Ganzzahl größer oder gleich 1 und kleiner oder gleich der Gesamtanzahl der Spalten, falls alle vorhanden wären.

## Zugehörige Schnittstellen

- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.

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

- [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) Attribut
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) Attribut
- HTML {{HTMLElement('table')}} Element
- HTML {{HTMLElement('th')}} Element
- HTML {{HTMLElement('td')}} Element
