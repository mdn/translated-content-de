---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`will-change`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht die Optimierung von Animationen, indem sie dem Browser einen Hinweis darauf gibt, wie sich ein Element voraussichtlich ändern wird.

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

Der Wert ist entweder `auto` oder einer oder mehrere durch Kommas getrennte `<animatable-feature>`-Werte:

- `auto`
  - : Gibt an, dass der Browser alle Heuristiken und Optimierungen anwendet, die er normalerweise ausführt. Dies ist der Standardwert.

- `<animatable-feature>`
  - : Repräsentiert eines der folgenden:
    - `scroll-position`
      - : Gibt an, dass sich die Scrollposition des Elements in naher Zukunft ändern wird, was dem Browser ermöglicht, die Darstellung von überlaufendem Inhalt zu optimieren.

    - `contents`
      - : Gibt an, dass sich die Inhalte des Elements, einschließlich aller Elemente in seinem Unterbaum, in naher Zukunft ändern werden, was dem Browser ermöglicht, das Element weniger aggressiv zu cachen.

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : Gibt den Namen einer CSS-Eigenschaft als {{cssxref("ident")}} an, deren Wert animiert oder anderweitig voraussichtlich geändert wird. Wenn das angegebene `<ident>` eine Eigenschaftenshorthand darstellt, werden alle seine Langformkomponenten angewendet. Der Wert kann nicht `will-change`, `none`, `all`, `auto`, `scroll-position` oder `contents` sein.

## Beschreibung

Die `will-change`-Eigenschaft gibt dem Browser einen Hinweis darauf, welche Eigenschaften voraussichtlich animiert oder anderweitig geändert werden. Dies ermöglicht es Browsern, die notwendigen Rendering-Optimierungen vorzunehmen, um flüssigere Änderungen zu ermöglichen und {{Glossary("jank", "Ruckler")}} zu vermeiden.

Die `will-change`-Eigenschaft zielt darauf ab, die Rendering-Leistung zu verbessern. Diese Eigenschaft kann die Leistung für Elemente verbessern, die häufig neu gezeichnet werden oder Eigenschaften wie {{cssxref("box-shadow")}} und {{cssxref("clip-path")}} verwenden, um komplexe visuelle Effekte zu erzeugen.

Durch das Anwenden der Eigenschaft auf ein Element wird der Wert auf den gesamten Unterbaum des Elements angewendet, was bedeutet, dass sich alle Nachkommen ändern können. Aus diesem Grund kann das Anwenden eines nicht-`auto`-Wertes auf einen großen Abschnitt, wie zum Beispiel das {{htmlelement("body")}}, tatsächlich schlecht für die Leistung einer Seite sein. Begrenzen Sie stattdessen die Verwendung dieser Eigenschaft auf tief verschachtelte Elemente, die so wenig Dokument wie möglich enthalten.

> [!WARNING]
> Verwenden Sie die `will-change`-Eigenschaft als letztes Mittel, um mit bestehenden Leistungsproblemen umzugehen. Nutzen Sie sie nicht, um Leistungsprobleme im Voraus zu antizipieren.

Die richtige Verwendung dieser Eigenschaft kann etwas knifflig sein. Beachten Sie die folgenden Richtlinien:

- **Wenden Sie `will-change` nicht auf zu viele Elemente an**: Der Browser versucht bereits so gut er kann, alles zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen einer Maschine. Eine übermäßige Verwendung der Eigenschaft kann dazu führen, dass die Seite langsamer wird, anstatt ihre Leistung zu verbessern.
- **Verwenden Sie sie sparsam**: Das normale Verhalten des Browsers für Optimierungen besteht darin, die Optimierungen so schnell wie möglich zu entfernen und in den Normalzustand zurückzukehren. Das direkte Hinzufügen von `will-change` zu einem Stylesheet impliziert, dass die Ziel-Elemente immer kurz davor stehen, sich zu ändern, und der Browser die Optimierungen viel länger als sonst beibehalten wird. Es ist daher eine gute Praxis, `will-change` mit Skriptcode ein- und auszuschalten, bevor und nachdem sich die Änderung vollzieht.
- **Verwenden Sie `will-change` nicht, um vorzeitige Optimierungen durchzuführen**: Wenn Ihre Seite gut funktioniert, fügen Sie den Elementen nicht die `will-change`-Eigenschaft hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` soll als letztes Mittel verwendet werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen. Eine übermäßige Nutzung von `will-change` wird zu übermäßigem Speicherverbrauch führen und komplexere Rendering-Vorgänge verursachen, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies wird zu schlechterer Leistung führen.
- **Geben Sie ihm genügend Zeit, um zu wirken**: Diese Eigenschaft ermöglicht es Ihnen, dem Browser über Eigenschaften zu signalisieren, die sich wahrscheinlich ändern werden, sodass der Browser im Voraus Optimierungen anwenden kann, bevor sich die Eigenschaft ändert. Aus diesem Grund sollten Sie dem Browser etwas Zeit geben, die Optimierungen vorzunehmen. Sagen Sie leicht im Voraus voraus, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- **Seien Sie sich bewusst, dass `will-change` die visuelle Erscheinung von Elementen beeinflussen kann**: Wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erstellen (z. B. `will-change: opacity`), wird der Stacking-Kontext im Voraus erstellt.

### Animationen

Wenn Sie `will-change` anwenden, um Animationen zu verbessern, fügen Sie die Eigenschaft hinzu, bevor die Animation beginnt, nicht innerhalb der {{cssxref("@keyframes")}}-Animationsdefinitionen. Animierte Eigenschaften werden so behandelt, als ob sie bereits in `will-change` enthalten sind, daher gibt es keinen Grund, sie dort hinzuzufügen.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihr Stylesheet für eine Anwendung aufzunehmen, die bei Tastendrücken Seitenwechsel wie ein Album oder eine Präsentation mit großen und komplexen Seiten durchführt. Dies ermöglicht es dem Browser, die Transition im Voraus vorzubereiten und sofortige Übergänge zwischen den Seiten zu ermöglichen, sobald die Taste gedrückt wird. Gehen Sie jedoch vorsichtig mit der `will-change`-Eigenschaft direkt in Stylesheets um. Sie kann dazu führen, dass der Browser die Optimierung viel länger im Speicher hält, als sie benötigt wird.

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

Dieses Beispiel demonstriert die grundlegende Anwendung der `will-change`-Eigenschaft in CSS.

#### CSS

Wir verwenden CSS, um die `will-change`-Eigenschaft auf das `#element` anzuwenden und dem Browser einen Hinweis zu geben, dass sich die Werte der Eigenschaften {{cssxref("transform")}} und {{cssxref("opacity")}} in naher Zukunft ändern oder animiert werden.

```css
#element {
  will-change: transform, opacity;
}
```

### Über Skript

Dieses Beispiel zeigt, wie die `will-change`-Eigenschaft bei Bedarf angewendet und die Optimierungen nach getaner Arbeit mit JavaScript entfernt werden, was im Allgemeinen die Methode ist, wie `will-change` angewendet werden sollte.

#### JavaScript

Wir verwenden JavaScript, um die `will-change`-Eigenschaft auf `#element` hinzuzufügen, wenn das Element durch das [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)-Ereignis überfahren wird. Das Setzen von `will-change` auf `transform, opacity` teilt dem Browser mit, dass er für Änderungen an den Eigenschaften {{cssxref("transform")}} und {{cssxref("opacity")}} optimieren soll. Wenn das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis eintritt, setzt unser Skript den Wert auf `auto`.

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
- Einzelne Transform-Eigenschaften: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- [CSS will change](/de/docs/Web/CSS/Guides/Will_change) Modul
