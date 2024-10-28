---
title: "<template>: Das Content Template-Element"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{HTMLSidebar}}

Das **`<template>`** [HTML](/de/docs/Web/HTML) Element dient als Mechanismus zum Halten von {{Glossary("HTML", "HTML")}} Fragmenten, die entweder später über JavaScript verwendet oder sofort in Shadow DOM generiert werden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `shadowrootmode`

  - : Erstellt einen {{Glossary("Shadow_tree", "Shadow Root")}} für das übergeordnete Element.
    Es ist eine deklarative Version der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und akzeptiert die gleichen {{Glossary("enumerated", "Aufzählungswerte")}}.

    - `open`

      - : Ermöglicht den Zugang zum internen Shadow Root DOM für JavaScript (empfohlen für die meisten Anwendungsfälle).

    - `closed`

      - : Verbirgt das interne Shadow Root DOM vor JavaScript.

    > [!NOTE]
    > Der HTML-Parser erstellt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt im DOM für das erste `<template>` in einem Knoten mit diesem Attribut, das auf einen erlaubten Wert gesetzt ist.
    > Wenn das Attribut nicht gesetzt ist, auf einen nicht erlaubten Wert gesetzt ist oder wenn bereits ein `ShadowRoot` im selben übergeordneten Element deklarativ erstellt wurde, wird ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) konstruiert.
    > Ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) kann nicht nachträglich in ein Shadow Root umgewandelt werden, z. B. durch Setzen von [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode).

    > [!NOTE]
    > Sie könnten das nicht standardisierte Attribut `shadowroot` in älteren Tutorials und Beispielen finden, die in Chrome 90-110 unterstützt wurden. Dieses Attribut wurde inzwischen entfernt und durch das standardisierte Attribut `shadowrootmode` ersetzt.

- `shadowrootclonable`

  - : Setzt den Wert der [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, wird eine Kopie des Shadow Hosts (das übergeordnete Element dieses `<template>`), die mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde, ein Shadow Root in der Kopie enthalten.

- `shadowrootdelegatesfocus`

  - : Setzt den Wert der [`delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn dies gesetzt ist und ein nicht fokussierbares Element im Shadow-Tree ausgewählt wird, wird der Fokus an das erste fokussierbare Element im Tree delegiert.
    Der Standardwert ist `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Setzt den Wert der [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mit diesem Element erstellt wurde, auf `true`.
    Wenn gesetzt, kann der Shadow Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
    Der Standardwert ist `false`.

## Nutzungshinweise

Es gibt zwei Hauptmethoden, das `<template>`-Element zu verwenden.

### Template-Dokumentfragment

Standardmäßig wird der Inhalt des Elements nicht gerendert.
Das entsprechende [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface enthält eine Standard-`content`-Eigenschaft (ohne ein entsprechendes Inhalts-/Markup-Attribut). Diese `content`-Eigenschaft ist schreibgeschützt und hält ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den durch das Template dargestellten DOM-Teilbaum enthält.
Dieses Fragment kann über die Methode [`cloneNode`](/de/docs/Web/API/Node/cloneNode) geklont und in das DOM eingefügt werden.

Seien Sie vorsichtig beim Verwenden der `content`-Eigenschaft, da das zurückgegebene `DocumentFragment` ein unerwartetes Verhalten zeigen kann.
Für weitere Details lesen Sie den Abschnitt [Vermeidung von DocumentFragment-Fallstricken](#vermeidung_von_documentfragment-fallstricken) unten.

### Deklaratives Shadow DOM

Wenn das `<template>`-Element das Attribut [`shadowrootmode`](#shadowrootmode) mit einem Wert von entweder `open` oder `closed` enthält, erzeugt der HTML-Parser sofort ein Shadow DOM. Das Element wird im DOM durch seinen Inhalt ersetzt, der in einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) umwickelt ist, der an das übergeordnete Element angehängt wird.
Dies ist das deklarative Äquivalent, um [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufzurufen und ein Shadow Root an ein Element anzuhängen.

Wenn das Element einen anderen Wert für `shadowrootmode` hat oder das Attribut `shadowrootmode` nicht hat, erstellt der Parser ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
Ebenso, wenn mehrere deklarative Shadow Roots vorhanden sind, wird nur das erste durch einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ersetzt — nachfolgende Instanzen werden als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Objekte geparst.

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

Zuerst haben wir eine Tabelle, in die wir später Inhalte mit JavaScript-Code einfügen werden. Dann folgt das Template, das die Struktur eines HTML-Fragments beschreibt, das eine einzelne Tabellenzeile darstellt.

Nachdem die Tabelle erstellt und das Template definiert wurden, verwenden wir JavaScript, um Zeilen in die Tabelle einzufügen, wobei jede Zeile auf Basis des Templates konstruiert wird.

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

Das Ergebnis ist die originale HTML-Tabelle, mit zwei neuen Zeilen, die über JavaScript hinzugefügt wurden:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### Implementieren eines deklarativen Shadow DOM

In diesem Beispiel wird eine versteckte Support-Warnung zu Beginn des Markups eingefügt. Diese Warnung wird später via JavaScript angezeigt, falls der Browser das Attribut `shadowrootmode` nicht unterstützt. Danach gibt es zwei {{HTMLElement("article")}}-Elemente, die jeweils verschachtelte {{HTMLElement("style")}}-Elemente mit unterschiedlichen Verhaltensweisen enthalten. Das erste `<style>`-Element ist global für das gesamte Dokument. Das zweite ist auf das Shadow Root beschränkt, das an der Stelle des `<template>`-Elements aufgrund des `shadowrootmode`-Attributs generiert wird.

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
const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### Deklarativer Shadow DOM mit delegiertem Fokus

Dieses Beispiel zeigt, wie `shadowrootdelegatesfocus` auf ein deklarativ erstelltes Shadow Root angewendet wird und welche Auswirkungen dies auf den Fokus hat.

Der Code deklariert zuerst einen Shadow Root innerhalb eines `<div>`-Elements unter Verwendung des `<template>`-Elements mit dem Attribut `shadowrootmode`.
Dies zeigt sowohl ein nicht fokussierbares `<div>` mit Text als auch ein fokussierbares `<input>`-Element an.
Es verwendet auch CSS, um Elemente mit [`:focus`](/de/docs/Web/CSS/:focus) blau zu färben, und um das normale Styling des Host-Elements einzustellen.

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

Der zweite Codeblock ist identisch, nur dass er das Attribut `shadowrootdelegatesfocus` setzt, das den Fokus an das erste fokussierbare Element im Tree delegiert, wenn ein nicht fokussierbares Element im Tree ausgewählt wird.

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

Zuletzt verwenden wir das folgende CSS, um einen gelb-grünen Rand um das übergeordnete `<div>`-Element zu legen, wenn es den Fokus hat.

```css
div:focus {
  border: 2px solid red;
}
```

Die Ergebnisse werden unten gezeigt.
Wenn das HTML zuerst gerendert wird, haben die Elemente kein Styling, wie im ersten Bild gezeigt.
Für das Shadow Root, das `shadowrootdelegatesfocus` nicht gesetzt hat, können Sie überall außer dem `<input>` klicken und der Fokus ändert sich nicht (wenn Sie das `<input>`-Element auswählen, sieht es aus wie im zweiten Bild).

![Screenshot of code with no focus set](template_with_no_focus.png)

Für das Shadow Root mit gesetztem `shadowrootdelegatesfocus` führt ein Klick auf den Text (der nicht fokussierbar ist) zur Auswahl des `<input>`-Elements, da dies das erste fokussierbare Element im Tree ist.
Dies fokussiert auch das übergeordnete Element, wie unten gezeigt.

![Screenshot of the code where the element has focus](template_with_focus.png)

## Vermeidung von DocumentFragment-Fallstricken

Wenn ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Wert übergeben wird, verschieben [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) und ähnliche Methoden nur die _Kindknoten_ dieses Wertes in den Zielknoten. Daher ist es normalerweise vorzuziehen, Ereignishandler an den Kindern eines `DocumentFragment` anzuhängen, anstatt an das `DocumentFragment` selbst.

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

### Resultat

Da `firstClone` ein `DocumentFragment` ist, werden beim Aufruf von `appendChild` nur seine Kinder zu `container` hinzugefügt; die Ereignishandler von `firstClone` werden nicht kopiert. Im Gegensatz dazu wird, da ein Ereignishandler zum ersten _Kindknoten_ von `secondClone` hinzugefügt wird, der Ereignishandler beim Aufruf von `appendChild` kopiert, und ein Klick darauf funktioniert wie erwartet.

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
          >Metadata Content</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow Content</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing Content</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >script-supporting element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine Einschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadata Content</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing Content</a
        > akzeptiert, oder
        <a
          href="/de/docs/Web/HTML/Content_categories#script-supporting_elements"
          >Script-supporting elements</a
        >. Ebenfalls erlaubt als Kind eines {{HTMLElement("colgroup")}}
        Elements, das <em>keine</em>
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> Attribut hat.
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
      <th scope="row">DOM Interface</th>
      <td>[`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts) HTML Attribute
- {{HTMLElement("slot")}} HTML Element
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS Pseudo-Klassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS Pseudo-Elemente
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interface
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Deklarativer Shadow DOM (mit HTML)](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) in _Using Shadow DOM_
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
