---
title: "<ul>: Das Unordered List Element"
slug: Web/HTML/Element/ul
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<ul>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine ungeordnete Liste von Elementen, die typischerweise als Aufzählungsliste dargestellt wird.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_inline}}

  - : Dieses boolesche Attribut zeigt an, dass die Liste in einem kompakten Stil dargestellt werden sollte. Die Interpretation dieses Attributs hängt vom {{Glossary("user_agent", "User Agent")}} ab, und es funktioniert nicht in allen Browsern.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist: Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS). Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.

- `type` {{Deprecated_inline}}

  - : Dieses Attribut legt den Aufzählungsstil für die Liste fest. Die unter HTML3.2 und der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:

    - `circle`
    - `disc`
    - `square`

    Ein vierter Aufzählungstyp wurde in der WebTV-Oberfläche definiert, aber nicht alle Browser unterstützen ihn: `triangle`.

    Wenn nicht vorhanden und wenn keine [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft auf das Element angewendet wird, wählt der User Agent einen Aufzählungstyp abhängig von der Verschachtelungsebene der Liste.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist; verwenden Sie stattdessen die [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft.

## Hinweise zur Nutzung

- Das `<ul>`-Element dient zum Gruppieren einer Sammlung von Elementen, die keine numerische Reihenfolge haben, und deren Reihenfolge in der Liste bedeutungslos ist. Typischerweise werden ungeordnete Listenelemente mit einem Aufzählungszeichen angezeigt, das verschiedene Formen annehmen kann, wie ein Punkt, ein Kreis oder ein Quadrat. Der Aufzählungsstil wird nicht in der HTML-Beschreibung der Seite definiert, sondern in ihrem zugehörigen CSS mithilfe der {{ cssxref("list-style-type") }}-Eigenschaft.
- Die `<ul>`- und {{HTMLElement("ol")}}-Elemente können beliebig tief verschachtelt werden. Darüber hinaus dürfen die verschachtelten Listen ohne Einschränkung zwischen `<ol>` und `<ul>` wechseln.
- Die {{ HTMLElement("ol") }}- und `<ul>`-Elemente stellen beide eine Liste von Elementen dar. Der Unterschied besteht darin, dass bei dem {{ HTMLElement("ol") }}-Element die Reihenfolge bedeutungsvoll ist. Um zu bestimmen, welches verwendet werden soll, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, sollte das {{ HTMLElement("ol") }}-Element verwendet werden, andernfalls können Sie `<ul>` verwenden.

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

{{EmbedLiveSample("Simple_example", 400, 120)}}

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalts-Kategorien</a
        >, und wenn die Kinder des <code>&#x3C;ul></code>-Elements mindestens ein
        {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fassbare Inhalts-Kategorien</a
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
      <th scope="row">Weglassen des Tags</th>
      <td>Keines, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
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
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ul>`-Element zu stylen:

  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Darstellung des Ordnungszeichens zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben.
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Listeneinrückung zu steuern.
