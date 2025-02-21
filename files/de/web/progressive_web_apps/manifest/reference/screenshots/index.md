---
title: screenshots
slug: Web/Progressive_web_apps/Manifest/Reference/screenshots
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `screenshots`-Manifest-Element ermöglicht es Ihnen, ein oder mehrere Bilder anzugeben, die Ihre Webanwendung präsentieren.
Diese Bilder helfen Benutzern, eine Vorschau der Benutzeroberfläche und Funktionen Ihrer Web-App in App-Stores zu erhalten.

> [!NOTE]
> Das `screenshots`-Element ist optional und App-Stores zeigen diese Bilder möglicherweise nicht an, wenn sie Ihre App präsentieren.

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

    Jedes Screenshot-Objekt kann eine oder mehrere Eigenschaften enthalten. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Bilddatei angibt.
        Er hat dasselbe Format wie die [`src`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#src)-Eigenschaft des `icons`-Elements.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen des Bildes angibt.
        Er hat dasselbe Format wie die [`sizes`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#sizes)-Eigenschaft des `icons`-Elements.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Bildes angibt.
        Er hat dasselbe Format wie die [`type`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons#type)-Eigenschaft des `icons`-Elements.

    - `label` {{Optional_Inline}}

      - : Ein String, der den zugänglichen Namen des Screenshot-Objekts darstellt.
        Halten Sie ihn beschreibend, da er als Alternativtext für den gerenderten Screenshot dienen kann.
        Für die Barrierefreiheit wird empfohlen, diese Eigenschaft für jeden Screenshot anzugeben.

    - `form_factor` {{Optional_Inline}}

      - : Ein String, der die Bildschirmform einer breiten Klasse von Geräten angibt, auf die der Screenshot angewendet wird.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein spezifisches Bildschirm-Layout anwendbar ist.
        Wenn `form_factor` nicht angegeben ist, wird der Screenshot als für alle Bildschirmtypen geeignet angesehen.

        Gültige Werte umfassen:

        - `narrow`
          - : Gibt an, dass der Screenshot nur für schmale Bildschirme, wie z. B. Mobilgeräte, anwendbar ist.
        - `wide`
          - : Gibt an, dass der Screenshot nur für breite Bildschirme, wie z. B. Desktop-Computer, anwendbar ist.

    - `platform`

      - : Ein String, der die Plattform darstellt, auf die der Screenshot angewendet wird.
        Geben Sie diese Eigenschaft nur an, wenn der Screenshot auf ein spezifisches Gerät oder eine spezifische Distributionsplattform anwendbar ist.
        Wenn `platform` nicht angegeben ist, wird der Screenshot als für alle Plattformen geeignet angesehen.

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
Screenshots werden in App-Stores und anderen Distributionsplattformen genutzt, um die Funktionen Ihrer App potenziellen Nutzern zu präsentieren.

Distributionsplattformen können entscheiden, wie viele Screenshots angezeigt werden.

Die folgenden Bilder aus dem Apple App Store zeigen, wie Screenshots in einem iPhone-App-Eintrag erscheinen.
Im Galeriemodus (Bild links) können Benutzer horizontal durch mehrere Bilder scrollen.
Sie können auf jedes Bild tippen, um es in voller Größe anzuzeigen (Bild rechts).

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Todoist App im Apple App Store zeigt eine horizontale Galerie von App-Bildern, durch die Benutzer scrollen können" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Eine Vollbildansicht eines Bildes aus der horizontalen Galerie der Todoist App" width="350">
</div>

Dasselbe Vollbildbild auf einem iPad zeigt, warum unterschiedliche Screenshots für schmale (iPhone) und breite (iPad) Geräte-Formfaktoren benötigt werden:

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="Todoist App-Eintrag auf einem iPad zeigt mehrere Screenshots in einer breiteren Galerieansicht">
</div>

## Beispiele

### Hinzufügen von Vorschauen für eine Mahlzeitenplanungs-Web-App

Dieses Beispiel zeigt, wie Screenshots für eine Mahlzeitenplanungs-App für verschiedene Geräte hinzugefügt werden.
Die Screenshots zeigen dasselbe Feature der App in Desktop- und Mobilansichten:

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
Während Browser dieses Element möglicherweise parsen, ist es optional und beeinflusst nicht die Funktionalität oder Darstellung der App.
