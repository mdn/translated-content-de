---
title: screenshots
slug: Web/Manifest/Reference/screenshots
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `screenshots`-Manifest-Mitglied ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen den Benutzern, die Benutzeroberfläche und Funktionen Ihrer Web-App in App-Stores vorzuschauen.

> [!NOTE]
> Das `screenshots`-Mitglied ist optional, und App-Stores können diese Bilder möglicherweise nicht anzeigen, wenn sie Ihre App präsentieren.

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
        Er hat dasselbe Format wie die [`src`](/de/docs/Web/Manifest/Reference/icons#src)-Eigenschaft des `icons`-Mitglieds.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die [`sizes`](/de/docs/Web/Manifest/Reference/icons#sizes)-Eigenschaft des `icons`-Mitglieds.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die [`type`](/de/docs/Web/Manifest/Reference/icons#type)-Eigenschaft des `icons`-Mitglieds.

    - `label` {{Optional_Inline}}

      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie es beschreibend, da es als Alternativtext für den gerenderten Screenshot dienen kann.
        Für die Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten angibt, auf die der Screenshot zutrifft.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für ein bestimmtes Bildschirm-Layout gilt.
        Wenn `form_factor` nicht angegeben wird, wird der Screenshot als für alle Bildschirmtypen geeignet angesehen.

        Gültige Werte umfassen:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme, wie Mobilgeräte, geeignet ist.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme, wie Desktop-Computer, geeignet ist.

    - `platform`

      - : Ein String, der die Plattform darstellt, für die der Screenshot gilt.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für ein bestimmtes Gerät oder eine Vertriebsplattform gilt.
        Wenn `platform` nicht angegeben wird, wird der Screenshot als für alle Plattformen geeignet angesehen.

        Gültige Werte umfassen:

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

Das `screenshots`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Darstellung im Browser nicht beeinflussen.
Screenshots werden in App-Stores und anderen Vertriebsplattformen verwendet, um potenziellen Nutzern die Funktionen Ihrer App zu präsentieren.

Vertriebsplattformen können wählen, wie viele Screenshots angezeigt werden.

Die unten gezeigten Bilder aus dem Apple App Store zeigen, wie Screenshots in einem iPhone-App-Eintrag erscheinen.
In der Galerieansicht (Bild links) können Benutzer horizontal durch mehrere Bilder scrollen.
Sie können auf ein Bild tippen, um es im Vollbildmodus anzuzeigen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist-App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist-App" width="350">
</div>

Dasselbe Vollbildbild auf dem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräteformfaktoren benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist-App-Eintrag auf dem iPad zeigt mehrere Screenshots in einer breiteren Galerieansicht">
</div>

## Beispiele

### Vorschauen für eine Essensplanungs-Web-App hinzufügen

Dieses Beispiel zeigt, wie man Screenshots für eine Essensplanungs-App für verschiedene Geräte hinzufügt. Die Screenshots zeigen dasselbe Merkmal der App in Desktop- und Mobilansichten:

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

Das `screenshots`-Manifest-Mitglied wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und aufgelistet werden, daher ist die Browser-Kompatibilität nicht anwendbar.
Obwohl Browser dieses Mitglied möglicherweise parsen, ist es optional und beeinflusst weder die Funktionalität noch die Darstellung der App.
