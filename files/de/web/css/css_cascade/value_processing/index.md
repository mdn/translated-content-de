---
title: Verarbeitung von CSS-Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jeder CSS-Eigenschaft, die auf dieses Element angewendet wird, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder einen Kasten ist das Ergebnis einer Berechnung basierend auf Stilblattdefinitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitskonversionen und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsstufen, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie festgelegte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt aus der Deklaration mit der größten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit der gleichen Spezifität verschiedene Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzigen Eigenschaft-Wert-Paar; ist ein einzelner Wert, der von jeder Eigenschaft angewendet wird. Auch wenn der Wert eine kommagetrennte Liste von Werten ist, stammt diese Werteliste aus einer einzigen Deklaration.

Um zu bestimmen, welcher festgelegte Wert angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie Inline-Stile sowie interne und externe Stilblätter.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationsüberraschung für eine bestimmte Eigenschaft auf einem Element existiert. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Der [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile das gleiche Element anvisieren. Der Cascade-Algorithmus definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder Schichten stammen. Wenn ein Selektor ein Element trifft, wird der [festgelegte Wert](#festgelegter_wert) der Eigenschaft von dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor mit einer niedrigeren Priorität einen höheren {{cssxref("specificity")}} hat.

Nach Anwendung der Kaskadenregeln und dem schrittweisen Auflösen der Werte stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Verarbeitungsstufen

Alle Elemente, die Teil des flachen Elementbaums des Dokuments sind, haben deklarierte, gekaskadierte, festgelegte, berechnete, verwendete und tatsächliche Werte. Für eine spezifische Eigenschaft können diese Werte unterschiedlich sein oder auch nicht. Zum Beispiel, wenn Ihr großer Codebestand das CSS `p { font-size: 1.25em; }` enthält" und Ihr HTML `<p>CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}} Wert durchläuft einige Stufen, um vom festgelegten `em`-Wert zum gerenderten `px`-Wert zu gelangen.

- [Anfangswert](#anfangswert)
- [Festgelegter Wert](#festgelegter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in seiner Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf dem _Root-Element_ verwendet, sofern kein [festgelegter Wert](#festgelegter_wert) angegeben ist.

- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, sofern kein festgelegter Wert angegeben ist.

Sie können den Anfangswert explizit mit dem {{cssxref("initial")}}-Schlüsselwort setzen.

> [!NOTE]
> Der Anfangswert kann im formellen Syntaxabschnitt jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, den das Stylesheet des Browsers angibt.

### Festgelegter Wert

Der **festgelegte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der festgelegte Wert für eine gegebene Eigenschaft wird nach den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments einen Wert für die Eigenschaft explizit angibt, wird der gegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, es sich jedoch um eine vererbte Eigenschaft handelt, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Anwendung findet, wird der [Anfangswert](#anfangswert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der festgelegte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size`-Deklaration mit höherer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern an Kind übertragen wird. Er ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, aber bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [festgelegten Wert](#festgelegter_wert) berechnet, indem:

1. Die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} behandelt werden.
2. Die Berechnung durchgeführt wird, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" der Eigenschaftsdefinitionstabelle beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Konvertierung relativer Werte (wie bei `em`-Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element die festgelegten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelte Schriftgröße).

Jedoch, für einige Eigenschaften (diejenigen, bei denen Prozentangaben relativ zu etwas sind, was ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`), werden prozentual festgelegte Werte in prozentual-berechnete Werte umgewandelt. Zusätzlich werden einheitslose Zahlen, die auf der `line-height`-Eigenschaft angegeben sind, zu dem berechneten Wert, wie angegeben. Die verbleibenden relativen Werte im berechneten Wert werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

Gegeben `p { font-size: 1.25em; }`, wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` sein.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentsätze, die in tatsächliche Pixelwerte aufgelöst werden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweise-Eigenschaften (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Eigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der festgelegte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente mit ihrer Breite als `auto`, `50%` und `inherit` haben:

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

Während die drei festgelegten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- bzw. {{cssxref("percentage")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/length#absolute_length_units) in `px` zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem etwaige notwendige Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Render-Eigenheiten oder Einschränkungen. Ein {{Glossary("user_agent", "Benutzeragent")}}, der Ränder nur mit einer ganzen Pixelbreite rendern kann, rundet zum Beispiel die Dicke des Rands zur nächsten ganzen Zahl ab.

Die Berechnung umfasst folgende Schritte:

1. Zuerst wird der [festgelegte Wert](#specified_valuespecified_value) basierend auf dem Ergebnis der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechnetes `display` in `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und Lösung der darin enthaltenen grundlegenden Berechnung. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen hat `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurückgegeben. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten gleich bleiben, um die Abwärtskompatibilität mit bereitgestellten Skripten zu gewährleisten. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige älteren Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet Details zu den einzelnen Eigenschaften.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die genaue Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die tatsächlich vom Layout abhängen und daher einen unterschiedlichen berechneten und verwendeten Wert haben (entnommen von [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
