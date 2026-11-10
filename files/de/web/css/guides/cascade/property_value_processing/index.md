---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Für jedes Element in einem Dokumentbaum weist der Browser jeder CSS-Eigenschaft, die für dieses Element gilt, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine bestimmte Box ergibt sich aus einer Berechnung, die Stylesheet-Definitionen, Vererbung, die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Einheitenumrechnung und die Anzeigeumgebung berücksichtigt. Dieser Leitfaden gibt einen Überblick über die Verarbeitungsschritte, die bestimmen, wie jeder CSS-Wert letztlich gerendert wird. Dabei werden zentrale Konzepte wie deklarierte, kaskadierte, festgelegte, berechnete, verwendete und tatsächliche Werte erläutert.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudoelement angewendet wird, basiert auf einer einzelnen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Welcher Wert angewendet wird, bestimmen die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft, die für das Element oder Pseudoelement gelten. Der angewendete Wert stammt aus der Eigenschaftsdeklaration, die gemäß dem [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) in der [Sortierreihenfolge der Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) am höchsten steht.

Wenn mehrere [deklarierte Werte](#deklarierter_wert) aus mehreren Deklarationen für dasselbe Element denselben oder unterschiedliche Eigenschaftswerte angeben, muss jeder Eigenschaftswert dennoch aus einem einzigen Paar aus Eigenschaftsname und Wert stammen. Denn von jeder Eigenschaft wird nur ein Wert angewendet – auch wenn dieser Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, erfasst und verarbeitet der User Agent alle Stile aus verschiedenen Quellen, etwa Inline-Stile sowie interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet wird, wenn mehrere widersprüchliche Stile dasselbe Element betreffen. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) legt fest, wie User Agents Eigenschaftswerte aus unterschiedlichen Quellen, Gültigkeitsbereichen und/oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) zusammenführen. Wenn ein Selektor auf ein Element zutrifft, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus der [Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Priorität angewendet – selbst wenn ein Selektor aus einer [Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) oder [Ebene](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufweist.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, sofern diese nicht ausdrücklich überschrieben werden. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann stattfinden, wenn für eine bestimmte Eigenschaft eines Elements keine Stilinformationen vorliegen. Ist die Eigenschaft vererbbar, wird ihr Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Ist sie nicht vererbbar, wird ihr Wert auf den [Initialwert](#initialwert) für dieses Element gesetzt.

Nachdem der Browser die Regeln der [Kaskadierung](#kaskadierung) und die Standardwerte schrittweise angewendet hat, stellt er sicher, dass die visuelle Darstellung dem verarbeiteten CSS entspricht.

## Überblick über die Verarbeitung

Bevor die einzelnen Wertstufen näher betrachtet werden, sollten Sie die drei Hauptphasen der Wertverarbeitung kennen: [Filterung](#filterung), [Kaskadierung](#kaskadierung) und [Festlegung von Standardwerten](#festlegung_von_standardwerten).

### Filterung

Bei der **Filterung** werden alle Deklarationen ermittelt, die für ein Element gelten. Eine Deklaration gilt nur dann für ein Element, wenn:

- die Deklaration zu einem Stylesheet gehört, das derzeit für dieses Dokument gilt;
- alle [bedingten Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit erfüllt sind;
- die Deklaration zu einer Stilregel gehört, deren Selektor auf das Element zutrifft;
- die Deklaration syntaktisch gültig ist: Der Browser erkennt den Eigenschaftsnamen, und der Wert entspricht der für diese Eigenschaft erwarteten Syntax.

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder Werten werden gemäß den [CSS-Regeln zur Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die Deklarationen für {{cssxref("font-size")}} und {{cssxref("font-weight")}} verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors): Er ignoriert die Deklaration mit dem ungültigen Eigenschaftsnamen.

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Nach Abschluss der Filterung hat jedes Element für jede CSS-Eigenschaft null oder mehr [deklarierte Werte](#deklarierter_wert). Diese deklarierten Werte bilden den Ausgangspunkt für die [Kaskadierung](#kaskadierung).

### Kaskadierung

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen für dieselbe Eigenschaft desselben Elements gelten. Dazu ordnet sie die Deklarationen anhand des Algorithmus für die [Sortierreihenfolge der Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Beispielsweise treffen beide Deklarationen für {{cssxref("font-size")}} auf `<p class="large">CSS is fun!</p>` zu. Die zweite Deklaration wird jedoch angewendet, weil sie eine höhere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat. Beide Deklarationen stammen vom Autor, aber der zweite Selektor hat die Spezifität `0-1-1`, der erste dagegen `0-0-1`:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach der Kaskadierung bestimmt der Browser für jede Eigenschaft jedes Elements den [**kaskadierten Wert**](#kaskadierter_wert). Dieser Wert wird im nächsten Verarbeitungsschritt verwendet: der [Festlegung von Standardwerten](#festlegung_von_standardwerten).

### Festlegung von Standardwerten

Die **Festlegung von Standardwerten** stellt sicher, dass jede Eigenschaft jedes Elements einen Wert hat. Dazu werden Standardwerte für Eigenschaften angewendet, deren Wert nicht ausdrücklich durch CSS-Deklarationen festgelegt wurde.
Dies umfasst:

- das Festlegen **geerbter Werte** für [vererbbare Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties);
- das Festlegen von **Initialwerten** für [nicht vererbbare Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties).

Dadurch hat jede Eigenschaft garantiert einen [festgelegten Wert](#festgelegter_wert).

Beachten Sie, dass auch explizite Schlüsselwörter für Standardwerte ({{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}) in die entsprechenden Werte aufgelöst werden, um den [festgelegten Wert](#festgelegter_wert) zu bestimmen.

## Verarbeitungsschritte

Alle Elemente im abgeflachten Elementbaum des Dokuments haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [festgelegte](#festgelegter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Angenommen, Ihre umfangreiche Codebasis enthält das CSS `p { font-size: 1.25em; }` und Ihr HTML enthält `<p class="large">CSS is fun!</p>`: Wie groß wird der Absatz dargestellt? Der Wert von {{cssxref("font-size")}} durchläuft mehrere Schritte, bevor aus dem in `em` festgelegten Wert ein in `px` gerenderter Wert wird.

Die Schritte der Wertverarbeitung sind [deklarierter Wert](#deklarierter_wert), [kaskadierter Wert](#kaskadierter_wert), [festgelegter Wert](#festgelegter_wert), [berechneter Wert](#berechneter_wert), [verwendeter Wert](#verwendeter_wert) und [tatsächlicher Wert](#tatsächlicher_wert). Anhand dieser Werte wird der endgültige [gerenderte Wert](#gerenderte_werte) bestimmt.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die für ein Element gilt. Ein Element kann für jede Eigenschaft null oder mehr deklarierte Werte haben. Diese Werte stammen aus Stylesheets (des Autors, des Benutzers oder des User Agents) und werden bei der [Filterung](#filterung) ermittelt.

In unserem Beispiel enthält das Stylesheet `p { font-size: 1.25em; }`, und das Dokument, das dieses Stylesheet einbindet, enthält `<p class="large">CSS is fun!</p>`. Es könnten weitere Deklarationen für `font-size` vorhanden sein, die möglicherweise für denselben Absatz gelten. Das Stylesheet des User Agents könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Deklaration des Autors `font-size: 2em` für Elemente mit der Klasse „large“ festlegt:

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

Unsere Stylesheets können viele weitere Deklarationen für `font-size` enthalten. Zu deklarierten Werten werden jedoch nur Deklarationen, deren Selektoren auf das Element zutreffen. Da unser `<p>`-Element in diesem Beispiel `class="large"` hat, sind alle drei Deklarationen deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der sich in der [Kaskade](#kaskadierung) durchsetzt. Pro Eigenschaft und Element gibt es höchstens einen kaskadierten Wert.

Von unseren deklarierten Werten setzen sich Stile des Autors gegenüber Stilen des User Agents durch. Innerhalb derselben Herkunft setzen sich Stile mit höherer Spezifität gegenüber solchen mit niedrigerer Spezifität durch. In diesem Fall ist `font-size: 2em` der kaskadierte Wert: Er stammt vom Autor und hat die Spezifität `0-1-1`.

```css
font-size: 2em;
```

Wenn es für eine Eigenschaft keine deklarierten Werte gibt, gibt es auch keinen kaskadierten Wert. Der [festgelegte Wert](#festgelegter_wert) dieser Eigenschaft wird dann bei der [Festlegung von Standardwerten](#festlegung_von_standardwerten) bestimmt.

### Festgelegter Wert

Der **festgelegte Wert** ist das Ergebnis der [Festlegung von Standardwerten](#festlegung_von_standardwerten). Er existiert garantiert für jede Eigenschaft jedes Elements. Er wird wie folgt bestimmt:

1. Gibt es einen [kaskadierten Wert](#kaskadierter_wert), ist dieser der festgelegte Wert.
2. Gibt es _keinen_ kaskadierten Wert und ist die Eigenschaft [vererbbar](/de/docs/Web/CSS/Guides/Cascade/Inheritance), ist der [berechnete Wert](#berechneter_wert) des Elternelements der festgelegte Wert.
3. Gibt es _keinen_ kaskadierten Wert und ist die Eigenschaft _nicht_ vererbbar, ist der [Initialwert](#initialwert) der Eigenschaft der festgelegte Wert.

In unserem Beispiel haben wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em`. Dieser wird daher zum festgelegten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierten Wert wird der Wert bei der Festlegung von Standardwerten bestimmt. Wenn beispielsweise `color` nicht festgelegt ist, wird `color` vom berechneten Wert des Elternelements geerbt, da die Eigenschaft vererbbar ist. Wenn `margin` nicht festgelegt ist, wird der `initial`-Wert `0` verwendet, da `margin` keine [vererbbare Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Initialwert

Der **Initialwert** einer Eigenschaft ist der Standardwert, der in der Definitionstabelle der Eigenschaft in der Spezifikation aufgeführt ist. Der Initialwert wird bei der Festlegung von Standardwerten in folgenden Fällen verwendet:

- Bei [vererbbaren Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Initialwert nur für das _Wurzelelement_ verwendet, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Bei [nicht vererbbaren Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Initialwert für _alle Elemente_ verwendet, wenn kein kaskadierter Wert existiert.

Sie können den Initialwert ausdrücklich mit dem Schlüsselwort {{cssxref("initial")}} festlegen.

> [!NOTE]
> Den Initialwert finden Sie im Abschnitt zur formalen Syntax auf der Referenzseite der jeweiligen CSS-Eigenschaft. Beispielsweise ist [der Initialwert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Initialwert darf nicht mit dem Wert verwechselt werden, den das Stylesheet des Browsers festlegt.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der bei der Vererbung vom Eltern- an das Kindelement übertragen wird. Er ergibt sich, nachdem beispielsweise relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, aber bevor layoutspezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [festgelegten Wert](#festgelegter_wert) ermittelt, indem:

1. die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} verarbeitet werden;
2. die Berechnungen durchgeführt werden, die nötig sind, um den in der Zeile „Computed value“ der Definitionstabelle der Eigenschaft beschriebenen Wert zu erhalten.

Um den berechneten Wert einer Eigenschaft zu ermitteln, werden in der Regel relative Werte (etwa Werte in `em` oder Prozentangaben) in absolute Werte umgerechnet. Wenn für ein Element beispielsweise `font-size: 16px` und `padding-top: 2em` festgelegt sind, ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Bei einigen Eigenschaften – solchen, deren Prozentangaben sich auf eine Größe beziehen, die möglicherweise erst durch das Layout bestimmt werden kann, etwa `width`, `margin-right`, `text-indent` und `top` – bleiben als Prozentangaben festgelegte Werte jedoch auch berechnete Prozentwerte. Außerdem werden einheitenlose Zahlen, die für `line-height` festgelegt wurden, unverändert zum berechneten Wert. Relative Werte, die im berechneten Wert erhalten bleiben, werden bei der Ermittlung des [verwendeten Werts](#verwendeter_wert) zu absoluten Werten.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert einer Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt und layoutspezifische Details berücksichtigt wurden (z. B. wenn Prozentangaben in konkrete Pixelwerte aufgelöst werden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Größenangaben (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) werden in Pixeln angegeben. Die verwendeten Werte von Kurzschreibweisen (z. B. {{cssxref("background")}}) stimmen mit denen ihrer einzelnen Eigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) sowie mit {{cssxref("position")}} und {{cssxref("float")}} überein.

Der verwendete Wert für {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der festgelegte Wert der Eigenschaft eine Prozentangabe oder ein Schlüsselwort ist.

Angenommen, wir haben drei Containerelemente, deren Breite auf `auto`, `50%` beziehungsweise `inherit` gesetzt ist:

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

Obwohl die drei festgelegten Werte `auto`, `50%` und `inherit` Schlüsselwörter beziehungsweise ein {{cssxref("percentage")}}-Wert sind, liefert das Auslesen von `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) in `px`:

{{ EmbedLiveSample('used_value', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist ihr [verwendeter Wert](#verwendeter_wert), nachdem gegebenenfalls erforderliche Näherungen vorgenommen wurden. Er ist der endgültige gerenderte Wert, wie ihn der Browser umsetzt, einschließlich Anpassungen aufgrund von Besonderheiten oder Einschränkungen beim Rendering. Beispielsweise kann ein {{Glossary("user_agent", "User Agent")}}, der Rahmen nur mit einer ganzzahligen Pixelbreite rendern kann, die Rahmenstärke auf die nächste ganze Zahl runden.

Die Berechnung umfasst folgende Schritte:

1. Zunächst wird der [festgelegte Wert](#festgelegter_wert) anhand des Ergebnisses der [Kaskadierung](/de/docs/Web/CSS/Guides/Cascade/Introduction), der [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) oder mithilfe des [Initialwerts](#initialwert) bestimmt.
2. Anschließend wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation ermittelt (beispielsweise ändert sich bei einem `span` mit `position: absolute` der berechnete Wert von `display` zu `block`).
3. Danach wird das Layout berechnet. Daraus ergibt sich der [verwendete Wert](#verwendeter_wert).
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung angepasst. Daraus ergibt sich der tatsächliche Wert.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert, der sich nach der Anwendung der aktiven Stylesheets und der Auflösung grundlegender Berechnungen ergibt, die in diesen Werten enthalten sein können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein aktuelles [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller CSS-Eigenschaften enthält, die auf ein bestimmtes Element angewendet werden. Je nach Eigenschaft ist der aufgelöste Wert entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert).

Ursprünglich gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurück. Mit der Weiterentwicklung von CSS änderte sich auch das Konzept des „berechneten Werts“. Aus Gründen der Abwärtskompatibilität mit bereits eingesetzten Skripten mussten die von `getComputedStyle()` zurückgegebenen Werte jedoch gleich bleiben. Diese Werte werden als „aufgelöste Werte“ bezeichnet.

Bei den meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert. Bei einigen älteren Eigenschaften (darunter {{cssxref("width")}} und {{cssxref("height")}}) ist er jedoch der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) enthält Einzelheiten zu den jeweiligen Eigenschaften.

CSS 2.0 definierte den _berechneten Wert_ als letzten Schritt bei der Berechnung einer Eigenschaft. CSS 2.1 führte eine eigenständige Definition des „verwendeten Werts“ ein. Damit konnte ein Element die Breite oder Höhe seines Elternelements ausdrücklich erben, obwohl dessen berechneter Wert eine Prozentangabe ist. Bei CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind der berechnete und der verwendete Wert gleich. Die folgende Liste enthält die CSS-2.1-Eigenschaften, die _vom Layout abhängen_ und daher unterschiedliche berechnete und verwendete Werte haben (aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- Modul [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)
