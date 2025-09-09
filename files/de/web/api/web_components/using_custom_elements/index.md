---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 56f5609d323467cd08eeaddc57e4490a02be1889
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Webkomponenten ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die das verfügbare Set von Elementen im Browser erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und enthält einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen ihr Verhalten von Grund auf implementieren.

- **Angepasste integrierte Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Siehe das [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is) für weitere Informationen.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder die zu erweiternde Schnittstelle (im Fall von angepassten integrierten Elementen) erweitert.

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

Im Klassen-[Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den Anfangszustand und die Standardwerte festlegen, Ereignislistener registrieren und möglicherweise einen Shadow Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für Konstruktoren und Reaktionen von benutzerdefinierten Elementen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für das vollständige Set an Anforderungen.

### Lebenszyklus-Rückrufe für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite in bestimmter Weise mit Ihrem benutzerdefinierten Element interagiert. Durch die Bereitstellung einer Implementierung dieser Methoden, die in der Spezifikation als _Lebenszyklus-Rückrufe_ bezeichnet werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Zu den Lebenszyklus-Rückrufen für benutzerdefinierte Elemente gehören:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler benutzerdefinierte Element-Einrichtungen, soweit möglich, in diesem Rückruf statt im Konstruktor implementieren sollten.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wird, wenn definiert, _anstelle von_ `connectedCallback()` und `disconnectedCallback()` aufgerufen, wenn das Element zu einem anderen Ort im DOM per [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verschoben wird. Verwenden Sie dies, um zu verhindern, dass Initialisierungs-/Bereinigungscode in den `connectedCallback()`- und `disconnectedCallback()`-Rückrufen ausgeführt wird, wenn das Element nicht tatsächlich dem DOM hinzugefügt oder daraus entfernt wird. Weitere Details finden Sie unter [Lebenszyklus-Rückrufe und zustandserhaltende Verschiebungen](#lebenszyklus-rückrufe_und_zustandserhaltende_verschiebungen).
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Weitere Details zu diesem Rückruf finden Sie unter [Reaktion auf Attributänderungen](#reaktion_auf_attributänderungen).

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

#### Lebenszyklus-Rückrufe und zustandserhaltende Verschiebungen

Die Position eines benutzerdefinierten Elements im DOM kann genauso wie jedes reguläre HTML-Element manipuliert werden, es sind jedoch Lebenszyklus-Nebenwirkungen zu berücksichtigen.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Rückrufe `disconnectedCallback()` und `connectedCallback()` ausgelöst, weil das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Rückrufe jedoch typischerweise verwendet werden, um erforderliche Initialisierungs- oder Bereinigungscode am Anfang oder Ende des Lebenszyklus des Elements auszuführen, kann das Ausführen dieser Rückrufe, wenn das Element verschoben (statt entfernt oder eingefügt) wird, Probleme mit seinem Zustand verursachen. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements beibehalten möchten, können Sie dies tun, indem Sie einen `connectedMoveCallback()`-Lebenszyklus-Rückruf innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass der `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten einen leeren `connectedMoveCallback()` hinzufügen, um das Ausführen der anderen beiden Rückrufe zu stoppen, oder benutzerdefinierte Logik hinzufügen, um die Verschiebung zu handhaben:

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

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der Spezifikation unter [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste integrierte Elemente enthalten, ist dies ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die ein String ist, der das eingebaute Element benennt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das `WordCount` angepasste integrierte Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo` autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes, integriertes Element zu verwenden, verwenden Sie das integrierte Element, jedoch mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reaktion auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element Änderungen im Wert eines Attributs erkennen können. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Rückrufs.

Der `attributeChangedCallback()`-Rückruf wird dann immer aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Rückruf erhält drei Argumente:

- Den Namen des Attributs, das sich geändert hat.
- Den alten Wert des Attributs.
- Den neuen Wert des Attributs.

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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements erstmals analysiert wird. In dem folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, selbst wenn das Attribut anschließend nie mehr geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel zur Verwendung von `attributeChangedCallback()` finden Sie unter [Lebenszyklus-Rückrufe](#lebenszyklus-rückrufe) auf dieser Seite.

### Benutzerdefinierte Zustände und CSS-Selektoren für benutzerdefinierte Zustandspseudoklassen

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only". Einige dieser Zustände können als Attribute mit HTML oder JavaScript gesetzt werden, während andere intern sind und dies nicht können. Ob extern oder intern, üblicherweise haben diese Zustände entsprechende CSS-[Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element zu selektieren und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht Elemente, die auf eingebauten Elementen basieren) ermöglichen es Ihnen auch, Zustände zu definieren und diese mithilfe der [`:state()`](/de/docs/Web/CSS/:state) Pseudoklassenfunktion zu selektieren. Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS wählbar zu machen, ruft das benutzerdefinierte Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) bereitstellt. Der Setter für den (internen) kollabierten Zustand fügt dem `CustomStateSet` das _Identifikator_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist. Der Identifikator ist nur ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir könnten ihn genauso gut `collapsed` nennen.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifikator verwenden, um den benutzerdefinierten Zustand des Elements zu selektieren. Dieser wird durch Übergeben des Identifikators an die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklasse selektiert. Zum Beispiel wählen wir unten den `hidden`-Zustand aus, der wahr ist (und damit den `collapsed`-Zustand des Elements), indem wir den `:hidden`-Selektor verwenden und die Umrandung entfernen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu selektieren. Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelement verwendet werden, um die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements in einem bestimmten Zustand abzugleichen.

Es gibt verschiedene Live-Beispiele im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiele für benutzerdefinierte Elemente ansehen. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden, und Sie können alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Pop-up-Informationskasten an, um weiterführende kontextuelle Informationen zu bieten.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die richtige Prototypenkette herzustellen.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall fügt es einen Schattenstamm zum benutzerdefinierten Element hinzu, verwendet DOM-Manipulationen, um die interne Schattenstruktur des Elements zu erstellen – die dann an den Schattenstamm angehängt wird – und fügt schließlich einige CSS hinzu, um es zu stylen. Wir machen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mithilfe der zuvor erwähnten Methode `define()` – in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der die Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt verfügbar, um auf unserer Seite verwendet zu werden. Auf unserer HTML-Seite verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzierung externer Styles

Im obigen Beispiel wenden wir Styles auf das Shadow DOM mithilfe eines {{htmlelement("style")}}-Elements an, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

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

Sie ist genauso wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir ein externes Stylesheet über ein {{HTMLElement("link")}}-Element verlinken, das wir dem Shadow DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern des Shadow Roots nicht blockieren, sodass es möglicherweise einen "Flash of Unstyled Content" (FOUC) gibt, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, entweder geklont von einem gemeinsamen Knoten oder mit identischem Text, um ihnen zu ermöglichen, ein gemeinsames Backing-Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung externer und interner Styles ähnlich sein.

### Angepasste integrierte Elemente

Nun schauen wir uns ein Beispiel für angepasste integrierte Elemente an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie in der [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attribut-Referenz nach für Hinweise zur Implementierungsrealität von angepassten integrierten Elementen.

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

Wie zuvor befindet sich der Großteil des Codes im `connectedCallback()`-Lebenszyklus-Rückruf.

Als nächstes registrieren wir das Element mittels der `define()`-Methode wie zuvor, diesmal jedoch mit einem Optionsobjekt, das angibt, welches Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements innerhalb des `is`-Attributs an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, ausgeführt wird, nachdem das DOM vollständig analysiert wurde, weil `connectedCallback()` sofort aufgerufen wird, nachdem die erweiterbare Liste dem DOM hinzugefügt wurde, und zu diesem Zeitpunkt deren Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript einfügt:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Rückrufe

Bisher haben wir nur einen Lebenszyklus-Rückruf in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel `<custom-square>` werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute namens `"size"` und `"color"` bestimmt werden.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element einen Shadow DOM zu und befestigen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente am Shadow Root:

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

Die wichtigste Funktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält dessen Shadow Root, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} dem Style hinzu.

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

Die tatsächlichen Aktualisierungen werden alle durch die Lebenszyklus-Rückrufe behandelt. Der `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat gemäß den in seinen Attributen definierten Einstellungen gestylt wird:

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

Die `disconnectedCallback()`- und `adoptedCallback()`-Rückrufe protokollieren Nachrichten in der Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Rückruf wird immer ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, individuell auf Attribute zu reagieren, indem ihre Namen und alten und neuen Attributwerte betrachtet werden. In diesem Fall führen wir jedoch lediglich die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, um den `attributeChangedCallback()`-Rückruf auszulösen, wenn ein Attribut geändert wird, Sie die Attribute beobachten müssen. Dies geschieht, indem Sie eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse angeben – diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
