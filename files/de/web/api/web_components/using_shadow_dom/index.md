---
title: Verwenden von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element per Definition ein Stück wiederverwendbare Funktionalität ist: Es könnte auf jede Webseite eingefügt werden und sollte erwartungsgemäß funktionieren. Daher ist es wichtig, dass der im Dokument ausgeführte Code ein benutzerdefiniertes Element nicht versehentlich durch die Änderung seiner internen Implementierung beschädigen kann. Shadow DOM ermöglicht es Ihnen, einem Element einen DOM-Baum anzuhängen und die Interna dieses Baums vor im Dokument ausgeführtem JavaScript und CSS zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick

Dieser Artikel setzt voraus, dass Sie mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model) — einer baumartigen Struktur verbundener Knoten, die die unterschiedlichen Elemente und Textzeichenfolgen darstellt, die in einem Markup-Dokument (normalerweise ein HTML-Dokument im Fall von Web-Dokumenten) erscheinen — bereits vertraut sind. Betrachten Sie als Beispiel den folgenden HTML-Abschnitt:

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

Dieser Abschnitt erzeugt die folgende DOM-Struktur (Leerzeichen ausschließende Textknoten sind nicht enthalten):

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

_Shadow_ DOM erlaubt es, versteckte DOM-Bäume an Elemente im regulären DOM-Baum anzuhängen — dieser Shadow DOM-Baum beginnt mit einer Shadow-Wurzel, unter der Sie jedes Element anhängen können, ebenso wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Wurzel und Shadow-Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe in Bezug auf Shadow DOM, die Sie kennen sollten:

- **Shadow-Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow-Baum**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow-Grenze**: Der Ort, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow-Wurzel**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf genau die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten — z.B. durch Hinzufügen von untergeordneten Elementen oder Festlegen von Attributen, individuelle Knoten mit `element.style.foo` stylen oder Stil zum gesamten Shadow DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements hinzufügen. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow DOM Auswirkungen außerhalb davon haben kann, was eine praktische Kapselung erlaubt.

Bevor Shadow DOM für Webentwickler verfügbar gemacht wurde, verwendeten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element, bei dem die Standard-Browser-Steuerelemente angezeigt werden. Alles, was Sie im DOM sehen, ist das `<video>`-Element, aber es enthält eine Reihe von Tasten und anderen Steuerungen innerhalb seines Shadow DOM. Die Shadow DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und {{ HTMLElement("slot") }}-Elemente erben die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribute von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Imperativ mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}}-Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) am Host auf, um das Shadow DOM zu erstellen, und können dann dem Shadow DOM Knoten hinzufügen, genau wie wir es im Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Imperatively with JavaScript")}}

### Deklarativ mit HTML

Das Erstellen eines Shadow DOMs über die JavaScript-API könnte eine gute Option für klientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche eine bessere Leistung und somit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "enumerated")}} `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, den gleichen Werten wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden die Inhalte von `<template>` nicht angezeigt. In diesem Fall, da `shadowrootmode="open"` eingeschlossen war, wird die Shadow-Wurzel gerendert. In unterstützten Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Wurzel angezeigt.

Nachdem der Browser das HTML geparst hat, ersetzt er das {{htmlelement("template")}}-Element durch seinen Inhalt, der in einem {{Glossary("Shadow_tree", "shadow root")}} verpackt ist und an das Elternelement, das `<div id="host">` in unserem Beispiel, angehängt ist. Der resultierende DOM-Baum sieht wie folgt aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie neben dem `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der generierten Shadow-Wurzel anzugeben.

## Kapselung von JavaScript

Bisher sieht das vielleicht nicht nach viel aus. Aber sehen wir uns an, was passiert, wenn Code, der im Dokument ausgeführt wird, versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die letzte, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Beim Klicken auf die "Uppercase span elements"-Schaltfläche werden alle `<span>`-Elemente im Dokument gefunden und ihr Text in Großbuchstaben geändert. Beim Klicken auf die "Reload"-Schaltfläche wird die Seite einfach neu geladen, sodass Sie es erneut versuchen können.

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

Wenn Sie auf "Uppercase span elements" klicken, werden Sie sehen, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) die Elemente in unserem Shadow DOM nicht findet: Diese sind effektiv vor JavaScript im Dokument verborgen:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die "mode"-Option

Im obigen Beispiel übergeben wir ein Argument `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann das JavaScript im Dokument auf die Interna Ihres Shadow DOM über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts zugreifen.

In diesem Beispiel enthält das HTML wie zuvor den Shadow-Host, ein `<span>`-Element im Haupt-DOM-Baum und zwei Schaltflächen:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

Dieses Mal verwendet die "Uppercase"-Schaltfläche `shadowRoot`, um die `<span>`-Elemente im DOM zu finden:

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

Dieses Mal kann das im Dokument laufende JavaScript auf die Interna des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot und die \"mode\"-Option")}}

Das Argument `{mode: "open"}` gibt dem Dokument eine Möglichkeit, die Kapselung Ihres Shadow DOM zu durchbrechen. Wenn Sie dieser Möglichkeit dem Dokument nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`, und dann gibt `shadowRoot` `null` zurück.

Jedoch sollten Sie dies nicht als starke Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, dies zu umgehen, zum Beispiel durch im Dokument laufende Browser-Erweiterungen. Es ist eher ein Hinweis darauf, dass das Dokument nicht auf die Interna Ihres Shadow DOM-Baums zugreifen sollte.

## Kapselung von CSS

In dieser Version der Seite bleibt das HTML wie im Original:

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

Dieses Mal werden wir CSS verwenden, um `<span>`-Elemente im Dokument zu beeinflussen:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS hat keinen Einfluss auf Knoten innerhalb des Shadow DOM:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Anwenden von Stilen innerhalb des Shadow DOM

In diesem Abschnitt betrachten wir zwei verschiedene Möglichkeiten, um Stile innerhalb eines Shadow-DOM-Baums anzuwenden:

- [_Programmgesteuert_](#erstellbare_stylesheets), durch das Erstellen eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts und dessen Anhängen an das Shadow-Root.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), durch Hinzufügen eines {{htmlelement("style")}}-Elements in der Deklaration eines {{htmlelement("template")}}-Elements.

In beiden Fällen sind die im Shadow-DOM-Baum definierten Stile auf diesen Baum beschränkt, sodass, genau wie Seitenstile keine Einflüsse auf Elemente im Shadow DOM haben, auch Shadow-DOM-Stile keinen Einfluss auf Elemente im Rest der Seite haben.

### Erstellbare Stylesheets

Um Seitenelemente im Shadow DOM mit erstellbaren Stylesheets zu stylen, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Dessen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) festlegen
3. Es dem Shadow-Root hinzufügen, indem es [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zugewiesen wird

Regeln, die im `CSSStyleSheet` definiert sind, werden auf den Shadow-DOM-Baum beschränkt sowie auf alle anderen DOM-Bäume, denen wir es zugewiesen haben.

Hier ist, wieder einmal, das HTML mit unserem Host und einem `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Dieses Mal werden wir das Shadow DOM erstellen und ein `CSSStyleSheet`-Objekt zuweisen:

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

Die im Shadow-DOM-Baum definierten Stile werden im Rest der Seite nicht angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### Hinzufügen von `<style>`-Elementen in `<template>`-Deklarationen

Eine Alternative zum Erstellen von `CSSStyleSheet`-Objekten ist das Einfügen eines {{htmlelement("style")}}-Elements innerhalb des {{htmlelement("template")}}-Elements, das zur Definition einer Webkomponente verwendet wird.

In diesem Fall enthält das HTML die `<template>`-Deklaration

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

Erneut werden die im `<template>` definierten Stile nur innerhalb des Shadow-DOM-Baums und nicht im Rest der Seite angewendet:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Auswahl zwischen programmatischer und deklarativer Optionen

Welche dieser Optionen Sie verwenden, hängt von Ihrer Anwendung und Ihren persönlichen Präferenzen ab.

Ein `CSSStyleSheet` zu erstellen und es mit `adoptedStyleSheets` an das Shadow-Root zuzuweisen, ermöglicht es Ihnen, ein einzelnes Stylesheet zu erstellen und es mit vielen DOM-Bäumen zu teilen. Eine Komponentenbibliothek könnte beispielsweise ein einzelnes Stylesheet erstellen und es dann unter allen benutzerdefinierten Elementen dieser Bibliothek teilen. Der Browser wird das Stylesheet einmal parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und sie auf alle Komponenten, die das Stylesheet verwenden, übertragen.

Der Ansatz, ein `<style>`-Element anzuhängen, ist hervorragend, wenn Sie deklarativ sein möchten, nur wenige Stile haben und keine Stile über verschiedene Komponenten hinweg teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die durch Shadow DOM bereitgestellte Kapselung wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unendlich fragil. Es wäre zu einfach für eine Seite, das Verhalten oder Layout eines benutzerdefinierten Elements versehentlich durch die Ausführung von JavaScript oder CSS auf der Seite zu beschädigen. Als Entwickler eines benutzerdefinierten Elements würden Sie nie wissen, ob die auf Ihr benutzerdefiniertes Element anwendbaren Selektoren mit denen, die auf eine Seite zutrafen, die Ihr benutzerdefiniertes Element verwenden wollte, in Konflikt standen.

Benutzerdefinierte Elemente werden als eine Klasse implementiert, die entweder die Basis [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein integriertes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt mehrere Elemente unter dieser Wurzel, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein `<filled-circle>`-benutzerdefiniertes Element, das einfach einen Kreis rendert, der mit einer Volltonfarbe gefüllt ist.

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

Für weitere Beispiele, die verschiedene Aspekte der Implementierung von benutzerdefinierten Elementen veranschaulichen, siehe unseren [Leitfaden zu benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements).

## Siehe auch

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- {{HTMLelement("template")}}
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- {{CSSXref(":host")}}
- {{cssxref(":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
- {{CSSXref("::part")}}
