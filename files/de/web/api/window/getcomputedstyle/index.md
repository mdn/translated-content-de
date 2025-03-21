---
title: "Window: Methode getComputedStyle()"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{APIRef("CSSOM")}}

Die Methode **`Window.getComputedStyle()`** gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem die aktiven Stylesheets angewendet wurden und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden.

Einzelne CSS-Eigenschaftswerte können über die von dem Objekt bereitgestellten APIs oder durch Indizieren mit CSS-Eigenschaftsnamen abgerufen werden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement angibt, das abgeglichen werden soll. Ausgelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudoelement-Selektor bezieht sich auf die syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudoelement selbst nicht unterstützt wird. Darüber hinaus [unterstützt](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) der neueste W3-Standard explizit nur `::before` und `::after`, während der Entwurf der CSS WG [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>`-Elements aus.

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

Das zurückgegebene Objekt ist vom gleichen Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Allerdings haben die beiden Objekte unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren — einschließlich derer, die von einem `<style>`-Element oder einem externen Stylesheet gesetzt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element zu **setzen** oder Stile zu inspizieren, die direkt durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, werden einen Fehler auslösen.

## defaultView

In vielen Code-Beispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt verwendet. In fast allen Fällen ist dies überflüssig, da `getComputedStyle` auch auf dem `window`-Objekt existiert. Es ist wahrscheinlich, dass das `defaultView`-Muster eine Kombination daraus war, dass Leute ungern eine Testspezifikation für `window` schreiben wollten und eine API zu schaffen, die auch in Java verwendbar war.

## Verwendung mit Pseudoelementen

`getComputedStyle` kann Stilinformationen von Pseudoelementen abrufen (wie `::after`, `::before`, `::marker`, `::line-marker` — siehe [die Pseudoelement-Spezifikation](https://www.w3.org/TR/css-pseudo-4/)).

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

## Anmerkungen

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt enthält aktive Werte für CSS-Eigenschafts**namen** in Langform sowie Kurzform. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Shorthand-Eigenschaftsnamen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties). Sie können Werte mit Langbeinamen wie {{cssxref("font-size")}} sowie Kurzformnamen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder durch direktes Indizieren in das Objekt mit Array- oder [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese sind normalerweise mit den in CSS 2.1 definierten [berechneten Werten](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) identisch, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` entsprechen sie stattdessen den [verwendeten Werten](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "einsatzbereiten" Endwerte der Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als vor der Layoutphase und _verwendete Werte_ als nach der Layoutphase. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, die jetzt als **verwendete Werte** bezeichnet werden. Ein Beispiel für den Unterschied zwischen Vor- und Nachlayoutwerten ist die Auflösung von Prozentsätzen für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihren Pixeläquivalent ersetzt werden.
- Zur Vermeidung des "CSS History Leak"-Sicherheitsproblems geben Browser manchmal absichtlich falsche Werte zurück. Um dieses Problem zu umgehen, können Browser über die berechneten Stile für einen besuchten Link lügen und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.
- Während [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) in Firefox gibt `getComputedStyle` den ursprünglichen Eigenschaftswert zurück, in WebKit jedoch den endgültigen Eigenschaftswert.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also auf ein Element `top:auto` und `bottom:0` anwenden und einen `height:30px` und einen Block mit `height:100px` haben, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70 ist.
- Aus Kompatibilitätsgründen werden serielle Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Wert des Alphakanals genau `1` ist, und `rgba()`-Farben andernfalls. In beiden Fällen wird die alte Syntax mit Kommas als Trenner verwendet (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
