---
title: aria-colcount
slug: Web/Accessibility/ARIA/Attributes/aria-colcount
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-colcount` definiert die Gesamtanzahl der Spalten in einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role), wenn nicht alle Spalten im [DOM](/de/docs/Glossary/DOM) vorhanden sind.

## Beschreibung

Einige Tabellen sind sehr groß, und es ist nicht möglich, alle Spalten dem Benutzer anzuzeigen. Oder es ist möglich, aber eine so breite Tabelle würde eine schlechte Benutzererfahrung bieten. Verwenden Sie das Attribut `aria-colcount`, um unterstützenden Technologien mitzuteilen, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären. Der Wert ist eine Ganzzahl, die die Anzahl der Spalten repräsentiert, aus denen die vollständige Tabelle besteht. Wenn Sie die Gesamtanzahl der Spalten einer Tabelle nicht kennen, aber wissen, dass sie nicht alle im DOM vorhanden sein werden, verwenden Sie den Wert -1, also `aria-colcount="-1"`. Dieser Wert teilt dem User Agent mit, dass die aktuelle Anzahl der Spalten im DOM möglicherweise nicht der tatsächlichen Anzahl der Spalten in der Tabelle entspricht.

Wenn alle Spalten einer Tabelle im DOM vorhanden sind, ist das Attribut `aria-colcount` nicht erforderlich, da Browser die Gesamtanzahl der Spalten automatisch berechnen. Wenn jedoch nur ein Teil der Spalten zu einem bestimmten Zeitpunkt im DOM vorhanden ist, ist dieses Attribut hilfreich und notwendig.

Wenn Sie `aria-colcount` verwenden und die Anzahl der Spalten bekannt ist, stellen Sie sicher, dass Sie auch [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) verwenden, um jede Spalte zu kennzeichnen. Wenn die Spalten zusammenhängend sind (wenn es sich um eine Gruppe von Spalten in der ursprünglichen Reihenfolge ohne Unterbrechungen handelt), kennzeichnen Sie jede Zeile.

Das folgende Beispiel zeigt ein Gitter mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, aus denen die Tabelle besteht, ist als `aria-colcount="6"` an der Tabelle selbst festgelegt. Da die Spalten nicht zusammenhängend sind, hat jedes [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)-Element - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) - das Attribut `aria-colindex` gesetzt.

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

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit der bereits eingebauten Semantik und dem Verhalten, das Sie benötigen, verwenden können, anstatt ein Element neu zu nutzen und eine ARIA-Rolle, einen Status oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantik mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} etc. verwenden, ist das Attribut `aria-colcount` weiterhin notwendig, aber die Markup-Sprache ist nicht so ausführlich. Bei der Verwendung semantischer Tabellenheader-Elemente und wenn nicht alle Spalten im DOM sind, muss `aria-colcount` weiterhin verwendet werden, aber das Attribut `aria-colindex` muss nur einmal pro Spalte im Spalten-Header {{HTMLElement('th')}} definiert werden.

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

## Werte

- `<integer>`
  - : Die Anzahl der Spalten in der vollständigen Tabelle.

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role)

Wird in Rollen vererbt:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
