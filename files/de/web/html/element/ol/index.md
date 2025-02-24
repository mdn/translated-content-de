---
title: "<ol>: Das geordnete Listenelement"
slug: Web/HTML/Element/ol
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<ol>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine geordnete Liste von Einträgen – typischerweise als nummerierte Liste dargestellt.

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

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `reversed`
  - : Dieses Boolean-Attribut gibt an, dass die Einträge der Liste in umgekehrter Reihenfolge sind. Einträge werden von hoch nach niedrig nummeriert.
- `start`
  - : Eine Ganzzahl, ab der die Listeneinträge gezählt werden. Immer eine arabische Ziffer (1, 2, 3, etc.), auch wenn der Nummerierungstyp Buchstaben oder römische Ziffern ist. Zum Beispiel, um die Nummerierung mit dem Buchstaben "d" oder der römischen Zahl "iv" zu beginnen, verwenden Sie `start="4"`.
- `type`

  - : Legt den Nummerierungstyp fest:

    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für kleine römische Ziffern
    - `I` für große römische Ziffern
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, ein anderes [`type`](/de/docs/Web/HTML/Element/li#type) Attribut wird auf einem eingeschlossenen {{HTMLElement("li")}} Element verwendet.

    > [!NOTE]
    > Sofern der Listentyp wichtig ist (wie in rechtlichen oder technischen Dokumenten, bei denen Einträge durch ihre Nummer/Buchstabe referenziert werden), verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Nutzungshinweise

Typischerweise werden geordnete Listeneinträge mit einem vorangestellten [Marker](/de/docs/Web/CSS/::marker), wie einer Zahl oder einem Buchstaben, angezeigt.

Die `<ol>` und {{HTMLElement("ul")}} (oder das Synonym {{HTMLElement("menu")}}) Elemente können so tief verschachtelt werden, wie gewünscht, wobei `<ol>`, `<ul>` (oder `<menu>`) bei Bedarf abwechselnd verwendet werden.

Die `<ol>` und {{HTMLElement("ul")}} Elemente repräsentieren beide eine Liste von Einträgen. Der Unterschied besteht darin, dass beim `<ol>` Element die Reihenfolge bedeutungsvoll ist. Zum Beispiel:

- Schritte in einem Rezept
- Schritt-für-Schritt-Anweisungen
- Die Liste der Zutaten in abnehmender Proportion auf Nährwertangaben

Um zu bestimmen, welche Liste verwendet werden soll, versuchen Sie, die Reihenfolge der Listeneinträge zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>` Element – ansonsten können Sie {{HTMLElement("ul")}} verwenden oder {{HTMLElement("menu")}}, wenn Ihre Liste ein Menü ist.

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

### Verwendung des Typs Römische Zahlen

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Verwendung des Start-Attributs

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

### Verschachteln von Listen

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

### Ungeordnete Liste in geordneter Liste

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, und wenn die Kinder des <code>&#x3C;ol></code>-Elements mindestens ein
        {{HTMLElement("li")}} Element umfassen,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließenden Inhalt</a
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
      <td>[`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die besonders nützlich sein könnten, um das `<ol>`-Element zu stylen:

  - die {{CSSxRef("list-style")}} Eigenschaft, um die Darstellung der Ordinalzahlen zu wählen
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben
  - die {{CSSxRef("line-height")}} Eigenschaft, um das veraltete `compact` Attribut zu simulieren
  - die {{CSSxRef("margin")}} Eigenschaft, um die Einrückung der Liste zu steuern
