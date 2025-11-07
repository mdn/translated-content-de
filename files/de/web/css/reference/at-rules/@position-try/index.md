---
title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionierungsversuche zu definieren, die zur Festlegung von Positionierung und Ausrichtung für Anker-Positionierte Elemente verwendet werden kann. Eine oder mehrere Sätze von Fallback-Optionen für Positionierungsversuche können auf das verankerte Element über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzschreibweise angewendet werden. Wenn das positionierte Element in eine Position verschoben wird, bei der es beginnt, seinen enthaltenden Block oder das Ansichtsfenster zu überlaufen, wählt der Browser die erste Fallback-Option für Positionierungsversuche, die er findet, um das positionierte Element vollständig zurück auf den Bildschirm zu bringen.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Rand, Größe und Selbst-Ausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzschreibweise zu referenzieren.

Für detaillierte Informationen zu Anker-Features und der Verwendung von Fallback-Optionen für Positionierungsversuche lesen Sie bitte die [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modulstartseite und den [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Die `--try-option-name` ist ein {{cssxref("dashed-ident")}}, das einen identifizierenden Namen für die benutzerdefinierte Positionsoption spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}}-Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}}-Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert angegeben wird, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}}-Eigenschaftswert an, der die Position des Anker-Positionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Einfügen Eigenschaft")}} Deskriptoren
  - : Legen `anchor()`-Funktionswerte fest, die die Position der Kanten des Anker-Positionierten Elements relativ zur Kante des Ankerelements definieren. Einfügen-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
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
- Rand Eigenschaft Deskriptoren
  - : Geben den Rand an, der auf das Anker-Positionierte Element gesetzt ist. Rand-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
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
- Größendefinition Eigenschaftsdeskriptoren
  - : Geben `anchor-size()`-Funktionswerte an, die die Größe des Anker-Positionierten Elements relativ zur Größe des Ankerelements definieren. Größendefinitions-Eigenschaftsdeskriptoren können festgelegt werden, die die folgenden Eigenschaften darstellen:
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
- Selbst-Ausrichtung Eigenschaftsdeskriptoren
  - : Geben den `anchor-center`-Wert an, um das Anker-Positionierte Element relativ zur Mitte des Ankerelements in Block- oder Inline-Richtung auszurichten. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaftsdeskriptoren können den `anchor-center`-Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try`-At-Regel definierten Eigenschaftswerte Vorrang vor den Werten, die über Standard-CSS-Eigenschaften auf dem Element festgelegt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Positionsoption

In diesem Beispiel definieren wir ein Ankerelement und ein Anker-Positioniertes Element und erstellen dann vier benannte benutzerdefinierte Fallback-Optionen für Positionierungsversuche. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass seine Inhalte immer sichtbar sind, egal wo sich das Ankerelement im Ansichtsfenster befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente hinzu, die zum Anker und zum Anker-Positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Zuerst gestalten wir das `<body>`-Element sehr groß, sodass wir den Anker und das positionierte Element im Ansichtsfenster sowohl horizontal als auch vertikal bewegen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} gegeben und ein {{cssxref("position")}}-Wert von `absolute` darauf gesetzt. Wir positionieren es dann irgendwo in der Nähe der Mitte der anfänglichen `<body>`-Darstellung unter Verwendung von {{cssxref("top")}} und {{cssxref("left")}}-Werten:

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

Als nächstes verwenden wir die `@position-try`-At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element in einer bestimmten Position um das Ankerelement und gibt ihm einen entsprechenden Rand von `10px` zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Arten gehandhabt, um die verfügbaren unterschiedlichen Techniken zu demonstrieren:

- Die erste und letzte Positionsoptionen verwenden eine {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element inline auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, eingebettet in eine {{cssxref("calc()")}}-Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie die anderen Optionen zu erzeugen). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in Block-Richtung auf dem Anker zu zentrieren.

Schließlich werden die linken und rechten Positionsoptionen mit einer schmäleren {{cssxref("width")}} versehen.

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die den Anker des `anchor-name` referenziert, um die beiden miteinander zu verknüpfen, und ist an der oberen Kante des Ankers mit einer {{cssxref("position-area")}} verankert. Wir geben ihr auch eine feste {{cssxref("width")}} und etwas unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blickfeld gescrollt wird, wenn sich der Anker in der Nähe des Randes des Ansichtsfensters befindet.

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

Scrollen Sie die Seite und beachten Sie die Änderung der Platzierung des positionierten Elements, während sich der Anker den verschiedenen Rändern des Ansichtsfensters nähert. Dies liegt daran, dass unterschiedliche Fallback-Positionierungsoptionen angewendet werden.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns darüber sprechen, wie diese Positionsoptionen funktionieren:

- Zuerst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in irgendeine Richtung über die Seite herausragt, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks`-Eigenschaft festgelegten Fallback-Positionierungsoptionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Optionen für Positionierungsversuche angewendet werden.
- Wenn die Infobox zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unten am Anker unter Verwendung von `top` und `justify-self` anstelle von `position-area` und setzt einen entsprechenden Rand. Es gibt keinen `width`-Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft festgelegt wird.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width`-Deskriptorwert. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt einer `position-area`. Und wir umschließen den `left`-Wert in einer `calc()`-Funktion, in der wir `10px` hinzufügen, um den Abstand zu erzeugen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich das Überlaufen des positionierten Elements verhindert, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese platziert das positionierte Element unten rechts am Anker unter Verwendung von `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die anfänglich auf dem positionierten Element festgelegten Werte. Beispielsweise ist die `width`, die auf dem positionierten Element zunächst festgelegt wurde, `200px`, aber wenn die `--custom-right`-Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen festlegen, um die anfänglichen Werte zu deaktivieren. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einfüge-Eigenschaften und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor festgelegten `position-area` Wert in jedem Fall durch Setzen von `position-area: none`. Wenn wir dies nicht tun würden, würde der anfänglich gesetzte Wert `position-area: top` weiterhin wirksam sein und die andere Positionierungsinformationen beeinträchtigen.

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
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
