---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 000726d71e4bae5780e9fe787555aed8cf38e316
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) legt eine benutzerdefinierte Schriftart fest, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server geladen werden oder von einer lokal installierten Schriftart auf dem Computer des Benutzers.

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
  - : Definiert die Abstiegsmessung für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und verwendet werden kann.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftart-Wert für Schriftattribute verwendet wird.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vierbuchstabigen Achsennamen der zu ändernden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Linienabstand-Metrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Referenzen zu Schriftressourcen an, einschließlich Hinweise auf das Schriftformat und die Technologie. Es ist erforderlich, damit die @font-face-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich von Unicode-Codepunkten, der von der Schriftart verwendet werden soll.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die Funktion `local()` bereitgestellt wird, die einen Schriftartnamen zum Suchen auf dem Benutzergerät angibt, und wenn der {{Glossary("user_agent", "Benutzeragent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die über die Funktion `url()` angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, daher ist ein Regelblock, der nur einen oder mehrere `local()`-Einträge ohne `url()` enthält, möglich.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht haben, da ansonsten die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` das Design von Inhalten, ohne auf die sogenannten "websicheren" Schriftarten (d. h. die Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten) beschränkt zu sein. Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, die gefunden und verwendet werden soll, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Fallback-Strategien für das Laden von Schriftarten in älteren Browsern sind auf der Seite zum [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-Regel kann nicht nur auf der obersten Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [CSS bedingten Gruppenregel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) eingesetzt werden.

### Schrift-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Webschriftarten unterliegen derselben Domänenbeschränkung (Schriftartdateien müssen sich auf derselben Domäne wie die Seite befinden, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) werden verwendet, um diese Beschränkung zu lockern.
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

Dieses Beispiel gibt eine herunterladbare Schriftart an, die auf den gesamten Körper des Dokuments angewendet wird:

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

### Lokale Schriftalternativen angeben

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schriftart mit dem Namen "MgOpenModernaBold.ttf" verwendet:

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
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
