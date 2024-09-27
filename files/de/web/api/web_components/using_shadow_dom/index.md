---
title: Verwendung von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 9d76a1d4601c8e0042732899a99b6fecde2c919d
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element per Definition ein Stück wiederverwendbarer Funktionalität ist: Es kann in jede Webseite eingebunden werden und erwartet, dass es funktioniert. Daher ist es wichtig, dass Code, der auf der Seite ausgeführt wird, ein benutzerdefiniertes Element nicht versehentlich durch Ändern seiner internen Implementierung beschädigen kann. Shadow DOM ermöglicht es Ihnen, einen DOM-Baum an ein Element anzuhängen und die Interna dieses Baums vor JavaScript und CSS, die auf der Seite ausgeführt werden, zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick

Dieser Artikel geht davon aus, dass Sie bereits mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model/Introduction) vertraut sind – einer baumartigen Struktur von verbundenen Knoten, die die verschiedenen Elemente und Textzeichenfolgen darstellt, die in einem Markup-Dokument (in der Regel ein HTML-Dokument im Fall von Webdokumenten) erscheinen. Betrachten Sie als Beispiel das folgende HTML-Fragment:

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

Dieses Fragment erzeugt die folgende DOM-Struktur (einschließlich nur der nicht-leeren Textknoten):

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

Shadow DOM ermöglicht es, versteckte DOM-Bäume an Elemente im regulären DOM-Baum anzuhängen – dieser Shadow-DOM-Baum beginnt mit einer Shadow-Root, unter der Sie jedes Element anhängen können, genauso wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Root und Shadow-Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe des Shadow DOM, die Sie kennen sollten:

- **Shadow Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow Tree**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow Boundary**: Der Punkt, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow Root**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten – z. B. durch Anfügen von Kindern oder Setzen von Attributen, Styling einzelner Knoten mit `element.style.foo`, oder Styling des gesamten Shadow DOM-Baums innerhalb eines {{htmlelement("style")}}-Elements. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow DOM irgendetwas außerhalb davon beeinflussen kann, was eine nützliche Kapselung ermöglicht.

Bevor das Shadow DOM für Webentwickler verfügbar gemacht wurde, haben Browser es bereits verwendet, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element mit den Standard-Browser-Steuerelementen. Alles, was Sie im DOM sehen, ist das `<video>`-Element, aber es enthält eine Reihe von Tasten und anderen Steuerelementen innerhalb seines Shadow DOM. Die Shadow DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und {{ HTMLElement("slot") }}-Elemente erben die Attribute [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Imperativ mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `"host"`, und ein {{htmlelement("span")}}-Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) am Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM hinzufügen, genau wie wir es beim Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Imperatively with JavaScript")}}

### Deklarativ mit HTML

Die Erstellung eines Shadow DOM über die JavaScript-API kann eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche eine bessere Leistung und dadurch eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das [enumerated](/de/docs/Glossary/enumerated) `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden Inhalte von `<template>` nicht angezeigt. In diesem Fall wird, weil `shadowrootmode="open"` enthalten war, die Shadow-Root gerendert. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML geparst hat, ersetzt er das {{htmlelement("template")}}-Element durch seinen Inhalt, der in eine [shadow-root](/de/docs/Glossary/Shadow_tree) eingebettet ist, die an das übergeordnete Element angehängt ist, das `<div id="host">` in unserem Beispiel. Der resultierende DOM-Baum sieht so aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zu `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der erzeugten Shadow-Root festzulegen.

## Kapselung von JavaScript

Bisher mag das nicht viel aussehen. Aber lassen Sie uns sehen, was passiert, wenn Code, der auf der Seite läuft, versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die letzte, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Das Klicken auf die Schaltfläche "Uppercase span elements" findet alle `<span>`-Elemente auf der Seite und ändert ihren Text in Großbuchstaben.
Das Klicken auf die Schaltfläche "Reload" lädt die Seite einfach neu, sodass Sie es erneut versuchen können.

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

Wenn Sie auf "Uppercase span elements" klicken, werden Sie sehen, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) die Elemente in unserem Shadow DOM nicht findet: Sie sind effektiv vor JavaScript auf der Seite versteckt:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die "mode"-Option

Im obigen Beispiel übergeben wir ein Argument `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann das JavaScript auf der Seite auf die Interna Ihres Shadow DOM über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts zugreifen.

In diesem Beispiel enthält das HTML, wie zuvor, den Shadow-Host, ein `<span>`-Element im Haupt-DOM-Baum und zwei Schaltflächen:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

Diesmal verwendet die "Uppercase"-Schaltfläche `shadowRoot`, um die `<span>`-Elemente im DOM zu finden:

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

Diesmal kann das auf der Seite laufende JavaScript auf die Interna des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das `{mode: "open"}`-Argument gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOMs zu brechen. Wenn Sie der Seite diese Fähigkeit nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`, und dann gibt `shadowRoot` `null` zurück.

Allerdings sollten Sie dies nicht als starkes Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, diese Kapselung zu umgehen, z. B. durch im Hintergrund laufende Browsererweiterungen. Es handelt sich vielmehr um einen Hinweis darauf, dass die Seite nicht auf die Interna Ihres Shadow DOM-Baums zugreifen sollte.

## Kapselung von CSS

In dieser Version der Seite ist das HTML identisch mit dem ursprünglichen:

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

Diesmal werden wir etwas CSS auf die `<span>`-Elemente in der Seite anwenden:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS beeinflusst die Knoten innerhalb des Shadow DOM nicht:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Anwenden von Stilen innerhalb des Shadow DOM

In diesem Abschnitt betrachten wir zwei verschiedene Möglichkeiten, Stile innerhalb eines Shadow DOM-Baums anzuwenden:

- [_Programmgesteuert_](#konstruktive_stylesheets), indem ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt konstruiert und an die Shadow-Root angehängt wird.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), indem ein {{htmlelement("style")}}-Element in einer {{htmlelement("template")}}-Elementdeklaration hinzugefügt wird.

In beiden Fällen sind die im Shadow DOM-Baum definierten Stile auf diesen Baum beschränkt, sodass, ebenso wie Seitenstile keine Elemente im Shadow DOM beeinflussen, Shadow DOM-Stile keine Elemente im Rest der Seite beeinflussen.

### Konstruktive Stylesheets

Um Seitenelemente im Shadow DOM mit konstruktiven Stylesheets zu stylen, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Dessen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) festlegen
3. Es der Shadow-Root hinzufügen, indem wir es [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zuweisen

Regeln, die im `CSSStyleSheet` definiert sind, sind auf den Shadow DOM-Baum beschränkt, genauso wie auf jeden anderen DOM-Baum, dem wir es zugewiesen haben.

Hier ist erneut das HTML mit unserem Host und einem `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Diesmal werden wir das Shadow DOM erstellen und ihm ein `CSSStyleSheet`-Objekt zuweisen:

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

Die im Shadow DOM-Baum definierten Stile werden nicht im Rest der Seite angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### Hinzufügen von `<style>`-Elementen in `<template>`-Deklarationen

Eine Alternative zur Erstellung von `CSSStyleSheet`-Objekten besteht darin, ein {{htmlelement("style")}}-Element innerhalb des im {{htmlelement("template")}}-Elementen deklarierten Web-Komponenten zu platzieren.

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

Im JavaScript erstellen wir das Shadow DOM und fügen den Inhalt des `<template>` hinzu:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Auch hier werden die im `<template>` definierten Stile nur im Shadow DOM-Baum angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Wahl zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen Sie verwenden, hängt von Ihrer Anwendung und Ihren persönlichen Vorlieben ab.

Ein `CSSStyleSheet` erstellen und es dem Shadow-Root mit `adoptedStyleSheets` zuweisen, ermöglicht es Ihnen, ein einzelnes Stylesheet zu erstellen und es unter vielen DOM-Bäumen zu teilen. Zum Beispiel kann eine Komponentenbibliothek ein einzelnes Stylesheet erstellen und es dann mit allen benutzerdefinierten Elementen teilen, die zu dieser Bibliothek gehören. Der Browser wird dieses Stylesheet einmalig parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese propagieren sich zu allen Komponenten, die das Stylesheet verwenden.

Der Ansatz, ein `<style>`-Element anzuhängen, ist großartig, wenn Sie deklarativ sein möchten, wenige Stile haben und nicht über verschiedene Komponenten hinweg Stile teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die Kapselung, die das Shadow DOM bietet, wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unglaublich fragil. Es wäre zu einfach, dass eine Seite versehentlich das Verhalten oder Layout eines benutzerdefinierten Elements durch die Ausführung von JavaScript oder CSS auf der Seite beschädigt. Als Entwickler eines benutzerdefinierten Elements könnten Sie nie wissen, ob die Selektoren, die in Ihrem benutzerdefinierten Element anwendbar sind, mit denen auf einer Seite in Konflikt stehen, die Ihr benutzerdefiniertes Element verwendet.

Benutzerdefinierte Elemente werden als Klasse implementiert, die entweder das Basis-[`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein integriertes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt mehrere Elemente unter dieser Root, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein `<filled-circle>`-benutzerdefiniertes Element, das einfach einen mit einer Vollfarbe gefüllten Kreis rendert.

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

Für weitere Beispiele, die verschiedene Aspekte der Implementierung von benutzerdefinierten Elementen veranschaulichen, lesen Sie unseren [Leitfaden zu benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements).

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
