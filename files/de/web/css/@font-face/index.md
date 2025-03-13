---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert eine benutzerdefinierte Schriftart zur Anzeige von Text; die Schriftart kann entweder von einem entfernten Server oder einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Aufstiegsmetrik der Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegmetrik der Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und gebrauchsfertig ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftarteigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Erlaubt die Steuerung über fortgeschrittene typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Erlaubt die Low-Level-Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstaben langen Achsennamen der Funktionen zusammen mit ihren Variationswerten spezifiziert werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenlückenmetrik der Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart assoziiert sind. Dies erleichtert die Harmonisierung des Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Spezifiziert Verweise auf Schriftressourcen einschließlich Hinweisen zu Schriftformat und Technologie. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die von der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, `url()` und `local()` zusammen zu verwenden, damit die installierte Kopie der Schriftart des Benutzers verwendet wird, wenn sie verfügbar ist, und ansonsten eine Kopie der Schriftart heruntergeladen wird, wenn sie nicht auf dem Gerät des Benutzers gefunden wird.

Wenn die `local()`-Funktion bereitgestellt wird und einen Schriftartnamen angibt, der auf dem Gerät des Benutzers gesucht werden soll, und wenn der {{Glossary("user_agent", "Benutzer-Agent")}} einen Treffer findet, wird diese lokale Schriftart verwendet. Andernfalls wird die Schriftressource, die mit der `url()`-Funktion angegeben wurde, heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der angegebenen Reihenfolge ihrer Liste zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock möglich ist, der nur ein oder mehrere `local()` ohne `url()` enthält. Wenn spezifischere Schriften mit `format()` oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Versionen ohne diese Werte aufgelistet werden, da ansonsten die weniger spezifische Variante zuerst probiert und verwendet würde.

Indem Autoren ihre eigenen Schriften bereitstellen können, ermöglicht `@font-face` die Gestaltung von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (also die Schriften, die so weit verbreitet sind, dass sie als universell verfügbar gelten). Die Fähigkeit, den Namen einer lokal installierten Schriftart anzugeben, die gesucht und verwendet werden soll, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen und dies ohne Abhängigkeit von einer Internetverbindung zu tun.

> [!NOTE]
> Fallback-Strategien für die Lade von Schriften in älteren Browsern werden auf der [`src`-Deskriptor-Seite](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-At-Regel kann nicht nur auf oberster Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [CSS Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules).

### Schriftart-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Web-Schriften unterliegen derselben Domänenbeschränkung (Schriftdateien müssen auf derselben Domäne wie die verwendende Seite sein), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) werden verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird das folgende nicht funktionieren:

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

### Spezifizieren einer herunterladbaren Schriftart

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Dokumentkörper an:

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

### Spezifizieren von lokalen Schriftalternativen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden versucht), wird stattdessen die herunterladbare Schriftart "MgOpenModernaBold.ttf" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
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
- [Font Library](https://fontlibrary.org/)
