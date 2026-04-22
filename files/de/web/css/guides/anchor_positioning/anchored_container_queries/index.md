---
title: Verwendung von verankerten Container-Abfragen
short-title: Verankerte Container-Abfragen
slug: Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

[CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) umfasst Mechanismen zur Bereitstellung von [Fallback-Optionen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding). Dies sind alternative Positionen, die der Browser versuchen kann, ein anker-positioniertes Element relativ zu seinem Anker zu platzieren, um es wieder auf dem Bildschirm anzuzeigen, wenn das positionierte Element beginnt, den Viewport zu überlaufen.

**Verankerte Container-Abfragen** erhöhen die Nützlichkeit der Fallback-Optionen der Anker-Positionierung, indem sie eine unterschiedliche Gestaltung des anker-positionierten Elements ermöglichen, je nachdem, welche Fallback-Position es einnimmt. Dieser Leitfaden zeigt, wie verankerte Container-Abfragen verwendet werden und bietet einige Beispiele.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Anker-Positionierung finden Sie unter [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltipp relativ zu einem UI-Element unter Verwendung der Anker-Positionierung positioniert wird, ist es sinnvoll, Fallback-Optionen `position-try` über die Eigenschaft {{cssxref("position-try-fallbacks")}} bereitzustellen. Diese können verwendet werden, um sicherzustellen, dass der Tooltipp so lange wie möglich auf dem Bildschirm angezeigt wird.

Wenn der Tooltipp beispielsweise standardmäßig über dem UI-Element platziert wird, an das er verankert ist, können Sie Fallbacks verwenden, um den Tooltipp unter das Element zu verschieben, bevor der Tooltipp vom Bildschirm verschwindet, wenn der Benutzer nach oben scrollt.

Ein Problem, das dies nicht eigenständig löst, ist die Aktualisierung der Gestaltung des anker-positionierten Elements, um zu den verschiedenen Fallback-Optionen zu passen. Zum Beispiel ist es üblich, einen kleinen Pfeil auf dem Tooltipp einzuschließen, der auf das Ankerelement zeigt, mit dem er verbunden ist, und dadurch die Benutzererfahrung verbessert, indem er die visuelle Verbindung klarer macht. Wenn der Tooltipp an eine andere Position wechselt, müssen auch die Position und die Ausrichtung des Pfeils geändert werden, da er sonst falsch aussieht.

Um dieses Problem zu lösen, können Sie verankerte Container-Abfragen verwenden. Diese erweitern die Funktionalität von [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), um Ihnen zu ermöglichen, zu erkennen, wann eine bestimmte Fallback-Option auf ein anker-positioniertes Element angewendet wird, und CSS auf seine Nachkommen anzuwenden. Insbesondere beruhen verankerte Container-Abfragen auf zwei Funktionen:

- Der `anchored` Wert der {{cssxref("container-type")}} Eigenschaft: Diese wird auf das anker-positionierte Element angewendet, um zu beginnen, zu erkennen, wann verschiedene Fallback-Optionen auf es angewendet werden.
- Die {{cssxref("@container")}} At-Regel `anchored()` Funktion: Diese wird mit einem [`fallback` Descriptor](/de/docs/Web/CSS/Reference/At-rules/@container#fallback) als Argument verwendet. Der Wert des Descriptors ist ein `position-try-fallbacks` Wert.

Nehmen wir zum Beispiel an, wir haben ein Tooltip-Element, das standardmäßig über seinem Anker über einen {{cssxref("position-area")}} Wert von `top` positioniert ist, aber einen {{cssxref("position-try-fallbacks")}} Wert von `flip-block` spezifiziert hat. Dies wird dazu führen, dass der Tooltipp in der Blockrichtung an die Unterseite seines Ankers wechselt, wenn er beginnt, die Oberseite des Viewports zu überlaufen. Wenn wir erkennen wollen, wann das Fallback auf den Tooltipp angewendet wird, müssen wir zuerst `container-type: anchored` auf ihn setzen, um ihn in einen verankerten Abfrage-Container zu verwandeln.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Mit diesem in place können wir nun eine Container-Abfrage wie folgt schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Der Abfragetest — `anchored(fallback: flip-block)` — wird wahr zurückgeben, wenn die `flip-block` Fallback-Option auf den Tooltipp angewendet wird. In diesem Fall werden die innerhalb des `@container` Blocks angegebenen Stile angewendet. Sie könnten beispielsweise die Position und Ausrichtung eines Pfeils ändern, sodass er nach oben statt nach unten zeigt, oder die Richtung eines Farbverlaufs ändern.

> [!NOTE]
> Beachten Sie, dass, wie bei allen Container-Abfragen, die angewendeten Stile nur die Nachkommen des Containers beeinflussen können, nicht den Container selbst. Dies könnte erfordern, dass Sie einige Ihrer positionierten Elementstile auf ein Umwicklungselement innerhalb davon anwenden, anstatt auf das Element selbst, wie im Beispiel [Mehrere Fallbacks Beispiel](#beispiel_für_mehrere_fallbacks) demonstriert.

## Beispiel für die Grundnutzung

Dieses Beispiel enthält ein Ankerelement, das ein Infobox-Element im Verhältnis dazu positioniert hat.
Zunächst wird die Infobox oberhalb des Ankers positioniert und enthält einen Pfeil, der nach unten zum Anker zeigt. Wir fügen einen `position-try` Fallback hinzu, sodass die Infobox unter den Anker verschoben wird, wenn der Inhalt so weit nach oben scrollt, dass die Infobox beginnt, sich vom oberen Rand des Viewports zu verschieben. Darüber hinaus verwenden wir eine verankerte Container-Abfrage, um Stile zu ändern, sobald das Fallback eintritt, wodurch der Pfeil verschoben und nach oben zeigt.

Der Anker und die Infobox werden durch zwei {{htmlelement("div")}} Elemente dargestellt, wie unten gezeigt. Sie sind im endgültigen Rendering von Textinhalt umgeben, um die Seite zum Scrollen zu bringen, aber wir haben es der Kürze halber versteckt:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">Infobox</div>
```

```html hidden live-sample___basic-example
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">Infobox</div>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
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

In unserem CSS beginnen wir damit, dem `anchor` `<div>` als Ankerelement einen {{cssxref("anchor-name")}} von `--my-anchor` zuzuweisen.

```css hidden live-sample___basic-example
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.anchor {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

.infobox {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1rem;
  border-radius: 10px;
}

.infobox::before {
  color: black;
  font-size: 1rem;
  margin: 0;
  line-height: 0.5;
  left: 0;
  width: 100%;
  text-align: center;
}

@supports not (container-type: anchored) {
  body::before {
    content: "Your browser does not support anchored container queries.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___basic-example
.anchor {
  anchor-name: --my-anchor;
}
```

Als nächstes geben wir dem `infobox` `<div>` einen {{cssxref("position")}} Wert von `fixed` und einen {{cssxref("position-anchor")}} Wert von `--my-anchor`, um es mit dem Ankerelement zu verbinden. Dann geben wir der Infobox einen {{cssxref("position-area")}} Wert von `top`, um sie oberhalb des Ankerelements zu positionieren, und einen {{cssxref("position-try-fallbacks")}} Wert von `bottom`, damit die Infobox unter den Anker verschoben wird, wenn sie beginnt, die Oberseite des Viewports zu überlaufen, während der Inhalt nach oben gescrollt wird.

Schließlich setzen wir einen {{cssxref("container-type")}} Wert von `anchored` auf die Infobox, um sie als verankerten Abfrage-Container zu kennzeichnen. Das bedeutet, dass wir nun erkennen können, wann verschiedene `position-try-fallbacks` auf der Infobox über {{cssxref("@container")}} At-Regeln aktiv sind und Stile auf ihre Nachkommen als Ergebnis aktualisieren können.

```css live-sample___basic-example
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: bottom;
  container-type: anchored;
}
```

Nun fügen wir den Pfeil zur Infobox hinzu, indem wir generierten Inhalt auf ihrem {{cssxref("::before")}} Pseudo-Element verwenden. Wir setzen die {{cssxref("content")}} Eigenschaft des Pseudo-Elements auf ein geeignetes Abwärtspfeil-Symbol, positionieren es absolut und setzen seine {{cssxref("top")}} Eigenschaft auf `105%`, um es am unteren Rand der Infobox zu positionieren (wir setzen es auf mehr als `100%`, damit es optisch mit der Position des entsprechenden Aufwärtspfeils übereinstimmt).

```css live-sample___basic-example
.infobox::before {
  content: "▼";
  position: absolute;
  top: 105%;
}
```

Als nächstes fügen wir die verankerte Container-Abfrage hinzu. Wir enthalten eine `@container` At-Regel mit ihrem Test definiert als `anchored(fallback: bottom)`. Das bedeutet, dass, wenn der `bottom` position-try Fallback auf die Infobox angewendet wird, das CSS innerhalb der At-Regel auf das Dokument angewendet wird. Innen definieren wir alternative Stile für das `::before` Pseudo-Element der Infobox, das das Abwärtspfeilsymbol gegen ein Aufwärtspfeilsymbol austauscht und es am oberen Rand der Infobox positioniert.

```css live-sample___basic-example
@container anchored(fallback: bottom) {
  .infobox::before {
    content: "▲";
    bottom: 100%;
    top: auto;
  }
}
```

> [!NOTE]
> Es gibt mehr CSS in diesem Beispiel, um das grundlegende Styling aller Elemente zu bearbeiten, aber wir haben nur Ihnen die Teile gezeigt, die für verankerte Container-Abfragen relevant sind. Um den vollständigen Code zu sehen, öffnen Sie das Beispiel im MDN Playground, indem Sie auf die Schaltfläche "Abspielen" auf einem der Codeblöcke oder des Live-Renderings drücken.

Dieses Beispiel rendert wie folgt:

{{ EmbedLiveSample("basic-example", "100%", "350") }}

Versuchen Sie, die Demo zu scrollen, sodass der Anker in die Nähe des oberen Randes des Viewports bewegt wird und dass Sie bemerken, dass sich nicht nur die Infobox unter den Anker bewegt, um auf dem Bildschirm zu bleiben, sondern dass sich auch das Styling aktualisiert, so dass das Pfeilsymbol immer noch für die neue Infobox-Position funktioniert.

Wenn Sie den Anker wieder nach unten in Richtung des unteren Randes des Viewports scrollen, wird die Infobox wieder darüber verschoben. Wir müssen keinen zusätzlichen `position-try-fallbacks` Wert von `top` angeben, um dies zu erreichen, da `position-area: top` die standardmäßig bereitgestellte Position der Infobox ist. Wenn die bereitgestellten Fallbacks das anker-positionierte Element nicht daran hindern, überzulaufen, wird der Browser zu seiner Standardposition zurückkehren.

## Beispiel für mehrere Fallbacks

Dieses Beispiel zeigt mehrere `position-try` Fallbacks und verankerte Container-Abfragen in Aktion und befasst sich auch mit dem Problem, was zu tun ist, wenn Sie verankerte Container-Abfragen verwenden möchten, um Stile auf das anker-positionierte Element selbst anzuwenden, anstatt auf seine Nachkommen, unter Verwendung eines zusätzlichen Wrapper-Elements. Das Beispiel enthält auch etwas JavaScript, das es Ihnen ermöglicht, das Ankerelement mit der Maus oder der Tastatur auf dem Bildschirm zu bewegen, um die verschiedenen Fallbacks zu überprüfen.

Das HTML für dieses Beispiel umfasst zwei {{htmlelement("div")}} Elemente, um den Anker und die Infobox darzustellen. Das `anchor` `<div>` enthält ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, um es über die Tastatur fokussierbar zu machen, während das `infobox` `<div>` ein zusätzliches Wrapper `<div>` enthält, auf das die Infoboxstile angewendet werden können, sodass wir es über `@container` At-Regeln stylen können.

```html live-sample___multiple-fallbacks
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <div>Infobox</div>
</div>
```

Wir beginnen unsere Stile, indem wir dem `anchor` `<div>` erneut als Ankerelement einen `anchor-name` von `--my-anchor` zuweisen. Wir positionieren es auch absolut, damit wir es durch das Festlegen verschiedener {{Glossary("inset_properties", "Inset-Eigenschaften")}} Werte über JavaScript bewegen können.

```css hidden live-sample___multiple-fallbacks
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.anchor {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

@supports not (container-type: anchored) {
  body::before {
    content: "Your browser does not support anchored container queries.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___multiple-fallbacks
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
}
```

Als nächstes positionieren wir unsere Infobox relativ zu unserem Anker, indem wir sie absolut positionieren und ihr einen `position-anchor` Wert von `--my-anchor` zuweisen. Diesmal positionieren wir sie oben links von dem Anker mit einem `position-area` Wert von `top left`. Wir setzen dann drei `position-try-fallbacks` — `flip-block`, `flip-inline` und `flip-block flip-inline` — dies bewirkt, dass die Infobox ihre Position entlang ihrer Blockachse, Inlineachse oder beider wechselt, um auf dem Bildschirm zu bleiben, wenn der Anker in die Nähe der verschiedenen Ränder des Viewports gelangt.

Schließlich verwandeln wir die Infobox in einen verankerten Abfrage-Container, indem wir `container-type: anchored` setzen.

```css live-sample___multiple-fallbacks
.infobox {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  container-type: anchored;
}
```

An diesem Punkt zeigen wir Ihnen die grundlegenden visuellen Stile, die auf die Infobox gesetzt werden, um zu veranschaulichen, dass wir in diesem Fall diese Stile auf das Wrapper `<div>` innerhalb der Infobox setzen und nicht auf die Infobox selbst. Wie bereits erwähnt, tun wir dies, um diese Stile über verankerte Container-Abfragen zu manipulieren. Dies wäre nicht möglich, wenn sie direkt auf der Infobox gesetzt wären, da es der verankerte Abfrage-Container ist.

Am auffälligsten ist hier, dass wir einen {{cssxref("border-radius")}} Wert festlegen, der eine abgerundete Ecke auf jeder Ecke der Infobox außer der unteren rechten Ecke erzeugt. Da die Infobox oben links am Anker positioniert ist, fungiert diese Ecke als Pfeil, der auf den Anker zeigt.

```css live-sample___multiple-fallbacks
.infobox div {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1px;

  border-radius: 10px 10px 0 10px;
}
```

Schließlich definieren wir eine verankerte Container-Abfrage für jedes `position-try` Fallback, das auf die Infobox über `@container` At-Regeln angewendet werden kann. In jedem Fall ändern wir die abgerundeten Ecken, die auf das Infobox-Wrapper `<div>` angewendet werden, sodass die nächste Ecke zum Anker immer nicht abgerundet ist.

```css live-sample___multiple-fallbacks
@container anchored(fallback: flip-block) {
  .infobox div {
    border-radius: 10px 0 10px 10px;
  }
}

@container anchored(fallback: flip-inline) {
  .infobox div {
    border-radius: 10px 10px 10px 0;
  }
}

@container anchored(fallback: flip-block flip-inline) {
  .infobox div {
    border-radius: 0 10px 10px 10px;
  }
}
```

> [!NOTE]
> Erneut haben wir die meisten grundlegenden Stile der Kürze halber versteckt, ebenso wie das JavaScript, das die Bewegungssteuerungen bietet (dies ist nicht relevant für das, was wir hier demonstrieren möchten). Um den vollständigen Code zu sehen, öffnen Sie das Beispiel im MDN Playground, indem Sie auf die Schaltfläche "Abspielen" auf einem der Codeblöcke oder des Live-Renderings drücken.

```js hidden live-sample___multiple-fallbacks
const anchorDiv = document.querySelector(".anchor");

let xPos = 250;
let yPos = 120;

function setPos() {
  const maxX = document.body.clientWidth - anchorDiv.clientWidth - 25;
  const maxY = document.body.clientHeight - anchorDiv.clientHeight - 25;

  if (xPos < 25) {
    xPos = 25;
  }

  if (xPos > maxX) {
    xPos = maxX;
  }

  if (yPos < 25) {
    yPos = 25;
  }

  if (yPos > maxY) {
    yPos = maxY;
  }

  anchorDiv.style.left = `${xPos}px`;
  anchorDiv.style.top = `${yPos}px`;
}

setPos();

document.body.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    yPos -= 25;
  } else if (e.key === "d") {
    xPos += 25;
  } else if (e.key === "s") {
    yPos += 25;
  } else if (e.key === "a") {
    xPos -= 25;
  }

  setPos();
});

document.body.addEventListener("click", (e) => {
  xPos = e.clientX;
  yPos = e.clientY;

  setPos();
});
```

Dieses Beispiel rendert wie folgt:

{{ EmbedLiveSample("multiple-fallbacks", "100%", "350") }}

Versuchen Sie, das Ankerelement im Viewport zu bewegen, indem Sie:

- Auf die Maus klicken (oder den Bildschirm tippen, wenn Sie ein Touchscreen-Gerät verwenden) an der Position, zu der Sie den Anker bewegen möchten.
- Verwenden der <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um den Anker nach oben, links, unten und rechts zu bewegen, jeweils.

Wenn Sie das Ankerelement in die Nähe der Bildschirmränder bewegen, beachten Sie, wie die Infobox sich an verschiedene Positionen um es herum bewegt, um auf dem Bildschirm zu bleiben, und auch, wie der `border-radius` Wert auf der Infobox sich ändert, sodass die nicht abgerundete Ecke immer auf den Anker zeigt. Das Bewegen des Ankers in die verschiedenen Ecken garantiert, dass Sie die verschiedenen Effekte sehen.

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
