---
title: Kategorien
slug: Web/Manifest/Reference/categories
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Der `categories`-Member des Manifests ermöglicht es Ihnen, eine oder mehrere Klassifikationen für Ihre Webanwendung anzugeben. Diese Kategorien helfen Benutzern, Ihre App in App-Stores zu entdecken.

> [!NOTE]
> Der `categories`-Member ist optional, und App-Stores können unterschiedliche Werte verwenden, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
/* Single category */
"categories": ["productivity"]

/* Multiple categories */
"categories": ["productivity", "utilities", "social"]
```

### Werte

- `categories`
  - : Ein Array aus durch Kommas getrennten Strings, wobei jeder String einen Kategorienamen darstellt. Die Strings sollten in Kleinbuchstaben sein. Das W3C pflegt eine [Liste standardisierter Kategorien](https://github.com/w3c/manifest/wiki/Categories), die gängige Werte wie `business`, `education`, `entertainment`, `finance`, `games` und `productivity` umfasst.

## Beschreibung

Der `categories`-Member ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Darstellung der App in Browsern nicht beeinflussen. Ihre Werte werden nur in App-Stores und anderen Vertriebsplattformen verwendet und sind für Benutzer im Browser oder in der installierten App nicht sichtbar.

Wenn Ihre App mehreren Zwecken dient, kann die Angabe mehrerer relevanter Kategorien Benutzern helfen, Ihre App in verschiedenen Bereichen des App-Stores zu entdecken.

Wenn `categories` nicht angegeben ist oder die angegebenen Werte nicht verwendet werden, kategorisieren App-Stores Ihre Webanwendung basierend auf ihrem eigenen Klassifikationssystem.

Die Bilder unten aus dem Apple App Store zeigen, wie Kategorien in verschiedenen Teilen eines App-Stores erscheinen. Die App-Übersicht zeigt die Kategorie im "CHART"-Feld (hervorgehoben) zusammen mit dem Ranking der App in dieser Kategorie, und der Informationsbereich zeigt "Kategorie" als eigenes Feld an (hervorgehoben).

- Die BBC-App ist als "News" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="bbc.jpeg" alt="BBC App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die News-Kategorie zu zeigen.">
    <img src="bbc-info.jpeg" alt="Informationsbereich der BBC-App mit dem Feld Kategorie rot umkreist, das News anzeigt.">
  </div>

- Die Weather Channel App ist als "Weather" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="weather.jpeg" alt="Übersicht der Wetter-App im Apple App Store. CHART-Feld ist rot umkreist, um die Weather-Kategorie zu zeigen.">
    <img src="weather-info.jpeg" alt="Informationsbereich der Wetter-App mit dem Feld Kategorie rot umkreist, das Weather anzeigt.">
  </div>

## Beispiele

### Kategorisierung einer Essensplanungs-Webanwendung

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

Der `categories`-Member des Manifests wird von App-Stores verwendet, wenn Webanwendungen veröffentlicht und gelistet werden. Daher ist die Browser-Kompatibilität nicht anwendbar. Während Browser diesen Member parsen können, ist er optional und beeinflusst nicht die Funktionalität oder Darstellung der App.
