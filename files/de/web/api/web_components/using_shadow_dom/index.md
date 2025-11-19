---
title: Verwendung von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element per Definition ein Stück wiederverwendbare Funktionalität darstellt: Es könnte in jede Webseite eingefügt werden und sollte funktionieren. Daher ist es wichtig, dass der in der Seite ausgeführte Code nicht versehentlich ein benutzerdefiniertes Element durch Änderungen an seiner internen Implementierung beschädigen kann. Shadow DOM ermöglicht es, einem Element einen DOM-Baum anzuhängen und die internen Teile dieses Baums vor JavaScript und CSS, die auf der Seite ausgeführt werden, zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick

Dieser Artikel geht davon aus, dass Sie bereits das Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model) kennen — eine baumartige Struktur miteinander verbundener Knoten, die die verschiedenen Elemente und Textzeilen in einem Markupdokument repräsentiert (in der Regel ein HTML-Dokument im Fall von Webdokumenten). Betrachten Sie zum Beispiel das folgende HTML-Fragment:

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

Dieses Fragment erzeugt die folgende DOM-Struktur (ohne Textknoten, die nur aus Leerzeichen bestehen):

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

Das _Shadow_ DOM erlaubt es, versteckte DOM-Bäume an Elemente im regulären DOM-Baum anzuhängen — dieser Shadow DOM-Baum beginnt mit einer Shadow-Root, unter der Sie jedes Element anhängen können, genau wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Root und Shadow-Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe im Zusammenhang mit Shadow DOM, die Sie kennen sollten:

- **Shadow host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow tree**: Der DOM-Baum im Shadow DOM.
- **Shadow boundary**: Der Punkt, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow root**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten — zum Beispiel durch das Anhängen von Kindknoten oder das Setzen von Attributen, das Stylen einzelner Knoten über element.style.foo oder das Hinzufügen von Styles zum gesamten Shadow DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow DOMs etwas außerhalb beeinflussen kann, was eine praktische Kapselung ermöglicht.

Bevor Shadow DOM für Webentwickler verfügbar gemacht wurde, verwendeten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element mit den standardmäßigen Browser-Steuerelementen. Alles, was Sie im DOM sehen, ist das `<video>`-Element, aber es enthält eine Reihe von Tasten und anderen Steuerelementen innerhalb seines Shadow DOM. Die Shadow DOM-Spezifikation ermöglicht es, das Shadow DOM eigener benutzerdefinierter Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und die {{ HTMLElement("slot") }}-Elemente erben die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribute von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Imperativ mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}}-Element mit einigem Text:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) auf dem Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM hinzufügen, genau wie wir es im Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

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

Das Erstellen eines Shadow DOM über die JavaScript-API könnte eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche bessere Leistung und damit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "enumerierte")}} `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, die gleichen Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden Inhalte von `<template>` nicht angezeigt. In diesem Fall, da `shadowrootmode="open"` enthalten war, wird die Shadow-Root gerendert. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML geparsed hat, ersetzt er das {{htmlelement("template")}}-Element durch seinen Inhalt, der in einer {{Glossary("Shadow_tree", "shadow root")}} eingebettet ist, die an das übergeordnete Element, das `<div id="host">` in unserem Beispiel, angehängt ist. Der resultierende DOM-Baum sieht wie folgt aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zum `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der generierten Shadow-Root anzugeben.

## Kapselung vor JavaScript

Bisher sieht das vielleicht nicht nach viel aus. Aber schauen wir mal, was passiert, wenn ein auf der Seite ausgeführter Code versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die letzte, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Beim Klicken auf die Schaltfläche "Uppercase span elements" werden alle `<span>`-Elemente auf der Seite gefunden und ihr Text wird in Großbuchstaben umgewandelt.
Die Schaltfläche "Reload" lädt die Seite einfach neu, sodass Sie es erneut versuchen können.

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

Wenn Sie auf "Uppercase span elements" klicken, werden Sie sehen, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) keine Elemente in unserem Shadow DOM findet: Sie sind effektiv vor JavaScript auf der Seite verborgen:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die "mode"-Option

Im obigen Beispiel übergeben wir das Argument `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann das JavaScript auf der Seite über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts auf die Interna Ihres Shadow DOM zugreifen.

In diesem Beispiel enthält der HTML-Code wie zuvor den Shadow-Host, ein `<span>`-Element im Haupt-DOM-Baum und zwei Schaltflächen:

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

Dieses Mal kann das JavaScript auf der Seite auf die Interna des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das Argument `{mode: "open"}` gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOM zu durchbrechen. Wenn Sie der Seite diese Möglichkeit nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`, und `shadowRoot` gibt `null` zurück.

Sie sollten dies jedoch nicht als starkes Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, es zu umgehen, zum Beispiel durch Browser-Erweiterungen, die auf der Seite ausgeführt werden. Es ist eher ein Hinweis darauf, dass die Seite nicht auf die Interna Ihres Shadow-Baums zugreifen sollte.

## Kapselung vor CSS

In dieser Version der Seite ist das HTML dasselbe wie das Original:

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

Diesmal haben wir einige CSS, das `<span>`-Elemente auf der Seite anspricht:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS beeinflusst keine Knoten innerhalb des Shadow DOM:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Styling innerhalb des Shadow DOM

In diesem Abschnitt betrachten wir zwei verschiedene Möglichkeiten, um Styles innerhalb eines Shadow DOM-Baums anzuwenden:

- [_Programmgesteuert_](#constructable_stylesheets), indem ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellt und an die Shadow-Root angehängt wird.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), indem ein {{htmlelement("style")}}-Element in der Deklaration eines {{htmlelement("template")}}-Elements hinzugefügt wird.

In beiden Fällen sind die im Shadow DOM-Baum definierten Styles auf diesen Baum beschränkt, sodass Styles der Seite keine Elemente im Shadow DOM beeinträchtigen und umgekehrt.

### Constructable stylesheets

Um Seitenelemente im Shadow DOM mit konstruierten Stylesheets zu stylen, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Dessen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) setzen
3. Es der Shadow-Root hinzufügen, indem es [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zugewiesen wird

Die im `CSSStyleSheet` definierten Regeln gelten nur für den Shadow DOM-Baum sowie für alle anderen DOM-Bäume, denen wir es zugewiesen haben.

Hier ist nochmals das HTML mit unserem Host und einem `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Diesmal erstellen wir das Shadow DOM und weisen ihm ein `CSSStyleSheet`-Objekt zu:

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

Die im Shadow DOM-Baum definierten Styles werden nicht auf den Rest der Seite angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### Hinzufügen von `<style>`-Elementen in `<template>`-Deklarationen

Eine Alternative zur Konstruktion von `CSSStyleSheet`-Objekten besteht darin, ein {{htmlelement("style")}}-Element innerhalb des {{htmlelement("template")}}-Elements zu platzieren, das zur Definition einer Webkomponente verwendet wird.

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

Auch hier werden die im `<template>` definierten Styles nur innerhalb des Shadow DOM-Baums angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Auswahl zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen Sie verwenden, hängt von Ihrer Anwendung und persönlichen Vorlieben ab.

Ein `CSSStyleSheet` zu erstellen und es mit `adoptedStyleSheets` der Shadow-Root zuzuweisen, ermöglicht es Ihnen, ein einziges Stylesheet zu erstellen und es unter mehreren DOM-Bäumen zu teilen. Zum Beispiel könnte eine Komponentenbibliothek ein einziges Stylesheet erstellen und es unter allen zur Bibliothek gehörenden benutzerdefinierten Elementen teilen. Der Browser parst dieses Stylesheet einmal. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese auf alle Komponenten anwenden, die das Stylesheet verwenden.

Der Ansatz, ein `<style>`-Element anzuhängen, ist ideal, wenn Sie deklarativ sein möchten, nur wenige Styles haben und diese nicht zwischen verschiedenen Komponenten teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die Kapselung, die das Shadow DOM bietet, wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unglaublich fragil. Es wäre zu einfach für eine Seite, versehentlich das Verhalten oder Layout eines benutzerdefinierten Elements zu stören, indem JavaScript oder CSS-Seiten ausgeführt werden. Als Entwickler von benutzerdefinierten Elementen würden Sie nie wissen, ob die innerhalb Ihres benutzerdefinierten Elements anwendbaren Selektoren mit denen in Konflikt geraten, die auf einer Seite anwendbar sind, die sich entscheidet, Ihr benutzerdefiniertes Element zu verwenden.

Benutzerdefinierte Elemente werden als eine Klasse implementiert, die entweder von dem Basis- [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder einem eingebauten HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert wird. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt unter dieser Root mehrere Elemente, um die interne Implementierung des Elements bereitzustellen.

Das unten stehende Beispiel erstellt ein benutzerdefiniertes `<filled-circle>`-Element, das einfach einen Kreis rendert, der mit einer Vollfarbe gefüllt ist.

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

Für weitere Beispiele, die verschiedene Aspekte der Implementierung benutzerdefinierter Elemente veranschaulichen, siehe unseren [Leitfaden zu benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements).

## Siehe auch

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- {{HTMLelement("template")}}
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
- {{CSSXref("::part")}}
