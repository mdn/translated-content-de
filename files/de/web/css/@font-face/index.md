---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server oder von einer lokal auf dem Computer des Nutzers installierten Schriftart geladen werden.

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
  - : Definiert die Abstiegmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftart-Wert für Schriftarteigenschaften verwendet wird. Ein `font-family` Name ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über fortgeschrittene typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Kontrolle über Varianten von OpenType- oder TrueType-Schriftarten, indem die vier Buchstaben umfassenden Achsennamen der zu variierenden Funktionen zusammen mit ihren Abweichungswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung des Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise zum Schriftformat und zur Technologie. Ein `src` ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die installierte Kopie der Schriftart des Nutzers verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird, wenn sie auf dem Gerät des Nutzers nicht gefunden wird.

Wenn die `local()` Funktion bereitgestellt wird, um einen Schriftartnamen auf dem Gerät des Nutzers zu suchen, und der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()` Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen entsprechend ihrer Listen-Deklarationsreihenfolge zu laden, also sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur ein oder mehrere `local()` ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriftarten mit `format()` oder `tech()` Werten gewünscht werden, sollten diese _vor_ Versionen ohne diese Werte aufgeführt werden, da sonst die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` die Gestaltung von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (d.h. die Schriftarten, die so verbreitet sind, dass sie als universell verfügbar angesehen werden). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben und zu verwenden, macht es möglich, die Schriftart über die Grundlagen hinaus anzupassen, ohne sich auf eine Internetverbindung verlassen zu müssen.

> [!NOTE]
> Fallback-Strategien für das Laden von Schriftarten in älteren Browsern sind auf der [`src` Deskriptorseite](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf oberster Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [CSS Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules_and_descriptors).

### Schrift MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriftarten unterliegen derselben Domänenbeschränkung (Schriftdateien müssen sich auf derselben Domäne wie die Seite befinden, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird Folgendes nicht funktionieren:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifikation einer herunterladbaren Schriftart

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Körper des Dokuments an:

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

### Angabe lokaler Schriftartenalternativen

In diesem Beispiel wird die lokale Kopie des Nutzers von "Helvetica Neue Bold" verwendet; wenn der Nutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schriftart mit dem Namen "MgOpenModernaBold.ttf" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Spezifikation

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Über WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF)
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
