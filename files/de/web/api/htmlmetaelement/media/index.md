---
title: "HTMLMetaElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.media`**-Eigenschaft ermöglicht es, das Medium für `theme-color`-Metadaten anzugeben.

Die `theme-color`-Eigenschaft ermöglicht es, die Farbe der Werkzeugleiste oder der Benutzeroberfläche des Browsers in Browsern und Betriebssystemen einzustellen, die diese Eigenschaft unterstützen. Die `media`-Eigenschaft erlaubt es, unterschiedliche Themenfarben für unterschiedliche `media`-Werte festzulegen.

## Wert

Ein String.

## Beispiele

### Einstellung der Themenfarbe für den Dunkelmodus

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist. Das `content`-Attribut ist auf `#3c790a` gesetzt, das `media`-Attribut ist auf `prefers-color-scheme: dark` gesetzt, und das Element wird dem Dokumenten-`<head>` hinzugefügt. Wenn ein Benutzer einen Dunkelmodus in seinem Betriebssystem festgelegt hat, kann die `media`-Eigenschaft verwendet werden, um eine andere `theme-color` festzulegen:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Einstellung der Themenfarben nach Gerätegröße

Die meisten Meta-Eigenschaften können nur einmal verwendet werden. `theme-color` kann jedoch mehrfach verwendet werden, wenn eindeutige `media`-Werte angegeben werden.

Dieses Beispiel fügt zwei Meta-Elemente mit einer `theme-color` hinzu: eines für alle Geräte und ein weiteres für kleine Bildschirme. Die Reihenfolge der Übereinstimmung der `media`-Abfrage ist wichtig, daher sollte die spezifischere Abfrage später im Dokument hinzugefügt werden, wie unten gezeigt:

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
- [Mögliche Werte für Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
