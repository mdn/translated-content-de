---
title: "Fenster: Methode getComputedStyle()"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{APIRef("CSSOM")}}

Die Methode **`Window.getComputedStyle()`** gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements nach Anwendung der aktiven Stylesheets und der Auflösung etwaiger grundlegender Berechnungen dieser Werte enthält.

Einzelne CSS-Eigenschaftswerte können über die vom Objekt bereitgestellten APIs oder durch Indizieren mit CSS-Eigenschaftsnamen abgerufen werden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das {{DOMxRef("Element")}}, für das der berechnete Stil ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein Zeichenfolgewert, der das Pseudo-Element angibt, das übereinstimmen soll. Wird für reale Elemente weggelassen (oder `null`).

### Rückgabewert

Ein _lebendiges_ {{DOMxRef("CSSStyleDeclaration")}}
Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein {{DOMxRef("Element")}} ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird. Darüber hinaus unterstützt der neueste W3-Standard [explizit nur](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) `::before` und `::after`, während der Entwurf der CSS WG [diesen Wert nicht einschränkt](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Die Browserkompatibilität kann variieren.

## Beispiele

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>`-Elements aus.

### HTML

```html
<p>Hallo</p>
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

Das zurückgegebene Objekt ist vom gleichen Typ {{DOMxRef("CSSStyleDeclaration")}} wie das Objekt, das von der {{DOMxRef("HTMLElement/style", "style")}}-Eigenschaft des Elements zurückgegeben wird. Die beiden Objekte haben jedoch unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu untersuchen — einschließlich derjenigen, die durch ein `<style>`-Element oder ein externes Stylesheet gesetzt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element **festzulegen** oder Stile zu untersuchen, die direkt durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

Das erste Argument muss ein {{domxref("Element")}} sein. Nicht-Elemente, wie ein {{DOMxRef("Text")}}-Knoten, werfen einen Fehler.

## defaultView

In vielen Codebeispielen wird `getComputedStyle` vom {{DOMxRef("document.defaultView")}}-Objekt verwendet. In fast allen Fällen ist dies unnötig, da `getComputedStyle` auch im `window` Objekt existiert. Wahrscheinlich war das `defaultView`-Muster eine Kombination aus Leuten, die kein Testspezifikationsdokument für `window` schreiben wollten und eine API zu schaffen, die auch in Java verwendbar war.

## Verwendung mit Pseudo-Elementen

`getComputedStyle` kann Stilinformationen von Pseudo-Elementen abrufen (wie `::after`, `::before`, `::marker`, `::line-marker` — siehe [die Spezifikation der Pseudo-Elemente](https://www.w3.org/TR/css-pseudo-4/)).

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>Erzeugte Inhalte</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // gibt ' rocks!' zurück
</script>
```

## Hinweise

- Das zurückgegebene {{DOMxRef("CSSStyleDeclaration")}}-Objekt enthält aktive Werte für CSS-Eigenschafts**langnamen** ebenso wie für Kurznamene. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzname-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties). Sie können Werte mit Langnamen wie {{cssxref("font-size")}} und auch mit Kurznamen wie {{cssxref("font")}} abfragen.
- CSS-Eigenschaftswerte können mithilfe der {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue(propName)")}}-Methode oder durch direktes Indizieren im Objekt mit Array- oder [Punktnotation](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation) abgerufen werden, z.B. `obj['z-index']` oder `obj.zIndex`.
- Die Werte, die von `getComputedStyle` zurückgegeben werden, sind [abgelöste Werte](/de/docs/Web/CSS/resolved_value). Diese sind normalerweise die gleichen wie CSS 2.1's [berechnete Werte](/de/docs/Web/CSS/computed_value), aber für einige ältere Eigenschaften wie `width`, `height` oder `padding` sind sie stattdessen die gleichen wie [verwendete Werte](/de/docs/Web/CSS/used_value). Ursprünglich definierte CSS 2.0 die _berechneten Werte_ als die "einsatzbereiten" Endwerte der Eigenschaften nach dem Kaskadieren und Vererben, aber CSS 2.1 definierte sie als Vor-Layout und _verwendete Werte_ als Nach-Layout. Für CSS 2.0-Eigenschaften gibt `getComputedStyle` die alte Bedeutung der berechneten Werte zurück, die jetzt als **verwendete Werte** bezeichnet werden. Ein Unterschied zwischen Vor- und Nach-Layout-Werten umfasst die Auflösung von Prozentsätzen für `width` oder `height`, da diese nur für _verwendete Werte_ durch ihr Pixelequivalent ersetzt werden.
- Die zurückgegebenen Werte sind manchmal absichtlich ungenau. Um das Sicherheitsproblem des "CSS History Leak" zu vermeiden, können Browser über die berechneten Stile für einen besuchten Link lügen und Werte zurückgeben, als hätte der Benutzer die verlinkte URL nie besucht. Siehe [Stopfen des CSS-History-Leaks](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Datenschutzbezogene Änderungen an CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert ist.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` den ursprünglichen Eigenschaftswert in Firefox zurück, jedoch den endgültigen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element anwenden, das `height:30px` und einen enthaltenden Block von `height:100px` hat, gibt Firefox' berechneter Stil für `top` `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Wert des Alphakanals genau `1` ist, und als `rgba()`-Farben sonst. In beiden Fällen wird die veraltete Syntax verwendet, mit Kommas als Trennzeichen (z.B. `rgb(255, 0, 0)`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("window.getDefaultComputedStyle()")}}
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue()")}}
- [Abgelöster Wert](/de/docs/Web/CSS/resolved_value)
