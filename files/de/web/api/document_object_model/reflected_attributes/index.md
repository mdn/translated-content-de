---
title: Attribut-Reflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder anderes {{Glossary("element", "Element")}}, um sein Verhalten zu ändern oder Metadaten bereitzustellen.

Viele Attribute werden in der entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Schnittstelle _reflektiert_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft auf der entsprechenden Schnittstelle gelesen oder geschrieben werden kann, und umgekehrt.
Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut Getter/Setter

Zuerst sehen wir uns den Standardmechanismus zum Abrufen und Setzen eines Attributs an, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird oder nicht.
Um das Attribut abzurufen, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle auf, wobei der Attributname angegeben wird.
Um das Attribut zu setzen, rufen Sie die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, wobei Sie den Attributnamen und den neuen Wert angeben.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut zu erhalten und zu setzen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}} wird das `placeholder`-Attribut durch die [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)-Eigenschaft reflektiert.
Unter Verwendung des gleichen HTMLs wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Die gleiche Operation kann natürlicher unter Verwendung der `placeholder`-Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`.
Dies ist nicht immer der Fall: Eigenschaften werden normalerweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies gilt insbesondere für mehrteilige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht zulässig sind, wie z.B. das Bindestrich.
Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut durch die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked)-Eigenschaft reflektiert.

### Boolean reflektierte Attribute

{{Glossary("Boolean/HTML", "Boolean-Attribute")}} sind etwas anders, da sie nicht mit einem Namen und einem Wert deklariert werden müssen.
Zum Beispiel hat das Checkbox-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen markiert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabeelement markiert ist, oder `null`, wenn es nicht markiert ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den markierten Zustand zurück.
Andernfalls sind boolean reflektierte Attribute wie alle anderen reflektierten Attribute.

### Enumerierte reflektierte Attribute

In HTML sind [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

```html
<p dir="rtl">Right to left</p>
```

Wie bei HTML-Tag-Namen sind HTML-enumerierte Attribute und ihre Werte nicht case-sensitive, daher funktionieren auch `LTR`, `RTL` und `AUTO`.

```html
<p dir="RTL">Right to left</p>
```

Die IDL-reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), gibt immer einen kanonischen Wert zurück, wie in der Spezifikation angegeben (in diesem Beispiel kleingeschriebene Werte). Das Setzen des Werts serialisiert ihn auch in die kanonische Form.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternativ können Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle verwenden. Sie erhält den Attributwert aus dem HTML ohne Änderungen.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Reflektierte Element-Referenzen

> [!NOTE]
> Dieser Abschnitt gilt für [reflektierte ARIA-Attribute, die Element-Referenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Die gleichen Überlegungen gelten wahrscheinlich für andere/zukünftige Attribute, die Element-Referenzen reflektieren.

Einige Attribute nehmen Element-_Referenzen_ als Werte an: entweder einen Element-`id`-Wert oder eine durch Leerzeichen getrennte Zeichenfolge von Element-`id`-Werten.
Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut verwandt sind oder die Informationen enthalten, die das Attribut benötigt.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objekten reflektiert, die den `id`-Werten entsprechen, mit einigen Vorbehalten.

Beispielsweise listet das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) die `id`-Werte von Elementen auf, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten.
Das folgende HTML zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit `id`-Werten von `label_1`, `label_2` und `label_3` hat:

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

Das erste, was man aus dem obigen Code bemerken sollte, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten — die Eigenschaft spiegelt das Attribut nicht _direkt_ wider, da die Referenz `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass eine Referenz nicht übereinstimmt, da die `id` [für das Element außer Reichweite ist](#element-id-referenzbereich).
Dies kann passieren, wenn sich das referenzierte Element nicht im selben DOM oder Schatten-DOM wie das Element befindet, da IDs nur im Gültigkeitsbereich gültig sind, in dem sie deklariert werden.

Wir können die Elemente im Eigenschaftsarray durchlaufen, in diesem Fall um den zugänglichen Namen aus ihrem inneren Text zu holen (das ist natürlicher als die Verwendung des Attributs, weil wir die Elementreferenzen nicht zuerst holen müssen, um dann die Elemente zu finden, und wir nur mit Elementen arbeiten müssen, von denen wir wissen, dass sie im aktuellen Gültigkeitsbereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Für normal reflektierte Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut reflektiert und umgekehrt.
Bei reflektierten Element-Referenzen ist dies nicht der Fall.
Stattdessen löscht (setzt) das Setzen der Eigenschaft das Attribut, sodass Eigenschaft und Attribut einander nicht mehr widerspiegeln.
Zum Beispiel, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Anfangswert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir ihn von der DOM-API aus setzen, wird das Attribut auf `""` zurückgesetzt:

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

Das ergibt Sinn, weil Sie sonst Elemente der Eigenschaft zuweisen könnten, die keine `id`-Referenz haben und daher im Attribut nicht dargestellt werden können.

Das Setzen des Attributwerts stellt die Beziehung zwischen dem Attribut und der Eigenschaft wieder her.
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
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray widergespiegelt werden.

### Element-id-Referenzbereich

Attribut-Element-Referenzen können sich nur auf andere Elemente beziehen, die sich im gleichen DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) befinden, weil Element-IDs nur im Gültigkeitsbereich gültig sind, in dem sie deklariert werden.

Wir können dies im folgenden Code sehen.
Das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) des {{htmlelement("input")}}-Elements verweist auf die Elemente mit den IDs `label_1`, `label_2` und `label_3`.
`label_3` ist jedoch in diesem Fall keine gültige ID, da es nicht im gleichen Gültigkeitsbereich wie das {{htmlelement("input")}}-Element definiert ist.
Daher wird das Label nur von den Elementen mit den IDs `label_1` und `label_2` stammen.

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

### Reicherter Element-Referenzbereich

Bei der Verwendung der [Instanzeigenschaften, die aus ARIA-Element-Referenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) bei `aria-labelledby`, sind die Zugriffsregeln etwas anders.
Um im Bereich zu sein, muss ein Zielelement im gleichen DOM wie das referenzierende Element oder einem übergeordneten DOM sein.
Elemente in anderen DOMs, einschließlich Schatten-DOMs, die Kinder oder Ebenen des referenzierenden DOMs sind, liegen außerhalb des Bereichs.

Das folgende Beispiel zeigt den Fall, in dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel festgelegt ist, zusammen mit den Elementen mit den IDs `label_1` und `label_2`, die im gleichen Shadow-Root deklariert sind.
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

Der entsprechende Code mit einem Element im DOM, das auf ein im Shadow-DOM liegendes Element verweist, würde nicht funktionieren, weil Zielelemente in verschachtelten Schatten-DOMs nicht im Bereich liegen:

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

Beachten Sie, dass ein Element anfangs "im Bereich" sein kann und dann in einen verschachtelten Schatten-Root außerhalb des Bereichs verschoben wird.
In diesem Fall wird das referenzierte Element immer noch im Attribut aufgelistet, aber nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass das Element wieder im Bereich erscheint, wenn es zurück in den Bereich verschoben wird, und es in der reflektierten Eigenschaft wieder enthalten ist.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Element-Referenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attribut-Element-`id`-Referenzen sind nur für Ziel-Elemente [im Bereich](#element-id-referenzbereich), die im gleichen DOM oder Schatten-DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Element-Referenzen reflektieren, können auf Elemente im gleichen oder übergeordneten Bereich abzielen. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut, und Eigenschaft und Attribut reflektieren einander nicht mehr.
  Wenn das Attribut mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen wird, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Reflexionsbeziehung" wieder her.
- Das Setzen des Attributs mit einer Wertreferenz, die anschließend aus dem Bereich verschoben wird, führt zur Entfernung des entsprechenden Elements aus dem Eigenschaftsarray.
  Beachten Sie jedoch, dass das Attribut immer noch die Referenz enthält, und wenn das Element wieder in den Bereich verschoben wird, wird die Eigenschaft das Element wieder einschließen (d.h. die Beziehung wird wiederhergestellt).
