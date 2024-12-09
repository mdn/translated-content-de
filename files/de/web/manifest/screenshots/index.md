---
title: screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: 74a94e7d4846bfd2165c5ace9e60a65b52ec1a85
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Der `screenshots`-Manifestmember ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren. Diese Bilder helfen Benutzern, die Benutzeroberfläche und Funktionen Ihrer Web-App in App-Stores zu betrachten.

> [!NOTE]
> Der `screenshots`-Member ist optional, und App-Stores zeigen diese Bilder möglicherweise nicht an, wenn sie Ihre App präsentieren.

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
    Jedes Objekt repräsentiert einen Screenshot der Web-App in einem gewöhnlichen Nutzungsszenario.

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Bilddatei angibt.
        Er hat dasselbe Format wie die `icons`-Eigenschaft [`src`](/de/docs/Web/Manifest/icons#src).

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die `icons`-Eigenschaft [`sizes`](/de/docs/Web/Manifest/icons#sizes).

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die `icons`-Eigenschaft [`type`](/de/docs/Web/Manifest/icons#type).

    - `label` {{Optional_Inline}}

      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie ihn beschreibend, da er als Alternativtext für den gerenderten Screenshot dienen kann.
        Für die Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten darstellt, auf die der Screenshot zutrifft.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein spezifisches Bildschirm-Layout zutrifft.
        Wenn `form_factor` nicht angegeben ist, wird der Screenshot als geeignet für alle Bildschirmtypen angesehen.

        Gültige Werte sind:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme, wie z.B. Mobilgeräte, gilt.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme, wie z.B. Desktop-Computer, gilt.

    - `platform`

      - : Ein String, der die Plattform darstellt, auf die der Screenshot zutrifft.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein spezifisches Gerät oder eine Distributionsplattform zutrifft.
        Wenn `platform` nicht angegeben ist, wird der Screenshot als geeignet für alle Plattformen angesehen.

        Gültige Werte sind:

        | Typ                      | Wert               | Beschreibung                         |
        | ------------------------ | ------------------ | ------------------------------------ |
        | Betriebssysteme          | `android`          | Google Android                       |
        |                          | `chromeos`         | Google ChromeOS                      |
        |                          | `ios`              | Apple iOS                            |
        |                          | `ipados`           | Apple iPadOS                         |
        |                          | `kaios`            | KaiOS                                |
        |                          | `macos`            | Apple macOS                          |
        |                          | `windows`          | Microsoft Windows                    |
        |                          | `xbox`             | Microsoft Xbox                       |
        | Distributionsplattformen | `chrome_web_store` | Google Chrome Web Store              |
        |                          | `itunes`           | iTunes App Store                     |
        |                          | `microsoft-inbox`  | Vorinstalliert mit Microsoft Windows |
        |                          | `microsoft-store`  | Microsoft Store                      |
        |                          | `play`             | Google Play Store                    |

## Beschreibung

Der `screenshots`-Member ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Präsentation der App in Browsern nicht beeinflussen. Screenshots werden in App-Stores und anderen Distributionsplattformen verwendet, um potenziellen Benutzern die Funktionen Ihrer App zu präsentieren.

Distributionsplattformen können entscheiden, wie viele Screenshots angezeigt werden.

Die folgenden Bilder aus dem Apple App Store zeigen, wie Screenshots in einer iPhone-App-Liste erscheinen. In der Galerieansicht (Bild links) können Benutzer durch mehrere Bilder horizontal scrollen. Sie können auf jedes Bild tippen, um es in voller Größe anzusehen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist-App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist-App" width="350">
</div>

Dasselbe Vollbildbild auf dem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräteformate benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist-App-Liste auf dem iPad zeigt mehrere Screenshots in einer breiteren Galerieansicht">
</div>

## Beispiele

### Hinzufügen von Vorschauen für eine Essensplanungs-Web-App

Dieses Beispiel zeigt, wie man Screenshots für eine Essensplanungs-App für verschiedene Geräte hinzufügt. Die Screenshots zeigen dasselbe Feature der App in Desktop- und mobilen Ansichten:

```json
{
  "name": "Meal Planner",
  "screenshots": "screenshots": [
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

Der `screenshots`-Manifestmember wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und gelistet werden. Daher ist die Browser-Kompatibilität nicht anwendbar. Während Browser diesen Member möglicherweise parsen, ist er optional und beeinflusst weder die Funktionalität noch die Darstellung der App.
