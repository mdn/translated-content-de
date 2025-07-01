---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers geschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Der {{cssxref("@media")}} at-rule ermöglicht es, Stile auf Elemente basierend auf der Viewport-Größe oder anderen Gerätemerkmalen anzuwenden. Ähnlich ermöglicht der {{cssxref("@container")}} at-rule die Anwendung von Stilen auf Elemente basierend auf der Größe eines enthaltenen Elements oder anderen Stileigenschaften, statt auf dem Viewport. Container-Abfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**
  - : Größenabfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenden Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}, anzuwenden. Die enthaltenden Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stil-Abfragen ermöglichen es, Stile auf Elemente basierend auf den Stileigenschaften eines enthaltenden Elements anzuwenden. Jedes nicht-leere Element kann ein Stil-Abfrage-Container sein. Derzeit sind die einzigen Style-Features, die von Stil-Abfragen unterstützt werden, CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage wahr oder falsch zurück, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenden Elements. Sobald Containerstil-Abfragen voll unterstützt werden, können Sie Stile auf Nachkommen eines Elements basierend auf jeder Eigenschaft, Deklaration oder berechnetem Wert anwenden — zum Beispiel, ob der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Zustands-Abfragen ermöglichen die selektive Anwendung von CSS-Regeln auf Nachkommen eines Containers basierend auf Scroll-Zustandsbedingungen, z. B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einem Scroll-Snap-Container schnallt. Die enthaltenden Elemente müssen ausdrücklich als _Scroll-Zustands-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns auf Folgendes konzentrieren:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Anwendungsbereich einzuschränken, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}} at-rule's `<container-condition>`, um [Stil-Abfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustands-Abfragen werden in [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größen-Container eines Elements ist der nächstgelegene Vorfahre mit Einschließung.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder das {{cssxref("container")}}-Kurzschrift) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Einschließung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit - die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine Endlosschleife auftreten, wenn ein Nachkommen-Stil die Größe des Container-Elements geändert hat.

In einer Containergrößen-Abfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen für die Größenmerkmal, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und die logische Kombination von mehr als einer `<size-query>` ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmale-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` - `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Stile gelten für die Nachkommen aller Formularen mit einer Breite zwischen `10em` und `30em`, inklusive.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, auf Groß- und Kleinschreibung achtenden {{cssxref("container-name")}} enthalten. Ein Container-Name macht die Containerbedingung spezifischer — sie wird nur für Elemente ausgewertet, bei denen dieser Name in der `container-name`-Eigenschaft festgelegt ist.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind auf Groß- und Kleinschreibung achtende {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Targeting von jedem Vorfahren-Container des Elements. Ohne Container-Namen passt die Abfrage nur zum nächstgelegenen Vorfahren-Container.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Container-Namen zu Ihren `@container` at-rules hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder das {{cssxref("container")}}-Kurzschrift verwenden, um spezifische Container-Elemente zu targeten. Stile innerhalb der benannten `@container`-at-rules werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card` auf sie angewendet bekommen, die mit der Größenabfrage übereinstimmen und diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen von irgendwelchen Elementen mit `class="sizeContainer"` werden die Stile aus der `wide` oder `narrow`-Abfrage angewendet bekommen.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größen-Container ist, aber er kann trotzdem ein [Style-Container](#containerstil-abfragen) sein. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element zu unbenannten Abfragen passt.

Mit Container-Abfragen sind wir nicht nur auf Größenabfragen beschränkt! Sie können auch auf Stilmerkmale eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements evaluiert, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in eine Stilabfrage zu kombinieren, ist die gleiche wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` anstelle von `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Einschließungsspezifikation kann ein `<style-feature>` eine gültige CSS [Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige Stilmerkmal, das derzeit unterstützt wird, sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert beinhaltet, evaluiert die Stilabfrage zu wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft die CSS-Deklaration), die als `style()`-Argument übergeben wurde, für den abgefragten Container wahr ist. Andernfalls löst es sich zu falsch auf.
Ein Stilmerkmal ohne Wert evaluiert zu wahr, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir in der Lage sein, Stilabfragen wie folgt zu schreiben:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während das noch nicht unterstützt wird, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` zu abfragen. Das Abfragen von `@container (max-width: 600px)` ist eine Größenabfrage; Einschließung mit {{cssxref("container-type")}}, oder das {{cssxref("container")}}-Kurzschrift, ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 600px oder weniger ist. Das ist anders als bei der Abfrage `@container style(max-width: 600px)`, welche eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge zu beachten, die bereits erwähnt wurden, aber wichtig zu erinnern sind:

- Alle Elemente können Stilabfrage-Container sein; das Festlegen eines `container-type` ist nicht erforderlich. Wenn Nachkomme-Stile keine Auswirkungen auf die berechneten Stile eines Vorfahren haben, ist eine Einschließung nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einschließen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container angesehen wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Style-Container ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstil-Abfragen nur mit CSS-Benutzerdefiniertem Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns eintauchen und einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements zu abfragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einbeziehen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage falsch zurückgeben, wenn der Wert derselbe wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-at-rule ist, wenn es eines gibt. Die Stilabfrage wird wahr zurückgeben und alle Elemente, die einen abweichenden benutzerdefinierten Eigenschaftswert vom `initial-value` haben, passen, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft irgendeines Wertes haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzerdefinierte Eigenschaftswert-Zuweisung eingeführt werden, geben eigenschaftslose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel passt die Container-Abfrage das Element, auf dem die `--theme-color`-Eigenschaft deklariert wurde und alle seine Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn explizit mit der {{cssxref("@property")}} CSS-at-rule oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert, gibt die Stilabfrage `style(--theme-color)` nur für Elemente wahr zurück, wenn der berechnete Wert der Eigenschaft `--theme-color` auf dem Element vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel passt das `:root`-Element NICHT zur Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der von `initial-value`. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft eine genaue Übereinstimmung sein, wobei nur gleichwertige Werte eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-at-rule (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstil-Abfrage passt jedes Element, das `blau` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blau` entsprechen (wie der hexadezimale Code `#0000ff`), nur übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blau` gesetzt wäre, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)`, oder `rgb(0% 0% 100%)` würde er für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} für die Eingabe einer benutzerdefinierten Farbe.

```html
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
      <input type="radio" name="selection" value="currentcolor" id="other" />
      <label for="other">Other</label>
      <label for="color">color:</label>
      <input text="checkbox" name="selection" value="currentcolor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}}-Elements ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfeldes nur aktualisiert, wenn das `other`-Optionsfeld markiert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-at-rule, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` festzulegen, um sicherzustellen, dass gleichwertige Farben unabhängig von der verwendeten Syntax eine Übereinstimmung sind (zum Beispiel entspricht `#F00` `rgb(255 0 0)`, `#ff0000`, und `red`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: #f00;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

Die erste Stil-Feature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert vom `initial-value` für diese Eigenschaft abweicht. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` ein anderer Wert als jeder syntaktische gleichwertige Wert von `#f00` (wie `red`) ist. Wenn wahr, wird das {{htmlelement("output")}} einen 5px gepunkteten Umriss haben. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen beinhalten Werte für die benutzerdefinierte Eigenschaft. Sie werden übereinstimmen, wenn der `--theme`-Wert des Containers ihnen gleichwertige Farben zum angegebenen Wert ist, selbst wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage stimmt überein, wenn der `--theme`-Wert eines Elements gleichwertig zu `red`, `blue` oder `green` ist. Wenn sie ist, wird die {{cssxref("color")}} der aktuelle Wert von `--theme` sein (im Fall von `blue` und `green`, überschreibt es das in der ersten Stilabfrage gesetzte Grau).

Die zweite Stilabfrage besagt, dass der Inhalt des `<output>` ebenfalls fett dargestellt wird, wenn `--theme` gleichwertig zu `red` ist. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden feststellen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da sie mit `style(--theme: red)` übereinstimmen — während der Umriss entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Wert für `--theme` des Elements derselbe ist wie der Anfangswert für `--theme`, der durch die `@property`-at-rule definiert ist. Jeder andere gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., lässt die erste Stilabfrage wahr werden; sie sind Werte, die vom `initial-value` abweichen.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte haben. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines von ihnen sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert vererbt wird und unverändert bleibt, wobei `style(--theme)` falsch zurückgibt und `style(--theme: red)` wahr zurückgibt.

> [!NOTE]
> Bei der Deklaration benutzerdefinierter Eigenschaften, sollten Sie `@property` mit dem {{cssxref("@property/syntax", "syntax")}}-Deskriptor verwenden, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb von mehrfach verschachtelten Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rand haben, wenn es in einem Container verschachtelt ist, wo `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfragen CSS-Deklarationen und Eigenschaften

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswert-Paaren beinhalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund von {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elementen gelb machen, wenn das Elternteil bereits `bold` ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des Elterncontainers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Containerstil-Abfragen, mussten wir keine Elemente als Stil-Container definieren, da alle Elemente standardmäßig Stil-Container sind. Solange ein Element keinen `container-name` hat, wird es passen, wenn es `font-weight: bold` hat oder erbt.

Stilmerkmale, die eine Kurzschreibweiseigenschaft abfragen, werden wahr, wenn die berechneten Werte für jede seiner Langschreibweise-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr, wenn alle 12 Langschreibweiseigenschaften ({{cssxref("border-bottom-style")}}, etc.) die gleichen gleichwertigen Werte gesetzt haben.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstilabfrage falsch ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage wird falsch zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls wahr.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr zurückgeben, das einen Wert für `font-weight` hat, der von seinem Anfangswert abweicht. User-Agent-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "Überschriften")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight` von etwas anderem als `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen werden derzeit in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschrift-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
