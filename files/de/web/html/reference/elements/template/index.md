---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Speichern von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow-DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`

  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow-Root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.

    - `open`

      - : Macht den internen Shadow-Root-DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt den internen Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, wenn dieses Attribut auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt oder nicht auf einen erlaubten Wert gesetzt ist — oder wenn bereits ein `ShadowRoot` deklarativ im selben Elternteil erstellt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht nachträglich in einen Shadow-Root umgewandelt werden, z.B. durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > In älteren Tutorials und Beispielen, die einst in Chrome 90-110 unterstützt wurden, finden Sie möglicherweise das nicht-standardisierte `shadowroot`-Attribut. Dieses Attribut wurde entfernt und durch das standardmäßige `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (dem Elternelement dieses `<template>`), erstellt mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode), ein Shadow-Root in die Kopie einfügen.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Falls gesetzt und ein nicht-fokussierbares Element im Shadow-Tree ausgewählt ist, wird der Fokus an das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann der Shadow-Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Hinweise zur Nutzung

Es gibt zwei Hauptwege, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und hält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der durch das Template dargestellt wird.
Dieses Fragment kann über die Methode [`cloneNode`](/de/docs/Web/API/Node/cloneNode) geklont und in den DOM eingesetzt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann.
Weitere Details finden Sie im Abschnitt [Vermeidung von DocumentFragment-Fallen](#vermeidung_von_documentfragment-fallen) unten.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, wird der Shadow-DOM sofort durch den HTML-Parser generiert. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gewickelt ist und an das Elternelement angehängt wird.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow-Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso gilt, wenn mehrere deklarative Shadow-Roots vorhanden sind, wird nur der erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

## Beispiele

### Generierung von Tabellenzeilen

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, mit zwei neuen Zeilen, die über JavaScript hinzugefügt wurden:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel ist eine versteckte Support-Warnung zu Beginn des Markups enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Danach gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow-Root beschränkt, der anstelle des `<template>`-Elements aufgrund des Vorhandenseins des `shadowrootmode`-Attributs generiert wird.

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

### Deklaratives Shadow DOM mit delegiertem Fokus

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow-Root angewendet wird und welchen Einfluss dies auf den Fokus hat.

Der Code erklärt zuerst einen Shadow-Root innerhalb eines `<div>`-Elements, indem das `<template>`-Element mit dem Attribut `shadowrootmode` verwendet wird.
Dies zeigt sowohl ein nicht-fokussierbares `<div>`-Element, das Text enthält, als auch ein fokussierbares `<input>`-Element.
Es wird auch CSS verwendet, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu gestalten und die normale Gestaltung des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, das den Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um dem Elternelement `<div>` einen roten Rahmen zu geben, wenn es im Fokus ist.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente keine Stilierung, wie im ersten Bild gezeigt.
Für den Shadow-Root, der nicht `shadowrootdelegatesfocus` gesetzt hat, können Sie überall außer auf das `<input>`-Element klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es wie im zweiten Bild aus).

![Screenshot of code with no focus set](template_with_no_focus.png)

Für den Shadow-Root mit gesetztem `shadowrootdelegatesfocus`, wird durch Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das Elternelement wie unten gezeigt.

![Screenshot of the code where the element has focus](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es üblicher vorzuziehen, Ereignishandler an die Kinder von einem `DocumentFragment` anzuhängen, statt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden nur dessen Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zu dem ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

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
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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
      <th scope="row">Tag-Ommission</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Auch als Kind eines {{HTMLElement("colgroup")}}-Elements erlaubt, das kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, and {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklarativer Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
