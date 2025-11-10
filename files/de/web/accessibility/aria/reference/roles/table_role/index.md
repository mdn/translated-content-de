---
title: "ARIA: table-Rolle"
short-title: table
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `table`-Wert des ARIA `role`-Attributs identifiziert das Element, das die Rolle einer nicht-interaktiven Tabellenstruktur mit Daten enthält, die in Reihen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Reihen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, jedoch können Widgets innerhalb einzelner Zellen der Tabelle interaktiv sein. Wann immer möglich, wird dringend empfohlen, ein natives HTML-{{HTMLElement('table')}}-Element zu verwenden.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlszustand beibehält, eine zweidimensionale Navigation hat oder es dem Benutzer erlaubt, die Reihenfolge der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Container-Element hinzu. Innerhalb dieses Containers hat jede Reihe `role="row"` und enthält Kinderzellen. Jede Zelle hat eine Rolle entweder von `columnheader`, `rowheader` oder `cell`. Reihen können Kinder der Tabelle oder innerhalb einer `rowgroup` sein.

Die Tabellenbeschriftung kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}}, müssen über zugehörige Rollen wie `rowgroup`, `row`, `columnheader` und `cell` hinzugefügt werden.

Wenn die Tabelle sortierbare Spalten oder Reihen enthält, sollte das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf dem Kopfzellenelement (nicht auf der Tabelle selbst) hinzugefügt werden. Wenn irgendwelche Reihen oder Spalten verborgen sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) eingeschlossen werden, um die Gesamtzahl der Spalten oder Reihen anzugeben, sowie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) auf jeder Zelle. Das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) ist auf die Position einer Zelle innerhalb der Reihe oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die sich über mehrere Reihen oder Spalten erstrecken, sollten auch [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) eingeschlossen werden. Es ist viel einfacher, das {{HTMLElement('table')}}-Element zu verwenden, zusammen mit allen verwandten semantischen Elementen und Attributen, die von allen unterstützenden Technologien unterstützt werden.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswahlszustand einzelner Zellen erlaubt, wenn Links-nach-Rechts- und Oben-nach-Unten-Navigation bereitgestellt wird oder wenn die Benutzeroberfläche das Umordnen der Zellreihenfolge oder das sonstige Ändern der individuellen Zellreihenfolge durch z. B. Drag & Drop erlaubt, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Wann immer möglich, wird dringend empfohlen, ein natives HTML-Tabellenelement zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, die Zeilengruppe kapselt eine Gruppe von Reihen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Reihe innerhalb der Tabelle und optional innerhalb einer Zeilengruppe, die eine oder mehrere Zellen, Spaltenköpfe oder Zeilenköpfe enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es gibt explizit die Anzahl der Spalten in der vollständigen Tabelle an. Setzen Sie den Wert auf die Gesamtzahl der Spalten in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Reihen nicht immer im DOM vorhanden sind, wie bei scrollbaren Tabellen, die Reihen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es gibt explizit die Anzahl der Reihen in der vollständigen Tabelle an. Setzen Sie den Wert auf die Gesamtanzahl der Reihen in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) aria-Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, wenn Sie eine native Funktion verwenden können, deren Semantik und Verhalten Sie benötigen, anstatt ein Element zweckzuentfremden und **ein** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-{{HTMLElement('table')}}-Element anstelle der ARIA-Tabelle, wann immer möglich.

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

Das obige ist ein Teil einer Tabelle. Während die vollständige Tabelle 81 Einträge hat, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Eigenschaft angegeben, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber nicht aktuell sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft auf den Spaltenköpfen angegeben.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für Datentabellenstrukturen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die native Semantik der Tabelle entfernt wird, etwa durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die Display-Eigenschaft von CSS die native Semantik einer Tabelle überschreibt, beispielsweise durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wieder hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: `grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
