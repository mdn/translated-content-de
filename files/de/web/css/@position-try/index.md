---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionsversuche zu definieren, die zur Festlegung von Positionierung und Ausrichtung für verankerungspositionierte Elemente verwendet werden kann. Ein oder mehrere Sätze von Fallback-Optionen für Positionsversuche können über die Eigenschaft {{cssxref("position-try-fallbacks")}} oder die Verkürzung {{cssxref("position-try")}} auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Position verschoben wird, an der es beginnt, seinen enthaltenen Block oder den Ansichtsbereich zu überlaufen, wählt der Browser die erste Fallback-Option für Positionsversuche, die das positionierte Element vollständig wieder auf dem Bildschirm platziert.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Descriptor-Liste, die Deklarationen angibt, die Informationen wie Einfügungsposition, Rand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Verkürzung {{cssxref("position-try")}} zu referenzieren.

Für detaillierte Informationen zu Verankerungsfunktionen und der Verwendung von Fallback-Optionen für Positionsversuche siehe die Modul-Startseite [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den Leitfaden [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Die `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, welche dann verwendet werden kann, um diese Fallback-Option zur Liste der {{cssxref("position-try-fallbacks")}} hinzuzufügen.

### Deskriptoren

Die Deskriptoren geben Eigenschaftswerte an, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo sie das positionierte Element platzieren wird.

- `position-anchor`
  - : Gibt einen Wert der Eigenschaft {{cssxref("position-anchor")}} an, der das Verankerungselement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert verwendet wird, der dem Eigenschaftswert {{cssxref("anchor-name")}} des Verankerungselements entspricht.
- `position-area`
  - : Gibt einen Wert der Eigenschaft {{cssxref("position-area")}} an, der die Position des verankerungspositionierten Elements relativ zur Verankerung definiert.
- {{Glossary("Inset_properties", "Einfügeigenschaften")}} Deskriptoren
  - : Spezifiziert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktionswerte, die die Position der Kanten des verankerungspositionierten Elements relativ zur Kante des Verankerungselements definieren. Einfügeigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
- Randeigenschaftsdeskriptoren
  - : Legt den Rand fest, der auf das verankerungspositionierte Element gesetzt wird. Randeigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
- Größeneigenschaftsdeskriptoren
  - : Spezifiziere [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktionswerte, die die Größe des verankerungspositionierten Elements relativ zur Verankerungselementgröße definieren. Größeneigenschaftsdeskriptoren können eingestellt werden, um die folgenden Eigenschaften darzustellen:
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
- Selbstalignment-Eigenschaftsdeskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)-Wert, um das verankerungspositionierte Element relativ zum Zentrum des Verankerungselements auszurichten, in der Block- oder Inlinerichtung. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center`-Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` At-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über Standard-CSS-Eigenschaften auf das Element gesetzt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Verankerungselement und ein verankerungspositioniertes Element und erstellen dann vier benannte benutzerdefinierte Fallback-Optionen für Positionsversuche. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalt immer sichtbar ist, egal wo sich das Verankerungselement innerhalb des Ansichtsbereichs befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente ein, die zu einem Verankerungselement und einem verankerungspositionierten Element werden sollen:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>`-Element sehr groß, sodass wir das Verankerungs- und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsbereich scrollen können:

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

Dem Verankerungselement wird ein {{cssxref("anchor-name")}} zugewiesen und es hat einen {{cssxref("position")}}-Wert von `absolute`. Wir positionieren es dann irgendwo nahe dem Zentrum des ursprünglichen `<body>`-Renderings, indem wir die Werte {{cssxref("top")}} und {{cssxref("left")}} verwenden:

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

Als nächstes verwenden wir die `@position-try` At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede dieser Optionen platziert das positionierte Element an einer bestimmten Position um das Verankerungselement herum und gibt ihm einen entsprechenden `10px`-Rand zwischen dem positionierten Element und seiner Verankerung. Die Positionierung wird auf verschiedene Arten gehandhabt, um die unterschiedlichen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inlinerichtung auf der Verankerung zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der in eine {{cssxref("calc()")}} Funktion gewickelt ist, die `10px` Abstand hinzufügt (anstatt den Abstand wie die anderen Optionen mit {{cssxref("margin")}} zu erstellen). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in der Blockrichtung auf der Verankerung zu zentrieren.

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

Dem Infofeld wird eine feste Positionierung gegeben, eine {{cssxref("position-anchor")}}-Eigenschaft, die die `anchor-name` der Verankerung referenziert, um die beiden zusammen zu assoziieren, und es ist an der oberen Kante der Verankerung mit einem {{cssxref("position-area")}} verankert. Wir geben ihm auch eine feste {{cssxref("width")}} und einige untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der Eigenschaft {{cssxref("position-try-fallbacks")}} referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Sichtbereich gescrollt wird, wenn die Verankerung der Kante des Sichtbereichs nahekommt.

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

Scrollen Sie die Seite und bemerken Sie die Änderung in der Platzierung des positionierten Elements, wenn sich die Verankerung den verschiedenen Kanten des Ansichtsbereichs nähert. Dies ist auf die Anwendung unterschiedlicher Fallback-Positionsoptionen zurückzuführen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zunächst sei darauf hingewiesen, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn das Infofeld in keiner Richtung die Seite überläuft, sitzt das Infofeld oberhalb der Verankerung und die in der Eigenschaft `position-try-fallbacks` festgelegten Positionsversuche werden ignoriert. Außerdem wird beachtet, dass das Infofeld eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn unterschiedliche Fallback-Positionsoptionen angewendet werden.
- Wenn das Infofeld überzuschreiten beginnt, versucht der Browser zuerst die Position `--custom-left`. Dies verschiebt das Infofeld zur linken Seite der Verankerung, indem `position-area: left` verwendet wird, passt den Rand entsprechend an und gibt dem Infofeld auch eine andere Breite.
- Danach versucht der Browser die Position `--custom-bottom`. Dies verschiebt das Infofeld zur Unterseite der Verankerung, indem `top` und `justify-self` anstelle eines `position-area` verwendet werden, und setzt einen entsprechenden Rand. Es enthält keinen `width`-Deskriptor, daher kehrt das Infofeld zur Standardbreite von `200px` zurück, die durch die `width`-Eigenschaft festgelegt wird.
- Der Browser versucht als nächstes die Position `--custom-right`. Dies funktioniert ähnlich wie die `--custom-left`-Position, wobei derselbe `width`-Deskriptorwert angewendet wird. Allerdings verwenden wir `left` und `align-self`, um das positionierte Element zu platzieren, anstatt ein `position-area`. Und wir umschließen den `left`-Wert in einer `calc()`-Funktion, innerhalb derer wir `10px` hinzufügen, um den Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen das Überlaufen des positionierten Elements verhindern kann, versucht der Browser als letzte Möglichkeit die Position `--custom-bottom-right`. Diese platziert das positionierte Element unten rechts der Verankerung mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die ursprünglich auf dem positionierten Element gesetzten Werte. Beispielsweise ist die `width`, die ursprünglich auf dem positionierten Element gesetzt ist, `200px`, aber wenn die `--custom-right`-Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die ursprünglichen Werte zu deaktivieren. Die `--custom-bottom`- und `--custom-right`-Optionen verwenden Inset-Eigenschafts- und `*-self: anchor-center`-Werte, um das positionierte Element zu platzieren. Daher entfernen wir den zuvor gesetzten `position-area`-Wert in jedem Fall, indem wir `position-area: none` festlegen. Würden wir das nicht tun, würde der ursprünglich gesetzte `position-area: top`-Wert weiterhin gelten und die anderen Positionierungsinformationen stören.

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
- [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
