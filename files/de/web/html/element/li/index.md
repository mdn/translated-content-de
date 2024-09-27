---
title: "<li>: Das Listenelement"
slug: Web/HTML/Element/li
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<li>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen Eintrag in einer Liste darzustellen. Es muss in einem übergeordneten Element enthalten sein: einer geordneten Liste ({{HTMLElement("ol")}}), einer ungeordneten Liste ({{HTMLElement("ul")}}) oder einem Menü ({{HTMLElement("menu")}}). In Menüs und ungeordneten Listen werden Listenelemente üblicherweise mit Aufzählungszeichen angezeigt. In geordneten Listen werden sie normalerweise mit einem aufsteigenden Zähler auf der linken Seite angezeigt, wie z.B. einer Zahl oder einem Buchstaben.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`
  - : Dieses ganzzahlige Attribut gibt den aktuellen Ordnungswert des Listenelements an, wie er durch das {{HTMLElement("ol")}}-Element definiert ist. Der einzige erlaubte Wert für dieses Attribut ist eine Zahl, auch wenn die Liste mit römischen Zahlen oder Buchstaben angezeigt wird. Listenelemente, die auf dieses folgen, setzen die Nummerierung von dem festgelegten Wert fort. Das **value**-Attribut hat keine Bedeutung für ungeordnete Listen ({{HTMLElement("ul")}}) oder für Menüs ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : Dieses Zeichenattribut gibt den Nummerierungstyp an:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: Römische Ziffern in Kleinbuchstaben
    - `I`: Römische Ziffern in Großbuchstaben
    - `1`: Zahlen

    Dieser Typ überschreibt, falls vorhanden, den vom übergeordneten {{HTMLElement("ol")}}-Element verwendeten Typ.

    > [!NOTE]
    > Dieses Attribut wurde veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("list-style-type")}}.

## Beispiele

Für detailliertere Beispiele siehe die Seiten {{htmlelement("ol")}} und {{htmlelement("ul")}}.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Listenelement unmittelbar von einem anderen <code>&lt;li&gt;</code>-Element gefolgt wird, oder wenn es im übergeordneten Element keinen weiteren Inhalt gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, oder {{HTMLElement("menu")}}-Element. Obwohl es keine konforme Verwendung ist, kann das veraltete {{HTMLElement("dir")}} auch ein Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}}, und das veraltete {{HTMLElement("dir")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<li>`-Element zu stylen:

  - die {{cssxref("list-style")}} Eigenschaft, um die Anzeigeweise der Ordnung auszuwählen,
  - [CSS Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben,
  - die {{cssxref("margin")}} Eigenschaft, um den Einzug des Listenelements zu steuern.
