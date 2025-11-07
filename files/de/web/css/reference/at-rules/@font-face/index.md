---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) bestimmt eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server oder von einer lokal auf dem Benutzercomputer installierten Schriftart geladen werden.

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
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und verwendet werden kann.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartengesichtswert für die Schriftarten-Eigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z.B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z.B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z.B. `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung über fortgeschrittene typografische Funktionen in OpenType-Schriften.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Steuerung von OpenType- oder TrueType-Schriftvaritionen, indem die vierstelligen Achsennamen der zu variierenden Funktionen zusammen mit deren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert das Abstimmen der Designs verschiedener Schriften beim Rendern in derselben Schriftgröße.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise zum Schriftformat und zur Technologie. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich von Unicode-Codepunkten, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Benutzercomputer installierte Kopie der Schriftart verwendet wird, falls verfügbar, andernfalls wird eine Kopie der Schriftart heruntergeladen, wenn sie auf dem Gerät des Benutzers nicht gefunden wird.

Falls die `local()`-Funktion bereitgestellt wird, die einen Schriftartnamen zum Suchen auf dem Benutzergerät angibt, und falls der {{Glossary("user_agent", "User Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mittels der `url()`-Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur eine oder mehrere `local()` ohne `url()` enthält, möglich ist. Wenn spezifischere Schriften mit `format()` oder `tech()`-Werten gewünscht werden, sollten diese _vor_ Versionen ohne diese Werte aufgeführt werden, da ansonsten die unspezifischere Variante zuerst verwendet werden würde.

Durch die Möglichkeit, eigene Schriften bereitzustellen, ermöglicht `@font-face` es, Inhalte zu gestalten, ohne auf die sogenannten "websicheren" Schriften beschränkt zu sein (das heißt, Schriften, die so häufig sind, dass sie allgemein verfügbar sind). Die Fähigkeit, den Namen einer lokal installierten Schriftart anzugeben und zu verwenden, macht es möglich, die Schriftart über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Strategien für das Laden von Schriftarten in älteren Browsern sind auf der Seite des [`src`-Deskriptors](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-At-Regel kann nicht nur auf oberster Ebene von CSS, sondern auch innerhalb jeder [CSS-Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules_and_descriptors) verwendet werden.

### Font-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Webfonts unterliegen demselben Domänenbeschränkungen (Schriftdateien müssen sich auf derselben Domäne befinden wie die Seite, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Auswählers erklärt werden. Zum Beispiel wird das Folgende nicht funktionieren:

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

### Lokale Schriftart-Alternativen angeben

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; falls der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftname als auch der Postscriptname versucht), wird stattdessen die herunterladbare Schriftart namens "MgOpenModernaBold.ttf" verwendet:

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
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
