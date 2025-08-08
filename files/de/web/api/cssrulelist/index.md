---
title: CSSRuleList
slug: Web/API/CSSRuleList
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{ APIRef("CSSOM") }}

Ein `CSSRuleList` stellt eine geordnete Sammlung von schreibgeschützten [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten dar.

Obwohl das `CSSRuleList`-Objekt schreibgeschützt ist und nicht direkt modifiziert werden kann, wird es als `live` Objekt betrachtet, da sich der Inhalt im Laufe der Zeit ändern kann.

Um die zugrunde liegenden Regeln, die von `CSSRule`-Objekten zurückgegeben werden, zu bearbeiten, verwenden Sie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule), welche Methoden von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) sind.

Dieses Interface war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um den Code nicht zu brechen, der es bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar sind und gleichzeitig zusätzliche Semantiken für ihre Verwendung auferlegt werden (wie z. B. das Festlegen ihrer Elemente als schreibgeschützt).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `CSSRuleList` vermeiden sollten. Sie erstellen `CSSRuleList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) und [`CSSKeyframesRule.cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig hinsichtlich der semantischen Unterschiede zu einem echten Array.

## Instanz-Eigenschaften

- [`CSSRuleList.length`](/de/docs/Web/API/CSSRuleList/length) {{ReadOnlyInline}}
  - : Gibt einen Integer zurück, der die Anzahl der [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekte in der Sammlung darstellt.

## Instanz-Methoden

- [`CSSRuleList.item()`](/de/docs/Web/API/CSSRuleList/item)
  - : Holt eine einzelne [`CSSRule`](/de/docs/Web/API/CSSRule).

## Beispiele

Im folgenden Beispiel gibt es ein Stylesheet mit drei Regeln. Die Verwendung von [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) gibt eine `CSSRuleList` zurück, die in die Konsole gedruckt wird.

Die Anzahl der Regeln in der Liste wird mit [`CSSRuleList.length`](/de/docs/Web/API/CSSRuleList/length) in die Konsole gedruckt. Die erste [`CSSRule`](/de/docs/Web/API/CSSRule) kann mithilfe von `0` als Parameter für [`CSSRuleList.item`](/de/docs/Web/API/CSSRuleList/item) zurückgegeben werden. In diesem Beispiel wird dies die Regeln für den `body`-Selektor zurückgeben.

### CSS

```css
body {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  margin: 2em;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}

.container > * {
  background-color: #3740ff;
  color: white;
}
```

### JavaScript

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
console.log(myRules.length);
console.log(myRules[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSRule`](/de/docs/Web/API/CSSRule)
