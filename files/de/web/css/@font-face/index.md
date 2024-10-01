---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server oder von einer lokal auf dem Computer des Nutzers installierten Schriftart geladen werden.

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
  - : Definiert das Aszendenz-Metrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert das Deszendenz-Metrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart dargestellt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftattribute verwendet wird.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : Ein {{cssxref("font-weight")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`

    > [!NOTE]
    > Der font-variant Deskriptor wurde 2018 aus der Spezifikation entfernt. Der {{cssxref("font-variant")}} Wert ist unterstützt, aber es gibt kein äquivalentes Deskriptor.

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht eine niedrige Ebene der Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstabenachsen der Merkmale, die variiert werden sollen, zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert den Zeilenabstand-Metrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Schriftkonturen und Metriken, die mit dieser Schrift verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten bei gleicher Schriftgröße.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen einschließlich Hinweise über das Schriftformat und die Technologie an. Es ist erforderlich, dass die @font-face-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepoints, die aus der Schrift verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Gerät des Benutzers installierte Schriftart benutzt wird, falls verfügbar, wobei andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()` Funktion bereitgestellt wird, um eine Schriftart zu spezifizieren, nach der auf dem Gerät des Nutzers gesucht werden soll, und wenn der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die Schriftressource, die mit der `url()` Funktion angegeben ist, heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Deklarationsliste zu laden, daher sollte `local()` in der Regel vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur ein oder mehrere `local()` ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriftarten mit `format()` oder `tech()` Werten gewünscht sind, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht besitzen, da ansonsten die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` das Design von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten (d.h. Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten) beschränkt zu sein. Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, nach der gesucht und verwendet werden soll, ermöglicht es, die Schrift jenseits der Grundlagen anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Fallback-Strategien zum Laden von Schriftarten in älteren Browsern sind auf der [`src` Deskriptorseite](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf der obersten Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [CSS bedingten Gruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules).

### MIME-Typen für Schriftarten

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Web-Schriften unterliegen denselben Domain-Beschränkungen (Schriftdateien müssen sich auf derselben Domain wie die Seite befinden, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) werden verwendet, um diese Beschränkung zu lockern.
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

### Spezifizieren einer herunterladbaren Schriftart

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Dokumentenkörper an:

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

### Spezifizieren von lokalen Schriftalternativen

In diesem Beispiel wird die lokale Kopie des Nutzers von "Helvetica Neue Bold" verwendet; wenn der Nutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden versucht), wird stattdessen die herunterladbare Schriftart "MgOpenModernaBold.ttf" verwendet:

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
- [Font Library](https://fontlibrary.org/)
