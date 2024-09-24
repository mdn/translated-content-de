---
title: Zeichenreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: ff1364561aea4e4841a6d5e116560cb168274811
---

{{GlossarySidebar}}

Eine **Zeichenreferenz** in {{glossary("HTML")}} ist ein formatiertes Muster von Zeichen, das verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Zeichenreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als- (`<`) und Größer-als- (`>`) Symbole, die vom HTML-Parser zur Identifizierung von Element-{{Glossary('tag','tags')}} verwendet werden, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen eingeschlossen werden können. Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-Rechts- und Rechts-nach-Links-Markierungen, und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Zeichenreferenzen:

- **Benannte Zeichenreferenzen**

  - : Diese verwenden eine Zeichenfolge zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`), um auf das entsprechende Zeichen zu verweisen. Zum Beispiel wird `&lt;` für das Kleiner-als- (`<`) Symbol verwendet und `&copy;` für das Copyright-Symbol (`©`). Die für die Referenz verwendete Zeichenfolge ist oft eine {{glossary("Camel case","CamelCase")}} Initialisierung oder Kontraktion des Zeichen-Namens.

- **Dezimal numerische Zeichenreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die den dezimalen Ganzzahlwert darstellen, der dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die dezimale Zeichenreferenz für `<` `&#60;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal 60 dezimal entspricht.

- **Hexadezimale numerische Zeichenreferenz**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexziffern, die den hexadezimalen Ganzzahlwert darstellen, der dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`. Zum Beispiel ist die hexadezimale Zeichenreferenz für `<` `&#x3C;` oder `&#X3C;`, da der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Ein sehr kleiner Ausschnitt nützlicher benannter Zeichenreferenzen zusammen mit ihren Unicode-Codepunkten ist unten aufgeführt.

| Zeichen   | Benannte Referenz | Unicode-Codepunkt |
| --------- | ----------------- | ----------------- |
| &         | `&amp;`           | U+00026           |
| <         | `&lt;`            | U+0003C           |
| >         | `&gt;`            | U+0003E           |
| "         | `&quot;`          | U+00022           |
| '         | `&apos;`          | U+00027           |
|           | `&nbsp;`          | U+000A0           |
| –         | `&ndash;`         | U+02013           |
| —         | `&mdash;`         | U+02014           |
| ©         | `&copy;`          | U+000A9           |
| ®         | `&reg;`           | U+000AE           |
| ™         | `&trade;`         | U+02122           |
| ≈         | `&asymp;`         | U+02248           |
| ≠         | `&ne;`            | U+02260           |
| £         | `&pound;`         | U+000A3           |
| €         | `&euro;`          | U+020AC           |
| °         | `&deg;`           | U+000B0           |

Die vollständige Liste der HTML benannten Zeichenreferenzen [kann in der HTML-Spezifikation hier gefunden werden](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).
