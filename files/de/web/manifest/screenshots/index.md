---
title: screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: b9575514d7175b65012a253aaf43d0111fd4163b
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `screenshots`-Manifest-Element ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen Nutzern, die Oberfläche und Funktionen Ihrer Web-App in App-Stores zu überblicken.

> [!NOTE]
> Das `screenshots`-Element ist optional, und App-Stores müssen diese Bilder nicht anzeigen, wenn sie Ihre App präsentieren.

## Syntax

```json-nolint
/* Single screenshot */
"screenshots": [
  {
    "src": "desktop.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  }
]

/* Two screenshots */
"screenshots": [
  {
    "src": "screenshots/home.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "Home screen showing main navigation and featured content"
  },
  {
    "src": "screenshots/dashboard.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "ios",
    "label": "Dashboard view displaying key metrics"
  }
]
```

### Werte

- `screenshots`

  - : Ein Array von Objekten.
    Jedes Objekt stellt einen Screenshot der Web-App in einem gängigen Nutzungsszenario dar.

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Bilddatei angibt.
        Er hat dasselbe Format wie die [`src`](/de/docs/Web/Manifest/icons#src)-Eigenschaft des `icons`-Elements.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die [`sizes`](/de/docs/Web/Manifest/icons#sizes)-Eigenschaft des `icons`-Elements.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die [`type`](/de/docs/Web/Manifest/icons#type)-Eigenschaft des `icons`-Elements.

    - `label` {{Optional_Inline}}

      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie es beschreibend, da es als Alternativtext für den gerenderten Screenshot dienen kann.
        Zur Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten darstellt, auf die der Screenshot zutrifft.
        Diese Eigenschaft sollte nur angegeben werden, wenn der Screenshot auf eine bestimmte Bildschirmlayout zutrifft.
        Wenn `form_factor` nicht angegeben wird, wird der Screenshot als für alle Bildschirmtypen geeignet betrachtet.

        Gültige Werte sind:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme, wie Mobilgeräte, anwendbar ist.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme, wie Desktop-Computer, anwendbar ist.

    - `platform`

      - : Ein String, der die Plattform darstellt, auf die der Screenshot zutrifft.
        Diese Eigenschaft sollte nur angegeben werden, wenn der Screenshot auf ein bestimmtes Gerät oder eine bestimmte Vertriebsplattform zutrifft.
        Wenn `platform` nicht angegeben wird, wird der Screenshot als für alle Plattformen geeignet betrachtet.

        Gültige Werte sind:

        | Typ                  | Wert               | Beschreibung                         |
        | -------------------- | ------------------ | ------------------------------------ |
        | Betriebssysteme      | `android`          | Google Android                       |
        |                      | `chromeos`         | Google ChromeOS                      |
        |                      | `ios`              | Apple iOS                            |
        |                      | `ipados`           | Apple iPadOS                         |
        |                      | `kaios`            | KaiOS                                |
        |                      | `macos`            | Apple macOS                          |
        |                      | `windows`          | Microsoft Windows                    |
        |                      | `xbox`             | Microsoft Xbox                       |
        | Vertriebsplattformen | `chrome_web_store` | Google Chrome Web Store              |
        |                      | `itunes`           | iTunes App Store                     |
        |                      | `microsoft-inbox`  | Vorinstalliert mit Microsoft Windows |
        |                      | `microsoft-store`  | Microsoft Store                      |
        |                      | `play`             | Google Play Store                    |

## Beschreibung

Das `screenshots`-Element ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Präsentation durch Browser nicht beeinflussen.
Screenshots werden in App-Stores und anderen Vertriebsplattformen verwendet, um potenziellen Nutzern die Funktionen Ihrer App zu präsentieren.

Vertriebsplattformen können auswählen, wie viele Screenshots angezeigt werden.

Die unten gezeigten Bilder aus dem Apple App Store zeigen, wie Screenshots in einer iPhone-App-Liste erscheinen.
In der Galeriedarstellung (Bild links) können Nutzer horizontal durch mehrere Bilder scrollen.
Sie können auf ein Bild tippen, um es im Vollbildmodus zu sehen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist-App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Nutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist-App" width="350">
</div>

Das gleiche Vollbild auf dem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräteformfaktoren benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist-App-Liste auf dem iPad zeigt mehrere Screenshots in einer breiteren Galerieansicht">
</div>

## Beispiele

### Vorschauen für eine Mahlzeitenplanungs-Web-App hinzufügen

Dieses Beispiel zeigt, wie Screenshots für eine Mahlzeitenplanungs-App für verschiedene Geräte hinzugefügt werden. Die Screenshots zeigen die gleiche Funktion der App in Desktop- und Mobilansichten:

```json
{
  "name": "Meal Planner",
  "screenshots": [
    {
      "src": "screenshots/desktop-home.webp",
      "sizes": "1920x1080",
      "form_factor": "wide",
      "label": "Desktop view showing weekly meal calendar"
    },
    {
      "src": "screenshots/mobile-home.webp",
      "sizes": "750x1334",
      "form_factor": "narrow",
      "label": "Mobile view showing weekly meal calendar"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Das `screenshots`-Manifest-Element wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und aufgeführt werden, daher ist Browser-Kompatibilität nicht anwendbar.
Auch wenn Browser dieses Element möglicherweise parsen, ist es optional und beeinflusst nicht die Funktionalität oder Präsentation der App.
