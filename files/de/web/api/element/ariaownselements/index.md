---
title: "Element: ariaOwnsElements-Eigenschaft"
short-title: ariaOwnsElements
slug: Web/API/Element/ariaOwnsElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaOwnsElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element, auf das sie angewendet wird, und seinen untergeordneten Elementen definieren.
Dies wird verwendet, wenn die DOM-Hierarchie nicht genutzt werden kann, um die Beziehung darzustellen, und sie ansonsten nicht für unterstützende Technologie verfügbar wäre.

Das Thema [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs, um die Inhaberschaft eines Elements anzuzeigen.
Im Gegensatz zu `aria-owns` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die gültigen, im Geltungsbereich befindlichen Elementen entsprechen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu reflektierten Elementreferenzen und dem Geltungsbereich finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Abrufen des zugehörigen Elements

Dieses Beispiel demonstriert, wie das `aria-owns`-Attribut und die Eigenschaft verwendet werden.

Der Code definiert ein Menü und sein zugehöriges Untermenü in separaten und nicht verschachtelten {{htmlelement("div")}}-Elementen.
Da diese Elemente nicht verschachtelt sind, wird die Inhaberschaftsbeziehung zwischen dem Menü und dem Untermenü nicht vom DOM erfasst.
Hier stellen wir diese Informationen den Barrierefreiheits-Tools mithilfe des `aria-owns`-Attributs zur Verfügung, aber wir könnten dies auch mithilfe der reflektierten Eigenschaft tun.

Beachten Sie, dass wir ein Menü konstruieren könnten, bei dem das Untermenü verschachtelt ist: das Beispiel wurde _konstruiert_, um es leichter zu machen, einen Fall zu demonstrieren, bei dem die Beziehung definiert werden muss.

#### HTML

Das HTML definiert {{htmlelement("div")}}-Elemente für das Menü, mit `id=parentMenu` und das Untermenü mit `id="subMenu1"`.
Wir haben ein `<div>` dazwischen hinzugefügt, nur um noch offensichtlicher zu machen, dass im DOM kein direktes Inhaberschaftsmodell definiert ist.

Das übergeordnete Menü-`<div>` enthält das Attribut `aria-owns="subMenu1"`, um diese Inhaberschaftsbeziehung zu erstellen.

```html
<div class="menu" id="parentMenu" role="menubar" aria-owns="subMenu1">
  Top level menu (hover over)
</div>

<div>Some other element</div>

<div class="submenu" id="subMenu1" role="menu">
  <a href="#" role="menuitem">Menu item 1</a>
  <a href="#" role="menuitem">Menu item 2</a>
  <a href="#" role="menuitem">Menu item 3</a>
</div>
```

#### CSS

Das CSS gestaltet das Menü und das Untermenü und zeigt das Untermenü an, wenn das Menü mit der Maus überfahren wird.

```css
.menu {
  position: relative;
  display: inline-block;
  color: purple;
}

.submenu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 20px;
  left: 0;
}

.menu:hover ~ .submenu {
  display: block;
}

.submenu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.submenu a:hover {
  background-color: #f1f1f1;
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

#### JavaScript

Der Code überprüft zuerst, ob die `ariaOwnsElements` unterstützt wird.
Wenn dies der Fall ist, protokollieren wir das Attribut, die Elemente in der Eigenschaft und den `id`-Wert für jedes Element.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaOwnsElements
if ("ariaOwnsElements" in Element.prototype) {
  const parentMenu = document.querySelector("#parentMenu");
  log(`parentMenu.getAttribute(): ${parentMenu.getAttribute("aria-owns")}`);
  log(`parentMenu.ariaOwnsElements: ${parentMenu.ariaOwnsElements}`);
  parentMenu.ariaOwnsElements?.forEach((elem) => {
    log(`  id: ${elem.id}`);
  });
} else {
  log("element.ariaOwnsElements: not supported by browser");
}
```

#### Ergebnis

Das Ergebnis des Ausführens des Codes wird unten gezeigt.
Das Protokoll zeigt, dass die mit dem `aria-owns`-Attribut definierte Beziehung in der `ariaOwnsElements`-Eigenschaft widergespiegelt wird (Elemente im Array stimmen mit den Attribut-Elementreferenzen überein).

{{EmbedLiveSample("Get the flow-to element","100%","200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
