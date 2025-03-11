---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt entweder true oder false zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen sind ähnlich wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht es, Stile basierend auf der Größe des Ansichtsfensters oder anderen Gerätecharakteristiken auf Elemente anzuwenden. Ähnlich ermöglicht die {{cssxref("@container")}}-At-Regel, Stile basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements anzuwenden, anstatt auf das Ansichtsfenster. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Container-Größenabfragen**

  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**

  - : Stilabfragen ermöglichen das Anwenden von Stilen basierend auf den Stileigenschaften eines enthaltenen Elements. Jegliches nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit ist die einzige von Stilabfragen unterstützte Stileigenschaft CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage entweder true oder false zurück, basierend auf dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, können Sie Stile basierend auf jeder Eigenschaft, Erklärung oder berechnetem Wert auf die Nachkommen eines jeden Elements anwenden — beispielsweise, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scrollzustand-Abfragen erlauben es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scrollzustandsbedingungen anzuwenden, wie z.B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angedockt ist. Die enthaltenen Elemente müssen explizit als _Scrollzustand-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen der Container-Abfragen, indem wir uns folgende Punkte ansehen:

1. [Container-Größenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Bereich einzuschränken und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollzustand-Abfragen werden in [Verwendung von Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erörtert.

## Container-Größenabfragen

Container-Größenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzschrift) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte, wenn ein Nachkommenstil die Größe des Containerelements verändert, eine Endlosschleife entstehen.

In einer Container-Größenabfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage beinhaltet einen Größeneigenschaftsnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zum Kombinieren von einem oder mehreren `<size-query>`s ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Stile gelten für die Nachkommen aller Formulare mit einer Breite zwischen `10em` und `30em`, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß- und kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen im `container-name`-Eigenschaft haben.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; dies sind groß- und kleinschreibungssensitive {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Targeting eines beliebigen Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschrift verwenden, um spezifische Containerelemente zu targetieren. Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern angewendet, die diese Namen haben und die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer ist als ihre Höhe. Beachten Sie, dass andere Elemente mit `container-name: card`, die mit der Größenabfrage übereinstimmen, diese Stile ebenfalls auf die Nachkommen ihrer Elemente anwenden.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachkommen eines Elements mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#container-stilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik zur Kombination von Stileigenschaften in eine Stilabfrage sind dieselben wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` anstelle von `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stileigenschaft ist die benutzerdefinierte Eigenschaft, mit oder ohne Wert. Siehe die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage zu true ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder zukünftig die CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container true ist. Andernfalls wird es zu false ausgewertet. Ein Stileigenschaft ohne Wert wird zu true ausgewertet, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In der Zukunft werden wir Stilabfragen schreiben können wie:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Das Abfragen von `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzschrift, ist erforderlich. Diese Abfrage gibt true zurück, wenn der Container 100vw oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn dies unterstützt wird, gibt diese Abfrage true zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Solange Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften noch nicht unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige zu beachtende Punkte die bereits erwähnt wurden, aber wichtig sind zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Benutzerdefiniertem Eigenschaftswerten in der `style()`-Abfrage.

Lassen Sie uns nun eintauchen und uns die verschiedenen `<style-feature>`-Typen ansehen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch genannt "CSS-Variablen", eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einbeziehen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage false zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-At-Regel, falls vorhanden. Die Stilabfrage wird true zurückgeben und alle Elemente übereinstimmen, die einen benutzerdefinierten Eigenschaftswert haben, der sich von `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft eines beliebigen Wertes haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Zuweisung von CSS-Benutzerdefiniertem Eigenschaftswert eingeführt werden, geben wertlosen benutzerdefinierten Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und alle ihre Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens true sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente true zurück, wenn der berechnete Wert des Elements für `--theme-color` sich von dem [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root`-Element nicht mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`-Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die diesen Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft eine genaue Übereinstimmung sein, wobei nur äquivalente Werte eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage stimmt mit jedem Element überein, das `blue` als {{cssxref("computed_value")}} der benutzerdefinierten `--accent-color`-Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall würde, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, es true für `@container style(--accent-color: blue)` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionskästchen. Die vierte Option enthält ein Text{{htmlelement("input")}}, um eine benutzerdefinierte Farbe einzugeben.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfeldes nur aktualisiert, wenn das `other`-Optionsfeld aktiviert ist, wodurch wiederum der Wert von `--theme` aktualisiert wird.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `#00F`, wobei sichergestellt wird, dass äquivalente Farben eine Übereinstimmung sind, unabhängig davon, welche Syntax verwendet wird (z.B. `#F00` ist gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stil-Feature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt true zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert sich von dem `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird er true sein, wenn der Wert von `--theme` einem anderen Wert als einem syntaxäquivalenten Wert von `#f00` (wie `red`) entspricht. Wenn dies true ist, wird der {{htmlelement("output")}} eine 5px gepunktete Umrandung haben. Die Rahmenfarbe ist der aktuelle Wert von `--theme`. Die Standardtext{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers einer äquivalenten Farbe zu dem aufgelisteten Wert entspricht, selbst wenn dieser Wert dem `initial-value` entspricht. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert `red`, `blue` oder `green` entspricht. Wenn dies der Fall ist, wird die {{cssxref("color")}} der aktuellen `--theme`-Wert sein (im Falle von `blue` und `green` wird das durch die erste Stilabfrage festgelegte Grau überschrieben).

Die zweite Stilabfrage besagt, dass, wenn `--theme` `red` ist, der Inhalt des `<output>` ebenfalls fett wird. Wir haben dies getan, um besser zu demonstrieren, dass die Container-Abfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Ihnen wird auffallen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es `style(--theme: red)` entspricht — während sie die Umrandung entfernen, weil `style(--theme)` false zurückgibt, wenn der Wert des Elements für `--theme` dem Anfangswert für `--theme` entspricht, der durch die `@property`-At-Regel definiert wurde. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage true; sie sind Werte, die sich von dem `initial-value` unterscheiden.

Weil wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültigen `<color>`-Werten zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie z.B. `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` des {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keines von beiden sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, erwägen Sie die Verwendung von `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor, damit der Browser berechnete Werte korrekt vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle umschließenden Container-Abfragen true sind.

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

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertpaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn dies unterstützt wird, wird dieses einfache Beispiel den Hintergrund jeder {{htmlelement("b")}} und {{htmlelement("strong")}}-Elemente gelb machen, wenn der Elterncontainer bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des Elterncontainers; Wenn der berechnete {{cssxref("font-weight")}} des Elterncontainers `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschaftsabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es zutreffen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, werden true sein, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls false. Beispielsweise wird `@container style({{cssxref("border")}}: 2px solid red)` true sein, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform ausmachen, auf denselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage false ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der Anfangswert dieser Eigenschaft ist (wenn er nicht geändert wurde), und true andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt true für jedes Element zurück, das einen Wert für `font-weight` hat, der von seinem Anfangswert abweicht. User-Agent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal ein anderes `font-weight` als `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert dieses User-Agents ist, gibt die Stilabfrage true zurück.

Diese Funktionen werden noch von keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschrift-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
