---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Beim Einsatz von [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) ist es wichtig, sicherzustellen, dass Anker-positionierte Elemente immer an einem praktischen Ort erscheinen, mit dem der Benutzer interagieren kann, unabhängig davon, wo der Anker positioniert ist. Zum Beispiel, wenn Sie die Seite scrollen, bewegen sich Anker und ihre zugehörigen positionierten Elemente zum Rand des Ansichtsfensters. Wenn ein positioniertes Element beginnt, das Ansichtsfenster zu überlaufen, sollten Sie seine Position ändern, um es wieder auf den Bildschirm zu bringen, beispielsweise auf die gegenüberliegende Seite des Ankers.

Alternativ kann es in einigen Situationen vorzuziehen sein, überlaufende positionierte Elemente einfach auszublenden — beispielsweise wenn ihre Anker sich außerhalb des Bildschirms befinden und ihr Inhalt möglicherweise keinen Sinn ergibt.

Dieser Leitfaden erklärt, wie Sie CSS-Anker-Positionierungsmechanismen verwenden können, um diese Probleme zu verwalten — **position-try Fallback-Optionen** und **bedingtes Ausblenden**. Position-try Fallback-Optionen bieten alternative Positionen, die der Browser ausprobieren kann, um zu verhindern, dass positionierte Elemente den Bildschirm überlaufen. Bedingtes Ausblenden ermöglicht es, Bedingungen anzugeben, unter denen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Weitere Informationen zu den Grundlagen der CSS-Anker-Positionierung finden Sie unter [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip am oberen rechten Rand eines UI-Elements fixiert ist, wird das Tooltip des UI-Features, wenn der Benutzer den Inhalt so scrollt, dass sich das UI-Feature in der oberen rechten Ecke des Ansichtsfensters befindet, vom Bildschirm gescrollt. Die CSS-Anker-Positionierung löst solche Probleme. Die {{cssxref("position-try-fallbacks")}}-Eigenschaft des Moduls gibt eine oder mehrere alternative position-try Fallback-Optionen an, um zu verhindern, dass das positionierte Element überläuft.

Position-try Fallback-Optionen können angegeben werden mit:

- [Vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen).
- [`position-area` Werte](#using_position-area_try_fallback_options).
- [Benutzerdefinierte Optionen](#benutzerdefinierte_fallback-optionen) definiert mit der {{cssxref("@position-try")}} At-Regel.

Darüber hinaus ermöglicht die {{cssxref("position-try-order")}}-Eigenschaft, verschiedene Optionen anzugeben, die dazu führen, dass eine verfügbare Position-try-Option gegenüber der ursprünglichen Positionierung des Elements bevorzugt wird. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite bietet.

Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um `position-try-order` und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

In einigen Situationen macht Anker-positionierter Inhalt keinen Sinn, wenn der Anker sich außerhalb des Bildschirms befindet, oder umgekehrt. Zum Beispiel könnten Sie einen Anker haben, der eine Quizfrage enthält, und Antworten, die in zugehörigen positionierten Elementen enthalten sind, und möchten, dass beide zusammen oder gar nicht angezeigt werden. Dies kann mit bedingtem Ausblenden erreicht werden, das über die {{cssxref("position-visibility")}}-Eigenschaft verwaltet wird. Diese Eigenschaft nimmt verschiedene Werte an, die Bedingungen definieren, unter denen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Optionswerte der `position-try-fallbacks`-Eigenschaft (definiert als [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic) im Spezifikationsdokument) "flippen" die Position des Anker-positionierten Elements über eine oder beide Achsen, falls das Element sonst überlaufen würde.

Das Element kann so eingestellt werden, dass es über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine imaginäre Linie, die von einer Ecke des Ankers durch dessen Zentrum zur gegenüberliegenden Ecke gezogen wird (`flip-start`), geflippt wird. Diese drei Werte flippen das Element, spiegeln seine Position auf einer gegenüberliegenden Seite für die ersten beiden Werte und einer angrenzenden Seite für `flip-start` wider. Zum Beispiel, wenn ein Element `10px` über seinem Anker positioniert beginnt, am oberen Rand des Ankers überzulaufen, würde der Wert `flip-block` das positionierte Element 10px unterhalb seines Ankers anheften.

In diesem Beispiel fügen wir zwei {{htmlelement("div")}}-Elemente ein. Das erste wird unser Ankerelement sein, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>`-Element größer als das Ansichtsfenster, damit wir den Anker und das positionierte Element sowohl horizontal als auch vertikal im Ansichtsfenster scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zu Demonstrationszwecken positionieren wir den Anker absolut, sodass er nahe dem Zentrum der anfänglichen `<body>`-Darstellung erscheint:

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

Das Anker-positionierte Element erhält eine feste Positionierung und wird an der oberen linken Ecke des Ankers mit einem `position-area` verankert. Es erhält `position-try-fallbacks: flip-block, flip-inline;`, um ihm einige Fallback-Optionen zu bieten, um das positionierte Element zu bewegen, um zu verhindern, dass es überläuft, wenn der Anker in die Nähe des Randes des Ansichtsfensters kommt.

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
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks: flip-block, flip-inline;
}
```

> [!NOTE]
> Wenn mehrere Position-try-Fallback-Optionen angegeben sind, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Versuchen Sie, die Demo so zu scrollen, dass der Anker beginnt, sich den Rändern zu nähern:

{{ EmbedLiveSample("Verwendung vordefinierter Fallback-Optionen", "100%", "250") }}

- Bewegen Sie den Anker an die obere Seite des Ansichtsfensters. Das positionierte Element flippt zur unteren linken Seite des Ankers, um ein Überlaufen zu vermeiden.
- Bewegen Sie den Anker an die linke Seite des Ansichtsfensters. Das positionierte Element flippt zur oberen rechten Seite des Ankers, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken – sobald das positionierte Element beginnt, sowohl in Block- als auch in Inline-Richtung überzulaufen, flippt es zurück auf seine Standardposition oben links und überläuft in beiden Richtungen, was nicht gewünscht ist.

Das passiert, weil wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Der Browser versucht die Fallback-Optionen in einem Versuch zu finden, die das positionierte Element vollständig innerhalb des Ansichtsfensters oder des enthaltenden Blocks rendern. Wenn es keine findet, rendert es das positionierte Element in seiner ursprünglich definierten Renderposition, ohne dass Position-Fallback-Optionen angewendet werden.

Der nächste Abschnitt demonstriert, wie dieses Problem behoben werden kann.

## Kombinieren mehrerer Werte in eine Option

Es ist möglich, mehrere [vordefinierte try Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierte try Option](#benutzerdefinierte_fallback-optionen) Namen in einen einzigen leerzeichengetrennten try Fallback-Option Wert innerhalb der kommagetrennten `position-try-fallbacks` Liste zu setzen. Wenn versucht wird, diese Fallback-Optionen anzuwenden, kombiniert der Browser die individuellen Effekte zu einer einzigen kombinierten Fallback-Option.

Lassen Sie uns eine kombinierte try Fallback-Option verwenden, um das Problem zu lösen, das wir bei der vorherigen Demo gefunden haben. Das HTML und CSS in dieser Demo sind die gleichen, außer für die Infobox-Positionierungsstile. Es wird in diesem Fall eine dritte position-try-Fallback-Option gegeben: `flip-block flip-inline`:

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
  border: 1px solid #ddd;
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

Das bedeutet, dass der Browser zuerst `flip-block` und dann `flip-inline` zu vermeiden. Wenn diese Fallback-Optionen beide fehlgeschlagen sind, wird versucht, sie zu kombinieren, und die Position des Elements sowohl in der Block- als auch in der Inlinerichtung gleichzeitig zu flippen. Jetzt, wenn Sie den Anker in Richtung der oberen und linken Kanten des Ansichtsfensters scrollen, wird das positionierte Element zur unteren rechten Seite flippen.

{{ EmbedLiveSample("Kombinieren mehrerer Werte in eine Option", "100%", "250") }}

## Verwendung von `position-area` try Fallback-Optionen

Die vordefinierten `<try-tactic>` try Fallback-Optionen sind nützlich, aber begrenzt, da sie nur erlauben, die Platzierung eines positionierten Elements über Achsen zu flippen. Was, wenn Sie ein Anker-positioniertes Element haben, das zur oberen linken Seite seines Ankers positioniert ist und die Position ändern möchten, um es direkt unter dem Anker zu platzieren, falls es zu überlaufen beginnt?

Um dies zu erreichen, können Sie einen {{cssxref("position-area")}}-Wert als position-try Fallback-Option verwenden und ihn in die Liste der `position-try-fallbacks` einfügen. Dadurch wird automatisch eine try Fallback-Option auf der Grundlage dieses Positionierungsbereichs erstellt. Dies ist im Wesentlichen eine Abkürzung für das Erstellen einer [benutzerdefinierten Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt `position-area` Position-try Fallback-Optionen in Verwendung. Wir verwenden das gleiche HTML und CSS, abgesehen von der Infobox-Positionierung. In diesem Fall sind unsere position-try Fallback-Optionen `position-area`-Werte — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Das positionierte Element wird vernünftig positioniert sein, egal welche Ansichtsfensterkante sich der Anker nähert. Dieser ausführliche Ansatz ist granularer und flexibler als der Ansatz mit vordefinierten Werten.

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
  border: 1px solid #ddd;
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
> Sie können keine `position-area` try Fallback-Optionen in eine leerzeichengetrennte kombinierte Positionsoption innerhalb einer position-try-Fallback-Liste hinzufügen.

Scrollen Sie die Seite und betrachten Sie die Wirkung dieser position-try Fallback-Optionen, wenn sich der Anker den Rändern des Ansichtsfensters nähert:

{{ EmbedLiveSample("Verwendung von `position-area` try Fallback-Optionen", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Um benutzerdefinierte Positions-Fallback-Optionen zu verwenden, die über die oben genannten Mechanismen nicht verfügbar sind, können Sie Ihre eigenen mit der {{cssxref("@position-try")}} At-Regel erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Der `--try-fallback-name` ist ein vom Entwickler definierter Name für die position try Fallback-Option. Dieser Name kann dann innerhalb der kommagetrennten Liste von try Fallback-Optionen innerhalb des Wertes der {{cssxref("position-try-fallbacks")}}-Eigenschaft angegeben werden. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, denselben Namen für Ihre try Fallback-Optionen und Ihre Anker- oder benutzerdefinierten Eigenschaftsnamen zu verwenden; dies führt zwar nicht zur Ungültigkeit der Regel, aber es wird Ihr CSS sehr schwer nachvollziehbar machen.

Die `descriptor-list` definiert die Eigenschaftswerte für diese einzelne benutzerdefinierte try Fallback-Option, einschließlich, wie das positionierte Element platziert und dimensioniert werden soll und eventuelle Abstände. Die begrenzte Liste der zulässigen Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Einsetz-Eigenschaften")}}
- Abstandseigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [Selbstausrichtungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)-Eigenschaften
- Größeneigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}}, usw.)
- {{cssxref("position-anchor")}}

Die Werte, die Sie in der At-Regel angeben, werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte try Fallback-Option angewendet wird. Wenn einige der Eigenschaften bereits auf dem positionierten Element eingestellt waren, werden diese Eigenschaftswerte von den Werte der Deskriptoren überschrieben. Wenn der Benutzer scrollt, was dazu führt, dass eine andere try Fallback-Option oder keine try Fallback-Option angewendet wird, werden die Werte der zuvor angewendeten try Fallback-Option zurückgesetzt.

In diesem Beispiel richten wir mehrere benutzerdefinierte try Fallback-Optionen ein und verwenden sie. Wir verwenden denselben Basis-HTML- und CSS-Code wie in den vorherigen Beispielen.

Wir beginnen mit der Definition von vier benutzerdefinierten try Fallback-Optionen mithilfe von `@position-try`:

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

Sobald unsere benutzerdefinierten try Fallback-Optionen erstellt sind, können wir sie in der Positionsliste durch Verweisen auf ihre Namen einfügen:

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-fallbacks:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

Beachten Sie, dass unsere Standardposition durch `position-area: top` definiert ist. Wenn die Infobox in keine Richtung über die Seite überläuft, sitzt die Infobox oberhalb des Ankers, und die in der `position-try-fallbacks`-Eigenschaft festgelegten position-try Fallback-Optionen werden ignoriert. Beachten Sie auch, dass die Infobox eine feste Breite und einen unteren Rand hat. Diese Werte ändern sich, wenn verschiedene position-try Fallback-Optionen angewendet werden.

Wenn die Infobox zu überlaufen beginnt, versucht der Browser die in der `position-try-fallbacks`-Eigenschaft aufgelisteten Position-Optionen:

- Der Browser versucht zuerst die `--custom-left` Fallback-Position. Dies bewegt die Infobox nach links vom Anker, passt den Abstand entsprechend an und gibt der Infobox auch eine andere Breite.
- Als nächstes versucht der Browser die `--custom-bottom` Position. Diese bewegt die Infobox unterhalb des Ankers und setzt einen geeigneten Rand. Es enthält keinen `width`-Deskriptor, sodass die Infobox zu ihrer Standardbreite von `200px` zurückkehrt, die durch die `width`-Eigenschaft festgelegt wird.
- Der Browser versucht als nächstes die `--custom-right` Position. Diese funktioniert ähnlich wie die `--custom-left`-Position, wobei derselbe `width`-Deskriptorwert angewendet wird, aber die `position-area`- und `margin`-Werte werden gespiegelt, um die Infobox auf der rechten Seite angemessen zu platzieren.
- Wenn keine der anderen Fallbacks erfolgreich ist, um das positionierte Element vom Überlaufen zu verhindern, versucht der Browser die `--custom-bottom-right` Position als letzten Ausweg. Diese funktioniert in ähnlicher Weise wie die anderen Fallback-Optionen, aber sie platziert das positionierte Element unterhalb rechts vom Anker.

Wenn keine der Fallbacks erfolgreich ist, um das positionierte Element vom Überlaufen zu verhindern, kehrt die Position zum Anfangswert `position-area: top;` zurück.

> [!NOTE]
> Wenn eine position try Fallback-Option angewendet wird, überschreiben ihre Werte die Standardeinstellungen des positionierten Elements. Zum Beispiel ist die Standardbreite, die am positionierten Element festgelegt ist, `200px`, aber wenn die `--custom-right` position try Fallback-Option angewendet wird, beträgt ihre Breite `100px`.

Scrollen Sie die Seite und betrachten Sie den Effekt dieser position-try Fallback-Optionen, wenn sich der Anker den Rändern des Ansichtsfensters nähert:

{{ EmbedLiveSample("Benutzerdefinierte Fallback-Optionen", "100%", "250") }}

## Verwendung von `position-try-order`

Die {{cssxref("position-try-order")}}-Eigenschaft hat einen etwas anderen Fokus als der Rest der position try Funktionalität, da sie Position-try-Fallback-Optionen verwendet, wenn das positionierte Element zum ersten Mal angezeigt wird, anstatt wenn es im Prozess des Überlaufens ist.

Diese Eigenschaft erlaubt es Ihnen anzugeben, dass das positionierte Element anfänglich mit der position try Fallback-Option angezeigt wird, die dem enthaltenden Block die meiste Breite oder die meiste Höhe gibt. Dies wird durch Setzen der Werte `most-height`, `most-width`, `most-block-size` oder `most-inline-size` erreicht. Sie können die Effekte von früher eingestellten `position-try-order` Werten auch mit dem Wert `normal` entfernen.

Wenn keine position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, hat `position-try-order` keinen Effekt.

Lassen Sie uns ein Demo betrachten, das den Effekt dieser Eigenschaft zeigt. Das HTML ist dasselbe wie in den vorherigen Beispielen, außer dass wir ein `<form>` enthalten haben, das Auswahlknöpfe enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können, um deren Effekte zu sehen.

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

Wir fügen eine benutzerdefinierte try Fallback-Option hinzu — `--custom-bottom` — die das Element unter dem Anker positioniert und einen Abstandsrand hinzufügt:

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

Wir positionieren die Infobox anfänglich am oberen Rand des Ankers und geben ihr dann unser benutzerdefiniertes try Fallback:

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

Schließlich fügen wir etwas JavaScript hinzu, das einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Auswahlknöpfe setzt. Wenn ein Auswahlknopf ausgewählt wird, wird sein Wert auf die `position-try-order` Eigenschaft der Infobox angewendet.

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

Versuchen Sie, die `most-height` Order-Option auszuwählen. Dies hat den Effekt, die `--custom-bottom` position try Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil mehr Platz unter dem Anker als darüber vorhanden ist.

{{ EmbedLiveSample("Verwendung von `position-try-order`", "100%", "300") }}

## Bedingtes Ausblenden von Anker-positionierten Elementen

In einigen Situationen möchten Sie möglicherweise ein Anker-positioniertes Element ausblenden. Zum Beispiel, wenn das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Ansichtsfensters ist, möchten Sie möglicherweise sein zugehöriges Element vollständig ausblenden. Die {{cssxref("position-visibility")}}-Eigenschaft ermöglicht es, Bedingungen anzugeben, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `immer` angezeigt. Der Wert `no-overflow` wird das positionierte Element **stark ausblenden**, wenn es beginnt, sein Enthaltendes Element oder das Ansichtsfenster zu überlaufen.

Der `anchors-visible` Wert hingegen blendet das positionierte Element stark aus, wenn seine zugehörigen Anker _vollständig_ ausgeblendet sind, sei es durch Überlauf seines Enthaltenden Elements (oder des Ansichtsfensters) oder durch Abdeckung durch andere Elemente. Das positionierte Element wird sichtbar, wenn irgendein Teil des Ankers noch sichtbar ist.

Ein stark ausgeblendetes Element verhält sich so, als ob es und seine nachfolgenden Elemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt haben, unabhängig davon, welchen tatsächlichen `visibility`-Wert sie aufweisen.

Lassen Sie uns sehen, wie diese Eigenschaft in Aktion funktioniert.

Dieses Beispiel verwendet dasselbe HTML und CSS wie in den vorherigen Beispielen, wobei die Infobox an der unteren Kante des Ankers befestigt ist. Die Infobox erhält `position-visibility: no-overflow;`, um sie vollständig auszublenden, wenn sie nach oben gescrollt wird, bis sie beginnt, das Ansichtsfenster zu überlaufen.

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
  border: 1px solid #ddd;
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

Scrollen Sie nach unten auf der Seite und beachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Ansichtsfensters erreicht:

{{ EmbedLiveSample("Bedingtes Ausblenden mit Verwendung von `position-visibility`", "100%", "250") }}

## Siehe auch

- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenbestimmung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
