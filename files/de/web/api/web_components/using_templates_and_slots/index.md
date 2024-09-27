---
title: Verwendung von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente verwenden können, um ein flexibles Template zu erstellen, das dann zum Befüllen des Shadow DOM eines Webkomponenten verwendet werden kann.

## Die Wahrheit über Templates

Wenn Sie die gleichen Markup-Strukturen immer wieder auf einer Webseite wiederverwenden müssen, ist es sinnvoll, eine Art von Template zu verwenden, anstatt dieselbe Struktur immer wieder zu wiederholen. Dies war vorher möglich, wird jedoch durch das HTML-Element {{htmlelement("template")}} erheblich erleichtert. Dieses Element und seine Inhalte werden nicht im DOM angezeigt, können aber dennoch über JavaScript referenziert werden.

Lassen Sie uns ein einfaches Beispiel betrachten:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies erscheint nicht auf Ihrer Seite, bis Sie mit JavaScript eine Referenz darauf abrufen und dann dem DOM hinzufügen, etwa wie folgt:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits erkennen, wie nützlich dies sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind allein nützlich, funktionieren aber noch besser mit Webkomponenten. Definieren wir eine Webkomponente, die unser Template als Inhalt ihres Shadow DOM verwendet. Wir nennen sie ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt hier ist, dass wir ein Klon des Template-Inhalts an die Shadow-Root anhängen, welcher mit der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde.

Und da wir seine Inhalte an ein Shadow DOM anhängen, können wir einige Stilinformationen innerhalb des Templates in einem {{htmlelement("style")}}-Element einschließen, das dann im benutzerdefinierten Element verkapselt ist. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM hinzufügen.

Ein Beispiel:

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

Nun können wir es verwenden, indem wir es einfach zu unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität durch Slots hinzufügen

Bisher so gut, aber das Element ist nicht sehr flexibel. Wir können nur einen Text darin anzeigen, was bedeutet, dass es zurzeit sogar weniger nützlich ist als ein normaler Absatz! Wir können es ermöglichen, in jeder Instanz eines Elements unterschiedlichen Text auf eine nette deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}}-Element verwenden.

Slots werden durch ihr `name`-Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die mit beliebigen Markup-Fragmenten gefüllt werden können, wenn das Element im Markup verwendet wird.

Wenn wir also einen Slot in unser einfaches Beispiel einfügen wollen, könnten wir das Absatz-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Wenn der Inhalt des Slots nicht definiert ist, wenn das Element im Markup eingefügt wird, oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` nur den Fallback-Inhalt "My default text".

Um den Inhalt des Slots zu definieren, fügen wir eine HTML-Struktur innerhalb des `<my-paragraph>`-Elements mit einem [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut ein, dessen Wert gleich dem Namen des Slots ist, den wir füllen möchten. Wie zuvor kann dies alles sein, was Sie möchten, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _slottable_ Knoten bezeichnet; wenn ein Knoten in einen Slot eingefügt wurde, heißt es, dass er _slotted_ ist.

> [!NOTE]
> Ein unbenannter {{HTMLElement("slot")}} wird mit allen obersten Kindknoten des benutzerdefinierten Elements gefüllt, die nicht das [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut haben. Dies schließt Textknoten ein.

Das war es für unser einfaches Beispiel.
Wenn Sie noch weiter damit experimentieren möchten, können Sie es auf [GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (siehe es auch [live laufen](https://mdn.github.io/web-components-examples/simple-template/)).

## Ein komplexeres Beispiel

Zum Abschluss des Artikels betrachten wir etwas weniger Triviales.

Die folgenden Codeausschnitte zeigen, wie Sie {{HTMLElement("slot")}} in Verbindung mit {{HTMLElement("template")}} und etwas JavaScript verwenden können, um:

- ein **`<element-details>`** Element mit [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`** Element so zu entwerfen, dass es beim Einsatz in Dokumenten aus der Kombination des Inhalts des Elements mit dem Inhalt aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) gerendert wird — das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Element/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen.

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}}-Element ohne ein {{HTMLElement("template")}}-Element zu verwenden, z.B. innerhalb eines regulären {{HTMLElement("div")}}-Elements, und dennoch die Platzhalter-Funktionen des {{HTMLElement("slot")}} für den Shadow-DOM-Inhalt zu nutzen. Dies kann tatsächlich den kleinen Aufwand vermeiden, zuerst auf die `content`-Eigenschaft des Template-Elements zugreifen zu müssen (und sie zu klonen). Allerdings ist es im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}}-Elements hinzuzufügen, da es unwahrscheinlich ist, dass Sie ein Muster auf der Grundlage eines bereits rendernden Elements definieren müssen.

Darüber hinaus sollte der Zweck des Containers als Template semantisch klarer sein, wenn man das {{HTMLElement("template")}} verwendet. Außerdem kann das {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} enthalten, die verschwinden würden, wenn sie zu einem {{HTMLElement("div")}} hinzugefügt werden.

> [!NOTE]
> Sie finden dieses vollständige Beispiel unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (siehe es auch [live laufen](https://mdn.github.io/web-components-examples/element-details/)).

### Ein Template mit einigen Slots erstellen

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

Dieses {{HTMLElement("template")}}-Element hat mehrere Merkmale:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}}-Element mit einer Reihe von CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment beschränkt sind.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Element/slot#name) zu erstellen:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) in einem {{HTMLElement("details")}}-Element.

### Ein neues \<element-details> Element aus dem \<template> erstellen

Als nächstes erstellen wir ein neues benutzerdefiniertes Element mit dem Namen **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um es als sein [Shadow Root](/de/docs/Web/API/ShadowRoot) mit dem von uns oben erstellten Dokumentfragment zu verbinden. Dies folgt genau dem gleichen Muster, das wir in unserem früheren einfachen Beispiel gesehen haben.

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

### Das benutzerdefinierte \<element-details> Element mit benannten Slots verwenden

Nehmen wir nun dieses **`<element-details>`**-Element und verwenden es tatsächlich in unserem Dokument:

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

Zu diesem Ausschnitt:

- Der Ausschnitt hat zwei Instanzen von **`<element-details>`**-Elementen, die beide das [`slot`](/de/docs/Web/HTML/Global_attributes#slot)-Attribut verwenden, um auf die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"element-name"` und `"description"` zu verweisen, die wir im `<element-details>`-Shadow Root erstellt haben.
- Nur das erste dieser beiden **`<element-details>`**-Elemente verweist auf den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"`. Das zweite `<element-details>`-Element enthält keinen Verweis auf den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"`.
- Das erste `<element-details>`-Element verweist auf den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"` mithilfe eines {{HTMLElement("dl")}}-Elements mit {{HTMLElement("dt")}} und {{HTMLElement("dd")}} Kind-Elementen.

### Einen letzten Hauch von Stil hinzufügen

Zum Abschluss fügen wir ein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}}-Elemente in unserem Dokument hinzu:

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

Lassen Sie uns schließlich alle Ausschnitte zusammenfügen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte in Bezug auf dieses gerenderte Ergebnis:

- Auch wenn die Instanzen des **`<element-details>`**-Elements im Dokument das {{HTMLElement("details")}}-Element nicht direkt verwenden, werden sie mit {{HTMLElement("details")}} gerendert, da das [Shadow Root](/de/docs/Web/API/ShadowRoot) dafür sorgt, dass sie damit gefüllt werden.
- Innerhalb der gerenderten {{HTMLElement("details")}} Ausgabe füllen die Inhalte in den **`<element-details>`**-Elementen die [benannten Slots](/de/docs/Web/HTML/Element/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) aus. Mit anderen Worten, der DOM-Baum aus den **`<element-details>`**-Elementen wird mit dem Inhalt des [Shadow Root](/de/docs/Web/API/ShadowRoot) _zusammengesetzt_.
- Für beide **`<element-details>`**-Elemente wird automatisch eine **Attributes**-Überschrift aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) vor der Position des [benannten Slots](/de/docs/Web/HTML/Element/slot#name) `"attributes"` hinzugefügt.
- Da das erste **`<element-details>`**-Element ein {{HTMLElement("dl")}}-Element hat, das explizit auf den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"` von seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, ersetzt der Inhalt dieses {{HTMLElement("dl")}} den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"` aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`**-Element nicht explizit auf den [benannten Slot](/de/docs/Web/HTML/Element/slot#name) `"attributes"` von seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) verweist, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Element/slot#name) mit dem Standardinhalt dafür aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
