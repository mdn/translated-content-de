---
title: "<menu>: Das Menu-Element"
slug: Web/HTML/Reference/Elements/menu
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<menu>`** [HTML](/de/docs/Web/HTML)-Element wird in der HTML-Spezifikation als semantische Alternative zu {{HTMLElement("ul")}} beschrieben, jedoch von Browsern (und im Zugänglichkeitsbaum) nicht anders als {{HTMLElement("ul")}} behandelt. Es repräsentiert eine ungeordnete Liste von Elementen (die durch {{HTMLElement("li")}}-Elemente dargestellt werden).

{{InteractiveExample("HTML Demo: &lt;menu&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="news">
  <a href="#">NASA’s Webb Delivers Deepest Infrared Image of Universe Yet</a>
  <menu>
    <li><button id="save">Save for later</button></li>
    <li><button id="share">Share this news</button></li>
  </menu>
</div>
```

```css interactive-example
.news {
  background-color: bisque;
  padding: 1em;
  border: solid thin black;
}

menu {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
  gap: 1em;
}
```

## Attribute

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs ist browserspezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Um einen ähnlichen Effekt wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.

## Nutzungshinweise

Die `<menu>`- und {{HTMLElement("ul")}}-Elemente repräsentieren beide eine ungeordnete Liste von Elementen. Der wesentliche Unterschied besteht darin, dass {{HTMLElement("ul")}} hauptsächlich Elemente zur Anzeige enthält, während `<menu>` eine Werkzeugleiste mit Befehlen darstellt, die der Benutzer ausführen oder aktivieren kann.

> [!NOTE]
> In frühen Versionen der HTML-Spezifikation hatte das `<menu>`-Element einen zusätzlichen Anwendungsfall als Kontextmenü. Diese Funktionalität wird als obsolet betrachtet und befindet sich nicht mehr in der Spezifikation.

## Beispiele

### Werkzeugleiste

In diesem Beispiel wird ein `<menu>` verwendet, um eine Werkzeugleiste für eine Bearbeitungsanwendung zu erstellen.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```

Beachten Sie, dass dies funktional nicht anders ist als:

```html
<ul>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Ergebnis

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <p>
          <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>. Wenn die Kinder des Elements mindestens ein {{HTMLElement("li")}}-Element enthalten:
          <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">greifbarer Inhalt</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Null oder mehr Vorkommen von {{HTMLElement("li")}}, {{HTMLElement("script")}} und {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role">list</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role">listbox</a></code>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLMenuElement`](/de/docs/Web/API/HTMLMenuElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere HTML-Elemente im Zusammenhang mit Listen: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, und {{HTMLElement("li")}}.
