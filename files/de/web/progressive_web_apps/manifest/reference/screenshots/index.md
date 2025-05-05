---
title: screenshots
slug: Web/Progressive_web_apps/Manifest/Reference/screenshots
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `screenshots` Manifest-Element ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen den Benutzern, die Benutzeroberfläche und Funktionen Ihrer Web-App in App-Stores vorab zu betrachten.

> [!NOTE]
> Das `screenshots`-Element ist optional, und App-Stores zeigen diese Bilder möglicherweise nicht an, wenn Ihre App präsentiert wird.

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
    Jedes Objekt repräsentiert einen Screenshot der Web-App in einem häufigen Verwendungsszenario.

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Zu den möglichen Eigenschaften gehören:

    - `src`

      - : Ein String, der den Pfad zur Bilddatei angibt.
        Er hat dasselbe Format wie die `src` Eigenschaft des `icons`-Elements.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die `sizes` Eigenschaft des `icons`-Elements.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die `type` Eigenschaft des `icons`-Elements.

    - `label` {{Optional_Inline}}

      - : Ein String, der den barrierefreien Namen des Screenshot-Objekts repräsentiert.
        Halten Sie ihn beschreibend, da er als Alternativtext für den gerenderten Screenshot dienen kann.
        Aus Barrierefreiheitsgründen wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten repräsentiert, für die der Screenshot zutrifft.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein bestimmtes Bildschirm-Layout zutrifft.
        Wenn `form_factor` nicht angegeben ist, wird der Screenshot als für alle Bildschirmtypen geeignet betrachtet.

        Gültige Werte umfassen:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme geeignet ist, wie z.B. bei mobilen Geräten.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme geeignet ist, wie z.B. bei Desktop-Computern.

    - `platform`

      - : Ein String, der die Plattform repräsentiert, für die der Screenshot gilt.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein bestimmtes Gerät oder eine bestimmte Distributionsplattform zutrifft.
        Wenn `platform` nicht angegeben ist, wird der Screenshot als für alle Plattformen geeignet betrachtet.

        Gültige Werte umfassen:

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

Das `screenshots`-Element ist ergänzende Metadaten, die das Laufzeitverhalten der App oder die Darstellung der App in Browsern nicht beeinflussen.
Screenshots werden in App-Stores und anderen Distributionsplattformen verwendet, um potenziellen Benutzern die Funktionen Ihrer App zu präsentieren.

Distributionsplattformen können auswählen, wie viele Screenshots angezeigt werden.

Die untenstehenden Bilder aus dem Apple App Store zeigen, wie Screenshots in einem iPhone-App-Eintrag erscheinen.
Im Galerie-Modus (Bild links) können Benutzer durch mehrere Bilder horizontal scrollen.
Sie können auf ein beliebiges Bild tippen, um es im Vollbildmodus anzuzeigen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist-App im Apple App Store, die eine horizontale Galerie von App-Bildern zeigt, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist-App" width="350">
</div>

Dasselbe Vollbildbild auf dem iPad zeigt, warum verschiedene Screenshots für schmale (iPhone) und breite (iPad) Geräteformfaktoren benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist-App-Eintrag auf dem iPad, der mehrere Screenshots in einer breiteren Galerieansicht zeigt">
</div>

## Beispiele

### Hinzufügen von Vorschauen für eine Ernährungsplanungs-Web-App

Dieses Beispiel zeigt, wie man Screenshots für eine Ernährungsplanungs-App für verschiedene Geräte hinzufügt. Die Screenshots zeigen dasselbe Feature der App in Desktop- und Mobilansichten:

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

Das `screenshots`-Manifest-Element wird von App-Stores verwendet, wenn Web-Apps veröffentlicht und gelistet werden, daher ist die Browser-Kompatibilität nicht anwendbar.
Obwohl Browser dieses Element parsen können, ist es optional und beeinflusst nicht die Funktionalität oder Darstellung der App.
