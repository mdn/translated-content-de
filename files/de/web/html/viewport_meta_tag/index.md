---
title: Viewport-Meta-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: 59aa7896365a9f7454570fe9a2f0f667f93b5ed6
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie der "viewport" `<meta>`-Tag verwendet wird, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können. Dieser ist oft nicht gleich groß wie die gerenderte Seite, in diesem Fall stellt der Browser Scrollbalken bereit, damit die Benutzer scrollen und auf alle Inhalte zugreifen können.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit alles auf einmal sichtbar ist. Benutzer können dann zoomen und schwenken, um verschiedene Bereiche der Seite genauer zu betrachten. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert werden, der dann verkleinert wird, um in den 640px-Bereich zu passen.

Dies wird gemacht, weil nicht alle Seiten für Mobilgeräte optimiert sind und bei einer kleinen Viewport-Breite brechen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist eine Möglichkeit, nicht für Mobilgeräte optimierte Seiten allgemein auf schmalen Bildschirmen ansprechender darzustellen.

Dieses Mechanismus ist jedoch nicht ideal für Seiten, die für schmale Bildschirme mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) optimiert sind — wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger einsetzen, nie verwendet, was die Wirksamkeit solcher responsiven Designtechniken einschränkt. Das Viewport-`<meta>`-Element mildert dieses Problem des virtuellen Viewports auf Geräten mit schmalem Bildschirm.

## Viewport-Grundlagen

Der Viewport ist eine durch Kommata getrennte Liste von Merkmals- und Wertpaaren. Eine typisch mobile-optimierte Seite enthält so etwas wie das Folgende:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte sind gleich breit; Sie sollten sicherstellen, dass Ihre Seiten bei einer großen Variation von Bildschirmgrößen und Ausrichtungen funktionieren.

Die grundlegenden Attribute des "viewport" `<meta>`-Elements umfassen:

- `width`
  - : Steuert die (Minimal-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, was die physische Größe des Gerätbildschirms in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (Minimal-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, was die physische Größe des Gerätbildschirms in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert die Zoomstufe, wenn die Seite erstmals geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie weit das Herauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie weit das Hineinzoomen auf der Seite erlaubt ist. Jeder Wert kleiner als 3 erfüllt die Barrierefreiheit nicht. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Zoomaktionen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was dem Wert `yes` entspricht. Das Festlegen des Wertes auf `0`, was `no` entspricht, widerspricht den Richtlinien für barrierefreie Webinhalte (WCAG).
- `interactive-widget`
  - : Gibt an, welchen Effekt interaktive UI-Widgets, wie eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann Barrierefreiheitsprobleme für Benutzer mit Sehbehinderungen wie niedriger Sehkraft verursachen. [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) erfordert ein Minimum von 2× Skalierung; jedoch ist es Best Practice, einen 5× Zoom zu ermöglichen.

## Bildschirmdichte

Die Bildschirmauflösungen haben die Größe erreicht, bei der einzelne Pixel mit dem menschlichen Auge nicht mehr unterscheidbar sind. Beispielsweise haben Smartphones oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einem kleineren physischen Format anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies Probleme bei der Bedienung und Lesbarkeit auf vielen touch-optimierten Websites.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` von Browsern effektiv gezoomt. Ihr Text wird glatt und scharf, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einem höheren Maßstab als ihrer endgültigen Größe entwerfen und sie dann mit CSS- oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Anzeigedichte ab. Auf einer Anzeige mit weniger als 200dpi beträgt das Verhältnis 1,0. Auf Anzeigen mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Bei Anzeigen mit einer Dichte von über 300dpi beträgt das Verhältnis den ganzzahligen Boden der Dichte geteilt durch 150dpi. Beachten Sie, dass das Standardverhältnis nur gilt, wenn die Viewport-Skalierung 1 entspricht. Andernfalls hängt das Verhältnis zwischen CSS-Pixeln und Geräte-Pixeln vom aktuellen Zoom-Level ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefondisplay im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in größerer Größe rendert. Um dies zu beheben, vergrößern Browser die Viewport-Breite bei Bedarf, um den Bildschirm in der angeforderten Skalierung auszufüllen. Dies ist besonders nützlich bei Geräten mit großen Bildschirmen.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn beispielsweise Ihr Layout mindestens 500 Pixel an Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, erweitert der Browser den Viewport (anstatt hineinzuzoomen), um den Bildschirm anzupassen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skalierung und Breite sowie die Begrenzung von Änderungen im Zoom-Level.

## Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solcher UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Erlaubte Werte sind:

- `resizes-visual`
  - : Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird vom interaktiven Widget verändert.
- `resizes-content`
  - : Der {{Glossary("viewport", "Viewport")}} wird vom interaktiven Widget verändert.
- `overlays-content`
  - : Weder der {{Glossary("viewport", "Viewport")}} noch der {{Glossary("visual_viewport", "visuelle Viewport")}} wird vom interaktiven Widget verändert.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Wenn der {{Glossary("viewport", "Viewport")}} verändert wird, wird auch der anfängliche [Containing Block](/de/docs/Web/CSS/Containing_block) verändert, was die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst.

## Häufige Viewport-Größen für Mobil- und Tabletgeräte

Wenn Sie wissen möchten, welche mobilen und Tabletgeräte welche Viewport-Breiten haben, gibt es eine umfassende Liste der [Viewport-Größen von Mobil- und Tabletgeräten hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese bietet Informationen wie die Viewport-Breite im Hoch- und Querformat sowie die physische Bildschirmgröße, das Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
