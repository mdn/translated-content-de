---
title: "Element: Eigenschaft ariaOwnsElements"
short-title: ariaOwnsElements
slug: Web/API/Element/ariaOwnsElements
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("DOM")}}

Die Eigenschaft **`ariaOwnsElements`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) ist ein Array mit dem Element oder den Elementen, die eine visuelle, funktionale oder kontextuelle Beziehung zwischen dem übergeordneten Element, für das die Eigenschaft festgelegt ist, und seinen untergeordneten Elementen definieren.
Sie wird verwendet, wenn sich diese Beziehung nicht durch die DOM-Hierarchie darstellen lässt und sie Hilfstechnologien andernfalls nicht zur Verfügung stünde.

Der Artikel zu [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthält weitere Informationen zur Verwendung des Attributs und der Eigenschaft.

## Wert

Ein Array mit Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Spätere Änderungen am Array wirken sich nicht auf den Wert der Eigenschaft aus.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zum Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns), um die Zugehörigkeit eines Elements anzugeben.
Anders als bei `aria-owns` benötigen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.

Die Eigenschaft spiegelt das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) des Elements wider, sofern es definiert ist – allerdings nur für aufgeführte `id`-Referenzen, die zu gültigen Elementen innerhalb des Gültigkeitsbereichs passen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu gespiegelten Elementreferenzen und ihrem Gültigkeitsbereich finden Sie unter [Gespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Gespiegelte Attribute_.

## Beispiele

### Zugehöriges Element abrufen

Dieses Beispiel zeigt, wie das Attribut `aria-owns` und die entsprechende Eigenschaft verwendet werden.

Der Code definiert ein Menü und das zugehörige Untermenü in getrennten, nicht ineinander verschachtelten {{htmlelement("div")}}-Elementen.
Da diese Elemente nicht verschachtelt sind, bildet das DOM die Zugehörigkeit des Untermenüs zum Menü nicht ab.
Hier stellen wir diese Information Hilfstechnologien über das Attribut `aria-owns` bereit. Alternativ könnten wir dafür auch die gespiegelte Eigenschaft verwenden.

Wir könnten auch ein Menü erstellen, in dem das Untermenü verschachtelt ist: Das Beispiel ist _bewusst konstruiert_, um einen Fall zu veranschaulichen, in dem die Beziehung ausdrücklich definiert werden muss.

#### HTML

Das HTML definiert {{htmlelement("div")}}-Elemente für das Menü mit `id=parentMenu` und das Untermenü mit `id="subMenu1"`.
Dazwischen haben wir ein weiteres `<div>` eingefügt, um noch deutlicher zu machen, dass im DOM keine direkte Zugehörigkeit definiert ist.

Das `<div>` des übergeordneten Menüs enthält das Attribut `aria-owns="subMenu1"`, um diese Beziehung herzustellen.

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

Das CSS gestaltet das Menü und das Untermenü und zeigt das Untermenü an, wenn sich der Mauszeiger über dem Menü befindet.

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
  box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 0.2);
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

Der Code prüft zunächst, ob `ariaOwnsElements` unterstützt wird.
Falls ja, geben wir das Attribut, die Elemente in der Eigenschaft und den `id`-Wert jedes Elements im Protokoll aus.

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

Das Ergebnis der Codeausführung ist unten dargestellt.
Das Protokoll zeigt, dass sich die über das Attribut `aria-owns` definierte Beziehung in der Eigenschaft `ariaOwnsElements` widerspiegelt: Die Elemente im Array entsprechen den Elementreferenzen des Attributs.

{{EmbedLiveSample("get_the_owned_element","100%","200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
- [Gespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Attributspiegelung_.
