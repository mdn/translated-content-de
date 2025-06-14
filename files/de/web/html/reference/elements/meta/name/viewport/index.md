---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Der **`viewport`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements liefert Hinweise zur anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.
Falls angegeben, definieren Sie das viewport-bezogene Verhalten mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Werten.

Zum Beispiel, um den Viewport anzupassen, um der Breite des Geräts zu entsprechen und den Inhalt mit 100% Zoom anzuzeigen:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Verwendungshinweise

Ein `<meta name="viewport">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein, und sein Wert legt verschiedene viewport-bezogene Verhaltensweisen fest.
    Akzeptiert eines oder mehrere der folgenden Schlüsselwörter in einer kommagetrennten Liste:
    - `width`
      - : Definiert die Pixelbreite des Viewports, die Sie für das Rendern der Website wünschen.
        Es kann eine positive ganze Zahl oder das Schlüsselwort `device-width` sein.
    - `height`
      - : Definiert die Höhe des Viewports.
        Es kann eine positive ganze Zahl oder das Schlüsselwort `device-height` sein.
        Dies wird von keinem Browser verwendet.
    - `initial-scale`
      - : Definiert das Verhältnis zwischen der Gerätebreite (`device-width` im Hochformat oder `device-height` im Querformat) und der Viewport-Größe.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `maximum-scale`
      - : Definiert den maximalen Zoom-Faktor.
        Er muss größer oder gleich dem `minimum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `minimum-scale`
      - : Definiert den minimalen Zoomlevel.
        Er muss kleiner oder gleich dem `maximum-scale` sein, andernfalls ist das Verhalten undefiniert.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann eine Zahl zwischen `0.0` und `10.0` sein.
    - `user-scalable`
      - : Ein boolescher Wert, der angibt, ob der Benutzer die Webseite zoomen kann.
        Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        Es kann entweder `yes` oder `no` sein, wobei `yes` der Standardwert ist.
        > [!WARNING]
        > Das Deaktivieren der Zoom-Funktionalität durch Setzen von `user-scalable` auf `no` verhindert, dass Personen mit Sehschwäche die Seiteninhalte lesen und verstehen können.
        >
        > - [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `viewport-fit`
      - : Definiert die sichtbaren Bereiche der Webseite.
        Es kann eines der Schlüsselwörter `auto`, `contain` oder `cover` sein.
        - `auto`: Beeinflusst das anfängliche Layout-Viewport nicht und die gesamte Webseite ist sichtbar.
        - `contain`: Der Viewport wird skaliert, um das größte rechteckige Fenster im Display zu maximieren.
        - `cover`: Der Viewport wird skaliert, um das Geräte-Display auszufüllen.
          Es wird dringend empfohlen, die [Safe Area Inset](/de/docs/Web/CSS/env)-Variablen zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb des Displays erscheinen.

## Beispiele

### Verwendung einer Meta-Viewport-Größe

Das folgende Beispiel zeigt dem Browser an, dass die Seite in der Gerätebreite gerendert werden soll:

```html
<meta name="viewport" content="width=device-width" />
```

### Verwendung einer Media Query mit einem Viewport-Meta

Der folgende `content`-Wert verwendet mehrere Schlüsselwörter, die dem Browser den Hinweis geben, den Vollbildmodus zu verwenden, zusammen mit `viewport-fit`, um Anzeigeausschnitte wie Kerben von Mobilgeräten zu vermeiden:

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
