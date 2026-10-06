---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Bei der Verwendung von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig, sicherzustellen, dass ankerpositionierte Elemente nach Möglichkeit immer an einer Stelle erscheinen, an der Benutzer mit ihnen interagieren können – unabhängig davon, wo sich der Anker befindet. Wenn Sie beispielsweise durch die Seite scrollen, bewegen sich Anker und die zugehörigen positionierten Elemente zum Rand des Viewports. Sobald ein positioniertes Element über den Viewport hinauszuragen beginnt, sollten Sie seine Position ändern, damit es wieder auf dem Bildschirm erscheint, beispielsweise auf der gegenüberliegenden Seite des Ankers.

In manchen Fällen kann es dagegen sinnvoller sein, überlaufende positionierte Elemente einfach auszublenden – etwa wenn sich ihre Anker außerhalb des Bildschirms befinden und ihr Inhalt dadurch keinen Sinn mehr ergibt.

Dieser Leitfaden erklärt, wie Sie mit Mechanismen der CSS-Ankerpositionierung diese Probleme lösen: mit **Position-Try-Fallback-Optionen** und **bedingtem Ausblenden**. Position-Try-Fallback-Optionen bieten dem Browser alternative Positionen, die er ausprobieren kann, sobald positionierte Elemente überzulaufen beginnen, damit sie auf dem Bildschirm bleiben. Beim bedingten Ausblenden können Sie festlegen, unter welchen Bedingungen ein Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Informationen zu den Grundlagen der CSS-Ankerpositionierung finden Sie unter [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Überblick über die Funktionen

Wenn ein Tooltip oben rechts an einem UI-Element befestigt ist und Benutzer den Inhalt so scrollen, dass sich dieses UI-Element in der oberen rechten Ecke des Viewports befindet, ist sein Tooltip möglicherweise aus dem sichtbaren Bereich herausgescrollt. Die CSS-Ankerpositionierung löst solche Probleme. Mit der Eigenschaft {{cssxref("position-try-fallbacks")}} können Sie eine oder mehrere alternative Position-Try-Fallback-Optionen angeben, die der Browser ausprobiert, um einen Überlauf des positionierten Elements zu verhindern.

Position-Try-Fallback-Optionen lassen sich wie folgt angeben:

- Mit [vordefinierten Fallback-Optionen](#vordefinierte_fallback-optionen).
- Mit [`position-area`-Werten](#using_position-area_try_fallback_options).
- Mit [benutzerdefinierten Optionen](#benutzerdefinierte_fallback-optionen), die über die At-Regel {{cssxref("@position-try")}} definiert werden.

Darüber hinaus können Sie mit der Eigenschaft {{cssxref("position-try-order")}} verschiedene Optionen angeben, durch die beim ersten Rendern eine verfügbare Position-Try-Option gegenüber der ursprünglichen Positionierung des Elements bevorzugt wird. Beispielsweise können Sie das Element zunächst an einer Stelle anzeigen lassen, an der mehr Höhe oder Breite verfügbar ist.

Mit der Kurzschreibweise {{cssxref("position-try")}} können Sie Werte für `position-try-order` und `position-try-fallbacks` in einer einzigen Deklaration angeben.

In manchen Fällen ergibt ankerpositionierter Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms liegt, oder umgekehrt. Beispielsweise könnte ein Anker eine Quizfrage enthalten und die Antworten könnten in zugehörigen positionierten Elementen stehen. Dann möchten Sie möglicherweise beides zusammen anzeigen – oder gar nichts davon. Das lässt sich durch bedingtes Ausblenden mit der Eigenschaft {{cssxref("position-visibility")}} erreichen. Diese Eigenschaft akzeptiert verschiedene Werte, die festlegen, unter welchen Bedingungen Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die Werte für vordefinierte Fallback-Optionen der Eigenschaft `position-try-fallbacks` (in der Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)s definiert) spiegeln die Position des ankerpositionierten Elements über eine oder beide Achsen, wenn das Element andernfalls überlaufen würde.

Das Element kann über die Blockachse (`flip-block`), die Inline-Achse (`flip-inline`) oder diagonal über eine gedachte Linie gespiegelt werden, die von einer Ecke des Ankers durch dessen Mittelpunkt zur gegenüberliegenden Ecke verläuft (`flip-start`). Bei den ersten beiden Werten wird die Position auf die gegenüberliegende Seite gespiegelt, bei `flip-start` auf eine angrenzende Seite. Wenn beispielsweise ein Element `10px` oberhalb seines Ankers positioniert ist und am oberen Rand überzulaufen beginnt, würde `flip-block` das positionierte Element auf eine Position 10px unterhalb seines Ankers spiegeln.

In diesem Beispiel verwenden wir zwei {{htmlelement("div")}}-Elemente. Das erste ist unser Ankerelement; das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir gestalten das `<body>`-Element größer als den Viewport, damit wir den Anker und das positionierte Element innerhalb des Viewports sowohl horizontal als auch vertikal scrollen können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zur Veranschaulichung positionieren wir den Anker absolut, sodass er beim anfänglichen Rendern des `<body>`-Elements ungefähr in dessen Mitte erscheint:

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

Das ankerpositionierte Element erhält eine feste Positionierung und wird mithilfe von `position-area` an der oberen linken Ecke des Ankers befestigt. Mit `position-try-fallbacks: flip-block, flip-inline;` erhält es Fallback-Optionen, die das positionierte Element verschieben können, um einen Überlauf zu verhindern, wenn der Anker dem Rand des Viewports nahekommt.

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
> Wenn mehrere Position-Try-Fallback-Optionen angegeben werden, werden sie durch Kommas getrennt und in der angegebenen Reihenfolge ausprobiert.

Scrollen Sie in der Demo, bis sich der Anker den Rändern nähert:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Bewegen Sie den Anker zum oberen Rand des Viewports. Das positionierte Element wird links unterhalb des Ankers angezeigt, um einen Überlauf zu vermeiden.
- Bewegen Sie den Anker zum linken Rand des Viewports. Das positionierte Element wird rechts oberhalb des Ankers angezeigt, um einen Überlauf zu vermeiden.

Wenn Sie den Anker in Richtung der oberen linken Ecke des Viewports bewegen, fällt ein Problem auf: Sobald das positionierte Element sowohl in Block- als auch in Inline-Richtung überzulaufen beginnt, kehrt es zu seiner standardmäßigen Position links oben zurück und läuft in beide Richtungen über. Das ist nicht erwünscht.

Das liegt daran, dass wir dem Browser nur `flip-block` _oder_ `flip-inline` als Positionsoptionen gegeben haben, nicht aber die Möglichkeit, beide gleichzeitig anzuwenden. Der Browser probiert die Fallback-Optionen aus und sucht nach einer, bei der das positionierte Element vollständig innerhalb des Viewports oder des umschließenden Blocks gerendert wird. Findet er keine, rendert er das Element an seiner ursprünglich festgelegten Position, ohne eine Positions-Fallback-Option anzuwenden.

Der nächste Abschnitt zeigt, wie Sie dieses Problem beheben.

## Mehrere Werte zu einer Option kombinieren

Sie können die Namen mehrerer [vordefinierter Try-Fallback-Optionen](#vordefinierte_fallback-optionen) oder [benutzerdefinierter Try-Optionen](#benutzerdefinierte_fallback-optionen) innerhalb der kommagetrennten Liste `position-try-fallbacks` zu einem einzelnen, durch Leerzeichen getrennten Try-Fallback-Optionswert zusammenfassen. Beim Anwenden dieser Fallback-Option kombiniert der Browser die einzelnen Effekte.

Lösen wir damit das Problem aus der vorherigen Demo. HTML und CSS bleiben gleich, mit Ausnahme der Positionierungsstile der Infobox. In diesem Fall erhält sie eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Der Browser probiert also zunächst `flip-block` und dann `flip-inline` aus, um einen Überlauf zu vermeiden. Wenn beide Fallback-Optionen fehlschlagen, kombiniert er sie und spiegelt die Position des Elements gleichzeitig in Block- _und_ Inline-Richtung. Wenn Sie den Anker nun zum oberen _und_ linken Rand des Viewports scrollen, wird das positionierte Element rechts unterhalb des Ankers angezeigt.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## `position-area` als Try-Fallback-Option verwenden

Die vordefinierten `<try-tactic>`-Fallback-Optionen sind nützlich, aber eingeschränkt: Sie können die Position eines Elements nur über Achsen spiegeln. Was aber, wenn ein ankerpositioniertes Element links oberhalb seines Ankers steht und Sie es direkt unterhalb des Ankers platzieren möchten, sobald es überzulaufen beginnt?

Dazu können Sie einen {{cssxref("position-area")}}-Wert als Position-Try-Fallback-Option in die Liste `position-try-fallbacks` aufnehmen. Dadurch wird automatisch eine Try-Fallback-Option auf Grundlage dieses Positionsbereichs erstellt. Im Grunde ist dies eine Kurzform für eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt Position-Try-Fallback-Optionen mit `position-area`. Wir verwenden dasselbe HTML und CSS, abgesehen von der Positionierung der Infobox. Hier bestehen die Position-Try-Fallback-Optionen aus `position-area`-Werten: `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. So wird das positionierte Element sinnvoll platziert, unabhängig davon, welchem Rand des Viewports sich der Anker nähert. Dieser ausführliche Ansatz ermöglicht eine feinere und flexiblere Steuerung als die vordefinierten Werte.

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
> `position-area`-Try-Fallback-Optionen können nicht in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Position-Try-Fallback-Liste aufgenommen werden.

Scrollen Sie durch die Seite und beobachten Sie, wie sich diese Position-Try-Fallback-Optionen auswirken, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Wenn Sie benutzerdefinierte Positions-Fallback-Optionen benötigen, die mit den bisherigen Mechanismen nicht möglich sind, können Sie sie mit der At-Regel {{cssxref("@position-try")}} selbst erstellen. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

`--try-fallback-name` ist ein von Entwicklern festgelegter Name für die Position-Try-Fallback-Option. Diesen Namen können Sie anschließend in der kommagetrennten Liste der Try-Fallback-Optionen im Wert der Eigenschaft {{cssxref("position-try-fallbacks")}} angeben. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die letzte in der Dokumentreihenfolge die anderen. Vermeiden Sie es, für Try-Fallback-Optionen _und_ für Anker oder benutzerdefinierte Eigenschaften denselben Namen zu verwenden. Dadurch wird die At-Regel zwar nicht ungültig, aber Ihr CSS deutlich schwerer verständlich.

Die `descriptor-list` legt die Eigenschaftswerte für die jeweilige benutzerdefinierte Try-Fallback-Option fest. Dazu gehören die Position und Größe des positionierten Elements sowie etwaige Außenabstände. Die begrenzte Liste zulässiger Eigenschaftsdeskriptoren umfasst:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Margin-Eigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- Eigenschaften für die [Selbstausrichtung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- Größeneigenschaften ({{cssxref("width")}}, {{cssxref("block-size")}} usw.)
- {{cssxref("position-anchor")}}

Die Werte der At-Regel werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Try-Fallback-Option zum Einsatz kommt. Waren Eigenschaften bereits für das positionierte Element festgelegt, werden ihre Werte durch die Deskriptorwerte überschrieben. Wenn durch Scrollen eine andere oder keine Try-Fallback-Option angewendet wird, gelten die Werte der zuvor angewendeten Try-Fallback-Option nicht mehr.

In diesem Beispiel definieren und verwenden wir mehrere benutzerdefinierte Try-Fallback-Optionen. Wir verwenden denselben grundlegenden HTML- und CSS-Code wie in den vorherigen Beispielen.

Zunächst definieren wir mit `@position-try` vier benutzerdefinierte Try-Fallback-Optionen:

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

Anschließend können wir sie über ihre Namen in die Positionsliste aufnehmen:

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

Beachten Sie, dass die Standardposition durch `position-area: top` definiert ist. Solange die Infobox an keiner Seite über den sichtbaren Bereich der Seite hinausragt, befindet sie sich oberhalb des Ankers und die in `position-try-fallbacks` festgelegten Fallback-Optionen werden ignoriert. Die Infobox hat außerdem eine feste Breite und einen unteren Außenabstand. Diese Werte ändern sich, wenn unterschiedliche Position-Try-Fallback-Optionen angewendet werden.

Sobald die Infobox überzulaufen beginnt, probiert der Browser die in `position-try-fallbacks` aufgeführten Positionsoptionen aus:

- Zuerst probiert der Browser die Fallback-Position `--custom-left`. Dabei wird die Infobox links vom Anker platziert, der Außenabstand angepasst und die Infobox erhält eine andere Breite.
- Danach probiert der Browser die Position `--custom-bottom`. Dabei wird die Infobox unterhalb des Ankers platziert und ein passender Außenabstand festgelegt. Diese Option enthält keinen `width`-Deskriptor, daher erhält die Infobox wieder ihre mit der Eigenschaft `width` festgelegte Standardbreite von `200px`.
- Als Nächstes probiert der Browser die Position `--custom-right`. Sie funktioniert ähnlich wie `--custom-left` und verwendet denselben Wert für den `width`-Deskriptor. Die Werte für `position-area` und `margin` sind jedoch gespiegelt, damit die Infobox passend rechts platziert wird.
- Wenn keine der anderen Fallback-Optionen einen Überlauf des positionierten Elements verhindert, probiert der Browser als letzte Möglichkeit die Position `--custom-bottom-right`. Sie funktioniert ähnlich wie die anderen Fallback-Optionen, platziert das positionierte Element aber rechts unterhalb des Ankers.

Wenn keine der Fallback-Optionen den Überlauf verhindert, kehrt die Position zum ursprünglichen Wert `position-area: top;` zurück.

> [!NOTE]
> Wenn eine Position-Try-Fallback-Option angewendet wird, überschreiben ihre Werte die für das positionierte Element festgelegten Standardwerte. Beispielsweise beträgt die standardmäßige `width` des positionierten Elements `200px`. Wird jedoch die Position-Try-Fallback-Option `--custom-right` angewendet, wird seine Breite auf `100px` gesetzt.

Scrollen Sie durch die Seite und beobachten Sie, wie sich diese Position-Try-Fallback-Optionen auswirken, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Ankerpositionierte Elemente abhängig von der aktiven Fallback-Option gestalten

Die bisher beschriebenen Funktionen lösen ein Problem noch nicht: Die Gestaltung eines ankerpositionierten Elements muss möglicherweise an seine verschiedenen Fallback-Positionen angepasst werden. Tooltips haben beispielsweise häufig einen kleinen Pfeil, der auf das zugehörige Ankerelement zeigt. Das verbessert die Benutzerfreundlichkeit, weil der visuelle Zusammenhang deutlicher wird. Wenn der Tooltip an eine andere Position wechselt, müssen Sie auch Position und Ausrichtung des Pfeils ändern, damit er weiterhin richtig aussieht.

Dafür können Sie ankerbezogene Container-Abfragen verwenden. Sie erweitern die Funktionalität von [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries): Sie können damit erkennen, wann eine bestimmte Fallback-Option auf ein ankerpositioniertes Element angewendet wird, und daraufhin CSS auf dessen Nachfahren anwenden. Ankerbezogene Container-Abfragen beruhen insbesondere auf zwei Funktionen:

- Dem Wert `anchored` der Eigenschaft {{cssxref("container-type")}}: Wenden Sie ihn auf das ankerpositionierte Element an, um zu erkennen, wann unterschiedliche Fallback-Optionen darauf angewendet werden.
- Dem Schlüsselwort `anchored` der At-Regel {{cssxref("@container")}}: Darauf folgt ein Klammerpaar mit dem Deskriptor `fallback`. Dessen Wert ist ein `position-try-fallbacks`-Wert.

Angenommen, ein ankerpositionierter Tooltip steht standardmäßig durch den {{cssxref("position-area")}}-Wert `top` oberhalb seines Ankers, und für ihn ist {{cssxref("position-try-fallbacks")}} auf `flip-block` gesetzt. Wenn der Tooltip am oberen Rand des Viewports überzulaufen beginnt, wechselt er dadurch in Blockrichtung auf die Position unterhalb seines Ankers. Um zu erkennen, wann diese Fallback-Option auf den Tooltip angewendet wird, setzen wir zunächst `container-type: anchored` für ihn. Dadurch wird er zu einem Container für ankerbezogene Abfragen.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Nun können wir eine Container-Abfrage wie folgt schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Die Abfragebedingung `anchored(fallback: flip-block)` ist erfüllt, wenn die Fallback-Option `flip-block` auf den Tooltip angewendet wird. In diesem Fall werden die im `@container`-Block festgelegten Stile angewendet. Sie könnten beispielsweise Position und Ausrichtung des Pfeilsymbols ändern, damit es weiterhin auf den Anker zeigt, die Richtung eines Farbverlaufs anpassen usw.

Weitere Informationen und Beispiele finden Sie unter [Ankerbezogene Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

## `position-try-order` verwenden

Die Eigenschaft `position-try-order` hat einen etwas anderen Schwerpunkt als die übrigen Position-Try-Funktionen: Sie beeinflusst, welche Position-Try-Fallback-Option beim ersten Anzeigen des positionierten Elements angewendet wird, nicht erst beim Scrollen. Beispielsweise möchten Sie das Element anfangs möglicherweise an einer Stelle anzeigen, an der mehr Höhe oder Breite verfügbar ist als an der ursprünglichen Standardposition.

Der Browser prüft die verfügbaren `position-try-fallbacks` und ermittelt, welche Option dem ankerpositionierten Element in der angegebenen Richtung am meisten Platz bietet. Diese Option wendet er dann beim ersten Rendern der Seite an und überschreibt damit die ursprüngliche Gestaltung des Elements.

Weitere Informationen und ein interaktives Beispiel zur Wirkung der Eigenschaft finden Sie auf der Referenzseite zu {{cssxref("position-try-order")}}.

## Ankerpositionierte Elemente bedingt ausblenden

In manchen Situationen möchten Sie ein ankerpositioniertes Element möglicherweise ausblenden. Wenn das Ankerelement beispielsweise abgeschnitten wird, weil es zu nah am Rand des Viewports liegt, möchten Sie das zugehörige Element unter Umständen vollständig ausblenden. Mit der Eigenschaft {{cssxref("position-visibility")}} können Sie die Bedingungen festlegen, unter denen positionierte Elemente ausgeblendet werden.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` blendet das positionierte Element **zwingend aus**, sobald es über das umschließende Element oder den Viewport hinausragt.

Der Wert `anchors-visible` blendet das positionierte Element dagegen zwingend aus, wenn die zugehörigen Anker _vollständig_ verborgen sind – entweder weil sie über ihr umschließendes Element (oder den Viewport) hinausragen oder weil andere Elemente sie verdecken. Solange irgendein Teil eines Ankers sichtbar ist, bleibt auch das positionierte Element sichtbar.

Ein zwingend ausgeblendetes Element verhält sich so, als hätten es und seine Nachfahren den {{cssxref("visibility")}}-Wert `hidden`, unabhängig von ihrem tatsächlichen `visibility`-Wert.

Sehen wir uns die Eigenschaft in Aktion an.

Dieses Beispiel verwendet dasselbe HTML und CSS wie die vorherigen Beispiele. Die Infobox ist am unteren Rand des Ankers befestigt. Mit `position-visibility: no-overflow;` wird sie vollständig ausgeblendet, sobald sie beim Scrollen nach oben über den Viewport hinauszuragen beginnt.

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

Scrollen Sie auf der Seite nach unten und beobachten Sie, wie das positionierte Element ausgeblendet wird, sobald es den oberen Rand des Viewports erreicht:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## Siehe auch

- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Modul [Logische CSS-Eigenschaften und -Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größe von Elementen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
