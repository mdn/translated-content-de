---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{HTMLSidebar}}

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zur Aufnahme von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in ein Shadow DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `shadowrootmode`

  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das übergeordnete Element.
    Es handelt sich um eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "aufgeführten")}} Werte.

    - `open`

      - : Macht das interne Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen zulässigen Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist oder nicht auf einen zulässigen Wert gesetzt ist — oder wenn ein `ShadowRoot` bereits deklarativ im selben Elternknoten erstellt wurde — wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach der Analyse nicht mehr in ein Shadow Root umgewandelt werden, zum Beispiel durch Festlegung von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Möglicherweise finden Sie das nicht-standardisierte Attribut `shadowroot` in älteren Tutorials und Beispielen, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde mittlerweile entfernt und durch das standardisierte Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (das übergeordnete Element dieses `<template>`), der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, ein Shadow Root in der Kopie enthalten.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht-fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann das Shadow Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Anmerkungen zur Verwendung

Es gibt zwei Hauptarten, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Die entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle enthält eine Standard-`content`-Eigenschaft (ohne entsprechendes Content/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den vom Template dargestellten DOM-Teilbaum enthält.
Dieses Fragment kann über die Methode [`cloneNode`](/de/docs/Web/API/Node/cloneNode) geklont und in das DOM eingefügt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann.
Für weitere Details siehe den Abschnitt [Vermeidung von DocumentFragment-Fallen](#vermeidung_von_documentfragment-fallen) unten.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit dem Wert entweder `open` oder `closed` enthält, wird der HTML-Parser sofort ein Shadow-DOM erzeugen. Das Element wird im DOM durch seinen Inhalt ersetzt, der in ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen ist, das an das übergeordnete Element angehängt ist.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht enthält, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ähnlich, wenn es mehrere deklarative Shadow Roots gibt, wird nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte analysiert.

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

Nun, da die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mit dem Template als Basis konstruiert wird.

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

In diesem Beispiel wird zu Beginn des Markups ein versteckter Unterstützungs-Hinweis eingefügt. Dieser Hinweis wird später per JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als nächstes folgen zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das durch das Vorhandensein des `shadowrootmode`-Attributs anstelle des `<template>`-Elements generiert wird.

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

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf ein Shadow Root angewendet wird, das deklarativ erstellt wird, und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst ein Shadow Root in einem `<div>`-Element, indem das `<template>`-Element mit dem `shadowrootmode`-Attribut verwendet wird.
Dadurch wird sowohl ein nicht-fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element angezeigt.
Es wird auch CSS verwendet, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu stylen und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass das `shadowrootdelegatesfocus`-Attribut gesetzt wird, welches den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zum Schluss verwenden wir das folgende CSS, um einen grün-gelben Rand auf das übergeordnete `<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow Root, das nicht `shadowrootdelegatesfocus` gesetzt hat, können Sie überall außer dem `<input>` klicken, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie das zweite Bild).

![Screenshot von Code ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` wird durch Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element Fokus hat](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzufügen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur dessen Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Dagegen wird, da ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler beim Aufruf von `appendChild` kopiert, und das Klicken darauf funktioniert wie erwartet.

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
          >Metadateninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
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
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > erlaubt. Auch als Kind eines {{HTMLElement("colgroup")}}
        Elements erlaubt, das kein
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

- [`part`](/de/docs/Web/HTML/Global_attributes#part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklaratives Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
