---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{HTMLSidebar}}

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zur Aufnahme von [HTML](/de/docs/Glossary/HTML)-Fragmenten, die entweder später über JavaScript verwendet oder sofort in Shadow DOM generiert werden können.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `shadowrootmode`

  - : Erstellt einen [Shadow-Root](/de/docs/Glossary/Shadow_tree) für das übergeordnete Element.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen [aufgezählten](/de/docs/Glossary/enumerated) Werte.

    - `open`

      - : Gibt das interne Shadow-Root-DOM für JavaScript frei (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Versteckt das interne Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, wenn es auf einen zulässigen Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, nicht auf einen zulässigen Wert gesetzt ist — oder wenn bereits ein `ShadowRoot` deklarativ im gleichen Elternknoten erstellt wurde — wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nicht nach dem Parsen in einen Shadow-Root geändert werden, zum Beispiel durch das Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie finden möglicherweise das nicht-standardmäßige `shadowroot`-Attribut in älteren Tutorials und Beispielen, das in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardmäßige `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellter Klon des Shadow-Hosts (des Eltern des `<template>`) ein Shadow-Root in die Kopie einfügen.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum übertragen.
    Der Standardwert ist `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann das Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden.
    Der Standardwert ist `false`.

## Verwendungshinweise

Es gibt zwei Hauptmethoden zur Verwendung des `<template>`-Elements.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes content/markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Unterbaum enthält, der durch das Template dargestellt wird.
Dieses Fragment kann über die Methode [`cloneNode`](/de/docs/Web/API/Node/cloneNode) geklont und in den DOM eingefügt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann.
Für weitere Details siehe den Abschnitt [Vermeidung von DocumentFragment-Stolperfallen](#vermeidung_von_documentfragment-stolperfallen) unten.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, generiert der HTML-Parser sofort ein Shadow-DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verpackt ist, das an das übergeordnete Element angehängt wird.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow-Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das `shadowrootmode`-Attribut nicht hat, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso wird, wenn es mehrere deklarative Shadow-Roots gibt, nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

## Beispiele

### Erzeugen von Tabellenzeilen

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mittels JavaScript-Code einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Jetzt, wo die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile anhand des Templates konstruiert wird.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, mit zwei neuen Zeilen, die per JavaScript hinzugefügt wurden:

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

In diesem Beispiel wird eine versteckte Warnung zu Beginn der Markierung eingefügt. Diese Warnung wird später über JavaScript angezeigt, falls der Browser das `shadowrootmode`-Attribut nicht unterstützt. Anschließend gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow-Root beschränkt, das anstelle des `<template>`-Elements aufgrund der Anwesenheit des `shadowrootmode`-Attributs generiert wird.

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

### Deklaratives Shadow DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf ein deklarativ erstelltes Shadow-Root angewendet wird und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst ein Shadow-Root innerhalb eines `<div>`-Elements, mittels des `<template>`-Elements mit dem Attribut `shadowrootmode`.
Da werden sowohl ein nicht fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element angezeigt.
Außerdem wird CSS verwendet, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) auf blau zu setzen und das normale Styling des Host-Elements zu setzen.

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

Zuletzt nutzen wir das folgende CSS, um einen grün-gelben Rand um das übergeordnete `<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten gezeigt.
Wenn das HTML zum ersten Mal gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow-Root, das nicht `shadowrootdelegatesfocus` gesetzt hat, können Sie an irgendeiner Stelle außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es wie im zweiten Bild aus).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow-Root mit gesetztem `shadowrootdelegatesfocus`, bewirkt das Klicken auf den Text (welcher nicht fokussierbar ist), dass das `<input>`-Element ausgewählt wird, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, wo das Element den Fokus hat](template_with_focus.png)

## Vermeidung von DocumentFragment-Stolperfallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, bewegen [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignis-Handler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden nur seine Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignis-Handler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignis-Handler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignis-Handler kopiert, wenn `appendChild` aufgerufen wird, und beim Klicken darauf funktioniert es, wie man es erwarten würde.

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
          >Flußinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >Script-unterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine Beschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >Script-unterstützende Elemente</a
        > akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>kein</em>
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>-Attribut hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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

- [`part`](/de/docs/Web/HTML/Global_attributes#part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklaratives Shadow DOM (with html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklaratives Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
