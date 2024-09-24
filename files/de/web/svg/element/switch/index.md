---
title: <switch>
slug: Web/SVG/Element/switch
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<switch>`** [SVG](/de/docs/Web/SVG) Element bewertet die Attribute {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} und {{SVGAttr("systemLanguage")}} seiner direkten Kindelemente in der Reihenfolge und rendert dann das erste Kind, bei dem diese Attribute auf wahr ausgewertet werden.

Andere direkte Kinder werden umgangen und daher nicht gerendert. Wenn ein Kindelement ein Containerelement ist, wie zum Beispiel {{SVGElement("g")}}, dann wird dessen Unterbaum ebenfalls verarbeitet/gerendert oder umgangen/nicht gerendert.

> [!NOTE]
> Die Eigenschaften `display` und `visibility` haben keinen Einfluss auf die Verarbeitung von `<switch>`-Elementen. Insbesondere hat das Setzen von `display:none` auf ein Kind keinen Einfluss auf die Wahrheitsprüfung für die `<switch>`-Verarbeitung.

## Nutzungskontext

{{svginfo}}

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGSwitchElement")}} Schnittstelle.

## SVG \<switch> Beispiel

Dieses Beispiel zeigt unterschiedliche Textinhalte abhängig von den Spracheinstellungen des Browsers. Das `switch`-Element zeigt das erste seiner Kindelemente an, dessen `systemLanguage`-Attribut mit der Benutzersprache übereinstimmt, oder das Fallback-Element ohne `systemLanguage`-Attribut, wenn keines von ihnen übereinstimmt.

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
