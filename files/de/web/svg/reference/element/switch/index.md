---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: 1db55979ae2b6ed7abb484b74e70809d66fa7637
---

Das **`<switch>`** [SVG](/de/docs/Web/SVG) Element bewertet die Attribute {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} und {{SVGAttr("systemLanguage")}} seiner direkten Kindelemente in der Reihenfolge und rendert dann das erste Kind, bei dem diese Attribute auf wahr auswerten.

Andere direkte Kindelemente werden übersprungen und daher nicht gerendert. Wenn ein Kindelement ein Container-Element ist, wie {{SVGElement("g")}}, wird auch dessen Unterbaum verarbeitet/gerendert oder übersprungen/nicht gerendert.

> [!NOTE]
> Die Eigenschaften `display` und `visibility` haben keinen Einfluss auf die Verarbeitung des `<switch>` Elements. Insbesondere hat das Setzen von `display:none` bei einem Kindelement keinen Einfluss auf den Wahr/Falsch-Test während der `<switch>` Verarbeitung.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("requiredExtensions")}}
  - : Eine durch Leerzeichen getrennte Liste von URL-Werten, die Sprach-Erweiterungen referenzieren, die der Benutzeragent unterstützen muss, damit das Element gerendert wird.

- {{SVGAttr("systemLanguage")}}
  - : Eine durch Komma getrennte Liste von unterstützten {{Glossary("BCP_47_language_tag", "Sprachtags")}}.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSwitchElement`](/de/docs/Web/API/SVGSwitchElement) Schnittstelle.

## Beispiele

Dieses Beispiel zeigt, wie verschiedene Textinhalte abhängig von den Spracheinstellungen des Browsers angezeigt werden. Das `<switch>` Element wird das erste seiner Kindelemente anzeigen, dessen {{SVGAttr("systemLanguage")}} Attribut mit der Sprache des Benutzers übereinstimmt, oder das Fallback-Element ohne `systemLanguage` Attribut, falls keines übereinstimmt.

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

- {{SVGAttr("requiredFeatures")}}
