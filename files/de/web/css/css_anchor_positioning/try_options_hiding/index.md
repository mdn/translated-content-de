---
title: Fallback-Optionen und bedingtes Verbergen für Überlauf
short-title: Überlauf behandeln
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Beim Verwenden von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass Anker-positionierte Elemente, wenn möglich, immer an einem bequemen Ort für den Benutzer erscheinen, um mit ihnen zu interagieren, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugehörigen positionierten Elemente zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, das Ansichtsfenster zu überlaufen, sollten Sie seine Position ändern, um es wieder auf den Bildschirm zu bringen, zum Beispiel auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in manchen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach zu verbergen — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind, könnte ihr Inhalt keinen Sinn ergeben.

Dieser Leitfaden erklärt, wie man CSS-Ankerpositionierungsmechanismen nutzt, um diese Probleme zu bewältigen — **position-try Fallback-Optionen** und **bedingtes Verbergen**. Position-try Fallback-Optionen bieten alternative Positionen, in denen der Browser versucht, positionierte Elemente zu platzieren, um sie auf dem Bildschirm zu halten, wenn sie zu überlaufen beginnen. Bedingtes Verbergen ermöglicht es, Bedingungen zu definieren, unter denen der Anker oder ein positioniertes Element verborgen wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist, scrollt der Benutzer den Inhalt so, dass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, und das Tooltip des UI-Features wird vom Bildschirm gerollt. CSS-Ankerpositionierung löst solche Probleme. Die `{{cssxref("position-try-fallbacks")}}` Eigenschaft des Moduls spezifiziert eine oder mehrere alternative position-try Fallback-Optionen, die der Browser versucht, um zu verhindern, dass das positionierte Element überfließt.

Position-try Fallback-Optionen können wie folgt angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert werden.

Zusätzlich erlaubt die {{cssxref("position-try-order")}} Eigenschaft Ihnen, verschiedene Optionen anzugeben, die zur bevorzugten Einstellung einer verfügbaren position-try Option im Vergleich zur anfänglichen Positionierung des Elements führen. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzschreibweiseigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht Anker-positionierter Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms ist, oder umgekehrt. Zum Beispiel könnten Sie einen Anker mit einer Quizfrage haben und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und möchten sie entweder zusammen oder gar nicht anzeigen. Dies kann durch bedingtes Verbergen erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte, die Bedingungen definieren, unter denen überlaufende Elemente verborgen werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s in der Spezifikation) "drehen" die Position des Anker-positionierten Elements über eine oder beide Achsen, wenn das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Block-Achse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie gedreht wird, die von einer Ecke des Ankers durch sein Zentrum zu seiner gegenüberliegenden Ecke gezogen wird (`flip-start`). Diese drei Werte drehen das Element, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und auf einer angrenzenden Seite für `flip-start`. Zum Beispiel, wenn ein Element, das `10px` über seinem Anker positioniert ist, beginnt, am oberen Rand des Ankers überzulaufen, würde der `flip-block` Wert das positionierte Element `10px` unter seinen Anker drehen.

In diesem Beispiel enthalten wir zwei {{htmlelement("div")}} Elemente. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>` Element so, dass es größer ist als das Ansichtsfenster, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir den Anker absolut, so dass er in der Nähe der Mitte des ersten `<body>` Renderings erscheint:

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

Das Anker-positionierte Element erhält eine fixe Positionierung und wird an die obere linke Ecke des Ankers mit einer `position-area` angeheftet. Es bekommt `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, die es dem positionierten Element ermöglichen, das Überlaufen zu stoppen, wenn der Anker sich dem Rand des Ansichtsfensters nähert.

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
> Wenn mehrere position-try Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt, und sie werden in der Reihenfolge ausprobiert, in der sie angegeben sind.

Versuchen Sie, das Demo so zu scrollen, dass der Anker sich den Rändern nähert:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker an die Oberseite des Ansichtsfensters. Das positionierte Element dreht sich auf die untere linke Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an die linke Seite des Ansichtsfensters. Das positionierte Element dreht sich auf die obere rechte Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker zur oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in Block- und Inlinerichtung überzulaufen, kehrt es zu seiner Standard-Position in der oberen linken Ecke zurück und überläuft in beide Richtungen, was nicht das ist, was wir möchten.

Dies geschieht, weil wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen in der Hoffnung, eine zu finden, die bewirkt, dass das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenen Blocks gerendert wird. Wenn er keine findet, rendert er das positionierte Element an seiner ursprünglich definierten Renderingposition, ohne dass Positions-Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie dieses Problem behoben werden kann.

## Kombinieren mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try-Optionen](#benutzerdefinierte_fallback-optionen) Namen in einen einzigen durch Leerzeichen getrennten Try-Fallback-Optionswert innerhalb der kommaseparierten `position-try-fallbacks` Liste zu setzen. Wenn versucht wird, diese Fallback-Optionen anzuwenden, kombiniert der Browser die individuellen Effekte in eine einzige kombinierte Fallback-Option.

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben. Das HTML und CSS in diesem Demo sind gleich, abgesehen von den Infobox-Positionierungsstilen. In diesem Fall wird ihm eine dritte Position-try Fallback-Option gegeben: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, versucht er dann, die beiden zu kombinieren, indem er die Position des Elements gleichzeitig in Block- _und_ Inlinerichtung dreht. Wenn Sie den Anker jetzt zu den oberen _und_ linken Rändern des Ansichtsfensters scrollen, wird das positionierte Element auf die untere rechte Seite umklappen.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Verwenden von `position-area` Try-Fallback-Optionen

Die vordefinierten `<try-tactic>` Try-Fallback-Optionen sind nützlich, aber begrenzt, da sie nur die Platzierung von positionierten Elementen über Achsen umdrehen lassen. Was wäre, wenn Sie ein Anker-positioniertes Element hätten, das auf der oberen linken Seite seines Ankers positioniert ist, und Sie seine Position ändern möchten, um es direkt unter dem Anker zu platzieren, falls es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-try Fallback-Option verwenden und ihn in die `position-try-fallbacks` Liste aufnehmen. Dies erstellt automatisch eine Fallback-Option basierend auf diesem Positionsbereich. Tatsächlich ist es eine Abkürzung für das Erstellen einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Position-try Fallback-Optionen in der Anwendung. Wir verwenden dasselbe HTML und CSS, mit Ausnahme der Infobox-Positionierung. In diesem Fall sind unsere Position-try Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, egal an welchem Rand des Ansichtsfensters sich der Anker nähert. Dieser ausführliche Ansatz ist granularer und flexibler als der Ansatz mit vordefinierten Werten.

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
> Sie können keine `position-area` Try-Fallback-Optionen in einer durch Leerzeichen getrennten kombinierten Positionsoption innerhalb einer Position-try Fallback-Liste hinzufügen.

Scrollen Sie die Seite und sehen Sie sich die Wirkung dieser Position-try Fallback-Optionen an, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Position-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-try Fallback-Option. Dieser Name kann dann in der kommaseparierten Liste von Try-Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentenreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try-Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese individuelle benutzerdefinierte Try-Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert werden soll und welche Ränder verwendet werden sollen. Die begrenzte Liste der zulässigen Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbst-Ausrichtungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionierungseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, usw.)
- {{cssxref("position-anchor")}}

Die in der At-Regel enthaltenen Werte werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option angewendet wird. Wenn eines der Eigenschaften zuvor auf dem positionierten Element gesetzt war, werden diese Eigenschaftswerte von den Deskriptorwerten überschrieben. Wenn der Benutzer scrollt und eine andere Try-Fallback-Option oder keine Try-Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try-Fallback-Option aufgehoben.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try-Fallback-Optionen ein und verwenden sie. Wir verwenden denselben HTML- und CSS-Code wie in den vorherigen Beispielen.

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

Sobald unsere benutzerdefinierten Try-Fallback-Optionen erstellt sind, können wir sie in die Positionsliste einfügen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung über die Seite überläuft, sitzt die Infobox über dem Anker, und die in der `position-try-fallbacks` Eigenschaft festgelegten Position-try Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene Position-try Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks` Eigenschaft aufgeführten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox nach links vom Anker, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox unter den Anker und setzt einen passenden Rand. Es enthält keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft festgelegt wurde.
- Der Browser versucht dann die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Deskriptorwert, aber die `position-area` und `margin` Werte werden gespiegelt, um die Infobox entsprechend nach rechts zu platzieren.
- Wenn keine der anderen Fallback-Optionen erfolgreich ist, um das positionierte Element am Überlaufen zu hindern, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, aber es platziert das positionierte Element unten rechts vom Anker.

Wenn keine der Fallback-Optionen erfolgreich ist, um das positionierte Element am Überlaufen zu hindern, kehrt die Position zum ursprünglichen `position-area: top;` Wert zurück.

> [!NOTE]
> Wenn eine position-try Fallback-Option angewendet wird, werden ihre Werte die Standardwerte überschreiben, die auf das positionierte Element gesetzt wurden. Zum Beispiel ist die Standardbreite, die auf das positionierte Element festgelegt ist, `200px`, aber wenn die `--custom-right` position-try Fallback-Option angewendet wird, wird ihre Breite auf `100px` festgelegt.

Scrollen Sie die Seite und prüfen Sie die Auswirkung dieser position-try Fallback-Optionen, wenn sich der Anker dem Rand des Ansichtsfensters nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Verwenden von `position-try-order`

Die {{cssxref("position-try-order")}} Eigenschaft hat einen etwas anderen Fokus als der Rest der position-try Funktionalität, da sie Position-try Fallback-Optionen nutzt, wenn das positionierte Element erstmalig angezeigt wird, statt wenn es im Prozess des Überlaufens ist.

Diese Eigenschaft erlaubt es Ihnen anzugeben, dass Sie das positionierte Element zunächst mit der Position-try Fallback-Option anzeigen möchten, die seinem enthaltenen Block die meiste Breite oder die meiste Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Auswirkungen von zuvor gesetzten `position-try-order` Werten mit dem `normal` Wert entfernen.

Wenn keine position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die der anfänglichen Positionierung des Elements, hat `position-try-order` keine Wirkung.

Lassen Sie uns ein Demo ansehen, das die Wirkung dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` hinzugefügt haben, das Optionsfelder enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um ihre Auswirkungen zu sehen.

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

Wir positionieren die Infobox zunächst am oberen Rand des Ankers, und geben ihr dann unsere benutzerdefinierte Try-Fallback-Option:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Optionsfelder setzt. Wenn ein Optionsfeld ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Order-Option auszuwählen. Dies hat die Wirkung, die `--custom-bottom` position-try Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil unter dem Anker mehr Platz ist als über ihm.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Bedingt Anker-positionierte Elemente ausblenden

In einigen Situationen möchten Sie möglicherweise ein Anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Ansichtsfensters ist, möchten Sie möglicherweise sein zugehöriges Element insgesamt ausblenden. Die {{cssxref("position-visibility")}} Eigenschaft ermöglicht es Ihnen, Bedingungen anzugeben, unter denen positionierte Elemente verborgen werden.

Standardmäßig wird das positionierte Element `immer` angezeigt. Der `no-overflow` Wert wird das positionierte Element **stark verbergen**, wenn es beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überlaufen.

Der `anchors-visible` Wert hingegen verbirgt das positionierte Element stark, wenn seine zugehörigen Anker _vollständig_ verborgen sind, entweder durch Überlauf seines enthaltenden Elements (oder des Ansichtsfensters) oder durch andere Elemente verdeckt werden. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker noch sichtbar ist.

Ein stark verborgenes Element verhält sich so, als hätte es und seine Kindelemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig davon, welchen tatsächlichen `visibility` Wert sie haben.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an der unteren Kante des Ankers befestigt ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben scrollt, bis sie beginnt, das Ansichtsfenster zu überlaufen.

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

Scrollen Sie nach unten auf der Seite und beachten Sie, wie das positionierte Element verborgen wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
