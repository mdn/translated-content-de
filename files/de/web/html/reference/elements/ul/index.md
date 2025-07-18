---
title: "<ul>: Das Ungeordnete Listenelement"
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<ul>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine ungeordnete Liste von Elementen, die typischerweise als Aufzählungsliste dargestellt wird.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Dieses boolesche Attribut deutet an, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs ist browserspezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.
- `type` {{Deprecated_inline}}
  - : Dieses Attribut legt den Aufzählungsstil der Liste fest. Die in HTML3.2 und der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:
    - `circle`
    - `disc`
    - `square`

    Eine vierte Art von Aufzählung wurde in der WebTV-Schnittstelle definiert, wird jedoch nicht von allen Browsern unterstützt: `triangle`.

    Wenn nicht vorhanden und keine [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft auf das Element angewendet wird, wählt der Benutzeragent einen Aufzählungstyp abhängig von der Verschachtelungsebene der Liste.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist; verwenden Sie stattdessen die CSS-Eigenschaft {{ cssxref("list-style-type") }}.

## Verwendungshinweise

- Das `<ul>`-Element dient zur Gruppierung einer Sammlung von Elementen, die keine numerische Ordnung haben, und deren Reihenfolge in der Liste ist bedeutungslos. Typischerweise werden ungeordnete Listenelemente mit einer Aufzählung dargestellt, die verschiedene Formen annehmen kann, wie ein Punkt, ein Kreis oder ein Quadrat. Der Aufzählungsstil ist nicht in der HTML-Beschreibung der Seite definiert, sondern in ihrem zugehörigen CSS, indem die {{ cssxref("list-style-type") }}-Eigenschaft verwendet wird.
- Die `<ul>`- und {{HTMLElement("ol")}}-Elemente können so tief wie gewünscht verschachtelt werden. Darüber hinaus können die verschachtelten Listen zwischen `<ol>` und `<ul>` ohne Einschränkung wechseln.
- Die {{ HTMLElement("ol") }}- und `<ul>`-Elemente repräsentieren beide eine Liste von Elementen. Sie unterscheiden sich darin, dass beim {{ HTMLElement("ol") }}-Element die Reihenfolge bedeutungsvoll ist. Um zu bestimmen, welches verwendet werden soll, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, sollte das {{ HTMLElement("ol") }}-Element verwendet werden, andernfalls können Sie `<ul>` verwenden.

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
          >Fließinhalte</a
        >, und wenn die Kinder des <code>&#x3C;ul></code>-Elements mindestens ein
        {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbare Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("li")}},
        {{HTMLElement("script")}}- und
        {{HTMLElement("template")}}-Elemente.
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
          >Fließinhalte</a
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
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ul>`-Element zu gestalten:
  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Darstellung der Ordnungsanzeige zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplex verschachtelte Listen zu handhaben.
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Einrückung der Liste zu steuern.
