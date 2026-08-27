---
title: "`<template>` HTML-Inhalt-Vorlagen-Element"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

Das **`<template>`** [HTML](/de/docs/Web/HTML) Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}}-Fragmenten, die entweder später über JavaScript verwendet, sofort generiert und in ein Shadow DOM eingefügt oder als Teil von {{Glossary("Out_of_order_patching", "außerordentlichem Patching")}} mit `<template for="...">` verwendet werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `for`
  - : Das `for`-Attribut wird für außerordentliches Patching mit `<template for="...">` verwendet und passt zu einer entsprechenden `<?start id="...">` oder `<?marker "...">`-Markierung. Siehe den Abschnitt über [außerordentliches Patching](#außerordentliches_patching) und den [Beispielabschnitt](#beispiele).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement. Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Macht das interne Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen zulässigen Wert gesetzt ist. Wenn das Attribut nicht gesetzt ist, oder nicht auf einen zulässigen Wert gesetzt ist – oder wenn ein `ShadowRoot` bereits deklarativ im gleichen Elternteil erstellt wurde – dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert. Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht in ein Shadow Root umgewandelt werden, z. B. durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht-standardisierte `shadowroot`-Attribut in älteren Tutorials und Beispielen finden, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte `shadowrootmode`-Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, enthält ein mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellter Klon des Shadow-Hosts (das Elternelement dieses `<template>`) ein Shadow Root in der Kopie.

- `shadowrootcustomelementregistry`
  - : Setzt die [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null`, anstatt auf das [Custom Element Registry](/de/docs/Web/API/Document/customElementRegistry) des Dokuments. Dies ermöglicht das spätere Anfügen eines begrenzten [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) mit der Methode [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn dies gesetzt ist und ein nicht-fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Baum delegiert. Der Wert standardmäßig auf `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der `referenceTarget`-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn dies gesetzt ist, wird das referenzierte Ziel-Element zum effektiven Ziel der Referenzierung des Host-Elements von außerhalb des Shadow DOM.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`. Wenn gesetzt, kann das Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden. Der Wert standardmäßig auf `false`.

- `shadowrootslotassignment` {{experimental_inline}}
  - : Stellt die [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft eines durch dieses Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ein. Dies ist das deklarative Äquivalent der Option [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment) der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch {{htmlelement("slot")}}-Elementen innerhalb dieses Shadow Roots zugewiesen. Dies ist der Standardwert.

        Elemente mit dem [`slot`-Attribut](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, das das entsprechende `name`-Attribut hat. Wenn mehrere Elemente denselben Slotnamen angeben, werden alle dem ersten Slot im Template hinzugefügt, der diesen Namen hat, und in der Reihenfolge gerendert, in der sie deklariert sind. Alle unbenannten Elemente – Elemente, die kein `slot`-Attribut angeben – werden dem Standardslot in der Reihenfolge zugewiesen, in der sie deklariert sind. Dies ist der erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden manuell bestimmten Slot-Elementen mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen. Es findet keine automatische Zuweisung statt.

## Verwendungshinweise

Dieses Element hat keinen zulässigen Inhalt, da alles, was in der HTML-Quelle darin verschachtelt ist, nicht wirklich die Kinder des `<template>`-Elements wird. Die Eigenschaft [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) des `<template>`-Elements ist immer leer, und Sie können auf diesen verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft zugreifen. Wenn Sie jedoch Methoden wie [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf das `<template>`-Element aufrufen, würden Sie Kinder in das `<template>`-Element selbst einfügen, was ein Verstoß gegen sein Inhaltsmodell ist und tatsächlich das von der `content`-Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht aktualisiert.

Aufgrund der Art und Weise, wie das `<template>`-Element geparst wird, sind alle `<html>`, `<head>` und `<body>`-Eröffnungs- und Schließtags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert. So ist `<template><head><title>Test</title></head></template>` dasselbe wie `<template><title>Test</title></template>`.

Es gibt drei Hauptansatzweisen, um das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert. Die entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft (ohne äquivalentes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den vom Template dargestellten DOM-Teilbaum enthält.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des clonierten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `document.importNode()` verwenden, um das `content`-Fragment zu klonen, sodass benutzerdefinierte Element-Nachkommen mit den Definitionen im aktuellen Dokument und nicht im separaten Dokument, das das Template besitzt, konstruiert werden. Siehe die Beispiele auf der Seite [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) für weitere Details.

Bitte beachten Sie, dass der `DocumentFragment`-Container selbst keine Daten haben sollte. Siehe das Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, erzeugt der HTML-Parser sofort ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen ist und an das Elternelement angefügt wird. Dies ist das deklarative Äquivalent des Aufrufs von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow Root an ein Element anzufügen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement). Entsprechend, wenn es mehrere deklarative Shadow Roots gibt, wird nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt – nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Andere mit `shadowroot` vorangestellte Attribute ermöglichen die deklarative Anpassung des `ShadowRoot`, z. B. die Steuerung, wie Slots zugewiesen werden.

### Außerordentliches Patching

Traditionell wird HTML in Reihenfolge geliefert und von oben nach unten gelesen, verarbeitet und angezeigt. Um diese Reihenfolge zu ändern, können Sie entweder mit CSS Elemente ausblenden oder umarrangieren oder das von HTML erzeugte DOM nachträglich mit JavaScript aktualisieren. Viele Seiten setzen sich jedoch aus mehreren Teilen zusammen, die möglicherweise zu unterschiedlichen Zeiten bereit sind, gerendert zu werden oder die für den Benutzer früher bereitgestellt werden sollten.

Das `<template>`-Element ermöglicht die Bereitstellung von HTML {{Glossary("Out_of_order_patching", "außerhalb der Reihenfolge")}}, was das Ersetzen von [Verarbeitungsanweisungen](/de/docs/Web/API/ProcessingInstruction) durch den Inhalt des `<template>`-Elements (auch als **Patching** bezeichnet) beinhaltet.

Zum Beispiel kann ein `<?marker name="my-identifier">`-Verarbeitungsanweisungsmarker mit dem Inhalt eines später im HTML bereitgestellten `<template for="my-identifier">`-Elements gepatcht werden. Siehe das Beispiel [Verwenden von `<template for>` für Patching](#using_template_for_for_patching).

Neben den Verarbeitungsanweisungsmarkern `<?marker>` können ein `<?start>` und `<?end>`-Paar verwendet werden, um temporären Inhalt einzuschließen (z. B. `<?start name="my-identifier">Loading...<?end>`), der vorübergehend angezeigt wird, bis das `<template for="my-identifier">` verarbeitet wird und der gesamte Abschnitt ersetzt wird. Siehe das Beispiel [Verwenden von `<template for>` für Bereichs-Patching](#using_template_for_for_range_patching).

Wenn diese in HTML geschrieben sind, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es beim Parsen des DOM hinzu, wenn es nicht bereitgestellt wird. Daher sind sowohl `<?start?>` als auch `<?start>` gültig und werden als `<?start?>` geparst. XML ist strenger und erfordert das abschließende `?`.

Wenn das `for`-Attribut nicht zu einem Verarbeitungsanweisungsnamen passt, bleibt der `<template>`-Inhalt im DOM verborgen und wird für kein Patch verwendet.

Um zu verhindern, dass Komponenten nicht verwandte Teile des DOM aktualisieren, können `<template for="...">`-Elemente Marker nur im DOM-Baum des `<template>`-Elternteils patchen. Die einzige Ausnahme bilden `<template>`-Elemente, die unmittelbare Kinder des `<body>`-Elements sind — sie können auch `<head>`-Elemente patchen, um das `<title>` und andere `<head>`-Elemente zu aktualisieren.

## Beispiele

### Erstellen von Tabellenzeilen

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile repräsentiert.

Nachdem die Tabelle erstellt und das Template definiert wurden, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mit dem Template als Basis konstruiert wird.

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

{{EmbedLiveSample("Erstellen von Tabellenzeilen", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel ist zu Beginn des Markups eine versteckte Support-Warnung enthalten. Diese Warnung wird später mit JavaScript angezeigt, falls der Browser das Attribut `shadowrootmode` nicht unterstützt. Als nächstes gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>`-Elements aufgrund des Vorhandenseins des `shadowrootmode`-Attributs generiert wird.

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

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen Shadow Root angewendet wird, der deklarativ erstellt wird, und welchen Effekt dies auf den Fokus hat.

Der Code erklärt zuerst einen Shadow Root innerhalb eines `<div>`-Elements unter Verwendung des `<template>`-Elements mit dem Attribut `shadowrootmode`. Dies zeigt sowohl ein nicht-fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an. Es verwendet auch CSS, um Elemente mit {{cssxref(":focus")}} in Blau zu stylen, und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, welches den Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht-fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um ein rotes Umrandung für das Eltern-`<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten gezeigt. Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt. Bei dem Shadow Root ohne gesetztes `shadowrootdelegatesfocus` können Sie überall klicken, außer auf das `<input>`, und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` bewirkt ein Klick auf den Text (der nicht fokussierbar ist), dass das `<input>`-Element ausgewählt wird, da dies das erste fokussierbare Element im Baum ist. Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

### Deklaratives Shadow DOM mit benannter Slotzuweisung

Dieses Beispiel zeigt, wie Elemente basierend auf ihrem [`slot`-Attribut](/de/docs/Web/API/Element/slot) (abgeglichen mit dem `name`-Attribut) Slots in einem Shadow DOM zugewiesen werden können.

#### HTML

Zuerst definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelkörperinformationen darstellt.

Der Artikel enthält ein `<template>`-Element, das aufgrund des Vorhandenseins des `shadowrootmode`-Attributs zum Shadow Root wird. Wir müssen das `shadowrootslotassignment`-Attribut nicht setzen, da die benannte Slotzuweisung der Standard ist.

Das Template definiert Elemente, die benannte Slots für "header"- und "meta"-Informationen haben, und einen unbenannten Slot für "body"-Informationen. Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu unterscheiden sind.

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

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente zum Befüllen der Slots. Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, die mit den `name`-Attributen an Slots im Template übereinstimmen und werden die entsprechenden Slots befüllen. Die zwei {{htmlelement("p")}}-Elemente sind unbenannt, daher werden sie beide in den unbenannten `<slot>` im "body"-Element eingefügt.

#### Ergebnisse

Das folgende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Deklaratives Shadow DOM mit benannter Slotzuweisung','100', '220px')}}

### Deklaratives Shadow DOM mit manueller Slotzuweisung

Dieses Beispiel zeigt, wie Elemente mit manueller Slotzuweisung Slots in einem Shadow DOM zugewiesen werden können.

Bei diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden. Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen wird, leer ist.

#### HTML

Zuerst haben wir eine versteckte Support-Warnung. Diese Warnung wird später mit JavaScript angezeigt, falls der Browser das `shadowrootslotassignment`-Attribut nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Als nächstes definieren wir ein {{HTMLElement("article")}}-Element, das Titel-, Metadaten- und Artikelkörperinformationen darstellt. Dies enthält ein `<template>`-Element, das zum Shadow Root wird, weil das Attribut `shadowrootmode` vorhanden ist, und wird manuelle Slotzuweisung verwenden, weil `shadowrootslotassignment="manual"` gesetzt ist.

Das Template definiert Elemente, die Slots für "header"-, "meta"- und "body"-Informationen haben, die separat durch ihr `id`-Attribut referenziert werden können. Die Elemente sind unterschiedlich gestylt, sodass sie leicht zu unterscheiden sind.

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

Innerhalb desselben Hosts, unterhalb des Templates, haben wir vier Elemente zum Befüllen der Slots. Diese sind ebenfalls durch ID identifiziert.

#### JavaScript

Das JavaScript für die manuelle Slotzuweisung wird unten gezeigt. Zuerst ruft der Code die Slots innerhalb des Shadow Roots ab, dann den Text, der eingefügt werden soll, und schließlich weist der Text dem Slot zu. Beachten Sie, dass Sie einem bestimmten Slot nur einmal einen Knoten zuweisen können und dass, wenn Sie mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) mehreren Knoten einem Slot zuweisen, die Reihenfolge, in der sie angegeben werden, die Reihenfolge steuert, in der sie hinzugefügt werden.

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

Der Code zeigt die versteckte Support-Warnung an, wenn die Slot-Zuweisung nicht unterstützt wird.

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

{{EmbedLiveSample('Deklaratives Shadow DOM mit manueller Slotzuweisung','100', '220px')}}

> [!NOTE]
> Wenn das `shadowrootslotassignment`-Attribut nicht unterstützt wird, wird eine Warnungsnotiz angezeigt und der Browser verwendet `named`-Zuweisung. Da jedoch keine der Slots oder einzufügenden Elemente benannt sind, werden alle Elemente in den Title-Slot eingefügt (da dies der erste unbenannte Slot ist und daher der "Standard"-Slot ist).

### Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kinderknoten_ dieses Wertes in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment`, statt an das `DocumentFragment` selbst, anzufügen.

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

Da `firstClone` ein `DocumentFragment` ist, werden bei `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler dem ersten _Kinderknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler beim Aufruf von `appendChild` kopiert, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Daten auf dem DocumentFragment werden nicht geklont')}}

### Verwendung von `<template for>` für Patching

Dieses Beispiel verwendet die Verarbeitungsanweisung `<?marker name="placeholder">` als Platzhalter und füllt später den Inhalt mit `<template for="placeholder">` auf.

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

Anfänglich wird ein leeres `<div>` gerendert. Dies wird dann auf das Folgende aktualisiert, nachdem das `<template>`-Element geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

### Verwendung von `<template for>` für Bereichs-Patching

Dieses Beispiel verwendet die Verarbeitungsanweisungen `<?start>` und `<?end>`, um Platzhalterinhalte zu enthalten, die anfänglich angezeigt und dann später durch den `<template for>`-Inhalt ersetzt werden.

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

Zu Beginn wird das `<div>` mit dem Platzhalter "Loading..." gerendert. Dies wird dann auf das Folgende aktualisiert, nachdem das `<template>`-Element geparst und verarbeitet wurde:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

Dieses Beispiel zeigt auch das Fehlen von Kindverarbeitungsanweisungen und Verschachtelungen. Die Verarbeitungsanweisungen `<?start>` und `<?end>` sind, obwohl sie hinsichtlich ihrer Beziehung zu `<template for>` verknüpft sind, separate [Knoten](/de/docs/Web/API/Node) und keine öffnenden und schließenden Tags. Sie enthalten daher den "Loading..."-Inhalt nicht als Kind (wie durch das Fehlen einer Einrückung gezeigt).

### Verwendung von `<template for>` zum Patchen von `<head>`-Elementen

Dieses Beispiel zeigt, dass `<template for>`-Elemente, die unmittelbare Kinder des `<body>`-Elements sind, `<head>`-Marker patchen können.

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

### Einfügen von Markern in `<template for>`, um Inhalte später erneut zu patchen

Sie können auch Marker in `<template for>`-Elemente einfügen und damit neue Platzhalter erstellen, um denselben Inhalt mehrfach zu patchen. Sie können vorhandene `name`-Attribute wiederverwenden.

Wenn Sie beispielsweise eine {{Glossary("SPA", "Single Page Application (SPA)")}} mit `<template for>` erstellen, möchten Sie möglicherweise, dass das `<title>` bei jedem Routenupdate gepatcht wird, was so erreicht werden könnte:

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

Dies wird das Folgende ergeben, sobald das `<template>`-Element geparst wurde:

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
          >Phrasierungsinhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Skriptunterstützende Elemente</a
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
          >Metadateninhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Ebenfalls erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>nicht</em> das
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
      <td>Keine <code>Rolle</code> erlaubt</td>
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
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Eingrenzung](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Deklaratives Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Verwendung von Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
