---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaft, die auf dieses Element anwendbar ist, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Kaskade-Prinzip](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Umrechnungen von Einheiten und der Darstellungsumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem wichtige Konzepte wie angegebene, berechnete, verwendete und tatsächliche Werte erforscht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzigen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der Wert, der angewendet wird, wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf dieses Element oder Pseudo-Element anwendbar sind, wobei der einzig angewandte Wert aus der Eigenschaftsdeklaration stammt, die im [Kaskadiersortierung](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) basierend auf dem [Kaskade-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) am höchsten eingestuft wird.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, mit mehreren Deklarationen, die die gleichen oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Eigenschaftsnamen-Wert-Paar stammen, da von jeder Eigenschaft nur ein einzelner Wert angewendet wird, selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie Inline-Stile und interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet werden sollte, wenn mehrere konfliktierende Stile dasselbe Element anvisieren. Der [Kaskaden-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) kombinieren. Wenn ein Selektor mit einem Element übereinstimmt, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem geringeren Prioritäts-[Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) eine größere {{cssxref("Specificity")}} aufweist.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Nach Anwendung der [kaskadierenden](#kaskadierung) Regeln und Standardwertsetzung stellt der Browser sicher, dass die visuelle Präsentation den verarbeiteten CSS entspricht.

## Verarbeitungsübersicht

Bevor wir in die einzelnen Wertstufen eintauchen, ist es wichtig, die drei Hauptphasen zu verstehen, die bei der Wertverarbeitung auftreten: [Filtern](#filtern), [Kaskadieren](#kaskadierung) und [Standardwertsetzung](#standardwertsetzung).

### Filtern

**Filtern** ist der Prozess des Identifizierens aller Deklarationen, die für jedes Element gelten. Eine Deklaration gilt für ein Element nur, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit auf dieses Dokument anwendbar ist
- Alle [Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration gehört zu einer Stilregel, dessen Selektor mit dem Element übereinstimmt
- Die Deklaration syntaktisch gültig ist: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}}- und {{cssxref("font-weight")}}-Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors), indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder "herausfiltert":

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```


Wenn das Filtern abgeschlossen ist, hat jedes Element null oder mehr [deklarierte Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierungs](#kaskadierung)-Verarbeitungsstufe.

### Kaskadierung

[Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft desselben Elements angewendet werden. Die Kaskade sortiert Deklarationen mithilfe des [Kaskadesortierungsalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Zum Beispiel passen beide {{cssxref("font-size")}}-Deklarationen zu `<p class="large">CSS macht Spaß!</p>`, aber die zweite Deklaration wird angewendet, weil sie eine höhere {{cssxref("specificity")}} hat. Beide Deklarationen haben den Autorursprung, aber der zweite Selektor hat eine Spezifität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```


Nach dem Kaskadieren bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft jedes Elements. Dies ist der Wert, der in der nächsten Verarbeitungsstufe verwendet wird: [Standardwertsetzung](#standardwertsetzung).

### Standardwertsetzung

**Standardwertsetzung** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet die Anwendung von Standardwerteigenschaften, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit festlegen.
Dies umfasst:

- Festlegung von **geerbten Werten** für [geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Festlegung von **Anfangswerten** für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

Infolge der Standardwertsetzung hat jede Eigenschaft garantiert einen [spezifizierten Wert](#spezifizierter_wert).

Beachten Sie, dass explizite Standardwert-Schlüsselwörter ([`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`unset`](/de/docs/Web/CSS/Reference/Values/unset), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)) auch zu ihren entsprechenden Werten aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu ermitteln.

## Verarbeitungsstufen

Alle Elemente, die Teil des flachen Elementbaums des Dokuments sind, haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihre umfangreiche Codebasis das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS macht Spaß!</p>` beinhaltet, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom spezifizierten `em`-Wert zum gerenderten `px`-Wert zu gelangen.

Die Wertverarbeitungsstufen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzer-Agent) und werden während der [Filterung](#filtern)-Stufe identifiziert.

In unserem Beispiel, in dem unser Stylesheet eine Vorkommen von `p { font-size: 1.25em; }` enthält und das Dokument, das mit diesem Stylesheet verlinkt ist, `<p class="large">CSS macht Spaß!</p>` einschließt, könnte es andere `font-size`-Deklarationen geben, die potenziell auf denselben Absatz anwendbar sind. Das Benutzer-Agent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autorendeklaration `font-size: 2em` für Elemente mit der Klasse "large" setzt:

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


Es könnte viele andere `font-size`-Deklarationen in unseren Stylesheets geben, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>`-Element die `class="large"` hat, sind alle drei Deklarationen deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadierung) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft pro Element.

Von unseren deklarierten Werten gewinnen Autorstile über Benutzeragentenstile. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität über Stile mit geringerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, aus dem Autorursprung mit der Spezifität `0-1-1`:

```css
font-size: 2em;
```


Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardwert](#standardwertsetzung)-Prozess bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardwert](#standardwertsetzung)-Prozesses. Er ist garantiert für jede Eigenschaft auf jedem Element vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [vererbt](/de/docs/Web/CSS/Guides/Cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dies der spezifizierte Wert:

```css
font-size: 2em;
```


Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardwertprozess den Wert. Zum Beispiel, wenn `color` nicht spezifiziert ist, wird `color` vom berechneten Wert des übergeordneten Elements geerbt, da es sich um eine geerbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `Anfangs`wert von `0` verwendet, da `margin` keine [geerbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Der Anfangswert wird während der Standardwertsetzung verwendet, wenn:

- Für [geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf das _Wurzelelement_ angewendet, das kein übergeordnetes Element hat, wenn kein kaskadierter Wert existiert.
- Für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, wenn kein kaskadierter Wert existiert.

Sie können den Anfangswert explizit mit dem {{cssxref("initial")}}-Schlüsselwort festlegen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt für formale Syntax auf jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers spezifiziert wird.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der beim Vererben von Eltern an Kinder übertragen wird. Er ist das Ergebnis nach der Auflösung von Dingen wie relativen Einheiten und benutzerdefinierten Eigenschaften in absolute Werte, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Die Berechnung, die durchgeführt werden muss, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie die in `em`-Einheiten oder Prozentwerten) in absolute Werte. Wenn ein Element zum Beispiel spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentwerte relativ zu etwas sind, das möglicherweise ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte in prozentual berechnete Werte umgewandelt. Darüber hinaus werden einheitslose Zahlen, die in der Eigenschaft `line-height` spezifiziert sind, der berechnete Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentsätze, die auf tatsächliche Pixelwerte aufgelöst wurden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) werden in Pixeln angegeben. Die verwendeten Werte von Zusammenfassungs-Eigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Eigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozent- oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente mit ihrer Breite auf `auto`, `50%` und `inherit` eingestellt haben:

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


Während die drei spezifizierten Werte `auto`, `50%` und `inherit` Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längen](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units)-`px`-Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird der [tatsächliche Wert](#tatsächlicher_wert) genannt, während der Wert, der über Skripte abgerufen wird, der [aufgelöste Wert](#aufgelöster_wert) genannt wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Darstellungsbesonderheiten oder -einschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Rahmen mit einer ganzzahligen Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis des [Kaskadieren](/de/docs/Web/CSS/Guides/Cascade/Introduction), der [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) oder unter Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechnetes `display` zu `block` geändert).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Auflösung von ggf. enthaltenen einfachen Berechnungen. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein angegebenes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete](#berechneter_wert) oder der [verwendete](#verwendeter_wert) Wert, abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Während sich CSS weiterentwickelte, entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet Details pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die spezifische Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozent ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und die verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _wohl_ vom Layout abhängen und daher einen unterschiedlichen berechneten und verwendeten Wert haben (aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36) entnommen):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer), und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
