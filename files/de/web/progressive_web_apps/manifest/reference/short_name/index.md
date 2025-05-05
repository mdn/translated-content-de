---
title: short_name
slug: Web/Progressive_web_apps/Manifest/Reference/short_name
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `short_name`-Manifestmitglied wird verwendet, um einen kurzen Namen für Ihre Webanwendung anzugeben, der verwendet werden kann, wenn der vollständige [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) zu lang für den verfügbaren Platz ist.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Werte

- `short_name`
  - : Ein String, der eine kurze Version des [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) Ihrer Webanwendung angibt.

## Beschreibung

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) verwenden, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen, beispielsweise auf dem Startbildschirm eines Geräts, im Anwendungsumschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte, wenn Sie einen kurzen Namen für Ihre Webanwendung auswählen:

- Er sollte eine prägnante Version des `name` Ihrer Anwendung sein.
- Obwohl er kurz sein sollte, sollte er dennoch erkennbar und sinnvoll sein.
- Überlegen Sie, wie er in platzbeschränkten Kontexten erscheinen wird.
- Befolgen Sie die gleichen Richtlinien für kulturelle Sensibilität und Markenrecht wie für `name`.

## Beispiele

### Hinzufügen eines kurzen Namens für Ihre Webanwendung

Betrachten Sie eine Webanwendung, die Benutzern hilft, ihre Wanderabenteuer zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

Der kürzere Name der App `TrailNav` ist prägnant und eignet sich für kontextbedingte Einschränkungen. Er behält die Verbindung zum vollständigen Namen der App bei und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Webanwendung installierbar zu machen
