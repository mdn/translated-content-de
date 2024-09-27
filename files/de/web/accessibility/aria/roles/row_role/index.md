---
title: "ARIA: row Rolle"
slug: Web/Accessibility/ARIA/Roles/row_role
l10n:
  sourceCommit: 46e392021bad64eead1cea58be106fa364a14d8b
---

{{AccessibilitySidebar}}

Ein Element mit `role="row"` ist eine Zeile aus Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb eines [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb eines [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), das als Container für eine oder mehrere [`cells`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [`gridcells`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`columnheaders`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [`rowheaders`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb einer statischen tabellarischen Struktur dient. Wann immer möglich, wird die Verwendung nativer [HTML `<tr>`](/de/docs/Web/HTML/Element/tr) Elemente dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Containerelement hinzu. Diese Zeile sollte in einem Raster, einer Tabelle oder einem Baumraster verschachtelt sein. Eine Gruppe von Zeilen kann direkt in einem Raster, einer Tabelle oder einem Baumraster oder innerhalb einer Zeilengruppe in einem dieser Container verschachtelt werden. Jede Zeile enthält Kinderzellen. Diese Zellen können je nach Typ unterschiedlich sein, je nachdem, ob sie Spalten- oder Zeilenüberschriften oder Raster- oder normale Zellen sind.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile verdeutlichen, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

Befindet sich die Zeile in einem Baumraster, können Zeilen das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut enthalten, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall bei einer gewöhnlichen Tabelle oder einem Raster, in dem das Attribut `aria-expanded` nicht vorhanden ist.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion den Auswahlstatus einzelner Zellen ermöglicht, von links nach rechts und von oben nach unten navigiert werden kann oder die Benutzeroberfläche das Umordnen oder anderweitige Ändern der Reihenfolge einzelner Zellen, z. B. durch Drag & Drop, ermöglicht, verwenden Sie [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) statt.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wird, wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : Ein optionaler kontextueller Zeilenelternteil, der eine Beziehung zwischen nachfolgenden Zeilen herstellt. Es ist das strukturelle Äquivalent zu den Elementen thead, tfoot und tbody in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten ähnlich wie das native {{HTMLElement('table')}} HTML-Element enthält.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten ähnlich wie das native {{HTMLElement('table')}} HTML-Element enthält.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die wie bei einem Baum erweitert und reduziert werden können.

#### Nachfolgerrollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Gitters oder Baumgitters.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzeile, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit Spaltenumfang ist ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle stellt die Rolle columnheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzeile, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit Zeilenumfang ist ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle stellt die Rolle rowheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded` Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded` Attribut die Erweiterung eines anderen Gruppierungscontainers steuert, der nicht 'im Besitz' des Elements ist, **sollte** der Autor den Container mit dem `aria-controls` Attribut referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container wie einem Raster oder Baumraster befindet, jedoch nicht relevant, wenn sich die Zeile in einer Tabelle befindet. Das `aria-selected` Attribut kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Zeile ist derzeit ausgewählt
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex` Attribut ist nur erforderlich, wenn Spalten aus dem DOM ausgeblendet werden. Es wird im Allgemeinen auf die Zeilenkinder platziert, anstatt auf die Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf der Zeile platziert werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten innerhalb der Tabelle, des Rasters oder Baumrasters an. Wenn es auf der Zeile platziert ist, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Zeile. Wenn zum Beispiel in einer Tabelle mit 15 Spalten die Spalten 4, 5 und 6 sich im DOM befinden, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn der Satz der im DOM vorhandenen Spalten **nicht** zusammenhängend ist oder es Zellen gibt, die mehr als eine Zeile oder Spalte umfassen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile, anstatt auf die Zeile selbst.

    Wenn sich alle Spalten im DOM befinden, ist dieses Attribut nicht erforderlich.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex` Attribut ist nur erforderlich, wenn Zeilen aus dem DOM ausgeblendet werden, um anzugeben, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, mit einem eindeutigen Wert auf jede Zeile gesetzt, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen innerhalb der Tabelle, des Rasters oder Baumrasters an und gibt die Position oder den Index jeder Zeile an. Wenn zum Beispiel eine Tabelle 1.500 Zeilen hat, jedoch nur die Kopfzeile sowie die Zeilen 47 und 52 im DOM sind, würde auf der Kopfzeile `aria-rowindex="1"` gesetzt werden, sowie auf der 47. und 52. Zeile `aria-rowindex="47"` und `aria-rowindex="52"` entsprechend.

    Wenn sich alle Zeilen im DOM befinden, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) ARIA Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit den gewünschten Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstatt ein Element neu zuzuweisen und ihm eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML {{HTMLElement('table')}} Element anstelle der ARIA Rolle der Tabelle, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angegeben. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe mit vier Zeilen, die sich derzeit im DOM befinden. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft bei jeder Zeile hinzugefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für Datenstrukturen von Tabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle Rolle ist, wenn die nativen Semantiken einer Tabelle durch die Display-Eigenschaft von CSS überschrieben werden, z. B. durch display: grid. In diesem Fall können Sie die ARIA-Tabelle Rollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit der Tabellenzeilen aufgehoben werden, z. B. durch das Setzen der [Display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> Tabellenzeile')}} Element
- {{HTMLElement('table')}}
- [Die `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Die `table` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [Die `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Die `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [Die `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [Die `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [Die `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [Die `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
