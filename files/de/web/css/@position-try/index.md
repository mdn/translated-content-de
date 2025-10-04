---
title: "@position-try"
slug: Web/CSS/@position-try
l10n:
  sourceCommit: aa036e35601a5152c7589054550ac6b69fc98aee
---

Die **`@position-try`** [CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine benutzerdefinierte Fallback-Option für Positionsversuche zu definieren, die zur Definition von Positionierung und Ausrichtung für ankerpositionierte Elemente genutzt werden kann. Eine oder mehrere Sätze von Positionsversuchs-Fallback-Optionen können über die {{cssxref("position-try-fallbacks")}}-Eigenschaft oder die {{cssxref("position-try")}}-Kurzform auf das Ankerelement angewendet werden. Wenn das positionierte Element an eine Position verschoben wird, an der es beginnt, seinen umgebenden Block oder das Ansichtsfenster zu überlaufen, wählt der Browser die erste gefundene Positionsversuchs-Fallback-Option, die das positionierte Element vollständig zurück auf den Bildschirm bringt.

Jede Positionsoption wird mit einem {{cssxref("dashed-ident")}} benannt und enthält eine Descriptor-Liste, die Deklarationen spezifiziert, die Informationen wie Einfügeposition, Rand, Größenanpassung und Selbstausrichtung definieren. Das `<dashed-ident>` wird verwendet, um die benutzerdefinierte Positionsoption in der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("position-try")}}-Kurzform zu referenzieren.

Für detaillierte Informationen zu Ankerfunktionen und der Nutzung von Fallback-Optionen für Positionsversuche, siehe die Modul-Landingpage [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den Leitfaden [Fallback-Optionen und bedingtes Verstecken bei Überläufen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> Der `--try-option-name` ist ein {{cssxref("dashed-ident")}}, der einen Identifikationsnamen für die benutzerdefinierte Positionsoption spezifiziert, der dann verwendet werden kann, um diese Fallback-Option zur {{cssxref("position-try-fallbacks")}}-Liste hinzuzufügen.

### Deskriptoren

Die Deskriptoren spezifizieren Eigenschaftswerte, die das Verhalten der benutzerdefinierten Positionsoption definieren, d.h. wo das positionierte Element platziert wird.

- `position-anchor`
  - : Spezifiziert einen {{cssxref("position-anchor")}}-Eigenschaftswert, der das Ankerelement definiert, an das das positionierte Element gebunden ist, indem ein {{cssxref("dashed-ident")}}-Wert angegeben wird, der dem {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements entspricht.
- `position-area`
  - : Spezifiziert einen {{cssxref("position-area")}}-Eigenschaftswert, der die Position des ankerpositionierten Elements relativ zum Anker definiert.
- Deskriptoren der {{Glossary("Inset_properties", "Einfügeigenschaft")}}
  - : Spezifizieren [`anchor()`](/de/docs/Web/CSS/anchor)-Funktionswerte, die die Position der Kanten des ankerpositionierten Elements relativ zur Kante des Ankerelements definieren. Einfügeigenschafts-Deskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
  - : Spezifizieren den gesetzten Rand auf dem ankerpositionierten Element. Rand-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
- Größenanpassungs-Eigenschaftsdeskriptoren
  - : Spezifizieren [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktionswerte, die die Größe des ankerpositionierten Elements relativ zur Ankerelementgröße definieren. Größenanpassungs-Eigenschaftsdeskriptoren können gesetzt werden, die die folgenden Eigenschaften repräsentieren:
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
- Selbstausrichtungs-Eigenschaftsdeskriptoren
  - : Spezifizieren den [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)-Wert, um das ankerpositionierte Element relativ zur Mitte des Ankerelements in Block- oder Inline-Richtung auszurichten. Die {{cssxref("align-self")}}- und {{cssxref("justify-self")}}-Eigenschaftsdeskriptoren können den `anchor-center`-Wert annehmen.

> [!NOTE]
> Wenn eine benutzerdefinierte Positionsoption auf ein Element angewendet wird, haben die in der `@position-try`-At-Regel-Deskriptor definierten Eigenschaftswerte Vorrang vor den über Standard-CSS-Eigenschaften auf das Element gesetzten Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der benutzerdefinierten Positionsoption

In diesem Beispiel definieren wir ein Ankerelement und ein ankerpositioniertes Element und erstellen dann vier benannte benutzerdefinierte Positionsversuchs-Fallback-Optionen. Diese Optionen werden auf das positionierte Element angewendet, um sicherzustellen, dass dessen Inhalte immer sichtbar sind, egal wo sich das Ankerelement im Ansichtsfenster befindet.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente ein, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen zunächst das `<body>`-Element, um es sehr groß zu machen, damit wir den Anker und das positionierte Element im Ansichtsfenster, sowohl horizontal als auch vertikal, scrollen können:

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

Dem Anker wird ein {{cssxref("anchor-name")}} zugewiesen und er hat einen {{cssxref("position")}}-Wert von `absolute` gesetzt. Wir positionieren ihn dann irgendwo in der Nähe des Zentrums des anfänglichen `<body>`-Renderings mit {{cssxref("top")}}- und {{cssxref("left")}}-Werten:

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

Als Nächstes verwenden wir die `@position-try`-At-Regel, um vier benutzerdefinierte Positionsoptionen zu definieren, mit beschreibenden {{cssxref("dashed-ident")}}-Namen, um sie zu identifizieren und ihren Zweck zu beschreiben. Jede platziert das positionierte Element an einer bestimmten Position um das Ankerelement und gibt ihm einen entsprechenden `10px`-Rand zwischen dem positionierten Element und seinem Anker. Die Positionierung wird auf verschiedene Arten gehandhabt, um die verschiedenen verfügbaren Techniken zu demonstrieren:

- Die erste und letzte Positionsoption verwenden ein {{cssxref("position-area")}}.
- Die zweite Positionsoption verwendet {{cssxref("top")}} mit einem {{cssxref("anchor()")}}-Wert und {{cssxref("justify-self", "justify-self: anchor-center")}}, um das positionierte Element in der Inline-Richtung am Anker zu zentrieren.
- Die dritte Positionsoption verwendet {{cssxref("left")}} mit einem {{cssxref("anchor()")}}-Wert, der in einen {{cssxref("calc()")}}-Funktionsaufruf eingeschlossen ist, der `10px` Abstand hinzufügt (anstatt wie die anderen Optionen den Abstand mit {{cssxref("margin")}} zu schaffen). Sie verwendet dann {{cssxref("align-self", "align-self: anchor-center")}}, um das positionierte Element in der Blockrichtung am Anker zu zentrieren.

Schließlich werden den linken und rechten Positionsoptionen eine schmalere {{cssxref("width")}}

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

Der Infobereich erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden Elemente miteinander zu verknüpfen, und er ist mit der oberen Kante des Ankers durch ein {{cssxref("position-area")}} verbunden. Wir geben ihm auch eine feste {{cssxref("width")}} und einige untere {{cssxref("margin")}}. Die benutzerdefinierten Positionsoptionen werden dann in der {{cssxref("position-try-fallbacks")}}-Eigenschaft referenziert, um zu verhindern, dass das positionierte Element überläuft oder aus dem Ansichtsfenster gescrollt wird, wenn der Anker in die Nähe des Randes des Ansichtsfensters kommt.

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

Scrollen Sie die Seite, und beachten Sie die Änderung in der Platzierung des positionierten Elements, wenn der Anker den verschiedenen Rändern des Ansichtsfensters näher kommt. Dies liegt an den verschiedenen angewendeten Fallback-Positionsoptionen.

{{ EmbedLiveSample("Verwendung der benutzerdefinierten Positionsoption", "100%", "250") }}

Lassen Sie uns besprechen, wie diese Positionsoptionen funktionieren:

- Zunächst beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn der Infobereich die Seite in keiner Richtung überläuft, sitzt der Infobereich über dem Anker, und die in der `position-try-fallbacks`-Eigenschaft gesetzten Positionsversuchs-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass der Infobereich eine fixe Breite und einen unteren Rand hat. Diese Werte werden sich ändern, wenn verschiedene Positionsversuchs-Fallback-Optionen angewendet werden.
- Wenn der Infobereich zu überlaufen beginnt, versucht der Browser zuerst die `--custom-left`-Position. Dies bewegt den Infobereich links vom Anker mit `position-area: left`, passt den Rand entsprechend an und gibt dem Infobereich auch eine andere Breite.
- Als Nächstes versucht der Browser die `--custom-bottom`-Position. Dies bewegt den Infobereich unter den Anker mit `top` und `justify-self` anstelle eines `position-area` und setzt einen entsprechenden Rand. Es enthält keinen `width`-Deskriptor, sodass der Infobereich zu seiner Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft gesetzt ist.
- Der Browser versucht anschließend die `--custom-right`-Position. Dies funktioniert ähnlich wie die `--custom-left`-Position, wobei der gleiche `width`-Deskriptorwert angewendet wird. Wir verwenden jedoch `left` und `align-self`, um das positionierte Element zu platzieren, anstelle eines `position-area`. Und wir umschließen den `left`-Wert in einer `calc()`-Funktion, in der wir `10px` hinzufügen, um den Abstand zu schaffen, anstatt `margin` zu verwenden.
- Wenn keine der anderen Fallback-Optionen erfolgreich verhindert, dass das positionierte Element überläuft, versucht der Browser als letzte Möglichkeit die `--custom-bottom-right`-Position. Diese platziert das positionierte Element rechts unten am Anker mit `position-area: bottom right`.

Wenn eine Positionsoption angewendet wird, ihre Werte überschreiben die anfänglich auf dem positionierten Element gesetzten Werte. Beispielsweise ist die ursprünglich auf dem positionierten Element gesetzte `width` `200px`, aber wenn die `--custom-right`-Positionsoption angewendet wird, wird ihre Breite auf `100px` gesetzt.

In einigen Fällen müssen wir Werte in den benutzerdefinierten Positionsoptionen setzen, um die anfänglichen Werte auszuschalten. Die `--custom-bottom` und `--custom-right` Optionen verwenden Einfügeigenschaften und `*-self: anchor-center`-Werte, um das positionierte Element zu platzieren, daher entfernen wir den zuvor gesetzten `position-area`-Wert in jedem Fall, indem wir `position-area: none` setzen. Wenn wir das nicht tun würden, würde der anfänglich gesetzte `position-area: top`-Wert noch wirksam sein und mit den anderen Positionierungsinformationen interferieren.

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
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden
- [Fallback-Optionen und bedingtes Verstecken bei Überläufen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)-Leitfaden
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
