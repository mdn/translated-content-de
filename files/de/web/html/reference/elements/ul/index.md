---
title: "<ul>: Das ungeordnete Listen-Element"
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<ul>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine ungeordnete Liste von Elementen, die typischerweise als Aufzählungsliste dargestellt wird.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}

  - : Dieses boolesche Attribut deutet an, dass die Liste in einem kompakten Stil gerendert werden soll. Die Interpretation dieses Attributs hängt vom {{Glossary("user_agent", "User-Agent")}} ab und funktioniert nicht in allen Browsern.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist: Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS). Um einen ähnlichen Effekt wie das `compact` Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.

- `type` {{Deprecated_inline}}

  - : Dieses Attribut legt den Aufzählungsstil für die Liste fest. Die unter HTML3.2 und der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:

    - `circle`
    - `disc`
    - `square`

    Ein vierter Aufzählungstyp wurde in der WebTV-Schnittstelle definiert, jedoch wird er nicht von allen Browsern unterstützt: `triangle`.

    Ist es nicht vorhanden und gilt keine [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }} Eigenschaft für das Element, wählt der User-Agent einen Aufzählungstyp abhängig von der Verschachtelungsebene der Liste aus.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist; verwenden Sie stattdessen die [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }} Eigenschaft.

## Nutzungshinweise

- Das `<ul>` Element dient zur Gruppierung einer Sammlung von Elementen, die keine numerische Reihenfolge haben, und deren Reihenfolge in der Liste bedeutungslos ist. Typischerweise werden ungeordnete Listenelemente mit einem Aufzählungszeichen angezeigt, das verschiedene Formen haben kann, wie ein Punkt, ein Kreis oder ein Quadrat. Der Aufzählungsstil wird nicht in der HTML-Beschreibung der Seite definiert, sondern im zugehörigen CSS mit der {{ cssxref("list-style-type") }} Eigenschaft.
- Die `<ul>` und {{HTMLElement("ol")}} Elemente können so tief wie gewünscht verschachtelt werden. Darüber hinaus können die verschachtelten Listen abwechselnd `<ol>` und `<ul>` ohne Einschränkung enthalten.
- Die {{ HTMLElement("ol") }} und `<ul>` Elemente repräsentieren beide eine Liste von Elementen. Sie unterscheiden sich darin, dass beim {{ HTMLElement("ol") }} Element die Reihenfolge bedeutungsvoll ist. Um zu bestimmen, welches verwendet werden soll, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, sollte das {{ HTMLElement("ol") }} Element verwendet werden, andernfalls können Sie `<ul>` verwenden.

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

### Verschachtelung einer Liste

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
          >Fließinhalt</a
        >, und wenn die Kinder des <code>&#x3C;ul></code> Elements mindestens
        ein {{HTMLElement("li")}} Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("li")}},
        {{HTMLElement("script")}} und
        {{HTMLElement("template")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ul>` Element zu stylen:

  - die {{CSSxRef("list-style")}} Eigenschaft, um die Anzeigeweise der Aufzählung auszuwählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu verwalten.
  - die {{CSSxRef("line-height")}} Eigenschaft, um das veraltete [`compact`](#compact) Attribut zu simulieren.
  - die {{CSSxRef("margin")}} Eigenschaft, um die Einrückung der Liste zu steuern.
