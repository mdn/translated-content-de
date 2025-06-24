---
title: "<ol>: Das geordnete Listenelement"
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<ol>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine geordnete Liste von Elementen – typischerweise als nummerierte Liste dargestellt.

{{InteractiveExample("HTML Demo: &lt;ol&gt;", "tabbed-shorter")}}

```html interactive-example
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

```css interactive-example
li {
  font:
    1rem "Fira Sans",
    sans-serif;
  margin-bottom: 0.5rem;
}
```

## Attribute

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `reversed`
  - : Dieses Boolean-Attribut gibt an, dass die Elemente der Liste in umgekehrter Reihenfolge angeordnet sind. Die Nummerierung erfolgt von hoch nach niedrig.
- `start`
  - : Eine ganze Zahl, mit der die Zählung für die Listenelemente beginnt. Immer eine arabische Ziffer (1, 2, 3 usw.), auch wenn der Nummerierungs`type` Buchstaben oder römische Ziffern sind. Zum Beispiel, um die Nummerierung der Elemente mit dem Buchstaben "d" oder der römischen Ziffer "iv" zu beginnen, verwenden Sie `start="4"`.
- `type`

  - : Legt den Nummerierungstyp fest:

    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für römische Kleinbuchstaben
    - `I` für römische Großbuchstaben
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, ein anderes [`type`](/de/docs/Web/HTML/Reference/Elements/li#type)-Attribut wird auf einem eingeschlossenen {{HTMLElement("li")}}-Element verwendet.

    > [!NOTE]
    > Sofern der Typ der Listennummer keine Rolle spielt (wie in rechtlichen oder technischen Dokumenten, in denen Elemente nach ihrer Nummer/Buchstabe referenziert werden), verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Verwendungshinweise

Typischerweise werden geordnete Listenelemente mit einem vorangestellten [Markierer](/de/docs/Web/CSS/::marker) angezeigt, z. B. einer Zahl oder einem Buchstaben.

Die `<ol>` und {{HTMLElement("ul")}} (oder das Synonym {{HTMLElement("menu")}}) Elemente können beliebig tief geschachtelt werden, wobei nach Bedarf zwischen `<ol>`, `<ul>` (oder `<menu>`) abgewechselt wird.

Die `<ol>` und {{HTMLElement("ul")}} Elemente repräsentieren beide eine Liste von Elementen. Der Unterschied besteht darin, dass bei dem `<ol>` Element die Reihenfolge eine Bedeutung hat. Zum Beispiel:

- Schritte in einem Rezept
- Schritt-für-Schritt-Anweisungen
- Die Liste der Zutaten in absteigender Menge auf Nährwertkennzeichnungen

Um zu bestimmen, welche Liste zu verwenden ist, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>`-Element — andernfalls können Sie {{HTMLElement("ul")}}, oder {{HTMLElement("menu")}} verwenden, wenn es sich bei Ihrer Liste um ein Menü handelt.

## Beispiele

### Einfaches Beispiel

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 400, 100)}}

### Verwendung des Typs Römische Ziffern

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Verwendung des start-Attributs

```html
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_the_start_attribute", 400, 100)}}

### Verschachtelte Listen

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Nesting_lists", 400, 150)}}

### Ungeordnete Liste in einer geordneten Liste

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Unordered_list_inside_ordered_list", 400, 150)}}

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
        >, und wenn die Kinder des <code>&#x3C;ol></code>-Elements mindestens
        ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{ HTMLElement("li") }},
        {{HTMLElement("script")}} und
        {{HTMLElement("template")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >Liste</a
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
      <td>[`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Listen-bezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die speziell nützlich sein könnten, um das `<ol>`-Element zu stylen:
  - die {{CSSxRef("list-style")}} Eigenschaft, um die Art der Anzeige des Ordnungszeichens zu wählen
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben
  - die {{CSSxRef("line-height")}} Eigenschaft, um das veraltete `compact`-Attribut zu simulieren
  - die {{CSSxRef("margin")}} Eigenschaft, um den Listeneinzug zu steuern
