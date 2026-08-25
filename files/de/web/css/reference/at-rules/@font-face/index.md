---
title: "`@font-face` CSS at-rule"
short-title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: 916eb95f63de092d96ed1b1b13f3e2261739a8e2
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) gibt eine benutzerdefinierte Schriftart an, mit der Text angezeigt werden soll; die Schriftart kann entweder von einem Remote-Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Aufstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Wert für die Schriftfamilie verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, zum Beispiel `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung von fortgeschrittenen typografischen Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Steuerung von OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstaben der Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/font-width", "font-width")}}
  - : Ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Gesicht für die angegebenen Schriftarten zu spezifizieren.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und -metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in der gleichen Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise zum Schriftformat und -technologie. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die von der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, falls verfügbar, und ansonsten eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()`-Funktion bereitgestellt wird und einen Schriftartnamen angibt, der auf dem Benutzergerät gesucht werden soll, und wenn der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()`-Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` üblicherweise vor `url()` geschrieben werden. Beide Funktionen sind optional, daher ist ein Regelblock, der nur ein oder mehrere `local()` ohne `url()` enthält, möglich.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht werden, sollten diese _vor_ Versionen ohne diese Werte gelistet werden, da sonst die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Zum Web-Delivery ist es generell am besten, Schriftarten im WOFF2-Format bereitzustellen, da es Schriftarten effizienter als ältere Formate wie WOFF oder OpenType komprimiert, die Dateigröße reduziert und die Ladezeiten verbessert. WOFF2 wird auch in modernen Browsern gut unterstützt, was es zu einer sicheren Standardwahl für die meisten Websites macht.

Durch die Möglichkeit, Autoren ihre eigenen Schriftarten bereitstellen zu lassen, ermöglicht `@font-face`, Inhalte zu gestalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (d.h. die Schriftarten, die so häufig sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, die gesucht und verwendet werden soll, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen und dies zu tun, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Rückfallstrategien zum Laden von Schriftarten in älteren Browsern sind auf der Seite des [`src`-Deskriptors](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf oberster Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [Bedingten Gruppen-At-Regel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors).

### Schrift-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriftarten unterliegen denselben Domain-Beschränkungen (Schriftdateien müssen sich auf derselben Domain befinden wie die Seite, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) werden verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Zum Beispiel wird Folgendes nicht funktionieren:

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

### Eine herunterladbare Schriftart angeben

Dieses Beispiel legt eine herunterladbare Schriftart fest, die auf den gesamten Körper des Dokuments angewendet wird:

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

### Lokale Schriftalternativen angeben

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftname als auch der Postscript-Name ausprobiert), wird stattdessen die herunterladbare Schriftart namens "MgOpenModernaBold.woff2" verwendet:

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
- [Transfonter Webfont-Generator](https://transfonter.org/)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Schriftbibliothek](https://fontlibrary.org/)
