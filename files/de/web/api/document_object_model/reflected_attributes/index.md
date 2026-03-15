---
title: Attributreflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder ein anderes {{Glossary("element", "Element")}}, indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Viele Attribute werden in der entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model) Schnittstelle _reflektiert_. Das bedeutet, dass der Attributwert direkt in JavaScript über eine Eigenschaft in der entsprechenden Schnittstelle gelesen oder geschrieben werden kann und umgekehrt. Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element) Schnittstelle.

Dieser Leitfaden gibt einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut getter/setter

Zunächst sehen wir uns den Standardmechanismus zum Abrufen und Setzen eines Attributs an, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird oder nicht. Um das Attribut zu erhalten, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) der [`Element`](/de/docs/Web/API/Element) Schnittstelle auf und geben Sie den Attributnamen an. Zum Setzen des Attributs verwenden Sie die Methoden [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), wobei der Attributname und der neue Wert angegeben werden.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder) Attribut zu erhalten oder zu setzen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}} wird das `placeholder` Attribut durch die [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) Eigenschaft reflektiert. Mit demselben HTML wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Kann dieselbe Operation natürlicher mit der `placeholder` Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`. Das ist nicht immer der Fall: Eigenschaften werden in der Regel gemäß der {{Glossary("Camel_case", "camelCase")}} Konvention benannt. Dies gilt insbesondere für mehrteilige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie der Bindestrich. Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut durch die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) Eigenschaft reflektiert.

### Boolean reflektierte Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} unterscheiden sich ein wenig von anderen, da sie nicht mit einem Namen und einem Wert deklariert werden müssen. Zum Beispiel hat das {{htmlelement("input")}} Kontrollkästchen-Element unten das `checked` Attribut und wird beim Anzeigen aktiviert sein:

```html
<input type="checkbox" checked />
```

Die [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) Methode wird `""` zurückgeben, wenn das Eingabefeld aktiviert ist, oder `null`, wenn es nicht aktiviert ist. Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked) Eigenschaft gibt `true` oder `false` für den Aktivierungszustand zurück. Ansonsten sind boolesche reflektierte Attribute die gleichen wie andere reflektierte Attribute.

### Enumerierte reflektierte Attribute

In HTML sind [aufzählende Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Zum Beispiel hat das globale HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut drei gültige Werte: `ltr`, `rtl` und `auto`.

```html
<p dir="rtl">Right to left</p>
```

Wie bei HTML-Tag-Namen sind HTML-aufzählende Attribute und ihre Werte nicht case-sensitiv, sodass auch `LTR`, `RTL` und `AUTO` funktionieren.

```html
<p dir="RTL">Right to left</p>
```

Die IDL-reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), gibt immer einen kanonischen Wert gemäß der Spezifikation zurück (in diesem Beispiel in Kleinbuchstaben). Das Setzen des Wertes serialisiert ihn auch in die kanonische Form.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternativ können Sie die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle verwenden. Diese erhält den Attributwert aus HTML ohne Modifikationen.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt gilt für [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Dieselben Überlegungen gelten wahrscheinlich auch für andere/zukünftige Attribute, die Elementreferenzen reflektieren.

Einige Attribute nehmen Element _Referenzen_ als Werte: entweder einen Element `id` Wert oder eine leerzeichengetrennte Zeichenkette von Element `id` Werten. Diese `id` Werte beziehen sich auf andere Elemente, die mit dem Attribut in Verbindung stehen oder Informationen enthalten, die vom Attribut benötigt werden. Diese Attribute werden durch eine entsprechende Eigenschaft als ein Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die zu den `id` Werten passen, mit einigen Einschränkungen.

Zum Beispiel listet das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut die `id` Werte von Elementen auf, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten. Das folgende HTML zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}} Elementen hat, deren `id` Werte `label_1`, `label_2` und `label_3` sind:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) Eigenschaft reflektiert, die das Array der Elemente zurückgibt, die die entsprechenden `id` Werte haben. Das Attribut und die entsprechende Eigenschaft können wie gezeigt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was aus dem obigen Code zu beachten ist, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten – die Eigenschaft reflektiert das Attribut nicht _direkt_, da die Referenz `label_3` kein entsprechendes Element hat. Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil die `id` [außerhalb des Geltungsbereichs für das Element liegt](#element-id-referenzbereich). Dies kann passieren, wenn das referenzierte Element nicht im selben DOM oder Shadow DOM wie das Element ist, da ids nur im Bereich gültig sind, in dem sie deklariert sind.

Wir können die Elemente im Eigenschaftsarray durchlaufen, um in diesem Fall den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als die Verwendung des Attributs, weil wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Geltungsbereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut reflektiert und umgekehrt. Bei reflektierten Elementreferenzen ist dies nicht der Fall. Stattdessen löscht (setzt zurück) das Setzen der Eigenschaft das Attribut, sodass die Eigenschaft und das Attribut nicht länger einander reflektieren. Zum Beispiel, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der anfängliche Wert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir es über die DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

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

Das macht Sinn, weil Sie sonst Elemente der Eigenschaft zuordnen könnten, die keine `id` Referenz haben und daher nicht im Attribut dargestellt werden können.

Das Setzen des Attributwertes stellt die Beziehung zwischen Attribut und Eigenschaft wieder her. Fortsetzung des obigen Beispiels:

```js
inputElement.setAttribute("aria-labelledby", "label_1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Das von der Eigenschaft zurückgegebene Array ist statisch, sodass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut zu verursachen. Wenn ein Array der Eigenschaft zugeordnet wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray widergespiegelt werden.

### Element-id-Referenzbereich

Attributreferenzen können sich nur auf andere Elemente beziehen, die sich im selben DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) befinden, weil Element-ids nur im Bereich gültig sind, in dem sie deklariert sind.

Das sehen wir im folgenden Code. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut des {{htmlelement("input")}} Elements referenziert die Elemente mit den ids `label_1`, `label_2` und `label_3`. Allerdings ist `label_3` in diesem Fall keine gültige id, da es nicht im gleichen Bereich wie das {{htmlelement("input")}} Element definiert ist. Infolgedessen ergibt sich das Label nur aus den Elementen mit den ids `label_1` und `label_2`.

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

Bei Verwendung der [Instanz-Eigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie zum Beispiel [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Bereichsregeln etwas anders. Um im Bereich zu liegen, muss ein Zielelement im selben DOM wie das referenzierende Element oder in einem übergeordneten DOM sein. Elemente in anderen DOMs, einschließlich Shadow DOMs, die Kinder oder Peers des referenzierenden DOMs sind, sind außerhalb des Bereichs.

Das unten stehende Beispiel zeigt den Fall, bei dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel gesetzt wird, zusammen mit den Elementen mit ids `label_1` und `label_2`, die im gleichen Shadow-Root deklariert sind. Dies funktioniert, weil alle Ziel-Elemente im Bereich für das referenzierende Element sind.

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

Der entsprechende Code mit einem Element im DOM, das ein anderes im Shadow DOM referenziert, würde nicht funktionieren, da Zielelemente, die sich in verschachtelten Shadow DOMs befinden, nicht im Bereich sind:

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

Beachten Sie, dass ein Element zunächst „im Bereich“ sein kann und dann aus dem Bereich in ein verschachteltes Shadow-Root verschoben wird. In diesem Fall wird das referenzierte Element immer noch im Attribut aufgeführt, aber nicht in der Eigenschaft zurückgegeben. Beachten Sie jedoch, dass, wenn das Element zurück in den Bereich bewegt wird, es wieder in der reflektierten Eigenschaft vorhanden sein wird.

### Zusammenfassung der Attribut/Eigenschaft Beziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attribut-Element `id` Referenzen sind nur [im Bereich](#element-id-referenzbereich) für Zielelemente, die im selben DOM oder Shadow DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen reflektieren, können auf Elemente im gleichen oder einem übergeordneten Bereich abzielen. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut reflektieren einander nicht mehr. Wenn das Attribut gelesen wird, mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die „Reflexionsbeziehung“ wieder her.
- Das Setzen des Attributs mit einem Wert, der anschließend aus dem Bereich verschoben wird, führt zur Entfernung des entsprechenden Elements aus dem Eigenschaftsarray. Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder in den Bereich verschoben wird, wird die Eigenschaft das Element wieder einbeziehen (d.h. die Beziehung wird wiederhergestellt).
