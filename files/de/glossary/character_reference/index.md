---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine {{Glossary("HTML", "HTML")}} **Zeichenreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersetzungen für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als (`<`) und Größer-als (`>`) Symbole, die vom HTML-Parser verwendet werden, um Element-{{Glossary("tag", "Tags")}} zu identifizieren, oder `"` oder `'` innerhalb von Attributen, die durch diese Zeichen eingeschlossen sein können. Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-rechts- und Rechts-nach-links-Markierungen und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**
  - : Diese verwenden eine Namenszeichenfolge zwischen einem Kaufmanns- und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen. Zum Beispiel wird `&lt;` für das Kleiner-als (`<`) Symbol verwendet und `&copy;` für das Copyright-Zeichen (`©`). Die Zeichenfolge, die für die Referenz verwendet wird, ist oft eine {{Glossary("Camel_case", "camel-cased")}} Initialisierung oder Verkürzung des Zeichennamens.

- **Dezimalzahlige numerische Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die den Basis-Zehn-Integer darstellen, der dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal 60 in dezimaler Schreibweise darstellt.

- **Hexadezimalzahlige numerische Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexadezimalziffern, die den hexadezimalen Integer darstellen, der dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Ein sehr kleines Unterset an nützlichen benannten Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten ist unten aufgeführt.

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
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Escape_character", "Escape-Zeichen")}}
  - {{Glossary("Code_point", "Codepunkt")}}
  - {{Glossary("Unicode", "Unicode")}}
