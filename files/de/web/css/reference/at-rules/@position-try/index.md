---
title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) wird verwendet, um eine benutzerdefinierte Positionsversuchs-Fallback-Option zu definieren, die dazu verwendet werden kann, Positionierung und Ausrichtung für Anker-positionierte Elemente zu definieren. Ein oder mehrere Sätze von Positionsversuchs-Fallback-Optionen können auf das verankerte Element über die {{cssxref("position-try-fallbacks")}} Eigenschaft oder die {{cssxref("position-try")}} Kurzschreibweise angewendet werden. Wenn das positionierte Element in eine Position bewegt wird, bei der es beginnt, seinen umgebenden Block oder das Viewport zu überfluten, wählt der Browser die erste gefundene Positionsversuchs-Fallback-Option, die das positionierte Element vollständig wieder auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Descriptor-Liste, die Deklarationen spezifiziert, die Informationen wie Inset-Position, Rand, Größe und eigene Ausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("position-try")}} Kurzschreibweise zu referenzieren.

Für detaillierte Informationen zu Ankerfeatures und der Verwendung von Positionsversuchs-Fallback, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und die ["Fallback-Optionen und bedingtes Verbergen bei Überlauf"](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo sie das positionierte Element platzieren wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem Wert der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des Anker-positionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Inset-Eigenschaft")}} Deskriptoren
  - : Geben [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktionswerte an, die die Position der Kanten des Anker-positionierten Elements relativ zur Kante des Ankerelements definieren. Inset-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
    - {{cssxref("top")}}
    - {{cssxref("left")}}
    - {{cssxref("bottom")}}
    - {{cssxref("right")}}.
    - {{cssxref("inset-block-start")}}
    - {{cssxref("inset-block-end")}}
    - {{cssxref("inset-inline-start")}}
    - {{cssxref("inset-inline-end")}}
    - {{cssxref("inset-block")}}
    - {{cssxref("inset-inline")}}
    - {{cssxref("inset")}}
- Rand-Eigenschaftsdeskriptoren
  - : Geben den Rand an, der auf das Anker-positionierte Element gesetzt wird. Rand-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
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
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktionswerte an, die die Größe des Anker-positionierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
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
- Eigene Ausrichtungsdeskriptoren
  - : Geben Sie den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert an, um das Anker-positionierte Element relativ zum Zentrum des Ankerelements in Block- oder Inline-Richtung auszurichten. Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}} können den `anchor-center` Wert nehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` at-rule festgelegten Eigenschaftswerte Vorrang vor den Werten, die auf das Element über Standard-CSS-Eigenschaften gesetzt wurden.

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Verwendung der benutzerdefinierten Positionsoption

In diesem Beispiel definieren wir ein Ankerelement und ein Anker-positioniertes Element und erstellen dann vier benannte benutzerdefinierte Positionsversuchs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalt immer sichtbar ist, unabhängig davon, wo sich das Ankerelement im Viewport befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein, die zu einem Anker und einem Anker-positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst stylen wir das `<body>` Element sehr groß, sodass wir den Anker und das positionierte Element im Viewport, sowohl horizontal als auch vertikal, scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} gegeben und es wird ein {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Wir positionieren es dann irgendwo in der Nähe des Zentrums der initialen `<body>` Darstellung, indem wir {{cssxref("top")}} und {{cssxref("left")}} Werte verwenden:

```css
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Anschließend verwenden wir die `@position-try` at-rule, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede von ihnen platziert das positionierte Element an einer spezifischen Position um das Ankerelement herum und gibt ihm einen entsprechenden `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weise gehandhabt, um die unterschiedlichen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, umrahmt von einer {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand wie die anderen Optionen mit {{cssxref("margin")}} zu erzeugen). Dann wird {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Blockrichtung auf dem Anker zu zentrieren.

Schließlich werden die Positionen links und rechts mit einer schmaleren {{cssxref("width")}}

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin-right: 10px;
}

@position-try --custom-bottom {
  top: anchor(bottom);
  justify-self: anchor-center;
  margin-top: 10px;
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

Der Infokasten erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den Anker des `anchor-name` referenziert, um die zwei miteinander zu verknüpfen, und es wird mit der oberen Kante des Ankers verbunden, indem ein {{cssxref("position-area")}} verwendet wird. Wir geben ihm auch eine feste {{cssxref("width")}} und einen gewissen unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Sichtbereich gescrollt wird, wenn der Anker nahe an den Rand des Viewports kommt.

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin-bottom: 10px;
  position-try-fallbacks:
    --custom-left, --custom-bottom, --custom-right, --custom-bottom-right;
}
```

#### Ergebnis

Scrollen Sie die Seite und bemerken Sie die Veränderung in der Positionierung des Elements, wenn sich der Anker den verschiedenen Kanten des Viewports nähert. Dies ist darauf zurückzuführen, dass unterschiedliche Fallback-Positionen angewendet werden.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns erklären, wie diese Positionsoptionen funktionieren:

- Zuerst einmal beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn der Infokasten nicht in irgendeine Richtung überläuft, sitzt der Infokasten oberhalb des Ankers, und die in der `position-try-fallbacks` Eigenschaft festgelegten Positionsversuchs-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass der Infokasten eine feste Breite und einen unteren Rand gesetzt hat. Diese Werte ändern sich, wenn unterschiedliche Positionsversuchs-Fallback-Optionen angewendet werden.
- Wenn der Infokasten anfängt überzulaufen, versucht der Browser zuerst die `--custom-left` Position. Dies verschiebt den Infokasten nach links des Ankers, verwendet `position-area: left`, passt den Rand entsprechend an und gibt dem Infokasten auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies verschiebt den Infokasten nach unten des Ankers, verwendet `top` und `justify-self` anstelle eines `position-area` und setzt einen entsprechenden Rand. Es beinhaltet keinen `width` Deskriptor, sodass der Infokasten zu seiner Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert fast genauso wie die `--custom-left` Position, mit demselben `width` Deskriptor-Wert. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt eines `position-area`. Und wir umrahmen den `left` Wert in einer `calc()` Funktion, in der wir `10px` hinzufügen, um den Abstand zu erzeugen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen Erfolg hat, das positionierte Element am Überlaufen zu hindern, versucht der Browser als letzten Ausweg die `--custom-bottom-right` Position. Dies platziert das positionierte Element unten-rechts des Ankers mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglich auf das positionierte Element gesetzten Werte. Zum Beispiel ist die anfänglich auf das positionierte Element gesetzte `width` `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die anfänglichen Werte auszuschalten. Die Optionen `--custom-bottom` und `--custom-right` verwenden Inset-Eigenschafts- und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir in jedem Fall die vorher gesetzten `position-area` Werte, indem wir `position-area: none` setzen. Wenn wir das nicht tun würden, würde der anfangs gesetzte `position-area: top` Wert weiterhin wirksam sein und die anderen Positionsinformationen beeinträchtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try")}}
- Die {{cssxref("anchor()")}} Funktion
- Die {{cssxref("anchor-size()")}} Funktion
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- ["Fallback-Optionen und bedingtes Verbergen bei Überlauf"](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
