---
title: Kategorien
slug: Web/Progressive_web_apps/Manifest/Reference/categories
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `categories`-Manifestmitglied ermöglicht es Ihnen, eine oder mehrere Klassifikationen für Ihre Webanwendung anzugeben. Diese Kategorien helfen Benutzern, Ihre App in App-Stores zu entdecken.

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
  - : Ein Array mit durch Kommas getrennten Zeichenfolgen, wobei jede Zeichenfolge einen Kategorienamen darstellt. Die Zeichenfolgen sollten in Kleinbuchstaben geschrieben werden. Das W3C führt eine [Liste standardisierter Kategorien](https://github.com/w3c/manifest/wiki/Categories), welche häufige Werte wie `business`, `education`, `entertainment`, `finance`, `games` und `productivity` enthält.

## Beschreibung

Das `categories`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder wie Browser die App präsentieren, nicht beeinflussen. Seine Werte werden nur in App-Stores und anderen Distributionsplattformen verwendet und sind für Benutzer im Browser oder in der installierten App nicht sichtbar.

Wenn Ihre App mehrere Zwecke erfüllt, kann das Angeben mehrerer relevanter Kategorien Benutzern helfen, Ihre App in verschiedenen Bereichen des App-Stores zu entdecken.

Wenn `categories` nicht angegeben ist oder die angegebenen Werte nicht verwendet werden, kategorisieren App-Stores Ihre Web-App basierend auf ihrem eigenen Klassifizierungssystem.

Die Bilder unten aus dem Apple App Store zeigen, wie Kategorien in verschiedenen Teilen eines App-Stores erscheinen. Die App-Übersicht zeigt die Kategorie im "CHART"-Feld (markiert) zusammen mit der App-Bewertung in dieser Kategorie, und der Informationsbereich zeigt "Category" als eigenes Feld (markiert).

- Die BBC-App ist als "News" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="bbc.jpeg" alt="BBC-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die News-Kategorie zu zeigen.">
    <img src="bbc-info.jpeg" alt="BBC-App-Informationsbereich mit dem Feld Kategorie rot umkreist, das News zeigt.">
  </div>

- Die Weather Channel-App ist als "Weather" kategorisiert:

  <div style="display: flex; justify-content: center;">
    <img src="weather.jpeg" alt="Weather-App-Übersicht im Apple App Store. CHART-Feld ist rot umkreist, um die Weather-Kategorie zu zeigen.">
    <img src="weather-info.jpeg" alt="Weather-App-Informationsbereich mit dem Feld Kategorie rot umkreist, das Weather zeigt.">
  </div>

## Beispiele

### Kategorisierung einer Essensplanungs-Web-App

Dieses Beispiel zeigt, wie man eine Web-App zur Essensplanung basierend auf verfügbaren Zutaten kategorisiert:

```json
{
  "name": "Meal Planner",
  "categories": ["food", "health", "lifestyle"]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Das `categories`-Manifestmitglied wird von App-Stores beim Veröffentlichen und Auflisten von Web-Apps verwendet, daher ist die Browser-Kompatibilität nicht anwendbar. Obwohl Browser dieses Mitglied parsen können, ist es optional und wirkt sich nicht auf die Funktionalität oder Darstellung der App aus.
