---
title: "HTMLMetaElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.media`**-Eigenschaft ermöglicht es, das Medium für `theme-color` Metadaten zu spezifizieren.

Die `theme-color`-Eigenschaft erlaubt es, die Farbe der Browser-Toolbar oder der Benutzeroberfläche in Browsern und Betriebssystemen festzulegen, die diese Eigenschaft unterstützen. Die `media`-Eigenschaft ermöglicht es, verschiedene Theme-Farben für verschiedene `media`-Werte festzulegen.

## Wert

Ein String.

## Beispiele

### Einstellen der Theme-Farbe für den Dunkelmodus

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist. Das `content`-Attribut ist auf `#3c790a` gesetzt, das `media`-Attribut ist auf `prefers-color-scheme: dark` gesetzt, und das Element wird dem Dokument-`<head>` hinzugefügt. Wenn ein Benutzer einen Dunkelmodus in seinem Betriebssystem eingestellt hat, kann die `media`-Eigenschaft verwendet werden, um eine andere `theme-color` festzulegen:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Theme-Farben nach Gerätegröße einstellen

Die meisten Meta-Eigenschaften können nur einmal verwendet werden. `theme-color` kann jedoch mehrfach verwendet werden, wenn eindeutige `media`-Werte angegeben werden.

Dieses Beispiel fügt zwei Meta-Elemente mit einer `theme-color` hinzu; eines für alle Geräte und ein weiteres für kleine Bildschirme. Die Reihenfolge des Abgleichs der `media`-Anfrage ist wichtig, sodass die spezifischere Abfrage später im Dokument hinzugefügt werden sollte, wie unten gezeigt:

```js
// Add a theme-color for all devices
const meta1 = document.createElement("meta");
meta1.name = "theme-color";
meta1.content = "white";
document.head.appendChild(meta1);

// Add a theme-color for small devices
const meta2 = document.createElement("meta");
meta2.name = "theme-color";
meta2.media = "(width <= 600px)";
meta2.content = "black";
document.head.appendChild(meta2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
- [Mögliche Werte für Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
