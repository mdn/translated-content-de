---
title: Definieren Sie Ihre App-Symbole
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können genauso wie andere Apps auf Geräten installiert werden. Sobald eine PWA installiert ist, erscheint ihr App-Symbol auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an einem anderen Ort, an dem normalerweise Apps des Betriebssystems angezeigt werden.

Zum Beispiel kann die Taskleiste in Windows sowohl Symbole für native als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste in Windows zeigt die üblichen Windows-Symbole und dann Symbole für Firefox und Word, die native Apps sind, sowie Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihre eigenen Symbole definieren, die verwendet werden, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Symbole definieren, welche Symbolgrößen Sie erstellen sollten und wie Sie Ihre Symbole für Maskierung unterstützen können.

> [!NOTE]
> Das PWA-App-Symbol ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}, das in Bereichen wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Symbol haben. Um mehr über Favicons zu erfahren, siehe [Anpassen von Symbolen auf Ihrer Website](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

## Gestalten Sie Ihr Symbol

Der erste Schritt zur Definition Ihres App-Symbols ist die Gestaltung desselben.

Die meisten Benutzer erkennen Anwendungen durch ihre Symbole. Symbole erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder in den Einstellungen. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie ihr Symbol sowohl visuell ansprechend als auch repräsentativ für Ihre Anwendung machen.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf einer Vielzahl von Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder auf diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Symbol angezeigt werden kann. Sie können auch Versionen Ihres Symbols mit weniger Details erstellen, die an Stellen verwendet werden, wo das Symbol in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Symbol als SVG-Datei zu gestalten, da es somit ohne Qualitätsverlust auf jede Größe skaliert werden kann.

## Verweisen Sie in der Web-App-Manifestdatei auf Ihre Symbole

Verwenden Sie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Element im Web-App-Manifest, um eine Reihe von Symbolen für Ihre PWA zu definieren.

Wie im Abschnitt [Erstellen Sie die erforderlichen Symbolgrößen](#erstellen_sie_die_erforderlichen_symbolgrößen) beschrieben, sollten Sie mehrere Versionen Ihres Symbols erstellen, um sicherzustellen, dass es an allen Stellen richtig angezeigt wird, an denen es verwendet wird. Deshalb ist das `icons`-Element ein Array von Objekten, von denen jedes ein Symbol darstellt, mit eigener Größe, Typ und Zweck. Jedes Symbolobjekt hat die folgenden Eigenschaften:

- `src`
  - : Die URL der Symbolbilddatei.
- `sizes`
  - : Die Größen, für die das Symbol verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, sodass das Betriebssystem Bilder, die es nicht unterstützt, schnell ignorieren kann.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Zum Beispiel definiert das folgende Web-App-Manifest fünf PNG-Symbole, jedes mit einer anderen Größe:

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

## Erstellen Sie die erforderlichen Symbolgrößen

Verschiedene Betriebssysteme verwenden unterschiedliche Symbolgrößen an verschiedenen Stellen und für unterschiedliche Geräteeigenschaften. Es ist wichtig, mehrere Versionen Ihres Symbols zu erstellen, damit es überall, wo es verwendet wird, korrekt erscheint.

Zum Beispiel kann Windows Ihr App-Symbol als 44x44 Pixel Bild in der Taskleiste oder als 150x150 Pixel Bild im Startmenü anzeigen. Verwenden Sie die folgenden Links für weitere Informationen zu den von verschiedenen Betriebssystemen verwendeten Symbolgrößen und Tipps zur Erstellung wirkungsvoller Symbole:

- Für Windows siehe [Definieren von Symbolen und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Icon Design Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Symbole](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Anzeigegrößen Ihres Symbols hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Am besten testen Sie Ihr Symbol auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, und erstellen Sie die Größen und Bildtypen, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die erforderlichen Symbolgrößen aus einem einzigen hochauflösenden Bild zu erzeugen.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Symbole unterstützen, die helfen können, die Anzahl der zu erstellenden Bilder zu reduzieren, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Symbol nicht gut auf kleine Größen skaliert, kann es nötig sein, zusätzliche Symbole mit weniger Details und weniger Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Symbols.

Das folgende Web-App-Manifest-Beispiel verwendet ein WebP-Bild für das kleine Symbol, ein ICO-Bild für Symbole mittlerer Größe und ein skalierbares SVG-Bild für hochauflösende Symbole:

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

Erfahren Sie mehr darüber, wie Sie die verschiedenen Symbolgrößen im Abschnitt [Verweisen Sie in der Web-App-Manifestdatei auf Ihre Symbole](#verweisen_sie_in_der_web-app-manifestdatei_auf_ihre_symbole) angeben.

## Unterstützung für Maskierung

Abhängig vom Betriebssystem und den Geräteeigenschaften kann eine Maske auf Ihr Symbol angewendet werden, um es an eine bestimmte Form anzupassen. Maskierbare Symbole sind Adaptive Symbole, die in einer Vielzahl von Formen angezeigt werden können, die das Betriebssystem bereitstellt. Zum Beispiel können auf Android App-Symbole eine kreisförmige Maske haben.

Ihr PWA-App-Symbol sollte speziell die Maskierung unterstützen, um gut integriert mit Betriebssystemen zu wirken, die Masken anwenden. Symbole, die die Maskierung nicht unterstützen, können beschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht maskierbare Symbole innerhalb der kreisförmigen Maske zentriert und mit einem weißen Hintergrund versehen, was nicht gut zu Ihrem Symbol passen könnte.

Das folgende Bild veranschaulicht den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Symbol auf Android:

![Ein nicht maskierbares Symbol links, als kleines Quadrat innerhalb des App-Symbol-Kreises. Ein maskierbares Symbol rechts, das den gesamten App-Symbol-Kreis ausfüllt](./maskable-icon-comparison.png)

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Symbol maskierbar zu machen. Sie müssen zunächst sicherstellen, dass Ihr Symbol gut mit dem Host-Betriebssystem integriert aussieht, indem Sie sicherstellen, dass die wichtigen Teile des Symbols gut innerhalb der Maske _sicheren Zone_ erscheinen.

Die sichere Zone ist der Bereich, der immer sichtbar ist, wenn die Maske angewendet wird, und wird definiert als ein Kreis, dessen Durchmesser 80% der minimalen Dimension des Symbols beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Symbols](./maskable-icon-safe-area.png)

Zum Beispiel, wenn Ihr Symbol ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und dass seine Ecken nicht abgeschnitten werden.

Schließlich geben Sie Ihrem maskierbaren Symbol eine undurchsichtige Hintergrundfarbe, um den gesamten Symbolbereich zu füllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um eine Vorschau zu sehen, wie Ihr Symbol bei verschiedenen Betriebssystemen maskiert aussieht.

## Siehe auch

- [`icons` Manifest-Element](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Symbolen](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Symbolen und einer Themenfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
