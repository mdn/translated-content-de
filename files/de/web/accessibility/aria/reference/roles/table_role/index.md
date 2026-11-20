---
title: "ARIA: table-Rolle"
short-title: table
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Der Wert `table` des ARIA-Attributs `role` kennzeichnet das Element als nicht interaktive Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind – ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.

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

## Beschreibung

Ein Element mit `role="table"` ist eine statische Tabellenstruktur mit Zeilen, die Zellen enthalten. Die Zellen können weder den Fokus erhalten noch ausgewählt werden. Widgets innerhalb einzelner Tabellenzellen können jedoch interaktiv sein. Es wird dringend empfohlen, nach Möglichkeit ein natives HTML-Element {{HTMLElement('table')}} zu verwenden.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlzustand verwaltet, eine zweidimensionale Navigation bietet oder es Benutzern ermöglicht, die Reihenfolge der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie dem Containerelement `role="table"` hinzu. Innerhalb dieses Containers ist für jede Zeile `role="row"` festgelegt; jede Zeile enthält untergeordnete Zellen. Jede Zelle hat entweder die Rolle `columnheader`, `rowheader` oder `cell`. Zeilen können direkte Kindelemente der Tabelle sein oder sich innerhalb einer `rowgroup` befinden.

Ein zugänglicher Name wird für die Rolle `table` dringend empfohlen, ist laut ARIA jedoch nicht erforderlich. Definieren Sie den zugänglichen Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Wenn eine sichtbare Beschriftung vorhanden ist, verweisen Sie mit `aria-labelledby` darauf. Allen anderen semantischen Tabellenelementen, etwa {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}}, müssen entsprechende Rollen wie `rowgroup`, `row`, `columnheader` und `cell` zugewiesen werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) dem Kopfzellen-Element hinzugefügt werden, nicht der Tabelle selbst. Wenn Zeilen oder Spalten ausgeblendet sind, sollte [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) beziehungsweise [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) die Gesamtzahl der Spalten beziehungsweise Zeilen angeben. Zusätzlich sollte jede Zelle [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) beziehungsweise [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) erhalten. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) beziehungsweise [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) gibt die Position einer Zelle innerhalb der Zeile beziehungsweise Spalte an. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollte außerdem [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) beziehungsweise [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) angegeben werden. Die Verwendung des Elements {{HTMLElement('table')}} zusammen mit den zugehörigen semantischen Elementen und Attributen ist wesentlich einfacher. Diese werden von allen assistiven Technologien unterstützt.

Um ein interaktives Widget mit Tabellenstruktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion die Auswahl einzelner Zellen ermöglicht, eine Navigation von links nach rechts und von oben nach unten bietet oder die Benutzeroberfläche es erlaubt, die Reihenfolge von Zellen etwa per Drag-and-drop zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit ein natives HTML-Tabellenelement zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Die Zeilengruppe ist ein optionales Kindelement der Tabelle und fasst mehrere Zeilen zusammen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle, optional innerhalb einer Zeilengruppe. Sie enthält eine oder mehrere Zellen, Spaltenüberschriften oder Zeilenüberschriften.
- Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Sein Wert ist die ID des Elements, das die Tabelle beschreibt.
- Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) gibt der Tabelle einen zugänglichen Namen.
- Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
  - : Dieses Attribut ist nur erforderlich, wenn nicht alle Spalten ständig im DOM vorhanden sind. Es gibt ausdrücklich die Anzahl der Spalten in der vollständigen Tabelle an. Setzen Sie den Wert auf die Gesamtzahl der Spalten in der vollständigen Tabelle. Wenn diese nicht bekannt ist, setzen Sie `aria-colcount="-1"`.
- Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
  - : Dieses Attribut ist nur erforderlich, wenn nicht alle Zeilen ständig im DOM vorhanden sind, etwa bei scrollbaren Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es gibt ausdrücklich die Anzahl der Zeilen in der vollständigen Tabelle an. Setzen Sie den Wert auf die Gesamtzahl der Zeilen in der vollständigen Tabelle. Wenn diese nicht bekannt ist, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Informationen zu sortierbaren Spalten finden Sie unter der ARIA-Rolle [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role).

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, tun Sie das, statt ein Element zweckzuentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft **hinzuzufügen**, um es zugänglich zu machen. Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('table')}} statt der ARIA-Rolle `table`.

## Bewährte Verfahren

Verwenden Sie für die Struktur einer Datentabelle ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. Sie können die entsprechenden ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die native Semantik der Tabelle beispielsweise durch CSS verloren geht. Ein relevanter Anwendungsfall für die ARIA-Rolle `table` liegt vor, wenn die CSS-Eigenschaft `display` die native Semantik einer Tabelle überschreibt, etwa durch `display: grid`. In diesem Fall können Sie die Tabellenrollen von ARIA verwenden, um die Semantik wiederherzustellen.

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

Das obige Beispiel zeigt einen Teil einer Tabelle. Die vollständige Tabelle enthält 81 Einträge, wie die Eigenschaft [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) angibt. Derzeit sind jedoch nur vier sichtbar. Die Spalten sind sortierbar, derzeit aber nicht sortiert, wie die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) an den Spaltenüberschriften angibt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: Rolle `grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
