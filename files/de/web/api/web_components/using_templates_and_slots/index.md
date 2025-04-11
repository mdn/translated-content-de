---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann genutzt werden kann, um den Shadow DOM eines Webkomponenten zu füllen.

## Die Wahrheit über Templates

Wenn Sie die gleichen Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art von Template zu verwenden, anstatt die gleiche Struktur immer wieder neu zu erstellen. Dies war zuvor möglich, wird jedoch durch das HTML-{{htmlelement("template")}}-Element erheblich vereinfacht. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können aber dennoch mit JavaScript referenziert werden.

Lassen Sie uns ein triviales Beispiel ansehen:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie einen Verweis darauf mit JavaScript holen und es dann dem DOM hinzufügen, etwa so:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Auch wenn es trivial ist, können Sie bereits erkennen, wie dies nützlich sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind für sich genommen nützlich, aber sie funktionieren noch besser mit Webkomponenten. Lassen Sie uns eine Webkomponente definieren, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen es ebenfalls `<my-paragraph>`:

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

Der wichtige Punkt hierbei ist, dass wir einen Klon des Template-Inhalts an das Shadow Root anhängen, der mit der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode erstellt wird.

Und weil wir seine Inhalte an einen Shadow DOM anhängen, können wir einige Stilinformationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann innerhalb des benutzerdefinierten Elements gekapselt ist. Dies würde nicht funktionieren, wenn wir es einfach an das Standard-DOM anhängen würden.

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

Nun können wir es einfach durch Hinzufügen zu unserem HTML-Dokument verwenden:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bis jetzt funktioniert alles gut, aber das Element ist nicht sehr flexibel. Wir können nur ein Textstück darin anzeigen, was bedeutet, dass es momentan sogar weniger nützlich ist als ein regulärer Absatz! Wir können ermöglichen, dass in jeder Instanz des Elements unterschiedlicher Text angezeigt wird, und zwar auf eine elegante deklarative Weise, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und erlauben es Ihnen, Platzhalter in Ihrem Template zu definieren, die durch beliebige Markup-Fragmenten gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser triviales Beispiel hinzufügen möchten, könnten wir das Paragraph-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup enthalten ist, oder wenn der Browser Slots nicht unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "Mein Standardtext".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements ein mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor kann dies alles sein, was Ihnen beliebt, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_-Knoten bezeichnet; wenn ein Knoten in einem Slot eingefügt wurde, sagt man, er sei _slotted_.

Das war's für unser triviales Beispiel. Wenn Sie mehr damit experimentieren möchten, können Sie es [auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (siehe es [live laufen](https://mdn.github.io/web-components-examples/simple-template/) auch).

Das `name`-Attribut sollte pro Shadow Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht eindeutig sein: Ein `<slot>` kann durch mehrere Elemente gefüllt werden, die alle ein passendes `slot`-Attribut haben.

Die `name`- und `slot`-Attribute haben beide standardmäßig den leeren String, sodass Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut (dem namenlosen Slot oder Standardslot) zugewiesen werden. Hier ist ein Beispiel:

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

- Der Inhalt mit `slot="my-text"` geht in den benannten Slot.
- Alle anderen Inhalte gehen automatisch in den namenlosen Slot.

## Ein komplexeres Beispiel

Zum Abschluss des Artikels betrachten wir etwas weniger Triviales.

Die folgenden Codeausschnitte zeigen, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`**-Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`**-Element so zu entwerfen, dass es beim Verwenden in Dokumenten aus dem Inhalt des Elements zusammen mit dem Inhalt aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) gerendert wird - das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen.

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalter-Funktionen des {{HTMLElement("slot")}} für Shadow-DOM-Inhalte zu nutzen; dies kann tatsächlich das kleine Problem vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und es zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da es unwahrscheinlich ist, dass Sie ein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus, auch wenn es noch nicht gerendert ist, sollte der Zweck des Containers als Template semantisch klarer sein, wenn Sie das {{HTMLElement("template")}} verwenden. Außerdem kann {{HTMLElement("template")}} Elemente direkt hinzugefügt werden, wie {{HTMLElement("td")}}, die beim Hinzufügen zu einem {{HTMLElement("div")}} verschwinden würden.

> [!NOTE]
> Dieses vollständige Beispiel finden Sie unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (sehen Sie es auch [live laufen](https://mdn.github.io/web-components-examples/element-details/)).

### Erstellen eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}}-Element innerhalb eines {{HTMLElement("template")}}-Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) mit einigen [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

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

Dieses {{HTMLElement("template")}}-Element weist mehrere Merkmale auf:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das Dokumentfragment, das das {{HTMLElement("template")}} erstellt, angewendet werden.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}}-Element.

### Erstellen eines neuen \<element-details>-Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um an ihm, als sein [Shadow Root](/de/docs/Web/API/ShadowRoot), das Dokumentfragment anzuhängen, das wir mit unserem {{HTMLElement("template")}}-Element oben erstellt haben. Dies verwendet genau das gleiche Muster, das wir in unserem früheren trivialen Beispiel gesehen haben.

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

Jetzt nehmen wir das **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

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

Beachten Sie bei diesem Ausschnitt folgende Punkte:

- Der Ausschnitt enthält zwei Instanzen des **`<element-details>`**-Elements, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"`, die wir im `<element-details>` [Shadow Root](/de/docs/Web/API/ShadowRoot) platziert haben, zu verweisen.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>`-Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>`-Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit einem {{HTMLElement("dl")}}-Element mit {{HTMLElement("dt")}}- und {{HTMLElement("dd")}}-Kindern.

### Hinzufügen eines letzten Stücks Stil

Als letzten Schliff fügen wir etwas mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Schließlich setzen wir alle Ausschnitte zusammen und sehen uns an, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte zu diesem gerenderten Ergebnis:

- Auch wenn die Instanzen des **`<element-details>`**-Elements im Dokument {{HTMLElement("details")}} nicht direkt verwenden, werden sie mit {{HTMLElement("details")}} gerendert, da der [Shadow Root](/de/docs/Web/API/ShadowRoot) dafür sorgt, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}}-Ausgabe füllt der Inhalt in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten, der DOM-Baum aus den **`<element-details>`**-Elementen wird mit dem Inhalt des [Shadow Root](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird eine **Attributes**-Überschrift automatisch aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) vor der Position des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`** ein {{HTMLElement("dl")}}-Element enthält, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** nicht explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt dafür aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
