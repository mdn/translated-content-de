---
title: "ARIA: aria-colindex Attribut"
short-title: aria-colindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-colindex` Attribut definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb eines `table`, `grid` oder `treegrid`.

## Beschreibung

Einige Tabellen sind sehr groß und zeigen daher zunächst nur einen Teil ihres Inhalts an. Während das Laden nur eines Unterabschnitts der Spalten die Benutzererfahrung verbessern kann, müssen Sie alle Benutzer darüber informieren, welche Teile des Inhalts angezeigt werden und dass nicht der gesamte Inhalt der Tabelle vorhanden ist.

ARIA stellt mehrere Attribute bereit, um Informationen über `table`, `grid` und `treegrid` Strukturen bereitzustellen. Das `aria-colindex` Attribut definiert die Substruktur, sprich den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb solcher Strukturen.

In Verbindung mit dem [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut, das unterstützende Technologien darüber informiert, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären, wird `aria-colindex` verwendet, um den Spaltenindex oder die Position eines Elements mit Bezug auf diese Gesamtzahl der Spalten anzugeben.

Wenn alle Spalten im DOM vorhanden sind, ist `aria-colindex` nicht erforderlich, da Benutzeragenten den Spaltenindex jeder Zelle oder Gitterzelle berechnen können. Wenn jedoch zu irgendeinem Zeitpunkt Spalten aus dem DOM weggelassen werden, verwenden Sie `aria-colindex`, um die Spalte jeder Zelle oder Gitterzelle in Bezug auf die vollständige Tabelle anzugeben.

Der Wert für `aria-colindex` ist eine ganze Zahl, die größer oder gleich 1 ist. Jeder Wert sollte größer als der vorherige `aria-colindex` der Spalte und kleiner oder gleich der Anzahl der Spalten in der vollständigen Tabelle sein.

Wenn eine Zelle oder Gitterzelle mehrere Spalten überspannt, setzen Sie [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) auf die Anzahl der Spalten, die sie überspannt, falls nicht die HTML-Elemente {{htmlelement('td')}} und {{htmlelement('th')}} verwendet werden, und setzen Sie `aria-colindex` auf den Wert des Anfangs der Überlappung; den Wert, den es hätte, wenn es nur eine Spalte breit wäre und nur die erste seiner Spalten überspannt würde.

Wenn der Satz von Spalten, die im DOM vorhanden sind, zusammenhängend ist und wenn es in diesem Satz keine Zellen gibt, die mehr als eine Zeile oder Spalte überspannen, müssen Sie `aria-colindex` nur einmal in jeder Zeile in der ersten Spalte des Satzes setzen. Wenn die Spalten nicht zusammenhängend sind, schließen Sie den `aria-colindex` Wert für alle untergeordneten oder besessenen Elemente jeder Zeile ein.

Das folgende Beispiel zeigt ein Gitter mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtzahl der Spalten, die die Tabelle bildet, ist mit `aria-colcount="6"` an der Tabelle selbst gesetzt. Da die Spalten nicht zusammenhängend sind, haben jedes [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Elemente - das `aria-colindex` Attribut gesetzt.

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

Die erste Regel der ARIA Verwendung ist: "Wenn Sie eine native Funktion mit den erforderlichen Semantik- und Verhaltensweisen verwenden können, anstatt ein Element zu zweckentfremden und **eine** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantik mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc. verwenden und nur einen Unterabschnitt von Spalten anzeigen, sind die Attribute `aria-colcount` und `aria-colindex` weiterhin notwendig, aber das Markup ist nicht so umfangreich.

Wenn semantische Tabelllenkopf-Elemente verwendet werden und nicht alle Spalten im DOM sind, muss das `aria-colindex` Attribut nur einmal pro Spalte im Spaltenkopf {{HTMLElement('th')}} definiert werden.

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
  - : Eine ganze Zahl, die größer oder gleich 1 und kleiner oder gleich der Gesamtzahl der Spalten ist, wenn alle vorhanden wären.

## Zugehörige Schnittstellen

- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-colindex` Attributs wider.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Die [`ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-colindex` Attributs wider.

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
