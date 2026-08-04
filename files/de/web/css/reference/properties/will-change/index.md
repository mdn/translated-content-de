---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: 4b837c21d9138c61a81ac584cd4319cf22d1388c
---

Die **`will-change`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, Animationen zu optimieren, indem sie dem Browser einen Hinweis darauf gibt, wie sich ein Element voraussichtlich ändern wird.

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

Der Wert ist entweder `auto` oder ein oder mehrere durch Komma getrennte `<animateable-feature>`-Werte:

- `auto`
  - : Gibt an, dass der Browser die normalerweise verwendeten Heuristiken und Optimierungen anwendet. Dies ist der Standardwert.

- `<animateable-feature>`
  - : Repräsentiert eines der folgenden:
    - `scroll-position`
      - : Gibt an, dass sich die Scroll-Position des Elements in naher Zukunft ändern wird, was dem Browser ermöglicht, die Darstellung von überfließendem Inhalt zu optimieren.

    - `contents`
      - : Gibt an, dass sich die Inhalte des Elements, einschließlich aller Elemente in seinem Unterbaum, in naher Zukunft ändern werden, was dem Browser ermöglicht, das Element weniger aggressiv zu cachen.

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : Gibt den Namen einer CSS-Eigenschaft an, als ein {{cssxref("ident")}}, deren Wert animiert oder anderweitig in naher Zukunft geändert werden soll. Wenn das angegebene `<ident>` eine Eigenschafts-Kurzform darstellt, werden alle ihre Langform-Komponenten angewendet. Der Wert kann nicht `will-change`, `none`, `all`, `auto`, `scroll-position` oder `contents` sein.

## Beschreibung

Die `will-change`-Eigenschaft bietet dem Browser einen Hinweis darauf, welche Eigenschaften voraussichtlich animiert oder anderweitig geändert werden. Dies ermöglicht es Browsern, die notwendigen Render-Optimierungen vorzunehmen, um flüssigere Änderungen zu ermöglichen und {{Glossary("jank", "Ruckler")}} zu vermeiden.

Die `will-change`-Eigenschaft zielt darauf ab, die Render-Performance zu verbessern. Diese Eigenschaft kann die Leistung für Elemente verbessern, die häufig neu gezeichnet und neu berechnet werden, oder für solche, die Eigenschaften wie {{cssxref("box-shadow")}} und {{cssxref("clip-path")}} verwenden, um komplexe visuelle Effekte zu erzeugen.

Das Anwenden der Eigenschaft auf ein Element wendet den Wert auf den gesamten Unterbaum des Elements an, was bedeutet, dass sich alle Nachkommen ändern können. Aus diesem Grund kann das Anwenden eines nicht-`auto`-Wertes auf einen großen Bereich, wie den {{htmlelement("body")}}, tatsächlich schlecht für die Seitenleistung sein. Begrenzen Sie stattdessen die Verwendung dieser Eigenschaft auf tief geschachtelte Elemente, die so wenig wie möglich vom Dokument enthalten.

> [!WARNING]
> Verwenden Sie die `will-change`-Eigenschaft als letzten Ausweg, um mit bestehenden Leistungsproblemen umzugehen. Verwenden Sie sie nicht, um Leistungsprobleme vorherzusehen.

Die richtige Verwendung dieser Eigenschaft kann etwas knifflig sein. Beachten Sie die folgenden Richtlinien:

- **Wenden Sie `will-change` nicht auf zu viele Elemente an**: Der Browser versucht bereits so gut er kann, alles zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Rechners. Übermäßige Nutzung der Eigenschaft kann dazu führen, dass die Seite langsamer wird, anstatt ihre Leistung zu verbessern.
- **Verwenden Sie sie sparsam**: Das normale Verhalten des Browsers bei Optimierungen besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Das direkte Hinzufügen von `will-change` zu einem Stylesheet impliziert, dass die gezielten Elemente immer kurz vor einer Veränderung stehen und der Browser die Optimierungen viel länger beibehält als sonst. Es ist daher eine gute Praxis, `will-change` mithilfe von Skript-Code vor und nach der Änderung ein- und auszuschalten.
- **Wenden Sie will-change nicht für vorzeitige Optimierung an**: Wenn Ihre Seite gut funktioniert, sollten Sie die `will-change`-Eigenschaft nicht hinzufügen, nur um noch etwas mehr Geschwindigkeit aus ihr herauszuholen. `will-change` ist gedacht, um als letzter Ausweg mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen. Übermäßige Verwendung von `will-change` führt zu übermäßigem Speicherverbrauch und wird komplexere Render-Vorgänge verursachen, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies wird zu einer schlechteren Leistung führen.
- **Geben Sie ihm genügend Zeit zu wirken**: Diese Eigenschaft ermöglicht es Ihnen, dem Browser Signale zu geben, dass Eigenschaften wahrscheinlich geändert werden, sodass der Browser alle Optimierungen im Voraus anwenden kann, bevor die Eigenschaftsänderung eintritt. Aus diesem Grund sollten Sie dem Browser etwas Zeit geben, um die Optimierungen vorzunehmen. Sagen Sie eine bevorstehende Änderung leicht voraus und stellen Sie dann `will-change` ein.
- **Seien Sie sich bewusst, dass `will-change` das visuelle Erscheinungsbild von Elementen beeinflussen kann**: Wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erzeugen (z.B. `will-change: opacity`), wird der Stacking-Kontext im Voraus erstellt.

### Animationen

Wenn `will-change` angewendet wird, um Animationen zu verbessern, fügen Sie die Eigenschaft ein, bevor die Animation beginnt, nicht innerhalb der {{cssxref("@keyframes")}}-Animationsdefinitionen. Animierte Eigenschaften werden so behandelt, als ob sie bereits in einem `will-change` enthalten wären, daher gibt es keinen Grund, sie dort hinzuzufügen.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihr Stylesheet für eine Anwendung aufzunehmen, die Seitenumbrüche bei Tastendrücken durchführt, wie ein Album oder eine Präsentation, bei der die Seiten groß und komplex sind. Dadurch kann der Browser die Übergänge im Voraus vorbereiten und ermöglicht schnelle Übergänge zwischen den Seiten, sobald die Taste gedrückt wird. Seien Sie jedoch vorsichtig mit der `will-change`-Eigenschaft direkt in Stylesheets. Sie kann dazu führen, dass der Browser die Optimierung viel länger als nötig im Speicher behält.

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

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende CSS-Anwendung der `will-change`-Eigenschaft.

#### CSS

Wir verwenden CSS, um die `will-change`-Eigenschaft auf das `#element` anzuwenden, und geben dem Browser einen Hinweis, dass die Werte der {{cssxref("transform")}}- und {{cssxref("opacity")}}-Eigenschaften animiert oder anderweitig in naher Zukunft geändert werden.

```css
#element {
  will-change: transform, opacity;
}
```

### Über Skript

Dieses Beispiel zeigt, wie die `will-change`-Eigenschaft bei Bedarf angewendet und Optimierungen entfernt werden können, sobald sie abgeschlossen sind, unter Verwendung von JavaScript, was im Allgemeinen die Art ist, wie `will-change` angewendet werden sollte.

#### JavaScript

Wir verwenden JavaScript, um die `will-change`-Eigenschaft auf `#element` anzuwenden, wenn das Element mit der Maus überfahren wird, indem wir das [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)-Ereignis verwenden. Das Setzen von `will-change` auf `transform, opacity` teilt dem Browser mit, Änderungen an den {{cssxref("transform")}}- und {{cssxref("opacity")}}-Eigenschaften zu optimieren. Wenn das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis auftritt, setzt unser Skript den Wert auf `auto`.

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
- Einzelne Transformations-Eigenschaften: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- [CSS will change](/de/docs/Web/CSS/Guides/Will_change) Modul
