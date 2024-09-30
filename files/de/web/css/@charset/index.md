---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: f27a90bdec2de523947f06b7484dc734b7d54d61
---

{{CSSRef}}

Die **`@charset`**-Regel in [CSS](/de/docs/Web/CSS) legt die Zeichenkodierung fest, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen in einigen CSS-Eigenschaften verwendet werden, wie z.B. {{ cssxref("content") }}. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/At-rule). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen, außer dem Unicode-Byte-Order-Mark, sind davor erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul hebt dieses Fallback-Verhalten auf und definiert es als unerkannte Legacy-Regel, die beim Grammatik-Checken eines Stylesheets entfernt werden soll.

Da es mehrere Methoden gibt, um die Zeichenkodierung eines Stylesheets festzulegen, versucht der Browser die folgenden Methoden in der folgenden Reihenfolge (und stoppt, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert ist.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das entsprechende Attribut im verwendeten Protokoll zur Übertragung des Stylesheets angegeben wird.
3. Die `@charset`-CSS-Deklaration.
4. Verwendung der im referenzierenden Dokument definierten Zeichenkodierung: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
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
  - : Ein {{cssxref("&lt;string&gt;")}}, das die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist und muss doppelt angeführt werden. Es muss genau ein Leerzeichen (U+0020) folgen und sofort mit einem Semikolon abgeschlossen werden. Wenn mehrere Namen mit einer Kodierung verknüpft sind, darf nur derjenige verwendet werden, der als _bevorzugt_ markiert ist.

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

- Eintrag im Glossar: [Zeichensatz](/de/docs/Glossary/Character_set)
- Eintrag im Glossar: [Unicode](/de/docs/Glossary/Unicode)
