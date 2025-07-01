---
title: HTML data-* globales Attribut
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Diese ermöglichen es, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Scripts auszutauschen.

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li::after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover::after {
  opacity: 1;
}
```

Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gibt Zugriff auf sie. Das `*` kann durch jeden Namen ersetzt werden, der den [Produktionsregeln von XML-Namen](https://www.w3.org/TR/xml/#NT-Name) entspricht, die die folgenden Empfehlungen beinhalten:

- Der Name sollte nicht mit `xml` (unabhängig von der Groß- und Kleinschreibung) beginnen, da dieser für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML komplett kleingeschrieben ist.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut unabhängig von der Groß- und Kleinschreibung und jeder Attributwert in der Groß- und Kleinschreibung empfindlich ist. Attribute, die nicht diesen drei Empfehlungen entsprechen, werden ebenfalls weiterhin von der JavaScript-[`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft erkannt und User-Agents werden das Attribut im [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, das alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, darf der Teil des Attributnamens, der auf das `data-` folgt, nur Zeichen enthalten, die in JavaScript-Eigenschaftsnamen erlaubt sind (sowie Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel entspricht `element.getAttribute("data-test")` `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da diese nicht von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) erkannt werden.

### Anwendungshinweise

Durch Hinzufügen von `data-*`-Attributen können selbst gewöhnliche HTML-Elemente recht komplexe und leistungsfähige Programmobjekte werden. Ein Beispiel: Ein Raumschiff-„[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)“ in einem Spiel könnte einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut und mehreren `data-*`-Attributen sein:

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940" />
```

```js
function clickSpaceship() {
  spaceships[this.dataset.shipId].blasted();
}

document.querySelectorAll("img.spaceship").forEach((ship) => {
  ship.addEventListener("click", clickSpaceship);
});
```

Für ein ausführlicheres Tutorial zur Verwendung von HTML-Datenattributen siehe [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die den Zugriff und die Modifikation dieser Werte ermöglicht.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
