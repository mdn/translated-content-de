---
title: "`<template>` HTML-Inhalt-Template-Element"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<template>`**-[HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in Shadow DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das übergeordnete Element. Es ist eine deklarative Version der [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode und akzeptiert die gleichen {{Glossary("enumerated", "aufgezählten")}} Werte.
    - `open`
      - : Macht den internen Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Versteckt den internen Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen zulässigen Wert gesetzt ist. Wenn das Attribut nicht gesetzt oder nicht auf einen zulässigen Wert gesetzt ist — oder wenn ein `ShadowRoot` bereits deklarativ im selben Elternteil erstellt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert. Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht nachträglich in einen Shadow Root umgewandelt werden, zum Beispiel durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie finden möglicherweise das nicht standardisierte Attribut `shadowroot` in älteren Tutorials und Beispielen, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, enthält ein mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellter Klon des Shadow Hosts (des übergeordneten Elements dieses `<template>`) einen Shadow Root in der Kopie.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null`, anstatt auf das [Custom Element Registry](/de/docs/Web/API/Document/customElementRegistry) des Dokuments. Dies ermöglicht es, später ein begrenztes [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) anzuhängen, indem [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) aufgerufen wird.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Ist dies gesetzt und ein nicht-fokussierbares Element im Shadow-Baum wird ausgewählt, wird der Fokus an das erste fokussierbare Element im Baum delegiert. Der Standardwert ist `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn gesetzt, führt eine Zielreferenz zum Hostelement von außerhalb des Shadow DOM dazu, dass das referenzierte Zielobjekt das tatsächliche Ziel der Referenz zum Hostelement wird.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, kann der Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden. Der Standardwert ist `false`.

## Hinweise zur Verwendung

Dieses Element hat keinen zulässigen Inhalt, da alles, was im HTML-Quelltext darin verschachtelt ist, nicht tatsächlich zu den Kindern des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf den verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>`-Element anwenden, fügen Sie Kinder in das `<template>`-Element selbst ein, was gegen sein Inhaltsmodell verstößt und das durch die `content`-Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, sind alle `<html>`, `<head>` und `<body>` Öffnungs- und Schließtags im Template Syntaxfehler und werden vom Parser ignoriert. So ist `<template><head><title>Test</title></head></template>` dasselbe wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptmethoden, um das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert. Die entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle enthält eine Standard-`[content](/de/docs/Web/API/HTMLTemplateElement/content)`-Eigenschaft (ohne ein gleichwertiges Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den vom Template dargestellten DOM-Unterbaum enthält.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, damit benutzerdefinierte Elementnachkommen mit den Definitionen im aktuellen Dokument und nicht im separaten Dokument, das den Template-Inhalt besitzt, konstruiert werden. Weitere Details finden Sie auf der Seite [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Beachten Sie, dass dem `DocumentFragment`-Container selbst keine Daten angehängt werden sollten. Siehe das Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das [`shadowrootmode`](#shadowrootmode)-Attribut mit einem Wert von entweder `open` oder `closed` enthält, wird durch den HTML-Parser sofort ein Shadow DOM generiert. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) umschlossen ist, der an das übergeordnete Element angehängt wird. Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einen Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht über das `shadowrootmode`-Attribut verfügt, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement). In ähnlicher Weise ersetzt nur der erste eine deklarative Shadow Roots durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

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

Zuerst haben wir eine Tabelle, in die wir später mithilfe von JavaScript-Inhalt einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der zwei neue Zeilen über JavaScript hinzugefügt wurden:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Erzeugen von Tabellenzeilen", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel ist zu Beginn des Markups eine versteckte Warnung enthalten. Diese Warnung wird später per JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>`-Elements aufgrund des Vorhandenseins des `shadowrootmode`-Attributs generiert wird.

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

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow Root angewendet wird und welche Auswirkung dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root innerhalb eines `<div>`-Elements unter Verwendung des `<template>`-Elements mit dem `shadowrootmode`-Attribut. Dies zeigt sowohl ein nicht-fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an. Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} auf blau zu stylen und um das normale Styling des Hostelements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass das Attribut `shadowrootdelegatesfocus` gesetzt ist, welches den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um einem fokussierten `<div>`-Elternelement einen roten Rahmen zu verleihen.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten zu sehen. Wenn das HTML zuerst gerendert wird, haben die Elemente keine Formatierung, wie im ersten Bild gezeigt. Für den Shadow Root ohne `shadowrootdelegatesfocus` können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne Fokus](template_with_no_focus.png)

Für den Shadow Root mit `shadowrootdelegatesfocus` wird durch Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist. Dies fokussiert auch das Elternelement, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an den Kindern eines `DocumentFragment` anzubringen, anstatt am `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden bei `appendChild` nur die Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil einem ersten _Kindknoten_ von `secondClone` ein Ereignishandler hinzugefügt wird, der Ereignishandler bei `appendChild` kopiert und das Klicken darauf funktioniert, wie man erwarten würde.

{{EmbedLiveSample('Daten auf dem DocumentFragment werden nicht geklont')}}

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >script-supportendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keine (siehe <a href="#usage_notes">Hinweise zur Verwendung</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
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
          >Phraseninhalt</a
        >, oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >script-supportende Elemente</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Deklaratives Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Verwendung von Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
