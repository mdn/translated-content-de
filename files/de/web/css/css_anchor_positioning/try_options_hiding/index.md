---
title: "Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Verstecken"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Beim Einsatz von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente nach Möglichkeit immer an einem benutzerfreundlichen Ort erscheinen, unabhängig davon, wo der Anker positioniert ist. Beispielsweise bewegen sich Anker und ihre zugehörigen positionierten Elemente beim Scrollen der Seite zum Rand des Viewports. Wenn ein positioniertes Element zu überlaufen beginnt, sollte seine Position geändert werden, um es wieder auf den Bildschirm zu bringen, z.B. auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach zu verstecken — beispielsweise, wenn sich ihre Anker außerhalb des Bildschirms befinden und ihr Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie Sie die Mechanismen der CSS-Anker-Positionierung zur Bewältigung dieser Probleme einsetzen können — **Position-try Fallback-Optionen** und **bedingtes Verstecken**. Die Position-try Fallback-Optionen bieten alternative Positionen an, die der Browser ausprobiert, um das positionierte Element auf dem Bildschirm zu halten, während es zu überlaufen beginnt. Bedingtes Verstecken ermöglicht es, Bedingungen festzulegen, unter denen der Anker oder ein positioniertes Element versteckt wird.

> [!NOTE]
> Für Informationen zu den grundlegenden Grundlagen der CSS-Anker-Positionierung siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionszusammenfassung

Ist ein Tooltip an der oberen rechten Seite eines UI-Elements fixiert, scrollt der Benutzer den Inhalt so, dass sich das UI-Element in der oberen rechten Ecke des Viewports befindet, wird der Tooltip dieses UI-Elements vom Bildschirm scrollen. CSS-Anker-Positionierung löst solche Probleme. Die Eigenschaft {{cssxref("position-try-fallbacks")}} des Moduls gibt eine oder mehrere alternative Position-try Fallback-Optionen an, damit der Browser versucht, das Überlaufen des positionierten Elements zu verhindern.

Position-try Fallback-Optionen können angegeben werden durch:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert werden.

Zusätzlich ermöglicht die {{cssxref("position-try-order")}} Eigenschaft, verschiedene Optionen anzugeben, die zur Auswahl einer verfügbaren Position-Try-Option in Vorzug zu der anfänglichen Positionierung des Elements führen. Beispielsweise könnten Sie das Element zunächst in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite hat.

Die Kurzform-Eigenschaft {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht ankerpositionierter Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms ist oder umgekehrt. Beispielsweise könnten Sie einen Anker mit einer Quizfrage haben und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und wünschen, diese entweder zusammen oder gar nicht anzuzeigen. Dies kann durch bedingtes Verstecken erreicht werden, das über die {{cssxref("position-visibility")}} Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente versteckt werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der `position-try-fallbacks` Eigenschaft (in der Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s definiert) werden die Position des ankerpositionierten Elements über eine oder beide Achsen "umklappen", falls das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal entlang einer imaginären Linie von einer Ecke des Ankers durch die Mitte zur gegenüberliegenden Ecke (`flip-start`) umklappt. Diese drei Werte klappen das Element um, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und einer angrenzenden Seite für `flip-start`. Wenn z.B. ein Element, das `10px` über seinem Anker positioniert ist, oben am Anker zu überlaufen beginnt, würde der Wert `flip-block` das positionierte Element dazu bringen, sich 10px unter dem Anker zu befinden.

In diesem Beispiel enthalten wir zwei {{htmlelement("div")}} Elemente. Das erste wird unser Ankerelement sein und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>` Element so, dass es größer ist als der Viewport, damit wir den Anker und das positionierte Element horizontal und vertikal im Viewport scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu illustrativen Zwecken positionieren wir den Anker absolut, sodass er sich nahe dem Zentrum der anfänglichen `<body>` Darstellung befindet:

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

Das ankerpositionierte Element erhält eine feste Positionierung und ist an der oberen linken Ecke des Ankers mit einer `position-area` verankert. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu geben, damit das positionierte Element das Überlaufen stoppt, wenn der Anker sich dem Rand des Viewports nähert.

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
> Wenn mehrere Position-try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo zu scrollen, damit der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Mit vordefinierten Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an die Spitze des Viewports. Das positionierte Element klappt an die untere linke Seite des Ankers, um Überlaufen zu vermeiden.
- Bewegen Sie den Anker nach links in den Viewport. Das positionierte Element klappt an die obere rechte Seite des Ankers, um Überlaufen zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Viewports bewegen, bemerken Sie ein Problem — da das positionierte Element sowohl in der Block- als auch in der Inline-Richtung überläuft, klappt es zurück in seine Standardposition in der oberen linken und überläuft in beiden Richtungen, was nicht das ist, was wir wollen.

Dies passiert, weil wir dem Browser nur die Optionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser testet die Fallback-Optionen, sucht nach einer, die das positionierte Element vollständig innerhalb des Viewports oder des enthaltenen Blocks rendert. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglich definierten Renderposition, ohne dass Fallback-Optionen angewendet werden.

Der nächste Abschnitt zeigt, wie dieses Problem behoben werden kann.

## Kombination mehrerer Werte zu einer Option

Es ist möglich, mehrere [vordefinierte Try Fallback Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte Try Option](#benutzerdefinierte_fallback-optionen) Namen zu einem einzigen leerzeichengetrennten Try Fallback Optionswert innerhalb der komma-getrennten `position-try-fallbacks` Liste zu kombinieren. Beim Versuch, diese Fallback-Optionen zu verwenden, kombiniert der Browser die individuellen Effekte zu einer einzigen kombinierten Fallback-Option.

Lassen Sie uns eine kombinierte Try Fallback Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben. Der HTML- und CSS-Code in diesem Demo ist derselbe, mit Ausnahme der Positionierungsstile der Infobox. In diesem Fall erhält sie eine dritte Position-try-Fallback-Option: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um Überlaufen zu vermeiden. Sollten diese Fallback-Optionen beide scheitern, versucht er dann, die beiden zu kombinieren, indem er die Position des Elements in Block- _und_ Inline-Richtungen gleichzeitig umklappt. Jetzt, wenn Sie den Anker auf die oberen _und_ linken Ränder des Viewports zu scrollen, klappt das positionierte Element zur unteren rechten Seite.

{{ EmbedLiveSample("Kombination mehrerer Werte zu einer Option", "100%", "250") }}

## Verwendung von `position-area` Try Fallback Optionen

Die vordefinierten `<try-tactic>` Try Fallback Optionen sind nützlich, aber begrenzt, da sie nur eine Ankerposition eben so erlauben, dass sie über eine Achse umklappen kann. Was ist, wenn Sie ein ankerpositioniertes Element hatten, das oben links an seinem Anker positioniert ist, und seine Position in direkt unterhalb des Ankers ändern möchten, wenn es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-try Fallback Option verwenden, indem Sie ihn in die `position-try-fallbacks` Liste einfügen. Dies erstellt automatisch eine Try Fallback Option basierend auf diesem Position Area. Im Effekt ist es eine Abkürzung, um eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt, wie `position-area` Try Fallback Optionen verwendet werden. Wir verwenden denselben HTML- und CSS-Code, außer für die Positionierung der Infobox. Unsere Position-try Fallback-Optionen sind `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert, egal welchem Rand des Viewports sich der Anker nähert. Dieser ausführliche Ansatz ist granulativer und flexibler als der vordefinierte Werteansatz.

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
> Sie können keine `position-area` Try Fallback Optionen in eine leerzeichengetrennte kombinierte Position Option innerhalb der Position-try Fallback Liste hinzufügen.

Scrollen Sie die Seite und beachten Sie die Wirkung dieser Position-try Fallback Optionen, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Verwendung von `position-area` Try Fallback Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Position Fallback Optionen zu verwenden, die nicht über die oben genannten Mechanismen verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position Try Fallback Option. Dieser Name kann dann innerhalb der komma-getrennten Liste der Try Fallback Optionen innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswerts angegeben werden. Wenn mehrere `@position-try` Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre Try Fallback Optionen _und_ Ihre Anker oder benutzerdefinierten Eigenschaftsnamen zu verwenden; dies macht die At-Regel nicht ungültig, wird aber Ihre CSS schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für die individuelle benutzerdefinierte Try Fallback Option, einschließlich der Art, wie das positionierte Element platziert und dimensioniert werden sollte und eventueller Ränder. Die begrenzte Liste der zugelassenen Eigenschaftsbeschreibungen umfasst:

- {{cssxref("position-area")}}
- [Inset-Eigenschaften](/de/docs/Glossary/Inset_properties)
- Randeigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbstausrichtung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionierungseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in die At-Regel einfügen, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try Fallback Option angewendet wird. Wenn zuvor gesetzte Eigenschaften auf dem positionierten Element vorhanden waren, werden diese Eigenschaftswerte durch die Deskriptorwerte überschrieben. Wenn der Benutzer scrollt und eine andere Try Fallback Option oder keine Try Fallback Option angewendet wird, werden die Werte aus der zuvor angewendeten Try Fallback Option zurückgesetzt.

In diesem Beispiel setzen wir mehrere benutzerdefinierte Try Fallback Optionen auf und verwenden sie. Wir verwenden denselben grundlegenden HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten Try Fallback Optionen mit `@position-try`:

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

Sobald unsere benutzerdefinierten Try Fallback Optionen erstellt sind, können wir sie in die Positionsliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keiner Richtung überläuft, sitzt die Infobox über dem Anker und die Position-try Fallback Optionen, die in der Eigenschaft `position-try-fallbacks` festgelegt sind, werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen Bodenrand hat. Diese Werte werden geändert, wenn verschiedene Position-try Fallback Optionen angewendet werden.

Wenn die Infobox zu überlaufen beginnt, versucht der Browser die in der Eigenschaft `position-try-fallbacks` aufgelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox nach links vom Anker, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies bewegt die Infobox nach unten vom Anker und richtet einen geeigneten Rand ein. Sie enthält keinen `width` Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die Eigenschaft `width` gesetzt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit derselben `width` Deskriptorwert, aber die `position-area` und `margin` Werte werden gespiegelt, um die Infobox angemessen an der rechten Seite zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich sind, um das Überlaufen des positionierten Elements zu stoppen, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Dies funktioniert ähnlich wie die anderen Fallback Optionen, aber es platziert das positionierte Element in der unteren rechten Seite des Ankers.

Wenn keiner der Fallbacks erfolgreich ist, das Überlaufen des positionierten Elements zu stoppen, kehrt die Position auf den ursprünglichen Wert `position-area: top;` zurück.

> [!NOTE]
> Wenn eine Position-try Fallback Option angewendet wird, überschreiben deren Werte die Standardwerte, die auf das positionierte Element gesetzt sind. Beispielsweise ist die Standardbreite, die auf das positionierte Element gesetzt ist `200px`, aber wenn die `--custom-right` Position-try Fallback Option angewendet wird, ist ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und beachten Sie die Wirkung dieser Position-try Fallback Optionen, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}} Eigenschaft hat einen etwas anderen Fokus als der Rest der Position-Try-Funktionalität, da sie Position-try Fallback Optionen verwendet, wenn das positionierte Element das erste Mal angezeigt wird, anstatt wenn es dabei ist, überlaufen.

Diese Eigenschaft ermöglicht es Ihnen, anzugeben, dass Sie das positionierte Element initial mit der Position-try Fallback Option angezeigt haben möchten, die seinem enthaltenden Block die meiste Breite oder Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Auswirkungen zuvor gesetzter `position-try-order` Werte mithilfe des Werts `normal` entfernen.

Wenn keine Position-try Fallback Option verfügbar ist, die mehr Breite/Höhe als die anfänglich zugewiesene Positionierung des Elements bietet, hat `position-try-order` keine Wirkung.

Lassen Sie uns ein Demo betrachten, das die Wirkung dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` mit Radio-Buttons hinzugefügt haben, das Ihnen erlaubt, verschiedene Werte von `position-try-order` auszuwählen, um ihre Auswirkungen zu sehen.

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

Wir fügen eine benutzerdefinierte Try Fallback Option hinzu — `--custom-bottom` — die das Element unterhalb des Ankers positioniert und einen Rand hinzufügt:

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

Wir positionieren die Infobox zunächst über dem Anker und geben ihr dann unsere benutzerdefinierte Try Fallback:

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

Schließlich fügen wir etwas JavaScript hinzu, das einem [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radio-Buttons setzt. Wenn ein Radio-Button ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie die Auswahl der `most-height` Bestelloption. Dies hat die Wirkung, die `--custom-bottom` Position-try Fallback Option anzuwenden, die das Element unterhalb des Ankers positioniert. Dies geschieht, weil es mehr Platz unterhalb des Ankers gibt als darüber.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingungsweises Verstecken von ankerpositionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein ankerpositioniertes Element verstecken. Beispielsweise, wenn das Ankerelement abgeschnitten ist, weil es zu nah am Rand des Viewports ist, möchten Sie vielleicht einfach sein zugehöriges Element vollständig verstecken. Die {{cssxref("position-visibility")}} Eigenschaft ermöglicht es Ihnen, Bedingungen festzulegen, unter denen positionierte Elemente versteckt werden.

Standardmäßig wird das positionierte Element `immer` angezeigt. Der `no-overflow` Wert wird das positionierte Element **stark verstecken**, wenn es beginnt, sein enthaltendes Element oder den Viewport zu überlaufen.

Der `anchors-visible` Wert hingegen versteckt das positionierte Element stark, wenn seine zugehörigen Anker _vollständig_ versteckt sind, entweder durch Überlaufen seines enthaltenden Elements (oder des Viewports) oder durch Überdeckung durch andere Elemente. Das positionierte Element wird sichtbar sein, wenn irgendein Teil der Anker(s) noch sichtbar ist.

Ein stark verstecktes Element verhält sich, als ob es und seine Nachkom menelemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt hätten, unabhängig davon, welcher tatsächliche `visibility` Wert gesetzt ist.

Sehen wir uns diese Eigenschaft in Aktion an.

Dieses Beispiel verwendet denselben HTML- und CSS-Code wie in vorherigen Beispielen, mit der Infobox, die an der unteren Kante des Ankers angebracht ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig zu verstecken, wenn sie nach oben gescrollt wird und beginnt, den Viewport zu überlaufen.

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

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element verborgen wird, sobald es die Oberseite des Viewports erreicht:

{{ EmbedLiveSample("Bedingungsweises Verstecken mit `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Elemente in CSS größen](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
