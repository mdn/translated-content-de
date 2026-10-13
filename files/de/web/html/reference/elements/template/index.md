---
title: "`<template>`: HTML-Element für Inhaltsvorlagen"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 19370346042efad9e179fbf1f55deeeadee98c40
---

Das [HTML](/de/docs/Web/HTML)-Element **`<template>`** dient dazu, {{Glossary("HTML", "HTML")}}-Fragmente bereitzuhalten. Diese können später über JavaScript verwendet, unmittelbar erzeugt und in ein Shadow DOM eingefügt oder mit `<template for="...">` für {{Glossary("Out_of_order_patching", "Out-of-Order-Patching")}} genutzt werden.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `for` {{experimental_inline}}
  - : Das Attribut `for` wird für Out-of-Order-Patching mit `<template for="...">` verwendet. Dabei wird eine passende `<?start id="...">`- oder `<?marker "...">`-Markierung gesucht. Weitere Informationen finden Sie im [Abschnitt über Out-of-Order-Patching](#out-of-order-patching) und im [Abschnitt mit Beispielen](#beispiele).

- `shadowrootmode`
  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es ist die deklarative Variante der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert dieselben {{Glossary("enumerated", "Aufzählungswerte")}}.
    - `open`
      - : Macht das interne Shadow-Root-DOM für JavaScript zugänglich (für die meisten Anwendungsfälle empfohlen).

    - `closed`
      - : Verbirgt das interne Shadow-Root-DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt im DOM ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen zulässigen Wert gesetzt ist.
    > Ist das Attribut nicht gesetzt oder hat es keinen zulässigen Wert – oder wurde im selben Elternelement bereits deklarativ ein `ShadowRoot` erstellt –, wird stattdessen ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) erzeugt.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht mehr in einen Shadow Root umgewandelt werden, beispielsweise durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > In älteren Tutorials und Beispielen finden Sie möglicherweise das nicht standardisierte Attribut `shadowroot`, das in Chrome 90–110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Ist das Attribut gesetzt, enthält eine mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellte Kopie des Shadow-Hosts (des Elternelements dieses `<template>`) ebenfalls einen Shadow Root.

- `shadowrootcustomelementregistry`
  - : Setzt die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `null` statt auf die [Custom-Element-Registry](/de/docs/Web/API/Document/customElementRegistry) des Dokuments.
    Dadurch kann später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) eine auf den Gültigkeitsbereich beschränkte [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zugeordnet werden.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der Eigenschaft [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Ist das Attribut gesetzt und wird im Shadow Tree ein nicht fokussierbares Element ausgewählt, wird der Fokus an das erste fokussierbare Element im Baum weitergegeben.
    Der Standardwert ist `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Setzt den Wert der Eigenschaft `referenceTarget` eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Ist das Attribut gesetzt, wird bei Zielreferenzen auf das Host-Element von außerhalb des Shadow DOM das angegebene Zielelement zum effektiven Ziel der Referenz auf das Host-Element.

- `shadowrootserializable`
  - : Setzt den Wert der Eigenschaft [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Ist das Attribut gesetzt, kann der Shadow Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert werden, wenn der Parameter `options.serializableShadowRoots` auf `true` gesetzt ist.
    Der Standardwert ist `false`.

- `shadowrootslotassignment` {{experimental_inline}}
  - : Setzt die Eigenschaft [`slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) eines mit diesem Element erstellten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
    Dies ist das deklarative Gegenstück zur Option [`slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment) der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow).
    - `named`
      - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow Root zugewiesen.
        Dies ist der Standardwert.

        Elemente mit dem [Attribut `slot`](/de/docs/Web/API/Element/slot) werden dem ersten {{htmlelement("slot")}} im Template zugewiesen, dessen Attribut `name` übereinstimmt.
        Geben mehrere Elemente denselben Slot-Namen an, werden sie alle dem ersten Slot im Template mit diesem Namen hinzugefügt und in der Reihenfolge ihrer Deklaration dargestellt.
        Alle unbenannten Elemente – also Elemente ohne Attribut `slot` – werden in der Reihenfolge ihrer Deklaration dem Standard-Slot zugewiesen.
        Dies ist das erste unbenannte `<slot>` im Template.

    - `manual`
      - : Elemente werden bestimmten Slot-Elementen mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) manuell zugewiesen.
        Es erfolgt keine automatische Zuweisung.

## Hinweise zur Verwendung

Dieses Element hat keinen zulässigen Inhalt, da alles, was im HTML-Quelltext darin verschachtelt ist, nicht tatsächlich zu Kindelementen des `<template>`-Elements wird. Die Eigenschaft [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) des `<template>`-Elements ist immer leer. Auf den darin verschachtelten Inhalt können Sie nur über die spezielle Eigenschaft [`content`](/de/docs/Web/API/HTMLTemplateElement/content) zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden für das `<template>`-Element aufrufen, fügen Sie dem `<template>`-Element selbst Kindelemente hinzu. Dies verstößt gegen sein Inhaltsmodell und aktualisiert nicht das von der Eigenschaft `content` zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Aufgrund der Art, wie das `<template>`-Element geparst wird, sind alle öffnenden und schließenden `<html>`-, `<head>`- und `<body>`-Tags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert. Daher ist `<template><head><title>Test</title></head></template>` gleichbedeutend mit `<template><title>Test</title></template>`.

Es gibt drei Hauptmöglichkeiten, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht dargestellt.
Die zugehörige Schnittstelle [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) besitzt die standardmäßige Eigenschaft [`content`](/de/docs/Web/API/HTMLTemplateElement/content) (ohne entsprechendes Inhalts- oder Markup-Attribut). Diese Eigenschaft `content` ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit dem DOM-Teilbaum, den das Template repräsentiert.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt, welche [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zum Erstellen etwaiger Custom Elements verwendet wird. Verwenden Sie daher `document.importNode()`, um das `content`-Fragment zu klonen. So werden enthaltene Custom Elements anhand der Definitionen im aktuellen Dokument erstellt und nicht anhand der Definitionen im separaten Dokument, zu dem der Template-Inhalt gehört. Weitere Einzelheiten finden Sie in den Beispielen auf der Seite zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Beachten Sie, dass dem `DocumentFragment`-Container selbst keine Daten zugeordnet werden sollten. Weitere Einzelheiten finden Sie im Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont).

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit dem Wert `open` oder `closed` enthält, erzeugt der HTML-Parser unmittelbar ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingeschlossen und dem Elternelement zugeordnet wird.
Dies ist das deklarative Gegenstück zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element einen Shadow Root zuzuordnen.

Hat `shadowrootmode` einen anderen Wert oder fehlt das Attribut `shadowrootmode`, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Gibt es mehrere deklarative Shadow Roots, wird ebenfalls nur der erste durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt – weitere Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

Weitere Attribute mit dem Präfix `shadowroot` ermöglichen die deklarative Anpassung des `ShadowRoot`, etwa die Steuerung der Slot-Zuweisung.

### Out-of-Order-Patching

> [!NOTE]
> Dieser Anwendungsfall ist noch experimentell und wird nur von wenigen Browsern unterstützt.
> Informationen zur Browserunterstützung finden Sie in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität).

Herkömmlicherweise wird HTML in einer festen Reihenfolge ausgeliefert und von oben nach unten gelesen, verarbeitet und angezeigt. Um diese Reihenfolge zu ändern, können Sie Elemente entweder mit CSS ausblenden oder umordnen oder das aus dem HTML erzeugte DOM anschließend mit JavaScript aktualisieren. Viele Seiten bestehen jedoch aus mehreren Teilen, die zu unterschiedlichen Zeitpunkten zur Darstellung bereit sein können oder deren frühere Auslieferung für die Benutzer wichtiger ist.

Das `<template>`-Element ermöglicht die Auslieferung von HTML {{Glossary("Out_of_order_patching", "außerhalb der Reihenfolge")}}. Dabei werden Markierungen in Form von [Verarbeitungsanweisungen](/de/docs/Web/API/ProcessingInstruction) durch den Inhalt des `<template>`-Elements ersetzt (auch **Patching** genannt).

Beispielsweise kann eine Verarbeitungsanweisung `<?marker name="my-identifier">` durch den Inhalt eines `<template for="my-identifier">`-Elements ersetzt werden, das erst wesentlich später im HTML folgt. Siehe das Beispiel [Mit `<template for>` Inhalte ersetzen](#using_template_for_for_patching).

Neben der Verarbeitungsanweisung `<?marker>` kann ein Paar aus `<?start>` und `<?end>` vorübergehenden Inhalt umschließen (zum Beispiel `<?start name="my-identifier">Loading...<?end>`). Dieser wird angezeigt, bis `<template for="my-identifier">` verarbeitet und der gesamte Abschnitt ersetzt wird. Siehe das Beispiel [Mit `<template for>` einen Bereich ersetzen](#using_template_for_for_range_patching).

In HTML können Verarbeitungsanweisungen mit oder ohne abschließendes `?` geschrieben werden. Fehlt es, fügt der Browser es beim Parsen des DOM hinzu. Daher sind sowohl `<?start?>` als auch `<?start>` gültig und werden als `<?start?>` geparst. XML ist strenger und erfordert das abschließende `?`.

Wenn das Attribut `for` zu keinem `name` einer Markierungs-Verarbeitungsanweisung passt, bleibt der `<template>`-Inhalt im DOM verborgen und wird für keinen Patch verwendet.

Damit Komponenten keine nicht zugehörigen Teile des DOM aktualisieren, können `<template for="...">`-Elemente nur Markierungen innerhalb des DOM-Baums des `<template>`-Elternelements ersetzen. Die einzige Ausnahme bilden `<template>`-Elemente, die direkte Kindelemente des `<body>`-Elements sind: Sie können auch `<head>`-Elemente ersetzen, um die Aktualisierung von `<title>` und anderen `<head>`-Elementen zu ermöglichen.

## Beispiele

### Tabellenzeilen erzeugen

Beginnen wir mit dem HTML-Teil des Beispiels.

```html
<table id="producttable">
  <thead>
    <tr>
      <th>UPC_Code</th>
      <th>Product_Name</th>
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

Zunächst haben wir eine Tabelle, in die wir später mithilfe von JavaScript Inhalt einfügen. Danach folgt das Template, das die Struktur eines HTML-Fragments für eine einzelne Tabellenzeile beschreibt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen. Jede Zeile wird dabei auf Grundlage des Templates erstellt.

```js
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
```

Das Ergebnis ist die ursprüngliche HTML-Tabelle, der per JavaScript zwei neue Zeilen hinzugefügt wurden:

```css hidden
table {
  background: black;
}

table th,
table td {
  background: white;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Ein deklaratives Shadow DOM implementieren

In diesem Beispiel steht am Anfang des Markups ein ausgeblendeter Hinweis zur Browserunterstützung. Wenn der Browser das Attribut `shadowrootmode` nicht unterstützt, wird dieser Hinweis später per JavaScript eingeblendet. Anschließend folgen zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichem Verhalten enthalten. Das erste `<style>`-Element gilt global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der aufgrund des Attributs `shadowrootmode` anstelle des `<template>`-Elements erzeugt wird.

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

### Deklaratives Shadow DOM mit Fokusweitergabe

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf einen deklarativ erstellten Shadow Root angewendet wird und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zunächst mithilfe des `<template>`-Elements mit dem Attribut `shadowrootmode` einen Shadow Root innerhalb eines `<div>`-Elements.
Darin werden sowohl ein nicht fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element angezeigt.
Außerdem wird CSS verwendet, um Elemente mit {{cssxref(":focus")}} blau zu gestalten und die normale Gestaltung des Host-Elements festzulegen.

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

Der zweite Codeblock ist bis auf das Attribut `shadowrootdelegatesfocus` identisch. Dieses bewirkt, dass der Fokus an das erste fokussierbare Element im Baum weitergegeben wird, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

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

Abschließend verwenden wir das folgende CSS, um dem übergeordneten `<div>`-Element einen roten Rahmen zu geben, wenn es fokussiert ist.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten dargestellt.
Wenn das HTML zum ersten Mal dargestellt wird, haben die Elemente keine entsprechende Hervorhebung, wie im ersten Bild zu sehen ist.
Bei dem Shadow Root ohne `shadowrootdelegatesfocus` können Sie überall außer auf das `<input>` klicken, ohne dass sich der Fokus ändert. Wenn Sie das `<input>`-Element auswählen, sieht das Ergebnis wie im zweiten Bild aus.

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Bei dem Shadow Root mit `shadowrootdelegatesfocus` wird durch einen Klick auf den nicht fokussierbaren Text das `<input>`-Element ausgewählt, da es das erste fokussierbare Element im Baum ist.
Dadurch wird auch das Elternelement fokussiert, wie unten dargestellt.

![Screenshot des Codes mit fokussiertem Element](template_with_focus.png)

### Deklaratives Shadow DOM mit benannter Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente anhand ihres [Attributs `slot`](/de/docs/Web/API/Element/slot) Slots in einem Shadow DOM zugewiesen werden können. Dabei wird der Wert mit dem Attribut `name` des Slots abgeglichen.

#### HTML

Zunächst definieren wir ein {{HTMLElement("article")}}-Element, das Titel, Metadaten und den Artikelinhalt darstellt.

Der Artikel enthält ein `<template>`-Element, das aufgrund des Attributs `shadowrootmode` zu einem Shadow Root wird.
Das Attribut `shadowrootslotassignment` muss nicht gesetzt werden, da die benannte Slot-Zuweisung die Standardeinstellung ist.

Das Template definiert Elemente mit benannten Slots für „header“- und „meta“-Informationen sowie einen unbenannten Slot für „body“-Informationen.
Die Elemente werden unterschiedlich gestaltet, damit sie leicht zu unterscheiden sind.

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

Innerhalb desselben Hosts befinden sich unterhalb des Templates vier Elemente, mit denen die Slots befüllt werden.
Die {{htmlelement("span")}}-Elemente haben `slot`-Attribute, deren Werte mit den `name`-Attributen der Slots im Template übereinstimmen. Sie befüllen daher die entsprechenden Slots.
Die beiden {{htmlelement("p")}}-Elemente sind unbenannt und werden deshalb beide in das unbenannte `<slot>` im „body“-Element eingefügt.

#### Ergebnis

Im folgenden Beispiel sollte der Inhalt der Slots in den entsprechenden Abschnitten angezeigt werden.

{{EmbedLiveSample('Declarative shadow DOM with named slot assignment','100', '220px')}}

### Deklaratives Shadow DOM mit manueller Slot-Zuweisung

Dieses Beispiel zeigt, wie Elemente Slots in einem Shadow DOM manuell zugewiesen werden können.

Bei diesem Ansatz muss jedes Element einem bestimmten Slot manuell zugewiesen werden.
Es gibt keine Standardzuweisung. Slots, denen nichts zugewiesen wurde, bleiben daher leer.

#### HTML

Zunächst gibt es einen ausgeblendeten Hinweis zur Browserunterstützung.
Wenn der Browser das Attribut `shadowrootslotassignment` nicht unterstützt, wird dieser Hinweis später per JavaScript eingeblendet.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support the
  <code>shadowrootslotassignment</code> attribute yet.
</p>
```

Als Nächstes definieren wir ein {{HTMLElement("article")}}-Element, das Titel, Metadaten und den Artikelinhalt darstellt.
Es enthält ein `<template>`-Element, das aufgrund des Attributs `shadowrootmode` zu einem Shadow Root wird. Da `shadowrootslotassignment="manual"` gesetzt ist, wird die manuelle Slot-Zuweisung verwendet.

Das Template definiert Elemente mit Slots für „header“-, „meta“- und „body“-Informationen, auf die über ihr Attribut `id` einzeln verwiesen werden kann.
Die Elemente werden unterschiedlich gestaltet, damit sie leicht zu unterscheiden sind.

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

Innerhalb desselben Hosts befinden sich unterhalb des Templates vier Elemente, mit denen die Slots befüllt werden.
Auch diese werden über ihre ID identifiziert.

#### JavaScript

Das JavaScript für die manuelle Slot-Zuweisung ist unten dargestellt.
Der Code ermittelt zuerst die Slots im Shadow Root, dann den einzufügenden Text und weist diesen schließlich dem Slot zu.
Beachten Sie, dass ein Knoten einem bestimmten Slot nur einmal zugewiesen werden kann. Wenn Sie mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) einem einzelnen Slot mehrere Knoten zuweisen, bestimmt die Reihenfolge, in der sie angegeben werden, auch die Reihenfolge, in der sie hinzugefügt werden.

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

Der Code zeigt den ausgeblendeten Hinweis zur Browserunterstützung an, falls die Slot-Zuweisung nicht unterstützt wird.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootSlotAssignmentSupported);
```

#### Ergebnis

Im folgenden Beispiel sollte der Inhalt der Slots in den entsprechenden Abschnitten angezeigt werden.

{{EmbedLiveSample('Declarative shadow DOM with manual slot assignment','100', '220px')}}

> [!NOTE]
> Wird das Attribut `shadowrootslotassignment` nicht unterstützt, erscheint ein Warnhinweis und der Browser verwendet die Zuweisung `named`.
> Da jedoch weder die Slots noch die einzufügenden Elemente benannt sind, werden alle Elemente in den Titel-Slot eingefügt. Dieser ist der erste unbenannte Slot und damit der Standard-Slot.

### Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel besser, Event-Handler den Kindelementen eines `DocumentFragment` zuzuordnen als dem `DocumentFragment` selbst.

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur seine Kindelemente zu `container` hinzugefügt; die Event-Handler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird der Event-Handler kopiert, der dem ersten _Kindknoten_ von `secondClone` hinzugefügt wurde. Ein Klick darauf funktioniert daher wie erwartet.

{{EmbedLiveSample(' Data on the DocumentFragment is not cloned')}}

### Mit `<template for>` Inhalte ersetzen

Dieses Beispiel verwendet die Verarbeitungsanweisung `<?marker name="placeholder">` als Platzhalter und fügt den Inhalt später mit `<template for="placeholder">` ein.

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

Zunächst wird dadurch ein leeres `<div>` dargestellt. Nachdem das `<template>`-Element geparst und verarbeitet wurde, wird es wie folgt aktualisiert:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

### Mit `<template for>` einen Bereich ersetzen

Dieses Beispiel verwendet die Verarbeitungsanweisungen `<?start>` und `<?end>`, um Platzhalterinhalt zu umschließen. Dieser wird zunächst angezeigt und später durch den Inhalt von `<template for>` ersetzt.

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

Zunächst wird das `<div>` mit dem Platzhalterinhalt `Loading...` dargestellt. Nachdem das `<template>` geparst und verarbeitet wurde, wird es wie folgt aktualisiert:

```html-nolint
  <div>
    Lorem Ipsum...
  </div>
```

Dieses Beispiel veranschaulicht außerdem, dass Verarbeitungsanweisungen keine Kindelemente haben und nicht ineinander verschachtelt sind. Obwohl die Verarbeitungsanweisungen `<?start>` und `<?end>` durch ihre Beziehung zu `<template for>` miteinander verbunden sind, bilden sie separate [Knoten](/de/docs/Web/API/Node) und keine öffnenden und schließenden Tags. Der Inhalt `Loading...` ist daher kein Kindelement von ihnen, was sich auch an der fehlenden Einrückung zeigt.

### Mit `<template for>` `<head>`-Elemente ersetzen

Dieses Beispiel zeigt, dass `<template for>`-Elemente, die direkte Kindelemente des `<body>`-Elements sind, Markierungen im `<head>` ersetzen können.

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

Nachdem die `<template>`-Elemente geparst wurden, ergibt sich Folgendes:

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

### Markierungen in `<template for>` einfügen, um Inhalte später erneut zu ersetzen

Sie können auch innerhalb von `<template for>`-Elementen Markierungen einfügen und so neue Platzhalter erstellen, damit derselbe Inhalt mehrfach ersetzt werden kann. Bereits vorhandene `name`-Attribute können Sie erneut verwenden.

Wenn Sie beispielsweise eine {{Glossary("SPA", "Single-Page-Anwendung (SPA)")}} mit `<template for>` erstellen, möchten Sie möglicherweise, dass `<title>` bei jeder Aktualisierung der Route ersetzt werden kann. Das lässt sich wie folgt erreichen:

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

Nachdem das `<template>`-Element geparst wurde, ergibt sich Folgendes:

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

Später könnte ein neues `<template for="title">` in das DOM eingefügt werden, um `<title>` erneut zu ersetzen.

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
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner (siehe <a href="#usage_notes">Hinweise zur Verwendung</a>)</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl der öffnende als auch der schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Auch als Kindelement eines {{HTMLElement("colgroup")}}-Elements
        zulässig, das <em>kein</em>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
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

- Die HTML-Attribute [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
- Das HTML-Element {{HTMLElement("slot")}}
- Die CSS-Pseudoklassen {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}} und {{CSSXref(":host-context", ":host-context()")}}
- Die CSS-Pseudoelemente {{CSSXref("::part")}} und {{CSSXref("::slotted")}}
- Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- [Templates und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- Das Modul [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping)
- [Deklaratives Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Shadow DOM verwenden_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
