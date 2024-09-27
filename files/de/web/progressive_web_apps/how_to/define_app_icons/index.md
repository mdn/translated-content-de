---
title: Definieren Sie Ihre App-Symbole
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten wie andere Apps installiert werden. Sobald eine PWA installiert ist, erscheint ihr App-Symbol auf dem Startbildschirm, im Dock, in der Taskleiste oder an einem anderen Ort, an dem normalerweise native Apps des Betriebssystems erscheinen.

Zum Beispiel kann die Taskleiste unter Windows sowohl Symbole für native als auch für PWA-Apps nebeneinander enthalten:

![Die Taskleiste auf Windows, zeigt die üblichen Windows-Symbole, sowie Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihr eigenes Satz von Symbolen definieren, die verwendet werden, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Symbole definieren, welche Symbolgrößen erstellt werden sollen und wie Sie Ihre Symbole so gestalten, dass sie Maskierung unterstützen.

> [!NOTE]
> Das PWA-App-Symbol ist nicht dasselbe wie das [Favicon](/de/docs/Glossary/favicon), das an Stellen wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Symbol haben. Um mehr über Favicons zu erfahren, siehe [Benutzerdefinierte Symbole zu Ihrer Website hinzufügen](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site).

## Designen Sie Ihr Symbol

Der erste Schritt bei der Definition Ihres App-Symbols ist dessen Gestaltung.

Die meisten Nutzer erkennen Anwendungen an ihren Symbolen. Symbole erscheinen an vielen Stellen im Betriebssystem, einschließlich des Startbildschirms, der Taskleiste, des App-Launchers oder der Einstellungsfenster. Stellen Sie sicher, dass Ihre Nutzer Ihre App leicht finden können, indem Sie ihr Symbol sowohl visuell ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf einer Vielzahl von Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder auf diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Symbol angezeigt werden kann. Sie sollten auch Versionen des Symbols mit weniger Details erstellen, um sie an Stellen zu verwenden, an denen das Symbol in kleinerer Größe angezeigt wird.

Es ist eine gute Idee, Ihr Symbol als SVG-Datei zu entwerfen, da es dadurch ohne Qualitätsverlust auf jede Größe skaliert werden kann.

## Verweisen Sie auf Ihre Symbole im Web App Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/icons) Web-App-Manifest-Mitglied, um ein Satz von Symbolen für Ihre PWA zu definieren.

Wie beschrieben unter [Erstellen Sie die erforderlichen Symbolgrößen](#erstellen_sie_die_erforderlichen_symbolgrößen), sollten Sie mehrere Versionen Ihres Symbols erstellen, um sicherzustellen, dass es an allen Einsatzorten korrekt erscheint. Aus diesem Grund ist das `icons`-Mitglied ein Array von Objekten, die jeweils ein Symbol mit eigener Größe, Typ und Zweck repräsentieren. Jedes Symbolobjekt hat folgende Eigenschaften:

- `src`
  - : Die URL der Symbolbilddatei.
- `sizes`
  - : Die Größen, für die das Symbol verwendet werden kann.
- `type`
  - : Der [MIME-Typ](/de/docs/Glossary/MIME_type) der Bilddatei, die das Betriebssystem schnell ignorieren kann, wenn es diese nicht unterstützt.
- `purpose`
  - : Der betriebssystemspezifische Zweck des Bildes.

Beispielsweise definiert das folgende Web-App-Manifest fünf PNG-Symbole, jedes mit einer anderen Größe:

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

Verschiedene Betriebssysteme verwenden an unterschiedlichen Orten und für unterschiedliche Geräteeigenschaften verschiedene Symbolgrößen. Es ist wichtig, mehrere Versionen Ihres Symbols zu erstellen, damit es an allen Einsatzorten korrekt erscheint.

Zum Beispiel kann Windows Ihr App-Symbol als 44x44 Pixel großes Bild in der Taskleiste oder als 150x150 Pixel großes Bild im Startmenü anzeigen. Verwenden Sie die folgenden Links für weitere Informationen zu den von verschiedenen Betriebssystemen verwendeten Symbolgrößen und Tipps zur Erstellung effektiver Symbole:

- Für Windows siehe [Definieren von Symbolen und einer Themendfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play Symbolgestaltungs-Spezifikationen](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App-Symbole](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größe, in der Ihr Symbol angezeigt wird, hängt vom Betriebssystem ab und kann sich im Laufe der Zeit ändern. Es ist am besten, Ihr Symbol auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu erstellen, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die erforderlichen Symbolgrößen für Sie aus einem einzigen hochauflösenden Bild zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG) Symbole unterstützen, die helfen können, die Anzahl der zu erstellenden Bilder zu reduzieren, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Symbol nicht gut auf kleine Größen herunterskaliert wird, kann es notwendig sein, zusätzliche Symbole mit weniger Details und weniger Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Symbols.

Das folgende Web-App-Manifest-Beispiel verwendet ein WebP-Bild für das kleine Symbol, ein ICO-Bild für mittelgroße Symbole und ein skalierbares SVG-Bild für hochauflösende Symbole:

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

Erfahren Sie mehr darüber, wie Sie auf die verschiedenen Symbolgrößen im Abschnitt [Verweisen Sie auf Ihre Symbole im Web App Manifest](#verweisen_sie_auf_ihre_symbole_im_web_app_manifest) verweisen können.

## Unterstützen Sie Maskierung

Abhängig vom Betriebssystem und den Geräteeigenschaften kann auf Ihr Symbol eine Maske angewendet werden, um einer bestimmten Form zu entsprechen. Maskierbare Symbole sind adaptive Symbole, die in verschiedenen Formen angezeigt werden können, die von Betriebssystemen bereitgestellt werden. Beispielsweise können App-Symbole auf Android eine kreisförmige Maske haben.

Ihr PWA-App-Symbol sollte explizit Maskierung unterstützen, um gut mit Betriebssystemen auszusehen, die Maskierung verwenden. Symbole, die keine Unterstützung für Maskierung bieten, können beschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht maskierbare Symbole innerhalb der kreisförmigen Maske zentriert und mit einem weißen Hintergrund versehen, was möglicherweise nicht gut mit Ihrem Symbol aussieht.

Das folgende Bild veranschaulicht den Unterschied zwischen einem maskierbaren und einem nicht maskierbaren Symbol auf Android:

![Ein nicht maskierbares Symbol links, als kleines Quadrat innerhalb des App-Symbolkreises. Ein maskierbares Symbol rechts, füllt den gesamten App-Symbolkreis aus](./maskable-icon-comparison.png)

Um mit der Erstellung eines maskierbaren App-Symbols zu beginnen, verwenden Sie die `purpose`-Eigenschaft in den Symbolobjekten Ihres Web-App-Manifests und legen Sie ihren Wert auf `maskable` fest. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Symbol maskierbar zu machen. Sie müssen damit beginnen, sicherzustellen, dass Ihr Symbol gut in das Host-Betriebssystem integriert aussieht, indem Sie sicherstellen, dass die wichtigen Teile des Symbols gut innerhalb der _sicheren Zone_ der Maske erscheinen.

Die sichere Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird. Sie wird als Kreis definiert, dessen Durchmesser 80% der kleinsten Dimension des Symbols beträgt.

![Illustration des sicheren Bereichs innerhalb eines maskierbaren Symbols](./maskable-icon-safe-area.png)

Wenn Ihr Symbol beispielsweise ein Quadrat ist, stellen Sie sicher, dass das Quadrat vollständig innerhalb der sicheren Zone sichtbar ist und dass seine Ecken nicht abgeschnitten sind.

Schließlich geben Sie Ihrem maskierbaren Symbol eine undurchsichtige Hintergrundfarbe, um den gesamten Symbolbereich auszufüllen.

Sie können auch Werkzeuge wie [Maskable.app](https://maskable.app/) verwenden, um zu sehen, wie Ihr Symbol bei verschiedenen Betriebssystemen aussehen wird, wenn es maskiert ist.

## Siehe auch

- [`icons` Manifest-Mitglied](/de/docs/Web/Manifest/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Symbolunterstützung in PWAs mit maskierbaren Symbolen](https://web.dev/articles/maskable-icon) auf web.dev
- [Definieren von Symbolen und einer Themendfarbe](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
