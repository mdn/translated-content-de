---
title: Viewport-Meta-Tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{HTMLSidebar}}

Dieser Artikel beschreibt, wie der "viewport" `<meta>`-Tag verwendet wird, um die Größe und Form des Viewports zu steuern.

## Hintergrund

Der {{Glossary("viewport", "Viewport")}} eines Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Dies entspricht oft nicht der Größe der gerenderten Seite, in welchem Fall der Browser Scrollleisten bereitstellt, damit der Benutzer umherschwenken und alle Inhalte zugänglich machen kann.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass alles auf einmal gesehen werden kann. Benutzer können dann zoomen und schwenken, um verschiedene Bereiche der Seite genauer zu betrachten. Beispielsweise, wenn ein Handybildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert und dann auf den 640px Raum verkleinert werden.

Dies geschieht, weil nicht alle Seiten für mobile Geräte optimiert sind und brechen (oder zumindest schlecht aussehen), wenn sie bei einer kleinen Viewport-Breite gerendert werden. Dieser virtuelle Viewport ist eine Möglichkeit, nicht für mobile Geräte optimierte Seiten auf Geräten mit schmalem Bildschirm besser aussehen zu lassen.

Dieser Mechanismus ist jedoch nicht sehr gut für Seiten, die mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind – wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger ausgelöst werden, nie verwendet, was die Effektivität solcher responsiven Designtechniken einschränkt. Das Viewport-`<meta>`-Element mildert dieses Problem des virtuellen Viewports auf Geräten mit schmalem Bildschirm.

## Viewport-Grundlagen

Der Viewport ist eine kommagetrennte Liste von Merkmal- und Wertpaaren. Eine typische mobile-optimierte Seite enthält etwa Folgendes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Nicht alle Geräte sind gleich breit; Sie sollten sicherstellen, dass Ihre Seiten in einer großen Variation von Bildschirmgrößen und -orientierungen gut funktionieren.

Die grundlegenden Attribute des "viewport"-`<meta>`-Elements umfassen:

- `width`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `width=600` oder auf den speziellen Wert `device-width` gesetzt werden, was die physische Größe des Bildschirmgeräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `height`
  - : Steuert die (Mindest-)Größe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine bestimmte Anzahl von Pixeln wie `height=400` oder auf den speziellen Wert `device-height` gesetzt werden, was die physische Größe des Bildschirmgeräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest. Minimum: `1`. Maximum: `10000`. Negative Werte: ignoriert.
- `initial-scale`
  - : Steuert den Zoomfaktor, wenn die Seite zuerst geladen wird. Minimum: `0.1`. Maximum: `10`. Standard: `1`. Negative Werte: ignoriert.
- `minimum-scale`
  - : Steuert, wie weit Herauszoomen auf der Seite erlaubt ist. Minimum: `0.1`. Maximum: `10`. Standard: `0.1`. Negative Werte: ignoriert.
- `maximum-scale`
  - : Steuert, wie weit Hineinzoomen auf der Seite erlaubt ist. Jeder Wert unter 3 erschwert die Barrierefreiheit. Minimum: `0.1`. Maximum: `10`. Standard: `10`. Negative Werte: ignoriert.
- `user-scalable`
  - : Steuert, ob Zoomaktionen auf der Seite erlaubt sind. Gültige Werte: `0`, `1`, `yes`, oder `no`. Standard: `1`, was dasselbe wie `yes` ist. Einen Wert von `0` festzulegen, was dasselbe wie `no` ist, verstößt gegen die Web Content Accessibility Guidelines (WCAG).
- `interactive-widget`
  - : Gibt an, welche Auswirkungen interaktive UI-Widgets, wie z.B. eine virtuelle Tastatur, auf den Viewport der Seite haben. Gültige Werte: `resizes-visual`, `resizes-content`, oder `overlays-content`. Standard: `resizes-visual`.

> [!WARNING]
> Die Verwendung von `user-scalable=no` kann Barrierefreiheitsprobleme für Benutzer mit Sehbeeinträchtigungen wie geringer Sehschärfe verursachen. [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) verlangt mindestens eine 2×-Vergrößerung; jedoch ist es am besten, eine 5×-Vergrößerung zu ermöglichen.

## Bildschirmdichte

Die Bildschirmauflösungen sind so weit gestiegen, dass einzelne Pixel mit dem menschlichen Auge nicht mehr zu unterscheiden sind. Smartphones haben beispielsweise oft kleine Bildschirme mit Auflösungen von mehr als 1920–1080 Pixeln (≈400dpi). Daher können viele Browser ihre Seiten in kleinerer physischer Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" verwenden. Anfangs verursachte dies Nutzbarkeits- und Lesbarkeitsprobleme auf vielen Touch-optimierten Websites.

Auf Bildschirmen mit hoher DPI werden Seiten mit `initial-scale=1` effektiv von Browsern vergrößert. Ihr Text wird glatt und scharf sein, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung. Um auf diesen Bildschirmen schärfere Bilder zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einem höheren Maßstab als ihre endgültige Größe entwerfen und sie dann mit CSS- oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Anzeigedichte ab. Bei einer Anzeige mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1.0. Bei Anzeigen mit Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1.5. Bei Anzeigen mit einer Dichte von mehr als 300dpi beträgt das Verhältnis den gerundeten Boden (_Dichte_/150dpi). Beachten Sie, dass das Standard-Verhältnis nur dann zutrifft, wenn der Viewport-Skalierungsfaktor 1 beträgt. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Geräte-Pixeln")}} vom aktuellen Zoomlevel ab.

## Viewport-Breite und Bildschirmbreite

Seiten können ihren Viewport auf eine bestimmte Größe setzen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf eine kleine Handyanzeige im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm bei der angeforderten Skalierung auszufüllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die einen anfänglichen oder maximalen Skalierungswert setzen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, dann können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, erweitert der Browser den Viewport (anstatt hineinzuzoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Andere [Attribute](/de/docs/Web/HTML/Element/meta#attributes), die verfügbar sind, sind `minimum-scale`, `maximum-scale` und `user-scalable`. Diese Eigenschaften beeinflussen die Anfangsskalierung und Breite sowie die Begrenzung der Änderungen des Zoomlevels.

## Die Auswirkung interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports einer Seite beeinflussen. Das häufigste dieser UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Verhaltensmodell der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

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

Wenn der {{Glossary("viewport", "Viewport")}} verändert wird, wird auch der anfängliche [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) verändert, wodurch die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst wird.

## Gängige Viewport-Größen für Mobilgeräte und Tablets

Wenn Sie wissen möchten, welche Mobilgeräte und Tablets welche Viewport-Breiten haben, gibt es eine umfassende Liste der [Viewport-Größen für Mobilgeräte und Tablets hier](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports). Diese gibt Informationen wie Viewport-Breite in Hoch-und Querformat sowie physische Bildschirmgröße, Betriebssystem und die Pixeldichte des Geräts.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Artikel: [Vorbereiten auf Änderungen des Viewport-Resize-Verhaltens in Chrome auf Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
