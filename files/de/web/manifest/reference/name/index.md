---
title: name
slug: Web/Manifest/Reference/name
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `name`-Manifestmitglied wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, so wie er Benutzern normalerweise angezeigt wird, beispielsweise in Anwendungslisten oder als Beschriftung für das Anwendungs-Icon.

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

Das `name`-Manifestmitglied dient als {{Glossary("Accessible_name", "zugänglicher Name")}} für Ihre installierte App. Es wird Benutzern in verschiedenen Kontexten angezeigt, z. B. in einer Liste anderer installierter Web-Apps, als Beschriftung für das App-Icon oder im Anwendungsumschalter oder Task-Manager.

In Kontexten mit wenig Platz, in denen der vollständige `name` möglicherweise nicht passt, wie auf dem Startbildschirm eines Geräts oder im Anwendungsumschalter, kann stattdessen der Wert der [`short_name`](/de/docs/Web/Manifest/Reference/short_name)-Eigenschaft (falls definiert) verwendet werden.

### Beste Praktiken für die Benennung Ihrer Web-App

Berücksichtigen Sie die folgenden Faktoren bei der Auswahl eines Namens für Ihre Web-App:

- Die Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` bereitstellen
- Wie gut er den Zweck oder die Art Ihrer App angibt
- Ob der Name klar, leicht verständlich und erinnerungsfreundlich ist
- Wie er in verschiedenen Kontexten erscheint, z. B. in App-Listen oder auf dem Startbildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihre Zielgruppe
- Wie gut er sich übersetzen lässt oder in verschiedenen Sprachen wahrgenommen wird, wenn Ihre App auf ein globales Publikum abzielt
- Potenzielle Markenrechtskonflikte

## Beispiele

### Einen Namen für Ihre Web-App hinzufügen

Für eine Web-App, die Benutzern hilft, Wanderwege zu navigieren und ihre Wanderabenteuer zu planen, könnten Sie das folgende `name` dem App-Manifest hinzufügen:

```json
"name": "Trail Navigator"
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht zu lesen und zu merken und wird wahrscheinlich von einem breiten Publikum verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten leicht verstehen könnten.

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

- [`short_name`](/de/docs/Web/Manifest/Reference/short_name) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
