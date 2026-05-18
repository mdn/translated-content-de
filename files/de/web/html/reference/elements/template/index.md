---
title: "`<template>` HTML-Inhalt-Template-Element"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

Das **`<template>`**-[HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zur Speicherung von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in Shadow DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt eine {{Glossary("Shadow_tree", "shadow root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert dieselben {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Gibt das interne Shadow Root DOM für JavaScript frei (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, der auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist oder nicht auf einen erlaubten Wert gesetzt ist – oder wenn ein `ShadowRoot` bereits im gleichen Elternteil deklariert wurde – wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht in einen Shadow Root umgewandelt werden, beispielsweise durch das Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardisierte Attribut `shadowroot` in älteren Tutorials und Beispielen finden, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde seitdem entfernt und durch das Standardattribut `shadowrootmode` ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, enthält ein Klon des Shadow Hosts (das Elternelement dieses `<template>`), erstellt mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode), ein Shadow Root in der Kopie.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `null`, anstatt auf das Dokument-eigene [Custom Element Registry](/de/docs/Web/API/Document/customElementRegistry).
    Dies erlaubt das spätere Anhängen eines umgrenzten [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow Tree ausgewählt ist, wird der Fokus an das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde. Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn gesetzt, führen Zielreferenzen zum Host-Element von außerhalb des Shadow DOM dazu, dass das referenzierte Ziel-Element das effektive Ziel der Referenz auf das Host-Element wird.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, kann das Shadow Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt werden.
    Der Wert ist standardmäßig `false`.

- `shadowrootslotassignment`
  - : Setzt die [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde.
    Dies ist das deklarative Äquivalent der [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment)-Option der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch den {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow Roots zugewiesen.
        Dies ist der Standardwert.

        Elemente mit dem [`slot`-Attribut](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, das das entsprechende `name`-Attribut hat.
        Wenn mehrere Elemente denselben Slotnamen angeben, werden sie alle dem ersten Slot im Template hinzugefügt, der diesen Namen hat und in der Reihenfolge gerendert, in der sie deklariert sind.
        Alle unbenannten Elemente – Elemente, die kein `slot`-Attribut angeben – werden dem Standardslot in der Reihenfolge zugewiesen, in der sie deklariert sind.
        Dies ist der erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden manuell bestimmten Slot-Elementen mithilfe von [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen.
        Keine automatische Zuordnung findet statt.

## Nutzungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was innerhalb dieses Elements im HTML-Quelltext genistet ist, nicht tatsächlich zu den Kindern des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf den genisteten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>`-Element aufrufen, fügen Sie tatsächlich Kinder in das `<template>`-Element selbst ein, was eine Verletzung seines Inhaltsmodells ist und den durch die `content`-Eigenschaft zurückgegebenen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, sind alle `<html>`, `<head>` und `<body>`-Öffnungs- und Schließ-Tags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptmethoden zur Verwendung des `<template>`-Elements.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne entsprechendes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der durch das Template dargestellt wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, damit benutzerdefinierte Elementnachfahren mit den Definitionen im aktuellen Dokument konstruieren, anstatt im separaten Dokument, das den Template-Inhalt besitzt. Weitere Details finden Sie auf der Seite [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten an ihm haben sollte. Weitere Details finden Sie im Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_kopiert).

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von `open` oder `closed` enthält, generiert der HTML-Parser sofort ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) umschlossen ist und an das Elternelement angehängt wird.
Dies ist das deklarative Äquivalent des Aufrufs von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso, wenn es mehrere deklarative Shadow Roots gibt, wird nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Andere Attribute, die mit `shadowroot` beginnen, ermöglichen eine deklarative Anpassung des `ShadowRoot`, wie das Steuern, wie Slots zugewiesen werden.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mithilfe von JavaScript-Code einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile auf dem Template basiert.

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

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel wird zu Beginn des Markups eine versteckte Unterstützungswarnung eingefügt. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das Attribut `shadowrootmode` nicht unterstützt. Anschließend gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das aufgrund der Anwesenheit des Attributs `shadowrootmode` anstelle des `<template>`-Elements generiert wird.

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

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf ein Shadow Root angewendet wird, das deklarativ erstellt wird, und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst ein Shadow Root in einem `<div>`-Element, indem er das `<template>`-Element mit dem Attribut `shadowrootmode` verwendet.
Dies zeigt sowohl ein nicht fokussierbares `<div>` an, das Text enthält, als auch ein fokussierbares `<input>`-Element.
Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} blau zu färben und das normale Styling des Host-Elements zu setzen.

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

Der zweite Codeblock ist identisch, setzt jedoch das Attribut `shadowrootdelegatesfocus`, welches den Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um eine rote Umrandung um das übergeordnete `<div>`-Element zu setzen, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow Root, das `shadowrootdelegatesfocus` nicht gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie das zweite Bild).

![Screenshot of code with no focus set](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` führt ein Klick auf den Text (der nicht fokussierbar ist) dazu, dass das `<input>`-Element ausgewählt wird, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot of the code where the element has focus](template_with_focus.png)

### Deklaratives Shadow DOM mit benannter Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente basierend auf ihrem [`slot`-Attribut](/de/docs/Web/API/Element/slot) (abgeglichen mit dem `name`-Attribut des Slots) in einem Shadow DOM auf Slots zugewiesen werden können.

#### HTML

Zuerst definieren wir ein {{HTMLElement("article")}}-Element, das Informationen zu Titel, Metadaten und Artikelinhalt präsentiert.

Der Artikel enthält ein `<template>`-Element, das zu einem Shadow Root wird, aufgrund der Anwesenheit des Attributs `shadowrootmode`.
Wir müssen dessen `shadowrootslotassignment`-Attribut nicht setzen, da die benannte Slot-Zuweisung der Standard ist.

Das Template definiert Elemente, die benannte Slots für "header" und "meta"-Informationen sowie einen unbenannten Slot für "body"-Informationen haben.
Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu unterscheiden sind.

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="named">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot name="title"></slot>
    </h2>

    <div class="meta">
      <slot name="meta"></slot>
    </div>

    <div class="body">
      <slot></slot>
    </div>
  </template>

  <p>
    Text 1 with no slot attribute. Goes into default (unnamed) slot inside the
    "body" div.
  </p>
  <span slot="title">Text for the title slot</span>
  <span slot="meta">Text for the meta slot</span>
  <p>
    Text 2 with no slot attribute. Also goes into default (unnamed) slot inside
    the "body" div.
  </p>
</article>
```

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente zum Befüllen der Slots.
Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, die mit den `name`-Attributen der Slots im Template übereinstimmen und die entsprechenden Slots befüllen.
Die beiden {{htmlelement("p")}}-Elemente sind unbenannt und werden beide in den unbenannten `<slot>` im "body"-Element eingefügt.

#### Ergebnisse

Das Beispiel unten sollte zeigen, dass der Inhalt der Slots in den entsprechenden Abschnitten angezeigt wird.

{{EmbedLiveSample('Declarative shadow DOM with named slot assignment','100', '220px')}}

### Deklaratives Shadow DOM mit manueller Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente mithilfe der manuellen Slot-Zuweisung auf Slots in einem Shadow DOM zugewiesen werden können.

Mit diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden.
Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen ist, leer bleibt.

#### HTML

Zuerst haben wir eine versteckte Unterstützungswarnung.
Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das Attribut `shadowrootslotassignment` nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Als nächstes definieren wir ein {{HTMLElement("article")}}-Element, das Informationen zu Titel, Metadaten und Artikelinhalt präsentiert.
Dieses enthält ein `<template>`-Element, das zu einem Shadow Root wird, aufgrund der Anwesenheit des Attributs `shadowrootmode`, und die manuelle Slot-Zuweisung verwendet, da `shadowrootslotassignment="manual"` gesetzt ist.

Das Template definiert Elemente, die Slots für "header", "meta" und "body"-Informationen haben, die mit ihrem `id`-Attribut separat referenziert werden können.
Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu unterscheiden sind.

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="manual">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot id="titleSlot"></slot>
    </h2>

    <div class="meta">
      <slot id="metaSlot"></slot>
    </div>

    <div class="body">
      <slot id="bodySlot"></slot>
    </div>
  </template>

  <span id="text_title">Text for the title slot</span>
  <span id="text_meta">Text for the meta slot</span>
  <p id="text_body_1">Text 1 for body slot.</p>
  <p id="text_body_2">Text 2 for body slot.</p>
</article>
```

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente zum Befüllen der Slots.
Diese sind ebenfalls durch id identifiziert.

#### JavaScript

Das JavaScript für die manuelle Slot-Zuweisung wird unten gezeigt.
Zuerst holt sich der Code die Slots innerhalb des Shadow Roots, dann den Text, der eingefügt werden soll, und weise den Text schließlich dem Slot zu.
Beachten Sie, dass Sie einen Knoten nur einmal einem bestimmten Slot zuweisen können und dass, wenn Sie mehrere Knoten einem einzelnen Slot mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zuweisen, die Reihenfolge, in der sie angegeben sind, die Reihenfolge bestimmt, in der sie hinzugefügt werden.

```js
const host = document.querySelector("#host");
const shadow = host.shadowRoot;

// 1. Target your slots
const titleSlot = shadow.querySelector("#titleSlot");
const metaSlot = shadow.querySelector("#metaSlot");
const bodySlot = shadow.querySelector("#bodySlot");

// 2. Target the Elements to slot
const body1Text = document.querySelector("#text_body_1");
const body2Text = document.querySelector("#text_body_2");
const titleText = document.querySelector("#text_title");
const metaText = document.querySelector("#text_meta");

// 3. Manually assign them
titleSlot.assign(titleText);
metaSlot.assign(metaText);
bodySlot.assign(body2Text, body1Text);
```

Der Code zeigt die versteckte Unterstützungswarnung an, wenn die Slot-Zuweisung nicht unterstützt wird.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootSlotAssignmentSupported);
```

#### Ergebnisse

Das Beispiel unten sollte zeigen, dass der Inhalt der Slots in den entsprechenden Abschnitten angezeigt wird.

{{EmbedLiveSample('Declarative shadow DOM with manual slot assignment','100', '220px')}}

> [!NOTE]
> Wenn das Attribut `shadowrootslotassignment` nicht unterstützt wird, wird eine Warnnotiz angezeigt und der Browser verwendet die `named`-Zuweisung.
> Da jedoch keine der Slots oder Elemente, die eingefügt werden sollen, benannt sind, werden alle Elemente in den Titleslot eingefügt (da dies der erste unbenannte Slot ist und daher der "Standard"-Slot ist).

### Daten auf dem DocumentFragment werden nicht kopiert

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

Betrachten Sie das folgende HTML und JavaScript:

#### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

#### JavaScript

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

#### Ergebnis

Da `firstClone` ein `DocumentFragment` ist, werden nur dessen Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert, wie man es erwarten würde.

{{EmbedLiveSample(' Data on the DocumentFragment is not cloned')}}

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Nutzungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skript-unterstützende Elemente</a
        > akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>nicht</em> über ein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut verfügt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Deklaratives Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
