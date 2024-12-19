---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Sie ermöglichen den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

Alle diese benutzerdefinierten Daten sind über die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) gewährt Zugriff darauf.

Das `*` kann durch jeden Namen ersetzt werden, der [der Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt und folgende Empfehlungen einschließt:

- Der Name sollte nicht mit `xml` (Groß-/Kleinschreibung wird nicht berücksichtigt) beginnen, da dies für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkt-Zeichen (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML vollständig in Kleinbuchstaben ist.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut ohne Berücksichtigung der Groß-/Kleinschreibung und jeder Attributwert unter Berücksichtigung der Groß-/Kleinschreibung behandelt wird. Attribute, die diesen drei Empfehlungen nicht entsprechen, werden auch weiterhin von der JavaScript-Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) erkannt, und Benutzeragenten werden das Attribut in den [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, der alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, kann der Teil des Attributnamens nach `data-` nur Zeichen enthalten, die in JavaScript-Eigenschaftsnamen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Variante des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` gleichbedeutend mit `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da sie von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Verwendung

Durch Hinzufügen von `data-*` Attributen können selbst gewöhnliche HTML-Elemente ziemlich komplexe und leistungsfähige Programmobjekte werden. Zum Beispiel könnte ein Raumschiff-„[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)“ in einem Spiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut und mehreren `data-*` Attributen sein:

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

Für ein ausführlicheres Tutorial über die Verwendung von HTML-Datenattributen siehe [Using data attributes](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft, die Zugriff auf diese Werte ermöglicht und sie modifiziert.
- [Using data attributes](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
