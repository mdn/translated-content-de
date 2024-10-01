---
title: Verwendung von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 9d76a1d4601c8e0042732899a99b6fecde2c919d
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element per Definition ein Stück wiederverwendbarer Funktionalität ist: Es könnte in eine beliebige Webseite eingebunden werden und dort funktionieren. Deshalb ist es wichtig, dass der Code, der auf der Seite ausgeführt wird, ein benutzerdefiniertes Element nicht versehentlich durch die Änderung seiner internen Implementierung beschädigen kann. Shadow DOM ermöglicht Ihnen, einen DOM-Baum an ein Element anzuhängen und die internen Strukturen dieses Baums vor JavaScript und CSS, die auf der Seite ausgeführt werden, zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Übergeordnete Ansicht

Dieser Artikel setzt voraus, dass Sie bereits mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model/Introduction) vertraut sind — einer baumartigen Struktur von verbundenen Knoten, die die verschiedenen Elemente und Textzeichenfolgen darstellt, die in einem Markupdokument (in der Regel ein HTML-Dokument im Fall von Webdokumenten) erscheinen. Betrachten Sie als Beispiel das folgende HTML-Fragment:

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

Dieses Fragment erzeugt die folgende DOM-Struktur (nur Textknoten, die nicht nur aus Leerzeichen bestehen, werden angezeigt):

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

_Shadow_ DOM ermöglicht das Anfügen versteckter DOM-Bäume an Elemente im regulären DOM-Baum — dieser Shadow-DOM-Baum beginnt mit einer Shadow-Root, unterhalb derer Sie jedes Element anhängen können, genauso wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Root und Shadow-Host veranschaulicht.](shadowdom.svg)

Es gibt einige Begriffe der Shadow-DOM-Terminologie, die zu beachten sind:

- **Shadow-Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow-Baum**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow-Grenze**: Der Punkt, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow-Root**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten — zum Beispiel durch Anfügen von Kindern oder Einstellen von Attributen, durch Styling einzelner Knoten mit `element.style.foo` oder durch Hinzufügen von Style zum gesamten Shadow-DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow DOM irgendetwas außerhalb davon beeinflussen kann, was eine praktische Kapselung ermöglicht.

Bevor Shadow DOM Webentwicklern zur Verfügung gestellt wurde, nutzten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element mit den standardmäßigen Browser-Steuerelementen. Im DOM sehen Sie nur das `<video>`-Element, aber es enthält eine Reihe von Tasten und anderen Steuerelementen innerhalb seines Shadow DOMs. Die Shadow-DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und {{ HTMLElement("slot") }}-Elemente erben die [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribute von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Imperativ mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}}-Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir verwenden das `"host"`-Element als Shadow-Host. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) am Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM hinzufügen, so wie wir es im Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Imperativ mit JavaScript")}}

### Deklarativ mit HTML

Die Erstellung eines Shadow DOM über die JavaScript-API könnte eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche eine bessere Leistung und damit ein besseres Benutzererlebnis bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "aufgezählte")}} `shadowrootmode`-Attribut, das auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden die Inhalte von `<template>` nicht angezeigt. In diesem Fall wird, da `shadowrootmode="open"` enthalten war, die Shadow-Root gerendert. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML analysiert hat, ersetzt er das {{htmlelement("template")}}-Element mit seinem Inhalt, der in einer {{Glossary("Shadow_tree", "shadow root")}} verpackt ist, die an das übergeordnete Element angefügt ist, das `<div id="host">` in unserem Beispiel. Der resultierende DOM-Baum sieht so aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zum `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der erzeugten Shadow-Root festzulegen.

## Kapselung vor JavaScript

Bisher mag dies nicht nach viel aussehen. Aber sehen wir, was passiert, wenn Code, der auf der Seite läuft, versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die letzte, mit Ausnahme dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Durch Klicken auf die Schaltfläche „Span-Elemente in Großbuchstaben“ werden alle `<span>`-Elemente auf der Seite gefunden und deren Text in Großbuchstaben umgewandelt. Durch Klicken auf die Schaltfläche „Neu laden“ wird die Seite einfach neu geladen, sodass Sie es erneut versuchen können.

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

Wenn Sie auf „Span-Elemente in Großbuchstaben“ klicken, sehen Sie, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) die Elemente in unserem Shadow DOM nicht findet: Sie sind effektiv vor dem JavaScript auf der Seite verborgen:

{{EmbedLiveSample("Kapselung vor JavaScript")}}

## Element.shadowRoot und die „mode“-Option

Im obigen Beispiel übergeben wir ein Argument `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann das JavaScript auf der Seite über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts auf die Interna Ihres Shadow DOM zugreifen.

In diesem Beispiel enthält die HTML wie zuvor den Shadow-Host, ein `<span>`-Element im Haupt-DOM-Baum und zwei Buttons:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

Dieses Mal verwendet der „Großbuchstaben“-Button `shadowRoot`, um die `<span>`-Elemente im DOM zu finden:

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

Dieses Mal kann das JavaScript, das auf der Seite ausgeführt wird, auf die internen Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot und die „mode“-Option")}}

Das `{mode: "open"}`-Argument gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOM zu brechen. Wenn Sie der Seite diese Möglichkeit nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`. In diesem Fall gibt `shadowRoot` `null` zurück.

Sie sollten dies jedoch nicht als starkes Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, es zu umgehen, zum Beispiel durch in der Seite laufende Browsererweiterungen. Es ist mehr ein Hinweis darauf, dass die Seite nicht auf die Interna Ihres Shadow-DOM-Baums zugreifen sollte.

## Kapselung vor CSS

In dieser Version der Seite ist das HTML das gleiche wie das Original:

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

Diesmal haben wir einige CSS, die auf `<span>`-Elemente auf der Seite zielen:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS beeinflusst keine Knoten im Shadow DOM:

{{EmbedLiveSample("Kapselung vor CSS")}}

## Anwenden von Stilen innerhalb des Shadow DOM

In diesem Abschnitt betrachten wir zwei verschiedene Möglichkeiten, Stile innerhalb eines Shadow-DOM-Baumes anzuwenden:

- [_Programmatisch_](#konstruierbare_stylesheets), indem wir ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und es an die Shadow-Root anhängen.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), indem wir ein {{htmlelement("style")}}-Element in einer Deklaration eines {{htmlelement("template")}}-Elements hinzufügen.

In beiden Fällen sind die im Shadow-DOM-Baum definierten Stile auf diesen Baum beschränkt, sodass Seiten-Stile keine Elemente im Shadow DOM beeinflussen und Shadow-DOM-Stile keine Elemente im Rest der Seite beeinflussen.

### Konstruierbare Stylesheets

Um Seitenelemente im Shadow DOM mit konstruierbaren Stylesheets zu stylen, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Dessen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) festlegen
3. Es der Shadow-Root hinzufügen, indem es zu [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zugewiesen wird

Die im `CSSStyleSheet` definierten Regeln sind auf den Shadow-DOM-Baum beschränkt, ebenso wie auf alle anderen DOM-Bäume, denen wir es zugewiesen haben.

Hier nochmals das HTML mit unserem Host und einem `<span>`:

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

Die im Shadow-DOM-Baum definierten Stile werden nicht auf den Rest der Seite angewandt:

{{EmbedLiveSample("Konstruierbare Stylesheets")}}

### Hinzufügen von `<style>`-Elementen in `<template>`-Deklarationen

Eine Alternative zum Konstruieren von `CSSStyleSheet`-Objekten ist das Einschließen eines {{htmlelement("style")}}-Elements innerhalb des {{htmlelement("template")}}-Elements, das ein Web-Komponente definiert.

In diesem Fall umfasst das HTML die `<template>`-Deklaration

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

Im JavaScript erstellen wir das Shadow DOM und fügen den Inhalt des `<template>` hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Erneut werden die im `<template>` definierten Stile nur innerhalb des Shadow-DOM-Baums angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("Hinzufügen von Style-Elementen in Template-Deklarationen")}}

### Entscheidung zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen zu verwenden ist, hängt von Ihrer Anwendung und Ihren persönlichen Vorlieben ab.

Das Erstellen eines `CSSStyleSheet` und dessen Zuweisen zur Shadow-Root mit `adoptedStyleSheets` ermöglicht Ihnen, ein einziges Stylesheet zu erstellen und es unter vielen DOM-Bäumen zu teilen. Zum Beispiel könnte eine Komponentenbibliothek ein einziges Stylesheet erstellen und es dann unter allen zur Bibliothek gehörenden benutzerdefinierten Elementen teilen. Der Browser wird dieses Stylesheet einmal parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese auf alle Komponenten ausweiten, die das Stylesheet verwenden.

Der Ansatz des Anfügens eines `<style>`-Elements ist großartig, wenn Sie deklarativ sein möchten, wenig Stile haben und keine Stile über verschiedene Komponenten hinweg teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die durch Shadow DOM bereitgestellte Kapselung wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unglaublich fragil. Es wäre zu einfach für eine Seite, das Verhalten oder Layout eines benutzerdefinierten Elements durch die Ausführung von JavaScript oder CSS auf der Seite versehentlich zu beschädigen. Als Entwickler eines benutzerdefinierten Elements wüssten Sie nie, ob die innerhalb Ihres benutzerdefinierten Elements anwendbaren Selektoren mit denen einer Seite, die sich entschieden hat, Ihr benutzerdefiniertes Element zu verwenden, in Konflikt stehen.

Benutzerdefinierte Elemente werden als eine Klasse implementiert, die entweder die Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein eingebautes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt mehrere Elemente unter dieser Root, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein `<filled-circle>`-benutzerdefiniertes Element, das lediglich einen mit einer Volltonfarbe gefüllten Kreis rendert.

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

{{EmbedLiveSample("Shadow DOM und benutzerdefinierte Elemente", 100, 160)}}

Weitere Beispiele, die verschiedene Aspekte der Implementierung benutzerdefinierter Elemente veranschaulichen, finden Sie in unserem [Leitfaden zu benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements).

## Siehe auch

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- {{HTMLelement("template")}}
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- {{CSSXref("::part")}}
