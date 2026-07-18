---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: 5362c0545d8dc2a859fd2f64de41d576931d6a2e
---

Die **`will-change`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht die Optimierung von Animationen, indem sie dem Browser einen Hinweis darauf gibt, wie sich ein Element voraussichtlich ändern wird.

## Syntax

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;

/* <custom-ident> values */
will-change: transform;
will-change: opacity;

/* multiple values */
will-change: left, top;

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Werte

Der Wert ist entweder `auto` oder einer oder mehrere durch Kommas getrennte `<animateable-feature>`-Werte:

- `auto`
  - : Gibt an, dass der Browser die Heuristiken und Optimierungen anwendet, die er normalerweise vornimmt. Dies ist der Standardwert.

- `<animateable-feature>`
  - : Repräsentiert eines der folgenden:
    - `scroll-position`
      - : Gibt an, dass sich die Scroll-Position des Elements in naher Zukunft ändern wird, und ermöglicht es dem Browser, das Rendering von überlaufendem Inhalt zu optimieren.

    - `contents`
      - : Gibt an, dass sich der Inhalt des Elements, einschließlich aller Elemente in seinem Unterbaum, in naher Zukunft ändern wird, und ermöglicht es dem Browser, das Element weniger aggressiv zu cachen.

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : Spezifiziert den Namen einer CSS-Eigenschaft, als {{cssxref("ident")}}, deren Wert animiert oder anderweitig voraussichtlich in naher Zukunft geändert wird. Wenn das angegebene `<ident>` eine Eigenschafts-Kurzform darstellt, werden alle dazugehörigen Langformen angewendet. Der Wert kann nicht `will-change`, `none`, `all`, `auto`, `scroll-position` oder `contents` sein.

## Beschreibung

Die `will-change`-Eigenschaft bietet dem Browser einen Hinweis darauf, welche Eigenschaften voraussichtlich animiert oder anderweitig geändert werden. Dies ermöglicht es Browsern, die erforderlichen Rendering-Optimierungen vorzunehmen, um flüssigere Änderungen zu ermöglichen und {{Glossary("jank", "Ruckeln")}} zu vermeiden.

Die `will-change`-Eigenschaft zielt darauf ab, die Rendering-Leistung zu verbessern. Diese Eigenschaft kann die Leistung für Elemente verbessern, die häufig neu gezeichnet und neu dargestellt werden, oder für solche, die Eigenschaften wie {{cssxref("box-shadow")}} und {{cssxref("clip-path")}} verwenden, um komplexe visuelle Effekte zu erzeugen.

Wenn diese Eigenschaft auf ein Element angewendet wird, gilt der Wert für den gesamten Unterbaum des Elements, was bedeutet, dass sich alle Nachfahren ändern können. Aus diesem Grund kann das Anwenden eines nicht-`auto`-Wertes auf einen großen Abschnitt, wie das {{htmlelement("body")}}, tatsächlich schlecht für die Leistung einer Seite sein. Stattdessen sollte die Verwendung dieser Eigenschaft auf tief verschachtelte Elemente beschränkt werden, die so wenig vom Dokument enthalten wie möglich.

> [!WARNING]
> Verwenden Sie die `will-change`-Eigenschaft als letztes Mittel, um mit bestehenden Leistungsproblemen umzugehen. Verwenden Sie sie nicht, um Leistungsprobleme vorauszusehen.

Die korrekte Verwendung dieser Eigenschaft kann etwas knifflig sein. Beachten Sie folgende Richtlinien:

- **Wenden Sie `will-change` nicht auf zu viele Elemente an**: Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verwenden viele Ressourcen einer Maschine. Eine übermäßige Verwendung der Eigenschaft kann dazu führen, dass die Seite langsamer wird, anstatt die Leistung zu verbessern.
- **Sparsam verwenden**: Das normale Verhalten des Browsers für Optimierungen besteht darin, die Optimierungen so schnell wie möglich zu entfernen und in den Normalzustand zurückzukehren. Das Hinzufügen von `will-change` direkt zu einem Stylesheet impliziert, dass die Ziel-Elemente immer kurz davor sind, sich zu ändern, und der Browser wird die Optimierungen viel länger beibehalten, als er es sonst getan hätte. Daher ist es eine gute Praxis, `will-change` mit Skript-Code vor und nach der Änderung ein- und auszuschalten.
- **Wenden Sie will-change nicht auf Elemente an, um vorzeitige Optimierung durchzuführen**: Wenn Ihre Seite gut funktioniert, fügen Sie die `will-change`-Eigenschaft nicht zu Elementen hinzu, nur um ein wenig Geschwindigkeit herauszuholen. `will-change` soll als letztes Mittel verwendet werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorauszusehen. Übermäßige Verwendung von `will-change` führt zu übermäßigem Speicherverbrauch und komplexerem Rendering, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies wird zu schlechterer Leistung führen.
- **Geben Sie ihm ausreichend Zeit, um zu arbeiten**: Diese Eigenschaft ermöglicht es Ihnen, dem Browser Signal zu geben, welche Eigenschaften sich wahrscheinlich ändern werden, damit der Browser vorab alle Optimierungen anwenden kann, bevor die Eigenschaftsänderung erfolgt. Aus diesem Grund sollten Sie dem Browser etwas Zeit geben, um die Optimierungen durchzuführen. Rechnen Sie leicht im Voraus damit, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- **Seien Sie sich bewusst, dass `will-change` das visuelle Erscheinungsbild von Elementen beeinflussen kann**: Wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erzeugen (z.B. `will-change: opacity`), wird der Stacking-Kontext im Voraus erstellt.

### Animationen

Wenn Sie `will-change` anwenden, um Animationen zu verbessern, fügen Sie die Eigenschaft hinzu, bevor die Animation beginnt, nicht innerhalb der {{cssxref("@keyframes")}}-Animationsdefinitionen. Animierte Eigenschaften werden behandelt, als wären sie bereits in einem `will-change` enthalten, daher gibt es keinen Grund, sie dort hinzuzufügen.

### Über Stylesheet

Es kann passend sein, `will-change` in Ihrem Stylesheet für eine Anwendung einzuschließen, die Seitenwechsel bei Tastendrücken wie ein Album oder eine Präsentation mit Folienwechsel durchführt, bei der die Seiten groß und komplex sind. Dies ermöglicht es dem Browser, die Übergänge im Voraus vorzubereiten und reaktionsschnelle Übergänge zwischen den Seiten zu ermöglichen, sobald die Taste gedrückt wird. Aber Vorsicht bei der direkten Verwendung der `will-change`-Eigenschaft in Stylesheets. Es kann dazu führen, dass der Browser die Optimierungen im Speicher länger behält, als es nötig ist.

```css
.slide {
  will-change: transform;
}
```

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende CSS-Anwendung der `will-change`-Eigenschaft.

#### CSS

Wir verwenden CSS, um die `will-change`-Eigenschaft auf das `#element` anzuwenden und dem Browser mitzuteilen, dass die {{cssxref("transform")}}- und {{cssxref("opacity")}}-Eigenschaftswerte animiert oder anderweitig in naher Zukunft geändert werden.

```css
#element {
  willchange: transform, opacity;
}
```

### Über Skript

Dieses Beispiel zeigt, wie man die `will-change`-Eigenschaft bei Bedarf anwendet und Optimierungen mit JavaScript entfernt, was im Allgemeinen die Art und Weise ist, wie `will-change` angewendet werden sollte.

#### JavaScript

Wir verwenden JavaScript, um die `will-change`-Eigenschaft auf `#element` hinzuzufügen, wenn das Element mit dem [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)-Ereignis überfahren wird. Das Festlegen von `will-change` auf `transform, opacity` teilt dem Browser mit, die Optimierung für Änderungen der {{cssxref("transform")}}- und {{cssxref("opacity")}}-Eigenschaften vorzunehmen. Wenn das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis eintritt, setzt unser Skript den Wert auf `auto`.

```js
const el = document.getElementById("element");

el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- Individuelle Transform-Eigenschaften: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- [CSS will change](/de/docs/Web/CSS/Guides/Will_change) Modul
