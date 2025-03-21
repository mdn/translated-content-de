---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

[Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die sich innerhalb eines bestimmten Containers befinden, basierend auf den Merkmalen dieses Containers. Die Abfrage gibt true oder false zurück, je nachdem, ob die Abfragebedingung für den Container wahr ist.

Containerabfragen sind ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht das Anwenden von Stilen auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen. Ähnlich ermöglicht die {{cssxref("@container")}}-At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Stilmerkmalen eines enthaltenen Elements, anstatt des Viewports. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**

  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Containerstilabfragen**

  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stilmerkmalen eines enthaltenen Elements. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit wird von Stilabfragen nur das Stilmerkmal der CSS [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage true oder false zurück, je nachdem, welcher berechnete Wert für die benutzerdefinierten Eigenschaften des enthaltenen Elements vorliegt. Wenn Containerstilabfragen vollständig unterstützt werden, können Sie Stile basierend auf jedem Eigenschaft, jeder Deklaration oder jedem berechneten Wert auf die Nachkommen eines Elements anwenden - zum Beispiel, ob der Container `display: inline flex` ist oder eine nicht transparente Hintergrundfarbe hat.

- **[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scroll-Zustandsabfragen ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scroll-Zustandsbedingungen anzuwenden, z. B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einem Scroll-Snap-Container befestigt ist. Die enthaltenen Elemente müssen explizit als _Scroll-Zustandsabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen Sie die Grundlagen von Containerabfragen durch folgende Punkte:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Umfang einzuschränken, und
3. die Verwendung der `style()`-Funktionalnotation innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustandsabfragen werden in [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) thematisiert.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstliegende Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM jederzeit abzufragen, würde die Leistung und Benutzererfahrung beeinträchtigen. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Absteiger-Stil die Größe des Containerelements ändert.

In einer Containergrößenabfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage umfasst einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die ein oder mehrere `<size-query>`s kombiniert, ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die in unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann optional einen Groß-/Kleinschreibung berücksichtigenden {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente bewertet, denen dieser Name in der `container-name`-Eigenschaft zugewiesen ist.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind Groß-/Kleinschreibung berücksichtigende {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen das Anzielen eines beliebigen Container-Vorfahren des Elements. Ohne einen Containernamen stimmt die Abfrage nur mit dem nächstliegenden Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzusprechen. Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen datierten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer als ihre Höhe ist, angewendet. Beachten Sie, dass andere Elemente mit `container-name: card` darauf angewendet, die mit der Größenabfrage übereinstimmen, ebenfalls diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements bewertet, wie in einem oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale zu einer Stilabfrage zu kombinieren, ist dieselbe wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied besteht im Funktionsnamen — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr bewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls wird es als false bewertet.
Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft können wir Stilabfragen wie folgt schreiben:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 100vw` abfragen können. Das Abfragen von `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}} oder die {{cssxref("container")}}-Kurzform wird benötigt. Diese Abfrage wird wahr, wenn der Container 100vw oder weniger ist. Das unterscheidet sich vom Abfragen von `@container style(max-width: 100vw)`, das eine Stilabfrage ist; wenn es unterstützt wird, gibt diese Abfrage true zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir auf das Einschließen nur benutzerdefinierter Eigenschaften als `style()`-Parameter, mit oder ohne Wert, beschränkt:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Punkte zu beachten, die bereits erwähnt wurden, aber wichtig zu erinnern sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Absteigerstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einschließen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container angesehen wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstilabfragen nur mit CSS-Benutzereigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns eintauchen und die verschiedenen `<style-feature>`-Arten untersuchen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind in einem `<style-query>` enthalten, genau wie Sie eine reguläre CSS-Eigenschaft in einer Feature-Abfrage einschließen würden: entweder mit oder ohne Wert.

#### Standalone-Abfragen für benutzerdefinierte Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage false zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-At-Regel, falls vorhanden. Die Stilabfrage gibt true zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der vom `initial-value` abweicht, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft von beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Unregistrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen durch Zuweisung eines CSS-Benutzereigenschaftswerts eingeführt werden, geben wertlose Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die Eigenschaft `--theme-color` deklariert wurde und all ihren Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder per JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur true für Elemente zurück, wenn der berechnete Wert der Eigenschaft `--theme-color` für das Element sich vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root`-Element nicht mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`-Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die vom Anfangswert abweichen, in diesem Fall das {{htmlelement("main")}}-Element und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert der Eigenschaft des Elements eine genaue Übereinstimmung sein, wobei äquivalente Werte nur dann übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) festgelegt wurde, die einen `syntax`-Descriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann übereinstimmen, wenn die Eigenschaft `--accent-color` als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall würde, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt würde, er true für `@container style(--accent-color: blue)` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsschaltflächen. Die vierte Option enthält ein Text-{{htmlelement("input")}} zur Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variable `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, immer dann, wenn eine Optionsschaltfläche ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) der `other`-Optionsschaltfläche nur dann aktualisiert, wenn die `other`-Optionsschaltfläche aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` zu definieren, die einen {{cssxref("color_value", "&lt;color&gt;")}}-Wert sein soll, und setzen den `initial-value` auf `#00F`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmen (zum Beispiel `#F00` entspricht `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stil-Feature-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Art von Abfrage gibt true zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft sich vom `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird sie true sein, wenn der Wert von `--theme` ein anderer Wert als ein äquivalenter Wert zu `#f00` (wie `red`) ist. Wenn true, wird das {{htmlelement("output")}} einen 5px gepunkteten Umriss haben. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers äquivalent zur dem aufgelisteten Wert ist, auch wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage trifft auf Elemente zu, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Fall von `blue` und `green`, was das in der ersten Stilabfrage gesetzte Grau überschreibt).

Die zweite Stilabfrage besagt, dass wenn `--theme` äquivalent zu `red` ist, die Inhalte des `<output>`-Elements ebenfalls fett gedruckt werden. Dies haben wir getan, um besser zu veranschaulichen, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es `style(--theme: red)` entspricht — während sie den Umriss entfernen, weil `style(--theme)` false zurückgibt, wenn der Elementwert für `--theme` derselbe wie der Anfangswert für `--theme`, der durch die `@property`-At-Regel definiert ist, ist. Jeder andere nicht-rote gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., führt dazu, dass die erste Stilabfrage wahr zurückgibt; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine gültigen `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `unsinn` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: unsinn`. Keiner dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der initiale Wert vererbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, ziehen Sie in Erwägung, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor zu verwenden, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall hat das `<output>` einen 5px gepunkteten Rand, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### CSS-Deklarationen und Eigenschaften in Stilabfragen

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertepaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn dies unterstützt wird, wird dieses einfache Beispiel den Hintergrund von {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elementen gelb machen, wenn der übergeordnete Container bereits `bold` ist.

Der Abgleich erfolgt anhand des berechneten Werts des übergeordneten Containers; wenn das Elternteil berechnetes {{cssxref("font-weight")}} von `bold` (nicht `bolder` oder `900`) hat, gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschaftsabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, werden nur dann wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstilabfrage falsch ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies möglicherweise eine Endlosschleife verursachen könnte.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der initiale Wert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls true.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr, das einen Wert für `font-weight` hat, der sich vom Anfangswert unterscheidet. Benutzeragenten-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. Auch {{htmlelement("optgroup")}} hat manchmal ein von `normal` abweichendes `font-weight`, das vom Benutzeragenten gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, gibt die Stilabfrage true zurück.

Diese Funktionen werden in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
