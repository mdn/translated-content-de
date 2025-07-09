---
title: HTML data-* globales Attribut
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden und es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte auszutauschen.

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

Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements zugänglich, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
Das `*` kann durch jeden Namen ersetzt werden, der den [Produktionsregeln von XML-Namen](https://www.w3.org/TR/xml/#NT-Name) folgt, einschließlich der folgenden Empfehlungen:

- Der Name sollte nicht mit `xml` (groß- oder kleinschreibungssensitiv) beginnen, da dies für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML vollständig kleingeschrieben wird.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) übereinstimmen, wobei das Attribut groß- und kleinschreibungssensitiv, aber der Attributwert kleinschreibungssensitiv ist. Attribute, die nicht den drei Empfehlungen entsprechen, werden ebenfalls von der JavaScript-`HTMLElement.dataset`-Eigenschaft erkannt, und Benutzeragenten werden das Attribut in den [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) einschließen, der alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, kann der Teil des Attributnamens nach dem `data-` nur Zeichen enthalten, die in JavaScript-Property-Namen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` gleichbedeutend mit `element.dataset.test` und `data-test-abc` wird zugänglich als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`). Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da sie von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Nutzungshinweise

Durch das Hinzufügen von `data-*` Attributen können selbst einfache HTML-Elemente zu recht komplexen und leistungsstarken Programmobjekten werden. Ein Raumschiff-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in einem Spiel könnte zum Beispiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut und mehreren `data-*` Attributen sein:

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

Für ein detaillierteres Tutorial zur Verwendung von HTML-Datenattributen, siehe [Verwenden von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die es ermöglicht, auf diese Werte zuzugreifen und sie zu ändern.
- [Verwenden von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
