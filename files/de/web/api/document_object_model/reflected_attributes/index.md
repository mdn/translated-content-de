---
title: Attributreflexion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: 1d5f6ed5785d8a222ea9cfb0a4d9bd6c941e01d8
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("SVG", "SVG")}} oder anderes {{Glossary("element", "Element")}}, ändert dessen Verhalten oder stellt Metadaten bereit.

Viele Attribute werden im entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Interface _reflektiert_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft des entsprechenden Interfaces gelesen oder geschrieben werden kann und umgekehrt.
Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut Getter/Setter

Zuerst sehen wir uns den Standardmechanismus zum Abrufen und Setzen eines Attributs an, der verwendet werden kann, unabhängig davon, ob das Attribut reflektiert wird oder nicht.
Um das Attribut zu erhalten, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces auf und geben Sie den Attributnamen an.
Um das Attribut zu setzen, rufen Sie die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, indem Sie den Attributnamen und den neuen Wert angeben.

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

Für ein {{htmlelement("input")}} wird das `placeholder` Attribut durch die [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)-Eigenschaft reflektiert.
Angenommen das gleiche HTML wie zuvor:

```html
<input placeholder="Original placeholder" />
```

Die gleiche Operation kann natürlicher mit der `placeholder` Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft gleich sind: `placeholder`.
Dies ist nicht immer der Fall: Eigenschaften werden normalerweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies ist besonders bei mehrteiligen Attributnamen der Fall, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie z.B. das Minuszeichen.
Zum Beispiel wird das [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut durch die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked)-Eigenschaft reflektiert.

### Boolean reflektierte Attribute

{{Glossary("Boolean/HTML", "Boolean-Attribute")}} unterscheiden sich etwas von anderen, da sie nicht mit einem Namen und einem Wert deklariert werden müssen.
Zum Beispiel hat das Kontrollkästchen-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen aktiviert sein:

```html
<input type="checkbox" checked />
```

Die Methode [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabefeld aktiviert ist, oder `null`, wenn es nicht aktiviert ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den aktivierten Zustand zurück.
Ansonsten sind Boolean reflektierte Attribute dieselben wie andere reflektierte Attribute.

### Enumerierte reflektierte Attribute

In HTML sind [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einem begrenzten, vordefinierten Satz von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

```html
<p dir="rtl">Right to left</p>
```

Wie bei HTML-Tag-Namen sind HTML enumerierte Attribute und ihre Werte nicht groß- und kleinschreibungssensitiv, so dass `LTR`, `RTL` und `AUTO` ebenfalls funktionieren.

```html
<p dir="RTL">Right to left</p>
```

Die IDL-reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), gibt immer einen kanonischen Wert zurück, wie er in der Spezifikation bereitgestellt wird (in diesem Beispiel kleinbuchstabige Werte). Das Setzen des Wertes serialisiert ihn auch in die kanonische Form.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternativ können Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) des [`Element`](/de/docs/Web/API/Element)-Interfaces verwenden. Sie holt den Attributwert aus HTML ohne Änderungen.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir"); // "RTL"
```

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt bezieht sich auf [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Die gleichen Überlegungen gelten wahrscheinlich auch für andere/Zukunftsattribute, die Elementreferenzen widerspiegeln.

Einige Attribute nehmen Element-_Referenzen_ als Werte an: entweder einen Element-`id`-Wert oder einen durch Leerzeichen getrennten String von Element-`id`-Werten.
Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Beziehung stehen oder Informationen enthalten, die das Attribut benötigt.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die den `id`-Werten entsprechen, mit einigen Vorbehalten.

Zum Beispiel listet das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut die `id`-Werte von Elementen, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten.
Das HTML unten zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit den `id`-Werten `label_1`, `label_2` und `label_3` hat:

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

Das Erste, was man aus dem obigen Code bemerken sollte, ist, dass das Attribut und die Eigenschaft unterschiedliche Zahlen von Elementen enthalten — die Eigenschaft reflektiert das Attribut nicht _direkt_, da die Referenz `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil die `id` [außerhalb des Geltungsbereichs des Elements](#element-id-referenzbereich) ist.
Dies kann passieren, wenn das referenzierte Element nicht im selben DOM oder Schatten-DOM wie das Element ist, da ids nur im Geltungsbereich gültig sind, in dem sie deklariert sind.

Wir können die Elemente im Eigenschaftsarray durchlaufen, um in diesem Fall den zugänglichen Namen aus ihrem inneren Text zu erhalten (das ist natürlicher als die Verwendung des Attributs, weil wir nicht zuerst die Elementreferenzen abrufen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, von denen wir wissen, dass sie im aktuellen Bereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setzen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Updates an der Eigenschaft im entsprechenden Attribut reflektiert und umgekehrt.
Für reflektierte Elementreferenzen ist dies nicht der Fall.
Stattdessen setzt das Setzen der Eigenschaft das Attribut zurück (löschen), sodass die Eigenschaft und das Attribut sich nicht länger gegenseitig reflektieren.
Zum Beispiel, gegeben das folgende HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Anfangswert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir es aus der DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

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

Dies ist sinnvoll, da Sie sonst Elemente zu der Eigenschaft zuweisen könnten, die keine `id`-Referenz haben und daher nicht im Attribut dargestellt werden können.

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

Das von der Eigenschaft zurückgegebene Array ist statisch, sodass Sie das zurückgegebene Array nicht ändern können, um Änderungen am entsprechenden Attribut vorzunehmen.
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass alle Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaften-Array reflektiert werden.

### Element-Id-Referenzbereich

Attributierte Elementreferenzen können sich nur auf andere Elemente beziehen, die sich im selben DOM oder [Shadow DOM](/de/docs/Web/API/Web_components#shadow_dom_2) befinden, da Element-ids nur im Geltungsbereich gültig sind, in dem sie deklariert sind.

Wir können dies im folgenden Code sehen.
Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des {{htmlelement("input")}}-Elements referenziert die Elemente mit den ids `label_1`, `label_2` und `label_3`.
`label_3` ist jedoch in diesem Fall keine gültige id, da es nicht im selben Bereich wie das {{htmlelement("input")}}-Element definiert ist.
Als Ergebnis kommt das Label nur von den Elementen mit den ids `label_1` und `label_2`.

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

Bei der Verwendung der [Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Bereichsregeln etwas anders.
Um im Geltungsbereich zu sein, muss ein Zielelement im selben DOM wie das referenzierende Element oder ein übergeordnetes DOM sein.
Elemente in anderen DOMs, einschließlich Schatten-DOMs, die Kinder oder Ebenen des verweisenden DOMs sind, sind außerhalb des Geltungsbereichs.

Das unten stehende Beispiel zeigt den Fall, wo ein Element in einem übergeordneten DOM (`label_3`) als Ziel gesetzt ist, zusammen mit den Elementen mit den ids `label_1` und `label_2`, die im selben Schatten-Satz erklärt werden.
Dies funktioniert, weil alle Zielelemente im Geltungsbereich für das referenzierende Element sind.

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

Der equivalente Code, bei dem ein Element im DOM eines anderen im Schatten-DOM referenziert, würde nicht funktionieren, weil Zielelemente, die in geschachtelten Schatten-DOMs sind, nicht im Geltungsbereich sind:

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

Beachten Sie, dass ein Element zunächst "im Geltungsbereich" sein und dann in einen verschachtelten Schatten-Satz verschoben werden kann.
In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgelistet, jedoch nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass, wenn das Element zurück in den Geltungsbereich verschoben wird, es wieder in der reflektierten Eigenschaft vorhanden ist.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attributierte Element-`id`-Referenzen sind nur [im Geltungsbereich](#element-id-referenzbereich) für Zielelemente, die im selben DOM oder Schatten-DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen reflektieren, können Zielobjekte im selben Geltungsbereich oder einem übergeordneten Geltungsbereich anvisieren. Elemente in verschachtelten Bereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut und die Eigenschaft und das Attribut reflektieren sich nicht mehr gegenseitig.
  Wenn das Attribut mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen wird, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Reflexionsbeziehung" wieder her.
- Das Setzen des Attributs mit einem Wertverweis, der anschließend aus dem Bereich verschoben wird, führt zur Entfernung des entsprechenden Elements aus dem Eigenschaftsarray.
  Beachten Sie jedoch, dass das Attribut weiterhin den Verweis enthält und, wenn das Element wieder in den Bereich verschoben wird, die Eigenschaft das Element erneut enthält (d.h. die Beziehung wird wiederhergestellt).
