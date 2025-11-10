---
title: Beschreibung
slug: Web/Progressive_web_apps/Manifest/Reference/description
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `description`-Manifestmitglied wird verwendet, um die Kernfunktionen oder die Funktionsweise Ihrer Webanwendung zu erläutern. Dieser Text hilft Benutzern, den Zweck Ihrer App zu verstehen, wenn sie diese in einem App-Store betrachten.

> [!NOTE]
> Das `description`-Mitglied ist optional, und App-Stores müssen diesen Text möglicherweise nicht verwenden, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
"description": "Track your daily tasks and plan your projects efficiently."
```

### Werte

- `description`
  - : Ein String, der Ihre Web-App beschreibt.

## Beschreibung

Das `description`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Präsentation in Browsern nicht beeinflussen. Sein Wert wird in App-Stores und anderen Vertriebsplattformen verwendet, um Benutzern zu helfen zu verstehen, was Ihre App tut. Zusätzlich bietet es eine zugängliche Beschreibung Ihrer installierten App.

## Beispiele

### Hinzufügen einer Beschreibung für eine Menüplanungs-Web-App

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
