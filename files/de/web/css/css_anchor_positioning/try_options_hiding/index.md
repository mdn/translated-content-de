---
title: "Umgang mit Overflow: Verwenden Sie Fallbacks und bedingtes Verstecken"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Beim Verwenden der [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig sicherzustellen, dass ankerpositionierte Elemente stets an einem praktischen Ort für den Benutzer erscheinen, unabhängig davon, wo der Anker positioniert ist. Wenn Sie beispielsweise die Seite scrollen, bewegen sich Anker und ihre zugehörigen positionierten Elemente an den Rand des Viewports. Wenn ein positioniertes Element beginnt, den Viewport zu überlaufen, möchten Sie seine Position ändern, um es wieder auf dem Bildschirm anzuzeigen, beispielsweise auf der gegenüberliegenden Seite des Ankers.

Alternativ kann es in manchen Situationen vorzuziehen sein, überlappende positionierte Elemente einfach zu verbergen — zum Beispiel, wenn ihre Anker außerhalb des Bildschirms sind und ihr Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie man CSS-Anker-Positionierungsmechanismen verwenden kann, um diese Probleme zu verwalten — **Position-try Fallback-Optionen** und **bedingtes Verstecken**. Position-try Fallback-Optionen bieten alternative Positionen, die der Browser verwenden kann, um positionierte Elemente auf dem Bildschirm zu halten, wenn sie beginnen, den Bildschirm zu überlaufen. Bedingtes Verstecken ermöglicht es, Bedingungen festzulegen, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den Grundlagen der CSS-Anker-Positionierung finden Sie unter [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip oben rechts an einem UI-Element fixiert ist und der Benutzer den Inhalt scrollt, sodass die UI-Funktion in der oberen rechten Ecke des Viewports ist, wird das Tooltip dieser UI-Funktion vom Bildschirm gescrollt. Die CSS-Anker-Positionierung löst solche Probleme. Das Modul enthält die {{cssxref("position-try-fallbacks")}}-Eigenschaft, die eine oder mehrere alternative Position-try Fallback-Optionen für den Browser spezifiziert, um ein Überfließen des positionierten Elements zu verhindern.

Position-try Fallback-Optionen können auf folgende Weise angegeben werden:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen), die mit der {{cssxref("@position-try")}} At-Regel definiert sind.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen festzulegen, die dazu führen, dass eine verfügbare Position-try Option bevorzugt über die anfängliche Positionierung des Elements festgelegt wird. Sie könnten beispielsweise das Element anfänglich in einem Bereich anzeigen wollen, der mehr Höhe oder Breite verfügbar hat.

Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration zu spezifizieren.

In manchen Situationen macht ankerpositionierter Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms ist, oder umgekehrt. Wenn Sie beispielsweise einen Anker mit einer Quizfrage haben und die Antworten in verbundenen positionierten Elementen enthalten sind, möchten Sie sie entweder beide zusammen oder gar nicht anzeigen. Dies kann durch bedingtes Verstecken erreicht werden, das über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlappende Elemente versteckt werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionen der `position-try-fallbacks` Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)s in der Spezifikation) werden die Position des ankerpositionierten Elements auf einer oder beiden Achsen "umdrehen", wenn das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es auf der Block-Achse (`flip-block`), der Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie von einer Ecke des Ankers durch sein Zentrum zu seiner gegenüberliegenden Ecke (`flip-start`) umgedreht wird. Diese drei Werte drehen das Element um, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und auf einer angrenzenden Seite für `flip-start`. Zum Beispiel, wenn ein Element `10px` über seinem Anker positioniert ist und oben am Anker beginnt zu überlaufen, würde der `flip-block` Wert das positionierte Element dazu bringen, 10px unterhalb des Ankers zu sein.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}}-Elemente ein. Das erste wird unser Anker-Element sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir stylen das `<body>`-Element größer als den Viewport, sodass wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Viewport scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Illustrationszwecken positionieren wir den Anker absolut, sodass er nahe dem Zentrum der initialen `<body>` Darstellung erscheint:

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

Das ankerpositionierte Element erhält eine feste Positionierung und wird an der oberen linken Ecke des Ankers mit einem `position-area` befestigt. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen anzubieten, die das positionierte Element davon abhalten sollen, überzulaufen, wenn der Anker dem Rand des Viewports nahekommt.

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
> Wenn mehrere position-try Fallback-Optionen angegeben sind, werden sie durch Kommata getrennt und in der Reihenfolge, in der sie angegeben wurden, ausprobiert.

Scrollen Sie die Demo, sodass der Anker beginnt, den Rändern nahe zu kommen:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Viewports. Das positionierte Element dreht sich an die untere linke Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Viewports. Das positionierte Element dreht sich an die obere rechte Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in die obere linke Ecke des Viewports bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in der Block- und Inline-Richtung zu überlaufen, dreht es sich zurück in seine Standardposition oben links und überläuft in beide Richtungen, was nicht das gewünschte Ergebnis ist.

Das passiert, weil wir dem Browser nur Positionierungsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig zu versuchen. Der Browser versucht die Fallback-Optionen zu nutzen, um eine zu finden, die dazu führt, dass das positionierte Element vollständig im Viewport oder im Containerblock gerendert wird. Wenn er keine findet, rendert er das positionierte Element in seiner ursprünglichen Position, ohne dass Fallback-Optionen angewendet werden.

Der nächste Abschnitt demonstriert, wie dieses Problem behoben wird.

## Mehrere Werte zu einer Option kombinieren

Es ist möglich, mehrere [vordefinierte try Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte try Option](#benutzerdefinierte_fallback-optionen) Namen in einen einzelnen, durch Leerzeichen getrennten try Fallback-Optionswert innerhalb der durch Kommas getrennten `position-try-fallbacks` Liste aufzunehmen. Wenn versucht wird, diese Fallback-Optionen anzuwenden, kombiniert der Browser die einzelnen Effekte zu einer einzigen kombinierten Fallback-Option.

Nutzen wir eine kombinierte try Fallback-Option, um das Problem zu beheben, das wir mit der vorherigen Demo festgestellt haben. Das HTML und CSS in dieser Demo sind dieselben, abgesehen von den Infobox-Positionierungsstilen. In diesem Fall erhält es eine dritte Position-try Fallback-Option: `flip-block flip-inline`:

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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` versucht, um das Überlaufen zu vermeiden. Wenn diese Fallback-Optionen beide fehlschlagen, wird er versuchen, die beiden zu kombinieren, indem er die Position des Elements gleichzeitig in der Block- _und_ Inline-Richtung dreht. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Rändern des Viewports scrollen, dreht sich das positionierte Element zur unteren rechten Seite.

{{ EmbedLiveSample("Kombinieren mehrerer Werte zu einer Option", "100%", "250") }}

## Verwenden von `position-area` Try Fallback-Optionen

Die vordefinierten `<try-tactic>` try Fallback-Optionen sind nützlich, aber begrenzt, da sie nur die Platzierung von positionierten Elementen über Achsen umdrehen lassen. Was, wenn Sie ein ankerpositioniertes Element haben, das oben links an seinem Anker positioniert ist, und Sie seine Position direkt unter den Anker ändern möchten, falls es beginnt zu überlaufen?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}} Wert als Position-try Fallback-Option verwenden und ihn in die `position-try-fallbacks` Liste aufnehmen. Dies erstellt automatisch eine try Fallback-Option basierend auf diesem Position-Bereich. Im Grunde ist es eine Abkürzung, um eine [benutzerdefinierte Position-Option](#benutzerdefinierte_fallback-optionen) zu erstellen, die nur diesen `position-area` Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Position try Fallback-Optionen in der Anwendung. Wir verwenden das gleiche HTML und CSS, außer für die Infobox-Positionierung. In diesem Fall sind unsere Position-try Fallback-Optionen `position-area` Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, und `left`. Das positionierte Element wird vernünftig positioniert sein, egal welcher Rand des Viewports der Anker erreicht. Dieser ausführliche Ansatz ist granulärer und flexibler als der Ansatz mit vordefinierten Werten.

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
> Sie können keine `position-area` try Fallback-Optionen in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-try Fallback-Liste aufnehmen.

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser Position-try Fallback-Optionen, wenn der Anker dem Rand des Viewports nahekommt:

{{ EmbedLiveSample("Verwendung von `position-area` Try Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax ist:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die Position-try Fallback-Option. Dieser Name kann dann innerhalb der durch Kommas getrennten Liste der try Fallback-Optionen innerhalb des {{cssxref("position-try-fallbacks")}} Eigenschaftswertes angegeben werden. Wenn mehrere `@position-try` Regeln den gleichen Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, den gleichen Namen für Ihre try Fallback-Optionen _und_ Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; es macht die At-Regel nicht ungültig, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte try Fallback-Option, einschließlich wie das positionierte Element platziert und dimensioniert werden soll, und alle Ränder. Die begrenzte Liste der erlaubten Eigenschaftsbeschreibungen umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Rand-Eigenschaften (z.B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [self-alignment](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Eigenschaften
- Dimensionierungseigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

Die in der At-Regel eingeschlossenen Werte werden auf das positionierte Element angewendet, wenn die benannte custom-try Fallback-Option angewendet wird. Wenn zuvor Eigenschaften auf das positionierte Element gesetzt waren, werden diese Eigenschaftswerte durch die Beschreibungswerte überschrieben. Wenn der Benutzer scrollt, sodass eine andere Try Fallback-Option oder keine Try Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten Try Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte Try Fallback-Optionen ein und verwenden sie. Wir verwenden den gleichen Grundsatz von HTML und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen, indem wir vier benutzerdefinierte Try Fallback-Optionen mit `@position-try` definieren:

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

Sobald unsere benutzerdefinierten Try Fallback-Optionen erstellt sind, können wir sie in die Positionierungsliste aufnehmen, indem wir ihre Namen referenzieren:

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

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox nicht an einer Stelle überläuft, sitzt die Infobox über dem Anker und die in der `position-try-fallbacks` Eigenschaft festgelegten Position-try Fallback-Optionen werden ignoriert. Auch beachten Sie, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte werden geändert, während verschiedene Position-try Fallback-Optionen angewendet werden.

Wenn die Infobox beginnt zu überlaufen, versucht der Browser die in der `position-try-fallbacks` Eigenschaft gelisteten Positionsoptionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies verschiebt die Infobox nach links des Ankers, passt den Rand an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Dies verschiebt die Infobox unter den Anker und setzt einen entsprechenden Rand. Es enthält keinen `width` Beschreibungswert, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width` Eigenschaft festgelegt ist.
- Der Browser versucht als nächstes die `--custom-right` Position. Dies funktioniert ähnlich wie die `--custom-left` Position, mit demselben `width` Beschreibungswert, aber die `position-area` und `margin` Werte sind gespiegelt, um die Infobox angemessen nach rechts zu platzieren.
- Wenn keine anderen Fallbacks erfolgreich verhindern, dass das positionierte Element überläuft, versucht der Browser als letzten Ausweg die `--custom-bottom-right` Position. Dies funktioniert ähnlich wie die anderen Fallback-Optionen, aber es platziert das positionierte Element am unteren rechten Anker.

Wenn keine der Fallbacks erfolgreich verhindert, dass das positionierte Element überläuft, wird die Position auf den initialen `position-area: top;` zurückgesetzt.

> [!NOTE]
> Wenn eine Position Try Fallback-Option angewendet wird, überschreiben ihre Werte die Standardwerte, die auf dem positionierten Element gesetzt sind. Beispielsweise ist die Standardbreite auf dem positionierten Element `200px`, aber wenn die `--custom-right` Position Try Fallback-Option angewendet wird, wird ihre Breite auf `100px` gesetzt.

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser Position-try Fallback-Optionen, wenn der Anker dem Rand des Viewports nahekommt:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen etwas anderen Schwerpunkt als die restliche Position-try Funktionalität, da sie Positions-try Fallback-Optionen beim erstmaligen Anzeigen des positionierten Elements nutzt und nicht, wenn es im Begriff ist zu überlaufen.

Diese Eigenschaft ermöglicht es Ihnen zu spezifizieren, dass Sie möchten, dass das positionierte Element zunächst mit der Position try Fallback-Option angezeigt wird, die seinem Containerblock die meiste Breite oder Höhe gibt. Dies wird erreicht, indem die Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` gesetzt werden. Sie können auch die Effekte von zuvor gesetzten `position-try-order` Werten mit dem `normal` Wert entfernen.

Wenn keine Position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die initial zugewiesene Positionierung des Elements, hat `position-try-order` keine Effekt.

Sehen wir uns eine Demo an, die die Wirkung dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` mit Radiobuttons hinzugefügt haben, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um ihre Auswirkungen zu sehen.

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

Wir positionieren die Infobox zunächst oberhalb des Ankers und geben ihr dann unsere benutzerdefinierte try Fallback:

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

Zuletzt fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radiobuttons setzt. Wenn ein Radiobutton ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie die `most-height` Ordnungsoption auszuwählen. Dies hat den Effekt, dass die `--custom-bottom` Position try Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies passiert, weil es mehr Platz unter dem Anker als über ihm gibt.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Verstecken ankerpositionierter Elemente

In einigen Situationen möchten Sie eventuell ein ankerpositioniertes Element verstecken. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Viewports ist, möchten Sie eventuell einfach sein zugehöriges Element vollständig verstecken. Die {{cssxref("position-visibility")}}-Eigenschaft ermöglicht es Ihnen, Bedingungen festzulegen, unter denen positionierte Elemente versteckt werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der `no-overflow` Wert wird das positionierte Element **stark verstecken**, wenn es anfängt, seinen Container oder den Viewport zu überlaufen.

Der `anchors-visible` Wert hingegen versteckt das positionierte Element stark, wenn seine zugehörigen Ankere vollständig versteckt sind, entweder weil sie ihren Container (oder den Viewport) überlaufen oder von anderen Elementen überdeckt werden. Das positionierte Element wird sichtbar, wenn irgendein Teil des Ankers noch sichtbar ist.

Ein stark verstecktes Element wirkt so, als ob es und seine Nachkommen-Elemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt haben, unabhängig von ihrem tatsächlichen `visibility` Wert.

Lassen Sie uns diese Eigenschaft in Aktion sehen.

Dieses Beispiel verwendet das gleiche HTML und CSS wie in den vorherigen Beispielen, mit der Infobox, die an den unteren Rand des Ankers gebunden ist. Die Infobox erhält `position-visibility: no-overflow;`, um es vollständig zu verstecken, wenn es nach oben gescrollt wird, bis zu dem Punkt, an dem es beginnt, den Viewport zu überlaufen.

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

Scrollen Sie die Seite nach unten und beachten Sie, wie das positionierte Element versteckt wird, sobald es den oberen Rand des Viewports erreicht:

{{ EmbedLiveSample("Bedingtes Verstecken unter Verwendung von `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte Modul](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
