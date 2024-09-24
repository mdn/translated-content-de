---
title: "<ul>: Das ungeordnete Listenelement"
slug: Web/HTML/Element/ul
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<ul>`** [HTML](/de/docs/Web/HTML)-Element stellt eine ungeordnete Liste von Elementen dar, die typischerweise als Aufzählungsliste dargestellt wird.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_inline}}

  - : Dieses boolesche Attribut deutet an, dass die Liste in einem kompakten Stil dargestellt werden sollte. Die Interpretation dieses Attributs hängt vom {{glossary("user agent")}} ab und funktioniert nicht in allen Browsern.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es als veraltet gilt: Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS). Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.

- `type` {{Deprecated_inline}}

  - : Dieses Attribut legt den Aufzählungszeichenstil für die Liste fest. Die in HTML3.2 und der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:

    - `circle`
    - `disc`
    - `square`

    Ein vierter Aufzählungstyp wurde in der WebTV-Oberfläche definiert, wird jedoch nicht von allen Browsern unterstützt: `triangle`.

    Wenn dieses Attribut nicht vorhanden ist und keine [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft auf das Element angewendet wird, wählt der User-Agent einen Aufzählungstyp je nach Verschachtelungsebene der Liste aus.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es als veraltet gilt; verwenden Sie stattdessen die [CSS](/de/docs/Web/CSS) {{ cssxref("list-style-type") }}-Eigenschaft.

## Verwendungshinweise

- Das `<ul>`-Element dient zum Gruppieren einer Sammlung von Elementen, die keine numerische Reihenfolge haben und deren Reihenfolge in der Liste bedeutungslos ist. Typischerweise werden Elemente einer ungeordneten Liste mit einem Aufzählungszeichen angezeigt, das verschiedene Formen haben kann, wie ein Punkt, ein Kreis oder ein Quadrat. Der Aufzählungsstil wird nicht in der HTML-Beschreibung der Seite, sondern in ihrem zugehörigen CSS mit der {{ cssxref("list-style-type") }}-Eigenschaft definiert.
- Die `<ul>`- und {{HTMLElement("ol")}}-Elemente können beliebig tief verschachtelt werden. Zudem können die verschachtelten Listen ohne Einschränkung zwischen `<ol>` und `<ul>` wechseln.
- Die {{ HTMLElement("ol") }}- und `<ul>`-Elemente repräsentieren beide eine Liste von Elementen. Sie unterscheiden sich darin, dass bei dem {{ HTMLElement("ol") }}-Element die Reihenfolge eine Bedeutung hat. Um zu bestimmen, welches zu verwenden ist, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, sollte das {{ HTMLElement("ol") }}-Element verwendet werden, andernfalls können Sie `<ul>` verwenden.

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

### Verschachtelte Liste

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
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, und falls die Kinder des <code>&#x3C;ul></code>-Elements mindestens
        ein {{HTMLElement("li")}}-Element umfassen,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >palpable content</a
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >
        akzeptiert.
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ul>`-Element zu stylen:

  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Art der Anzeige des Ordnungszeichens auszuwählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu verwalten.
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Einrückung der Liste zu steuern.
