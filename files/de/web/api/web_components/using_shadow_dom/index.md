---
title: Verwendung von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element definitionsgemäß ein wiederverwendbares Funktionselement ist: Es könnte in jede Webseite eingefügt werden und soll funktionieren. Daher ist es wichtig, dass der Code, der in der Seite ausgeführt wird, ein benutzerdefiniertes Element nicht versehentlich durch Modifikation seiner internen Implementierung zerstören kann. Shadow DOM ermöglicht es, einem Element einen DOM-Baum anzuhängen, und die Interna dieses Baumes vom in der Seite laufenden JavaScript und CSS zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick auf hoher Ebene

Dieser Artikel geht davon aus, dass Sie mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model) bereits vertraut sind — einer baumartigen Struktur von verbundenen Knoten, die die verschiedenen Elemente und Textzeichenfolgen darstellt, die in einem Markup-Dokument (üblicherweise ein HTML-Dokument im Falle von Webdokumenten) erscheinen. Betrachten wir als Beispiel das folgende HTML-Fragment:

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

Dieses Fragment erzeugt die folgende DOM-Struktur (ausschließlich reiner Textknoten):

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

_Shadow_ DOM erlaubt das Anhängen versteckter DOM-Bäume an Elemente im regulären DOM-Baum — dieser Shadow-DOM-Baum beginnt mit einer Shadow-Root, an die Sie jedes Element anhängen können, genau wie beim normalen DOM.

![SVG-Version des Diagramms, das die Interaktion von Dokument, Shadow-Root und Shadow-Host zeigt.](shadowdom.svg)

Es gibt einige Begriffe im Zusammenhang mit Shadow DOM, die Sie kennen sollten:

- **Shadow-Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow-Baum**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow-Grenze**: Der Punkt, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow-Root**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf die gleiche Weise beeinflussen wie die nicht-shadow Knoten — zum Beispiel, indem Sie Kinder anhängen oder Attribute setzen, einzelne Knoten mit `element.style.foo` stylen oder der gesamten Shadow-DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements Stil verleihen. Der Unterschied besteht darin, dass kein Code innerhalb eines Shadow-DOMs irgendetwas außerhalb davon beeinflussen kann, was eine nützliche Kapselung ermöglicht.

Bevor Shadow DOM den Webentwicklern zur Verfügung gestellt wurde, nutzten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element mit den standardmäßig sichtbaren Browsersteuerungen. Alles, was Sie im DOM sehen, ist das `<video>`-Element, aber es enthält eine Reihe von Schaltflächen und anderen Steuerungen innerhalb seines Shadow DOM. Die Shadow-DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und {{ HTMLElement("slot") }}-Elemente erben die Attribute [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Programmatisch mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `"host"`, und ein {{htmlelement("span")}}-Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) auf den Host auf, um das Shadow DOM zu erstellen und können dann Knoten zum Shadow DOM hinzufügen, genau wie wir es zum Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

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

Das Erstellen eines Shadow DOM über die JavaScript-API kann eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte eine serverseitig gerenderte Benutzeroberfläche eine bessere Leistung und damit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "enumerierte")}} `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden Inhalte von `<template>` nicht angezeigt. In diesem Fall wird die Shadow-Root gerendert, da `shadowrootmode="open"` angegeben wurde. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML geparst hat, ersetzt er das {{htmlelement("template")}}-Element durch seinen Inhalt, der in einer {{Glossary("Shadow_tree", "shadow root")}} verpackt ist, die an das Elternelement angehängt ist, in unserem Beispiel das `<div id="host">`. Der resultierende DOM-Baum sieht so aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zu `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der generierten Shadow-Root anzugeben.

## Kapselung von JavaScript

Bis jetzt mag das nicht viel erscheinen. Aber lassen Sie uns sehen, was passiert, wenn der Code, der in der Seite läuft, versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist wie die letzte, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Das Klicken auf die Schaltfläche "Uppercase span elements" findet alle `<span>`-Elemente in der Seite und ändert ihren Text in Großbuchstaben.
Das Klicken auf die Schaltfläche "Reload" lädt die Seite einfach neu, sodass Sie es noch einmal versuchen können.

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

Wenn Sie auf "Uppercase span elements" klicken, werden Sie sehen, dass [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) die Elemente in unserem Shadow DOM nicht findet: Sie sind effektiv vor dem JavaScript in der Seite verborgen:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot und die "mode" Option

Im obigen Beispiel übergeben wir ein Argument `{ mode: "open" }` an `attachShadow()`. Mit `mode` auf `"open"` gesetzt, kann das JavaScript in der Seite auf die Interna Ihres Shadow DOM über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts zugreifen.

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

Dieses Mal kann das JavaScript auf der Seite auf das Innere des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das `{mode: "open"}`-Argument gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOM zu durchbrechen. Wenn Sie der Seite diese Möglichkeit nicht geben wollen, übergeben Sie stattdessen `{mode: "closed"}`, und dann gibt `shadowRoot` `null` zurück.

Allerdings sollten Sie dies nicht als starke Sicherheitsmaßnahme betrachten, da es Möglichkeiten gibt, dieses zu umgehen, zum Beispiel durch Browser-Erweiterungen, die auf der Seite laufen. Es ist eher ein Hinweis darauf, dass die Seite nicht auf die Interna Ihres Shadow-DOM-Baums zugreifen sollte.

## Kapselung von CSS

In dieser Version der Seite ist das HTML das gleiche wie im Original:

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

Dieses Mal werden wir einige CSS verwenden, die auf `<span>`-Elemente in der Seite abzielen:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS beeinflusst keine Knoten im Shadow DOM:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Anwendung von Stilen innerhalb des Shadow DOM

In diesem Abschnitt werden wir zwei verschiedene Möglichkeiten betrachten, um Stile innerhalb eines Shadow DOM-Baums anzuwenden:

- [_Programmgesteuert_](#konstruierbare_stylesheets), durch Erstellen eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts und deren Anbindung an die Shadow-Root.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), durch Hinzufügen eines {{htmlelement("style")}}-Elements in der Deklaration eines {{htmlelement("template")}}-Elements.

In beiden Fällen sind die im Shadow DOM-Baum definierten Stile auf diesen Baum beschränkt, sodass Seitenstile die Elemente im Shadow DOM nicht beeinflussen und Shadow DOM-Stile die Elemente im Rest der Seite nicht beeinflussen.

### Konstruierbare Stylesheets

Um Seitenelemente im Shadow DOM mit konstruierbaren Stylesheets zu stylen, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) setzen
3. Es der Shadow-Root hinzufügen, indem es [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zugewiesen wird

Die in der `CSSStyleSheet` definierten Regeln werden auf den Shadow DOM-Baum beschränkt sein, sowie auf andere DOM-Bäume, denen wir es zugewiesen haben.

Hier nochmals das HTML, das unseren Host und ein `<span>` enthält:

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

Die im Shadow DOM-Baum definierten Stile werden nicht im Rest der Seite angewendet:

{{EmbedLiveSample("Constructable stylesheets")}}

### Hinzufügen von `<style>`-Elementen in `<template>`-Deklarationen

Eine Alternative zum Konstruieren von `CSSStyleSheet`-Objekten ist das Einschließen eines {{htmlelement("style")}}-Elements innerhalb des {{htmlelement("template")}}-Elements, das verwendet wird, um eine Webkomponente zu definieren.

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

Im JavaScript werden wir das Shadow DOM erstellen und den Inhalt des `<template>` hinzufügen:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Erneut werden die im `<template>` definierten Styles nur innerhalb des Shadow DOM-Baums angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Wahl zwischen programmatischen und deklarativen Optionen

Welche dieser Optionen Sie verwenden sollten, hängt von Ihrer Anwendung und persönlichen Vorlieben ab.

Ein `CSSStyleSheet` zu erstellen und es dem Shadow-Root mit `adoptedStyleSheets` zuzuweisen, ermöglicht es Ihnen, ein einziges Stylesheet zu erstellen und es unter vielen DOM-Bäumen zu teilen. Zum Beispiel könnte eine Komponentenbibliothek ein einziges Stylesheet erstellen und es dann unter allen benutzerdefinierten Elementen dieser Bibliothek teilen. Der Browser wird dieses Stylesheet einmal parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und diese an alle Komponenten weitergeben, die das Stylesheet verwenden.

Der Ansatz, ein `<style>`-Element anzufügen, ist großartig, wenn Sie deklarativ sein möchten, wenige Stile haben und keine Stile über verschiedene Komponenten hinweg teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die durch Shadow DOM bereitgestellte Kapselung wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) äußerst fragil. Es wäre zu einfach für eine Seite, das Verhalten oder Layout eines benutzerdefinierten Elements versehentlich zu zerstören, indem sie einige Seiten-JavaSkript oder CSS ausführt. Als Entwickler eines benutzerdefinierten Elements wüssten Sie nie, ob die innerhalb Ihres benutzerdefinierten Elements anwendbaren Selektoren mit denen in einer Seite kollidierten, die Ihr benutzerdefiniertes Element verwenden wollte.

Benutzerdefinierte Elemente werden als Klasse implementiert, die entweder das Basiselement [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein eingebautes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt unter dieser Wurzel mehrere Elemente, um die interne Implementierung des Elements bereitzustellen.

Das folgende Beispiel erstellt ein `<filled-circle>`-benutzerdefiniertes Element, das einfach einen mit einer einheitlichen Farbe gefüllten Kreis rendert.

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
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- {{CSSXref("::part")}}
