---
title: Verarbeitung von CSS-Werteigenschaften
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Wert, der auf das Element angewendet wird, einen Wert zu. Der angezeigte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Umrechnung von Einheiten und der Anzeigeumgebung. Dieser Leitfaden gibt einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem wichtige Konzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder ein Pseudo-Element angewendet wird, basiert auf einer einzelnen CSS-Wert-Deklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird basierend auf den [gewerteten Werten](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf dieses Element oder Pseudo-Element angewendet werden, wobei der einzelne angewendete Wert von der Eigenschaftsdeklaration stammt, die im [Kaskaden-Sortierordnungs](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) basierend auf dem [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) am höchsten eingestuft ist.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, wobei mehrere Deklarationen dieselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzelnen Eigenschaftsname-Wert-Paar stammen, da nur ein einzelner Wert von jeder Eigenschaft angewendet wird, selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie Inline-Stile und interne sowie externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) legt fest, welcher Wert angewendet werden soll, wenn mehrere sich widersprechende Stile auf dasselbe Element abzielen. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) stammen. Wenn ein Selektor mit einem Element übereinstimmt, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprungs ([origin](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types)) oder [Ebenen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) mit niedrigerer Priorität eine größere {{cssxref("specificity")}} hat.

Bestimmte Eigenschaften erben Werte von ihren übergeordneten Elementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) kann erfolgen, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element existieren. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des übergeordneten Elements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Nach Anwendung der [Kaskaden](#kaskadieren) Regeln und der schrittweisen Standardisierung der Werte stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Übersicht über die Verarbeitung

Bevor auf die einzelnen Wertestufen eingegangen wird, ist es wichtig, die drei Hauptphasen zu verstehen, die bei der Wertverarbeitung auftreten: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Defaulten](#defaulting).

### Filtern

**Filtern** ist der Prozess der Identifizierung aller Deklarationen, die für jedes Element gelten. Eine Deklaration gilt nur dann für ein Element, wenn:

- Die Deklaration gehört zu einem Stylesheet, das derzeit auf dieses Dokument angewendet wird
- Beliebige [bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration gehört zu einer Stilregel, deren Selektor mit dem Element übereinstimmt
- Die Deklaration syntaktisch gültig ist: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/CSS_syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}} und {{cssxref("font-weight")}} Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors), indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder „herausfiltert“:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Nach Abschluss des Filtervorgangs hat jedes Element null oder mehr [deklarierte Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierungs](#kaskadieren)-Verarbeitungsphase.

### Kaskadieren

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft bei demselben Element angewendet werden. Kaskade sortiert Deklarationen mit Hilfe des [Kaskaden-Sortierordnungs](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) Algorithmus.

Zum Beispiel passen beide {{cssxref("font-size")}} Deklarationen auf `<p class="large">CSS is fun!</p>`, aber die zweite Deklaration wird angewendet, da sie eine höhere {{cssxref("specificity")}} hat. Beide Deklarationen haben den Ursprung des Autors, aber der zweite Selektor hat eine Spezifität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach dem Kaskadieren bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dieser Wert wird in der nächsten Verarbeitungsphase verwendet; [Defaulting](#defaulting).

### Defaulting

**Defaulting** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet das Anwenden von Standardeigenschaftswerten, wenn keine CSS-Deklarationen explizit diesen Eigenschaftswert festlegen.
Dies beinhaltet:

- Festlegung von **geerbten Werten** für [geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties)
- Festlegung von **Anfangswerten** für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties)

Als Ergebnis des Defaultings ist garantiert, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Defaulting-Schlüsselwörter ([`initial`](/de/docs/Web/CSS/initial), [`inherit`](/de/docs/Web/CSS/inherit), [`unset`](/de/docs/Web/CSS/unset), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer)) ebenfalls zu ihren entsprechenden Werten aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine spezifische Eigenschaft können diese Werte gleich oder ungleich sein. Wenn zum Beispiel Ihre umfangreiche Code-Basis das CSS `p { font-size: 1.25em; }` und Ihr HTML `<p class="large">CSS is fun!</p>` beinhaltet, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}} Wert durchläuft ein paar Schritte, um vom `em` spezifizierten Wert zum gerenderten `px` Wert zu gelangen.

Die Wertverarbeitungsstufen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzeragent) und werden während der [Filter](#filtern)phase identifiziert.

Der <Weiterführend in unserem Beispiel>, in dem unser Stylesheet einen Vorkommen von `p { font-size: 1.25em; }` enthält und das Dokument, welches mit diesem Stylesheet verknüpft ist, `<p class="large">CSS is fun!</p>` enthält, können möglicherweise andere `font-size` Deklarationen auf demselben Absatz angewendet werden. Das Benutzeragent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autor-Deklaration `font-size: 2em` für Elemente mit der Klasse "large" festlegt:

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

Es mag viele andere `font-size` Deklarationen in unseren Stylesheets geben, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel haben alle drei Deklarationen als unser `<p>`-Element `class="large"` hat, deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft pro Element.

Von unseren deklarierten Werten gewinnen Autorenstile über Benutzeragentenstile. Innerhalb des gleichen Ursprungs gewinnen Stile mit höherer Spezifität über Stile mit niedrigerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em` aus dem Ursprungsdokument des Autors mit der Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Defaulting](#defaulting)-Prozess bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Defaulting](#defaulting)-Prozesses. Für jede Eigenschaft auf jedem Element ist er garantiert vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist dieser kaskadierte Wert der spezifizierte Wert.
2. Gibt es keinen kaskadierten Wert und die Eigenschaft wird [vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance), ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des übergeordneten Elements.
3. Gibt es keinen kaskadierten Wert und die Eigenschaft wird _nicht_ vererbt, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dieser zum spezifizierten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Defaulting-Prozess den Wert. Wenn zum Beispiel `color` nicht spezifiziert ist, wird `color` vom berechneten Wert des Elternteils vererbt, da es sich um eine vererbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Ein **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in der Definitionstabelle in der Spezifikation angegeben ist. Der Anfangswert wird während des Defaultings verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf dem _Wurzelelement_ verwendet, das kein übergeordnetes Element hast, wenn kein kaskadierter Wert vorhanden ist.
- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert _auf allen Elementen_ verwendet, wenn kein kaskadierter Wert vorhanden ist.

Sie können den Anfangswert explizit festsetzen, indem Sie das {{cssxref("initial")}} Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert kann im formellen Syntaxabschnitt jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der vom Stylesheet des Browsers spezifiziert ist.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist derjenige, der bei der Vererbung vom Elternteil an das Kind weitergegeben wird. Er ist das Ergebnis, nachdem relative Einheiten, benutzerdefinierte Eigenschaften und anderes zu absoluten Werten aufgelöst worden sind, aber bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet, indem:

1. Mit den speziellen Werten {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} umgegangen wird.
2. Die Berechnung durchgeführt wird, die nötig ist, um den in der "Berechneter Wert"-Zeile in der Eigenschaftendefinitionstabelle beschriebenen Wert zu erreichen.

Die Berechnung, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie z.B. `em`-Einheiten oder Prozent) in absolute Werte. Wenn beispielsweise ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (solche, bei denen Prozentwerte relativ zu etwas sind, das eine Layoutbestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten umgewandelt. Auch Einheitenlose Zahlen, die bei der Eigenschaft `line-height` angegeben sind, werden zum berechneten Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden zu absoluten Werten, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, der nach allen Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentwerte, die in tatsächliche Pixelwerte aufgelöst wurden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweisen (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixel-Wert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentangaben oder Schlüsselwortwerten eingestellt wurde.

Wenn wir drei Container-Elemente mit ihrer Breite auf `auto`, `50%` und `inherit` setzen:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/length#absolute_length_units) `px` zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe zu ändern und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über Skripte abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Näherungen angewendet wurden. Er ist der endgültige gerenderte Wert, wie er vom Browser implementiert wurde, einschließlich Anpassungen für Rendering-Eigenheiten oder -Einschränkungen. Zum Beispiel könnte ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Ränder mit ganzer Pixelbreite rendern kann, die Dicke des Randes auf die nächstgelegene ganze Zahl runden.

Die Berechnung beinhaltet diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis des [Kaskadierungs](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder durch die Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Dann wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` das berechnete `display` zu `block` geändert).
3. Anschließend wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß der lokalen Umgebungseinschränkungen transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Auflösung grundlegender Berechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller CSS-Eigenschaften enthält, die auf ein spezifiziertes Element angewendet wurden. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Evolution von CSS entwickelte sich auch das Konzept des „berechneten Werts“, aber die Werte, die von `getComputedStyle()` zurückgegeben wurden, mussten gleich bleiben, um die Rückwärtskompatibilität mit bereitgestellten Skripten zu gewährleisten. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige legacy Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}), ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) liefert detailspezifische Details pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in einer Eigenschaftsberechnung. CSS 2.1 führte die eindeutige Definition des „verwendeten Werts“ ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen Computed-Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste umfasst die CSS 2.1-Eigenschaften, die _vom Layout_ abhängen, und daher einen anderen berechneten Wert und verwendeten Wert haben (entnommen von [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
