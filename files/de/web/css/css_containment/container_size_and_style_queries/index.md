---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

[Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage ergibt "wahr" oder "falsch", je nachdem, ob die Abfragebedingung für den Container zutrifft oder nicht.

Containerabfragen sind ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. Ebenso ermöglicht die {{cssxref("@container")}}-At-Regel, Stile basierend auf der Größe eines enthaltenen Elements oder anderen Stilmerkmalen, statt auf dem Ansichtsfenster, anzuwenden. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**

  - : Größenabfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}, anzuwenden. Die enthaltenen Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **Containerstilabfragen**

  - : Stilabfragen ermöglichen es, Stile basierend auf den Stilmerkmalen eines enthaltenen Elements anzuwenden. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit wird von den Stilabfragen nur das CSS-Feature [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall ergibt die Abfrage "wahr" oder "falsch", abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstilabfragen vollständig unterstützt werden, ermöglichen sie das Anwenden von Stilen auf alle Nachkommen eines Elements basierend auf jeder Eigenschaft, Deklaration oder berechnetem Wert — zum Beispiel, wenn der Container `display: inline flex` ist oder einen nicht-transparenten Hintergrundfarbe hat.

- **[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scroll-Zustandsabfragen erlauben es Ihnen, CSS-Regeln selektiv auf Nachkommen eines Containers basierend auf Scroll-Zustandsbedingungen anzuwenden, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeheftet ist. Die enthaltenen Elemente müssen ausdrücklich als _Scroll-Zustandsabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen Sie die Grundlagen von Containerabfragen kennen, indem Sie sich beschäftigen mit:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Umfang zu begrenzen, und
3. der Verwendung der `style()`-Funktionalnotation innerhalb der {{cssxref("@container")}}-At-Regel's `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustandsabfragen werden in [Verwendung von Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) diskutiert.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugeordneten Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder das {{cssxref("container")}}-Kurzschreibweise) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Enthalten](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine leistungsfähige Notwendigkeit — die Größe jedes Elements im DOM jederzeit abzufragen, wäre schlecht für die Leistung und das Benutzererlebnis. Darüber hinaus, wenn ein Nachkommenstil die Größe des Container-Elements ändert, könnte dies zu einer Endlosschleife führen.

In einer Containergrößenabfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik beim Kombinieren von einer oder mehreren `<size-query>`s ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media) Feature-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzige `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die in unserer Containerabfrage deklarierten Stile werden auf die Nachkommen aller Formulare mit einer Breite zwischen `10em` und `30em`, einschließlich angewendet.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungsempfindlichen {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungsempfindliche {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Targeting eines beliebigen Container-Vorfahren des Elements. Ohne einen Container-Namen passt die Abfrage nur zum nächsten Container-Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder das {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente zu targetieren. Stile innerhalb der benannten `@container`-Regeln werden nur auf passende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die innerhalb des Containerabfrageblocks festgelegten Stile auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die zur Größenabfrage passen, diese Stile auf die Nachkommen ihrer Elemente anwenden.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` werden die Stile aus der `wide`- oder `narrow`-Abfrage (oder beide, wenn ein Element genau 20em breit ist) angewendet bekommen.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, hindert das Element jedoch nicht daran, zu unbenannten Abfragen zu passen.

Mit Containerabfragen sind wir nicht nur auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements bewertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften in eine Stilabfrage zu kombinieren, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied liegt im Funktionsnamen — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert beinhaltet, wertet die Stilabfrage auf wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, in Zukunft, der CSS-Deklaration), die als `style()`-Argument übergeben wird, wahr für den abgefragten Container ist. Andernfalls löst es sich in falsch auf.
Ein Stilmerkmal ohne Wert wertet auf wahr, wenn der berechnete Wert von der [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Die Abfrage `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}} oder der {{cssxref("container")}}-Kurzschreibweise ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 100vw oder kleiner ist. Dies unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn unterstützt, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}} Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzubeziehen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die zu beachten sind und die bereits erwähnt wurden, aber wichtig sind, sich daran zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einbeziehen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verbundenen Abfragenamen; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt der Erstellung dieses Dokuments (Februar 2024) funktionieren Containerstilabfragen nur mit CSS-Benutzerwerte aufgerufene custom property Werte in der `style()`-Abfrage.

Lassen Sie uns nun eintauchen und die verschiedenen `<style-feature>`-Typen ansehen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb eines `<style-query>` genauso enthalten, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage aufnehmen würden: entweder mit oder ohne einen Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert angegeben wird, gibt die Abfrage "falsch" zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-At-Regel, falls vorhanden. Die Stilabfrage gibt "wahr" zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit jedem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung erklärt wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine einfache CSS-Variablewertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer "wahr" zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde und allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}}-Element deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens auf "wahr" gesetzt.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wird, gibt die Stilabfrage `style(--theme-color)` nur dann "wahr" zurück, wenn der berechnete Wert von `--theme-color` des Elements anders ist als der [`initial-value`](/de/docs/Web/CSS/@property/initial-value), der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root`-Element nicht mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`. Der benutzerdefinierte Eigenschaftswert des Elements (und aller Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft beinhaltet, muss der berechnete Wert des Elements für diese Eigenschaft genau übereinstimmen, wobei äquivalente Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage passt auf jedes Element, das `blue` als {{cssxref("computed_value")}} der `--accent-color` benutzerdefinierte Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue`-Wert äquivalent sind (wie der hexadezimale Code `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, würde es "wahr" zurückgeben für `@container style(--accent-color: blue)`.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Auswahlknöpfen. Die vierte Option enthält ein Text{{htmlelement("input")}} zur Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variable `--theme` auf dem {{htmlelement("body")}}-Element, welches ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}}-Elements ist, wann immer ein Auswahlknopf ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Auswahlknopfes aktualisiert, nur wenn der `other` Auswahlknopf ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property` At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}} Wert zu definieren und den `initial-value` auf `#00F` zu setzen, um sicherzustellen, dass gleichwertige Farben unabhängig davon übereinstimmen, welches Syntax verwendet wird (zum Beispiel `#F00` ist gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Feature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diesen Abfragetyp gibt "wahr" zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft vom `initial-value` dieser Eigenschaft abweicht. In diesem Fall wird es "wahr" sein, wenn der Wert von `--theme` jeder andere als irgendein Syntax-gleichwertiger Wert von `#f00` ist (wie `red`). Wenn "wahr", wird das {{htmlelement("output")}} eine 5px gestrichelte Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die standardmäßige Text-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese werden übereinstimmen, wenn der --theme-Wert des Containers einer äquivalenten Farbe des angegebenen Werts entspricht, auch wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage passt auf Elemente, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn es das ist, wird die {{cssxref("color")}} die aktuelle Farbe des `--theme`-Werts sein (im Fall von `blue` und `green` überschreibt das das Grau, das in der ersten Feature-Abfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass, wenn `--theme` gleich `red` ist, der Inhalt des `<output>` ebenfalls fett ist. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Probieren Sie verschiedene Farbwerte in das Textfeld einzugeben. Sie können feststellen, dass Werte, die dem sRGB-Pendant von `red` entsprechen, das `<output>` rot färben — da es mit `style(--theme: red)` übereinstimmt — während die Umrandung entfernt wird, weil `style(--theme)` "falsch" zurückgibt, wenn der Wert des Elements für `--theme` derselbe ist wie der Initialwert für `--theme`, der durch die `@property` At-Regel definiert ist. Jeder andere sRGB-gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, macht die erste Stilabfrage "wahr"; es sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültigen `<color>`-Werten zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [invalid](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines von beiden ist eine Farbe. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Initialwert vererbt und unverändert bleibt, wobei `style(--theme)` "falsch" zurückgibt und `style(--theme: red)` "wahr".

> [!NOTE]
> Beim Deklarieren von benutzerdefinierten Eigenschaften, ziehen Sie in Betracht, `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor zu verwenden, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen "wahr" sind.

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

In diesem Fall wird das `<output>` eine 5px gestrichelte Umrandung haben, wenn es in einem Container geschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage CSS-Deklarationen und -Eigenschaften

Derzeit in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses grundlegende Beispiel den Hintergrund von {{htmlelement("b")}} und {{htmlelement("strong")}}-Elementen gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Die Übereinstimmung erfolgt gegenüber dem berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des übergeordneten Elements `bold` (nicht `bolder` oder `900`) ist, gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschaftscontainerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es mit `font-weight: bold` oder vererbt entspricht.

Stileigenschaften, die eine Kurzform abfragen, sind "wahr", wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls "falsch". Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform ausmachen, auf die gleichen äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Containerstilabfrage "falsch" ist.

Wenden Sie die Stile, nach denen Sie in der Stilabfrage fragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt "falsch" zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und ansonsten "wahr".

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt für jedes Element "wahr" zurück, das einen Wert für `font-weight` hat, der von seinem Anfangswert abweicht. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf "fett", andere auf "fetter". {{htmlelement("optgroup")}} hat manchmal ebenfalls ein `font-weight`, das von `normal` abweicht, das vom Benutzeragenten festgelegt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage "wahr" zurückgeben.

Diese Funktionen werden in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzbefehls-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
