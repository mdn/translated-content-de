---
title: "<template>: Das Inhaltsvorlagenelement"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<template>`**-Element in [HTML](/de/docs/Web/HTML) dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow-DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`

  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow-Root")}} für das übergeordnete Element.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert dieselben {{Glossary("enumerated", "aufgezählten")}} Werte.

    - `open`

      - : Macht den internen Shadow-Root-DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt den internen Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen erlaubten Wert gesetzt ist.
    > Ist das Attribut nicht gesetzt oder auf einen nicht erlaubten Wert gesetzt — oder wenn ein `ShadowRoot` bereits deklarativ im selben Elternteil erstellt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht in einen Shadow-Root umgewandelt werden, zum Beispiel durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie können das nicht-standardmäßige `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde inzwischen entfernt und durch das Standard-Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, wird bei einem Klon des Shadow-Hosts (dem übergeordneten Element dieses `<template>`), das mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, ein Shadow-Root in die Kopie aufgenommen.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, kann der Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden.
    Der Wert ist standardmäßig `false`.

## Verwendungshinweise

Es gibt zwei Hauptarten, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface umfasst eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den vom Template repräsentierten DOM-Teilbaum enthält.
Dieses Fragment kann über die [`cloneNode`](/de/docs/Web/API/Node/cloneNode)-Methode geklont und in den DOM eingefügt werden.

Seien Sie vorsichtig beim Verwenden der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` ein unerwartetes Verhalten zeigen kann.
Für weitere Details siehe den [Abschnitt über das Vermeiden von DocumentFragment-Fallen](#vermeidung_von_documentfragment-fallen) unten.

### Deklaratives Shadow-DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, erzeugt der HTML-Parser sofort einen Shadow-DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verpackt ist und an das übergeordnete Element angehängt wird.
Dies ist das deklarative Äquivalent dazu, [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufzurufen, um einem Element einen Shadow-Root hinzuzufügen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das `shadowrootmode`-Attribut nicht vorhanden ist, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ähnlich gilt: Sind mehrere deklarative Shadow-Roots vorhanden, wird nur der erste ersetzt durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

## Beispiele

### Erzeugen von Tabellenzeilen

Zuerst starten wir mit dem HTML-Teil des Beispiels.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Zuerst haben wir eine Tabelle, in die wir später Inhalte mittels JavaScript-Code einfügen werden. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nun, da die Tabelle erstellt und das Template definiert ist, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile auf Basis des Templates konstruiert wird.

```js
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Clone the new row and insert it into the table
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
```

Das Ergebnis ist die ursprüngliche HTML-Tabelle, an die zwei neue Zeilen per JavaScript angehängt wurden:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow-DOM

In diesem Beispiel werden zuerst eine versteckte Supportwarnung im Markup eingefügt. Diese Warnung wird später per JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Danach gibt es zwei {{HTMLElement("article")}}-Elemente, die verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element gilt global für das gesamte Dokument. Das zweite ist auf den Shadow-Root begrenzt, der anstelle des `<template>`-Elements generiert wird, da das Attribut `shadowrootmode` vorhanden ist.

```html
<p hidden>
  ⛔ Your browser doesn't support <code>shadowrootmode</code> attribute yet.
</p>
<article>
  <style>
    p {
      padding: 8px;
      background-color: wheat;
    }
  </style>
  <p>I'm in the DOM.</p>
</article>
<article>
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>I'm in the shadow DOM.</p>
  </template>
</article>
```

```js
const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### Deklaratives Shadow-DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen Shadow-Root angewendet wird, der deklarativ erzeugt wird, und welcher Effekt dies auf den Fokus hat.

Der Code erklärt zuerst einen Shadow-Root innerhalb eines `<div>`-Elements, mit Hilfe des `<template>`-Elements mit dem Attribut `shadowrootmode`.
Dies zeigt sowohl ein nicht fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element.
Es verwendet auch CSS, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu stylen, und um das normale Styling des Host-Elements zu setzten.

```html
<div>
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Clickable Shadow DOM text</div>
    <input type="text" placeholder="Input inside Shadow DOM" />
  </template>
</div>
```

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, welches den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

```html
<div>
  <template shadowrootmode="open" shadowrootdelegatesfocus>
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Clickable Shadow DOM text</div>
    <input type="text" placeholder="Input inside Shadow DOM" />
  </template>
</div>
```

Zuletzt verwenden wir das folgende CSS, um einen roten Rahmen auf das übergeordnete `<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten dargestellt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Bei dem Shadow-Root, bei dem `shadowrootdelegatesfocus` nicht gesetzt ist, können Sie überall klicken außer auf das `<input>`, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Beim Shadow-Root mit gesetztem `shadowrootdelegatesfocus` wird durch Klicken auf den Text (das nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist.
Dies setzt auch den Fokus auf das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kind-Knoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuschließen, anstatt an das `DocumentFragment` selbst.

Betrachten Sie das folgende HTML und JavaScript:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Ergebnis

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur dessen Kinder dem `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler dem ersten _Kind-Knoten_ von `secondClone` hinzugefügt wurde, der Ereignishandler beim Aufruf von `appendChild` kopiert und durch Klicken darauf funktioniert er wie erwartet.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine Einschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>nicht</em> das
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interface
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklarativer Shadow-DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Verwendung von Shadow-DOM_
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
