---
title: "<li>: Das Listenpunkt-Element"
slug: Web/HTML/Element/li
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<li>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element in einer Liste darzustellen. Es muss in einem übergeordneten Element enthalten sein: einer geordneten Liste ({{HTMLElement("ol")}}), einer ungeordneten Liste ({{HTMLElement("ul")}}) oder einem Menü ({{HTMLElement("menu")}}). In Menüs und ungeordneten Listen werden Listenelemente üblicherweise mit Aufzählungspunkten dargestellt. In geordneten Listen werden sie normalerweise mit einem aufsteigenden Zähler links dargestellt, z.B. einer Nummer oder einem Buchstaben.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`
  - : Dieses ganzzahlige Attribut gibt den aktuellen Ordnungswert des Listenelements an, wie durch das {{HTMLElement("ol")}}-Element definiert. Der einzige erlaubte Wert für dieses Attribut ist eine Zahl, auch wenn die Liste mit römischen Ziffern oder Buchstaben angezeigt wird. Nachfolgende Listenelemente beginnen mit der im `value`-Attribut festgelegten Nummerierung weiterzuzählen. Das **value**-Attribut hat keine Bedeutung für ungeordnete Listen ({{HTMLElement("ul")}}) oder für Menüs ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : Dieses Zeichenattribut gibt den Nummerierungstyp an:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: römische Kleinbuchstaben
    - `I`: römische Großbuchstaben
    - `1`: Zahlen

    Dieser Typ überschreibt den im übergeordneten {{HTMLElement("ol")}}-Element verwendeten, falls vorhanden.

    > [!NOTE]
    > Dieses Attribut ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("list-style-type")}}.

## Beispiele

Für ausführlichere Beispiele siehe die Seiten {{htmlelement("ol")}} und {{htmlelement("ul")}}.

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
        Der End-Tag kann weggelassen werden, wenn das Listenelement unmittelbar von einem weiteren <code>&lt;li&gt;</code>-Element gefolgt wird oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}} oder {{HTMLElement("menu")}}-Element. Obwohl es nicht konform ist, kann auch das veraltete {{HTMLElement("dir")}} als Elternteil verwendet werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/listitem_role"
            >listitem</a
          ></code
        >
        als Kind eines
        <code><a href="/de/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/ul">ul</a></code> oder
        <code><a href="/de/docs/Web/HTML/Element/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
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

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} und das veraltete {{HTMLElement("dir")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<li>`-Element zu gestalten:

  - die {{cssxref("list-style")}}-Eigenschaft, um die Anzeige des Ordnungskennzeichens auszuwählen,
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu verwalten,
  - die {{cssxref("margin")}}-Eigenschaft, um den Einzug des Listenelements zu steuern.
