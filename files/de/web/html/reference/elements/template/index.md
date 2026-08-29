---
title: "`<template>` HTML-Inhalt-Vorlagen-Element"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

Das **`<template>`** [HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet, sofort generiert und in ein Shadow-DOM eingefügt oder als Teil eines {{Glossary("Out_of_order_patching", "out-of-order patching")}} mit `<template for="...">` genutzt werden können.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `for` {{experimental_inline}}
  - : Das `for`-Attribut wird für out-of-order patching mit `<template for="...">` verwendet und stimmt mit einem entsprechenden `<?start id="...">` oder `<?marker "...">` Marker überein. Siehe den [out-of-order patching Abschnitt](#out-of-order_patching) und den [Beispiel-Abschnitt](#beispiele).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Macht das interne Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, wenn es auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, auf einen nicht erlaubten Wert gesetzt ist oder ein `ShadowRoot` bereits im gleichen Elternelement deklarativ erstellt wurde, wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht mehr in ein Shadow Root umgewandelt werden, zum Beispiel durch Setzen der Eigenschaft [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie finden möglicherweise das nicht standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen, die von Chrome 90-110 unterstützt wurden. Dieses Attribut wurde mittlerweile entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow Host (Elternelement dieses `<template>`) mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) einen Shadow Root in der Kopie enthalten.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null`, statt auf das [Custom-Element-Register](/de/docs/Web/API/Document/customElementRegistry) des Dokuments.
    Dadurch kann ein eingeschränktes [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) verbunden werden.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht-gewöhnliches Element im Shadow Tree ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Tree delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements im Shadow DOM sein. Wenn gesetzt, wird bei Zielverweisen auf das Host-Element von außerhalb des Shadow DOM das referenzierte Zielelement zum tatsächlichen Ziel des Verweises auf das Host-Element.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, kann der Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Wert ist standardmäßig `false`.

- `shadowrootslotassignment` {{experimental_inline}}
  - : Setzt die [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
    Dies ist das deklarative Äquivalent zur [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment)-Option der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow Root zugewiesen.
        Dies ist der Standardwert.

        Elemente mit dem [`slot`-Attribut](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, das das entsprechende `name`-Attribut hat.
        Wenn mehrere Elemente denselben Slot-Namen angeben, werden sie alle dem ersten Slot im Template hinzugefügt, der diesen Namen trägt und in der Reihenfolge dargestellt, in der sie deklariert sind.
        Alle unbenannten Elemente – Elemente, die kein `slot`-Attribut angeben – werden dem Standardslot in der Reihenfolge zugewiesen, in der sie deklariert sind.
        Dies ist der erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden manuell bestimmten Slot-Elementen mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen.
        Es findet keine automatische Zuweisung statt.

## Verwendungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was im HTML-Quelltext zwischen seinen Tags genestet ist, nicht wirklich die Kinder des `<template>`-Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)-Eigenschaft des `<template>`-Elements ist immer leer, und Sie können auf den genesteten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden für das `<template>`-Element aufrufen, würden Sie Kinder im `<template>`-Element selbst einfügen, was ein Verstoß gegen sein Inhaltsmodell ist und das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das durch die `content`-Eigenschaft zurückgegeben wird, tatsächlich nicht aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, sind alle öffnenden und schließenden Tags `<html>`, `<head>` und `<body>` innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt drei Hauptmöglichkeiten, das `<template>`-Element zu verwenden.

### Vorlagen-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface beinhaltet eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne ein gleichwertiges Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der durch das Template dargestellt wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion benutzerdefinierter Elemente. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, damit benutzerdefinierte Element-Nachkommen unter Verwendung der Definitionen im aktuellen Dokument konstruiert werden, anstatt im separaten Dokument, das den Template-Inhalt besitzt. Siehe die Beispieldetails auf der Seite [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten enthalten sollte. Siehe das Beispiel [Daten im DocumentFragment werden nicht kopiert](#daten_im_documentfragment_werden_nicht_kopiert) für weitere Details.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, wird das Shadow DOM sofort vom HTML-Parser generiert. Das Element wird im DOM durch seinen in ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingewickelten Inhalt ersetzt, der am Elternelement befestigt ist.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow Root an ein Element anzufügen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht das `shadowrootmode`-Attribut hat, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ähnlich wird bei mehreren deklarativen Shadow Roots nur der erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Andere mit `shadowroot` vorangestellte Attribute erlauben eine deklarative Anpassung des `ShadowRoot`, wie z. B. die Steuerung, wie die Slots zugewiesen werden.

### Out-of-order patching

Traditionell wird HTML in der Reihenfolge übermittelt und von oben nach unten gelesen, verarbeitet und angezeigt. Um diese Reihenfolge zu ändern, können Sie entweder Elemente mit CSS ausblenden oder neu anordnen oder das DOM, das durch das HTML erzeugt wurde, nachträglich mit JavaScript aktualisieren. Viele Seiten bestehen jedoch aus mehreren Teilen, die zu unterschiedlichen Zeiten bereit sein können, gerendert zu werden, oder die möglicherweise früher an den Benutzer geliefert werden sollten, weil sie wichtiger sind.

Das `<template>`-Element ermöglicht die Bereitstellung von HTML {{Glossary("Out_of_order_patching", "out-of-order")}}, was das Ersetzen von [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction)-Markern durch den Inhalt des `<template>`-Elements bedeutet (auch als **patching** bezeichnet).

Zum Beispiel kann ein `<?marker name="my-identifier">`-Verarbeitungsanweismarker mit dem Inhalt eines `<template for="my-identifier">`-Elements ersetzt werden, das viel später im HTML geliefert wird. Siehe das Beispiel [Verwenden von `<template for>` zum patchen](#using_template_for_for_patching).

Neben dem `<?marker>`-Verarbeitungsanweisungsmarker kann ein `<?start>`- und `<?end>`-Paar verwendet werden, um temporären Inhalt zu enthalten (zum Beispiel `<?start name="my-identifier">Loading...<?end>`), der temporär angezeigt wird, bis das `<template for="my-identifier">` verarbeitet wird und der gesamte Abschnitt ersetzt wird. Siehe das Beispiel [Verwenden von `<template for>` für Bereichspatching](#using_template_for_for_range_patching).

Wenn sie im HTML geschrieben werden, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es hinzu, wenn es nicht vorhanden ist, wenn das DOM geparst wird. Daher sind sowohl `<?start?>` als auch `<?start>` gültig und werden als `<?start?>` geparst. XML ist strikter und erfordert das abschließende `?`.

Wenn das `for`-Attribut nicht mit einem `name`-Verarbeitungsanweisungsmarker übereinstimmt, bleibt der `<template>`-Inhalt im DOM verborgen und wird in keinem Patch verwendet.

Um zu verhindern, dass Komponenten nicht verwandte Teile des DOM aktualisieren, können `<template for="...">`-Elemente nur Marker innerhalb des DOM-Baums des `<template>`-Elternelements patchen. Die einzige Ausnahme sind `<template>`-Elemente, die direkte Kinder des `<body>`-Elements sind — sie können auch `<head>`-Elemente patchen, um das Aktualisieren von `<title>`- und anderen `<head>`-Elementen zu ermöglichen.

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

Zuerst haben wir eine Tabelle, in die wir später mit JavaScript-Inhalten einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile anhand des Templates als Grundlage konstruiert wird.

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

In diesem Beispiel ist eine versteckte Unterstützungswarnung zu Beginn des Markups enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode`-Attribut nicht unterstützt. Als Nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichem Verhalten enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das anstelle des `<template>`-Elements generiert wird, weil das `shadowrootmode`-Attribut vorhanden ist.

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

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf einen Shadow Root angewendet wird, der deklarativ erstellt wird, und welchen Effekt dies auf den Fokus hat.

Der Code erklärt zuerst einen Shadow Root innerhalb eines `<div>`-Elements mit dem `<template>`-Element mit dem `shadowrootmode`-Attribut.
Dies zeigt sowohl ein nicht-fokussierbares `<div>` an, das Text enthält, als auch ein fokussierbares `<input>`-Element.
Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} blau zu färben, und um das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, jedoch wird das `shadowrootdelegatesfocus`-Attribut gesetzt, das den Fokus auf das erste fokussierbare Element im Tree delegiert, wenn ein nicht-fokussierbares Element im Tree ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um einen roten Rand um das Elternelement `<div>` zu legen, wenn es fokussiert ist.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für den Shadow Root, der kein `shadowrootdelegatesfocus` gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es wie im zweiten Bild aus).

![Screenshot of code with no focus set](template_with_no_focus.png)

Für den Shadow Root mit gesetztem `shadowrootdelegatesfocus`, wird beim Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Tree ist.
Dies fokussiert auch das Elternelement, wie unten gezeigt.

![Screenshot of the code where the element has focus](template_with_focus.png)

### Deklaratives Shadow DOM mit benannter Schlitzzuweisung

Dieses Beispiel zeigt, wie Elemente basierend auf ihrem [`slot`-Attribut](/de/docs/Web/API/Element/slot) - das gegen das `name`-Attribut des Slots abgeglichen wird - in einen Shadow DOM zugewiesen werden können.

#### HTML

Zuerst definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelkörperinformationen präsentiert.

Der Artikel enthält ein `<template>`-Element, das zu einem Shadow Root wird, weil das `shadowrootmode`-Attribut vorhanden ist.
Wir müssen nicht das `shadowrootslotassignment`-Attribut setzen, da die Zuordnung benannter Slots der Standard ist.

Das Template definiert Elemente, die benannte Slots für "header" und "meta"-Informationen und einen unbenannten Slot für "body"-Informationen haben.
Die Elemente sind unterschiedlich gestylt, damit sie leicht zu unterscheiden sind.

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

Im selben Host, unter dem Template, haben wir vier Elemente zum Auffüllen der Slots.
Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, die mit den `name`-Attributen auf Slots im Template übereinstimmen, und werden die entsprechenden Slots füllen.
Die beiden {{htmlelement("p")}}-Elemente sind unbenannt, sodass sie beide in den unbenannten `<slot>` im "body"-Element eingefügt werden.

#### Ergebnisse

Das folgende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Declarative shadow DOM with named slot assignment','100', '220px')}}

### Deklaratives Shadow DOM mit manueller Schlitzzuweisung

Dieses Beispiel zeigt, wie Elemente manuell zu bestimmten Slots in einem Shadow DOM zugewiesen werden können.

Mit diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden.
Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen wird, leer sein wird.

#### HTML

Zuerst haben wir eine versteckte Unterstützungswarnung.
Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootslotassignment`-Attribut nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Als nächstes definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelkörperinformationen präsentiert.
Dies enthält ein `<template>`-Element, das zu einem Shadow Root wird, weil das `shadowrootmode`-Attribut vorhanden ist und manuelle Slotzuweisung verwendet wird, weil `shadowrootslotassignment="manual"` gesetzt ist.

Das Template definiert Elemente, die Slots für "header", "meta" und "body"-Informationen haben, die separat durch ihr `id`-Attribut referenziert werden können.
Die Elemente sind unterschiedlich gestylt, damit sie leicht zu unterscheiden sind.

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

Im selben Host, unter dem Template, haben wir vier Elemente zum Auffüllen der Slots.
Diese sind ebenfalls durch `id` identifiziert.

#### JavaScript

Das JavaScript für die manuelle Slotzuweisung wird unten gezeigt.
Zuerst erhält der Code die Slots im Shadow Root, dann den Text, der eingesetzt werden soll, und weist schließlich den Text dem Slot zu.
Beachten Sie, dass Sie einen Knoten nur einmal einem bestimmten Slot zuweisen können, und dass wenn Sie mehrere Knoten mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) einem einzigen Slot zuweisen, die Reihenfolge, in der sie angegeben werden, die Reihenfolge steuert, in der sie hinzugefügt werden.

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

Der Code zeigt die versteckte Unterstützungswarnung an, wenn die Slotzuweisung nicht unterstützt wird.

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

Das untenstehende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Declarative shadow DOM with manual slot assignment','100', '220px')}}

> [!NOTE]
> Wenn das `shadowrootslotassignment`-Attribut nicht unterstützt wird, wird eine Warnung angezeigt und der Browser wird die benannte Zuordnung verwenden.
> Da jedoch keiner der Slots oder einzufügenden Elemente benannt sind, werden alle Elemente in den Titel-Slot eingefügt (weil dies der erste unbenannte Slot ist und daher der "Standard"-Slot).

### Daten im DocumentFragment werden nicht kopiert

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` zu hängen, statt an das `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden nur dessen Kinder zu `container` hinzugefügt, wenn `appendChild` aufgerufen wird; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, wird der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert, wie man es erwarten würde.

{{EmbedLiveSample('Data on the DocumentFragment is not cloned')}}

### Verwenden von `<template for>` zum patchen

Dieses Beispiel verwendet die Verarbeitungsanweisung `<?marker name="placeholder">` als Platzhalter und füllt später die Inhalte mit `<template for="placeholder">` aus.

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

Anfänglich wird dadurch ein leeres `<div>` gerendert. Es wird dann zu folgendem aktualisiert, nachdem das `<template>`-Element geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

### Verwenden von `<template for>` für Bereichspatching

Dieses Beispiel verwendet die Verarbeitungsanweisungen `<?start>` und `<?end>`, um Platzhalterinhalt zu enthalten, der zunächst angezeigt und dann durch den `<template for>`-Inhalt ersetzt wird.

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

Anfänglich wird das `<div>` mit dem `Loading...`-Platzhalterinhalt gerendert. Dies wird dann zu folgendem aktualisiert, nachdem das `<template>` geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

Dieses Beispiel demonstriert auch das Fehlen von Verarbeitungsanweisungskindern und -schachtelungen. Die Verarbeitungsanweisungen `<?start>` und `<?end>`, obwohl sie in ihrer Beziehung zu `<template for>` verlinkt sind, sind separate [Knoten](/de/docs/Web/API/Node) und keine öffnenden und schließenden Tags. Sie enthalten daher nicht den `Loading...`-Inhalt als Kind (wie durch das Fehlen der Einrückung gezeigt).

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

### Einschließen von Markern in `<template for>`, um Inhalte später erneut patchen zu können

Sie können auch Marker in `<template for>`-Elemente einfügen, um neue Platzhalter zu erstellen, die das mehrfache Patchen desselben Inhalts ermöglichen. Bestehende `name`-Attribute können erneut verwendet werden.

Zum Beispiel, wenn Sie eine {{Glossary("SPA", "Single Page Application (SPA)")}} mit `<template for>` erstellen, möchten Sie möglicherweise, dass der `<title>` bei jedem Routenupdate gepatcht wird, was so erreicht werden könnte:

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

Später könnte ein neues `<template for="title">` in das DOM eingefügt werden, um den `<title>` erneut zu ersetzen.

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Verwendungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag weglassbar</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>nicht</em> das
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut
        hat.
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
- [CSS-Kapselung](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Deklaratives Shadow DOM (mit html)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
