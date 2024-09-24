---
title: Verwenden des Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 9d76a1d4601c8e0042732899a99b6fecde2c919d
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt benutzerdefinierter Elemente ist die Kapselung, da ein benutzerdefiniertes Element per Definition ein Stück wiederverwendbarer Funktionalität ist: Es könnte auf jeder Webseite eingefügt werden und sollte funktionieren. Daher ist es wichtig, dass der im Dokument ausgeführte Code ein benutzerdefiniertes Element nicht versehentlich beschädigen kann, indem seine interne Implementierung modifiziert wird. Shadow DOM ermöglicht es Ihnen, einem Element einen DOM-Baum anzuhängen und die Interna dieses Baums vor JavaScript und CSS, die im Dokument laufen, zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung des Shadow DOM.

## Übersicht

Dieser Artikel geht davon aus, dass Sie bereits mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model/Introduction) vertraut sind — einer baumähnlichen Struktur verbundener Knoten, die die verschiedenen Elemente und Text strings darstellt, die in einem Markup-Dokument (in der Regel ein HTML-Dokument im Fall von Webdokumenten) erscheinen. Betrachten Sie zum Beispiel den folgenden HTML-Abschnitt:

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

Dieser Abschnitt erzeugt die folgende DOM-Struktur (ausgenommen Textknoten, die nur aus Leerraum bestehen):

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

_Shadow_ DOM ermöglicht es, versteckte DOM-Bäume an Elemente im regulären DOM-Baum anzuhängen — dieser Shadow DOM-Baum beginnt mit einer Shadow-Root, unter der Sie jedes Element anhängen können, auf die gleiche Weise wie im normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Root und Shadow-Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe der Shadow-DOM-Terminologie, die man kennen sollte:

- **Shadow-Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow-Tree**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow-Grenze**: Der Ort, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow-Root**: Der Wurzelknoten des Shadow-Trees.

Sie können die Knoten im Shadow DOM auf genau die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten — zum Beispiel durch das Anhängen von Kindern oder das Setzen von Attributen, das Stylen einzelner Knoten mit element.style.foo oder das Hinzufügen von Styles zum gesamten Shadow DOM-Baum innerhalb eines {{htmlelement("style")}} Elements. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow-DOMs etwas außerhalb davon beeinflussen kann, was eine praktische Kapselung ermöglicht.

Bevor Shadow DOM für Webentwickler verfügbar wurde, verwendeten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie beispielsweise an ein {{htmlelement("video")}} Element, bei dem die standardmäßigen Browser-Steuerelemente angezeigt werden. Im DOM sehen Sie nur das `<video>`-Element, aber es enthält eine Reihe von Buttons und andere Steuerelemente innerhalb seines Shadow DOM. Die Shadow DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Tree und die {{ HTMLElement("slot") }} Elemente erben die [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribute von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Programmatisch mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}} Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}} Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen {{domxref("Element.attachShadow()", "attachShadow()")}} auf dem Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM hinzufügen, genau wie wir es mit dem Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

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

Das Erstellen eines Shadow DOM über die JavaScript-API könnte eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche bessere Leistung und damit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}} Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{glossary("enumerated")}} `shadowrootmode` Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, die gleichen Werte wie die `mode` Option der {{domxref("Element.attachShadow()", "attachShadow()")}} Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig wird der Inhalt von `<template>` nicht angezeigt. In diesem Fall, weil `shadowrootmode="open"` enthalten war, wird die Shadow-Root gerendert. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML geparst hat, ersetzt er das {{htmlelement("template")}} Element mit seinem Inhalt, der in eine [shadow root](/de/docs/Glossary/Shadow_tree) eingewickelt ist, die an das Elternelement, das `<div id="host">` in unserem Beispiel, angehängt ist. Der resultierende DOM-Baum sieht so aus (es gibt kein `<template>` Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie neben `shadowrootmode` auch `<template>` Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der erzeugten Shadow-Root anzugeben.

## Kapselung vor JavaScript

Bisher mag das alles nicht viel erscheinen. Aber schauen wir mal, was passiert, wenn Code im Dokument versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist wie die letzte, nur dass wir zwei {{htmlelement("button")}} Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Wenn Sie auf die Schaltfläche "Uppercase span elements" klicken, werden alle `<span>` Elemente auf der Seite gefunden und deren Text in Großbuchstaben umgewandelt. Ein Klick auf die Schaltfläche "Reload" lädt die Seite neu, sodass Sie es erneut versuchen können.

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

Wenn Sie auf "Uppercase span elements" klicken, werden Sie feststellen, dass {{domxref("Document.querySelectorAll()")}} die Elemente in unserem Shadow DOM nicht findet: Sie sind effektiv vor JavaScript im Dokument verborgen:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die "mode" Option

Im obigen Beispiel übergeben wir `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann JavaScript im Dokument die Interna Ihres Shadow DOM über die {{domxref("Element.shadowRoot", "shadowRoot")}} Eigenschaft des Shadow-Hosts zugreifen.

In diesem Beispiel enthält der HTML-Code wie zuvor den Shadow-Host, ein `<span>` Element im Haupt-DOM-Baum und zwei Schaltflächen:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

Diesmal verwendet die Schaltfläche "Uppercase" `shadowRoot`, um die `<span>` Elemente im DOM zu finden:

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

Diesmal kann das im Dokument laufende JavaScript auf die Interna des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das `{mode: "open"}` Argument gibt dem Dokument eine Möglichkeit, die Kapselung Ihres Shadow DOM zu durchbrechen. Wenn Sie dem Dokument diese Möglichkeit nicht geben möchten, übergeben Sie `{mode: "closed"}` und `shadowRoot` gibt `null` zurück.

Sie sollten dies jedoch nicht als starkes Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, dies zu umgehen, zum Beispiel durch Browsererweiterungen, die im Dokument laufen. Es ist mehr ein Hinweis darauf, dass das Dokument nicht auf die Interna Ihres Shadow DOM zugreifen sollte.

## Kapselung vor CSS

In dieser Version der Seite ist der HTML-Code derselbe wie im Original:

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

Diesmal werden wir einige CSS verwenden, die `<span>` Elemente im Dokument ansprechen:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Die CSS des Dokuments beeinflusst Knoten im Shadow DOM nicht:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Anwenden von Styles im Shadow DOM

In diesem Abschnitt werden wir uns zwei verschiedene Möglichkeiten ansehen, um Styles in einem Shadow DOM-Baum anzuwenden:

- [_Programmatisch_](#erstellbare_stylesheets), indem ein {{domxref("CSSStyleSheet")}} Objekt erstellt und an die Shadow-Root angehängt wird.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), indem ein {{htmlelement("style")}} Element in eine {{htmlelement("template")}} Deklaration eingefügt wird.

In beiden Fällen sind die im Shadow DOM-Baum definierten Styles auf diesen Baum beschränkt, sodass, genau wie Styles im Dokument keine Elemente im Shadow DOM beeinflussen, Shadow DOM-Styles keine Elemente im Rest des Dokuments beeinflussen.

### Erstellbare Stylesheets

Um Seitenelemente im Shadow DOM mit erstellbaren Stylesheets zu stylen, können wir:

1. Ein leeres {{domxref("CSSStyleSheet")}} Objekt erstellen
2. Sein Inhalt mit {{domxref("CSSStyleSheet.replace()")}} oder {{domxref("CSSStyleSheet.replaceSync()")}} festlegen
3. Es an die Shadow-Root anhängen, indem es der {{domxref("ShadowRoot.adoptedStyleSheets")}} zugewiesen wird

Im `CSSStyleSheet` definierte Regeln werden auf den Shadow DOM-Baum beschränkt, sowie auf alle anderen DOM-Bäume, denen wir es zugewiesen haben.

Hier ist nochmals das HTML, das unseren Host und ein `<span>` enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Diesmal erstellen wir das Shadow DOM und weisen ihm ein `CSSStyleSheet` Objekt zu:

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

Die im Shadow DOM-Baum definierten Styles werden im Rest des Dokuments nicht angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### Hinzufügen von `<style>` Elementen in `<template>` Deklarationen

Eine Alternative zum Erstellen von `CSSStyleSheet` Objekten ist das Hinzufügen eines {{htmlelement("style")}} Elements in das {{htmlelement("template")}} Element, das eine Webkomponente definiert.

In diesem Fall enthält das HTML die `<template>` Deklaration

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

Auch hier werden die im `<template>` definierten Styles nur innerhalb des Shadow DOM-Baums angewendet und nicht im Rest des Dokuments:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Auswahl zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen Sie verwenden sollten, hängt von Ihrer Anwendung und persönlichen Vorlieben ab.

Das Erstellen eines `CSSStyleSheet` und das Zuweisen an die Shadow-Root mithilfe von `adoptedStyleSheets` ermöglicht es Ihnen, ein einzelnes Stylesheet zu erstellen und es mit vielen DOM-Bäumen zu teilen. Eine Komponentenbibliothek könnte beispielsweise ein Stylesheet erstellen und dann mit allen benutzerdefinierten Elementen dieser Bibliothek teilen. Der Browser wird dieses Stylesheet einmal parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese in allen Komponenten, die das Stylesheet verwenden, übernehmen.

Der Ansatz, ein `<style>` Element anzufügen, ist großartig, wenn Sie deklarativ sein möchten, nur wenige Styles haben und die Styles nicht über verschiedene Komponenten hinweg teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die Kapselung durch Shadow DOM wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unendlich fragil. Es wäre zu leicht, dass eine Seite unbeabsichtigt das Verhalten oder Layout eines benutzer definierten Elements durch das Ausführen von JavaScript oder CSS beschädigt. Als Entwickler eines benutzerdefinierten Elements würden Sie nie wissen, ob die innerhalb Ihres benutzerdefinierten Elements anwendbaren Selektoren mit denen in Konflikt stehen, die in einer Seite gelten, die Ihr benutzerdefiniertes Element verwendet.

Benutzerdefinierte Elemente werden als Klasse implementiert, die entweder die Basis {{domxref("HTMLElement")}} oder ein eingebautes HTML-Element wie {{domxref("HTMLParagraphElement")}} erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host und das Element erstellt mehrere Elemente unter dieser Wurzel, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein `<filled-circle>` benutzerdefiniertes Element, das nur einen Kreis mit einer soliden Farbe darstellt.

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Erstellen Sie eine Shadow-Root
    // Das benutzerdefinierte Element selbst ist der Shadow-Host
    const shadow = this.attachShadow({ mode: "open" });

    // interne Implementierung erstellen
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

- [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Using templates and slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{HTMLelement("template")}}
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping) module
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS shadow parts](/de/docs/Web/CSS/CSS_shadow_parts) module
- {{CSSXref("::part")}}
