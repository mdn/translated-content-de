---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "Viewport")}} dimensioniert werden sollte.

Wenn angegeben, definiert man das verhaltensbezogene Verhalten des Viewports mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Werten.

## Verwendungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein, und sein Wert legt verschiedene verhaltensbezogene Aspekte des Viewports fest.
    Sein Wert ist eine kommagetrennte Liste von einem oder mehreren Schlüssel-Wert-Paaren, angegeben als `key=value`. Die folgenden Schlüssel sind definiert:
    - `width`
      - : Bestimmt die (minimale) Pixelbreite des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 eingestellt werden (wie `width=600`) oder auf den speziellen Wert `device-width`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vw`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest.
    - `height`
      - : Bestimmt die (minimale) Pixelhöhe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 eingestellt werden (wie `height=400`) oder auf den speziellen Wert `device-height`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert legt den Wert der [`vh`](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport)-Einheit fest.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert die maximale Vergrößerung.
        Es muss größer oder gleich dem `minimum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und ab iOS10+ wird sie standardmäßig ignoriert.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert den minimalen Vergrößerungsgrad.
        Es muss kleiner oder gleich dem `maximum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und ab iOS10+ wird sie standardmäßig ignoriert.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite vergrößern kann.
        Browsereinstellungen können diese Regel ignorieren, und ab iOS10+ wird sie standardmäßig ignoriert.
        Es kann entweder `yes` oder `no` sein, wobei der Standardwert `yes` ist.
        > [!WARNING]
        > Das Deaktivieren der Zoomfunktionen durch Setzen von `user-scalable` auf `no` verhindert, dass Menschen mit Sehbehinderungen in der Lage sind, den Seiteninhalt zu lesen und zu verstehen. Zusätzlich erfordert WCAG mindestens eine Vergrößerung um das 2-fache; die beste Praxis ist jedoch eine Vergrößerung um das 5-fache zu ermöglichen. Weitere Informationen finden Sie hier:
        >
        > - [MDN Understanding WCAG, Guideline 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Gibt den Effekt an, den interaktive UI-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget geändert. Dies ist der Standardwert.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget geändert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport wird durch das interaktive Widget geändert.

        Wenn der {{Glossary("viewport", "Viewport")}} geändert wird, wird auch der initiale [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) geändert, wodurch die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) beeinflusst wird.

    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst nicht den initialen Layout-Viewport und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte im Display eingeschriebene Rechteck zu passen.
        - `cover`: Der Viewport wird skaliert, um das Display des Geräts auszufüllen.
          Es wird dringend empfohlen, die [Safe Area Inset](/de/docs/Web/CSS/env)-Variablen zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays endet.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Web-Inhalte angezeigt werden können. Die Größe des Viewports muss berechnet werden, bevor der Seiteninhalt ausgelegt werden kann - die Seite kann über den Viewport hinausgehen, in diesem Fall stellt der Browser Bildlaufleisten zur Verfügung, damit der Benutzer den gesamten Inhalt durchscrollen und darauf zugreifen kann, aber die Größe des Viewports ist die Richtlinie dafür, wie viel Platz, insbesondere horizontal, der Inhalt einnehmen sollte.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, der breiter als der Bildschirm ist, und schrumpfen dann das gerenderte Ergebnis, um auf die Bildschirmgröße zu passen. Benutzer können dann hereinzoomen und schwenken, um sich verschiedene Bereiche der Seite genauer anzusehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 640px hat, könnten Seiten mit einem virtuellen Viewport von 980px gerendert werden, und dann wird er verkleinert, um in den 640px-Bereich zu passen. Dies geschieht, weil nicht alle Seiten für mobile Geräte optimiert sind und beim Rendern auf einer geringen Viewport-Breite brechen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist eine Möglichkeit, um nicht mobiltaugliche Websites allgemein auf schmalen Geräten besser aussehen zu lassen. Dieses Mechanismus ist jedoch nicht so gut für Seiten, die mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) für schmale Bildschirme optimiert sind — wenn der virtuelle Viewport zum Beispiel 980px beträgt, werden Media Queries, die bei 640px oder 480px oder weniger greifen, niemals verwendet, was die Effektivität solcher Responsive Design-Techniken begrenzt. Das Viewport-`<meta>`-Element lindert dieses Problem des virtuellen Viewports auf schmalen Bildschirmen.

Die häufigste Einstellung ist die folgende, die den Viewport so einstellt, dass er mit der Breite des Geräts übereinstimmt und den Inhalt mit 100% Zoom anzeigt:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Websites können ihren Viewport auf eine spezifische Größe setzen. Zum Beispiel kann die Definition `"width=320, initial-scale=1"` verwendet werden, um auf eine kleine Telefondisplay im Hochformat perfekt zu passen. Dies kann Probleme verursachen, wenn der Browser eine Seite in einer größeren Größe rendert. Um dies zu beheben, werden Browser die Viewport-Breite bei Bedarf erweitern, um den Bildschirm bei der gewünschten Skala zu füllen. Dies ist besonders nützlich auf Geräten mit großem Bildschirm.

Für Seiten, die eine initiale oder maximale Skala setzen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Zum Beispiel, wenn Ihr Layout mindestens 500 Pixel Breite benötigt, dann können Sie das folgende Markup verwenden. Wenn der Bildschirm mehr als 500 Pixel breit ist, wird der Browser den Viewport erweitern (statt hereinzoomt), um den Bildschirm zu füllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Bildschirmdichte

Bildschirmauflösungen sind auf die Größe gestiegen, dass einzelne Pixel vom menschlichen Auge nicht unterschieden werden können. Zum Beispiel haben Smartphones oft kleine Bildschirme mit Auflösungen von mehr als 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" übersetzen. Ursprünglich verursachte dies auf vielen touch-optimierten Websites Usability- und Lesbarkeitsprobleme.

Auf hochauflösenden Bildschirmen werden Seiten mit `initial-scale=1` effektiv von Browsern vergrößert. Ihr Text wird glatt und klar sein, aber ihre Bitmap-Bilder nutzen möglicherweise nicht die volle Bildschirmauflösung aus. Um schärfere Bilder auf diesen Bildschirmen zu erhalten, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einem größeren Maßstab als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften verkleinern.

Das Standardpixelverhältnis hängt von der Displaydichte ab. Auf einem Bildschirm mit einer Dichte von weniger als 200dpi beträgt das Verhältnis 1.0. Auf Displays mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1.5. Für Displays mit einer Dichte von über 300dpi ist das Verhältnis der ganzzahlige Wert, der sich aus der Teilung der _Dichte_ durch 150dpi ergibt. Beachten Sie, dass das Standardverhältnis nur dann zutreffend ist, wenn die Viewport-Skalierung 1 beträgt. Andernfalls hängt das Verhältnis von CSS-Pixeln zu {{Glossary("device_pixel", "Gerätepixeln")}} vom aktuellen Zoomlevel ab.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel zeigt dem Browser an, dass die Seite mit der Breite des Geräts gerendert werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die den Browser dazu auffordern, den Vollbildmodus zu verwenden, zusammen mit `viewport-fit`, das hilft, Anzeigeausschnitte wie mobile Gerätesicheln zu vermeiden:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Die Auswirkung interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports der Seite beeinflussen. Das häufigste solche UI-Widget ist eine virtuelle Tastatur. Um zu steuern, welches Resize-Verhalten der Browser verwenden soll, setzen Sie die Eigenschaft `interactive-widget`.

Standardmäßig ändert die virtuelle Tastatur nur den visuellen Viewport, was das Layout der Seite nicht beeinflusst. Sie können das Layout der Seite an die Anwesenheit der virtuellen Tastatur anpassen, indem Sie die Eigenschaft `interactive-widget` auf `resizes-content` setzen:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "viewport")}} Glossarbegriff
- [Vorbereitung auf Änderungen im Viewport-Resize-Verhalten, die in Chrome auf Android kommen](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile Viewports für responsive Erlebnisse](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
