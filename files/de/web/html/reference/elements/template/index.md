---
title: "`<template>` HTML-Element für Inhaltsvorlagen"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow-DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt eine {{Glossary("Shadow_tree", "Shadow-Root")}} für das Elternelement.
    Es handelt sich um eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "aufgezählten")}} Werte.
    - `open`
      - : Macht den internen Shadow-Root-DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt den internen Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen erlaubten Wert eingestellt ist.
    > Wenn das Attribut nicht gesetzt ist oder nicht auf einen erlaubten Wert eingestellt ist - oder wenn ein `ShadowRoot` bereits deklarativ im gleichen Elternelement erstellt wurde - dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht mehr in einen Shadow-Root umgewandelt werden, beispielsweise durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardmäßige Attribut `shadowroot` in älteren Tutorials und Beispielen finden, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde inzwischen entfernt und durch das Standardattribut `shadowrootmode` ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (das Elternelement dieses `<template>`), der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, beim Kopieren ein Shadow-Root enthalten.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null` anstelle des [benutzerdefinierten Element-Registers](/de/docs/Web/API/Document/customElementRegistry) des Dokuments.
    Dies ermöglicht es, später ein isoliertes [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) anzuhängen.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Tree ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow-DOM sein. Wenn gesetzt, werden Zielreferenzen auf das Host-Element von außerhalb des Shadow-DOM dazu führen, dass das referenzierte Zielelement das effektive Ziel der Referenz auf das Host-Element wird.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann der Shadow-Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt, serialisiert werden.
    Der Wert ist standardmäßig `false`.

- `shadowrootslotassignment` {{experimental_inline}}
  - : Setzt die [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft eines mithilfe dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
    Dies ist das deklarative Äquivalent der [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment)-Option der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch innerhalb dieses Shadow-Root-Elements den {{HTMLElement("slot")}}-Elementen zugewiesen.
        Dies ist der Standardwert.

        Elemente mit dem [`slot`-Attribut](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, das das entsprechende `name`-Attribut hat.
        Wenn mehrere Elemente denselben Slotnamen angeben, werden sie alle dem ersten Slot im Template mit diesem Namen hinzugefügt und in der Reihenfolge eingebunden, in der sie deklariert wurden.
        Alle unbenannten Elemente — Elemente ohne angegebenes `slot`-Attribut — werden dem Standardslot in der Reihenfolge zugewiesen, in der sie deklariert wurden.
        Dies ist der erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden manuell bestimmten Slot-Elementen zugewiesen, indem [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) verwendet wird.
        Es erfolgt keine automatische Zuweisung.

## Nutzungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was im HTML-Quellcode darin verschachtelt ist, nicht tatsächlich zu den Kindern des `<template>`-Elements wird. Die Eigenschaft [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) des `<template>`-Elements ist immer leer und Sie können auf diesen verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf dem `<template>`-Element aufrufen, würden Sie Kinder in das `<template>`-Element selbst einfügen, was eine Verletzung seines Inhaltsmodells darstellt und die durch die `content`-Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht tatsächlich aktualisiert.

Durch die Art und Weise, wie das `<template>`-Element geparst wird, sind alle öffnenden und schließenden `<html>`, `<head>` und `<body>`-Tags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptverwendungen des `<template>`-Elements.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein gleichwertiges Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den im Template dargestellten DOM-Teilbaum enthält.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zur Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollte `document.importNode()` zum Klonen des `content`-Fragments verwendet werden, damit benutzerdefinierte Elementnachkommen mit den Definitionen im aktuellen Dokument konstituiert werden und nicht mit dem separaten Dokument, das den Template-Inhalt besitzt. Siehe die Beispiele auf der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Seite für weitere Details.

Beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten enthalten sollte. Siehe das Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, wird der HTML-Parser sofort einen Shadow-DOM generieren. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen ist und dem Elternelement zugeordnet ist.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element einen Shadow-Root zuzuordnen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht vorhanden ist, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso wird, wenn es mehrere deklarative Shadow-Roots gibt, nur der erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Andere Attribute, die mit `shadowroot` beginnen, erlauben die deklarative Anpassung des `ShadowRoot`, wie zum Beispiel die Kontrolle über die Zuweisung von Slots.

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

Zunächst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der über JavaScript zwei neue Zeilen hinzugefügt wurden:

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

In diesem Beispiel ist hinter dem Markup eine versteckte Unterstützungswarnung enthalten. Diese Warnung wird später über JavaScript eingestellt, um angezeigt zu werden, wenn der Browser das Attribut `shadowrootmode` nicht unterstützt. Als nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das ganze Dokument. Das zweite ist auf den Shadow-Root beschränkt, der anstelle des `<template>`-Elements aufgrund des Vorhandenseins des `shadowrootmode`-Attributs generiert wird.

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

Im Code wird zunächst ein Shadow-Root innerhalb eines `<div>`-Elements deklariert, indem das `<template>`-Element mit dem `shadowrootmode`-Attribut verwendet wird.
Dies zeigt sowohl ein nicht fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an.
Es wird auch CSS verwendet, um Elemente mit {{cssxref(":focus")}} in Blau zu färben und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, das den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

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

Abschließend verwenden wir das folgende CSS, um einem übergeordneten `<div>`-Element, das den Fokus hat, einen roten Rahmen zu geben.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow-Root, das `shadowrootdelegatesfocus` nicht gesetzt hat, können Sie überall klicken außer auf das `<input>`, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow-Root mit gesetztem `shadowrootdelegatesfocus` bewirkt ein Klick auf den Text (der nicht fokussierbar ist), dass das `<input>`-Element ausgewählt wird, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

### Deklarativer Shadow DOM mit benannter Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente Slots in einem Shadow-DOM basierend auf ihrem [`slot`-Attribut](/de/docs/Web/API/Element/slot) zugewiesen werden können (abgestimmt auf das `name`-Attribut des Slots).

#### HTML

Zuerst definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelinhaltsinformationen darstellt.

Der Artikel enthält ein `<template>`-Element, das aufgrund des Vorhandenseins des `shadowrootmode`-Attributs zu einem Shadow-Root wird.
Wir müssen sein `shadowrootslotassignment`-Attribut nicht setzen, da die benannte Slot-Zuweisung der Standard ist.

Das Template definiert Elemente, die benannte Slots für "Header" und "Meta"-Informationen sowie einen unbenannten Slot für "Body"-Informationen haben.
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

Im selben Host, unterhalb des Templates, haben wir vier Elemente zur Befüllung der Slots.
Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, die mit den `name`-Attributen in den Slots des Templates übereinstimmen, und werden die entsprechenden Slots befüllen.
Die beiden {{htmlelement("p")}}-Elemente sind unbenannt, daher werden beide in den unbenannten `<slot>` im "Body"-Element eingefügt.

#### Ergebnisse

Das Beispiel unten sollte den Inhalt der Slots in den entsprechenden Abschnitten angezeigt zeigen.

{{EmbedLiveSample('Deklarativer Shadow DOM mit benannter Slot-Zuweisung','100', '220px')}}

### Deklarativer Shadow DOM mit manueller Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente mit manueller Slot-Zuweisung Slots in einem Shadow-DOM zugewiesen werden können.

Bei diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden.
Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen ist, leer bleibt.

#### HTML

Zuerst haben wir eine versteckte Unterstützungswarnung.
Diese Warnung wird später über JavaScript eingestellt, um angezeigt zu werden, wenn der Browser das Attribut `shadowrootslotassignment` nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Als nächstes definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelinhaltsinformationen präsentiert.
Dies enthält ein `<template>`-Element, das aufgrund des Vorhandenseins des `shadowrootmode`-Attributs zu einem Shadow-Root wird, und wird die manuelle Slot-Zuweisung verwenden, da `shadowrootslotassignment="manual"` gesetzt ist.

Das Template definiert Elemente, die Slots für "Header", "Meta" und "Body"-Informationen haben, die separat über ihr `id`-Attribut referenziert werden können.
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

Im selben Host, unterhalb des Templates, haben wir vier Elemente zur Befüllung der Slots.
Diese sind ebenfalls über `id` identifizierbar.

#### JavaScript

Das JavaScript für die manuelle Slot-Zuweisung wird unten gezeigt.
Zuerst holt sich der Code die Slots innerhalb des Shadow-Root, dann den einzufügenden Text, und schließlich weist er den Text dem Slot zu.
Beachten Sie, dass Sie einen Knoten nur ein einziges Mal in einen bestimmten Slot zuweisen können und dass, wenn Sie mehrere Knoten einem einzigen Slot mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zuweisen, die Reihenfolge, in der sie spezifiziert sind, die Reihenfolge bestimmt, in der sie hinzugefügt werden.

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

Das Beispiel unten sollte den Inhalt der Slots in den entsprechenden Abschnitten angezeigt zeigen.

{{EmbedLiveSample('Deklarativer Shadow DOM mit manueller Slot-Zuweisung','100', '220px')}}

> [!NOTE]
> Wenn das Attribut `shadowrootslotassignment` nicht unterstützt wird, wird eine Warnmeldung angezeigt und der Browser verwendet `named` Zuweisung.
> Da jedoch keiner der Slots oder einzufügenden Elemente benannt sind, werden alle Elemente in den Titel-Slot eingefügt (da dies der erste unbenannte Slot ist und daher der "Standard"-Slot ist).

### Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satz-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Nutzungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satz-Inhalt</a
        > oder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Auch als Kind eines {{HTMLElement("colgroup")}}
        Elements erlaubt, das <em>kein</em>
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
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Verwendung von Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
