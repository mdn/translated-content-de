---
title: "ViewTransition: waitUntil() Methode"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`waitUntil()`** Methode des [`ViewTransition`](/de/docs/Web/API/ViewTransition) Interface verzögert den Abschluss der View-Übergänge und die Zerstörung des zugehörigen Pseudo-Elementbaums, bis ein in die Methode übergebenes {{jsxref("Promise")}} aufgelöst wurde.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, das beim Auflösen den Abschluss des Übergangs und die Zerstörung des zugehörigen Pseudo-Elementbaums verursacht. Dies kann jedes Promise sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein Übergang innerhalb eines Dokuments gestartet wird (typischerweise über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)), konstruiert der Browser automatisch einen [Pseudo-Elementbaum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree), um ausgehende und eingehende Änderungen am DOM anzuzeigen und zu animieren. Dieser Baum wird erstellt, wenn der Übergang die Animation beginnt, und wird zerstört, wenn die mit allen Pseudo-Elementen des Übergangs verbundenen Animationen den abgeschlossenen Zustand erreichen ([`finished`](/de/docs/Web/API/ViewTransition/finished) ist aufgelöst).

Dies funktioniert gut für die meisten Anwendungsfälle, aber es gibt einige, die davon profitieren, dass der Pseudo-Baum über den Abschluss der Animation hinaus anhält. Dies kann mit der `waitUntil()` Methode erreicht werden, die ein {{jsxref("Promise")}} als Argument erhält. Das Aufrufen von `waitUntil()` bewirkt, dass der Pseudo-Baum anhält, bis das Promise aufgelöst ist. An diesem Punkt wird das `finished` Promise ebenfalls aufgelöst.

Wiederholte Aufrufe von `waitUntil()` mit mehreren unterschiedlichen Promises verzögern den Abschlusszustand, bis alle gegebenen Promises aufgelöst sind.

Anwendungsfälle sind:

- Kombinieren eines Übergangs mit [scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations). Wenn die Übergangsanimation durch einen Scroll-Fortschritt oder eine Ansichtsfortschritt-Zeitachse gesteuert wird, sollte der Unterbaum bestehen bleiben, wenn die Animationen enden, da das Zurückscrollen die Pseudo-Elemente rückwärts animieren sollte.
- Kombinieren eines Übergangs mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Wenn Sie den Zustand Ihrer Elemente in `requestAnimationFrame()`-Rückrufen aktualisieren, weiß das Übergangssystem nicht, wie lange es den Pseudo-Elementbaum bestehen lassen soll und wird ihn sofort zerstören, sobald die CSS-Animationen beendet sind.
- Jede Situation, in der Sie den Abschluss eines View-Übergangs bis zum Eintreten eines Ereignisses verzögern möchten. Sie könnten zum Beispiel den Übergang bei `pointerdown` starten und ihn nicht beenden, bis `pointerup`.

## Beispiele

### Grundlegende Anwendung

Dieses Beispiel zeigt die grundlegende Anwendung der `waitUntil()`-Methode, um den Abschluss eines durch einen Button- oder Tastendruck gestarteten Übergangs zu verzögern, bis der Button- oder Tastendruck endet.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das Seiteninhalt enthält, einschließlich eines {{htmlelement("p")}}-Elements und eines {{htmlelement("button")}}-Elements, das bei Druck den angezeigten Inhalt ändert. Der Absatz enthält ein [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut, sodass Änderungen im DOM Benutzern von Bildschirmlesegeräten angekündigt werden.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

Wir fügen auch ein zweites `<p>`-Element hinzu, um Statusmeldungen hinein zu protokollieren:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

Zuerst wenden wir ein {{cssxref("view-transition-name")}} von `page` auf unser `<div>`-Element an, damit wir diesen Bereich mit den Übergangsanimationen anvisieren können, anstatt die gesamte MDN-Seite.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Als nächstes setzen wir eine {{cssxref("animation-delay")}} auf das {{cssxref("::view-transition-new()")}} Pseudo-Element (beachten Sie, wie wir den `page`-Baum anstelle des Standard-`root`-Baums spezifizieren). Dies verzögert das standardmäßige Einblenden des neuen DOM-Inhalts um `0.25` Sekunden, sodass es etwas nach dem Ausblenden des alten DOM-Inhalts einblendet.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Nun setzen wir eine benutzerdefinierte {{cssxref("animation-duration")}} und {{cssxref("opacity")}} auf das {{cssxref("::view-transition-old()")}} und das {{cssxref("::view-transition-new()")}} Element. Dies bewirkt, dass die Standard-Ausblend- und Einblendanimationen über `0.5` Sekunden dauern und setzt die `opacity` des Inhalts auf `0.5`, bis der Übergang abgeschlossen ist.

```css live-sample___basic-waituntil
::view-transition-old(page),
::view-transition-new(page) {
  animation-duration: 0.5s;
  opacity: 0.5;
}
```

```css hidden live-sample___basic-waituntil
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}

h1 {
  text-align: center;
}

.content {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
}
```

#### JavaScript

Unser Skript beginnt damit, Referenzen auf den Inhaltsabsatz, den Button und den Protokollabsatz zu greifen.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Als nächstes setzen wir Ereignislisten auf den Button, sodass bei `pointerdown`/`keypress` die benutzerdefinierte Funktion `btnHandler()` ausgeführt wird. Wir spezifizieren, dass der `keypress` Handler nur `einmal` ausgelöst werden soll, sonst würde er mehrfach ausgelöst werden, wenn eine Taste lange gedrückt wird, was zu einem ständigen Wechsel zwischen Ansichten führt und nicht das gewünschte Verhalten ist.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

Die Funktion `btnHandler()` ruft [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Übergang zu starten, und führt zuerst eine benutzerdefinierte Funktion namens `updatePage()` aus, die die DOM-Aktualisierungen durchführt, die animiert werden sollen. Anschließend erstellen wir eine Variable namens `resolveTransition` und ein neues {{jsxref("Promise")}} namens `p`. Wir setzen `resolveTransition` gleich der `resolve` Funktion des Promise-Callbacks, sodass, wenn `resolveTransition()` aufgerufen wird, wie wir es in den darauf folgenden `pointerup` und `keyup` Ereignis-Listenern tun, das Promise aufgelöst wird. Beachten Sie, dass wir den `keypress` Handler jedes Mal neu anwenden müssen, wenn der `keyup` Handler ausgelöst wird, da er jedes Mal nur einmal aufgerufen wird.

Wir führen `waitUntil()` aus und übergeben das Promise `p` als Argument. Dies bedeutet, dass der Übergang bestehen bleibt, bis `p` bei `pointerup` aufgelöst wird. Um dies zu beweisen, verwenden wir das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Promise, um eine `showLog()`-Funktion auszuführen, sobald der Übergang abgeschlossen ist, die eine Nachricht in den Protokollabsatz druckt.

```js live-sample___basic-waituntil
function btnHandler() {
  const transition = document.startViewTransition(() => {
    updatePage();

    let resolveTransition;

    const p = new Promise((resolve) => {
      resolveTransition = resolve;
    });

    window.addEventListener("pointerup", () => {
      resolveTransition();
    });

    window.addEventListener("keyup", () => {
      resolveTransition();
      btn.addEventListener("keypress", btnHandler, {
        once: true,
      });
    });

    transition.waitUntil(p);
    transition.finished.then(() => showLog());
  });
}
```

Als nächstes definieren wir die `updatePage()`-Funktion, die das Seiten-DOM aktualisiert. Sie wechselt zwischen dem Setzen des `textContent` des Inhaltsabsatzes gleich den ersten und den zweiten `pageContent`-Array-Elementen.

```js live-sample___basic-waituntil
const pageContent = [
  "Hello! This is the first page.",
  "Well, this is the second page.",
];

function updatePage() {
  if (content.textContent === pageContent[0]) {
    content.textContent = pageContent[1];
  } else {
    content.textContent = pageContent[0];
  }
}
```

Schließlich definieren wir die `showLog()`-Funktion — diese setzt den `textContent` des Protokollabsatzes auf "View transition finished", wartet eine Sekunde und setzt ihn dann wieder auf einen leeren String.

```js live-sample___basic-waituntil
function showLog() {
  log.textContent = "View transition finished";
  setTimeout(() => {
    log.textContent = "";
  }, 1000);
}
```

#### Ergebnis

{{embedlivesample("basic-waituntil", "100%", 200)}}

Versuchen Sie, lange auf den Button mit Ihrer Tastatur, Maus oder einem anderen Zeigegerät zu drücken — Sie werden sehen, dass die Crossfade-Übergangsanimation erfolgt, aber der Inhalt bleibt ausgegraut (aufgrund der `opacity: 0.5`, die auf die Übergangs-Pseudo-Elemente gesetzt ist), bis Sie den langen Druck beenden. Dies liegt daran, dass das im `waitUntil()`-Aufruf referenzierte `p` Promise nicht aufgelöst ist und daher der Übergang nicht beendet ist, bis die `pointerup`/`keyup` Ereignisse ausgelöst werden.

Die Protokollmeldung "View transition finished" erscheint ebenfalls erst, wenn der Übergang vollzogen ist, weil die Funktion, die dies behandelt, an das `ViewTransition.finished` Promise gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
