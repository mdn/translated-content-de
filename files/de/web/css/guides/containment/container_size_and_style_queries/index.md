---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 48afb4da7957efe672d7fd837413ee1a69a842fd
---

[Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente innerhalb eines bestimmten Containers basierend auf den Eigenschaften dieses Containers anzuwenden. Die Abfrage gibt je nach Bedingungserfüllung für den Container wahr oder falsch zurück.

Container-Abfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anzuwenden. Ähnlich dazu, erlaubt die {{cssxref("@container")}}-At-Regel, Stile basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements anzuwenden, anstatt auf die des Viewports. Container-Abfragen verwenden dieselben Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**
  - : Größenabfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **[Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)**
  - : Stilabfragen ermöglichen es, Stile auf Elemente basierend auf den Stilmerkmalen eines enthaltenen Elements anzuwenden, wobei jedes nicht-leere Element ein Stilabfrage-Container sein kann. Ein Stilmerkmal kann eine CSS-Eigenschaft, eine CSS-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) oder eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) sein. Dadurch können Sie Stile auf Nachfahren eines Container-Elements basierend auf seinen Stilmerkmalen anwenden – etwa, ob es eine `display: inline` Flexdeklaration hat oder welchen Wert eine benutzerdefinierte Eigenschaft hat.

- **[Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scrollstatus-Abfragen ermöglichen es, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf Scrollstatus-Bedingungen anzuwenden, wie etwa, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeheftet ist. Die enthaltenen Elemente müssen ausdrücklich als _Scrollstatus-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen kennen, indem wir uns folgendes ansehen:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern) zur Begrenzung ihres Bereichs und
3. die Verwendung der `style()` Funktionsnotierung innerhalb der {{cssxref("@container")}}-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Containerbedingung für dieses Element wahr ist. Der Größe-Container eines Elements ist der nächstgelegene Vorfahre mit Einschließung.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Einschließung](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist aus Performancegründen notwendig – die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte, wenn ein Stil eines Nachfahren die Größe des Container-Elements verändert, eine Endlosschleife eintreten.

In einer Containergrößen-Abfrage beinhaltet die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage beinhaltet einen Namen eines Größenmerkmals, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zur Kombination von einer oder mehreren `<size-query>`s ist dieselbe wie bei {{cssxref("@media")}}-Größenmerkmalsabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}} Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Container-Name macht die Container-Bedingung spezifischer – sie wird nur gegen Elemente ausgewertet, die diesen Namen im `container-name`-Attribut gesetzt haben.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungssensitive {{cssxref("ident")}} Werte. Die Container-Namen ermöglichen es, jeden Container-Vorfahren des Elements anzusprechen. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}} Eigenschaft oder die {{cssxref("container")}} Kurzform verwenden, um spezifische Container-Elemente anzusprechen. Stile innerhalb der benannten `@container`-Regeln werden nur auf entsprechende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrage-Blocks auf die Nachfahren aller {{htmlelement("li")}} Elemente angewendet, deren Breite größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die mit der Größenabfrage übereinstimmen, diese Stile auf ihre Elemente-Nachfahren anwenden.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachfahren von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow` Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#container-stilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht auf Größen-Abfragen beschränkt! Sie können auch Stilmerkmale eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements bewertet, wie in einer oder mehreren `style()` Funktionsnotierungen definiert. Die boolesche Syntax und Logik, die zur Kombination von Stilmerkmalen in einer Stilabfrage verwendet wird, ist dieselbe wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname – `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS-Einschließungs-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Das einzige Stilmerkmal, das derzeit unterstützt wird, sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, bewertet die Stilabfrage als wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in der Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wurde, für den abgefragten Container wahr ist. Andernfalls löst es sich zu falsch auf. Ein Stilmerkmal ohne Wert bewertet als wahr, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()` Funktionsnotierung wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen abzufragen, wie `max-width: 600px`. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; dazu ist die Einschließung mit {{cssxref("container-type")}} oder die {{cssxref("container")}} Kurzform erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 600px oder weniger beträgt. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}} Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()` Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein paar Dinge, die bereits erwähnt wurden, aber wichtig zu merken sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist die Einschließung nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einbeziehen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container angesehen wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Benutzerdefinierte-Eigenschaftswerten in der `style()` Abfrage.

Nun, lassen Sie uns eintauchen und uns die verschiedenen `<style-feature>` Typen ansehen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden in eine `<style-query>` auf die gleiche Weise eingefügt, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Standalone-Abfragen für benutzerdefinierte Eigenschaften

Der `<style-query>` Parameter der `style()` Funktionsnotierung kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage falsch zurück, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property` At-Regel, falls es einen gibt. Die Stilabfrage wird wahr zurückgeben und alle Elemente matchen, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzerdefinierte-Eigenschaft-Wertzuweisung eingeführt werden, gibt die wertlose benutzerdefinierte Eigenschaftsabfrage immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde, und allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie ausdrücklich mit der {{cssxref("@property")}} CSS At-Regel definiert sind oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static), gibt die Stilabfrage `style(--theme-color)` nur für Elemente wahr zurück, wenn der berechnete Wert für `--theme-color` des Elements vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) abweicht, das in der Originaldefinition dieser benutzerdefinierten Eigenschaft festgelegt ist.

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

In diesem Beispiel stimmt das `:root` Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der Wert `initial-value`. Der benutzerdefinierte Eigenschaftswert für das Element (und alle erben den Wert) ist immer noch `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert dieser Eigenschaft des Elements genau übereinstimmen, wobei äquivalente Werte nur dann eine Übereinstimmung darstellen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax` Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der benutzerdefinierten `--accent-color` Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur eine Übereinstimmung sein, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wurde, würde es für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Auswahlknöpfen. Die vierte Option enthält ein Texteingabefeld für die Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS `--theme` Variablen auf dem {{htmlelement("body")}} Element, das ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}} Elemente ist, wann immer ein Auswahlknopf ausgewählt wird. Wenn der Text `<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Auswahlknopfes erst aktualisiert, wenn der `other` Auswahlknopf ausgewählt ist, was im Gegenzug den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property` At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}} Wert zu definieren und setzen das `initial-value` auf `red`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmen (zum Beispiel ist `red` gleichbedeutend mit `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilfeature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft ein anderer ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` ein anderer Wert als jeder Syntax-äquivalenter Wert von `red` ist (wie `#ff0000`). Wenn es wahr ist, wird das {{htmlelement("output")}} eine 5px gepunktete Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die Standardtext-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der Wert von `--theme` im Container ein äquivalenter Wert zur angegebenen Farbe ist, selbst wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage entspricht Elemente, deren `--theme` Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die aktuelle Farbe von `--theme` sein (im Fall von `blue` und `green`, überschreibt das grau das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage gibt an, dass, wenn `--theme` gleich `red` ist, der Inhalt des `<output>` auch fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Container-Abfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden eventuell feststellen, dass Werte, die dem sRGB `red` entsprechen, das `<output>` rot machen – weil es mit `style(--theme: red)` übereinstimmt – während die Umrandung entfernt wird, weil `style(--theme)` als falsch zurückkehrt, wenn der Wert von `--theme` des Elements derselbe ist wie der Anfangswert für `--theme`, der durch die `@property` At-Regel definiert ist. Jeder nicht rote sRGB gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage wahr; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";`, gesetzt haben, kann die CSS-Variable nur gültige `<color>` Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}} Eigenschaft, die keine `<color>` Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Beide sind keine Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert vererbt und unverändert ist, mit `style(--theme)` gibt er falsch zurück und `style(--theme: red)` gibt wahr zurück.

> [!NOTE]
> Bei der Deklaration von benutzerdefinierten Eigenschaften sollten Sie `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor verwenden, damit der Browser berechnete Werte korrekt vergleichen kann.

### Einfacher versus Bereichssyntax in Stilabfragen

Wenn ein `<style-feature>` einen Wert enthält, können Sie den Vergleich auf zwei verschiedene Arten ausdrücken. Sie sehen ähnlich aus, verhalten sich aber sehr unterschiedlich, und es ist wichtig, die richtige zu wählen.

Die **einfache Syntax** verwendet einen Doppelpunkt, die gleiche Syntax, die in einer CSS-Deklaration verwendet wird:

```css
@container style(--n: 3) {
  /* … */
}
```

Diese Form ist wahr, wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft dem Wert auf der rechten Seite entspricht. Für eine [nicht registrierte](#nicht_registrierte_benutzerdefinierte_eigenschaften) benutzerdefinierte Eigenschaft ist der berechnete Wert der Eigenschaftswert, wie er geschrieben ist: der Browser bewertet keine `calc()` oder andere Ausdrücke darin. Der Vergleich ist im Wesentlichen ein Vergleich der zwei Wertezeichenfolgen. Um äquivalente Werte abzugleichen (wie `blue` und `#0000ff`), [registriere die benutzerdefinierte Eigenschaft](#registrierte_eigenschaften) mit `@property` und einem `syntax` Deskriptor.

Die **Bereichssyntax** verwendet einen Vergleichsoperator (`=`, `<`, `<=`, `>`, oder `>=`):

```css
@container style(--n = 3) {
  /* … */
}
```

Um diese Form zu bewerten, führt der Browser:

1. Jeden Seite (benutzerdefinierte Eigenschaftsnamen werden nachgeschlagen, als ob sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet würden).
2. Analysiert jede Seite als eine von {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine Seite nicht als einer dieser Typen geparst werden kann, ist die Abfrage falsch.
3. Wenn beide Seiten denselben Typ haben, berechnet er jede Seite (wertet alle `calc()` Ausdrücke aus) und führt den numerischen Vergleich durch. Andernfalls ist die Abfrage falsch.

Betrachten Sie das folgende Beispiel, wobei `--n` auf einen `calc()` Ausdruck gesetzt ist:

```css
.box {
  --n: calc(6/2);
}

/* Evaluates to FALSE: */
/* the computed value of --n is the string `calc(6/2)`, which is */
/* not equal to the string `3`. */
@container style(--n: 3) {
  /* … */
}

/* Evaluates to TRUE: */
/* both sides are parsed as <integer>, calc(6/2) is computed to 3, */
/* and 3 = 3. */
@container style(--n = 3) {
  /* … */
}
```

Die Bereichssyntax unterstützt auch eine Drei-Wert-Form zum Testen, ob ein Wert innerhalb eines Intervalls liegt. Beide Vergleichsoperatoren müssen in dieselbe Richtung weisen:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}

@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Die Bereichssyntax ist auch flexibler in Bezug darauf, wie jede Seite geschrieben wird. Jede Seite kann ein benutzerdefinierter Eigenschaftsname, ein [`var()`](/de/docs/Web/CSS/Reference/Values/var) Verweis, ein literaler Wert oder ein `calc()` Ausdruck sein, und die Operanden können in beliebiger Reihenfolge erscheinen. Die folgenden sind alle gültig:

```css
@container style(3 = --n) {
  /* … */
}
@container style(var(--n) = 3) {
  /* … */
}
@container style(calc(6/2) = var(--n)) {
  /* … */
}
```

Die einfache Syntax ist restriktiver: Die linke Seite muss der Name der benutzerdefinierten Eigenschaft sein (ohne `var()`), und der Wert geht auf die rechte Seite. Die folgenden sind alle **ungültig**:

```css example-bad
@container style(var(--n): 3) {
  /* … */
}
@container style(3: --n) {
  /* … */
}
```

Da die Bereichssyntax erfordert, dass beide Seiten als einer der aufgeführten numerischen Typen geparst werden können, kann sie nicht verwendet werden, um keyword-ähnliche Werte zu vergleichen. Zum Beispiel, gegeben `--s: new`, ist die Abfrage `style(--s = new)` falsch (weil `new` keine Zahl, Länge, etc. ist), während `style(--s: new)` wahr ist.

Kurz gesagt:

- Verwenden Sie **`style(--variable: value)`** für keyword-ähnliche oder string-ähnliche Vergleiche, wie `style(--stock: low)` oder `style(--theme: dark)`.
- Verwenden Sie **`style(--variable = value)`** (oder `<`, `<=`, `>`, `>=`) für numerische Vergleiche, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle umschließenden Container-Abfragen zutreffen.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Umrandung haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()` Funktionsnotierung reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertepaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}} und {{htmlelement("strong")}} Elemente gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Das Matching erfolgt gegenüber dem berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stil-Container sind. Solange ein Element keinen `container-name` gesetzt hat, wird es auf ein Übereinstimmung sein, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilfeatures, die eine Kurzschriebungseigenschaft abfragen, werden wahr sein, wenn die berechneten Werte für jede ihrer Langschreibungeigenschaften übereinstimmen und andernfalls falsch. Zum Beispiel, `@container style({{cssxref("border")}}: 2px solid red)` wird wahr sein, wenn alle 12 Langschreibungeigenschaften ({{cssxref("border-bottom-style")}}, etc.), die zur Kurzschreibung gehören, auf dieselben äquivalenten Werte gesetzt sind.

Globale CSS-Werte wie `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lösen die Container-Stilabfrage als falsch.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage gestalten, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt fals zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und wahr andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt wahr für jedes Element zurück, das einen Wert für `font-weight` hat, der sich vom Anfangswert unterscheidet. User-Agent Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}} Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal einen benutzerdefinierten `font-weight`, der nicht `normal` ist, vom User Agent gesetzt. Solange der `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, wird die Stilabfrage wahr zurückgegeben.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzbereich-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
