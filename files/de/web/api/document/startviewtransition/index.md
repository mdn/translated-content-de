---
title: "Dokument: Methode startViewTransition()"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("View Transition API")}}

Die Methode **`startViewTransition()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) startet eine neue, auf das Dokument beschränkte [View Transition](/de/docs/Web/API/View_Transition_API) innerhalb desselben Dokuments ({{Glossary("SPA", "SPA")}}) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das diese repräsentiert.

Die Abfolge der Schritte beim Aufruf von `startViewTransition()` wird im Abschnitt [Der Ablauf einer View Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erläutert.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, um das DOM während der SPA-View-Transition zu aktualisieren. Sie gibt ein {{jsxref("Promise")}} zurück. Der Callback wird aufgerufen, nachdem die API einen Schnappschuss der aktuellen Seite erstellt hat. Wenn das vom Callback zurückgegebene Promise erfüllt wird, beginnt die View Transition im nächsten Frame. Wenn es zurückgewiesen wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen zur Konfiguration der View Transition. Es kann die folgenden Eigenschaften enthalten:
    - `update` {{optional_inline}}
      - : Dieselbe oben beschriebene `updateCallback`-Funktion. Der Standardwert ist `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, die die auf die View Transition angewendeten Typen angeben. [View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen es, CSS-Stile oder JavaScript-Logik gezielt anhand des jeweiligen Transition-Typs anzuwenden. Der Standardwert ist ein leeres Array.

### Rückgabewert

Eine Instanz des Objekts [`ViewTransition`](/de/docs/Web/API/ViewTransition).

## Beispiele

Eine Liste vollständiger Beispiele finden Sie unter [View Transition API > Beispiele](/de/docs/Web/API/View_Transition_API#examples).

### Grundlegende Verwendung

Bei dieser View Transition innerhalb desselben Dokuments prüfen wir, ob der Browser View Transitions unterstützt.
Falls nicht, setzen wir die Hintergrundfarbe mit einer Ausweichmethode, die sofort angewendet wird.
Andernfalls können wir `document.startViewTransition()` aufrufen und dabei die in CSS definierten Animationsregeln nutzen.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

Mithilfe des Pseudoelements {{CSSXRef("::view-transition-group")}} setzen wir die `animation-duration` auf 2 Sekunden.

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

Wenn View Transitions unterstützt werden, wechselt die Farbe beim Klicken auf die Schaltfläche innerhalb von 2 Sekunden von einer Farbe zur anderen.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Ausweichmethode gesetzt.

{{EmbedLiveSample('basic_usage', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)
- {{CSSXRef(":active-view-transition")}}-Pseudoklasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}-Pseudoklasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Flüssige Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
