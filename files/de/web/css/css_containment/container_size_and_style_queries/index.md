---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 5a57c5ce4989d8fc0708e302a20b516a7a99de50
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen ähneln [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Atregel ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anzuwenden. Ähnlich wie die {{cssxref("@container")}}-Atregel ermöglicht sie das Anwenden von Stilen auf Elemente, basierend auf der Größe eines beinhaltenden Elements oder anderen Stileigenschaften, anstatt des Viewports. Container-Abfragen haben die gleichen Syntaxregeln und logische Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt zwei Arten von Container-Abfragen: _Containergrößen-Abfragen_ und _Containerstil-Abfragen_:

- **Containergrößen-Abfragen**

  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente, basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines beinhaltenden Elements, inklusive der Ausrichtung und des [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio). Die beinhaltenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stileigenschaften eines beinhaltenden Elements. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit werden von Stilabfragen nur CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage wahr oder falsch zurück, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des beinhaltenden Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, ermöglichen sie, Stile auf Nachfahren eines Elements basierend auf irgendeiner Eigenschaft, Erklärung oder einem berechneten Wert anzuwenden — beispielsweise, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

In diesem Leitfaden lernen wir die Grundlagen der Container-Abfragen, indem wir betrachten:

1. [Größen-Abfragen von Containern](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Umfang zu begrenzen, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Atregel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden nach einer Größenbedingung gefiltert. Die zugehörigen Stile werden auf eingeschlossene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element wahr ist. Ein Element enthält den nächstgelegenen Vorfahren mit Enthaltbarkeit als Größencontainer.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Enthaltbarkeit](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM jederzeit abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Darüber hinaus könnte eine Stiländerung eines Nachkommens, die die Größe des Containerelements ändert, zu einer Endlosschleife führen.

In einer Containergrößen-Abfrage umfasst `<container-condition>` einen oder mehrere `<size-query>`-Abfragen. Jede Größenabfrage enthält einen Größeneigenschaftsnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, beschränken sich auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation`. Die boolesche Syntax und Logik zum Kombinieren eines oder mehrerer `<size-query>`-Abfragen ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmal-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennung von Containern

Ein `<container-condition>` kann einen optionalen groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen im `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-`<container-name>`-Werten, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungssensitive {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen das Anvisieren jedes Container-Vorfahren des Elements. Ohne einen Container-Namen entspricht die Abfrage nur dem nächstgelegenen Container-Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Atregeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzusprechen. Die Stile innerhalb der benannten `@container`-Atregeln werden nur auf übereinstimmende Elemente innerhalb von Containern angewendet, die diese Namen gesetzt haben und die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile im Containerabfrageblock auf die Nachfahren aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer ist als ihre Höhe. Beachten Sie, dass andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, ebenfalls diese Stile auf die Nachfahren ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet (oder beides, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, hindert das Element jedoch nicht daran, mit unbenannten Abfragen übereinzustimmen.

Mit Containerabfragen sind wir nicht nur auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die Boolesche Syntax und Logik, die verwendet wird, um Stileigenschaften in eine Stilabfrage zu kombinieren, ist die gleiche wie in [CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>`, anstatt von `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS Enthaltspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige Stilmerkmal, das derzeit unterstützt wird, sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wertet die Stilabfrage zu true aus, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird es zu falsch aufgelöst.
Ein Stilmerkmal ohne Wert wertet zu true aus, wenn der berechnete Wert sich vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft unterscheidet.

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

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir irgendwann in der Lage sein, reguläre CSS-Deklarationen abzufragen, wie `max-width: 100vw`. Die Abfrage `@container (max-width: 100vw)` ist eine Größenabfrage; Die Enthaltsamkeit mit {{cssxref("container-type")}}, oder der {{cssxref("container")}}-Kurzform, wird benötigt. Diese Abfrage gibt wahr zurück, wenn der Container 100vw oder weniger beträgt. Dies unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn sie unterstützt wird, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Solange Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften noch nicht unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzubeziehen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig zu beachten sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist keine Enthaltsamkeit nötig.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Größenmerkmale in Ihrer Abfrage enthalten sind, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verbundenen Abfragenamen; es hindert das Element jedoch nicht daran, ein Stilcontainer zu sein.
- Zum Zeitpunkt der Erstellung dieses Textes (Februar 2024) funktionieren Containerstil-Abfragen nur mit CSS-Benutzerdefinierten Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns tiefer eintauchen und einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genau wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Funktionsabfrage einfügen würden: entweder mit oder ohne Wert.

#### Unabhängige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>` Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage falsch zurück, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property`-Atregel, falls vorhanden. Die Stilabfrage gibt wahr zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert besitzen, der sich vom `initial-value` unterscheidet oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert besitzen, falls die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine einfache CSS-Benutzerdefinierte Eigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde, und mit allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses [DOM](/de/docs/Glossary/DOM)-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-Atregel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur wahr für Elemente zurück, wenn der berechnete Wert des Elements für `--theme-color` sich vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft gesetzt wurde.

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

In diesem Beispiel entspricht das `:root` Element nicht der Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der Wert für den `initial-value`. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die den geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft umfasst, muss der berechnete Wert des Elements für diese Eigenschaft eine exakte Übereinstimmung sein, wobei gleichwertige Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Atregel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenanruf) definiert wurde, die einen `syntax`-Deskriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstil-Abfrage entspricht jedem Element, das `blue` als {{cssxref("computed_value")}} der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall entsprechen andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, wie zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, würde er für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfelds nur aktualisiert, wenn das `other`-Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Atregel, um eine CSS-Variable `--theme` zu definieren, um einen {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu sein und setzen den `initial-value` auf `#00F`, um sicherzustellen, dass gleichwertige Farben unabhängig von ihrer Syntax übereinstimmen (zum Beispiel ist `#F00` gleichbedeutend mit `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmal-Abfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert sich vom `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` jeden Wert außer einem der jedem Syntax-Äquivalent von `#f00` (zum Beispiel `red`) entspricht. Wenn wahr, wird das {{htmlelement("output")}} eine 5 Pixel gesprenkelte Umrandung haben. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Der Standard-Text-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfrage umfassen Werte für die benutzerdefinierte Eigenschaft. Diese werden übereinstimmen, wenn der `--theme`-Wert des Containers einer äquivalenten Farbe zum angegebenen Wert entspricht, auch wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn er das ist, wird die {{cssxref("color")}} die aktuelle Farbe von `--theme` sein (im Fall von `blue` und `green`, wodurch der in der ersten Stilabfrage gesetzte Grauton überschrieben wird).

Die zweite Stilabfrage besagt, dass, wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` auch fett wird. Wir haben dies getan, um besser zu veranschaulichen, dass die Containerabfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es `style(--theme: red)` entspricht — während die Umrandung entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Wert des Elements für `--theme` derselbe ist wie der Anfangswert für `--theme`, wie durch die `@property`-Atregel definiert. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., lässt die erste Stilabfrage wahr werden; es sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Für die {{cssxref("color")}}-Eigenschaft gültige Werte, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines von beiden sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt wird und unverändert bleibt, wobei `style(--theme)` falsch zurückgibt und `style(--theme: red)` wahr zurückgibt.

> [!NOTE]
> Beim Deklarieren von benutzerdefinierten Eigenschaften, sollten Sie `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor in Betracht ziehen, damit der Browser berechnete Werte richtig vergleichen kann.

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

In diesem Fall wird das `<output>` eine 5px gesprenkelte Umrandung haben, wenn es in einem Container verschachtelt ist, bei dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme` Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elemente gelb machen, wenn das Elternelement bereits `bold` ist.

Das Matching wird am berechneten Wert des Elterncontainers durchgeführt; wenn das berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Wie bei benutzerdefinierten Eigenschaftscontainerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder geerbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jedes ihrer Langform-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` zu wahr aufgelöst, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform bilden, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und bewirken, dass die Containerstil-Abfrage zu falsch auswertet.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt falsch zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und wahr, andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt wahr für jedes Element zurück, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet. Benutzeragenten-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "Überschriften")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls oft ein anderes `font-weight` als `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, gibt die Stilabfrage wahr zurück.

Diese Funktionen werden noch von keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mediaqueries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verständnis des `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
