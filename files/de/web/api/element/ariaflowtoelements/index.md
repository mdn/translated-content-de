---
title: "Element: ariaFlowToElements Eigenschaft"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaFlowToElements`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist ein Array, das das Element oder die Elemente enthält, die eine alternative Lesereihenfolge des Inhalts bereitstellen und die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers überschreiben. Wenn nur ein Element angegeben wird, ist dies das nächste Element in der Lesereihenfolge. Wenn mehrere Elemente angegeben werden, dann stellt jedes Element einen möglichen Pfad dar, der dem Benutzer zur Auswahl angeboten werden soll.

Das Thema [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) enthält weitere Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attributs, um eine alternative Lesereihenfolge festzulegen. Im Gegensatz zu `aria-flowto` müssen die der Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen, im Gültigkeitsbereich befindlichen Elementen übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und dem Gültigkeitsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflektion_ Leitfaden.

## Beispiele

### Das Flow-to-Element abrufen

Dieses Beispiel demonstriert den normalen Fluss durch drei Elemente `section1`, `section2`, `section3` in Reihenfolge und eine alternative Reihenfolge, die von `section1` zu `section3` und zurück springt. Beachten Sie, dass das Beispiel veranschaulichend ist, es sei denn, Sie haben Barrierefreiheitstools laufen: Wir folgen diesem alternativen Pfad tatsächlich nicht.

#### HTML

Das HTML definiert drei {{htmlelement("div")}}-Elemente, die Abschnitte definieren, mit einer Klasse `"section"` und `id`-Werten: `section1`, `section2` und `section3`. Jeder Abschnitt hat einen normalen Fluss, der durch seine Reihenfolge definiert ist, beginnend bei `section1` und endend bei `section3`. Ein alternativer Fluss ist in den Abschnitten 1 und 3 unter Verwendung des `aria-flowto` Attributs definiert.

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

Der Code prüft zuerst, ob `ariaFlowToElements` unterstützt wird und protokolliert, falls ja, dessen Wert. Anschließend wird durch die Abschnitte iteriert und die Abschnitts-`id`, der Wert des `aria-flowto`-Attributs und der Wert der `ariaFlowToElements`-Eigenschaft protokolliert.

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

Das nachfolgende Protokoll zeigt jeden der Abschnitte (identifiziert durch `id`) und die entsprechenden Flow-to-Element-IDs, die ggf. von Barrierefreiheitstools ausgewählt werden könnten. Wir stellen hier fest, dass das Attribut und die Eigenschaft dieselben Flow-to-Elemente identifizieren.

{{EmbedLiveSample("Get the flow-to element", "100%", "570px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflektion_ Leitfaden.
