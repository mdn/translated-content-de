---
title: Shadow DOM verwenden
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt benutzerdefinierter Elemente ist die Kapselung, denn ein benutzerdefiniertes Element ist per Definition eine wiederverwendbare Funktionalität: Es kann in jede beliebige Webseite eingefügt werden und soll erwartungsgemäß funktionieren. Daher ist es wichtig, dass Code, der auf der Seite ausgeführt wird, ein benutzerdefiniertes Element nicht versehentlich durch Änderungen an seiner internen Implementierung beschädigen kann. Mit Shadow DOM können Sie einen DOM-Baum an ein Element anhängen, dessen interne Struktur vor JavaScript und CSS verborgen ist, die auf der Seite ausgeführt werden.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick

Dieser Artikel setzt voraus, dass Sie bereits mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model) vertraut sind — einer baumartigen Struktur verbundener Knoten, die die verschiedenen Elemente und Textzeichenfolgen in einem Markup-Dokument darstellt (bei Webdokumenten in der Regel ein HTML-Dokument). Betrachten Sie beispielsweise das folgende HTML-Fragment:

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>DOM example</title>
  </head>
  <body>
    <section>
      <img src="dinosaur.png" alt="A red Tyrannosaurus Rex." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Dieses Fragment erzeugt die folgende DOM-Struktur (ohne Textknoten, die nur Leerraum enthalten):

```plain
- HTML
    - HEAD
        - META charset="utf-8"
        - TITLE
            - #text: DOM example
    - BODY
        - SECTION
            - IMG src="dinosaur.png" alt="A red Tyrannosaurus Rex."
            - P
                - #text: Here we will add a link to the
                - A href="https://www.mozilla.org/"
                    - #text: Mozilla homepage
```

_Shadow_ DOM ermöglicht es, verborgene DOM-Bäume an Elemente im regulären DOM-Baum anzuhängen — dieser Shadow-DOM-Baum beginnt mit einer Shadow Root, unterhalb der Sie beliebige Elemente anhängen können, genau wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow Root und Shadow Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe zu Shadow DOM, die Sie kennen sollten:

- **Shadow Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow Tree**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow Boundary**: Die Stelle, an der das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow Root**: Der Wurzelknoten des Shadow Tree.

Sie können die Knoten im Shadow DOM auf genau dieselbe Weise beeinflussen wie Nicht-Shadow-Knoten — beispielsweise durch Anhängen von Kindelementen oder Setzen von Attributen, durch Gestalten einzelner Knoten mit element.style.foo oder durch Hinzufügen von Stilen für den gesamten Shadow-DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow DOM etwas außerhalb davon beeinflussen kann, was eine praktische Kapselung ermöglicht.

Bevor Shadow DOM für Webentwickler verfügbar gemacht wurde, verwendeten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie beispielsweise an ein {{htmlelement("video")}}-Element mit den standardmäßig angezeigten Browser-Steuerelementen. Im DOM sehen Sie nur das `<video>`-Element, aber es enthält eine Reihe von Schaltflächen und anderen Steuerelementen in seinem Shadow DOM. Die Shadow-DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Sprache und Textrichtung, die mit [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) und [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) festgelegt werden, werden im Allgemeinen vom übergeordneten Knoten eines Elements geerbt. Wenn dieses übergeordnete Element eine Shadow Root ist, werden sie stattdessen vom Shadow Host geerbt.

Das Zuweisen eines Elements zu einem {{HTMLElement("slot")}} ändert seinen übergeordneten Knoten nicht. Daher erbt ein zugewiesenes Element von seinem Elternknoten außerhalb des Shadow Tree und nicht vom Slot. Der Slot und sein Fallback-Inhalt erben innerhalb des Shadow Tree wie jedes andere Element dort:

```html
<div dir="rtl" lang="ar">
  <!-- my-element's shadow tree:
    <div dir="ltr" lang="en"><slot></slot></div> -->
  <my-element><span>Assigned content</span></my-element>
</div>
```

Das `<span>` entspricht `:dir(rtl)` und `:lang(ar)`, geerbt vom `<div>`, das `<my-element>` enthält. Das `<slot>` entspricht `:dir(ltr)` und `:lang(en)`, geerbt von seinem Elternknoten im Shadow Tree.

> [!NOTE]
> CSS vererbt die Eigenschaft {{cssxref("direction")}} über den abgeflachten Baum. Daher wird ein zugewiesenes Element ohne eigenes `dir`-Attribut mit der am Slot geltenden Richtung _gerendert_, obwohl {{cssxref(":dir")}} die von seinem Elternknoten geerbte Richtung meldet.

## Ein Shadow DOM erstellen

### Imperativ mit JavaScript

Die folgende Seite enthält zwei Elemente: ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}}-Element, das Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) für den Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM hinzufügen, genau wie zum Haupt-DOM. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Imperatively with JavaScript")}}

### Deklarativ mit HTML

Das Erstellen eines Shadow DOM über die JavaScript-API kann eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen kann eine serverseitig gerenderte Benutzeroberfläche eine bessere Leistung und damit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "aufgezählte")}} Attribut `shadowrootmode`, das entweder auf `open` oder `closed` gesetzt werden kann — dieselben Werte wie die Option `mode` der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow).

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig wird der Inhalt von `<template>` nicht angezeigt. In diesem Fall wird die Shadow Root gerendert, weil `shadowrootmode="open"` angegeben wurde. In unterstützenden Browsern wird der sichtbare Inhalt innerhalb dieser Shadow Root angezeigt.

Nachdem der Browser das HTML geparst hat, ersetzt er das {{htmlelement("template")}}-Element durch dessen Inhalt, der in eine {{Glossary("Shadow_tree", "Shadow Root")}} eingeschlossen ist und an das übergeordnete Element angehängt wird, in unserem Beispiel das `<div id="host">`. Der resultierende DOM-Baum sieht folgendermaßen aus (im DOM-Baum gibt es kein `<template>`-Element):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zu `shadowrootmode` `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um weitere Eigenschaften der erzeugten Shadow Root festzulegen.

## Kapselung gegenüber JavaScript

Bisher sieht dies vielleicht nicht nach viel aus. Aber sehen wir uns an, was passiert, wenn auf der Seite ausgeführter Code versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die vorherige, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Ein Klick auf die Schaltfläche „Uppercase span elements“ sucht alle `<span>`-Elemente auf der Seite und wandelt ihren Text in Großbuchstaben um.
Ein Klick auf die Schaltfläche „Reload“ lädt die Seite einfach neu, damit Sie es erneut versuchen können.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Wenn Sie auf „Uppercase span elements“ klicken, sehen Sie, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) die Elemente in unserem Shadow DOM nicht findet: Sie sind effektiv vor JavaScript auf der Seite verborgen:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die Option „mode“

Im obigen Beispiel übergeben wir das Argument `{ mode: "open" }` an `attachShadow()`. Wenn `mode` auf `"open"` gesetzt ist, kann das JavaScript auf der Seite über die Eigenschaft [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot) des Shadow Host auf die interne Struktur Ihres Shadow DOM zugreifen.

In diesem Beispiel enthält das HTML wie zuvor den Shadow Host, ein `<span>`-Element im Haupt-DOM-Baum und zwei Schaltflächen:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

Dieses Mal verwendet die Schaltfläche „Uppercase“ `shadowRoot`, um die `<span>`-Elemente im DOM zu finden:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dieses Mal kann das auf der Seite ausgeführte JavaScript auf die interne Struktur des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das Argument `{mode: "open"}` gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOM aufzuheben. Wenn Sie der Seite diese Möglichkeit nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`; dann gibt `shadowRoot` `null` zurück.

Sie sollten dies jedoch nicht als starken Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, ihn zu umgehen, beispielsweise durch Browsererweiterungen, die auf der Seite ausgeführt werden. Es ist eher ein Hinweis darauf, dass die Seite nicht auf die interne Struktur Ihres Shadow-DOM-Baums zugreifen sollte.

## Kapselung gegenüber CSS

In dieser Version der Seite ist das HTML dasselbe wie im ursprünglichen Beispiel:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Im JavaScript erstellen wir das Shadow DOM:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Dieses Mal verwenden wir etwas CSS, das auf `<span>`-Elemente auf der Seite abzielt:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das CSS der Seite beeinflusst keine Knoten innerhalb des Shadow DOM:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Stile innerhalb des Shadow DOM anwenden

In diesem Abschnitt betrachten wir zwei verschiedene Methoden, um Stile innerhalb eines Shadow-DOM-Baums anzuwenden:

- [_Programmgesteuert_](#konstruktierbare_stylesheets), durch das Erzeugen eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts und das Anhängen an die Shadow Root.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), durch das Hinzufügen eines {{htmlelement("style")}}-Elements in der Deklaration eines {{htmlelement("template")}}-Elements.

In beiden Fällen sind die im Shadow-DOM-Baum definierten Stile auf diesen Baum beschränkt. Ebenso wie Seitenstile keine Elemente im Shadow DOM beeinflussen, beeinflussen Shadow-DOM-Stile keine Elemente im Rest der Seite.

### Konstruktierbare Stylesheets

Um Seitenelemente im Shadow DOM mit konstruktierbaren Stylesheets zu gestalten, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen.
2. Seinen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) festlegen.
3. Es zur Shadow Root hinzufügen, indem wir es [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zuweisen.

Regeln, die im `CSSStyleSheet` definiert sind, werden auf den Shadow-DOM-Baum sowie auf alle anderen DOM-Bäume beschränkt, denen wir es zugewiesen haben.

Hier ist erneut das HTML mit unserem Host und einem `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Dieses Mal erstellen wir das Shadow DOM und weisen ihm ein `CSSStyleSheet`-Objekt zu:

```js
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");

const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Die im Shadow-DOM-Baum definierten Stile werden nicht auf den Rest der Seite angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### `<style>`-Elemente in `<template>`-Deklarationen hinzufügen

Eine Alternative zum Erzeugen von `CSSStyleSheet`-Objekten besteht darin, ein {{htmlelement("style")}}-Element innerhalb des {{htmlelement("template")}}-Elements einzuschließen, das zur Definition einer Webkomponente verwendet wird.

In diesem Fall enthält das HTML die `<template>`-Deklaration:

```html
<template id="my-element">
  <style>
    span {
      color: red;
      border: 2px dotted black;
    }
  </style>
  <span>I'm in the shadow DOM</span>
</template>

<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Im JavaScript erstellen wir das Shadow DOM und fügen seinen Inhalt aus `<template>` hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Auch hier werden die in `<template>` definierten Stile nur innerhalb des Shadow-DOM-Baums angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Auswahl zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen Sie verwenden sollten, hängt von Ihrer Anwendung und Ihren persönlichen Vorlieben ab.

Das Erstellen eines `CSSStyleSheet` und dessen Zuweisung zur Shadow Root mit `adoptedStyleSheets` ermöglicht es Ihnen, ein einzelnes Stylesheet zu erstellen und es in vielen DOM-Bäumen zu teilen. Beispielsweise könnte eine Komponentenbibliothek ein einziges Stylesheet erstellen und es dann mit allen benutzerdefinierten Elementen teilen, die zu dieser Bibliothek gehören. Der Browser parst dieses Stylesheet nur einmal. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese auf alle Komponenten übertragen lassen, die das Stylesheet verwenden.

Das Anhängen eines `<style>`-Elements ist ideal, wenn Sie deklarativ vorgehen möchten, wenige Stile haben und keine Stile zwischen verschiedenen Komponenten teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die durch Shadow DOM bereitgestellte Kapselung wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unmöglich fragil. Es wäre zu einfach, das Verhalten oder Layout eines benutzerdefinierten Elements versehentlich durch JavaScript oder CSS der Seite zu beschädigen. Als Entwickler benutzerdefinierter Elemente könnten Sie nie wissen, ob die innerhalb Ihres benutzerdefinierten Elements anwendbaren Selektoren mit denen in Konflikt stehen, die auf einer Seite gelten, die Ihr benutzerdefiniertes Element verwendet.

Benutzerdefinierte Elemente werden als Klasse implementiert, die entweder das Basis-Element [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein eingebautes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. In der Regel ist das benutzerdefinierte Element selbst ein Shadow Host, und das Element erstellt mehrere Elemente unterhalb dieser Root, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein benutzerdefiniertes `<filled-circle>`-Element, das lediglich einen mit einer Vollfarbe gefüllten Kreis rendert.

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Create a shadow root
    // The custom element itself is the shadow host
    const shadow = this.attachShadow({ mode: "open" });

    // create the internal implementation
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
```

```html
<filled-circle color="blue"></filled-circle>
```

{{EmbedLiveSample("Shadow DOM and custom elements", 100, 160)}}

Weitere Beispiele, die verschiedene Aspekte der Implementierung benutzerdefinierter Elemente veranschaulichen, finden Sie in unserem [Leitfaden zu benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements).

## Siehe auch

- [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Templates und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- {{HTMLelement("template")}}
- CSS-Scoping-[Modul](/de/docs/Web/CSS/Guides/Scoping)
- {{CSSXref(":host")}}
- {{cssxref(":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- CSS-Shadow-Parts-[Modul](/de/docs/Web/CSS/Guides/Shadow_parts)
- {{CSSXref("::part")}}
