---
title: "ARIA: table-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Der `table`-Wert der ARIA-`role`-Eigenschaft identifiziert das Element, das diese Rolle enthält, als eine nicht-interaktive Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, obwohl Widgets innerhalb der einzelnen Zellen der Tabelle interaktiv sein können. Es wird nachdrücklich empfohlen, wann immer möglich ein natives HTML-{{HTMLElement('table')}}-Element zu verwenden.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlszustand beibehält, zweidimensionale Navigation hat oder dem Benutzer erlaubt, die Reihenfolge der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie dem Container-Element `role="table"` hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` gesetzt und enthält Kinderzellen. Jede Zelle hat eine Rolle von entweder `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb einer `rowgroup` sein.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}}, müssen über zugeordnete Rollen hinzugefügt werden, wie `rowgroup`, `row`, `columnheader` und `cell`.

Falls die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut dem Kopfzellen-Element (nicht der Tabelle selbst) hinzugefügt werden. Wenn irgendwelche Zeilen oder Spalten versteckt sind, sollten die Attribute [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) hinzugefügt werden, um die Gesamtanzahl der Spalten bzw. Zeilen anzugeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) in jeder Zelle. Das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) gibt die Position einer Zelle innerhalb der Zeile bzw. der Spalte an. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollten dann [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) ebenfalls enthalten sein. Behalten Sie im Hinterkopf, dass es viel einfacher ist, das {{HTMLElement('table')}}-Element zu verwenden, zusammen mit allen zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien akzeptiert werden.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswahlszustand einzelner Zellen bietet, wenn eine von links nach rechts und oben nach unten Navigation geboten wird oder wenn die Benutzeroberfläche das Umordnen der Zellenreihenfolge oder anderweitige Änderungen der Reihenfolge einzelner Zellen, wie durch Drag-and-Drop, zulässt, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung eines nativen HTML-Tabellen-Elements wann immer möglich wird dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, das eine Gruppe von Zeilen umschließt, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle, und optional innerhalb einer Zeilengruppe, die eine oder mehrere Zellen, Spaltenheader oder Zeilenheader enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)-Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es bietet eine explizite Angabe der Anzahl der Spalten in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht immer im DOM vorhanden sind, wie z. B. scrollbare Tabellen, die Zeilen zur Minimierung der Anzahl von DOM-Knoten wiederverwenden. Es bietet eine explizite Angabe der Anzahl der Zeilen in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Zeilen in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ARIA-Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, dass wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstatt ein Element neu zu verwenden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann sollten Sie dies tun. Verwenden Sie wann immer möglich das HTML-{{HTMLElement('table')}}-Element anstelle der ARIA-Rolle der Tabelle.

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

Das obige ist ein Teil einer Tabelle. Obwohl die vollständige Tabelle 81 Einträge hat, wie durch das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attribut angezeigt, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber momentan nicht sortiert, was durch das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut in den Spaltenköpfen angezeigt wird.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datenstrukturtabelle. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle, z. B. durch CSS, entfernt werden. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn CSS die nativen Semantiken einer Tabelle durch die `display`-Eigenschaft überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: HTML-Tabellen-Zugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: `grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
