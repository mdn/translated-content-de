---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem Remote-Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
}
```

### Deskriptoren

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Definiert die Aufstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abwärtsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartnamenwert für Schriftarteigenschaften verwendet wird.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`

    > [!NOTE]
    > Der font-variant Deskriptor wurde 2018 aus der Spezifikation entfernt. Der {{cssxref("font-variant")}}-Eigenschaftswert wird unterstützt, es gibt jedoch kein entsprechendes Deskriptoräquivalent.

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über fortgeschrittene typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstabenachsenname der zu variierenden Funktionen zusammen mit deren Variantenwerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und -metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in derselben Schriftgröße dargestellt werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftart-Ressourcen einschließlich Hinweisen über das Schriftartformat und die Technologie an. Es ist erforderlich, damit die @font-face Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codierungspunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, `url()` und `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()`-Funktion bereitgestellt wird und einen Schriftartnamen angibt, nach dem auf dem Benutzergerät gesucht werden soll, und der {{Glossary("User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die im `url()`-Funktionsaufruf angegebene Schriftartressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden. Daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock möglich ist, der nur eine oder mehrere `local()`-Funktionen ohne `url()` enthält.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht werden, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht haben, da ansonsten die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` die Gestaltung von Inhalten, ohne auf die sogenannten "web-sicheren" Schriften beschränkt zu sein (also Schriften, die so verbreitet sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, nach der gesucht und die verwendet werden soll, macht es möglich, die Schriftart über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Strategien für Fallbacks beim Laden von Schriftarten auf älteren Browsern sind auf der Seite zum [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` Regel kann nicht nur im oberen Teil eines CSS, sondern auch innerhalb jeder [CSS bedingten Gruppenregel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

### Font MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriften unterliegen der gleichen Domänenbeschränkung (Schriftartdateien müssen sich auf derselben Domäne wie die Seite befinden, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) werden verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird Folgendes nicht funktionieren:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizierung einer herunterladbaren Schriftart

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Textkörper des Dokuments an:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Web Font Sample</title>
    <style media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

Die Ausgabe dieses Beispielcodes sieht folgendermaßen aus:

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### Spezifizierung lokaler Schriftalternativen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftartenname als auch der Postscript-Name ausprobiert), wird stattdessen die herunterladbare Schriftart namens "MgOpenModernaBold.ttf" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Über WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF)
- [FontSquirrel @font-face-Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
