---
title: "ARIA: Tabelle Rolle"
slug: Web/Accessibility/ARIA/Roles/table_role
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Der `table` Wert des ARIA `role` Attributs identifiziert das Element als eine nicht-interaktive Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind nicht fokussierbar oder auswählbar, obwohl Widgets innerhalb der einzelnen Zellen der Tabelle interaktiv sein können. Wann immer möglich, wird die Verwendung eines nativen HTML {{HTMLElement('table')}} Elements dringend empfohlen.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlstatus aufrechterhält, zweidimensionale Navigation ermöglicht oder dem Benutzer erlaubt, die Anordnung der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie `role="table"` zum Containerelement hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` gesetzt und enthält Kindzellen. Jede Zelle hat eine Rolle entweder `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb einer `rowgroup` sein.

Die Tabellenüberschrift kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente, wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}}, müssen über zugeordnete Rollen hinzugefügt werden, wie `rowgroup`, `row`, `columnheader` und `cell`.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut auf das Zellenheader-Element hinzugefügt werden (nicht auf die Tabelle selbst). Wenn irgendwelche Zeilen oder Spalten versteckt sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) hinzugefügt werden, um anzugeben, wie viele Spalten oder Zeilen es insgesamt gibt, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zelle. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) wird auf die Position einer Zelle innerhalb der Zeile oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die mehrere Zeilen oder Spalten umfassen, sollten [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) ebenfalls enthalten sein. Es ist viel einfacher, das {{HTMLElement('table')}} Element zu verwenden, zusammen mit all den zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien unterstützt werden.

Um ein interaktives Widget zu erstellen, das eine tabellarische Struktur hat, verwenden Sie das `grid` Muster. Wenn die Interaktion den Auswahlstatus einzelner Zellen berücksichtigt, eine Navigation von links nach rechts und von oben nach unten bietet oder wenn die Benutzeroberfläche es ermöglicht, die Anordnung der Zellen zu ändern oder einzelne Zellen z.B. durch Ziehen und Ablegen neu anzuordnen, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung eines nativen HTML Table-Elements wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, die Zeilengruppe umfasst eine Gruppe von Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle, und optional innerhalb einer Zeilengruppe, die eine oder mehrere Zellen, Spaltenheader oder Zeilenheader enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Spalten nicht immer im DOM vorhanden sind. Es gibt eine explizite Angabe der Gesamtanzahl der Spalten in der ganzen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut
  - : Dieses Attribut ist nur erforderlich, wenn die Zeilen nicht immer im DOM vorhanden sind, wie bei scrollbaren Tabellen, die Zeilen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es gibt eine explizite Angabe der Gesamtanzahl der Zeilen in der ganzen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Zeilen in der gesamten Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA lautet: Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen, die bereits eingebaut sind, verwenden können, anstatt ein Element neu zu definieren und **hinzuzufügen** eine ARIA Rolle, Zustand oder Eigenschaft, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML {{HTMLElement('table')}} Element, wann immer möglich, anstelle der ARIA Rolle table.

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

Das obige ist Teil einer Tabelle. Während die vollständige Tabelle 81 Einträge enthält, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Eigenschaft angegeben, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft an den Spaltenköpfen angegeben.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Daten-Tabellenstruktur. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, wie z.B. mit CSS. Ein relevanter Anwendungsfall für die ARIA Tabellenrolle ist, wenn die Display-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: HTML-Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
