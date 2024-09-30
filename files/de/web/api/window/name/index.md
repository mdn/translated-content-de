---
title: "Window: name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die `Window.name`-Eigenschaft
setzt/holt den Namen des Browsing-Kontexts des Fensters.

## Wert

Ein String.

## Beschreibung

Der Name des Fensters wird hauptsächlich verwendet, um Ziele für Hyperlinks und Formulare festzulegen.
Browsing-Kontexte müssen keine Namen haben.

Moderne Browser setzen `Window.name` auf einen leeren String zurück, wenn ein Tab eine Seite von einer anderen Domain lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird (z.B. durch Auswahl der "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (potenziell könnte die neue Seite solche Daten auch ändern, die dann von der ursprünglichen Seite gelesen werden könnten, falls sie neu geladen wird).

`Window.name` wurde auch in einigen Frameworks verwendet, um eine domänenübergreifende Nachrichtenübermittlung bereitzustellen, als eine sicherere Alternative zu JSONP. Moderne Webanwendungen, die sensible Daten hosten, sollten sich jedoch nicht auf `window.name` für die domänenübergreifende Nachrichtenübermittlung verlassen — das ist nicht der beabsichtigte Zweck, und es gibt sicherere/bessere Möglichkeiten, Informationen zwischen Fenstern zu teilen.
[`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
ist der empfohlene Mechanismus.

> **Note:** `window.name` konvertiert alle gespeicherten Werte in ihre
> Zeichenkettenrepräsentationen unter Verwendung der `toString`-Methode.

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
