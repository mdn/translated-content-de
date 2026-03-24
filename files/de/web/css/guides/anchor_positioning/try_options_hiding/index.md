---
title: Fallback-Optionen und bedingtes Verbergen bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

Beim Einsatz von [CSS Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig sicherzustellen, dass verankerte Elemente immer an einem geeigneten Ort erscheinen, mit dem der Benutzer, wenn möglich, interagieren kann, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugeordneten positionierten Elemente zum Rand des Viewports. Wenn ein positioniertes Element beginnt, aus dem Viewport zu ragen, möchten Sie seine Position ändern, um es wieder auf den Bildschirm zu bringen, beispielsweise auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in manchen Situationen vorzuziehen sein, überstehende positionierte Elemente einfach auszublenden — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie man CSS-Anchor-Positionierungsmechanismen verwendet, um diese Probleme zu lösen — **Position-Try-Fallback-Optionen** und **bedingtes Verbergen**. Position-Try-Fallback-Optionen bieten alternative Positionen, die der Browser versuchen kann, um die positionierten Elemente beim Überlaufen auf dem Bildschirm zu halten. Bedingtes Verbergen erlaubt Bedingungen festzulegen, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS-Anchor-Positionierung siehe [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip am oberen rechten Rand eines UI-Elements fixiert ist und der Benutzer den Inhalt so scrollt, dass sich das UI-Element in der oberen rechten Ecke des Viewports befindet, wird der Tooltip dieses UI-Elements nicht mehr auf dem Bildschirm sein. CSS-Anchor-Positionierung löst solche Probleme. Die Eigenschaft {{cssxref("position-try-fallbacks")}} des Moduls gibt eine oder mehrere alternative Position-Try-Fallback-Optionen an, die der Browser versuchen kann, um zu verhindern, dass das positionierte Element überläuft.

Position-Try-Fallback-Optionen können spezifiziert werden durch:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert werden.

Außerdem ermöglicht die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen zu spezifizieren, die dazu führen, dass eine verfügbare Position-Try-Option gegenüber der anfänglichen Positionierung des Elements bevorzugt wird. Zum Beispiel möchten Sie das Element zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration zu spezifizieren.

In einigen Situationen macht verankerte Inhalte keinen Sinn, wenn der Anker außerhalb des Bildschirms ist oder umgekehrt. Zum Beispiel möchten Sie vielleicht einen Anker haben, der eine Quizfrage enthält, und Antworten, die in zugeordneten positionierten Elementen enthalten sind, und diese entweder zusammen oder gar nicht anzeigen. Dies kann mit bedingtem Verbergen erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überstehende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (im Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic) definiert) "flippen" die Position des verankerten Elements über eine oder beide Achsen, wenn das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie gespiegelt wird, die von einer Ecke des Ankers durch dessen Mitte zu seiner gegenüberliegenden Ecke führt (`flip-start`). Diese drei Werte spiegeln das Element, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und einer benachbarten Seite für `flip-start`. Zum Beispiel, wenn ein Element, das `10px` über seinem Anker positioniert ist, beginnt, über das obere Ende des Ankers hinauszuragen, würde der `flip-block` Wert das positionierte Element so spiegeln, dass es 10px unter seinem Anker ist.

In diesem Beispiel enthalten wir zwei {{htmlelement("div")}} Elemente. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>` Element größer als der Viewport, sodass wir den Anker und das positionierte Element im Viewport sowohl horizontal als auch vertikal scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir den Anker absolut, sodass er nahe der Mitte des initialen `<body>` Renderings erscheint:

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

Dem verankerten Element wird eine feste Positionierung und eine Bindung an die obere linke Ecke des Ankers über ein `position-area` gegeben. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, um das positionierte Element zu bewegen und es zu verhindern, wenn der Anker nahe an den Rand des Viewports kommt.

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

Versuchen Sie, das Demo so zu scrollen, dass der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an die Spitze des Viewports. Das positionierte Element spiegelt sich an die untere linke Ecke des Ankers, um Überlauf zu vermeiden.
- Bewegen Sie den Anker an die linke Seite des Viewports. Das positionierte Element spiegelt sich an die obere rechte Ecke des Ankers, um Überlauf zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Viewports bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element in der Block- und Inlinerichtung überläuft, flippt es zurück in seine Standardposition oben links und überläuft in beide Richtungen, was nicht gewollt ist.

Dies passiert, weil wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig zu versuchen. Der Browser versucht die Fallback-Optionen, indem er nach einer sucht, die dazu führt, dass das positionierte Element vollständig innerhalb des Viewports oder des enthaltenden Blocks gerendert wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Renderingposition, ohne dass Position-Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie man dieses Problem beheben kann.

## Kombination mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) in einen einzigen durch Leerzeichen getrennten Try-Fallback-Optionswert in der durch Kommas getrennten `position-try-fallbacks` Liste zu setzen. Beim Versuch, diese Fallback-Optionen anzuwenden, wird der Browser die individuellen Effekte in eine einzige kombinierte Fallback-Option zusammenfassen.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem aus dem vorherigen Demo zu beheben. Das HTML und CSS in diesem Demo sind gleich, mit Ausnahme der Positionierungsstile der Infobox. In diesem Fall erhält sie eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Dies bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird versucht, die beiden zu kombinieren und die Position des Elements in den Block- _und_ Inlinerichtungen gleichzeitig zu spiegeln. Wenn Sie nun den Anker in die oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element zur unteren rechten Seite flippen.

{{ EmbedLiveSample("Kombination mehrerer Werte in eine Option", "100%", "250") }}

## Verwendung von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber limitiert, da sie nur die Positionierung des positionierten Elements über Achsen spiegeln lassen. Was wäre, wenn Sie ein verankertes Element haben, das links oberhalb seines Ankers positioniert ist und dessen Position verändern möchten, so dass es direkt unter dem Anker liegt, wenn es anfängt zu überlaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-Try-Fallback-Option verwenden und ihn in die `position-try-fallbacks` Liste aufnehmen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. Im Grunde ist es eine Abkürzung für die Erstellung einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt die Verwendung von `position-area` Position-Try-Fallback-Optionen. Wir verwenden dasselbe HTML und CSS, mit Ausnahme der Positionierung der Infobox. In diesem Fall bestehen unsere Position-Try-Fallback-Optionen aus `position-area` Werten — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert sein, egal welcher Rand des Viewports der Anker sich nähert. Dieser ausführliche Ansatz ist feiner und flexibler als der Ansatz mit vordefinierten Werten.

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

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Verwendung von `position-area` Try-Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-Try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Try-Fallback-Optionsliste innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die zuletzt in der Dokumentenreihenfolge angegebene die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte Try-Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert werden soll, sowie eventuelle Ränder. Die begrenzte Liste der zulässigen Eigenschafts-Deskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [self-alignment](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größeigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in der At-Regel angeben, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn eine der Eigenschaften vorher auf dem positionierten Element gesetzt war, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt, was dazu führt, dass eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionenliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite hinausragt, sitzt die Infobox über dem Anker und die in der `position-try-fallbacks` Eigenschaft gesetzten Position-Try-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, während unterschiedliche Try-Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks` Eigenschaft aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies verschiebt die Infobox zur linken Seite des Ankers, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies verschiebt die Infobox an den unteren Rand des Ankers und setzt einen entsprechenden Rand. Sie enthält keinen `width` Deskriptor, sodass die Infobox auf ihre Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft gesetzt wird.
- Der Browser versucht dann die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert, aber die `position-area` und `margin` Werte werden gespiegelt, um die Infobox entsprechend rechts zu platzieren.
- Wenn keine der anderen Fallbacks Erfolg hat, das positionierte Element vom Überlaufen abzuhalten, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese funktioniert ähnlich wie die anderen Fallback-Optionen, platziert jedoch das positionierte Element in der unteren rechten Ecke des Ankers.

Wenn keine der Fallbacks Erfolg hat, das positionierte Element vom Überlaufen abzuhalten, wird die Position auf den anfänglichen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben deren Werte die auf das positionierte Element gesetzten Standardwerte. Zum Beispiel ist die Standardbreite des positionierten Elements `200px`, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Stil von verankerten Elementen basierend auf aktivem Fallback

Ein Problem, das die oben genannten Funktionen nicht lösen, ist die Aktualisierung des Stils eines verankerten Elements, um zu seinen unterschiedlichen Fallback-Optionen zu passen. Zum Beispiel ist es üblich, einen kleinen Pfeil auf einem Tooltip beizufügen, der auf das Ankerelement zeigt, mit dem es verbunden ist, um die Benutzerfreundlichkeit durch eine klarere visuelle Assoziation zu verbessern. Wenn sich das Tooltip an eine andere Position bewegt, müssen Sie die Position und Orientierung des Pfeils ändern, sonst sieht es falsch aus.

Zur Lösung dieses Problems können verankerte Container-Abfragen verwendet werden. Diese erweitern die Funktionalität von [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), um zu ermöglichen, dass erkannt wird, wann eine spezifische Fallback-Option auf ein verankertes Element angewendet wird, und als Ergebnis CSS auf dessen Nachkommen angewendet wird. Spezifisch verlassen sich verankerte Container-Abfragen auf zwei Funktionen:

- Die {{cssxref("container-type")}} Eigenschaft `anchored` Wert: Dies auf das verankerte Element anwenden, um zu beginnen `fertiggstellt`,`container-type: anchored` wird auf das verankerte Element gesetzt um zu beginnen zu erkennen, wann verschiedene Fallback-Optionen darauf angewendet werden.
- Das {{cssxref("@container")}} At-Regel `anchored` Schlüsselwort: Dies wird von einem Satz von Klammern gefolgt, innerhalb derer der `fallback` Deskriptor enthalten ist. Der Wert des Deskriptors ist ein `position-try-fallbacks` Wert.

Zum Beispiel, lassen Sie uns annehmen, dass wir ein verankertes Tooltip-Element haben, das standardmäßig über seinem Anker positioniert ist durch einen {{cssxref("position-area")}} Wert von `top`, aber einen {{cssxref("position-try-fallbacks")}} Wert von `flip-block` spezifiziert hat. Dies wird dazu führen, dass das Tooltip in der Blockrichtung nach unten zum Anker hin flippt, wenn es beginnt, den oberen Rand des Viewports zu überlaufen. Wenn wir erkennen möchten, wann das Fallback auf das Tooltip angewendet wird, müssen wir zunächst `container-type: anchored` darauf setzen, um es in einen verankerten Abfragcontainer zu verwandeln.

```css
.tooltip {
  position: absolute;
  position-anchor: --myAnchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Mit diesem in Kraft können wir nun eine Containerabfrage wie folgt schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Der Abfragetest — `anchored(fallback: flip-block)` — wird wahr zurückgeben, wenn die `flip-block` Fallback-Option auf das Tooltip angewendet wird, in diesem Fall werden die innerhalb des `@container` Blocks spezifizierten Styles angewendet. Sie könnten zum Beispiel die Position und Orientierung des Pfeilsymbols ändern, damit es weiterhin auf den Anker hin zeigt, die Richtung eines Farbverlaufs ändern usw.

Weitere Informationen zu verankerten Containerabfragen und einigen Beispielen finden Sie unter [Verwenden von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}} Eigenschaft hat einen leicht anderen Fokus als der Rest der Position-Try-Funktionalität, in dem sie die Position-Try-Fallback-Optionen verwendet, wenn das positionierte Element erstmals angezeigt wird , statt wenn es im Prozess des Überlaufens ist.

Diese Eigenschaft erlaubt Ihnen zu spezifizieren, dass Sie möchten, dass das positionierte Element zunächst mit der Position-Try-Fallback-Option angezeigt wird, die dem enthaltenden Block die meiste Breite oder Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Effekte zuvor gesetzter `position-try-order` Werte mit dem `normal` Wert entfernen.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die anfängliche Positionierung, die dem Element zugewiesen ist, hat `position-try-order` keinen Effekt.

Lassen Sie uns ein Demo anschauen, das den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Radio-Buttons enthält, die es Ihnen ermöglichen, verschiedene Werte von `position-try-order` auszuwählen, um ihre Effekte zu sehen.

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

Wir schließen eine benutzerdefinierte Try-Fallback-Option ein — `--custom-bottom` — die das Element unterhalb des Ankers positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst an der Oberseite des Ankers und geben ihr dann unsere benutzerdefinierte Try-Fallback-Option:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Radio-Buttons setzt. Wenn ein Radio-Button ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Ordnungsoption auszuwählen. Dies hat den Effekt, die `--custom-bottom` Position-Try-Fallback-Option anzuwenden, die das Element unterhalb des Ankers positioniert. Dies geschieht, weil es unterhalb des Ankers mehr Platz gibt als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden verankerter Elemente

In manchen Situationen möchten Sie vielleicht ein verankertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Viewports ist, möchten Sie vielleicht einfach sein zugeordnetes Element ganz ausblenden. Die {{cssxref("position-visibility")}} Eigenschaft erlaubt es Ihnen, Bedingungen zu spezifizieren, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der `no-overflow` Wert wird das positionierte Element stark ausblenden, wenn es beginnt, sein enthaltendes Element oder den Viewport zu überlaufen.

Der `anchors-visible` Wert hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _vollständig_ ausgeblendet sind, entweder durch das Überlaufen seines enthaltenden Elements (oder des Viewports) oder durch das Überdecktwerden von anderen Elementen. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich, als hätte es und seine Nachkommenelemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig davon, was ihr tatsächlicher `visibility` Wert ist.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, mit der Infobox an den unteren Rand des Ankers gebunden. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie so weit nach oben gescrollt wird, dass sie den Viewport zu überlaufen beginnt.

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

Scrollen Sie nach unten auf der Seite und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Viewports erreicht:

{{ EmbedLiveSample("Bedingungsloses Verbergen mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Anker-Positionierung](/en-US/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
