---
title: aria-colindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-colindextext` Attribut definiert eine für Menschen lesbare Textalternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex).

## Beschreibung

Wenn Sie eine sehr große Tabelle haben oder absichtlich nur einen Teil einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Spalten im DOM vorhanden. In diesem Fall verwenden wir das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Spalten die Tabelle (oder das Raster) hätte, wenn alle Spalten vorhanden wären, und fügen die [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Eigenschaft auf jeder Spalte hinzu, um Informationen über den Spaltenindex innerhalb dieser größeren Tabelle bereitzustellen.

Im folgenden HTML-Ausschnitt hat unsere Tabelle 8 Spalten, aber wir zeigen nur 4 an. Die "city"-Spalte ist die fünfte Spalte unserer größeren Tabelle, wie durch `aria-colindex="5"` definiert.

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

Diese Tabelle ist nicht sehr komplex. Wäre es eine Tabelle mit über 100 Spalten oder ein Gitter ohne Spaltenüberschriften, wie ein Schachbrett, könnte der bereitgestellte oder berechnete Wert von `aria-colindex` nicht sinnhaft oder möglicherweise nicht der angezeigte Index sein. In diesem Fall kann `aria-colindextext` hinzugefügt werden. Der Wert ist eine Zeichenkette, die eine für Menschen lesbare Textalternative zum numerischen `aria-colindex` darstellt.

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

Im obigen Beispiel hat die Tabelle 128 Spalten, von denen nur 4 angezeigt werden. Das `aria-colindextext` wird in drei Spalten verwendet, um für Menschen lesbare Textalternativen bereitzustellen. Durch die Einbeziehung von `aria-colindextext="Value at start of 2021"` können unterstützende Technologien "Value at start of 2021" anstelle von "Column 110" ankündigen.

Verwenden Sie `aria-colindextext` nur, wenn der bereitgestellte oder berechnete Wert von `aria-colindex` nicht sinnhaft ist oder nicht dem angezeigten Index entspricht. Wann immer Sie `aria-colindextext` einfügen, behalten Sie auch das `aria-colindex`, da einige unterstützende Technologien auf den numerischen Spaltenindex angewiesen sind, um die Position des Benutzers zu verfolgen und alternative Tabellennavigation bereitzustellen.

> [!NOTE]
> Während `aria-colindex` zu einer Zeile hinzugefügt werden kann, wenn alle vorhandenen Spalten zusammenhängend sind, da sequenzielle Werte abgeleitet werden können, ist `aria-colindextext` KEINE unterstützte Eigenschaft von [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

Siehe verwandtes [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext).

## Werte

- `<string>`
  - : Die für Menschen lesbare Textalternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)

## Zugehörige Schnittstellen

- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Die [`ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-colindextext` Attributs wider.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Die [`ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-colindextext` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Erbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`cell` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
