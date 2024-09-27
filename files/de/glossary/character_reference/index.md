---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: ff1364561aea4e4841a6d5e116560cb168274811
---

{{GlossarySidebar}}

Eine [HTML](/de/docs/Glossary/HTML) **Zeichenreferenz** ist ein formatiertes Muster aus Zeichen, das verwendet wird, um ein anderes Zeichen auf der angezeigten Webseite zu repräsentieren.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie etwa die Kleiner-als (`<`) und Größer-als (`>`) Symbole, die vom HTML-Parser verwendet werden, um Element-[Tags](/de/docs/Glossary/tag) zu identifizieren, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen eingeschlossen werden können. Sie können auch für unsichtbare Zeichen verwendet werden, die andernfalls unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-Rechts- und Rechts-nach-Links-Markierungen, sowie für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**

  - : Diese verwenden eine Namenszeichenfolge zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen. Beispielsweise wird `&lt;` für das Kleiner-als (`<`) Symbol und `&copy;` für das Copyright-Symbol (`©`) verwendet. Die Zeichenfolge für die Referenz ist oft eine [camel-cased](/de/docs/Glossary/Camel_case) Initialisierung oder Verkürzung des Zeichennamens.

- **Dezimal-Zahlenzeichenreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die Basis-Zehn-Zahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal in dezimal 60 ist.

- **Hexadezimal-Zahlenzeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexadezimalziffern, die die hexadezimale Zahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Beispielsweise ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Ein sehr kleiner Ausschnitt nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten sind unten aufgeführt.

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

Die vollständige Liste der benannten HTML-Zeichenreferenzen [finden Sie hier in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).
