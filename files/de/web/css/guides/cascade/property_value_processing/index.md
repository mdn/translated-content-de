---
title: CSS-Eigenschaftswert-Verarbeitung
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaftswert, der auf dieses Element zutrifft, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung, die auf Stylesheet-Definitionen, Vererbung, dem [Kaskade-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Einheitentransformation und der Anzeigeumgebung basiert. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte erkundet werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzigen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf das Element oder Pseudo-Element zutreffen. Der einzige angewendete Wert stammt aus der Eigenschaftsdeklaration, die in der [Kaskaden-Sortierreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) nach dem [Kaskade-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) den höchsten Rang einnimmt.

Wenn es mehrere [deklarierten Werte](#deklarierter_wert) gibt, mit mehreren Deklarationen, die denselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Eigenschafts-Namen-Wert-Paar stammen, da nur ein einziger Wert aus jeder Eigenschaft angewendet wird, selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der User-Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile, interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der [Kaskade-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) definiert, wie User-Agents Eigenschaftswerte aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) kombinieren. Wenn ein Selektor ein Element trifft, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft von der [Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Präzedenz angewendet, selbst wenn ein Selektor aus einer niedrigeren Präzedenz-[Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) eine größere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine spezifische Eigenschaft auf einem Element vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [initialen Wert](#initialwert) für dieses Element gesetzt.

Nach der Anwendung der [Kaskaden](#kaskadierung)-Regeln und der Standardwerte Schritt für Schritt stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS entspricht.

## Verarbeitungsüberblick

Bevor wir in die einzelnen Wertstufen eintauchen, ist es wichtig, die drei Hauptphasen zu verstehen, die bei der Wertverarbeitung auftreten: [Filtern](#filtern), [Kaskadieren](#kaskadierung) und [Standardisieren](#standardisieren).

### Filtern

**Filtern** ist der Prozess des Identifizierens aller Deklarationen, die auf jedes Element zutreffen. Eine Deklaration gilt nur für ein Element, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit für dieses Dokument gilt.
- Alle [bedingten Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration zu einer Stilregel gehört, deren Selektor das Element trifft.
- Die Deklaration syntaktisch gültig ist: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für die Eigenschaft.

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}}- und {{cssxref("font-weight")}}-Deklarationen verarbeitet. Der [CSS-Parser filtert die Fehler heraus](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors), ignoriert oder „filtert“ die Deklaration mit dem ungültigen Eigenschaftsnamen aus:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Nach Abschluss des Filtervorgangs hat jedes Element null oder mehr [deklarierten Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierung](#kaskadierung)-Verarbeitungsphase.

### Kaskadierung

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element zutreffen. Die Kaskade sortiert Deklarationen mit Hilfe des [Kaskaden-Sortierordnungs-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Zum Beispiel treffen beide {{cssxref("font-size")}}-Deklarationen auf `<p class="large">CSS is fun!</p>` zu, aber die zweite Deklaration wird angewendet, da sie eine höhere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat. Beide Deklarationen haben Autor-Herkunft, aber der zweite Selektor hat eine Spezifität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach der Kaskadierung bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dies ist der Wert, der in der nächsten Verarbeitungsstufe verwendet wird; das [Standardisieren](#standardisieren).

### Standardisieren

**Standardisieren** sorgt dafür, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet die Anwendung von Standard-Eigenschaftswerten, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit setzen.
Dies beinhaltet:

- Einstellen von **geerbten Werten** für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Einstellen von **Initialwerten** für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

Als Ergebnis des Standardisierens wird garantiert, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Standardisierungsschlüsselwörter ({{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}) ebenfalls in ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsphasen

Alle Elemente, die Teil des flachen Elementbaums des Dokuments sind, haben [deklarierten](#deklarierter_wert), [kaskadierten](#kaskadierter_wert), [spezifizierten](#spezifizierter_wert), [berechneten](#berechneter_wert), [verwendeten](#verwendeter_wert) und [tatsächlichen](#tatsächlicher_wert) Werte. Für eine spezifische Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel: Wenn Ihr großer Code-Bestand das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS is fun!</p>` enthält, wie groß wird der Absatz sein? Der {{cssxref("font-size")}}-Wert durchläuft einige Phasen, um vom angegebenen `em`-Wert zum gerenderten `px`-Wert zu gelangen.

Die Wertverarbeitungsstufen sind [Deklarierter Wert](#deklarierter_wert), [Kaskadierter Wert](#kaskadierter_wert), [Spezifizierter Wert](#spezifizierter_wert), [Berechneter Wert](#berechneter_wert), [Verwendeter Wert](#verwendeter_wert) und [Tatsächlicher Wert](#tatsächlicher_wert). Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element zutrifft. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder User-Agent) und werden während der [Filterung](#filtern) identifiziert.

Bleiben wir bei unserem Beispiel, in dem unser Stylesheet eine Instanz von `p { font-size: 1.25em; }` enthält und das Dokument, das mit diesem Stylesheet verlinkt ist, `<p class="large">CSS is fun!</p>` umfasst, können andere `font-size`-Deklarationen potenziell auf denselben Absatz zutreffen. Das User-Agent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autor-Deklaration `font-size: 2em` für Elemente mit der Klasse „large“ festlegt:

```css
/* User agent styles */
p {
  font-size: 1em;
}

/* author styles */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

Es könnte viele andere `font-size`-Deklarationen in unseren Stylesheets geben, aber nur Deklarationen, deren Selektoren das Element treffen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>`-Element die Klasse `large` hat, sind alle drei Deklarationen deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadierung) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft und Element.

Von unseren deklarierten Werten gewinnen Autorenstile gegenüber User-Agent-Stilen. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität gegenüber Stilen mit niedrigerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, aus dem Autor-Ursprung mit der Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardisierungsprozess](#standardisieren) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardisierungsprozesses](#standardisieren). Für jede Eigenschaft auf jedem Element ist garantiert, dass es existiert. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [vererbt](/de/docs/Web/CSS/Guides/Cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [Initialwert](#initialwert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dies der spezifizierte Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardisierungsprozess den Wert. Wenn beispielsweise `color` nicht angegeben ist, wird `color` vom berechneten Wert des Elternelements geerbt, da es eine vererbte Eigenschaft ist. Wenn `margin` nicht angegeben ist, wird der `initial`-Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Initialwert

Der **Initialwert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Der Initialwert wird während des Standardisierens verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Initialwert nur auf dem _Wurzelelement_ verwendet, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, wenn kein kaskadierter Wert existiert.

Sie können den Initialwert explizit festlegen, indem Sie das {{cssxref("initial")}}-Schlüsselwort verwenden.

> [!NOTE]
> Der Initialwert kann im Abschnitt zur formellen Syntax auf jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Initialwert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Initialwert sollte nicht mit dem Wert verwechselt werden, der vom Stylesheet des Browsers angegeben wird.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der von Eltern zu Kind während der Vererbung weitergegeben wird. Es ist das Ergebnis nach der Auflösung von Dingen wie relativen Einheiten und benutzerdefinierten Eigenschaften in absolute Werte, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet, indem:

1. Die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} behandelt werden.
2. Die Berechnung durchgeführt wird, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die zur Erreichung eines berechneten Werts einer Eigenschaft erforderlich ist, umfasst typischerweise die Umwandlung relativer Werte (wie beispielsweise die in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Wenn beispielsweise ein Element angegebene Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Allerdings werden bei einigen Eigenschaften (solche, bei denen Prozentsätze sich auf etwas beziehen, das Layout zur Bestimmung erfordern kann, wie `width`, `margin-right`, `text-indent` und `top`) prozentual spezifizierte Werte in anteilig berechnete Werte umgewandelt. Darüber hinaus wird die Einheitlose-Zahl bei der `line-height`-Eigenschaft als berechneter Wert, wie angegeben, verwendet. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentsätze in tatsächliche Pixelwerte umgewandelt).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixel. Die verwendeten Werte von Kurzeigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der angegebene Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten gesetzt wurde.

Wenn wir drei Containerelemente haben, deren Breite auf `auto`, `50%` und `inherit` gesetzt ist:

```html hidden
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

Obwohl die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("Prozent")}}werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längen](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) `px`-Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendeten Wert](#verwendeter_wert) dieser Eigenschaft, nachdem notwendige Näherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wurde, einschließlich Anpassungen für Rendering-Besonderheiten oder -Einschränkungen. Beispielsweise kann ein {{Glossary("user_agent", "User-Agent")}}, der nur Ränder mit einer ganzen Anzahl von Pixeln rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/Web/CSS/Guides/Cascade/Introduction), [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) oder unter Verwendung des [Initialwerts](#initialwert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` das berechnete `display` in `block` geändert).
3. Dann wird das Layout berechnet, was zu dem [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach der Anwendung aktiver Stylesheets und der Auflösung grundlegender Berechnungen dieser Werte. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein live [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Entwicklung von CSS entwickelte sich auch das Konzept des „berechneten Werts“, aber die von `getComputedStyle()` zurückgegebenen Werte mussten für die Rückwärtskompatibilität mit bereits vorhandenen Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige Legacy-Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet detailspezifische Angaben.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die separate Definition des „verwendeten Werts“ ein. Ein Element konnte dann die Breite/Höhe seines Elternteils explizit erben, dessen berechneter Wert ein Prozentsatz war. Für CSS-Eigenschaften, die nicht von Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _doch_ von Layout abhängen und daher einen unterschiedlichen berechneten und verwendeten Wert haben (entnommen aus den [CSS 2.1-Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}
- [CSS-Kaskadierungs- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Syntaxmodul](/de/docs/Web/CSS/Guides/Syntax)
