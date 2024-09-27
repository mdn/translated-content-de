---
title: Viewport-`meta`-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie der "viewport"-`<meta>`-Tag verwendet wird, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der [Viewport](/de/docs/Glossary/viewport) des Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können. Dies entspricht oft nicht der Größe der gerenderten Seite, in welchem Fall der Browser Scrollleisten bereitstellt, damit der Benutzer herumschieben und auf alle Inhalte zugreifen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der meist breiter ist als der Bildschirm, und verkleinern dann das gerenderte Ergebnis, sodass alles auf einmal gesehen werden kann. Benutzer können dann zoomen und panen, um sich verschiedene Bereiche der Seite genauer anzusehen. Wenn zum Beispiel ein Mobildisplay eine Breite von 640px hat, können Seiten mit einem virtuellen Viewport von 980px gerendert und dann auf den 640px-Raum verkleinert werden.

Dies wird getan, weil nicht alle Seiten für mobile Geräte optimiert sind und beim Rendern in einer kleinen Viewport-Breite fehlerhaft (oder zumindest unschön) aussehen. Dieser virtuelle Viewport ist eine Möglichkeit, im Allgemeinen nicht für Mobilgeräte optimierte Seiten auf schmalen Bildschirmgeräten besser aussehen zu lassen.

Dieses Mechanismus ist jedoch nicht so gut für Seiten geeignet, die mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind — wenn der virtuelle Viewport z.B. 980px ist, werden Media Queries, die bei 640px oder 480px oder weniger greifen, niemals verwendet, was die Effektivität solcher responsive Design-Techniken begrenzt. Das `<meta>`-Element `viewport` mindert dieses Problem des virtuellen Viewports auf schmalen Bildschirmgeräten.

## Grundlagen des Viewports

Eine typische mobiloptimierte Seite enthält etwa Folgendes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben die gleiche Breite; Sie sollten sicherstellen, dass Ihre Seiten in einer großen Variation von Bildschirmgrößen und -orientierungen gut funktionieren.

Zu den grundlegenden Attributen des "viewport"-`<meta>`-Elements gehören:

- `width`
  - : Steuert die (minimale) Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine spezifische Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, welcher die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (minimale) Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine spezifische Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, welcher die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert den Zoom-Level, wenn die Seite zuerst geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie viel Hinauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie viel Hineinzoomen auf der Seite erlaubt ist. Jeder Wert unter 3 verstößt gegen die Barrierefreiheit. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Hinein- und Hinauszoomen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was dasselbe wie `yes` ist. Den Wert auf `0` zu setzen, was dasselbe wie `no` ist, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt an, welchen Effekt interaktive UI-Widgets, wie z.B. eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann für Benutzer mit Sehbehinderungen wie z.B. eingeschränkter Sichtweise Barrierefreiheitsprobleme verursachen. [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) verlangt ein Minimum von 2× Skalierung; die beste Praxis ist jedoch, einen 5× Zoom zu ermöglichen.

## Bildschirmdichte

Bildschirmauflösungen haben eine Größe erreicht, bei der einzelne Pixel für das menschliche Auge nicht mehr unterscheidbar sind. Zum Beispiel haben Smartphones oft kleine Bildschirme mit Auflösungen von 1920–1080 Pixeln (≈400dpi) oder höher. Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-„Pixel“ umrechnen. Anfangs verursachte dies Usability- und Lesbarkeitsprobleme auf vielen touch-optimierten Webseiten.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` von Browsern effektiv vergrößert. Ihr Text wird glatt und scharf, aber ihre Bitmap-Bilder können möglicherweise nicht die volle Bildschirmauflösung nutzen. Um auf diesen Bildschirmen schärfere Bilder zu erhalten, könnten Webentwickler in Erwägung ziehen, Bilder – oder ganze Layouts – in einem höheren Maßstab als ihre endgültige Größe zu entwerfen und sie dann mithilfe von CSS oder Viewport-Eigenschaften zu verkleinern.

Das Standard-Pixelverhältnis hängt von der Display-Dichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi ist das Verhältnis 1.0. Auf Displays mit einer Dichte zwischen 200 und 300dpi ist das Verhältnis 1.5. Für Displays mit einer Dichte von über 300dpi ist das Verhältnis der ganzzahlige Boden (_density_/150dpi). Beachten Sie, dass das Standardverhältnis nur dann zutrifft, wenn der Viewport-Skalierungsfaktor 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und Geräte-Pixeln vom aktuellen Zoom-Level ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Die Definition `"width=320, initial-scale=1"` kann z.B. verwendet werden, um genau auf ein kleines Handydisplay im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm in der gewünschten Skalierung zu füllen. Dies ist besonders nützlich auf Geräten mit großen Bildschirmen.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout mindestens 500 Pixel Breite benötigt, können Sie zum Beispiel folgendes Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstatt zu zoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skalierung und Breite sowie das Begrenzen der Änderungen im Zoom-Level.

## Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solche UI-Widget ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Erlaubte Werte sind:

- `resizes-visual`
  - : Der [visuelle Viewport](/de/docs/Glossary/visual_viewport) wird durch das interaktive Widget verkleinert.
- `resizes-content`
  - : Der [Viewport](/de/docs/Glossary/viewport) wird durch das interaktive Widget verkleinert.
- `overlays-content`
  - : Weder der [Viewport](/de/docs/Glossary/viewport) noch der [visuelle Viewport](/de/docs/Glossary/visual_viewport) werden durch das interaktive Widget verkleinert.

Wenn der [Viewport](/de/docs/Glossary/viewport) verkleinert wird, wird auch der anfängliche [Containing Block](/de/docs/Web/CSS/Containing_block) verkleinert, was die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst.

## Gängige Viewport-Größen für mobile und Tablet-Geräte

Wenn Sie wissen möchten, welche mobilen und Tablet-Geräte welche Viewport-Breiten haben, gibt es eine umfassende Liste von [Viewport-Größen für Mobil- und Tablet-Geräte hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese bietet Informationen wie Viewport-Breite im Hoch- und Querformat sowie physische Bildschirmgröße, Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Bereiten Sie sich auf Änderungen des Viewport-Resize-Verhaltens vor, die für Chrome auf Android kommen](https://developer.chrome.com/blog/viewport-resize-behavior/)
