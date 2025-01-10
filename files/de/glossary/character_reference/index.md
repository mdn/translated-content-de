---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: bd74b8a8222517dead9def675a499dcf1dc30328
---

{{GlossarySidebar}}

Eine {{Glossary("HTML", "HTML")}} **Zeichenreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als-Zeichen (`<`) und Größer-als-Zeichen (`>`), die vom HTML-Parser zur Identifizierung von Element-{{Glossary("tag", "Tags")}} verwendet werden, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen eingeschlossen sein können. Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-rechts- und Rechts-nach-links-Markierungen und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**

  - : Diese verwenden einen Namensstring zwischen einem Kaufmanns-Und (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen.
    Zum Beispiel wird `&lt;` für das Kleiner-als-Zeichen (`<`) verwendet, und `&copy;` für das Copyright-Zeichen (`©`).
    Der für die Referenz verwendete String ist oft eine {{Glossary("Camel_case", "Camel-Cased")}} Initialisierung oder eine Kontraktion des Zeichen-Namens.

- **Dezimale numerische Zeichenreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die Ganzzahl im Basis-10 darstellen, die dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepoint")}} des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepoint für das Symbol `U+0003C` ist und `3C` hexadezimal 60 dezimal ist.

- **Hexadezimale numerische Zeichenreferenz**

  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexadezimalziffern, die die hexadezimale Ganzzahl darstellen, die dem Unicode-Codepoint des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepoint für das Symbol `U+0003C` ist.

Ein sehr kleiner Teil nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepoints ist unten aufgeführt.

| Zeichen | Benannte Referenz | Unicode-Codepoint |
| ------- | ----------------- | ----------------- |
| &       | `&amp;`           | U+00026           |
| <       | `&lt;`            | U+0003C           |
| >       | `&gt;`            | U+0003E           |
| "       | `&quot;`          | U+00022           |
| '       | `&apos;`          | U+00027           |
|         | `&nbsp;`          | U+000A0           |
| –       | `&ndash;`         | U+02013           |
| —       | `&mdash;`         | U+02014           |
| ©      | `&copy;`          | U+000A9           |
| ®      | `&reg;`           | U+000AE           |
| ™      | `&trade;`         | U+02122           |
| ≈       | `&asymp;`         | U+02248           |
| ≠       | `&ne;`            | U+02260           |
| £       | `&pound;`         | U+000A3           |
| €       | `&euro;`          | U+020AC           |
| °       | `&deg;`           | U+000B0           |

Die vollständige Liste der HTML-benannten Zeichenreferenzen [finden Sie hier in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Escape_character", "Escape-Zeichen")}}
  - {{Glossary("Code_point", "Codepoint")}}
  - {{Glossary("Unicode", "Unicode")}}
