---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise darauf, wie der {{Glossary("viewport", "Viewport")}} dimensioniert werden sollte.

Wenn angegeben, definieren Sie die mit dem Viewport verbundenen Verhaltensweisen durch ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als kommaseparierte Liste von einem oder mehreren Werten.

## Hinweise zur Verwendung

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)

  - : Das `content`-Attribut muss definiert sein, und sein Wert legt verschiedene mit dem Viewport verbundene Verhaltensweisen fest.
    Sein Wert ist eine kommaseparierte Liste von einem oder mehreren Schlüssel-Wert-Paaren, die als `key=value` angegeben sind. Die folgenden Schlüssel sind definiert:

    - `width`
      - : Kontrolliert die (Mindest-)Pixelbreite des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 gesetzt werden (wie `width=600`) oder auf den speziellen Wert `device-width`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert definiert den Wert der [`vw`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit.
    - `height`
      - : Kontrolliert die (Mindest-)Pixelhöhe des Viewports (siehe [Viewport-Breite und Bildschirmbreite](#viewport-breite_und_bildschirmbreite)). Es kann auf eine positive ganze Zahl von Pixeln zwischen 1 und 10000 gesetzt werden (wie `height=400`) oder auf den speziellen Wert `device-height`, der die physische Größe des Geräts in CSS-Pixeln ist. Dieser Wert definiert den Wert der [`vh`](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)-Einheit.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert die maximale Vergrößerung.
        Es muss größer oder gleich dem `minimum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert das minimale Vergrößerungsniveau.
        Es muss kleiner oder gleich dem `maximum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite vergrößern kann.
        Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standardwert ist.
        > [!WARNING]
        > Das Deaktivieren der Zoomfähigkeiten, indem `user-scalable` auf einen Wert von `no` gesetzt wird, verhindert, dass Personen mit Sehbehinderungen in der Lage sind, den Inhalt der Seite zu lesen und zu verstehen. Darüber hinaus erfordert WCAG mindestens eine 2-fache Vergrößerung; jedoch ist es am besten, einen 5-fachen Zoom zu ermöglichen. Weitere Informationen finden Sie unter:
        >
        > - [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`

      - : Gibt den Effekt an, den interaktive Benutzeroberflächen-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.

        - `resizes-visual`: Der {{Glossary("visual_viewport", "visuelle Viewport")}} wird vom interaktiven Widget vergrößert. Dies ist der Standard.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird vom interaktiven Widget vergrößert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport werden vom interaktiven Widget vergrößert.

        Wenn der {{Glossary("viewport", "Viewport")}} vergrößert wird, wird auch der anfängliche [Umgrenzungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block) vergrößert, wodurch sich die berechnete Größe der [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) ändert.

    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst nicht den anfänglichen Layout-Viewport und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte, innerhalb der Anzeige eingeschriebene Rechteck zu passen.
        - `cover`: Der Viewport wird skaliert, um das Display des Geräts auszufüllen.
          Es wird dringend empfohlen, die [Sicherheitsbereichs-Einbettung](/de/docs/Web/CSS/Reference/Values/env)-Variablen zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays landet.

### Viewport-Breite und Bildschirmbreite

Der {{Glossary("viewport", "Viewport")}} des Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Die Viewport-Größe muss berechnet werden, bevor der Inhalt der Seite angeordnet werden kann – die Seite kann den Viewport überfluten, in diesem Fall stellt der Browser Bildlaufleisten zur Verfügung, damit der Benutzer alle Inhalte anzeigen kann. Die Viewport-Größe ist die Richtlinie dafür, wie viel Platz, insbesondere horizontal, der Inhalt einnehmen sollte.

Einige mobile Geräte und andere schmale Bildschirme rendern Seiten in einem virtuellen Fenster oder Viewport, das breiter als der Bildschirm ist, und schrumpfen dann das gerenderte Ergebnis, um es an die Bildschirmgröße anzupassen. Benutzer können dann zoomen und verschieben, um verschiedene Bereichen der Seite genauer zu betrachten. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 640px hat, werden Seiten möglicherweise mit einem virtuellen Viewport von 980px gerendert, dann wird er auf den 640px-Raum geschrumpft. Dies wird getan, weil nicht alle Seiten für Mobilgeräte optimiert sind und bei kleineren Viewport-Breiten brechen (oder zumindest schlecht aussehen). Dieser virtuelle Viewport ist ein Mittel, um nicht mobiloptimierte Seiten im Allgemeinen auf schmalen Bildschirmgeräten besser aussehen zu lassen. Dieses Verfahren ist jedoch nicht so gut für Seiten, die mit [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) für schmale Bildschirme optimiert sind — wenn der virtuelle Viewport beispielsweise 980px beträgt, werden Medienabfragen, die bei 640px oder 480px oder weniger greifen, nie verwendet, was die Wirksamkeit solcher responsiven Designtechniken einschränkt. Das Viewport-`<meta>`-Element mindert dieses Problem des virtuellen Viewports auf schmalen Bildschirmgeräten.

Die gebräuchlichste Einstellung ist die folgende, die den Viewport so einstellt, dass er der Breite des Geräts entspricht und den Inhalt bei 100% Zoom anzeigt:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Seiten können ihren Viewport auf eine bestimmte Größe einstellen. Beispielsweise kann die Definition `"width=320, initial-scale=1"` verwendet werden, um genau auf ein kleines Handy-Display im Hochformat zu passen. Dies kann zu Problemen führen, wenn der Browser eine Seite in größerer Größe rendert. Um dies zu beheben, erweitern die Browser die Viewport-Breite, falls erforderlich, um den Bildschirm bei der angeforderten Skalierung auszufüllen. Dies ist besonders nützlich bei Geräten mit großem Bildschirm.

Für Seiten, die einen anfänglichen oder maximalen Maßstab festlegen, bedeutet dies, dass die `width`-Eigenschaft tatsächlich in eine _minimale_ Viewport-Breite übersetzt wird. Wenn Ihr Layout beispielsweise mindestens 500 Pixel Breite benötigt, können Sie das folgende Markup verwenden. Wenn der Bildschirm breiter als 500 Pixel ist, erweitert der Browser den Viewport (anstatt hinein zu zoomen), um den Bildschirm auszufüllen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Bildschirmdichte

Bildschirmauflösungen sind auf eine Größe gestiegen, bei der einzelne Pixel mit dem bloßen Auge nicht unterscheidbar sind. Beispielsweise haben Smartphones oft kleine Bildschirme mit einer Auflösung von mehr als 1920–1080 Pixeln (≈400dpi). Aus diesem Grund können viele Browser ihre Seiten in einer kleineren physischen Größe anzeigen, indem sie mehrere Hardware-Pixel für jedes CSS-"Pixel" verwenden. Dies führte zunächst zu Bedienbarkeits- und Lesbarkeitsproblemen auf vielen berührungsoptimierten Websites.

Auf Bildschirmen mit hoher dpi werden Seiten mit `initial-scale=1` effektiv von Browsern vergrößert. Ihr Text wird glatt und scharf sein, aber ihre Bitmap-Bilder könnten den vollen Bildschirmauflösung nicht nutzen. Um schärfere Bilder auf diesen Bildschirmen zu erzielen, möchten Webentwickler möglicherweise Bilder – oder ganze Layouts – in einem höheren Maßstab als ihre endgültige Größe entwerfen und sie dann mit CSS oder Viewport-Eigenschaften herunterskalieren.

Das Standard-Pixelverhältnis hängt von der Pixeldichte ab. Auf einem Display mit einer Dichte von weniger als 200dpi ist das Verhältnis 1,0. Auf Displays mit einer Dichte zwischen 200 und 300dpi beträgt das Verhältnis 1,5. Für Displays mit einer Dichte von über 300dpi ist das Verhältnis der ganzzahlige Boden (_density_/150dpi). Beachten Sie, dass das Standardverhältnis nur gilt, wenn der Viewport-Maßstab gleich 1 ist. Ansonsten hängt die Beziehung zwischen CSS-Pixeln und {{Glossary("device_pixel", "Geräte-Pixeln")}} vom aktuellen Zoomniveau ab.

## Beispiele

### Verwenden einer Meta-Viewport-Größe

Im folgenden Beispiel wird dem Browser mitgeteilt, dass die Seite in der Gerätegröße gerendert werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwenden einer Medienabfrage mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser den Hinweis geben, den Vollbildmodus zu verwenden, zusammen mit `viewport-fit`, das hilft, Anzeigeausschnitte wie Notches bei mobilen Geräten zu vermeiden:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Der Effekt von interaktiven UI-Widgets

Interaktive Benutzeroberflächen-Widgets des Browsers können die Größe der Seitensichtfenster beeinflussen. Das am häufigsten verwendete UI-Widget ist eine virtuelle Tastatur. Um zu steuern, welches Größenänderungsverhalten der Browser verwenden soll, setzen Sie die `interactive-widget`-Eigenschaft.

Standardmäßig ändert die virtuelle Tastatur nur die Größe des visuellen Viewports, was das Layout der Seite nicht beeinflusst. Sie können das Layout der Seite anpassen, um die Präsenz der virtuellen Tastatur zu berücksichtigen, indem Sie die `interactive-widget`-Eigenschaft auf `resizes-content` setzen:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "viewport")}} Glossar-Eintrag
- [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/) auf developer.chrome.com
- [Mobile viewports for responsive experiences](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) auf Adobe Experience League
