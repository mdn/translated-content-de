---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Objekt zurück, welches die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden.

Einzelne CSS-Eigenschaftswerte werden über die vom Objekt bereitgestellten APIs oder durch Indizierung mit CSS-Eigenschaftsnamen abgerufen.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement angibt, das abgeglichen werden soll. Nicht angegeben (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das automatisch aktualisiert wird, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudoelement-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudoelement selbst nicht unterstützt wird. Zusätzlich unterstützt der neueste W3-Standard [explizit nur](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der Entwurf des CSS-WG [diesen Wert nicht beschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}} Element, rufen dann diese Stile mit `getComputedStyle()` ab und drucken sie in den Textinhalt des `<p>`.

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

Das zurückgegebene Objekt ist vom gleichen Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements zurückgegeben wird. Die beiden Objekte haben jedoch unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu untersuchen – einschließlich derjenigen, die durch ein `<style>` Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style` Objekt sollte verwendet werden, um Stile auf diesem Element **festzulegen** oder Stile zu überprüfen, die direkt durch JavaScript-Manipulation oder das globale `style` Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text) Knoten, werden einen Fehler auslösen.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView) Objekt verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window` Objekt existiert. Es ist wahrscheinlich, dass das `defaultView` Muster eine Kombination aus der Abneigung, eine Testspezifikation für `window` zu schreiben, und der Erstellung einer API, die auch in Java verwendet werden konnte, war.

## Verwendung mit Pseudoelementen

`getComputedStyle` kann Stilinformationen von Pseudoelementen abrufen (wie `::after`, `::before`, `::marker`, `::line-marker` – siehe [die Pseudoelement-Spezifikation](https://www.w3.org/TR/css-pseudo-4/)).

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

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt enthält aktive Werte für CSS-Eigenschafts-**_Langnamen_** sowie Kurznotationen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu {{cssxref("border-width")}} und {{cssxref("border")}} [Kurznotationen](/de/docs/Web/CSS/Shorthand_properties). Sie können Werte mit Langnamen wie {{cssxref("font-size")}} ebenso wie mit Kurznotationen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode oder durch direkte Indizierung in das Objekt mithilfe von Array- oder [Punktnotation](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese sind in der Regel identisch mit den CSS 2.1 [berechneten Werten](/de/docs/Web/CSS/computed_value), aber für einige ältere Eigenschaften wie `width`, `height`, oder `padding`, sind sie stattdessen identisch mit [verwendeten Werten](/de/docs/Web/CSS/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "benutzungsfertigen" Endwerte der Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 hat sie als pre-Layout und _verwendete Werte_ als post-Layout neu definiert. Für CSS 2.0 Eigenschaften gibt `getComputedStyle` den alten Sinn der berechneten Werte zurück, die jetzt **verwendete Werte** genannt werden. Ein Unterschied zwischen pre- und post-Layout-Werten umfasst die Auflösung von Prozentwerten für `width` oder `height`, da diese nur für _verwendete Werte_ durch deren Pixeläquivalente ersetzt werden.
- Zur Vermeidung des "CSS History Leak" Sicherheitsproblems geben Browser gelegentlich absichtlich ungenaue Werte zurück. So können die berechneten Stile für einen besuchten Link verfälscht dargestellt werden, als ob der Benutzer die verlinkte URL niemals besucht hätte. Weitere Informationen finden Sie unter [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/).
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` den ursprünglichen Eigenschaftswert in Firefox zurück, aber den endgültigen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem umschließenden Block mit `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alphakanal-Wert genau `1` ist, und als `rgba()` Farben andernfalls. In beiden Fällen wird der Alt-Syntax verwendet, mit Kommata als Trenner (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
