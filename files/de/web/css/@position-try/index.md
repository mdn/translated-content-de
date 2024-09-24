---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine benutzerdefinierte Positionierungsoption zu definieren, die als Fallback genutzt werden kann, um Positionierung und Ausrichtung von an Anker-Elementen positionierten Elementen festzulegen. Eine oder mehrere Sätze von Positionierungs-Fallback-Optionen können über die {{cssxref("position-try-fallbacks")}} Eigenschaft oder das {{cssxref("position-try")}} Kurzform-Eigenschaft auf das verankerte Element angewandt werden. Wenn das positionierte Element an eine Stelle verschoben wird, an der es den umgebenden Block oder den Ansichtsbereich überläuft, wählt der Browser die erste Fallback-Option, die das positionierte Element vollständig wieder auf dem Bildschirm platziert.

Jede Positionierungsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, welche Informationen wie Einfügeposition, Rand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("position-try")}} Kurzform zu referenzieren.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Positionierungs-Fallback-Optionen lesen Sie bitte die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Seite und den Leitfaden [Umgang mit Überfluss: Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h., wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}} Wert spezifiziert wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- [Einfügeigenschaft](/de/docs/Glossary/Inset_properties) Deskriptoren
  - : Spezifizieren [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte, die die Position der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Einfügeigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
  - : Spezifizieren den auf dem ankerpositionierten Element gesetzten Rand. Rand-Eigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
  - : Spezifiziere [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte, die die Größe des ankerpositionierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
- Selbstausrichtungs-Eigenschaftsdeskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert zur Ausrichtung des ankerpositionierten Elements relativ zur Mitte des Ankerelements, in Block- oder Inline-Richtung. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in den Deskriptoren der `@position-try` At-Regel definierten Eigenschaftswerte Vorrang vor den über Standard-CSS-Eigenschaften am Element gesetzten Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Positionsoption

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element und erstellen dann vier benannte, benutzerdefinierte Positionierungs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewandt, um sicherzustellen, dass dessen Inhalt immer sichtbar bleibt, egal, wo sich das Ankerelement im Ansichtsbereich befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>` Element sehr groß, sodass wir den Anker und das positionierte Element im Ansichtsbereich sowohl horizontal als auch vertikal scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und ihm wird ein {{cssxref("position")}} Wert von `absolute` gesetzt. Dann positionieren wir ihn irgendwo in der Nähe der Mitte der initialen `<body>` Darstellung mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Als nächstes verwenden wir die `@position-try` At-Regel, um vier benutzerdefinierte Positionsoptionen mit beschreibenden {{cssxref("dashed-ident")}} Namen zu definieren, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element in einer bestimmten Position um das Ankerelement und gibt ihm einen passenden `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weisen gehandhabt, um die verfügbaren Techniken zu demonstrieren:

- Die erste und die letzte Positionsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element im Inline-Richtung am Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, umhüllt von einer {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie die anderen Optionen zu erstellen). Dann verwendet sie {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element im Blockrichtung am Anker zu zentrieren.

Schließlich erhalten die linken und rechten Positionsoptionen eine schmalere {{cssxref("width")}}

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert und die beiden miteinander verbindet, und sie ist oben an die Kante des Ankers mit einer {{cssxref("position-area")}} angebunden. Wir geben ihr auch eine feste {{cssxref("width")}} und einige untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blick gescrollt wird, wenn der Anker in die Nähe des Randes des Ansichtsbereichs gelangt.

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

Scrollen Sie die Seite und bemerken Sie, wie sich die Platzierung des positionierten Elements ändert, wenn der Anker die verschiedenen Ränder des Ansichtsbereichs erreicht. Dies liegt an den unterschiedlichen angewandten Fallback-Positionierungsoptionen.

{{ EmbedLiveSample("Verwendung von benutzerdefinierten Positionsoptionen", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zuerst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht über die Seite hinausläuft, sitzt die Infobox über dem Anker und die Fallback-Positionierungsoptionen, die in der `position-try-fallbacks` Eigenschaft gesetzt sind, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Positionierungsoptionen angewendet werden.
- Wenn die Infobox anfängt zu überlaufen, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox nach links vom Anker, indem `position-area: left` verwendet wird, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Dann versucht der Browser die `--custom-bottom` Position. Diese verschiebt die Infobox nach unten vom Anker, indem `top` und `justify-self` anstatt einer `position-area` verwendet werden, und setzt einen entsprechenden Rand. Es enthält keinen `width` Deskriptor, sodass die Infobox auf ihre Standardbreite von `200px` zurückkehrt, die von der `width` Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert. Allerdings verwenden wir `left` und `align-self`, um das positionierte Element anstelle einer `position-area` zu platzieren. Und wir umhüllen den `left` Wert in einer `calc()` Funktion, in der wir `10px` hinzufügen, um den Abstand zu erstellen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, um das Überlaufen des positionierten Elements zu verhindern, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese platziert das positionierte Element unten rechts am Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die ursprünglich am positionierten Element gesetzten Werte. Zum Beispiel wurde die Breite für das positionierte Element ursprünglich auf `200px` gesetzt, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In manchen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die ursprünglichen Werte auszuschalten. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einfügeigenschafts- und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren. Daher entfernen wir den zuvor gesetzten `position-area` Wert in jedem Fall, indem wir `position-area: none` setzen. Würden wir das nicht tun, würde der ursprünglich gesetzte `position-area: top` Wert weiterhin wirken und die anderen Positionierungsinformationen stören.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try")}}
- Die {{cssxref("anchor()")}} Funktion
- Die {{cssxref("anchor-size()")}} Funktion
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überfluss: Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- {{domxref("CSSPositionTryRule")}}
