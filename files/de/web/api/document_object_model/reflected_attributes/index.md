---
title: Attribut-Reflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: 42d358da579e764949d00470a6d561f75082703f
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder anderes {{Glossary("element", "Element")}}, verändert dessen Verhalten oder liefert Metadaten.

Viele Attribute werden im entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Interface _reflektiert_. Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft auf dem entsprechenden Interface gelesen oder geschrieben werden kann, und umgekehrt. Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als der Zugriff auf Attributwerte mittels der Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut Getter/Setter

Zuerst betrachten wir den Standardmechanismus zum Abrufen und Setzen eines Attributs, der verwendet werden kann, unabhängig davon, ob das Attribut reflektiert wird. Um das Attribut abzurufen, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces auf und geben den Attributnamen an. Zum Setzen des Attributs rufen Sie die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, wobei Sie den Attributnamen und den neuen Wert angeben.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut abzurufen und zu setzen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}}-Element wird das `placeholder`-Attribut durch die Eigenschaft [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) reflektiert. Mit dem gleichen HTML wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Die gleiche Operation kann auf natürlichere Weise unter Verwendung der `placeholder`-Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft gleich sind: `placeholder`. Dies ist nicht immer der Fall: Eigenschaften werden normalerweise gemäß der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt. Dies gilt insbesondere für mehrteilige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie z.B. den Bindestrich. Zum Beispiel wird das Attribut [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) durch die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) reflektiert.

### Reflektierte boolesche Attribute

{{Glossary("Boolean/HTML", "Boole'sche Attribute")}} unterscheiden sich etwas von anderen darin, dass sie nicht mit Name und Wert angegeben werden müssen. Zum Beispiel hat das Checkbox-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen als ausgewählt markiert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabefeld markiert ist, oder `null`, wenn es nicht markiert ist. Die entsprechende Eigenschaft [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked) gibt `true` oder `false` für den markierten Zustand zurück. Ansonsten sind boolesche reflektierte Attribute wie alle anderen reflektierten Attribute.

### Reflektierte aufzählbare Attribute

In HTML sind [aufzählbare Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einem begrenzten, vordefinierten Satz von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

```html
<p dir="rtl">Right to left</p>
```

Wie bei HTML-Tag-Namen sind HTML-auflistbare Attribute und ihre Werte nicht case-sensitive, so dass `LTR`, `RTL` und `AUTO` ebenfalls funktionieren.

```html
<p dir="RTL">Right to left</p>
```

Die IDL-reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), gibt immer einen kanonischen Wert zurück, wie er in der Spezifikation angegeben ist (in diesem Beispiel in Kleinbuchstaben). Wenn der Wert gesetzt wird, wird er auch in die kanonische Form serialisiert.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternativ können Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces verwenden. Sie holt den Attributwert unverändert aus dem HTML.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt bezieht sich auf [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Es ist wahrscheinlich, dass die gleichen Überlegungen auf andere/zukünftige Attribute zutreffen, die Elementreferenzen reflektieren.

Einige Attribute nehmen Elemente _Referenzen_ als Werte: entweder einen Element-`id`-Wert oder einen durch Leerzeichen getrennten String von Element-`id`-Werten. Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Beziehung stehen oder Informationen enthalten, die das Attribut benötigt. Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die den `id`-Werten entsprechen, mit einigen Vorbehalten.

Zum Beispiel listet das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut die `id`-Werte der Elemente auf, die den zugänglichen Namen für ein Element in ihrem Inneren Text enthalten. Das untenstehende HTML zeigt dies für ein {{htmlelement("input")}}, das ein Label definiert hat, mit {{htmlelement("span")}}-Elementen mit `id`-Werten von `label_1`, `label_2` und `label_3`:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die Eigenschaft [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) reflektiert, die das Array von Elementen zurückgibt, die die entsprechenden `id`-Werte haben. Das Attribut und die entsprechende Eigenschaft können wie gezeigt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was Sie aus dem obigen Code bemerken sollten, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten — die Eigenschaft reflektiert das Attribut nicht _direkt_, da die Referenz `label_3` kein entsprechendes Element hat. Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil die `id` für das Element [außerhalb des Gültigkeitsbereichs](#element-id-referenzbereich) ist. Dies kann passieren, wenn das referenzierte Element nicht im gleichen DOM oder Shadow DOM wie das Element ist, da ids nur im Bereich gültig sind, in dem sie deklariert wurden.

Wir können die Elemente im Eigenschafts-Array durchlaufen, in diesem Fall um den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als das Attribut zu verwenden, da wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Bereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Bei normal reflektierten Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut reflektiert und umgekehrt. Bei reflektierten Elementreferenzen ist dies nicht der Fall. Stattdessen löscht das Setzen der Eigenschaft (set) das Attribut, sodass die Eigenschaft und das Attribut sich gegenseitig nicht mehr reflektieren. Zum Beispiel, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der anfängliche Wert von `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir es von der DOM-API aus setzen, wird das Attribut auf `""` zurückgesetzt:

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

Das macht Sinn, denn andernfalls könnte man Elemente der Eigenschaft zuweisen, die keine `id`-Referenz haben und daher nicht im Attribut dargestellt werden können.

Das Setzen des Attributwerts stellt die Beziehung zwischen dem Attribut und der Eigenschaft wieder her. Fortsetzung des obigen Beispiels:

```js
inputElement.setAttribute("aria-labelledby", "label_1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Das von der Eigenschaft zurückgegebene Array ist statisch, so dass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut zu verursachen. Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschafts-Array widergespiegelt werden.

### Element-id-Referenzbereich

Attribut-Elementreferenzen können sich nur auf andere Elemente beziehen, die im gleichen DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) sind, weil Element-ids nur im Bereich gültig sind, in dem sie deklariert werden.

Wir können dies im folgenden Code sehen. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des {{htmlelement("input")}}-Elements bezieht sich auf die Elemente mit den ids `label_1`, `label_2` und `label_3`. `label_3` ist in diesem Fall jedoch keine gültige id, weil es nicht im gleichen Bereich wie das {{htmlelement("input")}}-Element definiert ist. Dadurch wird das Label nur aus den Elementen mit den ids `label_1` und `label_2` kommen.

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

### Bereich der reflektierten Elementreferenzen

Bei Verwendung der [Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie z. B. [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Bereichsregeln etwas anders. Um im Gültigkeitsbereich zu sein, muss ein Zielelement im gleichen DOM wie das referenzierende Element sein oder ein übergeordnetes DOM. Elemente in anderen DOMs, einschließlich shadow DOMs, die Kinder oder Peers des referenzierenden DOMs sind, sind außerhalb des Gültigkeitsbereichs.

Das folgende Beispiel zeigt den Fall, bei dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel gesetzt wird, zusammen mit den Elementen mit `label_1` und `label_2`, die im gleichen Shadow-Root deklariert sind. Dies funktioniert, weil alle Zielelemente im Gültigkeitsbereich für das referenzierende Element sind.

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

Der gleichwertige Code mit einem Element im DOM, das ein anderes im Shadow DOM referenziert, würde nicht funktionieren, da Zielelemente, die in verschachtelten Shadow DOMs sind, nicht im Gültigkeitsbereich sind:

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

Beachten Sie, dass ein Element anfangs "im Bereich" sein kann und dann außerhalb des Bereichs in einen verschachtelten Shadow Root verschoben wird. In diesem Fall wird das referenzierte Element immer noch im Attribut aufgeführt, aber nicht in der Eigenschaft zurückgegeben. Beachten Sie jedoch, dass wenn das Element wieder in den Bereich zurückversetzt wird, es erneut in der reflektierten Eigenschaft enthalten sein wird.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attributelement-`id`-Referenzen sind nur [im Gültigkeitsbereich](#element-id-referenzbereich) für Zielelemente, die im gleichen DOM oder Shadow DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen reflektieren, können auf Elemente im gleichen Bereich oder einem übergeordneten Bereich zielen. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut reflektieren sich gegenseitig nicht mehr.
  Wenn die Attribute gelesen werden, mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), ist der Wert `""`.
- Das Setzen des Attributs, mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), setzt auch die Eigenschaft und stellt die "Reflektionsbeziehung" wieder her.
- Das Setzen des Attributswerts mit einer Referenz, die anschließend aus dem Gültigkeitsbereich verschoben wird, führt dazu, dass das entsprechende Element aus dem Eigenschafts-Array entfernt wird. Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder im Gültigkeitsbereich ist, wird das Element erneut in der Eigenschaft enthalten sein (d.h. die Beziehung wird wiederhergestellt).
