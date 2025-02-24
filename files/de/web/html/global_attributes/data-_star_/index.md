---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Die **`data-*`** [globalen Attribute](/de/docs/Web/HTML/Global_attributes) bilden eine Klasse von Attributen, die als **benutzerdefinierte Datenattribute** bezeichnet werden. Diese ermöglichen den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Web/API/Document_Object_Model)-Darstellung durch Skripte.

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

Alle diese benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
Das `*` kann durch einen beliebigen Namen ersetzt werden, der der [Produktionsregel für XML-Namen](https://www.w3.org/TR/REC-xml/#NT-Name) folgt, die folgende Empfehlungen umfasst:

- Der Name sollte nicht mit `xml` (unabhängig von Groß- und Kleinschreibung) beginnen, da dies für zukünftige XML-Spezifikationen reserviert ist.
- Der Name sollte keine Doppelpunkte (`:`) enthalten, da XML solchen Namen eine Bedeutung zuweist.
- Der Name sollte keine Großbuchstaben enthalten, da XML vollständig in Kleinbuchstaben ist.

Diese sind Empfehlungen. Werden diese Namensempfehlungen nicht befolgt, treten keine Fehler auf. Die Attribute werden weiterhin mit CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) abgeglichen, wobei das Attribut unabhängig von Groß- und Kleinschreibung und jeder Attributwert groß- und kleinschreibungssensitiv ist. Attribute, die nicht diesen drei Empfehlungen entsprechen, werden auch weiterhin von der JavaScript-`HTMLElement.dataset`-Eigenschaft erkannt, und Benutzeragenten werden das Attribut in die [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) aufnehmen, die alle benutzerdefinierten Datenattribute für ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält.

Wenn Sie planen, `HTMLElement.dataset` zu verwenden, darf der Teil des Attributnamens, der auf das `data-` folgt, nur Zeichen enthalten, die in JavaScript-Eigenschaftsnamen erlaubt sind (und Bindestriche, die entfernt werden). Die `dataset`-Version des Attributnamens entfernt das "data-" Präfix und konvertiert den Rest des Namens von {{Glossary("kebab_case", "kebab-case")}} zu camelCase. Zum Beispiel ist `element.getAttribute("data-test")` gleichbedeutend mit `element.dataset.test` und `data-test-abc` wird als `HTMLElement.dataset.testAbc` (oder durch `HTMLElement.dataset["testAbc"]`) zugänglich sein. Vermeiden Sie nicht-alphabetische Zeichen, die einem Bindestrich folgen, wie `data-test-1` oder `data--test`, da sie von `HTMLElement.dataset` nicht erkannt werden.

### Verwendung

Durch das Hinzufügen von `data-*`-Attributen können selbst gewöhnliche HTML-Elemente zu ziemlich komplexen und leistungsstarken Programmobjekten werden. Zum Beispiel könnte ein Raumschiff-Sprite in einem Spiel einfach ein {{HTMLElement("img")}}-Element mit einem [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut und mehreren `data-*`-Attributen sein:

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

Für ein ausführlicheres Tutorial zur Verwendung von HTML-Datenattributen siehe [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft, die den Zugriff auf und die Modifikation dieser Werte ermöglicht.
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
