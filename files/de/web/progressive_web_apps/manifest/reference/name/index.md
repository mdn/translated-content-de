---
title: name
slug: Web/Progressive_web_apps/Manifest/Reference/name
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `name` Manifest-Mitglied wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, wie er normalerweise Benutzern angezeigt wird, z. B. in Anwendungslisten oder als Beschriftung für das Symbol Ihrer Anwendung.

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

Das `name` Manifest-Mitglied dient als {{Glossary("Accessible_name", "accessible name")}} für Ihre installierte App. Es wird Benutzern in verschiedenen Kontexten angezeigt, wie z. B. in einer Liste anderer installierter Web-Apps, als Beschriftung für das App-Symbol oder im Anwendungsumschalter oder Task-Manager.

In platzbeschränkten Kontexten, in denen der vollständige `name` möglicherweise nicht passt, wie z. B. auf dem Startbildschirm eines Geräts oder im Anwendungsumschalter, kann stattdessen der Wert der [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)-Eigenschaft verwendet werden, falls definiert.

### Beste Praktiken für die Benennung Ihrer Web-App

Berücksichtigen Sie die folgenden Faktoren bei der Auswahl eines Namens für Ihre Web-App:

- Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` bereitstellen
- Wie gut er den Zweck oder die Natur Ihrer App angibt
- Ob er klar und leicht zu verstehen und zu merken ist
- Wie er in verschiedenen Kontexten erscheint, z. B. in App-Listen oder auf dem Startbildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihre Zielgruppe
- Wie gut er in verschiedenen Sprachen übersetzt oder wahrgenommen wird, wenn Ihre App global ausgerichtet ist
- Potentielle Markenrechtskonflikte

## Beispiele

### Einen Namen für Ihre Web-App hinzufügen

Für eine Web-App, die Benutzern hilft, Wanderwege zu navigieren und ihre Wanderabenteuer zu planen, könnten Sie das folgende `name` dem App-Manifest hinzufügen:

```json
"name": "Trail Navigator"
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht zu lesen und zu merken und wird wahrscheinlich von einem breiten Publikum verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten bereit nachvollziehen können.

Falls gewünscht, können Sie auch einen `short_name` hinzufügen:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) Manifest-Mitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) um Ihre Web-App installierbar zu machen
