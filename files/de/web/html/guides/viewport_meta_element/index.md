---
title: Verwendung des Viewport-Meta-Elements
short-title: Viewport meta element
slug: Web/HTML/Guides/Viewport_meta_element
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie Sie das "viewport" `<meta>`-Tag verwenden, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können. Dies entspricht oft nicht der Größe der gerenderten Seite. In diesem Fall stellt der Browser Bildlaufleisten bereit, damit der Benutzer scrollen und auf alle Inhalte zugreifen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der normalerweise breiter als der Bildschirm ist, und verkleinern das gerenderte Ergebnis dann so, dass alles auf einmal gesehen werden kann. Benutzer können dann zoomen und schwenken, um sich verschiedene Bereiche der Seite genauer anzusehen. Beispielsweise wird, wenn ein mobiler Bildschirm eine Breite von 640 Pixel hat, Seiten möglicherweise mit einem virtuellen Viewport von 980 Pixel gerendert, der dann verkleinert wird, um in den 640-Pixel-Raum zu passen.

Dies wird gemacht, weil nicht alle Seiten für Mobilgeräte optimiert sind und sie auf kleinen Viewport-Breiten fehlerhaft (oder zumindest unschön) aussehen. Dieser virtuelle Viewport ist ein Weg, um nicht für Mobilgeräte optimierte Websites im Allgemeinen auf Geräten mit schmalen Bildschirmen besser aussehen zu lassen.

Dieses Verfahren ist jedoch nicht so gut geeignet für Seiten, die mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind — wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Medienabfragen, die bei 640px oder 480px oder weniger eingreifen sollten, nie verwendet, wodurch die Effektivität solcher responsiven Design-Techniken eingeschränkt wird. Das Viewport-Meta-Element mildert dieses Problem der virtuellen Viewport auf Geräten mit schmalem Bildschirm.

## Grundlagen des Viewports

Der Viewport ist eine kommagetrennte Liste von Feature-Wert-Paaren. Eine typische mobil-optimierte Seite enthält beispielsweise etwas wie das Folgende:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben die gleiche Breite; stellen Sie sicher, dass Ihre Seiten in einer großen Variation von Bildschirmgrößen und -ausrichtungen gut funktionieren.

Die grundlegenden Attribute des "viewport" `<meta>`-Elements umfassen:

- `width`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine spezifische Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, was der physischen Größe des Geräts in CSS-Pixeln entspricht. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine spezifische Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, was der physischen Größe des Geräts in CSS-Pixeln entspricht. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert das Zoom-Level, wenn die Seite zum ersten Mal geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie viel Herauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie viel Hereinzoomen auf der Seite erlaubt ist. Jeder Wert kleiner als 3 erfüllt nicht die Barrierefreiheit. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Hereinzoomen und Herauszoomen auf der Seite erlaubt ist. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was dasselbe wie `yes` ist. Den Wert auf `0` zu setzen, was dasselbe wie `no` ist, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt an, welchen Effekt interaktive UI-Widgets, wie eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann zu Barrierefreiheitsproblemen bei Benutzern mit Sehbehinderungen wie eingeschränktem Sehvermögen führen. [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) erfordert ein Minimum von 2× Skalierung; die beste Praxis ist jedoch, einen 5× Zoom zu ermöglichen.

## Bildschärfe

Die Bildschirmauflösungen sind so stark gestiegen, dass Einzelpixel mit dem menschlichen Auge nicht zu unterscheiden sind. Beispielsweise haben Smartphones oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-„Pixel“ übersetzen. Dies führte zunächst zu Nutzbarkeits- und Lesbarkeitsproblemen auf vielen touch-optimierten Websites.

Auf hochdpi-Bildschirmen werden Seiten mit `initial-scale=1` von Browsern effektiv herangezoomt. Ihr Text wird glatt und scharf sein, aber ihre Bitmap-Bilder können nicht die gesamte Bildschirmauflösung nutzen. Um auf diesen Bildschirmen schärfere Bilder zu erhalten, möchten Webentwickler möglicherweise Bilder — oder ganze Layouts — in einem größeren Maßstab als ihrer endgültigen Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Displaydichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1,0. Auf Displays mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Für Displays mit Dichte über 300dpi ist das Verhältnis das ganzzahlige Floor (_Dichte_/150dpi). Beachten Sie, dass das Standardverhältnis nur gilt, wenn der Viewport-Maßstab 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Geräte-Pixeln")}} vom aktuellen Zoom-Level ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Beispielsweise kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf eine kleine Telefonausgabe im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in größerer Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm in der angeforderten Skala auszufüllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die ein initiales oder maximales Maßstab einstellen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie die folgende Markierung verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstelle des Zoomens), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Reference/Elements/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skala und Breite sowie die Einschränkungen von Zoom-Level-Änderungen.

## Der Effekt interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das am häufigsten vorkommende UI-Widget ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

Zulässige Werte sind:

- `resizes-visual`
  - : Der {{Glossary("visual_viewport", "Visual-Viewport")}} wird durch das interaktive Widget verändert.
- `resizes-content`
  - : Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget verändert.
- `overlays-content`
  - : Weder der {{Glossary("viewport", "Viewport")}} noch der {{Glossary("visual_viewport", "Visual-Viewport")}} werden durch das interaktive Widget verändert.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Wenn der {{Glossary("viewport", "Viewport")}} verändert wird, wird auch der anfängliche [Container-Block](/de/docs/Web/CSS/CSS_display/Containing_block) verändert, wodurch die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst wird.

## Allgemeine Viewport-Größen für mobile und Tablet-Geräte

Wenn Sie wissen möchten, welche mobilen und Tablet-Geräte welche Viewport-Breiten haben, gibt es eine umfassende Liste von [Mobile- und Tablet-Viewport-Größen hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese bietet Informationen wie Viewport-Breite im Hoch- und Querformat sowie physische Bildschirmgröße, Betriebssystem und die Pixeldichte des Gerätes.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
