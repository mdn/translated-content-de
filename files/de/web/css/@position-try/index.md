---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionsversuche zu definieren, die zur Definition von Positionierung und Ausrichtung für verankerte Elemente verwendet werden kann. Ein oder mehrere Sätze von Fallback-Optionen für Positionsversuche können auf das verankerte Element über die {{cssxref("position-try-fallbacks")}} Eigenschaft oder die {{cssxref("position-try")}} Kurzform angewendet werden. Wenn das positionierte Element an eine Position verschoben wird, an der es beginnt, seinen enthaltenden Block oder das Ansichtsfenster zu überlaufen, wählt der Browser die erste Fallback-Option für Positionsversuche, die er findet, um das positionierte Element vollständig zurück auf den Bildschirm zu bringen.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Descriptor-Liste, die Deklarationen spezifiziert, die Informationen wie Versatzposition, Rand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("position-try")}} Kurzform zu referenzieren.

Für detaillierte Informationen zu Verankerungsfunktionen und zur Verwendung von Fallback-Optionen für Positionsversuche, siehe die [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an dem das positionierte Element befestigt ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des Anker-verankerten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Inset property")}} Deskriptoren
  - : Spezifizieren [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte, die die Position der Kanten des Anker-verankerten Elements relativ zur Kante des Ankerelements definieren. Inset-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften repräsentieren:
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
- Rand-Property-Deskriptoren
  - : Spezifizieren den festgelegten Rand des Anker-verankerten Elements. Rand-Property-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften repräsentieren:
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
- Größen-Property-Deskriptoren
  - : Spezifizieren [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte, die die Größe des Anker-verankerten Elements relativ zur Ankerelementgröße definieren. Größen-Property-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften repräsentieren:
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
- Selbstausrichtung-Property-Deskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, um das Anker-verankerte Element relativ zur Mitte des Ankerelements im Block- oder Inline-Richtung auszurichten. Die {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center` Wert verwenden.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` At-Regel angegebenen Eigenschaftswerte Vorrang vor den Werten, die auf das Element über Standard-CSS-Eigenschaften gesetzt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein Anker-verankertes Element und erstellen dann vier benannte benutzerdefinierte Fallback-Optionen für Positionsversuche. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass seine Inhalte immer sichtbar sind, egal wo sich das Ankerelement innerhalb des Ansichtsfensters befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker und einem Anker-verankerten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>` Element sehr groß, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster scrollen können:

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

Der Anker erhält einen {{cssxref("anchor-name")}} und hat einen {{cssxref("position")}} Wert von `absolute` gesetzt. Wir positionieren ihn dann irgendwo in der Nähe der Mitte des anfänglichen `<body>` Renderings unter Verwendung der {{cssxref("top")}} und {{cssxref("left")}} Werte:

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
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Als nächstes verwenden wir die `@position-try` At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element an einer bestimmten Position um das Ankerelement herum und gibt ihm einen entsprechenden `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weise gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}} zum Zentrieren des positionierten Elements am Anker in der Inline-Richtung.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, der in eine {{cssxref("calc()")}} Funktion eingewickelt ist, die `10px` Abstand hinzufügt (anstatt den Abstand wie bei den anderen Optionen mit {{cssxref("margin")}} zu erzeugen). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}} zum Zentrieren des positionierten Elements am Anker in der Blockrichtung.

Schließlich erhalten die linken und rechten Positionsoptionen eine schmalere {{cssxref("width")}}.

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

Die Infobox bekommt eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden miteinander zu verbinden, und sie ist an der oberen Kante des Ankers mit einer {{cssxref("position-area")}} befestigt. Wir geben ihr auch eine feste {{cssxref("width")}} und einen unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blickfeld scrollt, wenn sich der Anker in der Nähe des Rands des Ansichtsfensters befindet.

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-fallbacks:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

#### Ergebnis

Scrollen Sie die Seite und beobachten Sie die Veränderung der Platzierung des positionierten Elements, wenn sich der Anker den verschiedenen Rändern des Ansichtsfensters nähert. Dies liegt daran, dass verschiedene Fallback-Positionsoptionen angewendet werden.

{{ EmbedLiveSample("Verwendung benutzerdefinierter Positionsoptionen", "100%", "250") }}

Lassen Sie uns darüber reden, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung die Seite überläuft, sitzt die Infobox über dem Anker, und die Fallback-Optionsversuche, die in der `position-try-fallbacks` Eigenschaft gesetzt sind, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Optionsversuche angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Dies bewegt die Infobox nach links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox nach unten zum Anker mit `top` und `justify-self` anstelle einer `position-area`, und setzt einen entsprechenden Rand. Es beinhaltet keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft festgelegt wurde.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert genauso wie die `--custom-left` Position, mit dem gleichen `width` Deskriptorwert. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstelle einer `position-area`. Und wir umhüllen den `left` Wert in einer `calc()` Funktion, innerhalb der wir `10px` hinzufügen, um eine Abstands zu erzeugen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionsversuche erfolgreich ist, um zu verhindern, dass das positionierte Element überläuft, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies platziert das positionierte Element unten rechts vom Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglich auf das positionierte Element gesetzten Werte. Beispielsweise ist die `width`, die anfänglich auf das positionierte Element gesetzt wird, `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` eingestellt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen setzen, um die anfänglich gesetzten Werte zu deaktivieren. Die `--custom-bottom` und `--custom-right` Optionen verwenden Inset-Property und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area` Wert in jedem Fall durch Setzen von `position-area: none`. Wenn wir das nicht tun, würde der anfänglich gesetzte Wert `position-area: top` weiterhin wirken und die anderen Positionierungsinformationen stören.

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
- [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
