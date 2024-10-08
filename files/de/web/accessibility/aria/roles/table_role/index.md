---
title: "ARIA: table-Rolle"
slug: Web/Accessibility/ARIA/Roles/table_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `table`-Wert des ARIA-`role`-Attributs kennzeichnet das Element als nicht-interaktive Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, obwohl Widgets innerhalb einzelner Zellen der Tabelle interaktiv sein können. Es wird dringend empfohlen, wann immer möglich ein natives HTML-{{HTMLElement('table')}}-Element zu verwenden.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlzustand beibehält, eine zweidimensionale Navigation hat oder es dem Benutzer erlaubt, die Zellreihenfolge neu zu ordnen, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Containerelement hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` festgelegt und enthält untergeordnete Zellen. Jede Zelle hat eine Rolle von entweder `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb einer `rowgroup` sein.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}}, müssen über zugehörige Rollen wie `rowgroup`, `row`, `columnheader` und `cell` hinzugefügt werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) auf dem Header-Zellen-Element hinzugefügt werden (nicht auf der Tabelle selbst). Wenn Zeilen oder Spalten ausgeblendet sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) hinzugefügt werden, um die Gesamtanzahl der Spalten oder Zeilen anzugeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zelle. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) gibt die Position einer Zelle innerhalb der Zeile oder Spalte an. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollten auch [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) hinzugefügt werden. Es ist jedoch viel einfacher, das {{HTMLElement('table')}}-Element zu verwenden, zusammen mit allen zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien vollständig unterstützt werden.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswahlstatus einzelner Zellen bietet, wenn eine Navigation von links nach rechts und von oben nach unten bereitgestellt wird oder wenn die Benutzeroberfläche das Neuanordnen der Zellreihenfolge oder das Ändern der Zellreihenfolge, z.B. durch Drag-and-Drop, ermöglicht, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich ein natives HTML-Tabellenelement zu verwenden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, die Zeilengruppe umfasst eine Gruppe von Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle und optional innerhalb einer Zeilengruppe, die ein Container für eine oder mehrere Zellen, Spaltenüberschriften oder Zeilenüberschriften ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet einen barrierefreien Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es bietet einen expliziten Hinweis auf die Anzahl der Spalten in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht immer im DOM vorhanden sind, wie z. B. bei scrollbaren Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es bietet einen expliziten Hinweis auf die Anzahl der Zeilen in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Zeilen in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die `columnheader`-ARIA-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung besagt, dass wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen einsetzen können, anstatt ein Element umzugestalten und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie wann immer möglich das HTML {{HTMLElement('table')}}-Element anstelle der ARIA-Rolle table.

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

Das obige ist Teil einer Tabelle. Während die vollständige Tabelle 81 Einträge hat, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Eigenschaft angezeigt, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Eigenschaft auf den Spaltenüberschriften angezeigt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, sollte die native Semantik der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle Rolle ist, wenn die CSS-Anzeigeeigenschaft die native Semantik einer Tabelle überschreibt, wie mit `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabellenelement](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML-Tabellen-Tutorial](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA: `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
