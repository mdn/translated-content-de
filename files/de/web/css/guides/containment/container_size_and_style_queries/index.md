---
title: Container-Größen- und Stilabfragen verwenden
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

[Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente innerhalb eines bestimmten Containers anzuwenden, abhängig von dessen Eigenschaften. Eine Abfrage liefert „wahr“ oder „falsch“, je nachdem, ob die Abfragebedingung für den Container erfüllt ist.

Container-Abfragen ähneln [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries). Die At-Regel {{cssxref("@media")}} ermöglicht es, Stile abhängig von der Größe des Viewports oder anderen Geräteeigenschaften auf Elemente anzuwenden. Entsprechend ermöglicht die At-Regel {{cssxref("@container")}}, Stile abhängig von der Größe oder anderen Eigenschaften eines umschließenden Elements statt des Viewports anzuwenden. Für Container-Abfragen gelten dieselben Syntaxregeln und logischen Operatoren wie für Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt fünf Arten von Container-Abfragen:

- **Container-Größenabfragen**
  - : Größenabfragen ermöglichen es, Stile abhängig von der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines umschließenden Elements anzuwenden, einschließlich seiner Ausrichtung und seines {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die umschließenden Elemente müssen ausdrücklich als _Container für Größenabfragen_ deklariert werden.

- **[Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)**
  - : Stilabfragen ermöglichen es, Stile abhängig von den Stileigenschaften eines umschließenden Elements anzuwenden. Jedes nicht leere Element kann dabei ein Container für Stilabfragen sein. Eine Stileigenschaft kann eine CSS-Eigenschaft, eine benutzerdefinierte CSS-Eigenschaft ([custom property](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)) oder eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) sein.
    So können Sie Stile auf Nachfahren eines beliebigen Container-Elements anwenden, abhängig von dessen Stileigenschaften – beispielsweise davon, ob die Flex-Deklaration `display: inline` gesetzt ist oder welchen Wert eine benutzerdefinierte Eigenschaft hat.

- **[Container-Abfragen nur nach Namen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)**
  - : Mit Container-Abfragen nur nach Namen können Sie Stile gezielt auf ein Element anwenden, abhängig davon, ob für es ein bestimmter {{cssxref("container-name")}} festgelegt wurde.

- **[Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scrollzustandsabfragen ermöglichen es Ihnen, CSS-Regeln gezielt auf die Nachfahren eines Containers anzuwenden, abhängig von Scrollzustandsbedingungen – etwa davon, ob das abgefragte Element teilweise gescrollt wurde oder ob der Container an einem Scroll-Snap-Container eingerastet ist. Die umschließenden Elemente müssen ausdrücklich als _Container für Scrollzustandsabfragen_ deklariert werden.

- **[Verankerte Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)**
  - : Mit verankerten Container-Abfragen können Sie prüfen, ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [position-try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) auf ihn angewendet wird.

In diesem Leitfaden lernen Sie die Grundlagen von Container-Abfragen kennen. Dazu betrachten wir:

1. [Container-Größenabfragen](#container_size_queries_2),
2. das [Benennen von Containern](#container_benennen), um den Geltungsbereich von Abfragen einzuschränken, und
3. die Verwendung der funktionalen Notation `style()` innerhalb der `<container-condition>` der At-Regel {{cssxref("@container")}}, um [Stilabfragen für benutzerdefinierte Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Container-Größenabfragen

Container-Größenabfragen werden anhand einer Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das umschließende Element als Container deklariert wurde und die Container-Bedingung für dieses Element erfüllt ist. Der Größenabfrage-Container eines Elements ist der nächstgelegene Vorfahr mit entsprechender Containment-Eigenschaft.

Elemente werden als _Container für Größenabfragen_ deklariert, indem ihre Eigenschaft {{cssxref("container-type")}} (oder die Kurzschreibweise {{cssxref("container")}}) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Containern für Größenabfragen fügt ihnen [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Das ist aus Leistungsgründen notwendig: Die Größe jedes Elements im DOM ständig abzufragen, würde die Leistung und das Nutzererlebnis beeinträchtigen. Außerdem könnte eine Endlosschleife entstehen, wenn ein Stil eines Nachfahren die Größe des Container-Elements verändert.

In einer Container-Größenabfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`-Abfragen. Jede Größenabfrage enthält den Namen eines Größenmerkmals, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und die Logik zum Verknüpfen mehrerer `<size-query>`-Abfragen entsprechen denen von Größenmerkmalabfragen mit {{cssxref("@media")}}.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>`-Abfrage: `(10em <= width <= 20em)`. In diesem Fall kommen alle {{htmlelement("form")}}-Elemente für eine unbenannte Container-Abfrage infrage. Die in der Container-Abfrage deklarierten Stile gelten für die Nachfahren aller Formulare mit einer Breite zwischen `10em` und `30em`, einschließlich der Grenzwerte.

## Container benennen

Eine `<container-condition>` kann optional einen {{cssxref("container-name")}} enthalten, bei dem zwischen Groß- und Kleinschreibung unterschieden wird. Ein Container-Name macht die Container-Bedingung spezifischer: Sie wird nur für Elemente ausgewertet, für die dieser Name in der Eigenschaft `container-name` festgelegt ist.

Die Eigenschaft {{cssxref("container-name")}} legt eine Liste von `<container-name>`-Werten fest, mit denen bestimmte Abfrage-Container in `@container`-Regeln gezielt angesprochen werden können. Bei diesen {{cssxref("ident")}}-Werten wird zwischen Groß- und Kleinschreibung unterschieden. Ohne `<container-name>` bezieht sich die Abfrage nur auf den nächstgelegenen Container-Vorfahren. Ohne `<container-query>` erfasst die Abfrage Elemente, für die der angegebene `container-name` festgelegt ist (siehe [Container-Abfragen nur nach Namen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)).

```css
@container [ <container-name>? <container-query>? ]!# {
  /* <stylesheet> */
}
```

Stile innerhalb benannter `@container`-At-Regeln werden nur auf passende Elemente in Containern angewendet, für die die entsprechenden Namen festgelegt sind und die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel gelten die Stile aus dem Container-Abfrageblock für die Nachfahren aller {{htmlelement("li")}}-Elemente, deren Breite größer als ihre Höhe ist. Beachten Sie, dass die Stile auch auf die Nachfahren anderer Elemente angewendet werden, für die `container-name: card` festgelegt ist und die die Größenabfrage erfüllen.

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

Im obigen Beispiel hat das Element zwei Container-Namen: `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der Abfrage `wide` oder `narrow`.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größenabfrage-Container ist. Er kann aber weiterhin ein [Container für Stilabfragen](#container-stilabfragen) sein und von einer [Container-Abfrage nur nach Namen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) erfasst werden. Der Standardwert `container-name: none` bedeutet, dass der Container keinen Namen hat. Er verhindert jedoch nicht, dass das Element unbenannte Abfragen erfüllt.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements auswertet, die in einer oder mehreren funktionalen `style()`-Notationen angegeben sind. Die boolesche Syntax und die Logik zum Verknüpfen von Stilmerkmalen in einer Stilabfrage entsprechen denen von [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname: `style()` innerhalb eines `<style-feature>` statt `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist genau ein **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Derzeit werden als Stilmerkmale nur benutzerdefinierte Eigenschaften unterstützt, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, ergibt die Stilabfrage „wahr“, falls der berechnete Wert der als `style()`-Argument übergebenen benutzerdefinierten Eigenschaft (oder künftig der CSS-Deklaration) für den abgefragten Container zutrifft. Andernfalls ergibt sie „falsch“.
Ein Stilmerkmal ohne Wert ergibt „wahr“, wenn sich der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) der betreffenden Eigenschaft unterscheidet.

Künftig werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die funktionale Notation `style()` unterscheidet Stilabfragen von Größenabfragen. Obwohl dies noch nicht unterstützt wird, werden sich künftig auch reguläre CSS-Deklarationen wie `max-width: 600px` abfragen lassen. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; dafür ist Containment durch {{cssxref("container-type")}} oder die Kurzschreibweise {{cssxref("container")}} erforderlich. Sie ergibt „wahr“, wenn der Container höchstens 600px breit ist. Das unterscheidet sich von `@container style(max-width: 600px)`: Diese Stilabfrage wird, sobald sie unterstützt wird, „wahr“ ergeben, wenn der {{cssxref("max-width")}}-Wert des Containers `600px` beträgt.

Solange Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften nicht unterstützt werden, können wir als `style()`-Parameter nur benutzerdefinierte Eigenschaften mit oder ohne Wert verwenden:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige bereits erwähnte Punkte sind besonders wichtig:

- Alle Elemente können Container für Stilabfragen sein; `container-type` muss dafür nicht gesetzt werden. Wenn Stile von Nachfahren die berechneten Stile eines Vorfahren nicht beeinflussen, ist kein Containment erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage verwenden, stellen Sie sicher, dass für Ihre Container-Elemente `container-type` auf `size` oder `inline-size` gesetzt ist.
- Wenn ein Element niemals als Container berücksichtigt werden soll, geben Sie ihm einen `container-name`, der nicht verwendet wird. `container-name: none` entfernt alle einem Container zugeordneten Abfragenamen; es verhindert nicht, dass das Element ein Container für Stilabfragen ist.
- Zum Zeitpunkt der Erstellung dieses Artikels (Februar 2024) funktionieren Container-Stilabfragen in der `style()`-Abfrage nur mit Werten benutzerdefinierter CSS-Eigenschaften.

Sehen wir uns nun die verschiedenen Arten von `<style-feature>` genauer an.

### Stilabfragen für benutzerdefinierte Eigenschaften

Mit Stilabfragen für benutzerdefinierte Eigenschaften können Sie die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) eines Elternelements abfragen, die auch „CSS-Variablen“ genannt werden. Sie werden in eine `<style-query>` aufgenommen wie jede reguläre CSS-Eigenschaft in eine Feature-Abfrage: entweder mit oder ohne Wert.

#### Abfragen einer einzelnen benutzerdefinierten Eigenschaft

Der `<style-query>`-Parameter der funktionalen Notation `style()` kann lediglich den Namen einer CSS-Variablen enthalten, also eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert angegeben ist, ergibt die Abfrage „falsch“, sofern der Wert dem Wert des Deskriptors `initial-value` in der At-Regel `@property` entspricht, falls ein solcher vorhanden ist. Die Stilabfrage ergibt „wahr“ und erfasst alle Elemente, deren Wert der benutzerdefinierten Eigenschaft vom `initial-value` abweicht. Wurde die benutzerdefinierte Eigenschaft ohne Registrierung deklariert, erfasst sie alle Elemente mit einem beliebigen Wert für diese Eigenschaft.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen durch eine Wertzuweisung an eine benutzerdefinierte CSS-Eigenschaft eingeführt werden, ergeben Abfragen der benutzerdefinierten Eigenschaft ohne Wert immer „wahr“.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel erfasst die Container-Abfrage das Element, auf dem die Eigenschaft `--theme-color` deklariert wurde, sowie alle seine Nachfahren. Da die CSS-Variable `--theme-color` auf {{cssxref(":root")}} deklariert wurde, ist die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr.

##### Registrierte Eigenschaften

Registrierte benutzerdefinierte Eigenschaften verhalten sich anders. Wenn eine Eigenschaft ausdrücklich mit der CSS-At-Regel {{cssxref("@property")}} oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurde, ergibt die Stilabfrage `style(--theme-color)` für Elemente nur dann „wahr“, wenn der berechnete Wert von `--theme-color` für das Element vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft abweicht.

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

In diesem Beispiel erfüllt das Element `:root` die Stilabfrage NICHT, weil der Wert der benutzerdefinierten Eigenschaft dem `initial-value` entspricht. Der Wert der benutzerdefinierten Eigenschaft für dieses Element (und alle Elemente, die den Wert erben) ist dennoch `rebeccapurple`. Nur Elemente, deren Wert vom Anfangswert abweicht – hier das {{htmlelement("main")}}-Element und seine Nachfahren, die den geänderten Wert erben –, erfüllen die Abfrage.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft exakt übereinstimmen. Gleichwertige Werte stimmen nur dann überein, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem Aufruf der Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)) definiert wurde, die einen `syntax`-Deskriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage erfasst jedes Element, bei dem `blue` der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` ist.

Andere Farbwerte, die dem sRGB-Wert `blue` entsprechen (etwa der Hexadezimalcode `#0000ff`), stimmen in diesem Fall nur überein, wenn die Eigenschaft `--accent-color` mit `@property` oder `CSS.registerProperty()` als Farbe definiert wurde, beispielsweise:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

Wenn der Wert von `--accent-color` in diesem Fall auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde `@container style(--accent-color: blue)` „wahr“ ergeben.

##### Beispiel

In diesem Beispiel gibt es ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}}, in das eine benutzerdefinierte Farbe eingegeben werden kann.

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
      <input name="selection-value" value="currentColor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, einem Vorfahren der Elemente {{htmlelement("fieldset")}} und {{htmlelement("output")}}, sobald ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des Optionsfelds `other` nur aktualisiert, wenn dieses Optionsfeld ausgewählt ist. Dadurch wird wiederum der Wert von `--theme` aktualisiert.

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

Wir verwenden die At-Regel `@property`, um die CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren, und setzen `initial-value` auf `red`. So stellen wir sicher, dass gleichwertige Farben unabhängig von der verwendeten Syntax übereinstimmen (beispielsweise ist `red` gleichwertig mit `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilmerkmalabfrage betrifft eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp ergibt „wahr“, wenn sich der berechnete Wert der benutzerdefinierten Eigenschaft vom `initial-value` dieser Eigenschaft unterscheidet. Hier ist das der Fall, wenn `--theme` einen anderen Wert als `red` oder einen syntaktisch gleichwertigen Wert (etwa `#ff0000`) hat. Ist die Bedingung erfüllt, erhält das {{htmlelement("output")}} eine gepunktete Umrisslinie mit einer Breite von 5px. Die Farbe der Umrisslinie ist der aktuelle Wert von `--theme`. Die standardmäßige Text-{{cssxref("color")}} ist Grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und die dritte Stilabfrage enthalten Werte für die benutzerdefinierte Eigenschaft. Sie treffen zu, wenn der `--theme`-Wert des Containers einer der angegebenen Farben entspricht, selbst wenn dieser Wert dem `initial-value` entspricht. Die erste dieser Abfragen erfasst Elemente, deren `--theme`-Wert `red`, `blue` oder `green` entspricht. In diesem Fall ist {{cssxref("color")}} der aktuelle Farbwert von `--theme` (bei `blue` und `green` wird dabei das in der ersten Stilabfrage festgelegte Grau überschrieben).

Die zweite Stilabfrage legt fest, dass der Inhalt von `<output>` zusätzlich fett dargestellt wird, wenn `--theme` `red` entspricht. So lässt sich besser erkennen, dass die Container-Abfrage zutrifft.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise feststellen, dass sRGB-Werte, die `red` entsprechen, das `<output>` rot färben – weil sie `style(--theme: red)` erfüllen –, während die Umrisslinie entfernt wird. Der Grund dafür ist, dass `style(--theme)` „falsch“ ergibt, wenn der Wert von `--theme` für das Element dem Anfangswert von `--theme` entspricht, der durch die At-Regel `@property` definiert wurde. Jeder gültige sRGB-Farbwert außer Rot, einschließlich `currentColor` oder `hsl(180 100% 50%)`, lässt die erste Stilabfrage „wahr“ ergeben: Diese Werte unterscheiden sich vom `initial-value`.

Da wir `syntax: "<color>";` festgelegt haben, können der CSS-Variablen nur gültige `<color>`-Werte zugewiesen werden. Für die Eigenschaft {{cssxref("color")}} gültige Werte, die keine `<color>`-Werte sind, etwa `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert JavaScript den `style` auf dem {{HTMLElement("body")}}-Element auf `--theme: unset` beziehungsweise `--theme: gibberish`. Keiner dieser Werte ist eine Farbe. Beide sind ungültig und werden ignoriert. Daher wird der unveränderte Anfangswert geerbt: `style(--theme)` ergibt „falsch“ und `style(--theme: red)` ergibt „wahr“.

> [!NOTE]
> Erwägen Sie beim Deklarieren benutzerdefinierter Eigenschaften die Verwendung von `@property` mit dem Deskriptor {{cssxref("@property/syntax","syntax")}}, damit der Browser berechnete Werte korrekt vergleichen kann.

### Einfache Syntax und Bereichssyntax in Stilabfragen

Wenn ein `<style-feature>` einen Wert enthält, können Sie den Vergleich auf zwei verschiedene Arten ausdrücken. Sie sehen ähnlich aus, verhalten sich aber sehr unterschiedlich. Daher ist es wichtig, die richtige Form zu wählen.

Die **einfache Syntax** verwendet einen Doppelpunkt, wie bei einer CSS-Deklaration:

```css
@container style(--n: 3) {
  /* … */
}
```

Diese Form ergibt „wahr“, wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft mit dem Wert auf der rechten Seite übereinstimmt. Bei einer [nicht registrierten](#nicht_registrierte_benutzerdefinierte_eigenschaften) benutzerdefinierten Eigenschaft ist der berechnete Wert der Wert der Eigenschaft in der geschriebenen Form: Der Browser wertet `calc()` oder andere darin enthaltene Ausdrücke nicht aus. Der Vergleich entspricht im Wesentlichen einem Vergleich der Tokens beider Werte. Um gleichwertige Werte (etwa `blue` und `#0000ff`) abzugleichen, [registrieren Sie die benutzerdefinierte Eigenschaft](#registrierte_eigenschaften) mit `@property` und einem `syntax`-Deskriptor.

Die **Bereichssyntax** verwendet einen Vergleichsoperator (`=`, `<`, `<=`, `>` oder `>=`):

```css
@container style(--n = 3) {
  /* … */
}
```

Um diese Form auszuwerten, geht der Browser wie folgt vor:

1. Er löst beide Seiten auf (Namen benutzerdefinierter Eigenschaften werden nachgeschlagen, als würden sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet).
2. Er parst beide Seiten als einen der Typen {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}} oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine der beiden Seiten nicht als einer dieser Typen geparst werden kann, ergibt die Abfrage „falsch“.
3. Wenn beide Seiten denselben Typ haben, berechnet er die Werte beider Seiten (einschließlich der Auswertung von `calc()`-Ausdrücken) und führt den numerischen Vergleich durch. Andernfalls ergibt die Abfrage „falsch“.

Betrachten Sie das folgende Beispiel, in dem `--n` auf einen `calc()`-Ausdruck gesetzt ist:

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

Die Bereichssyntax unterstützt außerdem eine Form mit drei Werten, mit der geprüft wird, ob ein Wert innerhalb eines Intervalls liegt. Beide Vergleichsoperatoren müssen in dieselbe Richtung weisen:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}

@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Die Bereichssyntax ist auch bei der Schreibweise der beiden Seiten flexibler. Jede Seite kann ein Name einer benutzerdefinierten Eigenschaft, eine [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Referenz, ein Literalwert oder ein `calc()`-Ausdruck sein, und die Operanden können in beliebiger Reihenfolge stehen. Die folgenden Formen sind alle gültig:

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

Die einfache Syntax ist restriktiver: Links muss der Name der benutzerdefinierten Eigenschaft stehen (ohne `var()`), rechts der Wert. Die folgenden Formen sind alle **ungültig**:

```css example-bad
@container style(var(--n): 3) {
  /* … */
}
@container style(3: --n) {
  /* … */
}
```

Da bei der Bereichssyntax beide Seiten als einer der aufgeführten numerischen Typen geparst werden müssen, eignet sie sich nicht zum Vergleich schlüsselwortartiger Werte. Wenn beispielsweise `--s: new` gilt, ergibt die Abfrage `style(--s = new)` „falsch“ (weil `new` weder eine Zahl noch eine Länge usw. ist), während `style(--s: new)` „wahr“ ergibt.

Kurz gesagt:

- Verwenden Sie **`style(--variable: value)`** für Vergleiche mit schlüsselwort- oder zeichenfolgenartigen Werten, etwa `style(--stock: low)` oder `style(--theme: dark)`.
- Verwenden Sie **`style(--variable = value)`** (oder `<`, `<=`, `>`, `>=`) für numerische Vergleiche, etwa `style(--columns >= 3)` oder `style(--gap = 1rem)`.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die in mehrfach verschachtelten Container-Abfragen definierten Stile werden angewendet, wenn alle umschließenden Container-Abfragen zutreffen.

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

In diesem Fall erhält `<output>` einen gepunkteten Rahmen mit einer Breite von 5px, wenn es in einem Container verschachtelt ist, für den `--theme: purple` gesetzt ist, und dieser Container wiederum in einem Container liegt, dessen `--theme`-Wert `red` ist.

### CSS-Deklarationen und -Eigenschaften in Stilabfragen

Die funktionale Notation `style()` kann reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paaren enthalten. Dies wird jedoch noch von keinem Browser unterstützt.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Sobald dies unterstützt wird, färbt dieses einfache Beispiel den Hintergrund aller {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elemente gelb, wenn das Elternelement bereits `bold` ist.

Der Vergleich erfolgt mit dem berechneten Wert des übergeordneten Containers. Wenn dessen berechneter {{cssxref("font-weight")}}-Wert `bold` ist (nicht `bolder` oder `900`), trifft die Abfrage zu. Wie bei Container-Stilabfragen für benutzerdefinierte Eigenschaften mussten wir keine Elemente als Container für Stilabfragen definieren, da alle Elemente standardmäßig solche Container sind. Solange für ein Element kein `container-name` festgelegt ist, erfüllt es die Abfrage, wenn `font-weight: bold` für es gesetzt wurde oder es diesen Wert geerbt hat.

Stilmerkmale, die eine Kurzschreibweise-Eigenschaft abfragen, ergeben „wahr“, wenn die berechneten Werte aller zugehörigen Einzeleigenschaften übereinstimmen, andernfalls „falsch“. Beispielsweise ergibt `@container style({{cssxref("border")}}: 2px solid red)` „wahr“, wenn alle 12 Einzeleigenschaften ({{cssxref("border-bottom-style")}} usw.), aus denen diese Kurzschreibweise besteht, auf die entsprechenden gleichwertigen Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage „falsch“ ergibt.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage gestalten. Dies könnte eine Endlosschleife verursachen.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren werden. Die Stilabfrage ergibt „falsch“, wenn der Wert der Eigenschaft ihrem Anfangswert entspricht (also nicht geändert wurde), und andernfalls „wahr“.

```css
@container style(font-weight) {
}
```

Das obige Beispiel ergibt „wahr“ für jedes Element, dessen `font-weight`-Wert vom Anfangswert abweicht. User-Agent-Stylesheets setzen beispielsweise `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente. Manche Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. Für {{htmlelement("optgroup")}} wird vom User Agent mitunter ebenfalls ein anderer `font-weight`-Wert als `normal` festgelegt. Solange der `font-weight`-Wert eines Elements nicht dem Standardwert dieses User Agents entspricht, ergibt die Stilabfrage „wahr“.

Diese Funktionen werden noch von keinem Browser unterstützt.

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries)
- CSS-At-Regel {{Cssxref("@container")}}
- CSS-Eigenschaft {{Cssxref("contain")}}
- CSS-Kurzschreibweise {{Cssxref("container")}}
- CSS-Eigenschaft {{Cssxref("container-name")}}
- [Container-Scrollzustandsabfragen verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [`aspect-ratio` verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) auf una.im (2022)
