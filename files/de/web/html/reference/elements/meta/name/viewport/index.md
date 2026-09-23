---
title: HTML-Attributwert `<meta name="viewport">`
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: 1402df2877308c09ea2aa1460f1c97c634bd7624
---

Der Wert **`viewport`** für das Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "Viewport")}} bemessen werden soll.

Wenn dieser Wert angegeben ist, legen Sie das Verhalten des Viewports über das Attribut [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) im `<meta>`-Element fest. Dessen Wert ist eine durch Kommas getrennte Liste mit einem oder mehreren Einträgen.

## Hinweise zur Verwendung

Ein `<meta name="viewport">`-Element hat das folgende zusätzliche Attribut:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das Attribut `content` muss definiert sein. Sein Wert legt verschiedene Verhaltensweisen des Viewports fest.
    Er besteht aus einer durch Kommas getrennten Liste mit einem oder mehreren Schlüssel-Wert-Paaren im Format `key=value`. Die folgenden Schlüssel sind definiert:
    - `width`
      - : Steuert die (Mindest-)Breite des Viewports in Pixeln (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Der Wert kann eine positive ganze Pixelzahl zwischen 1 und 10000 sein (z. B. `width=600`) oder der spezielle Wert `device-width`, der die physische Breite des Gerätebildschirms in CSS-Pixeln bezeichnet. Dieser Wert bestimmt den Wert der Einheit [`vw`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport).
    - `height`
      - : Steuert die (Mindest-)Höhe des Viewports in Pixeln (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Der Wert kann eine positive ganze Pixelzahl zwischen 1 und 10000 sein (z. B. `height=400`) oder der spezielle Wert `device-height`, der die physische Höhe des Gerätebildschirms in CSS-Pixeln bezeichnet. Dieser Wert bestimmt den Wert der Einheit [`vh`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport).
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Größe des Viewports.
        Der Wert kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert die maximale Vergrößerung.
        Der Wert muss größer oder gleich `minimum-scale` sein; andernfalls ist das Verhalten nicht definiert.
        Browsereinstellungen können diese Regel ignorieren; iOS 10 und neuer ignoriert sie standardmäßig.
        Der Wert kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert die minimale Vergrößerungsstufe.
        Der Wert muss kleiner oder gleich `maximum-scale` sein; andernfalls ist das Verhalten nicht definiert.
        Browsereinstellungen können diese Regel ignorieren; iOS 10 und neuer ignoriert sie standardmäßig.
        Der Wert kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob Benutzer die Webseite vergrößern können.
        Browsereinstellungen können diese Regel ignorieren; iOS 10 und neuer ignoriert sie standardmäßig.
        Der Wert kann `yes` oder `no` sein; der Standardwert ist `yes`.
        > [!WARNING]
        > Wenn Sie die Vergrößerung deaktivieren, indem Sie `user-scalable` auf `no` setzen, können Menschen mit eingeschränktem Sehvermögen Seiteninhalte möglicherweise nicht lesen und verstehen. Zudem verlangt WCAG eine mindestens zweifache Vergrößerung; empfohlen wird jedoch, eine fünffache Vergrößerung zu ermöglichen. Weitere Informationen finden Sie unter:
        >
        > - [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Erfolgskriterium 1.4.4 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Legt fest, wie sich interaktive UI-Widgets, etwa virtuelle Tastaturen, auf den Viewport einer Seite auswirken.
        Der Wert kann eines der Schlüsselwörter `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird durch das interaktive Widget in seiner Größe verändert. Dies ist die Standardeinstellung.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget in seiner Größe verändert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport wird durch das interaktive Widget in seiner Größe verändert.

        Wenn sich die Größe des {{Glossary("viewport", "Viewports")}} ändert, ändert sich auch die Größe des anfänglichen [Containing Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Dies wirkt sich auf die berechnete Größe von [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) aus.

    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Der Wert kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst den anfänglichen Layout-Viewport nicht; die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird so skaliert, dass er in das größte in den Bildschirm einbeschriebene Rechteck passt.
        - `cover`: Der Viewport wird so skaliert, dass er den Gerätebildschirm ausfüllt.
          Es wird dringend empfohlen, die [Safe-Area-Inset](/de/docs/Web/CSS/Reference/Values/env)-Variablen zu verwenden, damit wichtige Inhalte nicht außerhalb des sichtbaren Bildschirmbereichs liegen.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Seine Größe muss berechnet werden, bevor der Seiteninhalt angeordnet werden kann. Der Inhalt kann über den Viewport hinausragen; in diesem Fall stellt der Browser Scrollleisten bereit, damit Benutzer scrollen und auf sämtliche Inhalte zugreifen können. Die Größe des Viewports gibt jedoch vor, wie viel Platz dem Inhalt insbesondere in horizontaler Richtung zur Verfügung stehen sollte.

Einige Mobilgeräte und andere Geräte mit schmalem Bildschirm rendern Seiten in einem virtuellen Fenster oder Viewport, der breiter als der Bildschirm ist, und verkleinern anschließend das gerenderte Ergebnis auf die Bildschirmgröße. Benutzer können dann zoomen und den sichtbaren Ausschnitt verschieben, um verschiedene Bereiche der Seite genauer zu betrachten. Ist ein Mobilgerätbildschirm beispielsweise 640px breit, werden Seiten möglicherweise mit einem virtuellen Viewport von 980px gerendert und anschließend auf 640px verkleinert. Das geschieht, weil nicht alle Seiten für Mobilgeräte optimiert sind und bei einer geringen Viewport-Breite nicht richtig dargestellt werden oder zumindest schlecht aussehen. Durch den virtuellen Viewport sehen nicht für Mobilgeräte optimierte Websites auf Geräten mit schmalem Bildschirm im Allgemeinen besser aus. Für Seiten, die mithilfe von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) für schmale Bildschirme optimiert wurden, ist dieser Mechanismus jedoch weniger geeignet: Beträgt die Breite des virtuellen Viewports beispielsweise 980px, werden Media Queries, die bei 640px, 480px oder darunter greifen, nie verwendet. Das schränkt die Wirksamkeit solcher responsiven Gestaltungstechniken ein. Das Viewport-`<meta>`-Element verringert dieses Problem virtueller Viewports auf Geräten mit schmalem Bildschirm.

Empfohlen wird die folgende Einstellung, die die Viewport-Breite an die Gerätebreite anpasst:

```html
<meta name="viewport" content="width=device-width" />
```

> [!NOTE]
> In diesem Beispiel wird `initial-scale=1` weggelassen. Das ist üblich, da die Angabe meist nicht erforderlich ist. Ohne diese Angabe bestimmt der Browser die anfängliche Vergrößerungsstufe automatisch und verkleinert die Darstellung möglicherweise, wenn Inhalte über den Viewport hinausragen. Wie stark die Darstellung skaliert wird, hängt vom Browser und möglicherweise sowohl von der Breite als auch von der Höhe des Inhalts ab. Fügen Sie `initial-scale=1` hinzu, wenn über den Viewport hinausragende Inhalte eine unerwünschte Verkleinerung verursachen und die Seite stattdessen mit 100 % Vergrößerung angezeigt werden soll. In der Regel sollten Sie jedoch vermeiden, dass Inhalte horizontal über den Viewport hinausragen.

Websites können ihren Viewport auf eine bestimmte Größe festlegen. Beispielsweise lässt sich mit der Definition `"width=320, initial-scale=1"` eine Seite im Hochformat genau an das Display eines kleinen Telefons anpassen. Das kann zu Problemen führen, wenn der Browser eine Seite in größerem Format darstellt. Um dies zu beheben, vergrößern Browser bei Bedarf die Viewport-Breite, sodass der Bildschirm bei der angeforderten Skalierung ausgefüllt wird. Das ist besonders auf Geräten mit großen Bildschirmen nützlich.

Bei Seiten, die eine anfängliche oder maximale Skalierung festlegen, entspricht die Eigenschaft `width` daher tatsächlich einer _Mindestbreite_ des Viewports. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Ist der Bildschirm breiter als 500 Pixel, vergrößert der Browser den Viewport, statt die Darstellung zu vergrößern, um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Pixeldichte des Bildschirms

Bildschirmauflösungen sind so hoch geworden, dass einzelne Pixel für das menschliche Auge nicht mehr zu unterscheiden sind. Smartphones haben beispielsweise häufig kleine Bildschirme mit Auflösungen von 1920 × 1080 Pixeln oder mehr (≈ 400 dpi). Deshalb können viele Browser ihre Seiten physisch kleiner darstellen, indem sie für jedes CSS-„Pixel“ mehrere Hardwarepixel verwenden. Anfangs führte dies auf vielen für die Touchbedienung optimierten Websites zu Problemen bei der Bedienbarkeit und Lesbarkeit.

Auf Bildschirmen mit hoher Pixeldichte werden Seiten mit `initial-scale=1` von Browsern effektiv vergrößert. Der Text erscheint glatt und scharf, Bitmap-Bilder nutzen die volle Bildschirmauflösung jedoch möglicherweise nicht aus. Um auf solchen Bildschirmen schärfere Bilder zu erhalten, können Webentwickler Bilder – oder ganze Layouts – in einem größeren Maßstab als der endgültigen Größe gestalten und sie anschließend mithilfe von CSS oder Viewport-Eigenschaften verkleinern.

Das standardmäßige Pixelverhältnis hängt von der Pixeldichte des Bildschirms ab. Bei einer Dichte unter 200 dpi beträgt es 1,0. Bei einer Dichte zwischen 200 und 300 dpi beträgt es 1,5. Bei einer Dichte über 300 dpi entspricht es dem abgerundeten ganzzahligen Wert von _Dichte_/150 dpi. Beachten Sie, dass dieses Standardverhältnis nur gilt, wenn die Viewport-Skalierung 1 beträgt. Andernfalls hängt das Verhältnis zwischen CSS-Pixeln und {{Glossary("device_pixel", "Gerätepixeln")}} von der aktuellen Vergrößerungsstufe ab.

## Beispiele

### Größe des Meta-Viewports verwenden

Das folgende Beispiel weist den Browser an, die Seite in Gerätebreite darzustellen:

```html
<meta name="viewport" content="width=device-width" />
```

### Eine Media Query mit einem Viewport-Meta-Element verwenden

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser die Verwendung des Vollbildmodus nahelegen. Zusammen mit `viewport-fit` hilft dies, Displayaussparungen wie Notches auf Mobilgeräten zu berücksichtigen:

```html
<meta name="viewport" content="width=device-width, viewport-fit=cover" />
```

### Auswirkungen interaktiver UI-Widgets

Interaktive UI-Widgets des Browsers können die Größe der Viewports einer Seite beeinflussen. Das häufigste Beispiel ist eine virtuelle Tastatur. Legen Sie die Eigenschaft `interactive-widget` fest, um zu steuern, wie der Browser die Größe anpassen soll.

Standardmäßig ändert die virtuelle Tastatur nur die Größe des visuellen Viewports. Das Layout der Seite bleibt davon unberührt. Damit sich das Layout der Seite an die eingeblendete virtuelle Tastatur anpasst, setzen Sie die Eigenschaft `interactive-widget` auf `resizes-content`:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossareintrag {{Glossary("viewport", "Viewport")}}
- [Vorbereitung auf Änderungen am Verhalten bei der Viewport-Größenanpassung in Chrome für Android](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile Viewports für responsive Darstellungen](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
