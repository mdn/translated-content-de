---
title: Fallback-Optionen und bedingtes Ausblenden für Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 7c56e442e76d472eff1c6a06eb5432bb11a47f3e
---

Beim Verwenden der [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente immer an einem für den Benutzer praktischen Ort erscheinen, wenn dies überhaupt möglich ist, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugehörigen positionierten Elemente zum Rand des Viewports. Wenn ein positioniertes Element beginnt, den Viewport zu überlaufen, sollten Sie seine Position ändern, um es wieder auf den Bildschirm zu bringen, z.B. auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden – zum Beispiel, wenn ihre Anker nicht auf dem Bildschirm sind, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie Sie CSS-Ankerpositionierungsmechanismen verwenden können, um diese Probleme zu lösen – **Position-Try-Fallback-Optionen** und **konditionales Ausblenden**. Position-Try-Fallback-Optionen bieten alternative Positionen, die der Browser ausprobieren kann, um positionierte Elemente auf dem Bildschirm zu halten, wenn sie anfangen zu überlaufen. Konditionales Ausblenden ermöglicht es, Bedingungen festzulegen, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung finden Sie unter [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist und der Benutzer den Inhalt so scrollt, dass das UI-Feature sich in der oberen rechten Ecke des Viewports befindet, wird der Tooltip dieses UI-Features vom Bildschirm gescrollt sein. CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}} Eigenschaft des Moduls gibt eine oder mehrere alternative Position-Try-Fallback-Optionen an, die der Browser ausprobieren kann, um zu verhindern, dass das positionierte Element überläuft.

Position-Try-Fallback-Optionen können festgelegt werden durch:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert sind.

Zusätzlich erlaubt die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen anzugeben, die zu Beginn der Darstellung des Elements zu einer verfügbaren Position Try-Option führen, welche der bevorzugten Initialposition des Elements vorgezogen wird. Zum Beispiel möchten Sie das Element anfangs in einem Raum anzeigen, der mehr verfügbare Höhe oder Breite bietet.

Die Kurzschreibweiseigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht ankerpositionierter Inhalt keinen Sinn, wenn der Anker nicht auf dem Bildschirm ist oder umgekehrt. Zum Beispiel könnten Sie einen Anker haben, der eine Quizfrage enthält, und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und Sie möchten sie beide zusammen oder gar nicht anzeigen. Dies kann durch konditionelles Ausblenden erreicht werden, welches über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Option-Werte der `position-try-fallbacks` Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)) werden die Position des ankerpositionierten Elements über eine oder beide Achsen "umdrehen", wenn das Element ansonsten überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie, die von einer Ecke des Ankers durch dessen Zentrum zur gegenüberliegenden Ecke verläuft (`flip-start`), wechselt. Diese drei Werte drehen das Element um, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte wider und auf einer angrenzenden Seite für `flip-start`. Wenn ein Element zum Beispiel `10px` oberhalb seines Ankers positioniert ist und zu überlaufen beginnt, würde der Wert `flip-block` das positionierte Element 10px unterhalb seines Ankers positionieren.

In diesem Beispiel enthalten wir zwei {{htmlelement("div")}} Elemente. Das erste ist unser Ankerelement, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir formatieren das `<body>` Element größer als den Viewport, sodass wir das Anker- und das positionierte Element sowohl horizontal als auch vertikal im Viewport scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Anschaungszwecken positionieren wir den Anker absolut, sodass er nahe dem Zentrum des initialen `<body>` Renderings erscheint:

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

Das ankerpositionierte Element erhält eine feste Positionierung und wird mit der oberen linken Ecke des Ankers über einen `position-area` verbunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, um das positionierte Element zu bewegen, um zu verhindern, dass es überläuft, wenn der Anker sich dem Rand des Viewports nähert.

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
> Wenn mehrere Position Try Fallback-Optionen angegeben werden, sind sie durch Kommas getrennt und werden in der Reihenfolge getestet, in der sie angegeben sind.

Versuchen Sie das Demo zu scrollen, sodass der Anker sich dem Rand nähert:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an die Spitze des Viewports. Das positionierte Element wechselt zur unteren linken Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker zur linken Seite des Viewports. Das positionierte Element wechselt zur oberen rechten Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in Richtung der oberen linken Ecke des Viewports bewegen, wird Ihnen ein Problem auffallen – sobald das positionierte Element in der Block- und Inlinerichtung zu überlaufen beginnt, wechselt es zurück zu seiner standardmäßigen oberen linken Position und überläuft in beiden Richtungen, was nicht gewünscht ist.

Dies geschieht, weil wir dem Browser nur die Positionsmöglichkeiten `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser testet die Fallback-Optionen, um eine zu finden, die das positionierte Element vollständig innerhalb des Viewports oder des umschließenden Blocks rendert. Wenn keine gefunden wird, rendert er das positionierte Element in seiner ursprünglich definierten Positionierungsposition, ohne dass Position Fallback-Optionen angewendet werden.

Der nächste Abschnitt demonstriert, wie dieses Problem behoben werden kann.

## Kombinieren mehrerer Werte zu einer Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Option-Namen](#benutzerdefinierte_fallback-optionen) in einen einzigen leerzeichengetrennten Try-Fallback-Optionwert innerhalb der kommagetrennten `position-try-fallbacks` Liste zu setzen. Wenn versucht wird, diese Fallback-Optionen anzuwenden, wird der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option zusammenführen.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben. Der HTML und CSS in diesem Demo sind gleich, außer für die Infobox-Positionierungsstile. In diesem Fall wird ihm eine dritte Position Try Fallback-Option gegeben: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um einen Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, versucht er, beide zu kombinieren und die Position des Elements gleichzeitig in der Block- _und_ Inlinerichtung zu wechseln. Wenn Sie den Anker also in Richtung der oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element zur unteren rechten Seite wechseln.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Verwenden von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur erlauben, die Platzierung des positionierten Elements über Achsen zu kippen. Was ist, wenn Sie ein Ankerpositioniertes Element hatten, das oben links seines Ankers positioniert war, und wollten seine Position direkt unterhalb des Ankers ändern, wenn es zu überlaufen begann?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-Try-Fallback-Option verwenden und diesen in die `position-try-fallbacks` Liste einfügen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. Im Wesentlichen ist es eine Abkürzung, um eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt die Verwendung von `position-area` Positions-Try-Fallback-Optionen. Wir verwenden den gleichen HTML- und CSS-Code, außer dass die Infobox-Positionierung geändert wird. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area` Werte – `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert sein, egal welcher Rand des Viewports der Anker sich nähert. Dieser ausführliche Ansatz ist gran

ularer und flexibler als der vordefinierte Werteansatz.

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
> Sie können `position-area` Try-Fallback-Optionen nicht in eine leerzeichengetrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste aufnehmen.

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Position-Try-Fallback-Optionen, wenn der Anker sich dem Rand des Viewports nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die obigen Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-Try-Fallback-Option. Dieser Name kann dann innerhalb der kommagetrennten Liste von Try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentenordnung die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, aber es macht Ihr CSS sehr schwer nachvollziehbar.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte Try-Fallback-Option, einschließlich, wie das positionierte Element platziert und dimensioniert werden soll, und etwaiger Abstände. Die begrenzte Liste der zulässigen Eigenschaftsbeschreibungen enthält:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbstausrichtungs](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) eigenschaften
- Dimensionierungs-Eigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die in der At-Regel enthaltenen Werte werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn zuvor Eigenschaften am positionierten Element gesetzt waren, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Position-Liste einfügen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite überläuft, sitzt die Infobox oberhalb des Ankers, und die in der `position-try-fallbacks` Eigenschaft festgelegten Position-Try-Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Position-Try-Fallback-Optionen angewendet werden.

Wenn die Infobox zu überlaufen beginnt, versucht der Browser die Position-Optionen, die in der `position-try-fallbacks` Eigenschaft aufgelistet sind:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies verschiebt die Infobox zur linken Seite des Ankers, passt den Rand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies verschiebt die Infobox zur Unterseite des Ankers und setzt einen entsprechenden Rand. Es enthält keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft gesetzt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit dem gleichen `width` Deskriptorwert, aber die `position-area` und `margin` Werte sind gespiegelt, um die Infobox entsprechend auf der rechten Seite zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich das Überlaufen des positionierten Elements verhindern, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies funktioniert in ähnlicher Weise wie die anderen Fallback-Optionen, aber es platziert das positionierte Element in der unteren rechten Ecke des Ankers.

Wenn keines der Fallbacks erfolgreich das Überlaufen des positionierten Elements verhindert, wird die Position auf den initialen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreibt sie die Standardwerte, die am positionierten Element festgelegt sind. Zum Beispiel beträgt die standardmäßig eingestellte `width` am positionierten Element `200px`, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, beträgt ihre Breite `100px`.

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Position-Try-Fallback-Optionen, wenn der Anker sich dem Rand des Viewports nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Styling von ankerpositionierten Elementen basierend auf aktivem Fallback

Ein Problem, das die obige Funktionalität nicht löst, ist das Aktualisieren des Stylings eines ankerpositionierten Elements, um seinen verschiedenen Fallback-Optionen gerecht zu werden. Zum Beispiel ist es üblich, einen kleinen Pfeil auf einem Tooltip einzuschließen, der auf das zugeordnete Ankerelement zeigt und die UX verbessert, indem die visuelle Zuordnung deutlicher wird. Wenn sich der Tooltip an eine andere Position bewegt, müssen Sie die Position und Ausrichtung des Pfeils ändern, andernfalls sieht es falsch aus.

Um dieses Problem zu lösen, können Sie verankerte Containerabfragen verwenden. Diese erweitern die Funktionalität von [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), um es Ihnen zu ermöglichen, zu erkennen, wann eine bestimmte Fallback-Option auf ein ankerpositioniertes Element angewendet wird, und CSS auf dessen Nachkommen anzuwenden. Insbesondere stützen sich verankerte Containerabfragen auf zwei Funktionen:

- Der {{cssxref("container-type")}} Eigenschaft `anchored` Wert: Wenden Sie dies auf das ankerpositionierte Element an, um zu erkennen, wann verschiedene Fallback-Optionen darauf angewendet werden.
- Die {{cssxref("@container")}} At-Regel `anchored` Schlüsselwort: Dies wird von einem Satz Klammern gefolgt, in dem der `fallback` Deskriptor enthalten ist. Der Wert des Deskriptors ist ein `position-try-fallbacks` Wert.

Angenommen, wir haben ein ankerpositioniertes Tooltip-Element, das durch einen {{cssxref("position-area")}} Wert `top` über seinem Anker positioniert ist, das aber einen {{cssxref("position-try-fallbacks")}} Wert `flip-block` spezifiziert. Dies wird dazu führen, dass das Tooltip im Block in die Unterseite seines Ankers wechselt, wenn es beginnt, über die Oberseite des Viewports zu überlaufen. Wenn wir erkennen möchten, wann das Fallback auf das Tooltip angewendet wird, müssen wir zuerst `container-type: anchored` darauf setzen, um es in einen verankerten Abfragecontainer zu verwandeln.

```css
.tooltip {
  position: absolute;
  position-anchor: --myAnchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Damit können wir jetzt eine Containerabfrage wie folgt schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Der Abfragetest – `anchored(fallback: flip-block)` – wird wahr zurückgeben, wenn die `flip-block` Fallback-Option auf das Tooltip angewendet wird, in welchem Fall die innerhalb des `@container` Blocks angegebenen Stile angewendet werden. Sie könnten zum Beispiel die Position und Ausrichtung des Pfeilsymbols ändern, sodass es weiterhin auf den Anker zeigt, die Richtung eines Gradienten ändern usw.

Für weitere Informationen zu verankerten Containerabfragen und einige Beispiele, siehe [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

## Verwendung von `position-try-order`

Die `position-try-order` Eigenschaft hat einen etwas anderen Fokus als die restlichen Position-Try-Funktionen, indem sie beeinflusst, welche Position-Try-Fallback-Option angewendet wird, wenn das positionierte Element erstmals angezeigt wird, anstatt wenn es gescrollt wird. Beispielsweise könnten Sie das Element anfangs in einem Raum anzeigen lassen wollen, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition bietet.

Der Browser testet die verfügbaren `position-try-fallbacks`, um herauszufinden, welches dem ankerpositionierten Element am meisten Platz in der angegebenen Richtung bietet. Dann wendet er diese Option an, überschreibt die Anfangsstile des Elements, wenn die Seite erstmals rendert.

Weitere Informationen und ein Live-Beispiel, das die Wirkung der Eigenschaft demonstriert, finden Sie auf der {{cssxref("position-try-order")}} Referenzseite.

## Bedingtes Ausblenden von ankerpositionierten Elementen

In einigen Situationen könnten Sie ein ankerpositioniertes Element ausblenden wollen. Wenn das Ankerelement beispielsweise abgeschnitten ist, weil es zu nah am Rand des Viewports ist, möchten Sie vielleicht einfach das zugehörige Element insgesamt ausblenden. Die {{cssxref("position-visibility")}} Eigenschaft ermöglicht es Ihnen, Bedingungen anzugeben, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der `no-overflow` Wert wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein umschließendes Element oder den Viewport zu überlaufen.

Der `anchors-visible` Wert hingegen blendet das positionierte Element stark aus, wenn seine zugeordneten Anker **vollständig** ausgeblendet sind, entweder indem sie sein umschließendes Element (oder den Viewport) überlaufen oder von anderen Elementen bedeckt werden. Das positionierte Element wird sichtbar sein, wenn ein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als ob es selbst und seine Nachkommenelemente einen {{cssxref("visibility")}} Wert von `hidden` haben, unabhängig davon, was ihr tatsächlicher `visibility` Wert ist.

Sehen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet denselben HTML- und CSS-Code wie in den vorherigen Beispielen, wobei die Infobox an der Unterkante des Ankers angebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis sie beginnt, den Viewport zu überlaufen.

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

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-Logische Eigenschaften und Werte Modul](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größeneinstellungen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
