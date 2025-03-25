---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 799c2b925bd65f0f31511cafab36fa1a6e294dc4
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet wurden und grundlegende Berechnungen dieser Werte aufgelöst wurden.

Einzelne CSS-Eigenschaftswerte werden durch APIs bereitgestellt, die vom Objekt zur Verfügung gestellt werden, oder durch Indexierung mit CSS-Property-Namen.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll. Wird es weggelassen (oder auf `null` gesetzt), wird es für reale Elemente verwendet.

### Rückgabewert

Ein _lebendiges_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das automatisch aktualisiert wird, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder es sich um {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} handelt.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische
    > Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das
    > Pseudo-Element selbst nicht unterstützt wird. Darüber hinaus unterstützt der neueste W3-Standard [explizit nur](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der Entwurf der CSS
    > WG [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

### Ergebnis

{{EmbedLiveSample('Examples', '100%', '240px')}}

## Beschreibung

Das zurückgegebene Objekt ist vom gleichen Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Die beiden Objekte haben jedoch unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu überprüfen — einschließlich der Stile, die durch ein `<style>`-Element oder ein externes Stylesheet gesetzt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element **festzulegen** oder Stile zu überprüfen, die direkt von JavaScript-Manipulationen oder dem globalen `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, führen zu einem Fehler.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` von dem [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window`-Objekt existiert. Es ist wahrscheinlich, dass das `defaultView`-Muster eine Kombination aus dem Wunsch war, keine Test-Spezifikation für `window` zu schreiben, und einem API, das auch in Java verwendet werden konnte.

## Verwendung mit Pseudo-Elementen

`getComputedStyle` kann Stilinformationen von Pseudo-Elementen abrufen (wie `::after`, `::before`, `::marker`, `::line-marker` — siehe [die Pseudo-Element-Spezifikation](https://www.w3.org/TR/css-pseudo-4/)).

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

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt enthält aktive Werte für CSS-Property-Namen in **_Langform_** als auch Kurzform-Namen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzform-Eigenschaftsnamen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties). Sie können Werte mit Langform-Namen wie {{cssxref("font-size")}} sowie Kurzform-Namen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können entweder mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) abgerufen werden oder indem direkt mittels Array- oder [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) in das Objekt zugegriffen wird, wie `obj['z-index']` oder `obj.zIndex`.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value). Diese sind in der Regel identisch mit den [berechneten Werten](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) von CSS 2.1, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding`, sind sie stattdessen die gleichen wie [genutzte Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "gebrauchsfertigen" Endwerte der Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als pre-Layout, und _genutzte Werte_ als post-Layout. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung von berechneten Werten zurück, jetzt **gebrauchte Werte** genannt. Ein Unterschied zwischen pre- und post-Layoutwerten umfasst die Auflösung von Prozentwerten für `width` oder `height`, da diese nur für _gebrauchte Werte_ durch ihren Pixeläquivalent ersetzt werden.
- Zur Vermeidung des "CSS History Leak" Sicherheitsproblems geben Browser für einen besuchten Link manchmal absichtlich ungenaue Werte zurück, indem sie Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert zurück, in WebKit jedoch den finalen Eigenschaftswert.
- In Firefox geben Eigenschaften mit dem Wert `auto` den genutzten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einen enthaltenden Block von `height:100px` anwenden, gibt der berechnete Stil für `top` in Firefox `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alphakanalwert genau `1` ist, und als `rgba()`-Farben andernfalls. In beiden Fällen wird die veraltete Syntax mit Kommas als Trennzeichen verwendet (beispielsweise `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
