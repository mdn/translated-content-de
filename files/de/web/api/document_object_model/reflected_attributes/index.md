---
title: Attributereflektion
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: 15caf9db9fdc7f511db22d1e537ba77ac53651f1
---

{{DefaultAPISidebar("DOM")}}

Ein {{Glossary("attribute", "Attribut")}} erweitert ein {{Glossary("HTML", "HTML")}}-, {{Glossary("XML", "XML")}}-, {{Glossary("SVG", "SVG")}}- oder ein anderes {{Glossary("element", "Element")}}, indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Viele Attribute werden in der entsprechenden [DOM](/de/docs/Web/API/Document_Object_Model)-Schnittstelle _reflektiert_.
Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft in der entsprechenden Schnittstelle gelesen oder geschrieben werden kann, und umgekehrt.
Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributwerten über die Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Dieser Leitfaden bietet einen Überblick über reflektierte Attribute und deren Verwendung.

## Attribut-Getter/Setter

Zuerst betrachten wir den Standardmechanismus zum Abrufen und Setzen eines Attributs, der unabhängig davon verwendet werden kann, ob das Attribut reflektiert wird.
Um das Attribut abzurufen, rufen Sie die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle auf und geben Sie den Attributnamen an.
Um das Attribut zu setzen, rufen Sie die Methoden [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, indem Sie den Attributnamen und den neuen Wert angeben.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Um das [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)-Attribut zu holen und zu setzen:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflektierte Attribute

Für ein {{htmlelement("input")}}-Element wird das `placeholder`-Attribut von der [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)-Eigenschaft reflektiert.
Angenommen, dasselbe HTML wie vorher:

```html
<input placeholder="Original placeholder" />
```

Die gleiche Operation kann natürlicher mit der `placeholder`-Eigenschaft durchgeführt werden:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Beachten Sie, dass der Name des reflektierten Attributs und der Eigenschaft derselbe ist: `placeholder`.
Das ist nicht immer der Fall: Eigenschaften werden üblicherweise nach der {{Glossary("Camel_case", "camelCase")}}-Konvention benannt.
Dies gilt insbesondere für mehrwortige Attributnamen, die Zeichen enthalten, die in einem Eigenschaftsnamen nicht erlaubt sind, wie z.B. das Bindestrichzeichen.
Zum Beispiel wird das Attribut [aria-checked](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) durch die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) reflektiert.

### Boolesche reflektierte Attribute

{{Glossary("Boolean/HTML", "Boolesche Attribute")}} unterscheiden sich ein wenig von anderen, da sie nicht mit einem Namen und Wert deklariert werden müssen.
Zum Beispiel hat das Kontrollkästchen-{{htmlelement("input")}}-Element unten das `checked`-Attribut und wird beim Anzeigen angekreuzt:

```html
<input type="checkbox" checked />
```

Die [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gibt `""` zurück, wenn das Eingabefeld angekreuzt ist, oder `null`, wenn es nicht angekreuzt ist.
Die entsprechende [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft gibt `true` oder `false` für den angekreuzten Zustand zurück.
Andernfalls sind boolesche reflektierte Attribute mit jedem anderen reflektierten Attribut gleichzusetzen.

## Reflektierte Elementreferenzen

> [!NOTE]
> Dieser Abschnitt betrifft [reflektierte ARIA-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> Die gleichen Überlegungen gelten wahrscheinlich auch für andere/zukünftige Attribute, die Elementreferenzen reflektieren.

Einige Attribute nehmen Element-_Referenzen_ als Werte: entweder einen Element-`id`-Wert oder eine durch Leerzeichen getrennte Zeichenfolge von Element-`id`-Werten.
Diese `id`-Werte beziehen sich auf andere Elemente, die mit dem Attribut in Verbindung stehen oder die Informationen enthalten, die das Attribut benötigt.
Diese Attribute werden durch eine entsprechende Eigenschaft als Array von [`HTMLElement`](/de/docs/Web/API/HTMLElement)-abgeleiteten Objektinstanzen reflektiert, die die `id`-Werte übereinstimmen, mit einigen Vorbehalten.

Zum Beispiel listet das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) die `id`-Werte von Elementen auf, die den zugänglichen Namen für ein Element in ihrem inneren Text enthalten.
Das HTML unten zeigt dies für ein {{htmlelement("input")}}, das ein Label in {{htmlelement("span")}}-Elementen mit den `id`-Werten `label_1`, `label_2` und `label_3` hat:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Dieses Attribut wird durch die Eigenschaft [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) reflektiert, die das Array der Elemente zurückgibt, die die entsprechenden `id`-Werte haben.
Das Attribut und die entsprechende Eigenschaft können wie folgt zurückgegeben werden:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

Das erste, was im oben gezeigten Code zu beachten ist, ist, dass das Attribut und die Eigenschaft unterschiedliche Anzahlen von Elementen enthalten – die Eigenschaft reflektiert das Attribut nicht _direkt_, weil die Referenz `label_3` kein entsprechendes Element hat.
Es ist auch möglich, dass eine Referenz nicht übereinstimmt, weil die `id` [außerhalb des Geltungsbereichs des Elements](#element-id-referenzbereich) liegt.
Dies kann passieren, wenn das referenzierte Element nicht im selben DOM oder Schatten-DOM wie das Element ist, da `id`s nur im Gültigkeitsbereich gültig sind, in dem sie deklariert sind.

Wir können die Elemente im Eigenschaftsarray durchlaufen, um in diesem Fall den zugänglichen Namen aus ihrem inneren Text zu erhalten (dies ist natürlicher als die Verwendung des Attributs, da wir nicht zuerst die Elementreferenzen holen und dann verwenden müssen, um die Elemente zu finden, und wir müssen nur mit Elementen arbeiten, die im aktuellen Gültigkeitsbereich verfügbar sind):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Festlegen der Eigenschaft und des Attributs

Für normale reflektierte Eigenschaften werden Aktualisierungen der Eigenschaft im entsprechenden Attribut und umgekehrt reflektiert.
Bei reflektierten Elementreferenzen ist dies nicht der Fall.
Stattdessen führt das Setzen der Eigenschaft dazu, dass das Attribut gelöscht (zurückgesetzt) wird, sodass die Eigenschaft und das Attribut einander nicht mehr reflektieren.
Zum Beispiel bei folgendem HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

Der Anfangswert des `aria-labelledby` ist `"label_1 label_2"`, aber wenn wir es über die DOM-API setzen, wird das Attribut auf `""` zurückgesetzt:

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

Dies ist sinnvoll, da Sie sonst Elemente der Eigenschaft zuweisen könnten, die keinen `id`-Verweis haben und daher nicht im Attribut dargestellt werden können.

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
Wenn ein Array der Eigenschaft zugewiesen wird, wird es kopiert, sodass Änderungen am Attribut nicht in einem zuvor zurückgegebenen Eigenschaftsarray reflektiert werden.

### Element-Id-Referenzbereich

Attributelement-Referenzen können sich nur auf andere Elemente beziehen, die sich im selben DOM oder [Shadow-DOM](/de/docs/Web/API/Web_components#shadow_dom_2) befinden, weil Element-Ids nur im Gültigkeitsbereich gültig sind, in dem sie deklariert sind.

Wir können dies im folgenden Code sehen.
Das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) des {{htmlelement("input")}}-Elements verweist auf die Elemente mit den Ids `label_1`, `label_2` und `label_3`.
Allerdings ist `label_3` in diesem Fall keine gültige Id, da sie nicht im selben Gültigkeitsbereich wie das {{htmlelement("input")}}-Element definiert ist.
Infolgedessen stammt das Label nur von den Elementen mit den Ids `label_1` und `label_2`.

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

Bei der Verwendung von [Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden](/de/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), wie zum Beispiel [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) für `aria-labelledby`, sind die Gültigkeitsbereichsregeln etwas anders.
Um im Gültigkeitsbereich zu sein, muss sich ein Zielelement im selben DOM wie das referenzierende Element oder in einem übergeordneten DOM befinden.
Elemente in anderen DOMs, einschließlich Schatten-DOMs, die Kinder oder Peers des referenzierenden DOMs sind, liegen außerhalb des Gültigkeitsbereichs.

Das folgende Beispiel zeigt den Fall, in dem ein Element in einem übergeordneten DOM (`label_3`) als Ziel zusammen mit den Elementen mit Ids `label_1` und `label_2` festgelegt wird, die im selben Shadow-Root deklariert sind.
Dies funktioniert, weil alle Zielelemente im Gültigkeitsbereich für das referenzierende Element sind.

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
<script>
  document
    .getElementById("host")
    .shadowRoot.getElementById("input").ariaLabelledByElements = [
    host.shadowRoot.getElementById("label_1"),
    host.shadowRoot.getElementById("label_2"),
    document.getElementById("label_3"),
  ];
</script>
```

Der äquivalente Code, bei dem ein Element im DOM ein anderes im Schatten-DOM referenziert, würde nicht funktionieren, weil Zielelemente, die sich in verschachtelten Schatten-DOMs befinden, nicht im Gültigkeitsbereich sind:

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
<script>
  const input = document.getElementById("input");
  const host = document.getElementById("host");
  input.ariaLabelledByElements = [
    host.shadowRoot.getElementById("label_3"),
    document.getElementById("label_1"),
    document.getElementById("label_2"),
  ];
</script>
```

Beachten Sie, dass ein Element zunächst "im Gültigkeitsbereich" sein kann und dann aus dem Gültigkeitsbereich in ein verschachteltes Schatten-Root verschoben wird.
In diesem Fall wird das referenzierte Element weiterhin im Attribut aufgeführt, aber nicht in der Eigenschaft zurückgegeben.
Beachten Sie jedoch, dass, wenn das Element wieder in den Gültigkeitsbereich verschoben wird, es wieder in der reflektierten Eigenschaft vorhanden sein wird.

### Zusammenfassung der Attribut-/Eigenschaftsbeziehung

Die Beziehung zwischen Attributen, die Elementreferenzen enthalten, und ihrer entsprechenden Eigenschaft ist wie folgt:

- Attributelement-`id`-Referenzen sind nur für Zielelemente gültig, die im selben DOM oder Schatten-DOM wie das Element deklariert sind.
- Eigenschaften, die ARIA-Elementreferenzen widerspiegeln, können Ziel-Elemente im selben Gültigkeitsbereich oder im übergeordneten Gültigkeitsbereich anvisieren. Elemente in verschachtelten Gültigkeitsbereichen sind nicht zugänglich.
- Das Setzen der Eigenschaft löscht das Attribut, und die Eigenschaft und das Attribut reflektieren einander nicht mehr.
  Wenn die Attribute mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) gelesen werden, ist der Wert `""`.
- Das Setzen des Attributs mit [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) setzt auch die Eigenschaft und stellt die "Reflektionsbeziehung" wieder her.
- Wenn das Attribut mit einem Wertreferenz gesetzt wird, die anschließend aus dem Gültigkeitsbereich verschoben wird, wird das entsprechende Element aus dem Eigenschaftsarray entfernt.
  Beachten Sie jedoch, dass das Attribut die Referenz weiterhin enthält, und wenn das Element wieder in den Gültigkeitsbereich verschoben wird, wird die Eigenschaft das Element wieder enthalten (d.h. die Beziehung wird wiederhergestellt).
