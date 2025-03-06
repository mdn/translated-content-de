---
title: "ARIA: table-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `table`-Wert des ARIA `role`-Attributs identifiziert das Element, das diese Rolle enthält, als eine nicht-interaktive Tabellenstruktur, die Daten in Zeilen und Spalten geordnet enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, obwohl Widgets innerhalb einzelner Zellen der Tabelle interaktiv sein können. Die Verwendung eines nativen HTML-{{HTMLElement('table')}} Elements wird nach Möglichkeit dringend empfohlen.

> [!WARNING]
> Wenn eine Tabelle einen Auswählzustand beibehält, eine zweidimensionale Navigation bietet oder dem Benutzer erlaubt, die Zellreihenfolge neu zu ordnen, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Container-Element hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` gesetzt und enthält untergeordnete Zellen. Jede Zelle hat entweder die Rolle `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb eines `rowgroup` sein.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}} müssen über zugehörige Rollen hinzugefügt werden, wie `rowgroup`, `row`, `columnheader` und `cell`.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf dem Header-Zellenelement, nicht auf der Tabelle selbst, hinzugefügt werden. Wenn Zeilen oder Spalten ausgeblendet sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) hinzugefügt werden, um die Gesamtanzahl an Spalten oder Zeilen anzugeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) auf jeder Zelle. Das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) wird auf die Position einer Zelle innerhalb der Zeile oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollten auch [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) enthalten sein. Es ist weitaus einfacher, das {{HTMLElement('table')}} Element zu verwenden, zusammen mit allen zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien unterstützt werden.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswählzustand von einzelnen Zellen bereitstellt, wenn eine Navigation von links nach rechts und von oben nach unten vorhanden ist, oder wenn die Benutzeroberfläche das Neuordnen von Zellen oder anderweitiges Ändern der Reihenfolge von einzelnen Zellen wie durch Drag-and-Drop zulässt, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung eines nativen HTML-Tabellenelements wird nach Möglichkeit dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, die Zeilengruppe fasst eine Gruppe von Zeilen zusammen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle und optional innerhalb einer Zeilengruppe, die eine oder mehrere Zellen, Spaltenheader oder Zeilenheader enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es bietet eine explizite Angabe der Anzahl der Spalten in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht immer im DOM vorhanden sind, wie scrollbare Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es bietet eine explizite Angabe der Anzahl der Zeilen in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Zeilen in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten, siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ARIA-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstatt ein Element neu zu nutzen und **ein** ARIA-Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML {{HTMLElement('table')}} Element statt der ARIA-Rolle `table` wann immer möglich.

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

Oben ist ein Teil einer Tabelle. Während die vollständige Tabelle 81 Einträge hat, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Eigenschaft angegeben, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft auf den Spaltenheadern angezeigt.

## Beste Praktiken

Verwenden Sie ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datenstruktur der Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, wie etwa mit CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die display-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, wie durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [Lernen: HTML-Tabelle Zugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen der HTML-Tabelle](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
