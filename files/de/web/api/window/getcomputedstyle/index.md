---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und einfache Berechnungen dieser Werte vorgenommen wurden.

Einzelne CSS-Eigenschaftswerte können über die vom Objekt bereitgestellten APIs oder durch Indizierung mit CSS-Eigenschaftsnamen abgerufen werden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das abgeglichen werden soll. Kann weggelassen (oder `null`) werden, wenn reale Elemente verwendet werden.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird. Zusätzlich unterstützt der neueste W3-Standard [ausschließlich](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der CSS-WG-Entwurf [diese Werte nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("p")}}-Element gestylt. Anschließend werden diese Stile mittels `getComputedStyle()` abgerufen und als Textinhalt des `<p>` ausgegeben.

### HTML

```html
<p>Hello</p>
```

### CSS

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

### JavaScript

```js
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue(
    "line-height",
  )}.`;
```

### Resultat

{{EmbedLiveSample('Examples', '100%', '240px')}}

## Beschreibung

Das zurückgegebene Objekt ist vom selben Typ wie [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das auch von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Jedoch haben die beiden Objekte unterschiedliche Zwecke:

- Das von `getComputedStyle` zurückgegebene Objekt ist schreibgeschützt und sollte genutzt werden, um den Stil des Elements zu inspizieren — einschließlich der Stile, die durch ein `<style>`-Element oder ein externes Stylesheet gesetzt wurden.
- Das `element.style`-Objekt sollte genutzt werden, um Stile auf dieses Element zu **setzen** oder Stile zu inspizieren, die direkt durch JavaScript-Manipulationen oder das globale `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente wie ein [`Text`](/de/docs/Web/API/Text)-Knoten führen zu einem Fehler.

## defaultView

In vielen Code-Beispielen wird `getComputedStyle` aus dem [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt aufgerufen. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window`-Objekt existiert. Wahrscheinlich stammt das `defaultView`-Muster aus einer Kombination von Bestrebungen, keine Testspezifikationen für `window` zu schreiben und eine API zu schaffen, die auch in Java nutzbar ist.

## Verwendung mit Pseudo-Elementen

`getComputedStyle` kann Stilinformationen von Pseudo-Elementen abrufen (z. B. `::after`, `::before`, `::marker`, `::line-marker` — siehe [den Pseudo-Element-Standard](https://www.w3.org/TR/css-pseudo-4/)).

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>Generated content</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## Hinweise

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt enthält aktive Werte für **_langnamen_**-CSS-Eigenschaften sowie Kurznamen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu {{cssxref("border-width")}} und {{cssxref("border")}} [Shorthandeigenschaften](/de/docs/Web/CSS/Shorthand_properties). Sie können Werte sowohl mit Langnamen wie {{cssxref("font-size")}} als auch mit Kurznamen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder durch direkte Indizierung des Objekts mit Array- oder [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese entsprechen normalerweise den in CSS 2.1 definierten [berechneten Werten](/de/docs/Web/CSS/CSS_cascade/computed_value), aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` sind sie identisch mit den [verwendeten Werten](/de/docs/Web/CSS/CSS_cascade/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die finalen Werte, die nach der Kaskadierung und Vererbung verwendet werden sollen. CSS 2.1 hat sie jedoch als Werte vor dem Layout redefiniert, während _verwendete Werte_ danach bestimmt werden. Bei CSS-2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, die jetzt **verwendete Werte** genannt werden. Ein Unterschied zwischen Vorab- und Nach-Layout-Werten betrifft beispielsweise die Auflösung von Prozentangaben für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihre Pixeläquivalente ersetzt werden.
- Zur Vermeidung des "CSS-Historienlecks"-Sicherheitsproblems können Browser manchmal absichtlich ungenaue Werte für `getComputedStyle` zurückgeben, z. B. für besuchte Links. Sie geben dabei Werte zurück, als hätte der Nutzer die verlinkte URL nie besucht. Siehe [Das Schließen des CSS-Historienlecks](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Datenschutzbezogene Änderungen für CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert und in WebKit den Schlusswert zurück.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht `auto`. Wenn Sie beispielsweise `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem umgebenden Block mit `height:100px` anwenden, gibt der berechnete Stil für `top` in Firefox `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serielle Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alpha-Kanalwert genau `1` ist, und als `rgba()`-Farben in anderen Fällen. In beiden Fällen wird die ältere Syntax mit Kommas als Trennzeichen verwendet (z. B. `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
