---
title: name
slug: Web/Manifest/name
l10n:
  sourceCommit: 5d4cc96f432d408b898dbdc8f39f1cab36d3af59
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `name`-Manifest-Element wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, wie er den Benutzern in der Regel angezeigt wird, zum Beispiel in Anwendungslisten oder als Beschriftung für das Symbol Ihrer Anwendung.

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

Das `name`-Manifest-Element dient als {{Glossary("Accessible_name", "zugänglicher Name")}} für Ihre installierte App. Es wird Benutzern in verschiedenen Kontexten angezeigt, wie in einer Liste anderer installierter Web-Apps, als Beschriftung für das Symbol Ihrer App oder im Anwendungswechseler oder Task-Manager.

In kontextbezogenen Situationen, in denen der vollständige `name` möglicherweise nicht passt, zum Beispiel auf dem Startbildschirm eines Geräts oder im Anwendungswechseler, kann stattdessen der Wert der [`short_name`](/de/docs/Web/Manifest/short_name)-Eigenschaft (falls definiert) verwendet werden.

### Beste Praktiken zur Namensgebung Ihrer Web-App

Berücksichtigen Sie folgende Faktoren, wenn Sie einen Namen für Ihre Web-App wählen:

- Die Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` bereitstellen
- Wie gut der Name den Zweck oder die Art Ihrer App anzeigt
- Ob er klar, verständlich und leicht zu merken ist
- Wie er in verschiedenen Kontexten erscheint, wie in App-Listen oder auf dem Startbildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihre Zielgruppe
- Wie gut er sich in verschiedene Sprachen übersetzen lässt oder wahrgenommen wird, wenn Ihre App eine globale Zielgruppe hat
- Potenzielle Markenrechtskonflikte

## Beispiele

### Einen Namen für Ihre Web-App hinzufügen

Für eine Web-App, die Benutzern hilft, Wege zu navigieren und ihre Wanderabenteuer zu planen, könnten Sie den folgenden `name` dem App-Manifest hinzufügen:

```json
"name": "Trail Navigator"
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht zu lesen und zu merken und wird wahrscheinlich von einem breiten Publikum verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten leicht verstehen können.

Wenn Sie möchten, können Sie auch einen `short_name` hinzufügen:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`short_name`](/de/docs/Web/Manifest/short_name) Manifest-Element
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zur Installierbarkeit Ihrer Web-App
