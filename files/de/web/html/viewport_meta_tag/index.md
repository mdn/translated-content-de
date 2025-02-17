---
title: Viewport-Meta-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie Sie den "Viewport" `<meta>`-Tag verwenden, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der {{Glossary("viewport", "Viewport")}} eines Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Dieser stimmt oft nicht mit der Größe der gerenderten Seite überein, sodass der Browser Bildlaufleisten bereitstellt, um Benutzern das Scrollen und Zugreifen auf alle Inhalte zu ermöglichen.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das normalerweise breiter als der Bildschirm ist, und verkleinern dann die gerenderten Ergebnisse, damit alles auf einmal sichtbar ist. Benutzer können dann zoomen und schwenken, um spezifische Bereiche der Seite genauer zu betrachten. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten in einem virtuellen Viewport von 980px gerendert und dann auf den 640px-Bereich reduziert werden.

Dies geschieht, weil nicht alle Seiten für Mobilgeräte optimiert sind und bei kleinen Viewport-Breiten kaputtgehen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist eine Möglichkeit, nicht für Mobilgeräte optimierte Websites auf schmalen Bildschirmen besser darzustellen.

Dieses Verfahren ist jedoch nicht ideal für Seiten, die mittels [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert wurden — wenn der virtuelle Viewport beispielsweise 980px beträgt, kommen Media Queries, die bei 640px oder 480px oder weniger greifen, nie zum Einsatz, was die Wirksamkeit dieser responsiven Design-Techniken einschränkt. Das Viewport-`<meta>`-Element behebt dieses Problem mit dem virtuellen Viewport auf schmalen Geräten.

## Grundlagen des Viewports

Der Viewport ist eine durch Kommas getrennte Liste von Attribut-Wert-Paaren. Eine typische, für mobile Nutzung optimierte Website enthält in der Regel etwas wie das Folgende:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte haben dieselbe Breite; Sie sollten sicherstellen, dass Ihre Seiten auch bei einer großen Variation von Bildschirmgrößen und -ausrichtungen gut funktionieren.

Die grundlegenden Attribute des "Viewport"-`<meta>`-Tags beinhalten:

- `width`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, welcher die physische Größe des Gerätescreens in CSS-Pixeln darstellt. Dieser Wert definiert den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, welcher die physische Größe des Gerätescreens in CSS-Pixeln darstellt. Dieser Wert definiert den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert die Zoomstufe, wenn die Seite erstmals geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Legt fest, wie stark der Zoom hinaus erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Legt fest, wie stark der Zoom hinein erlaubt ist. Werte unter 3 scheitern an den Barrierefreiheitskriterien. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob das Herein- und Herauszoomen auf der Seite erlaubt ist. Gültige Werte: `0`, `1`, `yes` oder `no`. Standard: `1`, was gleichbedeutend mit `yes` ist. Den Wert auf `0`, was gleichbedeutend mit `no` ist, zu setzen, verstößt gegen die Richtlinien für barrierefreie Webinhalte (WCAG).
- `interactive-widget`
  - : Gibt an, wie sich interaktive UI-Widgets, wie eine virtuelle Tastatur, auf die Viewports der Seite auswirken. Gültige Werte: `resizes-visual`, `resizes-content` oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann Barrierefreiheitsprobleme für Benutzer mit Sehbehinderungen wie schwacher Sehkraft verursachen. Die [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) verlangt ein Minimum von 2× Skalierung; die beste Praxis ist jedoch, eine Skalierung von bis zu 5× zu ermöglichen.

## Pixeldichte

Bildschirmauflösungen haben eine Größe erreicht, bei der einzelne Pixel für das menschliche Auge ununterscheidbar sind. Zum Beispiel haben Smartphones oft kleine Bildschirme mit Auflösungen von mehr als 1920–1080 Pixel (≈400dpi). Aufgrund dessen können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" verwenden. Anfangs führte dies zu Problemen bei der Usability und Lesbarkeit auf vielen touchscreen-optimierten Websites.

Bei hochauflösenden Bildschirmen werden Seiten mit `initial-scale=1` effektiv von Browsern gezoomt dargestellt. Texte werden glatt und scharf erscheinen, aber Pixeldarstellungen könnten nicht die volle Bildschirmauflösung nutzen. Um auf diesen Bildschirmen schärfere Bilder darzustellen, können Webentwickler Bilder – oder sogar ganze Layouts – in einer höheren Größe entwerfen und sie anschließend mithilfe von CSS oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Displaydichte ab. Auf einem Display mit einer Dichte von unter 200dpi beträgt das Verhältnis 1,0. Auf Displays mit einer Dichte zwischen 200 und 300dpi liegt das Verhältnis bei 1,5. Bei Displays mit einer Dichte über 300dpi wird das Verhältnis als Ganzzahl-Bodeneinheit (_Dichte_/150dpi) berechnet. Beachten Sie, dass das Standardverhältnis nur gilt, wenn der Viewport-Skalierungsfaktor 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und Gerätepixeln von der aktuellen Zoomstufe ab.

## Viewport-Breite und Bildschirmbreite

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Angabe `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefon-Display im Hochformat zu passen. Dies kann jedoch Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm bei der angeforderten Skalierung zu füllen. Dies ist insbesondere bei Geräten mit großen Bildschirmen nützlich.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die Eigenschaft `width` tatsächlich in eine _Mindest_-Viewport-Breite übersetzt wird. Wenn Ihr Layout zum Beispiel mindestens 500 Pixel Breite benötigt, können Sie folgenden Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstatt hereinzuzoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Weitere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die anfängliche Skalierung und Breite sowie die Begrenzung von Änderungen im Zoomlevel.

## Der Effekt interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe des Viewports beeinflussen. Das häufigste solcher UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser anwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Erlaubte Werte sind:

- `resizes-visual`
  - : Der {{Glossary("visual_viewport", "sichtbare Viewport")}} wird durch das interaktive Widget geändert.
- `resizes-content`
  - : Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget geändert.
- `overlays-content`
  - : Weder der {{Glossary("viewport", "Viewport")}} noch der {{Glossary("visual_viewport", "sichtbare Viewport")}} werden durch das interaktive Widget geändert.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Wenn der {{Glossary("viewport", "Viewport")}} geändert wird, wird auch der anfängliche [enthältende Block](/de/docs/Web/CSS/CSS_display/Containing_block) geändert, was sich auf die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) auswirkt.

## Übliche Viewport-Größen für Mobil- und Tabletgeräte

Falls Sie wissen möchten, welche mobilen Geräte und Tablets welche Viewport-Breiten aufweisen, gibt es eine ausführliche Liste der [Viewport-Größen für Mobil- und Tabletgeräte](https://experienceleague.adobe.com/de/docs/target/using/experiences/vec/mobile-viewports). Diese enthält Informationen wie Viewport-Breite in Hoch- und Querformat sowie physische Bildschirmgröße, Betriebssystem und Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
