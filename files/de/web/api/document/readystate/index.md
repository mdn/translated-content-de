---
title: "Dokument: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/Document/readyState
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`Document.readyState`**-Eigenschaft beschreibt den Ladezustand des {{domxref("document")}}. Wenn sich der Wert dieser Eigenschaft ändert, wird ein {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis auf dem {{domxref("document")}}-Objekt ausgelöst.

## Wert

Der `readyState` eines Dokuments kann einer der folgenden sein:

- `loading`
  - : Das {{domxref("document")}} wird noch geladen.
- `interactive`
  - : Das Dokument ist fertig geladen und das Dokument wurde geparst, aber Subressourcen wie Skripte, Bilder, Stylesheets und Frames werden noch geladen. Der Zustand zeigt an, dass das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis gleich ausgelöst wird.
- `complete`
  - : Das Dokument und alle Subressourcen sind fertig geladen. Der Zustand zeigt an, dass das {{domxref("Window/load_event", "load")}}-Ereignis gleich ausgelöst wird.

## Beispiele

### Verschiedene Zustände der Bereitschaft

```js
switch (document.readyState) {
  case "loading":
    // Das Dokument wird geladen.
    break;
  case "interactive": {
    // Das Dokument ist fertig geladen und wir können auf DOM-Elemente zugreifen.
    // Subressourcen wie Skripte, Bilder, Stylesheets und Frames werden noch geladen.
    const span = document.createElement("span");
    span.textContent = "Ein <span>-Element.";
    document.body.appendChild(span);
    break;
  }
  case "complete":
    // Die Seite ist vollständig geladen.
    console.log(
      `Die erste CSS-Regel ist: ${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### readystatechange als Alternative zum DOMContentLoaded-Ereignis

```js
// Alternative zum DOMContentLoaded-Ereignis
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### readystatechange als Alternative zum load-Ereignis

```js
// Alternative zum load-Ereignis
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### readystatechange als Event-Listener, um vor DOMContentLoaded Elemente in den DOM einzufügen oder zu ändern

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
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
