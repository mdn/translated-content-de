---
title: Nutzung benutzerdefinierter Elemente
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 27ce46c588f6f1746adccfae333f543dcaf4996c
---

{{DefaultAPISidebar("Web Components")}}

Eine der wichtigsten Eigenschaften von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: also HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und erläutert einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Ihr Verhalten muss von Grund auf neu implementiert werden.

- **Angepasste eingebaute Elemente** erben von standardmäßigen HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standardelements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Siehe das [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is) für weitere Informationen.

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zur Erstellung und Verwendung gleich:

- Sie [implementieren zunächst dessen Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Danach [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite. Sie können auch [registrierte Bereiche](#bereichsspezifische_benutzerdefinierte_element-register) erstellen, um Definitionen auf einen bestimmten DOM-Teilbaum zu beschränken.
- Schließlich können Sie [das benutzerdefinierte Element verwenden](#verwendung_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klass](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der zu anpassenden Schnittstelle (im Fall von angepassten eingebauten Elementen) erweitert wird. Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Direkt nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), sodass Sie Instanzen davon mit standardmäßigen DOM-Praktiken erstellen können, wie z.B. das Schreiben des Elements im HTML-Markup, den Aufruf von [`document.createElement()`](/de/docs/Web/API/Document/createElement), usw.

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den initialen Zustand und die Standardwerte festlegen, Ereignislistener registrieren und möglicherweise eine Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie weder die Attribute oder Kinder des Elements überprüfen, noch neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für benutzerdefinierte Element-Konstruktoren und -Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für das vollständige Set von Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite in bestimmten Weisen mit Ihrem benutzerdefinierten Element interagiert. Durch Bereitstellung einer Implementierung dieser Methoden, die in der Spezifikation _Lebenszyklus-Callbacks_ genannt werden, können Sie Code in Reaktion auf diese Ereignisse ausführen.

Zu den Lebenszyklus-Callbacks für benutzerdefinierte Elemente gehören:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler so weit wie möglich die Einrichtung benutzerdefinierter Elemente in diesem Callback und nicht im Konstruktor implementieren sollten.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird diese _anstelle von_ `connectedCallback()` und `disconnectedCallback()` aufgerufen, wenn das Element an einen anderen Ort im DOM über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verschoben wird. Verwenden Sie dies, um die Ausführung von Initialisierungs-/Aufräumcode in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks zu vermeiden, wenn das Element nicht tatsächlich zum DOM hinzugefügt oder daraus entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandssichernde Verschiebungen](#lebenszyklus-callbacks_und_zustandssichernde_verschiebungen) für weitere Details.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reagieren auf Attributsänderungen](#reagieren_auf_attributsänderungen) für weitere Details zu diesem Callback.

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

#### Lebenszyklus-Callbacks und zustandssichernde Verschiebungen

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden, aber es gibt Lebenszyklus-Nebeneffekte, die zu berücksichtigen sind.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die `disconnectedCallback()`- und `connectedCallback()`-Lebenszyklus-Callbacks ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um jeden erforderlichen Initialisierungs- oder Aufräumcode auszuführen, der zu Beginn oder Ende des Lebenszyklus des Elements ausgeführt werden muss, kann das Ausführen dieser Callbacks beim Verschieben (anstatt beim Entfernen oder Einfügen) Probleme mit dem Zustand verursachen. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements beibehalten möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()`-Lebenszyklus-Callback in der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dadurch wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um zu verhindern, dass die beiden anderen Callbacks ausgeführt werden, oder einige benutzerdefinierte Logik einfügen, um die Verschiebung zu behandeln:

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

Die `define()`-Methode nimmt die folgenden Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte weitere Regeln erfüllen, die in der Spezifikation [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstrukturfunktion für das benutzerdefinierte Element.
- `options`
  - : Nur für angepasste eingebaute Elemente enthalten, handelt es sich um ein Objekt mit einer einzigen Eigenschaft `extends`, die eine Zeichenfolge ist, die das eingebaute Element benennt, das erweitert werden soll.

Beispielsweise registriert dieser Code das `WordCount`-anpassbare eingebaut Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo` autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Bereichsspezifische benutzerdefinierte Element-Register

Die oben genannten Beispiele registrieren benutzerdefinierte Elemente im globalen [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das über [`Window.customElements`](/de/docs/Web/API/Window/customElements) zugänglich ist. Dies bedeutet, dass jeder Name eines benutzerdefinierten Elements, den Sie registrieren, global eindeutig über die gesamte Seite sein muss. Sobald Anwendungen wachsen und beginnen, Komponenten aus mehreren Bibliotheken zu kombinieren, können globale Namenskollisionen zu einem Problem werden – wenn zwei Bibliotheken beide versuchen, `<my-button>` zu definieren, schlägt eine davon fehl.

**Bereichsspezifische benutzerdefinierte Element-Register** lösen dies, indem sie Ihnen ermöglichen, ein unabhängiges Register zu erstellen, dessen Definitionen nur auf einen bestimmten DOM-Teilbaum angewendet werden, wie z.B. ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Verschiedene Schattenbäume können jeweils ihr eigenes Register mit ihren eigenen Definitionen verwenden, selbst wenn sich die Elementnamen überschneiden.

### Erstellung eines bereichsspezifischen Registers

Erstellen Sie ein bereichsspezifisches Register mithilfe des Konstruktors [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) und registrieren Sie Elemente darin mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define), genau wie beim globalen Register:

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
> Bereichsspezifische Register unterstützen die `extends`-Option in `define()` nicht (zum Erstellen [angepasster eingebauter Elemente](#arten_von_benutzerdefinierten_elementen)). Der Versuch, `extends` mit einem bereichsspezifischen Register zu verwenden, führt zu einem `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException).

### Verknüpfung eines bereichsspezifischen Registers mit einer Schattenwurzel

Eine Möglichkeit zur Verwendung eines bereichsspezifischen Registers besteht darin, es über die Option `customElementRegistry` an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zu übergeben. Elemente, die innerhalb dieses Schattenbaums geparst oder erstellt werden, verwenden dann die Definitionen des Bereichsregisters anstelle des globalen:

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

Sie können auch ein bereichsspezifisches Register nach der Erstellung der Schattenwurzel verbinden, indem Sie [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) aufrufen. Dies ist nützlich, wenn Sie zuerst die DOM-Struktur einrichten und das Register später anfügen müssen:

```js
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: null, // no registry yet
});
shadow.innerHTML = "<my-element></my-element>";

// Later, associate the scoped registry and upgrade elements
myRegistry.initialize(shadow);
```

### Deklarativer Schatten-DOM mit bereichsspezifischem Register

Für [deklarativen Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) können Sie das Attribut `shadowrootcustomelementregistry` auf einem {{HTMLElement("template")}}-Element verwenden. Dies teilt dem HTML-Parser mit, die Schattenwurzel als `null` zu belassen, sodass später ein bereichsspezifisches Register mit `initialize()` angefügt werden kann:

```html
<my-host>
  <template shadowrootmode="open" shadowrootcustomelementregistry>
    <my-element></my-element>
  </template>
</my-host>
```

## Reagieren auf Attributsänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Werts eines Attributs zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array enthalten, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der Eigenschaft `observedAttributes` des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Den Namen des Attributs, das sich geändert hat.
- Den alten Wert des Attributs.
- Den neuen Wert des Attributs.

Beispielsweise beobachtet dieses autonome Element ein `size`-Attribut und protokolliert die alten und neuen Werte, wenn sie sich ändern:

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

Beachten Sie, dass `attributeChangedCallback()` aufgerufen wird, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal geparst wird. Also wird im folgenden Beispiel `attributeChangedCallback()` aufgerufen, wenn das DOM geparst wird, selbst wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein komplettes Beispiel zur Nutzung von `attributeChangedCallback()` siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und CSS-Selektoren für benutzerdefinierte Zustands-Pseudoklassen

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mithilfe von HTML oder JavaScript gesetzt werden, während andere intern sind und nicht.
Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende Elemente) erlauben es Ihnen außerdem, Zustände zu definieren und diese mit der {{cssxref(":state()")}}-Pseudoklassenfunktion auszuwählen.
Der untenstehende Code zeigt, wie dies am Beispiel eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugang zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet.
Der Setter für den (internen) collapsed-Zustand fügt den _Identifikator_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Identifikator ist einfach eine Zeichenfolge: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn ebenso gut `collapsed` nennen können.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifikator verwenden, um den benutzerdefinierten Zustand des Elements abzugleichen.
Dies wird erreicht, indem der Identifikator an die {{cssxref(":state()")}}-Pseudoklasse übergeben wird.
Zum Beispiel wählen wir unten den `hidden`-Zustand mit dem `:hidden`-Selektor aus (und damit den `collapsed`-Zustand des Elements) und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der {{cssxref(":host()")}}-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()`-Pseudoklasse nach dem {{cssxref("::part()")}}-Pseudo-Element verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements auszuwählen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im weiteren Verlauf dieses Leitfadens werfen wir einen Blick auf einige Beispiel- benutzerdefinierte Elemente. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden und sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst betrachten wir ein autonomes benutzerdefiniertes Element. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildicon und eine Textzeichenfolge als Attribute und bettet das Icon in die Seite ein. Wenn das Icon fokussiert wird, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zu Beginn definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Klasse erweitert.

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

Die Klassendefinition enthält den [`Konstruktor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die richtige Prototypenkette zu etablieren.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element haben wird, wenn es mit dem DOM verbunden wird. In diesem Fall fügen wir dem benutzerdefinierten Element eine Schattenwurzel hinzu, verwenden etwas DOM-Manipulation, um die interne Struktur des Schatten-DOMs des Elements zu erstellen – die dann an die Schattenwurzel angefügt wird – und fügen schließlich etwas CSS an die Schattenwurzel an, um es zu stylen. Wir erledigen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mithilfe der `define()`-Methode, die wir vorher erwähnt haben – in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt verfügbar, um auf unserer Seite verwendet zu werden. In unserem HTML verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzierung externer Stile

Im obigen Beispiel wenden wir Stile auf das Schatten-DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element so ändern, dass ein externes Stylesheet verwendet wird.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
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

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, mit dem Unterschied, dass wir ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verlinken, das wir dem Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern der Schattenwurzel nicht blockieren, sodass es zu einem Flash ungestylter Inhalte (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont oder identischen Text haben, um ihnen zu ermöglichen, ein gemeinsames Hintergrund-Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun werfen wir einen Blick auf ein angepasstes eingebautes Elementbeispiel. Dieses Beispiel erweitert das eingebaut {{HTMLElement("ul")}}-Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie sich die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributreferenz für Einschränkungen in der Implementierungsrealität von angepassten eingebauten Elementen an.

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

Beachten Sie, dass wir diesmal von [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erben, anstatt von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der Großteil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Dann registrieren wir das Element mit der `define()`-Methode wie zuvor, außer dass diesmal auch ein Optionsobjekt enthalten ist, das beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht auch etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben aber den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript zur Definition unseres benutzerdefinierten Elements nach dem vollständigen Parsen des DOMs ausgeführt wird, weil `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste zum DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden. Die `querySelectorAll()`-Aufrufe finden also keine Elemente. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` genannt werden.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Schatten-DOM hinzu und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente an die Schattenwurzel an:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält seine Schattenwurzel, findet sein `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

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

Die tatsächlichen Updates werden alle von den Lebenszyklus-Callbacks behandelt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird – hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat so gestylt ist, wie es in seinen Attributen definiert ist:

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

Die `disconnectedCallback()`- und `adoptedCallback()`-Callbacks protokollieren Nachrichten an die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf einzelne Attribute zu reagieren, indem Sie auf ihren Namen und ihre alten und neuen Attributwerte schauen. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats entsprechend den neuen Werten aktualisiert wird:

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

Beachten Sie, dass der `attributeChangedCallback()`-Callback ausgelöst wird, wenn sich ein Attribut ändert, Sie die Attribute jedoch beobachten müssen. Dies wird durch Angabe einer `static get observedAttributes()`-Methode innerhalb der Klasse des benutzerdefinierten Elements erreicht - diese sollte ein Array zurückgeben, das die Namen der zu beobachtenden Attribute enthält:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
