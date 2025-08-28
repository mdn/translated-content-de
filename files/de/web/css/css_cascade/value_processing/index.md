---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 07cb37116a4e4602207bccc3dc53375f02411a46
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaftswert zu, der auf dieses Element zutrifft. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung, basierend auf Stylesheet-Definitionen, Vererbung, der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitenumrechnung und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzelnen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf dieses Element oder Pseudo-Element angewendet werden, wobei der einzelne angewendete Wert aus der Eigenschaftsdeklaration stammt, die im [Kaskadensortierauftrag](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) basierend auf dem [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) am höchsten eingestuft ist.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, mit mehreren Deklarationen, die dieselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzelnen Eigenschaftsnamens-Werte-Paar stammen, da von jeder Eigenschaft nur ein Wert angewendet wird, selbst wenn der Wert eine kommaseparierte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der User Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile, interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden sollte, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) definiert, wie User Agents Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) stammen. Wenn ein Selektor ein Element trifft, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung oder [Ebenen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) mit niedrigerer Priorität eine höhere {{cssxref("spezifität")}} aufweist.

Gewisse Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element existieren. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [initialen Wert](#anfangswert) für dieses Element gesetzt.

Nach der Anwendung der [Kaskaden](#kaskadieren)-Regeln und der schrittweisen Standardwertsetzung stellt der Browser sicher, dass die visuelle Präsentation mit dem verarbeiteten CSS übereinstimmt.

## Überblick über die Verarbeitung

Bevor wir auf die einzelnen Wert-Stadien eingehen, ist es wichtig, die drei Hauptphasen der Wertverarbeitung zu verstehen: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Standardwertsetzung](#standardwertsetzung).

### Filtern

**Filtern** ist der Prozess der Identifizierung aller Deklarationen, die auf jedes Element zutreffen. Eine Deklaration gilt für ein Element nur dann, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit auf dieses Dokument zutrifft
- Jede [bedingte Regel](/de/docs/Web/CSS/CSS_conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthält, derzeit wahr ist.
- Die Deklaration zu einer Stilregel gehört, deren Selektor mit dem Element übereinstimmt
- Die Deklaration syntaktisch gültig ist: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu erklärten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/CSS_syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}}- und {{cssxref("font-weight")}}-Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors), ignoriert oder "filtert" die Deklaration mit dem ungültigen Eigenschaftsnamen:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Wenn das Filtern abgeschlossen ist, hat jedes Element null oder mehr [deklarierte Werte](#declared-value) für jede CSS-Eigenschaft. Diese erklärten Werte sind der Ausgangspunkt für die Verarbeitungsebene der [Kaskadierung](#kaskadieren).

### Kaskadieren

[Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element zutreffen. Kaskade sortiert Deklarationen mithilfe des [Kaskadensortieralgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).

Zum Beispiel passen beide {{cssxref("font-size")}}-Deklarationen zu `<p class="large">CSS is fun!</p>`, aber die zweite Deklaration wird angewendet, weil sie eine höhere {{cssxref("Spezifität")}} hat. Beide Deklarationen haben den Ursprungsort des Autors, aber der zweite Selektor hat eine Spezifizität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach dem Kaskadieren bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dies ist der Wert, der im nächsten Verarbeitungsschritt verwendet wird; der [Standardwertsetzung](#standardwertsetzung).

### Standardwertsetzung

**Standardwertsetzung** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert besitzt. Dies beinhaltet das Anwenden von Standardwerten von Eigenschaften, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit setzen.
Dies beinhaltet:

- Setzen von **vererbten Werten** für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties)
- Setzen von **Anfangswerten** für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties)

Als Ergebnis der Standardwertsetzung ist garantiert, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) besitzt.

Beachten Sie, dass explizite Schlüsselwörter für die Standardsetzung ([`initial`](/de/docs/Web/CSS/initial), [`inherit`](/de/docs/Web/CSS/inherit), [`unset`](/de/docs/Web/CSS/unset), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer)) ebenfalls auf ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) festzulegen.

## Verarbeitungsphasen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben [erklärte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine spezifische Eigenschaft können diese Werte gleich oder nicht gleich sein. Zum Beispiel, wenn Ihr umfangreicher Code-Bestand das CSS `p { font-size: 1.25em; }` und Ihr HTML `<p class="large">CSS is fun!</p>` enthält, wie groß wird der Absatz sein? Der {{cssxref("font-size")}}-Wert durchläuft mehrere Stufen, um vom spezifizierten `em`-Wert zum gerenderten `px`-Wert zu gelangen.

Die Wertverarbeitungsphasen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element zutrifft. Ein Element kann null oder mehr erklärte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzer-Agent) und werden während der [Filterung](#filtern) identifiziert.

Fortsetzend mit unserem Beispiel, bei dem unser Stylesheet eine Vorkommen von `p { font-size: 1.25em; }` enthält und das Dokument, das mit diesem Stylesheet verlinkt ist, `<p class="large">CSS is fun!</p>` einschließt, könnte es andere `font-size`-Deklarationen geben, die potenziell auf denselben Absatz zutreffen. Das Benutzer-Agent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autor-Deklaration `font-size: 2em` für Elemente mit der Klasse „large“ setzt:

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

Es könnten viele andere `font-size`-Deklarationen in unseren Stylesheets sein, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu erklärten Werten. In diesem Beispiel, da unser `<p>`-Element `class="large"` hat, sind alle drei Deklarationen erklärte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der erklärte Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft und Element.

Von unseren erklärten Werten gewinnen Autorenstile gegenüber Benutzer-Agent-Stilen. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifizität gegenüber Stilen mit niedrigerer Spezifizität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, aus dem Autor-Ursprung mit der Spezifizität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine erklärten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardsetzungsprozess](#standardwertsetzung) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardsetzungsprozesses](#standardwertsetzung). Er ist für jede Eigenschaft auf jedem Element garantiert vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Gibt es _keinen_ kaskadierten Wert und ist die Eigenschaft [vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance), ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Gibt es _keinen_ kaskadierten Wert und ist die Eigenschaft _nicht_ vererbt, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von '2em' haben, wird dies zum spezifizierten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardsetzungsprozess den Wert. Zum Beispiel, wenn `color` nicht spezifiziert ist, wird `color` von dem berechneten Wert des Elternteils geerbt, da es sich um eine vererbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Der Anfangswert wird während der Standardsetzung verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur beim _Root-Element_ verwendet, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert bei _allen Elementen_ verwendet, wenn kein kaskadierter Wert existiert.

Sie können den Anfangswert explizit mit dem {{cssxref("initial")}} Schlüsselwort festlegen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax auf jeder Referenzseite zur CSS-Eigenschaft gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem vom Browser-Stylesheet angegebenen Wert verwechselt werden.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung vom Elternteil zum Kind übertragen wird. Es ist das Ergebnis der Auflösung von Dingen wie relativen Einheiten und benutzerdefinierten Eigenschaften in absolute Werte, bevor Layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Definitionstabelle der Eigenschaft in der "Berechneter Wert"-Zeile beschrieben wird.

Die Berechnung, die erforderlich ist, um einen berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie jene in `em`-Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Für einige Eigenschaften (jene, bei denen Prozentangaben relativ zu etwas sind, das möglicherweise ein Layout erfordert, um es zu bestimmen, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu Prozent-berechneten Werten. Außerdem werden zahlenlose Zahlen, die für die `line-height`-Eigenschaft angegeben sind, zu berechneten Werten, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden zu absoluten, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentsätze auf tatsächliche Pixelwerte aufgelöst).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschrift-Eigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Container-Elemente mit ihren Breiten auf `auto`, `50%` und `inherit` eingestellt haben:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("prozentuale")}} Werte sind, liefert das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längeneinheit](/de/docs/Web/CSS/length#absolute_length_units) `px`-Wert:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der Wert, der über ein Script abgerufen wird, als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft nach Anwendung aller erforderlichen Annäherungen. Es ist der letztendlich gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Quirks oder -Einschränkungen. Zum Beispiel könnte ein {{Glossary("user_agent", "User Agent")}}, der nur Ränder mit einer ganzzahligen Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis des [Kaskadieren](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Anfangswertes](#anfangswert) ermittelt.
2. Danach wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` das berechnete `display` in `block` geändert).
3. Dann wird das Layout berechnet, was zu dem [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und der Auflösung aller grundlegenden Berechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein angegebenes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Kompatibilitätsgründen mit bereits eingesetzten Scripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet Details pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in einer Eigenschaftsberechnung. CSS 2.1 führte die unterschiedliche Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite / Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz war. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size`, oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _vom Layout abhängen_ und daher einen unterschiedlichen berechneten und verwendeten Wert haben (entnommen aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- Modul [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)
