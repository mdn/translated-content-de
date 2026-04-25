---
title: "`@position-try` CSS at-rule"
short-title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionierungsversuche zu definieren, die zur Definition der Positionierung und Ausrichtung von ankerbasierten Elementen genutzt werden kann. Ein oder mehrere Sets von Fallback-Optionen für Positionierungsversuche können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzform auf das verankerte Element angewendet werden. Wenn das positionierte Element an eine Stelle verschoben wird, an der es beginnt, über seinen umgebenden Block oder den Ansichtsbereich hinauszugehen, wählt der Browser die erste Positionierungsfalloption, die er findet und die das positionierte Element vollständig sichtbar hält.

Jede Positionierungsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, die Informationen wie Einsetzposition, Rand, Größe und Selbstausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzform zu referenzieren.

Für detaillierte Informationen über Ankerfunktionen und die Nutzung von Fallback-Optionen für Positionierungsversuche, siehe das [CSS-Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Positionsoption angibt, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}}-Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren geben Eigenschaftswerte an, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Gibt einen {{cssxref("position-anchor")}} Eigenschaftswert an, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert angegeben wird, der dem {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Gibt einen {{cssxref("position-area")}} Eigenschaftswert an, der die Position des ankerbasierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Einsetz-Eigenschaft")}} Deskriptoren
  - : Gibt [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktionswerte an, die die Position der Kanten des ankerbasierten Elements relativ zur Kante des Ankerelements definieren. Einsetz-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Geben den Rand an, der auf das ankerbasierte Element gesetzt ist. Rand-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Geben [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktionswerte an, die die Größe des ankerbasierten Elements relativ zur Größe des Ankerelements definieren. Größen-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Geben den [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)-Wert an, um das ankerbasierte Element relativ zur Mitte des Ankerelements in der Block- oder Inline-Richtung auszurichten. Die Eigenschaftsdeskriptoren {{cssxref("align-self")}} und {{cssxref("justify-self")}} können den `anchor-center`-Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try` At-Regel definierten Eigenschaftswerte Vorrang vor den über standardmäßige CSS-Eigenschaften eingestellten Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Nutzung benutzerdefinierter Positionsoptionen

In diesem Beispiel definieren wir ein Ankerelement und ein ankerbasiertes Element, dann erstellen wir vier benannte benutzerdefinierte Fallback-Optionen für Positionierungsversuche. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass seine Inhalte immer sichtbar sind, egal wo sich das Ankerelement innerhalb des Ansichtsbereichs befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente ein, die zu einem Anker und einem ankerbasierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten zuerst das `<body>`-Element sehr groß, sodass wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsbereich verschieben können:

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

Der Anker erhält einen {{cssxref("anchor-name")}} und hat einen {{cssxref("position")}}-Wert von `absolute` gesetzt. Wir positionieren ihn dann irgendwo in der Nähe der Mitte des initialen `<body>`-Renderings, indem wir {{cssxref("top")}}- und {{cssxref("left")}}-Werte verwenden:

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

Als Nächstes verwenden wir die `@position-try` At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede davon platziert das positionierte Element in einer bestimmten Position um das Ankerelement herum und gibt ihm einen entsprechenden `10px`-Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf vielfältige Weise gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwendet ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}} um das positionierte Element in der Inline-Richtung auf den Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der innerhalb einer {{cssxref("calc()")}}-Funktion um `10px` Abstand hinzuzufügt (anstatt den Abstand mit {{cssxref("margin")}} wie bei den anderen Optionen zu erstellen). Dann wird {{cssxref("align-self", "align-self: anchor-center")}} verwendet, um das positionierte Element in der Blockrichtung auf den Anker zu zentrieren.

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden miteinander zu verbinden, und ist an der Oberkante des Ankers mit einem {{cssxref("position-area")}} verankert. Wir geben ihr auch eine feste {{cssxref("width")}} und ein wenig unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Ansichtsbereich herausgescrollt wird, wenn sich der Anker in der Nähe des Randes des Ansichtsbereichs befindet.

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

Scrollen Sie die Seite und beobachten Sie die Veränderung der Platzierung des positionierten Elements, wenn sich der Anker in der Nähe der verschiedenen Ränder des Ansichtsbereichs befindet. Dies liegt daran, dass verschiedene Fallback-Optionspositionen angewendet werden.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zunächst einmal beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite überläuft, sitzt die Infobox über dem Anker und die Positionierungsversuchsvorgaben in der `position-try-fallbacks`-Eigenschaft werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Fallback-Optionspositionen angewendet werden.
- Wenn die Infobox überläuft, versucht der Browser zuerst die `--custom-left` Position. Dies verschiebt die Infobox links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox eine andere Breite.
- Danach versucht der Browser die `--custom-bottom` Position. Dies verschiebt die Infobox unter den Anker mit `top` und `justify-self` anstelle von `position-area` und setzt einen entsprechenden Rand. Es enthält keinen `width` Deskriptor, sodass die Infobox zur Standardbreite `200px` zurückkehrt, die durch die `width`-Eigenschaft festgelegt wurde.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit dem gleichen `width` Deskriptorwert. Allerdings verwenden wir `left` und `align-self`, um das positionierte Element zu platzieren, anstelle von `position-area`. Und wir verpacken den `left`-Wert in einer `calc()`-Funktion, in der wir `10px` hinzufügen, um Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionsversuche erfolgreich das Überlaufen des positionierten Elements verhindert, versucht der Browser als letzten Ausweg die `--custom-bottom-right` Position. Dies platziert das positionierte Element unten rechts von dem Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die initialen Werte, die auf das positionierte Element gesetzt wurden. Zum Beispiel ist die `width`, die ursprünglich auf das positionierte Element gesetzt wurde, `200px`, aber wenn die `--custom-right` Position angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen setzen, um die initialen Werte zu deaktivieren. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einsetzeigenschafts- und `*-self: anchor-center`-Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor festgelegten `position-area` Wert in jedem Fall durch das Setzen von `position-area: none`. Wenn wir das nicht täten, würde der anfänglich gesetzte `position-area: top` Wert weiterhin wirksam sein und die anderen Positionierungsinformationen stören.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
