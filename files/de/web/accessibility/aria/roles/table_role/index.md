---
title: "ARIA: table-Rolle"
slug: Web/Accessibility/ARIA/Roles/table_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Der `table`-Wert des ARIA-Attributs `role` identifiziert das Element mit der Rolle als Struktur einer nicht interaktiven Tabelle, die Daten in Zeilen und Spalten ähnlich dem nativen {{HTMLElement('table')}} HTML-Element enthält.

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

Ein Element mit `role="table"` ist eine statische tabellarische Struktur mit Zeilen, die Zellen enthalten. Die Zellen sind nicht fokussierbar oder auswählbar, obwohl Widgets in einzelnen Zellen der Tabelle interaktiv sein können. Die Verwendung eines nativen HTML-{{HTMLElement('table')}}-Elements ist wann immer möglich dringend empfohlen.

> [!WARNING]
> Wenn eine Tabelle einen Auswahlzustand beibehält, eine zweidimensionale Navigation hat oder es dem Benutzer ermöglicht, die Reihenfolge der Zellen zu ändern, verwenden Sie stattdessen [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

Um eine ARIA-Tabelle zu erstellen, fügen Sie dem Containerelement `role="table"` hinzu. Innerhalb dieses Containers hat jede Zeile `role="row"` eingestellt und enthält Kindzellen. Jede Zelle hat eine Rolle von entweder `columnheader`, `rowheader` oder `cell`. Zeilen können Kinder der Tabelle oder innerhalb einer `rowgroup` sein.

Die Tabellenbeschriftung kann über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert werden. Alle anderen semantischen Tabellenelemente wie {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} müssen über zugehörige Rollen wie `rowgroup`, `row`, `columnheader` und `cell` hinzugefügt werden.

Wenn die Tabelle sortierbare Spalten oder Zeilen enthält, sollte das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) auf das Zellenkopf-Element (nicht auf der Tabelle selbst) hinzugefügt werden. Wenn Zeilen oder Spalten versteckt sind, sollten [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) oder [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) enthalten sein, um die Gesamtanzahl der Spalten oder Zeilen anzugeben, zusammen mit [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zelle. Die [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) oder [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) wird auf die Position einer Zelle innerhalb der Reihe oder Spalte gesetzt. Wenn die Tabelle Zellen enthält, die mehrere Reihen oder mehrere Spalten überspannen, dann sollten auch [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) oder [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) hinzugefügt werden. Es ist jedoch wesentlich einfacher, das {{HTMLElement('table')}}-Element zu verwenden, zusammen mit allen zugehörigen semantischen Elementen und Attributen, die von allen unterstützenden Technologien unterstützt werden.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das `grid`-Muster. Wenn die Interaktion den Auswahzustand einzelner Zellen ermöglicht, wenn eine Navigation von links nach rechts und oben nach unten bereitgestellt wird oder wenn die Benutzeroberfläche das Neuanordnen der Zellenreihenfolge oder das Ändern der Reihenfolge einzelner Zellen, wie z.B. durch Drag & Drop, ermöglicht, verwenden Sie [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) anstelle.

> [!NOTE]
> Die Verwendung eines nativen HTML-Tabellenelements wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `role="rowgroup"`
  - : Ein optionales Kind der Tabelle, die Zeilengruppe umfasst eine Gruppe von Zeilen, ähnlich wie {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} und {{HTMLElement('tfoot')}}.
- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile innerhalb der Tabelle und optional innerhalb einer rowgroup, die eine oder mehrere Zellen, Spaltenköpfe oder Zeilenköpfe enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut
  - : Nimmt als Wert die ID des Elements, das als Beschreibung für die Tabelle dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut
  - : Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet einen zugänglichen Namen für die Tabelle.
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut
  - : Diese Attribut ist nur erforderlich, wenn die Spalten nicht ständig im DOM vorhanden sind. Es liefert eine explizite Angabe der Anzahl der Spalten in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Spalten in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-colcount="-1"`.
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut
  - : Diese Attribut ist nur erforderlich, wenn die Reihen nicht ständig im DOM vorhanden sind, wie z.B. scrollbare Tabellen, die Reihen wiederverwenden, um die Anzahl der DOM-Knoten zu minimieren. Es liefert eine explizite Angabe der Anzahl der Reihen in der vollständigen Tabelle. Setzen Sie den Wert auf die Gesamtanzahl der Reihen in der vollständigen Tabelle. Wenn unbekannt, setzen Sie `aria-rowcount="-1"`.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten, siehe die [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung ist, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen, die bereits eingebaut sind, verwenden können, anstatt ein Element neu zu zuweisen und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML {{HTMLElement('table')}}-Element anstelle der ARIA-Rolle `table` wann immer möglich.

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

Das Obige ist Teil einer Tabelle. Obwohl die vollständige Tabelle 81 Einträge hat, wie durch die [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Eigenschaft angegeben, sind derzeit nur vier sichtbar. Die Spalten sind sortierbar, aber momentan nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft auf den Spaltenköpfen angezeigt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn das CSS-Display-Property die nativen Semantiken einer Tabelle überschreibt, wie z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabellenelement](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML-Tabellenanleitung](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA: `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
