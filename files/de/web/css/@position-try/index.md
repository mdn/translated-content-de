---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{SeeCompatTable}}

Die **`@position-try`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Position-Try-Option zu definieren, die verwendet werden kann, um Positionierung und Ausrichtung für ankerpositionierte Elemente zu definieren. Eine oder mehrere Sätze von Position-Try-Optionen können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzform auf das ankerierte Element angewendet werden. Wenn das positionierte Element an einen Ort verschoben wird, an dem es beginnt, seinen umgebenden Block oder den Viewport zu überlaufen, wählt der Browser die erste gefundene Position-Try-Option aus, die das positionierte Element vollständig wieder auf dem Bildschirm platziert.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Deskriptorliste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Rand, Größe und Selbstausrichtung definieren. Der `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzform zu referenzieren.

Für detaillierte Informationen zu Ankerfunktionen und der Nutzung von Position-Try-Optionen, siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und die [Fallback-Optionen und bedingte Ausblendung bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen identifizierenden Namen für die benutzerdefinierte Position-Option spezifiziert, die dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}}-Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren geben Eigenschaftswerte an, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Spezifiziert einen {{cssxref("position-anchor")}} Eigenschaftswert, der das Ankerelement definiert, an dem das positionierte Element befestigt ist, durch Angabe eines {{cssxref("dashed-ident")}}-Wertes, der dem {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Spezifiziert einen {{cssxref("position-area")}}-Eigenschaftswert, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- {{Glossary("Inset_properties", "Einfügeigenschaften")}} Deskriptoren
  - : Spezifizieren [`anchor()`](/de/docs/Web/CSS/anchor) Funktionswerte, die die Position der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Einfügeigenschaften-Deskriptoren können gesetzt werden, die folgende Eigenschaften repräsentieren:
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
- Rand-Eigenschaften Deskriptoren
  - : Spezifizieren den auf das ankerpositionierte Element gesetzten Rand. Rand-Eigenschaften-Deskriptoren können gesetzt werden, die folgende Eigenschaften repräsentieren:
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
- Größen-Eigenschaften Deskriptoren
  - : Spezifizieren [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktionswerte, die die Größe des ankerpositionierten Elements relativ zur Ankerelementgröße definieren. Größen-Eigenschaften-Deskriptoren können gesetzt werden, die folgende Eigenschaften repräsentieren:
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
- Selbst-Ausrichtung Eigenschaften Deskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, um das ankerpositionierte Element relativ zur Mitte des Ankerelements in der Block- oder Inline-Richtung auszurichten. {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaften Deskriptoren können den `anchor-center` Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try`-At-Regel Deskriptor festgelegten Eigenschaftswerte Vorrang vor den auf das Element mittels Standard-CSS-Eigenschaften gesetzten Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Positionsoption

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element und erstellen dann vier benannte benutzerdefinierte Position-Try-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalt immer sichtbar ist, egal wo das Ankerelement innerhalb des Viewports ist.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu, die zu einem Anker und einem ankerpositionierten Element werden sollen:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen zunächst das `<body>`-Element sehr groß, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} gegeben und es wird ein {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Dann positionieren wir es irgendwo nahe der Mitte des initialen `<body>`-Renderings mithilfe von {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Als nächstes verwenden wir die `@position-try`-At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}} Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element an einer bestimmten Position um das Ankerelement und gibt ihm einen passenden `10px` Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Weisen gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}} Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung auf dem Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}} Wert, eingebettet in eine {{cssxref("calc()")}} Funktion, die `10px` Abstand hinzufügt (anstatt den Abstand mit {{cssxref("margin")}} zu erstellen, wie die anderen Optionen es tun). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in der Block-Richtung auf dem Anker zu zentrieren.

Schließlich erhalten die linken und rechten Optionen eine schmalere {{cssxref("width")}}

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

Das Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die auf den Anker's `anchor-name` verweist, um die beiden miteinander zu verbinden, und es wird an die obere Kante des Ankers mithilfe eines {{cssxref("position-area")}} befestigt. Sie erhält auch eine feste {{cssxref("width")}} und etwas unteren {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Blickfeld gescrollt wird, wenn der Anker sich nahe dem Rand des Viewports befindet.

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

Scrollen Sie die Seite und beachten Sie die Änderung der Platzierung des positionierten Elements, wenn sich der Anker den verschiedenen Rändern des Viewports nähert. Dies liegt an den unterschiedlichen angewandten Fallback-Positionen.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zuerst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in irgendeine Richtung über die Seite überläuft, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks`-Eigenschaft gesetzten Position-Try-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und unteren Rand hat. Diese Werte ändern sich, wenn unterschiedliche Position-Try-Optionen angewendet werden.
- Wenn die Infobox anfängt überzulaufen, versucht der Browser zuerst die `--custom-left` Position. Diese bewegt die Infobox links des Ankers mit `position-area: left`, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unter den Anker mit `top` und `justify-self` anstelle eines `position-area`, und setzt einen passenden Rand. Es enthält keinen `width`-Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width`-Eigenschaft gesetzt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, wobei derselbe `width`-Deskriptorwert angewendet wird. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstatt eines `position-area`. Und wir umhüllen den `left` Wert in einer `calc()` Funktion, innerhalb der wir `10px` hinzufügen, um einen Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, das Überlaufen des positionierten Elements zu stoppen, versucht der Browser als letztes die `--custom-bottom-right` Position. Diese platziert das positionierte Element unter rechts des Ankers mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, überschreiben ihre Werte die initialen Werte, die auf das positionierte Element gesetzt wurden. Zum Beispiel ist die `width`, die zunächst auf das positionierte Element gesetzt war, `200px`, aber wenn die `--custom-right` Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte innerhalb der benutzerdefinierten Positionsoptionen setzen, um die initialen Werte zu deaktivieren. Die `--custom-bottom` und `--custom-right`-Optionen verwenden Einfügeigenschaften und `*-self: anchor-center` Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area` Wert in jedem Fall, indem wir `position-area: none` setzen. Wenn wir dies nicht täten, würde der initial gesetzte `position-area: top` Wert weiterhin wirksam sein und die andere Positionsinformation beeinträchtigen.

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
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingte Ausblendung bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
