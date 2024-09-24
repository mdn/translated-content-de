---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Global_attributes) bilden eine Klasse von Attributen namens **benutzerdefinierte Datenattribute**, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Repräsentation durch Skripte auszutauschen.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

Alle diese benutzerdefinierten Daten sind über die {{domxref("HTMLElement")}}-Schnittstelle des Elements verfügbar, auf dem das Attribut gesetzt ist. Die {{domxref("HTMLElement.dataset")}}-Eigenschaft ermöglicht den Zugriff darauf. Das `*` kann durch jeden Namen ersetzt werden, der der [Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt, die folgende Empfehlungen enthält:

- Der Name sollte nicht mit `xml` (nicht groß- und kleinschreibungssensitiv) beginnen, da es für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML nur in Kleinbuchstaben verfasst ist.

Dies sind Empfehlungen. Wenn diese Namensempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut nicht groß- und kleinschreibungssensitiv und jeder Attributwert groß- und kleinschreibungssensitiv ist. Attribute, die diesen drei Empfehlungen nicht entsprechen, werden ebenfalls weiterhin von der JavaScript-{{domxref("HTMLElement.dataset")}}-Eigenschaft erkannt, und Benutzeragenten werden das Attribut in die {{domxref("DOMStringMap")}} aufnehmen, die alle benutzerdefinierten Datenattribute für ein {{domxref("HTMLElement")}} enthält.

Wenn Sie planen, {{domxref("HTMLElement.dataset")}} zu verwenden, kann der Teil des Attributnamens nach `data-` nur Zeichen enthalten, die in JavaScript-Property-Namen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das Präfix "data-" und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Beispielsweise ist `element.getAttribute("data-test")` gleichbedeutend mit `element.dataset.test` und `data-test-abc` wird zugänglich als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`). Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da diese von {{domxref("HTMLElement.dataset")}} nicht erkannt werden.

### Verwendung

Durch das Hinzufügen von `data-*` Attributen können selbst gewöhnliche HTML-Elemente zu recht komplexen und leistungsstarken Programmobjekten werden. Beispielsweise könnte ein Raumschiff-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in einem Spiel ein einfaches {{HTMLElement("img")}} Element mit einem [`class`](/de/docs/Web/HTML/Global_attributes/class) Attribut und mehreren `data-*` Attributen sein:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die {{domxref("HTMLElement.dataset")}}-Eigenschaft, die den Zugriff auf diese Werte ermöglicht und deren Modifizierung.
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
