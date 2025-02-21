---
title: short_name
slug: Web/Progressive_web_apps/Manifest/Reference/short_name
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `short_name`-Manifestmitglied wird verwendet, um einen kurzen Namen für Ihre Webanwendung anzugeben, der verwendet werden kann, wenn der vollständige [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) zu lang für den verfügbaren Platz ist.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Werte

- `short_name`
  - : Ein String, der eine kurze Version des [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) Ihrer Web-App angibt.

## Beschreibung

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) verwenden, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen, wie auf dem Startbildschirm eines Geräts, im Anwendungsschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte bei der Auswahl eines Kurznamens für Ihre Web-App:

- Es sollte eine prägnante Version des `name` Ihrer App sein.
- Während Sie Kürze anstreben, sollte es dennoch erkennbar und bedeutungsvoll sein.
- Überlegen Sie, wie es in platzbeschränkten Kontexten erscheinen wird.
- Befolgen Sie dieselben Richtlinien für kulturelle Sensibilität und Markenzeichen wie für den `name`.

## Beispiele

### Hinzufügen eines Kurznamens für Ihre Web-App

Betrachten Sie eine Web-App, die Benutzern hilft, ihre Wanderabenteuer zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

Der kürzere Name der App `TrailNav` ist prägnant und eignet sich für platzbeschränkte Kontexte. Es behält eine Verbindung zum vollständigen Namen der App bei und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
