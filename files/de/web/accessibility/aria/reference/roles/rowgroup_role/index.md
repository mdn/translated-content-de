---
title: "ARIA: rowgroup-Rolle"
short-title: rowgroup
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur. Eine `rowgroup` enthält eine oder mehrere Zeilen mit [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Grid-Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den zugehörigen Zeilenelementen her und ist das strukturelle Gegenstück zu den HTML-Elementen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}. Zwischen verschiedenen Arten von Zeilengruppen wird jedoch nicht unterschieden. Ihre Elemente müssen in Elementen mit der Rolle [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) enthalten sein oder diesen zugeordnet sein. Es wird dringend empfohlen, nach Möglichkeit die nativen HTML-Elemente {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} zu verwenden.

Um einen ARIA-Tabellenkopf, -Tabellenfuß oder -Tabellenkörper zu erstellen, fügen Sie dem Element `role="rowgroup"` hinzu. Diese Zeilengruppe sollte innerhalb eines Grid, einer Tabelle oder eines Treegrid verschachtelt sein und eine oder mehrere Zeilen umfassen. Jede Zeile enthält wiederum untergeordnete Zellen. Je nachdem, ob es sich um Spalten- oder Zeilenüberschriften oder um einfache Zellen oder Grid-Zellen handelt, können diese Zellen unterschiedlichen Typs sein.

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit den Elementen für Tabellenkopf ({{HTMLElement('thead')}}), Tabellenfuß ({{HTMLElement('tfoot')}}) und Tabellenkörper ({{HTMLElement('tbody')}}) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben grid und treegrid), in denen eine Zeile vorkommt. Diese Rolle kennzeichnet die Zeile als Teil einer nicht interaktiven Tabellenstruktur, deren Daten in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben table und treegrid), in denen eine Zeile vorkommt. Diese Rolle kennzeichnet die Zeile als Teil einer nicht interaktiven Tabellenstruktur, deren Daten in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich wie ein Grid, jedoch mit Zeilen, die sich wie in einer Baumstruktur auf- und zuklappen lassen.

#### Untergeordnete Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile mit Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Grid-Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [Zeilenüberschrift](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, statt ein Element zweckzuentfremden und ihm eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie nach Möglichkeit das HTML-Element `<table>` anstelle der ARIA-Rolle table.

## Bewährte Vorgehensweisen

Verwenden Sie für die Struktur von Datentabellen ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} und ähnliche Elemente. Wenn die native Semantik der Tabelle beispielsweise durch CSS entfernt wird, können Sie diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen. Ein relevanter Anwendungsfall für die ARIA-Rolle table liegt vor, wenn die CSS-Eigenschaft display die native Semantik einer Tabelle überschreibt, etwa durch `display: grid`. In diesem Fall können Sie die Tabellensemantik mithilfe der ARIA-Tabellenrollen wiederherstellen.

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
  </tbody>
</table>
```

Oben sehen Sie die semantische Schreibweise einer Tabelle. Die ARIA-Rollen sind nur erforderlich, wenn die native Semantik der Tabelle und damit auch der Tabellenzeilen verloren geht, beispielsweise durch [Festlegen der display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zusätzliche Vorteile

Keine.

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

Oben sehen Sie eine nicht semantische ARIA-Tabelle mit Tabellenkopf und Tabellenkörper. Von insgesamt 81 Zeilen sind fünf im DOM vorhanden: eine im Tabellenkopf und vier im Tabellenkörper. Die Kopfzeile bildet allein eine Zeilengruppe und enthält zwei Spaltenüberschriften. Die Spalten sind sortierbar, derzeit aber nicht sortiert, wie die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) angibt. Der Tabellenkörper ist eine separate Zeilengruppe mit derzeit vier Zeilen im DOM. Da nicht alle Zeilen im DOM vorhanden sind, wurde jeder Zeile die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) hinzugefügt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabelle](/de/docs/Web/HTML/Reference/Elements/table)
- [HTML-Tabellenkörper](/de/docs/Web/HTML/Reference/Elements/tbody)
- [HTML-Tabellenfuß](/de/docs/Web/HTML/Reference/Elements/tfoot)
- [HTML-Tabellenkopf](/de/docs/Web/HTML/Reference/Elements/thead)
