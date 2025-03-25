---
title: short_name
slug: Web/Progressive_web_apps/Manifest/Reference/short_name
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `short_name`-Manifestglied wird verwendet, um einen Kurznamen für Ihre Webanwendung anzugeben. Dieser kann verwendet werden, wenn der vollständige [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) zu lang für den verfügbaren Platz ist.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Werte

- `short_name`
  - : Ein String, der eine kurze Version des `name` Ihrer Web-App angibt.

## Beschreibung

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) verwenden, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen, wie z.B. auf dem Startbildschirm eines Geräts, im Anwendungsschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte bei der Auswahl eines Kurznamens für Ihre Web-App:

- Er sollte eine prägnante Version des `name` Ihrer App sein.
- Auch bei Kürze sollte er erkennbar und bedeutungsvoll sein.
- Berücksichtigen Sie, wie er in platzbeschränkten Kontexten erscheinen wird.
- Folgen Sie denselben Richtlinien für kulturelle Sensibilität und Markenschutz wie beim `name`.

## Beispiele

### Hinzufügen eines Kurznamens für Ihre Web-App

Betrachten Sie eine Web-App, die Benutzern hilft, ihre Wanderabenteuer zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

Der kürzere Name der App, `TrailNav`, ist prägnant und eignet sich für Kontexte mit begrenztem Platz. Er behält die Verbindung zum vollständigen Namen der App bei und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)-Manifestglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Webanwendung installierbar zu machen
