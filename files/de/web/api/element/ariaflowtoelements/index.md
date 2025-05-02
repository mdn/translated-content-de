---
title: "Element: ariaFlowToElements-Eigenschaft"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaFlowToElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die eine alternative Lesereihenfolge des Inhalts bieten und die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers außer Kraft setzen. Wenn nur ein Element angegeben ist, ist dies das nächste Element in der Lesereihenfolge. Wenn mehrere Elemente angegeben sind, stellt jedes Element einen möglichen Pfad dar, der dem Benutzer zur Auswahl angeboten werden sollte.

Das Thema [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attributs, um eine alternative Lesereihenfolge festzulegen. Im Gegensatz zu `aria-flowto` müssen die der Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen In-Scope-Elementen übereinstimmen. Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Scope finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### Das flow-to-Element abrufen

Dieses Beispiel demonstriert den normalen Ablauf durch drei Elemente `section1`, `section2`, `section3` in Reihenfolge und eine alternative Reihenfolge, die von `section1` zu `section3` springt und wieder zurück. Beachten Sie, dass das Beispiel veranschaulichend ist, es sei denn, Sie haben Hilfsmittel zur Barrierefreiheit aktiviert: Wir folgen tatsächlich nicht diesem alternativen Pfad.

#### HTML

Das HTML definiert drei {{htmlelement("div")}}-Elemente, die Abschnitte definieren, mit einer Klasse `"section"` und `id`-Werten: `section1`, `section2` und `section3`. Jeder Abschnitt hat einen normalen Ablauf, der durch seine Reihenfolge definiert ist, beginnend bei `section1` und endend bei `section3`. Ein alternativer Ablauf wird in den Abschnitten 1 und 3 mithilfe des Attributs `aria-flowto` definiert.

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

Der Code prüft zuerst, ob `ariaFlowToElements` unterstützt wird, und protokolliert, falls dies der Fall ist, seinen Wert. Er iteriert dann durch die Abschnitte und protokolliert die Abschnitts-`id`, den `aria-flowto`-Attributswert und den `ariaFlowToElements`-Eigenschaftswert.

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

Das untenstehende Protokoll zeigt jeden der Abschnitte (identifiziert durch `id`) und die entsprechenden flow-to-Element-IDs, die möglicherweise von Hilfsmitteln zur Barrierefreiheit ausgewählt werden. Wir stellen fest, dass das Attribut und die Eigenschaft dieselben flow-to-Elemente identifizieren.

{{EmbedLiveSample("Get the flow-to element","100%","570px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_-Leitfaden.
