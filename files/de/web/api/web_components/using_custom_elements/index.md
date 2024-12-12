---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 8501d38bb69382cd93e14b19c6d37b7e151357c1
---

{{DefaultAPISidebar("Web Components")}}

Eines der Schlüsselelemente von Web Components ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz von im Browser verfügbaren Elementen erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und erläutert einige Beispiele.

## Typen von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Angepasste integrierte Elemente** erben von standardmäßigen HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des standardmäßigen Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Weitere Informationen finden Sie im [`is`-Attribut](/de/docs/Web/HTML/Global_attributes/is).

- **Autonome benutzerdefinierte Elemente** erben von der Basis-Klasse des HTML-Elements [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf neu implementieren.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten, erweitert wird (im Fall von angepassten integrierten Elementen).

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und die Standardwerte festlegen, Ereignislistener registrieren und möglicherweise eine Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie nicht die Attribute oder Kinder des Elements untersuchen oder neue Attribute oder Kinder hinzufügen. Siehe [Voraussetzungen für benutzerdefinierte Element-Konstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lifecycle-Callbacks benutzerdefinierter Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf Ihr benutzerdefiniertes Element auf bestimmte Weise interagiert. Mit der Implementierung dieser Methoden, die in der Spezifikation als _Lifecycle-Callbacks_ bezeichnet werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lifecycle-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler die Einrichtung benutzerdefinierter Elemente so weit wie möglich in diesem Callback implementieren und nicht im Konstruktor.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Weitere Details zu diesem Callback finden Sie unter [Reaktion auf Attributänderungen](#reagieren_auf_attributänderungen).

Hier ist ein minimales benutzerdefiniertes Element, das diese Lifecycle-Ereignisse protokolliert:

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

## Registrieren eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die Methode `define()` nimmt die folgenden Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln einhalten, die in der [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) der Spezifikation aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur bei angepassten integrierten Elementen enthalten. Dies ist ein Objekt, das eine einzige Eigenschaft `extends` enthält, die den Namen des integrierten Elements angibt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das angepasste integrierte `WordCount`-Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome benutzerdefinierte Element `PopupInfo`:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwenden eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes integriertes Element zu verwenden, verwenden Sie das integrierte Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributs:

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

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element auf Änderungen des Attributwerts reagieren können. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lifecycle-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Den Namen des Attributs, das geändert wurde.
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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, auch wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel zur Nutzung von `attributeChangedCallback()` finden Sie unter [Lifecycle-Callbacks](#lifecycle-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mit HTML oder JavaScript gesetzt werden, während andere intern sind und nicht gesetzt werden können. Unabhängig davon, ob sie extern oder intern sind, haben diese Zustände häufig entsprechende CSS [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element bei einem bestimmten Zustand auszuwählen und zu gestalten.

Autonome benutzerdefinierte Elemente (aber keine Elemente, die auf eingebauten Elementen basieren) ermöglichen es Ihnen ebenfalls, Zustände zu definieren und sie mit der [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklassenfunktion abzugleichen.
Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zunächst in seinem Konstruktor [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) bietet.
Der Setter für den (internen) `collapsed`-Zustand fügt dem `CustomStateSet` das _Kennzeichen_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt es, wenn der Zustand `false` ist.
Das Kennzeichen ist einfach ein String: in diesem Fall haben wir es `hidden` genannt, aber wir hätten es genauso gut `collapsed` nennen können.

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

Wir können das Kennzeichen verwenden, das zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügt wurde, um den benutzerdefinierten Zustand des Elements zu vergleichen.
Dieser wird abgeglichen, indem das Kennzeichen zur [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklasse übergeben wird.
Zum Beispiel wählen wir unten den `hidden`-Zustand aus, wenn er wahr ist (und somit den `collapsed`-Zustand des Elements) unter Verwendung des `:hidden`-Selektors und entfernen den Rahmen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()`-Pseudoklasse nach der [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelementfunktion verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, das sich in einem bestimmten Zustand befindet, abzugleichen.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie das funktioniert.

## Beispiele

Im Rest dieses Leitfadens betrachten wir einige Beispiele für benutzerdefinierte Elemente. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst betrachten wir ein autonomes benutzerdefiniertes Element. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert wird, wird der Text in einem Popup-Informationsfenster angezeigt, um weitere kontextbezogene Informationen bereitzustellen.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypkette zu etablieren.

Innerhalb der Methode `connectedCallback()` definieren wir die gesamte Funktionalität, die das Element hat, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem benutzerdefinierten Element eine Schattenwurzel hinzu, verwenden einige DOM-Manipulationen, um die interne Schatten-DOM-Struktur des Elements zu erstellen - die dann an die Schattenwurzel angehängt wird - und fügen schließlich etwas CSS hinzu, um es zu stylen. Wir führen diese Arbeiten nicht im Konstruktor durch, da die Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mithilfe der zuvor erwähnten `define()`-Methode - in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der seine Funktionalität definiert:

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

### Externe Styles referenzieren

Im obigen Beispiel wenden wir Stile auf das Schatten-DOM mithilfe eines {{htmlelement("style")}}-Elements an, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

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

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir über ein {{HTMLElement("link")}}-Element zu einem externen Stylesheet verlinken, das wir an das Schatten-DOM anhängen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern der Schattenwurzel nicht blockieren, sodass ein Flash of Unstyled Content (FOUC) auftreten kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont wurden oder identischen Text haben, um ihnen zu erlauben, ein gemeinsames Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Stilen ähnlich sein.

### Angepasste eingebaute Elemente

Nun betrachten wir ein Beispiel für ein angepasstes eingebautes Element. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Reduzieren der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie sich die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attribut-Referenz für die Implementierungsrealität von angepassten eingebauten Elementen an.

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
          if (nextUl.style.display == "block") {
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

Wie zuvor befindet sich der Großteil des Codes im `connectedCallback()`-Lifecycle-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, außer dass diesmal auch ein Optionsobjekt enthalten ist, das detailliert beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Web-Dokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben aber den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, erst ausgeführt wird, nachdem das DOM vollständig analysiert wurde, da `connectedCallback()` aufgerufen wird, sobald die erweiterte Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt sind ihre Kinder noch nicht hinzugefügt, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Element/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript enthält:

```html
<script src="main.js" defer></script>
```

### Lifecycle-Callbacks

Bisher haben wir nur einen Lifecycle-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das `<custom-square>` autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` heißen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Schatten-DOM hinzu und hängen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente an das Schattenwurzel an:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` - diese nimmt ein Element, holt dessen Schattenwurzel, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

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

Die eigentlichen Aktualisierungen werden alle von den Lifecycle-Callbacks behandelt. Die `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird - hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat im Stil seiner Attribute gestylt ist:

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

Die `disconnectedCallback()`- und `adoptedCallback()`-Callbacks protokollieren Nachrichten in der Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

Der `attributeChangedCallback()`-Callback wird aufgerufen, wann immer eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf Attribute einzeln zu reagieren, ihre Namen zu betrachten sowie die alten und neuen Attributwerte zu untersuchen. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß der neuen Werte aktualisiert wird:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

Beachten Sie, dass, um den `attributeChangedCallback()`-Callback auszulösen, wenn sich ein Attribut ändert, Sie die Attribute beobachten müssen. Dies geschieht durch die Angabe einer `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
