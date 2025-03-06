---
title: Viewport-Meta-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie Sie das "viewport" `<meta>`-Tag verwenden, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Dieser ist oft nicht gleich groß wie die gerenderte Seite, in diesem Fall stellt der Browser Scrollleisten bereit, damit der Benutzer durch die Inhalte navigieren kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der in der Regel breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit alles auf einmal sichtbar ist. Benutzer können dann heranzoomen und den Inhalt genauer ansehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert werden, und dann wird es verkleinert, um in den 640px-Bereich zu passen.

Dies wird gemacht, weil nicht alle Seiten für mobile Geräte optimiert sind und brechen (oder zumindest schlecht aussehen), wenn sie bei einer kleinen Viewport-Breite gerendert werden. Dieser virtuelle Viewport ist eine Möglichkeit, nicht für Mobilgeräte optimierte Seiten allgemein auf schmalen Bildschirmen besser aussehen zu lassen.

Dieses Verfahren ist jedoch nicht so gut für Seiten, die für schmale Bildschirme mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) optimiert sind — Wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger greifen, nie verwendet, was die Effektivität solcher responsiven Designtechniken einschränkt. Das Viewport-`<meta>`-Element mindert dieses Problem des virtuellen Viewports auf Geräten mit schmalen Bildschirmen.

## Grundlagen des Viewports

Der Viewport ist eine durch Kommas getrennte Liste von Funktions- und Wertpaaren. Eine typisch mobil optimierte Seite enthält etwa Folgendes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben die gleiche Breite; Sie sollten sicherstellen, dass Ihre Seiten gut für eine große Bandbreite von Bildschirmgrößen und -orientierungen funktionieren.

Die grundlegenden Attribute des "viewport"-`<meta>`-Elements umfassen:

- `width`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, was die physische Größe des Geräts in CSS-Pixeln darstellt. Dieser Wert bestimmt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, was die physische Größe des Geräts in CSS-Pixeln darstellt. Dieser Wert bestimmt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert die Zoomstufe, wenn die Seite zum ersten Mal geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie weit herausgezoomt auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie weit hineingezoomt auf der Seite erlaubt ist. Jeder Wert unter 3 scheitert an Barrierefreiheit. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Aktionen zum Ein- und Auszoomen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes`, oder `no`. Standard: `1`, was dem Wert `yes` entspricht. Den Wert `0` zu setzen, was dem Wert `no` entspricht, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt den Effekt an, den interaktive UI-Widgets, wie z. B. eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content`, oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Nutzung von `user-scalable=no` kann Barriereprobleme für Benutzer mit Sehbehinderungen wie niedrigem Sehvermögen verursachen. [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) erfordert ein Minimum von 2×-Skalierung; die beste Praxis ist jedoch, eine 5×-Vergrößerung zu ermöglichen.

## Bildschirmdichte

Die Bildschirmauflösung ist mittlerweile so hoch, dass einzelne Pixel mit dem menschlichen Auge nicht mehr unterscheidbar sind. Smartphones haben oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies Probleme mit der Benutzerfreundlichkeit und Lesbarkeit auf vielen touch-optimierten Websites.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` von Browsern effektiv vergrößert. Der Text ist glatt und scharf, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einer höheren Skalierung als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften verkleinern.

Das Standard-Display-Verhältnis hängt von der Bildschirmdichte ab. Bei einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1,0. Bei Displays mit Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Für Displays mit einer Dichte von über 300dpi beträgt das Verhältnis das nächste kleinere Ganzzahlverhältnis (_Dichte_/150dpi). Beachten Sie, dass das Standard-Verhältnis nur dann zutrifft, wenn die Viewport-Skalierung gleich 1 ist. Ansonsten hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Geräte-Pixeln")}} vom aktuellen Zoomlevel ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe setzen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefondisplay im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in größerer Größe rendert. Um dies zu beheben, werden Browser die Viewport-Breite bei Bedarf erweitern, um den Bildschirm bei der gewünschten Skala zu füllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die eine anfängliche oder maximale Skala festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine \_Mindest-\_Viewport-Breite übersetzt. Zum Beispiel, wenn Ihr Layout mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstatt heranzuzoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skalierung und Breite sowie die Begrenzung der Zoom-Ebene-Änderungen.

## Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solcher UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Erlaubte Werte sind:

- `resizes-visual`
  - : Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget verändert.
- `resizes-content`
  - : Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget verändert.
- `overlays-content`
  - : Weder der {{Glossary("viewport", "Viewport")}} noch der {{Glossary("visual_viewport", "visuelle Viewport")}} werden durch das interaktive Widget verändert.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Wenn der {{Glossary("viewport", "Viewport")}} geändert wird, wird auch der anfängliche [umschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block) geändert, was die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst.

## Übliche Viewport-Größen für Mobil- und Tablet-Geräte

Wenn Sie wissen möchten, welche mobilen und Tablet-Geräte welche Viewport-Breiten haben, gibt es eine umfassende Liste von [Viewport-Größen für Mobil- und Tablet-Geräte hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese gibt Informationen wie Viewport-Breite im Hoch- und Querformat sowie physische Bildschirmgröße, Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Bereiten Sie sich auf Änderungen des Viewport-Resize-Verhaltens im Chrome-Browser auf Android vor](https://developer.chrome.com/blog/viewport-resize-behavior/)
