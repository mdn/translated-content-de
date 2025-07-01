---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Die **`@charset`**-Regel in [CSS](/de/docs/Web/CSS) gibt die Zeichencodierung an, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn in einigen CSS-Eigenschaften, wie {{ cssxref("content") }}, nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen, außer dem Unicode-Byte-Order-Mark, sind davor zulässig. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Erklärung erkannt wird, wird es als normale at-rule geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul hebt dieses Fallback-Verhalten auf, indem es es als unerkannte Legacy-Regel definiert, die bei einer Grammatikprüfung eines Stylesheets entfernt werden sollte.

Da es mehrere Möglichkeiten gibt, die Zeichencodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in der folgenden Reihenfolge ausprobieren (und anhalten, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert ist.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das Äquivalent im verwendeten Protokoll zur Auslieferung des Stylesheets angegeben wird.
3. Die `@charset`-CSS-Deklaration.
4. Verwendung der Zeichencodierung, die durch das referenzierende Dokument definiert wird: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annahme, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, das die zu verwendende Zeichencodierung angibt. Es muss der Name einer web-sicheren Zeichencodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss doppelt zitiert werden, genau einem Leerzeichen (U+0020) folgen und unmittelbar mit einem Semikolon beendet werden. Wenn mehrere Namen mit einer Codierung verbunden sind, darf nur der verwendete und als _bevorzugt_ markierte Name verwendet werden.

## Formale Syntax

Beachten Sie, dass die `@charset`-Regel nicht über die Syntax geparst wird, sondern über eine spezifische Byte-Sequenz der folgenden Form:

```plain
@charset "<charset>";
```

## Beispiele

### Gültige und ungültige Charset-Erklärungen

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
