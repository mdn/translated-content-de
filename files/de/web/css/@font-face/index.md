---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server geladen oder von einer auf dem Computer des Nutzers installierten Schriftart verwendet werden.

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
  - : Definiert die Aufwärtsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abwärtsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und bereit zur Verwendung ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftarteigenschaften verwendet wird.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`

    > [!NOTE]
    > Der font-variant Deskriptor wurde 2018 aus der Spezifikation entfernt. Der {{cssxref("font-variant")}}-Eigenschaftswert wird unterstützt, aber es gibt kein entsprechendes Deskriptor-Äquivalent.

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung von fortgeschrittenen typografischen Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die Low-Level-Steuerung von OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstaben umfassenden Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten harmonisch darzustellen, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise zum Schriftformat und der Technologie. Es ist erforderlich, damit die @font-face Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die von der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, wenn sie verfügbar ist, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()` Funktion bereitgestellt wird, die einen Schriftartnamen auf dem Benutzergerät sucht, und wenn der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()` Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Auflistung zu laden; normalerweise sollte `local()` vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock ohne `url()`, aber nur mit `local()` möglich ist. Wenn spezifischere Schriftarten mit `format()` oder `tech()` Werten gewünscht sind, sollten diese _vor_ den Versionen aufgelistet werden, die diese Werte nicht haben, da die weniger spezifische Variante sonst zuerst ausprobiert und verwendet wird.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` das Design von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (das heißt, Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart zu spezifizieren, um diese zu suchen und zu verwenden, ermöglicht eine Anpassung der Schriftart über die grundlegenden Optionen hinaus, ohne dass eine Internetverbindung erforderlich ist.

> [!NOTE]
> Strategien für das Laden von Schriftarten in älteren Browsern sind auf der Seite des [`src` Deskriptors](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf oberster Ebene einer CSS verwendet werden, sondern auch innerhalb jeder [CSS-Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules).

### Schrift MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Web-Fonts unterliegen derselben Domänenbeschränkung (Schriftdateien müssen sich auf derselben Domäne wie die sie verwendende Seite befinden), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) verwendet, um diese Beschränkung zu lockern.
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

### Eine herunterladbare Schriftart angeben

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

### Lokale Schriftalternativen angeben

In diesem Beispiel wird die lokale Kopie "Helvetica Neue Bold" des Benutzers verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftname als auch der Postscript-Name versucht), wird stattdessen die herunterladbare Schriftart mit dem Namen "MgOpenModernaBold.ttf" verwendet:

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
