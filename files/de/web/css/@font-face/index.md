---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Aufwärts-Metrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abwärts-Metrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartname für Schriftvoreinstellungen verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schrift unterstützt wird, z. B. `font-stretch: 50% 200%;`.
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schrift unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`.
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schrift unterstützt wird, z. B. `font-weight: 100 400;`.
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung über fortgeschrittene typografische Eigenschaften in OpenType-Schriften.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die Kontrolle auf niedriger Ebene über OpenType- oder TrueType-Schriftvariationen, indem die vierstelligen Achsennamen der zu variierenden Eigenschaften zusammen mit deren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenlücken-Metrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenkonturen und zugehörige Metriken dieser Schriftart. Dies erleichtert es, die Gestaltung verschiedener Schriftarten beim Rendern in derselben Schriftgröße zu harmonisieren.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise auf das Schriftformat und die Technologie. Eine `src`-Angabe ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich von Unicode-Codepunkten, der aus der Schrift verwendet werden soll.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, damit die lokal installierte Version der Schriftart des Benutzers verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()`-Funktion angegeben ist, um einen Schriftartnamen auf dem Gerät des Benutzers nachzuschlagen, und wenn der {{Glossary("user_agent", "User Agent")}} ein entsprechendes Match findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()`-Funktion angegebene Schrift heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge der angegebenen Liste zu laden, sodass `local()` normalerweise vor `url()` geschrieben werden sollte. Beide Funktionen sind optional, sodass ein Block mit nur `local()`-Angaben ohne `url()` möglich ist.
Falls spezifischere Schriften mit `format()`- oder `tech()`-Werten bevorzugt werden, sollten diese _vor_ Varianten ohne diese Werte aufgelistet werden, da sonst die unspezifischere Variante zuerst versucht und verwendet wird.

Durch die Möglichkeit, eigene Schriftarten anzugeben, ermöglicht `@font-face`, Inhalte zu gestalten, ohne auf die sogenannten "websicheren" Schriftarten (die Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten) beschränkt zu sein. Die Option, den Namen einer lokal installierten Schriftart anzugeben, ermöglicht eine weitergehende Anpassung ohne Abhängigkeit von einer Internetverbindung.

> [!NOTE]
> Strategien für Fallbacks beim Laden von Schriftarten in älteren Browsern werden auf der Seite zum [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-At-Regel kann nicht nur auf oberster Ebene einer CSS-Datei verwendet werden, sondern auch innerhalb von [CSS-Bedingungsgruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules).

### MIME-Typen für Schriftarten

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriften unterliegen derselben Domain-Einschränkung (Schriftdateien müssen auf derselben Domain wie die Seite liegen, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) werden verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors angegeben werden. Zum Beispiel funktioniert Folgendes nicht:

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

Dieses Beispiel definiert eine herunterladbare Schriftart, die auf den gesamten Inhalt des Dokuments angewendet wird:

```html live-sample___web-font-example
<body>
  This is Bitstream Vera Serif Bold.
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### Lokale Schriftarten-Alternativen angeben

In diesem Beispiel wird die lokale Kopie "Helvetica Neue Bold" des Benutzers verwendet; falls diese Schriftart nicht installiert ist (sowohl der vollständige Schriftname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schrift "MgOpenModernaBold.ttf" verwendet:

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
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Wunderschöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Schriftbibliothek](https://fontlibrary.org/)
