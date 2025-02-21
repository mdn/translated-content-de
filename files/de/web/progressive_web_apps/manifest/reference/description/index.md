---
title: Beschreibung
slug: Web/Progressive_web_apps/Manifest/Reference/description
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `description`-Manifestmitglied wird verwendet, um die Kernfunktionen oder die Funktionalität Ihrer Webanwendung zu erläutern. Dieser Text hilft den Benutzern, den Zweck Ihrer App zu verstehen, wenn sie diese in einem App-Store ansehen.

> [!NOTE]
> Das `description`-Mitglied ist optional, und App-Stores verwenden diesen Text möglicherweise nicht, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
"description": "Track your daily tasks and plan your projects efficiently."
```

### Werte

- `description`
  - : Eine Zeichenfolge, die Ihre Web-App beschreibt.

## Beschreibung

Das `description`-Mitglied ist ergänzende Metadaten, die weder das Laufzeitverhalten der App noch die Darstellung der App in Browsern beeinflussen. Sein Wert wird in App-Stores und anderen Vertriebsplattformen verwendet, um den Benutzern zu helfen, zu verstehen, was Ihre App macht. Zusätzlich wird eine barrierefreie Beschreibung Ihrer installierten App bereitgestellt.

## Beispiele

### Hinzufügen einer Beschreibung für eine Essensplanungs-Web-App

Einfache `description` in Links-nach-Rechts-Sprache:

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
