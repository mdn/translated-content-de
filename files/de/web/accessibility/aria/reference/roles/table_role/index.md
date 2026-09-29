---
title: "ARIA: Rolle table"
short-title: table
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

Der Wert `table` des ARIA-Attributs `role` kennzeichnet das Element mit dieser Rolle als nicht interaktive Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind – ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.

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
> Wenn eine Tabelle einen Auswahlzustand verwaltet, eine zweidimensionale Navigation bietet oder es Nutzenden ermöglicht, die Reihenfolge der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie dem Containerelement `role="table"` hinzu. Innerhalb dieses Containers erhält jede Zeile `role="row"` und enthält untergeordnete Zellen. Jede Zelle hat entweder die Rolle `columnheader`, `rowheader` oder `cell`. Zeilen können direkte Kindelemente der Tabelle sein oder sich innerhalb einer `rowgroup` befinden.

Für die Rolle `table` wird ein zugänglicher Name dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt. Legen Sie den zugänglichen Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) fest. Wenn eine sichtbare Beschriftung vorhanden ist, verweisen Sie mit `aria-labelledby` darauf. Die Semantik aller anderen Tabellenelemente wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} muss durch entsprechende Rollen wie `rowgroup`, `row`, `columnheader` und `cell` ergänzt werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) dem Kopfzellen-Element hinzugefügt werden, nicht der Tabelle selbst. Wenn Zeilen oder Spalten ausgeblendet sind, sollte [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) beziehungsweise [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) die Gesamtzahl der Spalten beziehungsweise Zeilen angeben. Zusätzlich sollte für jede Zelle [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) beziehungsweise [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) gesetzt werden. Der Wert von [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) beziehungsweise [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) gibt die Position einer Zelle innerhalb der Zeile beziehungsweise Spalte an. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollte außerdem [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) beziehungsweise [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) angegeben werden. Deutlich einfacher ist die Verwendung des Elements {{HTMLElement('table')}} zusammen mit den zugehörigen semantischen Elementen und Attributen, die von allen assistiven Technologien unterstützt werden.

Um ein interaktives Widget mit Tabellenstruktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion die Auswahl einzelner Zellen ermöglicht, eine Navigation von links nach rechts und von oben nach unten bietet oder Nutzende die Reihenfolge von Zellen ändern können, etwa per Drag-and-drop, verwenden Sie [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit ein natives HTML-Tabellenelement zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `role="rowgroup"`
  - : Als optionales Kindelement der Tabelle umfasst eine Zeilengruppe mehrere Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle, optional innerhalb einer `rowgroup`, die eine oder mehrere Zellen, Spaltenüberschriften oder Zeilenüberschriften enthält.
- Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Sein Wert ist die ID des Elements, das die Tabelle beschreibt.
- Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) stellt einen zugänglichen Namen für die Tabelle bereit.
- Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht jederzeit im DOM vorhanden sind. Es gibt die Anzahl der Spalten der vollständigen Tabelle explizit an. Setzen Sie den Wert auf die Gesamtzahl der Spalten der vollständigen Tabelle. Wenn diese unbekannt ist, setzen Sie `aria-colcount="-1"`.
- Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht jederzeit im DOM vorhanden sind, beispielsweise bei scrollbaren Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es gibt die Anzahl der Zeilen der vollständigen Tabelle explizit an. Setzen Sie den Wert auf die Gesamtzahl der Zeilen der vollständigen Tabelle. Wenn diese unbekannt ist, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Informationen zu sortierbaren Spalten finden Sie unter der ARIA-Rolle [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role).

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion nutzen können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, statt einem Element einen anderen Zweck zu geben und eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('table')}} anstelle der ARIA-Rolle `table`.

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

Das obige Beispiel zeigt einen Teil einer Tabelle. Obwohl die vollständige Tabelle 81 Einträge enthält, wie die Eigenschaft [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) angibt, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) an den Spaltenüberschriften angibt.

## Best Practices

Verwenden Sie für die Struktur von Datentabellen ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die native Semantik der Tabelle beispielsweise durch CSS verloren geht. Ein relevanter Anwendungsfall für die ARIA-Rolle `table` liegt vor, wenn die CSS-Eigenschaft `display` die native Semantik einer Tabelle überschreibt, etwa durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wiederherzustellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernmaterial: Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernmaterial: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: Rolle `grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
