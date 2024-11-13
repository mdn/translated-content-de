---
title: Beschreibung
slug: Web/Manifest/description
l10n:
  sourceCommit: 5f140a8174ef528f61e8c87e2f38e3748257d9bc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `description`-Manifestmitglied wird verwendet, um die Kernfunktionen oder die Funktionalität Ihrer Webanwendung zu erklären. Dieser Text hilft Benutzern, den Zweck Ihrer App zu verstehen, wenn sie in einem App-Store angezeigt wird.

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

Das `description`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder wie Browser die App präsentieren, nicht beeinflussen. Sein Wert wird in App-Stores und anderen Distributionsplattformen verwendet, um Benutzern zu helfen, zu verstehen, was Ihre App tut. Darüber hinaus bietet es eine zugängliche Beschreibung Ihrer installierten App.

## Beispiele

### Hinzufügen einer Beschreibung für eine Ernährungsplaner-Web-App

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
