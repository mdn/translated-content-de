---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann verwendet werden kann, um den Shadow DOM eines Web-Komponenten zu bevölkern.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art Template zu verwenden, anstatt dieselbe Struktur immer und immer wieder zu wiederholen. Dies war vorher möglich, wird aber durch das HTML-Element {{htmlelement("template")}} erheblich erleichtert. Dieses Element und sein Inhalt werden im DOM nicht gerendert, können jedoch weiterhin mittels JavaScript referenziert werden.

Lassen Sie uns ein triviales, schnelles Beispiel betrachten:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie einen Verweis darauf mit JavaScript erhalten und es dann mit etwas wie dem folgenden dem DOM hinzufügen:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits sehen, wie dies nützlich sein könnte.

## Verwendung von Templates mit Web-Komponenten

Templates sind für sich genommen nützlich, aber sie funktionieren noch besser mit Web-Komponenten. Lassen Sie uns eine Web-Komponente definieren, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen es ebenfalls `<my-paragraph>`:

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

Der wichtige Punkt hier ist, dass wir eine Kopie des Template-Inhalts dem Shadow Root anhängen, erzeugt mit der Methode {{domxref("Node.cloneNode()")}}.

Und weil wir seinen Inhalt einem Shadow DOM hinzufügen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, welches dann innerhalb des benutzerdefinierten Elements kapselt wird. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM hinzufügen würden.

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

Bis jetzt so gut, aber das Element ist nicht sehr flexibel. Wir können darin nur einen Text anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein regulärer Absatz! Wir können es möglich machen, unterschiedlichen Text in jede Elementinstanz auf einfache deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel aufnehmen möchten, könnten wir unser Template-Absatzelement wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements mit einem [`slot`](/de/docs/Web/HTML/Global_attributes#slot) Attribut ein, dessen Wert gleich dem Namen des Slots ist, den wir füllen möchten. Wie zuvor, kann dies alles sein, was Sie mögen, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, sagt man, er sei _slotted_.

> [!NOTE]
> Ein unbenannter {{HTMLElement("slot")}} wird mit allen Kindknoten auf hoher Ebene des benutzerdefinierten Elements gefüllt, die das [`slot`](/de/docs/Web/HTML/Global_attributes#slot) Attribut nicht haben. Dazu gehören Textknoten.

Und das ist es für unser triviales Beispiel. Wenn Sie noch mehr damit spielen möchten, können Sie es [auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (siehe es [live laufen](https://mdn.github.io/web-components-examples/simple-template/) auch).

## Ein ausführlicheres Beispiel

Um den Artikel zu beenden, schauen wir uns etwas weniger Triviales an.

Die folgenden Codeausschnitte zeigen, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in dessen [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es beim Einsatz in Dokumenten aus einer Komposition des Inhalts des Elements zusammen mit Inhalten aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) gerendert wird - das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalterfunktionen des {{HTMLElement("slot")}} für Shadow DOM-Inhalte zu nutzen, und dies könnte tatsächlich den kleinen Aufwand vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zuzugreifen (und diese zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Zudem sollte der Zweck des Containers als Template semantisch klarer sein, wenn man das {{HTMLElement("template")}}-Element verwendet. Darüber hinaus kann {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} hinzufügen, die verschwinden würden, wenn sie einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Dieses komplette Beispiel finden Sie unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (siehe es [live laufen](https://mdn.github.io/web-components-examples/element-details/) auch).

### Erstellen eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um einen neuen "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) zu erstellen, der einige [benannte Slots](/de/docs/Web/HTML/Element/slot#name) enthält:

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

- Das {{HTMLElement("template")}} hat ein {{HTMLElement("style")}}-Element mit einem Satz von CSS-Stilen, die nur auf das Dokumentfragment angewendet werden, das das {{HTMLElement("template")}} erstellt.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Element/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details> Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden {{DOMXref("Element.attachShadow")}}, um an ihm als [Shadow Root](/de/docs/Web/API/ShadowRoot) das Dokumentfragment anzuhängen, das wir mit unserem obigen {{HTMLElement("template")}}-Element erstellt haben. Dies verwendet genau dasselbe Muster, das wir in unserem früheren trivialen Beispiel gesehen haben.

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

### Verwendung des \<element-details> benutzerdefinierten Elements mit benannten Slots

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
    >A mechanism for holding client-side content that is not to be rendered
    when a page is loaded but may subsequently be instantiated during runtime
    using JavaScript.</span
  >
</element-details>
```

Beachten Sie bei diesem Ausschnitt die folgenden Punkte:

- Der Ausschnitt hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"element-name"` und `"description"` zu verweisen, die wir im `<element-details>` [Shadow Root](/de/docs/Web/API/ShadowRoot) platziert haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente bezieht sich auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name). Das zweite `<element-details>`-Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name).
- Das erste `<element-details>`-Element bezieht sich auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) unter Verwendung eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Kindern.

### Ein letzter Schliff an Stil hinzufügen

Zum Schluss fügen wir ein kleines bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Schließlich setzen wir alle Codeausschnitte zusammen und sehen uns an, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte über dieses gerenderte Ergebnis:

- Obwohl die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt nutzen, werden sie mithilfe von {{HTMLElement("details")}} gerendert, weil der [Shadow Root](/de/docs/Web/API/ShadowRoot) sie damit ausstatten lässt.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt der **`<element-details>`**-Elemente die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum aus den **`<element-details>`**-Elementen wird mit dem Inhalt des [Shadow Root](/de/docs/Web/API/ShadowRoot) _komponiert_.
- Für beide **`<element-details>`**-Elemente wird automatisch eine **Attributes** Überschrift aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) eingefügt, vor der Position des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Element/slot#name).
- Da das erste **`<element-details>`**-Element ein {{HTMLElement("dl")}}-Element enthält, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** keinen expliziten Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) enthält, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit dem Standardinhalt aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
