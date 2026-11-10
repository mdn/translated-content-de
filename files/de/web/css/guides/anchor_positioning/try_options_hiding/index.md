---
title: Fallback-Optionen und bedingtes Ausblenden bei Überlauf
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Bei der Verwendung von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist es wichtig, dass ankerpositionierte Elemente möglichst immer an einer Stelle erscheinen, an der Benutzer mit ihnen interagieren können – unabhängig davon, wo sich der Anker befindet. Wenn Sie beispielsweise durch die Seite scrollen, bewegen sich Anker und die zugehörigen positionierten Elemente zum Rand des Viewports. Sobald ein positioniertes Element über den Viewport hinauszuragen beginnt, sollten Sie seine Position ändern, damit es wieder auf dem Bildschirm erscheint, beispielsweise auf der gegenüberliegenden Seite des Ankers.

In manchen Situationen ist es dagegen sinnvoller, überlaufende positionierte Elemente einfach auszublenden – etwa wenn ihre Anker außerhalb des Bildschirms liegen und ihre Inhalte ohne diese keinen Sinn ergeben.

Dieser Leitfaden erläutert, wie Sie mit den Mechanismen der CSS-Ankerpositionierung solche Fälle handhaben: mit **Position-try-Fallback-Optionen** und **bedingtem Ausblenden**. Position-try-Fallback-Optionen geben dem Browser alternative Positionen vor, die er ausprobieren kann, sobald ein positioniertes Element überzulaufen beginnt, damit es auf dem Bildschirm bleibt. Beim bedingten Ausblenden können Sie festlegen, unter welchen Bedingungen der Anker oder ein positioniertes Element ausgeblendet wird.

> [!NOTE]
> Grundlagen zur CSS-Ankerpositionierung finden Sie unter [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Überblick über die Funktionen

Wenn ein Tooltip fest oben rechts an einem UI-Element ausgerichtet ist und Benutzer den Inhalt so scrollen, dass dieses Element in die obere rechte Ecke des Viewports gelangt, befindet sich der Tooltip außerhalb des Bildschirms. Die CSS-Ankerpositionierung löst solche Probleme. Mit der Eigenschaft {{cssxref("position-try-fallbacks")}} des Moduls lassen sich eine oder mehrere alternative Position-try-Fallback-Optionen angeben, die der Browser ausprobieren kann, um einen Überlauf des positionierten Elements zu verhindern.

Position-try-Fallback-Optionen können wie folgt angegeben werden:

- Mit [vordefinierten Fallback-Optionen](#vordefinierte_fallback-optionen).
- Mit [`position-area`-Werten](#using_position-area_try_fallback_options).
- Mit [benutzerdefinierten Optionen](#benutzerdefinierte_fallback-optionen), die über die At-Regel {{cssxref("@position-try")}} definiert werden.

Darüber hinaus können Sie mit der Eigenschaft {{cssxref("position-try-order")}} verschiedene Optionen festlegen, durch die beim ersten Rendern eine verfügbare Position-try-Option gegenüber der ursprünglichen Positionierung des Elements bevorzugt wird. Beispielsweise möchten Sie das Element möglicherweise zunächst an einer Stelle anzeigen, an der mehr Höhe oder Breite verfügbar ist.

Mit der Kurzschreibweise {{cssxref("position-try")}} können Sie die Werte für `position-try-order` und `position-try-fallbacks` in einer einzigen Deklaration angeben.

In manchen Situationen ergibt ankerpositionierter Inhalt keinen Sinn, wenn der Anker außerhalb des Bildschirms liegt – oder umgekehrt. Beispielsweise könnte ein Anker eine Quizfrage und die zugehörigen positionierten Elemente die Antworten enthalten. In diesem Fall möchten Sie möglicherweise beides gemeinsam anzeigen oder beides ausblenden. Das lässt sich durch bedingtes Ausblenden mit der Eigenschaft {{cssxref("position-visibility")}} erreichen. Diese Eigenschaft akzeptiert verschiedene Werte, die festlegen, unter welchen Bedingungen überlaufende Elemente ausgeblendet werden.

## Vordefinierte Fallback-Optionen

Die vordefinierten Fallback-Werte der Eigenschaft `position-try-fallbacks` (in der Spezifikation als [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)-Werte definiert) spiegeln die Position eines ankerpositionierten Elements entlang einer oder beider Achsen, wenn das Element andernfalls überlaufen würde.

Das Element kann entlang der Blockachse (`flip-block`), der Inline-Achse (`flip-inline`) oder diagonal entlang einer gedachten Linie gespiegelt werden, die von einer Ecke des Ankers durch dessen Mittelpunkt zur gegenüberliegenden Ecke verläuft (`flip-start`). Diese drei Werte spiegeln die Position des Elements: Die ersten beiden platzieren es auf der gegenüberliegenden Seite, `flip-start` auf einer angrenzenden Seite. Wenn beispielsweise ein Element `10px` oberhalb seines Ankers positioniert ist und am oberen Rand überzulaufen beginnt, würde `flip-block` das positionierte Element 10px unterhalb des Ankers platzieren.

In diesem Beispiel verwenden wir zwei {{htmlelement("div")}}-Elemente. Das erste ist unser Ankerelement, und das zweite wird relativ zum Anker positioniert:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Wir geben dem `<body>`-Element größere Abmessungen als dem Viewport, damit wir den Anker und das positionierte Element im Viewport sowohl horizontal als auch vertikal verschieben können:

```css
body {
  width: 1500px;
  height: 500px;
}
```

Zur Veranschaulichung positionieren wir den Anker absolut, sodass er beim ersten Rendern von `<body>` ungefähr in der Mitte erscheint:

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

Das ankerpositionierte Element erhält eine feste Positionierung und wird über `position-area` an die obere linke Ecke des Ankers gebunden. Mit `position-try-fallbacks: flip-block, flip-inline;` erhält es Fallback-Optionen, die es verschieben können, damit es nicht überläuft, wenn sich der Anker dem Rand des Viewports nähert.

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
> Wenn mehrere Position-try-Fallback-Optionen angegeben werden, trennen Sie sie durch Kommas. Sie werden in der angegebenen Reihenfolge ausprobiert.

Scrollen Sie in der Demo, bis sich der Anker den Rändern nähert:

{{ EmbedLiveSample("predefined_fallback_options", "100%", "250") }}

- Bewegen Sie den Anker an den oberen Rand des Viewports. Das positionierte Element wechselt zur unteren linken Seite des Ankers, um einen Überlauf zu vermeiden.
- Bewegen Sie den Anker an den linken Rand des Viewports. Das positionierte Element wechselt zur oberen rechten Seite des Ankers, um einen Überlauf zu vermeiden.

Wenn Sie den Anker in Richtung der oberen linken Ecke des Viewports bewegen, fällt ein Problem auf: Sobald das positionierte Element sowohl in Block- als auch in Inline-Richtung überzulaufen beginnt, kehrt es zu seiner ursprünglichen Position oben links zurück und läuft in beide Richtungen über. Das ist nicht das gewünschte Verhalten.

Das liegt daran, dass wir dem Browser nur `flip-block` _oder_ `flip-inline` als Position-try-Optionen gegeben haben. Die Möglichkeit, beide gleichzeitig anzuwenden, fehlt. Der Browser prüft die Fallback-Optionen und sucht nach einer, bei der das positionierte Element vollständig innerhalb des Viewports oder seines umschließenden Blocks gerendert wird. Findet er keine, rendert er das Element an seiner ursprünglich festgelegten Position, ohne eine Position-try-Fallback-Option anzuwenden.

Der nächste Abschnitt zeigt, wie sich dieses Problem beheben lässt.

## Mehrere Werte in einer Option kombinieren

Innerhalb der kommagetrennten `position-try-fallbacks`-Liste lassen sich mehrere [vordefinierte Fallback-Optionen](#vordefinierte_fallback-optionen) oder Namen [benutzerdefinierter Optionen](#benutzerdefinierte_fallback-optionen) zu einem einzigen, durch Leerzeichen getrennten Fallback-Wert kombinieren. Wenn der Browser diese Fallback-Option anwendet, kombiniert er ihre einzelnen Wirkungen.

Mit einer kombinierten Fallback-Option beheben wir nun das Problem aus der vorherigen Demo. HTML und CSS bleiben gleich; nur die Positionierungsstile der Infobox ändern sich. Sie erhält eine dritte Position-try-Fallback-Option: `flip-block flip-inline`.

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

Der Browser versucht also zunächst `flip-block` und danach `flip-inline`, um einen Überlauf zu vermeiden. Wenn beide Optionen fehlschlagen, kombiniert er sie und spiegelt die Position des Elements gleichzeitig in Block- _und_ Inline-Richtung. Scrollen Sie den Anker nun zum oberen _und_ linken Rand des Viewports, wechselt das positionierte Element nach unten rechts.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## `position-area` als Position-try-Fallback-Option verwenden

Die vordefinierten `<try-tactic>`-Fallback-Optionen sind nützlich, aber begrenzt: Sie können die Platzierung eines positionierten Elements nur entlang von Achsen spiegeln. Was aber, wenn ein ankerpositioniertes Element links oberhalb seines Ankers liegt und bei einem Überlauf direkt unterhalb des Ankers erscheinen soll?

Dafür können Sie einen {{cssxref("position-area")}}-Wert als Position-try-Fallback-Option in die Liste `position-try-fallbacks` aufnehmen. Dadurch wird automatisch eine Fallback-Option auf Basis dieses Positionsbereichs erstellt. Im Grunde ist dies eine Kurzform für eine [benutzerdefinierte Positionsoption](#benutzerdefinierte_fallback-optionen), die nur diesen `position-area`-Eigenschaftswert enthält.

Das folgende Beispiel zeigt Position-try-Fallback-Optionen mit `position-area`. Wir verwenden dasselbe HTML und CSS; lediglich die Positionierung der Infobox ändert sich. Hier sind die Fallback-Optionen `position-area`-Werte: `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` und `left`. Dadurch bleibt das positionierte Element sinnvoll platziert, unabhängig davon, welchem Viewport-Rand sich der Anker nähert. Dieser ausführlichere Ansatz bietet mehr Feinabstimmung und Flexibilität als vordefinierte Werte.

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
> Sie können `position-area`-Fallback-Optionen nicht in eine durch Leerzeichen getrennte kombinierte Positionsoption innerhalb einer Fallback-Liste aufnehmen.

Scrollen Sie durch die Seite und beobachten Sie, wie sich diese Position-try-Fallback-Optionen auswirken, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## Benutzerdefinierte Fallback-Optionen

Wenn Sie Fallback-Optionen benötigen, die sich mit den bisherigen Mechanismen nicht umsetzen lassen, können Sie mit der At-Regel {{cssxref("@position-try")}} eigene definieren. Die Syntax lautet:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

`--try-fallback-name` ist ein von Ihnen festgelegter Name für die Position-try-Fallback-Option. Diesen Namen können Sie anschließend in der kommagetrennten Liste der Fallback-Optionen im Wert der Eigenschaft {{cssxref("position-try-fallbacks")}} angeben. Wenn mehrere `@position-try`-Regeln denselben Namen haben, überschreibt die im Dokument zuletzt stehende Regel die anderen. Verwenden Sie für Fallback-Optionen möglichst nicht dieselben Namen wie für Anker oder benutzerdefinierte Eigenschaften. Die At-Regel bleibt dadurch zwar gültig, Ihr CSS wird aber deutlich schwerer verständlich.

`descriptor-list` definiert die Eigenschaftswerte für die jeweilige benutzerdefinierte Fallback-Option. Dazu gehören die Platzierung und Größe des positionierten Elements sowie seine Außenabstände. Als Eigenschaftsdeskriptoren sind nur die folgenden zulässig:

- {{cssxref("position-area")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- Margin-Eigenschaften (z. B. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- Eigenschaften zur [Selbstausrichtung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- Eigenschaften zur Größenbestimmung ({{cssxref("width")}}, {{cssxref("block-size")}} usw.)
- {{cssxref("position-anchor")}}

Die Werte in der At-Regel werden auf das positionierte Element angewendet, wenn die benannte benutzerdefinierte Fallback-Option zum Einsatz kommt. Wurden Eigenschaften bereits für das positionierte Element festgelegt, überschreiben die Deskriptorwerte deren bisherige Werte. Wenn durch Scrollen eine andere oder keine Fallback-Option angewendet wird, gelten die Werte der zuvor angewendeten Option nicht mehr.

In diesem Beispiel definieren und verwenden wir mehrere benutzerdefinierte Fallback-Optionen. Dabei nutzen wir denselben HTML- und CSS-Basiscode wie in den vorherigen Beispielen.

Zunächst definieren wir mit `@position-try` vier benutzerdefinierte Fallback-Optionen:

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

Anschließend können wir ihre Namen in die Liste der Positionsoptionen aufnehmen:

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

Beachten Sie, dass die Standardposition durch `position-area: top` festgelegt ist. Solange die Infobox in keine Richtung über den Seitenrand hinausragt, steht sie oberhalb des Ankers. Die in `position-try-fallbacks` angegebenen Optionen werden dann ignoriert. Beachten Sie außerdem, dass für die Infobox eine feste Breite und ein unterer Außenabstand festgelegt sind. Diese Werte ändern sich, wenn unterschiedliche Position-try-Fallback-Optionen angewendet werden.

Beginnt die Infobox überzulaufen, probiert der Browser die in `position-try-fallbacks` aufgeführten Positionsoptionen aus:

- Zuerst versucht er `--custom-left`. Dadurch wird die Infobox links vom Anker platziert, ihr Außenabstand angepasst und ihr eine andere Breite gegeben.
- Danach versucht er `--custom-bottom`. Diese Option platziert die Infobox unterhalb des Ankers und legt einen passenden Außenabstand fest. Da sie keinen `width`-Deskriptor enthält, erhält die Infobox wieder ihre über die Eigenschaft `width` festgelegte Standardbreite von `200px`.
- Als Nächstes versucht der Browser `--custom-right`. Diese Option funktioniert weitgehend wie `--custom-left` und verwendet denselben `width`-Deskriptorwert. Die Werte für `position-area` und `margin` sind jedoch gespiegelt, damit die Infobox rechts passend platziert wird.
- Wenn keine der anderen Fallback-Optionen einen Überlauf verhindert, versucht der Browser als letzte Möglichkeit `--custom-bottom-right`. Diese Option funktioniert ähnlich wie die anderen, platziert das positionierte Element aber rechts unterhalb des Ankers.

Wenn keine Fallback-Option den Überlauf verhindert, kehrt die Position zum ursprünglichen Wert `position-area: top;` zurück.

> [!NOTE]
> Wird eine Position-try-Fallback-Option angewendet, überschreiben ihre Werte die Standardwerte des positionierten Elements. Beispielsweise ist dessen Standardwert für `width` auf `200px` gesetzt. Bei Anwendung von `--custom-right` wird die Breite jedoch auf `100px` gesetzt.

Scrollen Sie durch die Seite und beobachten Sie, wie sich diese Position-try-Fallback-Optionen auswirken, wenn sich der Anker dem Rand des Viewports nähert:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Ankerpositionierte Elemente abhängig vom aktiven Fallback gestalten

Die bisherigen Funktionen lösen noch nicht das Problem, das Erscheinungsbild eines ankerpositionierten Elements an seine verschiedenen Fallback-Positionen anzupassen. Ein Tooltip enthält beispielsweise häufig einen kleinen Pfeil, der auf das zugehörige Ankerelement zeigt. Dadurch wird die visuelle Zuordnung deutlicher und die Benutzererfahrung verbessert. Wechselt der Tooltip seine Position, müssen auch Position und Ausrichtung des Pfeils geändert werden, damit er weiterhin passend aussieht.

Dafür können Sie ankerbezogene Container-Abfragen verwenden. Sie erweitern die Möglichkeiten von [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries): Sie können erkennen, wann eine bestimmte Fallback-Option auf ein ankerpositioniertes Element angewendet wird, und daraufhin CSS auf dessen Nachfahren anwenden. Ankerbezogene Container-Abfragen beruhen insbesondere auf zwei Funktionen:

- Dem Wert `anchored` der Eigenschaft {{cssxref("container-type")}}: Wenden Sie ihn auf das ankerpositionierte Element an, um erkennen zu können, welche Fallback-Option angewendet wird.
- Dem Schlüsselwort `anchored` der At-Regel {{cssxref("@container")}}: Darauf folgen Klammern mit dem Deskriptor `fallback`. Dessen Wert ist ein `position-try-fallbacks`-Wert.

Angenommen, ein ankerpositionierter Tooltip steht standardmäßig durch den {{cssxref("position-area")}}-Wert `top` oberhalb seines Ankers. Zusätzlich ist für ihn der {{cssxref("position-try-fallbacks")}}-Wert `flip-block` festgelegt. Sobald der Tooltip über den oberen Viewport-Rand hinauszuragen beginnt, wechselt er dadurch in Blockrichtung unter seinen Anker. Um zu erkennen, wann diese Fallback-Option auf den Tooltip angewendet wird, müssen wir zunächst `container-type: anchored` für ihn festlegen und ihn so zu einem Container für ankerbezogene Abfragen machen.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Danach können wir eine Container-Abfrage schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Die Abfragebedingung `anchored(fallback: flip-block)` ist wahr, wenn die Fallback-Option `flip-block` auf den Tooltip angewendet wird. In diesem Fall gelten die Stile innerhalb des `@container`-Blocks. So können Sie beispielsweise Position und Ausrichtung eines Pfeilsymbols ändern, damit es weiterhin auf den Anker zeigt, oder die Richtung eines Farbverlaufs anpassen.

Weitere Informationen und Beispiele finden Sie unter [Ankerbezogene Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

## `position-try-order` verwenden

Die Eigenschaft `position-try-order` hat einen etwas anderen Schwerpunkt als die übrigen Position-try-Funktionen: Sie beeinflusst, welche Fallback-Option beim ersten Anzeigen des positionierten Elements angewendet wird, statt auf Änderungen beim Scrollen zu reagieren. Beispielsweise möchten Sie ein Element vielleicht von Anfang an an einer Stelle anzeigen, an der mehr Höhe oder Breite verfügbar ist als an seiner ursprünglichen Position.

Der Browser prüft die verfügbaren `position-try-fallbacks`-Optionen, um diejenige zu finden, die dem ankerpositionierten Element in der angegebenen Richtung am meisten Platz bietet. Beim ersten Rendern der Seite wendet er diese Option an und überschreibt damit die ursprüngliche Gestaltung des Elements.

Weitere Informationen und ein interaktives Beispiel zur Wirkung der Eigenschaft finden Sie auf der Referenzseite zu {{cssxref("position-try-order")}}.

## Ankerpositionierte Elemente bedingt ausblenden

In manchen Situationen möchten Sie ein ankerpositioniertes Element möglicherweise ausblenden. Wenn beispielsweise das Ankerelement abgeschnitten wird, weil es zu nah am Rand des Viewports liegt, kann es sinnvoll sein, das zugehörige positionierte Element vollständig auszublenden. Mit der Eigenschaft {{cssxref("position-visibility")}} können Sie festlegen, unter welchen Bedingungen das geschieht.

Standardmäßig wird das positionierte Element `always` angezeigt. Der Wert `no-overflow` blendet es **zwingend aus**, sobald es über sein umschließendes Element oder den Viewport hinauszuragen beginnt.

Der Wert `anchors-visible` blendet das positionierte Element dagegen zwingend aus, wenn die zugehörigen Anker _vollständig_ unsichtbar sind – entweder weil sie über ihr umschließendes Element oder den Viewport hinausragen oder weil andere Elemente sie verdecken. Das positionierte Element bleibt sichtbar, solange noch irgendein Teil der Anker sichtbar ist.

Ein zwingend ausgeblendetes Element verhält sich so, als wäre für es und seine Nachfahren der {{cssxref("visibility")}}-Wert `hidden` festgelegt – unabhängig von ihrem tatsächlichen `visibility`-Wert.

Sehen wir uns die Eigenschaft in Aktion an.

Dieses Beispiel verwendet dasselbe HTML und CSS wie die vorherigen Beispiele. Die Infobox ist dabei am unteren Rand des Ankers ausgerichtet. Mit `position-visibility: no-overflow;` wird sie vollständig ausgeblendet, sobald sie beim Scrollen nach oben über den Viewport hinauszuragen beginnt.

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

{{ EmbedLiveSample("conditionally_hiding_anchor-positioned_elements", "100%", "250") }}

## Siehe auch

- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Modul [Logische CSS-Eigenschaften und -Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größe von Elementen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
