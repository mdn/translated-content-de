---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine benutzerdefinierte Positionierungsversuchs-Fallback-Option zu definieren, die zur Positionierung und Ausrichtung von verankerten Elementen verwendet werden kann. Eine oder mehrere Sätze von Positionierungsversuchs-Fallback-Optionen können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzform auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Stelle bewegt wird, an der es anfängt, den umgebenden Block oder den Ansichtsbereich zu überlaufen, wählt der Browser die erste gefundene Positionierungsversuchs-Fallback-Option, die das positionierte Element vollständig wieder auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen festlegt, die Informationen wie Inset-Position, Rand, Größe und Selbstausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzform zu referenzieren.

Für ausführliche Informationen zu Ankerfunktionen und der Verwendung von Positionierungsversuchs-Fallbacks siehe die Modul-Übersichtsseite [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) und die Anleitung [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, die dann verwendet werden kann, um diese Fallback-Option zur Liste der {{cssxref("position-try-fallbacks")}} hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d. h., wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen Wert der {{cssxref("position-anchor")}}-Eigenschaft an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem es einen {{cssxref("dashed-ident")}}-Wert angibt, der gleich dem Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements ist.
- `position-area`
  - : Gibt einen Wert der {{cssxref("position-area")}}-Eigenschaft an, der die Position des verankerten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Inset-Eigenschafts")}}-Deskriptoren
  - : Geben [`anchor()`](/de/docs/Web/CSS/anchor)-Funktionswerte an, die die Position der Kanten des verankerten Elements relativ zur Kante des Ankerelements definieren. Inset-Eigenschaftsdeskriptoren können festgelegt werden, die folgende Eigenschaften darstellen:
    - {{cssxref("top")}}
    - {{cssxref("left")}}
    - {{cssxref("bottom")}}
    - {{cssxref("right")}}
    - {{cssxref("inset-block-start")}}
    - {{cssxref("inset-block-end")}}
    - {{cssxref("inset-inline-start")}}
    - {{cssxref("inset-inline-end")}}
    - {{cssxref("inset-block")}}
    - {{cssxref("inset-inline")}}
    - {{cssxref("inset")}}
- Rand-Eigenschaftsdeskriptoren
  - : Geben den Rand an, der auf das verankerte Element gesetzt ist. Rand-Eigenschaftsdeskriptoren können festgelegt werden, die folgende Eigenschaften darstellen:
    - {{cssxref("margin-top")}}
    - {{cssxref("margin-left")}}
    - {{cssxref("margin-bottom")}}
    - {{cssxref("margin-right")}}
    - {{cssxref("margin-block-start")}}
    - {{cssxref("margin-block-end")}}
    - {{cssxref("margin-inline-start")}}
    - {{cssxref("margin-inline-end")}}
    - {{cssxref("margin")}}
    - {{cssxref("margin-block")}}
    - {{cssxref("margin-inline")}}
- Größen-Eigenschaftsdeskriptoren
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktionswerte an, die die Größe des verankerten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können festgelegt werden, die folgende Eigenschaften darstellen:
    - {{cssxref("width")}}
    - {{cssxref("height")}}
    - {{cssxref("min-width")}}
    - {{cssxref("min-height")}}
    - {{cssxref("max-width")}}
    - {{cssxref("max-height")}}
    - {{cssxref("block-size")}}
    - {{cssxref("inline-size")}}
    - {{cssxref("min-block-size")}}
    - {{cssxref("min-inline-size")}}
    - {{cssxref("max-block-size")}}
    - {{cssxref("max-inline-size")}}
- Eigenschaftsdeskriptoren zur Selbstausrichtung
  - : Geben Sie den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)-Wert an, um das verankerte Element relativ zur Mitte des Ankerelements, in Block- oder Inline-Richtung, auszurichten. Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}} können den `anchor-center`-Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try`-At-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über Standard-CSS-Eigenschaften auf das Element gesetzt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von benutzerdefinierten Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein verankertes Element und erstellen dann vier benannte benutzerdefinierte Positionierungsversuchs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalt immer sichtbar ist, egal wo sich das Ankerelement im Ansichtsbereich befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente hinzu, die zu einem Anker und einem verankerten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten zuerst das `<body>`-Element sehr groß, sodass wir den Anker und das positionierte Element im Ansichtsbereich sowohl horizontal als auch vertikal bewegen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

Dem Anker wird eine {{cssxref("anchor-name")}}-Eigenschaft gegeben und ein {{cssxref("position")}}-Wert von `absolute` darauf gesetzt. Wir positionieren ihn dann irgendwo in der Nähe des Zentrums der anfänglichen `<body>`-Darstellung mit den Werten {{cssxref("top")}} und {{cssxref("left")}}:

```css
.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Als nächstes verwenden wir die `@position-try`-At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede positioniert das verankerte Element an einem spezifischen Ort rund um das Ankerelement und gibt ihm einen entsprechenden `10px` Rand zwischen dem verankerten Element und seinem Anker. Die Positionierung wird auf verschiedene Weisen gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das verankerte Element in der Inline-Richtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der in eine {{cssxref("calc()")}}-Funktion eingebettet ist, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} zu erstellen, wie es die anderen Optionen tun). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das verankerte Element in der Blockrichtung auf dem Anker zu zentrieren.

Schließlich werden die linken und rechten Positionsoptionen mit einer schmaleren {{cssxref("width")}} versehen.

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin: 0 10px 0 0;
}

@position-try --custom-bottom {
  top: anchor(bottom);
  justify-self: anchor-center;
  margin: 10px 0 0 0;
  position-area: none;
}

@position-try --custom-right {
  left: calc(anchor(right) + 10px);
  align-self: anchor-center;
  width: 100px;
  position-area: none;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

Das Infokästchen erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden zu verbinden, und ist an die Oberkante des Ankers mit einem {{cssxref("position-area")}} gebunden. Wir geben ihm auch eine feste {{cssxref("width")}} und einen unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Ansichtsbereich herausgescrollt wird, wenn sich der Anker der Kante des Ansichtsbereichs nähert.

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-fallbacks:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

#### Ergebnis

Blättern Sie auf der Seite und beachten Sie die Veränderung der Platzierung des positionierten Elements, wenn sich der Anker der verschiedenen Kanten des Ansichtsbereichs nähert. Dies liegt an den verschiedenen angewendeten Fallback-Positionsoptionen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns durchgehen, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert wird. Wenn das Infokästchen die Seite in keiner Richtung überläuft, befindet sich das Infokästchen über dem Anker, und die in der `position-try-fallbacks`-Eigenschaft festgelegten Positionierungsversuchs-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass das Infokästchen eine feste Breite und einen unteren Rand festgelegt hat. Diese Werte ändern sich, wenn unterschiedliche Positionierungsversuchs-Fallback-Optionen angewendet werden.
- Wenn das Infokästchen zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Dies verschiebt das Infokästchen nach links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt dem Infokästchen auch eine andere Breite.
- Der Browser versucht als nächstes die `--custom-bottom` Position. Dies verschiebt das Infokästchen nach unten vom Anker mit `top` und `justify-self` statt eines `position-area` und setzt einen entsprechenden Rand. Es wird kein `width`-Deskriptor einbezogen, sodass das Infokästchen auf seine Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width`-Deskriptor-Wert. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt eines `position-area`. Und wir umwickeln den `left`-Eigenwert in eine `calc()`-Funktion, in der wir `10px` hinzufügen, um Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Versuchs-Fallback-Optionen es schafft, das positionierte Element vom Überlaufen abzuhalten, versucht der Browser schließlich die `--custom-bottom-right`-Position als letzten Ausweg. Dies platziert das positionierte Element rechts unten vom Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die initial auf das positionierte Element gesetzten Werte. Beispielsweise beträgt die initial auf das positionierte Element gesetzte `width` `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir innerhalb der benutzerdefinierten Positionsoptionen Werte festlegen, um die Anfangswerte auszuschalten. Die `--custom-bottom` und `--custom-right` Optionen verwenden Inset-Eigenschafts- und `*-self: anchor-center`-Werte, um das positionierte Element zu platzieren, daher entfernen wir in jedem Fall den zuvor eingestellten `position-area`-Wert, indem wir `position-area: none` setzen. Wenn wir dies nicht tun würden, würde der anfänglich gesetzte `position-area: top`-Wert noch wirksam bleiben und die anderen Positionierungsinformationen stören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try")}}
- Die {{cssxref("anchor()")}}-Funktion
- Die {{cssxref("anchor-size()")}}-Funktion
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
