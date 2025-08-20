---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Beim Verwenden von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist ein wichtiger Aspekt sicherzustellen, dass Anker-positionierte Elemente immer an einer praktischen Stelle erscheinen, an der der Benutzer mit ihnen interagieren kann, falls möglich, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugehörigen positionierten Elemente in Richtung des Rands des Viewports. Wenn ein positioniertes Element beginnt, den Viewport zu überschreiten, sollten Sie seine Position ändern, um es wieder auf dem Bildschirm zu platzieren, beispielsweise auf der gegenüberliegenden Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden – zum Beispiel, wenn ihre Anker sich außerhalb des Bildschirms befinden, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie Sie CSS-Ankerpositionierungsmechanismen nutzen können, um diese Probleme zu verwalten — **Position-Try-Fallback-Optionen** und **Bedingtes Ausblenden**. Position-Try-Fallback-Optionen bieten alternative Positionen, die der Browser zu platzieren versuchen kann, wenn positionierte Elemente zu überlaufen beginnen, um sie auf dem Bildschirm zu halten. Bedingtes Ausblenden ermöglicht es, Bedingungen zu spezifizieren, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Feature-Zusammenfassung

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist und der Benutzer den Inhalt so scrollt, dass das UI-Feature sich in der oberen rechten Ecke des Viewports befindet, wird der Tooltip dieses UI-Features vom Bildschirm gescrollt. CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls spezifiziert eine oder mehrere alternative Position-Try-Fallback-Optionen, die der Browser versucht, um zu verhindern, dass das positionierte Element überläuft.

Position-Try-Fallback-Optionen können spezifiziert werden mittels:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), definiert mit der {{cssxref("@position-try")}}-Atregel.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen zu spezifizieren, die dazu führen, dass eine verfügbare Position-Try-Option bevorzugt gegenüber der ursprünglichen Positionierung des Elements eingestellt wird. Zum Beispiel möchten Sie das Element vielleicht zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks`-Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen ergibt der Inhalt eines anker-positionierten Elements keinen Sinn, wenn der Anker außerhalb des Bildschirms ist, oder umgekehrt. Zum Beispiel könnten Sie einen Anker mit einer Quizfrage haben und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und diese entweder zusammen anzeigen oder gar nicht. Dies kann mit bedingtem Ausblenden erreicht werden, das über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der `position-try-fallbacks`-Eigenschaft (im Standard als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s definiert) werden die Position des anker-positionierten Elements über eine oder beide Achsen "umklappen", wenn das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inlineachse (`flip-inline`) oder diagonal über eine imaginäre Linie von einer Ecke des Ankers zu seiner gegenüberliegenden Ecke (`flip-start`) umklappt. Diese drei Werte klappen das Element um und spiegeln seine Position bei den ersten beiden Werten auf der gegenüberliegenden Seite und bei `flip-start` an einer benachbarten Seite wider. Zum Beispiel, wenn ein Element, das `10px` über seinem Anker positioniert ist, beginnt, am oberen Rand des Ankers überzulaufen, würde der Wert `flip-block` das positionierte Element dazu bringen, `10px` unterhalb seines Ankers zu sein.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}}-Elemente ein. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>`-Element so, dass es größer als der Viewport ist, sodass wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport verschieben können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir den Anker absolut, sodass er nahe dem Zentrum der anfänglichen `<body>`-Darstellung erscheint:

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

Das anker-positionierte Element erhält eine feste Positionierung und ist an die obere linke Ecke des Ankers mittels einer `position-area` gebunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, damit das positionierte Element aufhört zu überlaufen, wenn der Anker dem Rand des Viewports nahekommt.

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
> Wenn mehrere Position-Try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der Reihenfolge ausprobiert, in der sie angegeben sind.

Versuchen Sie, die Demo zu scrollen, sodass der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker zum oberen Rand des Viewports. Das positionierte Element klappt zur unteren linken Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker zur linken Seite des Viewports. Das positionierte Element klappt zur oberen rechten Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker zur oberen linken Ecke des Viewports bewegen, bemerken Sie ein Problem — sobald das positionierte Element in Block- und Inline-Richtung zu überlaufen beginnt, kehrt es in seine ursprüngliche Position in der oberen linken Ecke zurück und läuft in beide Richtungen über, was wir nicht wollen.

Dies passiert, weil wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen, um eine zu finden, die dazu führt, dass das positionierte Element komplett innerhalb des Viewports oder des enthaltenen Blocks dargestellt wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Darstellungsposition ohne angewendete Positions-Fallback-Optionen.

Der nächste Abschnitt zeigt, wie dieses Problem behoben werden kann.

## Kombination mehrerer Werte zu einer Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) in einen einzigen durch Leerzeichen getrennten Try-Fallback-Option-Wert innerhalb der durch Kommas getrennten `position-try-fallbacks`-Liste zu setzen. Beim Versuch, diese Fallback-Optionen anzuwenden, wird der Browser die individuellen Effekte zu einer einzigen kombinierten Fallback-Option kombinieren.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir in der vorherigen Demo gefunden haben. Das HTML und CSS in dieser Demo sind gleich, außer dass die Infobox-Positionierungsstile geändert wurden. In diesem Fall erhält sie eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` ausprobieren wird, um ein Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er dann versuchen, die beiden zu kombinieren, um die Position des Elements gleichzeitig in Block- _und_ Inline-Richtung umzuklappen. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element zur unteren rechten Ecke umklappen.

{{ EmbedLiveSample("Kombinieren mehrerer Werte zu einer Option", "100%", "250") }}

## Verwendung von `position-area`-Try-Fallback-Optionen

Die vordefinierten `<try-tactic>`-Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur das Umklappen der Position des positionierten Elements über Achsen zulassen. Was ist, wenn Sie ein anker-positioniertes Element haben, das in der oberen linken Ecke seines Ankers positioniert ist, und seine Position direkt unter den Anker verschoben werden soll, wenn es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}}-Wert als Position-Try-Fallback-Option verwenden und ihn in die `position-try-fallbacks`-Liste einfügen. Dies erzeugt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. Im Wesentlichen ist es eine Abkürzung zum Erstellen einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Property-Wert enthält.

Das folgende Beispiel zeigt `position-area`-Position-Try-Fallback-Optionen in der Anwendung. Wir verwenden dasselbe HTML und CSS, nur die Infobox-Positionierung ist anders. In diesem Fall sind unsere Position-Try-Fallback-Optionen `position-area`-Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, egal welcher Viewport-Rand dem Anker nahekommt. Dieser akribische Ansatz ist granulärer und flexibler als der Ansatz mit vordefinierten Werten.

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
> Sie können keine `position-area`-Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste einfügen.

Scrollen Sie die Seite und betrachten Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker den Rändern des Viewports nähert:

{{ EmbedLiveSample("Verwendung von `position-area`-Try-Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Position-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}}-Atregel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-Try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste der Try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}}-Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; das macht Ihre CSS nicht ungültig, aber es wird Ihre CSS sehr schwer lesbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte Try-Fallback-Option, einschließlich, wie das positionierte Element platziert und dimensioniert werden soll, und eventueller Margen. Die begrenzte Liste der erlaubten Eigenschaftsdeskriptoren beinhaltet:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Rand-Eigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Eigen-Ausrichtungs-](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)Eigenschaften
- Größeigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die in der Atregel enthaltenen Werte werden auf die positionierten Elemente angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Sollten irgendwelche der Eigenschaften vorher auf dem positionierten Element festgelegt worden sein, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte von der zuvor angewendeten Try-Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben HTML- und CSS-Basiskontext, den wir in den vorherigen Beispielen verwendet haben.

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite überläuft, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks`-Eigenschaft definierten Try-Fallback-Optionen werden ignoriert. Auch beachten Sie, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte werden sich ändern, wenn verschiedene Try-Fallback-Optionen angewendet werden.

Wenn die Infobox zu überlaufen beginnt, versucht der Browser die in der `position-try-fallbacks`-Eigenschaft aufgelisteten Position-Optionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox zur linken Seite des Ankers, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unter den Anker und setzt den passenden Rand. Es enthält keinen `width` Deskriptor, daher kehrt die Infobox zu ihrer durch die `width`-Eigenschaft festgelegten Standardbreite von `200px` zurück.
- Der Browser versucht dann die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert, aber die `position-area` und `margin` Werte sind gespiegelt, um die Infobox passend rechts zu platzieren.
- Wenn keine der anderen Fallbacks das Überlaufen des positionierten Elements verhindert, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, platziert jedoch das positionierte Element rechts unten am Anker.

Wenn keine der Fallbacks das Überlaufen der positionierten Elemente verhindert, wird die Position auf den ursprünglichen `position-area: top;` Wert zurückgesetzt.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben deren Werte die standardmäßig auf dem positionierten Element gesetzten Werte. Zum Beispiel ist die Standardbreite des positionierten Elements auf `200px` festgelegt, aber wenn die `--custom-right` Position-Try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und betrachten Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker den Rändern des Viewports nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen leicht anderen Fokus als der Rest der Position-Try-Funktionalität, da sie Position-Try-Fallback-Optionen verwendet, wenn das positionierte Element zum ersten Mal angezeigt wird, anstatt wenn es gerade überläuft.

Diese Eigenschaft ermöglicht es Ihnen, anzugeben, dass Sie möchten, dass das positionierte Element zunächst mit der Position-Try-Fallback-Option angezeigt wird, die seinem umgebenden Block die größte Breite oder die größte Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Wirkung von vorher festgelegten `position-try-order`-Werten entfernen, indem Sie den `normal`-Wert verwenden.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die ursprüngliche dem Element zugewiesene Positionierung bietet, hat `position-try-order` keine Wirkung.

Schauen wir uns ein Demo an, das den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in vorherigen Beispielen, außer dass wir ein `<form>` mit Radio-Buttons hinzugefügt haben, damit Sie verschiedene Werte von `position-try-order` auswählen und ihre Effekte sehen können.

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

Wir schließen eine benutzerdefinierte Try-Fallback-Option — `--custom-bottom` — ein, die das Element unter dem Anker positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox initial oben am Anker und geben ihr dann unsere benutzerdefinierte Try-Fallback-Option:

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

Zum Schluss fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler auf die Radio-Buttons setzt. Wenn ein Radio-Button ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Order-Option auszuwählen. Dies hat den Effekt, die `--custom-bottom` Position-Try-Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil unterhalb des Ankers mehr Platz ist als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von Anker-positionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten ist, weil es zu nahe am Rand des Viewports ist, möchten Sie möglicherweise einfach sein zugehöriges Element vollständig ausblenden. Die {{cssxref("position-visibility")}}-Eigenschaft erlaubt Ihnen, Bedingungen zu spezifizieren, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der `no-overflow`-Wert wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein Containing Element oder den Viewport zu überlaufen.

Der `anchors-visible`-Wert hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _vollständig_ ausgeblendet sind, entweder indem sie ihr Containing Element (oder den Viewport) überlaufen oder von anderen Elementen verdeckt werden. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als ob es und seine Nachkommenelemente den {{cssxref("visibility")}}-Wert `hidden` gesetzt hätten, unabhängig von ihrem tatsächlichen `visibility`-Wert.

Schauen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an die untere Kante des Ankers gebunden ist. Die Infobox wird `position-visibility: no-overflow;` gegeben, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis zu dem Punkt, an dem sie beginnt, den Viewport zu überlaufen.

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

Scrollen Sie die Seite nach unten und bemerken Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Viewports erreicht:

{{ EmbedLiveSample("Bedingtes Ausblenden mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenanpassung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
