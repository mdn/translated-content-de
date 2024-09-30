---
title: aria-colindex
slug: Web/Accessibility/ARIA/Attributes/aria-colindex
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-colindex`-Attribut definiert den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten innerhalb einer `<table>`, `<grid>` oder `<treegrid>`.

## Beschreibung

Einige Tabellen sind sehr groß und zeigen deshalb nur einen Teil ihres Inhalts anfänglich an. Während das Laden nur eines Ausschnitts der Spalten die Benutzererfahrung verbessern kann, müssen Sie allen Benutzern mitteilen, welche Teile des Inhalts angezeigt werden und dass nicht der gesamte Inhalt der Tabelle vorhanden ist.

ARIA bietet mehrere Attribute, um Informationen über `<table>`, `<grid>` und `<treegrid>`-Strukturen bereitzustellen. Das `aria-colindex`-Attribut definiert die Substruktur, den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten innerhalb solcher Strukturen.

In Verbindung mit dem [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attribut, das unterstützenden Technologien mitteilt, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären, wird `aria-colindex` für den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten verwendet.

Wenn alle Spalten im DOM vorhanden sind, ist es nicht notwendig, `aria-colindex` anzugeben, da Benutzeragenten den Spaltenindex jeder Zelle oder `gridcell` berechnen können. Wenn jedoch einige Spalten zu irgendeinem Zeitpunkt aus dem DOM entfernt sind, verwenden Sie `aria-colindex`, um die Spalte jeder Zelle oder `gridcell` in Bezug auf die vollständige Tabelle anzugeben.

Der Wert für `aria-colindex` ist eine ganze Zahl, die größer oder gleich 1 ist. Jeder Wert sollte größer als der `aria-colindex` der vorherigen Spalte und kleiner oder gleich der Anzahl der Spalten in der vollständigen Tabelle sein.

Wenn eine Zelle oder `gridcell` mehrere Spalten überspannt, setzen Sie [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) auf die Anzahl der Spalten, die sie überspannt, wenn nicht die HTML-Elemente {{htmlelement('td')}} und {{htmlelement('th')}} verwendet werden und setzen Sie `aria-colindex` auf den Wert, an dem die Spalte startet; den Wert, den sie hätte, wenn sie nur eine Spalte breit wäre und nur ihre erste Spalte überspannen würde.

Wenn der im DOM vorhandene Satz von Spalten zusammenhängend ist und wenn es im Set keine Zellen gibt, die mehr als eine Zeile oder Spalte umfassen, müssen Sie `aria-colindex` nur einmal pro Zeile in der ersten Spalte des Sets einfügen. Wenn die Spalten nicht zusammenhängend sind, geben Sie den `aria-colindex`-Wert für alle Kinder oder zugehörigen Elemente jeder Zeile an.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, die die Tabelle bilden, ist als `aria-colcount="6"` auf der Tabelle selbst gesetzt. Da die Spalten nicht zusammenhängend sind, haben alle [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)-Elemente - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) - das `aria-colindex`-Attribut gesetzt.

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

Die erste Regel beim Einsatz von ARIA lautet: "Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen bereits integriert verwenden können, anstatt ein Element umzufunktionieren und **ein** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. verwenden und nur einen Ausschnitt der Spalten anzeigen, sind die `aria-colcount` und `aria-colindex`-Attribute immer noch notwendig, aber das Markup ist nicht so ausführlich.

Wenn semantische Tabellenkopfelemente verwendet werden und nicht alle Spalten im DOM sind, muss das `aria-colindex`-Attribut nur einmal pro Spalte im Tabellenkopf {{HTMLElement('th')}} definiert werden.

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

Wenn alle Spalten im DOM sind, sind weder `aria-colcount` noch `aria-colindex` erforderlich.

## Werte

- `<integer>`
  - : Ganzzahl größer oder gleich 1 und kleiner oder gleich der Gesamtanzahl der Spalten, wenn alle vorhanden wären.

## Zugehörige Schnittstellen

- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-colindex`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

Wird in Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) Attribut
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) Attribut
- HTML {{HTMLElement('table')}}-Element
- HTML {{HTMLElement('th')}}-Element
- HTML {{HTMLElement('td')}}-Element
