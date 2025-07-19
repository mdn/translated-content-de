---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 7348ad4bf0fa7351041e9a3661c8a2bd2659d6e5
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz von in Browsern verfügbaren Elementen erweitern.

Dieser Artikel gibt eine Einführung in benutzerdefinierte Elemente und führt durch einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf neu implementieren.

- **Angepasste integrierte Elemente** erben von standardmäßigen HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Deren Implementierung erweitert das Verhalten ausgewählter Instanzen des Standardelements.

  > [!NOTE]
  > Safari plant nicht, benutzerdefinierte integrierte Elemente zu unterstützen. Weitere Informationen finden Sie im [`is` attribute](/de/docs/Web/HTML/Reference/Global_attributes/is).

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder die zu anpassende Schnittstelle (im Fall von angepassten integrierten Elementen) erweitert.

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

Im Klassen-[Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den anfänglichen Zustand und Standardwerte festlegen, Event-Listener registrieren und möglicherweise einen Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Voraussetzungen für benutzerdefinierte Elementkonstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lebenszyklus-Callbacks benutzerdefinierter Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf Ihr benutzerdefiniertes Element auf bestimmte Weise zugreift. Durch das Bereitstellen einer Implementierung dieser Methoden, die in der Spezifikation _Lifecycle-Callbacks_ genannt werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks benutzerdefinierter Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler, soweit möglich, den Setup-Prozess des benutzerdefinierten Elements in diesem Callback implementieren, anstatt im Konstruktor.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dieser _anstatt_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM verschoben wird, z. B. über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore). Verwenden Sie dies, um zu vermeiden, dass Initialisierungs-/Aufräumcode in `connectedCallback()` und `disconnectedCallback()` ausgeführt wird, wenn das Element nicht wirklich dem DOM hinzugefügt oder daraus entfernt wird. Weitere Details finden Sie unter [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen).
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

Die Position eines benutzerdefinierten Elements im DOM kann genauso wie bei jedem regulären HTML-Element manipuliert werden, aber es gibt Lebenszyklus-Nebenwirkungen zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callback-Funktionen jedoch typischerweise verwendet werden, um den gewünschten Initialisierungs- oder Bereinigungscode am Beginn oder am Ende des Lebenszyklus des Elements zu implementieren, kann deren Ausführung, wenn das Element verschoben wird (anstatt entfernt oder eingefügt), Probleme mit seinem Zustand verursachen. Sie könnten zum Beispiel einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie einen `connectedMoveCallback()`-Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies bewirkt, dass `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie können einen leeren `connectedMoveCallback()` hinzufügen, um das Ausführen der anderen beiden Callbacks zu stoppen, oder einige benutzerdefinierte Logik zur Handhabung der Verschiebung einschließen:

```js
class MyComponent {
  // ...
  connectedMoveCallback() {
    console.log("Custom move-handling logic here.");
  }
  // ...
}
```

## Registrieren eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element in einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) des Objekts [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die Methode `define()` nimmt die folgenden Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, einen Bindestrich enthalten und bestimmten anderen Regeln entsprechen, die in der Spezifikation zur [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgelistet sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Wird nur für angepasste integrierte Elemente einbezogen und ist ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die den Namen des zu erweiternden integrierten Elements als Zeichenfolge angibt.

Zum Beispiel registriert der folgende Code das angepasste eingebaute Element `WordCount`:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome benutzerdefinierte Element `PopupInfo`:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwenden eines benutzerdefinierten Elements

Nachdem Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

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

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwertes zu reagieren. Um dies zu tun, muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array enthalten, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann jedes Mal aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Den Namen des Attributs, das geändert wurde.
- Den alten Wert des Attributs.
- Den neuen Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size`-Attribut überwachen und die alten und neuen Werte protokollieren, wenn sie sich ändern:

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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, selbst wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, sehen Sie sich [Lebenszyklus-Callbacks](#lifecycle-callbacks) auf dieser Seite an.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mit HTML oder JavaScript festgelegt werden, während andere intern sind und nicht. Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element zu selektieren und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht Elemente, die auf eingebauten Elementen basieren) erlauben es Ihnen, Zustände zu definieren und gegen sie zu selektieren, indem Sie die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklassenfunktion verwenden.
Der folgende Code zeigt, wie dies funktioniert, indem das Beispiel eines autonomen benutzerdefinierten Elements verwendet wird, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boole'sche Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet.
Der Setter für den (internen) `collapsed`-Zustand fügt das _Identifier_ `hidden` dem `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt es, wenn der Zustand `false` ist.
Der Identifier ist einfach ein Zeichenstring: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den dem `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifier verwenden, um den benutzerdefinierten Zustand des Elements zu matches.
Dies wird durch das Übergeben des Identifiers an die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklasse abgeglichen.
Zum Beispiel selektieren wir unten den `hidden`-Zustand als wahr (und damit den `collapsed`-Zustand des Elements) und entfernen die Grenze.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu matchen. Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden, um die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu matchen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiel benutzerdefinierter Elemente ansehen. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildicon und einen Textstring als Attribute und bettet das Icon in die Seite ein. Wenn das Icon den Fokus erhält, wird der Text in einem Popup-Informationsfeld angezeigt, um weitere kontextbasierte Informationen bereitzustellen.

- [Sehen Sie das Beispiel live laufen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zu Beginn definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, damit die korrekte Prototypenkette etabliert wird.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element hat, wenn das Element mit dem DOM verbunden wird. In diesem Fall fügen wir dem benutzerdefinierten Element einen Shadow-Root hinzu, verwenden einige DOM-Manipulationen, um die interne Shadow-DOM-Struktur des Elements zu erstellen - die dann am Shadow-Root angehängt wird - und fügen schließlich etwas CSS dem Shadow-Root hinzu, um es zu stylen. Wir erledigen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden wird.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry`, indem wir die zuvor erwähnte `define()`-Methode verwenden — in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der dessen Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt verfügbar, um es auf unserer Seite zu verwenden. In unserem HTML verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzieren externer Styles

Im obigen Beispiel haben wir Styles auf das Shadow DOM angewendet, indem wir ein {{htmlelement("style")}}-Element verwenden, aber Sie können ein externes Stylesheet stattdessen von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element ändern, damit es ein externes Stylesheet verwendet.

- [Sehen Sie das Beispiel live laufen](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
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

Es ist wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verlinken, das wir dem Shadow-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendering des Shadow-Roots nicht blockieren, so dass es möglicherweise zu einem ungestylten Inhalt (FOUC) kommt, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder aus einem gemeinsamen Knoten geklont wurden oder denselben Text haben, um ihnen zu ermöglichen, ein einzelnes unterstützendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste integrierte Elemente

Nun werfen wir einen Blick auf ein Beispiel für ein angepasstes integriertes Element. Dieses Beispiel erweitert das integrierte {{HTMLElement("ul")}}-Element, um das Erweitern und Reduzieren der Listenelemente zu unterstützen.

- [Sehen Sie das Beispiel live laufen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie sich die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributreferenz an für Hinweise zur Implementierungsrealität von angepassten eingebauten Elementen.

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

Beachten Sie, dass wir dieses Mal weiter gehend anstatt [`HTMLElement`](/de/docs/Web/API/HTMLElement) von [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erben. Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Als nächstes registrieren wir das Element mit der Methode `define()` wie zuvor, außer dass diesmal auch ein Optionsobjekt einbezogen wird, das beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben aber den Namen des benutzerdefinierten Elements innerhalb des `is`-Attributs an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, nach der vollständigen Analyse des DOM ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und an diesem Punkt seine Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, ist das Hinzufügen des [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attributs zur Zeile, die das Skript einfügt:

```html
<script src="main.js" defer></script>
```

### Lifecycle-Callbacks

Bis jetzt haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` genannt werden.

- [Sehen Sie das Beispiel live laufen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Shadow-DOM hinzu und dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente zum Shadow-Root:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, greift auf dessen Shadow-Root zu, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}}, und {{cssxref("background-color")}} zum Style hinzu.

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

Die eigentlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks gehandhabt. Der `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element zum DOM hinzugefügt wird — hierbei führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat gemäß den in seinen Attributen definierten Werten gestylt ist:

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

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Nachrichten zur Konsole, um uns mitzuteilen, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback wird ausgeführt, wann immer eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie aus seinen Parametern ersichtlich, ist es möglich, auf Attribute individuell zu reagieren, indem auf ihren Namen sowie alte und neue Attributwerte geachtet wird. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, um den `attributeChangedCallback()`-Callback auszulösen, wenn sich ein Attribut ändert, Sie die Attribute beobachten müssen. Dies geschieht, indem eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse spezifiziert wird - diese soll ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
