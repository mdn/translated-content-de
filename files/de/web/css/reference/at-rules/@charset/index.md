---
title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@charset`** [CSS](/de/docs/Web/CSS)-Regel gibt die Zeichenkodierung an, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn in einigen CSS-Eigenschaften nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen verwendet werden, wie z.B. {{ cssxref("content") }}. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, ist es keine [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules). Es handelt sich um eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen außer dem Unicode-Byte-Order-Mark sind davor erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale at-rule geparst. Das [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul lässt dieses Fallback-Verhalten fallen, indem es als unerkannte veraltete Regel definiert wird, die entfernt werden sollte, wenn ein Stylesheet grammatikalisch überprüft wird.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in der folgenden Reihenfolge versuchen (und stoppen, sobald eine zu einem Ergebnis führt):

1. Der Wert des [Unicode Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert ist.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das entsprechende Äquivalent im verwendeten Protokoll angegeben wird, um das Stylesheet auszuliefern.
3. Die `@charset`-CSS-Deklaration.
4. Verwendung der Zeichenkodierung, die vom referenzierenden Dokument definiert ist: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annahme, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, der die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss doppelt umschlossen sein, folgt genau einem Leerzeichen (U+0020) und wird sofort mit einem Semikolon beendet. Wenn mehrere Namen mit einer Kodierung verbunden sind, muss nur der als _preferred_ markierte verwendet werden.

## Formale Syntax

Beachten Sie, dass die `@charset`-Regel nicht über Syntax geparst wird, sondern über eine spezifische Byte-Sequenz der folgenden Form:

```plain
@charset "<charset>";
```

## Beispiele

### Gültige und ungültige Charset-Deklarationen

```css-nolint example-good
@charset "UTF-8"; /* Set the encoding of the style sheet to Unicode UTF-8 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* Invalid, wrong quotes used */
@charset  "UTF-8"; /* Invalid, more than one space */
 @charset "UTF-8"; /* Invalid, there is a character (a space) before the declarations */
@charset UTF-8; /* Invalid, the charset is a CSS <string> and requires double-quotes */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Character_set", "Zeichensatz")}} Glossareintrag
- {{Glossary("Unicode", "Unicode")}} Glossareintrag
