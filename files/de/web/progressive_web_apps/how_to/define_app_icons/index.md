---
title: Definieren Sie Ihre App-Icons
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten genauso wie andere Apps installiert werden. Sobald eine PWA installiert ist, erscheint ihr App-Icon auf dem Startbildschirm, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem normalerweise native Apps des Betriebssystems erscheinen.

Beispielsweise kann die Taskleiste unter Windows sowohl Icons für native Apps als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste unter Windows, die die üblichen Windows-Icons zeigt, sowie Icons für Firefox und Word, die native Apps sind, aber auch Icons für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Wenn Sie eine PWA erstellen, können Sie Ihr eigenes Set an Icons definieren, das verwendet wird, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Icons definieren, welche Icon-Größen Sie erstellen sollten und wie Sie Ihre Icons für Maskierungen unterstützen können.

> [!NOTE]
> Das PWA-App-Icon ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Icon haben. Um mehr über Favicons zu erfahren, lesen Sie [Eigene Icons zu Ihrer Website hinzufügen](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Icon

Der erste Schritt bei der Definition Ihres App-Icons ist es, dieses zu entwerfen.

Die meisten Benutzer erkennen Anwendungen an ihren Icons. Icons erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder Einstellungsfenstern. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie das Icon sowohl optisch ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf unterschiedlichen Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder auf diese Größe skalierbar, da dies die größte Größe ist, in der Ihr Icon angezeigt werden kann. Möglicherweise möchten Sie auch Icon-Versionen mit weniger Details erstellen, die an Orten verwendet werden, an denen das Icon in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Icon als SVG-Datei zu gestalten, da es so ohne Qualitätsverlust auf jede Größe skaliert werden kann.

## Referenzieren Sie Ihre Icons im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Mitglied des Web-App-Manifests, um ein Set von Icons für Ihre PWA zu definieren.

Wie im Abschnitt [Erstellen Sie die notwendigen Icon-Größen](#erstellen_sie_die_notwendigen_icon-größen) beschrieben, sollten Sie mehrere Versionen Ihres Icons erstellen, um sicherzustellen, dass es an allen Orten, an denen es verwendet wird, korrekt erscheint. Deshalb ist das `icons`-Mitglied ein Array von Objekten, von denen jedes ein Icon mit seiner eigenen Größe, seinem Typ und Zweck darstellt. Jedes Icon-Objekt hat die folgenden Eigenschaften:

- `src`
  - : Die URL der Icon-Bilddatei.
- `sizes`
  - : Die Größen, für die das Icon verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, den das Betriebssystem verwenden kann, um Bilder, die es nicht unterstützt, schnell zu ignorieren.
- `purpose`
  - : Der OS-spezifische Zweck des Bildes.

Zum Beispiel definiert das folgende Web-App-Manifest fünf PNG-Icons, jedes mit einer anderen Größe:

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

Verschiedene Betriebssysteme verwenden unterschiedliche Icon-Größen an verschiedenen Orten und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Icons zu erstellen, damit es an allen Stellen, an denen es verwendet wird, korrekt erscheint.

Zum Beispiel kann Windows Ihr App-Icon als 44x44-Pixel-Bild in der Taskleiste oder als 150x150-Pixel-Bild im Startmenü anzeigen. Verwenden Sie die unten stehenden Links für mehr Informationen zu den von verschiedenen Betriebssystemen verwendeten Icon-Größen und Tipps zur Erstellung effektiver Icons:

- Für Windows siehe [Definieren von Icons und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Icon Design-Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Icons](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Icon angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Icon auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu erstellen, die die besten Ergebnisse liefern. Sie können auch ein Tool wie den [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die notwendigen Icon-Größen von einem einzigen hochauflösenden Bild aus zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Icons unterstützen, was helfen kann, die Anzahl der zu erstellenden Bilder zu reduzieren, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Icon nicht gut auf kleine Größen skaliert, kann es notwendig sein, zusätzliche Icons mit weniger Details und Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Icons.

Das folgende Beispiel für ein Web-App-Manifest verwendet ein WebP-Bild für das kleine Icon, ein ICO-Bild für mittelgroße Icons und ein skalierbares SVG-Bild für hochauflösende Icons:

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

Erfahren Sie mehr darüber, wie Sie die verschiedenen Icon-Größen in [Referenzieren Sie Ihre Icons im Web-App-Manifest](#referenzieren_sie_ihre_icons_im_web-app-manifest) referenzieren.

## Unterstützung von Maskierungen

Abhängig vom Betriebssystem und den Gerätefähigkeiten kann auf Ihr Icon eine Maske angewendet werden, um eine bestimmte Form zu erreichen. Maskierbare Icons sind adaptive Icons, die in einer Vielzahl von Formen angezeigt werden können, die die Betriebssysteme bereitstellen. Zum Beispiel können App-Icons unter Android einen kreisförmigen Maskenbereich haben.

Ihr PWA-App-Icon sollte speziell Maskierungen unterstützen, um gut in die Betriebssysteme integriert zu wirken, die Masken anwenden. Icons, die keine Maskierung unterstützen, könnten abgeschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht maskierbare Icons in der Mitte des kreisförmigen Maskenbereichs zentriert und mit einem weißen Hintergrund versehen, was möglicherweise nicht gut zu Ihrem Icon passt.

Das folgende Bild zeigt den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Icon unter Android:

![Ein nicht maskierbares Icon links, als kleines Quadrat innerhalb des App-Icon-Kreises. Ein maskierbares Icon rechts, das den gesamten App-Icon-Kreis ausfüllt](./maskable-icon-comparison.png)

Um Ihr App-Icon maskierbar zu machen, verwenden Sie die `purpose`-Eigenschaft in den Icon-Objekten Ihres Web-App-Manifests und setzen Sie den Wert auf `maskable`. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Icon maskierbar zu machen. Sie müssen sicherstellen, dass Ihr Icon gut in das Host-Betriebssystem integriert erscheint, indem Sie die wichtigen Teile des Icons gut innerhalb der _sicheren Zone_ der Maske erscheinen lassen.

Die sichere Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und ist als ein Kreis definiert, dessen Durchmesser 80% der minimalen Dimension des Icons beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Icons](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Icon ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und die Ecken nicht abgeschnitten werden.

Geben Sie Ihrem maskierbaren Icon abschließend eine undurchsichtige Hintergrundfarbe, um den gesamten Icon-Bereich auszufüllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau zu erhalten, wie Ihr Icon maskiert auf verschiedenen Betriebssystemen aussehen wird.

## Siehe auch

- [`icons` Manifest-Mitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Icons](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Icons und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
