---
title: name
slug: Web/Progressive_web_apps/Manifest/Reference/name
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Der `name`-Manifest-Eintrag wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, wie er in der Regel den Nutzern angezeigt wird, z. B. in Anwendungslisten oder als Beschriftung für das Anwendungs-Icon.

## Syntax

```json-nolint
/* Full names of web apps */
"name": "Daily Task Planner"
"name": "Recipe and Pantry Tracker"
```

### Werte

- `name`
  - : Ein String, der den vollständigen Namen Ihrer Web-App angibt.

## Beschreibung

Der `name`-Manifest-Eintrag dient als {{Glossary("Accessible_name", "zugänglicher Name")}} für Ihre installierte App. Er wird Nutzern in verschiedenen Kontexten angezeigt, wie z. B. in einer Liste anderer installierter Web-Apps, als Beschriftung für das Icon Ihrer App oder im Anwendungswechsel oder Task-Manager.

In räumlich eingeschränkten Kontexten, in denen der vollständige `name` möglicherweise nicht passt, wie z. B. auf dem Home-Bildschirm eines Geräts oder im Anwendungswechsel, kann stattdessen der Wert der [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)-Eigenschaft (falls definiert) verwendet werden.

### Beste Praktiken für die Namensgebung Ihrer Web-App

Berücksichtigen Sie beim Auswählen eines Namens für Ihre Web-App die folgenden Faktoren:

- Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` angeben
- Wie gut er den Zweck oder die Art Ihrer App angibt
- Ob er klar, verständlich und leicht merkbar ist
- Wie er in verschiedenen Kontexten erscheint, z. B. in App-Listen oder auf dem Home-Bildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihr Zielpublikum
- Wie gut er übersetzt oder in verschiedenen Sprachen wahrgenommen wird, wenn Ihre App ein globales Publikum anspricht
- Potenzielle Markenrechtskonflikte

## Beispiele

### Hinzufügen eines Namens für Ihre Web-App

Für eine Web-App, die Nutzern hilft, Wanderwege zu navigieren und ihre Wanderausflüge zu planen, könnten Sie den folgenden `name` zum App-Manifest hinzufügen:

```json
{
  "name": "Trail Navigator"
}
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht lesbar und merkbar und wird wahrscheinlich von einem breiten Publikum verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten leicht nachvollziehen können.

Falls gewünscht, können Sie auch einen `short_name` hinzufügen:

```json
{
  "name": "Trail Navigator",
  "short_name": "TrailNav"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) Manifest-Eintrag
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
