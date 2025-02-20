---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: cca1e467eab1468f7bd9c7619e30f8e2a8f4177c
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das anschließend verwendet werden kann, um den Shadow DOM eines Webkomponenten zu füllen.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art Template zu verwenden, anstatt dieselbe Struktur immer wieder zu wiederholen. Das war zwar vorher möglich, wird aber durch das HTML-{{htmlelement("template")}}-Element erheblich erleichtert. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber weiterhin mit JavaScript referenziert werden.

Schauen wir uns ein einfaches Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie mit JavaScript darauf zugreifen und es dem DOM hinzufügen, beispielsweise wie folgt:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl einfach, können Sie bereits beginnen zu sehen, wie nützlich dies sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind für sich genommen nützlich, aber sie funktionieren noch besser mit Webkomponenten. Definieren wir eine Webkomponente, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen sie ebenfalls `<my-paragraph>`:

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

Der wichtige Punkt hierbei ist, dass wir einen Klon des Template-Inhalts dem Shadow Root hinzufügen, der mit der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde.

Und da wir ihre Inhalte einem Shadow DOM hinzufügen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann im benutzerdefinierten Element gekapselt ist. Dies würde nicht funktionieren, wenn wir es dem Standard-DOM hinzufügen würden.

Zum Beispiel:

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

Jetzt können wir es verwenden, indem wir es einfach zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bis jetzt so gut, aber das Element ist nicht sehr flexibel. Wir können nur ein Textbit darin anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich als ein normaler Absatz ist! Wir können es ermöglichen, unterschiedliche Texte in jeder Elemente-Instanz auf eine nette deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unserem einfachen Beispiel hinzufügen möchten, könnten wir das Paragraphen-Element unseres Templates so aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Ersatzinhalt "Mein Standardtext".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements ein, die ein [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut hat, dessen Wert gleich dem Namen des Slots ist, den wir füllen möchten. Wie zuvor kann dies alles sein, was Sie möchten, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, wird gesagt, er sei _slotted_.

Und das war's für unser einfaches Beispiel. Wenn Sie noch mehr damit spielen möchten, können Sie es auf [GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es sich auch [live an](https://mdn.github.io/web-components-examples/simple-template/)).

Das `name`-Attribut sollte pro Shadow Root einzigartig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht einzigartig sein: Ein `<slot>` kann von mehreren Elementen gefüllt werden, die alle ein passendes `slot`-Attribut haben.

Sowohl das `name`- als auch das `slot`-Attribut haben standardmäßig den leeren String als Wert, sodass Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut zugewiesen werden (dem unbenannten Slot oder dem Standard-Slot). Hier ist ein Beispiel:

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

Sie können es dann wie folgt verwenden:

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

## Ein komplexeres Beispiel

Um den Artikel abzuschließen, schauen wir uns etwas an, das ein wenig weniger trivial ist.

Die folgende Reihe von Code-Snippets zeigt, wie {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet wird, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es beim Einsatz in Dokumenten aus der Komposition des Elementinhalts mit dem Inhalt des [Shadow Root](/de/docs/Web/API/ShadowRoot) gerendert wird—das heißt, Teile des Elementinhalts werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch von den Platzhalter-Funktionen des {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu profitieren, und dies könnte in der Tat die kleine Mühe ersparen, zunächst auf die `content`-Eigenschaft des Template-Elements zugreifen (und es klonen) zu müssen. Es ist jedoch im Allgemeinen praktischer, Slots in einem {{HTMLElement("template")}}-Element hinzuzufügen, da es unwahrscheinlich ist, dass Sie ein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus ist selbst wenn es nicht bereits gerendert ist, der Zweck des Containers als Template semantisch klarer, wenn das {{HTMLElement("template")}} verwendet wird. Darüber hinaus kann {{HTMLElement("template")}} Elemente direkt hinzufügen, wie {{HTMLElement("td")}}, die verschwinden würden, wenn sie in ein {{HTMLElement("div")}} eingefügt werden.

> [!NOTE]
> Sie können dieses vollständige Beispiel bei [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (siehe es auch [live laufen](https://mdn.github.io/web-components-examples/element-details/)).

### Erstellung eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Element/slot#name) enthält:

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Eigenschaften:

- Das {{HTMLElement("template")}} hat ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das Dokumentfragment angewendet werden, das das {{HTMLElement("template")}} erstellt.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Element/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellung eines neuen \<element-details> Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um es als [Shadow Root](/de/docs/Web/API/ShadowRoot) an das Dokumentfragment anzuhängen, das wir mit unserem {{HTMLElement("template")}}-Element oben erstellt haben. Dies folgt genau dem gleichen Muster wie wir es in unserem früheren einfachen Beispiel gesehen haben.

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

### Verwendung des benutzerdefinierten \<element-details>-Elements mit benannten Slots

Nehmen wir nun das **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

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

Bezüglich dieses Snippets beachten Sie die folgenden Punkte:

- Das Snippet enthält zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut verwenden, um die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"element-name"` und `"description"` zu referenzieren, die wir im `<element-details>` [Shadow Root](/de/docs/Web/API/ShadowRoot) definiert haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente referenziert den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name). Das zweite `<element-details>`-Element hat keine Referenz für den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name).
- Das erste `<element-details>`-Element verwendet einen {{HTMLElement("dl")}}-Element mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern, um den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) zu referenzieren.

### Hinzufügen eines letzten Stilelements

Als letzten Schliff fügen wir ein kleines bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Schließlich fügen wir alle Snippets zusammen und sehen uns an, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte bezüglich dieses gerenderten Ergebnisses:

- Obwohl die Instanzen des **`<element-details>`**-Elements im Dokument nicht direkt das {{HTMLElement("details")}}-Element verwenden, werden sie unter Verwendung von {{HTMLElement("details")}} gerendert, weil der [Shadow Root](/de/docs/Web/API/ShadowRoot) verursacht, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum aus den **`<element-details>`**-Elementen wird mit dem Inhalt des [Shadow Root](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird automatisch eine Überschrift **Attributes** aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) vor dem Platz der `"attributes"` [benannten Slots](/de/docs/Web/HTML/Element/slot#name) hinzugefügt.
- Weil das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element hat, das explizit den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) referenziert, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Weil das zweite **`<element-details>`** den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) nicht explizit referenziert, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit dem Standardinhalt dafür aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
