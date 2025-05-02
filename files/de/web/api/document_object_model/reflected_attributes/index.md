---
title: Attributspiegelung
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder anderes {{Glossary("element", "Element")}}, indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Viele Attribute werden in der entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Schnittstelle _gespiegelt_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft der entsprechenden Schnittstelle gelesen oder geschrieben werden kann, und umgekehrt.
Die gespiegelten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Dieser Leitfaden bietet einen Überblick über gespiegelte Attribute und deren Verwendung.

## Attribut-Getter/Setter

Zuerst sehen wir uns den Standardmechanismus zum Abrufen und Setzen eines Attributs an, der verwendet werden kann, unabhängig davon, ob das Attribut gespiegelt ist oder nicht.
Um das Attribut zu erhalten, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle auf und geben Sie den Attributnamen an.
Um das Attribut zu setzen, rufen Sie die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, wobei Sie den Attributnamen und den neuen Wert angeben.

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

## Gespiegelte Attribute

Für ein {{htmlelement("input")}}-Element wird das `placeholder`-Attribut von der [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)-Eigenschaft gespiegelt.
Unter Verwendung desselben HTML wie zuvor:

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

Beachten Sie, dass der Name des gespiegelten Attributs und der Eigenschaft gleich ist: `placeholder`.
Das ist nicht immer der Fall: Eigenschaften werden normalerweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies gilt insbesondere für mehrteilige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie z. B. den Bindestrich.
Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut durch die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked)-Eigenschaft gespiegelt.

### Boolesche gespiegelte Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} unterscheiden sich insofern ein wenig von anderen, als sie nicht mit einem Namen und einem Wert deklariert werden müssen.
Zum Beispiel hat das Checkbox-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen markiert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabefeld markiert ist, oder `null`, wenn es nicht markiert ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den markierten Zustand zurück.
Ansonsten sind boolesche gespiegelte Attribute wie alle anderen gespiegelten Attribute.

## Gespiegelte Elemente-Referenzen

> [!NOTE]
> Dieser Abschnitt gilt für [gespiegelte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Die gleichen Überlegungen gelten wahrscheinlich für andere/zukünftige Attribute, die Elementreferenzen spiegeln.

Einige Attribute nehmen Element-_Referenzen_ als Werte: entweder einen Element-`id`-Wert oder eine mit Leerzeichen getrennte Zeichenfolge von Element-`id`-Werten.
Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Zusammenhang stehen oder die vom Attribut benötigte Informationen enthalten.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen gespiegelt, die mit den `id`-Werten übereinstimmen, mit einigen Vorbehalten.

Zum Beispiel listet das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut die `id`-Werte von Elementen auf, die den barrierefreien Namen für ein Element in ihrem inneren Text enthalten.
Das folgende HTML zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit den `id`-Werten von `label_1`, `label_2` und `label_3` hat:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)-Eigenschaft gespiegelt, die das Array von Elementen zurückgibt, die die entsprechenden `id`-Werte haben.
Das Attribut und die entsprechende Eigenschaft können wie gezeigt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was man an dem obigen Code beachten kann, ist, dass das Attribut und die Eigenschaft unterschiedliche Mengen von Elementen enthalten — die Eigenschaft spiegelt das Attribut nicht _direkt_ wider, da die Referenz `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil sie [außerhalb des Bereichs](#element-referenzbereich) für das Element ist, wie in einem folgenden Abschnitt diskutiert.

Wir können die Elemente im Eigenschaftsarray durchlaufen, um in diesem Fall den barrierefreien Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als die Verwendung des Attributs, weil wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir nur mit Elementen arbeiten müssen, von denen wir wissen, dass sie im aktuellen Bereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Für normale gespiegelte Eigenschaften werden Änderungen an der Eigenschaft im entsprechenden Attribut widergespiegelt und umgekehrt.
Für gespiegelte Elementreferenzen ist dies nicht der Fall.
Stattdessen löscht das Setzen der Eigenschaft das Attribut, sodass die Eigenschaft und das Attribut sich nicht mehr gegenseitig widerspiegeln.
Beispielsweise, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der anfängliche Wert von `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir ihn über die DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

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

Dies ist sinnvoll, weil Sie sonst Elemente der Eigenschaft zuweisen könnten, die keine `id`-Referenz haben und daher nicht im Attribut dargestellt werden können.

Das Setzen des Attributwerts stellt die Beziehung zwischen Attribut und Eigenschaft wieder her.
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
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass alle Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray widergespiegelt werden.

### Element-Referenzbereich

Elementreferenzen können nur mit Elementen übereinstimmen, die "im Bereich" mit dem referenzierenden Element sind.

Ein HTML-Dokument wird in JavaScript als ein hierarchischer Baum von Objekten dargestellt, die als [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) bezeichnet werden.
Elemente im Modell können "Kind"-DOMs enthalten und kapseln, die als [Shadow DOMs](/de/docs/Web/API/Web_components#shadow_dom_2) innerhalb eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) bezeichnet werden, die wiederum ihre eigenen Shadow DOMs verschachteln können.

Der Bereich eines referenzierenden Elements ist das DOM, in dem es definiert ist, und alle übergeordneten DOMs, in denen dieses DOM verschachtelt ist.
Shadow DOMS, die verschachtelte Kinder des DOM sind, in dem das referenzierende Element definiert ist, sind außerhalb des Bereichs.

Das bedeutet, dass ein Element im DOM andere Elemente im DOM referenzieren kann, da sie im Bereich sind, jedoch nicht in einem Shadow-DOM.
Zum Beispiel würde in dem unten gezeigten HTML das Element mit der `id` von `label 3` nicht im Bereich für das {{htmlelement("input")}}-Element im DOM sein und würde nicht in der entsprechenden Eigenschaft widergespiegelt.

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

Ein Element in einem Shadow-Root kann jedoch Elemente sowohl im Shadow-Root als auch im DOM referenzieren.
Für das unten gezeigte HTML würde `label 3` in der gespiegelten Eigenschaft vorhanden sein.

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

Beachten Sie, dass ein referenziertes Element anfänglich "im Bereich" sein und dann aus dem Bereich in ein verschachteltes Shadow-Root verschoben werden kann.
In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgeführt, aber nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass, wenn das Element wieder in den Bereich verschoben wird, es wieder in der gespiegelten Eigenschaft vorhanden sein wird.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Nur Attribut-`id`-Werte, die mit [Elementen im Bereich](#element-referenzbereich) übereinstimmen, werden in der Eigenschaft widergespiegelt.
- Das Setzen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut spiegeln sich nicht mehr gegenseitig wider.
  Wenn die Attribute mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen werden, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Spiegelungsbeziehung" wieder her.
- Wenn ein Attribut mit einem Wert-Referenz gesetzt wird, das anschließend aus dem Bereich verschoben wird, wird das entsprechende Element aus dem Eigenschaftsarray entfernt.
  Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder in den Bereich verschoben wird, enthält die Eigenschaft erneut das Element (d. h. die Beziehung wird wiederhergestellt).
