---
title: Verwendung von Containergröße und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[Containeranfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente innerhalb eines bestimmten Containers basierend auf den Merkmalen dieses Containers anzuwenden. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Containeranfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}} At-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. Ebenso ermöglicht die {{cssxref("@container")}} At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements, anstatt auf das Ansichtsfenster. Containeranfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containeranfragen:

- **Containergrößenanfragen**
  - : Größenanfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenanfrage-Container_ deklariert werden.

- **Containerstilanfragen**
  - : Stilanfragen ermöglichen es, Stile auf Elemente basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit ist die einzige von Stilanfragen unterstützte Stileigenschaft die CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage wahr oder falsch zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstilanfragen vollständig unterstützt werden, erlauben sie es Ihnen, Stile auf die Nachkommen eines beliebigen Elements basierend auf jeder Eigenschaft, Deklaration oder berechnetem Wert anzuwenden - zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scroll-State-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-State-Anfragen ermöglichen es, CSS-Regeln basierend auf Scroll-Status-Bedingungen selektiv auf die Nachkommen eines Containers anzuwenden, z. B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll Snap Container geschnappt ist. Die enthaltenen Elemente müssen explizit als _Scroll-State-Anfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen der Containeranfragen, indem wir uns anschauen:

1. [Größenanfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Umfang zu begrenzen, und
3. die Verwendung der `style()` Funktionsnotation innerhalb der {{cssxref("@container")}} At-Regel `<container-condition>`, um [Stilanfragen mit benutzerdefinierten Eigenschaften](#stilanfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-State-Anfragen werden in [Verwendung von Container-Scroll-State-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) besprochen.

## Containergrößenanfragen

Containergrößenanfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf eingebettete Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenanfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzschrift) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenanfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist aus Leistungsgesichtspunkten notwendig - die Abfrage der Größe jedes Elements im DOM, die ganze Zeit, wäre schlecht für die Leistung und das Benutzererlebnis. Darüber hinaus, wenn ein nachfolgender Stil die Größe des Containerelements änderte, könnte eine Endlosschleife auftreten.

In einer Containergrößenanfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größanfrage umfasst einen Namen der Größenmerkmale, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` begrenzt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media) Größenmerkmalsabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>`, nämlich `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}} Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die in unserer Containeranfrage deklarierten Stile gelten für die Nachkommen aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen case-sensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer - sie wird nur gegen Elemente ausgewertet, bei denen dieser Name in der `container-name` Eigenschaft gesetzt ist.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container` Regeln verwendet werden können; dies sind case-sensitive {{cssxref("ident")}}-Werte. Die Namen der Container ermöglichen das Targeting jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container` At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}} Eigenschaft oder die {{cssxref("container")}} Kurzschrift verwenden, um bestimmte Containerelemente zu targetieren. Stile innerhalb der benannten `@container` At-Regeln werden nur auf passende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containeranfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containeranfrageblocks auf die Nachkommen aller {{htmlelement("li")}} Elemente mit einer Breite, die größer als ihre Höhe ist, angewendet. Beachten Sie, dass andere Elemente mit `container-name: card` angewendet, die die Größenanfrage erfüllen, auch diese Stile auf ihre Element-Nachkommen angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow` Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstilanfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, hindert aber nicht daran, dass das Element nicht übereinstimmende Abfragen erfüllt.

Mit Containeranfragen sind wir nicht auf Größenanfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstilanfragen

Eine _Containerstilanfrage_ ist eine `@container` Abfrage, die berechnete Stile des Containerelements auswertet, wie sie in einer oder mehreren `style()` Funktionsnotationen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften in einer Stilabfrage zu kombinieren, ist die gleiche wie in [CSS Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname - `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS Containment Specification kann ein `<style-feature>` eine gültige CSS [Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stileigenschaftsmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne einen Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in der Zukunft die CSS-Deklaration), die als `style()` Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls wird sie als falsch ausgewertet. Ein Stilmerkmal ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert sich vom [Anfangswert](#registrierte_eigenschaften) für die angegebene Eigenschaft unterscheidet.

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

Die `style()` Funktionsnotation wird verwendet, um Stilabfragen von Größenanfragen zu unterscheiden. Während derzeit noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Die Abfrage von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}} Kurzschrift ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 600px oder weniger groß ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn sie unterstützt wird, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}} Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne einen Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein paar Dinge, die bereits erwähnt wurden, aber wichtig sind, sich zu merken:

- Alle Elemente können Stilanfrage-Container sein; Das Setzen eines `container-type` ist nicht erforderlich. Wenn nachfolgende Stile sich nicht auf die berechneten Stile eines Vorfahren auswirken, ist Containment nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einschließen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es hindert das Element jedoch nicht daran, ein Stilcontainer zu sein.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstilanfragen nur mit CSS-Benutzerdefinierten Eigenschaftswerten in der `style()` Abfrage.

Jetzt tauchen wir ein und werfen einen Blick auf die verschiedenen `<style-feature>` Typen.

### Stilanfragen für benutzerdefinierte Eigenschaften

Stilanfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einschließen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>` Parameter der `style()` Funktionsnotation kann nur einen Namen für eine CSS-Variable enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage falsch zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property` At-Regel, wenn es eine gibt. Die Stilabfrage wird wahr zurückgeben und alle Elemente, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne dass sie registriert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzerdefinierte Eigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde und all seinen Nachkommen. Da die CSS-Variable `--theme-color` am {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente wahr zurück, wenn der berechnete Wert des Elements für `--theme-color` sich von dem [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root` Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value` Wert. Der benutzerdefinierte Eigenschaftenwert für das Element (und alle Elemente, die den Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft genau übereinstimmen, wobei nur äquivalente Werte übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax` Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilanfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur übereinstimmen, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde es wahr für `@container style(--accent-color: blue)` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Radiobuttons. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen am {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}}-Elemente ist, wann immer ein Radiobutton ausgewählt wird. Wenn der Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Radiobuttons nur dann aktualisiert, wenn der `other`-Radiobutton ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property` At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `#00F`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmen (zum Beispiel, `#F00` ist gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmalsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für den Wert der benutzerdefinierten Eigenschaft sich von dem `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` ein Wert ist, der nicht gleichwertig zu einem der Syntax von `#f00` (wie `red`) ist. Wenn dies der Fall ist, hat der {{htmlelement("output")}} einen 5px gepunkteten Umriss. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese werden übereinstimmen, wenn der Wert `--theme` des Containers ein äquivalenter Wert zu dem angegebenen ist, auch wenn dieser Wert der gleiche wie der `initial-value` ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die `--theme`-Farbe (im Fall von `blue` und `green` überschreibt sie das in der ersten Stilabfrage festgelegte Grau).

Die zweite Stilabfrage besagt, dass, wenn `--theme` äquivalent zu `red` ist, die Inhalte des `<output>`-Elements ebenfalls fett sein werden. Wir haben dies getan, um besser zu zeigen, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht bemerken, dass Werte, die äquivalent zu sRGB `red` sind, das `<output>`-Element rot machen - da es `style(--theme: red)` entspricht - während der Umriss entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Wert des Elements für `--theme` dem Anfangswert für `--theme`, der durch die `@property` At-Regel definiert ist, entspricht. Jeder Nicht-rot sRGB-gültiger Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage wahr; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}} Eigenschaft, die keine Wert-`<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft, und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` am {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keins davon sind Farbwerte. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` falsch zurückgibt und `style(--theme: red)` wahr wird.

> [!NOTE]
> Bei der Deklaration von benutzerdefinierten Eigenschaften sollten Sie die `@property`-Anweisung mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor verwenden, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die Stile, die innerhalb mehrfach verschachtelter Containerabfragen definiert sind, werden angewendet, wenn alle umschließenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rand haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilanfrage-CSS-Deklarationen und -Eigenschaften

Noch nicht in jedem Browser unterstützt, kann die `style()` Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe jedes {{htmlelement("b")}} und {{htmlelement("strong")}} Elements gelb machen, wenn der Elternteil bereits `fett` ist.

Das Matching erfolgt gegen den berechneten Wert des Eltern-Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` (nicht `bolder` oder `900`) ist, gibt es eine Übereinstimmung. Genau wie bei Containerstilanfragen für benutzerdefinierte Eigenschaften mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stileigenschaften, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und falsch ansonsten. Zum Beispiel, `@container style({{cssxref("border")}}: 2px solid red)` wird auf wahr aufgelöst, wenn alle 12 Langhand-Eigenschaften ({{cssxref("border-bottom-style")}}, etc.) die gleiche äquivalente Werte haben.

Die globalen CSS-Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und verursachen, dass die Containerstilanfrage falsch ist.

Wenden Sie bitte nicht die Stile an, die Sie in der Stilanfrage abfragen, auf das Element, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen könnte.

Es wird erwartet, dass Stilanfragen auch Eigenschaften in einem booleschen Kontext akzeptieren werden. Die Stilanfrage wird falsch zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er sich nicht geändert hat), und wahr andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet, wahr zurückgeben. Stylesheets von Benutzeragenten setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight`, das von `normal` abweicht, das vom Benutzeragenten gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragent ist, wird die Stilanfrage wahr zurückgeben.

Diese Features werden derzeit von keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschrift Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scroll-State-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilanfragen](https://una.im/style-queries/) über una.im (2022)
