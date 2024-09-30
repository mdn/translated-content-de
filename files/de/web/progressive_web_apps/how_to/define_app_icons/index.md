---
title: Definieren Sie Ihre App-Icons
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie andere Apps. Sobald eine PWA installiert ist, erscheint das App-Icon auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem normalerweise native Apps des Betriebssystems angezeigt werden.

Zum Beispiel kann die Taskleiste unter Windows sowohl Symbole für native als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste unter Windows, die die üblichen Windows-Symbole zeigt, und dann Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihr eigenes Set von Icons definieren, das verwendet wird, wenn die App auf einem Gerät installiert ist. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Icons definieren, welche Icon-Größen zu erstellen sind und wie Sie Ihre Icons für das Maskieren unterstützen können.

> [!NOTE]
> Das PWA-App-Icon ist nicht dasselbe wie das [Favicon](/de/docs/Glossary/favicon)-Bild, das an Stellen wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Icon haben. Um mehr über Favicons zu erfahren, lesen Sie [Benutzerdefinierte Symbole zu Ihrer Site hinzufügen](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Icon

Der erste Schritt bei der Definition Ihres App-Icons besteht darin, es zu entwerfen.

Die meisten Benutzer erkennen Anwendungen an ihren Icons. Symbole erscheinen an vielen Orten im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder der Einstellungspanels. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie das Icon sowohl optisch ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf verschiedenen Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder skalierbar auf diese Größe, da dies die größte Größe ist, in der Ihr Icon angezeigt werden kann. Es kann auch sinnvoll sein, Versionen Ihres Icons mit weniger Details zu erstellen, um sie an Orten zu verwenden, an denen das Icon in kleineren Größen angezeigt wird.

Das Entwerfen Ihres Icons als SVG-Datei ist eine gute Idee, da es dadurch ohne Qualitätsverlust auf jede Größe skaliert werden kann.

## Verweisen Sie auf Ihre Icons im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/icons)-Mitglied des Web-App-Manifests, um ein Set von Icons für Ihre PWA zu definieren.

Wie in [Erstellen Sie die notwendigen Icon-Größen](#erstellen_sie_die_notwendigen_icon-größen) beschrieben, sollten Sie mehrere Versionen Ihres Icons erstellen, um sicherzustellen, dass es an allen Orten korrekt erscheint, an denen es verwendet wird. Aus diesem Grund ist das `icons`-Mitglied ein Array von Objekten, von denen jedes ein Icon mit eigener Größe, Typ und Zweck darstellt. Jedes Icon-Objekt hat die folgenden Eigenschaften:

- `src`
  - : Die URL der Icon-Bilddatei.
- `sizes`
  - : Die Größen, für die das Icon verwendet werden kann.
- `type`
  - : Der [MIME-Typ](/de/docs/Glossary/MIME_type) der Bilddatei, die das Betriebssystem verwenden kann, um Bilder schnell zu ignorieren, die es nicht unterstützt.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Zum Beispiel definiert das folgende Web-App-Manifest fünf PNG-Icons, jedes mit einer unterschiedlichen Größe:

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

Verschiedene Betriebssysteme verwenden unterschiedliche Icon-Größen an verschiedenen Orten und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Icons zu erstellen, damit es an allen Orten korrekt angezeigt wird, an denen es verwendet wird.

Zum Beispiel kann Windows Ihr App-Icon in der Taskleiste als 44x44 Pixel-Bild oder im Startmenü als 150x150 Pixel-Bild anzeigen. Verwenden Sie die folgenden Links, um mehr über die von verschiedenen Betriebssystemen verwendeten Icon-Größen und Tipps zum Erstellen effektiver Icons zu erfahren:

- Für Windows siehe [Definieren von Icons und einer Themafarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Icon Design-Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Symbole](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Icon angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Icon auf allen Geräten und Betriebssystemen zu testen, die Sie unterstützen möchten, und die Größen und Bildtypen zu generieren, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie den [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die notwendigen Icon-Größen für Sie aus einem einzigen hochauflösenden Bild zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Icons unterstützen, die die Anzahl der zu erstellenden Bilder reduzieren können, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Icon nicht gut auf kleine Größen skaliert, kann es notwendig sein, zusätzliche Icons mit weniger Details und weniger Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Icons.

Das folgende Beispiel eines Web-App-Manifests verwendet ein WebP-Bild für das kleine Icon, ein ICO-Bild für mittelgroße Icons und ein skalierbares SVG-Bild für hochauflösende Icons:

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

Erfahren Sie mehr darüber, wie Sie die verschiedenen Icon-Größen in [Verweisen Sie auf Ihre Icons im Web-App-Manifest](#verweisen_sie_auf_ihre_icons_im_web-app-manifest) referenzieren.

## Unterstützung von Maskierung

Je nach Betriebssystem und Gerätekapazitäten kann Ihrem Icon eine Maske zugewiesen werden, um eine bestimmte Form anzupassen. Maskierbare Icons sind adaptive Icons, die in einer Vielzahl von Formen angezeigt werden können, die von Betriebssystemen bereitgestellt werden. Zum Beispiel können App-Icons auf Android eine kreisförmige Maske haben.

Ihr PWA-App-Icon sollte speziell das Maskieren unterstützen, um gut integriert mit Betriebssystemen, die Masken anwenden, auszusehen. Icons, die das Maskieren nicht unterstützen, können abgeschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht maskierbare Icons innerhalb der kreisförmigen Maske zentriert und mit einem weißen Hintergrund versehen, was möglicherweise nicht gut mit Ihrem Icon aussieht.

Das folgende Bild veranschaulicht den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Icon auf Android:

![Ein nicht maskierbares Icon links, als kleines Quadrat innerhalb des Kreis-App-Icons. Ein maskierbares Icon rechts, das den gesamten Kreis des App-Icons ausfüllt](./maskable-icon-comparison.png)

Um Ihr App-Icon maskierbar zu machen, verwenden Sie die `purpose`-Eigenschaft in den Icon-Objekten Ihres Web-App-Manifests und setzen Sie ihren Wert auf `maskable`. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Icon maskierbar zu machen. Sie müssen sicherstellen, dass Ihr Icon gut in das Host-Betriebssystem integriert ist, indem Sie sicherstellen, dass die wichtigen Teile des Icons gut innerhalb der _sicheren Zone_ der Maske erscheinen.

Die sichere Zone ist der Bereich, der immer sichtbar bleibt, wenn die Maske angewendet wird, und als Kreis definiert ist, dessen Durchmesser 80% der minimalen Dimension des Icons beträgt.

![Darstellung des sicheren Bereichs innerhalb eines maskierbaren Icons](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Icon ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und seine Ecken nicht abgeschnitten sind.

Geben Sie Ihrem maskierbaren Icon schließlich eine undurchsichtige Hintergrundfarbe, um den gesamten Icon-Bereich auszufüllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau zu sehen, wie Ihr Icon bei Verwendung von Masken auf verschiedenen Betriebssystemen aussieht.

## Siehe auch

- [`icons` manifest member](/de/docs/Web/Manifest/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptives Icon-Support in PWAs mit maskierbaren Icons](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Icons und einer Themafarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
