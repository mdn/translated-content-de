---
title: Beschreibung
slug: Web/Manifest/Reference/description
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `description`-Manifest-Mitglied wird verwendet, um die Kernfunktionen oder -möglichkeiten Ihrer Webanwendung zu erklären. Dieser Text hilft den Nutzern, den Zweck Ihrer App zu verstehen, wenn sie diese in einem App-Store betrachten.

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

Das `description`-Mitglied ist ergänzende Metadaten, die weder das Laufzeitverhalten der App beeinflussen noch die Art und Weise, wie Browser die App präsentieren. Sein Wert wird in App-Stores und anderen Distributionsplattformen verwendet, um Nutzern zu helfen, zu verstehen, was Ihre App macht. Zusätzlich bietet es eine zugängliche Beschreibung Ihrer installierten App.

## Beispiele

### Hinzufügen einer Beschreibung für eine Web-App zur Mahlzeitenplanung

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
