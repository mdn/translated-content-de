---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptfunktionen von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die das Set der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und erklärt einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen ihr Verhalten von Grund auf neu implementieren.

- **Angepasste integrierte Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Weitere Informationen finden Sie im [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is).

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zu deren Erstellung und Verwendung gleich:

- Sie [implementieren zuerst das Verhalten](#implementierung_eines_benutzerdefinierten_elements) durch die Definition einer JavaScript-Klasse.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite.
- Schließlich können Sie das benutzerdefinierte Element in Ihrem HTML- oder JavaScript-Code [verwenden](#verwendung_eines_benutzerdefinierten_elements).

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die entweder [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder die zu erweiternde Schnittstelle (im Fall von angepassten integrierten Elementen) erweitert. Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), damit Sie Instanzen davon mithilfe der gängigen DOM-Techniken, wie dem Schreiben des Elements in HTML-Markup, dem Aufruf von [`document.createElement()`](/de/docs/Web/API/Document/createElement), etc. erstellen können.

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand festlegen und Standardwerte setzen, Ereignis-Listener registrieren und möglicherweise einen Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie nicht die Attribute oder Kinder des Elements inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen an Konstruktoren und Reaktionen von benutzerdefinierten Elementen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Reihe an Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite auf Ihr benutzerdefiniertes Element in bestimmter Weise interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die von der Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet werden, können Sie Code als Antwort auf diese Ereignisse ausführen.

Zu den Lebenszyklus-Callbacks für benutzerdefinierte Elemente gehören:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler, soweit möglich, die Einrichtung der benutzerdefinierten Elemente in diesem Callback anstatt im Konstruktor implementieren sollten.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle_ von `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM verschoben wird, z.B. über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore). Verwenden Sie dies, um die Ausführung von Initialisierungs-/Aufräumcodes in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks zu vermeiden, wenn das Element nicht tatsächlich zum oder vom DOM hinzugefügt oder entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Weitere Informationen zu diesem Callback finden Sie unter [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen).

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

Die Position eines benutzerdefinierten Elements im DOM kann wie bei regulären HTML-Elementen manipuliert werden, aber es sind dabei Lebenszyklus-Nebeneffekte zu berücksichtigen.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (z.B. über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die `disconnectedCallback()` und `connectedCallback()`-Lebenszyklus-Callbacks ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um erforderlichen Initialisierungs- oder Aufräumcode zum Start oder Ende des Lebenszyklus des Elements zu implementieren, kann es zu Problemen mit seinem Zustand führen, wenn sie ausgeführt werden, wenn das Element verschoben (anstatt entfernt oder eingefügt) wird. Beispielsweise könnten Sie einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()` Lebenszyklus-Callback in der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (statt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dadurch wird das `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um zu verhindern, dass die anderen beiden Callbacks ausgeführt werden, oder etwas benutzerdefinierte Logik einbauen, um die Verschiebung zu handhaben:

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

Die `define()`-Methode nimmt die folgenden Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und weitere Regeln erfüllen, die in der [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) der Spezifikation aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Wird nur für angepasste integrierte Elemente eingeschlossen. Dies ist ein Objekt, das eine einzige Eigenschaft `extends` enthält, die einen String mit dem Namen des zu erweiternden integrierten Elements ist.

Zum Beispiel registriert dieser Code das `WordCount`-angepasste integrierte Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome `PopupInfo`-benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes integriertes Element zu verwenden, verwenden Sie das integrierte Element, jedoch mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen wie ein integriertes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie integrierte Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv nutzen zu können, muss ein Element in der Lage sein, auf Änderungen des Werts eines Attributs zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Elemente zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array mit den Namen aller Attribute sein, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, modifiziert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Der Name des Attributs, das sich geändert hat.
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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal geparst wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn der DOM geparst wird, selbst wenn das Attribut später nie mehr geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie "hover", "disabled" und "read only". Einige dieser Zustände können als Attribute mit HTML oder JavaScript festgelegt werden, während andere intern sind und nicht festgelegt werden können. Unabhängig davon haben diese Zustände häufig entsprechende CSS [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element zu selektieren und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende Elemente) erlauben es Ihnen auch, Zustände zu definieren und gegen diese mit der {{cssxref(":state()")}} Pseudoklassenfunktion auszuwählen.
Der folgende Code zeigt, wie dies mit einem Beispiel eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft dargestellt (mit Setzer- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS wählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft bietet. Der Setter für den (internen) `collapsed`-Zustand fügt dem `CustomStateSet` den _Bezeichner_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist. Der Bezeichner ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Bezeichner verwenden, um den benutzerdefinierten Zustand des Elements zu vergleichen. Dies wird erreicht, indem der Bezeichner an die {{cssxref(":state()")}} Pseudoklasse übergeben wird. Zum Beispiel selektieren wir unten auf den `hidden` Zustand, der auf `true` ist (und daher der `collapsed`-Zustand des Elements), unter Verwendung des `:hidden` Selektors und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der {{cssxref(":host()")}} Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb eines Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()` Pseudoklasse nach dem {{cssxref("::part()")}} Pseudoelement verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines in einem bestimmten Zustand befindlichen benutzerdefinierten Elements abzugleichen.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiele für benutzerdefinierte Elemente ansehen. Sie können den Quellcode für alle diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository finden, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, wird der Text in einem Popup-Informationsfeld angezeigt, um weitere kontextbezogene Informationen bereitzustellen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zunächst wird im JavaScript eine Klasse namens `PopupInfo` definiert, die die Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypen-Kette herzustellen.

Im Inneren der Methode `connectedCallback()` definieren wir alle Funktionen, die das Element beim Verbinden mit dem DOM haben wird. In diesem Fall fügen wir dem benutzerdefinierten Element einen Schatten-Root hinzu, verwenden einige DOM-Manipulationen, um die interne Schatten-DOM-Struktur des Elements zu erstellen — die dann an den Schatten-Root angefügt wird — und fügen schließlich etwas CSS hinzu, um es zu stylen. Diese Arbeit wird nicht im Konstruktor erledigt, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mithilfe der `define()` Methode, die wir zuvor erwähnt haben — in den Parametern geben wir den Elementnamen an und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es steht nun auf unserer Seite zur Verfügung. In unserem HTML verwenden wir es folgendermaßen:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Externe Styles referenzieren

Im obigen Beispiel wenden wir Stile auf das Schatten-DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können stattdessen ein externes Stylesheet aus einem {{htmlelement("link")}}-Element verlinken. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

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

Es ist wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir mit einem {{HTMLElement("link")}}-Element, das wir dem Schatten-DOM hinzufügen, auf ein externes Stylesheet verlinken.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern des Schatten-Roots nicht blockieren, sodass es ein ungestyltes Inhaltsblitzen (FOUC) geben könnte, während das Stylesheet lädt.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont werden oder identischen Text haben, um ihnen zu ermöglichen, ein einzelnes Stylesheet im Hintergrund zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste integrierte Elemente

Nun lassen Sie uns ein Beispiel für ein angepasstes integriertes Element betrachten. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}} Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die Referenz des [`is`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/is) für Hinweise auf die Implementierungsrealität von angepassten integrierten Elementen.

Zuerst definieren wir die Klasse des Elements:

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

Beachten Sie, dass wir diesmal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) anstelle von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitern. Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()` Lebenszyklus-Callback.

Als nächstes registrieren wir das Element mit der `define()` Methode wie zuvor, außer dass dieses Mal auch ein Optionsobjekt enthalten ist, das beschreibt, welches Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, spezifizieren aber den Namen des benutzerdefinierten Elements innerhalb des `is`-Attributs.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, nach dem Parsen des gesamten DOM ausgeführt wird, weil `connectedCallback()` sofort aufgerufen wird, wenn die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt seine Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut in der Zeile hinzuzufügen, die das Skript einbezieht:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur ein Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autarke benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die den Namen `"size"` und `"color"` tragen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Schatten-DOM hinzu und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente dem Schatten-Root hinzu:

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

Die Hauptfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, holt sich den Schatten-Root, findet dessen `<style>`-Element und fügt dem Stil {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} hinzu.

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

Die tatsächlichen Updates werden alle durch die Lebenszyklus-Callbacks gehandhabt. Das `connectedCallback()` läuft jedes Mal, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat gemäß seinen Attributen gestylt ist:

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

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Meldungen in der Konsole, um uns mitzuteilen, wann das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback läuft jedes Mal, wenn eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie Sie anhand der Parameter sehen können, ist es möglich, individuell auf Attribute zu reagieren, je nach deren Namen und alten sowie neuen Attributwerten. In diesem Fall führen wir jedoch nur die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass um den `attributeChangedCallback()`-Callback auszuführen, Sie die Attribute beobachten müssen. Dies geschieht durch die Spezifikation einer `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse - diese sollte ein Array zurückgeben, das die Namen der zu beobachtenden Attribute enthält:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
