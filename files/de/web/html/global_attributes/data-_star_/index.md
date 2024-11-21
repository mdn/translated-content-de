---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Diese ermöglichen den Austausch von proprietärer Information zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Repräsentation durch Skripte.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

Alle diese benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, zugänglich. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gewährt Zugriff auf sie. Das `*` kann durch einen beliebigen Namen ersetzt werden, der [der Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt. Dazu gehören folgende Empfehlungen:

- Der Name sollte nicht mit `xml` (unabhängig von der Groß-/Kleinschreibung) beginnen, da dies für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML vollständig in Kleinbuchstaben gehalten wird.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin durch CSS [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut nicht auf Groß-/Kleinschreibung achtet, der Attributwert jedoch auf Groß-/Kleinschreibung achtet. Attribute, die diesen drei Empfehlungen nicht entsprechen, werden auch weiterhin von der JavaScript [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft erkannt und Benutzeragenten werden das Attribut im [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) einschließen, das alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, kann der Teil des Attributnamens, der auf "data-" folgt, nur Zeichen enthalten, die in JavaScript-Property-Namen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` gleichwertig mit `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da sie nicht von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) erkannt werden.

### Verwendung

Durch das Hinzufügen von `data-*`-Attributen können selbst gewöhnliche HTML-Elemente zu recht komplexen und leistungsfähigen Programmobjekten werden. Ein „Raumschiff-[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)“ in einem Spiel könnte zum Beispiel ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut und mehreren `data-*`-Attributen sein:

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

Für ein ausführlicheres Tutorial zur Verwendung von HTML-Datenattributen siehe [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die es ermöglicht, diese Werte zuzugreifen und zu ändern.
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
