---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann benutzt werden kann, um den Shadow DOM eines Webkomponenten zu füllen.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art Template zu nutzen, anstatt die gleiche Struktur immer wieder zu wiederholen. Das war vorher schon möglich, aber es wird durch das HTML-{{htmlelement("template")}}-Element erheblich einfacher. Dieses Element und sein Inhalt werden nicht im DOM gerendert, es kann jedoch mittels JavaScript referenziert werden.

Schauen wir uns ein triviales kurzes Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie eine Referenz darauf mit JavaScript abrufen und es dann dem DOM hinzufügen, indem Sie etwas Ähnliches wie das folgende verwenden:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits erkennen, wie das nützlich sein könnte.

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

Der wichtige Punkt hier ist, dass wir eine Kopie des Template-Inhalts dem Shadow Root anhängen, erstellt durch die [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode.

Und weil wir seine Inhalte zu einem Shadow DOM hinzufügen, können wir einige Stil-Informationen im Template in einem {{htmlelement("style")}}-Element einfügen, welches dann innerhalb des benutzerdefinierten Elements gekapselt ist. Das würde nicht funktionieren, wenn wir es einfach dem Standard-DOM hinzufügen würden.

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

Nun können wir es einfach durch Hinzufügen zu unserem HTML-Dokument verwenden:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität hinzufügen mit Slots

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können nur ein Textstück darin anzeigen, was bedeutet, dass es momentan sogar weniger nützlich ist als ein regulärer Absatz! Wir können es ermöglichen, verschiedenen Text in jede Elementinstanz auf eine schöne deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit beliebigen Markup-Fragmenten gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir zum Beispiel einen Slot in unserem trivialen Beispiel hinzufügen möchten, könnten wir das Absatz-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements ein mit einem [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor kann dies alles sein, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_-Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, sagt man, er sei _slotted_.

> [!NOTE]
> Ein unbenannter {{HTMLElement("slot")}} wird mit allen obersten Kindknoten des benutzerdefinierten Elements gefüllt, die nicht das [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut haben. Dies schließt Textknoten ein.

Und das war's für unser triviales Beispiel. Wenn Sie noch mehr damit herumspielen möchten, können Sie [es auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es [live in Aktion](https://mdn.github.io/web-components-examples/simple-template/) auch).

## Ein anspruchsvolleres Beispiel

Um den Artikel abzuschließen, schauen wir uns etwas weniger Triviales an.

Die folgende Reihe von Codeausschnitten zeigt, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es, wenn es in Dokumenten benutzt wird, aus der Verbindung des Elementinhalts mit dem Inhalt seines [Shadow Roots](/de/docs/Web/API/ShadowRoot) gerendert wird—das heißt, Teile des Elementinhalts werden benutzt, um [benannte Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen.

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z. B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und trotzdem die Platzhalterfunktionen des {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen, und dies könnte tatsächlich das kleine Ärgernis vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und es zu klonen). Es ist jedoch generell praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus sollte selbst wenn es nicht bereits gerendet ist, der Zweck des Containers als Template semantisch klarer sein, wenn das {{HTMLElement("template")}} verwendet wird. Außerdem können dem {{HTMLElement("template")}} direkt Elemente hinzugefügt werden, wie {{HTMLElement("td")}}, die verschwinden würden, wenn sie einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Sie können dieses vollständige Beispiel unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (sehen Sie es [live in Aktion](https://mdn.github.io/web-components-examples/element-details/) auch).

### Erstellen eines Templates mit einigen Slots

Zunächst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Element/slot#name) enthält:

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Funktionen:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment angewendet werden.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Element/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umfasst die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details>-Elements aus dem \<template>

Als Nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um als sein [Shadow Root](/de/docs/Web/API/ShadowRoot) das Dokumentfragment anzuhängen, das wir mit unserem oben erstellten {{HTMLElement("template")}}-Element erstellt haben. Dies verwendet genau das gleiche Muster, das wir in unserem früheren trivialen Beispiel gesehen haben.

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

Jetzt nehmen wir dieses **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

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

Zu diesem Schnipsel beachten Sie folgende Punkte:

- Der Schnipsel hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"element-name"` und `"description"` zu verweisen, die wir im `<element-details>` [Shadow Root](/de/docs/Web/API/ShadowRoot) eingefügt haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name). Das zweite `<element-details>`-Element hat keinen Verweis auf den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name) unter Verwendung eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern.

### Ein letztes bisschen Stil hinzufügen

Als krönender Abschluss fügen wir ein klein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Abschließend fügen wir alle Schnipsel zusammen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte zu diesem gerenderten Ergebnis:

- Obwohl die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt verwenden, werden sie mit Hilfe von {{HTMLElement("details")}} gerendert, da der [Shadow Root](/de/docs/Web/API/ShadowRoot) verursacht, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllen die Inhaltsdaten in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) im [Shadow Root](/de/docs/Web/API/ShadowRoot). Anders ausgedrückt, der DOM-Baum aus den **`<element-details>`**-Elementen wird _zusammengefügt_ mit dem Inhalt des [Shadow Roots](/de/docs/Web/API/ShadowRoot).
- Für beide **`<element-details>`**-Elemente wird automatisch eine **Attribute**-Überschrift aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"`- [benannten Slots](/de/docs/Web/HTML/Element/slot#name) hinzugefügt.
- Weil das erste **`<element-details>`**-Element ein {{HTMLElement("dl")}}-Element hat, das ausdrücklich den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) referenziert, ersetzen die Inhalte dieses {{HTMLElement("dl")}}-Elements den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Weil das zweite **`<element-details>`** den `"attributes"`- [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) nicht ausdrücklich referenziert, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit dem Standardinhalt dafür aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
