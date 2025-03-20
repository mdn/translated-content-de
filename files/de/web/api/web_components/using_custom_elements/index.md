---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: dc14221977d2ac1a4a22afaef162ed1bd7db1c62
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptmerkmale von Webkomponenten ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: das bedeutet, HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz der im Browser verfügbaren Elemente erweitern.

Dieser Artikel stellt benutzerdefinierte Elemente vor und erläutert einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen ihr Verhalten von Grund auf neu implementieren.

- **Angepasste eingebettete Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, benutzerdefinierte eingebaute Elemente zu unterstützen. Siehe das [`is`-Attribut](/de/docs/Web/HTML/Global_attributes/is) für weitere Informationen.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Falle von autonomen Elementen) oder die zu kundenspezifisierende Schnittstelle erweitert (im Falle von angepassten eingebetteten Elementen).

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

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und die Standardwerte festlegen, Ereignislistener registrieren und möglicherweise einen Schattenbaum erstellen. Zu diesem Zeitpunkt sollten Sie nicht die Attribute oder Kinder des Elements inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für benutzerdefinierte Elementkonstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständigen Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite mit Ihrem benutzerdefinierten Element auf bestimmte Weise interagiert. Durch die Bereitstellung einer Implementierung dieser Methoden, die in der Spezifikation _Lebenszyklus-Callbacks_ genannt werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler, soweit möglich, das Setup für benutzerdefinierte Elemente in diesem Callback implementieren sollten, anstatt im Konstruktor.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen) für mehr Details zu diesem Callback.

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

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode benötigt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmten weiteren Regeln genügen, die in der Spezifikation zur [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur enthalten für angepasste eingebettete Elemente, dies ist ein Objekt, das eine einzige Eigenschaft `extends` enthält, welche einen String mit dem Namen des zu erweiternden eingebetteten Elements angibt.

Zum Beispiel registriert dieser Code das angepasste eingebettete Element `WordCount`:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das autonome benutzerdefinierte Element `PopupInfo`:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebettetes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributs:

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

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute nutzen, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen eines Attributwerts zu reagieren. Dazu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft mit dem Namen `observedAttributes`. Dies muss ein Array mit den Namen aller Attribute sein, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Callbacks.

Das `attributeChangedCallback()` Callback wird dann jedes Mal aufgerufen, wenn ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, modifiziert, entfernt oder ersetzt wird.

Dem Callback werden drei Argumente übergeben:

- Der Name des Attributs, das geändert wurde.
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

Beachten Sie, dass, wenn die HTML-Erklärung des Elements ein beobachtetes Attribut enthält, `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Erklärung des Elements zum ersten Mal analysiert wird. So wird im folgenden Beispiel `attributeChangedCallback()` aufgerufen, wenn der DOM analysiert wird, auch wenn das Attribut niemals wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel zur Verwendung von `attributeChangedCallback()`, siehe [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und CSS-Selektoren für Pseudoklassen benutzerdefinierter Zustände

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute über HTML oder JavaScript gesetzt werden, während andere intern sind und nicht gesetzt werden können.
Ob extern oder intern, diese Zustände haben oft entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (nicht jedoch auf eingebauten Elementen basierende Elemente) erlauben es Ihnen auch, Zustände zu definieren und sie mithilfe der [`:state()`](/de/docs/Web/CSS/:state) Pseudoklassen-Funktion auszuwählen.
Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed` Zustand wird als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt zu verknüpfen, das wiederum Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft bietet.
Der Setter für den (internen) `collapsed` Zustand fügt den _Identifier_ `hidden` in das `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Identifier ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den Identifier verwenden, der dem `CustomStateSet` des benutzerdefinierten Elements (`this._internals.states`) hinzugefügt wurde, um den benutzerdefinierten Zustand des Elements zu erfassen.
Dies wird erreicht, indem der Identifier an die [`:state()`](/de/docs/Web/CSS/:state) Pseudoklasse übergeben wird.
Zum Beispiel wählen wir unten den `hidden` Zustand, der `true` ist (und damit den `collapsed` Zustand des Elements), mithilfe des `:hidden` Selektors und entfernen den Rahmen.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) auszuwählen. Zusätzlich kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, das sich in einem bestimmten Zustand befindet, auszuwählen.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie das funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiele für benutzerdefinierte Elemente ansehen. Sie finden den Quellcode für alle diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository, und Sie können sie alle live auf <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zunächst werden wir uns ein autonomes benutzerdefiniertes Element ansehen. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bild-Icon und einen Textstring als Attribute und bettet das Icon in die Seite ein. Wenn das Icon fokussiert wird, wird der Text in einem Infofenster angezeigt, um weitere kontextbezogene Informationen bereitzustellen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zunächst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypenkette zu etablieren.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionen, die das Element hat, wenn es an den DOM angeschlossen ist. In diesem Fall fügen wir dem benutzerdefinierten Element einen Schattenbaum hinzu, verwenden DOM-Manipulation, um die interne Struktur des Schatten-DOMs des Elements zu erstellen — die dann an den Schattenbaum angefügt wird — und schließlich fügen wir etwas CSS an, um es zu stylen. Wir erledigen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements nicht zur Verfügung stehen, bis es an den DOM angeschlossen ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der zuvor erwähnten `define()` Methode — in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt verfügbar, um auf unserer Seite verwendet zu werden. In unserem HTML verwenden wir es folgendermaßen:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Externe Stile referenzieren

Im obigen Beispiel wenden wir Stile auf den Schatten-DOM an, indem wir ein {{htmlelement("style")}}-Element verwenden, aber Sie können stattdessen ein externes Stylesheet über ein {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das benutzerdefinierte `<popup-info>` Element modifizieren, um ein externes Stylesheet zu verwenden.

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

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir mit einem {{HTMLElement("link")}}-Element auf ein externes Stylesheet verlinken, das wir dem Schatten-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Zeichnen des Schattenbaums nicht blockieren, daher kann es zu einem "Flash of Unstyled Content" (FOUC) kommen, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont wurden oder die identischen Text haben, um ihnen zu erlauben, ein gemeinsames zugrunde liegendes Stylesheet zu teilen. Mit dieser Optimierung sollten die Leistungsunterschiede zwischen externen und internen Stilen ähnlich sein.

### Angepasste eingebaute Elemente

Nun lassen Sie uns ein Beispiel für ein angepasstes eingebautes Element betrachten. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Kollabieren der Listenelemente zu unterstützen.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte lesen Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributreferenz für Hinweise zur Realitätsumsetzung benutzerdefinierter eingebauter Elemente.

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

Beachten Sie, dass wir diesmal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erweitern, nicht [`HTMLElement`](/de/docs/Web/API/HTMLElement). Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor ist der größte Teil des Codes im `connectedCallback()` Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, nur dass es diesmal auch ein Optionsobjekt enthält, das detailliert beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht auch ein wenig anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben aber den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, nach vollständiger Analyse des DOMs ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste zum DOM hinzugefügt wird, und zu diesem Zeitpunkt noch keine Kind-Elemente hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies zu gewährleisten, ist das Hinzufügen des [defer](/de/docs/Web/HTML/Element/script#defer)-Attributs zur Skriptzeile:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das `<custom-square>` autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` genannt werden.

- [Sehen Sie sich das Beispiel live an](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element einen Schatten-DOM hinzu und fügen dann leere {{htmlelement("div")}} und {{htmlelement("style")}} Elemente an den Schattenbaum an:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, erhält seinen Schattenbaum, findet sein `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zu dem Stil hinzu.

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

Die tatsächlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks behandelt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element zum DOM hinzugefügt wird — hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat entsprechend der in seinen Attributen definierten Stile gestaltet ist:

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks protokollieren Nachrichten in der Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

Das `attributeChangedCallback()`-Callback wird immer dann ausgeführt, wenn eines der Attribute des Elements auf irgendeine Weise geändert wird. Wie Sie an den Parametern sehen können, ist es möglich, auf Attribute individuell zu reagieren, indem man sich ihren Namen sowie den alten und neuen Attributwert ansieht. In diesem Fall führen wir jedoch einfach die Funktion `updateStyle()` erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

Beachten Sie, dass das `attributeChangedCallback()`-Callback nur dann ausgelöst wird, wenn ein Attribut geändert wird, wenn Sie die Attribute beobachten. Dies wird erreicht, indem eine `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse angegeben wird - diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
