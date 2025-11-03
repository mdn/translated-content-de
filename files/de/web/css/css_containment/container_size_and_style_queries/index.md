---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

[Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es, Stile auf Elemente anzuwenden, die sich innerhalb eines bestimmten Containers befinden, basierend auf den Merkmalen dieses Containers. Die Abfrage gibt je nach Zustand des Containers entweder wahr oder falsch zurück.

Containerabfragen ähneln [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht es, Stile auf Elemente anzuwenden, basierend auf der Größe des Viewports oder anderen Gerätemerkmalen. Ebenso ermöglicht die {{cssxref("@container")}}-At-Regel die Anwendung von Stilen auf Elemente basierend auf der Größe eines enthaltenden Elements oder anderen Stilmerkmalen, anstelle des Viewports. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**
  - : Größenabfragen ermöglichen die Anwendung von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenden Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Aspektverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Größenabfragecontainer_ deklariert werden.

- **Containerstilabfragen**
  - : Stilabfragen ermöglichen die Anwendung von Stilen auf Elemente basierend auf den Stilmerkmalen eines enthaltenden Elements. Jedes nicht leere Element kann ein Stilabfragecontainer sein. Derzeit wird als Stilmerkmal von Stilabfragen nur die CSS-[eigene Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage je nach berechnetem Wert der eigenen Variablen des enthaltenden Elements wahr oder falsch zurück. Sobald Containerstilabfragen vollständig unterstützt werden, ermöglichen sie es, Stile basierend auf beliebigen Eigenschaften, Deklarationen oder berechneten Werten auf die Nachfahren eines Elements anzuwenden – zum Beispiel, ob der Container `display: inline flex` ist oder eine nicht transparente Hintergrundfarbe hat.

- **[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Zustandsabfragen ermöglichen es, CSS-Regeln selektiv auf die Nachfahren eines Containers anzuwenden, basierend auf Scroll-Zustandsbedingungen wie z. B. ob das abgefragte Element teilweise gescrollt wird oder ob der Container an einen Scroll-Snapping-Container angedockt ist. Die enthaltenden Elemente müssen explizit als _Scroll-Zustandsabfragecontainer_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen, indem wir uns folgende Punkte ansehen:

1. [Containergrößenabfragen](#container_size_queries_2),
2. das [Benennen von Containern](#benennung_von_containern), um ihren Umfang zu begrenzen, und
3. die Verwendung der `style()`-Funktion in der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit eigenen Variablen](#stilabfragen_für_eigene_variablen) zu erstellen.

Scroll-Zustandsabfragen werden unter [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größentainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenabfragecontainer_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzschreibweise) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfragecontainern fügt [Verschachtelung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist aus Leistungsgründen notwendig – die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Darüber hinaus könnte ein endloser Kreislauf auftreten, wenn ein Nachfahrenstil die Größe des Container-Elements ändert.

In einer Containergrößenabfrage enthält das `<container-condition>`-Element einen oder mehrere `<size-query>`s. Jede Größenabfrage umfasst einen Namensmerkmal, einen Vergleichsoperator und einen Wert. Die Merkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zur Kombination von einem oder mehreren `<size-query>`s entspricht der von [`@media`](/de/docs/Web/CSS/@media)-Merkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>`-Element in diesem Beispiel enthält eine einzige `<size-query>` – `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die Stile, die in unserer Containerabfrage deklariert sind, gelten für die Nachfahren aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Ein `<container-condition>`-Element kann einen optionalen, auf Groß- und Kleinschreibung achtenden {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer – sie wird nur für Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Mit der {{cssxref("container-name")}}-Eigenschaft wird eine Liste von Abfrage-`<container-name>`-Werten festgelegt, die in `@container`-Regeln verwendet werden können; dabei handelt es sich um auf Groß- und Kleinschreibung achtende {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen die gezielte Ansprache jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschreibweise verwenden, um spezifische Container-Elemente anzusprechen. Stile innerhalb der benannten `@container`-At-Regeln werden nur auf passende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachfahren aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, diese Stile auf ihre Elemente anwenden.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber es kann trotzdem ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Bei Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements überprüft, wie in einer oder mehreren `style()`-Funktions-Notationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale zu einer Stilabfrage zu kombinieren, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname – `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind eigene Variablen, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr bewertet, wenn der berechnete Wert der eigenen Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den zu abfragenden Container zutrifft. Andernfalls wird es als falsch bewertet.
Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()`-Funktions-Notation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 600px` abfragen können. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzschreibweise, ist notwendig. Diese Abfrage wird zutreffen, wenn der Container 600px oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur eigene Variablen als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, sind wichtig zu beachten:

- Alle Elemente können Stilabfragecontainer sein; die Einstellung eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist ein Containment nicht erforderlich.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` eingestellt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Die Einstellung `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieser Schrift (Februar 2024) funktionieren Containerstilabfragen nur mit CSS-Eigenem-Variablenwerten in der `style()`-Abfrage.

Nun, lassen Sie uns einen Blick auf die verschiedenen `<style-feature>`-Arten werfen.

### Stilabfragen für eigene Variablen

Stilabfragen für eigene Variablen ermöglichen es Ihnen, die [eigenen Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, so wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Standalone-Abfragen für eigene Variablen

Der `<style-query>`-Parameter der `style()`-Funktions-Notation kann nur einen CSS-Variablennamen enthalten; eine eigene Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage falsch zurückgeben, wenn der Wert der gleiche wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-At-Regel ist, falls vorhanden. Die Stilabfrage wird wahr zurückgeben und alle Elemente abgleichen, die einen anderen Wert als die `initial-value` haben, oder für alle Elemente, die eine eigene Eigenschaft mit einem Wert haben, wenn die eigene Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Nicht registrierte eigene Eigenschaften

Wenn CSS-Variablen durch eine CSS-Eigenschaftswertzuweisung eingeführt werden, geben eigene wertlose Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel entspricht die Containerabfrage dem Element, auf dem die `--theme-color`-Eigenschaft deklariert wurde, sowie allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten eigenen Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur wahr zurück, wenn der berechnete Wert für `--theme-color` des Elements anders ist als der in der ursprünglichen Definition dieser eigenen Eigenschaft festgelegte [`initial-value`](/de/docs/Web/CSS/@property/initial-value).

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

In diesem Beispiel entspricht das `:root`-Element nicht der Stilabfrage, da der Wert der eigenen Eigenschaft der gleiche wie der `initial-value` ist. Der eigene Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Eigene Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die eigene Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft exakt übereinstimmen, wobei gleichwertige Werte nur dann eine Übereinstimmung darstellen, wenn die eigene Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage entspricht jedem Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-Eigenen-Eigenschaft hat.

In diesem Fall werden andere mit sRGB `blue` gleichwertige Farbwerte (wie der hexadezimale Code `#0000ff`) nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als eine Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde er für `@container style(--accent-color: blue)` true ergeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Texteingabe-{{htmlelement("input")}} für die Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable im {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}}-Elemente ist, immer dann, wenn ein Optionsfeld ausgewählt wird. Wenn das Textelement `<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfelds nur aktualisiert, wenn das `other`-Optionsfeld ausgewählt ist, wodurch der Wert von `--theme` aktualisiert wird.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `red` zu setzen, um sicherzustellen, dass gleichwertige Farben eine Übereinstimmung sind, unabhängig davon, welches Syntax verwendet wird (zum Beispiel ist `red` gleichwertig mit `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilmerkmalsabfrage ist eine eigene Eigenschaft ohne Wert. Dieser Abfragetyp ergibt true, wenn der berechnete Wert für die eigene Eigenschaft von dem `initial-value` für diese Eigenschaft abweicht. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` irgendein Wert außer jedem gleichwertigen Wert von `red` (wie `#ff0000`) ist. Wenn true, wird das {{htmlelement("output")}} eine 5px gepunktete Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die standardmäßige Text-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die eigene Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers ein gleichwertiger Farbwert zu dem angegebenen Wert ist, auch wenn dieser Wert der gleiche wie der `initial-value` ist. Die erste Abfrage stimmt mit den Elementen überein, deren `--theme`-Wert gleichwertig zu `red`, `blue` oder `green` ist. Wenn ja, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Falle von `blue` und `green`, die grau überschreibend, das in der ersten Stilabfrage gesetzt wurde).

In der zweiten Stilabfrage wird angegeben, dass der Inhalt des `<output>` auch fett wird, wenn `--theme` gleichwertig zu `red` ist. Dies haben wir getan, um besser zu veranschaulichen, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, unterschiedliche Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise feststellen, dass Werte, die den sRGB-Äquivalenten von `red` entsprechen, das `<output>` rot machen – da es mit `style(--theme: red)` übereinstimmt – während sie die Umrandung entfernen, weil `style(--theme)` false zurückgeben wird, wenn der Wert von `--theme` des Elements gleich mit dem initialen Wert von `--theme` ist, der von der `@property`-At-Regel definiert wurde. Jeder nicht-rote sRGB gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., führt dazu, dass die erste Stilabfrage true zurückgibt; sie sind Werte, die vom `initial-value` abweichen.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, z. B. `unset` oder `inherit`, sind für diese eigene Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keiner von beiden ist eine Farbe. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true.

> [!NOTE]
> Beim Deklarieren von eigenen Eigenschaften sollten Sie erwägen, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor zu verwenden, damit der Browser die berechneten Werte korrekt vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die Stile, die innerhalb von mehreren verschachtelten Containerabfragen definiert sind, werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Umrandung haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### CSS-Deklarationen und -Eigenschaften für Stilabfragen

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktions-Notation reguläre CSS-Deklarationen enthalten, einschließlich CSS-Eigenschaften und Eigenschaftswert-Paaren.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe jedes {{htmlelement("b")}} und {{htmlelement("strong")}} Elements gelb machen, wenn der Elternteil bereits `bold` ist.

Das Matching erfolgt anhand des berechneten Werts des Elterncontainers; wenn das Elternteil einen berechneten {{cssxref("font-weight")}} von `bold` (nicht `bolder` oder `900`) hat, gibt es eine Übereinstimmung. Wie bei eigenen Eigenschaftscontainerabfragen mussten wir keine Elemente als Stilcontainer definieren, da standardmäßig alle Elemente Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es bei `font-weight: bold` eingestellt oder geerbt, übereinstimmen.

Stilmerkmale, die eine Kurzschreibungseigenschaft abfragen, werden wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` zu wahr, wenn alle 12 Langhand-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzschreibung ausmachen, auf die gleichen äquivalenten Werte gesetzt werden.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Containerstilabfrage false ergibt.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einem endlosen Kreislauf führen kann.

Es wird erwartet, dass Stilabfragen in Zukunft auch Eigenschaften im booleschen Kontext akzeptieren werden. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls true.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt true für jedes Element zurück, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "Heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}}und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal einen anderen `font-weight`-als `normal`, der vom Benutzeragenten festgelegt wird. Solange der `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage true zurückgeben.

Diese Funktionen werden in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
