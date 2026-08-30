---
title: "`<template>` HTML-Inhaltstemplate-Element"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: a447d93f8c264d39c49e9f465ad780a81e92ed71
---

Das **`<template>`**-Element in [HTML](/de/docs/Web/HTML) dient als Mechanismus zum Speichern von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet, sofort erzeugt und in ein Shadow DOM eingefügt oder im Rahmen von {{Glossary("Out_of_order_patching", "Out-of-Order-Patching")}} mit `<template for="...">` verwendet werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `for` {{experimental_inline}}
  - : Das `for`-Attribut wird für Out-of-Order-Patching mit `<template for="...">` verwendet und stimmt mit einem äquivalenten `<?start id="...">` oder `<?marker "...">` Marker überein. Siehe den [Abschnitt Out-of-Order-Patching](#out-of-order-patching) und den [Abschnitt Beispiele](#beispiele).

- `shadowrootmode`
  - : Erstellt ein {{Glossary("Shadow_tree", "shadow root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Gibt das interne Shadow Root DOM für JavaScript frei (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen zulässigen Wert gesetzt ist. Wenn das Attribut nicht gesetzt ist, nicht auf einen zulässigen Wert gesetzt ist oder wenn ein `ShadowRoot` bereits deklarativ im gleichen Elternelement erstellt wurde, wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert. Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht mehr in einen Shadow Root umgewandelt werden, zum Beispiel durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie werden möglicherweise das nicht-standardisierte `shadowroot`-Attribut in älteren Anleitungen und Beispielen finden, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mittels dieses Elements erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, wird ein Klon des Shadow Hosts (das Elternelement dieses `<template>`) erstellt mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) und wird in die Kopie ein Shadow Root enthalten.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null`, anstatt auf das Dokumenten- [Custom-Element-Registry](/de/docs/Web/API/Document/customElementRegistry). Dies ermöglicht das spätere Anfügen einer scoped [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) mittels [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn dies gesetzt ist und ein nicht-fokussierbares Element im Shadow Tree ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Baum delegiert. Der Wert ist standardmäßig `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn gesetzt, führen Zielverweise auf das Host-Element von außerhalb des Shadow DOM dazu, dass das referenzierte Ziel-Element das effektive Ziel des Verweises auf das Host-Element wird.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, kann das Shadow Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden. Der Wert ist standardmäßig `false`.

- `shadowrootslotassignment` {{experimental_inline}}
  - : Setzt die [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Dies ist das deklarative Äquivalent der [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment)-Option der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow Roots zugewiesen. Dies ist der Standardwert.

        Elemente mit dem [`slot` Attribute](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, das das entsprechende `name`-Attribut hat. Wenn mehrere Elemente denselben Slot-Namen angeben, werden sie alle dem ersten Slot im Template hinzugefügt, der diesen Namen hat, und in der Reihenfolge, in der sie erklärt werden, gerendert. Alle unbenannten Elemente – Elemente, die kein `slot`-Attribut angeben – werden dem Standardslot in der Reihenfolge, in der sie erklärt werden, zugewiesen. Dies ist der erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden manuell bestimmten Slot-Elementen mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen. Es erfolgt keine automatische Zuweisung.

## Anwendungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was in der HTML-Quelle darin geschachtelt ist, nicht tatsächlich zu den Kindern des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf diesen geschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf dem `<template>`-Element aufrufen, fügen Sie tatsächlich Kinder in das `<template>`-Element selbst ein, was ein Verstoß gegen sein Inhaltsmodell ist und das von der `content`-Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) tatsächlich nicht aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, werden alle `<html>`, `<head>` und `<body>` Öffnungs- und Schließtags innerhalb des Templates als Syntaxfehler behandelt und vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt drei Hauptmethoden, wie das `<template>`-Element verwendet werden kann.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert. Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface umfasst eine Standard- [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein äquivalentes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Unterbaum enthält, der durch das Template repräsentiert wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für den Bau von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, damit Nachkommelemente mit den Definitionen im aktuellen Dokument und nicht im separaten Dokument, das die Template-Inhalte besitzt, erstellt werden. Siehe die Beispiele auf der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Seite für weitere Details.

Es ist zu beachten, dass der `DocumentFragment`-Container selbst keine Daten enthalten sollte. Siehe das Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, generiert der HTML-Parser sofort ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen ist, welches an das Elternelement angehängt wird. Dies ist das deklarative Äquivalent des Aufrufs von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einen Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement). Ebenso, wenn es mehrere deklarative Shadow Roots gibt, wird nur der erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Andere Attribute, die mit `shadowroot` beginnen, erlauben eine deklarative Anpassung des `ShadowRoot`, wie z. B. die Steuerung der Zuordnung von Slots.

### Out-of-Order-Patching

> [!NOTE]
> Dieser Anwendungsfall ist noch experimentell und verfügt über begrenzte Browserunterstützung. Siehe die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browser-Unterstützung.

Traditionell wird HTML in Reihenfolge geliefert und von oben nach unten gelesen, verarbeitet und angezeigt. Um diese Reihenfolge zu ändern, können Sie entweder Elemente mit CSS verstecken oder neu anordnen oder das von HTML produzierte DOM anschließend mit JavaScript aktualisieren. Allerdings setzen sich viele Seiten aus mehreren Teilen zusammen, die zu unterschiedlichen Zeiten bereit zur Anzeige sein könnten, oder die wichtiger sind, um sie frühzeitig an den Benutzer zu liefern.

Das `<template>`-Element ermöglicht das Liefern von HTML {{Glossary("Out_of_order_patching", "Out-of-Order")}}, was das Ersetzen von [Verarbeitungsanweisungs](/de/docs/Web/API/ProcessingInstruction)-Markern durch den Inhalt des `<template>`-Elements (auch als **Patchen** bezeichnet) beinhaltet.

Zum Beispiel kann ein `<?marker name="my-identifier">` Verarbeitungsanweisungsmarker mit dem Inhalt eines `<template for="my-identifier">`-Elements gepatcht werden, das viel später im HTML geliefert wird. Siehe das Beispiel [Verwenden von `<template for>` zum Patchen](#using_template_for_for_patching).

Neben dem Verarbeitungsanweisungsmarker `<?marker>` kann ein Paar `<?start>` und `<?end>` verwendet werden, um temporären Inhalt zu enthalten (zum Beispiel `<?start name="my-identifier">Laden...<?end>`), welcher vorübergehend angezeigt wird, bis das `<template for="my-identifier">` verarbeitet und der gesamte Abschnitt ersetzt wird. Siehe das Beispiel [Verwenden von `<template for>` für Bereichs-Patching](#using_template_for_for_range_patching).

Beim Schreiben in HTML können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es hinzu, wenn es beim Parsen des DOM nicht bereitgestellt wird. Daher sind sowohl `<?start?>` als auch `<?start>` gültig und werden als `<?start?>` geparst. XML ist strenger und erfordert das abschließende `?`.

Wenn das `for`-Attribut nicht mit einem Namen einer Marker-Verarbeitungsanweisung übereinstimmt, bleibt der `<template>`-Inhalt im DOM verborgen und wird in keinem Patch verwendet.

Um zu verhindern, dass Komponenten nicht verwandte Teile des DOM aktualisieren, können `<template for="...">`-Elemente nur Marker innerhalb des DOM-Baums des `<template>`-Elternelements patchen. Die einzige Ausnahme sind `<template>`-Elemente, die direkte Kinder des `<body>`-Elements sind — sie können auch `<head>`-Elemente patchen, um das Aktualisieren von `<title>` und anderen `<head>`-Elementen zu ermöglichen.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mithilfe von JavaScript-Code einfügen. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

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

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der über JavaScript zwei neue Zeilen angehängt wurden:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementieren eines deklarativen Shadow-DOM

In diesem Beispiel ist zu Beginn des Markups eine verborgene Unterstützung-Warnung enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als Nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, von denen jedes geschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichem Verhalten enthält. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>`-Elements generiert wird, da das `shadowrootmode`-Attribut vorhanden ist.

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

### Deklarativer Shadow-DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen Shadow Root angewendet wird, der deklarativ erstellt wird, und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root innerhalb eines `<div>`-Elements und verwendet das `<template>`-Element mit dem `shadowrootmode`-Attribut. Dies zeigt sowohl ein nicht-fokussierbares `<div>`, das Text enthält, als auch ein fokussierbares `<input>`-Element an. Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} auf Blau zu stylen und die normale Gestaltung des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, setzt jedoch das Attribut `shadowrootdelegatesfocus`, das Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um einem übergeordneten `<div>`-Element, wenn es den Fokus hat, einen roten Rand zu geben.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt. Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt. Für den Shadow Root, für den `shadowrootdelegatesfocus` nicht gesetzt ist, können Sie überall außer im `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für den Shadow Root, für den `shadowrootdelegatesfocus` gesetzt ist, wird beim Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist. Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element fokussiert ist](template_with_focus.png)

### Deklarativer Shadow-DOM mit benannter Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente Slots in einem Shadow DOM basierend auf ihrem [`slot`](/de/docs/Web/HTML/Reference/Elements/slot)-Attribut (abgeglichen mit dem `name`-Attribut des Slots) zugewiesen werden können.

#### HTML

Zuerst definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikeltext-Informationen präsentiert.

Der Artikel enthält ein `<template>`-Element, das aufgrund des Vorhandenseins des `shadowrootmode`-Attributs ein Shadow Root wird. Wir müssen sein `shadowrootslotassignment`-Attribut nicht setzen, da die benannte Slot-Zuweisung der Standard ist.

Das Template definiert Elemente, die benannte Slots für "header" und "meta" Informationen haben, und einen unbenannten Slot für "body" Informationen. Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu differenzieren sind.

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

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente, um die Slots zu füllen. Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, die mit den `name`-Attributen der Slots im Template übereinstimmen und die entsprechenden Slots füllen. Die beiden {{htmlelement("p")}}-Elemente sind unbenannt, sodass beide in den unbenannten `<slot>` im "body"-Element eingesetzt werden.

#### Ergebnisse

Das folgende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Declarative shadow DOM with named slot assignment','100', '220px')}}

### Deklarativer Shadow-DOM mit manueller Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente manuell Slots in einem Shadow DOM zugewiesen werden können.

Mit diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden. Es gibt keine Standard-Zuweisung, sodass jeder Slot, der nicht zugewiesen ist, leer bleibt.

#### HTML

Zuerst haben wir eine verborgene Unterstützung-Warnung. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootslotassignment`-Attribut nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Dann definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikeltext-Informationen präsentiert. Es enthält ein `<template>`-Element, das aufgrund des Vorhandenseins des `shadowrootmode`-Attributs ein Shadow Root wird und die manuelle Slot-Zuweisung verwendet, da `shadowrootslotassignment="manual"` gesetzt ist.

Das Template definiert Elemente, die Slots für "header", "meta" und "body" Informationen haben, die separat durch ihr `id`-Attribut referenziert werden können. Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu unterscheiden sind.

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

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente, um die Slots zu füllen. Diese sind ebenfalls durch id identifiziert.

#### JavaScript

Der JavaScript-Code für die manuelle Slot-Zuweisung wird unten gezeigt. Zuerst holt sich der Code die Slots innerhalb des Shadow Roots, dann den Text, der eingefügt werden soll, und schließlich weist er den Text dem Slot zu. Beachten Sie, dass Sie einen Knoten nur einmal einem bestimmten Slot zuweisen können und dass, wenn Sie mehrere Knoten einem Slot mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zuweisen, die Reihenfolge, in der sie angegeben werden, die Reihenfolge kontrolliert, in der sie hinzugefügt werden.

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

Der Code zeigt die verborgene Unterstützung-Warnung an, wenn die Slot-Zuweisung nicht unterstützt wird.

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

Das folgende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Declarative shadow DOM with manual slot assignment','100', '220px')}}

> [!NOTE]
> Wenn das `shadowrootslotassignment`-Attribut nicht unterstützt wird, wird eine Warnungsmeldung angezeigt und der Browser verwendet die `named`-Zuweisung. Da jedoch weder die Slots noch die einzufügenden Elemente benannt sind, werden alle Elemente in den Titel-Slot eingefügt (da dies der erste unbenannte Slot ist und daher der "Standard"-Slot).

### Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, bewegen [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden bei Aufruf von `appendChild` nur dessen Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, da ein Ereignishandler dem ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Daten auf dem DocumentFragment werden nicht geklont')}}

### Verwenden von `<template for>` zum Patchen

Dieses Beispiel verwendet die `<?marker name="placeholder">`-Verarbeitungsanweisung als Platzhalter und füllt später die Inhalte mit `<template for="placeholder">`.

```html-nolint
<body>
  <div>
    <?marker name="placeholder">
  </div>
  ...
  <template for="placeholder">Lorem Ipsum...</template>
  ...
</body>
```

Dies führt anfänglich dazu, dass ein leeres `<div>` gerendert wird. Es wird dann auf Folgendes aktualisiert, nachdem das `<template>`-Element geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

### Verwenden von `<template for>` für Bereichs-Patching

Dieses Beispiel verwendet die `<?start>` und `<?end>` Verarbeitungsanweisungen, um Platzhalterinhalt zu enthalten, der initial angezeigt und später durch den `<template for>`-Inhalt ersetzt wird.

```html-nolint
<body>
  <div>
    <?start name="placeholder">
    Loading...
    <?end>
  </div>
  ...
  <template for="placeholder">Lorem Ipsum...</template>
  ...
</body>
```

Anfänglich wird das `<div>` mit dem `Loading...`-Platzhalterinhalt gerendert. Dies wird dann auf Folgendes aktualisiert, nachdem das `<template>` geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

Dieses Beispiel zeigt auch, dass Verarbeitungsanweisungen keine Kinder und keine Verschachtelung haben. Die `<?start>` und `<?end>` Verarbeitungsanweisungen sind zwar im Hinblick auf ihre Beziehung zu `<template for>` miteinander verbunden, jedoch separate [Knoten](/de/docs/Web/API/Node) und keine Öffnungs- und Schließtags. Daher enthalten sie den `Loading...`-Inhalt nicht als Kind (wie durch das Fehlen von Einrückungen dargestellt wird).

### Verwenden von `<template for>` zum Patchen von `<head>`-Elementen

Dieses Beispiel zeigt, dass `<template for>`-Elemente, die direkte Kinder des `<body>`-Elements sind, `<head>`-Marker patchen können.

```html-nolint
<head>
  ...
  <?start name="title"><title>Loading...</title><?end>
  <?start name="meta-description"><meta name="description" contents="Loading..."><?end>
  ...
</head>
<body>
  ...
  <template for="title"><title>The actual title of the page</title></template>
  <template for="meta-description"><meta name="description" contents="This is a meaningful description..."></template>
  ...
</body>
```

Ergibt folgendes, sobald die `<template>`-Elemente geparst wurden:

```html-nolint
<head>
  ...
  <title>The actual title of the page</title>
  <meta name="description" contents="This is a meaningful description...">
  ...
</head>
<body>
  ...
</body>
```

### Einfügen von Markern in `<template for>`, um Inhalte später erneut patchen zu können

Sie können auch Marker in `<template for>`-Elemente einfügen, wodurch neue Platzhalter erstellt werden, um das gleiche Content mehrmals patchen zu können. Sie können vorhandene `name`-Attribute wiederverwenden.

Wenn Sie zum Beispiel eine {{Glossary("SPA", "Single Page Application (SPA)")}} mit `<template for>` aufbauen, möchten Sie möglicherweise das `<title>` bei jedem Routenupdate patchen, was auf folgende Weise erreicht werden könnte:

```html-nolint
<head>
  ...
  <?start name="title">
  <title>Loading...</title>
  <?end>
  ...
</head>
<body>
  ...
  <template for="title"><?start name="title"><title>The actual title of the page</title><?end></template>
  ...
</body>
```

Dies ergibt folgendes, sobald das `<template>`-Element geparst wurde:

```html-nolint
<head>
  ...
  <?start name="title"><title>The actual title of the page</title><?end>
  ...
</head>
<body>
  ...
</body>
```

Später könnte ein neues `<template for="title">` in das DOM eingefügt werden, um das `<title>` erneut zu ersetzen.

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
          >Metadateninhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skriptunterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Anwendungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
        > akzeptiert,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skriptunterstützende Elemente</a
        >. Auch als Kinder eines {{HTMLElement("colgroup")}}
        Elements erlaubt, das kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a> Attribut hat.
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

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}} und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Deklarativer Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
