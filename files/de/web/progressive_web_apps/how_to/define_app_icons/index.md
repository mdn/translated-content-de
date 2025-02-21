---
title: Definieren Sie Ihre App-Icons
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten wie andere Apps installiert werden. Sobald eine PWA installiert ist, erscheint ihr App-Icon auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an anderen Orten, an denen normalerweise auch native Apps des Betriebssystems angezeigt werden.

Zum Beispiel kann auf Windows die Taskleiste sowohl Icons für native Apps als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste auf Windows, die die üblichen Windows-Icons zeigt, sowie Icons für Firefox und Word, die native Apps sind, aber auch Icons für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Wenn Sie eine PWA erstellen, können Sie Ihre eigenen Icon-Sets definieren, die verwendet werden, wenn die App auf einem Gerät installiert ist. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Icons definieren, welche Icon-Größen zu erstellen sind und wie Sie Ihre Icons so gestalten, dass sie Maskierung unterstützen.

> [!NOTE]
> Das PWA-App-Icon ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Icon haben. Um mehr über Favicons zu erfahren, lesen Sie [Hinzufügen von benutzerdefinierten Icons zu Ihrer Website](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

## Ihr Icon entwerfen

Der erste Schritt bei der Definition Ihres App-Icons ist dessen Entwurf.

Die meisten Benutzer erkennen Anwendungen anhand ihrer Icons. Icons erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder in Einstellungsfenstern. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie ihr Icon sowohl visuell ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf einer Vielzahl von Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder skalierbar zu dieser Größe, da dies die größte Größe ist, in der Ihr Icon angezeigt werden kann. Sie sollten auch Icon-Versionen mit weniger Details erstellen, um sie an Orten zu verwenden, an denen das Icon in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Icon als SVG-Datei zu entwerfen, da dies es ermöglicht, ohne Qualitätsverlust auf jede Größe skaliert zu werden.

## Referenzieren Sie Ihre Icons im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Web-App-Manifest-Element, um ein Set von Icons für Ihre PWA zu definieren.

Wie unter [Erstellen der notwendigen Icon-Größen](#erstellen_sie_die_notwendigen_icon-größen) beschrieben, sollten Sie mehrere Versionen Ihres Icons erstellen, um sicherzustellen, dass es an allen Orten, an denen es verwendet wird, korrekt angezeigt wird. Aus diesem Grund ist das `icons`-Element ein Array von Objekten, von denen jedes ein Icon darstellt, mit seiner eigenen Größe, seinem Typ und Zweck. Jedes Icon-Objekt hat folgende Eigenschaften:

- `src`
  - : Die URL der Icon-Bilddatei.
- `sizes`
  - : Die Größen, für die das Icon verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, den das Betriebssystem verwenden kann, um Bilder schnell zu ignorieren, die es nicht unterstützt.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Beispielsweise definiert das folgende Web-App-Manifest fünf PNG-Icons, jedes mit einer anderen Größe:

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

Verschiedene Betriebssysteme verwenden unterschiedliche Icon-Größen an verschiedenen Orten und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Icons zu erstellen, damit es an allen Orten, an denen es verwendet wird, korrekt angezeigt wird.

Zum Beispiel kann Windows Ihr App-Icon als 44x44 Pixel-Bild in der Taskleiste oder als 150x150 Pixel-Bild im Startmenü anzeigen. Verwenden Sie die untenstehenden Links für weitere Informationen über die von verschiedenen Betriebssystemen benötigten Icon-Größen und Tipps zum Erstellen effektiver Icons:

- Für Windows siehe [Definieren von Icons und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Icon-Design-Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Icons](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Icon angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Icon auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu generieren, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie den [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die notwendigen Icon-Größen aus einem einzigen hochauflösenden Bild für Sie zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Icons unterstützen, was die Anzahl der zu erstellenden Bilder reduzieren kann, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Icon nicht gut auf kleine Größen skaliert, kann es notwendig sein, zusätzliche Icons mit weniger Details und Komplexität zu erstellen. Um alle Betriebssysteme und kleine Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Icons.

Das folgende Web-App-Manifestbeispiel verwendet ein WebP-Bild für das kleine Icon, ein ICO-Bild für mittelgroße Icons und ein skalierbares SVG-Bild für höher aufgelöste Icons:

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

Erfahren Sie mehr darüber, wie Sie die verschiedenen Icon-Größen referenzieren in [Referenzieren Sie Ihre Icons im Web-App-Manifest](#referenzieren_sie_ihre_icons_im_web-app-manifest).

## Unterstützung für Maskierung

Abhängig vom Betriebssystem und den Gerätefähigkeiten kann Ihrem Icon eine Maske hinzugefügt werden, um eine bestimmte Form zu entsprechen. Maskierbare Icons sind adaptive Icons, die in einer Vielzahl von Formen angezeigt werden können, die von Betriebssystemen angeboten werden. Zum Beispiel können auf Android App-Icons eine kreisförmige Maske haben.

Ihr PWA-App-Icon sollte speziell Maskierung unterstützen, um gut mit Betriebssystemen integriert auszusehen, die Masken anwenden. Icons, die keine Maskierung unterstützen, können beschnitten erscheinen oder kleiner als erwartet sein. Auf Android sind nicht-maskierbare Icons in der kreisförmigen Maske zentriert und erhalten einen weißen Hintergrund, was mit Ihrem Icon möglicherweise nicht gut aussieht.

Das folgende Bild zeigt den Unterschied zwischen einem maskierbaren und einem nicht-maskierbaren Icon auf Android:

![Ein nicht-maskierbares Icon links, als kleines Quadrat innerhalb des App-Icon-Kreises. Ein maskierbares Icon rechts, das den gesamten App-Icon-Kreis ausfüllt](./maskable-icon-comparison.png)

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Icon maskierbar zu machen. Sie müssen damit beginnen, sicherzustellen, dass Ihr Icon gut mit dem Host-Betriebssystem integriert ist, indem Sie sicherstellen, dass die wichtigen Teile des Icons gut innerhalb der Masken-_Schutzzone_ erscheinen.

Die Schutzzone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und als Kreis definiert ist, dessen Durchmesser 80% der minimalen Dimension des Icons beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Icons](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Icon ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der Schutzzone sichtbar ist und seine Ecken nicht abgeschnitten werden.

Abschließend geben Sie Ihrem maskierbaren Icon eine opake Hintergrundfarbe, um den gesamten Icon-Bereich auszufüllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau zu sehen, wie Ihr Icon aussieht, wenn es auf verschiedenen Betriebssystemen maskiert wird.

## Siehe auch

- [`icons` Manifest-Element](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Icons](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Icons und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
