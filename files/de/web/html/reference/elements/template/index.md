---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

Das **`<template>`** [HTML](/de/docs/Web/HTML) Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}} Fragmenten, die entweder später über JavaScript verwendet oder sofort in ein Shadow DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erstellt ein {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "enumerierten")}} Werte.
    - `open`
      - : Macht das interne Shadow Root DOM für JavaScript sichtbar (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt im DOM für das erste `<template>` in einem Knoten, bei dem dieses Attribut auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt oder nicht auf einen erlaubten Wert gesetzt ist — oder wenn ein `ShadowRoot` bereits deklarativ im gleichen Elternteil erstellt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht nachträglich in ein Shadow Root geändert werden, zum Beispiel durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie finden möglicherweise das nicht standardisierte `shadowroot` Attribut in älteren Tutorials und Beispielen, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte `shadowrootmode` Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow Hosts (dem Elternelement dieses `<template>`) erstellt, indem [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) verwendet wird, der ein Shadow Root in der Kopie enthalten wird.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, kann das Shadow Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem `options.serializableShadowRoots` Parameter auf `true` aufgerufen werden.
    Der Wert ist standardmäßig `false`.

## Nutzungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was im HTML-Quelltext darin geschachtelt ist, nicht wirklich zu den Kindern des `<template>` Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) Eigenschaft des `<template>` Elements ist immer leer, und Sie können auf den geschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>` Element anwenden, dann würden Sie Kinder in das `<template>` Element selbst einfügen, was gegen sein Inhaltsmodell verstößt und das durch die `content` Eigenschaft zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>` Element geparst wird, sind alle `<html>`, `<head>` und `<body>` öffnende und schließende Tags innerhalb des Templates Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptwege, das `<template>` Element zu nutzen.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Interface beinhaltet eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft (ohne äquivalentes Content/Markup Attribut). Diese `content` Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Unterbaum enthält, der durch das Template dargestellt wird.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zur Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund verwenden Sie `document.importNode()`, um das `content` Fragment zu klonen, damit benutzerdefinierte Elementnachkommen mit den Definitionen im aktuellen Dokument konstruiert werden, anstatt das separate Dokument zu verwenden, das den Template-Inhalt besitzt. Sehen Sie sich die Beispiele auf der Seite [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) für weitere Details an.

Beachten Sie, dass der `DocumentFragment` Container selbst keine Daten enthalten sollte. Siehe das Beispiel [Daten auf dem DocumentFragment werden nicht geklont](#daten_auf_dem_documentfragment_werden_nicht_geklont) für weitere Details.

### Deklaratives Shadow DOM

Wenn das `<template>` Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, wird vom HTML-Parser sofort ein Shadow DOM generiert. Das Element wird im DOM durch seinen Inhalt ersetzt, der in ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gewickelt ist, das dem Elternelement angehängt wird.
Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um ein Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder nicht das Attribut `shadowrootmode` besitzt, generiert der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso wird bei mehreren deklarativen Shadow Roots nur das erste durch ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Objekte geparst.

## Beispiele

### Tabellenzeilen generieren

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

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile unter Verwendung des Templates als Basis konstruiert wird.

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

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel wird zu Beginn des Markups eine versteckte Support-Warnung eingefügt. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode` Attribut nicht unterstützt. Als nächstes gibt es zwei {{HTMLElement("article")}} Elemente, die geschachtelte {{HTMLElement("style")}} Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>` Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das anstelle des `<template>` Elements aufgrund des Vorhandenseins des `shadowrootmode` Attributs generiert wird.

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

Dieses Beispiel veranschaulicht, wie `shadowrootdelegatesfocus` auf ein deklarativ erstelltes Shadow Root angewendet wird und welchen Effekt dies auf den Fokus hat.

Der Code deklariert zuerst ein Shadow Root in einem `<div>` Element, indem das `<template>` Element mit dem `shadowrootmode` Attribut verwendet wird.
Dies zeigt sowohl ein nicht fokussierbares `<div>` an, das Text enthält, als auch ein fokussierbares `<input>` Element.
Mit CSS werden zudem Elemente mit [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) blau dargestellt, und das normale Styling des Host-Elements festgelegt.

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

Der zweite Codeblock ist identisch, außer dass das Attribut `shadowrootdelegatesfocus` gesetzt wird, wodurch der Fokus an das erste fokussierbare Element im Baum delegiert wird, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

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

Abschließend verwenden wir folgendes CSS, um dem Elternelement `<div>` bei Fokus einen roten Rahmen zu geben.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten zu sehen.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow Root, das `shadowrootdelegatesfocus` nicht gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>` Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` bewirkt ein Klick auf den Text (der nicht fokussierbar ist), dass das `<input>` Element ausgewählt wird, da dies das erste fokussierbare Element im Baum ist.
Dies fokussiert auch das Elternelement, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Daten auf dem DocumentFragment werden nicht geklont

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Werts in den Zielknoten. Daher ist es in der Regel vorzuziehen, Ereignishandler an den Kindern eines `DocumentFragment` anzubringen statt am `DocumentFragment` selbst.

Betrachten Sie folgendes HTML und JavaScript:

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

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur seine Kinder zum `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler dem ersten _Kindknoten_ von `secondClone` hinzugefügt wird, dieser beim Aufruf von `appendChild` kopiert, und ein Klick darauf funktioniert wie erwartet.

{{EmbedLiveSample('Data on the DocumentFragment is not cloned')}}

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
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Script-unterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Nutzungshinweise</a>)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >Script-unterstützende Elemente</a
        > akzeptiert. Auch erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>nicht</em> ein
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
- [CSS-Scopeing](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Deklaratives Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
