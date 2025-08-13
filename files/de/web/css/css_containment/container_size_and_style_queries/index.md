---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container wahr ist.

Container-Abfragen ähneln [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht das Anwenden von Stilen auf Elemente basierend auf der Größe des Viewports oder anderen Geräteeigenschaften. Ähnlich ermöglicht die {{cssxref("@container")}}-At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Stileigenschaften eines enthaltenden Elements, anstatt des Viewports. Container-Abfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Größenabfragen für Container**
  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenden Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Stilabfragen für Container**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stileigenschaften eines enthaltenden Elements. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit wird von Stilabfragen nur das CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage wahr oder falsch zurück, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenden Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, können Sie Stile auf Nachkommen eines Elements basierend auf jeder Eigenschaft, Deklaration oder jedem berechneten Wert anwenden — zum Beispiel, wenn der Container `display: inline flex` ist oder eine undurchsichtige Hintergrundfarbe hat.

- **[Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Zustandsabfragen ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scroll-Zustandsbedingungen anzuwenden, z. B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeschlossen ist. Die enthaltenden Elemente müssen explizit als _Scroll-Zustandsabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns Folgendes ansehen:

1. [Größenabfragen für Container](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Umfang zu begrenzen, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustandsabfragen werden in [Verwenden von Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Größenabfragen für Container

Größenabfragen für Container werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltende Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzschreibweise) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — das Abfragen der Größe jedes Elements im DOM, die ganze Zeit, würde die Leistung und Benutzererfahrung beeinträchtigen. Zusätzlich könnte eine unendliche Schleife auftreten, wenn ein Nachkommensstil die Größe des Container-Elements änderte.

In einer Größenabfrage für Container enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen für die Größenfunktion, einen Vergleichsoperator und einen Wert. Die Größenfunktionen, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boole'sche Syntax und Logik zur Kombination einer oder mehrerer `<size-query>`s ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media) Größenabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Stile gelten für die Nachkommen aller Formulare mit einer Breite zwischen `10em` und `30em`, inklusive.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, von Groß- und Kleinschreibung abhängigen {{cssxref("container-name")}} enthalten. Ein Container-Name macht die Container-Bedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind von Groß- und Kleinschreibung abhängige {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Ziel jeder Container-Vorfahre des Elements. Ohne einen Container-Namen entspricht die Abfrage nur dem nächsten Container-Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschreibweise verwenden, um bestimmte Container-Elemente zu adressieren. Die Stile innerhalb der benannten `@container`-At-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrage-Blocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente angewendet, die eine Breite haben, die größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die die Größenabfrage erfüllen, diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#stilabfragen_für_container) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element unbenannte Abfragen erfüllt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Stilabfragen für Container

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements evaluiert, wie in einer oder mehreren `style()`-Funktionsnotierungen definiert. Die boole'sche Syntax und Logik zur Kombination von Stileigenschaften in einer Stilabfrage ist die gleiche wie in [CSS-Funktionalitätsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Die einzige Stileigenschaft, die derzeit unterstützt wird, sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr bewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wurde, für den abgefragten Container wahr ist. Andernfalls wird sie als falsch aufgelöst.
Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft können wir Stilabfragen wie folgt schreiben:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl derzeit noch nicht unterstützt, werden wir schließlich CSS-Deklarationen wie `max-width: 600px` abfragen können. Das Abfragen von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzschreibweise, wird benötigt. Diese Abfrage gibt true zurück, wenn der Container 600px oder kleiner ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, welche eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig zu merken sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einfügen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verknüpft sind; es hindert das Element nicht daran, ein Stilcontainer zu sein.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) arbeiten Container-Stilabfragen nur mit CSS-Benutzerdefiniertem Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb eines `<style-query>` genauso einbezogen, wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Funktionalitätsabfrage einfügen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage false zurückgeben, wenn der Wert der gleiche Wert ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property`-At-Regel, falls vorhanden. Die Stilabfrage wird true zurückgeben und alle Elemente abgleichen, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder alle Elemente, die eine benutzerdefinierte Eigenschaft von beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über einen CSS-Benutzerdefinierte-Eigenschaft-Wert-Zuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel entspricht die Container-Abfrage dem Element, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens true sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert, gibt die Stilabfrage `style(--theme-color)` nur für Elemente true zurück, wenn der berechnete Wert des Elements für `--theme-color` von dem in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegten [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht.

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

In diesem Beispiel entspricht das `:root`-Element NICHT der Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft dem Wert des `initial-value` entspricht. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}}-Element und seine Unterelemente, die diesen geänderten Wert erben, entsprechen.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft eine genaue Übereinstimmung sein, wobei gleichwertige Werte nur dann eine Übereinstimmung darstellen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage entspricht jedem Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)`, oder `rgb(0% 0% 100%)` gesetzt wäre, würde es für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}}, um eine benutzerdefinierte Farbe einzugeben.

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
      <input type="radio" name="selection" value="currentColor" id="other" />
      <label for="other">Other</label>
      <label for="color">color:</label>
      <input text="checkbox" name="selection" value="currentColor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}} ist, wenn ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfeldes nur aktualisiert, wenn das `other`-Optionsfeld ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `red` zu setzen, wodurch sichergestellt wird, dass gleichwertige Farben übereinstimmen, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `red` gleichwertig mit `rgb(255 0 0)`, `#ff0000`, und `#f00`).

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

Die erste Stilmerkmal-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt true zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird es true sein, wenn der Wert von `--theme` jeder andere Wert als ein Syntaxäquivalent von `red` ist (wie `#ff0000`). Wenn es true ist, wird das {{htmlelement("output")}} einen 5px gestrichelten Umriss haben. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfrage enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers eine gleichwertige Farbe zu dem angegebenen Wert ist, selbst wenn dieser Wert der gleiche wie der `initial-value` ist. Die erste Abfrage entspricht Elementen, deren `--theme`-Wert gleichwertig zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die aktuelle Farbe des `--theme`-Wertes sein (im Fall von `blue` und `green` überschreibt sie das Grau, das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage gibt an, dass, wenn `--theme` gleich `red` ist, der Inhalt des `<output>` auch fett sein wird. Wir haben dies gemacht, um besser zu demonstrieren, dass die Container-Abfrage eine Übereinstimmung ist.

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

Versuchen Sie, in das Textfeld verschiedene Farbwerte einzugeben. Sie könnten bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>`-Element rot machen — da sie `style(--theme: red)` entsprechen — während der Umriss entfernt wird, da `style(--theme)` false zurückgibt, wenn der Wert des Elements für `--theme` der gleiche wie der Anfangswert für `--theme` ist, der durch die `@property`-At-Regel definiert wurde. Jede nicht-rote gültige sRGB-Farbe, einschließlich `currentColor` oder `hsl(180 100% 50%)`, etc., führt dazu, dass die erste Stilabfrage true zurückgibt; dies sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `Kuddelmuddel` eingeben, aktualisiert JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: Kuddelmuddel`. Keiner von beiden ist eine Farbe. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true zurückgibt.

> [!NOTE]
> Beim Deklarieren von benutzerdefinierten Eigenschaften sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor zu verwenden, damit der Browser die berechneten Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die Stile, die innerhalb mehrerer verschachtelter Container-Abfragen definiert sind, werden angewendet, wenn alle umhüllenden Container-Abfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gestrichelten Rahmen haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen enthalten, einschließlich CSS-Eigenschaften und Eigenschafts-Wert-Paaren.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrundfarbe jedes {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elements gelb machen, wenn der übergeordnete Container bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei den benutzerdefinierten Eigenschafts-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, und es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibweise-Eigenschaften übereinstimmen, und falsch andernfalls. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr, wenn alle 12 Langschreibweise-Eigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzschreibweise ausmachen, auf die gleichen gleichwertigen Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage false ist.

Wenden Sie nicht die Stile an, die Sie in der Stilabfrage auf das Element abfragen, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen in einem booleschen Kontext auch Eigenschaften akzeptieren. Die Stilabfrage wird false zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und true andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr zurückgeben, das einen Wert für `font-weight` hat, der von seinem Anfangswert abweicht. Benutzeragent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein anderer `font-weight` als `normal`, das vom Benutzer-Agent gesetzt wird. Solange das `font-weight` eines Elements nicht der Standardwert dieses Benutzer-Agents ist, wird die Stilabfrage true zurückgeben.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibereigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwenden von Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
