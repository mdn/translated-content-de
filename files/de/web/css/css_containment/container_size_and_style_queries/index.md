---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 5a57c5ce4989d8fc0708e302a20b516a7a99de50
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt true oder false zurück, abhängig davon, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen ähneln [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anzuwenden. In ähnlicher Weise ermöglicht die {{cssxref("@container")}}-Regel, Stile basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements anzuwenden, anstatt auf die des Ansichtsfensters. Container-Abfragen haben dieselben Syntaxregeln und logische Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt zwei Arten von Container-Abfragen: _Containergrößenabfragen_ und _Containerstilabfragen_:

- **Containergrößenabfragen**

  - : Größenabfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Orientierung und des [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio). Die enthaltenen Elemente müssen ausdrücklich als _Sizes Query Container_ deklariert werden.

- **Containerstilabfragen**
  - : Stilabfragen ermöglichen es, Stile basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfragecontainer sein. Derzeit wird als Stilmerkmal nur die CSS-[benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage true oder false zurück, basierend auf dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstilabfragen vollständig unterstützt werden, können Sie Stile auf alle Nachkommen eines Elements basierend auf jeder Eigenschaft, Deklaration oder berechneten Wert anwenden – zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen durch Betrachtung von:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern) zur Begrenzung ihres Geltungsbereichs, und
3. Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die damit verbundenen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element wahr ist. Der Größencontainer eines Elements ist der nächste Vorfahr mit Containment.

Elemente werden als _Sizes Query Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Sizes Query Containern fügt ihnen [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit – die Abfrage der Größe jedes Elements im DOM permanent wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachkommenstil die Größe des Containerelements verändert.

In einer Containergrößenabfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage beinhaltet einen Namen des Größenmerkmals, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die zum Kombinieren eines oder mehrerer `<size-query>`s verwendet wird, ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` – `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungsempfindlichen {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer – sie wird nur gegen Elemente evaluiert, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungsempfindliche {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen es, jeden Container-Vorfahr des Elements anzusteuern. Ohne einen Containername stimmt die Abfrage nur mit dem nächsten Container-Vorfahr überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzusteuern. Stile innerhalb der benannten `@container`-Regeln werden nur auf entsprechende Elemente innerhalb von Containern mit diesen eingestellten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card` und die der Größenabfrage entsprechen, diese Stile auf ihre Element-Nachkommen angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die im `wide` oder `narrow` eingestellten Stile (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber es kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Containerelements auswertet, wie sie in einer oder mehreren `style()`-Funktionsnotationen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in einer Stilabfrage zu kombinieren, sind dieselben wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname – `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einziges **`<style-feature>`**. Laut der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzig derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft die CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird es als falsch ausgewertet.
Ein Stilmerkmal ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert sich vom [Anfangswert](#registrierte_eigenschaften) der angegebenen Eigenschaft unterscheidet.

In der Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während sie derzeit nicht unterstützt werden, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Das Abfragen von `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}} oder die {{cssxref("container")}}-Kurzform wird benötigt. Diese Abfrage gibt true zurück, wenn der Container 100vw oder weniger ist. Das unterscheidet sich vom Abfragen von `@container style(max-width: 100vw)`, das eine Stilabfrage ist; wenn es unterstützt wird, gibt diese Abfrage true zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Solange Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften nicht unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne einen Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige wichtige Punkte, die bereits erwähnt wurden, an die man sich aber erinnern sollte:

- Alle Elemente können Stilabfragecontainer sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einschließen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn ein Element niemals als Container betrachtet werden soll, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container assoziierten Abfragenamen; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt der Abfassung dieses Dokuments (Februar 2024) funktionieren Containerstilabfragen nur mit CSS-Benutzereigenschaftenwerten in der `style()`-Abfrage.

Nun, lassen Sie uns in verschiedenen `<style-feature>`-Typen eintauchen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind innerhalb eines `<style-query>` genauso enthalten, wie Sie jede reguläre CSS-Eigenschaft in einer Feature-Abfrage einschließen würden: entweder mit oder ohne einen Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert angegeben wird, gibt die Abfrage false zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel, falls vorhanden. Die Stilabfrage gibt wahr zurück und stimmt mit allen Elementen überein, die einen Wert der benutzerdefinierten Eigenschaft haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung erklärt wurde.

##### Nicht-registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine einfache CSS-Benutzereigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel entspricht die Containerabfrage dem Element, auf dem die `--theme-color`-Eigenschaft erklärt wurde, und allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} erklärt wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses [DOM](/de/docs/Glossary/DOM)-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente wahr zurück, wenn der berechnete Wert für `--theme-color` sich vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherited: true;
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

In diesem Beispiel entspricht das `:root`-Element NICHT der Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`-Wert. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die diesen Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert der Eigenschaft des Elements eine exakte Übereinstimmung sein, wobei äquivalente Werte nur übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einer [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode) definiert wurde, die einen `syntax`-Descriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage entspricht jedem Element, das `blue` als {{cssxref("computed_value")}} der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde. Beispielsweise:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde er bei `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Auswahlknöpfen. Die vierte Option enthält ein Text-{{htmlelement("input")}} zur Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}}-Element, das ein Vorfahr der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wenn ein Radio-Button ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Radio-Buttons nur aktualisiert, wenn der `other`-Radio-Button aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", (e) => {
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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` zu setzen, um sicherzustellen, dass äquivalente Farben übereinstimmen, unabhängig davon, welche Syntax verwendet wird (zum Beispiel, `#F00` ist gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmalabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Art von Abfrage gibt wahr zurück, wenn der berechnete Wert der benutzerdefinierten Eigenschaft anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird sie wahr sein, wenn der Wert von `--theme` jeder Wert außer einem Syntax-äquivalenten Wert von `#f00` (wie `red`) ist. Wenn wahr, hat das {{htmlelement("output")}} eine 5px gepunktete Umrandung. Die Randfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers eine äquivalente Farbe zu dem aufgeführten Wert ist, auch wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage entspricht Elementen, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn er es ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Fall von `blue` und `green`, die grau in der ersten Stilabfrage überschreiben).

Die zweite Stilabfrage gibt an, dass, wenn `--theme` äquivalent zu `red` ist, die Inhalte des `<output>` ebenfalls fett sein werden. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen – da es `style(--theme: red)` entspricht – während die Umrandung entfernt wird, weil `style(--theme)` false zurückgibt, wenn der Elementwert für `--theme` derselbe ist wie der Initialwert für `--theme`, der von der `@property`-Regel definiert wurde. Jeder andere gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., lässt die erste Stilabfrage wahr zurückgeben; sie sind Werte, die sich vom Anfangswert unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugeordnet werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `unsinn` eingeben, aktualisiert JavaScript den `style` auf dem {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: unsinn`. Keines davon sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true zurückgibt.

> [!NOTE]
> Erwägen Sie, beim Deklarieren von benutzerdefinierten Eigenschaften `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor zu verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

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

In diesem Fall hat das `<output>` eine 5px gepunktete Linie, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container wiederum in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Erklärungen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, macht dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elemente gelb, wenn der Elternteil bereits `bold` ist.

Die Übereinstimmung erfolgt mit dem berechneten Wert des übergeordneten Containers; wenn das berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschaften-Containerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, geben wahr zurück, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und ansonsten falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` auf true auflösen, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform bilden, auf die gleichen äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Containerstilabfrage false ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage gestalten, da dies eine Endlosschleife verursachen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls true.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element true zurückgeben, das einen Wert für `font-weight` hat, der sich vom Anfangswert unterscheidet. Benutzerspezifische Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat manchmal auch ein anderes `font-weight` als `normal`, das vom Benutzeragenten gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen werden derzeit in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
