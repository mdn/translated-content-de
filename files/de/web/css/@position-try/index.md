---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionierungen zu definieren, die zur Definition von Positionierung und Ausrichtung für Anker-Positionierungselemente genutzt werden kann. Eine oder mehrere Fallback-Optionen für `position-try` können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die Abkürzung {{cssxref("position-try")}} auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Stelle verschoben wird, an der es beginnt, aus dem enthaltenden Block oder dem Sichtfenster herauszuragen, wählt der Browser die erste Fallback-Option aus, die das positionierte Element vollständig zurück auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Liste von Deskriptoren, die Definitionen wie Einfügeposition, Rand, Größenanpassung und Selbstausrichtung angeben. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der Kurzform {{cssxref("position-try")}} zu referenzieren.

Für detaillierte Informationen über Ankerfunktionen und die Verwendung von Fallback-Optionen besuchen Sie die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den Leitfaden [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> `--try-option-name` ist ein {{cssxref("dashed-ident")}}, das einen Namen für die benutzerdefinierte Positionsoption angibt, die dann der Liste der {{cssxref("position-try-fallbacks")}} hinzugefügt werden kann.

### Deskriptoren

Die Deskriptoren definieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption festlegen, d. h., wohin das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}}-Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert angegeben wird, der dem {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}}-Eigenschaftswert an, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}} Deskriptoren
  - : Geben Werte der Funktion [`anchor()`](/de/docs/Web/CSS/anchor) an, die die Position der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Inset-Eigenschaften-Deskriptoren können für die folgenden Eigenschaften festgelegt werden:
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
- Rand-Eigenschaften-Deskriptoren
  - : Geben den Randwert an, der für das ankerpositionierte Element festgelegt ist. Rand-Eigenschaften-Deskriptoren können für die folgenden Eigenschaften festgelegt werden:
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
- Größenanpassung-Eigenschaften-Deskriptoren
  - : Geben Werte der Funktion [`anchor-size()`](/de/docs/Web/CSS/anchor-size) an, die die Größe des ankerpositionierten Elements relativ zur Größe des Ankerelements definieren. Größenanpassung-Eigenschaften-Deskriptoren können für die folgenden Eigenschaften festgelegt werden:
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
- Selbstausrichtungs-Eigenschaften-Deskriptoren
  - : Geben den Wert [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) an, um das ankerpositionierte Element relativ zur Mitte des Ankerelements in Block- oder Inline-Richtung auszurichten. Die Eigenschaften-Deskriptoren {{cssxref("align-self")}} und {{cssxref("justify-self")}} können den Wert `anchor-center` annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die von den Deskriptoren der `@position-try`-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über standardmäßige CSS-Eigenschaften auf das Element gesetzt wurden.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von benutzerdefinierten Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element und erstellen dann vier benannte benutzerdefinierte Fallback-Positionierungsoptionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass sein Inhalt immer sichtbar bleibt, egal wo sich das Ankerelement im Sichtfenster befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente ein, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten zunächst das `<body>`-Element so, dass es sehr groß ist, damit wir den Anker und das positionierte Element horizontal und vertikal im Sichtfenster verschieben können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und es wird eine {{cssxref("position")}}-Eigenschaft mit dem Wert `absolute` darauf gesetzt. Wir positionieren es dann irgendwo in der Nähe der Mitte der anfänglichen `<body>`-Rendering mittels {{cssxref("top")}}- und {{cssxref("left")}}-Werten:

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

Anschließend verwenden wir die `@position-try`-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede Option platziert das positionierte Element in einer bestimmten Position um das Ankerelement und gibt ihm einen passenden `10px`-Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weise gehandhabt, um die verfügbaren Techniken zu demonstrieren:

- Die erste und die letzte Positionsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung am Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der innerhalb einer {{cssxref("calc()")}}-Funktion eingewickelt ist, die `10px` Abstand hinzufügt (anstelle des Abstands mit {{cssxref("margin")}} wie bei den anderen Optionen). Es wird dann {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Blockrichtung am Anker zu zentrieren.

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

Das Infokästchen erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden miteinander zu verknüpfen, und es wird mit der oberen Kante des Ankers über eine {{cssxref("position-area")}} verbunden. Außerdem geben wir ihm eine feste {{cssxref("width")}} und eine untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blickfeld gescrollt wird, wenn sich der Anker nahe an den Rand des Sichtfensters bewegt.

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

Scrollen Sie die Seite und bemerken Sie die Änderung in der Platzierung des positionierten Elements, wenn sich der Anker an den verschiedenen Rändern des Sichtfensters nähert. Dies ist auf die Anwendung verschiedener Fallback-Positionsoptionen zurückzuführen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns durchgehen, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn das Infokästchen nicht in irgendeine Richtung überläuft, sitzt das Infokästchen oberhalb des Ankers, und die in der `position-try-fallbacks`-Eigenschaft gesetzten Fallback-Positionsoptionen werden ignoriert. Beachten Sie auch, dass das Infokästchen eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Positionsoptionen angewendet werden.
- Wenn das Infokästchen zu überlaufen beginnt, versucht der Browser zuerst die Position `--custom-left`. Dadurch wird das Infokästchen mit `position-area: left` an die linke Seite des Ankers verschoben, der Rand entsprechend angepasst und dem Infokästchen eine andere Breite gegeben.
- Als nächstes versucht der Browser die Position `--custom-bottom`. Dadurch wird das Infokästchen mit `top` und `justify-self` an die untere Seite des Ankers verschoben, anstatt eine `position-area` zu verwenden, und ein geeigneter Rand gesetzt. Es enthält keinen `width`-Deskriptor, sodass das Infokästchen zu seiner Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft gesetzt wurde.
- Der Browser versucht dann die Position `--custom-right`. Dies funktioniert ähnlich wie die Position `--custom-left`, wobei derselbe `width`-Deskriptorwert angewendet wird. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt eine `position-area`. Und wir wickeln den `left`-Wert in eine `calc()`-Funktion ein, in der wir `10px` hinzufügen, um Abstände zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, um zu verhindern, dass das positionierte Element überläuft, versucht der Browser als letzten Ausweg die Position `--custom-bottom-right`. Dadurch wird das positionierte Element mit `position-area: bottom right` unten rechts zum Anker platziert.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglich auf das positionierte Element gesetzten Werte. Beispielsweise wird die Breite, die ursprünglich auf das positionierte Element gesetzt wurde, auf `200px` eingestellt, aber wenn die Positionsoption `--custom-right` angewendet wird, wird ihre Breite auf `100px` festgelegt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen einstellen, um die anfänglich gesetzten Werte zu deaktivieren. Die Optionen `--custom-bottom` und `--custom-right` verwenden Inset-Eigenschafts- und `*-self: anchor-center`-Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area`-Wert in jedem Fall, indem wir `position-area: none` setzen. Wenn wir dies nicht tun würden, würde der anfänglich gesetzte Wert `position-area: top` weiterhin wirksam bleiben und die anderen Positionierungsinformationen beeinträchtigen.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
