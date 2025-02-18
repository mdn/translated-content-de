---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Bedingung für den Container erfüllt ist.

Container-Abfragen sind ähnlich wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}} At-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anzuwenden. Ähnlich ermöglicht die {{cssxref("@container")}} At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Stilmerkmalen eines enthaltenen Elements anstelle des Viewports. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt zwei Arten von Container-Abfragen: _Containergrößen-Abfragen_ und _Containerstil-Abfragen_:

- **Containergrößen-Abfragen**

  - : Größen-Abfragen ermöglichen die Anwendung von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größen-Abfrage-Container_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stilmerkmalen eines enthaltenen Elements. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit ist das einzige von Stilabfragen unterstützte Stilmerkmal CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage wahr oder falsch zurück, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstil-Abfragen vollständig unterstützt werden, ermöglichen sie das Anwenden von Stilen auf Nachkommen eines beliebigen Elements basierend auf einer beliebigen Eigenschaft, Deklaration oder berechneten Wert - zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht transparente Hintergrundfarbe hat.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns Folgendes ansehen:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Bereich einzuschränken, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größen-Container eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größen-Abfrage-Container_ deklariert, indem sie ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` setzen.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größen-Abfrage-Containern fügt [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit - die Abfrage der Größe jedes Elements im DOM würde die Leistung und Benutzererfahrung beeinträchtigen. Zusätzlich könnte bei einer Änderung des Stils eines Nachkommens, die die Größe des Container-Elements verändert, eine Endlosschleife auftreten.

In einer Containergrößen-Abfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größen-Abfrage enthält einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media) Größenmerkmal-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzige `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungsempfindlichen {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer – sie wird nur für Elemente ausgewertet, denen dieser Name in der `container-name`-Eigenschaft zugewiesen wurde.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungsempfindliche {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Targetieren eines beliebigen Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Container-Elemente zu targetieren. Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit den gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die mit der Größenabfrage übereinstimmen, diese Stile auf die Nachkommen ihrer Elemente anwenden werden.

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

Im obigen Beispiel hat das Element zwei Container-Namen: `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` bedeutet, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit nicht benannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in eine Stilabfrage zu kombinieren, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, evaluiert die Stilabfrage zu wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration) für den abgefragten Container wahr ist. Andernfalls wird false ausgegeben.
Ein Stilmerkmal ohne Wert evaluiert zu wahr, wenn der berechnete Wert vom [Anfangswert](/de/docs/Web/CSS/@property/initial-value) der angegebenen Eigenschaft abweicht.

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

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl derzeit nicht unterstützt, werden wir irgendwann in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Die Abfrage `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, wird benötigt. Diese Abfrage wird wahr, wenn der Container 100vw oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige wichtige Punkte, die bereits erwähnt wurden, aber wichtig zu wissen sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommen-Stile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Achten Sie darauf, dass Ihre Container-Elemente ein `container-type` von `size` oder `inline-size` gesetzt haben, wenn Sie Größenmerkmale in Ihrer Abfrage enthalten.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verbundenen Abfragenamen; es verhindert nicht, dass ein Element ein Stilcontainer wird.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) arbeiten Containerstil-Abfragen nur mit CSS-Benutzerdefinierten Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb einer `<style-query>` genauso eingefügt, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage false zurück, wenn der Wert derselbe ist wie der Wert der `initial-value`-Deskriptor innerhalb der `@property`-At-Regel, falls vorhanden. Die Stilabfrage gibt true zurück und passt zu allen Elementen, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine einfache CSS-Benutzerdefinierteigenschaftswertzuweisung eingeführt werden, geben abwertslosen benutzerdefinierten Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel passt die Containerabfrage auf das Element, auf dem die `--theme-color` Eigenschaft deklariert wurde und alle seine Nachkommen. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, ist die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens wahr.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente wahr zurück, wenn der berechnete Wert von `--theme-color` für das Element vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle die den Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, passen.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft eine exakte Übereinstimmung sein, wobei gleichwertige Werte nur dann übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax` Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als {{cssxref("computed_value")}} der `--accent-color` benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wurde, würde es für `@container style(--accent-color: blue)` wahr sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Radio-Buttons. Die vierte Option beinhaltet ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable im {{htmlelement("body")}} Element, welches ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}} Elements ist, wann immer ein Radio-Button ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Radio-Buttons nur dann aktualisiert, wenn der `other` Radio-Button aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` zu setzen, um sicherzustellen, dass gleichwertige Farben übereinstimmen, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `#F00` gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilfeature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft von dem `initial-value` für diese Eigenschaft abweicht. In diesem Fall wird sie wahr, wenn der Wert von `--theme` irgendetwas anderes ist als ein syntaktisch äquivalenter Wert zu `#f00` (wie `red`). Wenn wahr, wird das {{htmlelement("output")}} eine 5px gepunktete Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen beinhalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers mit dem aufgelisteten Wert übereinstimmt, selbst wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die Textfarbe der aktuelle Wert von `--theme` sein (im Fall von `blue` und `green` wird das Grau aus der ersten Stilabfrage überschrieben).

Die zweite Stilabfrage besagt, dass, wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>`s ebenfalls fett wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht bemerken, dass Werte, die sRGB-äquivalent zu `red` sind, das `<output>` rot machen – da sie mit`style(--theme: red)` übereinstimmen – während sie die Umrandung entfernen, weil `style(--theme)` false ergibt, wenn der Elementwert für `--theme` derselbe wie der `initial-value` ist, der durch die `@property`-At-Regel definiert ist. Jeder nicht-rote, sRGB-gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage zu true; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>` Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine Werte `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines dieser sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt wird und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` wahr.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, überlegen Sie, `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor zu verwenden, damit der Browser berechnete Werte korrekt vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können in andere Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Umrandung haben, wenn es in einem Container verschachtelt ist, wo `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme` Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertepaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe von jedem {{htmlelement("b")}} und {{htmlelement("strong")}} Element gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des übergeordneten Elements `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stil-Container definieren, da alle Elemente standardmäßig Stil-Container sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es passen.

Stilmerkmale, die eine Kurzformeigenschaft abfragen, werden wahr sein, wenn die berechneten Werte für jeden seiner Langformeigenschaften übereinstimmen, und sonst falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` true sein, wenn alle 12 Langformeigenschaften ({{cssxref("border-bottom-style")}}, usw.) die die Kurzform ausmachen, auf dieselben gleichwertigen Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Containerstil-Abfrage false ist.

Wenden Sie nicht die Stile an, die Sie in der Stilabfrage abfragen, auf das Element an, das Sie mit dieser Abfrage stylen, da dies möglicherweise eine Endlosschleife verursacht.

Es wird erwartet, dass Stilabfragen auch Eigenschaften im booleschen Kontext akzeptieren. Die Stilabfrage wird false zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (falls er nicht geändert wurde), und sonst true.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird true für alle Elemente zurückgeben, die einen Wert für `font-weight` haben, der sich von seinem Anfangswert unterscheidet. User-Agent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}} Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight` anders als `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzformeigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
