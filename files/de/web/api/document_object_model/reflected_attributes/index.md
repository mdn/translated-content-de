---
title: Attribut-Reflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}-, {{Glossary("XML", "XML")}}-, {{Glossary("SVG", "SVG")}}- oder anderes {{Glossary("element", "Element")}}, indem es dessen Verhalten verändert oder Metadaten bereitstellt.

Viele Attribute werden im entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Interface _reflektiert_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft des entsprechenden Interface gelesen oder geschrieben werden kann, und umgekehrt.
Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Festlegen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut-Getter/Setter

Zuerst sehen wir uns den Standardmechanismus zum Abrufen und Festlegen eines Attributs an, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird.
Um das Attribut zu erhalten, rufen Sie die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute)-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces auf und spezifizieren den Attributnamen.
Um das Attribut festzulegen, rufen Sie die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)-Methoden auf und geben den Attributnamen und den neuen Wert an.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut abzurufen und festzulegen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}}-Element wird das `placeholder`-Attribut durch die [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)-Eigenschaft reflektiert.
Mit dem gleichen HTML wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Kann der gleiche Vorgang natürlicher mit der `placeholder`-Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`.
Das ist nicht immer der Fall: Eigenschaften werden normalerweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies gilt insbesondere für mehrwortige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht zulässig sind, wie z.B. ein Bindestrich.
Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut durch die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked)-Eigenschaft reflektiert.

### Reflektierte boolesche Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} sind etwas anders als andere, da sie nicht mit einem Namen und einem Wert deklariert werden müssen.
Zum Beispiel hat das Checkbox-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen aktiviert sein:

```html
<input type="checkbox" checked />
```

Die [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)-Methode gibt `""` zurück, wenn das Input aktiviert ist oder `null`, wenn es nicht aktiviert ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den aktivierten Zustand zurück.
Andernfalls sind boolesche reflektierte Attribute wie alle anderen reflektierten Attribute.

### Enumerierte reflektierte Attribute

In HTML sind [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge an Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

```html
<p dir="rtl">Right to left</p>
```

Wie bei HTML-Tag-Namen sind HTML-enumerierte Attribute und ihre Werte nicht empfindlich für Groß- und Kleinschreibung, daher funktionieren auch `LTR`, `RTL` und `AUTO`.

```html
<p dir="RTL">Right to left</p>
```

Die per IDL-reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), gibt immer einen kanonischen Wert zurück, wie in der Spezifikation angegeben (in diesem Beispiel kleingeschriebene Werte). Das Setzen des Wertes serialisiert ihn auch in die kanonische Form.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternativ können Sie die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute)-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces verwenden. Es wird den Attributwert aus dem HTML unverändert abrufen.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt gilt für [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Dieselben Überlegungen gelten wahrscheinlich für andere/zukünftige Attribute, die Elementreferenzen reflektieren.

Einige Attribute nehmen Element-_Referenzen_ als Werte an: entweder einen `id`-Wert eines Elements oder eine durch Leerzeichen getrennte Zeichenkette von `id`-Werten von Elementen.
Diese `id`-Werte beziehen sich auf andere Elemente, die dem Attribut zugeordnet sind oder Informationen enthalten, die das Attribut benötigt.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von zugehörigen [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die die `id`-Werte erfüllen, mit einigen Einschränkungen.

Zum Beispiel listet das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut die `id`-Werte von Elementen auf, die den zugänglichen Namen eines Elements in ihrem inneren Text enthalten.
Das folgende HTML zeigt dies für ein {{htmlelement("input")}}-Element, das ein Label in {{htmlelement("span")}}-Elementen hat, mit den `id`-Werten `label_1`, `label_2` und `label_3`:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)-Eigenschaft reflektiert, die das Array der Elemente zurückgibt, die die entsprechenden `id`-Werte haben.
Das Attribut und die entsprechende Eigenschaft können wie folgt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was aus dem obigen Code hervorgeht, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten — die Eigenschaft reflektiert das Attribut nicht _direkt_, weil die Referenz `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass eine Referenz nicht passt, weil die `id` [außerhalb des Geltungsbereichs des Elements](#geltungsbereich_von_element-id-referenzen) ist.
Dies kann passieren, wenn das referenzierte Element nicht im selben DOM oder Shadow-DOM wie das Element ist, da ids nur im Bereich gültig sind, in dem sie deklariert wurden.

Wir können die Elemente im Eigenschaftsarray durchlaufen, in diesem Fall, um den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als das Attribut zu verwenden, da wir nicht zuerst die Elementreferenzen holen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Geltungsbereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut reflektiert und umgekehrt.
Für reflektierte Elementreferenzen ist dies nicht der Fall.
Stattdessen löscht (entfernt) das Setzen der Eigenschaft das Attribut, sodass die Eigenschaft und das Attribut sich nicht mehr gegenseitig reflektieren.
Zum Beispiel, bei folgendem HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Anfangswert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir ihn mit der DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

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

Dies macht Sinn, da Sie sonst Elemente an die Eigenschaft zuweisen könnten, die keine `id`-Referenz haben und daher nicht im Attribut dargestellt werden können.

Das Setzen des Attributwerts stellt die Beziehung zwischen Attribut und Eigenschaft wieder her.
Fortsetzung des obigen Beispiels:

```js
inputElement.setAttribute("aria-labelledby", "label_1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Das Array, das von der Eigenschaft zurückgegeben wird, ist statisch, sodass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut zu bewirken.
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray reflektiert werden.

### Geltungsbereich von Element-Id-Referenzen

Attribut-Elementreferenzen können sich nur auf andere Elemente beziehen, die im gleichen DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) sind, da Element-ids nur im Bereich, in dem sie deklariert sind, gültig sind.

Dies können wir im folgenden Code sehen.
Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des {{htmlelement("input")}}-Elements verweist auf die Elemente mit den ids `label_1`, `label_2` und `label_3`.
`label_3` ist jedoch in diesem Fall keine gültige id, da es nicht im selben Bereich wie das {{htmlelement("input")}}-Element definiert ist.
Daher wird das Label nur von den Elementen mit den ids `label_1` und `label_2` stammen.

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

### Geltungsbereich von reflektierten Elementreferenzen

Bei der Verwendung der [Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Bereichsregeln etwas anders.
Um im Bereich zu sein, muss ein Ziel-Element im gleichen DOM wie das referenzierende Element oder in einem übergeordneten DOM sein.
Elemente in anderen DOMs, einschließlich Shadow DOMs, die Kinder oder Gleichrangige des referenzierenden DOMs sind, sind außerhalb des Bereichs.

Das folgende Beispiel zeigt den Fall, in dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel gesetzt wird, zusammen mit den Elementen mit den ids `label_1` und `label_2`, die im gleichen Shadow-Root deklariert sind.
Dies funktioniert, weil alle Zielelemente im Bereich des referenzierenden Elements liegen.

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

Der gleichwertige Code mit einem Element im DOM, das ein anderes im Shadow DOM referenziert, würde nicht funktionieren, da Zielelemente, die in verschachtelten Shadow DOMs sind, nicht im Bereich sind:

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

Beachten Sie, dass ein Element ursprünglich "im Bereich" sein kann und dann aus dem Bereich in einen verschachtelten Shadow-Root verschoben wird.
In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgeführt, jedoch nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass, wenn das Element wieder in den Bereich verschoben wird, es wieder in der reflektierten Eigenschaft vorhanden ist.

### Zusammenfassung der Attribut/Eigenschafts-Beziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attribut-Element-`id`-Referenzen sind nur [im Bereich](#geltungsbereich_von_element-id-referenzen) für Ziel-Elemente gültig, die im selben DOM oder Shadow DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen reflektieren, können Elemente im gleichen Bereich oder einem übergeordneten Bereich anvisieren. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut reflektieren sich nicht mehr gegenseitig.
  Wenn die Attribute mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen werden, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Reflexionsbeziehung" wieder her.
- Wenn das Attribut mit einem Wert-Referenz gesetzt wird, die anschließend aus dem Bereich verschoben wird, wird das entsprechende Element aus dem Eigenschaftsarray entfernt.
  Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder in den Bereich verschoben wird, enthält die Eigenschaft wieder das Element (d.h. die Beziehung wird wiederhergestellt).
