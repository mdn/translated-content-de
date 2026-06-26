---
title: "Dokument: startViewTransition()-Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle startet eine neue, dokumentlokale ({{Glossary("SPA", "SPA")}}) [View Transition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das diese repräsentiert.

Die Abfolge der Schritte, die ausgeführt werden, wenn `startViewTransition()` aufgerufen wird, wird im Abschnitt [der View Transition-Prozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, um den DOM während des SPA View Transition-Prozesses zu aktualisieren. Sie gibt ein {{jsxref("Promise")}} zurück. Der Callback wird aufgerufen, sobald die API einen Snapshot der aktuellen Seite gemacht hat. Wenn das von dem Callback zurückgegebene Promise erfüllt wird, beginnt die View Transition im nächsten Frame. Wenn das von dem Callback zurückgegebene Promise abgelehnt wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration der View Transition enthält. Es kann die folgenden Eigenschaften enthalten:
    - `update` {{optional_inline}}
      - : Die gleiche `updateCallback`-Funktion wie oben beschrieben. Standardwert ist `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Zeichenketten, das die auf die View Transition angewendeten Typen repräsentiert. [Die Typen der View Transition](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen die selektive Anwendung von CSS-Stilen oder JavaScript-Logik basierend auf dem Übergangstyp, der auftritt. Standardwert ist ein leeres Array.

### Rückgabewert

Eine Instanz des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts.

## Beispiele

Siehe [View Transition API > Beispiele](/de/docs/Web/API/View_Transition_API#examples) für eine Liste vollständiger Beispiele.

### Grundlegende Verwendung

In dieser dokumentinternen View Transition prüfen wir, ob der Browser View Transitions unterstützt.
Wenn es keine Unterstützung gibt, setzen wir die Hintergrundfarbe mit einer Fallback-Methode, die sofort angewendet wird.
Andernfalls können wir sicher `document.startViewTransition()` mit Animationsregeln aufrufen, die wir in CSS definieren.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

Wir setzen die `animation-duration` auf 2 Sekunden unter Verwendung des {{CSSXRef("::view-transition-group")}}-Pseudoelements.

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

Wenn View Transitions unterstützt werden, wird durch Klicken auf den Button die Farbe innerhalb von 2 Sekunden von einer in die andere übergehen.
Andernfalls wird die Hintergrundfarbe ohne Animation mit einer Fallback-Methode gesetzt.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudoklasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudoklasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View Transition Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
