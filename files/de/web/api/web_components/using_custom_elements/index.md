---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die das Set an Elementen erweitern, das im Browser verfügbar ist.

Dieser Artikel führt in benutzerdefinierte Elemente ein und geht durch einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Basis-Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf implementieren.

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Siehe das [`is` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is) für weitere Informationen.

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zur Erstellung und Verwendung dieselben:

- Sie [implementieren zuerst dessen Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite.
- Schließlich können Sie [das benutzerdefinierte Element verwenden](#verwenden_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten (im Fall von angepassten eingebauten Elementen) erweitert wird. Diese Klasse wird nicht von Ihnen, sondern vom Browser aufgerufen. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), sodass Sie Instanzen davon mit Standard-DOM-Praktiken erstellen können, wie z.B. durch Schreiben des Elements in HTML-Markup oder Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement), usw.

Hier ist die Implementierung eines minimalen benutzerdefinierten Elements, das das {{HTMLElement("p")}} Element anpasst:

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den anfänglichen Zustand und Standardwerte festlegen, Ereignislistener registrieren und möglicherweise ein Schatten-DOM erstellen. Zu diesem Zeitpunkt sollten Sie keine Inspektion der Attribute oder Kinder des Elements durchführen oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen an Konstruktoren und Reaktionen von benutzerdefinierten Elementen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für den vollständigen Satz von Anforderungen.

### Lebenszyklus-Callbacks von benutzerdefinierten Elementen

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite auf Ihr benutzerdefiniertes Element auf bestimmte Weise reagiert. Durch die Bereitstellung einer Implementierung dieser Methoden, die die Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler die Einrichtung benutzerdefinierter Elemente soweit möglich in diesem Callback anstelle des Konstruktors implementieren sollten.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle von_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM verschoben wird über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore). Verwenden Sie dies, um zu vermeiden, Initialisierungs-/Bereinigungscode in den `connectedCallback()` und `disconnectedCallback()` Callbacks auszuführen, wenn das Element nicht tatsächlich in das DOM eingefügt oder entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen) für weitere Details zu diesem Callback.

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

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden,aber dabei sind Lebenszyklus-Nebeneffekte zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, weil das Element aus dem DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um gegebenenfalls erforderlichen Initialisierungs- oder Bereinigungscode am Anfang oder Ende des Lebenszyklus des Elements auszuführen, kann das Ausführen dieser Callbacks, wenn das Element verschoben (anstatt entfernt oder eingefügt) wird, Probleme mit seinem Zustand verursachen. Beispielsweise könnten Sie einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie einen `connectedMoveCallback()` Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) Methode verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass der `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten einen leeren `connectedMoveCallback()` hinzufügen, um das Ausführen der anderen beiden Callbacks zu stoppen, oder einige benutzerdefinierte Logik einfügen, um die Verschiebung zu behandeln:

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

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die [`define()`](/de/docs/Web/API/CustomElementRegistry/define) Methode von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()` Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der Spezifikation in der [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgelistet sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste eingebaute Elemente enthalten, handelt es sich um ein Objekt, das eine Eigenschaft `extends` enthält, die ein String ist, der das zu erweiternde eingebauten Element benennt.

Zum Beispiel registriert dieser Code das `WordCount` angepasste eingebaute Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo` autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwenden eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen einfach wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu verwenden, muss ein Element auf Änderungen des Attributwerts reagieren können. Um dies zu tun, muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array enthalten, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Cbacks.

Der `attributeChangedCallback()` Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements enthalten ist, hinzugefügt, modifiziert, entfernt oder ersetzt wird.

Dem Callback werden drei Argumente übergeben:

- Der Name des Attributs, das verändert wurde.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size` Attribut überwachen und die alten und neuen Werte protokollieren, wenn sie sich ändern:

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

Beachten Sie, dass `attributeChangedCallback()` aufgerufen wird, wenn die HTML-Deklaration des Elements ein überwachten Attribut enthält, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal geparst wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM geparst wird, selbst wenn das Attribut nie geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel für die Verwendung von `attributeChangedCallback()` finden Sie in [Lebenszyklus-Cbacks](#lebenszyklus-cbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und CSS-Selektoren für benutzerdefinierte Status-Pseudoklassen

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only". Einige dieser Zustände können über HTML oder JavaScript als Attribute gesetzt werden, während andere intern und nicht setzbar sind. Ob extern oder intern, in der Regel haben diese Zustände entsprechende CSS [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element im jeweiligen Zustand auszuwählen und zu stylen.

Autonome benutzerdefinierte Elemente (aber nicht Elemente, die auf eingebauten Elementen basieren) ermöglichen es Ihnen auch, Zustände zu definieren und mit der [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklassenfunktion dagegen zu selektieren. Der folgende Code zeigt, wie dies funktioniert, indem das Beispiel eines autonomen benutzerdefinierten Elements verwendet wird, das einen internen Zustand "collapsed" hat.

Der `collapsed` Zustand wird als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt zu verbinden, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft bietet. Der Setter für den (internen) Zustand `collapsed` fügt das _Identifikator_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt dies, wenn der Zustand `false` ist. Der Identifikator ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den Identifikator, der dem `CustomStateSet` des benutzerdefinierten Elements (`this._internals.states`) hinzugefügt wurde, verwenden, um den benutzerdefinierten Zustand des Elements abzugleichen. Dies wird erreicht, indem der Identifikator an die [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklasse übergeben wird. Zum Beispiel wählen wir unten den `hidden` Zustand, wenn er wahr ist (und damit den `collapsed` Zustand des Elements), unter Verwendung des `:hidden` Selektors aus, und entfernen den Rahmen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu erfassen. Zusätzlich kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiel-Benutzerdefinierte-Elemente ansehen. Sie finden den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst sehen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationsfenster an, um weitere Kontextinformationen bereitzustellen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zu Beginn definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Klasse erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypenkette herzustellen.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem benutzerdefinierten Element ein Schatten-DOM hinzu, verwenden etwas DOM-Manipulation, um die interne Struktur des Schattendoms des Elements zu erstellen — die dann an das Schattendoms angehängt wird — und schließlich fügen wir dem Schatten-DOM etwas CSS hinzu, um es zu stylen. Wir führen diese Arbeit nicht im Konstruktor aus, da die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` unter Verwendung der zuvor erwähnten `define()` Methode — in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist nun verfügbar, um auf unserer Seite verwendet zu werden. In unserem HTML verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzierung externer Styles

Im obigen Beispiel wenden wir Styles auf das Schatten-DOM an, indem wir ein {{htmlelement("style")}} Element verwenden, aber Sie können ein externes Stylesheet von einem {{htmlelement("link")}} Element aus referenzieren. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element so modifizieren, dass es ein externes Stylesheet verwendet.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

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

Es ist genau wie das ursprüngliche `<popup-info>` Beispiel, außer dass wir ein externes Stylesheet mit einem {{HTMLElement("link")}} Element verknüpfen, das wir dem Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}} Elemente die Anzeige des Schattendoms nicht blockieren, sodass es während des Ladens des Stylesheets zu einem "Flash Of Unstyled Content" (FOUC) kommen kann.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}} Tags, die entweder von einem gemeinsamen Knoten geklont wurden oder die identischen Text haben, um ihnen das Teilen eines einzelnen zugrunde liegenden Stylesheets zu ermöglichen. Mit dieser Optimierung sollten die Leistung von externen und internen Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun werfen wir einen Blick auf ein Beispiel für ein angepasstes eingebautes Element. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}} Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie im [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attributverweis nach, um die Realitätsnachteile der Implementierung von angepassten eingebauten Elementen zu erfahren.

Zuerst definieren wir die Klasse unseres Elements:

```js
// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    // Return value from super() is a reference to this element
    self = super();
  }

  connectedCallback() {
    // Get ul and li elements that are a child of this custom ul element
    // li elements can be containers if they have uls within them
    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));
    // Hide all child uls
    // These lists will be shown when the user clicks a higher level container
    uls.forEach((ul) => {
      ul.style.display = "none";
    });

    // Look through each li element in the ul
    lis.forEach((li) => {
      // If this li has a ul as a child, decorate it and add a click handler
      if (li.querySelectorAll("ul").length > 0) {
        // Add an attribute which can be used  by the style
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
        newSpan.addEventListener("click", (e) => {
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
        });
        // Add the span and remove the bare text node from the li
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }
}
```

Beachten Sie, dass wir diesmal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) anstelle von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitern. Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor erfolgt der größte Teil des Codes im `connectedCallback()` Lebenszyklus-Callback.

Als nächstes registrieren wir das Element mit der `define()` Methode wie zuvor, aber diesmal beinhaltet es auch ein Optionsobjekt, das angibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>` Element wie gewohnt, aber geben den Namen des benutzerdefinierten Elements innerhalb des `is` Attributs an.

Beachten Sie, dass in diesem Fall sichergestellt sein muss, dass das Skript, das unser benutzerdefiniertes Element definiert, ausgeführt wird, nachdem das DOM vollständig analysiert wurde, da `connectedCallback()` sofort aufgerufen wird, wenn die erweiternde Liste dem DOM hinzugefügt wird und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()` Aufrufe keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer) Attribut zur Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Cbacks

Bisher haben wir nur ein Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome `<custom-square>` benutzerdefiniertes Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die "size" und "color" heißen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Konstruktor der Klasse fügen wir dem Element ein Schatten-DOM hinzu, dann fügen wir leere {{htmlelement("div")}} und {{htmlelement("style")}} Elemente zur Schattenwurzel hinzu:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält seine Schattenwurzel, findet sein `<style>` Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

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

Die tatsächlichen Updates werden alle von den Lebenszyklus-Cbacks gehandhabt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()` Funktion aus, um sicherzustellen, dass das Quadrat nach den in seinen Attributen definierten Vorgaben gestylt ist:

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

Die `disconnectedCallback()` und `adoptedCallback()` Cbacks protokollieren Nachrichten in die Konsole, um uns mitzuteilen, wann das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()` Callback wird immer dann ausgeführt, wenn eines der Attribute des Elements auf irgendeine Weise verändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, individuell auf Attribute zu reagieren, indem man sich deren Namen, alten und neuen Attributwerte ansieht. In diesem Fall jedoch führen wir nur die `updateStyle()` Funktion wieder aus, um sicherzustellen, dass der Style des Quadrats entsprechend der neuen Werte aktualisiert wird:

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

Beachten Sie, dass, um den `attributeChangedCallback()` Callback auszulösen, wenn ein Attribut verändert wird, Sie die Attribute beobachten müssen. Dies erfolgt, indem eine `static get observedAttributes()` Methode in der benutzerdefinierten Elementklasse angegeben wird - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
