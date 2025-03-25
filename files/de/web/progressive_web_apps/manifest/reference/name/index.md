---
title: name
slug: Web/Progressive_web_apps/Manifest/Reference/name
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `name`-Manifestmitglied wird verwendet, um den vollständigen Namen Ihrer Webanwendung anzugeben, wie er normalerweise den Benutzern angezeigt wird, z.B. in Anwendungslisten oder als Beschriftung für das Symbol Ihrer Anwendung.

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

Das `name`-Manifestmitglied dient als {{Glossary("Accessible_name", "zugänglicher Name")}} für Ihre installierte App. Es wird den Benutzern in verschiedenen Kontexten angezeigt, wie in einer Liste von anderen installierten Web-Apps, als Beschriftung für das Symbol Ihrer App oder im Anwendungsschalter oder Task-Manager.

In platzbeschränkten Kontexten, in denen der vollständige `name` möglicherweise nicht passt, wie auf dem Startbildschirm eines Geräts oder im Anwendungsschalter, kann stattdessen der Wert der Eigenschaft [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) (falls definiert) verwendet werden.

### Beste Praktiken zur Benennung Ihrer Web-App

Berücksichtigen Sie die folgenden Faktoren, wenn Sie einen Namen für Ihre Web-App auswählen:

- Die Länge des Namens, insbesondere wenn Sie keinen separaten `short_name` angeben
- Wie gut er den Zweck oder die Natur Ihrer App angibt
- Ob er klar und einfach zu verstehen und zu merken ist
- Wie er in verschiedenen Kontexten erscheint, wie in App-Listen oder auf dem Startbildschirm
- Wie leicht er sich von anderen ähnlichen Apps unterscheiden lässt
- Kulturelle Sensibilität und Angemessenheit für Ihre Zielgruppe
- Wie gut er sich übersetzt oder in verschiedenen Sprachen wahrgenommen wird, wenn Ihre App ein globales Publikum ansprechen soll
- Potenzielle Markenrechtskonflikte

## Beispiele

### Hinzufügen eines Namens für Ihre Web-App

Für eine Web-App, die Benutzern hilft, Wanderwege zu navigieren und ihre Wanderabenteuer zu planen, könnten Sie das folgende `name` dem App-Manifest hinzufügen:

```json
"name": "Trail Navigator"
```

Der App-Name `Trail Navigator` beschreibt effektiv den Zweck der App, ist leicht zu lesen und zu merken und wird von einem breiten Publikum wahrscheinlich verstanden. Er verwendet vertraute Begriffe, die Outdoor-Enthusiasten sofort verstehen könnten.

Wenn Sie möchten, können Sie auch ein `short_name` hinzufügen:

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installation Ihrer Web-App
