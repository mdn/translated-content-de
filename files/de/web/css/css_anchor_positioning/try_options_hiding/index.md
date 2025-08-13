---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Beim Verwenden der [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente, wenn möglich, immer an einem bequemen Ort erscheinen, mit dem der Benutzer interagieren kann, unabhängig davon, wo der Anker positioniert ist. Wenn Sie beispielsweise die Seite scrollen, bewegen sich die Anker und ihre assoziierten positionierten Elemente zum Rand des Viewports. Wenn ein positioniertes Element beginnt, den Viewport zu überlaufen, sollten Sie seine Position ändern, um es wieder auf den Bildschirm zu bringen, zum Beispiel auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in manchen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn machen.

Dieser Leitfaden erklärt, wie man CSS-Ankerpositionierungsmechanismen verwendet, um diese Probleme zu bewältigen — **position-try fallback options** und **bedingtes Ausblenden**. Position-try Fallback-Optionen bieten alternative Positionen, die der Browser ausprobieren kann, um positionierte Elemente bei Überlauf auf dem Bildschirm zu halten. Bedingtes Ausblenden ermöglicht es, Bedingungen festzulegen, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Anker-Positionierung finden Sie unter [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip am oberen rechten Rand eines UI-Elements fixiert ist, wird dieser Tooltip vom Bildschirm verschwinden, wenn der Benutzer den Inhalt so scrollt, dass das UI-Feature sich in der oberen rechten Ecke des Viewports befindet. CSS-Anker-Positionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}} Eigenschaft des Moduls gibt eine oder mehrere alternative Position-try Fallback-Optionen an, damit der Browser das Überlaufen des positionierten Elements verhindert.

Die Position-try Fallback-Optionen können wie folgt angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Individuelle Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert werden.

Zusätzlich ermöglicht die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen anzugeben, die dazu führen, dass eine verfügbare Position-Try-Option gegenüber der ursprünglichen Positionierung des Elements bevorzugt wird. Beispielsweise möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In manchen Situationen macht es keinen Sinn, anker-positionierten Inhalt anzuzeigen, wenn der Anker außerhalb des Bildschirms liegt oder umgekehrt. Zum Beispiel könnte ein Anker eine Quizfrage enthalten und die Antworten in dazugehörigen positionierten Elementen enthalten, und Sie möchten sie beide zusammen anzeigen oder gar nicht. Dies kann mit bedingtem Ausblenden erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s in der Spezifikation) werden die Position des anker-positionierten Elements über eine oder beide Achsen kippen, wenn das Element ansonsten überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inlinachse (`flip-inline`) oder diagonal über eine gedachte Linie von einer Ecke des Ankers durch dessen Zentrum zur gegenüberliegenden Ecke (`flip-start`) kippt. Diese drei Werte kippen das Element und spiegeln seine Position auf der gegenüberliegenden Seite bei den ersten beiden Werten und auf einer angrenzenden Seite bei `flip-start`. Beispielsweise würde der Wert `flip-block` das positionierte Element um 10px unterhalb seines Ankers kippen, wenn ein Element, das 10px über seinem Anker positioniert ist, beginnt, am oberen Rand des Ankers zu überlaufen.

In diesem Beispiel inkludieren wir zwei {{htmlelement("div")}} Elemente. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir stylen das `<body>` Element, um größer als der Viewport zu sein, damit wir den Anker und das positionierte Element im Viewport sowohl horizontal als auch vertikal scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zwecks Veranschaulichung positionieren wir den Anker absolut, damit er in der Nähe des Zentrums des anfänglichen `<body>` Renderings erscheint:

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
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

Das anker-positionierte Element erhält eine feste Positionierung und wird durch ein `position-area` an die obere linke Ecke des Ankers gebunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, um das positionierte Element daran zu hindern, überzulaufen, wenn der Anker nahe den Rand des Viewports gerät.

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

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks: flip-block, flip-inline;
}
```

> [!NOTE]
> Wenn mehrere Position-Try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Scrollen Sie die Demo, sodass der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Viewports. Das positionierte Element kippt zur unteren linken Ecke des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Viewports. Das positionierte Element kippt zur oberen rechten Ecke des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Viewports bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in Block- und Inlinrichtung zu überlaufen, kippt es zurück zu seiner Standardposition oben links und überläuft in beide Richtungen, was nicht gewünscht ist.

Das passiert, weil wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen und sucht nach einer, die dazu führt, dass das positionierte Element vollständig innerhalb des Viewports oder des enthaltenden Blocks gerendert wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Rendering-Position, ohne dass Positions-Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie dieses Problem behoben werden kann.

## Mehrere Werte zu einer Option kombinieren

Es ist möglich, mehrere [vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen) oder [individuelle Optionsnamen](#benutzerdefinierte_fallback-optionen) in einen einzigen durch Leerzeichen getrennten Try-Fallback-Optionswert innerhalb der durch Kommas getrennten `position-try-fallbacks` Liste zu setzen. Wenn der Browser versucht, diese Fallback-Optionen anzuwenden, kombiniert er die individuellen Effekte zu einer einzigen kombinierten Fallback-Option.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir mit der vorherigen Demo festgestellt haben. Der HTML- und CSS-Code in dieser Demo ist derselbe, mit Ausnahme der Infobox-Positionierungsstile. In diesem Fall erhält es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

Dies bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er dann versuchen, die beiden zu kombinieren und die Position des Elements gleichzeitig in die Block- _und_ Inlinrichtung zu kippen. Nun, wenn Sie den Anker in Richtung der oberen _und_ linken Kanten des Viewports scrollen, wird das positionierte Element sich zur unteren rechten Seite kippen.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Verwenden von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie es nur erlauben, die Platzierung des positionierten Elements über Achsen zu kippen. Was wäre, wenn Sie ein anker-positioniertes Element hätten, das in der oberen linken Ecke seines Ankers positioniert ist, und seine Position direkt unter den Anker ändern möchten, wenn es beginnt, überzulaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-Try-Fallback-Option verwenden und ihn in die `position-try-fallbacks` Liste aufnehmen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. Effektiv ist dies eine Abkürzung für das Erstellen einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt die Verwendung von `position-area` Position Try-Fallback-Optionen. Wir verwenden denselben HTML- und CSS-Code, außer der Infobox-Positionierung. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area` Werte — `oben`, `oben-rechts`, `rechts`, `unten-rechts`, `unten`, `unten-links` und `links`. Das positionierte Element wird vernünftig positioniert, egal an welchem Viewport-Rand sich der Anker nähert. Dieser ausführliche Ansatz ist granularer und flexibler als der Ansatz mit den vordefinierten Werten.

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
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

> [!NOTE]
> Sie können keine `position-area` Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste einfügen.

Scrollen Sie die Seite und betrachten Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein entwicklerdefinierter Name für die Position-Try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste der Try-Fallback-Optionen innerhalb des Werts der {{cssxref("position-try-fallbacks")}} Eigenschaft angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, wird die letzte in der Dokumentreihenfolge die anderen überschreiben. Vermeiden Sie die Verwendung desselben Namens für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen; dies macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte Try-Fallback-Option, einschließlich, wie das positionierte Element platziert und dimensioniert werden soll, und alle Ränder. Die eingeschränkte Liste der zulässigen Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Margeneigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbst-Ausrichtungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größeneigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die im At-Regel enthaltenen Werte werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn eine der Eigenschaften zuvor auf dem positionierten Element gesetzt war, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte aus der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

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
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionsliste einfügen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über den Rand der Seite hinwegläuft, bleibt die Infobox über dem Anker sitzen, und die Position-Try-Fallback-Optionen, die in der `position-try-fallbacks` Eigenschaft festgelegt wurden, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand eingestellt hat. Diese Werte ändern sich, wenn verschiedene Position-Try-Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks` Eigenschaft aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Diese bewegt die Infobox nach links vom Anker, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unter den Anker und setzt einen geeigneten Rand. Sie beinhaltet keinen `width` Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width` Eigenschaft festgelegt ist.
- Der Browser versucht dann die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, wobei derselbe `width` Deskriptorwert angewendet wird, aber die `position-area` und `margin` Werte gespiegelt sind, um die Infobox entsprechend rechts zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich ist, um das positionierte Element vom Überlaufen abzuhalten, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese funktioniert ähnlich wie die anderen Fallback-Optionen, platziert das positionierte Element jedoch unten rechts vom Anker.

Wenn keine der Fallback-Optionen erfolgreich ist, um das positionierte Element vom Überlaufen abzuhalten, wird die Position auf den ursprünglichen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben ihre Werte die Standardwerte, die auf dem positionierten Element festgelegt sind. Zum Beispiel, der Standard `width` Wert, der auf dem positionierten Element festgelegt ist, ist `200px`, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und betrachten Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn der Anker sich dem Rand des Viewports nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Verwenden von `position-try-order`

Die {{cssxref("position-try-order")}} Eigenschaft hat einen etwas anderen Fokus als der Rest der Position-Try-Funktionalität, da sie Position-Try-Fallback-Optionen verwendet, wenn das positionierte Element zuerst angezeigt wird und nicht, wenn es im Überlauf ist.

Diese Eigenschaft ermöglicht es Ihnen, anzugeben, dass Sie möchten, dass das positionierte Element zunächst mit der Position-Try-Fallback-Option angezeigt wird, die dem umgebenden Block die größte Breite oder Höhe gibt. Dies wird erreicht, indem die `meiste-Höhe`, `meiste-Breite`, `meiste-Block-Größe` oder `meiste-Inline-Größe` Werte gesetzt werden. Sie können auch die Auswirkungen von zuvor gesetzten `position-try-order` Werten mit dem `normal` Wert entfernen.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die anfängliche Positionierung, die dem Element zugewiesen ist, hat `position-try-order` keine Wirkung.

Schauen wir uns eine Demo an, die die Auswirkungen dieser Eigenschaft zeigt. Der HTML-Code ist derselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Radio-Buttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um ihre Auswirkungen zu sehen.

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

Wir fügen eine benutzerdefinierte Try-Fallback-Option hinzu — `--custom-bottom` — die das Element unter dem Anker platziert und einen Rand hinzufügt:

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
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Wir positionieren die Infobox zunächst oben auf dem Anker und geben ihr dann unsere benutzerdefinierte Try-Fallback-Option:

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;
  position-try-fallbacks: --custom-bottom;
}
```

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Radio-Buttons setzt. Wenn ein Radio-Button ausgewählt wird, wird sein Wert in der `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `meiste-Höhe` Ordnungsoption auszuwählen. Dies hat den Effekt, dass die `--custom-bottom` Position-Try-Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies tritt ein, weil unter dem Anker mehr Platz ist als darüber.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von anker-positionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nahe am Rand des Viewports ist, möchten Sie sein zugehöriges Element möglicherweise insgesamt ausblenden. Die {{cssxref("position-visibility")}} Eigenschaft ermöglicht es Ihnen, Bedingungen festzulegen, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `immer` angezeigt. Der Wert `kein-Überlauf` wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein enthaltendes Element oder den Viewport zu überlaufen.

Der Wert `anchor-stehen-nicht` hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _vollständig_ versteckt sind, entweder indem sie ihr enthaltendes Element (oder den Viewport) überlaufen oder von anderen Elementen bedeckt werden. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als hätten es und seine Nachkommen eine {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig davon, welcher tatsächliche `visibility` Wert gesetzt ist.

Schauen wir uns diese Eigenschaft im Einsatz an.

Dieses Beispiel verwendet denselben HTML- und CSS-Code wie in den vorherigen Beispielen, wobei die Infobox an der Unterkante des Ankers befestigt ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis sie den Viewport zu überlaufen beginnt.

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
  anchor-name: --my-anchor;
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
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  margin-bottom: 5px;
  position-area: top span-all;
  position-visibility: no-overflow;
}
```

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Viewports erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elementgrößen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
