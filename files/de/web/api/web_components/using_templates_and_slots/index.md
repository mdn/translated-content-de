---
title: Verwendung von Vorlagen und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um eine flexible Vorlage zu erstellen, die dann verwendet werden kann, um den Shadow DOM eines Webkomponenten auszufüllen.

## Die Wahrheit über Vorlagen

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art Vorlage zu verwenden, anstatt immer wieder dieselbe Struktur zu wiederholen.
Dies war vorher möglich, aber es wird durch das HTML-{{htmlelement("template")}}-Element erheblich erleichtert.
Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber dennoch über JavaScript referenziert werden.

Schauen wir uns ein triviales, schnelles Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie mit JavaScript eine Referenz darauf erhalten und es dann dem DOM anhängen, indem Sie etwas wie das Folgende verwenden:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits sehen, wie nützlich dies sein könnte.

## Verwendung von Vorlagen mit Webkomponenten

Vorlagen sind von alleine nützlich, aber sie funktionieren noch besser mit Webkomponenten.
Lassen Sie uns eine Webkomponente definieren, die unsere Vorlage als Inhalt ihres Shadow DOM verwendet.
Wir nennen sie ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt hier ist, dass wir einen Klon des Vorlageninhalts an den Shadow Root anhängen, der mit der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde.

Und da wir ihren Inhalt an ein Shadow DOM anhängen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann in das benutzerdefinierte Element eingefasst wird.
Dies würde nicht funktionieren, wenn wir es einfach zum Standard-DOM hinzufügen würden.

Also zum Beispiel:

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

Nun können wir es einfach zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel.
Wir können nur ein Stück Text darin anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein normaler Absatz! Wir können es auf eine nette deklarative Weise ermöglichen, unterschiedlichen Text in jeder Elementinstanz anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen Ihnen, Platzhalter in Ihrer Vorlage zu definieren, die mit beliebigen Markup-Fragmenten gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel einfügen wollen, können wir das Vorlagen-Absatz-Element wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Slot-Inhalt nicht definiert ist, wenn das Element im Markup eingefügt ist, oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Text "My default text".

Um den Slot-Inhalt zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements ein, mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut, dessen Wert gleich dem Namen des Slots ist, den wir füllen möchten. Wie zuvor, kann dies alles sein, was Sie möchten, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, sagt man, er sei _eingeschoben_.

Das war's für unser triviales Beispiel.
Wenn Sie noch mehr damit herumspielen wollen, können Sie [es auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es [laufend live](https://mdn.github.io/web-components-examples/simple-template/)).

Das `name`-Attribut sollte pro Shadow Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht eindeutig sein: Ein `<slot>` kann von mehreren Elementen gefüllt werden, die alle ein übereinstimmendes `slot`-Attribut haben.

Die `name`- und `slot`-Attribute sind beide standardmäßig leerzeichen, so dass Elemente ohne `slot`-Attribute dem `<slot>` mit keinem `name`-Attribut zugewiesen werden (dem unbenannten Slot oder Standardslot). Hier ist ein Beispiel:

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

## Ein komplexeres Beispiel

Um den Artikel abzuschließen, schauen wir uns etwas weniger Triviales an.

Die folgenden Codeausschnitte zeigen, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwenden kann, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es beim Einsatz in Dokumenten durch das Zusammensetzen des Inhalts des Elements mit dem Inhalt seines [Shadow Roots](/de/docs/Web/API/ShadowRoot) dargestellt wird - also werden Teile des Inhalts des Elements verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalterfunktionen von {{HTMLElement("slot")}} für Shadow DOM-Inhalte zu nutzen, und dies kann tatsächlich die kleine Mühe vermeiden, zuerst auf die `content`-Eigenschaft des Vorlagelements (und dessen Klon) zugreifen zu müssen.
Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Außerdem, selbst wenn es noch nicht gerendert ist, sollte die Zweckbestimmung des Containers als Vorlage semantisch klarer sein, wenn das {{HTMLElement("template")}} verwendet wird. Darüber hinaus kann {{HTMLElement("template")}} Objekte direkt hinzugefügt bekommen, wie {{HTMLElement("td")}}, die verschwinden würden, wenn sie in ein {{HTMLElement("div")}} eingefügt werden.

> [!NOTE]
> Sie können dieses komplette Beispiel bei [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (sehen Sie es [laufend live](https://mdn.github.io/web-components-examples/element-details/)).

### Erstellen einer Vorlage mit einigen Slots

Zunächst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) mit einigen [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Merkmale:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Menge von CSS-Styles, die nur auf das Dokumentfragment angewendet werden, das das {{HTMLElement("template")}} erstellt.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umhüllt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) mit einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen `<element-details>`-Elements aus der `<template>`

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um daran als sein [Shadow Root](/de/docs/Web/API/ShadowRoot) das Dokumentfragment, das wir mit unserem {{HTMLElement("template")}}-Element oben erstellt haben, anzuhängen.
Dies verwendet genau dasselbe Muster, das wir in unserem früheren trivialen Beispiel gesehen haben.

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

### Verwenden des `<element-details>`-Benutzerelements mit benannten Slots

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

Beachten Sie bei diesem Snippet folgende Punkte:

- Das Snippet hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu verweisen, die wir im `<element-details>`[Shadow Root](/de/docs/Web/API/ShadowRoot) platziert haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"`[benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element hat keinen Bezug zum `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) unter Verwendung eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern.

### Ein abschließendes bisschen Stil hinzufügen

Abschließend fügen wir ein kleines bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Schließlich setzen wir alle Snippets zusammen und sehen uns an, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300', '400')}}

Beachten Sie die folgenden Punkte zu diesem gerenderten Ergebnis:

- Selbst wenn die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt nutzen, werden sie unter Verwendung von {{HTMLElement("details")}} gerendet, weil der [Shadow Root](/de/docs/Web/API/ShadowRoot) dafür sorgt, dass sie damit ausgefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) vom [Shadow Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum der **`<element-details>`**-Elemente wird mit dem Inhalt des [Shadow Roots](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird eine **Attributes**-Überschrift automatisch vom [Shadow Root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`**-Element ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"`[benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) von seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzen die Inhalte dieses {{HTMLElement("dl")}} den `"attributes"`[benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) vom [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** nicht ausdrücklich auf den `"attributes"`[benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) von seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt dafür vom [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
