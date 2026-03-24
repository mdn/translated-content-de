---
title: Verwendung von verankerten Container-Abfragen
short-title: Verankerte Container-Abfragen
slug: Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

[CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) beinhaltet Mechanismen zur Bereitstellung von [Fallback-Optionen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding). Dabei handelt es sich um alternative Positionen, in denen der Browser versuchen kann, ein ankerpositioniertes Element in Bezug auf seinen Anker zu platzieren, um es wieder auf dem Bildschirm darzustellen, falls das positionierte Element beginnt, den Viewport zu überlaufen.

**Verankerte Container-Abfragen** erhöhen die Nützlichkeit der Fallback-Optionen der Ankerpositionierung weiter, indem sie eine unterschiedliche Gestaltung des ankerpositionierten Elements abhängig davon ermöglichen, in welche Fallback-Position es platziert wird. Dieser Leitfaden zeigt, wie man verankerte Container-Abfragen verwendet, und bietet einige Beispiele.

> [!NOTE]
> Informationen zu den grundlegenden Grundlagen der CSS-Ankerpositionierung finden Sie unter [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Funktionsübersicht

Wenn ein Tooltip relativ zu einem UI-Element mithilfe der Ankerpositionierung positioniert wird, ist es sinnvoll, `position-try` Fallback-Optionen über die {{cssxref("position-try-fallbacks")}}-Eigenschaft bereitzustellen. Diese können verwendet werden, um sicherzustellen, dass das Tooltip so lange wie möglich auf dem Bildschirm angezeigt wird.

Zum Beispiel, wenn das Tooltip standardmäßig über dem UI-Element platziert wird, an das es verankert ist, können Sie Fallbacks verwenden, um das Tooltip unter das Element zu verschieben, gerade bevor das Tooltip vom Bildschirm verschwindet, wenn der Benutzer nach oben scrollt.

Ein Problem, das dadurch nicht alleine gelöst wird, ist die Aktualisierung der Gestaltung des ankerpositionierten Elements, um die unterschiedlichen Fallback-Optionen zu berücksichtigen. Beispielsweise ist es üblich, einen kleinen Pfeil auf das Tooltip zu setzen, der auf das Ankerelement zeigt, mit dem es verknüpft ist, um die Benutzererfahrung zu verbessern, indem die visuelle Zuordnung klarer gemacht wird. Wenn sich das Tooltip in eine andere Position bewegt, müssen auch die Position und die Ausrichtung des Pfeils geändert werden, sonst sieht es falsch aus.

Um dieses Problem zu lösen, können Sie verankerte Container-Abfragen verwenden. Diese erweitern die Funktionalität von [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), um es Ihnen zu ermöglichen, zu erkennen, wann eine bestimmte Fallback-Option auf ein ankerpositioniertes Element angewendet wird, und CSS auf dessen Nachkommen anzuwenden. Insbesondere verlassen sich verankerte Container-Abfragen auf zwei Funktionen:

- Die Eigenschaft {{cssxref("container-type")}} mit dem Wert `anchored`: Wenden Sie dies auf das ankerpositionierte Element an, um zu erkennen, wann verschiedene Fallback-Optionen darauf angewendet werden.
- Die {{cssxref("@container")}}-Regel mit der `anchored()`-Funktion: Diese erhält einen [`fallback`-Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@container#fallback) als Argument. Der Wert des Deskriptors ist ein Wert der `position-try-fallbacks`.

Lassen Sie uns ein Beispiel betrachten: Angenommen, wir haben ein Tooltip-Element, das standardmäßig über seinem Anker über einen {{cssxref("position-area")}}-Wert von `top` positioniert wird, aber einen {{cssxref("position-try-fallbacks")}}-Wert von `flip-block` angegeben hat. Dies führt dazu, dass das Tooltip in der Block-Richtung an die Unterseite seines Ankers bewegt wird, wenn es beginnt, die Oberseite des Viewports zu überlaufen. Wenn wir erkennen möchten, wann der Fallback auf das Tooltip angewendet wird, müssen wir zunächst `container-type: anchored` darauf setzen, um es in einen verankerten Abfrage-Container zu verwandeln.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Mit diesem in Kraft können wir nun eine Container-Abfrage wie folgt schreiben:

```css
@container anchored(fallback: flip-block) {
  /* Descendant styles here */
}
```

Der Abfragetest — `anchored(fallback: flip-block)` — wird wahr zurückgeben, wenn die `flip-block` Fallback-Option auf das Tooltip angewendet wird, wobei die innerhalb des `@container`-Blocks angegebenen Stile angewendet werden. Sie könnten beispielsweise die Position und die Ausrichtung eines Pfeils ändern, sodass er nach oben anstatt nach unten zeigt, oder die Richtung eines Farbverlaufs ändern.

> [!NOTE]
> Bedenken Sie, dass, wie bei allen Container-Abfragen, die angewendeten Stile nur die Nachkommen des Containers betreffen können, nicht den Container selbst. Dies könnte erfordern, dass Sie einige Ihrer positionierten Elementstile auf ein Wrapper-Element innerhalb davon anwenden, anstatt auf das Element selbst, wie im [Beispiel für mehrere Fallbacks](#beispiel_für_mehrere_fallbacks) demonstriert.

## Grundlegendes Anwendungsbeispiel

In diesem Beispiel ist ein Ankerelement enthalten, das eine Infobox relativ zu sich positioniert hat.
Anfangs ist die Infobox oberhalb des Ankers positioniert und enthält einen Pfeil, der nach unten auf den Anker zeigt. Wir fügen eine Positionstryg-Fallback-Option hinzu, sodass sich die Infobox unter den Anker bewegt, wenn der Inhalt ausreichend nach oben scrollt, dass die Infobox beginnt, vom oberen Rand des Viewports zu scrollen. Darüber hinaus verwenden wir eine verankerte Container-Abfrage, um Stile zu ändern, sobald der Fallback eintritt, wobei der Pfeil nach oben verschoben und aufwärts gerichtet wird.

Der Anker und die Infobox werden durch zwei {{htmlelement("div")}}-Elemente dargestellt, wie unten gezeigt. Sie sind von Textinhalt umgeben in der finalen Darstellung, um die Seite zum Scrollen zu bringen, aber wir haben es zur Übersichtlichkeit verborgen:

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

In unserem CSS geben wir zuerst das `anchor`-`<div>` als Ankerelement an, indem wir ihm einen {{cssxref("anchor-name")}} von `--my-anchor` zuweisen.

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
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___basic-example
.anchor {
  anchor-name: --my-anchor;
}
```

Als nächstes geben wir dem `infobox`-`<div>` einen {{cssxref("position")}}-Wert von `fixed` und einen {{cssxref("position-anchor")}}-Wert von `--my-anchor` zu, um es mit dem Ankerelement zu verknüpfen. Dann geben wir der Infobox einen {{cssxref("position-area")}}-Wert von `top`, um sie oberhalb des Ankerelements zu positionieren, und einen {{cssxref("position-try-fallbacks")}}-Wert von `bottom`, sodass die Infobox unter den Anker verschoben wird, wenn sie beginnt, den oberen Rand des Viewports zu überlaufen, wenn der Inhalt nach oben gescrollt wird.

Schließlich setzen wir einen {{cssxref("container-type")}}-Wert von `anchored` auf die Infobox, um sie als verankerten Abfrage-Container zu kennzeichnen, was bedeutet, dass wir jetzt erkennen können, wann verschiedene `position-try-fallbacks` auf die Infobox aktiv sind, und Stile auf ihre Nachkommen über {{cssxref("@container")}}-Regeln aktualisieren.

```css live-sample___basic-example
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: bottom;
  container-type: anchored;
}
```

Nun fügen wir einen Pfeil zur Infobox hinzu, indem wir erzeugten Inhalt auf dem {{cssxref("::before")}}-Pseudo-Element verwenden. Wir setzen die {{cssxref("content")}}-Eigenschaft des Pseudo-Elements auf ein geeignetes Abwärtspfeil-Icon, positionieren es absolut und setzen seine {{cssxref("top")}}-Eigenschaft auf `105%`, um es am unteren Rand der Infobox zu positionieren (wir setzen es auf mehr als `100%`, damit es visuell mit der Position des entsprechenden Aufwärtspfeils übereinstimmt).

```css live-sample___basic-example
.infobox::before {
  content: "▼";
  position: absolute;
  top: 105%;
}
```

Als nächstes fügen wir die verankerte Container-Abfrage hinzu. Wir fügen eine `@container`-Regel mit ihrem Test `anchored(fallback: bottom)` ein. Dies bedeutet, dass wenn der `bottom`-Position-try-Fallback auf die Infobox angewendet wird, das CSS innerhalb der Regel auf das Dokument angewendet wird. Im Inneren definieren wir alternative Stile für das `infobox`-`::before`-Pseudo-Element, das das Abwärtspfeilsymbol gegen ein Aufwärtspfeilsymbol austauscht und es am oberen Rand der Infobox positioniert.

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
> In diesem Beispiel gibt es weitere CSS, um die grundlegende Gestaltung aller Elemente zu behandeln, aber wir haben Ihnen nur die Teile gezeigt, die für verankerte Container-Abfragen relevant sind. Um den vollständigen Code zu sehen, öffnen Sie das Beispiel im MDN Playground, indem Sie die "Play"-Schaltfläche auf einem der Codeblöcke oder die Live-Wiedergabe drücken.

Dieses Beispiel wird folgendermaßen gerendert:

{{ EmbedLiveSample("basic-example", "100%", "350") }}

Versuchen Sie, die Demo zu scrollen, sodass der Anker sich nahe dem oberen Rand des Viewports befindet, und beachten Sie, dass sich nicht nur die Infobox unter den Anker bewegt, um auf dem Bildschirm zu bleiben, sondern auch die Gestaltung aktualisiert wird, sodass das Pfeilsymbol weiterhin für die neue Infobox-Position funktioniert.

Wenn Sie den Anker wieder nach unten in Richtung des unteren Randes des Viewports scrollen, bewegt sich die Infobox wieder über ihn nach oben. Wir müssen keinen zusätzlichen `position-try-fallbacks`-Wert `top` angeben, um dies zu erreichen, da `position-area: top` die standardmäßig vorgesehene Position der Infobox ist. Wenn die vorgesehenen Fallbacks das ankerpositionierte Element nicht daran hindern, überzulaufen, wird der Browser zu seiner Standardposition zurückkehren.

## Beispiel für mehrere Fallbacks

Dieses Beispiel zeigt mehrere Position-try-Fallbacks und verankerte Container-Abfragen in Aktion und behandelt auch das Problem, was zu tun ist, wenn Sie verankerte Container-Abfragen verwenden möchten, um Stile auf das ankerpositionierte Element selbst anstelle seiner Nachkommen anzuwenden, indem ein zusätzliches Wrapper-Element verwendet wird. Das Beispiel enthält auch etwas JavaScript, das es Ihnen ermöglicht, das Ankerelement mithilfe der Maus oder der Tastatur auf dem Bildschirm zu bewegen, um die verschiedenen Fallbacks zu überprüfen.

Das HTML für dieses Beispiel enthält zwei {{htmlelement("div")}}-Elemente, um den Anker und die Infobox darzustellen. Das `anchor`-`<div>` enthält ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um es per Tastatur fokussierbar zu machen, während die `infobox`-`<div>` ein zusätzliches Wrapper-`<div>` enthält, auf das die Infobox-Stile angewendet werden, sodass wir es über `@container`-Regeln gestalten können.

```html live-sample___multiple-fallbacks
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <div>Infobox</div>
</div>
```

Wir beginnen unsere Stile, indem wir das `anchor`-`<div>` als Ankerelement angeben, erneut indem wir ihm einen `anchor-name` von `--my-anchor` geben. Wir positionieren es auch absolut, damit wir es durch Setzen verschiedener {{Glossary("inset_properties", "Einsetzeigenschaften")}} über JavaScript herumbewegen können.

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
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___multiple-fallbacks
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
}
```

Als nächstes positionieren wir unsere Infobox relativ zu unserem Anker, indem wir sie absolut positionieren und einen `position-anchor`-Wert von `--my-anchor` geben. Dieses Mal positionieren wir sie in der oberen linken Ecke des Ankers mit einem `position-area`-Wert von `top left`. Dann setzen wir drei `position-try-fallbacks` — `flip-block`, `flip-inline` und `flip-block flip-inline` — dies führt dazu, dass die Infobox ihre Position entlang ihrer Blockachse, Inline-Achse oder beides umschaltet, um auf dem Bildschirm zu bleiben, wenn der Anker in die Nähe der verschiedenen Ränder des Viewports gelangt.

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

An diesem Punkt zeigen wir Ihnen die grundlegenden visuellen Stile, die auf die Infobox gesetzt sind, um zu veranschaulichen, dass wir in diesem Fall diese Stile auf das Wrapper-`<div>` innerhalb der Infobox setzen, anstatt auf die Infobox selbst. Wie bereits erwähnt, tun wir dies, damit wir diese Stile über verankerte Container-Abfragen manipulieren können. Dies wäre nicht möglich, wenn sie direkt auf die Infobox gesetzt würden, da es sich um den verankerten Abfrage-Container handelt.

Insbesondere setzen wir hier einen {{cssxref("border-radius")}}-Wert, der eine abgerundete Ecke auf jeder Ecke der Infobox außer der unteren rechten Ecke erzeugt. Da die Infobox in der oberen linken Ecke des Ankers positioniert ist, wirkt diese Ecke wie ein Pfeil, der auf den Anker zeigt.

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

Schließlich definieren wir für jeden Position-try-Fallback, der auf die Infobox angewendet werden kann, eine verankerte Container-Abfrage unter Verwendung von `@container`-Regeln. In jedem Fall ändern wir die abgerundeten Ecken, die auf das `infobox` Wrapper-`<div>` angewendet werden, sodass die Ecke, die dem Anker am nächsten ist, immer nicht abgerundet ist.

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
> Erneut haben wir den größten Teil des grundlegenden Stylings aus Platzgründen ausgeblendet, ebenso wie das JavaScript, das die Bewegungssteuerungen bereitstellt (dies ist nicht relevant für das, was wir hier demonstrieren möchten). Um den vollständigen Code zu sehen, öffnen Sie das Beispiel im MDN Playground, indem Sie die "Play"-Schaltfläche auf einem der Codeblöcke oder die Live-Wiedergabe drücken.

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

Dieses Beispiel wird folgendermaßen gerendert:

{{ EmbedLiveSample("multiple-fallbacks", "100%", "350") }}

Versuchen Sie, das Ankerelement im Viewport zu bewegen, indem Sie:

- Mit der Maus klicken (oder den Bildschirm berühren, wenn Sie ein Touchscreen-Gerät verwenden) an der Position, an die Sie den Anker bewegen möchten.
- Verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>-Tasten, um den Anker nach oben, links, unten und rechts zu bewegen.

Wenn Sie das Ankerelement in die Nähe der Bildschirmränder bewegen, beachten Sie, wie die Infobox in verschiedene Positionen um es herum verschoben wird, um auf dem Bildschirm zu bleiben, und auch wie der `border-radius`, der auf die Infobox gesetzt ist, sich ändert, damit immer die nicht abgerundete Ecke auf den Anker zeigt. Wenn Sie den Anker in die verschiedenen Ecken bewegen, werden Ihnen garantiert die unterschiedlichen Effekte angezeigt.

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
