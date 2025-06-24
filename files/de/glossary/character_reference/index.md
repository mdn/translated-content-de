---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Eine {{Glossary("HTML", "HTML")}} **Zeichenreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie zum Beispiel das Kleiner-als (`<`) und Größer-als (`>`) Symbol, die vom HTML-Parser zur Identifikation von Element-{{Glossary("tag", "Tags")}} benutzt werden, oder `"` oder `'` innerhalb von Attributen, die durch diese Zeichen eingeschlossen sein können. Sie können auch für unsichtbare Zeichen verwendet werden, die ansonsten unmöglich einzugeben wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-rechts- und Rechts-nach-links-Markierungen sowie für Zeichen, die auf einer Standardtastatur schwer einzugeben sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**

  - : Diese verwenden eine Zeichenkette zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen. Zum Beispiel wird `&lt;` für das Kleiner-als (`<`) Symbol und `&copy;` für das Copyright-Symbol (`©`) verwendet. Die für die Referenz verwendete Zeichenkette ist oft eine {{Glossary("Camel_case", "CamelCase")}} Initialisierung oder Verkürzung des Zeichen-Namens.

- **Dezimalzeichenreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die dezimale Ganzzahl darstellen, die dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal in dezimal 60 ist.

- **Hexadezimalzeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexziffern, die die hexadezimale Ganzzahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Eine sehr kleine Teilmenge nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten ist unten aufgeführt.

| Zeichen | Benannte Referenz | Unicode-Codepunkt |
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

Die vollständige Liste der benannten HTML-Zeichenreferenzen [finden Sie in der HTML-Spezifikation hier](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Escape_character", "Escape-Zeichen")}}
  - {{Glossary("Code_point", "Codepunkt")}}
  - {{Glossary("Unicode", "Unicode")}}
