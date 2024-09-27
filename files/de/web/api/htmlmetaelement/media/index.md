---
title: "HTMLMetaElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.media`**-Eigenschaft ermöglicht die Angabe von Medien für `theme-color`-Metadaten.

Die `theme-color`-Eigenschaft erlaubt das Setzen der Farbe der Browser-Toolbar oder UI in Browsern und Betriebssystemen, die diese Eigenschaft unterstützen. Die `media`-Eigenschaft ermöglicht das Festlegen unterschiedlicher Theme-Farben für verschiedene `media`-Werte.

## Wert

Ein String.

## Beispiele

### Setzen der Theme-Farbe für den Dunkelmodus

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`theme-color`](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist.
Das `content`-Attribut wird auf `#3c790a` gesetzt, das `media`-Attribut auf `prefers-color-scheme: dark` und das Element wird dem Dokument `<head>` hinzugefügt.
Wenn ein Nutzer den Dunkelmodus in seinem Betriebssystem ausgewählt hat, kann die `media`-Eigenschaft verwendet werden, um eine andere `theme-color` festzulegen:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Festlegen von Theme-Farben je nach Gerätegröße

Die meisten Meta-Eigenschaften können nur einmal verwendet werden. Allerdings kann `theme-color` mehrfach verwendet werden, wenn eindeutige `media`-Werte angegeben werden.

Dieses Beispiel fügt zwei Meta-Elemente mit einer `theme-color` hinzu; eines für alle Geräte und ein weiteres für kleine Bildschirme. Die Reihenfolge der Übereinstimmung der `media`-Abfrage ist wichtig, daher sollte die spezifischere Abfrage später im Dokument hinzugefügt werden, wie unten gezeigt:

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
