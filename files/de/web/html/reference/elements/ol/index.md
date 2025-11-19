---
title: "<ol>: Das geordnete Listenelement"
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<ol>`**-[HTML](/de/docs/Web/HTML)-Element steht für eine geordnete Liste von Elementen, die typischerweise als nummerierte Liste gerendert wird.

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
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs ist browserspezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.
- `reversed`
  - : Dieses boolesche Attribut gibt an, dass die Listenelemente in umgekehrter Reihenfolge vorliegen. Die Elemente werden von hoch zu niedrig nummeriert.
- `start`
  - : Eine ganze Zahl, ab der die Listenelemente gezählt werden sollen. Immer eine arabische Zahl (1, 2, 3, etc.), auch wenn der Nummerierungstyp Buchstaben oder römische Zahlen sind. Zum Beispiel, um nummerierte Elemente von dem Buchstaben "d" oder der römischen Zahl "iv" zu starten, verwenden Sie `start="4"`.
- `type`
  - : Legt den Nummerierungstyp fest:
    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für kleine römische Zahlen
    - `I` für große römische Zahlen
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, es wird ein anderes [`type`](/de/docs/Web/HTML/Reference/Elements/li#type)-Attribut auf einem eingeschlossenen {{HTMLElement("li")}} Element verwendet.

    > [!NOTE]
    > Sofern der Typ der Listennummer wichtig ist (wie in rechtlichen oder technischen Dokumenten, in denen Elemente nach ihrer Nummer/Buchstabe referenziert werden), verwenden Sie die CSS-Eigenschaft {{CSSxRef("list-style-type")}} stattdessen.

## Nutzungshinweise

Typischerweise werden geordnete Listenelemente mit einem vorangestellten [Markierungssymbol](/de/docs/Web/CSS/Reference/Selectors/::marker), wie einer Zahl oder einem Buchstaben, angezeigt.

Die Elemente `<ol>` und {{HTMLElement("ul")}} (oder das Synonym {{HTMLElement("menu")}}) können beliebig tief verschachtelt werden, indem sie zwischen `<ol>`, `<ul>` (oder `<menu>`) nach Bedarf wechseln.

Die Elemente `<ol>` und {{HTMLElement("ul")}} stellen beide eine Liste von Elementen dar. Der Unterschied besteht darin, dass bei dem `<ol>`-Element die Reihenfolge wichtig ist. Zum Beispiel:

- Schritte in einem Rezept
- Schritt-für-Schritt-Anweisungen
- Die Zutatenliste in abnehmender Proportion auf Nährwertinformationstabellen

Um zu bestimmen, welche Liste zu verwenden ist, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>`-Element – andernfalls können Sie {{HTMLElement("ul")}} verwenden, oder {{HTMLElement("menu")}}, wenn Ihre Liste ein Menü ist.

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

### Verwenden des römischen Zifferntyps

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Verwenden des Start-Attributs

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

### Ungeordnete Liste innerhalb einer geordneten Liste

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
          >Fließinhalte</a
        >, und wenn die Kinder des <code>&#x3C;ol></code>-Elements mindestens
        ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >spürbare Inhalte</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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

- Andere Listen-bezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ol>`-Element zu stylen:
  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Anzeige der Ordnungsnummer zu wählen
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), um komplexe verschachtelte Listen zu behandeln
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete `compact`-Attribut zu simulieren
  - die {{CSSxRef("margin")}}-Eigenschaft, um die Einrückung der Liste zu steuern
