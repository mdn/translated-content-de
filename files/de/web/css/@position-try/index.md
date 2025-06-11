---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Positionsversuchs-Fallback-Option zu definieren, die zur Definition von Position und Ausrichtung für verankerte Elemente verwendet werden kann. Eine oder mehrere Sets von Positionsversuchs-Fallback-Optionen können auf das verankerte Element über die Eigenschaft {{cssxref("position-try-fallbacks")}} oder die Abkürzung {{cssxref("position-try")}} angewendet werden. Wenn das positionierte Element an eine Position verschoben wird, an der es beginnt, seinen umgebenden Block oder den Viewport zu überlaufen, wählt der Browser die erste Positionsversuchs-Fallback-Option, die er findet, die das positionierte Element vollständig zurück auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Rand, Größe und Selbstausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Abkürzung {{cssxref("position-try")}} zu referenzieren.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Positionsversuchs-Fallbacks siehe die Modul-Startseite [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Anleitung zu Fallback-Optionen und bedingtem Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE] > `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur Liste {{cssxref("position-try-fallbacks")}} hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen Wert der {{cssxref("position-anchor")}} Eigenschaft an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem Wert der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements entspricht.
- `position-area`
  - : Gibt einen Wert der {{cssxref("position-area")}} Eigenschaft an, der die Position des verankerten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Einfügeeigenschaft")}} Deskriptoren
  - : Bestimmen [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte, die die Position der Kanten des verankerten Elements relativ zur Kante des Ankerelements definieren. Einfügeeigenschaft Deskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Bestimmen den auf das verankerte Element gesetzten Rand. Rand-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Bestimmen [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte, die die Größe des verankerten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Bestimmen den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, um das verankerte Element relativ zur Mitte des Ankerelements sowohl in Block- als auch in Inline-Richtung auszurichten. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` at-rule definierten Eigenschaftswerte Vorrang vor den Werten, die auf das Element über standardmäßige CSS-Eigenschaften gesetzt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement sowie ein verankertes Element und erstellen vier benannte benutzerdefinierte Positionsversuchs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass deren Inhalt immer sichtbar ist, unabhängig davon, wo sich das Ankerelement im Viewport befindet.

#### HTML

Wir inkludieren zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem verankerten Element werden sollen:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>` Element sehr groß, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} gegeben und es hat einen {{cssxref("position")}} Wert von `absolute` gesetzt. Wir positionieren es dann irgendwo in der Nähe der Mitte der anfänglichen `<body>` Darstellung mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Anschließend verwenden wir die `@position-try` at-rule, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede dieser Optionen platziert das positionierte Element an einer spezifischen Position um das Ankerelement herum und gibt ihm einen angemessenen `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weisen gehandhabt, um die unterschiedlichen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inlinerichtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, eingekapselt in eine {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie die anderen Optionen zu erstellen). Es verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in der Blockrichtung auf dem Anker zu zentrieren.

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

Das Info-Box wird mit fixer Positionierung, einer {{cssxref("position-anchor")}} Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden zu verbinden, versehen, und sie wird an der oberen Kante des Ankers mit einer {{cssxref("position-area")}} befestigt. Wir geben ihr auch eine feste {{cssxref("width")}} und einige untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der Eigenschaft {{cssxref("position-try-fallbacks")}} referenziert, um zu verhindern, dass das positionierte Element überläuft oder beim Scrollen aus dem Sichtfeld gerät, wenn der Anker in die Nähe des Randes des Viewports kommt.

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

Scrollen Sie die Seite und bemerken Sie die Veränderung der Platzierung des positionierten Elements, sobald der Anker in die Nähe der verschiedenen Ränder des Viewports gerät. Dies liegt an den unterschiedlichen Fallback-Positionsoptionen, die angewendet werden.

{{ EmbedLiveSample("Verwendung benutzerdefinierter Positionsoptionen", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zuerst einmal beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in irgendeine Richtung überläuft, sitzt die Infobox oberhalb des Ankers, und die Positionsversuchs-Fallback-Optionen, die in der Eigenschaft `position-try-fallbacks` festgelegt sind, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte werden sich ändern, wenn unterschiedliche Positionsversuchs-Fallback-Optionen angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als Nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unter den Anker mit `top` und `justify-self` statt einer `position-area` und setzt einen geeigneten Rand. Es enthält keinen `width` Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die Eigenschaft `width` festgelegt wurde.
- Der Browser versucht als Nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptor-Wert. Jedoch verwenden wir `left` und `align-self`, um das positionierte Element zu platzieren, anstatt einer `position-area`. Und wir kapseln den `left` Wert in eine `calc()` Funktion ein, in der wir `10px` Abstand hinzufügen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, das positionierte Element vom Überlaufen abzuhalten, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese platziert das positionierte Element rechts unten des Ankers mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglich auf dem positionierten Element gesetzten Werte. Zum Beispiel ist die initial auf dem positionierten Element gesetzte `width` `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die anfänglichen Werte zu deaktivieren. Die Optionen `--custom-bottom` und `--custom-right` verwenden Einfügeeigenschaft und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area` Wert in jedem Fall, indem wir `position-area: none` setzen. Würden wir dies nicht tun, hätte der anfänglich gesetzte `position-area: top` Wert weiterhin Effekt und würde mit den anderen Positionierungsinformationen kollidieren.

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
- [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
