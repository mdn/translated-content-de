---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle grundlegenden Berechnungen dieser Werte durchgeführt wurden.

Einzelne CSS-Eigenschaftswerte werden über APIs abgerufen, die vom Objekt bereitgestellt werden, oder durch Indizierung mit CSS-Eigenschaftsnamen.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zu matchende Pseudoelement angibt. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudoelement-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig betrachtet, obwohl das Pseudoelement selbst nicht unterstützt wird. Zusätzlich unterstützt der neueste W3-Standard [explizit](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) nur `::before` und `::after`, während der Entwurf der CSS WG [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen diese Stile mit `getComputedStyle()` ab und geben sie im Textinhalt des `<p>` aus.

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

Das zurückgegebene Objekt ist der gleiche [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Typ wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Allerdings haben die beiden Objekte unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren — einschließlich derjenigen, die durch ein `<style>`-Element oder ein externes Stylesheet gesetzt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element zu **setzen** oder Stile zu inspizieren, die direkt durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, führen zu einem Fehler.

## defaultView

In vielen Code-Beispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch auf dem `window`-Objekt existiert. Es ist wahrscheinlich, dass das `defaultView`-Muster eine Kombination aus Leuten war, die keinen Testspezifikationscode für `window` schreiben wollten und eine API erstellen wollten, die auch in Java verwendet werden konnte.

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

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt enthält aktive Werte für CSS-Eigenschaftsnamen in **Langform** sowie in Kurzform. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzform-Eigenschaftsnamen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties). Sie können Werte mit Langformnamen wie {{cssxref("font-size")}} sowie Kurzformnamen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder durch direkte Indizierung des Objekts mit Array- oder [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese sind normalerweise dieselben wie die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) von CSS 2.1, aber für einige ältere Eigenschaften wie `width`, `height` oder `padding`, sind sie stattdessen dieselben wie [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "bereit zur Verwendung" finalen Werte von Eigenschaften nach der Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als vor dem Layout und _verwendete Werte_ als nach dem Layout. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, jetzt genannt **verwendete Werte**. Ein Beispielunterschied zwischen Vor- und Nach-Layout-Werten umfasst die Auflösung von Prozentsätzen für `width` oder `height`, da diese nur bei _verwendeten Werten_ durch ihre Pixeläquivalente ersetzt werden.
- Zurückgegebene Werte sind manchmal absichtlich ungenau. Um das Sicherheitsproblem "CSS History Leak" zu vermeiden, können Browser bei den berechneten Stilen für einen besuchten Link lügen und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions), gibt `getComputedStyle` den ursprünglichen Eigenschaftswert in Firefox zurück, aber den finalen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem umgebenden Block von `height:100px` anwenden, gibt der berechnete Stil für `top` in Firefox `70px` zurück, da 100 − 30 = 70 ist.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und als `rgba()` für andere Fälle. In beiden Fällen wird die ältere Syntax verwendet, mit Kommas als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
