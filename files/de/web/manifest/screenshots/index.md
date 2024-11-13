---
title: screenshots
slug: Web/Manifest/screenshots
l10n:
  sourceCommit: 5f140a8174ef528f61e8c87e2f38e3748257d9bc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `screenshots` Manifest-Element ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen Benutzern, sich einen Eindruck von der Benutzeroberfläche und den Funktionen Ihrer Web-App in App-Stores zu verschaffen.

> [!NOTE]
> Das `screenshots` Element ist optional, und App-Stores zeigen diese Bilder möglicherweise nicht an, wenn Ihre App präsentiert wird.

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
    Jedes Objekt repräsentiert einen Screenshot der Web-App in einem gängigen Nutzungsszenario.

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Bilddatei angibt.
        Es hat dasselbe Format wie die `src`-Eigenschaft des `icons` Elements [`src`](/de/docs/Web/Manifest/icons#src).

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Es hat dasselbe Format wie die `sizes`-Eigenschaft des `icons` Elements [`sizes`](/de/docs/Web/Manifest/icons#sizes).

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Es hat dasselbe Format wie die `type`-Eigenschaft des `icons` Elements [`type`](/de/docs/Web/Manifest/icons#type).

    - `label` {{Optional_Inline}}

      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie ihn beschreibend, da er als Alternativtext für den gerenderten Screenshot dienen kann.
        Aus Gründen der Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten repräsentiert, für die der Screenshot gilt.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für eine bestimmte Bildschirmdarstellung gilt.
        Wenn `form_factor` nicht angegeben ist, wird der Screenshot als für alle Bildschirmtypen geeignet betrachtet.

        Gültige Werte sind:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme gilt, z. B. Mobilgeräte.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme gilt, z. B. Desktop-Computer.

    - `platform`

      - : Ein String, der die Plattform darstellt, für die der Screenshot gilt.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot für ein bestimmtes Gerät oder eine bestimmte Vertriebsplattform gilt.
        Wenn `platform` nicht angegeben ist, wird der Screenshot als für alle Plattformen geeignet betrachtet.

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

Das `screenshots` Element ist zusätzliche Metadaten, die das Laufzeitverhalten der App oder die Darstellung in Browsern nicht beeinflussen.
Screenshots werden in App-Stores und anderen Vertriebsplattformen verwendet, um potenziellen Benutzern die Funktionen Ihrer App zu zeigen.

Vertriebsplattformen können entscheiden, wie viele Screenshots angezeigt werden.

Die folgenden Bilder aus dem Apple App Store zeigen, wie Screenshots in einer iPhone-App-Auflistung erscheinen.
In der Galerieansicht (Bild links) können Benutzer horizontal durch mehrere Bilder blättern.
Sie können auf ein beliebiges Bild tippen, um es in Vollbildgröße anzuzeigen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist App" width="350">
</div>

Das gleiche Vollbild-Bild auf einem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräteformfaktoren erforderlich sind:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist App-Liste auf iPad zeigt mehrere Screenshots in einer breiteren Galerieansicht">
</div>

## Beispiele

### Vorschaubilder für eine Mahlzeitenplanungs-App hinzufügen

Dieses Beispiel zeigt, wie Sie Screenshots für eine Mahlzeitenplanungs-App für verschiedene Geräte hinzufügen. Die Screenshots zeigen dasselbe Feature der App in Desktop- und Mobilansichten:

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

Das `screenshots` Manifest-Element wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und gelistet werden, daher ist die Browser-Kompatibilität nicht anwendbar.
Obwohl Browser dieses Element analysieren können, ist es optional und hat keinen Einfluss auf die Funktionalität oder Präsentation der App.
