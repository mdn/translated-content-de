---
title: short_name
slug: Web/Manifest/short_name
l10n:
  sourceCommit: 5d4cc96f432d408b898dbdc8f39f1cab36d3af59
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `short_name` Manifestmitglied wird verwendet, um einen kurzen Namen für Ihre Webanwendung anzugeben. Dieser kann genutzt werden, wenn der vollständige [`name`](/de/docs/Web/Manifest/name) für den verfügbaren Platz zu lang ist.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Werte

- `short_name`
  - : Ein String, der eine kurze Version des [`name`](/de/docs/Web/Manifest/name) Ihrer Web-App angibt.

## Beschreibung

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Manifest/name) verwenden, wenn nicht genügend Platz zur Anzeige des vollständigen Namens vorhanden ist, wie z.B. auf dem Startbildschirm eines Geräts, im Anwendungsschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte bei der Auswahl eines kurzen Namens für Ihre Web-App:

- Er sollte eine prägnante Version des `name` Ihrer App sein.
- Während Sie auf Kürze achten, sollte er dennoch erkennbar und sinnvoll sein.
- Überlegen Sie, wie er in platzbeschränkten Kontexten erscheinen wird.
- Beachten Sie dieselben Richtlinien für kulturelle Sensibilität und Markenzeichen wie für `name`.

## Beispiele

### Hinzufügen eines kurzen Namens für Ihre Web-App

Betrachten Sie eine Web-App, die Benutzern hilft, ihre Wanderabenteuer zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

Der kürzere Name der App `TrailNav` ist prägnant und für platzbegrenzte Kontexte geeignet. Er hält die Verbindung zum vollständigen Namen der App aufrecht und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Manifest/name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zum Installierbar-Machen Ihrer Web-App
