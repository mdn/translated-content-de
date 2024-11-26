---
title: Definieren Sie Ihre App-Icons
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie andere Apps. Sobald eine PWA installiert ist, erscheint ihr App-Icon auf dem Startbildschirm, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem normalerweise native Betriebssystem-Apps erscheinen.

Zum Beispiel kann die Taskleiste unter Windows sowohl Symbole für native Apps als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste unter Windows, die die üblichen Windows-Symbole zeigt, dann Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihr eigenes Set von Icons definieren, das verwendet wird, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Icons definieren, welche Icon-Größen Sie erstellen sollten und wie Sie Ihre Icons so gestalten, dass sie Maskierung unterstützen.

> [!NOTE]
> Das PWA-App-Icon ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Icon haben. Um mehr über Favicons zu erfahren, lesen Sie [Hinzufügen benutzerdefinierter Icons zu Ihrer Website](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Icon

Der erste Schritt zur Definition Ihres App-Icons ist dessen Entwurf.

Die meisten Nutzer erkennen Anwendungen an ihren Icons. Icons erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Starters oder der Einstellungsfenster. Stellen Sie sicher, dass Ihre Nutzer Ihre App leicht finden können, indem Sie ihr Icon sowohl optisch ansprechend als auch repräsentativ für Ihre Anwendung machen.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf verschiedenen Hintergründen dargestellt werden kann. Es sollte mindestens 1024x1024 Pixel groß oder auf diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Icon angezeigt werden kann. Sie möchten möglicherweise auch Icon-Versionen mit weniger Details erstellen, die an Orten verwendet werden, an denen das Icon in kleineren Größen angezeigt wird.

Ein Icon als SVG-Datei zu entwerfen ist eine gute Idee, da es so auf jede Größe skaliert werden kann, ohne an Qualität zu verlieren.

## Referenzieren Sie Ihre Icons im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/icons) Web-App-Manifest-Mitglied, um eine Reihe von Icons für Ihre PWA zu definieren.

Wie in [Erstellen Sie die erforderlichen Icon-Größen](#erstellen_sie_die_erforderlichen_icon-größen) beschrieben, sollten Sie mehrere Versionen Ihres Icons erstellen, um sicherzustellen, dass es an allen Stellen, an denen es verwendet wird, korrekt angezeigt wird. Aus diesem Grund ist das `icons`-Mitglied ein Array von Objekten, von denen jedes ein Icon mit seiner eigenen Größe, seinem Typ und Zweck repräsentiert. Jedes Icon-Objekt hat folgende Eigenschaften:

- `src`
  - : Die URL der Icon-Bilddatei.
- `sizes`
  - : Die Größen, für die das Icon verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, den das Betriebssystem verwenden kann, um Bilder schnell zu ignorieren, die es nicht unterstützt.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

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

## Erstellen Sie die erforderlichen Icon-Größen

Verschiedene Betriebssysteme verwenden unterschiedliche Icon-Größen an verschiedenen Orten und für unterschiedliche Gerätefunktionalitäten. Es ist wichtig, mehrere Versionen Ihres Icons zu erstellen, damit es überall dort korrekt angezeigt wird, wo es verwendet wird.

Zum Beispiel kann Windows Ihr App-Icon als 44x44 Pixel großes Bild in der Taskleiste anzeigen oder als 150x150 Pixel großes Bild im Startmenü. Verwenden Sie die folgenden Links, um mehr über die von verschiedenen Betriebssystemen verwendeten Icon-Größen und Tipps zum Erstellen effektiver Icons zu erfahren:

- Für Windows siehe [Define icons and a theme color](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play icon design specifications](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Icon angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Icon auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu erstellen, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die erforderlichen Icon-Größen aus einem einzigen hochauflösenden Bild zu erzeugen.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG) Icons unterstützen, was die Anzahl der zu erstellenden Bilder reduzieren kann, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Icon nicht gut auf kleine Größen skaliert, kann es notwendig sein, zusätzliche Icons mit weniger Details und weniger Komplexität zu erstellen. Um alle Betriebssysteme und kleine Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Icons.

Das folgende Web-App-Manifest-Beispiel verwendet ein WebP-Bild für das kleine Icon, ein ICO-Bild für mittelgroße Icons und ein skalierbares SVG-Bild für höher aufgelöste Icons:

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

## Unterstützung für Maskierung

Je nach Betriebssystem und Gerätefunktionalität kann eine Maske auf Ihr Icon angewendet werden, um eine bestimmte Form zu erreichen. Maskierbare Icons sind adaptive Icons, die in verschiedenen Formen angezeigt werden können, die von Betriebssystemen bereitgestellt werden. Zum Beispiel können App-Icons auf Android eine runde Maske haben.

Ihr PWA-App-Icon sollte speziell das Maskieren unterstützen, um gut in Betriebssysteme integriert zu sein, die Masken anwenden. Icons, die keine Maskierung unterstützen, können beschnitten oder kleiner als erwartet angezeigt werden. Auf Android werden nicht maskierbare Icons innerhalb der runden Maske zentriert und erhalten einen weißen Hintergrund, was mit Ihrem Icon möglicherweise nicht gut aussieht.

Das folgende Bild zeigt den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Icon auf Android:

![Ein nicht maskierbares Icon auf der linken Seite, als kleines Quadrat innerhalb des App-Icon-Kreises. Ein maskierbares Icon auf der rechten Seite, das den gesamten App-Icon-Kreis ausfüllt](./maskable-icon-comparison.png)

Um Ihr App-Icon maskierbar zu machen, verwenden Sie die `purpose`-Eigenschaft in den Icon-Objekten Ihres Web-App-Manifests und setzen Sie deren Wert auf `maskable`. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Icon maskierbar zu machen. Sie sollten damit beginnen, sicherzustellen, dass Ihr Icon gut in das Betriebssystem integriert erscheint, indem Sie dafür sorgen, dass die wichtigen Teile des Icons gut innerhalb der Maske _sichere Zone_ erscheinen.

Die sichere Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und als Kreis definiert ist, dessen Durchmesser 80% der minimalen Abmessung des Icons beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Icons](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Icon ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und seine Ecken nicht abgeschnitten sind.

Schließlich geben Sie Ihrem maskierbaren Icon eine undurchsichtige Hintergrundfarbe, um den gesamten Icon-Bereich zu füllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau anzuzeigen, wie Ihr Icon aussehen wird, wenn es auf verschiedenen Betriebssystemen maskiert wird.

## Siehe auch

- [`icons` manifest member](/de/docs/Web/Manifest/icons)
- [App-Gestaltung](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Icons](https://web.dev/articles/maskable-icon) auf web.dev
- [Define icons and a theme color](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
