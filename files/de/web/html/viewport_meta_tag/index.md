---
title: Viewport-Meta-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie der "viewport" `<meta>` Tag verwendet wird, um die Größe und Form des Ansichtsfensters zu steuern.

## Hintergrund

Das {{glossary("viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können. Dies entspricht oft nicht der Größe der gerenderten Seite, weshalb der Browser Bildlaufleisten bereitstellt, damit der Benutzer alle Inhalte anzeigen und darauf zugreifen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Ansichtsfenster, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass alles auf einmal sichtbar ist. Benutzer können dann zoomen und schwenken, um verschiedene Bereiche der Seite näher zu betrachten. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Ansichtsfenster von 980px gerendert und dann auf die 640px reduziert werden, um in den verfügbaren Platz zu passen.

Dies geschieht, weil nicht alle Seiten für mobile Geräte optimiert sind und beim Rendern mit kleiner Ansichtsfensterbreite kaputt gehen (oder zumindest schlecht aussehen). Dieses virtuelle Ansichtsfenster ist eine Möglichkeit, nicht mobiloptimierte Seiten auf Geräten mit schmalem Bildschirm im Allgemeinen besser aussehen zu lassen.

Dieses Verfahren ist jedoch nicht so gut für Seiten, die für schmale Bildschirme mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) optimiert sind. Wenn das virtuelle Ansichtsfenster beispielsweise 980px beträgt, werden Media Queries, die bei 640px oder 480px oder darunter ausgelöst werden, niemals verwendet, was die Effektivität solcher responsiven Designtechniken einschränkt. Das `<meta>`-Element für das Ansichtsfenster mildert dieses Problem des virtuellen Ansichtsfensters auf Geräten mit schmalem Bildschirm.

## Grundlagen des Ansichtsfensters

Eine typische, für Mobilgeräte optimierte Website enthält in etwa Folgendes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben die gleiche Breite; Sie sollten sicherstellen, dass Ihre Seiten gut auf eine große Vielfalt von Bildschirmgrößen und -ausrichtungen reagieren.

Die grundlegenden Attribute des "viewport" `<meta>` Elements umfassen:

- `width`
  - : Kontrolliert die (Mindest-)Größe des Ansichtsfensters (siehe [Ansichtsfensterbreite und Bildschirmbreite](#ansichtsfensterbreite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, der die physische Größe des Gerätes in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Kontrolliert die (Mindest-)Größe des Ansichtsfensters (siehe [Ansichtsfensterbreite und Bildschirmbreite](#ansichtsfensterbreite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, der die physische Größe des Gerätes in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Kontrolliert das Zoom-Level, wenn die Seite zuerst geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Kontrolliert, wie viel herausgezoomt auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Kontrolliert, wie viel herangezoomt auf der Seite erlaubt ist. Jeder Wert unter 3 führt zu Problemen bei der Barrierefreiheit. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Kontrolliert, ob Ein- und Auszoom-Aktionen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes`, oder `no`. Standard: `1`, was dem `yes` entspricht. Den Wert auf `0`, was dem `no` entspricht, zu setzen, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Bestimmt die Auswirkungen, die interaktive UI-Widgets, wie eine virtuelle Tastatur, auf die Ansichtsfenster der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content`, oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann Barriereprobleme für Nutzer mit Sehbeeinträchtigungen wie Sehschwäche verursachen. [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) verlangt ein Minimum von 2× Skalierung; die beste Praxis ist jedoch, einen 5× Zoom zu ermöglichen.

## Bildschirmdichte

Die Bildschirmauflösungen sind auf eine Größe gestiegen, bei der individuelle Pixel für das menschliche Auge nicht mehr unterscheidbar sind. Zum Beispiel haben Smartphones oft kleine Bildschirme mit Auflösungen von mehr als 1920–1080 Pixeln (≈400dpi). Daher können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies Probleme in Bezug auf Benutzerfreundlichkeit und Lesbarkeit auf vielen touch-optimierten Websites.

Auf Bildschirmen mit hoher DPI werden Seiten mit `initial-scale=1` von den Browsern effektiv vergrößert. Ihr Text wird glatt und scharf, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um auf diesen Bildschirmen schärfere Bilder zu erhalten, könnten Webentwickler Bilder – oder ganze Layouts – in einer höheren Skalierung als ihre endgültige Größe entwerfen und sie dann mit CSS oder Ansichtsfenster-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Displaydichte ab. Bei einer Anzeige mit weniger als 200dpi beträgt das Verhältnis 1,0. Bei Anzeigen mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Bei Anzeigen mit einer Dichte über 300dpi entspricht das Verhältnis dem ganzzahligen Boden (_density_/150dpi). Beachten Sie, dass das Standardverhältnis nur dann gilt, wenn die Ansichtsfenster-Skala 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und Geräte-Pixeln vom aktuellen Zoomfaktor ab.

## Ansichtsfensterbreite und Bildschirmbreite

Seiten können ihr Ansichtsfenster auf eine bestimmte Größe einstellen. Beispielsweise kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefongrabformat im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in größerer Größe rendert. Um dies zu beheben, erweitern Browser die Ansichtsfensterbreite gegebenenfalls, um den Bildschirm in der gewünschten Skalierung auszufüllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die eine Anfangs- oder Maximalskalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Ansichtsfensterbreite umgesetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie den folgenden Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, erweitert der Browser das Ansichtsfenster (anstatt hereinzuzoomen), um auf den Bildschirm zu passen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skala und Breite sowie die Begrenzung von Änderungen der Zoomstufe.

## Die Auswirkungen interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Ansichtsfenster der Seite beeinflussen. Das häufigste dieser UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die `interactive-widget` Eigenschaft.

Erlaubte Werte sind:

- `resizes-visual`
  - : Das {{Glossary("visual viewport")}} wird durch das interaktive Widget geändert.
- `resizes-content`
  - : Das {{Glossary("viewport")}} wird durch das interaktive Widget geändert.
- `overlays-content`
  - : Weder das {{Glossary("viewport")}} noch das {{Glossary("visual viewport")}} wird durch das interaktive Widget geändert.

Wenn das {{Glossary("viewport")}} geändert wird, wird auch der anfängliche [containing block](/de/docs/Web/CSS/Containing_block) geändert, was die berechnete Größe von [viewport units](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst.

## Häufige Ansichtsfenstergrößen für Mobil- und Tablet-Geräte

Wenn Sie wissen möchten, welche Mobil- und Tablet-Geräte welche Ansichtsfensterbreiten haben, gibt es eine umfassende Liste der [Ansichtsfenstergrößen von Mobil- und Tablet-Geräten hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese gibt Informationen wie Ansichtsfensterbreite im Hoch- und Querformat sowie physische Bildschirmgröße, Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Bereiten Sie sich auf Änderungen im Ansichtsfenster-Resize-Verhalten in Chrome auf Android vor](https://developer.chrome.com/blog/viewport-resize-behavior/)
