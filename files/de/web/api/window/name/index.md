---
title: "Window: name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Die `Window.name`-Eigenschaft ruft den Namen des Browsing-Kontextes des Fensters ab oder setzt ihn.

## Wert

Ein String.

## Beschreibung

Der Name des Fensters wird hauptsächlich verwendet, um Ziele für Hyperlinks und Formulare festzulegen. Browsing-Kontexte müssen keine Namen haben.

Moderne Browser setzen `Window.name` auf einen leeren String zurück, wenn ein Tab eine Seite von einer anderen Domäne lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird (z.B. durch Auswahl der "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (potenziell könnte die neue Seite solche Daten auch ändern, die dann von der ursprünglichen Seite gelesen werden könnten, wenn sie neu geladen wird).

`Window.name` wurde auch in einigen Frameworks für die Bereitstellung von
Cross-Domain-Messaging als sicherere Alternative zu JSONP verwendet. Moderne Webanwendungen, die sensible Daten hosten, sollten jedoch nicht auf `window.name` für Cross-Domain-Messaging vertrauen — das ist nicht der beabsichtigte Zweck und es gibt sicherere/bessere Möglichkeiten, Informationen zwischen Fenstern zu teilen. [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) ist der empfohlene Mechanismus.

> **Hinweis:** `window.name` konvertiert alle gespeicherten Werte in deren String-Darstellung mittels der `toString`-Methode.

## Beispiele

```html
<script>
  // Open a tab with a specific browsing context name
  const otherTab = window.open("url1", "_blank");
  if (otherTab) otherTab.name = "other-tab";
</script>
<a href="url2" target="other-tab">This link will be opened in the other tab.</a>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
