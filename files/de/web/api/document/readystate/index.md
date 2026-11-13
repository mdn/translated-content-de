---
title: "Dokument: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/Document/readyState
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`readyState`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) beschreibt den Ladezustand des [`document`](/de/docs/Web/API/Document). Wenn sich der Wert dieser Eigenschaft ändert, wird auf dem [`document`](/de/docs/Web/API/Document)-Objekt ein [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst.

## Wert

Der `readyState` eines Dokuments kann einen der folgenden Werte haben:

- `loading`
  - : Das [`document`](/de/docs/Web/API/Document) wird noch geladen (das heißt, der HTML-Parser arbeitet noch).
- `interactive`
  - : Das Dokument wurde geparst, aber Unterressourcen wie [deferred](/de/docs/Web/API/HTMLScriptElement/defer)- und [module](/de/docs/Web/JavaScript/Guide/Modules)-Skripte, Bilder, Stylesheets und Frames werden noch geladen. Sobald dieser Zustand erreicht ist und die deferred- und module-Skripte ausgeführt wurden, wird das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst.
- `complete`
  - : Das Dokument und alle Unterressourcen sind vollständig geladen. Dieser Zustand zeigt an, dass das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis unmittelbar ausgelöst wird.

## Beispiele

### Verschiedene Ladezustände

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

### readystatechange als Event Listener zum Einfügen oder Ändern des DOM vor DOMContentLoaded

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
