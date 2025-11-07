---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "Viewport")}} dimensioniert werden sollte.

Wenn angegeben, definieren Sie mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element, das als kommaseparierte Liste von einem oder mehreren Werten dargestellt wird, das Verhalten des Viewports.

## Verwendungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein und sein Wert legt verschiedene viewport-bezogene Verhaltensweisen fest.
    Sein Wert ist eine durch Kommata getrennte Liste von einem oder mehreren Schlüssel-Wert-Paaren, die als `key=value` angegeben sind. Die folgenden Schlüssel sind definiert:
    - `width`
      - : Kontrolliert die (minimale) Pixel-Breite des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl an Pixeln zwischen 1 und 10.000 festgelegt werden (wie `width=600`) oder auf den speziellen Wert `device-width`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit fest.
    - `height`
      - : Kontrolliert die (minimale) Pixel-Höhe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl an Pixeln zwischen 1 und 10.000 festgelegt werden (wie `height=400`) oder auf den speziellen Wert `device-height`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit fest.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert den maximalen Zoomfaktor.
        Es muss größer oder gleich dem `minimum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert es standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert den minimalen Zoomfaktor.
        Es muss kleiner oder gleich dem `maximum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert es standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer auf der Webseite zoomen kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert es standardmäßig.
        Es kann entweder `yes` oder `no` sein, standardmäßig `yes`.
        > [!WARNING]
        > Das Deaktivieren der Zoommöglichkeit durch Festlegen von `user-scalable` auf `no` verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können. Zusätzlich verlangt WCAG mindestens eine 2-fache Skalierung; es ist jedoch am besten, einen 5-fachen Zoom zu ermöglichen. Für weitere Informationen siehe:
        >
        > - [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Gibt an, welchen Effekt interaktive UI-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget angepasst. Dies ist der Standard.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget angepasst.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport werden durch das interaktive Widget angepasst.

        Wenn der {{Glossary("viewport", "Viewport")}} geändert wird, wird auch der anfängliche [Enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block) angepasst, was sich auf die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) auswirkt.

    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst das anfängliche Layout-Viewport nicht, und die gesamte Seite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte innerhalb des Bildschirms eingeschriebene Rechteck zu passen.
        - `cover`: Der Viewport wird skaliert, um das Gerätedisplay zu füllen.
          Es wird dringend empfohlen, die [safe area inset](/de/docs/Web/CSS/Reference/Values/env) Variablen zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays endet.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Die Viewport-Größe muss berechnet werden, bevor die Inhalte der Seite gestaltet werden können – die Seite kann den Viewport überlaufen, in diesem Fall stellt der Browser Scrollbalken zur Verfügung, damit der Benutzer scrollen und auf alle Inhalte zugreifen kann, aber die Viewport-Größe ist die Richtlinie dafür, wie viel Platz, insbesondere horizontal, der Inhalt umfassen soll.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das breiter ist als der Bildschirm, und verkleinern dann das gerenderte Ergebnis, um es an die Bildschirmgröße anzupassen. Benutzer können dann zoomen und schwenken, um verschiedene Bereiche der Seite genauer zu betrachten. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 640px hat, werden Seiten möglicherweise mit einem virtuellen Viewport von 980px gerendert und dann auf den 640px-Raum verkleinert. Dies wird getan, weil nicht alle Seiten für Mobilgeräte optimiert sind und (oder zumindest schlecht aussehen), wenn sie bei einer kleinen Viewport-Breite gerendert werden. Dieser virtuelle Viewport ist eine Möglichkeit, nicht für Mobilgeräte optimierte Websites auf schmaleren Bildschirmen besser aussehen zu lassen. Allerdings ist dieser Mechanismus nicht so gut für Seiten, die mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind — wenn der virtuelle Viewport zum Beispiel 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger greifen, niemals verwendet, was die Effektivität solcher responsiven Designtaktiken einschränkt. Das `<meta>`-Viewport-Element mildert dieses Problem des virtuellen Viewports auf schmalen Geräten.

Die häufigste Einstellung ist die folgende, die den Viewport an die Breite des Geräts anpasst und den Inhalt bei 100% Zoom anzeigt:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Seiten können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefon-Display im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, erweitern Browser die Viewport-Breite, wenn nötig, um den Bildschirm in der angeforderten Skala zu füllen. Dies ist besonders nützlich auf großen Bildschirmgeräten.

Für Seiten, die eine anfängliche oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, erweitert der Browser den Viewport (anstatt hineinzuzoomen), um den Bildschirm zu füllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Bildschärfe

Bildschirmauflösungen sind so hoch geworden, dass einzelne Pixel für das menschliche Auge nicht mehr unterscheidbar sind. Smartphones haben zum Beispiel oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Ursprünglich verursachte dies Usability- und Lesbarkeitsprobleme auf vielen touch-optimierten Websites.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` effektiv von Browsern gezoomt. Ihr Text wird glatt und klar, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder oder ganze Layouts in einem größeren Maßstab als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften skalieren.

Das Standard-Pixelverhältnis hängt von der Display-Dichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1,0. Auf Displays mit Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Bei Displays mit einer Dichte über 300dpi ist das Verhältnis der ganzzahlige Boden (_density_/150dpi). Beachten Sie, dass das Standardverhältnis nur dann gilt, wenn die Viewport-Skalierung gleich 1 ist. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Gerätepixeln")}} vom aktuellen Zoomlevel ab.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel zeigt dem Browser an, dass die Seite in der Gerätebreite gerendert werden sollte:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einer Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die den Browser darauf hinweisen, den Vollbildmodus zu verwenden, zusammen mit `viewport-fit`, das hilft, Anzeigeausschnitte wie Kerben auf Mobilgeräten zu vermeiden:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Der Effekt von interaktiven UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solcher UI-Widgets ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

Standardmäßig ändert die virtuelle Tastatur nur den visuellen Viewport, was sich nicht auf das Layout der Seite auswirkt. Sie können das Layout der Seite an die Anwesenheit der virtuellen Tastatur anpassen, indem Sie die `interactive-widget`-Eigenschaft auf `resizes-content` setzen:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "viewport")}} Glossarbegriff
- [Bereiten Sie sich auf Änderungen des Viewport-Resize-Verhaltens in Chrome auf Android vor](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile Viewports für responsive Erlebnisse](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
