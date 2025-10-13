---
title: Verwendung von Vorlagen und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um eine flexible Vorlage zu erstellen, die dann verwendet wird, um den Shadow DOM eines Web-Komponenten zu füllen.

## Die Wahrheit über Vorlagen

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, ist es sinnvoll, eine Art Vorlage zu verwenden, anstatt dieselbe Struktur immer wieder zu wiederholen. Dies war vorher möglich, aber es wird durch das HTML-{{htmlelement("template")}}-Element erheblich erleichtert. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber dennoch mittels JavaScript referenziert werden.

Schauen wir uns ein triviales kurzes Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite angezeigt, bis Sie mit JavaScript eine Referenz darauf erhalten und es dann mit etwas wie dem folgenden an das DOM anhängen:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits jetzt erkennen, wie nützlich dies sein könnte.

## Verwendung von Vorlagen mit Web-Komponenten

Vorlagen sind für sich genommen nützlich, aber sie funktionieren noch besser mit Web-Komponenten. Lassen Sie uns eine Web-Komponente definieren, die unsere Vorlage als Inhalt ihres Shadow DOM verwendet. Wir nennen sie ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt hier ist, dass wir ein Klon des Vorlageninhalts an die Shadow-Root anhängen, erstellt mit der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Und da wir deren Inhalte an einen Shadow DOM anhängen, können wir einige Stilinformationen innerhalb der Vorlage in einem {{htmlelement("style")}}-Element einfügen, das dann innerhalb des benutzerdefinierten Elements gekapselt ist. Dies würde nicht funktionieren, wenn wir es einfach an das Standard-DOM anhängen.

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

Jetzt können wir es einfach in unser HTML-Dokument einfügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können nur einen Text darin anzeigen, was bedeutet, dass es im Moment sogar weniger nützlich ist als ein normaler Absatz! Wir können es ermöglichen, dass in jeder Elementinstanz ein anderer Text auf deklarative Weise angezeigt wird, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrer Vorlage zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel hinzufügen möchten, könnten wir das Absatz-Element unserer Vorlage wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements ein, mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Dies kann wie zuvor alles Mögliche sein, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_-Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, heißt es, er sei _slotted_.

Das ist alles für unser triviales Beispiel. Wenn Sie ein wenig mehr damit spielen möchten, können Sie es [auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (siehe es [live laufen](https://mdn.github.io/web-components-examples/simple-template/) ebenfalls).

Das `name`-Attribut sollte einzigartig pro Shadow-Root sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht einzigartig sein: Ein `<slot>` kann von mehreren Elementen gefüllt werden, die alle ein übereinstimmendes `slot`-Attribut haben.

Die `name`- und `slot`-Attribute stehen beide standardmäßig auf einem leeren String, daher werden Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut zugewiesen (der unbenannte Slot oder Standardslot). Hier ist ein Beispiel:

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

Zum Abschluss des Artikels werfen wir einen Blick auf etwas weniger Triviales.

Die folgenden Codeschnipsel zeigen, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu gestalten, dass es beim Verwenden in Dokumenten aus dem Zusammensetzen des Inhalts des Elements zusammen mit dem Inhalt seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) gerendert wird, das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, {{HTMLElement("slot")}}-Elemente ohne ein {{HTMLElement("template")}}-Element zu verwenden, z. B. innerhalb eines normalen {{HTMLElement("div")}}-Elements, und dennoch die Platzhalter-Funktionen von {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen. Dies könnte das kleine Problem vermeiden, zuerst auf die `content`-Eigenschaft des Vorlagen-Elements zugreifen (und sie klonen) zu müssen. Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da Sie wahrscheinlich kein Muster auf Basis eines bereits gerenderten Elements definieren müssen.

Darüber hinaus, auch wenn es nicht bereits gerendert ist, sollte der Zweck des Containers als Vorlage semantisch klarer sein, wenn der {{HTMLElement("template")}} verwendet wird. Darüber hinaus können dem {{HTMLElement("template")}} Elemente direkt hinzugefügt werden, wie z. B. {{HTMLElement("td")}}, die verschwinden würden, wenn sie einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Sie können dieses vollständige Beispiel unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) finden (sehen Sie es auch [live laufen](https://mdn.github.io/web-components-examples/element-details/)).

### Erstellen einer Vorlage mit einigen Slots

Zunächst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) mit einigen [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Merkmale:

- Das {{HTMLElement("template")}} hat ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment beschränkt sind.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details>-Elements aus der \<template>

Als Nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um ihm das Dokumentfragment, das wir mit unserem oben erstellten {{HTMLElement("template")}}-Element erstellt haben, als [Shadow-Root](/de/docs/Web/API/ShadowRoot) anzuhängen. Dies folgt exakt demselben Muster, das wir in unserem vorherigen trivialen Beispiel gesehen haben.

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

### Verwenden des \<element-details>-benutzerdefinierten Elements mit benannten Slots

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

Zu diesem Snippet beachten Sie folgende Punkte:

- Das Snippet enthält zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu verweisen, die wir in den `<element-details>`- [Shadow-Root](/de/docs/Web/API/ShadowRoot) eingefügt haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) unter Verwendung eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern.

### Einen letzten Hauch von Stil hinzufügen

Als letzten Schliff fügen wir ein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Abschließend setzen wir alle Snippets zusammen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte zu diesem gerenderten Ergebnis:

- Obwohl die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt verwenden, werden sie unter Verwendung von {{HTMLElement("details")}} gerendert, da die [Shadow-Root](/de/docs/Web/API/ShadowRoot) bewirkt, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus der [Shadow-Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum der **`<element-details>`**-Elemente wird mit dem Inhalt der [Shadow-Root](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird eine **Attributes**-Überschrift automatisch aus der [Shadow-Root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element hat, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) von seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) von der [Shadow-Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** nicht explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) von seiner [Shadow-Root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt dafür von der [Shadow-Root](/de/docs/Web/API/ShadowRoot) gefüllt.
