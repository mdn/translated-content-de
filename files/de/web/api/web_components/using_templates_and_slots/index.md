---
title: Verwenden von Templates und Slots
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{DefaultAPISidebar("Web Components")}}

Dieser Artikel erklärt, wie Sie die Elemente {{htmlelement("template")}} und {{htmlelement("slot")}} verwenden können, um ein flexibles Template zu erstellen, das dann verwendet werden kann, um den Shadow DOM eines Webkomponenten zu füllen.

## Die Wahrheit über Templates

Wenn Sie dieselben Markup-Strukturen wiederholt auf einer Webseite verwenden müssen, ist es sinnvoll, eine Art Template zu verwenden, anstatt die gleiche Struktur immer wieder neu zu schreiben. Dies war zuvor möglich, wird jedoch durch das HTML-Element {{htmlelement("template")}} erheblich erleichtert. Dieses Element und seine Inhalte werden nicht im DOM gerendert, können jedoch weiterhin mit JavaScript referenziert werden.

Schauen wir uns ein triviales schnelles Beispiel an:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Dies wird erst auf Ihrer Seite angezeigt, wenn Sie mit JavaScript darauf zugreifen und es dann dem DOM hinzufügen, wie zum Beispiel mit dem folgenden Code:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Obwohl trivial, können Sie bereits sehen, wie dies nützlich sein könnte.

## Verwendung von Templates mit Webkomponenten

Templates sind an sich schon nützlich, funktionieren aber noch besser mit Webkomponenten. Definieren wir eine Webkomponente, die unser Template als Inhalt für ihren Shadow DOM verwendet. Wir nennen sie ebenfalls `<my-paragraph>`:

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

Der entscheidende Punkt hier ist, dass wir einen Klon des Template-Inhalts zum Shadow Root hinzufügen, der mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt wurde.

Und weil wir seine Inhalte zu einem Shadow DOM hinzufügen, können wir einige Styling-Informationen innerhalb des Templates in einem {{htmlelement("style")}} Element einschließen, die dann innerhalb des benutzerdefinierten Elements gekapselt sind. Dies würde nicht funktionieren, wenn wir es einfach dem Standard-DOM hinzufügen würden.

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

Jetzt können wir es verwenden, indem wir es einfach unserem HTML-Dokument hinzufügen:

```html
<my-paragraph></my-paragraph>
```

## Flexibilität mit Slots hinzufügen

Bisher, so gut, aber das Element ist nicht sehr flexibel. Wir können nur ein Stück Text darin anzeigen, was bedeutet, dass es im Moment noch weniger nützlich als ein regulärer Absatz ist! Wir können es jedoch ermöglichen, in jeder Instanz des Elements unterschiedlichen Text auf eine schöne deklarative Weise anzuzeigen, indem wir das {{htmlelement("slot")}} Element verwenden.

Slots werden durch ihr `name` Attribut identifiziert und ermöglichen es Ihnen, Platzhalter in Ihrem Template zu definieren, die beim Verwenden des Elements im Markup mit jedem beliebigen Markup-Fragment gefüllt werden können.

Wenn wir also einen Slot in unser triviales Beispiel einfügen möchten, könnten wir das Absatz-Element unseres Templates wie folgt aktualisieren:

```html
<p><slot name="my-text">My default text</slot></p>
```

Falls der Slot-Inhalt nicht definiert ist, wenn das Element in das Markup eingefügt wird oder wenn der Browser keine Slots unterstützt, enthält `<my-paragraph>` einfach den Standardinhalt "My default text".

Um den Inhalt des Slots zu definieren, schließen wir eine HTML-Struktur in das `<my-paragraph>` Element mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut ein, dessen Wert dem Namen des Slots entspricht, den wir füllen möchten. Wie zuvor kann dies alles sein, was Sie möchten, zum Beispiel:

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
> Knoten, die in Slots eingefügt werden können, werden als _slottable_ Knoten bezeichnet; wenn ein Knoten in einem Slot eingefügt wurde, sagt man, dass er _slotted_ ist.

Das war's für unser triviales Beispiel. Wenn Sie noch mehr damit spielen möchten, können Sie es auf [GitHub finden](https://github.com/mdn/web-components-examples/tree/main/simple-template) (siehe es [live](https://mdn.github.io/web-components-examples/simple-template/) auch).

Das `name` Attribut sollte pro Shadow Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem übereinstimmenden `slot` Attribut dem ersten Slot mit diesem Namen zugewiesen. Das `slot` Attribut muss jedoch nicht eindeutig sein: ein `<slot>` kann von mehreren Elementen gefüllt werden, die alle ein übereinstimmendes `slot` Attribut besitzen.

Die Attribute `name` und `slot` haben beide standardmäßig den leeren String als Wert, sodass Elemente ohne `slot` Attribut dem `<slot>` ohne `name` Attribut zugewiesen werden (der unbenannte Slot oder Standardslot). Hier ist ein Beispiel:

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

## Benannte und manuelle Slot-Zuweisung

Das vorherige Beispiel verwendet _benannte Slot-Zuweisung_, was bedeutet, dass die benannten {{htmlelement("slot")}} Elemente in einem Template mit dem Inhalt von Elementen im benutzerdefinierten Element (oder allgemeiner: dem Host-Element) gefüllt werden, die übereinstimmende Namen in ihren [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attributen haben. Dies ist der ursprüngliche Mechanismus zur Slot-Zuweisung und die am besten geeignete Methode für die meisten Anwendungsfälle.

_Manuelle Slot-Zuweisung_ ist ein alternativer Ansatz, bei dem Elemente manuell Slots mit Hilfe von [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.

Manuelle Zuweisung ist nützlich, wenn Sie den zu platzierenden Inhalt dynamisch auswählen möchten oder wenn Sie Slots basierend auf einem anderen Elementattribut wie ihrem `id` zuweisen möchten, ohne duplizierte `slot` Attribute hinzufügen zu müssen. Zum Beispiel könnte ein `<movie-picker>` benutzerdefiniertes Element ein `<select>` Element verwenden, um nach Genre zu filtern und nur die Elemente zu platzieren, die einen übereinstimmenden `data-genre` Attributwert bei Änderung haben.

```html
<movie-picker>
  <label
    >Genre:
    <select>
      <option>Comedy</option>
      <option>Drama</option>
      <option>Action</option>
      <option>Romance</option>
    </select>
  </label>
  <div data-genre="comedy romance"><h2>Hungover on Valentine's Day</h2></div>
  <div data-genre="drama romance"><h2>Us Two, plus Three</h2></div>
  <div data-genre="action drama"><h2>The Hitman 2: Can't die twice</h2></div>
  <div data-genre="action comedy">
    <h2>Tinkerbell, the last action hero</h2>
  </div>
</movie-picker>
```

Benannte Slot-Zuweisung ist das Standardverhalten. Auf Benutzeragenten, die das Einstellen der Slot-Zuweisungsmethode des Shadow Roots unterstützen, können Sie diese Funktion aktivieren, wenn Sie den Shadow Root einfügen. Dies wird programmatisch mit dem [`options.slotAssignment`](/de/docs/Web/API/Element/attachShadow#slotassignment) Parameter erreicht, der an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder deklarativ durch Setzen des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) Attributs auf dem {{htmlelement("template")}} Element.

Der folgende HTML-Code zeigt ein einfaches Beispiel dafür, wie Sie `shadowrootslotassignment` beim deklarativen Erstellen eines Shadow Roots (mithilfe von `shadowrootmode`) einstellen können.

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="manual">
    <h2 class="header">
      <slot id="titleSlot"></slot>
    </h2>
  </template>

  <span>Text for the title slot</span>
</article>
```

Der Code zur manuellen Zuweisung des Textes im `<span>` zum `<slot>` könnte so aussehen:

```js
const host = document.querySelector("#host");
const shadow = host.shadowRoot;
const slot = shadow.querySelector("slot");
const titleText = host.querySelector("span");

slot.assign(titleText);
```

## Ein aufwendigeres Beispiel

Zum Abschluss des Artikels schauen wir uns etwas an, das weniger trivial ist.

Die folgenden Code-Snippets zeigen, wie man {{HTMLElement("slot")}} zusammen mit {{HTMLElement("template")}} und etwas JavaScript verwendet um:

- ein **`<element-details>`** Element mit [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu erstellen
- das **`<element-details>`** Element so zu gestalten, dass es, wenn es in Dokumenten verwendet wird, aus der Komposition des Inhalts des Elements mit dem Inhalt seines [Shadow Roots](/de/docs/Web/API/ShadowRoot) gerendert wird — das heißt, Teile des Inhalts des Elements werden verwendet, um [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) zu füllen

Beachten Sie, dass es technisch möglich ist, das {{HTMLElement("slot")}} Element ohne ein {{HTMLElement("template")}} Element zu verwenden, z. B. innerhalb eines gewöhnlichen {{HTMLElement("div")}} Elements, und dennoch von den Platzhalterfunktionen des {{HTMLElement("slot")}} für Shadow DOM Inhalt zu profitieren, und dabei möglicherweise das kleine Problem zu vermeiden, die `content` Eigenschaft des Template-Elements zuerst zugreifen zu müssen (und es zu klonen). Es ist jedoch im Allgemeinen praktischer, Slots innerhalb eines {{HTMLElement("template")}} Elements hinzuzufügen, da Sie wahrscheinlich kein Muster basierend auf einem bereits gerenderten Element definieren müssen.

Darüber hinaus ist der Zweck des Containers als Template auch semantisch klarer, wenn das {{HTMLElement("template")}} verwendet wird. Darüber hinaus können dem {{HTMLElement("template")}} direkt Elemente wie {{HTMLElement("td")}} hinzugefügt werden, die verschwinden würden, wenn sie einem {{HTMLElement("div")}} hinzugefügt würden.

> [!NOTE]
> Sie finden dieses vollständige Beispiel unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (siehe es [live](https://mdn.github.io/web-components-examples/element-details/) auch).

### Erstellen eines Templates mit einigen Slots

Zuerst verwenden wir das {{HTMLElement("slot")}} Element innerhalb eines {{HTMLElement("template")}} Elements, um einen neuen "element-details-template" [document fragment](/de/docs/Web/API/DocumentFragment) mit einigen [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:

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

Dieses {{HTMLElement("template")}} Element hat mehrere Eigenschaften:

- Das {{HTMLElement("template")}} enthält ein {{HTMLElement("style")}} Element mit einer Menge an CSS-Stilen, die nur auf das vom {{HTMLElement("template")}} erstellte Dokumentfragment beschränkt sind. Diese Stile sind so eingeschränkt, weil das Fragment in ein Shadow Root Element eingefügt wird.
- Das {{HTMLElement("template")}} verwendet {{HTMLElement("slot")}} und sein [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name) Attribut, um drei [benannte Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) zu erstellen:
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- Das {{HTMLElement("template")}} umschließt die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) in einem {{HTMLElement("details")}} Element.

### Erstellen eines neuen \<element-details> Elements aus dem \<template>

Als nächstes erstellen wir ein neues benutzerdefiniertes Element namens **`<element-details>`** und verwenden [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow), um ihm, als seinen [Shadow Root](/de/docs/Web/API/ShadowRoot), das mit unserem {{HTMLElement("template")}} Element oben erstellte Dokumentfragment hinzuzufügen. Dies folgt genau dem gleichen Muster wie in unserem früheren trivialen Beispiel.

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

### Verwenden des benutzerdefinierten \<element-details> Elements mit benannten Slots

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

Zu diesem Snippet sind folgende Punkte zu beachten:

- Das Snippet enthält zwei Instanzen des **`<element-details>`** Elements, die beide das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut verwenden, um die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` und `"description"` in ihrem `<element-details>` [Shadow Root](/de/docs/Web/API/ShadowRoot) zu referenzieren.
- Nur das erste dieser beiden **`<element-details>`** Elemente referenziert den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name). Das zweite `<element-details>` Element hat keinen Verweis auf den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name).
- Das erste `<element-details>` Element referenziert den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit einem {{HTMLElement("dl")}} Element und {{HTMLElement("dt")}} und {{HTMLElement("dd")}} Kindern.

### Ein abschließender Hauch von Stil

Als letzten Schliff fügen wir noch ein wenig mehr CSS für die {{HTMLElement("dl")}}, {{HTMLElement("dt")}} und {{HTMLElement("dd")}} Elemente in unserem Dokument hinzu:

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

Lassen Sie uns schließlich alle Snippets zusammenfügen und sehen, wie das gerenderte Ergebnis aussieht.

{{EmbedLiveSample('A_more_involved_example', '300','400')}}

Beachten Sie die folgenden Punkte zum gerenderten Ergebnis:

- Obwohl die Instanzen des **`<element-details>`** Elements im Dokument das {{HTMLElement("details")}} Element nicht direkt verwenden, werden sie unter Verwendung von {{HTMLElement("details")}} gerendert, da der [Shadow Root](/de/docs/Web/API/ShadowRoot) sie damit füllt.
- Innerhalb der gerenderten {{HTMLElement("details")}} Ausgabe füllt der Inhalt in den **`<element-details>`** Elementen die [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot). Mit anderen Worten: Der DOM-Baum der **`<element-details>`** Elemente wird mit dem Inhalt des [Shadow Roots](/de/docs/Web/API/ShadowRoot) _komponiert_.
- Für beide **`<element-details>`** Elemente wird eine **Attributes** Überschrift automatisch aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) vor die Position des `"attributes"` [benannten Slots](/de/docs/Web/HTML/Reference/Elements/slot#name) hinzugefügt.
- Da das erste **`<element-details>`** ein {{HTMLElement("dl")}} Element besitzt, das explizit den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) referenziert, ersetzen die Inhalte dieses {{HTMLElement("dl")}} den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot).
- Da das zweite **`<element-details>`** den `"attributes"` [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) aus seinem [Shadow Root](/de/docs/Web/API/ShadowRoot) nicht explizit referenziert, wird sein Inhalt für diesen [benannten Slot](/de/docs/Web/HTML/Reference/Elements/slot#name) mit dem Standardinhalt aus dem [Shadow Root](/de/docs/Web/API/ShadowRoot) gefüllt.
