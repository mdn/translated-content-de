---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut eines {{htmlelement("meta")}}-Elements gibt Hinweise zur anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.
Wenn angegeben, definieren Sie das verhaltensbezogene Verhalten des Viewports mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Werten.

Zum Beispiel, um den Viewport auf die Breite des Geräts einzustellen und Inhalte bei 100% Zoom anzuzeigen:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Anwendungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein und sein Wert legt verschiedene viewportbezogene Verhaltensweisen fest.
    Es akzeptiert eines oder mehrere der folgenden Schlüsselwörter in einer kommagetrennten Liste:
    - `width`
      - : Definiert die Pixelbreite des Viewports, in dem die Website gerendert werden soll.
        Es kann eine positive ganze Zahl oder das Schlüsselwort `device-width` sein.
    - `height`
      - : Definiert die Höhe des Viewports.
        Es kann eine positive ganze Zahl oder das Schlüsselwort `device-height` sein.
        Dies wird von keinem Browser verwendet.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert den maximalen Zoomgrad.
        Es muss größer oder gleich dem `minimum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert das minimale Zoomniveau.
        Es muss kleiner oder gleich dem `maximum-scale` sein, sonst ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite zoomen kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standard ist.
        > [!WARNING]
        > Wenn die Zoomfähigkeiten deaktiviert werden, indem `user-scalable` auf `no` gesetzt wird, wird Menschen mit Sehbehinderungen die Möglichkeit genommen, Seiteninhalte zu lesen und zu verstehen.
        >
        > - [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst nicht den anfänglichen Layout-Viewport und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte innerhalb des Bildschirms eingeschriebene Rechteck anzupassen.
        - `cover`: Der Viewport wird skaliert, um den Geräteschirm auszufüllen.
          Es wird dringend empfohlen, die [Sicherheitsbereich-Einfügung](/de/docs/Web/CSS/env)-Variablen zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb des Bildschirms landen.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel weist den Browser an, die Seite auf der Gerätebreite zu rendern:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser Hinweise geben, den Vollbildmodus zusammen mit `viewport-fit` zu verwenden, was hilft, Bildschirmausschnitte wie Kerben bei Mobilgeräten zu vermeiden:

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

- {{Glossary("viewport", "viewport")}} Eintrag im Glossar
