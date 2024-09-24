---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 5a57c5ce4989d8fc0708e302a20b516a7a99de50
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container wahr ist.

Container-Abfragen sind ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries). Der {{cssxref("@media")}}-At-Regel ermöglicht es, Stile auf Elemente basierend auf der Viewport-Größe oder anderen Gerätemerkmalen anzuwenden. Ebenso ermöglicht der {{cssxref("@container")}}-At-Regel die Anwendung von Stilen auf Elemente basierend auf der Größe eines enthaltenen Elements oder anderen Stileigenschaften, anstatt des Viewports. Container-Abfragen haben dieselben Syntaxregeln und logische Operatoren wie Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt zwei Arten von Container-Abfragen: _Containergrößen-Abfragen_ und _Containerstil-Abfragen_:

- **Containergrößen-Abfragen**

  - : Größenabfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{glossary("Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stilabfragen ermöglichen es, Stile auf Elemente basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit wird von Stilabfragen nur die CSS-[benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage wahr oder falsch zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstil-Abfragen vollständig unterstützt werden, können Sie Stile basierend auf jeder Eigenschaft, Erklärung oder berechnetem Wert auf die Nachkommen eines Elements anwenden - zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

In dieser Anleitung lernen wir die Grundlagen von Container-Abfragen, indem wir Folgendes betrachten:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Anwendungsbereich zu begrenzen, und
3. Verwendung der `style()`-Funktionsnotierung innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element wahr ist. Der Größen-Container eines Elements ist der nächste Vorfahre mit einer Umfassungsregelung.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt [Umfassungen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit - die Größe jedes Elements im DOM kontinuierlich abzufragen wäre schlecht für die Leistung und Benutzererfahrung. Zusätzlich könnte eine unendliche Schleife auftreten, wenn ein Nachkommenstil die Größe des Containerelements änderte.

In einer Containergrößen-Abfrage umfasst die `<container-condition>` ein oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Größeneigenschaftsnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die zum Kombinieren von einem oder mehreren `<size-query>`s verwendet wird, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzige `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, groß- und kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur im Hinblick auf Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind groß- und kleinschreibungssensitive {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen das Targeting jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um bestimmte Containerelemente zu targetieren. Stile innerhalb der benannten `@container`-At-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

In diesem Beispiel gelten die Stile innerhalb des Containerabfrageblocks für die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die mit der Größenabfrage übereinstimmen, diese Stile auf die Nachkommen ihrer Elemente anwenden.

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

In diesem Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet (oder beides, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements auswertet, wie sie in einer oder mehreren `style()`-Funktionsnotierungen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften in eine Stilabfrage zu kombinieren, sind die gleichen wie bei [CSS-Eigenschaftsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einziges **`<style-feature>`**. Laut CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Die einzige derzeit unterstützte Stileigenschaft sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Tabelle zur Browserkompatibilität](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wertet die Stilabfrage als wahr aus, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container als wahr ist. Andernfalls löst es sich zu falsch auf.
Eine Stileigenschaft ohne Wert ist wahr, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()`-Funktionsnotierung wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während dies noch nicht unterstützt wird, wird es schließlich möglich sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Das Abfragen von `@container (max-width: 100vw)` ist eine Größenabfrage; Umfassungen mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, sind notwendig. Diese Abfrage ist wahr, wenn der Container 100vw oder weniger ist. Das unterscheidet sich vom Abfragen von `@container style(max-width: 100vw)`, das eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter aufzunehmen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige wichtige Anmerkungen, die bereits erwähnt wurden, aber wichtig sind zu beachten:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist keine Umfassung nötig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` eingestellt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, ihm einen `container-name` geben, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Stilcontainer wird.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Containerstil-Abfragen nur mit CSS-Benutzerdefinierte-Eigenschaft-Werten in der `style()`-Abfrage.

Schauen wir uns nun die verschiedenen `<style-feature>`-Typen an.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), auch bekannt als "CSS-Variablen", eines Elternelements abzufragen. Sie sind in einem `<style-query>` enthalten, genau wie Sie jede reguläre CSS-Eigenschaft in einer Eigenschaftsabfrage einbeziehen würden: entweder mit oder ohne Wert.

#### Unabhängige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotierung kann nur einen CSS-Variablennamen enthalten; einer benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage false zurückgeben, wenn der Wert der gleiche wie der Wert des `initial-value`-Deskriptors innerhalb der `@property`-At-Regel ist, falls vorhanden. Die Stilabfrage wird true zurückgeben und für alle Elemente gelten, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft irgendeines Wertes haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine einfache CSS-Benutzerdefinierte-Eigenschafts-Wertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und all seinen Nachkommen. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{glossary("DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder über JavaScript mit {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}} definiert werden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente true zurück, wenn der berechnete Wert für `--theme-color` des Elements von dem im Originalregister gesetzten [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft der gleiche wie der `initial-value`-Wert ist. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft genau übereinstimmen, wobei nur äquivalente Werte übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}-Methodenaufruf) definiert wurde, die eine `syntax`-Beschreibung enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstil-Abfrage stimmt mit jedem Element überein, das `blue` als {{cssxref("computed_value")}} der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere Farbw

erte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)`, oder `rgb(0% 0% 100%)` gesetzt wurde, würde er true für `@container style(--accent-color: blue)` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} für die Eingabe einer benutzerdefinierten Farbe.

```html
<fieldset>
  <legend>Ändern Sie den Wert von <code>--theme</code></legend>
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
      <label for="other">Andere</label>
      <label for="color">Farbe:</label>
      <input text="checkbox" name="selection" value="currentcolor" id="color" />
    </li>
  </ol>
</fieldset>
<output>Ich ändere die Farben</output>
```

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen auf dem {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, immer wenn ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der {{domxref("HTMLInputElement.value", "value")}} des `anderen`-Optionsfelds nur aktualisiert, wenn das `andere`-Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}} zu definieren und setzen den `initial-value` auf `#00F`, was sicherstellt, dass äquivalente Farben unabhängig davon übereinstimmen, welche Syntax verwendet wird (zum Beispiel ist `#F00` gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stileigenschaft ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp ergibt true, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft anders als der `initial-value` für diese Eigenschaft ist. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` irgendein Wert ist, der nicht gleichwertig dem Wert `#f00` (wie `red`) entspricht. Wenn er wahr ist, wird die {{htmlelement("output")}} eine 5px gestrichelte Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe {{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers einer äquivalenten Farbe zum angegebenen Wert entspricht, selbst wenn dieser Wert mit dem `initial-value` identisch ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert zu `red`, `blue` oder `green` äquivalent ist. Wenn dies der Fall ist, erhält {{cssxref("color")}} den aktuellen Wert von `--theme` (im Fall von `blue` und `green`, überschreiben des im ersten Stilabfrage gesetzten grauen).

Die zweite Stilabfrage besagt, dass wenn `--theme` äquivalent zu `red` ist, der `<output>`-Inhalt ebenfalls fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden feststellen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen - da es mit `style(--theme: red)` übereinstimmt - während die Umrandung entfernt wird, weil `style(--theme)` false zurückgibt, wenn der Elementwert für `--theme` gleich dem Anfangswert für `--theme` ist, der durch die `@property`-At-Regel definiert ist. Jeder nicht-rote gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., lässt die erste Stilabfrage true zurückgeben; es sind Werte, die sich vom Anfangswert unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültigen `<color>`-Werten zugewiesen werden. Gültige Werte für die {{cssxref("color")}} Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keiner dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert beibehalten wird und `style(--theme)` false und `style(--theme: red)` true zurückgibt.

> [!NOTE]
> Beim Deklarieren von benutzerdefinierten Eigenschaften sollten Sie `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor verwenden, damit der Browser die berechneten Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die in mehreren verschachtelten Containerabfragen definierten Stile werden angewendet, wenn alle umschließenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Grenze haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### CSS-Deklarationen und -Eigenschaften der Stilabfrage

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotierung reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn dies unterstützt wird, macht dieses einfache Beispiel die Hintergrundfarbe von {{htmlelement("b")}} und {{htmlelement("strong")}} Elementen gelb, wenn der Elterncontainer bereits `bold` ist.

Das Matching wird gegenüber dem berechneten Wert des Elterncontainers durchgeführt; wenn der {{cssxref("font-weight")}} des Elternteils auf `bold` gesetzt ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei den benutzerdefinierten Eigenschaften der Containerstil-Abfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stileigenschaften, die eine Kurzformeigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformeigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr sein, wenn alle 12 Langformeigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Containerstil-Abfrage auf false auflösen.

Wenden Sie nicht die Stile, die Sie in der Stilabfrage auf das Element abfragen, auf das Element an, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls true.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element true zurückgeben, das einen `font-weight`-Wert hat, der sich vom Anfangswert unterscheidet. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal einen anderen `font-weight`-Wert als `normal`, der vom Benutzeragenten gesetzt ist. Solange der `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, gibt die Stilabfrage true zurück.

Diese Funktionen werden in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzform
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
