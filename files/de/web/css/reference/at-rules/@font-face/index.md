---
title: "`@font-face` CSS at-rule"
short-title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt wird; die Schriftart kann entweder von einem entfernten Server geladen werden oder von einer lokal installierten Schriftart auf dem Computer des Benutzers stammen.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff2") format("woff2");
}
```

### Deskriptoren

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Definiert die Aufstiegsmetrik der Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegsmetrik der Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftarteigenschaften verwendet wird. Ein `font-family` Name ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}} Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung über erweiterte typografische Funktionen in OpenType-Schriften.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Erlaubt die Feinsteuerung über OpenType- oder TrueType-Schriftvarianten, indem die vier Buchstaben langen Achsennamen der zu variierenden Merkmale, zusammen mit ihren Variationswerten, angegeben werden.
- {{cssxref("@font-face/font-width", "font-width")}}
  - : Erlaubt Autoren, eine normale, kondensierte oder erweiterte Variante für die angegebene Schriftart zu spezifizieren.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Linienzellenlücke der Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und dazugehörige Metriken dieser Schriftart. Dies erleichtert es, das Design verschiedener Schriftarten bei gleicher Schriftgröße zu harmonisieren.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftartenressourcen an, einschließlich Hinweisen zum Schriftformat und zur Technologie. Ein `src` ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich von Unicode-Codepunkten, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die installierte Kopie der Schriftart des Benutzers verwendet wird, wenn verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird, wenn sie nicht auf dem Gerät des Benutzers gefunden wird.

Wenn die `local()` Funktion bereitgestellt wird, um einen Schriftartnamen anzugeben, der auf dem Gerät des Benutzers gesucht werden soll, und wenn der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()` Funktion angegebene Schriftartressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in ihrer Deklarationsreihenfolge zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur ein oder mehrere `local()` ohne `url()` enthält, möglich ist. Wenn spezifischere Schriften mit `format()` oder `tech()` Werten gewünscht sind, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht haben, da sonst die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Für die Bereitstellung im Web ist es im Allgemeinen am besten, Schriften im WOFF2-Format bereitzustellen, da es Schriften effizienter komprimiert als ältere Formate wie WOFF oder OpenType, wodurch die Dateigröße reduziert und die Ladezeiten verbessert werden. WOFF2 wird auch in modernen Browsern gut unterstützt, was es zu einer sicheren Standardwahl für die meisten Websites macht.

Indem es Autoren ermöglicht, ihre eigenen Schriften bereitzustellen, ermöglicht `@font-face` das Design von Inhalten, ohne auf die sogenannten "web-sicheren" Schriften (das heißt, die Schriften, die so verbreitet sind, dass sie als universell verfügbar gelten) beschränkt zu sein. Die Möglichkeit, den Namen einer lokal installierten Schrift anzugeben, nach der gesucht und die verwendet werden soll, ermöglicht es, die Schrift über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Rückfallstrategien für das Laden von Schriften in älteren Browsern werden auf der [`src` Deskriptorseite](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` Regel kann nicht nur auf oberster Ebene einer CSS verwendet werden, sondern auch innerhalb jeder [CSS Bedingungsgruppenregel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors).

### Font-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Webschriften unterliegen denselben Domainbeschränkungen (Schriftdateien müssen sich auf derselben Domain befinden wie die Seite, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird Folgendes nicht funktionieren:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.woff2");
      font-weight: bold;
    }
  }
  ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine herunterladbare Schriftart spezifizieren

Dieses Beispiel spezifiziert eine herunterladbare Schriftart, die auf den gesamten Körper des Dokuments angewendet wird:

```html live-sample___web-font-example
<body>
  This is Bitstream Vera Serif Bold.
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### Lokale Schriftalternativen spezifizieren

In diesem Beispiel wird die lokale Kopie der Schriftart "Helvetica Neue Bold" des Benutzers verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftname als auch der Postscript-Name versucht), wird stattdessen die herunterladbare Schriftart "MgOpenModernaBold.woff2" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Über WOFF](/de/docs/Web/CSS/Guides/Fonts/WOFF)
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Schriftarten-Bibliothek](https://fontlibrary.org/)
