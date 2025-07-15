---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@charset`**-Regel in [CSS](/de/docs/Web/CSS) spezifiziert die Zeichenkodierung, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen in einigen CSS-Eigenschaften, wie {{ cssxref("content") }}, verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Vorher sind keine anderen Zeichen, außer dem Unicode-Byte-Order-Mark, erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul sieht dieses Fallback-Verhalten als veraltet an und definiert es als eine nicht erkannte Altnorm, die bei einer Überprüfung der Stylesheet-Grammatik verworfen werden sollte.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in dieser Reihenfolge ausprobieren (und stoppen, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert wird.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das Äquivalent im verwendeten Protokoll zum Ausliefern des Stylesheets angegeben wird.
3. Die `@charset`-CSS-Deklaration.
4. Verwenden der Zeichenkodierung, die durch das referenzierende Dokument definiert wird: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Angenommen, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, das die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss in doppelte Anführungszeichen gesetzt werden, genau einem Leerzeichen (U+0020) folgen und sofort mit einem Semikolon abgeschlossen werden. Wenn mehrere Namen mit einer Kodierung assoziiert sind, darf nur der verwendete Name mit _bevorzugt_ gekennzeichnet sein.

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

- Eintrag im {{Glossary("Character_set", "Zeichensatz")}}-Glossar
- Eintrag im {{Glossary("Unicode", "Unicode")}}-Glossar
