---
title: CSSRuleList
slug: Web/API/CSSRuleList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{ APIRef("CSSOM") }}

Ein `CSSRuleList` repräsentiert eine geordnete Sammlung von schreibgeschützten [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten.

Obwohl das `CSSRuleList`-Objekt schreibgeschützt ist und nicht direkt geändert werden kann, wird es als `live` Objekt betrachtet, da sich der Inhalt im Laufe der Zeit ändern kann.

Um die zugrunde liegenden Regeln, die durch `CSSRule`-Objekte zurückgegeben werden, zu bearbeiten, verwenden Sie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule), welche Methoden von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) sind.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um existierenden Code nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für deren Verwendung auferlegt werden (wie z.B. das schreibgeschützte Festlegen ihrer Elemente).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `CSSRuleList` vermeiden sollten. Sie erstellen `CSSRuleList`-Objekte nicht selbst, sondern erhalten sie über APIs wie [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) und [`CSSKeyframesRule.cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules), und diese APIs sind nicht veraltet. Beachten Sie jedoch die semantischen Unterschiede zu einem echten Array.

## Instanz-Eigenschaften

- [`CSSRuleList.length`](/de/docs/Web/API/CSSRuleList/length) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekte in der Sammlung repräsentiert.

## Instanz-Methoden

- [`CSSRuleList.item()`](/de/docs/Web/API/CSSRuleList/item)
  - : Ruft eine einzelne [`CSSRule`](/de/docs/Web/API/CSSRule) ab.

## Beispiele

Im folgenden Beispiel gibt es ein Stylesheet mit drei Regeln. Die Verwendung von [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) gibt eine `CSSRuleList` zurück, die in die Konsole ausgegeben wird.

Die Anzahl der Regeln in der Liste wird unter Verwendung von [`CSSRuleList.length`](/de/docs/Web/API/CSSRuleList/length) in die Konsole ausgegeben. Die erste [`CSSRule`](/de/docs/Web/API/CSSRule) kann durch die Verwendung von `0` als Parameter für [`CSSRuleList.item`](/de/docs/Web/API/CSSRuleList/item) zurückgegeben werden; im Beispiel werden so die Regeln für den `body`-Selector zurückgegeben.

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
