---
title: "<ol>: Das geordnete Listenelement"
slug: Web/HTML/Element/ol
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<ol>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine geordnete Liste von Elementen - typischerweise als nummerierte Liste dargestellt.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

## Attribute

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `reversed`
  - : Dieses boolesche Attribut gibt an, dass die Elemente der Liste in umgekehrter Reihenfolge sind. Elemente werden von hoch nach niedrig nummeriert.
- `start`
  - : Eine ganze Zahl, ab der für die Listenelemente gezählt wird. Immer eine arabische Ziffer (1, 2, 3, etc.), auch wenn der Nummerierungstyp Buchstaben oder römische Zahlen sind. Um beispielsweise mit der Nummerierung ab dem Buchstaben "d" oder der römischen Ziffer "iv" zu beginnen, verwenden Sie `start="4"`.
- `type`

  - : Legt den Nummerierungstyp fest:

    - `a` für Kleinbuchstaben
    - `A` für Großbuchstaben
    - `i` für römische Kleinbuchstaben
    - `I` für römische Großbuchstaben
    - `1` für Zahlen (Standard)

    Der angegebene Typ wird für die gesamte Liste verwendet, es sei denn, ein anderes [`type`](/de/docs/Web/HTML/Element/li#type)-Attribut wird auf einem eingeschlossenen {{HTMLElement("li")}}-Element verwendet.

    > [!NOTE]
    > Sofern der Typ der Listennummer nicht wichtig ist (wie in rechtlichen oder technischen Dokumenten, in denen Elemente durch ihre Nummer/Buchstabe referenziert werden), verwenden Sie die CSS-Eigenschaft {{CSSxRef("list-style-type")}}.

## Anwendungshinweise

Typischerweise werden geordnete Listenelemente mit einem vorangestellten [Marker](/de/docs/Web/CSS/::marker) angezeigt, wie einer Zahl oder einem Buchstaben.

Die `<ol>`- und {{HTMLElement("ul")}}- (oder das Synonym {{HTMLElement("menu")}}-) Elemente können beliebig tief geschachtelt werden, wobei zwischen `<ol>`, `<ul>` (oder `<menu>`) je nach Bedarf gewechselt wird.

Die `<ol>`- und {{HTMLElement("ul")}}-Elemente repräsentieren beide eine Liste von Elementen. Der Unterschied besteht darin, dass beim `<ol>`-Element die Reihenfolge bedeutsam ist. Zum Beispiel:

- Schritte in einem Rezept
- Schritt-für-Schritt-Anweisungen
- Die Liste der Zutaten in abnehmender Reihenfolge auf Nährwertkennzeichnungen

Um zu bestimmen, welche Liste zu verwenden ist, versuchen Sie, die Reihenfolge der Listenelemente zu ändern; wenn sich die Bedeutung ändert, verwenden Sie das `<ol>`-Element — andernfalls können Sie {{HTMLElement("ul")}} oder {{HTMLElement("menu")}} verwenden, wenn Ihre Liste ein Menü ist.

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

{{EmbedLiveSample("Simple_example", 400, 100)}}

### Verwendung des römischen Numerierungstyps

```html
<ol type="i">
  <li>Einleitung</li>
  <li>Liste der Beschwerden</li>
  <li>Fazit</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Verwendung des start-Attributs

```html
<p>Platzierungen der Teilnehmer, die nicht unter den Gewinnern sind:</p>

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
  <li>erstes Element</li>
  <li>
    zweites Element
    <!-- das schließende </li>-Tag ist nicht hier! -->
    <ol>
      <li>zweites Element erstes Unterelement</li>
      <li>zweites Element zweites Unterelement</li>
      <li>zweites Element drittes Unterelement</li>
    </ol>
  </li>
  <!-- Hier ist das schließende </li>-Tag -->
  <li>drittes Element</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Nesting_lists", 400, 150)}}

### Ungeordnete Liste innerhalb einer geordneten Liste

```html
<ol>
  <li>erstes Element</li>
  <li>
    zweites Element
    <!-- das schließende </li>-Tag ist nicht hier! -->
    <ul>
      <li>zweites Element erstes Unterelement</li>
      <li>zweites Element zweites Unterelement</li>
      <li>zweites Element drittes Unterelement</li>
    </ul>
  </li>
  <!-- Hier ist das schließende </li>-Tag -->
  <li>drittes Element</li>
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
        >, und wenn die Kinder des <code>&#x3C;ol></code>-Elements mindestens
        ein {{HTMLElement("li")}}-Element enthalten,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >spürbarer Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
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
            >Liste</a
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
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-Eigenschaften, die nützlich sein könnten, um das `<ol>`-Element zu stylen:

  - die {{CSSxRef("list-style")}}-Eigenschaft, um die Art der Darstellung des Ordnungszeichens auszuwählen
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe geschachtelte Listen zu handhaben
  - die {{CSSxRef("line-height")}}-Eigenschaft, um das veraltete `compact`-Attribut zu simulieren
  - die {{CSSxRef("margin")}}-Eigenschaft, um den Einzug der Liste zu steuern
