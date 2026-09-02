---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Webkomponenten ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die die Menge der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und zeigt einige Beispiele auf.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf neu implementieren.

- **Angepasste integrierte Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Siehe das [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is) für weitere Informationen.

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte, um sie zu erstellen und zu nutzen, die gleichen:

- Zuerst [implementieren Sie ihr Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite. Sie können auch [bereichsbezogene Registries](#bereichsbezogene_benutzerdefinierte_element-registries) erstellen, um Definitionen auf einen bestimmten DOM-Teilbaum zu beschränken.
- Schließlich können Sie [das benutzerdefinierte Element nutzen](#verwendung_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder die gewünschte zu ändernde Schnittstelle erweitert (im Fall von angepassten integrierten Elementen). Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), damit Sie Instanzen davon mittels Standard-DOM-Praktiken erstellen können, wie zum Beispiel durch Schreiben des Elements im HTML-Markup, Aufruf von [`document.createElement()`](/de/docs/Web/API/Document/createElement) usw.

Hier ist die Implementierung eines minimalen benutzerdefinierten Elements, das das {{HTMLElement("p")}}-Element anpasst:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Hier ist die Implementierung eines minimalen autonomen benutzerdefinierten Elements:

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und Standardwerte festlegen, Ereignis-Listener registrieren und möglicherweise einen Schatten-Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Weitere Informationen finden Sie unter [Anforderungen für benutzerdefinierte Elementkonstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance).

### Lebenszyklus-Callbacks von benutzerdefinierten Elementen

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf Ihr benutzerdefiniertes Element in bestimmten Weisen interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die die Spezifikation _Lebenszyklus-Callbacks_ nennt, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks von benutzerdefinierten Elementen umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, soweit möglich, die Einrichtung benutzerdefinierter Elemente in diesem Callback zu implementieren, anstatt im Konstruktor.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _stattdessen_ aufgerufen, wenn das Element über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) an eine andere Stelle im DOM verschoben wird. Verwenden Sie dies, um zu vermeiden, Initialisierungs- und Bereinigungscode in den `connectedCallback()` und `disconnectedCallback()`-Callbacks auszuführen, wenn das Element nicht tatsächlich hinzugefügt oder entfernt wird. Weitere Details finden Sie unter [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen).
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Weitere Details zu diesem Callback finden Sie unter [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen).

Hier ist ein minimales benutzerdefiniertes Element, das diese Lebenszyklusereignisse protokolliert:

```js
// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

#### Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden, aber es gibt lebenszyklusbedingte Nebeneffekte zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, weil das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um jeglichen erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden soll, kann dies zu Problemen mit dem Zustand des Elements führen, wenn sie beim Verschieben (anstatt beim Entfernen oder Einfügen) ausgeführt werden. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()` Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dadurch wird das `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um das Ausführen der anderen beiden Callbacks zu stoppen, oder einige benutzerdefinierte Logik einfügen, um die Bewegung zu verarbeiten:

```js
class MyComponent {
  // ...
  connectedMoveCallback() {
    console.log("Custom move-handling logic here.");
  }
  // ...
}
```

## Registrierung eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element in einer Seite verfügbar zu machen, rufen Sie die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte weitere Regeln erfüllen, die in der Spezifikation zur [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgelistet sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Wird nur für angepasste integrierte Elemente eingeschlossen. Dies ist ein Objekt mit einer einzigen Eigenschaft `extends`, die den Namen des zu erweiternden integrierten Elements als Zeichenkette enthält.

Zum Beispiel registriert dieser Code das `WordCount`-angepasste integrierte Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo`-autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes integriertes Element zu verwenden, verwenden Sie das integrierte Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen genau wie ein integriertes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Bereichsbezogene benutzerdefinierte Element-Registries

Die oben genannten Beispiele registrieren benutzerdefinierte Elemente in der globalen [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), die über [`Window.customElements`](/de/docs/Web/API/Window/customElements) erreichbar ist. Dies bedeutet, dass jeder registrierte Name eines benutzerdefinierten Elements weltweit auf der gesamten Seite eindeutig sein muss. Wenn Anwendungen wachsen und Komponenten aus mehreren Bibliotheken kombinieren, können globale Namenskonflikte zu einem Problem werden - wenn zwei Bibliotheken versuchen, `<my-button>` zu definieren, wird eine davon fehlschlagen.

**Bereichsbezogene benutzerdefinierte Element-Registries** lösen dies, indem sie Ihnen erlauben, ein unabhängiges Register zu erstellen, dessen Definitionen nur für einen bestimmten DOM-Teilbaum gelten, wie z.B. einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Verschiedene Schattenbäume können jeweils ihr eigenes Register mit eigenen Definitionen verwenden, auch wenn sich die Elementnamen überschneiden.

### Erstellen einer bereichsbezogenen Registry

Erstellen Sie eine bereichsbezogene Registry mit dem [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor und registrieren Sie Elemente darin mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define), genau wie im globalen Registry:

```js
const myRegistry = new CustomElementRegistry();

myRegistry.define(
  "my-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "Hello from scoped registry!";
    }
  },
);
```

> [!NOTE]
> Bereichsbezogene Registries unterstützen nicht die `extends`-Option in `define()` (zum Erstellen von [angepassten integrierten Elementen](#arten_von_benutzerdefinierten_elementen)). Der Versuch, `extends` mit einer bereichsbezogenen Registry zu verwenden, führt zu einem `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException).

### Verknüpfung einer bereichsbezogenen Registry mit einem Schatten-Root

Eine Möglichkeit, eine bereichsbezogene Registry zu verwenden, besteht darin, sie über die `customElementRegistry`-Option an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zu übergeben. Elemente, die innerhalb dieses Schattenbaums analysiert oder erstellt werden, verwenden dann die Definitionen der bereichsbezogenen Registry anstelle der globalen:

```js
const host = document.createElement("div");
document.body.appendChild(host);

const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: myRegistry,
});

// <my-element> is upgraded using myRegistry's definition
shadow.innerHTML = "<my-element></my-element>";
```

Sie können auch eine bereichsbezogene Registry zu einem späteren Zeitpunkt verknüpfen, nachdem der Schatten-Root erstellt wurde, indem Sie [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) aufrufen. Dies ist nützlich, wenn Sie die DOM-Struktur zuerst einrichten und das Register zu einem späteren Zeitpunkt anhängen müssen:

```js
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: null, // no registry yet
});
shadow.innerHTML = "<my-element></my-element>";

// Later, associate the scoped registry and upgrade elements
myRegistry.initialize(shadow);
```

### Deklarativer Schatten-Root mit bereichsbezogener Registry

Für den [deklarativen Schatten-Root](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) können Sie das `shadowrootcustomelementregistry`-Attribut an einem {{HTMLElement("template")}}-Element verwenden. Dies teilt dem HTML-Parser mit, dass der Schatten-Root's [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) als `null` belassen wird, sodass eine bereichsbezogene Registry später mit `initialize()` angehängt werden kann:

```html
<my-host>
  <template shadowrootmode="open" shadowrootcustomelementregistry>
    <my-element></my-element>
  </template>
</my-host>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwertes zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array enthalten, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann jedes Mal aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Der Name des Attributs, das sich geändert hat.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size`-Attribut beobachten und die alten und neuen Werte protokollieren, wenn sie sich ändern:

```js
// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["size"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. In dem folgenden Beispiel wird `attributeChangedCallback()` beim Parsen des DOM aufgerufen, auch wenn das Attribut niemals wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel zur Verwendung von `attributeChangedCallback()` finden Sie unter [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie zum Beispiel "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mithilfe von HTML oder JavaScript festgelegt werden, während andere intern sind und nicht.
Ob extern oder intern, häufig haben diese Zustände entsprechende CSS [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element in einem bestimmten Zustand auszuwählen und zu stylen.

Autonome benutzerdefinierte Elemente (aber nicht auf integrierten Elementen basierend) erlauben es Ihnen auch, Zustände zu definieren und gegen sie mithilfe der {{cssxref(":state()")}} Pseudoklassenfunktion zu selektieren.
Der folgende Code zeigt, wie dies mit dem Beispiel eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft (mit Setter und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet.
Der Setter für den (internen) `collapsed`-Zustand fügt dem `CustomStateSet` den _Bezeichner_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Bezeichner ist einfach eine Zeichenkette: in diesem Fall haben wir ihn `hidden` genannt, aber wir könnten ihn genauso gut `collapsed` nennen.

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  get collapsed() {
    return this._internals.states.has("hidden");
  }

  set collapsed(flag) {
    if (flag) {
      // Existence of identifier corresponds to "true"
      this._internals.states.add("hidden");
    } else {
      // Absence of identifier corresponds to "false"
      this._internals.states.delete("hidden");
    }
  }
}

// Register the custom element
customElements.define("my-custom-element", MyCustomElement);
```

Wir können den Bezeichner verwenden, der dem `CustomStateSet` des benutzerdefinierten Elements (`this._internals.states`) hinzugefügt wurde, um den benutzerdefinierten Zustand des Elements abzugleichen.
Dies wird erreicht, indem der Bezeichner zur {{cssxref(":state()")}} Pseudoklasse übergeben wird.
Zum Beispiel, unten wählen wir den Zustand `hidden` aus, wenn er wahr ist (und daher der `collapsed`-Zustand des Elements), indem wir den `:hidden`-Selektor verwenden und den Rand entfernen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der {{cssxref(":host()")}}-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-Roots eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()`-Pseudoklasse verwendet werden, nachdem die {{cssxref("::part()")}}-Pseudoelemente verwendet wurden, um die [Schatten-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, das sich in einem bestimmten Zustand befindet, abzugleichen.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiele für benutzerdefinierte Elemente ansehen. Den Quellcode zu all diesen Beispielen und mehr finden Sie im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zunächst werden wir uns ein autonomes benutzerdefiniertes Element ansehen. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildsymbol und eine Textzeichenkette als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert wird, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

- [Beispiel live sehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zunächst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Klasse erweitert.

```js
// Create a class for the element
class PopupInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, damit die korrekte Prototypen-Kette erstellt wird.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionen, die das Element haben wird, wenn es mit dem DOM verbunden wird. In diesem Fall hängen wir einen Schatten-Root an das benutzerdefinierte Element an, verwenden einige DOM-Manipulationen, um die interne Struktur des Schatten-DOM des Elements zu erstellen — die dann dem Schatten-Root angehängt wird — und fügen schließlich etwas CSS an den Schatten-Root, um es zu gestalten. Wir erledigen diese Arbeit nicht im Konstruktor, weil die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element in der `CustomElementRegistry` mit der zuvor erwähnten `define()`-Methode — in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt bereit, auf unserer Seite verwendet zu werden. In unserem HTML verwenden wir es so:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzierung externer Stile

Im obigen Beispiel wenden wir Stile auf das Schatten-DOM an, indem wir ein {{htmlelement("style")}}-Element verwenden, aber Sie können stattdessen ein externes Stylesheet aus einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element so modifizieren, dass es ein externes Stylesheet verwendet.

- [Beispiel live sehen](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

Hier ist die Klassendefinition:

```js
// Create a class for the element
class PopupInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // Attach the created elements to the shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir mit einem {{HTMLElement("link")}}-Element auf ein externes Stylesheet verlinken, das wir dem Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern des Schatten-Roots nicht blokieren, sodass es zu einem Flash ungestylter Inhalte (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder aus einem gemeinsamen Knoten geklont sind oder identischen Text haben, um es ihnen zu ermöglichen, ein einziges zugrunde liegendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Stilen ähnlich sein.

### Angepasste integrierte Elemente

Schauen wir uns nun ein Beispiel für ein angepasstes integriertes Element an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Einklappen der Listenelemente zu unterstützen.

- [Beispiel live sehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie sich das [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attribut-Referenz für Warnhinweise zur Implementierungsrealität angepasster eingebauter Elemente an.

Zuerst definieren wir die Klasse unseres Elements:

```js
// Create a class for the element
class ExpandingList extends HTMLUListElement {
  connectedCallback() {
    // Get ul and li elements that are a child of this custom ul element
    // li elements can be containers if they have uls within them
    const uls = this.querySelectorAll("ul");
    const lis = this.querySelectorAll("li");

    // Hide all child uls
    // These lists will be shown when the user clicks a higher level container
    for (const ul of uls) {
      ul.style.display = "none";
    }

    // Look through each li element in the ul
    for (const li of lis) {
      // If this li has a ul as a child, decorate it and add a click handler
      if (li.querySelectorAll("ul").length > 0) {
        // Add an attribute which can be used by the style
        // to show an open or closed icon
        li.setAttribute("class", "closed");

        // Wrap the li element's text in a new span element
        // so we can assign style and event handlers to the span
        const childText = li.childNodes[0];
        const newSpan = document.createElement("span");

        // Copy text from li to span, set cursor style
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = "pointer";

        // Add click handler to this span
        const onClick = (e) => {
          // next sibling to the span should be the ul
          const nextUl = e.target.nextElementSibling;

          // Toggle visible state and update class attribute on ul
          if (nextUl.style.display === "block") {
            nextUl.style.display = "none";
            nextUl.parentNode.setAttribute("class", "closed");
          } else {
            nextUl.style.display = "block";
            nextUl.parentNode.setAttribute("class", "open");
          }
        };

        newSpan.addEventListener("click", onClick);

        // Add the span and remove the bare text node from the li
        childText.parentNode?.insertBefore(newSpan, childText);
        childText.parentNode?.removeChild(childText);
      }
    }
  }
}
```

Beachten Sie, dass wir dieses Mal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) anstelle von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitern. Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Als nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, außer dass es dieses Mal auch ein Optionsobjekt enthält, das beschreibt, welches Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Web-Dokument sieht auch etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, ausgeführt wird, nachdem das DOM vollständig analysiert wurde, da `connectedCallback()` sofort aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript einschließt:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das `<custom-square>`-autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe von zwei Attributen bestimmt werden, die `"size"` und `"color"` genannt werden.

- [Beispiel live sehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor hängen wir ein Schatten-DOM an das Element an und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente an den Schatten-Root an:

```js
class Square extends HTMLElement {
  // …
  constructor() {
    // Always call super first in constructor
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    const style = document.createElement("style");
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
  // …
}
```

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, bekommt seinen Schatten-Root, findet sein `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("size")}px;
      height: ${elem.getAttribute("size")}px;
      background-color: ${elem.getAttribute("color")};
    }
  `;
}
```

Die tatsächlichen Updates werden alle von den Lebenszyklus-Callbacks gehandhabt. Das `connectedCallback()` läuft jedes Mal, wenn das Element dem DOM hinzugefügt wird — hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat so gestaltet ist, wie in seinen Attributen definiert:

```js
class Square extends HTMLElement {
  // …
  connectedCallback() {
    console.log("Custom square element added to page.");
    updateStyle(this);
  }
  // …
}
```

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Nachrichten an die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt wird oder auf eine andere Seite verschoben wird:

```js
class Square extends HTMLElement {
  // …
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }
  // …
}
```

Das `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie Sie an seinen Parametern sehen können, ist es möglich, auf einzelne Attribute zu reagieren, indem wir uns ihren Namen und die alten sowie neuen Attributwerte ansehen. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats entsprechend der neuen Werte aktualisiert wird:

```js
class Square extends HTMLElement {
  // …
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom square element attributes changed.");
    updateStyle(this);
  }
  // …
}
```

Beachten Sie, dass Sie, um den `attributeChangedCallback()`-Callback auszuführen, wenn sich ein Attribut ändert, die Attribute beobachten müssen. Dies geschieht, indem Sie eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse angeben - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
