---
title: "ARIA: row-Rolle"
short-title: row
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">World Populations by Country</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Country</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="cell">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

## Beschreibung

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die ein oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Elemente innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)-Elementen wird nachdrücklich empfohlen, wann immer dies möglich ist.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zu dem Container-Element hinzu. Diese Zeile sollte in einem Raster, einer Tabelle oder einem Baumraster verschachtelt sein. Eine Gruppe von Zeilen kann direkt in einem Raster, einer Tabelle oder einem Baumraster oder innerhalb einer Zeilengruppe in einem dieser Container verschachtelt werden. Jede Zeile enthält untergeordnete Zellen. Diese Zellen können je nach Funktion unterschiedlich sein, sei es als Spalten- oder Zeilenüberschriften oder als Raster- oder reguläre Zellen.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile klarstellen, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn sich die Zeile in einem Baumraster befindet, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) einschließen, um den aktuellen Status anzuzeigen. Dies gilt nicht für eine gewöhnliche Tabelle oder ein Raster, in denen das Attribut `aria-expanded` nicht vorhanden ist.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion den Auswahllstatus einzelner Zellen bietet, von links nach rechts und von oben nach unten Navigation zulässt oder die Benutzeroberfläche das Umordnen der Zellreihenfolge oder das Ändern der Reihenfolge einzelner Zellen, wie z.B. durch Drag & Drop, ermöglicht, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellentrellenelement ({{HTMLElement('tr')}}) wird wann immer möglich, ausdrücklich empfohlen.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optional übergeordneter Zeilen-Kontext, der eine Beziehung zwischen nachgeordneten Zeilen herstellt. Es ist das strukturelle Äquivalent zu den Elementen thead, tfoot und tbody in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben Raster und Baumraster), in dem Sie eine Zeile finden, die die Zeile als Teil einer nicht interaktiven Tabellenstruktur identifiziert, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben Tabelle und Baumraster), in dem Sie eine Zeile finden, die die Zeile als Teil einer nicht interaktiven Tabellenstruktur identifiziert, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die auf die gleiche Weise wie in einem Baum erweitert und reduziert werden können.

#### Nachgeordnete Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Rasters oder Baumrasters.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzeilen-Zelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit Spaltenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}) darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Spaltenkopfzeilenrolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzeilen-Zelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit Zeilenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}) darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Zeilenkopfzeilenrolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Zustand
  - : Das Attribut `aria-expanded`, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:
    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded`-Attribut die Erweiterung eines anderen Gruppierungscontainers steuert, der nicht "im Besitz" des Elements ist, **sollte** der Autor den Container unter Verwendung des `aria-controls`-Attributs referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand
  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container, wie einem Raster oder Baumraster, befindet, aber nicht relevant, wenn sich die Zeile in einer Tabelle befindet. Das Attribut `aria-selected` kann einen von drei Werten annehmen oder weggelassen werden:
    - `aria-selected="true"`: Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut
  - : Das Attribut `aria-colindex` wird nur benötigt, wenn Spalten aus dem DOM ausgeblendet werden. Es wird im Allgemeinen auf untergeordneten Zeilen platziert, anstatt auf der Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf der Zeile platziert werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten in der Tabelle, dem Raster oder dem Baumraster an. Wenn es auf der Zeile platziert wird, definiert `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel in einer Tabelle mit 15 Spalten und den Spalten 4, 5 und 6 im DOM könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn die im DOM vorhandenen Spalten **nicht** zusammenhängend sind oder es Zellen gibt, die sich über mehr als eine Zeile oder Spalte erstrecken, setzen Sie `aria-colindex` auf alle Kinder jeder Zeile, anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM vorhanden sind, ist dieses Attribut nicht notwendig.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut
  - : Das Attribut `aria-rowindex` wird nur benötigt, wenn Zeilen aus dem DOM ausgeblendet werden, um anzuzeigen, welche Zeile in der Liste der gesamten Zeilen gelesen wird. Das Attribut, das mit einem eindeutigen Wert auf jeder Zeile platziert wird, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen in der Tabelle, dem Raster oder dem Baumraster an und zeigt die Position oder den Index jeder Zeile an. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur die Kopfzeile und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf die Kopfzeile gesetzt und `aria-rowindex="47"` und `aria-rowindex="52"` auf die 47. und 52. Zeile entsprechend gesetzt.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht notwendig.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) aria-Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, dass Sie, wenn Sie bereits über eine anfängliche Funktion mit den benötigten Semantiken und Verhaltensweisen verfügen, diese verwenden, anstatt ein normales Element umzufunktionieren und **eine** ARIA-Rolle, ein Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Verwenden Sie daher das HTML {{HTMLElement('table')}}-Element anstelle der ARIA-Rolle "table", wann immer dies möglich ist.

## Beispiele

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA Role</span>
      <span role="columnheader" aria-sort="none">Semantic Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf der 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, derzeit aber nicht sortiert, wie durch die `aria-sort` Eigenschaft angezeigt. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe mit vier Zeilen, die derzeit im DOM vorhanden sind. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft auf jeder Zeile aufgenommen.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Datenstrukturtabelle. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Sementiken der Tabelle entfernt werden, beispielsweise durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die display-Eigenschaft von CSS überschrieben werden, z.B. durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
    <tr role="row" aria-rowindex="18">
      <td role="cell">rowgroup</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">term</td>
      <td role="cell">dt</td>
    </tr>
  </tbody>
</table>
```

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit die Tabellenzeilen beseitigt werden, z.B. durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zugefügte Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}}-Element
- {{HTMLElement('table')}}
- [Die `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die `table` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
