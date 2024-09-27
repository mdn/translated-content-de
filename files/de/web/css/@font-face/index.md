---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt werden soll; die Schriftart kann entweder von einem entfernten Server oder von einem lokal installierten Font auf dem Computer des Benutzers geladen werden.

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
  - : Definiert die Ascent-Metrik für den Font.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Descent-Metrik für den Font.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie ein Schrifttyp basierend darauf angezeigt wird, ob und wann er heruntergeladen und gebrauchsfertig ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Wert für die Schriftarteneigenschaften verwendet wird.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schrifttyp unterstützt wird, z. B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schrifttyp unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : Ein {{cssxref("font-weight")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schrifttyp unterstützt wird, z. B. `font-weight: 100 400;`

    > [!NOTE]
    > Der font-variant Deskriptor wurde 2018 aus der Spezifikation entfernt. Der Wert der {{cssxref("font-variant")}} Eigenschaft wird unterstützt, es gibt jedoch kein Äquivalent als Deskriptor.

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstabenachsen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für den Font.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für die Glyphenkonturen und mit dieser Schriftart verbundenen Metriken. Dies erleichtert die Harmonisierung der Designs verschiedener Schriften bei der Darstellung in derselben Schriftgröße.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise zum Schriftformat und -technologie. Dies ist erforderlich, damit die @font-face-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, `url()` und `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schrift verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird, wenn sie auf dem Benutzergerät nicht gefunden wird.

Wenn die `local()` Funktion bereitgestellt wird, und einen Schriftartnamen angibt, nach dem auf dem Benutzergerät gesucht werden soll, und der [Benutzeragent](/de/docs/Glossary/user_agent) übereinstimmt, wird diese lokale Schrift verwendet. Andernfalls wird die mit der `url()` Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden; daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock nur mit einem oder mehreren `local()` ohne `url()` möglich ist.
Wenn spezifischere Schriften mit `format()` oder `tech()` Werten gewünscht werden, sollten diese _vor_ Versionen ohne diese Werte aufgeführt werden, da sonst die unspezifischere Variante zuerst ausprobiert und verwendet wird.

Durch die Möglichkeit, eigene Schriftarten provideieren zu lassen, ermöglicht `@font-face` das Entwerfen von Inhalten, ohne auf die sogenannten "websicheren" Schriftarten beschränkt zu sein (das heißt, die Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schrift anzugeben, nach der gesucht und verwendet werden soll, ermöglicht es, die Schrift über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Fallback-Strategien zum Laden von Schriftarten in älteren Browsern sind auf der [Seite des 'src'-Deskriptors](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die @font-face-Regel kann nicht nur auf der obersten Ebene eines CSS verwendet werden, sondern auch in jeder [CSS Bedingungsgruppenregel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules).

### Schrift-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Webfonts unterliegen der selben Domänenbeschränkung (Schriftdateien müssen sich auf derselben Domain befinden wie die Seite, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Zum Beispiel funktioniert Folgendes nicht:

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

### Eine herunterladbare Schriftart angeben

Dieses Beispiel gibt eine herunterladbare Schriftart an, die für den gesamten Text des Dokuments verwendet werden soll:

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

Der Output dieses Beispielcodes sieht folgendermaßen aus:

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### Lokale Schriftarten-Alternativen angeben

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (es wird sowohl der volle Schriftname als auch der Postscript-Name versucht), wird stattdessen die herunterladbare Schriftart namens "MgOpenModernaBold.ttf" verwendet:

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
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Schriftbibliothek](https://fontlibrary.org/)
