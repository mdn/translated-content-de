---
title: Attribut-Reflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: d8a5165fd3c3b35ea9d07a914459e8d468f62276
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder anderes {{Glossary("element", "Element")}}, verändert dessen Verhalten oder liefert Metadaten.

Viele Attribute werden im entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Interface _reflektiert_. Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft des entsprechenden Interface gelesen oder geschrieben werden kann und umgekehrt. Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und ihre Verwendung.

## Attribut Getter/Setter

Zunächst sehen wir uns den Standardmechanismus zum Abrufen und Setzen eines Attributs an, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird oder nicht. Zum Abrufen des Attributs rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces auf und geben den Attributnamen an. Zum Setzen des Attributs rufen Sie die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf und geben den Attributnamen und den neuen Wert an.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut zu lesen und zu setzen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}} wird das `placeholder`-Attribut durch die Eigenschaft [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) reflektiert. Bei demselben HTML wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Kann dieselbe Operation natürlicher mit der `placeholder`-Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`. Das ist nicht immer der Fall: Eigenschaften werden normalerweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt. Dies ist insbesondere bei mehrgliedrigen Attributnamen der Fall, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie beispielsweise der Bindestrich. Zum Beispiel wird das Attribut [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) durch die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) reflektiert.

### Boolesche reflektierte Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} sind etwas anders als die anderen, da sie nicht mit einem Namen und einem Wert deklariert werden müssen. Zum Beispiel hat das {{htmlelement("input")}}-Element für Checkboxen unten das `checked`-Attribut und wird bei der Anzeige aktiviert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabefeld aktiviert ist, oder `null`, wenn es nicht aktiviert ist. Die entsprechende Eigenschaft [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked) gibt `true` oder `false` für den aktivierten Status zurück. Ansonsten entsprechen boolesche reflektierte Attribute anderen reflektierten Attributen.

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt gilt für [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references). Dieselben Überlegungen gelten wahrscheinlich für andere/ zukünftige Attribute, die Elementreferenzen reflektieren.

Einige Attribute nehmen Element- _Referenzen_ als Werte: entweder einen Element-`id`-Wert oder eine durch Leerzeichen getrennte Zeichenkette von Element-`id`-Werten. Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Zusammenhang stehen oder Informationen enthalten, die das Attribut benötigt. Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die den `id`-Werten entsprechen, mit einigen Einschränkungen.

Zum Beispiel listet das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) die `id`-Werte von Elementen auf, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten. Das HTML unten zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit `id`-Werten von `label_1`, `label_2` und `label_3` enthält:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die Eigenschaft [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) reflektiert, die das Array von Elementen zurückgibt, die die entsprechenden `id`-Werte haben. Das Attribut und die entsprechende Eigenschaft können wie folgt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was man aus dem obigen Code bemerken sollte, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten — die Eigenschaft spiegelt das Attribut nicht _direkt_ wider, da die Referenz `label_3` kein entsprechendes Element hat. Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil die `id` [außerhalb des Gültigkeitsbereichs für das Element](#element-id-referenzbereich) ist. Dies kann passieren, wenn das referenzierte Element nicht im selben DOM oder Shadow DOM wie das Element vorhanden ist, da ids nur im Bereich gültig sind, in dem sie deklariert wurden.

Wir können die Elemente im Eigenschaftsarray durchlaufen, in diesem Fall, um den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als die Verwendung des Attributs, weil wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Bereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Einstellen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Updates der Eigenschaft im entsprechenden Attribut und umgekehrt reflektiert. Für reflektierte Elementreferenzen ist dies nicht der Fall. Stattdessen wird das Attribut beim Setzen der Eigenschaft gelöscht (abgesetzt), sodass die Eigenschaft und das Attribut einander nicht mehr widerspiegeln. Zum Beispiel bei folgendem HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Ausgangswert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir es über die DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

```js
const inputElement = document.querySelector("input");

let attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1 label_2"

// Set attribute using the reflected property
inputElement.ariaLabelledByElements = document.querySelectorAll("span");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// ""
```

Dies ist sinnvoll, da Sie sonst Elemente der Eigenschaft zuweisen könnten, die keine `id`-Referenz haben und daher nicht im Attribut dargestellt werden können.

Das Setzen des Attributwerts stellt die Beziehung zwischen dem Attribut und der Eigenschaft wieder her. Fortsetzung des obigen Beispiels:

```js
inputElement.setAttribute("aria-labelledby", "input1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Das durch die Eigenschaft zurückgegebene Array ist statisch, sodass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut vorzunehmen. Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray widergespiegelt werden.

### Element-id-Referenzbereich

Attribut-Elementreferenzen können sich nur auf andere Elemente beziehen, die im selben DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) vorhanden sind, da Element-ids nur im Bereich gültig sind, in dem sie deklariert wurden.

Wir können dies im folgenden Code sehen. Das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) des {{htmlelement("input")}}-Elements bezieht sich auf die Elemente mit den ids `label_1`, `label_2` und `label_3`. Allerdings ist `label_3` in diesem Fall keine gültige id, da sie nicht im selben Bereich wie das {{htmlelement("input")}}-Element definiert ist. Infolgedessen wird das Label nur aus den Elementen mit den ids `label_1` und `label_2` kommen.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input aria-labelledby="label_1 label_2 label_3" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

### Reflektierter Elementreferenzbereich

Bei Verwendung der [Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie z.B. [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Geltungsregeln etwas anders. Um im Gültigkeitsbereich zu sein, muss sich ein Ziel-Element im selben DOM wie das referenzierende Element oder in einem übergeordneten DOM befinden. Elemente in anderen DOMs, einschließlich Shadow DOMs, die Kinder oder Peers des referenzierenden DOMs sind, sind außerhalb des Gültigkeitsbereichs.

Das folgende Beispiel zeigt den Fall, in dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel festgelegt wurde, zusammen mit den Elementen mit ids `label_1` und `label_2`, die im selben Shadow Root deklariert sind. Dies funktioniert, weil alle Zielelemente im Gültigkeitsbereich für das referenzierende Element liegen.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input id="input" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = host.shadowRoot.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_1"),
  host.shadowRoot.getElementById("label_2"),
  document.getElementById("label_3"),
];
```

Der entsprechende Code, bei dem ein Element im DOM ein weiteres im Shadow DOM referenziert, würde nicht funktionieren, da Ziel-Elemente, die sich in verschachtelten Shadow DOMs befinden, nicht im Gültigkeitsbereich sind:

```html
<div id="in_dom">
  <span id="label_1">(Label 1 Text)</span>
  <input id="input" />
  <span id="label_2">(Label 2 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">(Label 3 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = document.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_3"),
  document.getElementById("label_1"),
  document.getElementById("label_2"),
];
```

Beachten Sie, dass ein Element anfänglich "im Gültigkeitsbereich" sein kann und dann außerhalb des Gültigkeitsbereichs in einen verschachtelten Shadow Root verschoben wird. In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgeführt, jedoch nicht in der Eigenschaft zurückgegeben. Beachten Sie jedoch, dass, wenn das Element in den Gültigkeitsbereich verschoben wird, es wieder in der reflektierten Eigenschaft vorhanden ist.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attribut-Element-`id`-Referenzen sind nur [im Gültigkeitsbereich](#element-id-referenzbereich) für Ziel-Elemente, die im selben DOM oder Shadow DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen widerspiegeln, können auf Elemente im selben oder einem übergeordneten Bereich abzielen. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut und die Eigenschaft und das Attribut spiegeln einander nicht mehr wider. Wenn das Attribut mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen wird, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Reflexionsbeziehung" wieder her.
- Das Setzen des Attributs mit einem Wertebezug, der anschließend aus dem Bereich verschoben wird, führt zur Entfernung des entsprechenden Elements aus dem Eigenschaftsarray. Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder in den Gültigkeitsbereich verschoben wird, wird die Eigenschaft das Element wieder einschließen (d.h. die Beziehung wird wiederhergestellt).
