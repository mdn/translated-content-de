---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden.

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
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll. Ausgelassen (oder `null`) bei realen Elementen.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig betrachtet, selbst wenn das Pseudo-Element selbst nicht unterstützt wird. Darüber hinaus unterstützt der neueste W3-Standard [explizit](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) nur `::before` und `::after`, während der Entwurf der CSS-Arbeitsgruppe [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browser-Kompatibilität kann variieren.

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

Das zurückgegebene Objekt ist vom gleichen Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Allerdings haben die beiden Objekte unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren – einschließlich der von einem `<style>`-Element oder einem externen Stylesheet gesetzten Stile.
- Das `element.style`-Objekt sollte verwendet werden, um Stile an diesem Element **zu setzen** oder direkt hinzugefügte Stile zu inspizieren, die durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein [`Element`](/de/docs/Web/API/Element) sein. Nicht-Elemente, wie ein [`Text`](/de/docs/Web/API/Text)-Knoten, werfen einen Fehler.

## defaultView

In vielen Code-Beispielen wird `getComputedStyle` vom [`document.defaultView`](/de/docs/Web/API/Document/defaultView)-Objekt aus verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window`-Objekt existiert. Wahrscheinlich war das `defaultView`-Muster eine Mischung aus dem Wunsch, keine Testspezifikation für `window` zu schreiben, und der Erstellung einer API, die auch in Java verwendet werden konnte.

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

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt enthält aktive Werte für CSS-Eigenschaften mit **_Langschreibweise_** sowie Kurzschreibweisen. Beispielsweise enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzschreibweise-Eigenschaftsnamen](/de/docs/Web/CSS/Shorthand_properties). Sie können Werte mit Langnamen wie {{cssxref("font-size")}} sowie Kurzschreibweisen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mit der Methode [`getPropertyValue(propName)`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) oder durch direkte Indizierung im Objekt über Array- oder [Punktschreibweise](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) wie `obj['z-index']` oder `obj.zIndex` abgerufen werden.
- Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese sind normalerweise dieselben wie CSS 2.1s [berechnete Werte](/de/docs/Web/CSS/computed_value), aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` sind sie stattdessen dieselben wie [verwendete Werte](/de/docs/Web/CSS/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "einsatzbereiten" Endwerte von Eigenschaften nach Kaskadierung und Vererbung, aber CSS 2.1 definierte sie als vor dem Layout und _verwendete Werte_ als nach dem Layout. Für CSS-2.0-Eigenschaften gibt `getComputedStyle` den alten Bedeutungsgehalt der berechneten Werte zurück, jetzt als **verwendete Werte** bezeichnet. Ein Unterschied zwischen Vor- und Nach-Layout-Werten besteht beispielsweise in der Auflösung von Prozentsätzen für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihre Pixeläquivalente ersetzt werden.
- Zur Vermeidung des "CSS-Verlauf-Lecks" Sicherheitsproblems geben Browser vorsätzlich ungenaue Werte für die berechneten Stile eines besuchten Links zurück, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Schließen des CSS-Verlauf-Lecks](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Datenschutzbezogene Änderungen für CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert, in WebKit jedoch den Endwert der Eigenschaft zurück.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem enthaltenen Block von `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und `rgba()`-Farben andernfalls. In beiden Fällen wird die veraltete Syntax mit Kommata als Trennzeichen verwendet, z. B. `rgb(255, 0, 0)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
