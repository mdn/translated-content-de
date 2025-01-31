---
title: short_name
slug: Web/Manifest/Reference/short_name
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `short_name`-Manifestmitglied wird verwendet, um einen kurzen Namen für Ihre Webanwendung anzugeben, der verwendet werden kann, wenn der vollständige [`name`](/de/docs/Web/Manifest/Reference/name) zu lang für den verfügbaren Platz ist.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Werte

- `short_name`
  - : Ein String, der eine kurze Version des [`name`](/de/docs/Web/Manifest/Reference/name) Ihrer Webanwendung angibt.

## Beschreibung

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Manifest/Reference/name) verwenden, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen, z. B. auf dem Startbildschirm eines Geräts, im Anwendungsumschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte bei der Auswahl eines kurzen Namens für Ihre Webanwendung:

- Er sollte eine prägnante Version des `name` Ihrer App sein.
- Er sollte trotz Kürze erkennbar und bedeutungsvoll sein.
- Überlegen Sie, wie er in platzbeschränkten Kontexten erscheinen wird.
- Befolgen Sie die gleichen Richtlinien für kulturelle Sensibilität und Markenzeichen wie für `name`.

## Beispiele

### Einen kurzen Namen für Ihre Webanwendung hinzufügen

Betrachten Sie eine Webanwendung, die Nutzern hilft, ihre Wanderabenteuer zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

Der kürzere Name der App `TrailNav` ist prägnant und geeignet für kontextbezogene begrenzte Platzverhältnisse. Er bleibt mit dem vollständigen Namen der App verbunden und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Manifest/Reference/name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
