---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in Shadow DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es handelt sich um eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert dieselben {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Gibt das interne Shadow Root DOM für JavaScript frei (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, oder nicht auf einen erlaubten Wert gesetzt ist — oder wenn im gleichen Elternelement bereits ein `ShadowRoot` deklarativ erstellt wurde — wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht in ein Shadow Root geändert werden, zum Beispiel durch das Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie können das nicht standardmäßige `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde mittlerweile entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Legt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (das Elternelement dieses `<template>`), der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, einen Shadow Root in der Kopie enthalten.

- `shadowrootdelegatesfocus`
  - : Legt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn das gesetzt ist und ein nicht fokusierbares Element im Shadow Tree ausgewählt wird, wird der Fokus auf das erste fokusierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable`
  - : Legt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true` fest.
    Wenn gesetzt, kann der Shadow Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

## Nutzungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was im HTML-Code darin verschachtelt ist, tatsächlich nicht zu den Kindern des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf den verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch Methoden wie [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf das `<template>`-Element aufrufen, würden Sie Kinder in das `<template>`-Element selbst einfügen, was ein Verstoß gegen das Inhaltsmodell ist und das durch die `content`-Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, sind alle `<html>`, `<head>` und `<body>` öffnenden und schließenden Tags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` das gleiche ist wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptmethoden, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes Inhalt/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Unterbaum enthält, der durch das Template dargestellt wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des Aufrufdokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion aller benutzerdefinierten Elemente. Aus diesem Grund verwenden Sie `document.importNode()`, um das `content`-Fragment zu klonen, damit benutzerdefinierte Elementnachkommen unter Verwendung der Definitionen im aktuellen Dokument konstruiert werden, anstatt in dem separaten Dokument, das den Template-Inhalt besitzt. Weitere Details finden Sie auf der Seite Beispiele zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten enthalten sollte. Weitere Details finden Sie im Beispiel [Daten im DocumentFragment werden nicht geklont](#daten_im_documentfragment_werden_nicht_geklont).

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, generiert der HTML-Parser sofort ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verpackt ist, der dem Elternelement zugeordnet ist.
Dies ist das deklarative Äquivalent des Aufrufs von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element einen Shadow Root zuzuweisen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht das Attribut `shadowrootmode` besitzt, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso, wenn mehrere deklarative Shadow Roots vorhanden sind, wird nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragmentes beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile konstruiert wird, indem das Template als Grundlage verwendet wird.

```js
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Clone the new row and insert it into the table
  const clone = document.importNode(template.content, true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Clone the new row and insert it into the table
  const clone2 = document.importNode(template.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
```

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der zwei neue Zeilen über JavaScript hinzugefügt werden:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Generieren von Tabellenzeilen", 500, 120)}}

### Implementieren eines deklarativen Shadow DOM

In diesem Beispiel ist zu Beginn des Markups eine versteckte Unterstützung-Warnung enthalten, die später über JavaScript angezeigt wird, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Danach gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichem Verhalten enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>`-Elements erzeugt wird, da das Attribut `shadowrootmode` vorhanden ist.

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

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow Root angewendet wird und welchen Effekt dies auf den Fokus hat.

Der Code deklariert zunächst einen Shadow Root innerhalb eines `<div>`-Elements, indem das `<template>`-Element mit dem Attribut `shadowrootmode` verwendet wird.
Dies zeigt sowohl ein nicht fokusierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an.
Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} blau zu färben und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, das den Fokus auf das erste fokusierbare Element im Baum delegiert, wenn ein nicht fokusierbares Element im Baum ausgewählt wird.

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

Die Ergebnisse werden unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für den Shadow Root, bei dem `shadowrootdelegatesfocus` nicht gesetzt ist, können Sie überall außer auf das `<input>` klicken, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie das zweite Bild).

![Screenshot des Codes ohne eingestellten Fokus](template_with_no_focus.png)

Für den Shadow Root mit gesetztem `shadowrootdelegatesfocus`, indem Sie auf den Text (der nicht fokusierbar ist) klicken, wird das `<input>`-Element ausgewählt, da dies das erste fokusierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Daten im DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, bewegen die Methoden [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es üblicherweise vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

const firstClone = document.importNode(template.content, true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = document.importNode(template.content, true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Ergebnis

Da `firstClone` ein `DocumentFragment` ist, werden nur seine Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample(' Daten im DocumentFragment werden nicht geklont')}}

## Technische Übersicht

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
          >Fluss-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungs-Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Nichts (siehe <a href="#usage_notes">Nutzungshinweise</a>)</td>
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
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützende Elemente</a
        > akzeptiert. Ebenfalls erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>kein</em>
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
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}} und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Deklaratives Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Verwendung von Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
