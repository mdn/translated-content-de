---
title: Kategorien
slug: Web/Progressive_web_apps/Manifest/Reference/categories
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das Manifest-Mitglied `categories` ermöglicht es Ihnen, eine oder mehrere Klassifikationen für Ihre Webanwendung anzugeben.
Diese Kategorien helfen Benutzern, Ihre App in App-Stores zu entdecken.

> [!NOTE]
> Das `categories`-Mitglied ist optional, und App-Stores können beim Präsentieren Ihrer App andere Werte verwenden.

## Syntax

```json-nolint
/* Single category */
"categories": ["productivity"]

/* Multiple categories */
"categories": ["productivity", "utilities", "social"]
```

### Werte

- `categories`
  - : Ein Array von durch Kommas getrennten Zeichenfolgen, wobei jede Zeichenfolge einen Kategorienamen darstellt.
    Die Zeichenfolgen sollten klein geschrieben sein.
    Das W3C führt eine [Liste standardisierter Kategorien](https://github.com/w3c/manifest/wiki/Categories), die übliche Werte wie `business`, `education`, `entertainment`, `finance`, `games` und `productivity` beinhaltet.

## Beschreibung

Das `categories`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Darstellung durch Browser nicht beeinflussen.
Seine Werte werden nur in App-Stores und anderen Vertriebsplattformen verwendet und sind für Benutzer im Browser oder in der installierten App nicht sichtbar.

Wenn Ihre App mehrere Zwecke erfüllt, kann das Angeben mehrerer relevanter Kategorien Benutzern helfen, Ihre App in verschiedenen Abschnitten des App-Stores zu finden.

Wenn `categories` nicht angegeben ist oder die angegebenen Werte nicht verwendet werden, kategorisieren App-Stores Ihre Webanwendung basierend auf ihrem eigenen Klassifizierungssystem.

Die nachstehenden Bilder aus dem Apple App Store zeigen, wie Kategorien in verschiedenen Teilen eines App-Stores erscheinen.
Die App-Übersicht zeigt die Kategorie im "CHART"-Feld (hervorgehoben) zusammen mit der Rangliste der App in dieser Kategorie, und der Informationsbereich zeigt "Category" als eigenes Feld (hervorgehoben).

- Die BBC-App ist als "News" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="bbc.jpeg" alt="BBC-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die Kategorie News zu zeigen.">
    <img src="bbc-info.jpeg" alt="BBC-App-Informationsbereich mit im Rotkreis hervorgehobenem Category-Feld, das News zeigt.">
  </div>

- Die Weather Channel-App ist als "Weather" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="weather.jpeg" alt="Weather-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die Kategorie Weather zu zeigen">
    <img src="weather-info.jpeg" alt="Weather-App-Informationsbereich mit im Rotkreis hervorgehobenem Category-Feld, das Weather zeigt">
  </div>

## Beispiele

### Kategorisierung einer Meal-Planning-Webanwendung

Dieses Beispiel zeigt, wie eine Webanwendung zur Planung von Mahlzeiten basierend auf verfügbaren Zutaten kategorisiert werden kann:

```json
{
  "name": "Meal Planner",
  "categories": ["food", "health", "lifestyle"]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Das Manifest-Mitglied `categories` wird von App-Stores beim Veröffentlichen und Auflisten von Web-Apps verwendet, daher ist die Browser-Kompatibilität nicht anwendbar.
Obwohl Browser dieses Mitglied analysieren können, ist es optional und beeinflusst die Funktionalität oder Präsentation der App nicht.
