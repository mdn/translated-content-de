---
title: "Window: Methode getComputedStyle()"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{APIRef("CSSOM")}}

Die Methode **`Window.getComputedStyle()`** gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und grundlegende Berechnungen dieser Werte durchgeführt wurden.

Individuelle CSS-Eigenschaftenwerte werden über die vom Objekt bereitgestellten APIs oder durch das Indizieren mit CSS-Eigenschaftsnamen abgerufen.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element zum Abgleichen angibt. Ausgelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}}.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. `::unsupported` wird als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird. Darüber hinaus unterstützt der neueste W3-Standard [explizit nur](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der Entwurf der CSS WG [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt von `<p>` aus.

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

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren — einschließlich derjenigen, die durch ein `<style>`-Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element **zu setzen** oder Stile zu inspizieren, die direkt hinzugefügt wurden durch JavaScript-Manipulation oder das globale `style`-Attribut.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, führen zu einem Fehler.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt verwendet. In fast allen Fällen ist dies überflüssig, da `getComputedStyle` auch im `window`-Objekt existiert. Wahrscheinlich war das `defaultView`-Muster eine Kombination aus dem Wunsch, eine Testspezifikation für `window` zu vermeiden, und der Erstellung einer API, die auch in Java nutzbar ist.

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

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt enthält aktive Werte für CSS-Eigenschaften **Langnamen** sowie Kurzbezeichnungen. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzbezeichnungs-Eigenschaftsnamen](/de/docs/Web/CSS/Shorthand_properties). Sie können Werte mit Langnamen wie {{cssxref("font-size")}} ebenso abfragen wie mit Kurzbezeichnungen wie {{cssxref("font")}}.
- CSS-Eigenschaftswerte können über die Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder direkt durch Indizierung in das Objekt mit Array- oder [Punktnotation](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese stimmen normalerweise mit den [berechneten Werten](/de/docs/Web/CSS/computed_value) von CSS 2.1 überein, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` entsprechen sie stattdessen den [verwendeten Werten](/de/docs/Web/CSS/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "bereiten, zu verwendenden" Endwerte von Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als vor der Layout-Berechnung und _verwendete Werte_ als nach der Layout-Berechnung. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, jetzt als **verwendete Werte** bezeichnet. Ein Beispielunterschied zwischen vor- und nach-Layout-Werten beinhaltet die Auflösung von Prozentwerten für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihren Pixeläquivalent ersetzt werden.
- Zur Vermeidung des "CSS-History-Leak"-Sicherheitsproblems können Browser absichtlich falsche Angaben über die berechneten Stile für einen besuchten Link machen, indem sie Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Stopfen des CSS-History-Leaks](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Datenschutzbezogene Änderungen an CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert zurück, aber den endgültigen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einen Block mit `height:100px` anwenden, gibt Firefox den berechneten Stil für `top` als `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alpha-Kanalwert genau `1` ist, und `rgba()` Farben andernfalls. In beiden Fällen wird die alte Syntax verwendet, mit Kommas als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
