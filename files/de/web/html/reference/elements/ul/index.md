---
title: "`<ul>`: HTML-Element für ungeordnete Listen"
short-title: <ul>
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: 51c7af056884cf4b990052e492c21cc8508eef5c
---

Das **`<ul>`**-Element von [HTML](/de/docs/Web/HTML) stellt eine ungeordnete Liste von Einträgen dar, die üblicherweise mit Aufzählungszeichen angezeigt wird.

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

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Dieses boolesche Attribut gibt an, dass die Liste kompakt dargestellt werden soll. Wie es interpretiert wird, hängt vom Browser ab. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Mit der CSS-Eigenschaft {{cssxref("line-height")}} und dem Wert `80%` lässt sich ein ähnlicher Effekt wie mit dem Attribut `compact` erzielen.
- `type` {{Deprecated_inline}}
  - : Dieses Attribut legt die Art der Aufzählungszeichen für die Liste fest. Die in HTML 3.2 und der Übergangsversion von HTML 4.0/4.01 definierten Werte sind:
    - `circle`
    - `disc`
    - `square`

    In der WebTV-Oberfläche wurde eine vierte Art von Aufzählungszeichen definiert, die jedoch nicht von allen Browsern unterstützt wird: `triangle`.

    Wenn das Attribut fehlt und für das Element keine [CSS](/de/docs/Web/CSS)-Eigenschaft {{ cssxref("list-style-type") }} gilt, wählt der User Agent die Art der Aufzählungszeichen anhand der Verschachtelungstiefe der Liste aus.

    > [!WARNING]
    > Verwenden Sie dieses Attribut nicht, da es veraltet ist. Verwenden Sie stattdessen die [CSS](/de/docs/Web/CSS)-Eigenschaft {{ cssxref("list-style-type") }}.

## Verwendungshinweise

- Das Element `<ul>` dient dazu, Einträge zu einer Liste zusammenzufassen, wenn sie keine numerische Reihenfolge haben und ihre Reihenfolge in der Liste keine Bedeutung hat. Einträge einer ungeordneten Liste werden üblicherweise mit Aufzählungszeichen angezeigt, etwa mit einem Punkt, einem Kreis oder einem Quadrat. Die Art der Aufzählungszeichen wird nicht im HTML der Seite festgelegt, sondern im zugehörigen CSS mithilfe der Eigenschaft {{ cssxref("list-style-type") }}.
- Die Elemente `<ul>` und {{HTMLElement("ol")}} können beliebig tief verschachtelt werden. Dabei können `<ol>` und `<ul>` in den verschachtelten Listen ohne Einschränkung aufeinander folgen. Um eine Liste zu verschachteln, platzieren Sie sie innerhalb eines {{HTMLElement("li")}}-Elements der übergeordneten Liste. Ein `<ul>` oder `<ol>` kann kein direktes Kindelement eines anderen `<ul>` oder `<ol>` sein.
- Sowohl {{ HTMLElement("ol") }} als auch `<ul>` stellen eine Liste von Einträgen dar. Der Unterschied besteht darin, dass bei {{ HTMLElement("ol") }} die Reihenfolge eine Bedeutung hat. Um zu entscheiden, welches Element Sie verwenden sollten, ändern Sie probeweise die Reihenfolge der Listeneinträge: Ändert sich dadurch die Bedeutung, sollten Sie {{ HTMLElement("ol") }} verwenden. Andernfalls können Sie `<ul>` verwenden.

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

### Eine Liste verschachteln

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
        > und, wenn die Kindelemente des Elements <code>&#x3C;ul></code> mindestens
        ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("li")}}-,
        {{HTMLElement("script")}}- und
        {{HTMLElement("template")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
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

- Andere HTML-Elemente für Listen: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die für die Gestaltung des Elements `<ul>` besonders nützlich sein können:
  - die Eigenschaft {{CSSxRef("list-style")}}, um die Darstellung der Aufzählungszeichen festzulegen.
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), um komplexe verschachtelte Listen zu gestalten.
  - die Eigenschaft {{CSSxRef("line-height")}}, um das veraltete Attribut [`compact`](#compact) nachzubilden.
  - die Eigenschaft {{CSSxRef("margin")}}, um den Einzug der Liste zu steuern.
