---
title: Verwendung von Shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Components")}}

Ein wichtiger Aspekt von benutzerdefinierten Elementen ist die Kapselung, da ein benutzerdefiniertes Element definitionsgemäß ein Stück wiederverwendbarer Funktionalität ist: Es könnte in jede Webseite eingefügt werden und soll dort funktionieren. Deshalb ist es wichtig, dass der Code, der auf der Seite läuft, ein benutzerdefiniertes Element nicht versehentlich durch Modifizieren seiner internen Implementierung beschädigen kann. Shadow DOM ermöglicht es, einem Element ein DOM-Baum anzuhängen und die Interna dieses Baums vor JavaScript und CSS, die auf der Seite laufen, zu verbergen.

Dieser Artikel behandelt die Grundlagen der Verwendung von Shadow DOM.

## Überblick

Dieser Artikel geht davon aus, dass Sie bereits mit dem Konzept des [DOM (Document Object Model)](/de/docs/Web/API/Document_Object_Model/Introduction) vertraut sind — einer baumartigen Struktur von verbundenen Knoten, die die verschiedenen Elemente und Textstränge eines Markup-Dokuments (in der Regel ein HTML-Dokument im Fall von Web-Dokumenten) darstellt. Betrachten Sie zum Beispiel den folgenden HTML-Fragment:

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

Dieses Fragment erzeugt die folgende DOM-Struktur (ohne nur aus Leerzeichen bestehende Textknoten):

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

Es gibt einige Begriffe des Shadow DOM, die zu beachten sind:

- **Shadow-Host**: Der reguläre DOM-Knoten, an den das Shadow DOM angehängt ist.
- **Shadow-Baum**: Der DOM-Baum innerhalb des Shadow DOM.
- **Shadow-Grenze**: Der Ort, an dem das Shadow DOM endet und das reguläre DOM beginnt.
- **Shadow-Root**: Der Wurzelknoten des Shadow-Baums.

Sie können die Knoten im Shadow DOM auf genau die gleiche Weise beeinflussen wie Nicht-Shadow-Knoten — z.B. durch Anfügen von Kindern oder Setzen von Attributen, Stilrichtung individueller Knoten mithilfe von element.style.foo, oder Hinzufügen von Stil zu dem gesamten Shadow DOM-Baum innerhalb eines {{htmlelement("style")}}-Elements. Der Unterschied ist, dass keiner des Codes innerhalb eines Shadow DOM irgendetwas außerhalb dessen beeinflussen kann, was eine nützliche Kapselung ermöglicht.

Bevor Shadow DOM Webentwicklern zur Verfügung gestellt wurde, verwendeten Browser es bereits, um die innere Struktur eines Elements zu kapseln. Denken Sie zum Beispiel an ein {{htmlelement("video")}}-Element, mit den standardmäßigen Browser-Steuerelementen. Alles, was Sie im DOM sehen, ist das `<video>`-Element, aber es enthält eine Reihe von Schaltflächen und anderen Bedienelementen innerhalb seines Shadow DOM. Die Shadow DOM-Spezifikation ermöglicht es Ihnen, das Shadow DOM Ihrer eigenen benutzerdefinierten Elemente zu manipulieren.

### Attributvererbung

Der Shadow-Baum und die {{HTMLElement("slot")}}-Elemente erben die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribute von ihrem Shadow-Host.

## Erstellen eines Shadow DOM

### Programmgesteuert mit JavaScript

Die folgende Seite enthält zwei Elemente, ein {{htmlelement("div")}}-Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `"host"` und ein {{htmlelement("span")}}-Element, das etwas Text enthält:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Wir werden das `"host"`-Element als Shadow-Host verwenden. Wir rufen [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) am Host auf, um das Shadow DOM zu erstellen, und können dann Knoten zum Shadow DOM genauso hinzufügen, wie wir es zum Haupt-DOM tun würden. In diesem Beispiel fügen wir ein einzelnes `<span>`-Element hinzu:

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

Das Erstellen eines Shadow DOM über die JavaScript-API könnte eine gute Option für clientseitig gerenderte Anwendungen sein. Für andere Anwendungen könnte ein serverseitig gerendertes UI eine bessere Leistung und damit eine bessere Benutzererfahrung bieten. In solchen Fällen können Sie das {{htmlelement("template")}}-Element verwenden, um das Shadow DOM deklarativ zu definieren. Der Schlüssel zu diesem Verhalten ist das {{Glossary("enumerated", "enumerierte")}} `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, die gleichen Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> Standardmäßig werden die Inhalte von `<template>` nicht angezeigt. In diesem Fall, da `shadowrootmode="open"` enthalten war, wird die Shadow-Root gerendert. In unterstützenden Browsern werden die sichtbaren Inhalte innerhalb dieser Shadow-Root angezeigt.

Nachdem der Browser das HTML parst, ersetzt er das {{htmlelement("template")}}-Element durch seinen Inhalt, der in eine {{Glossary("Shadow_tree", "Shadow-Root")}} gewrappt ist, die an das Elternelement angehängt ist, das `<div id="host">` in unserem Beispiel. Der resultierende DOM-Baum sieht so aus (es gibt kein `<template>`-Element im DOM-Baum):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Beachten Sie, dass Sie zusätzlich zum `shadowrootmode` auch `<template>`-Attribute wie `shadowrootclonable` und `shadowrootdelegatesfocus` verwenden können, um andere Eigenschaften der generierten Shadow-Root zu spezifizieren.

## Kapselung vor JavaScript

Bis hierher mag das nicht viel erscheinen. Lassen Sie uns jedoch sehen, was passiert, wenn Code, der auf der Seite läuft, versucht, auf Elemente im Shadow DOM zuzugreifen.

Diese Seite ist genau wie die letzte, außer dass wir zwei {{htmlelement("button")}}-Elemente hinzugefügt haben.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Ein Klick auf die Schaltfläche "Uppercase span elements" findet alle `<span>`-Elemente auf der Seite und ändert ihren Text in Großbuchstaben.
Ein Klick auf die Schaltfläche "Reload" lädt die Seite einfach neu, damit Sie es erneut versuchen können.

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

## Element.shadowRoot und die "mode" Option

Im obigen Beispiel geben wir ein Argument `{ mode: "open" }` an `attachShadow()` weiter. Mit `mode` auf `"open"` gesetzt, kann das JavaScript auf der Seite auf die Interna Ihres Shadow DOM über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Shadow-Hosts zugreifen.

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

Dieses Mal kann das auf der Seite laufende JavaScript auf die Interna des Shadow DOM zugreifen:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

Das `{mode: "open"}`-Argument gibt der Seite eine Möglichkeit, die Kapselung Ihres Shadow DOM zu durchbrechen. Wenn Sie der Seite diese Fähigkeit nicht geben möchten, übergeben Sie stattdessen `{mode: "closed"}`, und dann gibt `shadowRoot` `null` zurück.

Sie sollten dies jedoch nicht als starkes Sicherheitsmechanismus betrachten, da es Möglichkeiten gibt, dies zu umgehen, zum Beispiel durch Browser-Erweiterungen, die auf der Seite laufen. Es ist eher ein Hinweis darauf, dass die Seite nicht auf die Interna Ihres Shadow DOM zugreifen sollte.

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

Dieses Mal haben wir etwas CSS, das auf `<span>`-Elemente auf der Seite abzielt:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Das Seiten-CSS wirkt sich nicht auf die Knoten innerhalb des Shadow DOM aus:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Anwendung von Stilen innerhalb des Shadow DOM

In diesem Abschnitt betrachten wir zwei verschiedene Möglichkeiten, Stile innerhalb eines Shadow DOM-Baums anzuwenden:

- [_Programmgesteuert_](#konstruktive_stylesheets), durch das Erstellen eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts und Anschließen an die Shadow-Root.
- [_Deklarativ_](#adding_style_elements_in_template_declarations), durch das Hinzufügen eines {{htmlelement("style")}}-Elements in der Deklaration eines {{htmlelement("template")}}-Elements.

In beiden Fällen sind die im Shadow DOM-Baum definierten Stile auf diesen Baum beschränkt, sodass Seitenstile Elemente im Shadow DOM nicht beeinflussen, und umgekehrt beeinflussen Shadow DOM-Stile keine Elemente auf der restlichen Seite.

### Konstruktive Stylesheets

Um Seitenelemente im Shadow DOM mit konstruktiven Stylesheets zu gestalten, können wir:

1. Ein leeres [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen
2. Seinen Inhalt mit [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) oder [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) festlegen
3. Es der Shadow-Root durch Zuweisung zu [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) hinzufügen

Regeln, die im `CSSStyleSheet` definiert sind, werden auf den Shadow DOM-Baum beschränkt, sowie auf andere DOM-Bäume, denen wir es zugewiesen haben.

Hier ist wieder das HTML, das unseren Host und ein `<span>` enthält:

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

Eine Alternative zur Konstruktion von `CSSStyleSheet`-Objekten besteht darin, ein {{htmlelement("style")}}-Element innerhalb des {{htmlelement("template")}}-Elements einzuschließen, das verwendet wird, um ein Webkomponent zu definieren.

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

Wieder werden die im `<template>` definierten Stile nur innerhalb des Shadow DOM-Baums angewendet und nicht im Rest der Seite:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Wahl zwischen programmatischer und deklarativer Option

Welche dieser Optionen verwendet wird, hängt von Ihrer Anwendung und Ihren persönlichen Vorlieben ab.

Das Erstellen eines `CSSStyleSheet` und das Zuweisen zu der Shadow-Root mit `adoptedStyleSheets` ermöglicht es Ihnen, ein einzelnes Stylesheet zu erstellen und es für viele DOM-Bäume zu teilen. Beispielsweise könnte eine Komponentenbibliothek ein einziges Stylesheet erstellen und es dann mit allen benutzerdefinierten Elementen dieser Bibliothek teilen. Der Browser wird dieses Stylesheet einmal parsen. Außerdem können Sie dynamische Änderungen am Stylesheet vornehmen und sie werden an alle Komponenten weitergegeben, die das Stylesheet verwenden.

Der Ansatz, ein `<style>`-Element anzuhängen, ist großartig, wenn Sie deklarativ sein möchten, wenige Stile haben und keine Stile über verschiedene Komponenten hinweg teilen müssen.

## Shadow DOM und benutzerdefinierte Elemente

Ohne die Kapselung, die das Shadow DOM bietet, wären [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) unmöglich fragil. Es wäre zu einfach für eine Seite, das Verhalten oder das Layout eines benutzerdefinierten Elements versehentlich durch das Ausführen von Seiten-JavaScript oder -CSS zu beschädigen. Als Entwickler eines benutzerdefinierten Elements würden Sie nie wissen, ob die in Ihrem benutzerdefinierten Element anwendbaren Selektoren mit denen einer Seite, die Ihr benutzerdefiniertes Element verwendet, in Konflikt stehen.

Benutzerdefinierte Elemente werden als Klasse implementiert, die entweder die Basis [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder ein integriertes HTML-Element wie [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erweitert. Typischerweise ist das benutzerdefinierte Element selbst ein Shadow-Host, und das Element erstellt mehrere Elemente unter dieser Wurzel, um die interne Implementierung des Elements bereitzustellen.

Das Beispiel unten erstellt ein benutzerdefiniertes `<filled-circle>`-Element, das einfach einen mit einer Vollfarbe gefüllten Kreis rendert.

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
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- {{CSSXref("::part")}}
