---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Diese ermöglichen den Austausch von proprietären Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Repräsentation durch Skripte.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

Alle diese benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) bietet Zugriff auf sie. Das `*` kann durch jeden Namen ersetzt werden, der der [Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt, die folgende Empfehlungen umfasst:

- Der Name sollte nicht mit `xml` (nicht groß-/kleinschreibungssensitiv) beginnen, da er für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML komplett in Kleinschreibung ist.

Dies sind Empfehlungen. Wenn diese Namensgebungsempfehlungen nicht befolgt werden, treten keine Fehler auf. Die Attribute werden weiterhin mithilfe von CSS-[Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) zugeordnet, wobei das Attribut nicht groß-/kleinschreibungssensitiv und jeder Attributwert groß-/kleinschreibungssensitiv ist. Attribute, die nicht diesen drei Empfehlungen entsprechen, werden dennoch von der JavaScript-Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) erkannt, und Benutzeragenten fügen das Attribut in das [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) ein, das alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) zu verwenden, kann der Teil des Attributnamens, der dem `data-` folgt, nur Zeichen enthalten, die in JavaScript-Eigenschaftsnamen zulässig sind, und Bindestriche, die entfernt werden. Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von [kebab-case](/de/docs/Glossary/kebab_case) in camelCase. Zum Beispiel ist `element.getAttribute("data-test")` äquivalent zu `element.dataset.test` und `data-test-abc` wird zugänglich als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`). Vermeiden Sie nicht-alphabetische Zeichen nach einem Bindestrich, wie `data-test-1` oder `data--test`, da sie von [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) nicht erkannt werden.

### Verwendung

Durch das Hinzufügen von `data-*` Attributen können sogar gewöhnliche HTML-Elemente zu ziemlich komplexen und leistungsfähigen Programmobjekten werden. Ein Beispiel: Ein Raumschiff-"[Sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in einem Spiel könnte ein einfaches {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut und mehreren `data-*` Attributen sein:

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
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die den Zugriff und die Modifikation dieser Werte ermöglicht.
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
