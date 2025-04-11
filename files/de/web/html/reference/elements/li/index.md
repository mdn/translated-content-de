---
title: "<li>: Das Listenelement"
slug: Web/HTML/Reference/Elements/li
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<li>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen Eintrag in einer Liste darzustellen. Es muss in einem Elternelement enthalten sein: einer geordneten Liste ({{HTMLElement("ol")}}), einer ungeordneten Liste ({{HTMLElement("ul")}}) oder einem Menü ({{HTMLElement("menu")}}). In Menüs und ungeordneten Listen werden Listenelemente gewöhnlich mit Aufzählungszeichen angezeigt. In geordneten Listen werden sie normalerweise mit einem aufsteigenden Zähler auf der linken Seite dargestellt, wie einer Zahl oder einem Buchstaben.

{{InteractiveExample("HTML Demo: &lt;li&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Apollo astronauts:</p>

<ul>
  <li>Neil Armstrong</li>
  <li>Alan Bean</li>
  <li>Peter Conrad</li>
  <li>Edgar Mitchell</li>
  <li>Alan Shepard</li>
</ul>
```

```css interactive-example
p,
li {
  font:
    1rem "Fira Sans",
    sans-serif;
}

p {
  font-weight: bold;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Dieses ganzzahlige Attribut gibt den aktuellen Ordnungswert des Listenelements an, wie er durch das {{HTMLElement("ol")}}-Element definiert ist. Der einzige erlaubte Wert für dieses Attribut ist eine Zahl, auch wenn die Liste mit römischen Ziffern oder Buchstaben angezeigt wird. Listenelemente, die diesem folgen, setzen die Nummerierung ab dem festgelegten Wert fort. Dieses Attribut hat keine Bedeutung für ungeordnete Listen ({{HTMLElement("ul")}}) oder für Menüs ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}}

  - : Dieses Zeichenattribut gibt den Nummerierungstyp an:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: Kleine römische Ziffern
    - `I`: Große römische Ziffern
    - `1`: Zahlen

    Dieser Typ überschreibt den des übergeordneten {{HTMLElement("ol")}}-Elements, falls vorhanden.

    > [!NOTE]
    > Dieses Attribut wurde veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("list-style-type")}}.

## Beispiele

Für detailliertere Beispiele siehe die Seiten von {{htmlelement("ol")}} und {{htmlelement("ul")}}.

### Geordnete Liste

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Ordered_list")}}

### Geordnete Liste mit einem benutzerdefinierten Wert

```html
<ol type="I">
  <li value="3">third item</li>
  <li>fourth item</li>
  <li>fifth item</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Ordered_list_with_a_custom_value")}}

### Ungeordnete Liste

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Unordered_list")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Listenelement unmittelbar von einem anderen <code>&lt;li&gt;</code>-Element gefolgt wird oder wenn es keine weiteren Inhalte in seinem Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}} oder
        {{HTMLElement("menu")}}-Element. Obwohl nicht eine konforme Nutzung,
        kann das veraltete {{HTMLElement("dir")}} ebenfalls ein Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
        als Kind von
        <code><a href="/de/docs/Web/HTML/Reference/Elements/ol">ol</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/ul">ul</a></code> oder
        <code><a href="/de/docs/Web/HTML/Reference/Elements/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLLIElement`](/de/docs/Web/API/HTMLLIElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Listen-bezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}}, und das veraltete {{HTMLElement("dir")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<li>`-Element zu stylen:

  - die {{cssxref("list-style")}}-Eigenschaft, um die Anzeige des Ordnungszeichens zu wählen,
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu verarbeiten,
  - die {{cssxref("margin")}}-Eigenschaft, um den Einzug des Listenelements zu steuern.
