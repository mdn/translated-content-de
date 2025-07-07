---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 39b68c20fd5148e870990707f5953d3b2ca30cc8
---

{{CSSRef}}

Für jedes Element im Dokumentbaum weist der Browser jeder anwendbaren CSS-Eigenschaft einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Umrechnung von Einheiten und dem Anzeigeumfeld. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsstufen, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem er wichtige Konzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte erkundet.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt aus der Deklaration mit der höchsten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzelnen Eigenschaft-Wert-Paar; ein einzelner Wert wird aus jeder Eigenschaft angewendet. Selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist, stammt diese Werteliste aus einer einzigen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie z.B. inline Styles und interne sowie externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element existieren. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Das [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element betreffen. Der Cascade-Algorithmus definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder Ebenen stammen. Wenn ein Selektor ein Element trifft, wird der [spezifizierte Wert](#spezifizierter_wert) der Eigenschaft aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung oder einer Ebene mit niedrigerer Priorität eine größere {{cssxref("specificity")}} hat.

Nach der Anwendung der Kaskadierungsregeln und der schrittweisen Auflösung der Werte stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums eines Dokuments sind, haben deklarierte, kaskadierte, spezifizierte, berechnete, verwendete und tatsächliche Werte. Für eine bestimmte Eigenschaft können diese Werte identisch sein oder nicht. Zum Beispiel, wenn Ihr umfangreicher Codebase das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p>CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px` Wert zu gelangen.

- [Anfangswert](#anfangswert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in seiner Definitionstabelle in der Spezifikation angegeben ist. Die Verwendung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur beim _Wurzelelement_ verwendet, solange kein [spezifizierter Wert](#spezifizierter_wert) angegeben ist.
- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert für _alle Elemente_ verwendet, solange kein spezifizierter Wert angegeben ist.

Sie können den Anfangswert explizit festlegen, indem Sie das {{cssxref("initial")}}-Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers festgelegt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der zunächst in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der spezifizierte Wert für eine gegebene Eigenschaft wird gemäß den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments einen Wert für die Eigenschaft explizit angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, die Eigenschaft jedoch vererbt wird, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Bedingungen zutrifft, wird der [Anfangswert](#anfangswert) des Elements verwendet.

In dem Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Codebase enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte umgewandelt wurden, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet, indem:

1. Die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} behandelt werden.
2. Die Berechnung durchgeführt wird, die notwendig ist, um den in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschriebenen Wert zu erreichen.

Die Berechnung, die notwendig ist, um einen berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie die in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (die doppelte Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Zudem werden einheitslose Zahlen, die bei der Eigenschaft `line-height` spezifiziert werden, als berechneter Wert übernommen, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden zu absoluten Werten, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

Gegeben`p { font-size: 1.25em; }`, wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` sein.

### Verwendeter Wert

Der **verwendete Wert** ist der Eigenschaftswert, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z.B. Prozentsätze, die zu tatsächlichen Pixelwerten aufgelöst werden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixel. Die verwendeten Werte von Kurzschreib-Eigenschaften (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Container-Elemente haben, deren Breite auf `auto`, `50%` und `inherit` gesetzt ist:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längen](/de/docs/Web/CSS/length#absolute_length_units) `px`-Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft nach Anwendung aller notwendigen Annäherungen. Es ist der endgültig gerenderte Wert, wie er durch den Browser implementiert wird, einschließlich Anpassungen an Wiedergabe-Unzulänglichkeiten oder Einschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Rahmen mit einer ganzen Zahlen-Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis von [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder durch Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Als Nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` den berechneten `display` zu `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und der Auflösung aller grundlegenden Berechnungen, die diese Werte enthalten könnten. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewandter CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), je nach Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Während sich CSS weiterentwickelte, veränderte sich auch das Konzept des "berechneten Werts", aber die durch `getComputedStyle()` zurückgegebenen Werte mussten gleichbleiben, um die Abwärtskompatibilität mit bereits eingesetzten Skripten zu gewährleisten. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist er der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) liefert Details pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die eindeutige Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seiner Eltern erben, deren berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte identisch. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _vom Layout_ abhängen, und daher einen unterschiedlichen berechneten und verwendeten Wert haben (entnommen aus den [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
