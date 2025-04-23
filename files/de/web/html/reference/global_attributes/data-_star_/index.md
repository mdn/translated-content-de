---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden und die den Austausch von proprietären Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte ermöglichen.

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

li:after {
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

li:hover:after {
  opacity: 1;
}
```

Alle solchen benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff auf sie. Das `*` kann durch einen beliebigen Namen ersetzt werden, der der [Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt, die folgende Empfehlungen umfasst:

- Der Name sollte nicht mit `xml` (nicht groß-/kleinschreibungssensitiv) beginnen, da er für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkt-Zeichen (`:`) enthalten, da XML solchen Namen Bedeutungen zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML durchweg klein geschrieben ist.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mithilfe von CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut nicht groß-/kleinschreibungssensitiv und jeder Attributwert groß-/kleinschreibungssensitiv ist. Attribute, die diesen drei Empfehlungen nicht entsprechen, werden ebenfalls weiterhin von der JavaScript-`[`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)`-Eigenschaft erkannt und Benutzeragenten werden das Attribut in die [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, die alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, darf der Teil des Attributnamens, der auf das `data-` folgt, nur Zeichen enthalten, die in JavaScript-Property-Namen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` äquivalent zu `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da sie von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Verwendung

Durch das Hinzufügen von `data-*`-Attributen können selbst gewöhnliche HTML-Elemente zu recht komplexen und leistungsfähigen Program-Objekten werden. Zum Beispiel könnte ein Raumschiff-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in einem Spiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut und mehreren `data-*`-Attributen sein:

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
```

Für ein ausführlicheres Tutorial zur Verwendung von HTML-Datenattributen siehe [Verwenden von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die den Zugriff auf und die Änderung dieser Werte ermöglicht.
- [Verwenden von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
