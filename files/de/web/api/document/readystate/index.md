---
title: "Document: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/Document/readyState
l10n:
  sourceCommit: e32d6804e733d48e5a0917bc3ae45aee4798613d
---

{{APIRef("DOM")}}

Die **`Document.readyState`**-Eigenschaft beschreibt den Ladezustand des [`Dokuments`](/de/docs/Web/API/Document).
Wenn sich der Wert dieser Eigenschaft ändert, wird ein [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis auf dem [`Dokument`](/de/docs/Web/API/Document)-Objekt ausgelöst.

## Wert

Der `readyState` eines Dokuments kann einer der folgenden Werte sein:

- `loading`
  - : Das [`Dokument`](/de/docs/Web/API/Document) wird noch geladen (das heißt, der HTML-Parser arbeitet noch).
- `interactive`
  - : Das Dokument wurde geparst, aber Unterressourcen wie [deferred](/de/docs/Web/API/HTMLScriptElement/defer) und [module](/de/docs/Web/JavaScript/Guide/Modules)-Skripte, Bilder, Stylesheets und Frames werden noch geladen. Sobald sich das Dokument in diesem Zustand befindet und die deferred und module Skripte ausgeführt wurden, wird das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst.
- `complete`
  - : Das Dokument und alle Unterressourcen sind vollständig geladen. Dieser Zustand zeigt an, dass das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis kurz davor steht, ausgelöst zu werden.

## Beispiele

### Verschiedene Bereitschaftszustände

```js
switch (document.readyState) {
  case "loading":
    // The document is loading.
    break;
  case "interactive": {
    // The document has finished loading and we can access DOM elements.
    // Sub-resources such as scripts, images, stylesheets and frames are still loading.
    const span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  }
  case "complete":
    // The page is fully loaded.
    console.log(
      `The first CSS rule is: ${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### readystatechange als Alternative zum DOMContentLoaded-Ereignis

```js
// Alternative to DOMContentLoaded event
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### readystatechange als Alternative zum load-Ereignis

```js
// Alternative to load event
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### readystatechange als Event-Listener, um das DOM vor DOMContentLoaded einzufügen oder zu ändern

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse:
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
