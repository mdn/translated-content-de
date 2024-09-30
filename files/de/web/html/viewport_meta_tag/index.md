---
title: Viewport `<meta>`-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie der "viewport" `<meta>`-Tag verwendet wird, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der [Viewport](/de/docs/Glossary/viewport) des Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Dies ist oft nicht dieselbe Größe wie die gerenderte Seite, in diesem Fall stellt der Browser Scrollleisten zur Verfügung, mit denen der Benutzer alle Inhalte erreichen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das in der Regel breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es insgesamt sichtbar ist. Benutzer können dann zoomen und schwenken, um sich Bereiche der Seite genauer anzusehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 640px hat, können Seiten mit einem virtuellen Viewport von 980px gerendert und dann in den 640px großen Bereich verkleinert werden.

Dies geschieht, weil nicht alle Seiten für mobile Endgeräte optimiert sind und bei einer kleinenViewport-Breite brechen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist eine Möglichkeit, um nicht für mobile Geräte optimierte Websites im Allgemeinen auf schmalen Bildschirmen besser aussehen zu lassen.

Allerdings ist dieser Mechanismus nicht so gut für Seiten, die für schmale Bildschirme mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) optimiert sind — wenn der virtuelle Viewport z.B. 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger greifen, nie verwendet, was die Wirksamkeit solcher Techniken des responsiven Designs einschränkt. Das `<meta>`-Element für den Viewport mildert dieses Problem des virtuellen Viewports auf schmalen Bildschirmen.

## Grundlagen des Viewports

Eine typische für Mobilgeräte optimierte Website enthält etwa folgendes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben dieselbe Breite; Sie sollten sicherstellen, dass Ihre Seiten in einer großen Variation von Bildschirmgrößen und -ausrichtungen gut funktionieren.

Die grundlegenden Attribute des "viewport" `<meta>`-Elements umfassen:

- `width`
  - : Steuert die (minimale) Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, der die physische Größe des Gerätescreens in CSS-Pixeln ist. Dieser Wert definiert den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (minimale) Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, der die physische Größe des Gerätescreens in CSS-Pixeln ist. Dieser Wert definiert den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert den Zoomlevel, wenn die Seite erstmals geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie viel Herauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie viel Hineinzoomen auf der Seite erlaubt ist. Jeder Wert kleiner als 3 erfüllt die Zugänglichkeit nicht. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Zoom- und Herauszoomaktionen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was dem Wert `yes` entspricht. Das Setzen des Wertes auf `0`, was dem Wert `no` entspricht, widerspricht den Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt an, welchen Effekt interaktive UI-Widgets, wie z.B. eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann zu Zugänglichkeitsproblemen für Benutzer mit Sehbehinderungen wie schwachem Sehvermögen führen. [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) erfordert mindestens eine 2-fache Skalierung; jedoch ist es am besten, eine 5-fache Vergrößerung zu ermöglichen.

## Bildschirmdichte

Die Bildschirmauflösungen sind so groß geworden, dass einzelne Pixel mit dem bloßen Auge nicht mehr erkennbar sind. Smartphones haben zum Beispiel oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixel (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physikalischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies auf vielen touch-optimierten Websites Probleme mit der Benutzerfreundlichkeit und Lesbarkeit.

Auf hochauflösenden Bildschirmen werden Seiten mit `initial-scale=1` effektiv von Browsern vergrößert. Ihr Text ist glatt und scharf, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder — oder ganze Layouts — in einem höheren Maßstab als ihre endgültige Größe gestalten und sie dann mit CSS- oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixel-Verhältnis hängt von der Display-Dichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1.0. Auf Displays mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1.5. Bei Displays mit einer Dichte von über 300dpi entspricht das Verhältnis der ganzzahligen Abrundung (_Dichte_/150dpi). Beachten Sie, dass das Standardverhältnis nur gilt, wenn der Viewport-Scale 1 entspricht. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und Geräte-Pixeln vom aktuellen Zoomlevel ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefondisplay im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser bei Bedarf die Viewport-Breite, um den Bildschirm in der gewünschten Skalierung zu füllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die einen initialen oder maximalen Zoom einstellen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstatt hinein zu zoomen), um in den Bildschirm zu passen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Weitere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen den initialen Maßstab und die Breite sowie die Begrenzung von Änderungen im Zoomlevel.

## Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solcher UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

Erlaubte Werte sind:

- `resizes-visual`
  - : Der [visuelle Viewport](/de/docs/Glossary/visual_viewport) wird durch das interaktive Widget verändert.
- `resizes-content`
  - : Der [Viewport](/de/docs/Glossary/viewport) wird durch das interaktive Widget verändert.
- `overlays-content`
  - : Weder der [Viewport](/de/docs/Glossary/viewport) noch der [visuelle Viewport](/de/docs/Glossary/visual_viewport) werden durch das interaktive Widget verändert.

Wenn der [Viewport](/de/docs/Glossary/viewport) verändert wird, wird auch der anfängliche [Containing Block](/de/docs/Web/CSS/Containing_block) verändert, was die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst.

## Übliche Viewport-Größen für mobile und Tablet-Geräte

Wenn Sie wissen möchten, welche mobilen und Tablet-Geräte welche Viewport-Breiten haben, gibt es eine umfassende Liste der [Viewport-Größen für Mobil- und Tablet-Geräte hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese gibt Informationen wie die Viewport-Breite im Hoch- und Querformat sowie die physische Bildschirmgröße, das Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Bereiten Sie sich auf Änderungen des Viewport-Resize-Verhaltens vor, die für Chrome auf Android kommen](https://developer.chrome.com/blog/viewport-resize-behavior/)
