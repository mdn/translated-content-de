---
title: "<template>: Das Inhaltstemplate-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: a9747e75d39c8a1f8fe756278563e0d909dad379
---

Das **`<template>`**-[HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow-DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "shadow root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "aufgezählten")}} Werte.
    - `open`
      - : Legt das interne Shadow-Root-DOM für JavaScript offen (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt oder nicht auf einen erlaubten Wert gesetzt ist – oder wenn ein `ShadowRoot` bereits deklarativ im selben Elternteil erstellt wurde – dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht in einen Shadow-Root umgewandelt werden, z. B. durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, enthält eine mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellte Kopie des Shadow-Hosts (das Elternelement dieses `<template>`) auch ein Shadow-Root in der Kopie.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht-fokusierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum delegiert.
    Der Wert standardmäßig auf `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn gesetzt, führen Zielreferenzen auf das Hostelement von außerhalb des Shadow DOM dazu, dass das referenzierte Zielelement zum effektiven Ziel der Referenz auf das Hostelement wird.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann das Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt aufgerufen werden.
    Der Wert standardmäßig auf `false`.

## Verwendungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was in der HTML-Quelle darin verschachtelt ist, nicht tatsächlich zu den Kindern des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf diesen verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>`-Element aufrufen, würden Sie Kinder in das `<template>`-Element selbst einfügen, was gegen sein Inhaltsmodell verstößt und das zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) der `content`-Eigenschaft nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element analysiert wird, sind alle `<html>`, `<head>` und `<body>` öffnenden und schließenden Tags im Template Syntaxfehler und werden vom Parser ignoriert. Daher ist `<template><head><title>Test</title></head></template>` dasselbe wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptwege, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein entsprechendes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Unterbaum enthält, der durch das Template dargestellt wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Erstellung von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, damit benutzerdefinierte Elementnachkommen mit den Definitionen im aktuellen Dokument und nicht im separaten Dokument, das den Template-Inhalt besitzt, erstellt werden. Siehe die Beispiele auf der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Seite für weitere Details.

Beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten enthalten sollte. Siehe das Beispiel [Daten im DocumentFragment werden nicht geklont](#daten_im_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, erstellt der HTML-Parser sofort ein Shadow-DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) integriert ist, der an das Elternelement angehängt wird.
Dies ist das deklarative Äquivalent zu einem Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow-Root an ein Element anzufügen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso wird, wenn mehrere deklarative Shadow-Roots vorhanden sind, nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt – nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte analysiert.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mit dem Template als Basis konstruiert wird.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle mit zwei neuen Zeilen, die über JavaScript hinzugefügt wurden:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Generierung von Tabellenzeilen", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel wird am Anfang des Markups eine versteckte Unterstützungswarnung eingefügt. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Danach folgen zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element gilt global für das gesamte Dokument. Das zweite ist auf den Shadow-Root, der anstelle des `<template>`-Elements aufgrund des `shadowrootmode`-Attributs generiert wurde, beschränkt.

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

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow-Root angewendet wird und welche Auswirkungen dies auf den Fokus hat.

Der Code erstellt zuerst ein Shadow-Root innerhalb eines `<div>`-Elements, indem das `<template>`-Element mit dem Attribut `shadowrootmode` verwendet wird.
Dies zeigt sowohl ein nicht-fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an.
Es werden auch CSS-Regeln verwendet, um Elemente mit {{cssxref(":focus")}} blau zu färben und die normale Stilierung des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, das den Fokus auf das erste fokussierbare Element im Baum delegiert, falls ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um dem übergeordneten `<div>`-Element einen roten Rahmen zu verleihen, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt. Wenn das HTML zuerst rendert, haben die Elemente keine Stilierung, wie im ersten Bild gezeigt.
Für das Shadow-Root, das nicht `shadowrootdelegatesfocus` gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es wie im zweiten Bild aus).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow-Root mit gesetztem `shadowrootdelegatesfocus` wird durch Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Daten im DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Knoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel bevorzugt, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur dessen Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, da ein Ereignishandler an den ersten _Kindknoten_ von `secondClone` hinzugefügt wurde, der Ereignishandler beim Aufruf von `appendChild` kopiert, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Daten im DocumentFragment werden nicht geklont')}}

## Technischer Überblick

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
          >Phrasierungs-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Verwendungshinweise</a>)</td>
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
        >, oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >script-unterstützende Elemente</a
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
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interface
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Scope]-Modul(/de/docs/Web/CSS/Guides/Scoping)
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
