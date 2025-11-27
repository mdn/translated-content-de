---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: ff4dc3d43e814614df60ecdb7376b59698660ac2
---

Eine {{Glossary("HTML", "HTML")}} **Zeichenreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als (`<`) und Größer-als (`>`) Symbole, die vom HTML-Parser verwendet werden, um Element-{{Glossary("tag", "Tags")}} zu identifizieren, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen eingeschlossen werden könnten. Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-rechts- und Rechts-nach-links-Markierungen, und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**
  - : Diese verwenden einen Namensstring zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen.
    Zum Beispiel wird `&lt;` für das Kleiner-als (`<`) Symbol und `&copy;` für das Copyright-Symbol (`©`) verwendet.
    Der für die Referenz verwendete String ist oft eine {{Glossary("Camel_case", "Camel-Case")}} Initialisierung oder Verkürzung des Zeichen-Namens.

- **Dezimalzahl Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die auf der Basis zehn basierende Ganzzahl darstellen, die dem {{Glossary("Unicode", "Unicode")}} {{Glossary("code_point", "Codepunkt")}} des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die Dezimalzeichenreferenz für `<` `&#60;`, weil der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal 60 dezimal ist.

- **Hexadezimalzahl Zeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hex-Ziffern, die die auf der Basis sechzehn basierende Ganzzahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die Hexadezimalzeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, weil der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Eine sehr kleine Teilmenge nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten ist unten aufgelistet.

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

Die vollständige Liste der HTML-benannten Zeichenreferenzen [finden Sie hier in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Escape_character", "Escape-Zeichen")}}
  - {{Glossary("Code_point", "Codepunkt")}}
  - {{Glossary("Unicode", "Unicode")}}
