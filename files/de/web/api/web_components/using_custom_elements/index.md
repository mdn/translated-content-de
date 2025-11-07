---
title: Verwendung benutzerdefinierter Elemente
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptfunktionen von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: das heißt, HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die die Menge der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und geht durch einige Beispiele.

## Arten benutzerdefinierter Elemente

Es gibt zwei Arten benutzerdefinierter Elemente:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Ihr Verhalten muss von Grund auf implementiert werden.

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Weitere Informationen finden Sie im [`is` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is).

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zur Erstellung und Verwendung gleich:

- Zuerst [implementieren Sie das Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite.
- Schließlich können Sie das [benutzerdefinierte Element in Ihrem HTML- oder JavaScript-Code verwenden](#verwendung_eines_benutzerdefinierten_elements).

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Falle autonomer Elemente) oder der Schnittstelle, die Sie anpassen möchten, erweitert wird (im Falle von angepassten eingebauten Elementen). Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), damit Sie Instanzen davon mit Standard-DOM-Praktiken erstellen können, wie das Schreiben des Elements in HTML-Markup, der Aufruf von [`document.createElement()`](/de/docs/Web/API/Document/createElement) usw.

Hier ist die Umsetzung eines minimalen benutzerdefinierten Elements, das das {{HTMLElement("p")}} Element anpasst:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Hier ist die Umsetzung eines minimalen autonomen benutzerdefinierten Elements:

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und Standardwerte festlegen, Ereignislistener registrieren und möglicherweise eine Schattenwurzel erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für Konstruktoren und Reaktionen benutzerdefinierter Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für den vollständigen Satz an Anforderungen.

### Lebenszyklus-Callbacks von benutzerdefinierten Elementen

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf Ihr benutzerdefiniertes Element auf bestimmte Weise interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die die Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet, können Sie Code als Antwort auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks von benutzerdefinierten Elementen umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler soweit wie möglich das Setup des benutzerdefinierten Elements in diesem Callback und nicht im Konstruktor implementieren.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle von_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verschoben wird. Verwenden Sie dies, um zu vermeiden, dass Initialisierungs-/Bereinigungscode in den `connectedCallback()` und `disconnectedCallback()`-Callbacks ausgeführt wird, wenn das Element nicht tatsächlich zum oder vom DOM hinzugefügt oder entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Bewegungen](#lebenszyklus-callbacks_und_zustandserhaltende_bewegungen) für weitere Details.
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

#### Lebenszyklus-Callbacks und zustandserhaltende Bewegungen

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden, jedoch gibt es zu berücksichtigende Lebenszyklus-Nebenwirkungen.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, weil das Element vom DOM getrennt und neu verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch normalerweise verwendet werden, um erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt wird, kann das Ausführen dieser, wenn das Element verschoben (anstatt entfernt oder eingefügt) wird, Probleme mit seinem Zustand verursachen. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements bewahren möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()`-Lebenszyklus-Callback in der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstelle ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dadurch wird das `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um das Ausführen der beiden anderen Callbacks zu verhindern, oder einige individuelle Logik einfügen, um die Bewegung zu handhaben:

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

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte weitere Regeln erfüllen, die in der Spezifikation zur [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste eingebaute Elemente enthalten, ist dies ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die ein String ist, der das eingebaute Element benennt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das `WordCount` angepasste eingebaute Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo` autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen genau wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen im Wert eines Attributs zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für das das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der Eigenschaft `observedAttributes` des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Der Name des Attributs, das geändert wurde.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

Zum Beispiel beobachtet dieses autonome Element ein `size`-Attribut und protokolliert die alten und neuen Werte, wenn sie sich ändern:

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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, der `attributeChangedCallback()`-Callback aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. So wird im folgenden Beispiel der `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, selbst wenn das Attribut danach nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel für die Verwendung von `attributeChangedCallback()` finden Sie unter [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only". Einige dieser Zustände können als Attribute mit HTML oder JavaScript gesetzt werden, während andere intern sind und dies nicht können. Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu gestalten, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (jedoch nicht auf eingebauten Elementen basierende) ermöglichen es Ihnen auch, Zustände zu definieren und gegen sie mit der [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklassen-Funktion auszuwählen. Der unten stehende Code zeigt, wie dies mithilfe des Beispiels eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft dargestellt (mit Getter- und Setter-Methoden), die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet. Der Setter für den (internen) collapsed-Zustand fügt das _Kennzeichen_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt es, wenn der Zustand `false` ist. Das Kennzeichen ist einfach eine Zeichenfolge: In diesem Fall haben wir es `hidden` genannt, aber wir könnten es genauso gut `collapsed` genannt haben.

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

Wir können das zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügte Kennzeichen verwenden, um den benutzerdefinierten Zustand des Elements abzugleichen. Dies wird abgeglichen, indem das Kennzeichen an die [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklasse übergeben wird. Im folgenden Beispiel wählen wir zum Beispiel den `hidden`-Zustand, der wahr ist (und somit den `collapsed`-Zustand des Elements), mit dem `:hidden`-Selektor aus und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement verwendet werden, um die [Schatten-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiele für benutzerdefinierte Elemente ansehen. Den Quellcode für all diese Beispiele und mehr finden Sie im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository und Sie können sich alle Live-Exemplare unter <https://mdn.github.io/web-components-examples/> ansehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst betrachten wir ein autonomes benutzerdefiniertes Element. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und eine Textzeichenfolge als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert wird, wird der Text in einem Popup-Informationsfeld angezeigt, um weitere kontextbezogene Informationen bereitzustellen.

- [Siehe das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Siehe den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

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

Die Klassen-Definition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototyp-Kette festzulegen.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element haben wird, wenn es an das DOM angeschlossen wird. In diesem Fall fügen wir ein Schattenwurzel zum benutzerdefinierten Element hinzu, verwenden DOM-Manipulation, um die interne Schatten-DOM-Struktur des Elements zu erstellen - die dann an die Schattenwurzel angefügt wird - und schließlich fügen wir einige CSS zur Schattenwurzel hinzu, um sie zu stylen. Wir tun dies nicht im Konstruktor, da die Attribute eines Elements nicht verfügbar sind, bis es an das DOM angeschlossen wird.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der zuvor erwähnten Methode `define()` - in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt auf unserer Seite verfügbar. In unserem HTML verwenden wir es folgendermaßen:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzierung externer Styles

Im obigen Beispiel wenden wir Stile auf das Schatten-DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel modifizieren wir das `<popup-info>` benutzerdefinierte Element, um ein externes Stylesheet zu verwenden.

- [Siehe das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Siehe den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

Hier ist die Klasse Definition:

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

Es ist genauso wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir auf ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verlinken, das wir zum Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern der Schattenwurzel nicht blockieren, sodass es eine Phase ungestylten Inhalts (FOUC) geben kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont werden oder identischen Text haben, um ihnen zu ermöglichen, ein einzelnes unterstützendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun lassen Sie uns ein angepasstes eingebautes Element betrachten. In diesem Beispiel wird das eingebaute {{HTMLElement("ul")}} Element erweitert, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Siehe das Beispiel live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Siehe den Quellcode](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attribut-Referenz für Hinweise auf die Implementierungsrealität von angepassten eingebauten Elementen.

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

Beachten Sie, dass diesmal statt [`HTMLElement`](/de/docs/Web/API/HTMLElement) die [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) Klasse erweitert wird. Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Als nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, nur dass es diesmal auch ein Optionen-Objekt enthält, das detailliert beschreibt, welches Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung das eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass in diesem Fall sichergestellt werden muss, dass das Skript, das unser benutzerdefiniertes Element definiert, nach dem vollständigen Parsen des DOMs ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt noch keine Kinder hinzugefügt wurden, sodass die Anrufe an `querySelectorAll()` keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut der Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das `<custom-square>` autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die "size" und "color" heißen.

- [Siehe das Beispiel live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Siehe den Quellcode](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Konstruktor der Klasse fügen wir dem Element ein Schatten-DOM hinzu und dann ein leeres {{htmlelement("div")}} und {{htmlelement("style")}}-Element an die Schattenwurzel:

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

Die Hauptfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält die Schattenwurzel, findet ihr `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}}, und {{cssxref("background-color")}} zum Stil hinzu.

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

Die tatsächlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks gehandhabt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird — hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat wie in seinen Attributen definiert gestylt ist:

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

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Nachrichten in die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie an seinen Parametern sehen können, ist es möglich, individuell auf Attribute zu reagieren, indem Sie ihren Namen, den alten und den neuen Attributwert betrachten. In diesem Fall führen wir jedoch einfach die Funktion `updateStyle()` erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, um den `attributeChangedCallback()`-Callback beim Ändern eines Attributs auszulösen, die Attribute beobachtet werden müssen. Dies wird durch die Spezifikation einer `static get observedAttributes()`-Methode innerhalb der Klasse des benutzerdefinierten Elements durchgeführt - diese sollte ein Array zurückgeben, das die Namen der zu beobachtenden Attribute enthält:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
