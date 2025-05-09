---
title: Attribut-Reflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}-, {{Glossary("XML", "XML")}}-, {{Glossary("SVG", "SVG")}}- oder anderes {{Glossary("element", "Element")}}, indem es dessen Verhalten verändert oder Metadaten bereitstellt.

Viele Attribute werden im entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Interface _reflektiert_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft im entsprechenden Interface gelesen oder geschrieben werden kann und umgekehrt.
Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut-Getter/Setter

Zuerst sehen wir uns den Standardmechanismus zum Abrufen und Festlegen eines Attributs an, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird.
Um das Attribut abzurufen, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces auf und geben den Attributnamen an.
Um das Attribut festzulegen, verwenden Sie die Methoden [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), wobei der Attributname und der neue Wert angegeben werden.

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

Für ein {{htmlelement("input")}} wird das `placeholder`-Attribut durch die Eigenschaft [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) reflektiert.
Unter Verwendung des gleichen HTML wie zuvor:

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

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`.
Dies ist nicht immer der Fall: Eigenschaften werden normalerweise gemäß der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies gilt insbesondere für mehrteilige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie z. B. den Bindestrich.
Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut durch die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) reflektiert.

### Reflektierte boolesche Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} sind ein wenig anders als andere, da sie nicht mit einem Namen und einem Wert deklariert werden müssen.
Zum Beispiel hat das folgende Checkbox-{{htmlelement("input")}}-Element das `checked`-Attribut und wird beim Anzeigen aktiviert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn die Eingabe aktiviert ist, oder `null`, wenn sie nicht aktiviert ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den aktivierten Zustand zurück.
Ansonsten sind boolesche reflektierte Attribute identisch mit anderen reflektierten Attributen.

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt gilt für [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Die gleichen Überlegungen gelten wahrscheinlich für andere/zukünftige Attribute, die Elementreferenzen reflektieren.

Einige Attribute nehmen Element*Referenzen* als Werte: entweder einen Element-`id`-Wert oder eine durch Leerzeichen getrennte Zeichenfolge von Element-`id`-Werten.
Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Verbindung stehen oder Informationen enthalten, die vom Attribut benötigt werden.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die den `id`-Werten entsprechen, mit einigen Einschränkungen.

Zum Beispiel listet das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) die `id`-Werte von Elementen auf, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten.
Das untenstehende HTML zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit `id`-Werten von `label_1`, `label_2` und `label_3` hat:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die Eigenschaft [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) reflektiert, die das Array von Elementen zurückgibt, die die entsprechenden `id`-Werte haben.
Das Attribut und die entsprechende Eigenschaft können wie gezeigt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was man aus dem obigen Code beachten sollte, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten — die Eigenschaft reflektiert das Attribut nicht _direkt_, weil der Verweis `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass ein Verweis nicht übereinstimmt, da er [außerhalb des Gültigkeitsbereichs](#gültigkeitsbereich_der_elementreferenz) des Elements liegt, wie in einem folgenden Abschnitt erläutert.

Wir können die Elemente im Eigenschaftsarray durchlaufen, um in diesem Fall den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als die Verwendung des Attributs, da wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Bereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Festlegen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut widergespiegelt und umgekehrt.
Für reflektierte Elementreferenzen ist dies nicht der Fall.
Stattdessen löscht das Festlegen der Eigenschaft (unset) das Attribut, sodass die Eigenschaft und das Attribut einander nicht mehr reflektieren.
Zum Beispiel, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Anfangswert von `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir ihn von der DOM-API aus festlegen, wird das Attribut auf `""` zurückgesetzt:

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

Dies macht Sinn, weil man ansonsten Elemente der Eigenschaft zuordnen könnte, die keinen `id`-Verweis haben und daher im Attribut nicht dargestellt werden können.

Das Festlegen des Attributwertes stellt die Beziehung zwischen Attribut und Eigenschaft wieder her.
Fortsetzung des obigen Beispiels:

```js
inputElement.setAttribute("aria-labelledby", "input1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Das von der Eigenschaft zurückgegebene Array ist statisch, sodass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut zu bewirken.
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftenarray reflektiert werden.

### Gültigkeitsbereich der Elementreferenz

Elementreferenzen können nur mit Elementen übereinstimmen, die "im Gültigkeitsbereich" mit dem referenzierenden Element stehen.

Ein HTML-Dokument wird in JavaScript als hierarchischer Baum von Objekten dargestellt, der als [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) bezeichnet wird.
Elemente innerhalb des Modells können "Kind"-DOMs enthalten und kapseln, die innerhalb eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als [Shadow DOMs](/de/docs/Web/API/Web_components#shadow_dom_2) bezeichnet werden und die wiederum ihre eigenen Shadow DOMs verschachteln können.

Der Gültigkeitsbereich eines referenzierenden Elements ist das DOM, in dem es definiert ist, sowie alle übergeordneten DOMs, in denen dieses DOM verschachtelt ist.
Shadow DOMs, die verschachtelte Kinder des DOMs sind, in dem das referenzierende Element definiert ist, liegen außerhalb des Gültigkeitsbereichs.

Das bedeutet, dass ein Element im DOM andere Elemente im DOM referenzieren kann, da sie im Gültigkeitsbereich liegen, nicht aber in einem Shadow DOM.
Zum Beispiel wäre im untenstehenden HTML das Element mit der `id` von `label 3` nicht im Gültigkeitsbereich für das {{htmlelement("input")}}-Element im DOM und würde nicht in der entsprechenden Eigenschaft reflektiert werden.

```html
<div id="in_dom">
  <span id="label_1">(Label 1 Text)</span>
  <input aria-labelledby="label_1 label_2 label_3" />
  <span id="label_2">(Label 2 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">(Label 3 Text)</span>
  </template>
</div>
```

Ein Element in einem Shadow-Root kann jedoch sowohl Elemente im Shadow-Root als auch im DOM referenzieren.
Im folgenden HTML wäre `label 3` in der reflektierten Eigenschaft vorhanden.

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

Beachten Sie, dass ein referenziertes Element zunächst "im Gültigkeitsbereich" sein kann und dann in einen verschachtelten Shadow-Root-Bereich verschoben wird.
In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgelistet, aber nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass, wenn das Element wieder in den Gültigkeitsbereich verschoben wird, es erneut in der reflektierten Eigenschaft vorhanden sein wird.

### Zusammenfassung der Attribut/Eigenschaft-Beziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Nur Attribut-`id`-Werte, die mit [Elementen im Gültigkeitsbereich](#gültigkeitsbereich_der_elementreferenz) übereinstimmen, werden in der Eigenschaft reflektiert.
- Das Festlegen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut reflektieren sich nicht mehr gegenseitig.
  Wenn das Attribut gelesen wird, mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), ist der Wert `""`.
- Das Festlegen des Attributs, mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), setzt auch die Eigenschaft und stellt die "Reflexionsbeziehung" wieder her.
- Das Festlegen des Attributs mit einem Wertverweis, der anschließend außerhalb des Gültigkeitsbereichs verschoben wird, führt dazu, dass das entsprechende Element aus dem Eigenschaftsarray entfernt wird.
  Beachten Sie jedoch, dass das Attribut den Verweis weiterhin enthält, und wenn das Element wieder in den Gültigkeitsbereich verschoben wird, wird die Eigenschaft das Element erneut enthalten (d.h. die Beziehung wird wiederhergestellt).
