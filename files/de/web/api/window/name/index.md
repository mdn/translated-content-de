---
title: "Fenster: Name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}

Die `Window.name`-Eigenschaft ruft den Namen des Browsing-Kontexts des Fensters ab/legt ihn fest.

## Wert

Ein String.

## Beschreibung

Der Name des Fensters wird hauptsächlich verwendet, um Ziele für Hyperlinks und Formulare festzulegen. Browsing-Kontexte müssen keine Namen haben.

Moderne Browser setzen `Window.name` auf einen leeren String zurück, wenn ein Tab eine Seite von einer anderen Domain lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird (z. B. durch Auswahl der "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (möglicherweise könnte die neue Seite solche Daten ebenfalls ändern, die dann von der ursprünglichen Seite gelesen werden könnten, wenn sie neu geladen wird).

`Window.name` wurde auch in einigen Frameworks zur Bereitstellung von Cross-Domain-Messaging als sicherere Alternative zu JSONP verwendet. Moderne Webanwendungen, die sensible Daten hosten, sollten sich jedoch nicht auf `window.name` für Cross-Domain-Messaging verlassen — das ist nicht der beabsichtigte Zweck und es gibt sicherere/bessere Möglichkeiten, Informationen zwischen Fenstern auszutauschen. [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) ist der empfohlene Mechanismus.

> **Note:** `window.name` konvertiert alle gespeicherten Werte in ihre String-Repräsentationen mit der `toString`-Methode.

## Beispiele

```html
<a href="url2" target="other-tab">This link will be opened in the other tab.</a>
```

```js
// Open a tab with a specific browsing context name
const otherTab = window.open("url1", "_blank");
if (otherTab) otherTab.name = "other-tab";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
