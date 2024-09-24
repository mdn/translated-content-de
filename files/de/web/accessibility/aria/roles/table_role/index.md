---
title: "ARIA: table Rolle"
slug: Web/Accessibility/ARIA/Roles/table_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `table`-Wert des ARIA-Attributs `role` identifiziert das Element, das die Rolle hat, als eine nicht-interaktive Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, obwohl Widgets innerhalb einzelner Zellen der Tabelle interaktiv sein können. Die Verwendung eines nativen HTML-{{HTMLElement('table')}}-Elements wird immer dann dringend empfohlen, wenn dies möglich ist.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlstatus beibehält, eine zweidimensionale Navigation ermöglicht oder dem Benutzer erlaubt, die Reihenfolge der Zellen neu zu ordnen, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Container-Element hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` festgelegt und enthält untergeordnete Zellen. Jede Zelle hat eine Rolle von entweder `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb eines `rowgroup` sein.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}}, müssen über zugehörige Rollen wie `rowgroup`, `row`, `columnheader` und `cell` hinzugefügt werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) auf das Header-Zellen-Element (nicht auf die Tabelle selbst) hinzugefügt werden. Wenn Zeilen oder Spalten ausgeblendet sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) hinzugefügt werden, um die Gesamtanzahl der Spalten bzw. Zeilen anzugeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zelle. Das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) ist auf die Position einer Zelle innerhalb der Zeile oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder Spalten erstrecken, sollten [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) ebenfalls hinzugefügt werden. Beachten Sie, dass es viel einfacher ist, das {{HTMLElement('table')}}-Element zu verwenden, zusammen mit allen zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien unterstützt werden.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Falls die Interaktion den Auswahlstatus einzelner Zellen vorsieht, wenn eine Navigation von links nach rechts und von oben nach unten bereitgestellt wird oder wenn die Benutzeroberfläche das Neuordnen der Zellreihenfolge oder das anderweitige Ändern der individuellen Zellordnung durch beispielsweise Ziehen und Ablegen ermöglicht, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung eines nativen HTML-Tabellenelements wird immer dann dringend empfohlen, wenn dies möglich ist.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, das die Zeilengruppe kapselt eine Gruppe von Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle, und optional innerhalb einer Zeilengruppe, die ein Container für eine oder mehrere Zellen, Spaltenüberschriften oder Zeilenüberschriften ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es bietet eine explizite Angabe der Anzahl der Spalten in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht immer im DOM vorhanden sind, wie z.B. scrollbare Tabellen, die Zeilen wiederverwendet, um die Anzahl der DOM-Knoten zu minimieren. Es bietet eine explizite Angabe der Anzahl der Zeilen in der gesamten Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Zeilen in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die aria-Rolle [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role).

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhalten verwenden können, die bereits integriert sind, anstatt ein Element zweckzuentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, tun Sie dies. Verwenden Sie das HTML-{{HTMLElement('table')}}-Element anstelle der ARIA-Tabelle wo immer möglich.

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

Das obige ist ein Teil einer Tabelle. Während die gesamte Tabelle 81 Einträge hat, wie durch die Eigenschaft [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) angegeben, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) in den Spaltenköpfen angegeben.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datenstruktur der Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, sollten die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die „display“-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabellenelement](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML-Tabellen-Tutorial](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA: `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
