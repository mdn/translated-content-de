---
title: "<template>: Das Content-Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<template>`** [HTML](/de/docs/Web/HTML) Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}} Fragmenten, die entweder später über JavaScript genutzt oder sofort in den Shadow DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es handelt sich um eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Öffnet den internen Shadow Root DOM für JavaScript (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt den internen Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen zulässigen Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, nicht auf einen zulässigen Wert gesetzt ist oder wenn ein `ShadowRoot` bereits deklarativ im gleichen Elternteil erstellt wurde, dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht nachträglich in einen Shadow Root geändert werden, z.B. durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Legt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn gesetzt, enthält ein Klon des Shadow Hosts (das Elternelement dieses `<template>`), der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, einen Shadow Root in der Kopie.

- `shadowrootdelegatesfocus`
  - : Legt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow Tree ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Tree delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}
  - : Legt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn gesetzt, kann der Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Nutzungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was im HTML-Quellcode innerhalb von ihm eingebettet ist, nicht tatsächlich Kinder des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer und Sie können auf diesen eingebetteten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>`-Element anwenden, würden Sie Kinder in das `<template>`-Element selbst einfügen, was ein Verstoß gegen sein Inhaltsmodell ist und nicht tatsächlich den [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), der von der `content`-Eigenschaft zurückgegeben wird, aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element analysiert wird, sind alle `<html>`, `<head>` und `<body>` Öffnungs- und Schlusstags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert. So ist `<template><head><title>Test</title></head></template>` dasselbe wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptmöglichkeiten, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein äquivalentes Content-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der durch das Template repräsentiert wird.
Dieses Fragment kann über die [`cloneNode`](/de/docs/Web/API/Node/cloneNode)-Methode geklont und in das DOM eingefügt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann.
Für mehr Details siehe den Abschnitt [Vermeidung von DocumentFragment-Fallen](#vermeidung_von_documentfragment-fallen) weiter unten.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das [`shadowrootmode`](#shadowrootmode)-Attribut mit einem Wert von entweder `open` oder `closed` enthält, generiert der HTML-Parser sofort einen Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingekapselt ist, der an das Elternelement angefügt wird.
Dies ist das deklarative Äquivalent zu einem Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einen Shadow Root an ein Element zu binden.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht das `shadowrootmode`-Attribut enthält, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ähnlich verhält es sich, wenn mehrere deklarative Shadow Roots vorhanden sind: Nur der erste wird durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt – nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte analysiert.

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

Zunächst haben wir eine Tabelle, in die wir später mit JavaScript Inhalte einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mit dem Template als Grundlage konstruiert wird.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, mit zwei neuen Zeilen, die über JavaScript hinzugefügt werden:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel wird eine versteckte Warnung zu Beginn des Markups eingefügt. Diese Warnung wird später per JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als Nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>`-Elements aufgrund der Präsenz des `shadowrootmode`-Attributes erstellt wird.

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

### Deklarativer Shadow DOM mit delegiertem Fokus

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf einen Shadow Root angewendet wird, der deklarativ erstellt wird, und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root innerhalb eines `<div>`-Elements unter Verwendung des `<template>`-Elements mit dem `shadowrootmode`-Attribut.
Dadurch werden sowohl ein nicht fokussierbares `<div>`-Element mit Text als auch ein fokussierbares `<input>`-Element angezeigt.
Es wird auch CSS verwendet, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau darzustellen und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, setzt jedoch das `shadowrootdelegatesfocus`-Attribut, das den Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt ist.

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

Zum Schluss verwenden wir das folgende CSS, um ein rotes Rahmen stil für das übergeordnete `<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten angezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für den Shadow Root, der nicht auf `shadowrootdelegatesfocus` gesetzt ist, können Sie überall außer dem `<input>` klicken, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie das zweite Bild).

![Screenshot von Code ohne gesetzten Fokus](template_with_no_focus.png)

Für den Shadow Root mit `shadowrootdelegatesfocus` wird durch Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallen

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, bewegen [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an die Kindknoten eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

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
          >Metadaten-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Nutzungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalte</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützende Elemente</a
        > akzeptiert. Auch als Kind eines {{HTMLElement("colgroup")}}
        Elements erlaubt, das kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a> Attribut hat.
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
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklarativer Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
