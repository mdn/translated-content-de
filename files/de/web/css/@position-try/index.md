---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Position-Try-Backup-Option zu definieren, die zur Definition von Positionierung und Ausrichtung für Anker-positionierte Elemente verwendet werden kann. Ein oder mehrere Sets von Position-Try-Backup-Optionen können über die Eigenschaft {{cssxref("position-try-fallbacks")}} oder die Kurzform {{cssxref("position-try")}} auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Stelle verschoben wird, an der es über seinen enthaltenen Block oder den Viewport hinausgeht, wählt der Browser die erste gefundene Position-Try-Backup-Option, die das positionierte Element vollständig zurück auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Beschreibungs-Liste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Abstand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Kurzform {{cssxref("position-try")}} zu referenzieren.

Für detaillierte Informationen zu Anker-Funktionen und der Nutzung von Position-Try-Backup-Optionen siehe die [CSS-Anker-Positionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Backup-Optionen und bedingten Ausblendung bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Die `--try-option-name` ist ein {{cssxref("dashed-ident")}}, das einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, der dann verwendet werden kann, um diese Backup-Option zur {{cssxref("position-try-fallbacks")}} Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo sie das positionierte Element platziert.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element angebunden ist, indem ein {{cssxref("dashed-ident")}} Wert angegeben wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des Anker-positionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Einfügeigenschafts")}} Deskriptoren
  - : Geben [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte an, die die Position der Kanten des Anker-positionierten Elements relativ zur Kante des Ankerelements definieren. Einfügeigenschafts-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften darstellen:
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
- Abstandseigenschafts-Deskriptoren
  - : Geben den Abstand an, der auf das Anker-positionierte Element gesetzt ist. Abstandseigenschafts-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften darstellen:
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
- Größeneigenschafts-Deskriptoren
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte an, die die Größe des Anker-positionierten Elements relativ zur Größe des Ankerelements definieren. Größeneigenschafts-Deskriptoren können so festgelegt werden, dass sie die folgenden Eigenschaften darstellen:
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
- Selbstausrichtungseigenschafts-Deskriptoren
  - : Geben den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert an, um das Anker-positionierte Element relativ zum Mittelpunkt des Ankerelements in Block- oder Inline-Richtung auszurichten. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschafts-Deskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` at-rule Deskriptor definierten Eigenschaften Vorrang vor den über standardmäßige CSS-Eigenschaften auf das Element gesetzten Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Nutzung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein Anker-positioniertes Element und erstellen dann vier benannte benutzerdefinierte Position-Try-Backup-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass seine Inhalte immer sichtbar sind, egal wo sich das Ankerelement innerhalb des Viewports befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker- und einem Anker-positionierten Element werden:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und es wird ein {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Dann positionieren wir es irgendwo in der Nähe der Mitte der anfänglichen `<body>` Darstellung, indem wir {{cssxref("top")}} und {{cssxref("left")}} Werte verwenden:

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

Als nächstes verwenden wir die `@position-try` at-rule, um vier benutzerdefinierte Positionsoptionen mit beschreibenden {{cssxref("dashed-ident")}} Namen zu definieren, um sie zu identifizieren und ihren Zweck zu beschreiben. Jeder von ihnen platziert das positionierte Element an einer bestimmten Stelle um das Ankerelement herum und gibt ihm einen passenden `10px` Abstand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weise gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoptionen verwenden einen {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, der in einer {{cssxref("calc()")}} Funktion umschlossen ist, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie die anderen Optionen zu erzeugen). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in der Block-Richtung auf dem Anker zu zentrieren.

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den Anker `anchor-name` referenziert, um die beiden miteinander zu verbinden, und es wird an der oberen Kante des Ankers mit einem {{cssxref("position-area")}} verankert. Wir geben ihr außerdem eine feste {{cssxref("width")}} und einige untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blick gescrollt wird, wenn der Anker in die Nähe des Rands des Viewports kommt.

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

Scrollen Sie die Seite und bemerken Sie die Änderung in der Platzierung des positionierten Elements, wenn der Anker sich den verschiedenen Kanten des Viewports nähert. Dies liegt daran, dass verschiedene Backup-Positionsoptionen angewendet werden.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zuerst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keine Richtung über die Seite hinausgeht, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks` Eigenschaft festgelegten Position-Try-Backup-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen festgelegten Bottom-Abstand hat. Diese Werte ändern sich, wenn verschiedene Position-Try-Backup-Optionen angewendet werden.
- Wenn die Infobox anfängt überzulaufen, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox nach links vom Anker mit `position-area: left`, passt den Abstand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox nach unten vom Anker, indem `top` und `justify-self` anstelle eines `position-area` verwendet werden, und setzt einen passenden Abstand. Es beinhaltet keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert weitgehend wie die `--custom-left` Position, wobei derselbe `width` Deskriptor-Wert angewendet wird. Allerdings verwenden wir `left` und `align-self`, um das positionierte Element zu platzieren, anstelle eines `position-area`. Und wir umschließen den `left` Wert in einer `calc()` Funktion innerhalb derer wir `10px` hinzufügen, um Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Try-Backup-Optionen erfolgreich ist, das positionierte Element daran zu hindern, überzulaufen, versucht der Browser als letzten Ausweg die `--custom-bottom-right` Position. Diese platziert das positionierte Element unten rechts vom Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglichen Werte, die auf das positionierte Element festgelegt sind. Zum Beispiel ist die anfänglich auf das positionierte Element festgelegte `width` `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird seine Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die anfänglichen Werte auszuschalten. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einfügeigenschafts- und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir in jedem Fall den zuvor festgelegten `position-area` Wert, indem wir `position-area: none` festlegen. Wenn wir das nicht tun würden, würde der anfänglich festgelegte `position-area: top` Wert weiterhin Wirkung zeigen und die anderen Positionierungsinformationen stören.

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
- [CSS-Anker-Positionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Backup-Optionen und bedingte Ausblendung bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
