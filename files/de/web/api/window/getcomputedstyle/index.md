---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet wurden und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden.

Einzelne CSS-Eigenschaften können über APIs, die von dem Objekt bereitgestellt werden, oder durch Indizierung mit CSS-Eigenschaftsnamen abgerufen werden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement angibt, das abgeglichen werden soll. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudoelement-Selektor bezieht sich auf die syntaktische
    > Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, obwohl
    > das Pseudoelement selbst nicht unterstützt wird. Zusätzlich unterstützt der neueste W3-Standard [explizit nur](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der CSS
    > WG-Entwurf [diesen Wert nicht beschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}} Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu überprüfen — einschließlich derjenigen, die durch ein `<style>` Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style` Objekt sollte verwendet werden, um Stile für dieses Element zu **setzen** oder um Stile zu überprüfen, die direkt durch JavaScript-Manipulation oder das globale `style` Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text) Knoten, führen zu einem Fehler.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView) Objekt verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window` Objekt vorhanden ist. Wahrscheinlich war das `defaultView` Muster eine Kombination von Leuten, die das Schreiben einer Testspezifikation für `window` vermeiden wollten und einer API, die auch in Java nutzbar war.

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

## Hinweise

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt enthält aktive Werte für CSS-Eigenschaftsnamen im **_Langformat_** sowie Kurzformen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den Kurzformat-Eigenschaftsnamen {{cssxref("border-width")}} und {{cssxref("border")}}. Sie können Werte mit Langformat-Namen wie {{cssxref("font-size")}} sowie Kurzformat-Namen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode oder direkt durch Indizierung in das Objekt mit Array- oder [Punktsyntax](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value).
  Diese sind in der Regel die gleichen wie die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) von CSS 2.1, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` sind sie stattdessen die gleichen wie die [verwendeten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "einsatzbereiten" Endwerte von Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als vor dem Layout und _verwendete Werte_ als nach dem Layout. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, jetzt genannt **verwendete Werte**. Ein Beispielunterschied zwischen Vor- und Nachlayout-Werten umfasst die Auflösung von Prozentwerten für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihre Pixeläquivalente ersetzt werden.
- Zur Vermeidung des "CSS History Leak" Sicherheitsproblems geben Browser manchmal absichtlich ungenaue Werte zurück. Um dieses Sicherheitsrisiko zu vermeiden, können Browser falsche Angaben zu den berechneten Stilen für einen besuchten Link machen und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Sehen Sie [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) an, um Beispiele dafür zu sehen, wie dies implementiert wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` den ursprünglichen Eigenschaftswert in Firefox zurück, aber den Endwert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem umschließenden Block von `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70 ist.
- Aus Kompatibilitätsgründen werden serielle Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alpha-Kanalwert genau `1` ist, und `rgba()` Farben andernfalls. In beiden Fällen wird die ältere Syntax mit Kommas als Trennern verwendet (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
