---
title: "HTMLMetaElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.media`**-Eigenschaft ermöglicht die Angabe von Medien für `theme-color`-Metadaten.

Die `theme-color`-Eigenschaft ermöglicht das Setzen der Farbe der Browser-Toolbar oder der Benutzeroberfläche in Browsern und Betriebssystemen, die diese Eigenschaft unterstützen. Die `media`-Eigenschaft ermöglicht das Festlegen unterschiedlicher Theme-Farben für verschiedene `media`-Werte.

## Wert

Ein String.

## Beispiele

### Einstellen der Theme-Farbe für den Dunkelmodus

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist.
Das `content`-Attribut ist auf `#3c790a` gesetzt, das `media`-Attribut ist auf `prefers-color-scheme: dark` gesetzt, und das Element wird dem Dokument `<head>` hinzugefügt.
Wenn ein Benutzer einen Dunkelmodus in seinem Betriebssystem angegeben hat, kann die `media`-Eigenschaft verwendet werden, um eine andere `theme-color` festzulegen:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Festlegen von Theme-Farben nach Gerätegröße

Die meisten Metadaten-Eigenschaften können nur einmal verwendet werden. `theme-color` kann jedoch mehrfach verwendet werden, wenn eindeutige `media`-Werte angegeben werden.

Dieses Beispiel fügt zwei Meta-Elemente mit einer `theme-color` hinzu: eines für alle Geräte und eines für kleine Bildschirme.
Die Reihenfolge der Übereinstimmung mit der `media`-Abfrage ist wichtig, daher sollte die spezifischere Abfrage später im Dokument hinzugefügt werden, wie unten gezeigt:

```js
// Add a theme-color for all devices
const meta1 = document.createElement("meta");
meta1.name = "theme-color";
meta1.content = "#ffffff";
document.head.appendChild(meta1);

// Add a theme-color for small devices
const meta2 = document.createElement("meta");
meta2.name = "theme-color";
meta2.media = "(max-width: 600px)";
meta2.content = "#000000";
document.head.appendChild(meta2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
- [Mögliche Werte für Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
