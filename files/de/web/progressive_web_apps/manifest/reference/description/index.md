---
title: Beschreibung
slug: Web/Progressive_web_apps/Manifest/Reference/description
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `description`-Manifestmitglied wird verwendet, um die Kernfunktionen oder die Funktionalität Ihrer Webanwendung zu erläutern.
Dieser Text hilft den Nutzern, den Zweck Ihrer App zu verstehen, wenn sie diese in einem App-Store betrachten.

> [!NOTE]
> Das `description`-Mitglied ist optional, und App-Stores verwenden diesen Text möglicherweise nicht, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
"description": "Track your daily tasks and plan your projects efficiently."
```

### Werte

- `description`
  - : Ein String, der Ihre Web-App beschreibt.

## Beschreibung

Das `description`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Darstellung durch Browser nicht beeinflussen.
Sein Wert wird in App-Stores und anderen Vertriebsplattformen verwendet, um den Nutzern zu verdeutlichen, was Ihre App macht.
Zusätzlich bietet es eine zugängliche Beschreibung Ihrer installierten App.

## Beispiele

### Hinzufügen einer Beschreibung für eine Mahlzeitenplanungs-Web-App

Einfache `description` in einer von links nach rechts verlaufenden Sprache:

```json
{
  "name": "Meal Planner",
  "description": "Plan your weekly meals and automatically generate shopping lists. Track nutrition and discover recipes."
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
