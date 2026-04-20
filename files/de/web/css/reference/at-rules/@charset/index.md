---
title: "`@charset` CSS at-rule"
short-title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@charset`**-Regel in [CSS](/de/docs/Web/CSS) spezifiziert die Zeichenkodierung, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen in einigen CSS-Eigenschaften, wie {{cssxref("content")}}, verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen, außer dem Unicode-Byte-Order-Mark, sind davor erlaubt. Sie folgt auch nicht den normalen CSS-Syntaxregeln, wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Kodierungserklärung erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntaxmodul](/de/docs/Web/CSS/Guides/Syntax) stuft dieses Fallback-Verhalten als veraltet ein und definiert es als eine nicht erkannte Legacy-Regel, die fallengelassen werden sollte, wenn ein Stylesheet auf Grammatikfehler geprüft wird.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, versucht der Browser die folgenden Methoden in der angegebenen Reihenfolge (und hört auf, sobald eine einen Treffer liefert):

1. Der Wert des [Unicode Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert ist.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:` HTTP-Headers oder das Äquivalent im Protokoll, das zum Bereitstellen des Stylesheets verwendet wird, angegeben wird.
3. Die `@charset` CSS-Deklaration.
4. Verwendung der im verweisenden Dokument definierten Zeichenkodierung: das `charset`-Attribut des {{HTMLElement("link")}}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annahme, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, das die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Registry](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss in doppelte Anführungszeichen gesetzt werden, genau einem Leerzeichen (U+0020) folgen und sofort mit einem Semikolon beendet werden. Wenn mehrere Namen mit einer Kodierung verbunden sind, darf nur derjenige, der mit _preferred_ markiert ist, verwendet werden.

## Formale Syntax

Beachten Sie, dass die `@charset`-Regel nicht durch Syntax, sondern durch eine spezifische Byte-Sequenz der folgenden Form geparst wird:

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
