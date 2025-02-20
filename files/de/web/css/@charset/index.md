---
title: "@charset"
slug: Web/CSS/@charset
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@charset`** [CSS](/de/docs/Web/CSS)-Regel gibt die Zeichenkodierung an, die im Stylesheet verwendet wird. Diese Syntax ist nützlich, wenn nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen in einigen CSS-Eigenschaften wie {{ cssxref("content") }} verwendet werden. Obwohl das erste Zeichen in `@charset` das `@`-Symbol ist, handelt es sich nicht um eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule). Es ist eine spezifische Byte-Sequenz, die nur am Anfang eines Stylesheets platziert werden darf. Keine anderen Zeichen, außer dem Unicode-Byte-Order-Mark, sind davor erlaubt. Es folgt zudem nicht den normalen CSS-Syntax-Regeln wie der Verwendung von Anführungszeichen oder Leerzeichen.

Wenn ein `@charset` nicht als Charset-Deklaration erkannt wird, wird es als normale At-Regel geparst. Das [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul setzt dieses Fallback-Verhalten außer Kraft, indem es sie als eine nicht erkannte veraltete Regel definiert, die beim Syntax-Checken eines Stylesheets verworfen werden sollte.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets zu definieren, prüft der Browser die folgenden Methoden in der angegebenen Reihenfolge (und stoppt, sobald eine erfolgreich ist):

1. Der Wert des [Unicode-Byte-Order](https://en.wikipedia.org/wiki/Byte_order_mark)-Zeichens, das sich am Anfang der Datei befindet.
2. Der Wert, der durch das `charset`-Attribut des `Content-Type:`-HTTP-Headers oder das Äquivalent im verwendeten Protokoll angegeben wird.
3. Die `@charset`-CSS-Deklaration.
4. Die im referenzierenden Dokument definierte Zeichenkodierung: das `charset`-Attribut des {{ HTMLElement("link") }}-Elements. Diese Methode ist veraltet und sollte nicht verwendet werden.
5. Die Annahme, dass das Dokument UTF-8 ist.

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
  - : Eine {{cssxref("&lt;string&gt;")}}, die die zu verwendende Zeichenkodierung angibt. Es muss der Name einer web-sicheren Zeichenkodierung sein, die im [IANA-Register](https://www.iana.org/assignments/character-sets/character-sets.xhtml) definiert ist, und muss in doppelte Anführungszeichen gesetzt werden, unmittelbar gefolgt von genau einem Leerzeichen (U+0020) und sofort mit einem Semikolon abgeschlossen werden. Wenn mehrere Namen einer Kodierung zugeordnet sind, darf nur derjenige verwendet werden, der mit _preferred_ markiert ist.

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
