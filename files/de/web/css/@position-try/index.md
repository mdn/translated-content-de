---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für die Positionierung zu definieren, die zur Festlegung von Positionierung und Ausrichtung für ankerpositionierte Elemente verwendet werden kann. Ein oder mehrere Sets von Fallback-Optionen können auf das verankerte Element über die {{cssxref("position-try-fallbacks")}} Eigenschaft oder den {{cssxref("position-try")}} Kurzschreibweise angewendet werden. Wenn das positionierte Element zu einer Position verschoben wird, in der es beginnt, seinen umgebenden Block oder das Viewport zu überlaufen, wählt der Browser die erste Fallback-Option, die das positionierte Element vollständig wieder auf dem Bildschirm platziert.

Jede Positionierungsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Rand, Größe und Selbst-Ausrichtung definieren. Der `<dashed-ident>` wird verwendet, um auf die benutzerdefinierte Positionierungsoption in der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("position-try")}} Kurzschreibweise zu verweisen.

Für detaillierte Informationen zu Ankereigenschaften und der Verwendung von Fallback-Optionen siehe die Modul-Startseite zur [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Anleitung zu Fallback-Optionen und bedingtem Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionierungsoption spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionierungsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Spezifiziert einen {{cssxref("position-anchor")}} Eigenschaftswert, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Spezifiziert einen {{cssxref("position-area")}} Eigenschaftswert, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Eingesetzte Eigenschaft")}} Deskriptoren
  - : Spezifizieren [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte, die die Positionierung der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Eingesetzte Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
  - : Spezifizieren den auf die ankerpositionierten Elemente gesetzten Rand. Rand-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
  - : Spezifizieren [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte, die die Größe des ankerpositionierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
- Selbst-Ausrichtungs-Eigenschaftsdeskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, um das ankerpositionierte Element relativ zum Mittelpunkt des Ankerelements auszurichten, in der Block- oder Inline-Richtung. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionierungsoption auf ein Element angewendet wird, haben die in der `@position-try` At-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über Standard-CSS-Eigenschaften auf das Element angewendet werden.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung benutzerdefinierter Positionierungsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element und erstellen vier benannte Positionierungs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass sein Inhalt jederzeit sichtbar ist, unabhängig davon, wo sich das Ankerelement innerhalb des Viewports befindet.

#### HTML

Wir schließen zwei {{htmlelement("div")}} Elemente ein, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zunächst gestalten wir das `<body>` Element sehr groß, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und ihm wird ein {{cssxref("position")}} Wert von `absolute` gesetzt. Wir positionieren es dann irgendwo in der Nähe der Mitte der anfänglichen `<body>` Darstellung mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Als nächstes definieren wir mit der `@position-try` At-Regel vier benutzerdefinierte Positionierungsoptionen mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede positioniert das positionierte Element an einer bestimmten Stelle um das Ankerelement und gibt ihm einen entsprechenden `10px` Abstand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weisen gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionierungsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionierungsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung am Anker zu zentrieren.
- Die dritte Positionierungsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, umwickelt in einer {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt wie die anderen Optionen den Abstand mit {{cssxref("margin")}} zu schaffen). Dann wird {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Block-Richtung am Anker zu zentrieren.

Abschließend werden den linken und rechten Positionierungsoptionen ein engeres {{cssxref("width")}} zugewiesen.

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

Dem Infobox wird eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den Anker-`anchor-name` referenziert, um die beiden zu verknüpfen, und sie wird an der oberen Kante des Ankers mit einer {{cssxref("position-area")}} verankert. Wir geben ihr auch eine feste {{cssxref("width")}} und einen unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionierungsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Sichtbereich gescrollt wird, wenn sich der Anker nahe am Rand des Viewports befindet.

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

Scrollen Sie die Seite und achten Sie auf die Änderung in der Platzierung des positionierten Elements, wenn sich der Anker den verschiedenen Rändern des Viewports nähert. Dies ist auf die Anwendung verschiedener Fallback-Positionierungsoptionen zurückzuführen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns durchsprechen, wie diese Positionierungsoptionen funktionieren:

- Zuerst einmal: Unsere Standardposition wird durch `position-area: top` definiert. Wenn die Infobox in keiner Richtung die Seite überläuft, befindet sich die Infobox über dem Anker, und die in der Eigenschaft `position-try-fallbacks` festgelegten Fallback-Positionierungsoptionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen festgelegten unteren Rand besitzt. Diese Werte ändern sich, wenn unterschiedliche Fallback-Positionierungsoptionen angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Dies verschiebt die Infobox auf die linke Seite des Ankers mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies verschiebt die Infobox unter den Anker mit `top` und `justify-self` anstelle einer `position-area` und stellt einen entsprechenden Rand ein. Es enthält keinen `width` Deskriptor, daher kehrt die Infobox zur Standardbreite von `200px` zurück, die durch die `width` Eigenschaft festgelegt wird.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element anstelle einer `position-area` zu platzieren. Und wir umschließen den `left` Wert in einer `calc()` Funktion, in der wir `10px` hinzufügen, um den Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen es erfolgreich verhindern, dass das positionierte Element überläuft, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies platziert das positionierte Element unten rechts am Anker mit `position-area: bottom right`.

Wenn eine Positionierungsoption angewendet wird, überschreiben ihre Werte die anfänglich auf das positionierte Element gesetzten Werte. Beispielsweise beträgt die anfänglich auf das positionierte Element gesetzte `width` `200px`, aber wenn die `--custom-right` Positionierungsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionierungsoptionen festlegen, um die ursprünglichen Werte zu deaktivieren. Die `--custom-bottom` und `--custom-right` Optionen verwenden eingesetzte Eigenschafts- und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area` Wert in jedem Fall, indem wir `position-area: none` festlegen. Wenn wir dies nicht tun würden, würde der anfänglich gesetzte `position-area: top` Wert immer noch wirksam sein und mit den anderen Positionierungsinformationen interferieren.

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
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
