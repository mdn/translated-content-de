---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Beim Einsatz von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass Anker-positionierte Elemente, wenn möglich, immer an einem für den Benutzer bequem zugänglichen Ort erscheinen, unabhängig davon, wo der Anker positioniert ist. Wenn Sie beispielsweise die Seite scrollen, bewegen sich Anker und deren zugehörige positionierte Elemente zum Rand des Viewports. Wenn ein positioniertes Element den Viewport zu überlaufen beginnt, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm zu haben, zum Beispiel auf die gegenüberliegende Seite des Ankers.

Alternativ ist es in einigen Situationen möglicherweise vorzuziehen, überlaufende positionierte Elemente einfach auszublenden – beispielsweise wenn deren Anker außerhalb des Bildschirms sind und deren Inhalt keinen Sinn ergeben könnte.

Dieser Leitfaden erklärt, wie man die Mechanismen der CSS-Ankerpositionierung nutzt, um diese Probleme zu bewältigen — **Position-try-Fallback-Optionen** und **bedingtes Ausblenden**. Fallback-Optionen bieten alternative Positionen, in die der Browser versucht, positionierte Elemente zu verschieben, wenn sie zu überlaufen beginnen, um sie auf dem Bildschirm zu halten. Bedingtes Ausblenden ermöglicht es, Bedingungen zu spezifizieren, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung finden Sie unter [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element befestigt ist, und der Benutzer den Inhalt so scrollt, dass die UI-Funktion in der oberen rechten Ecke des Viewports ist, wird der Tooltip dieser UI-Funktion vom Bildschirm gerollt sein. Die CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls gibt eine oder mehrere alternative Position-try-Fallback-Optionen an, um zu verhindern, dass das positionierte Element überläuft.

Position-try-Fallback-Optionen können wie folgt festgelegt werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit dem {{cssxref("@position-try")}} At-Regel definiert sind.

Zusätzlich ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen anzugeben, die dazu führen, dass eine verfügbare Position-try-Option gegenüber der initialen Positionierung des Elements bevorzugt wird. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen ist Anker-positionierter Inhalt unlogisch, wenn der Anker außerhalb des Bildschirms ist oder umgekehrt. Sie könnten beispielsweise einen Anker mit einer Quizfrage haben und dazugehörige positionierte Elemente, die Antworten enthalten, und möchten diese entweder zusammen oder gar nicht anzeigen. Dies kann mit bedingtem Ausblenden erreicht werden, welches über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks`-Eigenschaft (in der Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s definiert) werden die Position des Anker-positionierten Elements über eine oder beide Achsen "umdrehen", wenn das Element andernfalls überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Block-Achse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie, die von einer Ecke des Ankers durch sein Zentrum zu seiner gegenüberliegenden Ecke gezeichnet wird (`flip-start`), umkippt. Diese drei Werte kippen das Element um, spiegeln seine Position auf der gegenüberliegenden Seite für die ersten beiden Werte wider und auf einer benachbarten Seite für `flip-start`. Zum Beispiel, wenn ein Element `10px` über seinem Anker positioniert ist und anfängt, am oberen Rand des Ankers zu überlaufen, würde der `flip-block`-Wert das positionierte Element dazu bringen, sich `10px` unterhalb seines Ankers zu befinden.

In diesem Beispiel haben wir zwei {{htmlelement("div")}}-Elemente. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir stylen das `<body>`-Element größer als den Viewport, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport bewegen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zum Veranschaulichen positionieren wir den Anker absolut, sodass er nahe dem Zentrum der anfänglichen `<body>`-Darstellung erscheint:

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

Das Anker-positionierte Element erhält eine feste Positionierung und ist am oberen linken Eckpunkt des Ankers mit einem `position-area` verankert. Es erhält `position-try-fallbacks: flip-block, flip-inline;` um ihm einige Fallback-Optionen zu bieten, um das positionierte Element zu verschieben, damit es nicht überlädt, wenn der Anker sich dem Rand des Viewports nähert.

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
> Wenn mehrere Position-try-Fallback-Optionen angegeben werden, sind sie durch Kommata getrennt und in der Reihenfolge, in der sie angegeben werden, versucht.

Versuchen Sie das Demo so zu scrollen, dass der Anker dem Rand nahekommt:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an die Spitze des Viewports. Das positionierte Element wechselt zur unteren linken Ecke des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker nach links im Viewport. Das positionierte Element wechselt zur oberen rechten Ecke des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker zur oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — als das positionierte Element beginnt im Block- und Inline-Richtung zu überlaufen, wechselt es zurück zu seiner standardmäßigen oberen linken Position und überläuft in beiden Richtungen, was nicht das ist, was wir wollen.

Das passiert, weil wir dem Browser nur Position-Optionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir gaben ihm nicht die Möglichkeit, beide gleichzeitig zu versuchen. Der Browser versucht die Fallback-Optionen, sucht nach einer, die dazu führt, dass das positionierte Element vollständig innerhalb des Viewports oder eines enthaltenen Blocks gerendert wird. Wenn es keine findet, wird das positionierte Element in seiner ursprünglich definierten Renderposition ohne Position-Fallback-Optionen angezeigt.

Der nächste Abschnitt zeigt, wie man dieses Problem beheben kann.

## Mehrere Werte zu einer Option kombinieren

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) in einen einzigen durch Leerzeichen getrennten Try-Fallback-Optionswert innerhalb der durch Komma getrennten `position-try-fallbacks` Liste zu setzen. Beim Versuch, diese Fallback-Optionen anzuwenden, wird der Browser die individuellen Effekte in eine einzige kombinierte Fallback-Option zusammenfassen.

Verwenden wir eine kombinierte Try-Fallback-Option, um das Problem, das wir im vorherigen Demo gefunden haben, zu beheben. HTML und CSS in diesem Demo sind gleich, abgesehen von den Positionierungsstilen der Infobox. In diesem Fall erhält es eine dritte Position-try-Fallback-Option: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zunächst `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er versuchen, beide zu kombinieren und die Position des Elements gleichzeitig in Block- und Inlinerichtung umzukippen. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Rändern des Viewports scrollen, wird das positionierte Element zur unteren rechten Ecke übergehen.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## `position-area` Try-Fallback-Optionen verwenden

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur die verspiegelte Platzierung des positionierten Elements über Achsen erlauben. Was, wenn Sie ein Anker-positioniertes Element hatten, das an der oberen linken Ecke seines Ankers positioniert ist, und wollten seine Position ändern, direkt unterhalb des Ankers zu sein, wenn es beginnt überzulaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-Try-Fallback-Option verwenden und in die Liste der `position-try-fallbacks` aufnehmen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. In der Praxis ist es eine Abkürzung zur Erstellung einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt, wie `position-area`-Positionen als Try-Fallback-Optionen verwendet werden. Wir nutzen das gleiche HTML und CSS, abgesehen von der Infobox-Positionierung. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, egal an welche Viewportränder der Anker herantritt. Dieser detaillierte Ansatz ist granulärer und flexibler als der Ansatz mit den vordefinierten Werten.

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

Scrollen Sie die Seite und beobachten Sie die Wirkung dieser Position-Try-Fallback-Optionen, wenn der Anker den Rand des Viewports erreicht:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie eigene mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Positions-Fallback-Option. Dieser Name kann dann innerhalb der durch Komma getrennten Liste der Try-Fallback-Optionen innerhalb des Wertes der {{cssxref("position-try-fallbacks")}} Eigenschaft angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentenreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, wird aber das Verständnis Ihres CSS sehr erschweren.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte Try-Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert sein soll und alle Abstände. Die begrenzte Liste der zulässigen Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Einbettungseigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Eigenalignierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in die At-Regel schreiben, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn irgendeiner der Eigenschaften vorher auf dem positionierten Element gesetzt war, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und dadurch eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte aus der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel definieren und verwenden wir mehrere benutzerdefinierte Try-Fallback-Optionen. Wir verwenden denselben HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen damit, vier benutzerdefinierte Try-Fallback-Optionen mit `@position-try` zu definieren:

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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir diese in der Positionsliste durch Nennung ihrer Namen einbeziehen:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert wird. Wenn die Infobox nicht in irgendeine Richtung über den Seitenrand überläuft, sitzt sie über dem Anker und die Pposition-Try-Fallback-Optionen, die in der `position-try-fallbacks` Eigenschaft gesetzt wurden, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene position-Try-Fallback-Optionen angewendet werden.

Wenn die Infobox anfängt zu überlaufen, versucht der Browser die Positionsoptionen, die in der `position-try-fallbacks` Eigenschaft angegeben sind:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox zur linken Seite des Ankers, passt die Ränder entsprechend an und gibt der Infobox eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unter den Anker und setzt einen passenden Rand. Es beinhaltet keine `width`-Deskriptor, so dass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft gesetzt wurde.
- Der Browser versucht dann die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left`-Position, mit dem gleichen `width`-Deskriptorwert, aber die `position-area` und `margin`-Werte werden gespiegelt, um die Infobox entsprechend rechts zu platzieren.
- Wenn keine der anderen Fallbacks es schaffen, das Überlaufen des positionierten Elements zu stoppen, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, aber es platziert das positionierte Element rechts unten des Ankers.

Wenn keine der Fallbacks es schaffen, das Überlaufen des positionierten Elements zu stoppen, wird die Position auf den anfangs festgelegten `position-area: top;`-Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben deren Werte die Standardwerte, die auf dem positionierten Element gesetzt sind. Zum Beispiel ist die Standardbreite, die auf dem positionierten Element festgelegt ist, `200px`, aber wenn die `--custom-right`-Option für den Position-Try-Fallback angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Position-Try-Fallback-Optionen, wenn der Anker den Rand des Viewports erreicht:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## `position-try-order` verwenden

Die {{cssxref("position-try-order")}} Eigenschaft hat einen etwas anderen Fokus als der Rest der Position-Try-Funktionalität, da sie Positions-Try-Fallback-Optionen verwendet, wenn das positionierte Element erstmals angezeigt wird, anstatt wenn es am Überlaufen ist.

Diese Eigenschaft erlaubt es Ihnen zu spezifizieren, dass Sie möchten, dass das positionierte Element initial durch die Try-Fallback-Option dargestellt wird, die seinem enthaltenden Block die meiste Breite oder Höhe verleiht. Dies wird erreicht durch Setzen der Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size`. Sie können auch die Effekte von zuvor gesetzten `position-try-order` Werten mit dem `normal` Wert entfernen.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, hat `position-try-order` keinen Effekt.

Schauen wir uns ein Demo an, das die Wirkung dieser Eigenschaft zeigt. das HTML ist gleich wie in den vorherigen Beispielen, allerdings haben wir ein `<form>` hinzugefügt, das Auswahlknöpfe enthält, die es ermöglichen, verschiedene Werte von `position-try-order` auszuwählen, um ihre Auswirkungen zu sehen.

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

Wir schließen eine benutzerdefinierte Try-Fallback-Option ein — `--custom-bottom` — welche das Element unter dem Anker positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst über dem Anker und geben ihr dann unseren benutzerdefinierten Try-Fallback:

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

Schließlich fügen wir JavaScript hinzu, welches einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Auswahlknöpfe setzt. Wenn ein Auswahlknopf angewählt wird, wird dessen Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Probieren Sie die `most-height`-Reihenfolge aus. Dies hat den Effekt, die `--custom-bottom`-Position-Try-Fallback-Option anzuwenden, was das Element unterhalb des Ankers positioniert. Dies geschieht, weil es mehr Platz unterhalb des Ankers gibt als darüber.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von Anker-positionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein Anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten ist, weil es zu nah am Rand des Viewports ist, möchten Sie vielleicht sein zugehöriges Element insgesamt ausblenden. Die {{cssxref("position-visibility")}}-Eigenschaft erlaubt es Ihnen, Bedingungen zu spezifizieren, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark ausblenden**, wenn es anfängt, sein enthaltendes Element oder den Viewport zu überlaufen.

Der `anchors-visible`-Wert hingegen blendet das positionierte Element dann stark aus, wenn seine zugehörigen Anker _vollständig_ verdeckt sind, entweder durch Überlaufen seines enthaltenen Elements (oder des Viewports) oder durch Überdeckung durch andere Elemente. Das positionierte Element ist sichtbar, wenn irgendein Teil des Ankers noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als ob es und seine untergeordneten Elemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt haben, unabhängig davon, welchen tatsächlichen `visibility`-Wert sie haben.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox am unteren Rand des Ankers angehängt ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis sie den oberen Rand des Viewports erreicht.

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

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element versteckt wird, wenn es den Rand des Viewports erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Erlernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Erlernen: Elementsizing in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
