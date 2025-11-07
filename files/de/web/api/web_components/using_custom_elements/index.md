---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptmerkmale von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die die Menge der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und zeigt einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basis-Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen ihr Verhalten von Grund auf neu implementieren.

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Siehe das [`is` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is) für weitere Informationen.

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zur Erstellung und Verwendung gleich:

- Sie [implementieren zuerst sein Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrierung_eines_benutzerdefinierten_elements) auf der aktuellen Seite.
- Schließlich können Sie das [benutzerdefinierte Element](#verwendung_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code verwenden.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten (im Fall von angepassten eingebauten Elementen), erbt. Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrierung_eines_benutzerdefinierten_elements), damit Sie Instanzen davon mit Standard-DOM-Praktiken erstellen können, wie z.B. indem Sie das Element im HTML-Markup schreiben, [`document.createElement()`](/de/docs/Web/API/Document/createElement) aufrufen, etc.

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

Im Klassen-[Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den Anfangszustand und Standardwerte festlegen, Ereignis-Listener registrieren und vielleicht eine Shadow-Root erstellen. An diesem Punkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen an benutzerdefinierte Elemente Konstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, wird der Browser bestimmte Methoden Ihrer Klasse aufrufen, wenn der Code auf der Seite auf Ihr benutzerdefiniertes Element in bestimmter Weise interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die in der Spezifikation _Lebenszyklus-Callbacks_ genannt werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element zum Dokument hinzugefügt wird. Die Spezifikation empfiehlt, soweit möglich, die Einrichtung von benutzerdefinierten Elementen in diesem Callback statt im Konstruktor zu implementieren.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wird _anstelle von_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element innerhalb des DOMs an einen anderen Ort verschoben wird, z. B. über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore). Verwenden Sie dies, um zu vermeiden, dass Initialisierungs-/Entsäuberungscode in den `connectedCallback()` und `disconnectedCallback()`-Callbacks ausgeführt wird, wenn das Element tatsächlich nicht in das DOM eingefügt oder aus ihm entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
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

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden, es gibt jedoch Lebenszyklus-Nebeneffekte, die berücksichtigt werden müssen.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die `disconnectedCallback()` und `connectedCallback()` Lebenszyklus-Callbacks ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte das beabsichtigte Verhalten sein. Da jedoch diese Callback-Funktionen typischerweise verwendet werden, um den erforderlichen Initialisierungs- oder Aufräumcode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden soll, könnte deren Ausführung, wenn das Element verschoben (statt entfernt oder eingefügt) wird, Probleme mit dessen Zustand verursachen. Sie könnten beispielsweise einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements beibehalten möchten, können Sie dies tun, indem Sie einen `connectedMoveCallback()` Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten einen leeren `connectedMoveCallback()` hinzufügen, um den Ablauf der beiden anderen Callbacks zu stoppen, oder einige benutzerdefinierte Logik einfügen, um den Umzug zu verarbeiten:

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

Die `define()`-Methode benötigt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, einen Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der Spezifikation [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur enthalten für angepasste eingebaute Elemente, dies ist ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die ein String ist, der das eingebaute Element benennt, um das es erweitert wird.

Zum Beispiel registriert dieser Code das `WordCount`-angepasste eingebaute Element:

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

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen im Attributwert zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann immer dann aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements enthalten ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, der `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal geparst wird. Also im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM geparst wird, auch wenn das Attribut nie erneut geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können über Attribute mit HTML oder JavaScript festgelegt werden, während andere intern und nicht festgelegt werden können.
Egal ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (nicht jedoch Elemente, die auf eingebauten Elementen basieren) erlauben es Ihnen auch, Zustände zu definieren und gegen sie zu selektieren, indem Sie die [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklassen-Funktion verwenden.
Der folgende Code zeigt, wie dies mit dem Beispiel eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS ansprechbar zu machen, ruft das benutzerdefinierte Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet.
Der Setter für den (internen) `collapsed`-Zustand fügt das _Identifikator_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt es, wenn der Zustand `false` ist.
Der Identifikator ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifikator verwenden, um den benutzerdefinierten Zustand des Elements zu selektieren.
Dies wird erreicht, indem der Identifikator an die [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) Pseudoklasse übergeben wird.
Zum Beispiel wählen wir unten aus, wenn der `hidden`-Zustand wahr ist (und somit der `collapsed`-Zustand des Elements) und entfernen die Rahmenlinie.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb eines Shadow-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu selektieren. Darüber hinaus kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement verwendet werden, um die [Shadow-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, das sich in einem bestimmten Zustand befindet, zu selektieren.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie das funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiel für benutzerdefinierte Elemente ansehen. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository finden, und Sie können sie alle live auf <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst betrachten wir ein autonomes benutzerdefiniertes Element. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bild-Icon und einen Text-String als Attribute und bettet das Icon in die Seite ein. Wenn das Icon den Fokus erhält, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zunächst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Klasse erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die richtige Prototypenkette zu etablieren.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionalitäten, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem benutzerdefinierten Element eine Shadow-Root hinzu, verwenden etwas DOM-Manipulation, um die interne Struktur des Shadow-DOMs des Elements zu erstellen — die dann an die Shadow-Root angehängt wird — und fügen schließlich etwas CSS zur Shadow-Root hinzu, um es zu stylen. Wir führen diese Arbeit nicht im Konstruktor aus, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` unter Verwendung der `define()` Methode, die wir bereits erwähnt haben — in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

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

### Externe Styles referenzieren

Im obigen Beispiel wenden wir Styles mit einem {{htmlelement("style")}}-Element auf das Shadow-DOM an, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel modifizieren wir das `<popup-info>` benutzerdefinierte Element, um ein externes Stylesheet zu verwenden.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

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

Es ist wie im ursprünglichen `<popup-info>` Beispiel, außer dass wir mit einem {{HTMLElement("link")}}-Element auf ein externes Stylesheet verlinken, das wir dem Shadow-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern der Shadow-Root nicht blockieren, sodass es möglicherweise zu einem Flash von ungestyltem Inhalt (FOUC) kommen kann, während das Stylesheet lädt.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont oder identischen Text haben, um ihnen zu ermöglichen, ein einzelnes unterstützendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun lassen Sie uns ein Beispiel für ein angepasstes eingebautes Element betrachten. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element um das Erweitern und Kollabieren der Listenelemente zu unterstützen.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie die Referenz zum [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attribut für Hinweise zur Umsetzungsrealität von angepassten eingebauten Elementen.

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

Beachten Sie, dass wir diesmal von [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erben, anstatt von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()` Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mithilfe der `define()` Methode wie zuvor, außer dass es diesmal auch ein Optionsobjekt enthält, das beschreibt, welches Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Web-Dokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie normal, geben jedoch den Namen des benutzerdefinierten Elements innerhalb des `is`-Attributs an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, ausgeführt wird, nachdem das DOM vollständig geparst wurde, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, ist das Hinzufügen des [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attributs zur Zeile, die das Skript einfügt:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` heißen.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Shadow-DOM hinzu und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente zur Shadow-Root hinzu:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält seine Shadow-Root, findet sein `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} dem Stil hinzu.

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

Die tatsächlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks verarbeitet. Die `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element zum DOM hinzugefügt wird — hier führen wir die `updateStyle()` Funktion aus, um sicherzustellen, dass das Quadrat entsprechend den Attributen gestylt wird:

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

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Nachrichten in der Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback wird ausgeführt, wann immer eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf einzelne Attribute zu reagieren, indem man deren Namen sowie alte und neue Attributwerte betrachtet. In diesem Fall führen wir jedoch einfach erneut die `updateStyle()`-Funktion aus, um sicherzustellen, dass der Stil des Quadrats entsprechend den neuen Werten aktualisiert wird:

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

Beachten Sie, dass um den `attributeChangedCallback()` ausgeführt werden zu lassen, wenn sich ein Attribut ändert, Sie die Attribute beobachten müssen. Dies geschieht, indem Sie eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse spezifizieren - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
