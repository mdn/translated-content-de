---
title: Verwendung von benutzerdefinierten Elementen
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale von Webkomponenten ist die Fähigkeit, _benutzerdefinierte Elemente_ zu erstellen: HTML-Elemente, deren Verhalten vom Webentwickler definiert wird und die das Set der im Browser verfügbaren Elemente erweitern.

Dieser Artikel führt in benutzerdefinierte Elemente ein und zeigt einige Beispiele.

## Arten von benutzerdefinierten Elementen

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Angepasste eingebaute Elemente** erben von Standard-HTML-Elementen, wie z.B. {{domxref("HTMLImageElement")}} oder {{domxref("HTMLParagraphElement")}}. Ihre Implementierung erweitert das Verhalten ausgewählter Instanzen des Standard-Elements.

  > [!NOTE]
  > Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is) Attributreferenz für Vorbehalte zur Implementierungsrealität angepasster eingebauter Elemente.

- **Autonome benutzerdefinierte Elemente** erben von der Basis-HTML-Elementklasse {{domxref("HTMLElement")}}. Sie müssen ihr Verhalten von Grund auf implementieren.

## Implementierung eines benutzerdefinierten Elements

Ein benutzerdefiniertes Element wird als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) implementiert, die von {{domxref("HTMLElement")}} (im Fall von autonomen Elementen) oder der Schnittstelle, die Sie anpassen möchten (im Fall von angepassten eingebauten Elementen), abgeleitet wird.

Hier ist die Implementierung eines minimalen benutzerdefinierten Elements, das das {{HTMLElement("p")}}-Element anpasst:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Hier wird die Funktionalität des Elements geschrieben
}
```

Hier ist die Implementierung eines minimalen autonomen benutzerdefinierten Elements:

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // Hier wird die Funktionalität des Elements geschrieben
}
```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) der Klasse können Sie den Anfangszustand und die Standardwerte festlegen, Ereignis-Listener registrieren und eventuell ein Shadow Root erstellen. Zu diesem Zeitpunkt sollten Sie die Attribute oder Kinder des Elements nicht überprüfen oder neue Attribute oder Kinder hinzufügen. Siehe [Anforderungen für benutzerdefinierte Elementkonstruktoren und Reaktionen](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) für die vollständige Liste der Anforderungen.

### Lifecycle-Callbacks für benutzerdefinierte Elemente

Sobald Ihr benutzerdefiniertes Element registriert ist, ruft der Browser bestimmte Methoden Ihrer Klasse auf, wenn Code auf der Seite auf Ihr benutzerdefiniertes Element in bestimmter Weise zugreift. Indem Sie eine Implementierung dieser Methoden bereitstellen, die die Spezifikation als _Lifecycle-Callbacks_ bezeichnet, können Sie Code als Reaktion auf diese Ereignisse ausführen.

Lifecycle-Callbacks für benutzerdefinierte Elemente umfassen:

- `connectedCallback()`: wird jedes Mal aufgerufen, wenn das Element dem Dokument hinzugefügt wird. Die Spezifikation empfiehlt, dass Entwickler die Einrichtung des benutzerdefinierten Elements nach Möglichkeit in diesem Callback implementieren, anstatt im Konstruktor.
- `disconnectedCallback()`: wird jedes Mal aufgerufen, wenn das Element aus dem Dokument entfernt wird.
- `adoptedCallback()`: wird jedes Mal aufgerufen, wenn das Element in ein neues Dokument verschoben wird.
- `attributeChangedCallback()`: wird aufgerufen, wenn Attribute geändert, hinzugefügt, entfernt oder ersetzt werden. Siehe [Reagieren auf Attributänderungen](#reagieren_auf_attributänderungen) für weitere Details zu diesem Callback.

Hier ist ein minimales benutzerdefiniertes Element, das diese Lebenszyklusereignisse protokolliert:

```js
// Erstelle eine Klasse für das Element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // Super immer zuerst im Konstruktor aufrufen
    super();
  }

  connectedCallback() {
    console.log("Benutzerdefiniertes Element auf die Seite hinzugefügt.");
  }

  disconnectedCallback() {
    console.log("Benutzerdefiniertes Element von Seite entfernt.");
  }

  adoptedCallback() {
    console.log("Benutzerdefiniertes Element auf neue Seite verschoben.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribut ${name} wurde geändert.`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

## Registrierung eines benutzerdefinierten Elements

Um ein benutzerdefiniertes Element auf einer Seite verfügbar zu machen, rufen Sie die Methode {{domxref("CustomElementRegistry.define()", "define()")}} von {{domxref("Window.customElements")}} auf.

Die `define()`-Methode nimmt die folgenden Argumente an:

- `name`
  - : Der Name des Elements. Dieser muss mit einem Kleinbuchstaben beginnen, ein Bindestrich enthalten und bestimmten anderen Regeln entsprechen, die in der Spezifikation unter [Definition eines gültigen Namens](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) aufgeführt sind.
- `constructor`
  - : Die Konstruktorfunktion des benutzerdefinierten Elements.
- `options`
  - : Nur für angepasste eingebaute Elemente enthalten, dies ist ein Objekt, das eine einzelne Eigenschaft `extends` enthält, die ein String ist, der das eingebaute zu erweiternde Element benennt.

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

Um ein autonomes benutzerdefiniertes Element zu verwenden, verwenden Sie den benutzerdefinierten Namen wie ein eingebautes HTML-Element:

```html
<popup-info>
  <!-- Inhalt des Elements -->
</popup-info>
```

## Reagieren auf Attributänderungen

Wie eingebaute Elemente können benutzerdefinierte Elemente HTML-Attribute verwenden, um das Verhalten des Elements zu konfigurieren. Um Attribute effektiv zu nutzen, muss ein Element in der Lage sein, auf Änderungen des Attributwerts zu reagieren. Zu diesem Zweck muss ein benutzerdefiniertes Element die folgenden Mitglieder zu der Klasse hinzufügen, die das benutzerdefinierte Element implementiert:

- Eine statische Eigenschaft namens `observedAttributes`. Dies muss ein Array sein, das die Namen aller Attribute enthält, für die das Element Änderungsmitteilungen benötigt.
- Eine Implementierung des `attributeChangedCallback()` Lebenszyklus-Callbacks.

Das `attributeChangedCallback()`-Callback wird dann aufgerufen, wann immer ein Attribut, dessen Name in der `observedAttributes`-Eigenschaft des Elements aufgeführt ist, hinzugefügt, geändert, entfernt oder ersetzt wird.

Das Callback erhält drei Argumente:

- Der Name des Attributs, das geändert wurde.
- Der alte Wert des Attributs.
- Der neue Wert des Attributs.

Zum Beispiel wird dieses autonome Element ein `size`-Attribut beobachten und die alten und neuen Werte protokollieren, wenn sie sich ändern:

```js
// Erstelle eine Klasse für das Element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["size"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribut ${name} hat sich von ${oldValue} zu ${newValue} geändert.`,
    );
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

Beachten Sie, dass wenn die HTML-Deklaration des Elements ein beobachtetes Attribut enthält, dann `attributeChangedCallback()` aufgerufen wird, nachdem das Attribut initialisiert wurde, wenn die Deklaration des Elements zum ersten Mal analysiert wird. So wird im folgenden Beispiel `attributeChangedCallback()` beim Parsen des DOM aufgerufen, selbst wenn das Attribut nie wieder geändert wird:

```html
<my-custom-element size="100"></my-custom-element>
```

Für ein vollständiges Beispiel zur Verwendung von `attributeChangedCallback()` siehe [Lifecycle-Callbacks](#lifecycle-callbacks) auf dieser Seite.

### Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudo-Klassen-CSS-Selektoren

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "hover", "disabled" und "read only".
Einige dieser Zustände können als Attribute mithilfe von HTML oder JavaScript gesetzt werden, während andere intern sind und nicht. Ob extern oder intern, häufig haben diese Zustände entsprechende CSS-[Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die verwendet werden können, um das Element auszuwählen und zu stylen, wenn es sich in einem bestimmten Zustand befindet.

Autonome benutzerdefinierte Elemente (aber nicht auf eingebauten Elementen basierende) ermöglichen es Ihnen auch, Zustände zu definieren und sie mithilfe der [`:state()`](/de/docs/Web/CSS/:state) Pseudo-Klassenfunktion zu selektieren.
Der folgende Code zeigt, wie dies am Beispiel eines autonomen benutzerdefinierten Elements funktioniert, das einen internen Zustand "`collapsed`" hat.

Der `collapsed` Zustand ist als boolesche Eigenschaft (mit Setter- und Getter-Methoden) dargestellt, die außerhalb des Elements nicht sichtbar ist.
Um diesen Zustand in CSS selektierbar zu machen, ruft das benutzerdefinierte Element zuerst {{domxref("HTMLElement.attachInternals()")}} in seinem Konstruktor auf, um ein {{domxref("ElementInternals")}} Objekt zu verbinden, das wiederum Zugriff auf ein {{domxref("CustomStateSet")}} über die {{domxref("ElementInternals.states")}} Eigenschaft bietet.
Der Setter für den (internen) collapsed-Zustand fügt die _Kennung_ `hidden` zum `CustomStateSet` hinzu, wenn der Zustand `true` ist, und entfernt sie, wenn der Zustand `false` ist.
Die Kennung ist lediglich ein String: in diesem Fall haben wir sie `hidden` genannt, aber wir hätten sie genauso gut `collapsed` nennen können.

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
      // Existenz der Kennung entspricht "true"
      this._internals.states.add("hidden");
    } else {
      // Abwesenheit der Kennung entspricht "false"
      this._internals.states.delete("hidden");
    }
  }
}

// Registrieren Sie das benutzerdefinierte Element
customElements.define("my-custom-element", MyCustomElement);
```

Wir können die Kennung, die zum `CustomStateSet` (`this._internals.states`) des benutzerdefinierten Elements hinzugefügt wurde, verwenden, um den benutzerdefinierten Zustand des Elements zu selektieren.
Dies wird durch Übergabe der Kennung an die [`:state()`](/de/docs/Web/CSS/:state) Pseudo-Klasse selektiert.
Zum Beispiel selektieren wir unten den `hidden`-Zustand, wenn er true ist (und daher den `collapsed`-Zustand des Elements), mithilfe des `:hidden`-Selectors und entfernen die Umrandung.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

Die `:state()` Pseudo-Klasse kann auch innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudo-Klassenfunktion verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu selektieren. Zusätzlich kann die `:state()` Pseudo-Klasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu selektieren, das sich in einem bestimmten Zustand befindet.

Es gibt mehrere Live-Beispiele in {{domxref("CustomStateSet")}}, die zeigen, wie dies funktioniert.

## Beispiele

Im Rest dieses Leitfadens werden wir uns einige Beispiel benutzerdefinierte Elemente ansehen. Sie können den Quellcode für all diese Beispiele und mehr im [web-components-examples](https://github.com/mdn/web-components-examples)-Repository finden, und Sie können sie alle live auf <https://mdn.github.io/web-components-examples/> sehen.

### Ein autonomes benutzerdefiniertes Element

Zuerst schauen wir uns ein autonomes benutzerdefiniertes Element an. Das `<popup-info>` benutzerdefinierte Element nimmt ein Bildsymbol und eine Textzeichenkette als Attribute und bettet das Symbol in die Seite ein. Wenn das Symbol fokussiert ist, wird der Text in einem Popup-Informationsfeld angezeigt, um weitere kontextbezogene Informationen bereitzustellen.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

Zunächst definiert die JavaScript-Datei eine Klasse namens `PopupInfo`, die die {{domxref("HTMLElement")}}-Klasse erweitert.

```js
// Erstelle eine Klasse für das Element
class PopupInfo extends HTMLElement {
  constructor() {
    // Super immer zuerst im Konstruktor aufrufen
    super();
  }

  connectedCallback() {
    // Erstelle ein Shadow-Root
    const shadow = this.attachShadow({ mode: "open" });

    // Erstelle Spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Attributinhalt nehmen und ins Info-Span einfügen
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Symbol einfügen
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // CSS erstellen, das auf das Shadow-DOM angewendet werden soll
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

    // Die erstellten Elemente an das Shadow-DOM anhängen
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

Die Klassendefinition enthält den [`constructor()`](/de/docs/Web/JavaScript/Reference/Classes/constructor) für die Klasse, der immer mit dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) beginnt, damit die korrekte Prototypen-Kette eingerichtet wird.

Innerhalb der Methode `connectedCallback()`, definieren wir alle Funktionalität, die das Element haben wird, wenn es mit dem DOM verbunden wird. In diesem Fall verbinden wir ein Shadow-Root mit dem benutzerdefinierten Element, verwenden ein wenig DOM-Manipulation, um die interne Shadow-DOM-Struktur des Elements zu erstellen – die dann an das Shadow-Root angehängt wird – und fügen schließlich etwas CSS hinzu, um es zu stylen. Wir erledigen diese Arbeit nicht im Konstruktor, da die Attribute eines Elements erst verfügbar sind, wenn es mit dem DOM verbunden ist.

Zum Schluss registrieren wir unser benutzerdefiniertes Element im `CustomElementRegistry` mit der `define()`-Methode, die wir zuvor erwähnt haben – in den Parametern geben wir den Elementnamen an und dann den Klassennamen, der seine Funktionalität definiert:

```js
customElements.define("popup-info", PopupInfo);
```

Es ist jetzt auf unserer Seite verfügbar. In unserem HTML verwenden wir es folgendermaßen:

```html
<popup-info
  img="img/alt.png"
  data-text="Ihr Kartenvalidierungscode (CVC)
  ist ein zusätzliches Sicherheitsmerkmal – es sind die letzten 3 oder 4 Ziffern auf der
  Rückseite Ihrer Karte."></popup-info>
```

### Externe Styles referenzieren

Im obigen Beispiel wenden wir Styles auf das Shadow-DOM mithilfe eines {{htmlelement("style")}}-Elements an, aber Sie können stattdessen ein externes Stylesheet von einem {{htmlelement("link")}}-Element referenzieren. In diesem Beispiel werden wir das `<popup-info>` benutzerdefinierte Element modifizieren, um ein externes Stylesheet zu verwenden.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

Hier ist die Klassendefinition:

```js
// Erstelle eine Klasse für das Element
class PopupInfo extends HTMLElement {
  constructor() {
    // Super immer zuerst im Konstruktor aufrufen
    super();
  }

  connectedCallback() {
    // Erstelle ein Shadow-Root
    const shadow = this.attachShadow({ mode: "open" });

    // Erstelle Spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Attributinhalt nehmen und ins Info-Span einfügen
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Symbol einfügen
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Externe Styles auf das Shadow-DOM anwenden
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // Die erstellten Elemente an das Shadow-DOM anhängen
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

Es ist genau wie das ursprüngliche `<popup-info>`-Beispiel, außer dass wir auf ein externes Stylesheet mit einem {{HTMLElement("link")}}-Element verweisen, das wir zum Shadow-DOM hinzufügen.

Beachten Sie, dass {{htmlelement("link")}}-Elemente das Rendern des Shadow-Roots nicht blockieren, sodass es zu einem Flackern von ungestyltem Inhalt (FOUC) kommen kann, während das Stylesheet geladen wird.

Viele moderne Browser implementieren eine Optimierung für {{htmlelement("style")}}-Tags, die entweder von einem gemeinsamen Knoten geklont wurden oder identischen Text haben, um es ihnen zu ermöglichen, ein gemeinsames zugrunde liegendes Stylesheet zu teilen. Mit dieser Optimierung sollte die Leistung von externen und internen Styles ähnlich sein.

### Angepasste eingebaute Elemente

Nun werfen wir einen Blick auf ein Beispiel für ein angepasstes eingebautes Element. Dieses Beispiel erweitert das eingebaute {{HTMLElement("ul")}}-Element, um die Listenelemente erweitern und zusammenklappen zu unterstützen.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Bitte beachten Sie die [`is`](/de/docs/Web/HTML/Global_attributes/is) Attributreferenz für Vorbehalte zur Implementierungsrealität angepasster eingebauter Elemente.

Zunächst definieren wir die Klasse unseres Elements:

```js
// Erstelle eine Klasse für das Element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Super immer zuerst im Konstruktor aufrufen
    // Rückgabewert von super() ist eine Referenz auf dieses Element
    self = super();
  }

  connectedCallback() {
    // Holen Sie sich ul- und li-Elemente, die ein Kind dieses benutzerdefinierten ul-Elements sind
    // li-Elemente können Container sein, wenn sie uls innerhalb von sich haben
    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));
    // Alle Kind-uls ausblenden
    // Diese Listen werden angezeigt, wenn der Benutzer auf ein höherstufiges Container klickt
    uls.forEach((ul) => {
      ul.style.display = "none";
    });

    // Durchsuchen Sie jedes li-Element im ul
    lis.forEach((li) => {
      // Wenn dieses li ein ul als Kind hat, dekorieren Sie es und fügen Sie einen Klick-Handler hinzu
      if (li.querySelectorAll("ul").length > 0) {
        // Fügen Sie ein Attribut hinzu, das vom Style verwendet werden kann
        // um ein offenes oder geschlossenes Symbol anzuzeigen
        li.setAttribute("class", "closed");

        // Wickeln Sie den Text des li-Elements in ein neues Span-Element ein
        // damit wir dem Span Style und Ereignis-Handler zuweisen können
        const childText = li.childNodes[0];
        const newSpan = document.createElement("span");

        // Kopieren Sie den Text vom li zum Span, setzen Sie den Cursor-Style
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = "pointer";

        // Fügen Sie diesen Span einen Klick-Handler hinzu
        newSpan.addEventListener("click", (e) => {
          // Nächstes Geschwisterelement zum Span sollte das ul sein
          const nextul = e.target.nextElementSibling;

          // Sichtbaren Zustand umschalten und klassenattribut auf ul aktualisieren
          if (nextul.style.display == "block") {
            nextul.style.display = "none";
            nextul.parentNode.setAttribute("class", "closed");
          } else {
            nextul.style.display = "block";
            nextul.parentNode.setAttribute("class", "open");
          }
        });
        // Fügen Sie den Span hinzu und entfernen Sie den nackten Textknoten aus dem li
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }
}
```

Beachten Sie, dass wir diesmal von {{domxref("HTMLUListElement")}}, anstatt von {{domxref("HTMLElement")}}, erben. Das bedeutet, dass wir das Standardverhalten einer Liste erhalten und nur unsere eigenen Anpassungen implementieren müssen.

Wie zuvor befindet sich der größte Teil des Codes im `connectedCallback()`-Lifecycle-Callback.

Als Nächstes registrieren wir das Element mit der `define()`-Methode wie zuvor, nur dass diesmal auch ein Optionsobjekt enthalten ist, das detailliert beschreibt, von welchem Element unser benutzerdefiniertes Element erbt:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Die Verwendung des eingebauten Elements in einem Webdokument sieht ebenfalls etwas anders aus:

```html
<ul is="expanding-list">
  …
</ul>
```

Sie verwenden ein `<ul>`-Element wie gewohnt, geben jedoch den Namen des benutzerdefinierten Elements im `is`-Attribut an.

Beachten Sie, dass wir in diesem Fall sicherstellen müssen, dass das Skript zur Definition unseres benutzerdefinierten Elements ausgeführt wird, nachdem das DOM vollständig analysiert wurde, da `connectedCallback()` sofort aufgerufen wird, sobald die expandierende Liste dem DOM hinzugefügt wird, und zu diesem Zeitpunkt sind ihre Kinder noch nicht hinzugefügt worden, sodass die `querySelectorAll()`-Aufrufe keine Elemente finden werden. Eine Möglichkeit, dies sicherzustellen, ist das Hinzufügen des [defer](/de/docs/Web/HTML/Element/script#defer) Attributs zur Zeile, die das Skript einbindet:

```html
<script src="main.js" defer></script>
```

### Lifecycle-Callbacks

Bis jetzt haben wir nur ein Lifecycle-Callback in Aktion gesehen: `connectedCallback()`. Im letzten Beispiel `<custom-square>` sehen wir einige der anderen. Das `<custom-square>` autonome benutzerdefinierte Element zeichnet ein Quadrat, dessen Größe und Farbe durch zwei Attribute bestimmt werden, die "size" und "color" genannt werden.

- [Sehen Sie das Beispiel live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [Sehen Sie den Quellcode](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

Im Klassenkonstruktor verbinden wir ein Shadow-DOM mit dem Element und fügen dann leere {{htmlelement("div")}}- und {{htmlelement("style")}}-Elemente an das Shadow-Root an:

```js
constructor() {
  // Super immer zuerst im Konstruktor aufrufen
  super();

  const shadow = this.attachShadow({ mode: "open" });

  const div = document.createElement("div");
  const style = document.createElement("style");
  shadow.appendChild(style);
  shadow.appendChild(div);
}
```

Die zentrale Funktion in diesem Beispiel ist `updateStyle()` — diese Funktion nimmt ein Element, erhält sein Shadow-Root, findet sein `<style>`-Element und fügt dem Style {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} hinzu.

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

Die eigentlichen Aktualisierungen werden alle von den Lifecycle-Callbacks gehandhabt. Das `connectedCallback()` wird jedes Mal ausgeführt, wenn das Element zum DOM hinzugefügt wird — hier führen wir die Funktion `updateStyle()` aus, um sicherzustellen, dass das Quadrat wie in den Attributen definiert gestaltet wird:

```js
connectedCallback() {
  console.log("Benutzerdefiniertes Quadratelement wurde zur Seite hinzugefügt.");
  updateStyle(this);
}
```

Die `disconnectedCallback()` und `adoptedCallback()`-Callbacks loggen Nachrichten in die Konsole, um uns zu informieren, wenn das Element entweder aus dem DOM entfernt oder auf eine andere Seite verschoben wird:

```js
disconnectedCallback() {
  console.log("Benutzerdefiniertes Quadratelement wurde von der Seite entfernt.");
}

adoptedCallback() {
  console.log("Benutzerdefiniertes Quadratelement auf eine neue Seite verschoben.");
}
```

Das `attributeChangedCallback()`-Callback wird immer dann ausgeführt, wenn eines der Attribute des Elements in irgendeiner Weise geändert wird. Wie Sie in dessen Parametern sehen können, ist es möglich, auf einzelne Attribute zu wirken, indem man sich deren Namen und alte sowie neue Attributwerte ansieht. In diesem Fall führen wir jedoch einfach die `updateStyle()`-Funktion erneut aus, um sicherzustellen, dass der Style des Quadrats entsprechend den neuen Werten aktualisiert wird:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Attribute des benutzerdefinierten Quadratelements wurden geändert.");
  updateStyle(this);
}
```

Beachten Sie, dass Sie, um das `attributeChangedCallback()`-Callback zu aktivieren, wenn sich ein Attribut ändert, die Attribute beobachten müssen. Dies wird erreicht, indem man eine Methode `static get observedAttributes()` innerhalb der benutzerdefinierten Elementklasse angibt — diese sollte ein Array zurückgeben, das die Namen der Attribute enthält, die Sie beobachten möchten:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
