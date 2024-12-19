---
title: Definieren Sie Ihre App-Symbole
slug: Web/Progressive_web_apps/How_to/Define_app_icons
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PWASidebar}}

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten wie andere Apps installiert werden. Sobald eine PWA installiert ist, erscheint ihr App-Symbol auf dem Startbildschirm des Geräts, im Dock, in der Taskleiste oder an jedem anderen Ort, an dem nativen Apps des Betriebssystems normalerweise angezeigt werden.

Beispielsweise kann die Taskleiste in Windows sowohl Symbole für native als auch PWA-Apps nebeneinander enthalten:

![Die Taskleiste in Windows, die die üblichen Windows-Symbole zeigt, sowie Symbole für Firefox und Word, die native Apps sind, aber auch Symbole für Spotify und PWAmp, die PWAs sind](./windows-taskbar.png)

Beim Erstellen einer PWA können Sie Ihr eigenes Set von Symbolen definieren, die verwendet werden, wenn die App auf einem Gerät installiert wird. Dieser Artikel erklärt, wie Sie Ihre eigenen App-Symbole definieren, welche Symbolgrößen zu erstellen sind und wie Sie Ihre Symbole maskierbar machen.

> [!NOTE]
> Das PWA-App-Symbol ist nicht dasselbe wie das {{Glossary("favicon", "Favicon")}}-Bild, das an Orten wie der Adressleiste des Browsers angezeigt wird. PWAs können sowohl ein Favicon als auch ein App-Symbol haben. Um mehr über Favicons zu erfahren, siehe [Anpassen von Symbolen zu Ihrer Website hinzufügen](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

## Entwerfen Sie Ihr Symbol

Der erste Schritt beim Definieren Ihres App-Symbols ist dessen Gestaltung.

Die meisten Nutzer erkennen Anwendungen an ihren Symbolen. Symbole erscheinen an vielen Stellen im Betriebssystem, einschließlich Startbildschirm, Taskleiste, App-Launcher oder Einstellungsfenstern. Stellen Sie sicher, dass Ihre Benutzer Ihre App leicht finden können, indem Sie ihr Symbol sowohl ansprechend als auch repräsentativ für Ihre Anwendung gestalten.

Das Bild sollte einen transparenten Hintergrund haben, damit es auf verschiedenen Hintergründen angezeigt werden kann. Es sollte mindestens 1024x1024 Pixel groß sein oder auf diese Größe skalierbar sein, da dies die größte Größe ist, in der Ihr Symbol angezeigt werden kann. Sie möchten möglicherweise auch Versionen des Symbols mit weniger Details erstellen, die dort verwendet werden, wo das Symbol in kleineren Größen angezeigt wird.

Es ist eine gute Idee, Ihr Symbol als SVG-Datei zu entwerfen, da es in jeder Größe ohne Qualitätsverlust skaliert werden kann.

## Referenzieren Sie Ihre Symbole im Web-App-Manifest

Verwenden Sie das [`icons`](/de/docs/Web/Manifest/icons)-Abschnitt im Web-App-Manifest, um eine Reihe von Symbolen für Ihre PWA zu definieren.

Wie im Abschnitt [Erstellen Sie die notwendigen Symbolgrößen](#erstellen_sie_die_notwendigen_symbolgrößen) beschrieben, sollten Sie mehrere Versionen Ihres Symbols erstellen, um sicherzustellen, dass es überall dort korrekt angezeigt wird, wo es verwendet wird. Aus diesem Grund ist das `icons`-Element ein Array von Objekten, von denen jedes ein Symbol mit eigener Größe, eigenem Typ und Zweck repräsentiert. Jedes Symbolobjekt hat folgende Eigenschaften:

- `src`
  - : Die URL der Symbolbilddatei.
- `sizes`
  - : Die Größen, für die das Symbol verwendet werden kann.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Bilddatei, mit der das Betriebssystem Bilder, die es nicht unterstützt, schnell ignorieren kann.
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

## Erstellen Sie die notwendigen Symbolgrößen

Verschiedene Betriebssysteme verwenden unterschiedliche Symbolgrößen an verschiedenen Orten und für unterschiedliche Gerätefähigkeiten. Es ist wichtig, mehrere Versionen Ihres Symbols zu erstellen, damit es überall dort korrekt angezeigt wird, wo es verwendet wird.

Beispielsweise kann Windows Ihr App-Symbol als 44x44 Pixel großes Bild in der Taskleiste oder als 150x150 Pixel großes Bild im Startmenü anzeigen. Verwenden Sie die unten stehenden Links, um mehr über die von verschiedenen Betriebssystemen verwendeten Symbolgrößen und Tipps für die Erstellung effektiver Symbole zu erfahren:

- Für Windows siehe [Define icons and a theme color](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf learn.microsoft.com.
- Für Android siehe [Google Play icon design specifications](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) auf developer.android.com.
- Für iOS und macOS siehe [App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) auf developer.apple.com.

Die Größen, in denen Ihr Symbol angezeigt wird, hängen vom Betriebssystem ab und können sich im Laufe der Zeit ändern. Es ist am besten, Ihr Symbol auf allen Geräten und Betriebssystemen, die Sie unterstützen möchten, zu testen und die Größen und Bildtypen zu erzeugen, die zu den besten Ergebnissen führen. Sie können auch ein Tool wie den [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) verwenden, um die notwendigen Symbolgrößen aus einem einzigen hochauflösenden Bild für Sie zu generieren.

Beachten Sie, dass einige Betriebssysteme [SVG](/de/docs/Web/SVG)-Symbole unterstützen, die helfen können, die Anzahl der zu erstellenden Bilder zu reduzieren, da SVG automatisch auf jede Größe skaliert werden kann. Wenn Ihr SVG-Symbol nicht gut auf kleine Größen herunterskalierbar ist, kann es notwendig sein, zusätzliche Symbole mit weniger Details und Komplexität zu erstellen. Um alle Betriebssysteme und kleinen Größen zu unterstützen, erstellen Sie auch PNG-Versionen Ihres Symbols.

Das folgende Beispiel eines Web-App-Manifests verwendet ein WebP-Bild für das kleine Symbol, ein ICO-Bild für mittelgroße Symbole und ein skalierbares SVG-Bild für höher aufgelöste Symbole:

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

Erfahren Sie mehr darüber, wie Sie die verschiedenen Symbolgrößen referenzieren, unter [Referenzieren Sie Ihre Symbole im Web-App-Manifest](#referenzieren_sie_ihre_symbole_im_web-app-manifest).

## Unterstützung von Maskierung

Abhängig vom Betriebssystem und den Gerätefähigkeiten kann Ihrem Symbol eine Maske zugewiesen werden, um eine bestimmte Form anzupassen. Maskierbare Symbole sind adaptive Symbole, die in einer Vielzahl von Formen angezeigt werden können, die Betriebssysteme bereitstellen. Beispielweise können auf Android App-Symbole eine kreisförmige Maske haben.

Ihr PWA-App-Symbol sollte speziell die Maskierung unterstützen, um gut in Betriebssysteme integriert zu wirken, die Masken anwenden. Symbole, die keine Maskierung unterstützen, können beschnitten oder kleiner als erwartet erscheinen. Auf Android werden nicht-maskierbare Symbole im Kreis der App-Symbole zentriert und erhalten einen weißen Hintergrund, was möglicherweise mit Ihrem Symbol nicht gut aussieht.

Das folgende Bild zeigt den Unterschied zwischen einem maskierbaren und einem nicht-maskierbaren Symbol auf Android:

![Ein nicht-maskierbares Symbol links, als kleines Quadrat innerhalb des App-Symbol-Kreises. Ein maskierbares Symbol rechts, das den gesamten App-Symbol-Kreis ausfüllt](./maskable-icon-comparison.png)

Um Ihr App-Symbol maskierbar zu machen, verwenden Sie die `purpose`-Eigenschaft in den Symbolobjekten Ihres Web-App-Manifests und setzen Sie deren Wert auf `maskable`. Zum Beispiel:

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

Die Verwendung der `purpose`-Eigenschaft ist nur der letzte Schritt, um Ihr Symbol maskierbar zu machen. Sie müssen zuerst sicherstellen, dass Ihr Symbol gut in das Host-Betriebssystem integriert aussieht, indem Sie sicherstellen, dass die wichtigen Teile des Symbols gut innerhalb der _Safe Zone_ der Maske erscheinen.

Die Safe Zone ist der Bereich, der garantiert immer sichtbar ist, wenn die Maske angewendet wird, und wird als Kreis definiert, dessen Durchmesser 80 % der minimalen Dimension des Symbols beträgt.

![Darstellung des sicheren Bereichs innerhalb eines maskierbaren Symbols](./maskable-icon-safe-area.png)

Stellen Sie beispielsweise sicher, dass das Symbol vollständig innerhalb des sicheren Bereichs sichtbar ist und dass seine Ecken nicht abgeschnitten werden, falls es quadratisch ist.

Geben Sie schließlich Ihrem maskierbaren Symbol eine undurchsichtige Hintergrundfarbe, um den gesamten Symbolbereich auszufüllen.

Sie können auch Tools wie [Maskable.app](https://maskable.app/) verwenden, um zu sehen, wie Ihr Symbol aussieht, wenn es auf verschiedenen Betriebssystemen maskiert wird.

## Siehe auch

- [`icons` manifest member](/de/docs/Web/Manifest/icons)
- [App-Design](https://web.dev/learn/pwa/app-design#the_icon) auf web.dev
- [Adaptive Icon-Unterstützung in PWAs mit maskierbaren Symbolen](https://web.dev/articles/maskable-icon) auf web.dev
- [Define icons and a theme color](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color) auf microsoft.com
- [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) auf pwabuilder.com
