---
title: "<ol>: Das geordnete Listenelement"
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<ol>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine geordnete Liste von Einträgen, die typischerweise als nummerierte Liste dargestellt wird.

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

- `compact` {{Deprecated_inline}} {{non-standard_inline}}
  - : Dieses Boolesche Attribut deutet an, dass die Liste in einem kompakten Stil dargestellt werden soll. Die Interpretation dieses Attributs ist browserspezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, können Sie die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwenden.
- `reversed`
  - : Dieses Boolesche Attribut gibt an, dass die Einträge der Liste in umgekehrter Reihenfolge sind. Einträge werden von hoch nach niedrig nummeriert.
- `start`
  - : Eine Ganzzahl, von der an die Listeneinträge gezählt werden. Immer eine arabische Zahl (1, 2, 3 usw.), auch wenn der Nummerierungstyp Buchstaben oder römische Ziffern sind. Zum Beispiel, um die Nummerierung der Elemente mit dem Buchstaben "d" oder der römischen Ziffer "iv" zu beginnen, verwenden Sie `start="4"`.
- `type`
  - : Legt den Nummerierungstyp fest:
    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für römische Ziffern in Kleinbuchstaben
    - `I` für römische Ziffern in Großbuchstaben
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, ein anderes [`type`](/de/docs/Web/HTML/Reference/Elements/li#type)-Attribut wird auf einem enthaltenen {{HTMLElement("li")}}-Element verwendet.

    > [!NOTE]
    > Sofern es nicht auf die Art der Listennummerierung ankommt (wie in juristischen oder technischen Dokumenten, in denen Einträge durch ihre Nummer/Buchstabe referenziert werden), verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Hinweise zur Verwendung

In der Regel zeigen geordnete Listeneinträge ein vorangehendes [Marker](/de/docs/Web/CSS/::marker), wie eine Nummer oder einen Buchstaben.

Die `<ol>`- und {{HTMLElement("ul")}}- (oder das Synonym {{HTMLElement("menu")}}) Elemente können so tief wie gewünscht geschachtelt werden, wobei zwischen `<ol>`, `<ul>` (oder `<menu>`) nach Bedarf gewechselt wird.

Die `<ol>`- und {{HTMLElement("ul")}}-Elemente repräsentieren beide eine Liste von Einträgen. Der Unterschied besteht darin, dass beim `<ol>`-Element die Reihenfolge von Bedeutung ist. Zum Beispiel:

- Schritte in einem Rezept
- Schritt-für-Schritt-Richtungen
- Die Liste der Zutaten in abnehmender Reihenfolge auf den Nährwertangaben

Um zu bestimmen, welche Liste zu verwenden ist, versuchen Sie, die Reihenfolge der Listeneinträge zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>`-Element. Andernfalls können Sie {{HTMLElement("ul")}} verwenden oder {{HTMLElement("menu")}}, wenn Ihre Liste ein Menü ist.

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

### Verwendung des Römischen Zahlentyps

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

### Ungeordnete Liste innerhalb geordneter Liste

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
        >, und wenn Kinder des <code>&#x3C;ol></code>-Elements mindestens
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
        {{HTMLElement("template")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
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

- Andere listebezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die speziell nützlich sein können, um das `<ol>`-Element zu stylen:
  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Darstellung der Ordinalzahlen zu wählen
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete `compact`-Attribut zu simulieren
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Einrückung der Liste zu kontrollieren
