---
title: Charakterreferenz
slug: Glossary/Character_reference
l10n:
  sourceCommit: e7feb5cdac39783b0a600b79f08a9994ad8705df
---

{{GlossarySidebar}}

Eine {{Glossary("HTML", "HTML")}} **Charakterreferenz** ist eine {{Glossary("escape_character", "Escape-Sequenz")}} von {{Glossary("character", "Zeichen")}}, die verwendet wird, um ein anderes Zeichen auf der gerenderten Webseite darzustellen.

Charakterreferenzen werden als Ersatz für Zeichen verwendet, die in HTML reserviert sind, wie die Kleiner-als (`<`) und Größer-als (`>`) Symbole, die vom HTML-Parser zur Identifizierung von Element-{{Glossary("tag", "Tags")}} genutzt werden, oder `"` oder `'` innerhalb von Attributen, die von diesen Zeichen eingeschlossen werden können.
Sie können auch für unsichtbare Zeichen verwendet werden, die sonst unmöglich zu tippen wären, einschließlich geschützter Leerzeichen, Steuerzeichen wie Links-nach-Rechts- und Rechts-nach-Links-Markierungen und für Zeichen, die auf einer Standardtastatur schwer zu tippen sind.

Es gibt drei Arten von Charakterreferenzen:

- **Benannte Charakterreferenzen**

  - : Diese verwenden eine Namenszeichenfolge zwischen einem kaufmännischen Und-Zeichen (`&`) und einem Semikolon (`;`) zur Referenz auf das entsprechende Zeichen.
    Zum Beispiel wird `&lt;` für das Kleiner-als (`<`) Symbol benutzt und `&copy;` für das Copyright-Symbol (`©`).
    Die Zeichenfolge, die für die Referenz verwendet wird, ist oft eine {{Glossary("Camel_case", "Camel-Cased")}} Initialisierung oder Verkürzung des Zeichen-Namens.

- **Dezimalzahlen-Charakterreferenzen**

  - : Diese Referenzen beginnen mit `&#`, gefolgt von einer oder mehreren ASCII-Ziffern, die die Basis-10-Ganzzahl darstellen, die dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die dezimale Charakterreferenz für `<` `&#60;`, weil der Unicode-Codepunkt für das Symbol `U+0003C` ist und `3C` hexadezimal ist 60 dezimal.

- **Hexadezimale Zahlen-Charakterreferenzen**
  - : Diese Referenzen beginnen mit `&#x` oder `&#X`, gefolgt von einer oder mehreren ASCII-Hexadezimalziffern, die die hexadezimale Ganzzahl darstellen, die dem Unicode-Codepunkt des Zeichens entspricht, und enden mit `;`.
    Zum Beispiel ist die hexadezimale Charakterreferenz für `<` `&#x3C;` oder `&#X3C;`, weil der Unicode-Codepunkt für das Symbol `U+0003C` ist.

Ein sehr kleiner Ausschnitt nützlicher benannter Charakterreferenzen zusammen mit ihren Unicode-Codepunkten ist unten aufgelistet.

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

Die vollständige Liste der HTML-benannten Charakterreferenzen [kann in der HTML-Spezifikation hier gefunden werden](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Character", "Zeichen")}}
  - {{Glossary("Escape_character", "Escape-Zeichen")}}
  - {{Glossary("Code_point", "Codepunkt")}}
  - {{Glossary("Unicode", "Unicode")}}
