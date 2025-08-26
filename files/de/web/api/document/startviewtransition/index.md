---
title: "Dokument: startViewTransition()-Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 7f8ef957d0b321e8b2ad346fc2a5cd12e6c93915
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces startet eine neue Ansichtstransition im selben Dokument (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das diese darstellt.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten befolgt, wie im Abschnitt [Der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise während des SPA-Ansichtstransitionsprozesses aufgerufen wird, um das DOM zu aktualisieren und ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, nachdem die API einen Schnappschuss der aktuellen Seite erstellt hat. Wenn das von dem Callback zurückgegebene Promise erfüllt wird, beginnt die Ansichtstransition im nächsten Frame. Wenn das Promise abgelehnt wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration der Ansichtstransition enthält. Es kann die folgenden Eigenschaften umfassen:
    - `update` {{optional_inline}}
      - : Dieselbe `updateCallback`-Funktion, wie oben beschrieben. Standardwert ist `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Zeichenfolgen. Diese Zeichenfolgen dienen als Klassennamen oder Bezeichner für die Transition, sodass Sie selektiv CSS-Stile anwenden oder unterschiedliche JavaScript-Logik basierend auf dem Übergangstyp ausführen können. Der Standardwert ist eine leere Sequenz.

### Rückgabewert

Eine Instanz des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts.

## Beispiele

### Verwendung einer Ansichtstransition im selben Dokument

In dieser Ansichtstransition im selben Dokument überprüfen wir, ob der Browser Ansichtstransitionen unterstützt.
Wenn es keine Unterstützung gibt, setzen wir die Hintergrundfarbe mit einer Fallback-Methode, die sofort angewendet wird.
Andernfalls können wir sicher `document.startViewTransition()` mit Animationsregeln aufrufen, die wir in CSS definieren.

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

Wenn Ansichtstransitionen unterstützt werden, wird durch Klicken auf die Schaltfläche die Farbe über 2 Sekunden hinweg von einer zur anderen wechseln.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Fallback-Methode gesetzt.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudo-Klasse
- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
