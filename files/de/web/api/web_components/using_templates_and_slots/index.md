---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann verwendet werden kann, um den Shadow DOM eines Web-Components zu füllen.

## Die Wahrheit über Templates

Wenn Sie wiederholt dieselben Markup-Strukturen auf einer Webseite wiederverwenden müssen, macht es Sinn, eine Art Template zu verwenden, anstatt die gleiche Struktur immer und immer wieder zu wiederholen. Dies war zuvor möglich, aber es wird durch das HTML-{{htmlelement("template")}}-Element erheblich erleichtert. Dieses Element und sein Inhalt wird nicht im DOM gerendert, kann aber dennoch mit JavaScript referenziert werden.

Lassen Sie uns ein triviales kurzes Beispiel betrachten:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie mit JavaScript eine Referenz darauf holen und es dann in das DOM einfügen, etwa so:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, beginnt man bereits zu sehen, wie nützlich dies sein könnte.

## Verwendung von Templates mit Web Components

Templates sind für sich genommen nützlich, aber sie funktionieren noch besser mit Web Components. Lassen Sie uns ein Web Component definieren, das unser Template als Inhalt seines Shadow DOM verwendet. Wir nennen es ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt hier ist, dass wir einen Klon des Template-Inhalts an die Shadow-Root anhängen, der mit der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode erstellt wurde.

Und da wir dessen Inhalt an einen Shadow DOM anhängen, können wir einige Stil-Informationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, welche dann im benutzerdefinierten Element gekapselt sind. Dies würde nicht funktionieren, wenn wir es einfach in das Standard-DOM einfügen würden.

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

## Mehr Flexibilität mit Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können darin nur ein Stück Text anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein normaler Absatz! Wir können es ermöglichen, in jeder Elementinstanz einen anderen Text auf eine nette deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel hinzufügen wollen, könnten wir das Absatz-Element unseres Templates folgendermaßen aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup inkludiert wird, oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements mit einem [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut hinzu, dessen Wert gleich dem Namen des Slots ist, den wir füllen wollen. Wie zuvor kann dies alles Mögliche sein, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einem Slot eingefügt wurde, wird er als _slotted_ bezeichnet.

> [!NOTE]
> Ein unbenannter {{HTMLElement("slot")}} wird mit allen obersten Kindknoten des benutzerdefinierten Elements gefüllt, die nicht das [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut haben. Dies schließt Textknoten ein.

Und das war es für unser triviales Beispiel. Wenn Sie mehr damit experimentieren möchten, können Sie [es auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es [live in Aktion](https://mdn.github.io/web-components-examples/simple-template/) ebenfalls).

## Ein komplexeres Beispiel

Zum Abschluss des Artikels schauen wir uns etwas an, das etwas weniger trivial ist.

Die folgenden Code-Snippets zeigen, wie Sie {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwenden können, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es, wenn es in Dokumenten verwendet wird, aus der Zusammenstellung des Inhalts des Elements mit dem Inhalt seines [shadow root](/de/docs/Web/API/ShadowRoot) gerendert wird — das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [shadow root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalter-Funktionen von {{HTMLElement("slot")}} für den Shadow DOM-Inhalt zu nutzen, und dies kann tatsächlich das kleine Problem vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und sie zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Außerdem sollte der Zweck des Containers als Template auch dann semantisch klarer sein, wenn das {{HTMLElement("template")}} verwendet wird. Zusätzlich kann {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} enthalten, die beim Hinzufügen zu einem {{HTMLElement("div")}} verschwinden würden.

> [!NOTE]
> Sie können dieses vollständige Beispiel bei [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (sehen Sie es [live in Aktion](https://mdn.github.io/web-components-examples/element-details/) ebenfalls).

### Erstellen eines Templates mit einigen Slots

Zunächst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [document fragment](/de/docs/Web/API/DocumentFragment) zu erstellen, das einige [benannte Slots](/de/docs/Web/HTML/Element/slot#name) enthält:

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

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment angewendet werden.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Element/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details>-Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um es, als seinen [shadow root](/de/docs/Web/API/ShadowRoot), mit dem Dokumentfragment zu verbinden, das wir zuvor mit unserem {{HTMLElement("template")}}-Element erstellt haben. Dies verwendet genau dasselbe Muster wie in unserem früheren trivialen Beispiel.

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

Nun nehmen wir dieses **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

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

- Der Schnipsel hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"element-name"` und `"description"` zu verweisen, die wir im `<element-details>` [shadow root](/de/docs/Web/API/ShadowRoot) platziert haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name). Das zweite `<element-details>`-Element verweist nicht auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit einem {{HTMLElement("dl")}}-Element und {{HTMLElement("dt")}} und {{HTMLElement("dd")}} Kind-Elementen.

### Ein abschließender Stil

Zum Abschluss fügen wir ein winziges bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Schließlich setzen wir alle Schnipsel zusammen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte zu diesem gerenderten Ergebnis:

- Auch wenn die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt verwenden, werden sie mit {{HTMLElement("details")}} gerendert, da der [shadow root](/de/docs/Web/API/ShadowRoot) sie damit ausstattet.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum aus den **`<element-details>`**-Elementen wird \_mit dem Inhalt des [shadow root](/de/docs/Web/API/ShadowRoot) kombiniert.
- Für beide **`<element-details>`**-Elemente wird über dem Positionierungspunkt des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Element/slot#name) eine **Attributes**-Überschrift aus dem [shadow root](/de/docs/Web/API/ShadowRoot) automatisch hinzugefügt.
- Weil das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) aus dem [shadow root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Element/slot#name) nicht explizit aus seinem [shadow root](/de/docs/Web/API/ShadowRoot) referenziert, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit dem Standardinhalt dafür aus dem [shadow root](/de/docs/Web/API/ShadowRoot) gefüllt.
