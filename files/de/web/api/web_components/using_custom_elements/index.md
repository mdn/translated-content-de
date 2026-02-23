---
title: Verwenden von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{DefaultAPISidebar("Web Components")}}

Eine der Hauptfunktionen von Web Components ist die Möglichkeit, _benutzerdefinierte Elemente_ zu erstellen: HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die den Satz von im Browser verfügbaren Elementen erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und erläutert einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** erben von der HTML-Element-Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement). Ihr Verhalten muss von Grund auf neu implementiert werden.

- **Angepasste integrierte Elemente** erben von Standard-HTML-Elementen wie [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) oder [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement). Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Safari plant nicht, angepasste integrierte Elemente zu unterstützen. Weitere Informationen finden Sie im Attribut [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is).

Für beide Arten von benutzerdefinierten Elementen sind die grundlegenden Schritte zur Erstellung und Verwendung dieselben:

- Sie [implementieren zuerst das Verhalten](#implementierung_eines_benutzerdefinierten_elements), indem Sie eine JavaScript-Klasse definieren.
- Dann [registrieren Sie das benutzerdefinierte Element](#registrieren_eines_benutzerdefinierten_elements) auf der aktuellen Seite. Sie können auch [registrierte Bereiche](#registrierte_bereiche_für_benutzerdefinierte_elemente) erstellen, um Definitionen auf einen bestimmten DOM-Teilbaum zu beschränken.
- Schließlich können Sie das [benutzerdefinierte Element](#verwenden_eines_benutzerdefinierten_elements) in Ihrem HTML- oder JavaScript-Code verwenden.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitert (im Fall von autonomen Elementen) oder die Schnittstelle, die Sie anpassen möchten (im Fall von angepassten integrierten Elementen). Diese Klasse wird nicht von Ihnen aufgerufen, sondern vom Browser. Unmittelbar nach der Definition der Klasse sollten Sie das benutzerdefinierte Element [registrieren](#registrieren_eines_benutzerdefinierten_elements), damit Sie Instanzen davon mit den üblichen DOM-Praktiken erstellen können, wie z.B. das Schreiben des Elements in HTML-Markup, das Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement) usw.

Hier ist die Implementierung eines minimalen benutzerdefinierten Elements, das das {{HTMLElement("p")}} Element anpasst:

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

Im Klassen-[Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) können Sie den Anfangszustand und Standardwerte einrichten, Ereignis-Listener registrieren und möglicherweise eine Shadow-Root erstellen. Zu diesem Zeitpunkt sollten Sie keine Attribute oder Kinder des Elements inspizieren oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für benutzerdefinierte Element-Konstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für den vollständigen Satz von Anforderungen.

### Lebenszyklus-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, wird der Browser bestimmte Methoden Ihrer Klasse aufrufen, wenn im Seiten-Code mit Ihrem benutzerdefinierten Element auf bestimmte Weise interagiert wird. Durch Bereitstellung einer Implementierung dieser Methoden, die von der Spezifikation als _Lebenszyklus-Callbacks_ bezeichnet werden, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Die Lebenszyklus-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element zum Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler das Setup von benutzerdefinierten Elementen so weit wie möglich in diesem Callback und nicht im Konstruktor implementieren.
- `disconnectedCallback()`: Wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `connectedMoveCallback()`: Wenn definiert, wird dies _anstelle von_ `connectedCallback()` und `disconnectedCallback()` aufgerufen, jedes Mal, wenn das Element via [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) an einen anderen Ort im DOM verschoben wird. Verwenden Sie dies, um zu vermeiden, dass Initialisierungs-/Bereinigungscode in den `connectedCallback()`- und `disconnectedCallback()`-Callbacks ausgeführt wird, wenn das Element nicht tatsächlich dem DOM hinzugefügt oder daraus entfernt wird. Siehe [Lebenszyklus-Callbacks und zustandserhaltende Verschiebungen](#lebenszyklus-callbacks_und_zustandserhaltende_verschiebungen) für weitere Details.
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

Die Position eines benutzerdefinierten Elements im DOM kann manipulierbar sein, genau wie jedes normale HTML-Element, aber es gibt Lebenszyklus-Nebenwirkungen zu beachten.

Jedes Mal, wenn ein benutzerdefiniertes Element verschoben wird (über Methoden wie [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) oder [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)), werden die `disconnectedCallback()`- und `connectedCallback()`-Lebenszyklus-Callbacks ausgelöst, da das Element vom DOM getrennt und wieder verbunden wird.

Dies könnte Ihr beabsichtigtes Verhalten sein. Da diese Callbacks jedoch typischerweise verwendet werden, um erforderlichen Initialisierungs- oder Bereinigungscode auszuführen, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden muss, kann es zu Problemen mit seinem Zustand führen, wenn sie ausgeführt werden, wenn das Element tatsächlich nicht entfernt oder eingefügt wird. Sie könnten zum Beispiel einige gespeicherte Daten entfernen, die das Element noch benötigt.

Wenn Sie den Zustand des Elements bewahren wollen, können Sie dies tun, indem Sie einen `connectedMoveCallback()`-Lebenszyklus-Callback innerhalb der Element-Klasse definieren und dann die Methode [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) verwenden, um das Element zu bewegen (anstelle von ähnlichen Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)). Dies führt dazu, dass `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt wird.

Sie könnten einen leeren `connectedMoveCallback()` hinzufügen, um zu verhindern, dass die anderen beiden Callbacks ausgeführt werden, oder einige benutzerdefinierte Logik zur Behandlung der Verschiebung einfügen:

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

Um ein benutzerdefiniertes Element in einer Seite verfügbar zu machen, rufen Sie die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) von [`Window.customElements`](/de/docs/Web/API/Window/customElements) auf.

Die Methode `define()` nimmt folgende Argumente entgegen:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmte andere Regeln erfüllen, die in der Spezifikation aufgelistet sind [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste integrierte Elemente enthalten. Dies ist ein Objekt, das eine einzige Eigenschaft `extends` enthält, die eine Zeichenkette ist und das integrierte Element benennt, von dem erweitert wird.

Zum Beispiel registriert dieser Code das `WordCount` angepasste eingebaute Element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Dieser Code registriert das `PopupInfo` autonome benutzerdefinierte Element:

```js
customElements.define("popup-info", PopupInfo);
```

## Verwenden eines benutzerdefinierten Elements

Sobald Sie ein benutzerdefiniertes Element definiert und registriert haben, können Sie es in Ihrem Code verwenden.

Um ein angepasstes integriertes Element zu verwenden, verwenden Sie das eingebaute Element, jedoch mit dem benutzerdefinierten Namen als Wert des [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attributs:

```html
<p is="word-count"></p>
```

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Registrierte Bereiche für benutzerdefinierte Elemente

Die oben genannten Beispiele registrieren benutzerdefinierte Elemente in der globalen [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), die über [`Window.customElements`](/de/docs/Web/API/Window/customElements) zugänglich ist. Das bedeutet, dass jeder benutzerdefinierte Elementname, den Sie registrieren, global eindeutig über die gesamte Seite sein muss. Wenn Anwendungen wachsen und beginnen, Komponenten aus mehreren Bibliotheken zu kombinieren, können globale Namenskollisionen ein Problem werden — wenn zwei Bibliotheken versuchen, <my-button> zu definieren, schlägt eine von ihnen fehl.

**Registrierte Bereiche für benutzerdefinierte Elemente** beheben dies, indem sie Ihnen erlauben, ein unabhängiges Register zu erstellen, dessen Definitionen nur für einen bestimmten DOM-Teilbaum gelten, wie z.B. eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Unterschiedliche Shadow-Bäume können jeweils ihr eigenes Register mit ihren eigenen Definitionen verwenden, auch wenn sich die Elementnamen überschneiden.

### Erstellen eines registrierten Bereichs

Erstellen Sie einen registrierten Bereich mit dem [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor und registrieren Sie Elemente darauf mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define), genau wie beim globalen Register:

```js
const myRegistry = new CustomElementRegistry();

myRegistry.define(
  "my-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "Hello from scoped registry!";
    }
  },
);
```

> [!NOTE]
> Registrierte Bereiche unterstützen die Option `extends` in `define()` nicht (zum Erstellen [angepasster eingebauter Elemente](#arten_von_benutzerdefinierten_elementen)). Der Versuch, `extends` mit einem registrierten Bereich zu verwenden, löst einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus.

### Assoziieren eines registrierten Bereichs mit einer Shadow-Root

Eine Möglichkeit, einen registrierten Bereich zu verwenden, besteht darin, ihn an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) über die Option `customElementRegistry` zu übergeben. Elemente, die innerhalb dieses Shadow-Baums analysiert oder erstellt werden, verwenden dann die Definitionen des registrierten Bereichs anstelle der globalen:

```js
const host = document.createElement("div");
document.body.appendChild(host);

const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: myRegistry,
});

// <my-element> is upgraded using myRegistry's definition
shadow.innerHTML = "<my-element></my-element>";
```

Sie können auch nach der Erstellung der Shadow-Root einen registrierten Bereich assoziieren, indem Sie [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) aufrufen. Dies ist nützlich, wenn Sie die DOM-Struktur zuerst einrichten und das Register später anfügen müssen:

```js
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: null, // no registry yet
});
shadow.innerHTML = "<my-element></my-element>";

// Later, associate the scoped registry and upgrade elements
myRegistry.initialize(shadow);
```

### Deklaratives Shadow-DOM mit registriertem Bereich

Für [declaratives Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) können Sie das Attribut `shadowrootcustomelementregistry` auf einem {{HTMLElement("template")}}-Element verwenden. Dies teilt dem HTML-Parser mit, das die Shadow-Root's [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) als `null` bleibt, so dass ein registrierter Bereich später mit `initialize()` angehängt werden kann:

```html
<my-host>
  <template shadowrootmode="open" shadowrootcustomelementregistry>
    <my-element></my-element>
  </template>
</my-host>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen in einem Attributwert zu reagieren. Dazu muss ein benutzerdefiniertes Element der Klasse, welche das benutzerdefinierte Element implementiert, die folgenden Mitglieder hinzufügen:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsbenachrichtigungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Callbacks.

Das `attributeChangedCallback()` Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Das Callback erhält drei Argumente:

- Den Namen des Attributs, das sich geändert hat.
- Den alten Wert des Attributs.
- Den neuen Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size` Attribut beobachten und die alten und neuen Werte protokollieren, wenn sie sich ändern:

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

Beachten Sie, dass wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann wird `attributeChangedCallback()` aufgerufen, nachdem das Attribut initialisiert worden ist, wenn die Deklaration des Elements zum ersten Mal analysiert wird. So wird im folgenden Beispiel `attributeChangedCallback()` aufgerufen, wenn das DOM analysiert wird, auch wenn das Attribut nie weiter geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Ein vollständiges Beispiel, das die Verwendung von `attributeChangedCallback()` zeigt, finden Sie unter [Lebenszyklus-Callbacks](#lebenszyklus-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustandspseudoklassen-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "deaktiviert" und "nur lesen".
Einige dieser Zustände können als Attribute festgelegt werden, indem HTML oder JavaScript verwendet wird, während andere intern sind und nicht festgelegt werden können.
Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht Elemente, die auf eingebauten Elementen basieren) erlauben Ihnen auch, Zustände zu definieren und mit der {{cssxref(":state()")}} Pseudoklassenfunktion gegen sie auszuwählen.
Der untenstehende Code zeigt, wie dies funktioniert, indem das Beispiel eines autonomen benutzerdefinierten Elements verwendet wird, das einen internen Zustand `"collapsed"` hat.

Der `collapsed` Zustand wird als boolesche Eigenschaft dargestellt (mit Setter- und Getter-Methoden), die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS auswählbar zu machen, ruft das benutzerdefinierte Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) in seinem Konstruktor auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt anzuhängen, das wiederum Zugang zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) über die [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft bietet.
Der Setter für den (internen) `collapsed` Zustand fügt den _Bezeichner_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt ihn, wenn der Zustand `false` ist.
Der Bezeichner ist nur eine Zeichenkette: in diesem Fall haben wir ihn `hidden` genannt, aber wir hätten ihn genauso gut `collapsed` nennen können.

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

Wir können den Bezeichner, der zum `CustomStateSet` des benutzerdefinierten Elements (`this._internals.states`) hinzugefügt wurde, verwenden, um den benutzerdefinierten Zustand des Elements abzugleichen.
Das wird durch Übergeben des Bezeichners an die {{cssxref(":state()")}} Pseudoklasse erreicht.
Zum Beispiel wählen wir unten den `hidden` Zustand, der true ist (und damit den `collapsed` Zustand des Elements), mit dem `:hidden` Selektor aus und entfernen den Rand.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudoklasse kann auch innerhalb der {{cssxref(":host()")}} Pseudoklassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb eines benutzerdefinierten Elements, das Shadow-DOM verwendet](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom), zu vergleichen. Zusätzlich kann die `:state()` Pseudoklasse nach dem {{cssxref("::part()")}} Pseudoelement verwendet werden, um die [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, das sich in einem bestimmten Zustand befindet, abzugleichen.

Es gibt mehrere Live-Beispiele in [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiel benutzerdefinierter Elemente ansehen. Sie finden den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples) Repository, und Sie können sie alle live auf <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und eine Textzeichenkette als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, zeigt es den Text in einem Popup-Informationsfeld an, um weitere kontextbezogene Informationen bereitzustellen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zuerst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die Klasse [`HTMLElement`](/de/docs/Web/API/HTMLElement) erweitert.

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

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit einem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, damit die korrekte Prototyp-Kette erstellt wird.

Innerhalb der Methode `connectedCallback()`, definieren wir alle Funktionalitäten, die das Element haben wird, wenn es mit dem DOM verbunden ist. In diesem Fall hängen wir eine Shadow-Root an das benutzerdefinierte Element an, verwenden ein wenig DOM-Manipulation, um die interne Shadow-DOM-Struktur des Elements zu erstellen – die dann an die Shadow-Root angehängt wird – und schließlich fügen wir einige CSS zur Shadow-Root hinzu, um es zu stylen. Wir tun diese Arbeit nicht im Konstruktor, da die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Schließlich registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der Methode `define()`, die wir zuvor erwähnten — in den Parametern geben wir den Elementnamen und dann den Klassennamen an, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist nun auf unserer Seite verfügbar. In unserem HTML verwenden wir es wie folgt:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Verweisen auf externe Styles

Im obigen Beispiel wenden wir Stile auf das Shadow-DOM mit einem {{htmlelement("style")}}-Element an, aber Sie können stattdessen ein externes Stylesheet aus einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element ändern, um ein externes Stylesheet zu verwenden.

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

Es ist wie das ursprüngliche `<popup-info>` Beispiel, außer dass wir auf ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verweisen, das wir dem Shadow-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern der Shadow-Root nicht blockieren, so dass es zu einem Blitz von ungestyltem Inhalt (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die von einem gemeinsamen Knoten geklont wurden oder identischen Text haben, um ihnen zu ermöglichen, ein gemeinsames Basis-Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Stilen ähnlich sein.

### Angepasste integrierte Elemente

Schauen wir uns nun ein Beispiel für ein angepasstes eingebautes Element an. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}} Element, um das Erweitern und Einklappen der Listenelemente zu unterstützen.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte sehen Sie sich die Attributreferenz [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) an, um Hinweise zur Implementierungsrealität von angepassten integrierten Elementen zu erhalten.

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

Beachten Sie, dass wir diesmal [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement) erweitern, anstatt [`HTMLElement`](/de/docs/Web/API/HTMLElement). Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()` Lebenszyklus-Callback.

Als Nächstes registrieren wir das Element mit der `define()` Methode wie zuvor, mit der Ausnahme, dass diesmal auch ein Optionsobjekt enthalten ist, das angibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Das Verwenden des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements innerhalb des `is` Attributs an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript, das unser benutzerdefiniertes Element definiert, erst nach vollständiger Analyse des DOM ausgeführt wird, da `connectedCallback()` sofort aufgerufen wird, wenn die erweiterbare Liste dem DOM hinzugefügt wird und zu diesem Zeitpunkt deren Kinder noch nicht hinzugefügt wurden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, besteht darin, das [defer](/de/docs/Web/HTML/Reference/Elements/script#defer) Attribut zur Zeile hinzuzufügen, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lebenszyklus-Callbacks

Bisher haben wir nur einen Lebenszyklus-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel, `<custom-square>`, werden wir einige der anderen sehen. Das `<custom-square>` autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die `"size"` und `"color"` genannt werden.

- [Beispiel live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Quellcode ansehen](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor hängen wir eine Shadow-DOM an das Element an und fügen dann leere {{htmlelement("div")}} und {{htmlelement("style")}} Elemente an die Shadow-Root an:

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

Die Schlüsselfunktion in diesem Beispiel ist `updateStyle()` — diese nimmt ein Element, holt sich dessen Shadow-Root, findet dessen `<style>`-Element und fügt {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} zu dem Stil hinzu.

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

Die eigentlichen Aktualisierungen werden alle von den Lebenszyklus-Callbacks gehandhabt. Das `connectedCallback()` läuft jedes Mal, wenn das Element dem DOM hinzugefügt wird — hier führen wir die `updateStyle()` Funktion aus, um sicherzustellen, dass das Quadrat so wie in seinen Attributen definiert gestylt wird:

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

Die `disconnectedCallback()` und `adoptedCallback()` Callbacks protokollieren Nachrichten an die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

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

Das `attributeChangedCallback()` Callback wird jedes Mal aufgerufen, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie aus seinen Parametern hervorgeht, ist es möglich, einzeln auf Attribute zu reagieren, indem man sich deren Namen und alte sowie neue Attributwerte ansieht. In diesem Fall führen wir jedoch einfach die `updateStyle()` Funktion erneut aus, um sicherzustellen, dass der Stil des Quadrats gemäß den neuen Werten aktualisiert wird:

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

Beachten Sie, dass, um das `attributeChangedCallback()` Callback auszulösen, wenn sich ein Attribut ändert, die Attribute beobachtet werden müssen. Dies geschieht, indem eine `static get observedAttributes()` Methode innerhalb der Klasse des benutzerdefinierten Elements spezifiziert wird - dies sollte ein Array zurückgeben, das die Namen der Attribute enthält, die beobachtet werden sollen:

```js
class Square extends HTMLElement {
  // …
  static get observedAttributes() {
    return ["color", "size"];
  }
  // …
}
```
