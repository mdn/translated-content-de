---
title: "Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Verbergen"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Bei der Verwendung der [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig, sicherzustellen, dass verankerungspositionierte Elemente immer an einer für den Benutzer praktisch zugänglichen Stelle erscheinen, sofern dies möglich ist, unabhängig davon, wo die Verankerung positioniert ist. Beispielsweise wandern beim Scrollen der Seite Verankerungen und deren zugehörige positionierte Elemente zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, das Ansichtsfenster zu überschreiten, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm sichtbar zu machen, beispielsweise auf der gegenüberliegenden Seite der Verankerung.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach zu verbergen — zum Beispiel, wenn ihre Verankerungen außerhalb des Bildschirms sind und deren Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie Sie die CSS-Verankerungspositionierungsmechanismen verwenden können, um diese Probleme zu verwalten — **Position-Try-Fallback-Optionen** und **Bedingtes Verbergen**. Position-Try-Fallback-Optionen bieten alternative Positionen, die der Browser versuchen kann zu verwenden, um positionierte Elemente bei Beginn eines Überlaufs auf dem Bildschirm zu halten. Bedingtes Verbergen ermöglicht die Angabe von Bedingungen, unter denen die Verankerung oder ein positioniertes Element verborgen wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Verankerungspositionierung finden Sie unter [Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element befestigt ist und der Benutzer den Inhalt scrollt, sodass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, wird der Tooltip dieses UI-Features vom Bildschirm gescrollt. Die CSS-Verankerungspositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls gibt eine oder mehrere alternative Position-Try-Fallback-Optionen an, die der Browser versuchen kann, um zu verhindern, dass das positionierte Element überschreitet.

Position-Try-Fallback-Optionen können angegeben werden durch:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area`-Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}}-At-Regel definiert werden.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft die Angabe verschiedener Optionen, die dazu führen, dass eine verfügbare Position-Try-Option in der Vorzugsreihenfolge anstelle der anfänglichen Positionierung des Elements festgelegt wird. Beispielsweise möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der über mehr verfügbare Höhe oder Breite verfügt.

Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um `position-try-order`- und `position-try-fallbacks`-Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen ergibt verankerungspositionierter Inhalt keinen Sinn, wenn die Verankerung außerhalb des Bildschirms ist oder umgekehrt. Beispielsweise könnten Sie eine Verankerung haben, die eine Quizfrage enthält, und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und wünschen, diese entweder zusammen oder gar nicht anzuzeigen. Dies kann mit bedingtem Verbergen erreicht werden, welches über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente verborgen werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der `position-try-fallbacks`-Eigenschaft (in der Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic) definiert) werden die Position des verankerungspositionierten Elements über eine oder beide Achsen „umkehren“, wenn das Element ansonsten überschreiten würde.

Das Element kann so eingestellt werden, dass es sich über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie dreht, die von einer Ecke der Verankerung durch ihr Zentrum zur gegenüberliegenden Ecke verläuft (`flip-start`). Diese drei Werte kehren das Element um, spiegeln seine Position auf der gegenüberliegenden Seite für die ersten beiden Werte und auf einer benachbarten Seite für `flip-start`. Wenn ein Element beispielsweise `10px` über seiner Verankerung positioniert ist und beim Überschreiten des Ankers oben beginnt, würde der Wert `flip-block` das positionierte Element um `10px` unterhalb der Verankerung umdrehen.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}}-Elemente hinzu. Das erste wird unser Verankerungselement sein, und das zweite wird relativ zur Verankerung positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>`-Element größer als das Ansichtsfenster, damit wir die Verankerung und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir die Verankerung absolut, sodass sie in der Nähe des Zentrums des anfänglichen `<body>`-Renderings erscheint:

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

Das verankerungspositionierte Element erhält eine feste Positionierung und wird mit der linken oberen Ecke der Verankerung durch ein `position-area` verbunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, um das positionierte Element zu bewegen, um zu verhindern, dass es überschreitet, wenn sich die Verankerung dem Rand des Ansichtsfensters nähert.

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
> Wenn mehrere Position-Try-Fallback-Optionen angegeben sind, werden diese durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo zu scrollen, sodass die Verankerung beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie die Verankerung an den oberen Rand des Ansichtsfensters. Das positionierte Element dreht sich unten links von der Verankerung, um Überläufe zu vermeiden.
- Bewegen Sie die Verankerung an den linken Rand des Ansichtsfensters. Das positionierte Element dreht sich oben rechts von der Verankerung, um Überläufe zu vermeiden.

Wenn Sie die Verankerung in die obere linke Ecke des Ansichtsfensters bewegen, werden Sie ein Problem feststellen — wenn das positionierte Element in der Block- und Inlinerichtung beginnt, zu überschreiten, kehrt es zu seiner Standardposition oben links zurück und überschreitet in beide Richtungen, was wir nicht wollen.

Dies geschieht, weil wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen, nach einer zu suchen, die bewirkt, dass das positionierte Element vollständig im Ansichtsfenster oder Block enthalten ist. Wenn es keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Renderposition, ohne angewandte Fallback-Optionen.

Der nächste Abschnitt zeigt, wie Sie dieses Problem beheben können.

## Kombinieren mehrerer Werte in einer Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) Namen in einen einzigen leerzeichengetrennten Try-Fallback-Optionswert innerhalb der kommagetrennten `position-try-fallbacks`-Liste zu stecken. Bei dem Versuch, diese Fallback-Optionen anzuwenden, kombiniert der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option.

Verwenden wir eine kombinierte Try-Fallback-Option, um das Problem zu beheben, das wir mit dem vorherigen Demo gefunden haben. Der HTML- und CSS-Code in diesem Demo ist derselbe, außer für die Positionierungsstile der Infobox. In diesem Fall wird ihm eine dritte Position-Try-Fallback-Option gegeben: `flip-block flip-inline`:

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

Dies bedeutet, dass der Browser zuerst `flip-block` versucht und dann `flip-inline`, um Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird es dann versuchen, die beiden zu kombinieren, indem er die Position des Elements gleichzeitig in der Block- _und_ Inlinerichtung umdreht. Wenn Sie die Verankerung nun in Richtung der oberen _und_ linken Ränder des Ansichtsfensters scrollen, dreht sich das positionierte Element zur unteren rechten Ecke.

{{ EmbedLiveSample("Kombinieren mehrerer Werte in einer Option", "100%", "250") }}

## Verwendung von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur die Platzierung des positionierten Elements über Achsen umkehren können. Was, wenn Sie ein verankerungspositioniertes Element haben, das oben links von seiner Verankerung positioniert ist, und seine Position direkt unter der Verankerung ändern möchten, wenn es anfangen sollte zu überschreiten?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}}-Wert als Position-Try-Fallback-Option verwenden, indem Sie ihn in die `position-try-fallbacks`-Liste aufnehmen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionierungsbereich. In der Tat ist es eine Abkürzung, um eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt die Verwendung von `position-area`-Positions-Try-Fallback-Optionen. Wir verwenden den gleichen HTML- und CSS-Code, außer für die Positionierung der Infobox. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area`-Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, unabhängig davon, welchen Rand des Ansichtsfensters die Verankerung erreicht. Dieser detaillierte Ansatz ist granulärer und flexibler als der Ansatz mit vordefinierten Werten.

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
> Sie können keine `position-area`-Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste hinzufügen.

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Position-Try-Fallback-Optionen, während sich die Verankerung dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Verwendung von `position-area` Try-Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Zum Verwenden von benutzerdefinierten Positions-Fallback-Optionen, die nicht über die oben genannten Mechanismen verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}}-At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Positions-Try-Fallback-Option. Dieser Name kann dann innerhalb der kommagetrennten Liste von Try-Fallback-Optionen innerhalb des Werts der {{cssxref("position-try-fallbacks")}}-Eigenschaft angegeben werden. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die letzte in der Dokumentenreihenfolge die anderen. Vermeiden Sie die Verwendung des gleichen Namens für Ihre Try-Fallback-Optionen _und_ Ihre Verankerungs- oder benutzerdefinierten Eigenschaftsnamen; dies macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte Try-Fallback-Option, einschließlich der Art und Weise, wie das positionierte Element platziert und dimensioniert werden soll, sowie etwaige Ränder. Die begrenzte Liste der zulässigen Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbstausrichtungs-](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionierungseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die in der At-Regel enthaltenen Werte werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn irgendwelche der Eigenschaften zuvor auf dem positionierten Element gesetzt waren, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden diese. Wir verwenden den gleichen HTML- und CSS-Basiskode wie in den vorherigen Beispielen.

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn sich die Infobox in keiner Richtung auf Seite befindet, sitzt die Infobox über der Verankerung, und die im Wert für `position-try-fallbacks` gesetzten Try-Fallback-Optionen werden ignoriert. Stellen Sie auch fest, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte werden geändert, wenn verschiedene Position-Try-Fallback-Optionen angewendet werden.

Wenn die Infobox zu überschreiten beginnt, versucht der Browser die im Wert für `position-try-fallbacks` aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox nach links der Verankerung, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unterhalb der Verankerung und setzt einen entsprechenden Rand. Sie enthält keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft festgelegt wurde.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width`-Deskriptorwert, aber die `position-area` und `margin` Werte sind gespiegelt, um die Infobox entsprechend rechts zu platzieren.
- Wenn keine der anderen Fallbacks es schaffen, das positionierte Element vom Überlaufen zu stoppen, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese funktioniert ähnlich wie die anderen Fallback-Optionen, platziert das positionierte Element jedoch unten rechts von der Verankerung.

Wenn keine der Fallbacks es schaffen, das Überschreiten des positionierten Elements zu stoppen, wird die Position auf den anfänglichen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben ihre Werte die auf dem positionierten Element gesetzten Standardwerte. Zum Beispiel wird die standardmäßig auf dem positionierten Element gesetzte `width` von `200px` gesetzt, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, beträgt ihre Breite `100px`.

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Position-Try-Fallback-Optionen, während sich die Verankerung dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen etwas anderen Fokus als der Rest der Position-Try-Funktionalität, da sie beim ersten Anzeigen des positionierten Elements auf Position-Try-Fallback-Optionen zurückgreift, anstatt während des Überlaufvorgangs.

Diese Eigenschaft erlaubt Ihnen zu spezifizieren, dass Sie das positionierte Element zuerst mittels der Position-Try-Fallback-Option angezeigt haben möchten, die dem enthaltenen Block die meiste Breite oder Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Effekte von zuvor gesetzten `position-try-order`-Werten mit dem `normal` Wert entfernen.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche zugewiesene Positionierung des Elements bietet, hat `position-try-order` keinen Effekt.

Sehen wir uns eine Demo an, die den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` mit Radiobuttons hinzugefügt haben, um verschiedene Werte von `position-try-order` auszuwählen und deren Effekte zu sehen.

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

Wir fügen eine benutzerdefinierte Try-Fallback-Option hinzu — `--custom-bottom` — die das Element unterhalb der Verankerung positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst oben auf der Verankerung und geben ihr dann unsere benutzerdefinierte Fallback-Option:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler auf die Radiobuttons setzt. Wenn ein Radiobutton ausgewählt wird, wird sein Wert auf die `position-try-order`-Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Ordnungsoption auszuwählen. Dies hat den Effekt, die `--custom-bottom` Position-Try-Fallback-Option anzuwenden, die das Element unterhalb der Verankerung positioniert. Dies geschieht, weil es mehr Platz unterhalb der Verankerung gibt als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Verbergen von verankerungspositionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein verankerungspositioniertes Element verbergen. Beispielsweise können Sie das zugehörige Element vollständig ausblenden, wenn das Verankerungselement abgeschnitten wird, weil es zu nah am Rand des Ansichtsfensters liegt. Die {{cssxref("position-visibility")}}-Eigenschaft erlaubt Ihnen die Angabe von Bedingungen, unter denen positionierte Elemente verborgen werden.

Standardmäßig wird das positionierte Element `immer` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überschreiten.

Der `anchors-visible` Wert hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Verankerungen _vollständig_ verborgen sind, entweder durch Überlaufen seines enthaltenden Elements (oder des Ansichtsfensters) oder durch Abdeckung durch andere Elemente. Das positionierte Element wird sichtbar, wenn ein Teil der Verankerungen noch sichtbar ist.

Ein stark verborgenes Element verhält sich, als ob es und seine Nachfahren-Elemente einen {{cssxref("visibility")}} Wert von `hidden` haben, unabhängig davon, was ihr tatsächlicher `visibility`-Wert ist.

Sehen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet das gleiche HTML und CSS wie in den vorherigen Beispielen, mit der Infobox, die an die untere Kante der Verankerung gebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig zu verbergen, wenn sie nach oben gescrollt wird, bis sie beginnt, das Ansichtsfenster zu überschreiten.

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

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Bedingtes Verbergen mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
