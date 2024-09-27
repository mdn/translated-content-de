---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für die Positionierung zu definieren, welche zur Definition von Positionierung und Ausrichtung für ankerpositionierte Elemente genutzt werden kann. Einer oder mehrere Sätze von Fallback-Optionen für die Positionierung können auf das ankerpositionierte Element über die {{cssxref("position-try-fallbacks")}} Eigenschaft oder das {{cssxref("position-try")}} Kurzschreibweise angewendet werden. Wenn das positionierte Element an eine Position verschoben wird, bei der es beginnt, seinen umgebenden Block oder den Viewport zu überlaufen, wählt der Browser die erste Fallback-Option aus, die das positionierte Element vollständig zurück auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen angibt, die Informationen wie Einfügeposition, Rand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("position-try")}} Kurzschreibweise zu referenzieren.

Detaillierte Informationen zu Ankerfunktionen und der Verwendung von Fallback-Optionen finden Sie auf der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und im [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Die `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren geben Eigenschaftswerte an, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h., wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- [Einfügeigenschaft](/de/docs/Glossary/Inset_properties) Deskriptoren
  - : Geben [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte an, die die Position der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Einfügeigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
- Rand-Eigenschafts-Deskriptoren
  - : Geben den Rand an, der auf das ankerpositionierte Element gesetzt wird. Rand-Eigenschafts-Deskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
- Größen-Eigenschafts-Deskriptoren
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte an, die die Größe des ankerpositionierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschafts-Deskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
- Selbstausrichtungs-Eigenschafts-Deskriptoren
  - : Geben den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert an, um das ankerpositionierte Element relativ zur Mitte des Ankerelements auszurichten, in der Block- oder Inline-Richtung. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschafts-Deskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` At-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über Standard-CSS-Eigenschaften auf das Element gesetzt wurden.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von benutzerdefinierten Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element, und erstellen dann vier benannte benutzerdefinierte Fallback-Optionen für die Positionierung. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalt immer sichtbar bleibt, egal wo sich das Ankerelement im Viewport befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>` Element sehr groß, sodass wir den Anker und das positionierte Element im Viewport sowohl horizontal als auch vertikal scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und ein {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Wir positionieren es dann irgendwo nahe der Mitte der initialen `<body>` Darstellung mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Als Nächstes verwenden wir die `@position-try` At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element an einer bestimmten Position um das Ankerelement herum und gibt ihm einen angemessenen `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weise gehandhabt, um die unterschiedlichen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption nutzt {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung am Anker zu zentrieren.
- Die dritte Positionsoption nutzt {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, eingewickelt in eine {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie bei den anderen Optionen zu schaffen). Es wird dann {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Blockrichtung am Anker zu zentrieren.

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden zu verknüpfen, und sie wird an der oberen Kante des Ankers mit einem {{cssxref("position-area")}} verankert. Außerdem geben wir ihm eine feste {{cssxref("width")}} und einen unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Sichtfeld gescrollt wird, wenn der Anker sich nahe am Rand des Viewports befindet.

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

Scrollen Sie die Seite und beachten Sie die Änderung in der Platzierung des positionierten Elements, wenn sich der Anker den verschiedenen Rändern des Viewports nähert. Dies liegt daran, dass unterschiedliche Fallback-Positionsoptionen angewendet werden.

{{ EmbedLiveSample("Verwendung von benutzerdefinierten Positionsoptionen", "100%", "250") }}

Lassen Sie uns darüber sprechen, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in irgendeine Richtung über die Seite überläuft, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks` Eigenschaft gesetzten Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Optionsätze angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Dies bewegt die Infobox links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als Nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unter den Anker unter Verwendung von `top` und `justify-self` anstelle einer `position-area` und setzt einen entsprechenden Rand. Es beinhaltet keinen `width` Deskriptor, daher kehrt die Infobox zu ihrer ursprünglichen Breite von `200px` zurück, die durch die `width` Eigenschaft festgelegt wurde.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit dem gleichen `width` Deskriptorwert angewendet. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt eine `position-area` zu verwenden. Und wir verpacken den `left` Wert in eine `calc()` Funktion, in der wir `10px` hinzufügen, um den Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, um das positionierte Element am Überlaufen zu hindern, versucht der Browser als letzte Option die `--custom-bottom-right` Position. Dies platziert das positionierte Element rechts unten am Anker mit einer `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die initial auf das positionierte Element gesetzten Werte. Zum Beispiel ist die anfänglich auf das positionierte Element gesetzte `width` `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen setzen, um die Initialwerte auszuschalten. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einfügeigenschaften und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren. Daher entfernen wir den vorher gesetzten `position-area` Wert in jedem Fall, indem wir `position-area: none` setzen. Wenn wir das nicht tun würden, würde der initial gesetzte `position-area: top` Wert immer noch Wirkung zeigen und die anderen Positionsinformationen beeinträchtigen.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Overflow behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
