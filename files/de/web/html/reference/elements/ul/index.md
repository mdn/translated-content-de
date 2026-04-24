---
title: "`<ul>` HTML ungeordnete Listenelement"
short-title: <ul>
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<ul>`**-[HTML](/de/docs/Web/HTML)-Element stellt eine ungeordnete Liste von Elementen dar, die typischerweise als Aufzählungsliste gerendert wird.

{{InteractiveExample("HTML Demo: &lt;ul&gt;", "tabbed-standard")}}

```html interactive-example
<ul>
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

```css interactive-example
li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
```

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs ist browser-spezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.
- `type` {{Deprecated_inline}}
  - : Dieses Attribut legt den Aufzählungsstil für die Liste fest. Die in HTML3.2 und in der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:
    - `circle`
    - `disc`
    - `square`

    Ein vierter Aufzählungstyp wurde in der WebTV-Schnittstelle definiert, aber nicht alle Browser unterstützen ihn: `triangle`.

    Wenn dieses Attribut nicht vorhanden ist und keine [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft auf das Element angewendet wird, wählt der Benutzeragent basierend auf der Verschachtelungsebene der Liste einen Aufzählungstyp aus.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist; verwenden Sie stattdessen die [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft.

## Anwendungshinweise

- Das `<ul>`-Element dient zum Gruppieren einer Sammlung von Elementen, die keine numerische Ordnung haben und deren Reihenfolge in der Liste bedeutungslos ist. Typischerweise werden die Elemente einer ungeordneten Liste mit einem Aufzählungszeichen angezeigt, das verschiedene Formen haben kann, wie einen Punkt, einen Kreis oder ein Quadrat. Der Stil des Aufzählungszeichens wird nicht in der HTML-Beschreibung der Seite definiert, sondern in ihrem zugehörigen CSS, unter Verwendung der {{ cssxref("list-style-type") }}-Eigenschaft.
- Die `<ul>`- und {{HTMLElement("ol")}}-Elemente können so tief verschachtelt werden, wie gewünscht. Darüber hinaus können die verschachtelten Listen zwischen `<ol>` und `<ul>` ohne Einschränkung alternieren.
- Die {{HTMLElement("ol")}}- und `<ul>`-Elemente stellen beide eine Liste von Elementen dar. Sie unterscheiden sich darin, dass beim {{HTMLElement("ol")}}-Element die Reihenfolge von Bedeutung ist. Um zu bestimmen, welches verwendet werden soll, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, sollte das {{HTMLElement("ol")}}-Element verwendet werden, andernfalls können Sie `<ul>` verwenden.

## Beispiele

### Einfaches Beispiel

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 400, 120)}}

### Verschachteln einer Liste

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Nesting_a_list", 400, 340)}}

### Geordnete Liste innerhalb einer ungeordneten Liste

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Ordered_list_inside_unordered_list", 400, 190)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, und wenn die Kinder des Elements <code>&#x3C;ul></code> mindestens ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >greifbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("li")}},
        {{HTMLElement("script")}} und
        {{HTMLElement("template")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere HTML-Elemente, die sich auf Listen beziehen: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Besonders nützliche CSS-Eigenschaften zur Gestaltung des `<ul>`-Elements:
  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Darstellungsweise der Aufzählung zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), um komplexe verschachtelte Listen zu handhaben.
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Einrückung der Liste zu steuern.
