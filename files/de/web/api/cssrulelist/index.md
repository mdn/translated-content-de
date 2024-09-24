---
title: CSSRuleList
slug: Web/API/CSSRuleList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{ APIRef("CSSOM") }}

Eine `CSSRuleList` repräsentiert eine geordnete Sammlung von schreibgeschützten {{domxref("CSSRule")}}-Objekten.

Obwohl das `CSSRuleList`-Objekt schreibgeschützt und nicht direkt modifizierbar ist, gilt es als ein `lebendiges` Objekt, da sich der Inhalt im Laufe der Zeit ändern kann.

Um die zugrunde liegenden Regeln, die von `CSSRule`-Objekten zurückgegeben werden, zu bearbeiten, verwenden Sie {{domxref("CSSStyleSheet.insertRule()")}} und {{domxref("CSSStyleSheet.deleteRule()")}}, die Methoden von {{domxref("CSSStyleSheet")}} sind.

Diese Schnittstelle war ein [Versuch, eine nicht änderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code, der sie verwendet, nicht zu unterbrechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, was viele Array-Methoden verfügbar macht und gleichzeitig zusätzliche Semantiken auf deren Nutzung aufzwingt (wie das Festlegen, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `CSSRuleList` vermeiden sollten. Sie erstellen `CSSRuleList`-Objekte nicht selbst, aber Sie erhalten sie von APIs wie {{domxref("CSSStyleSheet.cssRules")}} und {{domxref("CSSKeyframesRule.cssRules")}}, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

## Instanz-Eigenschaften

- {{domxref("CSSRuleList.length")}} {{ReadOnlyInline}}
  - : Liefert eine Ganzzahl, die die Anzahl der {{domxref("CSSRule")}}-Objekte in der Sammlung darstellt.

## Instanz-Methoden

- {{domxref("CSSRuleList.item()")}}
  - : Ruft eine einzelne {{domxref("CSSRule")}} ab.

## Beispiele

Im folgenden Beispiel gibt es ein Stylesheet mit drei Regeln. Die Verwendung von {{domxref("CSSStyleSheet.cssRules")}} gibt eine `CSSRuleList` zurück, die in der Konsole ausgegeben wird.

Die Anzahl der Regeln in der Liste wird mit {{domxref("CSSRuleList.length")}} in der Konsole ausgegeben. Die erste {{domxref("CSSRule")}} kann abgerufen werden, indem `0` als Parameter für {{domxref("CSSRuleList.item")}} verwendet wird. Im Beispiel wird dies die Regeln für den `body`-Selektor zurückgeben.

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
  color: #fff;
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
