---
title: screenshots
slug: Web/Progressive_web_apps/Manifest/Reference/screenshots
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `screenshots`-Manifestmitglied ermöglicht es, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen Benutzern, die Benutzeroberfläche und Funktionen Ihrer Webanwendung in App-Stores vorab zu betrachten.

> [!NOTE]
> Das `screenshots`-Mitglied ist optional, und App-Stores zeigen möglicherweise diese Bilder nicht an, wenn sie Ihre App präsentieren.

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
    Jedes Objekt repräsentiert einen Screenshot der Webanwendung in einem häufigen Nutzungsszenario.

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:
    - `src`
      - : Ein String, der den Pfad zur Bilddatei angibt.
        Er hat dasselbe Format wie die `src`-Eigenschaft des `icons`-Mitglieds [`src`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#src).

    - `sizes` {{Optional_Inline}}
      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die `sizes`-Eigenschaft des `icons`-Mitglieds [`sizes`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#sizes).

    - `type` {{Optional_Inline}}
      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die `type`-Eigenschaft des `icons`-Mitglieds [`type`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#type).

    - `label` {{Optional_Inline}}
      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie ihn beschreibend, da er als alternativer Text für den gerenderten Screenshot dienen kann.
        Für die Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}
      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten darstellt, auf die der Screenshot zutrifft.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für ein bestimmtes Bildschirmlayout gilt.
        Wenn `form_factor` nicht angegeben ist, wird der Screenshot als geeignet für alle Bildschirmtypen betrachtet.

        Gültige Werte umfassen:
        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme, wie mobile Geräte, geeignet ist.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme, wie Desktop-Computer, geeignet ist.

    - `platform`
      - : Ein String, der die Plattform darstellt, für die der Screenshot gilt.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für ein bestimmtes Gerät oder eine bestimmte Vertriebsplattform gilt.
        Wenn `platform` nicht angegeben ist, wird der Screenshot als geeignet für alle Plattformen betrachtet.

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

Das `screenshots`-Mitglied ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Art und Weise, wie Browser die App präsentieren, nicht beeinflussen.
Screenshots werden in App-Stores und anderen Vertriebsplattformen verwendet, um potenziellen Benutzern die Funktionen Ihrer App zu präsentieren.

Vertriebsplattformen können wählen, wie viele Screenshots angezeigt werden sollen.

Die unten stehenden Bilder aus dem Apple App Store zeigen, wie Screenshots in einer iPhone-App-Liste erscheinen.
Im Galerie-Modus (Bild links) können Benutzer horizontal durch mehrere Bilder scrollen.
Sie können auf jedes Bild tippen, um es im Vollbildmodus anzuzeigen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist-App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist-App" width="350">
</div>

Dasselbe Vollbildbild auf dem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräteformfaktoren benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist-App-Eintrag auf dem iPad zeigt mehrere Screenshots in einer breiten Galerieansicht">
</div>

## Beispiele

### Hinzufügen von Vorschauen für eine Ernährungsplaner-Webanwendung

Dieses Beispiel zeigt, wie Screenshots für eine Ernährungsplaner-App für verschiedene Geräte hinzugefügt werden. Die Screenshots zeigen dieselbe Funktion der App in Desktop- und mobilen Ansichten:

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

Das `screenshots`-Manifestmitglied wird von App-Stores verwendet, wenn Webanwendungen veröffentlicht und gelistet werden, sodass Browser-Kompatibilität nicht anwendbar ist.
Während Browser dieses Mitglied möglicherweise parsen, ist es optional und beeinflusst nicht die Funktionalität oder Darstellung der App.
