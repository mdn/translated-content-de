---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 35f4aaf2d213764f21e0b3efd7ff132a137afb80
---

{{DefaultAPISidebar("Web Components")}}

Eine der wichtigsten Funktionen von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den im Browser verfügbaren Satz von Elementen erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und behandelt einige Beispiele.

## Typen von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basis-Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf implementieren.

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Weitere Informationen finden Sie im [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is).

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zu ihrer Erstellung und Verwendung dieselben:

- Sie [implementieren zunächst das Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite.
- Schließlich können Sie das [benutzerdefinierte Element](#verwendung_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code verwenden.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten (im Fall von angepassten eingebauten Elementen), erbt. Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), sodass Sie Instanzen davon unter Verwendung standardmäßiger DOM-Praktiken erstellen können, wie etwa das Schreiben des Elements im HTML-Markup, das Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement) usw.

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

Im Klassen-[Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den anfänglichen Zustand und die Standardwerte festlegen, Ereignis-Listener registrieren und möglicherweise eine Schattenwurzel erstellen. An dieser Stelle sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen an Konstruktoren und Reaktionen von benutzerdefinierten Elementen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für das vollständige Set von Anforderungen.

### Lebenszyklus-Callbacks von benutzerdefinierten Elementen

Sobald Ihr benutzerdefiniertes Element registriert ist, wird der Browser bestimmte Methoden Ihrer Klasse aufrufen, wenn Code in der Seite mit Ihrem benutzerdefinierten Element auf bestimmte Weise interagiert. Durch die Bereitstellung einer Implementierung dieser Methoden, die in der Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks von benutzerdefinierten Elementen umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler, soweit möglich, die Einrichtung des benutzerdefinierten Elements in diesem Callback und nicht im Konstruktor implementieren sollten.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle von_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element mithilfe von [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) an eine andere Stelle im DOM verschoben wird. Verwenden Sie dies, um die Ausführung von Initialisierungs-/Aufräumcode in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks zu vermeiden, wenn das Element nicht tatsächlich zum DOM hinzugefügt oder daraus entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen) für weitere Details zu diesem Callback.

Hier ist ein minimales benutzerdefiniertes Element, das diese Lebenszyklus-Ereignisse protokolliert:

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

Die Position eines benutzerdefinierten Elements im DOM kann genauso manipuliert werden wie bei einem regulären HTML-Element, aber es gibt Lebenszyklusseffekte, die berücksichtigt werden müssen.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (durch Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um erforderlichen Initialisierungs- oder Aufräumcode zu implementieren, der am Anfang oder Ende des Lebenszyklus des Elements ausgeführt werden soll, kann das Ausführen dieser beim Verschieben des Elements (anstatt beim Entfernen oder Einfügen) Probleme mit seinem Zustand verursachen. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()`-Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)-Methode verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass das `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um zu verhindern, dass die anderen beiden Callbacks ausgeführt werden, oder einige benutzerdefinierte Logik hinzufügen, um das Verschieben zu behandeln:

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
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) der Spezifikation aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste eingebaute Elemente enthalten, handelt es sich um ein Objekt mit einer einzigen Eigenschaft `extends`, die ein String ist, der das zu erweiternde eingebaute Element benennt.

Beispielsweise registriert dieser Code das `WordCount`-angepasste eingebaute Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo`-autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, jedoch mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen genauso wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwertes zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array mit den Namen aller Attribute enthalten, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Das `attributeChangedCallback()`-Callback wird dann jedes Mal aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Das Callback wird mit drei Argumenten aufgerufen:

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

Beachten Sie, dass das `attributeChangedCallback()` aufgerufen wird, wenn das HTML-Deklarations-Element des benutzerdefinierten Elements ein beobachtbares Attribut enthält, sobald das Attribut initialisiert ist, wenn die Deklaration des Elements zum ersten Mal geparst wird. Also im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM geparst wird, auch wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudo-Klassen-CSS-Selektoren

In HTML eingebettete Elemente können unterschiedliche _Zustände_ haben, wie zum Beispiel "hover", "disabled" und "read only". Einige dieser Zustände können als Attribute mit HTML oder JavaScript gesetzt werden, während andere intern sind und nicht. Unabhängig davon, ob sie extern oder intern sind, haben diese Zustände häufig entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende Elemente) ermöglichen es Ihnen auch, Zustände zu definieren und anhand dieser über die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklassen-Funktion auszuwählen. Der Code unten zeigt, wie dies funktioniert, indem ein Beispiel für ein autonomes benutzerdefiniertes Element verwendet wird, das einen inneren Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, welches wiederum über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) bietet. Der Setter für den (internen) zusammengeklappten Zustand fügt dem `CustomStateSet` den _Identifier_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist. Der Identifier ist einfach ein String: In diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den Identifier, der dem `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügt wird, verwenden, um den benutzerdefinierten Zustand des Elements abzugleichen. Dies entspricht der Übergabe des Identifiers an die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklasse. Zum Beispiel wählen wir unten auf den `hidden`-Zustand bei `true` (und damit den `collapsed`-Zustand des Elements) unter Verwendung des `:hidden`-Selectors aus und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Darüber hinaus kann die `:state()`-Pseudoklasse nach der [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelement verwendet werden, um die [Schatten-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens schauen wir uns ein paar Beispiel benutzerdefinierter Elemente an. Den Quellcode für all diese Beispiele finden Sie im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zunächst werden wir ein autonomes benutzerdefiniertes Element betrachten. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildsymbol und eine Textzeichenfolge als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, sodass die korrekte Prototypkette hergestellt wird.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionalitäten, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall hängen wir eine Schattenwurzel an das benutzerdefinierte Element an, verwenden ein wenig DOM-Manipulation, um die interne Schatten-DOM-Struktur des Elements zu erstellen — die dann an die Schattenwurzel angehängt wird — und schließlich fügen wir einige CSS an die Schattenwurzel zur Stilisierung an. Wir erledigen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der `define()`-Methode, die wir zuvor erwähnt haben — in den Parametern geben wir den Elementnamen an, und dann den Klassennamen, der dessen Funktionalität definiert:

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

### Referenzierung externer Styles

Im obigen Beispiel haben wir Styles auf das Schatten-DOM mit einem {{htmlelement("style")}}-Element angewendet, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element so modifizieren, dass es ein externes Stylesheet verwendet.

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

Es ist genauso wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir mit einem {{HTMLElement("link")}}-Element auf ein externes Stylesheet verweisen, das wir zum Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendering der Schattenwurzel nicht blockieren, sodass es zu einem "Flash of Unstyled Content" (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont wurden oder identischen Text haben, um es ihnen zu ermöglichen, ein einzelnes zugrunde liegendes Stylesheet zu teilen. Mit dieser Optimierung sollten die Leistung externer und interner Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun schauen wir uns ein Beispiel für ein angepasstes eingebautes Element an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Reduzieren der Listenelemente zu unterstützen.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributreferenz für Hinweise zur Umsetzung der Realität angepasster eingebauter Elemente.

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

Beachten Sie, dass wir diesmal von [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erben, statt von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, außer dass wir diesmal auch ein Optionsobjekt einschließen, das beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht auch etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, nach dem vollständigen Parsen des DOMs ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiternde Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Ein Weg, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript einfügt:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel `<custom-square>` werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute, `"size"` und `"color"`, bestimmt werden.

- [Das Beispiel live sehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Den Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor hängen wir ein Schatten-DOM an das Element an und hängen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente an die Schattenwurzel:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält seine Schattenwurzel, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

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

Die tatsächlichen Updates werden alle von den Lebenszyklus-Callbacks behandelt. Die `connectedCallback()` läuft jedes Mal, wenn das Element dem DOM hinzugefügt wird — hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat gemäß seinen Attributen gestylt wird:

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

Die `disconnectedCallback()`- und `adoptedCallback()`-Callbacks protokollieren Nachrichten an die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt wird oder auf eine andere Seite verschoben wird:

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

Das `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf Attribute individuell zu reagieren, indem man ihren Namen sowie die alten und neuen Attributwerte betrachtet. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, damit das `attributeChangedCallback()`-Callback ausgelöst wird, wenn sich ein Attribut ändert, Sie die Attribute beobachten müssen. Dies geschieht durch Angabe einer `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
