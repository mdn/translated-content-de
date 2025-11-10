---
title: HTML data-* globales Attribut
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Sie ermöglichen den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte.

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
  border: 1px solid #eeeeee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover::after {
  opacity: 1;
}
```

Alle diese benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff auf diese Daten.
Das `*` kann durch jeden Namen ersetzt werden, der der [Produktionsregel für XML-Namen](https://www.w3.org/TR/xml/#NT-Name) entspricht, die folgende Empfehlungen umfasst:

- Der Name sollte nicht mit `xml` (unabhängig von der Groß- und Kleinschreibung) beginnen, da er für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML durchgehend kleingeschrieben wird.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute können weiterhin mit CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) abgeglichen werden, wobei das Attribut selbst nicht auf die Groß- und Kleinschreibung achtet, der Attributwert jedoch schon. Attribute, die nicht diesen drei Empfehlungen folgen, werden auch weiterhin von der JavaScript-[`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft erkannt und Benutzeragenten werden das Attribut in das [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, das alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, darf der Teil des Attributnamens nach dem `data-` nur Zeichen enthalten, die in JavaScript-Eigenschaftsnamen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und wandelt den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} in camelCase um. Zum Beispiel ist `element.getAttribute("data-test")` gleichbedeutend mit `element.dataset.test`, und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da diese von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Verwendungshinweise

Durch das Hinzufügen von `data-*` Attributen können selbst gewöhnliche HTML-Elemente zu komplexen und leistungsstarken Program-Objekten werden. Zum Beispiel könnte ein Raumschiff-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)" in einem Spiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut und mehreren `data-*` Attributen sein:

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

Für ein detaillierteres Tutorial zur Verwendung von HTML-Datenattributen lesen Sie [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die den Zugriff auf diese Werte ermöglicht und diese modifiziert.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
