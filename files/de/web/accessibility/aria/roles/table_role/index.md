---
title: "ARIA: table-Rolle"
slug: Web/Accessibility/ARIA/Roles/table_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Der `table`-Wert des ARIA-`role`-Attributs identifiziert das Element, das die Rolle einer nicht interaktiven Tabellenstruktur hat, die Daten in Zeilen und Spalten anordnet, ähnlich wie das native {{HTMLElement('table')}}-HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind weder fokussierbar noch auswählbar, allerdings können Widgets innerhalb einzelner Zellen der Tabelle interaktiv sein. Es wird dringend empfohlen, wann immer möglich ein natives HTML-{{HTMLElement('table')}}-Element zu verwenden.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlstatus beibehält, eine zweidimensionale Navigation hat oder es dem Benutzer ermöglicht wird, die Reihenfolge der Zellen neu anzuordnen, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Container-Element hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` gesetzt und enthält Kinderzellen. Jede Zelle hat entweder die Rolle `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle sein oder innerhalb einer `rowgroup`.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} müssen über zugehörige Rollen wie `rowgroup`, `row`, `columnheader` und `cell` hinzugefügt werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut auf dem Header-Zellenelement hinzugefügt werden (nicht der Tabelle selbst). Wenn Zeilen oder Spalten verborgen sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) enthalten sein, die die Gesamtanzahl der Spalten oder Zeilen angeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zelle. Die Attribute [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) sind auf die Position einer Zelle innerhalb der Zeile oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die sich über mehrere Zeilen oder mehrere Spalten erstrecken, sollten [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) ebenfalls enthalten sein. Es ist viel einfacher, das {{HTMLElement('table')}}-Element zusammen mit all den damit verbundenen semantischen Elementen und Attributen zu verwenden, die von allen assistiven Technologien unterstützt werden.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswahlstatus einzelner Zellen ermöglicht, wenn die Navigation von links nach rechts und von oben nach unten bereitgestellt wird oder wenn das Benutzerinterface das Neuordnen der Zellreihenfolge erlaubt oder anderweitig die Reihenfolge einzelner Zellen ändert, wie durch Drag and Drop, verwenden Sie [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) stattdessen.

> [!NOTE]
> Es wird stark empfohlen, wann immer möglich ein natives HTML-Tabellenelement zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kindelement der Tabelle, die Zeilengruppe umfasst eine Gruppe von Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle und optional innerhalb einer Zeilengruppe, die eine oder mehrere Zellen, Spaltenköpfe oder Zeilenköpfe enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet einen barrierefreien Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht permanent im DOM vorhanden sind. Es bietet eine explizite Angabe der Anzahl von Spalten in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl von Spalten in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht permanent im DOM vorhanden sind, wie bei scrollbaren Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es bietet eine explizite Angabe der Anzahl an Zeilen in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl von Zeilen in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Features

Keine. Für sortierbare Spalten siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria-Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist: Wenn Sie ein natives Feature mit den benötigten Semantiken und Verhaltensweisen, das bereits integriert ist, verwenden können, anstatt ein Element neu zu nutzen und ihm **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-{{HTMLElement('table')}}-Element anstelle der ARIA-Tabelle, wann immer möglich.

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

Das obige ist Teil einer Tabelle. Während die vollständige Tabelle 81 Einträge hat, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Eigenschaft angegeben, sind momentan nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Eigenschaft auf den Spaltenköpfen angezeigt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die Display-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabellen-Element](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML-Tabellen-Tutorial](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA: `grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
