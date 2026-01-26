---
title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`@position-try`**-[@-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) von [CSS](/de/docs/Web/CSS) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionierungsversuche zu definieren, die zur Definition von Positionierung und Ausrichtung für verankerte Elemente verwendet werden kann. Eine oder mehrere Sätze von Fallback-Optionen für Positionierungsversuche können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzform auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Stelle verschoben wird, an der es beginnt, seinen umgebenden Block oder das Ansichtsfenster zu überlaufen, wählt der Browser die erste Fallback-Option für den Positionierungsversuch, die das positionierte Element wieder vollständig auf dem Bildschirm platziert.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Beschreibungsliste mit Deklarationen, die Informationen wie Inset-Position, Rand, Größe und Eigen-Ausrichtung definieren. Das `<dashed-ident>` wird verwendet, um auf die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzform zu verweisen.

Für detaillierte Informationen zu Ankerfunktionen und der Nutzung von Fallback-Optionen für Positionierungsversuche siehe das Modul zur [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und den Leitfaden zu [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Das `--try-option-name` ist ein {{cssxref("dashed-ident")}}, das einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}}-Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren legen die Eigenschaftswerte fest, die das Verhalten der benutzerdefinierten Positionsoption definieren, also wo sie das positionierte Element platzieren wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}}-Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert angegeben wird, der dem Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}}-Eigenschaftswert an, der die Position des Anker-positionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}} Deskriptoren
  - : Geben [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktionswerte an, die die Position der Kanten des anker-positionierten Elements relativ zur Kante des Ankerelements definieren. Es können Inset-Eigenschaften-Deskriptoren gesetzt werden, die die folgenden Eigenschaften darstellen:
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
  - : Geben den Rand an, der auf das anker-positionierte Element gesetzt ist. Rand-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktionswerte an, die die Größe des anker-positionierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften darstellen:
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
- Eigen-Ausrichtungs-Eigenschaftsdeskriptoren
  - : Geben den [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert an, um das anker-positionierte Element relativ zur Mitte des Ankerelements in der Block- oder Inline-Richtung auszurichten. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn auf ein Element eine benutzerdefinierte Positionsoption angewendet wird, haben die in der `@position-try`-Regel beschriebenen Eigenschaftswerte Vorrang vor den Werten, die auf dem Element über standardmäßige CSS-Eigenschaften gesetzt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein anker-positioniertes Element, dann erstellen wir vier benannte benutzerdefinierte Fallback-Optionen für den Positionierungsversuch. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass sein Inhalt immer sichtbar bleibt, egal wo sich das Ankerelement im Ansichtsfenster befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker und einem anker-positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>` Element sehr groß, damit wir den Anker und das positionierte Element im Ansichtsfenster sowohl horizontal als auch vertikal scrollen können:

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

Der Anker erhält einen {{cssxref("anchor-name")}} und hat einen {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Wir positionieren ihn dann irgendwo nahe der Mitte der anfänglichen `<body>` Darstellung mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Als nächstes verwenden wir die `@position-try`-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element in einer bestimmten Position um das Ankerelement und gibt ihm einen passenden `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Arten gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der in einer {{cssxref("calc()")}} Funktion eingeschlossen ist, die `10px` Abstand hinzufügt (statt den Abstand wie die anderen Optionen mit {{cssxref("margin")}} zu schaffen). Dann wird {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Blockrichtung auf dem Anker zu zentrieren.

Schließlich erhalten die linken und rechten Positionsoptionen eine schmalere {{cssxref("width")}}

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden zu verknüpfen, und wird an der oberen Kante des Ankers mit einer {{cssxref("position-area")}} befestigt. Wir geben ihr auch eine feste {{cssxref("width")}} und etwas unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}} Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blickfeld gescrollt wird, wenn sich der Anker nahe dem Rand des Ansichtsfensters befindet.

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

Scrollen Sie die Seite und bemerken Sie die Veränderung der Platzierung des positionierten Elements, wenn sich der Anker den verschiedenen Kanten des Ansichtsfensters nähert. Dies liegt an den verschiedenen angewendeten Fallback-Positionierungsoptionen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns erklären, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht an irgendeiner Stelle der Seite überläuft, sitzt die Infobox über dem Anker und die in der `position-try-fallbacks`-Eigenschaft gesetzten Fallback-Positionierungsoptionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte werden sich ändern, wenn verschiedene Fallback-Positionierungsoptionen angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox nach links vom Anker unter Verwendung von `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unterhalb des Ankers unter Verwendung von `top` und `justify-self` anstelle eines `position-area`, und setzt einen passenden Rand. Sie enthält keinen `width`-Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width`-Eigenschaft gesetzt ist.
- Der Browser versucht dann die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left`-Position, mit dem gleichen `width`-Deskriptor-Wert angewendet. Allerdings verwenden wir `left` und `align-self`, um das positionierte Element statt einer `position-area` zu platzieren. Und wir umhüllen den `left`-Wert in einer `calc()` Funktion, innerhalb derer wir `10px` hinzufügen, um den Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, um das Überlaufen des positionierten Elements zu verhindern, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese platziert das positionierte Element unten rechts des Ankers unter Verwendung von `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglichen Werte, die auf das positionierte Element gesetzt wurden. Zum Beispiel, die anfänglich auf das positionierte Element gesetzte `width` ist `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen setzen, um die anfänglichen Werte auszuschalten. Die Optionen `--custom-bottom` und `--custom-right` verwenden Inset-Eigenschaften- und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren. Daher entfernen wir den zuvor gesetzten `position-area`-Wert in jedem Fall durch `position-area: none` setzen. Würden wir dies nicht tun, würde der anfänglich gesetzte `position-area: top` Wert weiterhin wirken und die andere Positionierungsinformation stören.

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
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Anwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
