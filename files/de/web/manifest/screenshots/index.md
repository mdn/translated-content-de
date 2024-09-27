---
title: screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `screenshots`-Mitglied definiert ein Array von Screenshots, die zur Präsentation der Applikation dienen. Diese Bilder sind für die Nutzung in Progressiven Web-App-Stores vorgesehen.

### Werte

Das `screenshots`-Mitglied ist ein Array von Objekten, die jeweils einen Screenshot darstellen. Jedes Screenshot-Objekt kann die folgenden Eigenschaften enthalten:

- `form_factor`

  - : String, der eine Klasse von Geräten repräsentiert. Dies sollte nur verwendet werden, wenn der Screenshot nur für einen bestimmten Formfaktor zutrifft.

    Diese Eigenschaft kann einen der folgenden Werte annehmen:

    - `"narrow"`: Der Screenshot ist nur für schmale Bildschirme anwendbar.
    - `"wide"`: Der Screenshot ist nur für breite Bildschirme anwendbar.

- `label`

  - : String, der den zugänglichen Namen des Screenshot-Objekts darstellt. Dieses Mitglied kann als Alternativtext für den Screenshot dienen.

- `platform`

  - : String, der die Plattform repräsentiert, auf die der Screenshot zutrifft. Dies sollte verwendet werden, wenn ein Screenshot nur für ein bestimmtes Gerät oder eine bestimmte Distributionsplattform anwendbar ist. Benutzeragenten sollten keine Screenshots anzeigen, die einen `platform`-Wert enthalten, der sich von der aktuellen Plattform unterscheidet (zum Beispiel sollte Google Play keine Screenshots anzeigen, deren `platform` `"ios"` ist).

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
  - : String, der die Größe des Bildes beschreibt, oder mehrere Größen für Bildformate wie ICO, die mehrere Bilder enthalten können. Diese Eigenschaft ist äquivalent zu und wird in derselben Weise spezifiziert wie das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{htmlelement("link")}}-Elements.
- `src`
  - : String, der eine URL darstellt, über die der Benutzeragent die Bilddaten abrufen kann.
- `type`
  - : String, der den [MIME-Typ](/de/docs/Glossary/MIME_type) für das Bild repräsentiert.

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

Dieses Manifest-Mitglied wird von App-Stores und Katalogen verwendet, wenn Web-Apps veröffentlicht und aufgelistet werden, daher ist `Browser-Kompatibilität` nicht anwendbar. Browser können diese Informationen parsen, aber es ist optional und beeinträchtigt nicht die Kernfunktionalität einer Web-App.
