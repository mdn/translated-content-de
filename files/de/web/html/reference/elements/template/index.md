---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<template>`** [HTML](/de/docs/Web/HTML) Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}} Fragmenten, die entweder später über JavaScript verwendet oder sofort in den Shadow DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Erzeugt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das Elternelement. Es ist eine deklarative Version der [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode und akzeptiert die gleichen {{Glossary("enumerated", "aufzählbaren")}} Werte.
    - `open`
      - : Macht den internen Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`
      - : Verbirgt den internen Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt im DOM für das erste `<template>` in einem Knoten, wenn dieses Attribut auf einen zulässigen Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, oder nicht auf einen zulässigen Wert gesetzt ist — oder wenn schon ein `ShadowRoot` deklarativ im selben Elternelement erzeugt wurde — dann wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nach dem Parsen nicht nachträglich in einen Shadow Root umgewandelt werden, beispielsweise durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardisierte `shadowroot` Attribut in älteren Tutorials und Beispielen finden, das früher in Chrome 90-110 unterstützt wurde. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte `shadowrootmode` Attribut ersetzt.

- `shadowrootclonable`
  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines mittels dieses Elements erzeugten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn gesetzt, wird ein Klon des Shadow-Hosts (des Elternelements dieses `<template>`), der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, einen Shadow Root in der Kopie enthalten.

- `shadowrootdelegatesfocus`
  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) Eigenschaft eines mittels dieses Elements erzeugten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Baum delegiert.
    Der Wert ist standardmäßig `false`.

- `shadowrootserializable`
  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) Eigenschaft eines mittels dieses Elements erzeugten [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) auf `true`.
    Falls gesetzt, kann der Shadow Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt aufgerufen werden.
    Der Wert ist standardmäßig `false`.

## Verwendungshinweise

Dieses Element hat keinen erlaubten Inhalt, da alles, was in der HTML-Quelle darin verschachtelt ist, nicht wirklich zu den Kindern des `<template>` Elements wird. Die [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) Eigenschaft des `<template>` Elements ist immer leer, und Sie können auf den genannten verschachtelten Inhalt nur über die spezielle [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft zugreifen. Wenn Sie jedoch [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder ähnliche Methoden auf das `<template>` Element anwenden, fügen Sie tatsächlich Kinder in das `<template>` Element selbst ein, was ein Verstoß gegen dessen Inhaltsmodell ist und das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das von der `content` Eigenschaft zurückgegeben wird, nicht tatsächlich aktualisiert.

Aufgrund der Art und Weise, wie das `<template>` Element analysiert wird, sind alle innerhalb des Templates befindlichen öffnenden und schließenden Tags `<html>`, `<head>` und `<body>` Syntaxfehler und werden vom Parser ignoriert, sodass `<template><head><title>Test</title></head></template>` dasselbe ist wie `<template><title>Test</title></template>`.

Es gibt zwei Hauptarten, das `<template>` Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert. Die entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Schnittstelle enthält eine standardmäßige [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft (ohne entsprechendes Inhalts-/Markup-Attribut). Diese `content` Eigenschaft ist schreibgeschützt und enthält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den durch das Template dargestellten DOM-Teilbaum enthält. Dieses Fragment kann mit der [`cloneNode`](/de/docs/Web/API/Node/cloneNode) Methode geklont und in den DOM eingefügt werden.

Seien Sie vorsichtig beim Verwenden der `content` Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann. Für weitere Details siehe den Abschnitt [Vermeidung von DocumentFragment-Fallstricken](#vermeidung_von_documentfragment-fallstricken) unten.

### Deklarativer Shadow DOM

Falls das `<template>` Element das [`shadowrootmode`](#shadowrootmode) Attribut mit dem Wert `open` oder `closed` enthält, erzeugt der HTML-Parser sofort einen Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) eingewickelt und an das Elternelement angehängt wird. Dies ist das deklarative Äquivalent zum Aufruf von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element einen Shadow Root anzuhängen.

Falls das Element einen anderen Wert für `shadowrootmode` hat oder das `shadowrootmode` Attribut nicht besitzt, erzeugt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement). In ähnlicher Weise wird bei mehreren deklarativen Shadow Roots nur der erste durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Objekte geparsed.

## Beispiele

### Generierung von Tabellenzeilen

Wir beginnen mit dem HTML-Teil des Beispiels.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Danach kommt das Template, welches die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile mithilfe des Templates als Grundlage erstellt wird.

```js
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Clone the new row and insert it into the table
  const clone2 = template.content.cloneNode(true);
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

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel ist zu Beginn der Auszeichnung eine versteckte Support-Warnung enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das `shadowrootmode` Attribut nicht unterstützt. Danach folgen zwei {{HTMLElement("article")}} Elemente, die jeweils verschachtelte {{HTMLElement("style")}} Elemente mit unterschiedlichem Verhalten enthalten. Das erste `<style>` Element ist global für das gesamte Dokument. Das zweite ist auf den Shadow Root beschränkt, der anstelle des `<template>` Elements aufgrund des Vorhandenseins des `shadowrootmode` Attributs erzeugt wird.

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

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf einen Shadow Root angewendet wird, der deklarativ erstellt wurde, und den Effekt, den dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root innerhalb eines `<div>` Elements, indem das `<template>` Element mit dem `shadowrootmode` Attribut verwendet wird. Dies zeigt sowohl ein nicht fokussierbares `<div>` Element mit Text als auch ein fokussierbares `<input>` Element an. Es verwendet auch CSS, um Elemente mit [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) blau zu gestalten und das normale Styling des Host-Elements festzulegen.

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

Der zweite Codeblock ist identisch, außer dass das `shadowrootdelegatesfocus` Attribut gesetzt wird, das den Fokus an das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um ein rotes Rahmen um das übergeordnete `<div>` Element zu legen, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten gezeigt. Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie auf dem ersten Bild gezeigt. Für den Shadow Root, der nicht `shadowrootdelegatesfocus` gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>` Element auswählen, sieht es aus wie auf dem zweiten Bild).

![Screenshot des Codes ohne gesetzten Fokus](template_with_no_focus.png)

Für den Shadow Root mit gesetztem `shadowrootdelegatesfocus` wählt ein Klick auf den Text (der nicht fokussierbar ist) das `<input>` Element aus, da dies das erste fokussierbare Element im Baum ist. Dies fokussiert auch das Elternelement, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element fokussiert ist](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallstricken

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` zu binden, anstatt an das `DocumentFragment` selbst.

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

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Ergebnis

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur die Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

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
          >Metadatenelemente</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Funktionselemente</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasenelemente</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Nichts (siehe <a href="#usage_notes">Verwendungshinweise</a>)</td>
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
          >Metadatenelemente</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasenelemente</a
        > oder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#script-supporting_elements"
          >skriptunterstützende Elemente</a
        > akzeptiert. Ebenfalls erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das kein
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

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) HTML Attribute
- {{HTMLElement("slot")}} HTML Element
- {{CSSXref(":has-slotted")}}, {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
