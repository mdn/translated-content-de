---
title: screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `screenshots`-Mitglied definiert ein Array von Screenshots, um die Anwendung zu präsentieren. Diese Bilder sind für progressive Web-App-Stores bestimmt.

### Werte

Das `screenshots`-Mitglied ist ein Array von Objekten, von denen jedes einen Screenshot darstellt. Jedes Screenshot-Objekt kann die folgenden Eigenschaften enthalten:

- `form_factor`

  - : Ein String, der eine Klasse von Geräten darstellt. Dies sollte nur verwendet werden, wenn der Screenshot nur für einen bestimmten Formfaktor gilt.

    Diese Eigenschaft kann einen der folgenden Werte annehmen:

    - `"narrow"`: Der Screenshot ist nur für schmale Bildschirme anwendbar.
    - `"wide"`: Der Screenshot ist nur für breite Bildschirme anwendbar.

- `label`

  - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt. Dieses Mitglied kann als alternativer Text für den Screenshot dienen.

- `platform`

  - : Ein String, der die Plattform darstellt, auf die der Screenshot zutrifft. Dies sollte verwendet werden, wenn ein Screenshot nur auf ein bestimmtes Gerät oder eine bestimmte Distributionsplattform anwendbar ist. Benutzeragenten sollten keine Screenshots anzeigen, die einen `platform`-Wert enthalten, der von der aktuellen Plattform abweicht (zum Beispiel sollte Google Play keine Screenshots anzeigen, deren `platform` `"ios"` ist).

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
    - Distributionsplattform-Identifikatoren:
      - `"chrome_web_store"`
      - `"itunes"`
      - `"microsoft-inbox"`
      - `"microsoft-store"`
      - `"play"`

- `sizes`
  - : Ein String, der die Größe des Bildes beschreibt, oder mehrere Größen für Bildformate wie ICO, die mehrere Bilder enthalten können. Diese Eigenschaft ist äquivalent zu und wird auf die gleiche Weise wie das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{htmlelement("link")}}-Elements angegeben.
- `src`
  - : Ein String, der eine URL darstellt, von der der Benutzeragent die Bilddaten abrufen kann.
- `type`
  - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} für das Bild darstellt.

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

Dieses Manifest-Mitglied wird von App-Stores und Katalogen verwendet, wenn sie Web-Apps veröffentlichen und auflisten, daher ist die Browser-Kompatibilität nicht anwendbar. Browser können diese Informationen parsen, aber es ist optional und beeinflusst die Kernfunktionalität einer Web-App nicht.
