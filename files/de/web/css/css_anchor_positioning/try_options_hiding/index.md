---
title: "Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Verstecken"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Beim Einsatz von [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente immer an einem für den Benutzer komfortablen Ort erscheinen, um mit ihnen zu interagieren, wenn möglich, unabhängig davon, wo der Anker positioniert ist. Beispielsweise bewegen sich Anker und ihre zugehörigen positionierten Elemente beim Scrollen der Seite zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, das Ansichtsfenster zu überlaufen, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm anzuzeigen, beispielsweise auf der gegenüberliegenden Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach zu verstecken — beispielsweise, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn ergeben.

Diese Anleitung erklärt, wie man CSS-Ankerpositionierungsmechanismen verwendet, um diese Probleme zu verwalten — **position-try Fallback-Optionen** und **bedingtes Verstecken**. Position-try Fallback-Optionen bieten alternative Positionen, die der Browser ausprobieren kann, um positionierte Elemente beim Überlauf auf dem Bildschirm zu halten. Bedingtes Verstecken erlaubt es, Bedingungen zu spezifizieren, unter denen der Anker oder ein positioniertes Element versteckt wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS Ankerpositionierung siehe [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionen im Überblick

Wenn ein Tooltip an der oberen rechten Ecke eines UI-Elements festgemacht ist und der Benutzer den Inhalt so scrollt, dass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, scrollt der Tooltip dieses UI-Features vom Bildschirm. Die CSS Ankerpositionierung löst solche Probleme. Die Eigenschaft {{cssxref("position-try-fallbacks")}} des Moduls spezifiziert eine oder mehrere alternative Position-try Fallback-Optionen, die der Browser ausprobieren kann, um zu verhindern, dass das positionierte Element überläuft.

Position-try Fallback-Optionen können wie folgt spezifiziert werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} Regel definiert werden.

Zusätzlich erlaubt die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen zu spezifizieren, die dazu führen, dass eine verfügbare Position-try Option gegenüber der ursprünglichen Positionierung des Elements bevorzugt wird. Beispielsweise könnten Sie das Element zunächst in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration zu spezifizieren.

In einigen Situationen macht es keinen Sinn, ankerpositionierten Inhalt anzuzeigen, wenn der Anker selbst außerhalb des Bildschirms ist, oder umgekehrt. Beispielsweise könnten Sie einen Anker mit einer Quizfrage haben und Antworten in damit verbundenen positionierten Elementen und möchten, dass beide zusammen angezeigt werden oder gar nicht. Dies kann mit bedingtem Verstecken erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente versteckt werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (im Spezifikat als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s definiert) "kippen" die Position des ankerpositionierten Elements über eine oder beide Achsen, wenn das Element anderweitig überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie, die von einer Ecke des Ankers durch seinen Mittelpunkt bis zur gegenüberliegenden Ecke gezogen wird (`flip-start`), kippt. Diese drei Werte kippen das Element, spiegeln seine Position auf einer gegenüberliegenden Seite bei den ersten beiden Werten und auf einer angrenzenden Seite bei `flip-start`. Zum Beispiel, wenn ein Element `10px` über seinem Anker positioniert ist und beginnt, oben über den Anker zu überlaufen, würde der `flip-block` Wert das positionierte Element 10px unter seinen Anker kippen.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}} Elemente ein. Das erste wird unser Ankerelement sein und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>` Element größer als das Ansichtsfenster, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster verschieben können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Veranschaulichungszwecken positionieren wir den Anker absolut, damit er nahe der Mitte der initialen `<body>` Darstellung erscheint:

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

Das ankerpositionierte Element wird mit fester Positionierung versehen und an der oberen linken Ecke des Ankers mit einer `position-area` befestigt. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu bieten, um das positionierte Element zu verschieben und zu verhindern, dass es überläuft, wenn der Anker nahe an den Rand des Ansichtsfensters gelangt.

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
> Wenn mehrere position try Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der Reihenfolge ausprobiert, wie sie spezifiziert sind.

Probieren Sie, das Demo zu scrollen, sodass der Anker beginnt, nahe an den Kanten zu gelangen:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Ansichtsfensters. Das positionierte Element kippt zur unteren linken Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker nach links im Ansichtsfenster. Das positionierte Element kippt zur oberen rechten Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — sobald das positionierte Element in Block- und Inlinerichtung überläuft, kippt es zurück zur Standardposition oben links und überläuft in beide Richtungen, was nicht erwünscht ist.

Das passiert, weil wir dem Browser nur Positionierungsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen aus und sucht nach einer, die bewirkt, dass das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenen Blocks gerendert wird. Wenn er keine findet, wird das positionierte Element in seiner ursprünglich definierten Darstellungsposition gerendert, ohne angewandte Positionsfallback-Optionen.

Der nächste Abschnitt zeigt, wie man dieses Problem behebt.

## Mehrere Werte zu einer Option kombinieren

Es ist möglich, mehrere [vordefinierte try Fallback-Optionen](#vordefinierte_fallback-optionen) oder [Benutzerdefinierte try Optionen](#benutzerdefinierte_fallback-optionen) Namen in einen einzigen, durch Leerzeichen getrennten try Fallback-Optionen Wert innerhalb der `position-try-fallbacks` Liste zu setzen. Beim Versuch, diese Fallback-Optionen anzuwenden, kombiniert der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option.

Lassen Sie uns eine kombinierte try Fallback-Option verwenden, um das Problem zu beheben, das wir beim vorherigen Demo festgestellt haben. Das HTML und CSS in diesem Demo ist dasselbe, außer für die Positionierungsstile der Infobox. In diesem Fall wird ihm eine dritte Position try Fallback-Option gegeben: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er dann versuchen, die beiden zu kombinieren, indem er die Position des Elements in Block-_und_ Inlinerrichtung gleichzeitig kippt. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Kanten des Ansichtsfensters scrollen, wird das positionierte Element zur unteren rechten Seite kippen.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## `position-area` try Fallback-Optionen verwenden

Die vordefinierten `<try-tactic>` try Fallback-Optionen sind nützlich, aber begrenzt, da sie nur erlauben, dass die Platzierung des positionierten Elements über Achsen gespiegelt wird. Was ist, wenn Sie ein ankerpositioniertes Element haben, das oben links an seinem Anker positioniert ist, und möchten, dass seine Position direkt unterhalb des Ankers geändert wird, wenn es beginnt, überzulaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als position-try Fallback-Option verwenden und ihn in die `position-try-fallbacks` Liste einfügen. Dies erstellt automatisch eine try Fallback-Option basierend auf diesem Positionsbereich. Tatsächlich ist es eine Abkürzung zur Erstellung einer [benutzerdefinierten Positionierungsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Position try Fallback-Optionen in Anwendung. Wir verwenden dasselbe HTML und CSS, außer für die Positionierung der Infobox. In diesem Fall sind unsere position-try Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird sinnvoll positioniert, unabhängig davon, welche Ansichtsfensterkante der Anker erreicht. Dieser ausführliche Ansatz ist granulärer und flexibler als der Ansatz mit vordefinierten Werten.

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
> Sie können keine `position-area` try Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer position-try Fallback-Liste einfügen.

Scrollen Sie die Seite und beobachten Sie den Effekt der position-try Fallback-Optionen, wenn sich der Anker der Kante des Ansichtsfensters nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positionsfallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigene mit der {{cssxref("@position-try")}} Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position try Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste von try Fallback-Optionen im Wert der {{cssxref("position-try-fallbacks")}} Eigenschaft angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentenreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre try Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; dies macht die Regel nicht ungültig, aber es wird es sehr schwierig machen, Ihrem CSS zu folgen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte try Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert werden soll, und alle Abstände. Die eingeschränkte Liste der erlaubten Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- [Rand-Eigenschaften](/de/docs/Glossary/Inset_properties)
- Abstands-Eigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbst-Ausrichtungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größen-Eigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in die Regel einfügen, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte try Fallback-Option angewendet wird. Wenn einer der Eigenschaften zuvor auf dem positionierten Element gesetzt wurde, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt, wodurch eine andere try Fallback-Option oder keine try Fallback-Option angewendet wird, werden die Werte aus der zuvor angewandten try Fallback-Option zurückgesetzt.

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

Sobald unsere benutzerdefinierten try Fallback-Optionen erstellt sind, können wir sie in die Positionsliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung überläuft, sitzt die Infobox über dem Anker und die in der Eigenschaft `position-try-fallbacks` festgelegten try Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine festgelegte Breite und Bodenabstand hat. Diese Werte ändern sich, wenn verschiedene try Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt, überzulaufen, versucht der Browser die in der Eigenschaft `position-try-fallbacks` aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Diese bewegt die Infobox zur linken Seite des Ankers, passt den Rand an und verleiht der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unter den Anker und setzt einen passenden Rand. Sie enthält keinen `width` Deskriptor, daher kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width` Eigenschaft festgelegt wurde.
- Der Browser versucht dann die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert, aber die `position-area` und `margin` Werte werden gespiegelt, um die Infobox rechts zu positionieren.
- Wenn keine der anderen Fallbacks es schaffen, das elementierte Element davon abzuhalten, überzulaufen, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese funktioniert ähnlich wie die anderen Fallback-Optionen, aber sie positioniert das elementierte Element rechts unten am Anker.

Wenn keine der Fallbacks es schaffen, das elementierte Element davon abzuhalten, überzulaufen, wird die Position auf den initialen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine position try Fallback-Option angewendet wird, überschreiben ihre Werte die als Standardwerte auf dem positionierten Element festgelegten. Beispielsweise ist die Standardbreite, die auf dem positionierten Element festgelegt ist, `200px`, aber wenn die `--custom-right` position try Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und beobachten Sie den Effekt dieser position try Fallback-Optionen, wenn sich der Anker der Kante des Ansichtsfensters nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## `position-try-order` verwenden

Die {{cssxref("position-try-order")}} Eigenschaft hat einen leicht unterschiedlichen Fokus als die restlichen Position try Funktionen, da sie Position try Fallback-Optionen nutzt, wenn das positionierte Element erstmals angezeigt wird, anstatt wann es im Prozess des Überlaufens ist.

Diese Eigenschaft erlaubt es Ihnen zu spezifizieren, dass Sie das positionierte Element anfänglich mit der Position try Fallback-Option anzeigen möchten, die seinem enthaltenen Block die meiste Breite oder die meiste Höhe verleiht. Dies wird erreicht, indem die `most-height`, `most-width`, `most-block-size` oder `most-inline-size` Werte gesetzt werden. Sie können auch die Effekte aller zuvor gesetzten `position-try-order` Werte mit dem `normal` Wert entfernen.

Wenn keine position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung, die dem Element zugewiesen wurde, bietet, hat `position-try-order` keine Wirkung.

Lassen Sie uns ein Demo betrachten, das den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Radiobuttons enthält, die es Ihnen erlauben, verschiedene Werte von `position-try-order` zu wählen, um deren Effekte zu sehen.

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

Wir fügen eine benutzerdefinierte try Fallback-Option — `--custom-bottom` — hinzu, die das Element unter den Anker positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst oben am Anker und geben ihr dann unsere benutzerdefinierte try Fallback-Option:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler an die Radiobuttons setzt. Wenn ein Radiobutton ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Reihenfolge auszuwählen. Dies hat den Effekt, die `--custom-bottom` position try Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil unter dem Anker mehr Platz ist als darüber.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Bedingtes Verstecken ankerpositionierter Elemente

In einigen Situationen möchten Sie vielleicht ein ankerpositioniertes Element verstecken. Beispielsweise, wenn das Ankerelement abgeschnitten wird, weil es zu nahe am Rand des Ansichtsfensters ist, möchten Sie vielleicht einfach sein zugehöriges Element ganz verstecken. Die {{cssxref("position-visibility")}} Eigenschaft erlaubt es Ihnen, Bedingungen zu spezifizieren, unter denen positionierte Elemente versteckt werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark verstecken**, wenn es beginnt, sein enthaltenes Element oder das Ansichtsfenster zu überlaufen.

Der `anchors-visible` Wert hingegen versteckt das positionierte Element stark, wenn seine zugehörigen Anker _vollständig_ versteckt sind, entweder durch Überlaufen ihres enthaltenen Elements (oder des Ansichtsfensters) oder durch Abdeckung durch andere Elemente. Das positionierte Element wird sichtbar sein, wenn irgendein Teil des Ankers noch sichtbar ist.

Ein stark verstecktes Element verhält sich so, als ob es und seine untergeordneten Elemente einen {{cssxref("visibility")}} Wert von `hidden` hätten, unabhängig davon, was ihre tatsächlichen `visibility` Werte sind.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an den unteren Rand des Ankers gebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig zu verstecken, wenn sie nach oben gescrollt wird, so dass sie den Rand des Ansichtsfensters überläuft.

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

Scrollen Sie nach unten auf der Seite und beachten Sie, wie das positionierte Element versteckt wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Größenbestimmung von Objekten in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
