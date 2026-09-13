---
title: '`<meta name="viewport">` HTML-Attributwert'
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "Viewport")}} dimensioniert werden sollte.

Wenn angegeben, definieren Sie viewport-bezogene Verhaltensweisen mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Werten.

## Anwendungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert werden, und sein Wert legt verschiedene viewport-bezogene Verhaltensweisen fest.
    Sein Wert ist eine kommagetrennte Liste von einem oder mehreren Schlüssel-Wert-Paaren, die als `key=value` angegeben sind. Die folgenden Schlüssel sind definiert:
    - `width`
      - : Steuert die (minimale) Pixelbreite des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport_breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 gesetzt werden (wie `width=600`) oder auf den speziellen Wert `device-width`, der die physische Größe des Gerätes in CSS-Pixeln ist. Dieser Wert bestimmt den Wert der [`vw`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit.
    - `height`
      - : Steuert die (minimale) Pixelhöhe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport_breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 gesetzt werden (wie `height=400`) oder auf den speziellen Wert `device-height`, der die physische Größe des Gerätes in CSS-Pixeln ist. Dieser Wert bestimmt den Wert der [`vh`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert den maximalen Zoomfaktor.
        Er muss größer oder gleich dem `minimum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert den minimalen Zoomfaktor.
        Er muss kleiner oder gleich dem `maximum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite zoomen kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standardwert ist.
        > [!WARNING]
        > Das Deaktivieren der Zoom-Funktionalität, indem `user-scalable` auf `no` gesetzt wird, verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können. Darüber hinaus erfordert die WCAG ein Minimum von 2-fachem Zoomen; jedoch ist es Best Practice, ein 5-faches Zoomen zu ermöglichen. Weitere Informationen finden Sie hier:
        >
        > - [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Verstehen von Erfolgskriterium 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Gibt an, welche Auswirkung interaktive UI-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget verändert. Dies ist der Standard.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget verändert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport werden durch das interaktive Widget verändert.

        Wenn der {{Glossary("viewport", "Viewport")}} verändert wird, wird auch der initiale [enthältende Block](/de/docs/Web/CSS/Guides/Display/Containing_block) verändert, was die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) beeinflusst.

    - `viewport-fit`
      - : Definiert die sichtbaren Teile der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst nicht den initialen Viewport und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte innerhalb der Anzeige eingeschriebene Rechteck zu passen.
        - `cover`: Der Viewport wird skaliert, um die Gerätanzeige auszufüllen.
          Es wird dringend empfohlen, die [sicheren Bereich-Einsätze](/de/docs/Web/CSS/Reference/Values/env) Variablen zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb der Anzeige endet.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können. Die Größe des Viewports muss berechnet werden, bevor der Inhalt der Seite dargestellt werden kann — die Seite kann den Viewport überschreiten, in welchem Fall der Browser Bildlaufleisten bereitstellt, damit der Benutzer herumschrollen und auf den gesamten Inhalt zugreifen kann. Aber die Größe des Viewports ist die Richtlinie, wie viel Platz insbesondere horizontal der Inhalt einnehmen sollte.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das breiter ist als der Bildschirm, und schrumpfen dann das gerenderte Ergebnis, um in die Bildschirmgröße zu passen. Benutzer können dann zoomen und schwenken, um verschiedene Bereiche der Seite näher zu betrachten. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 640px hat, können Seiten mit einem virtuellen Viewport von 980px gerendert werden, und dann wird es so verkleinert, dass es in den 640px-Bereich passt. Dies geschieht, weil nicht alle Seiten für Mobilgeräte optimiert sind und brechen (oder zumindest schlecht aussehen), wenn sie bei einer kleinen Viewport-Breite gerendert werden. Dieser virtuelle Viewport ist ein Weg, um nicht-mobil-optimierte Seiten im Allgemeinen auf schmalen Bildschirmen besser aussehen zu lassen. Allerdings ist dieser Mechanismus nicht so gut für Seiten, die für schmale Bildschirme optimiert sind, unter Verwendung von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) — wenn der virtuelle Viewport z.B. 980px ist, werden Media Queries, die bei 640px oder 480px oder weniger greifen, nie angewendet, was die Wirksamkeit solcher responsiver Gestaltungstechniken einschränkt. Das `<meta>`-Element für den Viewport mildert dieses Problem des virtuellen Viewports auf schmalen Geräten.

Die empfohlene Einstellung ist folgende, die den Viewport auf die Breite des Geräts abstimmt:

```html
<meta name="viewport" content="width=device-width" />
```

> [!NOTE]
> Die Einbeziehung von `initial-scale=1.0` war historisch notwendig, um unbeabsichtigte Zoomverhalten in älteren mobilen Browsern zu verhindern. Während moderne Browser `initial-scale` nicht benötigen, um dieses Verhalten zu beheben, ist `initial-scale` nicht völlig überflüssig und bleibt nützlich, wenn Sie benutzerdefinierte Standardwerte für die Skalierung oder feste Layout-Breiten definieren.

Websites können ihren Viewport auf eine bestimmte Größe einstellen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Telefon-Display im Hochformat zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, werden Browser die Viewport-Breite bei Bedarf erweitern, um den Bildschirm bei der gewünschten Skalierung auszufüllen. Dies ist besonders nützlich auf Geräten mit großen Bildschirmen.

Für Seiten, die eine initiale oder maximale Skalierung festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Zum Beispiel, wenn Ihr Layout mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (statt hineinzuzoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Bildschirmdichte

Die Bildschirmauflösungen sind auf eine Größe gestiegen, bei der einzelne Pixel von menschlichen Augen nicht mehr unterscheidbar sind. Beispielsweise haben Smartphones oft kleine Bildschirme mit Auflösungen von über 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Anfangs verursachte dies auf vielen touch-optimierten Websites Probleme hinsichtlich Benutzerfreundlichkeit und Lesbarkeit.

Auf Bildschirmen mit hoher dpi-Zahl werden Seiten mit `initial-scale=1` effektiv von Browsern gezoomt. Ihr Text wird glatt und scharf sein, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einer höheren Skala als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften verkleinern.

Das Standard-Pixelverhältnis hängt von der Displaydichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1.0. Auf Displays mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1.5. Für Displays mit einer Dichte von über 300dpi ist das Verhältnis der Ganzzahl-Boden (_density_/150dpi). Beachten Sie, dass das Standardverhältnis nur dann zutrifft, wenn die Viewport-Skalierung gleich 1 ist. Andernfalls hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Gerätepixeln")}} vom aktuellen Zoomlevel ab.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel gibt dem Browser an, dass die Seite mit der Gerätebreite gerendert werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser Hinweise für die Verwendung des Vollbildmodus geben, zusammen mit `viewport-fit`, was hilft, Bildschirmabschnitte wie mobile Geräteausschnitte zu vermeiden:

```html
<meta name="viewport" content="width=device-width, viewport-fit=cover" />
```

### Die Auswirkungen interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports einer Seite beeinflussen. Das häufigste solch ein UI-Widget ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, stellen Sie die Eigenschaft `interactive-widget` ein.

Standardmäßig verändert die virtuelle Tastatur nur den visuellen Viewport, was das Layout der Seite nicht beeinflusst. Sie können das Layout der Seite an die Präsenz der virtuellen Tastatur anpassen, indem Sie die Eigenschaft `interactive-widget` auf `resizes-content` setzen:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "Viewport")}} Glossareintrag
- [Bereiten Sie sich auf Änderungen des Viewport-Resize-Verhaltens in Chrome auf Android vor](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile Viewports für responsive Erlebnisse](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
