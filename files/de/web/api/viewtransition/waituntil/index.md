---
title: "ViewTransition: waitUntil() Methode"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`waitUntil()`**-Methode des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Interfaces verzögert das Beenden der View-Übergangs und die Zerstörung des zugehörigen Pseudoelement-Baums, bis ein in die Methode übergebenes {{jsxref("Promise")}} aufgelöst wurde.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, das, wenn es aufgelöst wird, den Abschluss des View-Übergangs veranlasst und den zugehörigen Pseudoelement-Baum zerstört. Dies kann ein beliebiges Promise sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein View-Übergang im selben Dokument gestartet wird (typischerweise über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)), konstruiert der Browser automatisch einen [Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree), um ausgehende und eingehende Änderungen am DOM anzuzeigen und zu animieren. Dieser Baum wird erstellt, wenn der View-Übergang zu animieren beginnt, und wird zerstört, wenn die mit allen View-Übergangs-Pseudoelementen verbundenen Animationen den abgeschlossenen Zustand erreichen ([`finished`](/de/docs/Web/API/ViewTransition/finished) ist aufgelöst).

Dies funktioniert gut für die meisten Anwendungsfälle, es gibt jedoch einige, die davon profitieren, dass der Pseudobaum über den Animationsabschluss hinaus bestehen bleibt. Dies kann mit der `waitUntil()`-Methode erreicht werden, die ein {{jsxref("Promise")}} als Argument erhält. Der Aufruf von `waitUntil()` bewirkt, dass der Pseudobaum bestehen bleibt, bis das Promise aufgelöst wird. Zu diesem Zeitpunkt wird auch das `finished`-Promise aufgelöst.

Wiederholte Aufrufe von `waitUntil()` mit Angabe mehrerer unterschiedlicher Promises verzögern den Abschlusszustand, bis alle angegebenen Promises aufgelöst sind.

Anwendungsfälle umfassen:

- Die Kombination eines View-Übergangs mit [scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations). Wenn die Übergangsanimation durch einen Scroll-Fortschritt oder einen Ansichts-Fortschrittszeitstrahl gesteuert wird, sollte der Unterbaum bestehen bleiben, wenn die Animationen enden, da beim Zurückscrollen die Pseudoelemente rückwärts animiert werden können.
- Die Kombination eines View-Übergangs mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Wenn Sie den Status Ihrer Elemente in `requestAnimationFrame()`-Callbacks aktualisieren, weiß das View-Übergangssystem nicht, wie lange der Pseudoelement-Baum bestehen bleiben soll, und zerstört ihn sofort, sobald die CSS-Animationen abgeschlossen sind.
- Jede Situation, in der Sie das Beenden des View-Übergangs verzögern möchten, bis ein Ereignis aufgetreten ist. Beispielsweise könnten Sie den View-Übergang bei `pointerdown` starten und ihn erst bei `pointerup` beenden wollen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `waitUntil()`-Methode, um das Beenden eines durch einen Button- oder Tastendruck gestarteten View-Übergangs zu verzögern, bis der Button- oder Tastendruck endet.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das Seiteninhalt enthält, darunter ein {{htmlelement("p")}}-Element und ein {{htmlelement("button")}}-Element, das bei Betätigung den angezeigten Inhalt ändert. Der Absatz enthält ein [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut, sodass DOM-Updates für Bildschirmleser-Benutzer angekündigt werden.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

Wir fügen auch ein zweites `<p>`-Element hinzu, um Statusmeldungen zu protokollieren:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

Zuerst wenden wir ein {{cssxref("view-transition-name")}} von `page` auf unser `<div>`-Element an, sodass wir nur diesen Bereich mit den View-Übergangsanimationen anstatt der gesamten MDN-Seite ansprechen können.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Als nächstes setzen wir eine {{cssxref("animation-delay")}} auf das {{cssxref("::view-transition-new()")}}-Pseudoelement (beachten Sie, wie wir den `page`-Baum anstelle des Standard-`root`-Baums angeben). Dies verzögert die standardmäßige Einblendung des neuen DOM-Inhalts um `0.25` Sekunden, sodass er leicht nach dem Ausblenden des alten DOM-Inhalts einblendet.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Nun setzen wir eine benutzerdefinierte {{cssxref("animation-duration")}} und {{cssxref("opacity")}} auf die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}-Elemente. Dies hat zur Folge, dass die standardmäßigen Ausblend- und Einblendanimationen `0.5` Sekunden dauern und die Inhalts-`opacity` auf `0.5` gesetzt wird, bis der View-Übergang beendet ist.

```css live-sample___basic-waituntil
::view-transition-old(page),
::view-transition-new(page) {
  animation-duration: 0.5s;
  opacity: 0.5;
}
```

```css hidden live-sample___basic-waituntil
html {
  font-family: "Helvetica", "Arial";
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

Unser Skript beginnt damit, Referenzen zum Inhaltsabsatz, Button und Protokollabsatz zu erhalten.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Als nächstes setzen wir Event-Listener auf den Button, sodass bei `pointerdown`/`keypress` die `btnHandler()`-Funktion ausgeführt wird. Wir spezifizieren, dass der `keypress`-Handler nur `once` ausgelöst wird, da er sonst mehrfach ausgelöst wird, wenn eine Taste lange gedrückt wird, was dazu führt, dass zwischen den Ansichten ständig gewechselt wird, was nicht das gewünschte Verhalten ist.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

Die Funktion `btnHandler()` ruft [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den View-Übergang zu starten, und führt zunächst eine benutzerdefinierte Funktion namens `updatePage()` aus, die die DOM-Updates durchführt, die animiert werden sollen. Anschließend erstellen wir eine Variable namens `resolveTransition` und ein neues {{jsxref("Promise")}} namens `p`. Wir setzen `resolveTransition` gleich der `resolve`-Funktion des Promise-Callbacks, sodass, wenn `resolveTransition()` aufgerufen wird, wie wir es innerhalb der nachfolgenden `pointerup`- und `keyup`-Event-Listener tun, das Promise aufgelöst wird. Beachten Sie, dass wir den `keypress`-Handler jedes Mal erneut anwenden müssen, wenn der `keyup`-Handler ausgelöst wird, da er nur einmal pro Auslösung feuert.

Wir führen `waitUntil()` aus und übergeben es das Promise `p` als Argument. Dies bedeutet, dass der View-Übergang bestehen bleibt, bis `p` bei `pointerup` aufgelöst wird. Um dies zu beweisen, verwenden wir das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)-Promise, um eine `showLog()`-Funktion auszuführen, sobald der Übergang beendet ist, die eine Nachricht in den Protokollabsatz drucken wird.

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

Als nächstes definieren wir die `updatePage()`-Funktion, die das Page-DOM aktualisiert. Sie wechselt zwischen dem Setzen des `textContent` des Inhaltsabsatzes auf das erste und zweite Element des `pageContent`-Arrays.

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

Schließlich definieren wir die `showLog()`-Funktion – diese setzt den `textContent` des Protokollabsatzes auf "View transition finished", wartet eine Sekunde und setzt ihn dann wieder auf einen leeren String.

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

Versuchen Sie, die Taste mit Ihrer Tastatur, Maus oder einem anderen Zeigegerät lange zu drücken – Sie werden sehen, dass die Cross-Fade-Animationsübergänge auftreten, aber der Inhalt bleibt ausgegraut (aufgrund der `opacity: 0.5`, die auf die View-Übergangspseudoelemente gesetzt ist), bis Sie den langen Druck beenden. Dies liegt daran, dass das innerhalb des `waitUntil()`-Aufrufs referenzierte `p`-Promise nicht aufgelöst ist und daher der View-Übergang nicht beendet ist, bis die `pointerup`/`keyup`-Ereignisse ausgelöst werden.

Die Protokollnachricht "View transition finished" erscheint ebenfalls erst, wenn der View-Übergang beendet ist, da die Funktion, die dies behandelt, an das `ViewTransition.finished`-Promise gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
