---
title: "Window: name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die `Window.name`-Eigenschaft
ruft den Namen des Browsing-Kontextes des Fensters ab oder setzt diesen.

## Wert

Ein String.

## Beschreibung

Der Name des Fensters wird hauptsächlich verwendet, um Ziele für Hyperlinks und Formulare festzulegen.
Browsing-Kontexte müssen keine Namen haben.

Moderne Browser setzen `Window.name` auf einen leeren String zurück, wenn ein Tab eine
Seite von einer anderen Domain lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird
(zum Beispiel durch Auswahl der "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite
auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (potenziell
könnte die neue Seite solche Daten ebenfalls ändern, die dann von der ursprünglichen Seite gelesen werden könnten,
wenn sie neu geladen wird).

`Window.name` wurde in einigen Frameworks auch für eine sichere
Alternative zu JSONP im cross-domain Messaging verwendet. Moderne Webanwendungen, die sensible Daten hosten,
sollten jedoch nicht auf `window.name` für cross-domain Messaging basieren — dies ist nicht der vorgesehene Zweck und es gibt sicherere/ bessere Wege, um Informationen zwischen Fenstern zu teilen.
[`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
ist der empfohlene Mechanismus.

> [!NOTE]
> `window.name` konvertiert alle gespeicherten Werte in ihre
> String-Darstellungen mithilfe der `toString`-Methode.

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
