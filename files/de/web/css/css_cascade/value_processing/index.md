---
title: Verarbeitung von CSS-Werte
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaftswert, der auf dieses Element anwendbar ist, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein gegebenes Element oder eine Box ist das Ergebnis einer Berechnung, die auf Stylesheet-Definitionen, Vererbung, dem [Kaskadenmechanismus](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Umrechnung von Einheiten und der Anzeigumgebung basiert. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem wichtige Konzepte wie festgelegte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt aus der Deklaration mit der höchsten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzelnen Eigenschaft-Werte-Paar; es wird ein einzelner Wert von jeder Eigenschaft angewendet. Auch wenn der Wert eine durch Kommas getrennte Werteliste ist, stammt diese Liste von einer einzigen Deklaration.

Um zu ermitteln, welcher spezifische Wert angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie z.B. Inline-Stile sowie interne und externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren übergeordneten Elementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationen für eine bestimmte Eigenschaft eines Elements vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des übergeordneten Elements festgelegt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element festgelegt.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der Kaskadenalgorithmus definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder Schichten stammen. Wenn ein Selektor mit einem Element übereinstimmt, wird der [spezifizierte Wert](#spezifizierter_wert) der Eigenschaft von der Quelle mit der höchsten Priorität angewendet, auch wenn ein Selektor aus einer niederrangigen Quelle oder Schicht eine höhere {{cssxref("specificity")}} aufweist.

Nachdem die Kaskadenregeln angewendet und die Werte Schritt für Schritt aufgelöst wurden, stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Verarbeitungsstufen

Alle Elemente, die Teil des im Dokument abgeflachten Elementbaums sind, haben deklarierte, kaskadierte, spezifizierte, berechnete, verwendete und aktuelle Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr umfangreicher Code-Bestand das CSS `p { font-size: 1.25em; }` und Ihr HTML `<p>CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

- [Eigenschaftswerte](#property-values)
- [Verarbeitungsstufen](#processing-stages)
  - [Anfangswert](#initial-value)
  - [Spezifizierter Wert](#specified-value)
  - [Berechneter Wert](#computed-value)
  - [Verwendeter Wert](#used-value)
- [Gerenderte Werte](#rendered-values)
  - [Tatsächlicher Wert](#actual-value)
  - [Aufgelöster Wert](#resolved-value)
- [Siehe auch](#see-also)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Der Gebrauch des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur am _Wurzelelement_ verwendet, solange kein [spezifizierter Wert](#spezifizierter_wert) angegeben ist.

- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert angegeben ist.

Sie können den Anfangswert explizit festlegen, indem Sie das {{cssxref("initial")}} Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert kann im Abschnitt der formalen Syntax jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der im Stylesheet des Browsers angegeben ist.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der spezifizierte Wert für eine gegebene Eigenschaft wird nach folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Eigenschaft angibt, wird der gegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, es sich jedoch um eine vererbte Eigenschaft handelt, wird der Wert vom übergeordneten Element übernommen.
3. Wenn keine der oben genannten Bedingungen zutrifft, wird der [Anfangswert](#anfangswert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern auf Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird vom [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Umgang mit den speziellen Werten {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnungen, die erforderlich sind, um den in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschriebenen Wert zu erreichen.

Die Berechnungen zur Erreichung eines berechneten Werts einer Eigenschaft umfassen typischerweise die Umwandlung relativer Werte (wie die in `em`-Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (jene, bei denen Prozentangaben relativ zu etwas sind, das möglicherweise ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Außerdem werden bei der `line-height`-Eigenschaft angegebene zahlenlose Werte zum berechneten Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

Bei `p { font-size: 1.25em; }`, wenn `em` `16px` ist, beträgt die berechnete Schriftgröße für einen Absatz `20px`.

### Verwendeter Wert

Der **verwendete Wert** ist der Eigenschaftswert, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden, und er wurde mit layout-spezifischen Details verfeinert (z.B. Prozentsätze, die in tatsächliche Pixelwerte aufgelöst wurden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibeigenschaften (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwerten festgelegt wurde.

Wenn wir drei Containerelemente mit ihrer Breite als `auto`, `50%` und `inherit` festgelegt haben:

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

Während die drei spezifizierten Werte `auto`, `50%` und `inherit` Schlüsselwort- und {{cssxref("Prozent")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längen](/de/docs/Web/CSS/length#absolute_length_units) `px`-Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als der [tatsächliche Wert](#tatsächlicher_wert) bezeichnet, während der über Skripte abgerufene Wert der [aufgelöste Wert](#aufgelöster_wert) genannt wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen vorgenommen wurden. Es ist der endgültig gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Darstellungsbesonderheiten oder -einschränkungen. Beispielsweise kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Ränder mit ganzzahliger Pixelbreite rendern kann, die Dicke des Rands auf die nächstgelegene ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder mit dem [Anfangswert](#anfangswert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seine berechnete `display` zu `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert in Übereinstimmung mit den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert, nachdem aktive Stylesheets angewendet wurden und alle grundlegenden Berechnungen, die diese Werte möglicherweise enthalten, aufgelöst wurden. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurück. Da sich CSS weiterentwickelte, tat dies auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Abwärtskompatibilität mit bereitgestellten Skripten unverändert bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist er der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet detailspezifische Informationen pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die deutliche Definition des "verwendeten Wertes" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht auf das Layout angewiesen sind (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _vom Layout_ abhängen und daher unterschiedliche berechnete und verwendete Werte haben (entnommen aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskadierungs- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Syntaxmodul](/de/docs/Web/CSS/CSS_syntax)
