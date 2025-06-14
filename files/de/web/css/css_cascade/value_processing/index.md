---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaftenwert, der auf dieses Element zutrifft, einen Wert zu. Der dargestellte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitenumrechnung und der Darstellungsumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, genutzte und tatsächliche Werte erkundet werden.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt aus der Deklaration mit der höchsten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzigen Eigenschaft-Wert-Paar; es wird ein einzelner Wert aus jeder Eigenschaft angewendet. Selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist, stammt diese Werteliste aus einer einzigen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie z. B. Inline-Stile und interne und externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationen für eine bestimmte Eigenschaft eines Elements vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Initialwert](#initialwert) für dieses Element gesetzt.

Der [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der Cascade-Algorithmus definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder Ebenen stammen. Wenn ein Selektor mit einem Element übereinstimmt, wird der [spezifizierte Wert](#spezifizierter_wert) der Eigenschaft aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem weniger bedeutenden Ursprung oder Ebene eine größere {{cssxref("specificity")}} hat.

Nachdem die Cascade-Regeln angewendet und die Werte schrittweise aufgelöst wurden, stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS widerspiegelt.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums eines Dokuments sind, haben deklarierte, kaskadierte, spezifizierte, berechnete, genutzte und tatsächliche Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Codebase das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p>CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em`-spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

- [Initialwert](#initialwert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Genutzter Wert](#genutzter_wert)

Diese Werte werden verwendet, um den endgültigen [dargestellten Wert](#dargestellte_werte) zu bestimmen.

### Initialwert

Der **Initialwert** einer Eigenschaft ist der Standardwert, der in der Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Initialwerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert nur auf das _Wurzelelement_ angewendet, solange kein [spezifizierter Wert](#spezifizierter_wert) bereitgestellt wird.

- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert bereitgestellt wird.

Sie können den Initialwert explizit mit dem {{cssxref("initial")}}-Schlüsselwort festlegen.

> [!NOTE]
> Der Initialwert kann im Abschnitt zur formalen Syntax auf jeder CSS-Eigenschaften-Referenzseite gefunden werden. Zum Beispiel ist der [Initialwert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Initialwert sollte nicht mit dem Wert verwechselt werden, der vom Stylesheet des Browsers angegeben wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der spezifizierte Wert für eine bestimmte Eigenschaft wird gemäß der folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments ausdrücklich einen Wert für die Eigenschaft angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, aber es sich um eine vererbte Eigenschaft handelt, wird der Wert vom Elternelement übernommen.
3. Wenn keiner der oben genannten Fälle zutrifft, wird der [Initialwert](#initialwert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Code enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, jedoch bevor Layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert in der „Berechneten Wert“-Zeile in der Definitionstabelle der Eigenschaft zu erreichen.

Die Berechnung, die erforderlich ist, um einen berechneten Wert einer Eigenschaft zu erreichen, umfasst in der Regel die Umwandlung relativer Werte (wie die in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Beispielsweise, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), werden Prozentwerte zu prozentual berechneten Werten. Zusätzlich werden einheitenlose Zahlen, die für die `line-height`-Eigenschaft angegeben sind, der berechnete Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden zu absoluten Werten, wenn der [genutzte Wert](#genutzter_wert) bestimmt wird.

Gegeben `p { font-size: 1.25em; }`, wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` sein.

### Genutzter Wert

Der **genutzte Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und dieser mit Layout-spezifischen Details verfeinert wurde (z. B. in tatsächliche Pixelwerte aufgelöste Prozentsätze).

Jede CSS-Eigenschaft hat einen genutzten Wert. Die genutzten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die genutzten Werte von Kurzschreibweise-Eigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der genutzte Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwerten gesetzt wurde.

Wenn wir drei Containerelemente mit ihren Breiten auf `auto`, `50%` und `inherit` gesetzt haben:

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

Während die drei spezifizierten Werte `auto`, `50%` und `inherit` Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, liefert das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/length#absolute_length_units) in `px`:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die genutzten Werte zu ändern.

## Dargestellte Werte

Der dargestellte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der Wert, der über Skripte abgerufen wird, als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [genutzte Wert](#genutzter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Quirks oder -Einschränkungen. Beispielsweise kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Rahmen mit einer ganzen Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl aufrunden.

Die Berechnung umfasst folgende Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis von [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Initialwerts](#initialwert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seine berechnete `display` auf `block` ändern).
3. Dann wird das Layout berechnet, was zum [genutzten Wert](#genutzter_wert) führt.
4. Schließlich wird der genutzte Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zu dem tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert, nachdem aktive Stylesheets angewendet und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein live [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller CSS-Eigenschaften enthält, die auf ein bestimmtes Element angewendet werden. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [genutzte Wert](#genutzter_wert), abhängig von der Eigenschaft.

Historisch gesehen hat `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurückgegeben. Als sich CSS weiterentwickelte, tat dies auch das Konzept des „berechneten Werts“, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit eingesetzten Skripten gleich bleiben. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der genutzte Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet detaillierte Informationen pro Eigenschaft.

CSS 2.0 definierte _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. Mit CSS 2.1 wurde die eindeutige Definition des „genutzten Werts“ eingeführt. Ein Element konnte dann explizit Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht von Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und genutzten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _vom Layout abhängen_, und daher unterschiedliche berechnete und genutzte Werte haben (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [Modul für CSS-Cascade und -Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Syntaxmodul](/de/docs/Web/CSS/CSS_syntax)
