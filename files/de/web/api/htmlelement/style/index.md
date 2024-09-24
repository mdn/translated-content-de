---
title: "HTMLElement: Eigenschaft style"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 476fb44932d56c0f50628a620348cd77f411b5ab
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des {{domxref("HTMLElement")}} gibt den _inline_ Stil eines Elements in Form eines dynamischen {{domxref("CSSStyleDeclaration")}}-Objekts zurück. Dieses Objekt enthält eine Liste aller Stil-Eigenschaften für das Element mit Werten, die nur für die Attribute zugewiesen sind, die im inline-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements definiert sind.

Abkürzende Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ihr ein {{domxref("CSSStyleDeclaration")}}-Objekt zuzuweisen. Dennoch ist es möglich, einen Inline-Stil festzulegen, indem Sie direkt eine _Zeichenkette_ an die `style`-Eigenschaft zuweisen. In diesem Fall wird die Zeichenkette an {{domxref("CSSStyleDeclaration.cssText")}} weitergeleitet. Wenn Sie `style` auf diese Weise verwenden, werden alle Inline-Stile des Elements vollständig überschrieben.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem {{domxref("CSSStyleDeclaration")}}-Objekt festzulegen, um bestimmte Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Identifiers umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch zu `cssFloat` umgewandelt. Alle modernen Browser unterstützen jetzt die direkte Verwendung von `float` in JavaScript, um auf die `float`-CSS-Eigenschaft zuzugreifen, aber `cssFloat` wird in älteren Browsern verwendet und als Alias auch in modernen Browsern weiterhin unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "Camelcase-Schreibweise")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat im CSS-Cascade die gleiche Priorität wie eine über das `style`-Attribut gesetzte Inline-Stil-Deklaration.

## Wert

Ein dynamisches {{domxref("CSSStyleDeclaration")}}-Objekt.

## Beispiele

### Abrufen von Stilinformationen

Der folgende Codeausschnitt demonstriert, wie sich die über die `style`-Eigenschaft des Elements erhaltenen Werte auf den Stil beziehen, der im HTML-Attribut festgelegt ist:

```html
<!doctype html>
<html lang="en-US">
  <body style="font-weight:bold">
    <div style="border-top: 1px solid blue; color:red" id="elt">
      An example div
    </div>
    <pre id="out"></pre>
  </body>
</html>
```

```js
const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// Wir durchlaufen alle Stile des Elements mit `for...in`
for (const prop in elementStyle) {
  // Wir überprüfen, ob die Eigenschaft zur CSSStyleDeclaration-Instanz gehört
  // Wir stellen auch sicher, dass die Eigenschaft ein numerischer Index ist (was auf einen Inline-Stil hinweist)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht im `style`-Attribut des Elements selbst definiert ist. Vielmehr wird es von der Definition seines übergeordneten Elements geerbt. Beachten Sie auch, dass die Kurzform-Eigenschaft {{cssxref("border-top")}}, die im `style`-Attribut definiert ist, nicht direkt aufgelistet wird. Vielmehr wird sie durch die drei entsprechenden Langform-Eigenschaften ersetzt ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- HTML-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style)
