---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage liefert wahr oder falsch, je nachdem, ob die Abfragebedingung für den Container wahr ist.

Container-Abfragen ähneln [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. Ebenso ermöglicht die {{cssxref("@container")}}-Regel, Stile auf Elemente basierend auf der Größe oder anderen Stilmerkmalen eines enthaltenen Elements anzuwenden, anstatt auf die Größe des Ansichtsfensters. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**

  - : Größen-Abfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}, anzuwenden. Die enthaltenen Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**

  - : Stilabfragen ermöglichen es, Stile basierend auf den Stilmerkmalen eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Zurzeit ist das einzige Stilmerkmal, das von Stilabfragen unterstützt wird, CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall liefert die Abfrage wahr oder falsch, je nachdem, welcher berechnete Wert für die benutzerdefinierten Eigenschaften des enthaltenen Elements vorliegt. Wenn Container-Stilabfragen vollständig unterstützt werden, ermöglichen sie es Ihnen, Stile basierend auf jeder Eigenschaft, Deklaration oder jedem berechneten Wert auf die Nachkommen eines jeden Elements anzuwenden — zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scrollzustand-Abfragen ermöglichen es, CSS-Regeln selektiv auf die Nachkommen eines Containers anzuwenden, basierend auf Scrollzustandsbedingungen, wie ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container zugewiesen ist. Die enthaltenen Elemente müssen ausdrücklich als _Scrollzustand-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns Folgendes ansehen:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Geltungsbereich einzuschränken, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Regel's `<container-condition>` zur Erstellung von [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften).

Scrollzustand-Abfragen werden in [Verwendung von Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) besprochen.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element wahr ist. Der Größen-Container eines Elements ist der nächstliegende Vorfahre mit Enthalten.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Enthalten](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und die Benutzererfahrung. Zusätzlich könnte eine Änderung des Container-Elementstils durch einen Nachkommen zu einer unendlichen Schleife führen.

In einer Containergrößen-Abfrage beinhaltet die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage beinhaltet einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenfunktionsabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzige `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede nicht benannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Stile gelten für die Nachkommen aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß/klein-schreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Container-Bedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; diese sind groß/klein-schreibungssensitive {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen es, jeden Container-Vorfahren des Elements anzusprechen. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Ihren `@container`-Regeln Namen hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Container-Elemente anzusteuern. Stile in den benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die innerhalb des Container-Abfrage-Blocks erklärten Stile auf die Nachkommen aller {{htmlelement("li")}}-Elemente angewendet, die eine Breite haben, die größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

```css
@container wide (min-width: 20em) {
  /* styles applied to descendants of wide .sizeContainer */
}

@container narrow (max-width: 20em) {
  /* styles applied to descendants of narrow .sizeContainer */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachkommen jedes Elements mit `class="sizeContainer"` erhalten die in der `wide`- oder `narrow`-Abfrage angewendeten Stile (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#container-stilabfragen) sein. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, verhindert aber nicht, dass das Element auf nicht benannte Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale zu einer Stilabfrage zu kombinieren, ist die gleiche wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Entsprechend der CSS-Enthaltenspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr bewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in der Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls löst es sich zu falsch auf. Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 100vw` abfragen können. Die Abfrage `@container (max-width: 100vw)` ist eine Größenabfrage; Enthalten mit {{cssxref("container-type")}} oder der {{cssxref("container")}}-Kurzform ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 100vw oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn unterstützt, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig zu beachten sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinträchtigen, ist Enthalten nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einschließen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container assoziiert sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Benutzerdefinierte-Eigenschaftswerten in der `style()`-Abfrage.

Schauen wir uns nun die verschiedenen `<style-feature>`-Typen genauer an.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einschließen würden: entweder mit oder ohne Wert.

#### Unabhängige Abfragen benutzerdefinierter Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage falsch zurück, wenn der Wert der gleiche ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel, falls vorhanden. Die Stilabfrage gibt wahr zurück und stimmt mit allen Elementen überein, die einen Wert für eine benutzerdefinierte Eigenschaft haben, der vom `initial-value` abweicht, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Wertzuweisung für eine CSS-Benutzerdefinierte-Eigenschaft eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und all seinen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist ein anderes. Wenn sie ausdrücklich mit der {{cssxref("@property")}}-CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur dann wahr für Elemente zurück, wenn der berechnete Wert von `--theme-color` für das Element vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert für diese Eigenschaft für eine Übereinstimmung exakt gleich sein, wobei äquivalente Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem Aufruf der [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode) mit einem `syntax`-Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die dem sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`) nur dann überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde es für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsschaltflächen. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und des {{htmlelement("output")}}-Elements ist, wann immer eine Optionsschaltfläche ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) der `other`-Optionsschaltfläche nur aktualisiert, wenn die `other`-Optionsschaltfläche ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` zu setzen, um sicherzustellen, dass äquivalente Farben eine Übereinstimmung sind, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `#F00` gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilfunktionabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Abfrageart gibt wahr zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaftswert anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` ein Wert ist, der nicht der Anfangswert oder jegliche Syntaxäquivalenz von `#f00` (wie `red`) ist. Wenn wahr, wird das {{htmlelement("output")}} einen 5px gepunkteten Umriss bekommen. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers ein äquivalenter Wert zur aufgeführten Farbe ist, auch wenn dieser Wert der gleiche wie der `initial-value` ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn sie es ist, wird die {{cssxref("color")}} die Farbe des aktuellen `--theme`-Wertes (im Fall von `blue` und `green`, überschlagend das in der ersten Stilabfrage gesetzte Grau) sein.

Die zweite Stilabfrage besagt, dass wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` ebenfalls fett sein wird. Wir haben das gemacht, um besser zu zeigen, dass die Container-Abfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie stellen möglicherweise fest, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es mit `style(--theme: red)` übereinstimmt — während der Umriss entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Elementwert für `--theme` derselbe ist wie der Anfangswert für `--theme`, der durch die `@property`-Regel definiert ist. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage wahr; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur mit gültigen `<color>`-Werten zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` am {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keines davon sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, mit `style(--theme)` gibt es falsch zurück und `style(--theme: red)` gibt wahr zurück.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, ziehen Sie in Betracht, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor zu verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle umschließenden Container-Abfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rand haben, wenn es in einem Container verschachtelt ist, der `--theme: purple` gesetzt hat, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschafts-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}} und {{htmlelement("strong")}}-Elemente gelb machen, wenn der Vater bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des Elterncontainers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es übereinstimmen, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr sein, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Container-Stilabfrage falsch ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stilisieren, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage wird falsch zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls wahr.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr zurückgeben, dessen `font-weight`-Wert von seinem Anfangswert abweicht. User-Agent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight` ungleich `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen sind in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzform
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
