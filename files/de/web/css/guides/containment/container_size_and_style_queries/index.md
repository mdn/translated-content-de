---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

[Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Styles auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt true oder false zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen ähneln [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Styles auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. In ähnlicher Weise ermöglicht die {{cssxref("@container")}}-Regel das Anwenden von Styles auf Elemente basierend auf der Größe oder anderen Stileigenschaften eines enthaltenden Elements, anstatt auf das Ansichtsfenster. Container-Abfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Container-Größenabfragen**
  - : Größenabfragen ermöglichen das Anwenden von Styles auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines enthaltenden Elements, einschließlich der Orientierung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**
  - : Stilabfragen ermöglichen das Anwenden von Styles auf Elemente basierend auf den Stileigenschaften eines enthaltenden Elements. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit wird von Stilabfragen nur die CSS-[Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) als Stileigenschaft unterstützt. In diesem Fall gibt die Abfrage true oder false zurück, je nach dem berechneten Wert der Benutzerdefinierten Eigenschaften des enthaltenden Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, ermöglichen sie Ihnen, Styles auf beliebige Nachfahren eines Elements basierend auf jeder Eigenschaft, Deklaration oder jedem berechneten Wert anzuwenden — zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollstatusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Statusabfragen ermöglichen das selektive Anwenden von CSS-Regeln auf die Nachfahren eines Containers basierend auf Scroll-Statusbedingungen, wie beispielsweise ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angedockt ist. Die enthaltenden Elemente müssen explizit als _Scrollstatusabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns Folgendes anschauen:

1. [Container-Größenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#container_benennen), um ihren Anwendungsbereich zu begrenzen, und
3. die Verwendung der `style()`-Funktionalnotation innerhalb der `<container-condition>` der {{cssxref("@container")}}-Regel, um [Stilabfragen mit Benutzerdefinierten Eigenschaften](#stilabfragen_nach_benutzerdefinierten_eigenschaften) zu erstellen.

Scroll-Statusabfragen werden in [Verwendung von Container-Scroll-Statusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) behandelt.

## Size-Abfragen

Container-Größenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Styles werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Enthaltensein.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die Kurzschrift {{cssxref("container")}}) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Einschluss](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist eine leistungsfähige Notwendigkeit — die Größe jedes Elements im DOM jederzeit abzufragen, wäre schlecht für Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachfahren-Stil die Größe des Container-Elements ändern würde.

In einer Container-Größenabfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage beinhaltet einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, beschränken sich auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation`. Die boolesche Syntax und Logik zur Kombination von mehreren `<size-query>`s ist die gleiche wie für {{cssxref("@media")}}-Größenmerkmale-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Styles gelten für die Nachfahren aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Container benennen

Eine `<container-condition>` kann einen optionalen auf Groß- und Kleinschreibung achtenden {{cssxref("container-name")}} enthalten. Ein Container-Name macht die Container-Bedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind auf Groß- und Kleinschreibung achtende {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Anvisieren jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschrift verwenden, um bestimmte Containerelemente zu selektieren. Styles innerhalb benannter `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Styles innerhalb des Container-Abfrageblocks auf die Nachfahren aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, diese Styles auf die Nachfahren ihrer Elemente anwenden werden.

```css
@container wide (width >= 20em) {
  /* styles applied to descendants of wide .sizeContainer */
}

@container narrow (width < 20em) {
  /* styles applied to descendants of narrow .sizeContainer */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Styles aus der `wide`- oder `narrow`-Abfrage zugewiesen.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#stilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements bewertet, wie sie in einer oder mehreren `style()`-Funktionalnotationen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften in eine Stilabfrage zu kombinieren, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>`, im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einziges **`<style-feature>`**. Laut der CSS-Einschlussspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Die einzige derzeit unterstützte Stileigenschaft sind Benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, ergibt die Stilabfrage true, wenn der berechnete Wert der Benutzerdefinierten Eigenschaft (oder zukünftig die CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls ergibt sie false.
Eine Stileigenschaft ohne Wert ergibt true, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionalnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl derzeit noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; Einschluss mit {{cssxref("container-type")}} oder der {{cssxref("container")}}-Kurzschrift ist erforderlich. Diese Abfrage ergibt true, wenn der Container 600px oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, ergibt diese Abfrage true, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur Benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig zu erinnern sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahren-Styles die berechneten Stile eines Vorfahren nicht beeinflussen, ist Einschluss nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Größenmerkmale in Ihrer Abfrage enthalten sind, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verbundenen Abfragenamen; es verhindert nicht, dass das Element ein Stilcontainer wird.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Benutzerdefinierten Eigenschaftswerten in der `style()`-Abfrage.

Nun lassen Sie uns eintauchen und einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen nach Benutzerdefinierten Eigenschaften

Stilabfragen nach Benutzerdefinierten Eigenschaften ermöglichen es Ihnen, die [Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Diese werden innerhalb einer `<style-query>` genauso aufgenommen, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage aufnehmen würden: entweder mit oder ohne Wert.

#### Unabhängige Benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionalnotation kann nur einen CSS-Variablennamen enthalten; eine Benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert inkludiert ist, ergibt die Abfrage false, wenn der Wert dem Wert des `initial-value`-Deskriptors innerhalb der `@property`-Regel entspricht, falls vorhanden. Die Stilabfrage gibt true zurück und stimmt mit allen Elementen überein, die einen Benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine Benutzerdefinierte Eigenschaft irgendeines Werts haben, wenn die Benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Unregistrierte Benutzerdefinierte Eigenschaften

Wenn CSS-Variablen durch eine CSS-Benutzerdefinierte Eigenschaftswertzuweisung eingeführt werden, geben wertlose Benutzerdefinierte Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde und all seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, ergibt die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens true.

##### Registrierte Eigenschaften

Das Verhalten von registrierten Benutzerdefinierten Eigenschaften ist anders. Wenn explizit mit der {{cssxref("@property")}} CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert, gibt die Stilabfrage `style(--theme-color)` nur für Elemente true zurück, wenn der berechnete Wert von `--theme-color` für das Element von dem [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) abweicht, der in der ursprünglichen Definition dieser Benutzerdefinierten Eigenschaft festgelegt wurde.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherits: true;
}

:root {
  --theme-color: rebeccapurple;
}

main {
  --theme-color: blue;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, da der Wert der Benutzerdefinierten Eigenschaft mit dem `initial-value`-Wert identisch ist. Der Benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall der {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die Benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft exakt übereinstimmen, wobei äquivalente Werte nur dann eine Übereinstimmung sind, wenn die Benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem Aufruf der Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)) mit einem `syntax`-Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color`-Benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann überein, wenn die `--accent-color`-Eigenschaft als eine Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, ergibt sich für `@container style(--accent-color: blue)` true.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

```html
<form>
  <fieldset>
    <legend>Change the value of <code>--theme</code></legend>
    <ol>
      <li>
        <input type="radio" name="selection" value="red" id="red" />
        <label for="red">--theme: red;</label>
      </li>
      <li>
        <input type="radio" name="selection" value="green" id="green" />
        <label for="green">--theme: green</label>
      </li>
      <li>
        <input type="radio" name="selection" value="blue" id="blue" />
        <label for="blue">--theme: blue</label>
      </li>
      <li>
        <input type="radio" name="selection" value="currentColor" id="other" />
        <label for="other">Other</label>
        <label for="color">color:</label>
        <input
          text="checkbox"
          name="selection-value"
          value="currentColor"
          id="color" />
      </li>
    </ol>
  </fieldset>
  <output>I change colors</output>
</form>
```

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elements ist, immer dann, wenn ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfelds nur aktualisiert, wenn das `other`-Optionsfeld markiert ist, was wiederum den Wert von `--theme` aktualisiert.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (const radio of radios) {
  radio.addEventListener("change", (e) => {
    body.style.setProperty("--theme", e.target.value);
  });
}
color.addEventListener("input", (e) => {
  other.style.setProperty("value", e.target.value);
  if (other.checked) {
    body.style.setProperty("--theme", e.target.value);
  }
});
```

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `red`, wodurch sichergestellt wird, dass äquivalente Farben unabhängig davon übereinstimmen, welches Syntax verwendet wird (z. B. ist `red` gleichbedeutend mit `rgb(255 0 0)`, `#ff0000` und `#f00`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: red;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

Die erste Stil-Feature-Abfrage ist eine Benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt true zurück, wenn der berechnete Wert für den Benutzerdefinierten Eigenschaftswert von dem `initial-value` für diese Eigenschaft abweicht. In diesem Fall wird es true sein, wenn der Wert von `--theme` ein anderer Wert ist als ein Syntax äquivalenter Wert von `red` (z. B. `#ff0000`). Wenn true, hat das {{htmlelement("output")}} einen 5px gepunkteten Umriss. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen schließen Werte für die Benutzerdefinierte Eigenschaft ein. Diese stimmen überein, wenn der `--theme`-Wert des Containers ein äquivalenter Wert zur aufgelisteten Farbe ist, selbst wenn dieser Wert mit dem `initial-value` identisch ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert in Bezug auf `red`, `blue` oder `green` gleichwertig ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Wertes von `--theme` sein (im Fall von `blue` und `green`, wird sie das Grau überschreiben, das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass, wenn `--theme` gleichwertig mit `red` ist, der Inhalt des `<output>` auch fett ist. Wir haben dies getan, um besser zu demonstrieren, dass die Container-Abfrage eine Übereinstimmung ist.

```css
@container style(--theme: green) or style(--theme: blue) or style(--theme: red) {
  output {
    color: var(--theme);
  }
}

@container style(--theme: red) {
  output {
    font-weight: bold;
  }
}
```

{{EmbedLiveSample('example','100%','200')}}

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen werden — da sie mit `style(--theme: red)` übereinstimmen — während sie den Umriss entfernen, da `style(--theme)` false zurückgibt, wenn der Wert der Benutzerdefinierten Eigenschaft `--theme` mit dem Anfangswert für `--theme` übereinstimmt, der durch die `@property`-Regel definiert wurde. Jeder sRGB-gültige Farbwert, der nicht rot ist, einschließlich `currentColor` oder `hsl(180 100% 50%)` usw., führt dazu, dass die erste Stilabfrage true ergibt; es sind Werte, die sich von dem `initial-value` unterscheiden.

Da wir `syntax: "<color>";` definiert haben, kann der CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese Benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false ergibt und `style(--theme: red)` true.

> [!NOTE]
> Wenn Sie Benutzerdefinierte Eigenschaften deklarieren, sollten Sie überlegen, `@property` mit dem {{cssxref("@property/syntax","Syntax")}}-Deskriptor zu verwenden, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die Styles, die in mehreren verschachtelten Container-Abfragen definiert sind, werden angewendet, wenn alle umschließenden Container-Abfragen true sind.

```css
@container style(--theme: red) {
  output {
    outline: 1px dotted;
  }
  @container style(--theme: purple) {
    output {
      outline: 5px dotted;
    }
  }
}
```

In diesem Fall hat das `<output>` einen 5px gepunkteten Rahmen, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, die `style()`-Funktionalnotation kann reguläre CSS-Deklarationen inklusive CSS-Eigenschaften und Eigenschaft-Wert-Paaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund aller {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elemente gelb machen, wenn das Elternelement bereits `bold` ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des Elternelements; wenn der berechnete {{cssxref("font-weight")}} des Elternelements `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei Benutzerdefinierten Eigenschafts-Container-Stilabfragen, mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stileigenschaften, die eine Kurzschreibweiseigenschaft abfragen, werden true, wenn die berechneten Werte für jede ihrer Langschreibweiseigenschaften übereinstimmen, und false, andernfalls. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` true ergeben, wenn alle 12 Langschreibweiseigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzschreibung ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage false ergibt.

Wenden Sie nicht die Stile, die Sie in der Stilabfrage abfragen, auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage ergibt false, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und true andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel ergibt für jedes Element, das einen Wert für `font-weight` hat, der sich vom Anfangswert unterscheidet, true. Benutzeragenten-Stile setzen {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente auf `font-weight: bold`, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight` von anderen als `normal`, das vom Benutzeragenten festgelegt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, ergibt die Stilabfrage true.

Diese Funktionen werden derzeit in keinem Browser unterstützt.

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschrift-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scroll-Statusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
