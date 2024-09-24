---
title: "Fenster: name-Eigenschaft"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die `Window.name` Eigenschaft
ermöglicht das Abrufen/Setzen des Namens des Browsing-Kontextes des Fensters.

## Wert

Ein Zeichenkette.

## Beschreibung

Der Name des Fensters wird hauptsächlich zum Setzen von Zielen für Hyperlinks und Formulare verwendet.
Browsing-Kontexte müssen keine Namen besitzen.

Moderne Browser setzen `Window.name` auf eine leere Zeichenkette zurück, wenn ein Tab eine
Seite von einer anderen Domain lädt, und stellen den Namen wieder her, wenn die ursprüngliche Seite neu geladen wird
(z. B. durch Auswahl der Schaltfläche "Zurück"). Dies verhindert, dass eine unzuverlässige Seite auf
Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (möglicherweise
könnte die neue Seite solche Daten auch ändern, die dann von der ursprünglichen Seite
gelesen werden könnten, wenn sie neu geladen wird).

`Window.name` wurde auch in einigen Frameworks verwendet, um
Cross-Domain-Messaging
bereitzustellen als eine sicherere Alternative zu JSONP. Moderne Webanwendungen, die sensible Daten hosten,
sollten jedoch nicht auf `window.name` für Cross-Domain-Messaging vertrauen — das
ist nicht der beabsichtigte Zweck und es gibt sicherere/bessere Methoden, Informationen
zwischen Fenstern auszutauschen.
[`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
ist der empfohlene Mechanismus.

> **Note:** `window.name` konvertiert alle gespeicherten Werte in ihre
> Zeichenkettenrepräsentationen unter Verwendung der `toString` Methode.

## Beispiele

```html
<script>
  // Öffnen Sie ein Tab mit einem bestimmten Browsing-Kontextnamen
  const otherTab = window.open("url1", "_blank");
  if (otherTab) otherTab.name = "other-tab";
</script>
<a href="url2" target="other-tab">Dieser Link wird im anderen Tab geöffnet.</a>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
