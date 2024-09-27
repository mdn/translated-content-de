---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: f27a90bdec2de523947f06b7484dc734b7d54d61
---

{{CSSRef}}

Die **`@charset`** [CSS](/de/docs/Web/CSS)-Regel gibt die im Stylesheet verwendete Zeichenkodierung an. Diese Syntax ist nützlich, wenn in einigen CSS-Eigenschaften, wie z.B. {{ cssxref("content") }}, nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/At-rule). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen, außer das Unicode-Byte-Order-Mark, sind davor erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul veraltet dieses Fallback-Verhalten und definiert es als unerkannte Legacy-Regel, die verworfen werden soll, wenn ein Stylesheet einer Grammatikprüfung unterzogen wird.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in der folgenden Reihenfolge versuchen (und aufhören, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert wird.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das Äquivalent im Protokoll, das zum Bereitstellen des Stylesheets verwendet wird, angegeben wird.
3. Die `@charset`-CSS-Deklaration.
4. Verwenden Sie die Zeichenkodierung, die im verweisenden Dokument definiert ist: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annahme, dass das Dokument UTF-8 ist.

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
  - : Ein {{cssxref("&lt;string&gt;")}}, der die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss in doppelte Anführungszeichen gesetzt werden, wobei genau ein Leerzeichen (U+0020) folgt und sofort mit einem Semikolon abgeschlossen wird. Wenn mehrere Namen mit einer Kodierung verbunden sind, darf nur derjenige verwendet werden, der mit _preferred_ gekennzeichnet ist.

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

- [Zeichensatz](/de/docs/Glossary/Character_set) Glossareintrag
- [Unicode](/de/docs/Glossary/Unicode) Glossareintrag
