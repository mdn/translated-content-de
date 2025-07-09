---
title: "<template>: Das Inhalts-Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zur Speicherung von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in einem Shadow-DOM erzeugt werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "shadow root")}} für das Elternelement.
    Es handelt sich um eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert dieselben {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Macht das interne Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen zulässigen Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist oder auf einen unzulässigen Wert gesetzt ist — oder wenn bereits ein `ShadowRoot` im selben Elternknoten deklarativ erstellt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsing nicht in ein Shadow Root umgewandelt werden, zum Beispiel durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie können das nicht standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde mittlerweile entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (des Elternelements dieses `<template>`) mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt, der ein Shadow Root in der Kopie enthält.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht-fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann das Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt, serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Verwendungshinweise

Es gibt zwei Hauptwege, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes content/markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum repräsentiert, der durch das Template dargestellt wird.
Dieses Fragment kann über die Methode [`cloneNode`](/de/docs/Web/API/Node/cloneNode) geklont und in das DOM eingefügt werden.

Vorsicht bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann.
Für weitere Details siehe den Abschnitt [Vermeidung von DocumentFragment-Fallstricken](#vermeidung_von_documentfragment-fallstricken) unten.

### Deklarativer Shadow-DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, erzeugt der HTML-Parser sofort einen Shadow-DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen ist, das an das Elternelement angehängt wird.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zur Anfügung eines Shadow-Roots an ein Element.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht vorhanden ist, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso wird, wenn es mehrere deklarative Shadow-Roots gibt, nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

## Beispiele

### Generieren von Tabellenzeilen

Zuerst beginnen wir mit dem HTML-Teil des Beispiels.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile anhand des Templates konstruiert wird.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der zwei neue Zeilen über JavaScript hinzugefügt wurden:

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

In diesem Beispiel ist eine versteckte Support-Warnung am Anfang des Markups enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als Nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element gilt global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das anstelle des `<template>`-Elements aufgrund des `shadowrootmode`-Attributs generiert wird.

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
const isShadowRootModeSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootMode",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### Deklarativer Shadow-DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf ein Shadow Root angewendet wird, das deklarativ erstellt wird, und welchen Effekt dies auf den Fokus hat.

Der Code deklariert zuerst ein Shadow Root innerhalb eines `<div>`-Elements unter Verwendung des `<template>`-Elements mit dem `shadowrootmode`-Attribut.
Dies zeigt sowohl ein nicht-fokussierbares `<div>`, das Text enthält, als auch ein fokussierbares `<input>`-Element an.
Es verwendet auch CSS, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu färben und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass das Attribut `shadowrootdelegatesfocus` gesetzt wird, das den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um dem übergeordneten `<div>`-Element einen roten Rand zu verleihen, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten dargestellt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow Root, bei dem `shadowrootdelegatesfocus` nicht gesetzt ist, können Sie überall außer auf dem `<input>` klicken, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot of code with no focus set](template_with_no_focus.png)

Für das Shadow Root, bei dem `shadowrootdelegatesfocus` gesetzt ist, bewirkt ein Klick auf den Text (der nicht fokussierbar ist) das Auswählen des `<input>`-Elements, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot of the code where the element has focus](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallstricken

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Child-Nodes_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden nur seine Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler dem ersten _Child-Node_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierter Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements">script-unterstützende Elemente</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a> oder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements">script-unterstützende Elemente</a> akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
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
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Eingrenzung](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Deklarativer Shadow-DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
