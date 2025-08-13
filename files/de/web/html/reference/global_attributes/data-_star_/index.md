---
title: HTML data-* globales Attribut
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden und es ermöglichen, dass proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte ausgetauscht werden.

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

Alle diese benutzerdefinierten Daten sind über die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) des Elements verfügbar, auf dem das Attribut gesetzt ist. Die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) gibt Zugriff auf diese Daten.
Das `*` kann durch jeden beliebigen Namen ersetzt werden, der der [Produktionsregel der XML-Namen](https://www.w3.org/TR/xml/#NT-Name) folgt, die folgende Empfehlungen umfasst:

- Der Name sollte nicht mit `xml` (nicht case-sensitiv) beginnen, da dies für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunktzeichen (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML ausschließlich aus Kleinbuchstaben besteht.

Dies sind Empfehlungen. Wenn diese Benennungsempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut nicht case-sensitiv und jeder Attributwert case-sensitiv ist. Attribute, die nicht diesen drei Empfehlungen entsprechen, werden auch weiterhin von der JavaScript-Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) erkannt, und Benutzeragenten werden das Attribut in das [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, das alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, kann der Teil des Attributnamens, der dem `data-` folgt, nur Zeichen enthalten, die in JavaScript-Property-Namen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` äquivalent zu `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` zugänglich sein (oder durch `HTMLElement.dataset["testAbc"]`). Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da diese von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Nutzungshinweise

Durch das Hinzufügen von `data-*` Attributen können selbst gewöhnliche HTML-Elemente zu recht komplexen und leistungsstarken Programmobjekten werden. Zum Beispiel könnte ein Raumfahrzeug-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in einem Spiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut und mehreren `data-*` Attributen sein:

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

Für ein ausführlicheres Tutorial über die Verwendung von HTML-Datenattributen siehe [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft, die den Zugriff und die Änderung dieser Werte ermöglicht.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
