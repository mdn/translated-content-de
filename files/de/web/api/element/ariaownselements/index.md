---
title: "Element: ariaOwnsElements-Eigenschaft"
short-title: ariaOwnsElements
slug: Web/API/Element/ariaOwnsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaOwnsElements`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist ein Array, das die Elemente enthält, die eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element, auf das es angewendet wird, und seinen untergeordneten Elementen definieren.
Dies wird verwendet, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann und ansonsten nicht für unterstützende Technologien verfügbar wäre.

Das Thema [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Subklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen nicht den Wert der Eigenschaft.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs, um die Zugehörigkeit eines Elements anzuzeigen.
Im Gegensatz zu `aria-owns` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen, im Bereich befindlichen Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu reflektierten Elementreferenzen und Bereichen finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Das zugehörige Element abrufen

Dieses Beispiel zeigt, wie das `aria-owns`-Attribut und die dazugehörige Eigenschaft verwendet werden.

Der Code definiert ein Menü und das zugehörige Untermenü in separaten und nicht verschachtelten {{htmlelement("div")}}-Elementen.
Da diese Elemente nicht verschachtelt sind, wird die Besitzbeziehung zwischen dem Menü und dem Untermenü nicht vom DOM erfasst.
Hier stellen wir diese Informationen für Barrierefreiheitstools mithilfe des `aria-owns`-Attributs bereit, könnten es aber auch über die reflektierte Eigenschaft tun.

Beachten Sie, dass wir ein Menü konstruieren könnten, bei dem das Untermenü verschachtelt war: das Beispiel wurde _konstruiert_, um es einfacher zu machen, einen Fall zu demonstrieren, bei dem die Beziehung definiert werden muss.

#### HTML

Das HTML definiert {{htmlelement("div")}}-Elemente für das Menü mit `id=parentMenu` und das Untermenü mit `id="subMenu1"`.
Wir haben ein `<div>` dazwischen hinzugefügt, um noch offensichtlicher zu machen, dass im DOM kein direktes Besitzmodell definiert ist.

Das übergeordnete Menü-`<div>` enthält das Attribut `aria-owns="subMenu1"`, um diese Besitzbeziehung zu erstellen.

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

Das CSS gestaltet das Menü und das Untermenü und zeigt das Untermenü an, wenn das Menü darüber schwebt.

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

Der Code überprüft zuerst, ob `ariaOwnsElements` unterstützt wird.
Falls ja, protokollieren wir das Attribut, die Elemente in der Eigenschaft und den `id`-Wert für jedes Element.

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

Das Ergebnis der Ausführung des Codes wird unten angezeigt.
Das Protokoll zeigt, dass die mit dem `aria-owns`-Attribut definierte Beziehung in der `ariaOwnsElements`-Eigenschaft widergespiegelt wird (Elemente im Array entsprechen den Attribut-Elementreferenzen).

{{EmbedLiveSample("Get the flow-to element","100%","200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
