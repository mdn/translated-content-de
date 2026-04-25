---
title: '`<meta name="viewport">` HTML-Attributwert'
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "viewport")}} dimensioniert werden sollte.

Wenn angegeben, definieren Sie über ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element das Verhalten bezogen auf den Viewport als eine mit Komma getrennte Liste von einem oder mehreren Werten.

## Nutzungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein, und sein Wert legt verschiedene, viewport-bezogene Verhaltensweisen fest.
    Der Wert ist eine mit Komma getrennte Liste von einem oder mehreren Schlüssel-Wert-Paaren, die als `key=value` spezifiziert sind. Die folgenden Schlüssel sind definiert:
    - `width`
      - : Steuert die (minimale) Pixelbreite des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Anzahl von Pixeln zwischen 1 und 10.000 gesetzt werden (wie `width=600`) oder auf den speziellen Wert `device-width`, der die physische Größe des Gerätscreens in CSS-Pixeln ist. Dieser Wert legt den Wert der Einheit [`vw`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) fest.
    - `height`
      - : Steuert die (minimale) Pixelhöhe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Anzahl von Pixeln zwischen 1 und 10.000 gesetzt werden (wie `height=400`) oder auf den speziellen Wert `device-height`, der die physische Größe des Gerätscreens in CSS-Pixeln ist. Dieser Wert legt den Wert der Einheit [`vh`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) fest.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Größe des Viewports.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert die maximale Vergrößerungsstufe.
        Es muss größer oder gleich dem `minimum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert die minimale Vergrößerungsstufe.
        Es muss kleiner oder gleich dem `maximum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolesches Attribut, das angibt, ob der Benutzer die Webseite vergrößern kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standardwert ist.
        > [!WARNING]
        > Das Deaktivieren der Zoomfunktionalität durch Setzen von `user-scalable` auf den Wert `no` verhindert, dass Personen mit Sehbeeinträchtigungen den Seiteninhalt lesen und verstehen können. Außerdem erfordert die WCAG eine Mindestvergrößerung von 2×; jedoch ist es die beste Praxis, eine 5×-Vergrößerung zu aktivieren. Für weitere Informationen siehe:
        >
        > - [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Gibt an, welchen Effekt interaktive UI-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget in der Größe verändert. Dies ist der Standard.
        - `resizes-content`: Der {{Glossary("viewport", "viewport")}} wird durch das interaktive Widget in der Größe verändert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport werden durch das interaktive Widget in der Größe verändert.

        Wenn der {{Glossary("viewport", "viewport")}} in der Größe verändert wird, wird auch der ursprüngliche [umfassende Block](/de/docs/Web/CSS/Guides/Display/Containing_block) in der Größe verändert, was somit die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) beeinflusst.

    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst das anfängliche Layout-Viewport nicht, und die ganze Webseite ist sichtbar.
        - `contain`: Der Viewport wird so skaliert, dass das größte Rechteck, das im Bildschirm eingeschrieben ist, hineinpasst.
        - `cover`: Der Viewport wird skaliert, um die Geräteanzeige zu füllen.
          Es wird dringend empfohlen, die [sicheren Bereichsvariablen](/de/docs/Web/CSS/Reference/Values/env) zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb der Anzeige enden.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte angesehen werden können. Die Größe des Viewports muss berechnet werden, bevor der Inhalt der Seite layoutet werden kann – die Seite kann die Größe des Viewports überschreiten, in diesem Fall stellt der Browser Scrollbalken bereit, damit der Benutzer herumscrollen und auf den gesamten Inhalt zugreifen kann, aber die Größe des Viewports ist die Richtlinie dafür, wie viel Platz, insbesondere horizontal, der Inhalt einnehmen sollte.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, um in die Bildschirmgröße zu passen. Benutzer können dann hineinzoomen und panen, um sich Bereiche der Seite genauer anzusehen. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert und dann auf 640px Größe heruntergeschrumpft werden. Dies geschieht, weil nicht alle Seiten für Mobilgeräte optimiert sind und beim Rendern mit kleiner Viewport-Breite zerbrechen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist eine Möglichkeit, nicht mobil optimierte Seiten allgemein auf schmalen Geräten besser aussehen zu lassen. Dieses Mechanismus ist jedoch nicht so gut für Seiten geeignet, die für schmale Bildschirme mit [media queries](/de/docs/Web/CSS/Guides/Media_queries) optimiert sind – wenn der virtuelle Viewport beispielsweise 980px ist, werden media queries, die bei 640px oder 480px oder weniger wirksam werden, nie genutzt, was die Effektivität solcher responsiven Designtechniken einschränkt. Das `<meta>`-Viewport-Element mildert dieses Problem des virtuellen Viewports auf schmalen Gerätebildschirmen.

Die gängigste Einstellung ist die folgende, die den Viewport so einstellt, dass er mit der Breite des Geräts übereinstimmt und den Inhalt bei 100% Zoom anzeigt:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Handy-Display im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite bei Bedarf, um den Bildschirm in der angeforderten Skalierung zu füllen. Dies ist besonders nützlich für Geräte mit großem Bildschirm.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie die folgende Markierung verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (anstatt hineinzuzoomen), um den Bildschirm zu füllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Bildschirmauflösung

Die Bildschirmauflösungen haben eine Größe erreicht, bei der einzelne Pixel vom menschlichen Auge nicht mehr zu unterscheiden sind. Beispielsweise haben Smartphones oft kleine Bildschirme mit Auflösungen von 1920–1080 Pixeln oder mehr (≈400dpi). Daher können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies auf vielen touch-optimierten Websites Usability- und Lesbarkeitsprobleme.

Auf Bildschirmen mit hoher dpi-Zahl werden Seiten mit `initial-scale=1` effektiv von Browsern vergrößert. Ihr Text wird geschmeidig und scharf sein, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung. Um auf diesen Bildschirmen schärfere Bilder zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einer höheren Skalierung als ihre endgültige Größe entwerfen und dann mithilfe von CSS oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixel-Verhältnis hängt von der Anzeigedichte ab. Bei einer Anzeige mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1,0. Bei Anzeigen mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Bei Anzeigen mit einer Dichte von über 300dpi ist das Verhältnis der ganzzahlige Anteil (_density_/150dpi). Beachten Sie, dass das Standard-Verhältnis nur gilt, wenn der Viewport-Scale gleich 1 ist. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Gerätepixeln")}} vom aktuellen Zoomlevel ab.

## Beispiele

### Verwenden einer Meta-Viewport-Größe

Das folgende Beispiel gibt dem Browser an, dass die Seite in der Gerätebreite gerendert werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser andeuten, den Vollbildmodus zu verwenden, zusammen mit `viewport-fit`, was hilft, Displayausschnitte wie Mobilgerätenotches zu vermeiden:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports einer Seite beeinflussen. Das häufigste dieser UI-Widgets ist eine virtuelle Tastatur. Um zu kontrollieren, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

Standardmäßig ändert die virtuelle Tastatur nur die Größe des visuellen Viewports, was das Layout der Seite nicht beeinflusst. Sie können das Layout der Seite an die Anwesenheit der virtuellen Tastatur anpassen, indem Sie die `interactive-widget`-Eigenschaft auf `resizes-content` setzen:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "viewport")}} Glossarbegriff
- [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile viewports for responsive experiences](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
