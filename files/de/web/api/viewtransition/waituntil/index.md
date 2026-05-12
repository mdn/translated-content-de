---
title: "ViewTransition: waitUntil() Methode"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
l10n:
  sourceCommit: 7313aa9ef71bdfcd7ddb2fa4247b0600ce0e6542
---

{{APIRef("View Transition API")}}

Die **`waitUntil()`**-Methode der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle verzögert das Beenden der Ansichtstransition und die Zerstörung des zugehörigen Pseudo-Elementbaums, bis ein in die Methode übergebenes {{jsxref("Promise")}} erfüllt ist.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, das, wenn es erfüllt ist, die Ansichtstransition beendet und den zugehörigen Pseudo-Elementbaum zerstört. Dies kann jedes beliebige Promise sein.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beschreibung

Wenn eine Ansichtstransition im selben Dokument gestartet wird (typischerweise über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)), erstellt der Browser automatisch einen [Pseudo-Elementbaum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree), um ausgehende und eingehende Änderungen am DOM darzustellen und zu animieren. Dieser Baum wird erstellt, wenn die Ansichtstransition zu animieren beginnt und wird zerstört, wenn die mit allen Pseudo-Elementen der Ansichtstransition verbundenen Animationen den abgeschlossenen Zustand erreichen ([`finished`](/de/docs/Web/API/ViewTransition/finished) ist erfüllt).

Dies funktioniert gut für die meisten Anwendungsfälle, aber es gibt einige, bei denen es vorteilhaft ist, wenn der Pseudo-Baum über den Zustand des Animationsendes hinaus bestehen bleibt. Dies kann erreicht werden, indem die `waitUntil()`-Methode verwendet wird, der ein {{jsxref("Promise")}} als Argument übergeben wird. Ein Aufruf von `waitUntil()` bewirkt, dass der Pseudo-Baum bestehen bleibt, bis das Promise erfüllt ist. Zu diesem Zeitpunkt wird auch das `finished` Promise erfüllt.

Wiederholte Aufrufe von `waitUntil()` mit verschiedenen Promises verzögern den Endzustand, bis alle angegebenen Promises erfüllt sind.

Anwendungsfälle umfassen:

- Kombination einer Ansichtstransition mit [Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations). Wenn die Übergangsanimation durch einen Scroll-Fortschritt oder eine Fortschrittstimeline gesteuert wird, sollte der Unterbaum bestehen bleiben, wenn die Animationen enden, da das Zurückscrollen die Pseudo-Elemente rückwärts animieren können sollte.
- Kombination einer Ansichtstransition mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Wenn Sie den Status Ihrer Elemente in `requestAnimationFrame()`-Callbacks aktualisieren, weiß das Ansichtstransitionssystem nicht, wie lange der Pseudo-Elementbaum bestehen bleiben soll, und wird ihn sofort zerstören, sobald die CSS-Animationen beendet sind.
- Jede Situation, in der Sie das Ende der Ansichtstransition verzögern möchten, bis ein Ereignis eingetreten ist. Sie möchten beispielsweise die Ansichtstransition bei `pointerdown` starten und erst bei `pointerup` beenden.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der `waitUntil()`-Methode, um eine durch einen Button- oder Tastendruck gestartete Ansichtstransition zu verzögern, bis der Button- oder Tastendruck endet.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das Seiteninhalt enthält, einschließlich eines {{htmlelement("p")}}-Elements und eines {{htmlelement("button")}}-Elements, das beim Drücken den angezeigten Inhalt ändert. Der Absatz enthält ein [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut, damit DOM-Aktualisierungen Benutzern von Bildschirmlesern angesagt werden.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

Wir fügen auch ein zweites `<p>`-Element ein, um Statusmeldungen zu protokollieren:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

Zuerst wenden wir einen {{cssxref("view-transition-name")}} von `page` auf unser `<div>`-Element an, damit wir nur diesen Bereich mit den Ansichtstransitionsanimationen ansprechen können, anstatt die gesamte MDN-Seite.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Als nächstes setzen wir eine {{cssxref("animation-delay")}} auf das {{cssxref("::view-transition-new()")}} Pseudo-Element (beachten Sie, dass wir den `page`-Baum angeben und nicht den Standard-`root`-Baum). Dies verzögert die Standard-Einblendtransition des neuen DOM-Inhalts um `0.25` Sekunden, sodass es leicht nach dem Ausblenden des alten DOM-Inhalts eingeblendet wird.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Nun setzen wir eine benutzerdefinierte {{cssxref("animation-duration")}} und {{cssxref("opacity")}} auf die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Elemente. Dies hat den Effekt, dass die Standard-Aus- und Einblendanimationen `0.5` Sekunden dauern und die `opacity` des Inhalts auf `0.5` gesetzt wird, bis die Ansichtstransition abgeschlossen ist.

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

Unser Skript beginnt damit, Referenzen zum Inhaltsabsatz, Button und Protokollabsatz zu erfassen.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Als nächstes setzen wir Event-Listener auf den Button, sodass bei `pointerdown`/`keypress` die `btnHandler()`-Benutzerfunktion ausgeführt wird. Wir spezifizieren den `keypress`-Handler, um nur einmal auszulösen, da er andernfalls mehrfach ausgelöst wird, wenn eine Taste lange gedrückt wird, was ständig zwischen Ansichten wechselt und nicht das gewünschte Verhalten ist.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

Die `btnHandler()`-Funktion ruft [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um die Ansichtstransition zu starten und zuerst eine benutzerdefinierte Funktion namens `updatePage()` auszuführen, die die zu animierenden DOM-Updates durchführt. Als nächstes erstellen wir eine Variable namens `resolveTransition` und ein neues {{jsxref("Promise")}} namens `p`. Wir setzen `resolveTransition` gleich der `resolve`-Funktion des Promise-Callbacks, sodass, wenn `resolveTransition()` aufgerufen wird, wie wir es in den nachfolgenden `pointerup`- und `keyup`-Event-Listenern tun, das Promise erfüllt wird. Beachten Sie, dass wir den `keypress`-Handler jedes Mal erneut anwenden müssen, wenn der `keyup`-Handler ausgelöst wird, da er jedes Mal nur einmal auslöst.

Wir führen `waitUntil()` aus und übergeben ihm das Promise `p` als Argument. Das bedeutet, dass die Ansichtstransition bestehen bleibt, bis `p` bei `pointerup` erfüllt ist. Um dies zu beweisen, verwenden wir das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Promise, um eine `showLog()`-Funktion auszuführen, sobald die Transition abgeschlossen ist, die eine Nachricht in den Protokollabsatz druckt.

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

Als nächstes definieren wir die `updatePage()`-Funktion, die das Seiten-DOM aktualisiert. Sie wechselt zwischen dem Setzen des Inhalts des Absatzes `textContent` gleich den ersten und zweiten `pageContent`-Array-Elementen.

```js live-sample___basic-waituntil
function updatePage() {
  if (content.textContent === pageContent[0]) {
    content.textContent = pageContent[1];
  } else {
    content.textContent = pageContent[0];
  }
}

const pageContent = [
  "Hello! This is the first page.",
  "Well, this is the second page.",
];
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

Versuchen Sie, die Taste mit Ihrer Tastatur, Maus oder einem anderen Zeigegerät lange zu drücken — Sie werden sehen, dass die Überblendungs-Transitionsanimation stattfindet, aber der Inhalt bleibt ausgegraut (aufgrund der auf die Pseudo-Elemente der Ansichtstransition gesetzten `opacity: 0.5`), bis Sie das lange Drücken beenden. Dies liegt daran, dass das in `waitUntil()` referenzierte `p` Promise nicht erfüllt ist und daher die Ansichtstransition nicht abgeschlossen ist, bis die `pointerup`/`keyup`-Ereignisse ausgelöst werden.

Die Meldung "View transition finished" im Protokoll erscheint ebenfalls erst, wenn die Ansichtstransition abgeschlossen ist, da die Funktion, die dies handhabt, an das `ViewTransition.finished`-Promise gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Glattere Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
