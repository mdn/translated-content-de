---
title: "<li>: Das Listenelement"
slug: Web/HTML/Element/li
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<li>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element in einer Liste darzustellen. Es muss in einem übergeordneten Element enthalten sein: einer geordneten Liste ({{HTMLElement("ol")}}), einer ungeordneten Liste ({{HTMLElement("ul")}}), oder einem Menü ({{HTMLElement("menu")}}). In Menüs und ungeordneten Listen werden Listenelemente normalerweise mit Aufzählungszeichen angezeigt. In geordneten Listen werden sie in der Regel mit einem aufsteigenden Zähler auf der linken Seite angezeigt, wie zum Beispiel einer Zahl oder einem Buchstaben.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`
  - : Dieses Integer-Attribut gibt den aktuellen Ordnungswert des Listenelements an, wie er durch das {{HTMLElement("ol")}}-Element definiert ist. Der einzige erlaubte Wert für dieses Attribut ist eine Zahl, auch wenn die Liste mit römischen Ziffern oder Buchstaben angezeigt wird. Folgende Listenelemente nummerieren ab dem eingestellten Wert weiter. Dieses Attribut hat keine Bedeutung für ungeordnete Listen ({{HTMLElement("ul")}}) oder für Menüs ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}}

  - : Dieses Zeichen-Attribut zeigt den Nummerierungstyp an:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: Römische Kleinbuchstaben
    - `I`: Römische Großbuchstaben
    - `1`: Zahlen

    Dieser Typ überschreibt den im übergeordneten {{HTMLElement("ol")}}-Element verwendeten, falls vorhanden.

    > [!NOTE]
    > Dieses Attribut ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("list-style-type")}}.

## Beispiele

Für detailliertere Beispiele sehen Sie die Seiten zu {{htmlelement("ol")}} und {{htmlelement("ul")}}.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der End-Tag kann weggelassen werden, wenn das Listenelement unmittelbar von einem anderen <code>&lt;li&gt;</code>-Element gefolgt wird, oder wenn kein Inhalt mehr im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, oder
        {{HTMLElement("menu")}}-Element. Obwohl nicht konform, kann das veraltete {{HTMLElement("dir")}} auch ein Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
        als Kind von
        <code><a href="/de/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/ul">ul</a></code> oder
        <code><a href="/de/docs/Web/HTML/Element/menu">menu</a></code>
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
- CSS-Eigenschaften, die besonders nützlich sind, um das `<li>`-Element zu gestalten:

  - die {{cssxref("list-style")}}-Eigenschaft, um die Anzeige der Ordnungszeichen zu ändern,
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben,
  - die {{cssxref("margin")}}-Eigenschaft, um den Einzug des Listenelements zu steuern.
