---
title: "ARIA: aria-colindextext Attribut"
short-title: aria-colindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-colindextext` Attribut definiert einen menschenlesbaren Text als Alternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex).

## Beschreibung

Wenn Sie eine sehr große Tabelle haben oder nur absichtlich einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Spalten im DOM vorhanden. In diesem Fall verwenden wir das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Spalten die Tabelle (oder das Raster) hätte, wenn alle Spalten vorhanden wären, und fügen die [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Eigenschaft für jede Spalte hinzu, um Informationen über den Spaltenindex innerhalb dieser größeren Tabelle bereitzustellen.

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

Diese Tabelle ist nicht sehr komplex. Wenn dies ein Spreadsheet mit mehr als 100 Spalten oder ein Raster ohne Spaltenüberschriften gewesen wäre, wie z.B. ein Schachbrett, könnte der angegebene oder berechnete Wert von `aria-colindex` nicht sinnvoll sein oder möglicherweise nicht den angezeigten Index widerspiegeln. In diesem Fall kann `aria-colindextext` hinzugefügt werden. Der Wert ist eine Zeichenkette, die als menschenlesbare Textalternative zum numerischen `aria-colindex` dient.

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

Im obigen Beispiel hat die Tabelle 128 Spalten, von denen nur 4 angezeigt werden. Das `aria-colindextext` wird in drei Spalten genutzt, um menschenlesbare Textalternativen bereitzustellen. Indem `aria-colindextext="Value at start of 2021"` eingefügt wird, können unterstützende Technologien "Value at start of 2021" statt "Column 110" ankündigen.

Verwenden Sie `aria-colindextext` nur, wenn der angegebene oder berechnete Wert von `aria-colindex` nicht sinnvoll ist oder nicht den angezeigten Index widerspiegelt. Wann immer Sie `aria-colindextext` einschließen, behalten Sie auch das `aria-colindex` bei, da einige unterstützende Technologien auf den numerischen Spaltenindex angewiesen sind, um die Position des Benutzers zu verfolgen und alternative Tabellennavigationen bereitzustellen.

> [!NOTE]
> Obwohl `aria-colindex` einer Zeile hinzugefügt werden kann, wenn alle vorhandenen Spalten zusammenhängend sind, da die sequentiellen Werte abgeleitet werden können, ist `aria-colindextext` KEINE unterstützte Eigenschaft von [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

Siehe verwandtes [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext).

## Werte

- `<string>`
  - : Die menschenlesbare Textalternative zum numerischen [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)

## Zugehörige Schnittstellen

- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Die [`ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-colindextext` Attributs wider.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Die [`ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-colindextext` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`cell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
