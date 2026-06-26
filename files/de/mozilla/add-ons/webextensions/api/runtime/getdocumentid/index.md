---
title: runtime.getDocumentId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getDocumentId
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Gibt die Dokument-ID eines beliebigen `window`-Globalobjekts oder eines Frame-Elements zurück. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).

## Syntax

```js-nolint
let documentId = browser.runtime.getDocumentId(
  target               // object
)
```

### Parameter

- `target`
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}} oder ein Container im {{Glossary("browsing_context", "Browsing-Kontext")}} [`element`](/de/docs/Web/API/Element) (iframe, frame, embed oder object) für das Ziel-Frame.

### Rückgabewert

Gibt die Dokument-UUID des Ziels zurück. Wirft einen Fehler, wenn das Fenster oder der Frame entladen wurde.

## Beispiele

Dieser Code ruft die Dokument-IDs des obersten Frames und seiner untergeordneten Frames ab:

```js
const documentId = browser.runtime.getDocumentId(window);
const frameDocumentId = browser.runtime.getDocumentId(
  document.querySelector("iframe"),
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
