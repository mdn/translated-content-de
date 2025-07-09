---
title: Verwendung des Viewport-Meta-Elements
short-title: Viewport meta element
slug: Web/HTML/Guides/Viewport_meta_element
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Dieser Artikel beschreibt, wie Sie das "viewport" `<meta>`-Tag verwenden, um die Größe und Form des Viewports zu kontrollieren.

## Hintergrund

Das {{Glossary("viewport", "Viewport")}} eines Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Dieser Bereich entspricht oft nicht der Größe der gerenderten Seite. In einem solchen Fall stellt der Browser Scrollleisten zur Verfügung, mit denen der Benutzer durch den Inhalt navigieren und alles einsehen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der in der Regel breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass alles auf einmal zu sehen ist. Benutzer können dann zoomen und schwenken, um sich verschiedene Bereiche der Seite genauer anzusehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert und dann auf die 640px-Breite verkleinert werden.

Dies wird gemacht, weil nicht alle Seiten für Mobilgeräte optimiert sind und bei einer kleinen Viewport-Breite entweder kaputt gehen oder zumindest schlecht aussehen. Dieser virtuelle Viewport ist ein Weg, um nicht mobil-optimierte Seiten auf schmalen Bildschirmen generell besser darzustellen.

Diese Mechanik ist jedoch nicht so gut für Seiten, die mithilfe von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind. Wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger wirken, nie verwendet, was die Effektivität solcher responsiven Designtechniken einschränkt. Das Viewport `<meta>`-Element mildert dieses Problem des virtuellen Viewports auf schmalen Bildschirmen.

## Grundlagen des Viewports

Der Viewport ist eine kommagetrennte Liste von Feature- und Wertpaaren. Eine typische mobil optimierte Seite enthält etwas wie das Folgende:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben die gleiche Breite; Sie sollten sicherstellen, dass Ihre Seiten in einer großen Variation von Bildschirmgrößen und -orientierungen gut funktionieren.

Die grundlegenden Attribute des "viewport"-`<meta>`-Elements umfassen:

- `width`
  - : Kontrolliert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln gesetzt werden, wie `width=600` oder auf den speziellen Wert `device-width`, was die physische Größe des Gerätescreens in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Kontrolliert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln gesetzt werden, wie `height=400` oder auf den speziellen Wert `device-height`, was die physische Größe des Gerätescreens in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Kontrolliert die Zoomstufe, wenn die Seite zum ersten Mal geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Kontrolliert, wie stark das Herauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Kontrolliert, wie stark das Hereinzoomen auf der Seite erlaubt ist. Jeder Wert unter 3 ist nicht zugänglich. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Kontrolliert, ob Zoom-In- und Zoom-Out-Aktionen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was dasselbe wie `yes` ist. Den Wert auf `0` zu setzen, was dasselbe wie `no` ist, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt an, welche Wirkung interaktive UI-Widgets, wie z.B. eine virtuelle Tastatur, auf die Viewports der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann Barrierefreiheitsprobleme bei Nutzern mit Sehbehinderungen wie z.B. schwacher Sehkraft verursachen. [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) erfordert ein Minimum von 2× Skalierung; jedoch ist es die beste Praxis, einen 5× Zoom zu ermöglichen.

## Bildschirmdichte

Bildschirmauflösungen sind auf eine Größe gestiegen, bei der einzelne Pixel mit dem bloßen Auge nicht mehr unterscheidbar sind. Beispielsweise haben Smartphones oft kleine Displays mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Deshalb können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfänglich verursachte dies Probleme bei der Nutzbarkeit und Lesbarkeit auf vielen touch-optimierten Websites.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` von Browsern effektiv gezoomt. Ihr Text wird glatt und scharf, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder oder ganze Layouts in einem höheren Maßstab als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften herunterskalieren.

Das Standard-Pixel-Verhältnis hängt von der Displaydichte ab. Bei einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1,0. Bei Displays mit Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Bei Displays mit einer Dichte von über 300dpi ist das Verhältnis der ganzzahlige Boden (_dichte_/150dpi). Beachten Sie, dass das Standardverhältnis nur dann zutrifft, wenn der Viewport-Skalierungsfaktor 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Geräte-Pixeln")}} vom aktuellen Zoomfaktor ab.

## Viewport-Breite und Bildschirmbreite

Webseiten können ihren Viewport auf eine bestimmte Größe setzen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um perfekt auf ein kleines Handy-Display im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm in der angeforderten Skalierung zu füllen. Dies ist besonders nützlich auf Geräten mit großen Bildschirmen.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm breiter als 500 Pixel ist, wird der Browser den Viewport erweitern (anstatt heranzuzoomen), um den Bildschirm zu füllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Reference/Elements/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skalierung und Breite sowie die Begrenzung von Änderungen des Zoomniveaus.

## Die Auswirkungen von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste dieser UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Größenänderungsverhalten der Browser verwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Zulässige Werte sind:

- `resizes-visual`
  - : Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget verändert.
- `resizes-content`
  - : Das {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget verändert.
- `overlays-content`
  - : Weder das {{Glossary("viewport", "Viewport")}} noch der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget verändert.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Wenn das {{Glossary("viewport", "Viewport")}} verändert wird, wird auch der initiale [enthältende Block](/de/docs/Web/CSS/CSS_display/Containing_block) verändert, wodurch die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst wird.

## Übliche Viewport-Größen für Mobil- und Tabletgeräte

Wenn Sie wissen möchten, welche Mobil- und Tabletgeräte welche Viewport-Breiten haben, gibt es eine umfassende Liste von [Viewport-Größen für Mobil- und Tabletgeräte hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese liefert Informationen wie die Viewport-Breite in Hoch- und Querformat sowie die physische Bildschirmgröße, das Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Bereiten Sie sich auf Änderungen im Verhalten der Viewport-Größenänderung vor, die in Chrome auf Android kommen](https://developer.chrome.com/blog/viewport-resize-behavior/)
