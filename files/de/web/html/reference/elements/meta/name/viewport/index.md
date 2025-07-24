---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: f861d9b116f9fc0e3160f75758d7fd341ee1a468
---

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise zur anfänglichen Größe des {{Glossary("viewport", "Viewports")}}. Wenn angegeben, definieren Sie viewportspezifische Verhaltensweisen mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Werten.

Zum Beispiel, um den Viewport so einzustellen, dass er der Breite des Geräts entspricht und Inhalte bei 100 % Zoom anzeigt:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Nutzungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein und sein Wert legt verschiedene viewportspezifische Verhaltensweisen fest.
    Akzeptiert einen oder mehrere der folgenden Schlüsselwörter in einer kommagetrennten Liste:
    - `width`
      - : Definiert die Pixelbreite des Viewports, den Sie als Darstellungsgröße wünschen.
        Es kann eine positive Ganzzahl oder das Schlüsselwort `device-width` sein.
    - `height`
      - : Definiert die Höhe des Viewports.
        Es kann eine positive Ganzzahl oder das Schlüsselwort `device-height` sein.
        Dies wird von keinem Browser verwendet.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert das maximale Zoommaß.
        Es muss größer oder gleich dem `minimum-scale` sein, ansonsten ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert die minimale Zoomstufe.
        Es muss kleiner oder gleich dem `maximum-scale` sein, ansonsten ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite zoomen kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standardwert ist.
        > [!WARNING]
        > Das Deaktivieren der Zoomfähigkeiten durch Setzen des `user-scalable`-Wertes auf `no` verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können.
        >
        > - [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Gibt den Effekt an, den interaktive UI-Widgets, wie virtuelle Tastaturen, auf den Viewport einer Seite haben.
        Es kann das Schlüsselwort `resizes-visual`, `resizes-content` oder `overlays-content` sein.
        - `resizes-visual`: Der {{Glossary("visual_viewport", "visueller Viewport")}} wird durch das interaktive Widget skaliert. Dies ist der Standard.
        - `resizes-content`: Der {{Glossary("viewport", "Viewport")}} wird durch das interaktive Widget skaliert.
        - `overlays-content`: Weder der Viewport noch der visuelle Viewport wird durch das interaktive Widget skaliert.
    - `viewport-fit`
      - : Definiert die sichtbaren Teile der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst nicht den anfänglichen Layout-Viewport, und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird maßstabsgetreu an das größte innerhalb des Displays eingeschriebene Rechteck angepasst.
        - `cover`: Der Viewport wird skaliert, um das Gerätedisplay auszufüllen.
          Es wird dringend empfohlen, die [Sicherer Bereich](/de/docs/Web/CSS/env)-Variablen zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb des Displays enden.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel gibt dem Browser an, dass die Seite in der Breite des Geräts dargestellt werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Meta-Viewport

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser Hinweise geben, den Vollbildmodus zu nutzen, zusammen mit `viewport-fit`, das hilft, Displayausschnitte wie Mobile-Gerätekerben zu vermeiden:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("viewport", "viewport")}} Glossarbegriff
