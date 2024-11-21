---
title: "<ol>: Das Ordered List-Element"
slug: Web/HTML/Element/ol
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<ol>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine geordnete Liste von Elementen — üblicherweise als nummerierte Liste dargestellt.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

## Attribute

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `reversed`
  - : Dieses Boolean-Attribut gibt an, dass die Elemente der Liste in umgekehrter Reihenfolge sind. Elemente werden von hoch nach niedrig nummeriert.
- `start`
  - : Eine ganze Zahl, die angibt, ab welcher Zahl die Zählung der Listenelemente beginnen soll. Immer eine arabische Zahl (1, 2, 3, etc.), auch wenn der Nummerierungstyp Buchstaben oder römische Ziffern ist. Um beispielsweise die Nummerierung von dem Buchstaben "d" oder der römischen Ziffer "iv" zu beginnen, verwenden Sie `start="4"`.
- `type`

  - : Legt den Nummerierungstyp fest:

    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für kleine römische Ziffern
    - `I` für große römische Ziffern
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, ein anderes [`type`](/de/docs/Web/HTML/Element/li#type) Attribut wird auf einem eingeschlossenen {{HTMLElement("li")}} Element verwendet.

    > [!NOTE]
    > Sofern der Typ der Listennummer nicht entscheidend ist (wie bei juristischen oder technischen Dokumenten, in denen Elemente nach ihrer Nummer/Buchstabe referenziert werden), verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Nutzungshinweise

Typischerweise werden geordnete Listenelemente mit einem vorangehenden [Marker](/de/docs/Web/CSS/::marker) angezeigt, wie einer Nummer oder einem Buchstaben.

Die `<ol>` und {{HTMLElement("ul")}} (oder das Synonym {{HTMLElement("menu")}}) Elemente können so tief verschachtelt werden, wie gewünscht, wobei `<ol>`, `<ul>` (oder `<menu>`) nach Bedarf abwechseln.

Die `<ol>` und {{HTMLElement("ul")}} Elemente repräsentieren beide eine Liste von Elementen. Der Unterschied ist, dass beim `<ol>` Element die Reihenfolge bedeutungsvoll ist. Zum Beispiel:

- Schritte in einem Rezept
- Wegbeschreibung
- Die Liste der Zutaten in abnehmender Menge auf den Nährwertangaben

Um zu bestimmen, welche Liste verwendet werden soll, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>` Element — andernfalls können Sie {{HTMLElement("ul")}} oder {{HTMLElement("menu")}} verwenden, wenn Ihre Liste ein Menü ist.

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

### Verwendung des römischen Zahlentyps

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, und wenn die Kinder des <code>&#x3C;ol></code> Elements mindestens
        ein {{HTMLElement("li")}} Element einschließen,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<ol>` Element zu stylen:

  - die {{CSSxRef("list-style")}} Eigenschaft, um die Darstellung der Nummerierung festzulegen
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben
  - die {{CSSxRef("line-height")}} Eigenschaft, um das veraltete `compact` Attribut zu simulieren
  - die {{CSSxRef("margin")}} Eigenschaft, um die Einrückung der Liste zu steuern
