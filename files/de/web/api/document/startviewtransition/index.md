---
title: "Dokument: startViewTransition()-Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle startet eine neue gleiche-Dokument (SPA) [Ansichtstransition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um sie darzustellen.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten durchgeführt, wie im Abschnitt [Der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Rückruffunktion, die typischerweise verwendet wird, um das DOM während des SPA-Ansichtstransitionsprozesses zu aktualisieren, und die ein {{jsxref("Promise")}} zurückgibt. Der Rückruf wird aufgerufen, sobald die API einen Snapshot der aktuellen Seite erstellt hat. Wenn das von dem Rückruf zurückgegebene Promise erfüllt wird, beginnt die Ansichtstransition im nächsten Frame. Wenn das Promise von dem Rückruf abgelehnt wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen zur Konfiguration der Ansichtstransition. Es kann die folgenden Eigenschaften enthalten:
    - `update` {{optional_inline}}
      - : Die gleiche oben beschriebene `updateCallback`-Funktion. Standardmäßig `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Arten darstellt, die auf die Ansichtstransition angewendet werden. [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen die selektive Anwendung von CSS-Stilen oder JavaScript-Logik basierend auf dem Übergangstyp. Standardmäßig eine leere Sequenz.

### Rückgabewert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz.

## Beispiele

Siehe [View Transition API > Beispiele](/de/docs/Web/API/View_Transition_API#examples) für eine Liste vollständiger Beispiele.

### Grundlegende Verwendung

In dieser gleichen-Dokument-Ansichtstransition überprüfen wir, ob der Browser Ansichtsübergänge unterstützt.
Falls keine Unterstützung vorhanden ist, setzen wir die Hintergrundfarbe mit einer Fallback-Methode, die sofort angewandt wird.
Andernfalls können wir sicher `document.startViewTransition()` mit Animationsregeln aufrufen, die wir in CSS definieren.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

Wir setzen die `animation-duration` auf 2 Sekunden mithilfe des {{CSSXRef("::view-transition-group")}}-Pseudoelements.

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
const updateColor = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    updateColor();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => {
    updateColor();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

Wenn Ansichtstransitionen unterstützt werden, wird beim Klicken auf die Schaltfläche die Farbe in 2 Sekunden von einer zur anderen übergehen.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Fallback-Methode gesetzt.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudo-Klasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
