---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: ff1364561aea4e4841a6d5e116560cb168274811
---

{{GlossarySidebar}}

Eine {{Glossary("HTML", "HTML")}} **Zeichenreferenz** ist ein formatiertes Muster von Zeichen, das verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als (`<`) und Größer-als (`>`) Symbole, die vom HTML-Parser zur Identifizierung von Element-{{Glossary("tag", "Tags")}} verwendet werden, oder `"` oder `'` innerhalb von Attributen, die durch diese Zeichen eingeschlossen sein können.
Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützten Leerzeichen, Steuerzeichen wie Links-nach-rechts- und Rechts-nach-links-Zeichen sowie für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**

  - : Diese verwenden eine Namenszeichenkette zwischen einem kaufmännischen Und (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen.
    Zum Beispiel wird `&lt;` für das Kleiner-als (`<`) Symbol verwendet und `&copy;` für das Copyright-Symbol (`©`).
    Die für die Referenz verwendete Zeichenkette ist oft eine {{Glossary("Camel_case", "Camel-Case")}} Initialisierung oder Verkürzung des Zeichen-Namens.

- **Dezimalzahlenzeichenreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die Dezimalzahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel lautet die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal 60 dezimal ist.

- **Hexadezimale Zahlenzeichenreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hex-Ziffern, die die hexadezimale Zahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel lautet die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, weil der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Ein sehr kleines Teilset nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten sind unten aufgelistet.

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

Die vollständige Liste der HTML-Benannten Zeichenreferenzen [finden Sie in der HTML-Spezifikation hier](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).
