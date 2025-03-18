---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<switch>`** [SVG](/de/docs/Web/SVG)-Element evaluiert die {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} und {{SVGAttr("systemLanguage")}} Attribute seiner direkten Kindelemente in der Reihenfolge und rendert dann das erste Kind, bei dem diese Attribute als wahr ausgewertet werden.

Andere direkte Kindelemente werden übersprungen und daher nicht gerendert. Wenn ein Kindelement ein Containerelement ist, wie {{SVGElement("g")}}, wird auch sein Unterbaum verarbeitet/gerendert oder übersprungen/nicht gerendert.

> [!NOTE]
> Die Eigenschaften `display` und `visibility` haben keinen Einfluss auf die Verarbeitung des `<switch>`-Elements. Insbesondere hat das Setzen von `display:none` auf ein Kind keinen Effekt auf die Wahr-/Falsch-Prüfung der `<switch>`-Verarbeitung.

## Verwendungskontext

{{svginfo}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSwitchElement`](/de/docs/Web/API/SVGSwitchElement)-Schnittstelle.

## SVG \<switch>-Beispiel

Dieses Beispiel zeigt, wie je nach Spracheinstellung des Browsers unterschiedliche Textinhalte angezeigt werden. Das `switch`-Element zeigt das erste seiner Kindelemente an, dessen `systemLanguage`-Attribut mit der Sprache des Benutzers übereinstimmt, oder das Fallback-Element ohne `systemLanguage`-Attribut, wenn keines übereinstimmt.

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
