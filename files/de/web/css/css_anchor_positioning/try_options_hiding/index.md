---
title: "Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Bei der Verwendung der [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass die verankerten Elemente immer an einem praktischen Ort für den Benutzer erscheinen, um mit ihnen zu interagieren, wenn dies überhaupt möglich ist, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugehörigen Positionierungselemente zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, das Ansichtsfenster zu überschreiten, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm zu platzieren, zum Beispiel auf die gegenüberliegende Seite des Ankers.

In einigen Situationen kann es alternativ vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind und ihr Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie Sie CSS-Anchor-Positionierungsmethoden verwenden, um diese Probleme zu bewältigen — **Position-Try-Fallback-Optionen** und **bedingtes Ausblenden**. Mit Position-Try-Fallback-Optionen können Sie alternative Positionen angeben, die der Browser ausprobieren soll, um positionierte Elemente beim Überlauf auf dem Bildschirm zu halten. Bedingtes Ausblenden ermöglicht es, Bedingungen zu definieren, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Anchor-Positionierung finden Sie unter [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Zusammenfassung der Funktionen

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist, und der Benutzer den Inhalt so scrollt, dass das UI-Feature in der oberen rechten Ecke des Ansichtsfensters ist, wird das Tooltip dieses UI-Features vom Bildschirm gescrollt. CSS Anchor Positionierung löst solche Probleme. Die Eigenschaft {{cssxref("position-try-fallbacks")}} des Moduls gibt eine oder mehrere alternative Position-Try-Fallback-Optionen an, damit der Browser versucht, das positionierte Element daran zu hindern, überzulaufen.

Position-Try-Fallback-Optionen können wie folgt angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), definiert mit der {{cssxref("@position-try")}} At-Regel.

Zusätzlich erlaubt Ihnen die Eigenschaft {{cssxref("position-try-order")}}, verschiedene Optionen anzugeben, die dazu führen, dass eine verfügbare Position-Try-Option der anfänglichen Positionierung des Elements vorgezogen wird. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht verankerte Positionierung keinen Sinn, wenn der Anker außerhalb des Bildschirms ist oder umgekehrt. Zum Beispiel könnten Sie einen Anker haben, der eine Quizfrage enthält, und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und sie beide zusammen oder überhaupt nicht anzeigen wollen. Dies kann mit bedingtem Ausblenden erreicht werden, das über die Eigenschaft {{cssxref("position-visibility")}} verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der Eigenschaft `position-try-fallbacks` (im Spezifikationsrahmen als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s definiert) "flippen" die Position des verankerten Elements über eine oder beide Achsen, wenn das Element andernfalls überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Block-Achse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie flippt, die von einer Ecke des Ankers durch sein Zentrum zu seiner gegenüberliegenden Ecke verläuft (`flip-start`). Diese drei Werte flippen das Element und spiegeln seine Position entweder auf einer gegenüberliegenden Seite bei den ersten beiden Werten oder einer angrenzenden Seite bei `flip-start`. Wenn ein Element beispielsweise `10px` über seinem Anker positioniert ist und am oberen Rand des Ankers zu überlaufen beginnt, würde der Wert `flip-block` das positionierte Element 10px unter seinem Anker setzen.

In diesem Beispiel schließen wir zwei {{htmlelement("div")}}-Elemente ein. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>`-Element größer als das Ansichtsfenster, um den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster zu scrollen:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zur Veranschaulichung positionieren wir den Anker absolut, sodass er sich nahe der Mitte der anfänglichen `<body>`-Darstellung erscheint:

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

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

Das verankerte Element wird mit einer festen Positionierung versehen und mit der oberen linken Ecke des Ankers mittels einer `position-area` verankert. Es wird ihm `position-try-fallbacks: flip-block, flip-inline;` gegeben, um ihm einige Fallback-Optionen für das Bewegen des positionierten Elements zu geben, um zu verhindern, dass es überläuft, wenn sich der Anker dem Rand des Ansichtsfensters nähert.

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

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top left;
  position-try-fallbacks: flip-block, flip-inline;
}
```

> [!NOTE]
> Wenn mehrere Position-Try-Fallback-Optionen angegeben werden, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo zu scrollen, sodass der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Ansichtsfensters. Das positionierte Element flippt unten links des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Ansichtsfensters. Das positionierte Element flippt oben rechts des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker zur oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in Block- und Inline-Richtung überzulaufen, flippt es zurück in seine Standardposition oben links und läuft in beide Richtungen über, was nicht gewünscht ist.

Dies geschieht, weil wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig zu versuchen. Der Browser versucht die Fallback-Optionen, um eine zu finden, die das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenen Blocks rendert. Wenn es keine findet, rendert es das positionierte Element in seiner ursprünglich definierten Position ohne angewandte Positions-Fallback-Optionen.

Der nächste Abschnitt zeigt, wie Sie dieses Problem beheben können.

## Kombinieren mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) Namen in einem durch Leerzeichen getrennten Try-Fallback-Optionen-Wert innerhalb der durch Kommas getrennten `position-try-fallbacks` Liste zu platzieren. Beim Versuch, diese Fallback-Optionen anzuwenden, wird der Browser die individuellen Effekte zu einer einzigen kombinierten Fallback-Option kombinieren.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir mit der vorherigen Demo gefunden haben. Das HTML und CSS in dieser Demo sind identisch, abgesehen von den Infobox-Positionierungsstilen. In diesem Fall erhält es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

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

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

Dies bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er versuchen, die beiden zu kombinieren, wodurch die Position des Elements sowohl in Block- als auch in Inline-Richtungen gleichzeitig flippt. Wenn Sie nun den Anker in Richtung der oberen _und_ linken Kanten des Ansichtsfensters scrollen, wird das positionierte Element in die untere rechte Ecke flippen.

{{ EmbedLiveSample("Kombinieren mehrerer Werte in eine Option", "100%", "250") }}

## Verwendung von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur das Flippen der positionierten Elementplatzierung über Achsen ermöglichen. Was wäre, wenn Sie ein verankertes Element hatten, das oben links von seinem Anker positioniert ist, und seine Position ändern wollten, um es direkt unterhalb des Ankers zu platzieren, wenn es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-Try-Fallback-Option verwenden, indem Sie ihn in die `position-try-fallbacks` Liste aufnehmen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. In der Tat ist es eine Abkürzung, um eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Position-Try-Fallback-Optionen in der Nutzung. Wir verwenden dasselbe HTML und CSS, abgesehen von der Infobox-Positionierung. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, und `left`. Das positionierte Element wird vernünftig positioniert sein, egal an welchen Rand des Ansichtsfensters sich der Anker nähert. Dieser ausführliche Ansatz ist granulärer und flexibler als der Ansatz mit den vordefinierten Werten.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

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

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top left;
  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

> [!NOTE]
> Sie können keine `position-area` Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste hinzufügen.

Scrollen Sie die Seite und schauen Sie sich den Effekt dieser Position-Try-Fallback-Optionen an, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Verwendung von `position-area` Try-Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie eigene mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-Try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste von Try-Fallback-Optionen im Wert der Eigenschaft {{cssxref("position-try-fallbacks")}} angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; dies macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte Try-Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert werden soll, sowie alle Randabstände. Die begrenzte Liste der erlaubten Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- [Inset-Eigenschaften](/de/docs/Glossary/Inset_properties)
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbst-Ausrichtungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größeneigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die in der At-Regel aufgenommen werden, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn einige der Eigenschaften zuvor auf das positionierte Element gesetzt wurden, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt, was dazu führt, dass eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte aus der zuvor angewendeten Try-Fallback-Option aufgehoben.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten Try-Fallback-Optionen mit `@position-try`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

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

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin: 0 10px 0 0;
}

@position-try --custom-bottom {
  position-area: bottom;
  margin: 10px 0 0 0;
}

@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionsliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in einer Richtung über die Seite überläuft, sitzt die Infobox über dem Anker, und die in der Eigenschaft `position-try-fallbacks` festgelegten Try-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Randabstand gesetzt hat. Diese Werte werden sich ändern, wenn verschiedene Try-Fallback-Optionen angewendet werden.

Wenn die Infobox zu überlaufen beginnt, versucht der Browser die Positionierungsoptionen, die in der Eigenschaft `position-try-fallbacks` aufgelistet sind:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox nach links des Ankers, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unter den Anker und setzt einen geeigneten Rand. Es enthält keinen `width` Deskriptor, sodass die Infobox auf ihre Standardbreite von `200px` zurückgeht, die durch die `width` Eigenschaft festgelegt wird.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, wobei der gleiche `width` Deskriptorwert angewendet wird, jedoch werden die `position-area` und `margin` Werte gespiegelt, um die Infobox entsprechend auf der rechten Seite zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich verhindert, dass das positionierte Element überläuft, versucht der Browser die `--custom-bottom-right` Position als letztes Mittel. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, platziert aber das positionierte Element unten rechts des Ankers.

Wenn keine der Fallbacks erfolgreich verhindert, dass das positionierte Element überläuft, wird die Position auf den ursprünglichen Wert `position-area: top;` zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben ihre Werte die Standardwerte, die auf dem positionierten Element gesetzt sind. Beispielsweise wird die Standardbreite `width` auf dem positionierten Element auf `200px` gesetzt, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und sehen Sie sich den Effekt dieser Position-Try-Fallback-Optionen an, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die Eigenschaft {{cssxref("position-try-order")}} hat einen leicht unterschiedlichen Fokus im Vergleich zu den anderen Position-Try-Funktionalitäten, da sie Positions-Try-Fallback-Optionen verwendet, wenn das positionierte Element erstmals angezeigt wird, anstatt wenn es überläuft.

Diese Eigenschaft erlaubt Ihnen anzugeben, dass Sie das positionierte Element zuerst mithilfe der Position-Try-Fallback-Option anzeigen möchten, die seinem umgebenden Block die meiste Breite oder die meiste Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Effekte von zuvor gesetzten `position-try-order` Werten entfernen, indem Sie den Wert `normal` verwenden.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung bietet, hat `position-try-order` keine Wirkung.

Schauen wir uns eine Demo an, die den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, abgesehen davon, dass wir ein `<form>` mit Optionsfeldern hinzugefügt haben, das es Ihnen erlaubt, verschiedene Werte des `position-try-order` auszuwählen, um deren Effekte zu sehen.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<form>
  <fieldset>
    <legend>Choose a try order</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

Wir fügen eine benutzerdefinierte Try-Fallback-Option hinzu — `--custom-bottom` — die das Element unter dem Anker positioniert und einen Rand hinzufügt:

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

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren die Infobox zunächst oben am Anker und geben ihr dann unseren benutzerdefinierten Try-Fallback:

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;
  position-try-fallbacks: --custom-bottom;
}
```

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler zu den Optionsfeldern setzt. Wenn ein Optionsfeld ausgewählt wird, wird dessen Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-try-order"]');

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

Versuchen Sie, die Orderoption `most-height` zu wählen. Dies hat den Effekt, die `--custom-bottom` Position-Try-Fallback-Option anzuwenden, die das Element unter den Anker positioniert. Dies geschieht, weil es mehr Platz unterhalb des Ankers gibt als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von verankerten Elementen

In einigen Situationen möchten Sie ein verankertes Element ausblenden. Beispielsweise, wenn das Ankerelement abgeschnitten ist, weil es zu nah am Rand des Ansichtsfensters ist, möchten Sie möglicherweise sein zugehöriges Element insgesamt ausblenden. Die Eigenschaft {{cssxref("position-visibility")}} erlaubt Ihnen, Bedingungen anzugeben, unter denen verankerte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überlaufen.

Der Wert `anchors-visible` hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _vollständig_ verborgen sind, entweder weil sie ihr enthaltendes Element (oder das Ansichtsfenster) überlaufen oder von anderen Elementen verdeckt werden. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als ob ihm und seinen Nachkommenelementen ein {{cssxref("visibility")}} Wert von `hidden` gesetzt wurde, unabhängig davon, welcher tatsächliche `visibility` Wert gesetzt ist.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an die Unterkante des Ankers gebunden ist. Die Infobox wird `position-visibility: no-overflow;` gegeben, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, sodass sie beginnt, das Ansichtsfenster zu überlaufen.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
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

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
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

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  margin-bottom: 5px;
  position-area: top span-all;
  position-visibility: no-overflow;
}
```

Scrollen Sie die Seite hinunter und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Bedingtes Ausblenden mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Elemente in CSS dimensionieren](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
