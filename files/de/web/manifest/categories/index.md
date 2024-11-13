---
title: Kategorien
slug: Web/Manifest/categories
l10n:
  sourceCommit: 5f140a8174ef528f61e8c87e2f38e3748257d9bc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `categories`-Manifestmitglied ermöglicht es Ihnen, eine oder mehrere Klassifikationen für Ihre Webanwendung festzulegen. Diese Kategorien helfen Benutzern, Ihre App in App-Stores zu entdecken.

> [!NOTE]
> Das `categories`-Mitglied ist optional, und App-Stores können unterschiedliche Werte verwenden, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
/* Single category */
"categories": ["productivity"]

/* Multiple categories */
"categories": ["productivity", "utilities", "social"]
```

### Werte

- `categories`
  - : Ein Array von durch Kommas getrennten Zeichenfolgen, wobei jede Zeichenfolge einen Kategorienamen darstellt. Die Zeichenfolgen sollten in Kleinbuchstaben geschrieben sein. Das W3C führt eine [Liste standardisierter Kategorien](https://github.com/w3c/manifest/wiki/Categories), die gängige Werte wie `business`, `education`, `entertainment`, `finance`, `games` und `productivity` umfasst.

## Beschreibung

Das `categories`-Mitglied ist ein ergänzendes Metadatum, das das Laufzeitverhalten der App oder die Darstellung in Browsern nicht beeinflusst. Seine Werte werden nur in App-Stores und anderen Distributionsplattformen verwendet und sind für Benutzer in der Browser- oder installierten App nicht sichtbar.

Wenn Ihre App mehrere Zwecke erfüllt, kann die Angabe mehrerer relevanter Kategorien Benutzern helfen, Ihre App in verschiedenen Bereichen des App-Stores zu entdecken.

Wenn `categories` nicht angegeben ist oder die angegebenen Werte nicht verwendet werden, kategorisieren App-Stores Ihre Web-App basierend auf ihrem eigenen Klassifikationssystem.

Die unten gezeigten Bilder aus dem Apple App Store zeigen, wie Kategorien in verschiedenen Teilen eines App-Stores erscheinen. Die App-Übersicht zeigt die Kategorie im Feld "CHART" (hervorgehoben) zusammen mit dem Rang der App in dieser Kategorie, und der Abschnitt Informationen zeigt "Category" als eigenes Feld (hervorgehoben).

- Die BBC-App ist als "News" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="bbc.jpeg" alt="BBC-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die News-Kategorie zu zeigen.">
    <img src="bbc-info.jpeg" alt="BBC-App-Informationsabschnitt mit dem kategorisierten Feld, rot umkreist, News zeigend.">
  </div>

- Die Weather Channel-App ist als "Weather" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="weather.jpeg" alt="Weather-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die Wetterkategorie zu zeigen">
    <img src="weather-info.jpeg" alt="Weather-App-Informationsabschnitt mit dem kategorisierten Feld, rot umkreist, Wetter zeigend">
  </div>

## Beispiele

### Kategorisierung einer Web-App zur Ernährungsplanung

Dieses Beispiel zeigt, wie man eine Web-App zur Planung von Mahlzeiten basierend auf verfügbaren Zutaten kategorisiert:

```json
{
  "name": "Meal Planner",
  "categories": ["food", "health", "lifestyle"]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Das `categories`-Manifestmitglied wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und gelistet werden, daher ist die Browser-Kompatibilität nicht anwendbar. Während Browser dieses Mitglied möglicherweise analysieren, ist es optional und beeinflusst nicht die Funktionalität oder Präsentation der App.
