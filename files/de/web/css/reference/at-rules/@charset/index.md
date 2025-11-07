---
title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@charset`** [CSS](/de/docs/Web/CSS) Regel gibt die Zeichenkodierung an, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-{{Glossary("ASCII", "ASCII")}} Zeichen in einigen CSS-Eigenschaften, wie zum Beispiel {{ cssxref("content") }}, verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules). Es ist eine spezifische Byte-Sequenz, die nur ganz am Anfang eines Stylesheets platziert werden kann. Keine anderen Zeichen außer dem Unicode-Byte-Order-Mark sind davor erlaubt. Es folgt auch nicht den normalen CSS-Syntaxregeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale at-rule geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul verwirft dieses Fallback-Verhalten und definiert es als nicht erkannte Legacyregel, die bei einer Grammatikprüfung eines Stylesheets verworfen werden soll.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, wird der Browser die folgenden Methoden in der folgenden Reihenfolge versuchen (und stoppt, sobald eine ein Ergebnis liefert):

1. Der Wert des [Unicode Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das am Anfang der Datei platziert wird.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:` HTTP-Headers oder das Äquivalent im Protokoll, das zur Bereitstellung des Stylesheets verwendet wird, angegeben wird.
3. Die `@charset` CSS-Deklaration.
4. Verwendung der im verweisenden Dokument definierten Zeichenkodierung: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annahme, dass das Dokument UTF-8 ist.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, der die zu verwendende Zeichenkodierung angibt. Es muss der Name einer websicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss doppelt zitiert werden, genau nach einem Leerzeichen (U+0020) folgen und sofort mit einem Semikolon beendet werden. Wenn mehrere Namen mit einer Kodierung verknüpft sind, darf nur derjenige verwendet werden, der mit _preferred_ gekennzeichnet ist.

## Formale Syntax

Beachten Sie, dass die `@charset`-Regel nicht über die Syntax geparst wird, sondern über eine spezifische Byte-Sequenz der folgenden Form:

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
