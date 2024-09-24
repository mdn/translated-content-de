---
title: aria-colindextext
slug: Web/Accessibility/ARIA/Attributes/aria-colindextext
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-colindextext` definiert eine menschenlesbare Textalternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex).

## Beschreibung

Wenn Sie eine sehr große Tabelle haben oder absichtlich nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Spalten im DOM vorhanden. In diesem Fall verwenden wir das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Spalten die Tabelle (oder das Raster) hätte, wenn alle Spalten vorhanden wären, und fügen der jeweiligen Spalte die Eigenschaft [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) hinzu, um Informationen über den Spaltenindex innerhalb dieser größeren Tabelle bereitzustellen.

Im folgenden HTML-Ausschnitt hat unsere Tabelle 8 Spalten, aber wir zeigen nur 4 an. Die "Stadt"-Spalte ist die fünfte Spalte unserer größeren Tabelle, definiert durch `aria-colindex="5"`.

```html
<table aria-colcount="8">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">First name</th>
      <th aria-colindex="2" scope="col">Last name</th>
      <th aria-colindex="5" scope="col">City</th>
      <th aria-colindex="7" scope="col">Zip</th>
    </tr>
  </thead>
  …
</table>
```

Diese Tabelle ist nicht sehr komplex. Wäre dies eine Tabelle mit mehr als 100 Spalten oder ein Raster ohne Spaltenüberschriften, wie zum Beispiel ein Schachbrett, könnte der bereitgestellte oder berechnete Wert von `aria-colindex` nicht sinnvoll sein oder nicht den angezeigten Index widerspiegeln. In diesem Fall kann `aria-colindextext` hinzugefügt werden. Der Wert ist eine Zeichenkette, die eine menschenlesbare Textalternative zum numerischen `aria-colindex` darstellt.

```html
<table aria-colcount="128">
  <thead>
    <tr>
      <th aria-colindex="1" aria-colindextext="NYSE stock symbol" scope="col">
        NYSE
      </th>
      <th
        aria-colindex="110"
        aria-colindextext="Value at start of 2021"
        scope="col">
        01/21
      </th>
      <th
        aria-colindex="122"
        aria-colindextext="Value at start of 2022"
        scope="col">
        01/22
      </th>
      <th aria-colindex="124" scope="col">Recommendation</th>
    </tr>
  </thead>
  …
</table>
```

Im obigen Beispiel hat die Tabelle 128 Spalten, von denen nur 4 angezeigt werden. `aria-colindextext` wird in drei Spalten verwendet, um menschenlesbare Textalternativen bereitzustellen. Durch die Angabe von `aria-colindextext="Value at start of 2021"` können unterstützende Technologien "Value at start of 2021" anstelle von "Column 110" ankündigen.

Verwenden Sie `aria-colindextext` nur, wenn der bereitgestellte oder berechnete Wert von `aria-colindex` nicht sinnvoll ist oder nicht den angezeigten Index widerspiegelt. Wann immer Sie `aria-colindextext` einbeziehen, behalten Sie auch das `aria-colindex`, da einige unterstützende Technologien auf den numerischen Spaltenindex angewiesen sind, um die Position des Benutzers zu verfolgen und alternative Tabellennavigation bereitzustellen.

> [!NOTE]
> Während `aria-colindex` zu einer Zeile hinzugefügt werden kann, wenn alle vorhandenen Spalten fortlaufend sind, da sequentielle Werte abgeleitet werden können, ist `aria-colindextext` KEINE unterstützte Eigenschaft von [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role).

Siehe verwandte [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext).

## Werte

- `<string>`
  - : Die menschenlesbare Textalternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)

## Zugehörige Schnittstellen

- {{domxref("Element.ariaColIndexText")}}
  - : Die Eigenschaft [`ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText), Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-colindextext` wider.
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : Die Eigenschaft [`ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText), Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-colindextext` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Übernimmt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`cell` role](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader` role](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader` role](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
