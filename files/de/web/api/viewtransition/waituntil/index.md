---
title: "ViewTransition: waitUntil() Methode"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`waitUntil()`**-Methode der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle verzögert das Beenden des Ansichtsübergangs und die Zerstörung des zugehörigen Pseudo-Element-Baums, bis ein in die Methode übergebener {{jsxref("Promise")}} aufgelöst wurde.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, der den Ansichtsübergang beendet und den zugehörigen Pseudo-Element-Baum zerstört, sobald er aufgelöst wird. Dies kann ein beliebiger Promise sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein Ansichtübergang im gleichen Dokument gestartet wird (normalerweise über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)), konstruiert der Browser automatisch einen [Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree), um ausgehende und eingehende Änderungen am DOM anzuzeigen und zu animieren. Dieser Baum wird konstruiert, wenn der Ansichtsübergang zu animieren beginnt und wird zerstört, wenn die Animationen, die mit allen Pseudo-Elementen des Ansichtsübergangs assoziiert sind, den beendeten Zustand erreichen ([`finished`](/de/docs/Web/API/ViewTransition/finished) ist aufgelöst).

Dies funktioniert gut für die meisten Anwendungsfälle, aber es gibt einige, bei denen es von Vorteil ist, wenn der Pseudo-Baum über den Endzustand der Animation hinaus bestehen bleibt. Dies kann mit der Methode `waitUntil()` erreicht werden, die einen {{jsxref("Promise")}} als Argument erhält. Das Aufrufen von `waitUntil()` bewirkt, dass der Pseudo-Baum bestehen bleibt, bis der Promise aufgelöst wird. An diesem Punkt wird auch der `finished`-Promise aufgelöst.

Wiederholte Aufrufe von `waitUntil()` mit mehreren unterschiedlichen Promises verzögern den Endzustand, bis alle gegebenen Promises aufgelöst sind.

Anwendungsfälle beinhalten:

- Kombinieren eines Ansichtsübergangs mit [scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations). Wenn die Übergangsanimation von einem Scroll- oder Ansichtsvortschritts-Timeline gesteuert wird, sollte der Unterbaum bestehen bleiben, wenn die Animationen beendet sind, da beim Zurückscrollen die Pseudo-Elemente rückwärts animiert werden sollen.
- Kombinieren eines Ansichtsübergangs mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Wenn Sie den Zustand Ihrer Elemente in `requestAnimationFrame()`-Rückrufen aktualisieren, weiß das Ansichtsübergangssystem nicht, wie lange der Pseudo-Element-Baum bestehen bleiben soll, und zerstört ihn sofort, sobald die CSS-Animationen beendet sind.
- Jede Situation, in der Sie das Beenden des Ansichtsübergangs verzögern möchten, bis ein Ereignis eingetreten ist. Sie könnten zum Beispiel den Ansichtsübergang bei `pointerdown` starten und erst bei `pointerup` beenden wollen.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der `waitUntil()`-Methode, um das Beenden eines durch einen Button- oder Tastendruck gestarteten Ansichtsübergangs zu verzögern, bis die Button- oder Tasteneingabe endet.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das Seiteninhalt enthält, inklusive eines {{htmlelement("p")}}-Elements und eines {{htmlelement("button")}}-Elements, das bei Betätigung den angezeigten Inhalt ändert. Der Absatz enthält ein [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut, damit DOM-Updates für Screenreader-Nutzer angekündigt werden.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

Wir fügen auch ein zweites `<p>`-Element ein, um Statusnachrichten zu protokollieren:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

Zuerst setzen wir einen {{cssxref("view-transition-name")}} von `page` auf unser `<div>`-Element, damit wir nur diesen Bereich mit den Ansichtsübergangsanimationen ansprechen, anstatt die gesamte MDN-Seite.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Als Nächstes setzen wir eine {{cssxref("animation-delay")}} auf das {{cssxref("::view-transition-new()")}}-Pseudo-Element (beachten Sie, wie wir den `page`-Baum ansprechen, anstatt den Standard-`root`-Baum). Dadurch verzögert sich die Einblendtransition des neuen DOM-Inhalts um `0.25` Sekunden, sodass es leicht nach dem Ausblenden des alten DOM-Inhalts einblendet.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Nun setzen wir eine benutzerdefinierte {{cssxref("animation-duration")}} und {{cssxref("opacity")}} auf das {{cssxref("::view-transition-old()")}}- und das {{cssxref("::view-transition-new()")}}-Element. Dies hat den Effekt, dass die Standard-Ausblend- und Einblendanimationen `0.5` Sekunden dauern und die Inhalts-`opacity` auf `0.5` gesetzt wird, bis der Ansichtsübergang abgeschlossen ist.

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

Unser Skript beginnt mit dem Abrufen von Referenzen zu dem Inhaltsabsatz, dem Button und dem Log-Absatz.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Dann setzen wir Event-Listener auf den Button, sodass bei `pointerdown`/`keypress` die benutzerdefinierte Funktion `btnHandler()` ausgeführt wird. Wir geben an, dass der `keypress`-Handler nur `einmal` ausgelöst wird, da er sonst bei langem Tastendruck mehrmals ausgelöst wird, wodurch die Ansichten ständig gewechselt werden, was nicht das gewünschte Verhalten ist.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

Die Funktion `btnHandler()` ruft [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Ansichtsübergang zu starten, und führt zunächst eine benutzerdefinierte Funktion namens `updatePage()` aus, die die zu animierenden DOM-Updates durchführt. Danach erstellen wir eine Variable namens `resolveTransition` und einen neuen {{jsxref("Promise")}} namens `p`. Wir setzen `resolveTransition` gleich der `resolve`-Funktion des Promise-Callbacks, sodass diese aufgerufen wird, wenn `resolveTransition()` aufgerufen wird, wie wir es in den nachfolgenden `pointerup`- und `keyup`-Event-Listenern tun. Beachten Sie, dass wir den `keypress`-Handler jedes Mal erneut anwenden müssen, wenn der `keyup`-Handler ausgelöst wird, da er jedes Mal nur einmal ausgelöst wird.

Wir führen `waitUntil()` aus und übergeben den Promise `p` als Argument. Das bedeutet, dass der Ansichtsübergang bestehen bleibt, bis `p` bei `pointerup` aufgelöst ist. Um dies zu bestätigen, verwenden wir den [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)-Promise, um eine `showLog()`-Funktion auszuführen, sobald der Übergang abgeschlossen ist, die eine Nachricht in den Log-Absatz schreibt.

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

Als Nächstes definieren wir die Funktion `updatePage()`, die das Seiten-DOM aktualisiert. Sie schaltet zwischen dem Einstellen des `textContent` des Inhaltsabsatzes auf das erste und das zweite Element des `pageContent`-Arrays um.

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

Abschließend definieren wir die Funktion `showLog()` — sie setzt den `textContent` des Log-Absatzes auf "View transition finished", wartet eine Sekunde und setzt ihn dann wieder auf einen leeren String zurück.

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

Versuchen Sie, den Button mit Ihrer Tastatur, Maus oder einem anderen Zeigegerät lange zu drücken — Sie werden sehen, dass die Überblendanimationsübergänge auftreten, aber der Inhalt bleibt ausgegraut (aufgrund der `opacity: 0.5`, die auf die Ansichtsübergangspseudo-Elemente eingestellt ist), bis Sie den langen Druck beenden. Dies liegt daran, dass der im `waitUntil()`-Aufruf referenzierte Promise `p` nicht aufgelöst ist und daher der Ansichtsübergang nicht beendet wird, bis die `pointerup`/`keyup`-Ereignisse ausgelöst werden.

Die Log-Nachricht "View transition finished" erscheint auch erst, wenn der Ansichtsübergang abgeschlossen ist, da die Funktion, die dies behandelt, an den `ViewTransition.finished`-Promise gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
