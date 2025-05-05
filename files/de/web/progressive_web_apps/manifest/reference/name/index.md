---
title: name
slug: Web/Progressive_web_apps/Manifest/Reference/name
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `name` Manifestmitglied wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, wie er normalerweise Benutzern angezeigt wird, beispielsweise in Anwendungslisten oder als Beschriftung für das Symbol Ihrer Anwendung.

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

Das `name` Manifestmitglied dient als {{Glossary("Accessible_name", "zugänglicher Name")}} für Ihre installierte App. Es wird Benutzern in verschiedenen Kontexten angezeigt, z.B. in einer Liste anderer installierter Web-Apps, als Beschriftung für das App-Symbol oder im Anwendungsumschalter oder Task-Manager.

In platzbeschränkten Kontexten, in denen der vollständige `name` nicht passt, wie auf dem Startbildschirm eines Geräts oder im Anwendungsumschalter, kann stattdessen der Wert der [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) Eigenschaft (wenn definiert) verwendet werden.

### Beste Praktiken für die Benennung Ihrer Web-App

Berücksichtigen Sie die folgenden Faktoren bei der Auswahl eines Namens für Ihre Web-App:

- Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` bereitstellen
- Wie gut er den Zweck oder die Natur Ihrer App angibt
- Ob er klar und leicht zu verstehen und zu merken ist
- Wie er in verschiedenen Kontexten erscheint, z.B. in App-Listen oder auf dem Startbildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihre Zielgruppe
- Wie gut er in verschiedenen Sprachen übersetzt wird oder wahrgenommen wird, wenn Ihre App auf ein globales Publikum abzielt
- Potenzielle Markenrechtskonflikte

## Beispiele

### Hinzufügen eines Namens für Ihre Web-App

Für eine Web-App, die Benutzern hilft, Wege zu navigieren und ihre Wanderabenteuer zu planen, könnten Sie dem App-Manifest den folgenden `name` hinzufügen:

```json
"name": "Trail Navigator"
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht zu lesen und zu merken und wird wahrscheinlich von einem breiten Publikum verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten leicht verstehen könnten.

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

- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
