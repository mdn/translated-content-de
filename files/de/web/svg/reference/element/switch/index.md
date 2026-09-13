---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: 1ea9b498e0af377455459fbbe33164091fb75f61
---

Das **`<switch>`**-[SVG](/de/docs/Web/SVG)-Element bewertet alle {{SVGAttr("requiredExtensions")}}- und {{SVGAttr("systemLanguage")}}-Attribute seiner direkten Kindelemente der Reihe nach und rendert dann das erste Kindelement, bei dem diese Attribute auf true ausgewertet werden.

Andere direkte Kindelemente werden übersprungen und daher nicht gerendert. Wenn ein Kindelement ein Container-Element ist, wie {{SVGElement("g")}}, wird auch dessen Unterbaum verarbeitet/gerendert oder übersprungen/nicht gerendert.

> [!NOTE]
> Die Eigenschaften `display` und `visibility` haben keinen Einfluss auf die Verarbeitung des `<switch>`-Elements. Insbesondere hat die Einstellung von `display:none` auf ein Kindelement keinen Einfluss auf die True/False-Auswertung für die `<switch>`-Verarbeitung.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("requiredExtensions")}}
  - : Eine durch Leerzeichen getrennte Liste von URL-Werten, die auf die Sprach-Erweiterungen verweisen, die der Benutzeragent unterstützen muss, damit das Element gerendert wird.

- {{SVGAttr("systemLanguage")}}
  - : Eine durch Kommas getrennte Liste unterstützter {{Glossary("BCP_47_language_tag", "Sprachtags")}}.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSwitchElement`](/de/docs/Web/API/SVGSwitchElement)-Schnittstelle.

## Beispiele

Dieses Beispiel zeigt, wie je nach Spracheinstellung des Browsers unterschiedliche Textinhalte angezeigt werden können. Das `<switch>`-Element zeigt das erste seiner Kindelemente an, dessen {{SVGAttr("systemLanguage")}}-Attribut mit der Sprache des Benutzers übereinstimmt, oder das Fallback-Element ohne `systemLanguage`-Attribut, wenn keines von ihnen übereinstimmt.

```html
<svg viewBox="0 -20 100 50">
  <switch>
    <text systemLanguage="ar">مرحبا</text>
    <text systemLanguage="de,nl">Hallo!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en-au">G'day!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text systemLanguage="ru">Привет!</text>
    <text requiredExtensions="http://example.org/lang/ext/emoji">☺</text>
  </switch>
</svg>
```

{{ EmbedLiveSample('examples') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("requiredExtensions")}}
- {{SVGAttr("systemLanguage")}}
