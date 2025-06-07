---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<switch>`** [SVG](/de/docs/Web/SVG)-Element evaluiert die Attribute {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} und {{SVGAttr("systemLanguage")}} auf seinen direkten Kindelementen in der Reihenfolge und rendert dann das erste Kind, bei dem diese Attribute als wahr bewertet werden.

Andere direkte Kinder werden übersprungen und daher nicht gerendert. Wenn ein Kindelement ein Container-Element wie {{SVGElement("g")}} ist, wird sein Unterbaum ebenfalls verarbeitet/gerendert oder übersprungen/nicht gerendert.

> [!NOTE]
> Die Eigenschaften `display` und `visibility` haben keinen Einfluss auf die Verarbeitung des `<switch>`-Elements. Insbesondere hat das Setzen von `display:none` auf einem Kind keinen Einfluss auf den Wahrheitswert-Test für die Verarbeitung des `<switch>`-Elements.

## Verwendungszusammenhang

{{svginfo}}

## Attribute

Dieses Element umfasst nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSwitchElement`](/de/docs/Web/API/SVGSwitchElement)-Schnittstelle.

## SVG \<switch>-Beispiel

Dieses Beispiel demonstriert das Anzeigen unterschiedlicher Textinhalte in Abhängigkeit von den Spracheinstellungen des Browsers. Das `<switch>`-Element zeigt das erste seiner Kindelemente an, dessen `systemLanguage`-Attribut mit der Sprache des Benutzers übereinstimmt, oder das Fallback-Element ohne `systemLanguage`-Attribut, wenn keines von ihnen übereinstimmt.

### HTML

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
    <text>☺</text>
  </switch>
</svg>
```

### Ergebnis

{{ EmbedLiveSample('SVG_switch_example') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
