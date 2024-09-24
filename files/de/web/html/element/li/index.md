---
title: "<li>: Das Listenelement"
slug: Web/HTML/Element/li
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<li>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element in einer Liste darzustellen. Es muss in einem Elternelement enthalten sein: einer geordneten Liste ({{HTMLElement("ol")}}), einer ungeordneten Liste ({{HTMLElement("ul")}}) oder einem Menü ({{HTMLElement("menu")}}). In Menüs und ungeordneten Listen werden Listenelemente normalerweise mit Aufzählungszeichen angezeigt. In geordneten Listen werden sie in der Regel mit einem aufsteigenden Zähler auf der linken Seite angezeigt, wie beispielsweise einer Zahl oder einem Buchstaben.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`
  - : Dieses ganzzahlige Attribut gibt den aktuellen Ordnungswert des Listenelements an, wie durch das {{HTMLElement("ol")}} Element definiert. Der einzige zulässige Wert für dieses Attribut ist eine Zahl, auch wenn die Liste mit römischen Ziffern oder Buchstaben angezeigt wird. Listenelemente, die diesem folgen, setzen die Nummerierung von dem gesetzten Wert fort. Das **value** Attribut hat keine Bedeutung für ungeordnete Listen ({{HTMLElement("ul")}}) oder für Menüs ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : Dieses Zeichenattribut gibt den Nummerierungstyp an:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: römische Kleinbuchstaben
    - `I`: römische Großbuchstaben
    - `1`: Zahlen

    Dieser Typ überschreibt den von seinem Elternelement {{HTMLElement("ol")}} verwendeten Typ, falls vorhanden.

    > [!NOTE]
    > Dieses Attribut wurde veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("list-style-type")}}.

## Beispiele

Für detailliertere Beispiele siehe die Seiten zu {{htmlelement("ol")}} und {{htmlelement("ul")}}.

### Geordnete Liste

```html
<ol>
  <li>erstes Element</li>
  <li>zweites Element</li>
  <li>drittes Element</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Ordered_list")}}

### Geordnete Liste mit einem benutzerdefinierten Wert

```html
<ol type="I">
  <li value="3">drittes Element</li>
  <li>viertes Element</li>
  <li>fünftes Element</li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Ordered_list_with_a_custom_value")}}

### Ungeordnete Liste

```html
<ul>
  <li>erstes Element</li>
  <li>zweites Element</li>
  <li>drittes Element</li>
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
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Listenelement unmittelbar
        von einem anderen <code>&lt;li&gt;</code> Element gefolgt wird oder
        wenn sich im Elternelement kein weiterer Inhalt befindet.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, oder
        {{HTMLElement("menu")}} Element. Obwohl es keine konforme Nutzung ist,
        kann auch das veraltete {{HTMLElement("dir")}} ein Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/listitem_role"
            >listitem</a
          ></code
        >
        wenn es ein Kind von
        <code><a href="/de/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/ul">ul</a></code> oder
        <code><a href="/de/docs/Web/HTML/Element/menu">menu</a></code> ist
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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
      <th scope="row">DOM Schnittstelle</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere HTML-Elemente im Zusammenhang mit Listen: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}}, und das veraltete {{HTMLElement("dir")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<li>` Element zu stylen:

  - die {{cssxref("list-style")}} Eigenschaft, um die Anzeige der Ordnungsnummer zu wählen,
  - [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), um komplexe verschachtelte Listen zu handhaben,
  - die {{cssxref("margin")}} Eigenschaft, um den Einzug des Listenelements zu steuern.
