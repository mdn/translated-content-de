---
title: Verwendung von Custom Elements
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Web Components ist die Möglichkeit, _Custom Elements_ zu erstellen: das heißt, HTML-Elemente, deren Verhalten vom Webentwickler definiert wird, die den Satz der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in Custom Elements ein und zeigt einige Beispiele.

## Arten von Custom Elements

Es gibt zwei Arten von Custom Elements:

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is) Attribut-Referenz für Einschränkungen zur Implementierungsrealität von angepassten eingebauten Elementen.

- **Autonome Custom Elements** erben von der Basisklasse des HTML-Elements [`HTMLElement`](/de/docs/Web/API/HTMLElement). Ihre Implementierung beginnt bei null.

## Implementieren eines Custom Elements

Ein Custom Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Falle von autonomen Elementen) oder das Interface, das Sie anpassen wollen (im Falle von angepassten eingebauten Elementen), erweitert.

Hier ist die Implementierung eines minimalen Custom Elements, das das {{HTMLElement("p")}}-Element anpasst:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Hier ist die Implementierung eines minimalen autonomen Custom Elements:

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den anfänglichen Zustand und die Standardwerte festlegen, Ereignis-Listener registrieren und eventuell ein Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht prüfen oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für Custom-Element-Konstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für den kompletten Satz an Anforderungen.

### Lebenszyklus-Collbacks für Custom Elements

Sobald Ihr Custom Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite mit Ihrem Custom Element auf bestimmte Arten interagiert. Indem Sie eine Implementierung dieser Methoden bereitstellen, die die Spezifikation als _Lebenszyklus-Collbacks_ bezeichnet, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Zu den Lebenszyklus-Collbacks für Custom Elements gehören:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler die Einrichtung von Custom Elements in diesem Callback statt im Konstruktor implementieren, soweit möglich.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reaktion auf Attributänderungen](#reaktion_auf_attributänderungen) für weitere Details zu diesem Callback.

Hier ist ein minimales Custom Element, das diese Lebenszyklus-Ereignisse protokolliert:

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

## Registrieren eines Custom Elements

Um ein Custom Element in einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die Methode `define()` nimmt die folgenden Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte weitere Regeln erfüllen, die in der Spezifikation zur [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorenfunktion des Custom Elements.
- `options`
  - : Wird nur für angepasste eingebaute Elemente inkludiert. Dies ist ein Objekt mit einer einzelnen Eigenschaft `extends`, die ein String ist, der das eingebaute Element benennt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das angepasste eingebaute Element `WordCount`:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome Custom Element `PopupInfo`:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwenden eines Custom Elements

Sobald Sie ein Custom Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, nutzen Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Global_attributes/is) Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes Custom Element zu verwenden, nutzen Sie den benutzerdefinierten Namen genauso wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reaktion auf Attributänderungen

Wie eingebaute Elemente können Custom Elements HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwerts zu reagieren. Dazu muss ein Custom Element folgende Komponenten zur Klasse hinzufügen, die das Custom Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsnotifikationen benötigt.
- Eine Implementierung des Lebenszyklus-Collbacks `attributeChangedCallback()`.

Der `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der Eigenschaft `observedAttributes` des Elements aufgeführt ist, hinzugefügt, modifiziert, entfernt oder ersetzt wird.

Der Callback erhält drei Argumente:

- Den Namen des Attributs, das sich geändert hat.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

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

Beachten Sie, wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann wird `attributeChangedCallback()` aufgerufen, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal geparst wird. Im folgenden Beispiel wird `attributeChangedCallback()` also beim Parsen des DOMs aufgerufen, auch wenn das Attribut danach nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein komplettes Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, siehe [Lebenszyklus-Collbacks](#lebenszyklus-collbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie z. B. "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mittels HTML oder JavaScript gesetzt werden, während andere intern sind und nicht gesetzt werden können. Ob extern oder intern, typischerweise haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die zum Auswählen und Stylen des Elements verwendet werden können, wenn es sich in einem bestimmten Zustand befindet.

Autonome Custom Elements (aber nicht die auf eingebauten Elementen basierenden) erlauben es Ihnen ebenfalls, Zustände zu definieren und diese mit der [`:state()`](/de/docs/Web/CSS/:state) Pseudoklassen-Funktion auszuwählen.
Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen Custom Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand ist als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS selektierbar zu machen, ruft das Custom Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt anzuhängen, welches wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) durch die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft bietet.
Der Setter für den (internen) collapsed-Zustand fügt das _Identifier_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt es, wenn der Zustand `false` ist.
Der Identifier ist einfach ein String: In diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können das dem `CustomStateSet` des Custom Elements (`this._internals.states`) hinzugefügte Identifier verwenden, um den benutzerdefinierten Zustand des Elements zu matchen.
Dies wird erreicht, indem der Identifier der [`:state()`](/de/docs/Web/CSS/:state) Pseudoklasse übergeben wird.
Zum Beispiel selektieren wir unten den `hidden`-Zustand als wahr (und damit den `collapsed`-Zustand des Elements) mit dem `:hidden`-Selektor und entfernen den Rand.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines Custom Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu matchen. Zusätzlich kann die `:state()` Pseudoklasse nach der [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden, um die [Shadow Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines Custom Elements zu matchen, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie das funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir einige Beispiel-Custom-Elements betrachten. Sie finden den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository, und Sie können sie alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes Custom Element

Zunächst schauen wir uns ein autonomes Custom Element an. Das `<popup-info>` Custom Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationskasten an, um weitere kontextbezogene Informationen bereitzustellen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypen-Kette zu etablieren.

In der Methode `connectedCallback()` definieren wir alle Funktionalitäten, die das Element hat, wenn es mit dem DOM verbunden ist. In diesem Fall fügen wir dem Custom Element ein Shadow-Root hinzu, verwenden einige DOM-Manipulationen, um die interne Struktur des Shadow DOM des Elements zu erstellen, die dann am Shadow-Root angehängt wird, und fügen schließlich etwas CSS zum Shadow-Root hinzu, um es zu stylen. Wir führen diese Arbeit nicht im Konstruktor durch, da die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Schließlich registrieren wir unser Custom Element im `CustomElementRegistry` mit der zuvor erwähnten `define()` Methode — in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist nun zur Verwendung auf unserer Seite verfügbar. In unserem HTML verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Externe Stile referenzieren

Im obigen Beispiel wenden wir Stile auf das Shadow DOM mit einem {{htmlelement("style")}} Element an, aber Sie können ein externes Stylesheet von einem {{htmlelement("link")}} Element referenzieren. In diesem Beispiel werden wir das `<popup-info>` Custom Element modifizieren, um ein externes Stylesheet zu verwenden.

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

Es ähnelt dem originalen `<popup-info>` Beispiel, außer dass wir mit Hilfe eines {{HTMLElement("link")}} Elements auf ein externes Stylesheet verlinken, welches wir dem Shadow DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern des Shadow Root nicht blockieren, sodass es zu einem Flash ungestylten Inhalts (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont oder die identischen Text haben, um ein gemeinsames Basis-Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Stilen ähnlich sein.

### Angepasste eingebaute Elemente

Schauen wir uns nun ein Beispiel für ein angepasstes eingebautes Element an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}} Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is) Attribut-Referenz für Einschränkungen zur Implementierungsrealität von angepassten eingebauten Elementen.

Zunächst definieren wir die Klasse unseres Elements:

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

Beachten Sie, dass wir dieses Mal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) statt [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitern. Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im Lebenszyklus-Collback `connectedCallback()`.

Als Nächstes registrieren wir das Element mit der `define()` Methode wie vorher, außer dass dieses Mal zusätzlich ein Optionsobjekt enthalten ist, das beschreibt, welches Element unser Custom Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>` Element wie gewohnt, jedoch geben Sie den Namen des Custom Elements im `is` Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser Custom Element definiert, ausgeführt wird, nachdem das DOM vollständig geparst wurde, weil `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste zum DOM hinzugefügt wird, und zu diesem Zeitpunkt ihre Kinder noch nicht hinzugefügt sind, sodass die `querySelectorAll()` Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Element/script#defer) Attribut zur Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Collbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, sehen wir einige der anderen. Das autonome Custom Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute festgelegt werden, die "size" und "color" heißen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Shadow DOM hinzu und fügen leere {{htmlelement("div")}} und {{htmlelement("style")}} Elemente an das Shadow-Root an:

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

Die Schlüssel-Funktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, holt dessen Shadow-Root, findet sein `<style>` Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zum Style hinzu.

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

Die eigentlichen Updates werden alle von den Lebenszyklus-Collbacks verwaltet. Der `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element zum DOM hinzugefügt wird — hier führen wir die `updateStyle()` Funktion aus, um sicherzustellen, dass das Quadrat gemäß seinen Attributen gestylt ist:

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

Die `disconnectedCallback()` und `adoptedCallback()` Collbacks loggen Nachrichten in die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

Der `attributeChangedCallback()` Callback wird ausgeführt, wann immer eines der Attribute des Elements in irgendeiner Form geändert wird. Wie Sie an seinen Parametern sehen können, ist es möglich, auf Attribute einzeln zu reagieren, indem man ihren Namen und die alten und neuen Attributwerte betrachtet. In diesem Fall jedoch führen wir einfach die `updateStyle()` Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats entsprechend den neuen Werten aktualisiert wird:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

Beachten Sie, dass `attributeChangedCallback()`-Callback, um zu feuern, wenn ein Attribut geändert wird, die Attribute beobachtet werden müssen. Dies erfolgt durch die Angabe einer `static get observedAttributes()` Methode innerhalb der Custom Element Klasse - diese sollte ein Array zurückgeben, das die Namen der zu beobachtenden Attribute enthält:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
