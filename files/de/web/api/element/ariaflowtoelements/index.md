---
title: "Element: ariaFlowToElements-Eigenschaft"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
l10n:
  sourceCommit: 3b4a7a32fc2fe8cb6bd9a1e62f4ca52e002599ef
---

{{APIRef("DOM")}}

Die **`ariaFlowToElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die eine alternative Lesereihenfolge des Inhalts bereitstellen und die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers überschreiben. Wenn nur ein Element bereitgestellt wird, ist dies das nächste Element in der Lesereihenfolge. Wenn mehrere Elemente bereitgestellt werden, stellt jedes Element einen möglichen Pfad dar, der dem Benutzer zur Auswahl angeboten werden sollte.

Das Thema [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attributs, um eine alternative Lesereihenfolge festzulegen. Im Gegensatz zu `aria-flowto` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die gültige, im Bereich befindliche Elemente entsprechen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Anwendungsbereich finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Reflected attributes_.

## Beispiele

### Holen Sie sich das Flow-to-Element

Dieses Beispiel zeigt den normalen Fluss durch drei Elemente `section1`, `section2`, `section3` in Reihenfolge und eine alternative Reihenfolge, die von `section1` zu `section3` springt und zurück. Beachten Sie, dass das Beispiel illustrativ ist, es sei denn, Sie haben Barrierefreiheitswerkzeuge im Einsatz: Wir folgen diesem alternativen Pfad tatsächlich nicht.

#### HTML

Das HTML definiert drei {{htmlelement("div")}}-Elemente, die Abschnitte mit einer Klasse `"section"` und `id`-Werten definieren: `section1`, `section2` und `section3`. Jeder Abschnitt hat einen normalen Fluss, der durch seine Reihenfolge definiert ist und von `section1` bis `section3` reicht. Ein alternativer Fluss wird in den Abschnitten 1 und 3 unter Verwendung des `aria-flowto`-Attributs definiert.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html
<div id="section1" class="section" aria-flowto="section3">
  <h2>Section 1</h2>
  <p>First section in normal flow. Section 3 is alternate flow.</p>
  <a href="#section2">Jump to Section 2 (normal flow)</a>
</div>

<div id="section2" class="section">
  <h2>Section 2</h2>
  <p>Second section in normal flow.</p>
  <a href="#section3">Jump to Section 3 (normal flow)</a>
</div>

<div id="section3" class="section" aria-flowto="section1">
  <h2>Section 3</h2>
  <p>
    Third section in normal flow (end of flow). Section 1 is alternate flow.
  </p>
</div>
```

#### JavaScript

Der Code überprüft zunächst, ob `ariaFlowToElements` unterstützt wird und protokolliert, falls ja, dessen Wert. Anschließend wird durch die Abschnitte iteriert, wobei die Abschnitt-`id`, der `aria-flowto`-Attributwert und der `ariaFlowToElements`-Eigenschaftswert protokolliert werden.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaFlowToElements
if ("ariaFlowToElements" in Element.prototype) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sectionDivElement) => {
    log(`${sectionDivElement.id}`);
    log(` aria-flowto: ${sectionDivElement.getAttribute("aria-flowto")}`);
    log(" ariaFlowToElements:");
    // Get the ids of each of the elements in the array
    sectionDivElement.ariaFlowToElements?.forEach((elem) => {
      log(`  id: ${elem.id}`);
    });
  });
} else {
  log("element.ariaFlowToElements: not supported by browser");
}
```

#### Ergebnis

Das untenstehende Log zeigt jeden der Abschnitte (identifiziert durch `id`) und die entsprechenden Flow-to-Element-IDs, die von Barrierefreiheitswerkzeugen ausgewählt werden könnten. Wir stellen hier fest, dass das Attribut und die Eigenschaft die gleichen Flow-to-Elemente identifizieren.

{{EmbedLiveSample("Get the flow-to element","100%","570px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Attribute reflection_.
