---
title: Definieren Sie Ihre App-Symbole
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie andere Apps. Sobald eine PWA installiert ist, erscheint ihr App-Symbol auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem normalerweise native Apps des Betriebssystems erscheinen.

Zum Beispiel kann die Taskleiste unter Windows sowohl Symbole für native als auch PWA-Apps nebeneinander enthalten:

![Die Taskleiste unter Windows, die die üblichen Windows-Symbole zeigt, dann Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihr eigenes Set von Symbolen definieren, die verwendet werden, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Symbole definieren, welche Symbolgrößen Sie erstellen sollten und wie Sie Ihre Symbole für Maskierung unterstützen können.

> [!NOTE]
> Das PWA-App-Symbol ist nicht dasselbe wie das {{glossary("favicon")}}-Bild, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Symbol haben. Um mehr über Favicons zu erfahren, lesen Sie [Hinzufügen benutzerdefinierter Symbole zu Ihrer Website](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Symbol

Der erste Schritt bei der Definition Ihres App-Symbols ist dessen Gestaltung.

Die meisten Benutzer erkennen Anwendungen an ihren Symbolen. Symbole erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder der Einstellungsfenster. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie ihr Symbol sowohl optisch ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf verschiedenen Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder in diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Symbol angezeigt werden kann. Sie möchten möglicherweise auch Symbolversionen mit weniger Details erstellen, die an Stellen verwendet werden, an denen das Symbol in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Symbol als SVG-Datei zu entwerfen, da es dadurch in jede Größe skaliert werden kann, ohne an Qualität zu verlieren.

## Verweisen Sie auf Ihre Symbole im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/icons) Web-App-Manifest-Element, um ein Set von Symbolen für Ihre PWA zu definieren.

Wie im Abschnitt [Erstellen Sie die erforderlichen Symbolgrößen](#erstellen_sie_die_erforderlichen_symbolgrößen) beschrieben, sollten Sie mehrere Versionen Ihres Symbols erstellen, um sicherzustellen, dass es an all den Stellen, an denen es verwendet wird, korrekt erscheint. Aus diesem Grund ist das `icons`-Element ein Array von Objekten, von denen jedes ein Symbol mit seiner eigenen Größe, Typ und Zweck darstellt. Jedes Symbolobjekt hat die folgenden Eigenschaften:

- `src`
  - : Die URL der Symbolbilddatei.
- `sizes`
  - : Die Größen, für die das Symbol verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME type")}} der Bilddatei, die das Betriebssystem verwenden kann, um Bilder schnell zu ignorieren, die es nicht unterstützt.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Zum Beispiel definiert das folgende Web-App-Manifest fünf PNG-Symbole, jedes mit einer anderen Größe:

```json
{
  "name": "Meine PWA",
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

## Erstellen Sie die erforderlichen Symbolgrößen

Verschiedene Betriebssysteme verwenden unterschiedliche Symbolgrößen an verschiedenen Stellen und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Symbols zu erstellen, damit es an allen Orten, an denen es verwendet wird, korrekt erscheint.

Zum Beispiel kann Windows Ihr App-Symbol als 44x44-Pixel-Bild in der Taskleiste oder als 150x150-Pixel-Bild im Startmenü anzeigen. Verwenden Sie die folgenden Links für weitere Informationen über die von verschiedenen Betriebssystemen verwendeten Symbolgrößen und Tipps zur Erstellung effektiver Symbole:

- Für Windows siehe [Definieren von Symbolen und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Icon-Design-Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Symbole](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Symbol angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Symbol auf allen Geräten und Betriebssystemen zu testen, die Sie unterstützen möchten, und die Größen und Bildtypen zu erstellen, die die besten Ergebnisse liefern. Sie können auch ein Tool wie [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die erforderlichen Symbolgrößen für Sie aus einem einzigen hochauflösenden Bild zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Symbole unterstützen, was die Anzahl der zu erstellenden Bilder reduzieren kann, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Symbol nicht gut zu kleinen Größen skalierbar ist, kann es notwendig sein, zusätzliche Symbole mit weniger Details und Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Symbols.

Das folgende Web-App-Manifest-Beispiel verwendet ein WebP-Bild für das kleine Symbol, ein ICO-Bild für mittelgroße Symbole und ein skalierbares SVG-Bild für höher aufgelöste Symbole:

```json
{
  "name": "Meine PWA",
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

Erfahren Sie mehr darüber, wie Sie auf die verschiedenen Symbolgrößen verweisen können in [Verweisen Sie auf Ihre Symbole im Web-App-Manifest](#verweisen_sie_auf_ihre_symbole_im_web-app-manifest).

## Unterstützung der Maskierung

Abhängig vom Betriebssystem und den Gerätefähigkeiten kann eine Maske auf Ihr Symbol angewendet werden, um eine bestimmte Form zu erreichen. Maskierbare Symbole sind adaptive Symbole, die in einer Vielzahl von Formen angezeigt werden können, die von Betriebssystemen bereitgestellt werden. Zum Beispiel können auf Android App-Symbole eine kreisförmige Maske haben.

Ihr PWA-App-Symbol sollte speziell die Maskierung unterstützen, um gut in Betriebssysteme integriert zu wirken, die Masken anwenden. Symbole, die keine Maskierung unterstützen, können beschnitten oder kleiner als erwartet erscheinen. Auf Android sind nicht maskierbare Symbole innerhalb der kreisförmigen Maske zentriert und erhalten einen weißen Hintergrund, was nicht gut mit Ihrem Symbol aussehen könnte.

Das folgende Bild veranschaulicht den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Symbol auf Android:

![Ein nicht maskierbares Symbol links, als kleines Quadrat innerhalb des App-Symboleds. Ein maskierbares Symbol rechts, das den gesamten App-Symbol-Kreis ausfüllt](./maskable-icon-comparison.png)

Um Ihr App-Symbol maskierbar zu machen, verwenden Sie die `purpose`-Eigenschaft in den Symbolobjekten Ihres Web-App-Manifests und setzen Sie ihren Wert auf `maskable`. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Symbol maskierbar zu machen. Beginnen Sie damit, sicherzustellen, dass Ihr Symbol gut in das Gastbetriebssystem integriert aussieht, indem Sie sicherstellen, dass die wichtigen Teile des Symbols gut innerhalb der _sicheren Zone_ der Maske erscheinen.

Die sichere Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und wird als Kreis definiert, dessen Durchmesser 80% der minimalen Dimension des Symbols beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Symbols](./maskable-icon-safe-area.png)

Wenn Ihr Symbol beispielsweise ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und dass seine Ecken nicht abgeschnitten sind.

Geben Sie Ihrem maskierbaren Symbol schließlich eine deckende Hintergrundfarbe, um den gesamten Symbolbereich auszufüllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau darauf zu sehen, wie Ihr Symbol maskiert auf verschiedenen Betriebssystemen aussieht.

## Siehe auch

- [`icons` Manifest-Element](/de/docs/Web/Manifest/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Symbolen](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Symbolen und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
