---
title: "ARIA: aria-rowindex-Attribut"
short-title: aria-rowindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-rowindex` definiert die Position eines Elements im Verhältnis zur Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid.

## Beschreibung

Manche Tabellen haben sehr viele Zeilen. Aus gestalterischen Gründen, zur Verbesserung der Leistung oder der Benutzererfahrung kann es sinnvoll sein, nur einen Teil der Zeilen zu laden.

Wenn nur ein Teil der Zeilen geladen wird, müssen alle Benutzer wissen können, welche Zeilen angezeigt werden. Das Attribut `aria-rowindex` gibt den Zeilenindex beziehungsweise die Position einer Zelle oder Zeile im Verhältnis zur Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid an.

Das Attribut kann auf dem Element {{HTMLElement('tr')}} oder einem Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) stehen. Es kann auch direkt auf {{HTMLElement('td')}}, {{HTMLElement('th')}} oder einem Element mit der Rolle [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) stehen. Sein Wert gibt die Position der Zeile innerhalb der vollständigen Tabelle an.

Der Wert von `aria-rowindex` ist eine Ganzzahl, die mindestens `1` beträgt, größer als der `aria-rowindex`-Wert aller vorhergehenden Zeilen und höchstens so groß wie die Anzahl der Zeilen in der vollständigen Tabelle ist.

Wenn alle Zeilen geladen und im DOM vorhanden sind, müssen Sie `aria-rowindex` nicht angeben, da Browser den Index jeder Zeile automatisch berechnen. Wenn jedoch nur ein Teil der Zeilen im DOM vorhanden ist, wird `aria-rowindex` benötigt, um die Position jeder Zeile innerhalb der vollständigen Tabelle anzugeben. In diesem Fall müssen Sie auch [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem übergeordneten Tabellenelement angeben, selbst wenn Sie die Gesamtzahl der Zeilen nicht kennen.

Wenn in einer Tabelle, von der nur ein Teil der Zeilen geladen ist, eine Zelle mehrere Zeilen umfasst, muss `aria-rowindex` sowohl auf der Zeile als auch auf der Zelle gesetzt sein. Wenn eine Zelle mehrere Zeilen umfasst – also wenn ein Element mit einer Zellenrolle das Attribut `aria-rowspan` hat oder bei einer HTML-Zelle das Attribut `rowspan` auf einen Wert größer als 1 gesetzt ist –, geben Sie zusätzlich zum entsprechenden Attribut für die Zeilenüberspannung den `aria-rowindex`-Wert der Zeile auf der überspannenden Zelle an. Der Wert sollte dem Zeilenindex der Zeile entsprechen, in der die Überspannung beginnt.

> [!NOTE]
> `aria-rowindex` muss zu jeder Zeile hinzugefügt werden. Bei Zellen ist es optional, außer wenn sie mehrere Zeilen umfassen: Auf allen solchen Zellen ist das Attribut `aria-rowindex` erforderlich.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die mindestens 1 beträgt, größer als der `aria-rowindex`-Wert der vorhergehenden Zeile ist, falls eine vorhanden ist, und höchstens dem Wert von [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) entspricht.

## Zugehörige Schnittstellen

- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Die Eigenschaft [`ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-rowindex` wider.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Die Eigenschaft [`ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-rowindex` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Wird an folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Beispiele

Das folgende Beispiel zeigt ein Grid mit 24 Zeilen, von denen die erste Zeile und die Zeilen 7 bis 10 angezeigt werden. Die letzte „Position“-Zelle erstreckt sich über die Zeilen 9 und 10.

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
      <span role="gridcell" aria-rowspan="2" aria-rowindex="9">Goalkeeper</span>
    </div>
    <div role="row" aria-rowindex="10">
      <span role="gridcell">Alyssa</span>
      <span role="gridcell">Naeher</span>
    </div>
  </div>
</div>
```

Beachten Sie, dass auf der Torwart-Zelle, die sich über zwei Zeilen erstreckt, sowohl `aria-rowspan` als auch `aria-rowindex` vorhanden sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- Das Attribut [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) von {{HTMLElement('td')}}
