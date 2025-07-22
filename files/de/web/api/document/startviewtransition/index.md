---
title: "Dokument: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 462dc4b2f5c9eaef94d21da0f37ec3bf977c5592
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`** Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces startet eine neue, gleichbleibende Dokumentansicht (SPA) [view transition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das diese repräsentiert.

Wenn `startViewTransition()` aufgerufen wird, folgt eine Abfolge von Schritten, wie sie im [Prozess der View Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt werden.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise aufgerufen wird, um das DOM während des SPA-View-Transition-Prozesses zu aktualisieren und die ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, sobald die API einen Schnappschuss der aktuellen Seite erstellt hat. Wenn das durch den Callback zurückgegebene Promise erfüllt wird, beginnt die View Transition im nächsten Frame. Wenn das Promise zurückgewiesen wird, wird die Transition abgebrochen.

### Rückgabewert

Eine Instanz des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts.

## Beispiele

### Verwendung einer gleichen Dokument-View-Transition

In dieser gleichen Dokument-View-Transition prüfen wir, ob der Browser View Transitions unterstützt.
Falls keine Unterstützung vorhanden ist, setzen wir die Hintergrundfarbe mit einer Ersatzmethode, die sofort angewendet wird.
Andernfalls kann `document.startViewTransition()` mit Animationsregeln, die wir in CSS definieren, sicher aufgerufen werden.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

Wir setzen die `animation-duration` auf 2 Sekunden unter Verwendung des {{CSSXRef("::view-transition-group")}} Pseudo-Elements.

```css
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```js
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector("section");
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    updateColour();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => {
    updateColour();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

Wenn View Transitions unterstützt werden, wird durch Klicken auf den Button die Farbe von einer zur anderen über 2 Sekunden hinweg übergehen.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Ersatzmethode gesetzt.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudo-Klasse
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
