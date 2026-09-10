---
title: "`@font-face` CSS at-rule"
short-title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Die CSS-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) **`@font-face`** legt eine benutzerdefinierte Schriftart fest, mit der Text dargestellt wird; die Schriftart kann entweder von einem Remote-Server oder aus einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1),
    url("trickster-outline.woff2") format("woff2");
}
```

### Deskriptoren

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Definiert die Aufstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie ein Schriftschnitt angezeigt wird, abhängig davon, ob und wann er heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Legt einen Namen fest, der als Wert des Schriftschnitts für Schriftarteigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die Regel `@font-face` gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schriftschnitt unterstützt wird, beispielsweise `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schriftschnitt unterstützt wird, beispielsweise `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einem Schriftschnitt unterstützt wird, beispielsweise `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung erweiterter typografischer Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht eine Steuerung auf niedriger Ebene über OpenType- oder TrueType-Schriftvariationen, indem die vierbuchstabigen Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/font-width", "font-width")}}
  - : Ermöglicht Autoren, für die angegebenen Schriftarten einen normalen, schmalen oder breiten Schriftschnitt festzulegen.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenkonturen und Metriken, die dieser Schriftart zugeordnet sind. Dies erleichtert die Harmonisierung der Gestaltung verschiedener Schriftarten, wenn sie mit derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Legt Verweise auf Schriftressourcen fest, einschließlich Hinweisen zum Schriftformat und zur Technologie. Ein `src` ist erforderlich, damit die Regel `@font-face` gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, `url()` und `local()` zusammen zu verwenden, sodass die installierte Kopie der Schriftart des Benutzers verwendet wird, falls verfügbar. Andernfalls wird eine Kopie der Schriftart heruntergeladen, wenn sie nicht auf dem Gerät des Benutzers gefunden wird.

Wenn die Funktion `local()` bereitgestellt wird, die einen Schriftartnamen angibt, nach dem auf dem Gerät des Benutzers gesucht werden soll, und der {{Glossary("user_agent", "User Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der Funktion `url()` angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden. Daher sollte `local()` üblicherweise vor `url()` geschrieben werden. Beide Funktionen sind optional, daher ist ein Regelblock möglich, der nur eine oder mehrere Angaben von `local()` ohne `url()` enthält.
Wenn spezifischere Schriftarten mit `format()`- oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Versionen ohne diese Werte aufgeführt werden, da andernfalls zuerst die weniger spezifische Variante versucht und verwendet würde.

Für die Bereitstellung im Web ist es im Allgemeinen am besten, Schriftarten im WOFF2-Format bereitzustellen, da dieses Schriftarten effizienter komprimiert als ältere Formate wie WOFF oder OpenType. Dadurch wird die Dateigröße reduziert und die Ladezeit verbessert. WOFF2 wird zudem von modernen Browsern gut unterstützt, was es für die meisten Websites zu einer sicheren Standardwahl macht.

Indem Autoren eigene Schriftarten bereitstellen können, ermöglicht `@font-face` die Gestaltung von Inhalten, ohne auf die sogenannten „websicheren“ Schriftarten beschränkt zu sein (also Schriftarten, die so verbreitet sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, nach der gesucht und die verwendet werden soll, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Fallback-Strategien zum Laden von Schriftarten in älteren Browsern werden auf der [Seite zum Deskriptor `src`](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die At-Regel `@font-face` kann nicht nur auf der obersten Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [bedingten CSS-Gruppen-At-Regel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors).

### Schriftarten-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Webschriftarten unterliegen derselben Domainbeschränkung (Schriftartdateien müssen sich auf derselben Domain befinden wie die Seite, die sie verwendet), sofern nicht [HTTP-Zugriffssteuerungen](/de/docs/Web/HTTP/Guides/CORS) verwendet werden, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Beispielsweise funktioniert Folgendes nicht:

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

Dieses Beispiel gibt eine herunterladbare Schriftart zur Verwendung an und wendet sie auf den gesamten `body` des Dokuments an:

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

### Lokale Schriftartalternativen angeben

In diesem Beispiel wird die lokale Kopie von „Helvetica Neue Bold“ des Benutzers verwendet. Falls der Benutzer diese Schriftart nicht installiert hat (es werden sowohl der vollständige Schriftartname als auch der Postscript-Name versucht), wird stattdessen die herunterladbare Schriftart mit dem Namen „MgOpenModernaBold.woff2“ verwendet:

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
- [Transfonter-Webfont-Generator](https://transfonter.org/)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
