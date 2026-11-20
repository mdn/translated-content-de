---
title: "ARIA: Rolle gridcell"
short-title: gridcell
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `gridcell` wird verwendet, um eine Zelle in einem [Grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) darzustellen. Sie soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachbilden, mit dem Informationen tabellenartig gruppiert werden.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente mit `role="gridcell"` müssen untergeordnete Elemente eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und ARIA hinzuzufügen. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### gridcells bei dynamisch hinzugefügten, ausgeblendeten oder entfernten Zeilen und Spalten

Für jedes Element mit `role="gridcell"` sollte seine Position innerhalb der tabellenartigen Gruppierung mit ARIA beschrieben werden, wenn in der Tabelle, dem Grid oder dem Treegrid Zeilen und/oder Spalten dynamisch hinzugefügt, ausgeblendet oder entfernt werden können.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Position einer `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um ihre Position in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem übergeordneten Element mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtzahl der Spalten beziehungsweise Zeilen anzugeben.

Der folgende Beispielcode zeigt eine tabellenartige Gruppierung von Informationen, aus der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) beschreibt die Position der Spalten. So können Personen, die unterstützende Technologien verwenden, erkennen, dass bestimmte Spalten entfernt wurden:

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

### Position von gridcells beschreiben, wenn die Gesamtstruktur unbekannt ist

Wenn die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bereitstellt, muss die Position der gridcells mithilfe von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) programmatisch beschrieben werden. Die für `aria-describedby` angegebenen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Werte sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten vorgesehen sind.

Wenn über `aria-describedby` auf übergeordnete Elemente mit den Rollen [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) verwiesen wird, können unterstützende Technologien die Position des `gridcell`-Elements und seine Beziehung zur übrigen tabellenartigen Gruppierung von Inhalten verstehen.

### Interaktive Grids und Treegrids

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können bearbeitbar gemacht werden. Damit lässt sich eine ähnliche Funktionalität wie beim Bearbeiten einer Tabellenkalkulation nachbilden. Dies geschieht mithilfe des HTML-[Attributs `contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` bewirkt, dass das Element, auf das es angewendet wird, mit der Taste <kbd>Tab</kbd> fokussiert werden kann. Wenn eine gridcell bedingt in einen Zustand versetzt wird, in dem die Bearbeitung nicht zulässig ist, setzen Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem gridcell-Element entsprechend.

#### Aufklappbare Zellen

In einem [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können gridcells durch Umschalten des Attributs [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) anzeigen, ob sie auf- oder zugeklappt sind. Beachten Sie, dass dieses Attribut, falls vorhanden, nur für die einzelne gridcell gilt und nicht für die Zeile, die sie enthält. Ein wichtiger Anwendungsfall sind Pivot-Tabellen, in denen gruppierte Daten hierarchisch dargestellt werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `grid`
  - : Kennzeichnet ein übergeordnetes Element als tabellen- oder baumartige Gruppierung von Informationen.
- `row`
  - : Ist erforderlich, um zu kennzeichnen, dass die `gridcell` Teil einer Zeile in einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element die zugehörige Spaltenüberschrift ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Kennzeichnet die Position eines Elements im Verhältnis zu den übrigen Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element die zugehörige Zeilenüberschrift ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Kennzeichnet die Position eines Elements im Verhältnis zu den übrigen Zeilen der tabellenartigen Gruppierung von Informationen.

## Hinweise zur Barrierefreiheit

`gridcell` und bestimmte damit zusammenhängende ARIA-Rollen und -Eigenschaften werden von unterstützenden Technologien nur unzureichend unterstützt. Verwenden Sie nach Möglichkeit stattdessen [HTML-Tabellen-Markup](/de/docs/Web/HTML/Reference/Elements/table).

## Bewährte Vorgehensweisen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und ihm eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft hinzuzufügen, um es barrierefrei zu machen. Daher wird empfohlen, [natives HTML-Tabellen-Markup](/de/docs/Web/HTML/Reference/Elements/table) zu verwenden, statt Form und Funktionalität einer Tabelle mit ARIA und JavaScript nachzubilden.

## Beispiele

Das folgende Beispiel erstellt eine tabellenartige Gruppierung von Informationen:

```html
<h3 id="table-title">Jovian gas giant planets</h3>
<div role="grid" aria-describedby="table-title">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Name</div>
      <div role="columnheader">Diameter (km)</div>
      <div role="columnheader">Length of day (hours)</div>
      <div role="columnheader">Distance from Sun (10<sup>6</sup>km)</div>
      <div role="columnheader">Number of moons</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Jupiter</div>
      <div role="gridcell">142,984</div>
      <div role="gridcell">9.9</div>
      <div role="gridcell">778.6</div>
      <div role="gridcell">67</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Saturn</div>
      <div role="gridcell">120,536</div>
      <div role="gridcell">10.7</div>
      <div role="gridcell">1433.5</div>
      <div role="gridcell">62</div>
    </div>
  </div>
</div>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML-Element für Tabellen](/de/docs/Web/HTML/Reference/Elements/table)
- [ARIA: Rolle grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Das HTML-Element für Tabellenzeilen](/de/docs/Web/HTML/Reference/Elements/tr)
- [ARIA: Rolle row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: Rolle rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das HTML-Element für Tabellenüberschriften](/de/docs/Web/HTML/Reference/Elements/th)
- [Das HTML-Element für Tabellendatenzellen](/de/docs/Web/HTML/Reference/Elements/td)
