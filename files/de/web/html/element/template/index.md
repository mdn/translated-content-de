---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zur Speicherung von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `shadowrootmode`

  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "aufgezählten")}} Werte.

    - `open`

      - : Macht den internen Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt den internen Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist oder nicht auf einen erlaubten Wert gesetzt ist – oder wenn ein `ShadowRoot` bereits deklarativ im selben Elternelement erstellt wurde – wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach der Analyse nicht nachträglich in einen Shadow Root umgewandelt werden, zum Beispiel durch das Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht-standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde mittlerweile entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, beinhaltet eine Kopie des Shadow Hosts (das Elternelement dieses `<template>`), die mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, einen Shadow Root in der Kopie.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn dies gesetzt ist und ein nicht fokusierbares Element im Shadow Tree ausgewählt wird, wird der Fokus an das erste fokusierbare Element im Tree delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, kann der Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Nutzungshinweise

Es gibt zwei Hauptmöglichkeiten, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Die entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein äquivalentes Content-/Markupattribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den durch die Vorlage dargestellten DOM-Unterbaum enthält.
Dieses Fragment kann über die [`cloneNode`](/de/docs/Web/API/Node/cloneNode)-Methode geklont und in den DOM eingefügt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` ein unerwartetes Verhalten zeigen kann.
Für weitere Details siehe den Abschnitt [Vermeidung von DocumentFragment-Fallen](#vermeidung_von_documentfragment-fallen) unten.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, generiert der HTML-Parser sofort einen Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingewickelt ist und an das Elternelement angehängt wird.
Dies ist das deklarative Pendant zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einen Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht das Attribut `shadowrootmode` enthält, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ähnlich wird bei mehreren deklarativen Shadow Roots nur der erste durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt – nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte analysiert.

## Beispiele

### Erzeugung von Tabellenzeilen

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mithilfe von JavaScript-Code einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Jetzt, da die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mit dem Template als Grundlage erstellt wird.

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

In diesem Beispiel wird zu Beginn des Markups eine versteckte Warnung eingefügt. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als Nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der aufgrund des `shadowrootmode`-Attributs anstelle des `<template>`-Elements generiert wird.

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

### Deklarativer Shadow DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow Root angewendet wird und welchen Effekt dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root in einem `<div>`-Element unter Verwendung des `<template>`-Elements mit dem Attribut `shadowrootmode`.
Dies zeigt sowohl ein nicht fokusierbares `<div>`, das Text enthält, als auch ein fokusierbares `<input>`-Element.
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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, was den Fokus auf das erste fokusierbare Element im Baum delegiert, wenn ein nicht fokusierbares Element im Baum ausgewählt wird.

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

Als Letztes verwenden wir das folgende CSS, um ein grün-gelbes Border auf das übergeordnete `<div>`-Element anzuwenden, wenn es im Fokus steht.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt.
Wenn das HTML zum ersten Mal gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für den Shadow Root, der nicht auf `shadowrootdelegatesfocus` gesetzt ist, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie das zweite Bild).

![Screenshot des Codes ohne gesetztem Fokus](template_with_no_focus.png)

Für den Shadow Root mit `shadowrootdelegatesfocus` auf `set`, bewirkt das Klicken auf den Text (der nicht fokusierbar ist) die Auswahl des `<input>`-Elements, da dies das erste fokusierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element fokussiert ist](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kind-Knoten_ dieses Wertes in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden bei `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, da ein Ereignishandler dem ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler bei `appendChild` kopiert, und ein Klick darauf funktioniert wie erwartet.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

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
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >skriptunterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine Einschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        >akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das kein
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>-Attribut hat.
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

- [`part`](/de/docs/Web/HTML/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [Modul für CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
