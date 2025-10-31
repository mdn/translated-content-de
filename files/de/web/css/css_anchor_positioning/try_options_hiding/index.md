---
title: Fallback-Optionen und bedingtes Verbergen bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Beim Verwenden von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente immer an einem günstigen Ort erscheinen, an dem der Benutzer mit ihnen interagieren kann, wenn möglich, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite nach unten scrollen, bewegen sich Anker und deren zugeordneten positionierten Elemente an den Rand des Viewports. Wenn ein positioniertes Element beginnt, über den Rand des Viewports hinauszulaufen, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm zu platzieren, zum Beispiel auf der gegenüberliegenden Seite des Ankers.

Alternativ kann es in manchen Situationen vorzuziehen sein, überfließende positionierte Elemente einfach zu verbergen – zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie Sie die CSS-Ankerpositionierungsmechanismen nutzen können, um diese Probleme zu verwalten – **position-try-Fallback-Optionen** und **bedingtes Verbergen**. Position-try-Fallback-Optionen bieten alternative Positionen, in denen der Browser versucht, die positionierten Elemente zu platzieren, wenn sie beginnen, überzulaufen, um sie auf dem Bildschirm zu halten. Bedingtes Verbergen ermöglicht die Festlegung von Bedingungen, unter denen der Anker oder ein positioniertes Element verborgen wird.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung finden Sie in [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip am oberen rechten Rand eines UI-Elements fixiert ist, scrollt der Benutzer den Inhalt, sodass das UI-Feature in der oberen rechten Ecke des Viewports ist, wird der Tooltip des UI-Features vom Bildschirm scrollen. Die CSS-Ankerpositionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls gibt eine oder mehrere alternative position-try-Fallback-Optionen an, damit der Browser versucht, das positionierte Element vor dem Überlauf zu bewahren.

Position-try-Fallback-Optionen können durch folgende Methoden angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area`-Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mittels der {{cssxref("@position-try")}}-Regel definiert werden.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen anzugeben, die zu einer bevorzugten verfügbaren position-try-Option führen, anstelle der anfänglichen Positionierung des Elements. Zum Beispiel könnten Sie das Element zunächst in einem Bereich anzeigen wollen, der mehr Höhen- oder Breitenfläche bietet.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order`- und `position-try-fallbacks`-Werte in einer einzigen Deklaration festzulegen.

In einigen Situationen macht der Inhalt, der an einem Anker positioniert ist, keinen Sinn, wenn der Anker außerhalb des Bildschirms ist oder umgekehrt. Zum Beispiel könnte man einen Anker mit einer Quizfrage haben, und Antworten, die in zugeordneten positionierten Elementen enthalten sind, und möchte, dass beide zusammen oder gar nicht angezeigt werden. Dies kann durch bedingtes Verbergen erreicht werden, das über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die die Bedingungen definieren, unter denen überlaufende Elemente verborgen werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks`-Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)s in der Spezifikation) "flippen" die Position des ankerpositionierten Elements über eine oder beide Achsen, wenn das Element ansonsten überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Block-Achse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie, die von einer Ecke des Ankers durch dessen Zentrum zur gegenüberliegenden Ecke gezogen wird (`flip-start`), flippt. Diese drei Werte flippen das Element, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte wider, und auf einer angrenzenden Seite für `flip-start`. Zum Beispiel, wenn ein Element `10px` oberhalb seines Ankers positioniert ist und beginnt, über den oberen Rand des Ankers hinauszulaufen, würde der `flip-block`-Wert das positionierte Element auf 10px unterhalb seines Ankers flippen.

In diesem Beispiel enthalten wir zwei {{htmlelement("div")}}-Elemente. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert sein:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir stylen das `<body>`-Element, um größer als der Viewport zu sein, sodass wir den Anker und das positionierte Element im Viewport sowohl horizontal als auch vertikal scrollen können:

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

Das ankerpositionierte Element erhält eine feste Positionierung und wird an der oberen linken Ecke des Ankers mittels eines `position-area` angebunden. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen für die Verschiebung des positionierten Elements zu geben, um es davon abzuhalten, überzulaufen, wenn der Anker in die Nähe des Randes des Viewports kommt.

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
> Wenn mehrere position-try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo so zu scrollen, dass der Anker beginnt, die Ränder zu erreichen:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an die Spitze des Viewports. Das positionierte Element flippt an die untere linke Seite des Ankers, um einen Überlauf zu vermeiden.
- Bewegen Sie den Anker an die linke Seite des Viewports. Das positionierte Element flippt an die obere rechte Seite des Ankers, um einen Überlauf zu vermeiden.

Wenn Sie den Anker in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in der Block- und Inlinerichtung überzulaufen, flippt es zurück in seine Standardoberlinke Position und überläuft in beide Richtungen, was nicht gewünscht ist.

Dies geschieht, weil wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen und sucht nach einer, die dazu führt, dass das positionierte Element vollständig innerhalb des Viewports oder des enthaltenen Blocks gerendert wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Rendering-Position, ohne dass Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie man dieses Problem beheben kann.

## Kombination mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen) Namen in einen einzigen durch Leerzeichen getrennten Try-Fallback-Optionswert innerhalb der durch Kommas getrennten `position-try-fallbacks`-Liste einzufügen. Beim Versuch, diese Fallback-Optionen anzuwenden, wird der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option zusammenfügen.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir mit der vorherigen Demo gefunden haben. Das HTML und CSS in dieser Demo sind dasselbe, außer für die Infobox-Positionierungsstile. In diesem Fall wird sie mit einer dritten Position-Try-Fallback-Option versehen: `flip-block flip-inline`:

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

Dies bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versuchen wird, um einen Überlauf zu vermeiden. Sollte das fehlschlagen, wird er das Kombinieren der beiden ausprobieren, und die Position des Elements gleichzeitig in der Block- _und_ Inlinerichtung flippen. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Rändern des Viewports scrollen, wird das positionierte Element zur unteren rechten Seite flippen.

{{ EmbedLiveSample("Kombination mehrerer Werte in eine Option", "100%", "250") }}

## Verwendung von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>`-Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur die Platzierung von positionierten Elementen über Achsen flippend ermöglichen. Was wäre, wenn Sie ein ankerpositioniertes Element hätten, das an der oberen linken Ecke seines Ankers positioniert ist, und seine Position unter dem Anker ändern wollten, wenn es anfängt, überzulaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}}-Wert als position-try-Fallback-Option verwenden, indem Sie ihn in der `position-try-fallbacks`-Liste einfügen. Dies erstellt automatisch eine Try-Fallback-Option basierend auf diesem Positionsbereich. Im Effekt ist es eine Abkürzung, um eine [benutzerdefinierte Position-Option](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area`-Position-Try-Fallback-Optionen in Verwendung. Wir verwenden dasselbe HTML und CSS, außer für die Infobox-Positionierung. In diesem Fall sind unsere position-try-Fallback-Optionen `position-area`-Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, und `left`. Das positionierte Element wird vernünftig positioniert sein, egal welchen Viewport-Rand der Anker ansteuert. Dieser ausführliche Ansatz ist granulärer und flexibler als der Ansatz mit den vordefinierten Werten.

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
> Sie können keine `position-area`-Try-Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer position-try-Fallback-Liste einfügen.

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser position-try-Fallback-Optionen, wenn der Anker den Rand des Viewports nähert:

{{ EmbedLiveSample("Verwendung von `position-area` Try-Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die nicht über die oben genannten Mechanismen verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}}-Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die position-try-Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste von Try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}}-Eigenschaftswertes angegeben werden. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die Regel nicht ungültig, wird jedoch Ihr CSS sehr schwer lesbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte Try-Fallback-Option und umfasst, wie das positionierte Element platziert und dimensioniert werden soll, sowie alle Abstände. Die begrenzte Liste der erlaubten Eigenschafts-Deskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Abstands-Eigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Self-Alignment](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Größen-Eigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in der Regel aufnehmen, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn eine der Eigenschaften zuvor auf dem positionierten Element gesetzt wurde, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt, wodurch eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option entfernt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten Try-Fallback-Optionen durch `@position-try`:

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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionsliste aufnehmen, indem wir ihre Namen angeben:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keine Richtung von der Seite überläuft, sitzt die Infobox über dem Anker, und die position-try-Fallback-Optionen, die in der `position-try-fallbacks`-Eigenschaft festgelegt wurden, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn unterschiedliche Try-Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks`-Eigenschaft aufgeführten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left`-Fallback-Position. Dies verschiebt die Infobox nach links vom Anker, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom`-Position. Dies verschiebt die Infobox nach unten vom Anker und setzt einen entsprechenden Rand. Es enthält keinen `width`-Deskriptor, also kehrt die Infobox zu ihrer Standardbreite von `200px` zurück, die durch die `width`-Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right`-Position. Diese funktioniert ähnlich wie die `--custom-left`-Position, mit demselben `width`-Deskriptorwert, aber die `position-area`- und `margin`-Werte werden gespiegelt, um die Infobox entsprechend nach rechts zu positionieren.
- Wenn keine der anderen Fallbacks den Überlauf des positionierten Elements verhindert, versucht der Browser die `--custom-bottom-right`-Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, positioniert jedoch das positionierte Element nach unten rechts vom Anker.

Wenn keiner der Fallbacks es schafft, das positionierte Element vom Überlaufen abzuhalten, kehrt die Position zum ursprünglichen `position-area: top;`-Wert zurück.

> [!NOTE]
> Wenn eine position-try-Fallback-Option angewendet wird, überschreiben ihre Werte die Standardwerte, die auf dem positionierten Element festgelegt sind. Zum Beispiel ist die Standardbreite, die auf dem positionierten Element festgelegt ist, `200px`, aber wenn die `--custom-right` position-try-Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser position-try-Fallback-Optionen, wenn der Anker den Rand des Viewports nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen leicht anderen Fokus als der Rest der position-try-Funktionalität, da sie die position-try-Fallback-Optionen verwendet, wenn das positionierte Element zuerst angezeigt wird, anstatt wenn es gerade überläuft.

Diese Eigenschaft ermöglicht es Ihnen anzugeben, dass Sie möchten, dass das positionierte Element anfänglich mit der position-try-Fallback-Option angezeigt wird, die dem enthaltenden Block die meiste Breite oder Höhe gibt. Dies wird durch das Setzen der Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` erreicht. Sie können auch die Auswirkungen von zuvor gesetzten `position-try-order`-Werten mit dem Wert `normal` entfernen.

Wenn keine position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die dem Element zugewiesene Anfangspositionierung, hat `position-try-order` keine Auswirkung.

Werfen wir einen Blick auf eine Demo, die den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um ihre Effekte zu sehen.

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

Wir fügen eine benutzerdefinierte Try-Fallback-Option hinzu — `--custom-bottom` —, die das Element unter den Anker positioniert und einen Rand hinzufügt:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Handler für die Radiobuttons setzt. Wenn ein Radiobutton ausgewählt wird, wird sein Wert auf die `position-try-order`-Eigenschaft der Infobox angewendet.

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

Versuchen Sie die `most-height`-Order-Option auszuwählen. Dies hat den Effekt, die `--custom-bottom` position-try-Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies tritt auf, weil unter dem Anker mehr Platz ist als über ihm.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Verbergen von ankerpositionierten Elementen

In bestimmten Situationen möchten Sie vielleicht ein ankerpositioniertes Element verbergen. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Viewports ist, möchten Sie vielleicht das zugeordnete Element einfach ganz verbergen. Die {{cssxref("position-visibility")}}-Eigenschaft ermöglicht es Ihnen, Bedingungen anzugeben, unter denen positionierte Elemente verborgen werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark verbergen**, wenn es beginnt, sein enthaltendes Element oder den Viewport zu überlaufen.

Der `anchors-visible`-Wert dagegen verbirgt das positionierte Element stark, wenn seine zugeordneten Anker _komplett_ verborgen sind, sei es durch Überlauf seines enthaltenden Elements (oder des Viewports) oder durch Überdeckung mit anderen Elementen. Das positionierte Element wird sichtbar sein, wenn irgendein Teil des Ankers noch sichtbar ist.

Ein stark verborgenes Element verhält sich so, als ob es und seine Nachkommenelemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt hätten, unabhängig davon, was ihr tatsächlicher `visibility`-Wert ist.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an den unteren Rand des Ankers angebunden ist. Der Infobox wird `position-visibility: no-overflow;` gegeben, um sie vollständig zu verstecken, wenn sie nach oben gescrollt wird, bis sie beginnt, über den Viewport hinauszulaufen.

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

{{ EmbedLiveSample("Bedingtes Verbergen mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
