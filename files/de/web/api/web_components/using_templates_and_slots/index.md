---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann verwendet werden kann, um den Shadow DOM eines Web-Components zu füllen.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art Template zu verwenden, anstatt dieselbe Struktur immer wieder zu wiederholen. Dies war zuvor möglich, aber der HTML-{{htmlelement("template")}}-Element macht es viel einfacher. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber trotzdem über JavaScript referenziert werden.

Schauen wir uns ein einfaches Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie eine Referenz darauf mit JavaScript erfassen und es dann mit etwas Ähnlichem wie folgt dem DOM hinzufügen:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits erkennen, wie nützlich dies sein könnte.

## Verwendung von Templates mit Web-Components

Templates sind von sich aus nützlich, aber sie funktionieren noch besser mit Web-Components. Definieren wir ein Web-Component, das unser Template als Inhalt seines Shadow DOM verwendet. Wir nennen es ebenfalls `<my-paragraph>`:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("custom-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

Der entscheidende Punkt hier ist, dass wir einen Klon des Template-Inhalts zum Shadow Root hinzufügen, der mit der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde.

Und da wir seine Inhalte einem Shadow DOM hinzufügen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann innerhalb des benutzerdefinierten Elements kapselt ist. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM hinzufügen würden.

Beispielsweise:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

Nun können wir es einfach verwenden, indem wir es zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Mehr Flexibilität mit Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können darin nur einen Text anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein gewöhnlicher Absatz! Wir können es ermöglichen, unterschiedlichen Text in jeder Elementinstanz in einer schönen deklarativen Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem Markup-Fragment gefüllt werden können, das Sie möchten, wenn das Element im Markup verwendet wird.

Wenn wir einen Slot in unser einfaches Beispiel hinzufügen möchten, könnten wir das Absatz-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup eingefügt wird, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut ein, dessen Wert gleich dem Namen des Slots ist, den wir füllen möchten. Wie zuvor kann dies beliebig sein, zum Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

oder

```html
<my-paragraph>
  <ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```

> [!NOTE]
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_-Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, wird gesagt, dass er _slotted_ ist.

Und das war's schon für unser triviales Beispiel. Wenn Sie noch ein wenig damit herumspielen möchten, können Sie es [finden auf GitHub](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es [live laufen](https://mdn.github.io/web-components-examples/simple-template/) ebenfalls).

Das `name`-Attribut sollte pro Shadow Root eindeutig sein: wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem übereinstimmenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht eindeutig sein: ein `<slot>` kann durch mehrere Elemente gefüllt werden, die alle ein übereinstimmendes `slot`-Attribut haben.

Sowohl das `name`- als auch das `slot`-Attribut defaulten zu einem leeren String, so dass Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut zugewiesen werden (der unbenannte Slot oder Standard-Slot). Hier ist ein Beispiel:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>
    <slot name="my-text">My default text</slot>
    <slot></slot>
  </p>
</template>
```

Sie können es dann so verwenden:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
  <span>This will go into the unnamed slot</span>
  <span>This will also go into the unnamed slot</span>
</my-paragraph>
```

In diesem Beispiel:

- Inhalt mit `slot="my-text"` geht in den benannten Slot.
- Alle anderen Inhalte gehen automatisch in den unbenannten Slot.

## Ein umfassenderes Beispiel

Zum Abschluss des Artikels betrachten wir etwas weniger Triviales.

Die folgenden Code-Snippets zeigen, wie Sie {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwenden, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es bei Verwendung in Dokumenten durch das Zusammensetzen des Inhalts des Elements mit Inhalten aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) gerendert wird — das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines gewöhnlichen {{HTMLElement("div")}}-Elements, und dennoch die Platzhalter-Funktionen von {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen, und dies kann tatsächlich das kleine Problem vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und sie zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da es unwahrscheinlich ist, dass Sie ein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus sollte der Zweck des Containers als Template selbst dann semantisch klarer sein, wenn {{HTMLElement("template")}} verwendet wird. Außerdem können {{HTMLElement("template")}} Elemente direkt hinzugefügt werden, wie {{HTMLElement("td")}}, die verschwinden würden, wenn sie zu einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Sie können dieses vollständige Beispiel bei [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (sehen Sie es [live laufen](https://mdn.github.io/web-components-examples/element-details/) ebenfalls).

### Erstellen eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template"-[Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) enthält:

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
        >
        <span class="desc"
          ><slot name="description">NEED DESCRIPTION</slot></span
        >
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

Das {{HTMLElement("template")}}-Element hat mehrere Eigenschaften:

- Das {{HTMLElement("template")}} hat ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment angewendet werden.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details>-Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um diesem als sein [shadow root](/de/docs/Web/API/ShadowRoot) das Dokumentfragment anzuhängen, das wir mit unserem {{HTMLElement("template")}}-Element oben erstellt haben. Dies verwendet genau dasselbe Muster wie in unserem früheren trivialen Beispiel gesehen.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  },
);
```

### Verwenden des benutzerdefinierten \<element-details>-Elements mit benannten Slots

Nun nehmen wir das **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >A placeholder inside a web component that users can fill with their own
    markup, with the effect of composing different DOM trees together.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >A mechanism for holding client- side content that is not to be rendered
    when a page is loaded but may subsequently be instantiated during runtime
    using JavaScript.</span
  >
</element-details>
```

Beachten Sie zu diesem Snippet folgende Punkte:

- Das Snippet hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu verweisen, die wir in den `<element-details>` [shadow root](/de/docs/Web/API/ShadowRoot) eingefügt haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element fehlt jeglicher Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) unter Verwendung eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern.

### Einen letzten Hauch von Stil hinzufügen

Als letzten Schliff fügen wir ein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

```css
dl {
  margin-left: 6px;
}
dt {
  color: #217ac0;
  font-family: Consolas, "Liberation Mono", Courier;
  font-size: 110%;
  font-weight: bold;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### Ergebnis

Zum Schluss setzen wir alle Snippets zusammen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte über dieses gerenderte Ergebnis:

- Obwohl die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt verwenden, werden sie mit {{HTMLElement("details")}} gerendert, weil der [shadow root](/de/docs/Web/API/ShadowRoot) bewirkt, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum der **`<element-details>`**-Elemente wird _zusammengesetzt_ mit dem Inhalt des [shadow root](/de/docs/Web/API/ShadowRoot).
- Für beide **`<element-details>`**-Elemente wird eine **Attributes**-Überschrift automatisch aus dem [shadow root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Weil das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) verweist, ersetzen die Inhalte dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot).
- Weil das zweite **`<element-details>`** nicht explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt dafür aus dem [shadow root](/de/docs/Web/API/ShadowRoot) gefüllt.
