---
title: aria-colcount
slug: Web/Accessibility/ARIA/Attributes/aria-colcount
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-colcount` definiert die Gesamtanzahl der Spalten in einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role), wenn nicht alle Spalten im [DOM](/de/docs/Glossary/DOM) vorhanden sind.

## Beschreibung

Einige Tabellen sind sehr groß, und es ist nicht möglich, alle Spalten dem Benutzer anzuzeigen. Oder es ist möglich, aber eine so breite Tabelle würde eine schlechte Benutzererfahrung bieten. Verwenden Sie das Attribut `aria-colcount`, um unterstützenden Technologien mitzuteilen, wie viele Spalten die Tabelle hätte, wenn alle Spalten vorhanden wären. Der Wert ist eine ganze Zahl, die die Anzahl der Spalten darstellt, aus denen die vollständige Tabelle besteht. Wenn Sie nicht wissen, wie viele Spalten eine Tabelle insgesamt haben wird, aber wissen, dass sie nicht alle im DOM vorhanden sind, verwenden Sie den Wert -1, also `aria-colcount="-1"`. Dieser Wert teilt dem Benutzeragenten mit, dass die aktuelle Anzahl der im DOM vorhandenen Spalten möglicherweise nicht der tatsächlichen Anzahl von Spalten in der Tabelle entspricht.

Wenn alle Spalten einer Tabelle im DOM vorhanden sind, ist das Attribut `aria-colcount` nicht erforderlich, da Browser die Gesamtzahl der Spalten automatisch berechnen. Wenn jedoch nur ein Teil der Spalten zu einem bestimmten Zeitpunkt im DOM vorhanden ist, ist dieses Attribut hilfreich und erforderlich.

Wenn Sie `aria-colcount` verwenden und Sie eine bekannte Anzahl von Spalten haben, stellen Sie sicher, dass Sie auch [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) verwenden, um jede Spalte zu kennzeichnen, oder, wenn die Spalten zusammenhängend sind – also wenn es eine Gruppe von Spalten in der ursprünglichen Reihenfolge ohne Unterbrechungen ist – kennzeichnen Sie jede Zeile.

Das folgende Beispiel zeigt ein Gitter mit 6 Spalten, von denen die Spalten 1, 2, 5 und 6 dem Benutzer angezeigt werden. Die Gesamtanzahl der Spalten, aus denen die Tabelle besteht, ist auf `aria-colcount="6"` an der Tabelle selbst gesetzt. Da die Spalten nicht zusammenhängend sind, hat jedes [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) - in diesem Fall [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Elemente - das Attribut `aria-colindex` gesetzt.

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

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit den bereits integrierten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzupropurieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc. verwenden, bleibt das Attribut `aria-colcount` erforderlich, aber die Markierung ist nicht so ausführlich. Bei der Verwendung von semantischen Tabellenkopf-Elementen und wenn nicht alle Spalten im DOM sind, muss `aria-colcount` weiterhin verwendet werden, aber das Attribut `aria-colindex` muss nur einmal pro Spalte im Spaltenkopf {{HTMLElement('th')}} definiert werden.

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

- [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role)

Erbt in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
