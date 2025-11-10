---
title: short_name
slug: Web/Progressive_web_apps/Manifest/Reference/short_name
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Der `short_name`-Manifest-Eintrag wird verwendet, um einen kurzen Namen für Ihre Webanwendung festzulegen, der möglicherweise verwendet wird, wenn der vollständige [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) zu lang für den verfügbaren Platz ist.

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

Browser können `short_name` anstelle von [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) verwenden, wenn nicht genug Platz vorhanden ist, um den vollständigen Namen anzuzeigen, wie beispielsweise auf dem Startbildschirm eines Geräts, im Anwendungs-Umschalter oder in anderen platzbeschränkten Kontexten.

Beachten Sie die folgenden Punkte, wenn Sie einen kurzen Namen für Ihre Web-App auswählen:

- Er sollte eine prägnante Version des `name` Ihrer App sein.
- Er sollte trotz Kürze erkennbar und bedeutungsvoll sein.
- Berücksichtigen Sie, wie er in platzbeschränkten Kontexten erscheinen wird.
- Beachten Sie dieselben Richtlinien für kulturelle Sensibilität und Markenrecht wie für `name`.

## Beispiele

### Einen kurzen Namen für Ihre Web-App hinzufügen

Betrachten Sie eine Web-App, die Benutzern hilft, ihre Wanderungen zu planen und zu protokollieren. Der `name` wurde als `Trail Navigator` definiert. Ein `short_name` kann dem Manifest wie folgt hinzugefügt werden:

```json
{
  "name": "Trail Navigator",
  "short_name": "TrailNav"
}
```

Der kürzere Name der App `TrailNav` ist prägnant und eignet sich für kontextspezifisch beschränkten Raum. Er behält eine Verbindung zum vollständigen Namen der App und ist leicht zu merken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) Manifest-Eintrag
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installation Ihrer Web-App
