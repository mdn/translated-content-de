---
title: "<template>: Das Inhaltstemplate-Element"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{HTMLSidebar}}

Das **`<template>`**-[HTML](/de/docs/Web/HTML)-Element dient als Mechanismus zum Halten von {{Glossary("HTML")}}-Fragmenten, die entweder später über JavaScript verwendet oder sofort in einen Shadow-DOM generiert werden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `shadowrootmode`

  - : Erstellt ein [Shadow Root](/de/docs/Glossary/Shadow_tree) für das Elternelement. Es ist eine deklarative Version der Methode {{domxref("Element.attachShadow()")}} und akzeptiert die gleichen {{glossary("enumerated")}} Werte.

    - `open`

      - : Macht den internen Shadow Root DOM für JavaScript zugänglich (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt den internen Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein {{domxref("ShadowRoot")}}-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen zulässigen Wert gesetzt ist. Wenn das Attribut nicht gesetzt oder auf einen unzulässigen Wert gesetzt ist — oder wenn bereits ein `ShadowRoot` deklarativ im selben Elternteil erstellt wurde — wird ein {{domxref("HTMLTemplateElement")}} konstruiert. Ein {{domxref("HTMLTemplateElement")}} kann nach dem Parsen nicht mehr in ein Shadow Root umgewandelt werden, zum Beispiel durch Setzen von {{domxref("HTMLTemplateElement.shadowRootMode")}}.

    > [!NOTE]
    > Sie könnten das nicht standardmäßige Attribut `shadowroot` in älteren Tutorials und Beispielen finden, das früher in Chrome 90–110 unterstützt wurde. Dieses Attribut wurde seitdem entfernt und durch das standardmäßige Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`. Wenn gesetzt, enthält ein Klon des Shadow-Hosts (des Elternelements dieses `<template>`) erstellt mit {{domxref("Node.cloneNode()")}} oder {{domxref("Document.importNode()")}} ein Shadow Root in der Kopie.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`. Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Baum ausgewählt wird, wird der Fokus auf das erste fokussierbare Element im Baum delegiert. Der Wert ist standardmäßig `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`. Wenn gesetzt, kann das Shadow Root serialisiert werden, indem die {{DOMxRef('Element.getHTML()')}}- oder {{DOMxRef('ShadowRoot.getHTML()')}}-Methoden mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden. Der Wert ist standardmäßig `false`.

## Nutzungshinweise

Es gibt zwei Hauptmethoden zur Verwendung des `<template>`-Elements.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert. Das entsprechende {{domxref("HTMLTemplateElement")}}-Interface enthält eine Standard-{{domxref("HTMLTemplateElement.content", "content")}}-Eigenschaft (ohne ein gleichwertiges Content-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und enthält ein {{domxref("DocumentFragment")}}, das den DOM-Teilbaum repräsentiert, der durch das Template dargestellt wird. Dieses Fragment kann über die {{domxref("Node.cloneNode", "cloneNode")}}-Methode geklont und in den DOM eingefügt werden.

Seien Sie vorsichtig bei der Verwendung der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` unerwartetes Verhalten zeigen kann. Weitere Details finden Sie im Abschnitt [Vermeidung von DocumentFragment-Fallstricken](#vermeidung_von_documentfragment-fallstricken) unten.

### Deklarativer Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, wird sofort ein Shadow DOM vom HTML-Parser erstellt. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem {{domxref("ShadowRoot")}} gewickelt ist und an das Elternelement angehängt ist. Dies ist das deklarative Äquivalent zu einem Aufruf von {{domxref("Element.attachShadow()")}}, um ein Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das `shadowrootmode`-Attribut nicht enthält, erzeugt der Parser ein {{domxref("HTMLTemplateElement")}}. Ähnlich, wenn es mehrere deklarative Shadow Roots gibt, wird nur das erste durch ein {{domxref("ShadowRoot")}} ersetzt — nachfolgende Instanzen werden als {{domxref("HTMLTemplateElement")}}-Objekte geparst.

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
    <!-- vorhandene Daten könnten optional hier eingefügt werden -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Zuerst haben wir eine Tabelle, in die wir später mit JavaScript-Inhalt einfügen werden. Dann kommt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurde, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile das Template als Grundlage verwendet.

```js
// Testen, ob der Browser das HTML-Templating-Element unterstützt, durch Überprüfung
// auf die Anwesenheit des Content-Attributs des Template-Elements.
if ("content" in document.createElement("template")) {
  // Instanziiert die Tabelle mit dem existierenden HTML-Tbody
  // und der Zeile mit dem Template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Klonen der neuen Zeile und in die Tabelle einfügen
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Klonen der neuen Zeile und in die Tabelle einfügen
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Einen anderen Weg finden, um die Zeilen zur Tabelle hinzuzufügen, da
  // das HTML-Templating-Element nicht unterstützt wird.
}
```

Das Ergebnis ist die ursprüngliche HTML-Tabelle, mit zwei neuen Zeilen, die über JavaScript angefügt wurden:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementierung eines deklarativen Shadow DOM

In diesem Beispiel ist am Anfang des Markups eine versteckte Support-Warnung enthalten. Diese Warnung wird später über JavaScript angezeigt, wenn der Browser das Attribut `shadowrootmode` nicht unterstützt. Danach gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das anstelle des `<template>`-Elements generiert wird, weil das Attribut `shadowrootmode` vorhanden ist.

```html
<p hidden>
  ⛔ Ihr Browser unterstützt das <code>shadowrootmode</code>-Attribut noch nicht.
</p>
<article>
  <style>
    p {
      padding: 8px;
      background-color: wheat;
    }
  </style>
  <p>Ich bin im DOM.</p>
</article>
<article>
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>Ich bin im Shadow DOM.</p>
  </template>
</article>
```

```js
const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### Deklarativer Shadow DOM mit delegiertem Fokus

Dieses Beispiel demonstriert, wie `shadowrootdelegatesfocus` auf ein Shadow Root angewendet wird, das deklarativ erstellt wurde, und den Einfluss auf den Fokus.

Der Code deklariert zuerst ein Shadow Root innerhalb eines `<div>`-Elements, indem das `<template>`-Element mit dem Attribut `shadowrootmode` verwendet wird. Dies zeigt sowohl einen nicht fokussierbaren `<div>` mit Text als auch ein fokussierbares `<input>`-Element an. Es verwendet auch CSS, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu stylen und das normale Styling des Host-Elements einzustellen.

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
    <div>Klickbarer Shadow DOM-Text</div>
    <input type="text" placeholder="Eingabe im Shadow DOM" />
  </template>
</div>
```

Der zweite Codeblock ist identisch, außer dass er das Attribut `shadowrootdelegatesfocus` setzt, welches den Fokus auf das erste fokussierbare Element im Baum delegiert, wenn ein nicht fokussierbares Element im Baum ausgewählt ist.

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
    <div>Klickbarer Shadow DOM-Text</div>
    <input type="text" placeholder="Eingabe im Shadow DOM" />
  </template>
</div>
```

Zuletzt verwenden wir das folgende CSS, um einen grün-gelben Rahmen auf das übergeordnete `<div>`-Element anzuwenden, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse sind unten dargestellt. Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt. Für das Shadow Root, das `shadowrootdelegatesfocus` nicht gesetzt hat, können Sie überall klicken außer im `<input>` und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es wie im zweiten Bild aus).

![Screenshot des Codes ohne Fokus](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` wird beim Klicken auf den Text (der nicht fokussierbar ist) das `<input>`-Element ausgewählt, da dies das erste fokussierbare Element im Baum ist. Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot des Codes, bei dem das Element den Fokus hat](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallstricken

Wenn ein {{domxref("DocumentFragment")}}-Wert übergeben wird, verschieben {{domxref("Node.appendChild")}} und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es üblicherweise vorzuziehen, Ereignishandler an die Kinder eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

Betrachten Sie das folgende HTML und JavaScript:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Klicken Sie mich an</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Dieses Div wurde angeklickt");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Ergebnis

Da `firstClone` ein `DocumentFragment` ist, werden mit `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, weil ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wurde, der Ereignishandler kopiert, wenn `appendChild` aufgerufen wird, und das Klicken darauf funktioniert wie erwartet.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >script-unterstützendes Element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine Einschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > oder
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >script-unterstützende Elemente</a
        > annimmt. Auch als Kind eines {{HTMLElement("colgroup")}}-
        Elements erlaubt, das kein
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>-Attribut hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Global_attributes#part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts) HTML-Attribute
- {{HTMLElement("slot")}} HTML-Element
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [Using templates and slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
