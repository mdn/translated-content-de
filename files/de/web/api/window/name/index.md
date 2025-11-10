---
title: "Window: name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

Die `Window.name`-Eigenschaft
ruft den Namen des Browsing-Kontexts des Fensters ab oder setzt ihn.

## Wert

Ein String.

## Beschreibung

Der Name des Fensters wird hauptsächlich zum Festlegen von Zielen für Hyperlinks und Formulare verwendet. Browsing-Kontexte müssen keine Namen haben.

Moderne Browser setzen `Window.name` auf einen leeren String zurück, wenn ein Tab eine
Seite von einer anderen Domäne lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird (z. B. durch Auswahl der "Zurück"-Taste). Dadurch wird verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (potenziell könnte die neue Seite solche Daten auch ändern, die dann von der ursprünglichen Seite gelesen werden könnten, wenn sie neu geladen wird).

`Window.name` wurde auch in einigen Frameworks für die Bereitstellung von
Cross-Domain-Messaging als sicherere Alternative zu JSONP verwendet. Moderne Webanwendungen, die sensible Daten hosten, sollten sich jedoch nicht auf `window.name` für Cross-Domain-Messaging verlassen – das ist nicht der beabsichtigte Zweck und es gibt sicherere/bessere Wege, um Informationen zwischen Fenstern auszutauschen.
[`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
ist der empfohlene Mechanismus.

> [!NOTE] > `window.name` konvertiert alle gespeicherten Werte in deren
> String-Repräsentationen mittels der Methode `toString`.

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
