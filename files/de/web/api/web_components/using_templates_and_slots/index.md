---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die Elemente {{htmlelement("template")}} und {{htmlelement("slot")}} verwenden können, um ein flexibles Template zu erstellen, das dann genutzt werden kann, um das Shadow-DOM eines Web Components zu füllen.

## Die Wahrheit über Templates

Wenn Sie immer wieder dieselben Markupstrukturen auf einer Webseite wiederverwenden müssen, macht es Sinn, eine Art von Template zu verwenden, anstatt die gleiche Struktur immer wieder zu wiederholen. Dies war vorher möglich, wird aber durch das HTML-Element {{htmlelement("template")}} erheblich erleichtert. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber trotzdem mittels JavaScript referenziert werden.

Schauen wir uns ein einfaches, schnelles Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies erscheint nicht auf Ihrer Seite, bis Sie mit JavaScript eine Referenz darauf erhalten und dann an das DOM anhängen, indem Sie so etwas wie Folgendes verwenden:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits erkennen, wie nützlich dies sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind für sich schon nützlich, aber sie funktionieren noch besser mit Webkomponenten. Lassen Sie uns eine Webkomponente definieren, die unser Template als Inhalt ihres Shadow-DOMs verwendet. Wir nennen sie ebenfalls `<my-paragraph>`:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("custom-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(document.importNode(templateContent, true));
    }
  },
);
```

Der entscheidende Punkt ist hier, dass wir einen Klon des Template-Inhalts mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) an den Shadow-Root anhängen.

Und da wir ihre Inhalte an ein Shadow-DOM anhängen, können wir einige Stilinformationen in das Template in einem {{htmlelement("style")}}-Element einfügen, welches dann innerhalb des Custom Elements gekapselt wird. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM anfügen würden.

Zum Beispiel:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

Nun können wir es verwenden, indem wir es einfach zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können nur ein Stück Text darin anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein normaler Absatz! Wir können es ermöglichen, dass unterschiedlicher Text in jeder Elementinstanz in einer schönen deklarativen Weise angezeigt werden kann, indem wir das Element {{htmlelement("slot")}} verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markupfragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel hinzufügen möchten, könnten wir das Paragraphenelement unseres Templates so aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Text "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut ein, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor kann dies alles sein, was Sie mögen, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, sagt man, er ist _slotted_.

Und das war's für unser triviales Beispiel.
Wenn Sie noch ein wenig damit spielen möchten, können Sie es auf [GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es sich auch [live an](https://mdn.github.io/web-components-examples/simple-template/)).

Das `name`-Attribut sollte pro Shadow-Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht eindeutig sein: Ein `<slot>` kann von mehreren Elementen gefüllt werden, die alle ein passendes `slot`-Attribut haben.

Sowohl die `name`- als auch die `slot`-Attribute standardmäßig auf den leeren String, sodass Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut (dem unbenannten Slot oder Standardslot) zugewiesen werden. Hier ist ein Beispiel:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666666;
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

## Ein umfangreicheres Beispiel

Um den Artikel abzuschließen, werfen wir einen Blick auf etwas weniger Triviales.

Die folgende Reihe von Code-Snippets zeigt, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es beim Einsatz in Dokumenten dargestellt wird, indem es den Inhalt des Elements mit Inhalten seines [shadow root](/de/docs/Web/API/ShadowRoot) zusammensetzt — das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalterfunktionen des {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen; und dies kann tatsächlich den kleinen Aufwand vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und es zu klonen). Es ist jedoch in der Regel praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster auf der Grundlage eines bereits gerenderten Elements definieren müssen.

Darüber hinaus, selbst wenn es nicht bereits gerendert ist, sollte der Zweck des Containers als Template semantisch klarer sein, wenn man das {{HTMLElement("template")}} verwendet. Zusätzlich kann {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} enthalten, die verschwinden würden, wenn sie zu einem {{HTMLElement("div")}} hinzugefügt würden.

> [!NOTE]
> Dieses vollständige Beispiel finden Sie unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (sehen Sie es [live](https://mdn.github.io/web-components-examples/element-details/) ebenfalls).

### Ein Template mit einigen Slots erstellen

Zuerst verwenden wir das Element {{HTMLElement("slot")}} innerhalb eines {{HTMLElement("template")}}, um ein neues "element-details-template"-[Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) enthält:

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", "Helvetica", "Arial";
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
      padding: 2px 6px;
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

Dieses {{HTMLElement("template")}}-Element besitzt mehrere Funktionen:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Sammlung von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment angewendet wird.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}}-Element.

### Ein neues \<element-details> Element aus dem \<template> erstellen

Als Nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um dieses als sein [shadow root](/de/docs/Web/API/ShadowRoot) zu verbinden, das Dokumentfragment, welches wir mit unserem {{HTMLElement("template")}}-Element oben erstellt haben.
Dies verwendet exakt dasselbe Muster, das wir in unserem vorherigen trivialen Beispiel gesehen haben.

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
      shadowRoot.appendChild(document.importNode(template, true));
    }
  },
);
```

### Verwendung des benutzerdefinierten Elements \<element-details> mit benannten Slots

Nehmen wir jetzt das **`<element-details>`** Element und verwenden es tatsächlich in unserem Dokument:

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

Zu diesem Snippet, beachten Sie diese Punkte:

- Das Snippet enthält zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu referenzieren, die wir im `<element-details>` [shadow root](/de/docs/Web/API/ShadowRoot) eingefügt haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente referenziert den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element fehlt der Hinweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mittels eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Kindern.

### Einen letzten Hauch von Styling hinzufügen

Als abschließenden Schliff fügen wir ein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

```css
dl {
  margin-left: 6px;
}
dt {
  color: #217ac0;
  font-family: "Consolas", "Liberation Mono", "Courier New";
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

Lassen Sie uns schließlich alle Snippets zusammenfügen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte über dieses gerenderte Ergebnis:

- Auch wenn die Instanzen des **`<element-details>`** Elements im Dokument nicht direkt das {{HTMLElement("details")}}-Element verwenden, werden sie unter Verwendung von {{HTMLElement("details")}} gerendert, weil der [shadow root](/de/docs/Web/API/ShadowRoot) sie damit füllt.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe wird der Inhalt in den **`<element-details>`**-Elementen dazu verwendet, die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot) zu füllen. Mit anderen Worten, der DOM-Baum der **`<element-details>`**-Elemente wird _zusammengesetzt_ mit dem Inhalt des [shadow root](/de/docs/Web/API/ShadowRoot).
- Für beide **`<element-details>`**-Elemente wird eine **Attributes**-Überschrift automatisch aus dem [shadow root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`**-Element ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`**-Element nicht explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt aus dem [shadow root](/de/docs/Web/API/ShadowRoot) gefüllt.
