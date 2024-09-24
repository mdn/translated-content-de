---
title: Screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: f1fe8823095506fee0a120b023116d67e3bdf5df
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das `screenshots`-Mitglied definiert ein Array von Screenshots, die dazu gedacht sind, die Anwendung zu präsentieren. Diese Bilder sollen von progressiven Web-App-Stores verwendet werden.

## Eigenschaften

Das `screenshots`-Mitglied ist ein Array von Objekten, von denen jedes einen Screenshot darstellt. Jedes Screenshot-Objekt kann die folgenden Eigenschaften enthalten:

- `form_factor`

  - : Ein String, der eine Klasse von Geräten darstellt. Dies sollte nur verwendet werden, wenn der Screenshot nur für einen bestimmten Formfaktor anwendbar ist.

    Diese Eigenschaft kann einen der folgenden Werte annehmen:

    - `"narrow"`: Der Screenshot gilt nur für schmale Bildschirme.
    - `"wide"`: Der Screenshot gilt nur für breite Bildschirme.

- `label`

  - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt. Dieses Mitglied kann als Alternativtext für den Screenshot dienen.

- `platform`

  - : Ein String, der die Plattform darstellt, auf die sich der Screenshot bezieht. Dies sollte verwendet werden, wenn ein Screenshot nur für ein bestimmtes Gerät oder eine bestimmte Vertriebsplattform anwendbar ist. Benutzeragenten sollten keine Screenshots anzeigen, die einen `platform`-Wert enthalten, der sich von der aktuellen Plattform unterscheidet (zum Beispiel sollte Google Play keine Screenshots anzeigen, deren `platform` `"ios"` ist).

    Diese Eigenschaft kann einen der folgenden Werte annehmen:

    - Geräteplattform-Identifikatoren:
      - `"android"`
      - `"chromeos"`
      - `"ipados"`
      - `"ios"`
      - `"kaios"`
      - `"macos"`
      - `"windows"`
      - `"xbox"`
    - Vertriebsplattform-Identifikatoren:
      - `"chrome_web_store"`
      - `"itunes"`
      - `"microsoft-inbox"`
      - `"microsoft-store"`
      - `"play"`

- `sizes`
  - : Ein String, der die Größe des Bildes beschreibt oder mehrere Größen für Bildformate wie ICO, die mehrere Bilder enthalten können. Diese Eigenschaft entspricht dem [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{htmlelement("link")}}-Elements und wird in gleicher Weise angegeben.
- `src`
  - : Ein String, der eine URL darstellt, von der der Benutzeragent die Bilddaten abrufen kann.
- `type`
  - : Ein String, der den {{glossary("MIME_type", "MIME-Typ")}} für das Bild darstellt.

## Beispiele

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
