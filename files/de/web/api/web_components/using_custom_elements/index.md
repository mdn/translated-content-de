---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptfunktionen von Webkomponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz von im Browser verfügbaren Elementen erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und geht einige Beispiele durch.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität von benutzerdefinierten eingebauten Elementen.

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Ihr Verhalten muss von Grund auf neu implementiert werden.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der zu anpassenden Schnittstelle (im Fall von angepassten eingebauten Elementen) erbt.

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und Standardwerte festlegen, Ereignis-Listener registrieren und vielleicht einen Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie weder die Attribute oder Kinder des Elements inspizieren noch neue Attribute oder Kinder hinzufügen. Siehe die [Anforderungen für benutzerdefinierte Element-Konstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf bestimmte Weise mit Ihrem benutzerdefinierten Element interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die von der Spezifikation _Lebenszyklus-Callbacks_ genannt werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird immer dann aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler das Setup von benutzerdefinierten Elementen in diesem Callback implementieren sollten, soweit möglich, anstatt im Konstruktor.
- `disconnectedCallback()`: Wird immer dann aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `adoptedCallback()`: Wird immer dann aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
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

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

## Registrierung eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element in einer Seite verfügbar zu machen, rufen Sie die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der Spezifikation [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktionsfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur enthalten bei angepassten eingebauten Elementen, dies ist ein Objekt, das eine einzelne Eigenschaft `extends` enthält, einen String, der das eingebaute Element benennt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das angepasste eingebaute Element `WordCount`:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome benutzerdefinierte Element `PopupInfo`:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributs:

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

Wie bei eingebauten Elementen können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element auf Änderungen des Attributwerts reagieren können. Dazu muss ein benutzerdefiniertes Element folgende Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Das `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgelistet ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Das Callback erhält drei Argumente:

- Den Namen des Attributs, das sich geändert hat.
- Den alten Wert des Attributs.
- Den neuen Wert des Attributs.

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

Beachten Sie, dass wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, das `attributeChangedCallback()` nach der Initialisierung des Attributs aufgerufen wird, wenn die Deklaration des Elements zum ersten Mal analysiert wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn der DOM analysiert wird, auch wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel zur Verwendung von `attributeChangedCallback()` siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und CSS-Selektoren für benutzerdefinierte Zustands-Pseudoklassen

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mithilfe von HTML oder JavaScript festgelegt werden, während andere intern sind und nicht festgelegt werden können.
Unabhängig davon, ob extern oder intern, haben diese Zustände häufig entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), mit denen das Element in einem bestimmten Zustand ausgewählt und gestaltet werden kann.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende Elemente) ermöglichen es Ihnen auch, Zustände zu definieren und diese mithilfe der [`:state()`](/de/docs/Web/CSS/:state) Pseudoklassenfunktion auszuwählen.
Der folgende Code zeigt, wie dies funktioniert, unter Verwendung des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed` Zustand wird als Boolean-Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS wählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet.
Der Setter für den (internen) `collapsed` Zustand fügt das _Identifikator_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Identifikator ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn ebenso gut `collapsed` nennen können.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifikator verwenden, um den benutzerdefinierten Zustand des Elements zu erkennen.
Dies wird erreicht, indem der Identifikator an die [`:state()`](/de/docs/Web/CSS/:state) Pseudoklasse übergeben wird.
Zum Beispiel wählen wir im Folgenden den Zustand `hidden` aus, wenn er wahr ist (und damit der `collapsed` Zustand des Elements) mithilfe des `:hidden`-Selectors und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand innerhalb eines [benutzerdefinierten Elements im Shadow-DOM](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu erkennen. Darüber hinaus kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu erkennen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im restlichen Teil dieses Leitfadens schauen wir uns einige Beispiele für benutzerdefinierte Elemente an. Sie können den Quellcode aller dieser Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository finden, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bindet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbasierte Informationen bereitzustellen.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die richtige Prototypen-Kette herzustellen.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionalitäten, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem benutzerdefinierten Element ein Shadow-Root hinzu, verwenden einige DOM-Manipulationen, um die interne Struktur des Shadow-DOM des Elements zu erstellen - welches dann zum Shadow-Root hinzugefügt wird - und fügen schließlich einige CSS-Stile zum Shadow-Root hinzu, um es zu gestalten. Wir machen diese Arbeit nicht im Konstruktor, weil die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der zuvor erwähnten `define()`-Methode - in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

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

### Externe Stylesheets referenzieren

Im obigen Beispiel wenden wir Stile auf das Shadow-DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

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

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, mit dem Unterschied, dass wir auf ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verweisen, welches wir dem Shadow-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}} Elemente das Zeichnen des Shadow-Roots nicht blockieren, sodass es möglicherweise zu einem Flash of Unstyled Content (FOUC) kommt, während das Stylesheet lädt.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}} Tags, entweder vom einem gemeinsamen Knoten geklont oder mit identischem Text, um ihnen zu erlauben, ein gemeinsames unterlegtes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung externer und interner Stile ähnlich sein.

### Angepasste eingebettete Elemente

Schauen wir uns nun ein Beispiel für ein angepasstes eingebautes Element an. In diesem Beispiel müssen wir das eingebaute {{HTMLElement("ul")}}-Element erweitern, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität von benutzerdefinierten eingebauten Elementen.

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
          const nextul = e.target.nextElementSibling;

          // Toggle visible state and update class attribute on ul
          if (nextul.style.display == "block") {
            nextul.style.display = "none";
            nextul.parentNode.setAttribute("class", "closed");
          } else {
            nextul.style.display = "block";
            nextul.parentNode.setAttribute("class", "open");
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

Beachten Sie, dass wir diesmal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erweitern, anstatt [`HTMLElement`](/de/docs/Web/API/HTMLElement). Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, nur dass diesmal auch ein Optionsobjekt enthalten ist, das beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

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

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, ausgeführt wird, nachdem der DOM vollständig analysiert wurde, da `connectedCallback()` sofort aufgerufen wird, sobald die expandierende Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden würden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Element/script#defer)-Attribut zur Skriptzeile hinzuzufügen:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome `<custom-square>`-Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute, `"size"` und `"color"`, bestimmt werden.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Konstruktor der Klasse fügen wir dem Element ein Shadow-DOM hinzu und fügen dann dem Shadow-Root leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente hinzu:

```js
constructor() {
  // Always call super first in constructor
  super();

  const shadow = this.attachShadow({ mode: "open" });

  const div = document.createElement("div");
  const style = document.createElement("style");
  shadow.appendChild(style);
  shadow.appendChild(div);
}
```

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()`, die ein Element nimmt, dessen Shadow-Root erhält, sein `<style>`-Element findet und {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzufügt.

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

Die eigentlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks behandelt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird - hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat gemäß seinen Attributen gestylt wird:

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

Die `disconnectedCallback()` und `adoptedCallback()` rufen Nachrichten in die Konsole auf, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

Das `attributeChangedCallback()`-Callback wird ausgeführt, wann immer eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf Attribute individuell zu reagieren, ihren Namen sowie alte und neue Attributwerte anzusehen. In diesem Fall jedoch führen wir nur die Funktion `updateStyle()` erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

Beachten Sie, dass, um das `attributeChangedCallback()`-Callback auszulösen, wenn sich ein Attribut ändert, die zu beobachtenden Attribute angegeben werden müssen. Dies geschieht durch die Spezifizierung einer `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
