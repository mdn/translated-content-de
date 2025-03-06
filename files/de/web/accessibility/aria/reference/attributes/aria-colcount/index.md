---
title: aria-colcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colcount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-colcount` definiert die Gesamtanzahl der Spalten in einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), wenn nicht alle Spalten im {{Glossary("DOM", "DOM")}} vorhanden sind.

## Beschreibung

Einige Tabellen sind sehr groß, und es ist nicht möglich, alle Spalten dem Benutzer anzuzeigen. Oder es ist zwar möglich, aber eine solch breite Tabelle würde eine schlechte Benutzererfahrung darstellen. Verwenden Sie das Attribut `aria-colcount`, um unterstützenden Technologien mitzuteilen, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären. Der Wert ist eine ganze Zahl, die die Anzahl der Spalten darstellt, aus denen die vollständige Tabelle besteht. Wenn Sie nicht wissen, wie viele Spalten eine Tabelle insgesamt haben wird, Sie jedoch wissen, dass nicht alle Spalten im DOM vorhanden sind, verwenden Sie den Wert -1, also `aria-colcount="-1"`. Dieser Wert teilt dem User Agent mit, dass die aktuelle Anzahl der im DOM vorhandenen Spalten möglicherweise nicht der tatsächlichen Anzahl der Spalten in der Tabelle entspricht.

Wenn alle Spalten einer Tabelle im DOM vorhanden sind, wird das Attribut `aria-colcount` nicht benötigt, da Browser automatisch die Gesamtanzahl der Spalten berechnen. Wenn jedoch nur ein Teil der Spalten zu einem bestimmten Zeitpunkt im DOM vorhanden ist, ist dieses Attribut hilfreich und notwendig.

Wenn Sie `aria-colcount` verwenden und die Anzahl der Spalten bekannt ist, stellen Sie sicher, dass Sie auch [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) verwenden, um jede Spalte zu kennzeichnen. Wenn die Spalten zusammenhängend sind － also es sich um eine Gruppe von Spalten in ihrer ursprünglichen Reihenfolge ohne Unterbrechungen handelt － kennzeichnen Sie jede Zeile.

Das folgende Beispiel zeigt ein Raster mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, aus denen die Tabelle besteht, wird am Rastelement selbst als `aria-colcount="6"` eingestellt. Da die Spalten nicht zusammenhängend sind, hat jede [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Elemente - das Attribut `aria-colindex` gesetzt.

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

Die erste Regel der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen verwenden können, die Sie benötigen, anstatt ein Element neu zu verwenden und eine **ARIA-Rolle**, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. einsetzen, ist das Attribut `aria-colcount` zwar weiterhin erforderlich, aber die Markierung ist nicht so ausführlich. Wenn Sie semantische Tabellenkopf-Elemente verwenden und nicht alle Spalten im DOM sind, muss `aria-colcount` weiterhin verwendet werden, aber das Attribut `aria-colindex` muss nur einmal pro Spalte im Tabellenkopf {{HTMLElement('th')}} definiert werden.

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
