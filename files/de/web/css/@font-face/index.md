---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: ff5694d1ab4e6b9ef30ff0af769f8363990937c7
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server oder einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Abstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und zur Verwendung bereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftarteigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, beispielsweise `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die Steuerung von OpenType- oder TrueType-Schriftvariationen auf niedriger Ebene, indem die vier Buchstaben umfassenden Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenlückenmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und mit dieser Schriftart verbundene Metriken. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise auf das Schriftformat und die Technologie. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Computer des Benutzers installierte Kopie der Schriftart verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird, wenn sie nicht auf dem Gerät des Benutzers gefunden wird.

Wenn die `local()`-Funktion bereitgestellt wird, die einen Schriftartnamen angibt, nach dem auf dem Gerät des Benutzers gesucht werden soll, und der {{Glossary("user_agent", "User Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()`-Funktion angegebene Schriftartressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock möglich ist, der nur eine oder mehrere `local()`-Angaben ohne `url()` enthält.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht sind, sollten diese _vor_ den Versionen ohne diese Werte aufgeführt werden, da ansonsten die weniger spezifische Variante zuerst versucht und verwendet würde.

Indem Autoren die Möglichkeit gegeben wird, ihre eigenen Schriftarten bereitzustellen, ermöglicht `@font-face` die Gestaltung von Inhalten ohne Beschränkung auf die sogenannten "web-sicheren" Schriftarten (d. h. die Schriftarten, die so häufig sind, dass sie als universell verfügbar gelten). Die Fähigkeit, den Namen einer lokal installierten Schriftart anzugeben, nach der gesucht und verwendet werden soll, ermöglicht es, die Schrift über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Rückfallstrategien für das Laden von Schriftarten in älteren Browsern sind auf der Seite zum [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-At-Regel kann nicht nur auf der obersten Ebene von CSS, sondern auch innerhalb jeder [CSS-Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

### MIME-Typen für Schriftarten

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Webschriftarten unterliegen derselben Domänenbeschränkung (Schriftdateien müssen sich auf derselben Domäne wie die Seite befinden, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Zum Beispiel wird das Folgende nicht funktionieren:

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

Dieses Beispiel gibt eine herunterladbare Schriftart an, die auf den gesamten Body des Dokuments angewendet wird:

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

### Spezifizieren lokaler Schriftalternativen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der volle Schriftname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schriftart mit dem Namen "MgOpenModernaBold.ttf" verwendet:

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
- [Schöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Schriftbibliothek](https://fontlibrary.org/)
