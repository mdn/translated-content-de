---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem spezifischen Container eingebettet sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt entweder "wahr" oder "falsch" zurück, je nachdem, ob die Abfragebedingung für den Container erfüllt ist.

Container-Abfragen sind ähnlich wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}} at-rule ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Geräteeigenschaften anzuwenden. Ähnlich dazu ermöglicht die {{cssxref("@container")}} at-rule, Stile auf Elemente anzuwenden, basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements, und nicht des Viewports. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**
  - : Größenabfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Orientierung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen ausdrücklich als _Größenabfragecontainer_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stilabfragen ermöglichen es, Stile auf Elemente basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht leere Element kann ein Stilabfragecontainer sein. Derzeit ist das einzige von Stilabfragen unterstützte Stilmerkmal CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage "wahr" oder "falsch" zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstil-Abfragen vollständig unterstützt werden, können Sie Stile auf Nachkommen eines jeden Elements basierend auf einer beliebigen Eigenschaft, Deklaration oder einem berechneten Wert anwenden — zum Beispiel, ob der Container `display: inline flex` hat oder eine nicht-transparente Hintergrundfarbe aufweist.

- **[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Zustandsabfragen ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scroll-Zustandsbedingungen anzuwenden, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container auf einen Scroll-Snap-Container eingerastet ist. Die enthaltenen Elemente müssen ausdrücklich als _Scroll-Zustandsabfragecontainer_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen der Container-Abfragen, indem wir uns Folgendes ansehen:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennen von Containern](#benennen_von_containern), um deren Gültigkeitsbereich einzuschränken, und
3. die Verwendung der `style()` Funktionsnotation innerhalb der `<container-condition>` der {{cssxref("@container")}} at-rule, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustandsabfragen werden in [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erörtert.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorfahre mit Einschluss.

Elemente werden als _Größenabfragecontainer_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfragecontainern fügt diesen [Einschluss](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungserfordernis — die Größe jedes Elements im DOM ständig abzufragen, würde die Leistung und Benutzererfahrung verschlechtern. Wenn ein Nachkommenstil die Größe des Containerelements änderte, könnte zudem eine Endlosschleife auftreten.

In einer Containergrößen-Abfrage beinhaltet die `<container-condition>` ein oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen für die Größenfunktion, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die verwendet wird, um ein oder mehrere `<size-query>`s zu kombinieren, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media) Größenmerkmaleabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}} Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die Stile, die innerhalb unserer Containerabfrage deklariert wurden, werden auf die Nachkommen aller Formulare zwischen `10em` und `30em` Breite angewendet, einschließlich.

## Benennen von Containern

Eine `<container-condition>` kann einen optionalen, auf Groß- und Kleinschreibung achtenden {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; dabei handelt es sich um auf Groß- und Kleinschreibung achtende {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen das Anvisieren eines beliebigen Containervorfahren des Elements. Ohne einen Containername stimmt die Abfrage nur mit dem nächstgelegenen Containervorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-at-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}} Kurzform verwenden, um spezifische Containerelemente anzusprechen. In den benannten `@container`-at-Regeln werden die Stile nur auf übereinstimmende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die mit der Größenabfrage übereinstimmen, diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert aber nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements evaluiert, wie sie in einer oder mehreren `style()`-Funktionsnotationen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften zu einer Stilabfrage zu kombinieren, ist dieselbe wie in [CSS-Eigenschaftsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>`, im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS-Einschlussspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr bewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls wird sie als falsch bewertet.
Eine Stileigenschaft ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

Zukünftig werden wir Stileigenschaftenabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir letztendlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; Einschluss mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, ist erforderlich. Diese Abfrage ergibt "wahr", wenn der Container 600px oder weniger beträgt. Dies unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, gibt diese Abfrage "wahr" zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stileabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzubeziehen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig zu erinnern sind:

- Alle Elemente können Stilabfragecontainer sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile keine Auswirkungen auf die berechneten Stile eines Vorfahren haben, ist Einschluss nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstil-Abfragen nur mit CSS-benutzerdefinierten Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns eintauchen und einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind innerhalb eines `<style-query>` genauso enthalten, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Eigenschaftsabfrage einfügen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen umfassen; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage "falsch" zurück, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property`-at-rule, falls es einen gibt. Die Stilabfrage gibt "wahr" zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-benutzerdefinierte Eigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer "wahr" zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde und all seinen Nachkommen. Da die CSS-Variable `--theme-color` auf {{cssxref(":root")}} deklariert wurde, ist die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS at-rule oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur "wahr" für Elemente zurück, wenn der berechnete Wert von `--theme-color` für das Element vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) abweicht, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root`-Element nicht mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`-Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert dieses Wertes des Elements eine exakte Übereinstimmung sein, wobei gleichwertige Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} at-rule (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) enthaltenen `syntax` Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall stimmen andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt ist, würde er für `@container style(--accent-color: blue)` wahr sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Radiobuttons. Die vierte Option enthält ein Texteingabefeld für das Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}}-Elements ist, wann immer ein Radiobutton ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Radiobuttons nur aktualisiert, wenn der `other`-Radiobutton ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-at-rule, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `#00F`, um sicherzustellen, dass gleichwertige Farben unabhängig davon übereinstimmen, welche Syntax verwendet wird (zum Beispiel `#F00` ist gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmalsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Abfrageart gibt "wahr" zurück, wenn der berechnete Wert der benutzerdefinierten Eigenschaft sich vom `initial-value` dieser Eigenschaft unterscheidet. In diesem Fall wird sie wahr sein, wenn der Wert von `--theme` auf einen anderen Wert außer einem syntaxäquivalenten Wert von `#f00` (wie `red`) gesetzt ist. Ist dies der Fall, wird das {{htmlelement("output")}} eine 5px gestrichelte Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese werden übereinstimmen, wenn der `--theme`-Wert des Containers eine gleichwertige Farbe wie der angegebene Wert ist, auch wenn dieser Wert der gleiche wie der `initial-value` ist. Die erste Abfrage stimmt mit den Elementen überein, deren `--theme`-Wert einem Wert von `red`, `blue` oder `green` entspricht. Ist dies der Fall, wird die {{cssxref("color")}} die aktuelle Farbe des `--theme` (im Falle von `blue` und `green` wird das im ersten Stilquery gesetzte Grau überschrieben).

Die zweite Stilabfrage gibt an, dass bei `--theme: red` der Inhalt des `<output>` ebenfalls fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise feststellen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es `style(--theme: red)` entspricht — während die Umrandung entfernt wird, weil `style(--theme)` falsch ist, wenn der Wert des Elements für `--theme` derselbe ist wie der Anfangswert für `--theme`, der durch die `@property`-at-rule definiert wurde. Jede nicht-rote sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., führt dazu, dass die erste Stilabfrage "wahr" wird; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine Wert-`<color>`-Werte sind, wie zum Beispiel `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder Unsinn eintippen, aktualisiert das JavaScript den `style` auf den {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: Unsinn`. Keines von beiden sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` "falsch" ist und `style(--theme: red)` "wahr" ergibt.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, ziehen Sie in Betracht, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor zu verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die Stile, die innerhalb mehrerer verschachtelter Containerabfragen definiert sind, werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px gestrichelte Umrandung haben, wenn es in einem Container eingebettet ist, der `--theme: purple` gesetzt hat und dieser Container in einem Container mit `--theme` Wert `red` verschachtelt ist.

### Stilabfrage CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen, einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paare, beinhalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund von {{htmlelement("b")}} und {{htmlelement("strong")}} Elementen gelb machen, wenn der Elternteil bereits `bold` ist.

Der Abgleich erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} der Eltern `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Containerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformeigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel, `@container style({{cssxref("border")}}: 2px solid red)` wird wahr, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf dieselben gleichwertigen Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Containerstilabfrage "falsch" ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt "falsch" zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und ansonsten "wahr".

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird "wahr" für jedes Element, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet. User-Agent-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente, beispielsweise. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal ein `font-weight` anderes als `normal`, das vom User-Agent gesetzt wird. Solange `font-weight` des Elements nicht den Standardwert für diesen User-Agent hat, wird die Stilabfrage "wahr" sein.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzformeigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einführung in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
