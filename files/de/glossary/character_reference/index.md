---
title: Zeichenreferenzen
slug: Glossary/Character_reference
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

Eine {{Glossary("HTML", "HTML")}}-**Zeichenreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie z.B. das kleiner-als (`<`) und größer-als (`>`) Symbol, die vom HTML-Parser verwendet werden, um Element-{{Glossary("tag", "Tags")}} zu identifizieren, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen umschlossen sein können. Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich nicht trennbarer Leerzeichen, Steuerzeichen wie Links-nach-Rechts- und Rechts-nach-Links-Markierungen, und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**
  - : Diese verwenden einen Namensstring zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen. Zum Beispiel wird `&lt;` für das kleiner-als (`<`) Symbol verwendet und `&copy;` für das Copyright-Symbol (`©`). Der für die Referenz verwendete String ist oft eine {{Glossary("Camel_case", "CamelCase-")}} Initialisierung oder Abkürzung des Zeichennamens.

- **Dezimal-Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#`, gefolgt von einem oder mehreren ASCII-Ziffern, die die Dezimalzahl darstellen, die dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist, und `3C` hexadezimal 60 in Dezimal ist.

- **Hexadezimale Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einem oder mehreren ASCII-Hexadezimalziffern, die die hexadezimale Zahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist.

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
| ©       | `&copy;`          | U+000A9           |
| ®       | `&reg;`           | U+000AE           |
| ™       | `&trade;`         | U+02122           |
| ≈       | `&asymp;`         | U+02248           |
| ≠       | `&ne;`            | U+02260           |
| £       | `&pound;`         | U+000A3           |
| €       | `&euro;`          | U+020AC           |
| °       | `&deg;`           | U+000B0           |

Die vollständige Liste der benannten HTML-Zeichenreferenzen [finden Sie hier in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Character")}}
  - {{Glossary("Escape_character", "Escape character")}}
  - {{Glossary("Code_point", "Code point")}}
  - {{Glossary("Unicode", "Unicode")}}
