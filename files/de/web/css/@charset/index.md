---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: f27a90bdec2de523947f06b7484dc734b7d54d61
---

{{CSSRef}}

Die **`@charset`** [CSS](/de/docs/Web/CSS) Regel gibt die Zeichencodierung an, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-{{Glossary("ASCII")}}-Zeichen in einigen CSS-Eigenschaften wie {{ cssxref("content") }} verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/At-rule). Es ist eine spezifische Byte-Sequenz, die nur am Anfang eines Stylesheets stehen darf. Keine anderen Zeichen außer dem Unicode-Byte-Order-Mark sind davor erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Zeichensatzerklärung erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul hebt dieses Fallback-Verhalten auf und definiert es als nicht erkannte Legacy-Regel, die fallen gelassen werden soll, wenn ein Stylesheet grammatikalisch überprüft wird.

Da es mehrere Möglichkeiten gibt, die Zeichencodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in der folgenden Reihenfolge ausprobieren (und stoppen, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei steht.
2. Der im `charset`-Attribut des `Content-Type:` HTTP-Headers oder das Äquivalent im verwendeten Protokoll für das Servern des Stylesheets angegebene Wert.
3. Die `@charset` CSS-Deklaration.
4. Verwenden Sie die Zeichencodierung, die durch das referenzierende Dokument definiert wird: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annehmen, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Formale Syntax

```plain
@charset "<charset>";
```

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, das die zu verwendende Zeichencodierung angibt. Es muss der Name einer web-sicheren Zeichencodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss doppelt in Anführungszeichen gesetzt werden, genau einem Leerzeichen (U+0020) folgen und sofort mit einem Semikolon beendet werden. Wenn mehrere Namen mit einer Codierung assoziiert sind, darf nur der als _bevorzugt_ markierte verwendet werden.

## Beispiele

### Gültige und ungültige Zeichensatzerklärungen

```css-nolint example-good
@charset "UTF-8"; /* Setzen Sie die Codierung des Stylesheets auf Unicode UTF-8 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* Ungültig, falsche Anführungszeichen verwendet */
@charset  "UTF-8"; /* Ungültig, mehr als ein Leerzeichen */
 @charset "UTF-8"; /* Ungültig, da ist ein Zeichen (ein Leerzeichen) vor den Deklarationen */
@charset UTF-8; /* Ungültig, der Zeichensatz ist ein CSS <string> und erfordert doppelte Anführungszeichen */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichensatz](/de/docs/Glossary/Character_set) Glossareintrag
- [Unicode](/de/docs/Glossary/Unicode) Glossareintrag
