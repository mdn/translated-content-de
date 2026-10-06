---
title: HTML-Element `<ol>` für geordnete Listen
short-title: <ol>
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 51c7af056884cf4b990052e492c21cc8508eef5c
---

Das [HTML](/de/docs/Web/HTML)-Element **`<ol>`** stellt eine geordnete Liste von Einträgen dar – üblicherweise als nummerierte Liste.

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
  - : Dieses boolesche Attribut gibt an, dass die Liste kompakt dargestellt werden soll. Wie das Attribut interpretiert wird, hängt vom Browser ab. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Einen ähnlichen Effekt wie mit dem Attribut `compact` erzielen Sie mit der CSS-Eigenschaft {{cssxref("line-height")}} und dem Wert `80%`.
- `reversed`
  - : Dieses boolesche Attribut legt fest, dass die Listeneinträge in umgekehrter Reihenfolge nummeriert werden. Die Nummerierung verläuft von hoch nach niedrig.
- `start`
  - : Eine Ganzzahl, bei der die Zählung der Listeneinträge beginnt. Der Wert ist immer eine arabische Ziffer (1, 2, 3 usw.), auch wenn für den Nummerierungstyp `type` Buchstaben oder römische Zahlen verwendet werden. Um die Nummerierung beispielsweise mit dem Buchstaben „d“ oder der römischen Zahl „iv“ zu beginnen, verwenden Sie `start="4"`.
- `type`
  - : Legt den Nummerierungstyp fest:
    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für kleine römische Zahlen
    - `I` für große römische Zahlen
    - `1` für Zahlen (Standardwert)

    Der angegebene Typ gilt für die gesamte Liste, sofern für ein enthaltenes {{HTMLElement("li")}}-Element kein anderes Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/li#type) verwendet wird.

    > [!NOTE]
    > Sofern der Typ der Listennummerierung nicht von Bedeutung ist – etwa in juristischen oder technischen Dokumenten, in denen anhand von Nummern oder Buchstaben auf Einträge verwiesen wird –, verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Verwendungshinweise

Einträge geordneter Listen werden üblicherweise mit einem vorangestellten [Marker](/de/docs/Web/CSS/Reference/Selectors/::marker) dargestellt, beispielsweise einer Zahl oder einem Buchstaben.

Die Elemente `<ol>` und {{HTMLElement("ul")}} (oder dessen Synonym {{HTMLElement("menu")}}) können beliebig tief ineinander verschachtelt werden. Dabei können Sie nach Bedarf zwischen `<ol>`, `<ul>` und `<menu>` wechseln. Um eine Liste zu verschachteln, platzieren Sie sie innerhalb eines {{HTMLElement("li")}}-Elements der übergeordneten Liste. Ein Listenelement darf kein direktes Kindelement eines anderen `<ul>`- oder `<ol>`-Elements sein.

Sowohl `<ol>` als auch {{HTMLElement("ul")}} stellen Listen von Einträgen dar. Bei `<ol>` ist jedoch die Reihenfolge der Einträge von Bedeutung. Beispiele:

- Schritte in einem Rezept
- Schrittweise Wegbeschreibungen
- Eine Zutatenliste auf Nährwertkennzeichnungen, sortiert nach absteigendem Mengenanteil

Um zu entscheiden, welches Listenelement Sie verwenden sollten, ändern Sie probeweise die Reihenfolge der Einträge. Ändert sich dadurch die Bedeutung, verwenden Sie `<ol>`. Andernfalls können Sie {{HTMLElement("ul")}} verwenden – oder {{HTMLElement("menu")}}, wenn Ihre Liste ein Menü ist.

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

### Römische Zahlen als Nummerierungstyp verwenden

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Das Attribut `start` verwenden

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

### Listen verschachteln

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
          >Flussinhalt</a
        > und, wenn die Kindelemente des Elements <code>&#x3C;ol></code> mindestens
        ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{ HTMLElement("li") }}-,
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
          >Flussinhalt</a
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
      <td>[`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere HTML-Elemente für Listen: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die für die Gestaltung des `<ol>`-Elements besonders nützlich sein können:
  - die Eigenschaft {{CSSxRef("list-style")}}, um die Darstellung der Nummerierung festzulegen
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), um komplexe verschachtelte Listen zu verwalten
  - die Eigenschaft {{CSSxRef("line-height")}}, um das veraltete Attribut `compact` nachzubilden
  - die Eigenschaft {{CSSxRef("margin")}}, um die Einrückung der Liste festzulegen
