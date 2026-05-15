---
title: "ViewTransition: waitUntil() Methode"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("View Transition API")}}

Die **`waitUntil()`** Methode des [`ViewTransition`](/de/docs/Web/API/ViewTransition) Interfaces verzögert das Beenden der Ansichtsübergangs und die Zerstörung des zugehörigen Pseudo-Elementbaums, bis ein in die Methode übergebener {{jsxref("Promise")}} aufgelöst wurde.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, der, wenn er aufgelöst wird, den Ansichtsübergang beendet und den zugehörigen Pseudo-Elementbaum zerstört. Dies kann jedes beliebige Promise sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein Übergang innerhalb desselben Dokuments gestartet wird (typischerweise über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)), erstellt der Browser automatisch einen [Pseudo-Elementbaum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree), um ausgehende und eingehende Änderungen am DOM anzuzeigen und zu animieren. Dieser Baum wird erstellt, wenn der Ansichtsübergang zu animieren beginnt, und wird zerstört, wenn die Animationen, die mit allen Ansichtsübergangs-Pseudo-Elementen verbunden sind, den abgeschlossenen Zustand erreichen ([`finished`](/de/docs/Web/API/ViewTransition/finished) ist aufgelöst).

Dies funktioniert in den meisten Anwendungsfällen gut, aber es gibt einige, bei denen es von Vorteil ist, dass der Pseudo-Baum über den Animationsendzustand hinaus bestehen bleibt. Dies kann mit der `waitUntil()` Methode erreicht werden, die ein {{jsxref("Promise")}} als Argument übergeben bekommt. Der Aufruf von `waitUntil()` bewirkt, dass der Pseudo-Baum bestehen bleibt, bis der Promise aufgelöst ist. Zu diesem Zeitpunkt wird auch der `finished`-Promise aufgelöst.

Wiederholte Aufrufe von `waitUntil()`, die mehrere verschiedene Promises angeben, verzögern den Endzustand, bis alle angegebenen Promises aufgelöst sind.

Anwendungsfälle beinhalten:

- Die Kombination eines Ansichtsübergangs mit [scroll-getriebenen Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations). Wenn die Übergangsanimation von einer Scroll- oder Ansichts-Fortschritts-Zeitleiste gesteuert wird, sollte der Unterbaum bestehen bleiben, wenn die Animationen beendet sind, da beim Rückrollen die Pseudo-Elemente rückwärts animiert werden sollen.
- Die Kombination eines Ansichtsübergangs mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Wenn Sie den Zustand Ihrer Elemente in `requestAnimationFrame()`-Callbacks aktualisieren, weiß das Ansichtsübergangssystem nicht, wie lange der Pseudo-Elementbaum bestehen bleiben soll, und wird ihn sofort zerstören, sobald die CSS-Animationen beendet sind.
- Jede Situation, in der Sie das Beenden des Ansichtsübergangs verzögern möchten, bis ein Ereignis eintritt. Sie könnten beispielsweise den Ansichtsübergang bei `pointerdown` starten und ihn nicht beenden, bis `pointerup` erfolgt ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `waitUntil()` Methode, um das Beenden eines durch einen Tasten- oder Tastendruck gestarteten Ansichtsübergangs zu verzögern, bis der Tasten- oder Tastendruck endet.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das Seiteninhalt enthält, darunter ein {{htmlelement("p")}} Element und ein {{htmlelement("button")}} Element, das beim Drücken den angezeigten Inhalt ändert. Der Absatz enthält ein [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut, damit DOM-Updates den Benutzern von Bildschirmlesegeräten mitgeteilt werden.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

Wir fügen auch ein zweites `<p>` Element hinzu, um Statusmeldungen zu protokollieren:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

Zuerst wenden wir einen {{cssxref("view-transition-name")}} von `page` auf unser `<div>` Element an, damit wir nur diesen Bereich mit den Übergangsanimationen ansprechen können, anstatt die gesamte MDN-Seite.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Als nächstes setzen wir eine {{cssxref("animation-delay")}} auf das {{cssxref("::view-transition-new()")}} Pseudo-Element (beachten Sie, wie wir den `page` Baum statt des Standard-`root` Baums angeben). Dies verzögert die Standardeinblend-Animation des neuen DOM-Inhalts um `0.25` Sekunden, sodass er leicht nach dem Ausblenden des alten DOM-Inhalts angezeigt wird.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Nun setzen wir eine benutzerdefinierte {{cssxref("animation-duration")}} und {{cssxref("opacity")}} auf das {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Element. Dies hat zur Folge, dass die Standard-Aus- und Einblendanimationen `0.5` Sekunden dauern und die `opacity` des Inhalts auf `0.5` gesetzt wird, bis der Ansichtsübergang beendet ist.

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

Unser Skript beginnt damit, Referenzen auf den Absatzinhalt, die Schaltfläche und den Protokollabsatz zu erhalten.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Als nächstes setzen wir Ereignislistener auf die Schaltfläche, damit bei `pointerdown`/`keypress` die benutzerdefinierte Funktion `btnHandler()` ausgeführt wird. Wir geben an, dass der `keypress` Handler nur `einmal` ausgelöst werden soll, da er sonst mehrmals feuert, wenn eine Taste lange gedrückt wird, was das ständige Wechseln zwischen Ansichten zur Folge hat und nicht das gewünschte Verhalten ist.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

Die `btnHandler()` Funktion ruft [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Ansichtsübergang zu starten, und führt zuerst eine benutzerdefinierte Funktion namens `updatePage()` aus, die die zu animierenden DOM-Updates durchführt. Anschließend erstellen wir eine Variable namens `resolveTransition` und ein neues {{jsxref("Promise")}} namens `p`. Wir setzen `resolveTransition` gleich der `resolve` Funktion des Promise-Callbacks, sodass, wenn `resolveTransition()` aufgerufen wird, wie wir es in den nachfolgenden `pointerup` und `keyup` Ereignislisten tun, das Promise aufgelöst wird. Beachten Sie, dass wir den `keypress` Handler jedes Mal erneut anwenden müssen, wenn der `keyup` Handler auslöst, da er jedes Mal nur einmal ausgelöst wird.

Wir rufen `waitUntil()` auf und übergeben das Promise `p` als Argument. Dies bedeutet, dass der Ansichtsübergang bestehen bleibt, bis `p` bei `pointerup` aufgelöst wird. Um dies zu beweisen, verwenden wir das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Promise, um eine `showLog()` Funktion auszuführen, sobald der Übergang abgeschlossen ist. Diese Funktion wird eine Nachricht in den Protokollabsatz drucken.

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

Als nächstes definieren wir die `updatePage()` Funktion, die das Seiten-DOM aktualisiert. Sie wechselt zwischen der Zuweisung des `textContent` des Absatzinhalts zu den ersten und zweiten `pageContent` Array-Elementen.

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

Schließlich definieren wir die `showLog()` Funktion — diese setzt den `textContent` des Protokollabsatzes auf "View transition finished", wartet eine Sekunde und setzt ihn dann wieder auf einen leeren String zurück.

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

Versuchen Sie, die Schaltfläche mit Ihrer Tastatur, Maus oder einem anderen Zeigegerät lange gedrückt zu halten — Sie werden sehen, dass die Überblendungsanimation auftritt, aber der Inhalt bleibt ausgegraut (aufgrund der `opacity: 0.5`, die auf die Ansichtsübergangs-Pseudo-Elemente gesetzt ist), bis Sie den langen Druck beenden. Dies liegt daran, dass das im `waitUntil()` Aufruf referenzierte `p` Promise nicht aufgelöst ist und daher der Ansichtsübergang nicht abgeschlossen ist, bis die `pointerup`/`keyup` Ereignisse ausgelöst werden.

Die Protokollnachricht "View transition finished" erscheint ebenfalls erst, wenn der Ansichtsübergang abgeschlossen ist, da die Funktion, die dies behandelt, an das `ViewTransition.finished` Promise gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
