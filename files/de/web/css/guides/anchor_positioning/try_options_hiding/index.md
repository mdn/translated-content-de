---
title: Fallback-Optionen und bedingtes Verbergen bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Beim Verwenden von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig, sicherzustellen, dass anker-positionierte Elemente, wenn möglich, immer an einem für den Benutzer leicht zugänglichen Ort erscheinen, unabhängig davon, wo der Anker positioniert ist. Beispielsweise bewegen sich Anker und ihre assoziierten positionierten Elemente beim Scrollen der Seite zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, über das Ansichtsfenster hinaus zu laufen, sollten Sie seine Position ändern, um es wieder auf den Bildschirm zu setzen, beispielsweise auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden – zum Beispiel, wenn sich ihre Anker außerhalb des Bildschirms befinden und ihr Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie man CSS-Ankerpositionierungsmechanismen verwendet, um mit diesen Problemen umzugehen – **position-try Fallback-Optionen** und **bedingtes Verbergen**. Position-try-Fallback-Optionen bieten alternative Positionen, die der Browser ausprobieren kann, um das positionierte Element auf dem Bildschirm zu halten, während es zu überlaufen beginnt. Bedingtes Verbergen ermöglicht es, Bedingungen anzugeben, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist und der Benutzer den Inhalt so scrollt, dass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, wird der Tooltip dieses UI-Features vom Bildschirm gescrollt. CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls gibt eine oder mehrere alternative Position-Try-Fallback-Optionen an, die der Browser ausprobieren soll, um zu verhindern, dass das positionierte Element überflutet.

Position-try-Fallback-Optionen können festgelegt werden durch:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area`-Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert werden.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen festzulegen, die zu einer bevorzugten Position-try-Option führen, die gegenüber der anfänglichen Positionierung des Elements ausgewählt wird. Zum Beispiel möchten Sie das Element anfänglich in einem Raum mit mehr verfügbarer Höhe oder Breite anzeigen.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order`- und `position-try-fallbacks`-Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht der ankerpositionierte Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms ist, oder umgekehrt. Beispielsweise könnte es sein, dass ein Anker eine Quizfrage enthält und Antworten in assoziierten positionierten Elementen enthalten sind, und Sie möchten sie entweder zusammen oder gar nicht anzeigen. Dies kann mit bedingtem Verbergen erreicht werden, das über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente verborgen werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der `position-try-fallbacks`-Eigenschaft (im Spezifikationsdokument als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)s definiert) "drehen" die Position des anker-positionierten Elements über eine oder beide Achsen, wenn das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie gedreht wird, die von einer Ecke des Ankers durch dessen Zentrum zur gegenüberliegenden Ecke gezeichnet wird (`flip-start`). Diese drei Werte drehen das Element, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und einer angrenzenden Seite für `flip-start`. Zum Beispiel würde, wenn ein Element `10px` über seinem Anker positioniert ist und beim Überlaufen an der Oberseite des Ankers beginnt, der Wert `flip-block` das positionierte Element so drehen, dass es sich 10px unterhalb seines Ankers befindet.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}}-Elemente ein. Das erste wird unser Ankerelement, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir stylen das `<body>`-Element so, dass es größer als das Ansichtsfenster ist, damit wir den Anker und das positionierte Element horizontal und vertikal im Ansichtsfenster scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir den Anker absolut, sodass er nahe der Mitte der anfänglichen `<body>`-Darstellung erscheint:

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

Das ankerpositionierte Element erhält eine feste Positionierung und ist mit der oberen linken Ecke des Ankers über eine `position-area` verbunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, um das positionierte Element zu bewegen, damit es nicht überläuft, wenn sich der Anker dem Rand des Ansichtsfensters nähert.

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
> Wenn mehrere Position-try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo zu scrollen, sodass sich der Anker den Rändern nähert:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Ansichtsfensters. Das positionierte Element dreht sich links unten am Anker, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Ansichtsfensters. Das positionierte Element dreht sich rechts oben am Anker, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — sobald das positionierte Element in der Block- und in der Inline-Richtung zu überlaufen beginnt, dreht es sich in seine ursprüngliche obere linke Position zurück und überläuft in beiden Richtungen, was nicht gewünscht ist.

Dies geschieht, weil wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen, um eine zu finden, bei der das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenden Blocks dargestellt wird. Wenn er keine findet, wird das positionierte Element in seiner ursprünglich definierten Darstellungsposition ohne angewandte Positions-Fallback-Optionen dargestellt.

Im nächsten Abschnitt wird gezeigt, wie dieses Problem behoben werden kann.

## Kombination mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte try Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte try Option](#benutzerdefinierte_fallback-optionen)-Namen in einen einzigen, durch Leerzeichen getrennten try Fallback-Optionswert innerhalb der durch Kommas getrennten `position-try-fallbacks`-Liste zu setzen. Wenn diese Fallback-Optionen angewendet werden, kombiniert der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option.

Verwenden wir eine kombinierte try Fallback-Option, um das Problem zu beheben, das wir mit der vorherigen Demo gefunden haben. Das HTML und CSS in dieser Demo sind dieselben, außer den Infobox-Positionierungsstilen. In diesem Fall erhält es eine dritte Position-try-Fallback-Option: `flip-block flip-inline`:

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

Dies bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` ausprobieren wird, um ein Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide scheitern, wird er dann versuchen, beide gleichzeitig zu kombinieren, um die Position des Elements in der Block- _und_ Inline-Richtung gleichzeitig zu drehen. Jetzt, wenn Sie den Anker an die oberen _und_ linken Ränder des Ansichtsfensters scrollen, wird das positionierte Element zur unteren rechten Seite kippen.

{{ EmbedLiveSample("Kombination mehrerer Werte in eine Option", "100%", "250") }}

## Verwendung von `position-area`-try-Fallback-Optionen

Die vordefinierten `<try-tactic>`-try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur das Kippen der Position von Elementen über Achsen erlauben. Was, wenn Sie ein ankerpositioniertes Element haben, das in der oberen linken Ecke seines Ankers positioniert ist, und Sie möchten seine Position direkt unter den Anker ändern, wenn es beginnt zu überlaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}}-Wert als eine position-try-Fallback-Option verwenden, indem Sie ihn in die `position-try-fallbacks`-Liste einfügen. Dies erstellt automatisch eine try-Fallback-Option basierend auf diesem Positionsbereich. Im Effekt ist es eine Abkürzung für die Erstellung einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area`-Position-try-Fallback-Optionen in Gebrauch. Wir verwenden das gleiche HTML und CSS, außer der Infobox-Positionierung. In diesem Fall sind unsere Position-try-Fallback-Optionen `position-area`-Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, egal welcher Rand des Ansichtsfensters der Anker annähert. Dieser ausführliche Ansatz ist granularer und flexibler als der vordefinierte Werteansatz.

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
> Sie können keine `position-area`-try-Fallback-Optionen in eine Leerzeichen-getrennte kombinierte Positionsoption innerhalb einer position-try-Fallback-Liste einfügen.

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser position-try-Fallback-Optionen, wenn sich der Anker den Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Verwendung von `position-area` try Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste der try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}}-Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die zuletzt in der Dokumentenreihenfolge angegebene alle anderen. Vermeiden Sie es, denselben Namen für Ihre try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte try Fallback-Option, einschließlich der Art und Weise, wie das positionierte Element platziert und dimensioniert werden soll, sowie etwaiger Ränder. Die begrenzte Liste der zulässigen Eigenschaftsbeschreiber umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Margin-Eigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Self-Alignment](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größen-Eigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in der At-Regel einschließen, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte try-Fallback-Option angewendet wird. Wenn zuvor Eigenschaften auf dem positionierten Element festgelegt wurden, werden diese Eigenschaftswerte durch die Beschreibungswerte überschrieben. Wenn der Benutzer scrollt, was dazu führt, dass eine andere try-Fallback-Option oder keine try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten try-Fallback-Option aufgehoben.

In diesem Beispiel richten wir mehrere benutzerdefinierte try Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten try Fallback-Optionen mit `@position-try`:

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

Sobald unsere benutzerdefinierten try Fallback-Optionen erstellt sind, können wir sie in der Positionsliste einbeziehen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht in irgendeiner Richtung überflutet, sitzt die Infobox über dem Anker, und die position-try-Fallback-Optionen, die in der `position-try-fallbacks`-Eigenschaft festgelegt sind, werden ignoriert. Ebenfalls zu beachten ist, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, sobald unterschiedliche position-try-Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks`-Eigenschaft aufgelisteten Positionen:

- Der Browser versucht zuerst die `--custom-left`-Fallback-Position. Dies bewegt die Infobox links vom Anker, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom`-Position. Dies bewegt die Infobox unter den Anker und setzt einen geeigneten Rand. Sie enthält keinen `breite`-Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `breite`-Eigenschaft festgelegt ist.
- Der Browser versucht dann die `--custom-right`-Position. Dies funktioniert ähnlich wie die `--custom-left`-Position, wobei derselbe `breite`-Deskriptorwert angewendet wird, aber die `position-area`- und `margin`-Werte werden gespiegelt, um die Infobox auf der rechten Seite korrekt zu positionieren.
- Wenn keine der anderen Fallbacks es schaffen, das positionierte Element vor dem Überlaufen zu bewahren, versucht der Browser die `--custom-bottom-right`-Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, aber es platziert das positionierte Element unten rechts am Anker.

Wenn keine der Fallbacks es schaffen, das positionierte Element vor dem Überlaufen zu bewahren, wird die Position auf den anfänglichen `position-area: top;`-Wert zurückgesetzt.

> [!NOTE]
> Wenn eine position-try-Fallback-Option angewendet wird, überschreiben ihre Werte die Standardwerte, die auf das positionierte Element gesetzt wurden. Beispielsweise ist die Standardbreite, die auf das positionierte Element gesetzt wird, `200px`, aber wenn die `--custom-right`-position-try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und beachten Sie die Wirkung dieser position-try-Fallback-Optionen, wenn sich der Anker den Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen etwas anderen Fokus als der Rest der position-try-Funktionalität, da sie Positions-try-Fallback-Optionen nutzt, wenn das positionierte Element erstmalig angezeigt wird, statt während es dabei ist, überzulaufen.

Diese Eigenschaft erlaubt Ihnen anzugeben, dass Sie das positionierte Element anfänglich mit der Positions-try-Fallback-Option angezeigt haben möchten, die seinem enthaltenden Block die meiste Breite oder die meiste Höhe gibt. Dies wird erreicht, indem die `most-height`-, `most-width`-, `most-block-size`- oder `most-inline-size`-Werte gesetzt werden. Sie können auch die Auswirkungen zuvor gesetzter `position-try-order`-Werte mit dem Wert `normal` entfernen.

Wenn keine Position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements liefert, hat `position-try-order` keine Auswirkungen.

Schauen wir uns ein Demobeispiel an, das die Wirkung dieser Eigenschaft zeigt. Das HTML ist das gleiche wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Radiotasten enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um ihre Effekte zu sehen.

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

Wir fügen eine benutzerdefinierte try Fallback-Option hinzu — `--custom-bottom` — die das Element unter dem Anker positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst oben am Anker und geben ihr dann unsere benutzerdefinierte try Fallback:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Handler an den Radiotasten setzt. Wenn eine Radiotaste ausgewählt wird, wird ihr Wert auf die `position-try-order`-Eigenschaft der Infobox angewendet.

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

Versuchen Sie die Auswahl der `most-height`-Reihenfolgeoption. Dies hat den Effekt, dass die `--custom-bottom`-position-try-Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies tritt auf, weil mehr Platz unter dem Anker ist als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Verbergen von anker-positionierten Elementen

In einigen Situationen möchten Sie ein anker-positioniertes Element verbergen. Beispielsweise, wenn das Ankerelement abgeschnitten ist, weil es zu nah am Rand des Ansichtsfensters ist, möchten Sie möglicherweise sein zugehöriges Element ganz ausblenden. Die {{cssxref("position-visibility")}}-Eigenschaft ermöglicht es Ihnen, Bedingungen anzugeben, unter denen positionierte Elemente verborgen werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überfluten.

Der Wert `anchors-visible` hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker vollständig verborgen sind, entweder durch Überlaufen seines haltenden Elements (oder des Ansichtsfensters) oder durch Überdeckung durch andere Elemente. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark verborgenes Element verhält sich, als hätten es und seine Nachkommenelemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt, unabhängig davon, welchen tatsächlichen `visibility`-Wert sie haben.

Sehen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet das gleiche HTML und CSS wie in den vorherigen Beispielen, mit der Infobox, die an die untere Kante des Ankers gebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis zu dem Punkt, an dem sie beginnt, über das Ansichtsfenster hinauszulaufen.

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

{{ EmbedLiveSample("Bedingtes Verbergen mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Elemente in CSS skalieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
