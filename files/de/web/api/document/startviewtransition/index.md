---
title: "Dokumentation: Methode startViewTransition()"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle startet eine neue gleiche Dokument- (SPA) [View Transition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das sie repräsentiert.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten ausgeführt, wie im Abschnitt [Der View Transition Prozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise aufgerufen wird, um das DOM während des SPA-View Transition-Prozesses zu aktualisieren, und die ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, sobald die API eine Momentaufnahme der aktuellen Seite gemacht hat. Wenn das von dem Callback zurückgegebene Promise erfüllt ist, beginnt die View Transition im nächsten Frame. Wenn das Promise, das vom Callback zurückgegeben wird, abgelehnt wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration der View Transition enthält. Es kann die folgenden Eigenschaften umfassen:
    - `update` {{optional_inline}}
      - : Die gleiche `updateCallback`-Funktion wie oben beschrieben. Standardmäßig `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Strings. Diese Strings fungieren als Klassennamen oder Bezeichner für die Transition und ermöglichen es Ihnen, CSS-Stile selektiv anzuwenden oder unterschiedliche JavaScript-Logik basierend auf dem Typ der stattfindenden Transition auszuführen. Standardmäßig eine leere Sequenz.

### Rückgabewert

Eine Instanz des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts.

## Beispiele

### Verwendung einer gleichen Dokument-View Transition

In dieser gleichen Dokument-View Transition überprüfen wir, ob der Browser View Transitions unterstützt.
Wenn keine Unterstützung vorhanden ist, setzen wir die Hintergrundfarbe mit einer Ersatzmethode, die sofort angewendet wird.
Andernfalls können wir sicher `document.startViewTransition()` mit Animationsregeln aufrufen, die wir in CSS definieren.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

Wir setzen die `animation-duration` auf 2 Sekunden mit dem {{CSSXRef("::view-transition-group")}}-Pseudoelement.

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

Wenn View Transitions unterstützt werden, wird beim Klicken auf den Button die Farbe über 2 Sekunden von einer zur anderen übergehen.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Ersatzmethode gesetzt.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudo-Klasse
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
