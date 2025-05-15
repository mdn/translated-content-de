---
title: "ARIA: aria-colcount-Attribut"
short-title: aria-colcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colcount
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-colcount`-Attribut definiert die Gesamtanzahl der Spalten in einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), wenn nicht alle Spalten im [DOM](/de/docs/Glossary/DOM) vorhanden sind.

## Beschreibung

Einige Tabellen sind sehr groß, und es ist nicht möglich, alle Spalten dem Nutzer anzuzeigen. Oder es ist möglich, jedoch wäre eine so breite Tabelle ein schlechtes Benutzererlebnis. Verwenden Sie das `aria-colcount`-Attribut, um unterstützenden Technologien mitzuteilen, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären. Der Wert ist eine ganze Zahl, die die Anzahl der Spalten repräsentiert, aus denen die komplette Tabelle besteht. Wenn Sie die Gesamtanzahl der Spalten einer Tabelle nicht kennen, aber wissen, dass sie nicht alle im DOM sein werden, verwenden Sie den Wert -1, so `aria-colcount="-1"`. Dieser Wert teilt dem User-Agent mit, dass die derzeit im DOM vorhandene Anzahl der Spalten möglicherweise nicht der tatsächlichen Anzahl der Spalten in der Tabelle entspricht.

Wenn alle Spalten einer Tabelle im DOM vorhanden sind, ist das `aria-colcount`-Attribut nicht erforderlich, da Browser die Gesamtanzahl der Spalten automatisch berechnen. Wenn jedoch nur ein Teil der Spalten zu einem bestimmten Zeitpunkt im DOM vorhanden ist, ist dieses Attribut hilfreich und notwendig.

Wenn Sie `aria-colcount` verwenden und Sie eine bekannte Anzahl von Spalten haben, stellen Sie sicher, dass Sie auch [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) verwenden, um jede Spalte zu kennzeichnen, oder wenn die Spalten zusammenhängend sind—also wenn es eine Gruppe von Spalten in der ursprünglichen Reihenfolge ohne Unterbrechungen ist—jede Zeile zu kennzeichnen.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Nutzer angezeigt werden. Die Gesamtanzahl der Spalten, aus denen die Tabelle besteht, wird auf `aria-colcount="6"` für die Tabelle selbst gesetzt. Da die Spalten nicht zusammenhängend sind, hat jedes [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)-Element—hier [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Elemente—das `aria-colindex`-Attribut gesetzt.

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

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit der erforderlichen Semantik und dem erforderlichen Verhalten verwenden können, statt ein Element neu zu verwenden und **ein** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc. verwenden, ist das `aria-colcount`-Attribut weiterhin notwendig, jedoch ist das Markup nicht so ausführlich. Wenn Sie semantische Tabellenkopf-Elemente verwenden und nicht alle Spalten im DOM sind, muss `aria-colcount` immer noch verwendet werden, aber das `aria-colindex`-Attribut muss nur einmal pro Spalte im Tabellenkopf {{HTMLElement('th')}} definiert werden.

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
  - : Die Anzahl der Spalten in der vollständigen Tabelle

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

Vererbt in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
