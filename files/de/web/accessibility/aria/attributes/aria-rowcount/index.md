---
title: aria-rowcount
slug: Web/Accessibility/ARIA/Attributes/aria-rowcount
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowcount` definiert die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster.

## Beschreibung

Einige Tabellen haben Hunderte, sogar Millionen von Zeilen. Selbst bei Tabellen mit weniger Zeilen kann es eine Design-Anforderung sein, nur einen Abschnitt von Zeilen zu laden, um die Leistung zu verbessern oder die Benutzererfahrung zu steigern. Wenn nur eine Teilmenge von Zeilen geladen wird, müssen Sie alle Benutzer darüber informieren, dass nur eine Teilmenge der Daten angezeigt wird. Das Attribut `aria-rowcount` wird verwendet, um die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster zu definieren.

Wird es am {{HTMLElement('table')}}-Element oder an einem Element mit der Rolle [`table`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) hinzugefügt, ist der Wert die Anzahl der Zeilen in der gesamten Tabelle als ganze Zahl. Wenn die Gesamtzahl der Zeilen nicht bekannt ist, fügen Sie `aria-rowcount="-1"` hinzu, was dem Browser mitteilt, die Gesamtanzahl der Zeilen nicht zu zählen.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowcount` nicht hinzufügen, da Browser die Gesamtanzahl der Zeilen automatisch zählen. Wenn die Zeilen jedoch nicht alle gleichzeitig im DOM vorhanden sind, ist dieses Attribut erforderlich, um die Anzahl der Zeilen anzugeben, wenn die vollständige Tabellengröße bekannt ist, und um dem Browser mitzuteilen, die Zeilen nicht automatisch zu zählen, wenn die Gesamtzahl der Zeilen nicht bekannt ist.

## Beispiel

Das folgende Beispiel zeigt ein Raster mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 9 für den Benutzer angezeigt werden.

```html
<div role="grid" aria-rowcount="24">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Position</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="7">
      <span role="gridcell">Morgan</span>
      <span role="gridcell">Brian</span>
      <span role="gridcell">Midfielder</span>
    </div>
    <div role="row" aria-rowindex="8">
      <span role="gridcell">Abby</span>
      <span role="gridcell">Dahlkemper</span>
      <span role="gridcell">Defender</span>
    </div>
    <div role="row" aria-rowindex="9">
      <span role="gridcell">Ashlyn</span>
      <span role="gridcell">Harris</span>
      <span role="gridcell">Goalkeeper</span>
    </div>
  </div>
</div>
```

## Werte

- `<integer>`
  - : Die Anzahl der Zeilen in der gesamten Tabelle oder `-1`, wenn die Tabellengröße nicht bekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Die [`ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowcount`-Attributs wider.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Die [`ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowcount`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`table`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Vererbt in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
