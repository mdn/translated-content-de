---
title: "Fenster: getComputedStyle()-Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet wurden und grundlegende Berechnungen dieser Werte durchgeführt wurden.

Einzelne CSS-Eigenschaftswerte können über APIs, die vom Objekt bereitgestellt werden, oder durch Indizierung mit CSS-Eigenschaftsnamen abgerufen werden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das abgeglichen werden soll. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird. Darüber hinaus unterstützt der aktuelle W3-Standard [explizit nur `::before` und `::after`](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle), während der Entwurf der CSS-Arbeitsgruppe [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren - einschließlich der Stile, die durch ein `<style>`-Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile an diesem Element **festzulegen** oder Stile, die direkt aus JavaScript-Manipulationen oder dem globalen `style`-Attribut hinzugefügt wurden, zu inspizieren.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, werfen einen Fehler.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt aus verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window`-Objekt existiert. Wahrscheinlich war das `defaultView`-Muster eine Kombination aus dem Wunsch, keine Testspezifikation für `window` schreiben zu müssen, und dem Bedürfnis, eine API bereitzustellen, die auch in Java verwendet werden kann.

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

## Anmerkungen

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt enthält aktive Werte für CSS-Eigenschafts-Langnamen sowie Kurzbezeichnungen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den Kurzbezeichnungen {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzbezeichnungseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties). Sie können Werte mit Langnamen wie {{cssxref("font-size")}} sowie mit Kurzbezeichnungen wie {{cssxref("font")}} abfragen.
- Den CSS-Eigenschaftswerten kann mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder durch direktes Indizieren in das Objekt mit Array- oder [Punkt-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` zugegriffen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese entsprechen normalerweise den [berechneten Werten](/de/docs/Web/CSS/CSS_cascade/computed_value) von CSS 2.1, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding`, sind sie stattdessen dieselben wie [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die „einsatzbereiten“ Endwerte von Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als Vorlayout und _verwendete Werte_ als Postlayout. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, jetzt als _verwendete Werte_ bezeichnet. Ein Beispielunterschied zwischen Vor- und Nach-Layout-Werten umfasst die Auflösung von Prozentwerten für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihren Pixeläquivalent ersetzt werden.
- Zur Vermeidung des Problems des „CSS-History-Leaks“ geben Browser manchmal absichtlich ungenaue Werte zurück. So kann es sein, dass die berechneten Stile für einen besuchten Link zurückgegeben werden, als wäre die verknüpfte URL nie besucht worden. Siehe [Das CSS History Leak schließen](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Datenschutzbezogene Änderungen bei CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert zurück, aber den endgültigen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert und nicht den Wert `auto` zurück. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem enthaltenen Block von `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 - 30 = 70.
- Aus Kompatibilitätsgründen werden serielle Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und als `rgba()`-Farben in allen anderen Fällen. In beiden Fällen wird die alte Syntax verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
