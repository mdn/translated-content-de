---
title: "`@charset` CSS at-rule"
short-title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Die **`@charset`**-[CSS](/de/docs/Web/CSS)-Regel gibt die in einem Stylesheet verwendete Zeichenkodierung an. Diese Syntax ist nützlich, wenn in einigen CSS-Eigenschaften Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen verwendet werden, etwa in {{ cssxref("content") }}. Obwohl das erste Zeichen in `@charset` das Symbol `@` ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). Es ist eine spezifische Bytefolge, die nur ganz am Anfang eines Stylesheets platziert werden kann. Davor sind keine anderen Zeichen erlaubt, mit Ausnahme der Unicode-Byte-Reihenfolge-Markierung. Außerdem folgt sie nicht den normalen CSS-Syntaxregeln, etwa hinsichtlich der Verwendung von Anführungszeichen oder Leerraum.

Wenn ein `@charset` nicht als Zeichensatzdeklaration erkannt wird, wird es als normale At-Regel geparst. Das Modul [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) veraltet dieses Fallback-Verhalten und definiert es als nicht erkannte Legacy-Regel, die verworfen wird, wenn ein Stylesheet grammatikalisch geprüft wird.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, versucht der Browser die folgenden Methoden in der angegebenen Reihenfolge (und stoppt, sobald eine ein Ergebnis liefert):

1. Den Wert des am Anfang der Datei platzierten [Unicode-Byte-Reihenfolge](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens.
2. Den Wert, der durch das `charset`-Attribut des HTTP-Headers `Content-Type:` oder das Äquivalent im Protokoll angegeben wird, das zur Bereitstellung des Stylesheets verwendet wird.
3. Die CSS-Deklaration `@charset`.
4. Die im verweisenden Dokument definierte Zeichenkodierung verwenden: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Annehmen, dass das Dokument UTF-8 verwendet.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Parameter

- _charset_
  - : Ein {{cssxref("&lt;string&gt;")}}, der die zu verwendende Zeichenkodierung angibt. Es muss der Name einer webtauglichen Zeichenkodierung sein, die in der [IANA-Registry](https://www.iana.org/assignments/character-sets) definiert ist, und er muss in doppelte Anführungszeichen eingeschlossen sein, auf genau ein Leerzeichenzeichen (U+0020) folgen und unmittelbar mit einem Semikolon abgeschlossen werden. Wenn einer Kodierung mehrere Namen zugeordnet sind, darf nur der als _preferred_ gekennzeichnete verwendet werden.

## Formale Syntax

Beachten Sie, dass die Regel `@charset` nicht über die Syntax, sondern über eine spezifische Bytefolge der folgenden Form geparst wird:

```plain
@charset "<charset>";
```

## Beispiele

### Gültige und ungültige Zeichensatzdeklarationen

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

- Glossareintrag {{Glossary("Character_set", "Zeichensatz")}}
- Glossareintrag {{Glossary("Unicode", "Unicode")}}
