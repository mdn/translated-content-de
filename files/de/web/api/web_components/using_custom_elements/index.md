---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{DefaultAPISidebar("Web Components")}}

Eine der Schlüsselfunktionen von Web-Komponenten ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: Das sind HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die das Set von im Browser verfügbaren Elementen erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und führt durch einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der Basisklasse des HTML-Elements [`HTMLElement`](/de/docs/Web/API/HTMLElement). Sie müssen deren Verhalten von Grund auf neu implementieren.

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste eingebaute Elemente zu unterstützen. Weitere Informationen finden Sie im [`is` attribute](/de/docs/Web/HTML/Reference/Global_attributes/is).

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten (im Fall von angepassten eingebauten Elementen), abgeleitet wird.

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

Im Klassen[constructor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den Anfangszustand und die Standardwerte festlegen, Ereignis-Listener registrieren und möglicherweise einen Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für benutzerdefinierte Elementkonstruktoren und -reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lebenszyklus-Callbacks von benutzerdefinierten Elementen

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn der Code auf der Seite in bestimmten Weisen mit Ihrem benutzerdefinierten Element interagiert. Durch die Bereitstellung einer Implementierung dieser Methoden, die in der Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet werden, können Sie Code in Reaktion auf diese Ereignisse ausführen.

Lebenszyklus-Callbacks von benutzerdefinierten Elementen umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element zum Dokument hinzugefügt wird. Die Spezifikation empfiehlt, soweit möglich, dass Entwickler die Einrichtung des benutzerdefinierten Elements in diesem Callback anstelle des Konstruktors implementieren.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle_ von `connectedCallback()` und `disconnectedCallback()` jedes Mal aufgerufen, wenn das Element an eine andere Stelle im DOM verschoben wird, z.B. durch [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore). Verwenden Sie dies, um zu vermeiden, dass Initialisierungs-/Aufräumcodes in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks ausgeführt werden, wenn das Element nicht tatsächlich zum oder aus dem DOM hinzugefügt oder entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
- `adoptedCallback()`: Wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: Wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reaktion auf Attributänderungen](#reaktion_auf_attributänderungen) für weitere Details über dieses Callback.

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

Die Position eines benutzerdefinierten Elements im DOM kann wie jedes reguläre HTML-Element manipuliert werden, aber es gibt Lebenszyklusnebenwirkungen zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst, da das Element vom DOM getrennt und wieder mit ihm verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um jeglichen erforderlichen Initialisierungs- oder Aufräumcode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt wird, kann dies beim Verschieben (anstatt Löschen oder Einfügen) Probleme mit seinem Zustand verursachen. Sie könnten zum Beispiel einige gespeicherte Daten entfernen, die das Element weiterhin benötigt.

Wenn Sie den Zustand des Elements bewahren möchten, können Sie dies tun, indem Sie einen `connectedMoveCallback()`-Lebenszyklus-Callback innerhalb der Elementklasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu verschieben (anstatt ähnlicher Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass der `connectedMoveCallback()`-Callback anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten einen leeren `connectedMoveCallback()` hinzufügen, um zu verhindern, dass die anderen beiden Callbacks ausgeführt werden, oder einige benutzerdefinierte Logik hinzufügen, um mit der Verschiebung umzugehen:

```js
connectedMoveCallback() {
  console.log("Custom move-handling logic here.");
}
```

## Registrierung eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die `define()`-Methode nimmt die folgenden Argumente:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere in der Spezifikation aufgeführte Regeln für [definition of a valid name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) erfüllen.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur enthalten für angepasste eingebaute Elemente, dies ist ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die einen String darstellt, der das eingebaute Element benennt, das erweitert werden soll.

Zum Beispiel registriert dieser Code das `WordCount`-angepasste eingebaute Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo`-autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwendung eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes eingebautes Element zu verwenden, verwenden Sie das eingebaute Element, aber mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen genau wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Reaktion auf Attributänderungen

Ähnlich wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element auf Änderungen des Attributwerts reagieren können. Hierzu muss ein benutzerdefiniertes Element die folgenden Mitglieder zur Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Diese muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des Lebenszyklus-Callbacks `attributeChangedCallback()`.

Das `attributeChangedCallback()`-Callback wird dann aufgerufen, wenn ein Attribut hinzugefügt, geändert, entfernt oder ersetzt wird, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist.

Das Callback erhält drei Argumente:

- Der Name des Attributs, das geändert wurde.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size`-Attribut beobachten und die alten und neuen Werte bei Änderungen protokollieren:

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

Beachten Sie, dass wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann wird `attributeChangedCallback()` aufgerufen, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. Daher wird im folgenden Beispiel `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, auch wenn das Attribut nie mehr geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel für die Verwendung von `attributeChangedCallback()` finden Sie unter [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie "hover", "disabled" und "read-only".
Einige dieser Zustände können als Attribute mithilfe von HTML oder JavaScript gesetzt werden, während andere intern und unerreichbar sind.
Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element zu selektieren und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende Elemente) ermöglichen es Ihnen auch, Zustände zu definieren und gegen sie mit der [`:state()`](/de/docs/Web/CSS/:state)-Pseudo-Klassen-Funktion zu selektieren.
Der untenstehende Code zeigt, wie dies funktioniert, anhand des Beispiels eines autonomen benutzerdefinierten Elements, das einen internen Zustand `"collapsed"` hat.

Der `collapsed`-Zustand wird als boolesche Eigenschaft repräsentiert (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS selektierbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verknüpfen, das wiederum über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft Zugriff auf ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) bereitstellt.
Der Setter für den (internen) `collapsed`-Zustand fügt das _Identifier_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Bezeichner ist einfach ein String: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den dem benutzerdefinierten Element `CustomStateSet` (`this._internals.states`) hinzugefügten Bezeichner verwenden, um den benutzerdefinierten Zustand des Elements zu selektieren.
Dies wird erreicht, indem der Bezeichner an die [`:state()`](/de/docs/Web/CSS/:state)-Pseudo-Klasse übergeben wird.
Zum Beispiel, unten selektieren wir den `hidden`-Zustand, wenn er `true` ist (und somit den `collapsed`-Zustand des Elements), mit dem `:hidden`-Selektor und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()`-Pseudo-Klasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudo-Klassen-Funktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu selektieren. Zusätzlich kann die `:state()`-Pseudo-Klasse nach der [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu selektieren, das sich in einem bestimmten Zustand befindet.

Im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) befinden sich mehrere Live-Beispiele, die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens betrachten wir einige Beispiele für benutzerdefinierte Elemente. Sie können den Quellcode für alle diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden, und Sie können alle live unter <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst betrachten wir ein autonomes benutzerdefiniertes Element. Das `<popup-info>`-benutzerdefinierte Element nimmt ein Bildsymbol und einen Textstring als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, um die korrekte Prototypenkette zu etablieren.

Innerhalb der Methode `connectedCallback()` definieren wir alle Funktionen, die das Element haben wird, wenn das Element mit dem DOM verbunden ist. In diesem Fall hängen wir ein Shadow-Root an das benutzerdefinierte Element an, verwenden einige DOM-Manipulationen, um die interne Struktur des Shadow DOM des Elements zu erstellen – die dann an das Shadow-Root angehängt wird – und fügen schließlich einige CSS hinzu, um es zu stylen. Wir führen diese Arbeit nicht im Konstruktor aus, da Attribute des Elements nicht verfügbar sind, bis es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der `define()`-Methode, die wir zuvor erwähnt haben — in den Parametern spezifizieren wir den Elementnamen und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist nun verfügbar, um auf unserer Seite verwendet zu werden. In unserem HTML verwenden wir es so:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referenzieren externer Stile

Im obigen Beispiel wenden wir Stile auf das Shadow DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können stattdessen ein externes Stylesheet über ein {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>`-benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

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

Es ähnelt dem ursprünglichen `<popup-info>`-Beispiel, außer dass wir auf ein externes Stylesheet über ein {{HTMLElement("link")}}-Element verweisen, das wir zum Shadow DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Zeichnen des Shadow-Roots nicht blockieren, sodass es möglicherweise einen Moment lang nicht gestylten Inhalt (FOUC) gibt, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont oder denselben Text haben, um ihnen zu ermöglichen, ein gemeinsames zugrunde liegendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung externer und interner Stile ähnlich sein.

### Angepasste eingebaute Elemente

Nun schauen wir uns ein Beispiel für ein angepasstes eingebautes Element an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um das Erweitern und Zusammenklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie die [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität von angepassten eingebauten Elementen.

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

Beachten Sie, dass wir dieses Mal von [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) anstelle von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erben. Dies bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor ist der größte Teil des Codes im `connectedCallback()`-Lebenszyklus-Callback enthalten.

Anschließend registrieren wir das Element mit der `define()`-Methode, wie zuvor, außer dass dieses Mal auch ein Optionsobjekt enthalten ist, das angibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Das Verwenden des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben aber den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass in diesem Fall sichergestellt werden muss, dass das Skript, das unser benutzerdefiniertes Element definiert, nach dem vollständigen Parsen des DOMs ausgeführt wird, da `connectedCallback()` aufgerufen wird, sobald die erweiterbare Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt noch keine Kinder hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut zur Zeile hinzuzufügen, die das Skript enthält:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das autonome benutzerdefinierte Element `<custom-square>` zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute namens `"size"` und `"color"` bestimmt werden.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor fügen wir dem Element ein Shadow DOM hinzu und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente zum Shadow-Root hinzu:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — sie nimmt ein Element, holt sich das Shadow-Root, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} dem Stil hinzu.

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

Die eigentlichen Updates werden alle durch die Lebenszyklus-Callbacks gehandhabt. Der `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()`-Funktion aus, um sicherzustellen, dass das Quadrat gemäß seinen Attributen gestylt ist:

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

Die `disconnectedCallback()`- und `adoptedCallback()`-Callbacks geben Nachrichten in die Konsole aus, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Das `attributeChangedCallback()`-Callback wird jedes Mal ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie aus seinen Parametern sehen können, ist es möglich, auf Einzelattribute zu reagieren, indem man deren Namen sowie alte und neue Attributwerte betrachtet. In diesem Fall führen wir jedoch einfach erneut die Funktion `updateStyle()` aus, um sicherzustellen, dass der Stil des Quadrats entsprechend den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, damit das `attributeChangedCallback()`-Callback ausgelöst wird, wenn ein Attribut geändert wird, Sie die Attribute beobachten müssen. Dies wird durch Angabe einer `static get observedAttributes()`-Methode innerhalb der benutzerdefinierten Elementklasse erreicht - diese sollte ein Array zurückgeben, das die Namen der zu beobachtenden Attribute enthält:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
