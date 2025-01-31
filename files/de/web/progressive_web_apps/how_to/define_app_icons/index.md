---
title: Definieren Sie Ihre App-Icons
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie andere Apps. Sobald eine PWA installiert ist, erscheint ihr App-Icon auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem normalerweise systemeigene Apps angezeigt werden.

Zum Beispiel kann die Taskleiste unter Windows sowohl Symbole für native als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste unter Windows zeigt die üblichen Windows-Symbole und dann Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Wenn Sie eine PWA erstellen, können Sie Ihr eigenes Set von Icons definieren, die verwendet werden sollen, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Icons definieren, welche Icon-Größen Sie erstellen sollten und wie Sie Ihre Icons für Maskierung unterstützbar machen.

> [!NOTE]
> Das PWA-App-Icon ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}-Bild, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Icon haben. Um mehr über Favicons zu erfahren, siehe [Hinzufügen benutzerdefinierter Icons zu Ihrer Website](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Icon

Der erste Schritt zur Definition Ihres App-Icons besteht darin, es zu entwerfen.

Die meisten Nutzer erkennen Anwendungen an ihren Icons. Icons erscheinen an vielen Stellen im Betriebssystem, einschließlich Startbildschirm, Taskleiste, App-Launcher oder Einstellungsmenüs. Stellen Sie sicher, dass Ihre Nutzer Ihre App leicht finden können, indem Sie das Icon sowohl optisch ansprechend als auch repräsentativ für Ihre Anwendung machen.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf verschiedenen Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder auf diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Icon angezeigt werden kann. Sie möchten möglicherweise auch ein Icon mit weniger Details erstellen, das an Orten verwendet wird, an denen das Icon in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Icon als SVG-Datei zu entwerfen, da es dadurch ohne Qualitätsverlust auf jede Größe skaliert werden kann.

## Verweisen Sie auf Ihre Icons im Web App Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/Reference/icons) Mitglied im Web App Manifest, um ein Set von Icons für Ihre PWA zu definieren.

Wie im Abschnitt [Erstellung der notwendigen Icon-Größen](#erstellen_sie_die_notwendigen_icon-größen) beschrieben, sollten Sie mehrere Versionen Ihres Icons erstellen, um sicherzustellen, dass es an allen Orten, an denen es verwendet wird, korrekt erscheint. Aus diesem Grund ist das `icons` Mitglied ein Array von Objekten, von denen jedes ein Icon mit eigener Größe, Typ und Zweck repräsentiert. Jedes Icon-Objekt hat die folgenden Eigenschaften:

- `src`
  - : Die URL der Icon-Bilddatei.
- `sizes`
  - : Die Größen, für die das Icon verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, den das Betriebssystem verwenden kann, um Bilder, die es nicht unterstützt, schnell zu ignorieren.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Zum Beispiel definiert das folgende Web App Manifest fünf PNG-Icons, jeweils mit unterschiedlicher Größe:

```json
{
  "name": "My PWA",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "icon-72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Erstellen Sie die notwendigen Icon-Größen

Verschiedene Betriebssysteme verwenden unterschiedliche Icon-Größen an verschiedenen Orten und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Icons zu erstellen, damit es an allen Orten, an denen es verwendet wird, korrekt erscheint.

Zum Beispiel kann Windows Ihr App-Icon als 44x44 Pixel großes Bild in der Taskleiste oder als 150x150 Pixel großes Bild im Startmenü anzeigen. Verwenden Sie die folgenden Links, um mehr über die von verschiedenen Betriebssystemen verwendeten Icon-Größen und Tipps zur Erstellung effektiver Icons zu erfahren:

- Für Windows, siehe [Icons und eine Themenfarbe definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android, siehe [Google Play-Icon-Designspezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS, siehe [App-Icons](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Icon angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Icon auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu generieren, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie den [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die notwendigen Icon-Größen für Sie aus einem einzigen hochauflösenden Bild zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Icons unterstützen, was die Anzahl der zu erstellenden Bilder verringern kann, da SVG automatisch auf jede Größe skaliert werden kann. Wenn sich Ihr SVG-Icon nicht gut auf kleine Größen verkleinern lässt, kann es notwendig sein, zusätzliche Icons mit weniger Details und Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Icons.

Das folgende Beispiel eines Web App Manifests verwendet ein WebP-Bild für das kleine Icon, ein ICO-Bild für Icons mittlerer Größe und ein skalierbares SVG-Bild für hochauflösende Icons:

```json
{
  "name": "My PWA",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "icon-small.webp",
      "sizes": "48x48",
      "type": "image/webp"
    },
    {
      "src": "icon-medium.ico",
      "sizes": "72x72 96x96 128x128 256x256"
    },
    {
      "src": "icon-high.svg",
      "sizes": "257x257"
    }
  ]
}
```

Erfahren Sie mehr darüber, wie Sie auf die verschiedenen Icon-Größen im Abschnitt [Verweisen Sie auf Ihre Icons im Web App Manifest](#verweisen_sie_auf_ihre_icons_im_web_app_manifest) verweisen.

## Unterstützung der Maskierung

Abhängig vom Betriebssystem und den Gerätefähigkeiten kann auf Ihr Icon eine Maske angewendet werden, um eine bestimmte Form zu erreichen. Maskierbare Icons sind adaptive Icons, die in einer Vielzahl von Formen angezeigt werden können, die Betriebssysteme bieten. Zum Beispiel können App-Icons auf Android eine kreisförmige Maske haben.

Ihr PWA-App-Icon sollte speziell die Maskierung unterstützen, um gut in Betriebssysteme integriert zu sein, die Masken anwenden. Icons, die keine Maskierung unterstützen, können abgeschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht maskierbare Icons innerhalb der kreisförmigen Maske zentriert und erhalten einen weißen Hintergrund, was möglicherweise nicht gut mit Ihrem Icon aussieht.

Das folgende Bild veranschaulicht den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Icon auf Android:

![Ein nicht maskierbares Icon links, als kleines Quadrat innerhalb des App-Icon-Kreises. Ein maskierbares Icon rechts, das den gesamten App-Icon-Kreis füllt](./maskable-icon-comparison.png)

Um Ihr App-Icon maskierbar zu machen, verwenden Sie die `purpose` Eigenschaft in den Icon-Objekten Ihres Web App Manifests und setzen deren Wert auf `maskable`. Zum Beispiel:

```json
{
  "icons": [
    {
      "src": "icon-192-maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

Die Verwendung der `purpose` Eigenschaft ist nur der letzte Schritt, um Ihr Icon maskierbar zu machen. Sie müssen zuerst sicherstellen, dass Ihr Icon gut in das Host-Betriebssystem integriert aussieht, indem Sie sicherstellen, dass die wichtigen Teile des Icons gut innerhalb der _sicheren Zone_ der Maske erscheinen.

Die sichere Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und wird als ein Kreis definiert, dessen Durchmesser 80% der minimalen Dimension des Icons beträgt.

![Illustration der sicheren Zone innerhalb eines maskierbaren Icons](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Icon ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und dass seine Ecken nicht abgeschnitten werden.

Abschließend geben Sie Ihrem maskierbaren Icon eine undurchsichtige Hintergrundfarbe, um das gesamte Icon-Bereich zu füllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau zu sehen, wie Ihr Icon maskiert auf verschiedenen Betriebssystemen aussehen wird.

## Siehe auch

- [`icons` Manifestmitglied](/de/docs/Web/Manifest/Reference/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Icons](https://web.dev/articles/maskable-icon) auf web.dev
- [Icons und eine Themenfarbe definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
