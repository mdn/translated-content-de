---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann zur Befüllung des Shadow DOM eines Webkomponents genutzt werden kann.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen auf einer Webseite wiederholt verwenden müssen, macht es Sinn, ein Template zu verwenden, anstatt die gleiche Struktur immer wieder zu wiederholen. Dies war zuvor möglich, wird jedoch durch das HTML-{{htmlelement("template")}}-Element erheblich erleichtert. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können jedoch trotzdem über JavaScript referenziert werden.

Schauen wir uns ein triviales Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies erscheint nicht auf Ihrer Seite, bis Sie mit JavaScript darauf zugreifen und es dem DOM anhängen, mit etwa Folgendem:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits sehen, wie nützlich das sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind für sich allein nützlich, funktionieren jedoch noch besser mit Webkomponenten. Definieren wir eine Webkomponente, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen es `<my-paragraph>`:

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

Der entscheidende Punkt ist hier, dass wir einen Klon des Template-Inhalts an die Shadow-Root anhängen, erstellt mit der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode.

Und da wir seine Inhalte an ein Shadow DOM anhängen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann innerhalb des benutzerdefinierten Elements gekapselt wird. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM anhängen würden.

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

Jetzt können wir es verwenden, indem wir es einfach zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bisher funktioniert alles gut, aber das Element ist nicht sehr flexibel. Wir können darin nur ein Textstück anzeigen, was bedeutet, dass es im Moment noch weniger nützlich ist als ein normaler Absatz! Wir können es möglich machen, dass in jeder Instanz des Elements in deklarativer Weise unterschiedlicher Text angezeigt wird, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel einfügen möchten, könnten wir das Absatz-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Falls der Inhalt des Slots beim Einfügen des Elements im Markup nicht definiert ist oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "Mein Standardtext".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur in das `<my-paragraph>`-Element ein, mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor kann dies alles Mögliche sein, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einem Slot eingefügt wurde, sagt man, er sei _slotted_.

Und das war's für unser triviales Beispiel. Wenn Sie noch weiter damit experimentieren möchten, können Sie es [auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es sich auch [live an](https://mdn.github.io/web-components-examples/simple-template/)).

Das `name`-Attribut sollte pro Shadow-Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht einzigartig sein: Ein `<slot>` kann durch mehrere Elemente gefüllt werden, die alle ein passendes `slot`-Attribut haben.

Die `name`- und `slot`-Attribute haben beide standardmäßig einen leeren String, daher werden Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut zugewiesen (der unbenannte Slot oder Standardslot). Hier ist ein Beispiel:

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

## Ein anspruchsvolleres Beispiel

Zum Abschluss des Artikels schauen wir uns etwas weniger Triviales an.

Die folgenden Codeschnipsel zeigen, wie Sie {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwenden, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu erstellen.
- das **`<element-details>`**-Element so zu gestalten, dass, wenn es in Dokumenten verwendet wird, es durch das Zusammensetzen des Inhalts des Elements mit dem Inhalt seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) gerendert wird – das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu füllen.

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. in einem regulären {{HTMLElement("div")}}-Element, und trotzdem die Platzhalter-Funktionen des {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen, und dies könnte tatsächlich das kleine Problem vermeiden, zuerst auf die `content`-Eigenschaft des Templates zugreifen zu müssen (und es zu klonen). Allgemein ist es jedoch praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da es unwahrscheinlich ist, dass Sie ein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus sollte der Zweck des Containers als Template auch dann semantisch klarer sein, wenn das {{HTMLElement("template")}} verwendet wird. Darüber hinaus können {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} hinzufügen, die verschwinden würden, wenn sie zu einem {{HTMLElement("div")}} hinzugefügt würden.

> [!NOTE]
> Dieses vollständige Beispiel finden Sie unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (sehen Sie es sich auch [live an](https://mdn.github.io/web-components-examples/element-details/)).

### Ein Template mit einigen Slots erstellen

Zuerst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) enthält:

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Funktionen:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment angewendet werden.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`
- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}}-Element.

### Ein neues \<element-details>-Element aus dem \<template> erstellen

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um es an unser zuvor erstelltes Dokumentfragment, basierend auf unserem {{HTMLElement("template")}}-Element, als [Shadow-Root](/de/docs/Web/API/ShadowRoot) anzuhängen. Dies verwendet genau das gleiche Muster, das wir in unserem früheren trivialen Beispiel gesehen haben.

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

Beachten Sie bei diesem Snippet folgende Punkte:

- Das Snippet hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu verweisen, die wir in der `<element-details>`-Shadow-Root platziert haben.
- Nur das erste dieser **`<element-details>`**-Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name), indem es ein {{HTMLElement("dl")}}-Element mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern verwendet.

### Einen finalen Hauch Stil hinzufügen

Als letzten Feinschliff fügen wir noch ein kleines bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Lassen Sie uns schließlich alle Snippets zusammenfügen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte über das gerenderte Ergebnis:

- Auch wenn die Instanzen des **`<element-details>`**-Elements im Dokument nicht direkt das {{HTMLElement("details")}}-Element verwenden, werden sie mit {{HTMLElement("details")}} gerendert, da die [Shadow-Root](/de/docs/Web/API/ShadowRoot) dazu führt, dass sie damit befüllt werden.
- Innerhalb des gerenderten {{HTMLElement("details")}}-Ausgabes, der Inhalt der **`<element-details>`**-Elemente füllt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus der [Shadow-Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum der **`<element-details>`**-Elemente wird mit dem Inhalt der [Shadow-Root](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird automatisch eine **Attributes**-Überschrift aus der [Shadow-Root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) dieser [Shadow-Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** nicht explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt aus der [Shadow-Root](/de/docs/Web/API/ShadowRoot) gefüllt.
