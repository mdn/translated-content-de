---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Bei der Verwendung [von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig zu gewährleisten, dass ankerpositionierte Elemente, wenn möglich, immer an einem günstigen Ort erscheinen, damit der Benutzer mit ihnen interagieren kann, unabhängig davon, wo der Anker positioniert ist. Wenn Sie zum Beispiel die Seite scrollen, bewegen sich Anker und deren assoziierte positionierte Elemente zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, über das Ansichtsfenster hinauszulaufen, sollten Sie seine Position ändern, um es wieder auf dem Bildschirm zu platzieren, beispielsweise auf der gegenüberliegenden Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie Sie Mechanismen der CSS-Ankerpositionierung verwenden, um diese Probleme zu verwalten — **Position-try Fallback-Optionen** und **bedingtes Ausblenden**. Position-try Fallback-Optionen bieten alternative Positionen, in denen der Browser versucht, die positionierten Elemente zu platzieren, um sie auf dem Bildschirm zu halten, sobald sie überzulaufen beginnen. Bedingtes Ausblenden ermöglicht die Festlegung von Bedingungen, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung finden Sie unter [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip am oberen rechten Rand eines UI-Elements fixiert ist, wird, wenn der Benutzer den Inhalt nach oben scrollt, so dass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, der Tooltip dieses UI-Features vom Bildschirm scrollen. Die CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}} Eigenschaft des Moduls spezifiziert eine oder mehrere alternative Position-try Fallback-Optionen, damit der Browser versucht, das Überlaufen des positionierten Elements zu verhindern.

Position-try Fallback-Optionen können wie folgt angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit dem {{cssxref("@position-try")}} At-Regel definiert werden.

Zusätzlich ermöglicht die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen zu spezifizieren, die dazu führen, dass eine verfügbare Position-try Option anstelle der ursprünglichen Positionierung des Elements bevorzugt eingestellt wird. Zum Beispiel möchten Sie das Element möglicherweise zuerst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurznotierungseigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration zu spezifizieren.

In einigen Situationen ergibt der Inhalt ankerpositionierter Elemente keinen Sinn, wenn der Anker außerhalb des Bildschirms ist, oder umgekehrt. Zum Beispiel könnten Sie einen Anker mit einer Quizfrage haben, und Antworten sind in assoziierten positionierten Elementen enthalten, und Sie möchten beide zusammen oder gar nicht anzeigen. Dies kann mit bedingtem Ausblenden erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (in den Spezifikationen als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)s definiert) "spiegeln" die Position des ankerpositionierten Elements über eine oder beide Achsen, wenn das Element ansonsten überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie gespiegelt wird, die von einer Ecke des Ankers durch dessen Zentrum zu seiner gegenüberliegenden Ecke verläuft (`flip-start`). Diese drei Werte spiegeln das Element, indem sie seine Position bei den ersten beiden Werten auf der gegenüberliegenden Seite und bei `flip-start` auf einer angrenzenden Seite spiegeln. Zum Beispiel, wenn ein Element `10px` über seinem Anker positioniert und am oberen Rand des Ankers beginnt, überzulaufen, würde der `flip-block` Wert das positionierte Element `10px` unter seinen Anker spiegeln.

In diesem Beispiel binden wir zwei {{htmlelement("div")}} Elemente ein. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>` Element, damit es größer als das Ansichtsfenster ist, sodass wir den Anker und das positionierte Element im Ansichtsfenster sowohl horizontal als auch vertikal scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Um Veranschaulichungszwecke geben wir dem Anker eine absolute Position, so dass er in der Nähe der Mitte der Anfangsdarstellung von `<body>` erscheint:

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

Dem ankerpositionierten Element wird eine feste Positionierung gegeben und es wird an die obere linke Ecke des Ankers mit einem `position-area` angebunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;` um ihm einige Fallback-Optionen zu bieten, um das positionierte Element zu bewegen und es daran zu hindern zu überlaufen, wenn der Anker in die Nähe des Rands des Ansichtsfensters kommt.

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
> Wenn mehrere Position-try Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo zu scrollen, so dass der Anker in die Nähe der Ränder kommt:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Ansichtsfensters. Das positionierte Element spiegelt sich nach unten links vom Anker, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Ansichtsfensters. Das positionierte Element spiegelt sich nach oben rechts vom Anker, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in die Nähe der oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in der Block- und Inline-Richtung überzulaufen, spiegelt es sich zurück zu seiner Standardposition oben links und läuft in beide Richtungen über, was nicht das ist, was wir möchten.

Dies geschieht, weil wir dem Browser nur die Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser testet die Fallback-Optionen, um eine zu finden, die dazu führt, dass das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenden Blocks gerendert wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Darstellungsposition, ohne dass Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie Sie dieses Problem beheben können.

## Kombination mehrerer Werte zu einer Option

Es ist möglich, mehrere [vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) in einem einzelnen durch Leerzeichen getrennten Try-Fallback-Optionswert innerhalb der durch Kommas getrennten `position-try-fallbacks` Liste zu bündeln. Wenn versucht wird, diese Fallback-Optionen anzuwenden, kombiniert der Browser die individuellen Effekte zu einer einzigen kombinierten Fallback-Option.

Verwenden wir eine kombinierte Try-Fallback-Option, um das Problem zu beheben, das wir bei der vorherigen Demo gefunden haben. Der HTML- und CSS-Code in diesem Demo ist derselbe, außer für die Positionierungsstile der Infobox. In diesem Fall wird ihr eine dritte Position-try Fallback-Option gegeben: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um den Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, versucht er dann, die beiden zu kombinieren, indem er die Position des Elements gleichzeitig in Block- _und_ Inline-Richtung dreht. Nun, wenn Sie den Anker in Richtung der oberen _und_ linken Kanten des Ansichtsfensters scrollen, dreht das positionierte Element zur unteren rechten Ecke.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Verwendung von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur eine Spiegelung der Position des positionierten Elements über Achsen zulassen. Was wäre, wenn Sie ein anker-positioniertes Element zur oberen linken Ecke seines Ankers positioniert hätten und seine Position ändern wollten, um es direkt unter dem Anker zu platzieren, wenn es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-try Fallback-Option verwenden, indem Sie ihn in die `position-try-fallbacks` Liste einfügen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Position-Areal. Effektiv ist es eine Abkürzung zum Erstellen einer [benutzerdefinierten Position-Option](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Try-Fallback-Optionen im Einsatz. Wir verwenden denselben HTML- und CSS-Code, außer für die Positionierung der Infobox. In diesem Fall sind unsere Position-try Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird angemessen positioniert, egal welchem Rand des Ansichtsfensters sich der Anker nähert. Dieser ausführliche Ansatz ist granulärer und flexibler als der Ansatz mit vorgegebenen Werten.

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
> Sie können keine `position-area` Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-try Fallback-Liste einfügen.

Scrollen Sie die Seite und sehen Sie sich die Wirkung dieser Position-try Fallback-Optionen an, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-try Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste von Try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; dies macht die Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte Try-Fallback-Option, einschließlich wie das positionierte Element positioniert und dimensioniert werden sollte und jeglicher Ränder. Die begrenzte Liste der zulässigen Eigenschaftenbeschreibungen umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Einfügeigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbstausrichtungs](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionierungseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die in der At-Regel eingeschlossenen Werte werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn eine der Eigenschaften vorher auf das positionierte Element gesetzt wurde, werden diese Eigenschaftswerte von den Beschreibungswerten überschrieben. Wenn der Benutzer scrollt, wodurch eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten Try-Fallback-Optionen unter Verwendung von `@position-try`:

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
  margin-right: 10px;
}

@position-try --custom-bottom {
  position-area: bottom;
  margin-top: 10px;
}

@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin-left: 10px;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionsliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite hinausläuft, sitzt die Infobox über dem Anker, und die in der Eigenschaft `position-try-fallbacks` festgelegten Fallback-Optionen werden ignoriert. Achten Sie auch darauf, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Position-try Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt, überzulaufen, versucht der Browser die in der Eigenschaft `position-try-fallbacks` aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Diese bewegt die Infobox nach links vom Anker, passt den Rand entsprechend an und gibt der Infobox eine andere Breite.
- Dann versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unter den Anker und setzt einen entsprechenden Rand. Da kein `width` Beschreibungswert enthalten ist, kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width` Eigenschaft gesetzt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, wobei derselbe `width` Beschreibungswert angewendet wird, aber die `position-area` und `margin` Werte werden gespiegelt, um die Infobox angemessen rechts zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich verhindert, dass das positionierte Element überläuft, versucht der Browser die `--custom-bottom-right` Position als letzte Möglichkeit. Diese funktioniert ähnlich wie die anderen Fallback-Optionen, aber sie platziert das positionierte Element unten rechts vom Anker.

Wenn keine der Fallbacks erfolgreich verhindert, dass das positionierte Element überläuft, wird die Position auf den Initialwert `position-area: top;` zurückgesetzt.

> [!NOTE]
> Wenn eine Position-try Fallback-Option angewendet wird, überschreiben ihre Werte die Standardeinstellungen auf dem positionierten Element. Zum Beispiel ist die Standardbreite, die auf das positionierte Element eingestellt wird, `200px`, aber wenn die `--custom-right` Position-try Fallback-Option angewendet wird, wird deren Breite auf `100px` gesetzt.

Scrollen Sie die Seite und sehen Sie die Wirkung dieser Position-try Fallback-Optionen, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}} Eigenschaft hat einen etwas anderen Fokus als der Rest der Position-try Funktionalität, da sie Positions-try Fallback-Optionen bei der anfänglichen Anzeige des positionierten Elements verwendet, anstatt während es überläuft.

Diese Eigenschaft erlaubt es Ihnen zu spezifizieren, dass Sie möchten, dass das positionierte Element anfänglich mittels der Position-try Fallback-Option angezeigt wird, die dem enthaltenen Block die meiste Breite oder Höhe gibt. Dies geschieht durch Setzen der Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size`. Sie können auch die Effekte von vorher gesetzten `position-try-order` Werten mit dem `normal` Wert entfernen.

Wenn keine Position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, hat `position-try-order` keinen Effekt.

Schauen wir uns ein Demo an, das die Wirkung dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` mit Radio-Buttons hinzugefügt haben, um verschiedene Werte von `position-try-order` auszuwählen und deren Effekt zu sehen.

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

Wir fügen eine benutzerdefinierte Try-Fallback-Option — `--custom-bottom` — hinzu, die das Element unter dem Anker positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst oben am Anker und geben ihr dann unser benutzerdefiniertes Try-Fallback:

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

Abschließend fügen wir ein JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radio-Buttons setzt. Wenn ein Radio-Button ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie die `most-height` Order-Option auszuwählen. Dies hat den Effekt, dass die `--custom-bottom` Position-try Fallback-Option angewendet wird, die das Element unterhalb des Ankers positioniert. Dies geschieht, weil es mehr Platz unterhalb des Ankers gibt als darüber.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von anker-positionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten ist, da es sich zu nah am Rand des Ansichtsfensters befindet, möchten Sie das zugehörige Element möglicherweise komplett ausblenden. Die {{cssxref("position-visibility")}} Eigenschaft erlaubt es Ihnen, Bedingungen festzulegen, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der `no-overflow` Wert wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überlaufen.

Der `anchors-visible` Wert hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _komplett_ versteckt sind, entweder durch Überlauf des enthaltenden Elements (oder des Ansichtsfensters) oder indem sie von anderen Elementen überdeckt werden. Das positionierte Element bleibt sichtbar, wenn ein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich, als hätte es und seine untergeordneten Elemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig von ihrem tatsächlichen `visibility` Wert.

Sehen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet denselben HTML- und CSS-Code wie die vorherigen Beispiele, wobei die Infobox an den unteren Rand des Ankers gebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie komplett auszublenden, wenn sie nach oben gescrollt wird und beginnt, das Ansichtsfenster zu überlaufen.

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

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
