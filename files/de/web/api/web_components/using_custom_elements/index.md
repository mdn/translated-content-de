---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptfunktionen von Web Components ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: das heißt, HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und zeigt einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf implementieren.

- **Angepasste integrierte Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Weitere Informationen finden Sie im [`is`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/is).

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder die Schnittstelle, die Sie anpassen möchten (im Fall von angepassten integrierten Elementen), erweitert.

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und Standardwerte einrichten, Event-Listener registrieren und möglicherweise eine Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen an benutzerdefinierte Elementkonstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständigen Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite auf bestimmte Weise mit Ihrem benutzerdefinierten Element interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die die Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Die Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, soweit möglich, die Einrichtung des benutzerdefinierten Elements in diesem Callback und nicht im Konstruktor zu implementieren.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle von_ `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM über [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verschoben wird. Verwenden Sie dies, um zu verhindern, dass Initialisierungs-/Bereinigungscode in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks ausgeführt wird, wenn das Element nicht tatsächlich zum oder aus dem DOM hinzugefügt oder entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Bewegungen](#lebenszyklus-callbacks_und_zustandserhaltende_bewegungen) für weitere Details.
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

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes normale HTML-Element manipuliert werden, aber es gibt Lebenszyklus-Nebenwirkungen zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um den erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der am Anfang oder Ende des Lebenszyklus des Elements ausgeführt werden muss, kann das Ausführen dieser Callbacks beim Verschieben (anstatt Entfernen oder Einfügen) Probleme mit seinem Zustand verursachen. Beispielsweise könnten Sie einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements erhalten möchten, können Sie dies tun, indem Sie ein `connectedMoveCallback()`-Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dadurch wird das `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Sie könnten ein leeres `connectedMoveCallback()` hinzufügen, um die Ausführung der beiden anderen Callbacks zu verhindern, oder einige benutzerdefinierte Logik hinzufügen, um das Verschieben zu behandeln:

```js
connectedMoveCallback() {
  console.log("Custom move-handling logic here.");
}
```

## Registrierung eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt folgende Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere in der Spezifikation gelistete Regeln einhalten, die in der [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) zu finden sind.
- `constructor`
  - : Die Konstrukturfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste integrierte Elemente enthalten, dies ist ein Objekt mit einer einzelnen Eigenschaft `extends`, die eine Zeichenfolge ist, die das zu erweiternde integrierte Element benennt.

Zum Beispiel registriert dieser Code das `WordCount`-angepasste integrierte Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo`-autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes integriertes Element zu verwenden, verwenden Sie das integrierte Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen genauso wie ein integriertes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie integrierte Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwerts zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()`-Lebenszyklus-Callbacks.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wann auch immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Der Callback wird drei Argumenten übergeben:

- Der Name des Attributs, welches sich geändert hat.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

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

Beachten Sie, dass, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. Im folgenden Beispiel wird `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, auch wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, finden Sie unter [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Pseudoklassen-Selektoren

Integrierte HTML-Elemente können unterschiedliche _Zustände_ haben, wie „Hover“, „Disabled“ und „Read only“. Einige dieser Zustände können als Attribute mit HTML oder JavaScript gesetzt werden, während andere intern sind und nicht sichtbar. Unabhängig davon haben diese Zustände häufig entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht Elemente, die auf integrierten Elementen basieren) ermöglichen es Ihnen auch, Zustände zu definieren und gegen sie zu selektieren, indem Sie die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklassenfunktion verwenden. Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist. Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft bietet. Der Setter für den (internen) `collapsed`-Zustand fügt dem `CustomStateSet` den _Identifier_ `hidden` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist. Der Identifier ist einfach eine Zeichenkette: In diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügten Identifier verwenden, um den benutzerdefinierten Zustand des Elements auszuwählen. Dies wird erreicht, indem der Identifier an die [`:state()`](/de/docs/Web/CSS/:state)-Pseudoklasse übergeben wird. Zum Beispiel wählen wir unten den `hidden`-Zustand (und damit den `collapsed`-Zustand des Elements) aus, indem wir den `:hidden`-Selektor verwenden und den Rahmen entfernen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen. Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelement verwendet werden, um die [Schattenabschnitte](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens schauen wir uns einige Beispiele für benutzerdefinierte Elemente an. Sie finden den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das benutzerdefinierte Element `<popup-info>` nimmt ein Bildsymbol und eine Textzeichenkette als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert wird, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zuerst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Klasse erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypen-Kette zu etablieren.

Im Inneren der Methode `connectedCallback()` definieren wir alle Funktionen, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem benutzerdefinierten Element eine Shadow-Root hinzu, verwenden DOM-Manipulationen, um die interne Shadow DOM-Struktur des Elements zu erstellen — die dann an die Shadow-Root angehängt wird — und fügen schließlich CSS hinzu, um es zu stylen. Wir tun diese Arbeit nicht im Konstruktor, da Attribute eines Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der bereits erwähnten `define()`-Methode — in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der dessen Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt auf unserer Seite verwendbar. In unserem HTML verwenden wir es folgendermaßen:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Externe Styles referenzieren

Im obigen Beispiel haben wir Styles auf das Shadow DOM angewandt, indem wir ein {{htmlelement("style")}}-Element verwendet haben, aber Sie können auch ein externes Stylesheet über ein {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element so modifizieren, dass es ein externes Stylesheet verwendet.

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

Es ist wie das ursprüngliche `<popup-info>`-Beispiel, mit dem Unterschied, dass wir auf ein externes Stylesheet über ein {{HTMLElement("link")}}-Element verweisen, das wir dem Shadow DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Paint der Shadow-Root nicht blockieren, sodass es zu einem Flash of Unstyled Content (FOUC) kommen kann, während das Stylesheet lädt.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont oder identischen Text haben, um ihnen zu ermöglichen, ein einziges gemeinsam genutztes Stylesheet zu verwenden. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste integrierte Elemente

Schauen wir uns nun ein Beispiel für ein angepasstes integriertes Element an. Dieses Beispiel erweitert das integrierte {{HTMLElement("ul")}}-Element, um das Erweitern und Reduzieren der Listenelemente zu unterstützen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität von benutzerdefinierten integrierten Elementen.

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

Wie zuvor befindet sich der größte Teil des Codes in dem `connectedCallback()`-Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, aber dieses Mal schließt es auch ein Optionsobjekt ein, das angibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des integrierten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, aber geben den Namen des benutzerdefinierten Elements innerhalb des `is`-Attributs an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, nach dem vollständigen Parsen des DOM ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut in der Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur ein Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel `<custom-square>` werden wir einige der anderen sehen. Das `<custom-square>`-autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die „size“ und „color“ genannt werden.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Shadow DOM hinzu und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente in die Shadow-Root ein:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält dessen Shadow-Root, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Stil hinzu.

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

Die tatsächlichen Updates werden alle von den Lebenszyklus-Callbacks behandelt. Der `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat gemäß den in den Attributen definierten Stil hat:

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

Die `disconnectedCallback()`- und `adoptedCallback()`-Callbacks protokollieren Nachrichten in die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Der `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie anhand der Parameter sehen können, ist es möglich, auf einzelne Attribute zu reagieren, indem man ihren Namen sowie alte und neue Attributwerte betrachtet. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats entsprechend den neuen Werten aktualisiert wird:

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

Beachten Sie, dass der `attributeChangedCallback()`-Callback nur ausgelöst wird, wenn ein Attribut sich ändert, und Sie müssen die Attribute beobachten. Dies geschieht, indem Sie eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse angeben - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
