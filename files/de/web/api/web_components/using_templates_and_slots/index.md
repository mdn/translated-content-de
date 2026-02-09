---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: 29a83d39497ad4e0cb2cb9b2c28ff6d20ddffe53
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die Elemente {{htmlelement("template")}} und {{htmlelement("slot")}} verwenden können, um ein flexibles Template zu erstellen, das dann verwendet werden kann, um den Shadow DOM eines Web-Komponents zu füllen.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, macht es Sinn, eine Art von Template zu verwenden, anstatt dieselbe Struktur immer wieder zu wiederholen. Dies war vorher möglich, aber es wird durch das HTML-Element {{htmlelement("template")}} erheblich erleichtert. Dieses Element und sein Inhalt werden nicht im DOM gerendert, können jedoch dennoch mithilfe von JavaScript referenziert werden.

Schauen wir uns ein einfaches, schnelles Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird nicht auf Ihrer Seite erscheinen, bis Sie es mit JavaScript referenzieren und dann an das DOM anhängen, indem Sie etwas wie das Folgende verwenden:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits sehen, wie dies nützlich sein könnte.

## Verwendung von Templates mit Web-Komponenten

Templates sind für sich genommen nützlich, aber sie funktionieren noch besser mit Web-Komponenten. Definieren wir eine Web-Komponente, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen es ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt ist hier, dass wir einen Klon des Template-Inhalts an den Shadow-Root anhängen, der mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde.

Und weil wir seinen Inhalt an ein Shadow DOM anhängen, können wir einige Stilinformationsdaten innerhalb des Templates in einem {{htmlelement("style")}}-Element einfügen, das dann innerhalb des benutzerdefinierten Elements gekapselt wird. Dies würde nicht funktionieren, wenn wir es nur an das Standard-DOM anhängen würden.

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

Nun können wir es einfach verwenden, indem wir es zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität hinzufügen mit Slots

Soweit so gut, aber das Element ist nicht sehr flexibel. Wir können nur einen Text darin anzeigen, was bedeutet, dass es im Moment noch weniger nützlich ist als ein regulärer Absatz! Wir können es möglich machen, in jeder Elementinstanz unterschiedlichen Text auf eine schöne deklarative Weise anzuzeigen, indem wir das Element {{htmlelement("slot")}} verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und erlauben es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit jedem gewünschten Markup-Fragment gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unserem trivialen Beispiel hinzufügen wollen, könnten wir das Absatz-Element unseres Templates folgendermaßen aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup eingefügt wird, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur in das `<my-paragraph>` Element ein mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor, kann dies alles sein, was Sie mögen, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _Slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, ist er _slotted_.

Und das ist es für unser triviales Beispiel. Wenn Sie noch etwas damit spielen möchten, können Sie es [auf GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (sehen Sie es auch [live laufen](https://mdn.github.io/web-components-examples/simple-template/)).

Das `name`-Attribut sollte innerhalb eines Shadow-Root einzigartig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen. Aber das `slot`-Attribut muss nicht einzigartig sein: ein `<slot>` kann von mehreren Elementen mit einem passenden `slot`-Attribut gefüllt werden.

Die `name`- und `slot`-Attribute haben beide standardmäßig den leeren String als Wert, sodass Elemente ohne `slot`-Attribute dem `<slot>` ohne `name`-Attribut zugewiesen werden (dem nicht benannten Slot oder Standardslot). Hier ist ein Beispiel:

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

- Inhalt mit `slot="my-text"` wird in den benannten Slot eingefügt.
- Alle anderen Inhalte gehen automatisch in den nicht benannten Slot.

## Ein ausführlicheres Beispiel

Zum Abschluss des Artikels schauen wir uns etwas etwas weniger Triviales an.

Die folgende Reihe von Code-Snippets zeigt, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet, um:

- ein **`<element-details>`** Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`** Element so zu gestalten, dass es, wenn es in Dokumenten verwendet wird, aus der Kombination des Inhalts des Elements und dem Inhalt von seinem [Shadow-Root](/de/docs/Web/API/ShadowRoot) gerendert wird – das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow-Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}} Element ohne ein {{HTMLElement("template")}} Element zu verwenden, z. B. innerhalb eines regulären {{HTMLElement("div")}} Elements, und dennoch die Platzhalterfunktionen von {{HTMLElement("slot")}} für Shadow DOM-Inhalt zu nutzen; und dies könnte tatsächlich den geringen Aufwand vermeiden, zuerst auf die `content`-Eigenschaft des Vorlage-Elements zugreifen zu müssen (und sie zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}} Element hinzuzufügen, da Sie unwahrscheinlich ein Muster auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus sollte der Zweck des Containers als Template semantisch klarer sein, wenn das {{HTMLElement("template")}} verwendet wird. Darüber hinaus können dem {{HTMLElement("template")}} direkt Elemente hinzugefügt werden, wie {{HTMLElement("td")}}, die verschwinden würden, wenn sie zu einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Sie finden dieses komplette Beispiel unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (sehen Sie es auch [live laufen](https://mdn.github.io/web-components-examples/element-details/)).

### Erstellen eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}} Element innerhalb eines {{HTMLElement("template")}} Elements, um ein neues "element-details-template" [Dokumentfragment](/de/docs/Web/API/DocumentFragment) mit einigen [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

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

Dieses {{HTMLElement("template")}} Element hat mehrere Merkmale:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}} Element mit einem Satz von CSS-Stilen, die nur auf das Dokumentfragment beschränkt sind, das das {{HTMLElement("template")}} erstellt. Diese Stile sind so beschränkt, weil dieses Fragment in ein Shadow-Root-Element eingefügt wird.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name) Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umhüllt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) mit einem {{HTMLElement("details")}} Element.

### Erstellen eines neuen \<element-details>-Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um an dieses, als seinen [Shadow-Root](/de/docs/Web/API/ShadowRoot), das Dokumentfragment anzuhängen, das wir zuvor mit unserem {{HTMLElement("template")}} Element erstellt haben. Dies verwendet exakt dasselbe Muster, das wir bereits in unserem früheren trivialen Beispiel gesehen haben.

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

### Verwendung des \<element-details> benutzerdefinierten Elements mit benannten Slots

Nun nehmen wir das **`<element-details>`** Element und verwenden es tatsächlich in unserem Dokument:

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

Zu diesem Snippet: Beachten Sie diese Punkte:

- Das Snippet hat zwei Instanzen von **`<element-details>`** Elementen, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` zu verweisen, die wir in den `<element-details>` [Shadow-Root](/de/docs/Web/API/ShadowRoot) eingefügt haben.
- Nur das erste dieser beiden **`<element-details>`** Elemente verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>` Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>` Element verweist auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mittels eines {{HTMLElement("dl")}} Elements mit {{HTMLElement("dt")}} und {{HTMLElement("dd")}} Kindern.

### Ein letztes bisschen Stil hinzufügen

Als letzten Schliff fügen wir ein kleines bisschen mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, und {{HTMLElement("dd")}} Elemente in unserem Dokument hinzu:

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

Zum Schluss setzen wir alle Snippets zusammen und sehen uns an, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte über dieses gerenderte Ergebnis:

- Obwohl die Instanzen des **`<element-details>`** Elements im Dokument das {{HTMLElement("details")}} Element nicht direkt verwenden, werden sie mithilfe von {{HTMLElement("details")}} gerendert, da der [Shadow-Root](/de/docs/Web/API/ShadowRoot) sie damit füllt.
- Innerhalb des gerenderten {{HTMLElement("details")}} Ausgabes, füllt der Inhalt in den **`<element-details>`** Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow-Root](/de/docs/Web/API/ShadowRoot). Anders gesagt, der DOM-Baum aus den **`<element-details>`** Elementen wird _zusammengesetzt_ mit dem Inhalt des [Shadow-Root](/de/docs/Web/API/ShadowRoot).
- Für beide **`<element-details>`** Elemente wird eine **Attributes** Überschrift automatisch aus dem [Shadow-Root](/de/docs/Web/API/ShadowRoot) hinzugefügt, bevor die Position des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Da das erste **`<element-details>`** Element ein {{HTMLElement("dl")}} Element hat, das explizit auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow-Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzen die Inhalte dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow-Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** keinen expliziten Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow-Root](/de/docs/Web/API/ShadowRoot) hat, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt dafür aus dem [Shadow-Root](/de/docs/Web/API/ShadowRoot) gefüllt.
