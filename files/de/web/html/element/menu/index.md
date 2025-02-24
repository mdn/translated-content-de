---
title: "<menu>: Das Menü-Element"
slug: Web/HTML/Element/menu
l10n:
  sourceCommit: d6094dd7e70de3d1711b3bbef2dd5e5dd93114f3
---

{{HTMLSidebar}}

Das **`<menu>`**-[HTML](/de/docs/Web/HTML)-Element wird in der HTML-Spezifikation als eine semantische Alternative zu {{HTMLElement("ul")}} beschrieben, wird jedoch von Browsern (und durch den Accessibility-Tree) nicht anders als {{HTMLElement("ul")}} behandelt. Es repräsentiert eine ungeordnete Liste von Elementen (die durch {{HTMLElement("li")}}-Elemente dargestellt werden).

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Die `<menu>`- und {{HTMLElement("ul")}}-Elemente repräsentieren beide eine ungeordnete Liste von Elementen. Der Hauptunterschied besteht darin, dass {{HTMLElement("ul")}} hauptsächlich Elemente zur Anzeige enthält, während `<menu>` eine Symbolleiste darstellt, die Befehle enthält, die der Benutzer ausführen oder aktivieren kann.

> [!NOTE]
> In frühen Versionen der HTML-Spezifikation hatte das `<menu>`-Element einen zusätzlichen Anwendungsfall als Kontextmenü. Diese Funktionalität gilt als veraltet und ist nicht in der Spezifikation enthalten.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <p>
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Fließender Inhalt</a
          >. Wenn die Kind-Elemente des Elements mindestens ein
          {{HTMLElement("li")}}-Element enthalten:
          <a
            href="/de/docs/Web/HTML/Content_categories#palpable_content"
            >Fühlbarer Inhalt</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Null oder mehr Vorkommen von {{HTMLElement("li")}},
          {{HTMLElement("script")}}, und
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließende Inhalte</a> akzeptiert.
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
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, <a href="/de/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
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

- Andere HTML-Elemente in Bezug auf Listen: {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}.
