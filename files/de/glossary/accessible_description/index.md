---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzerschnittstellenelements, die zusätzliche Informationen liefert, um Nutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist einem HTML- oder SVG-Element zugeordnet und gibt Benutzern zusätzlichen Kontext zu dessen Zweck, der über das hinausgeht, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Nutzer, die sich auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} verlassen. Eine zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Accessibility-Trees")}}.

Beispielsweise wird der zugängliche Name einer {{htmlelement("table")}} durch deren erstes {{htmlelement("caption")}} bereitgestellt. Bei komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, als Beschreibung dienen. Diese können ein Absatz direkt vor oder nach der Tabelle sowohl visuell als auch im Quellcode sein. Befindet sich die Beschreibung an anderer Stelle im Quellcode, oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich dazu, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, stellt das `<label>` für den {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen bereit. Eine gute zugängliche Beschreibung enthält die Anforderungen für das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit über das Attribut `aria-describedby` mit dem Input verknüpft werden, welches sie dem Accessibility-Tree als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textzeichenfolgen reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs des Inputs die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung als zusammengefügter Text und Textersetzungen aller Listeneinträge bereitgestellt.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite prüfen: Schauen Sie sich das Accessibility-Tab der Entwicklertools Ihres Browsers an, das die Zugänglichkeitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen in Reihenfolge überprüft, bis sie definiert ist:

1. Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

2. Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description).

3. Sprachspezifische Funktionen, die an der Berechnung der Beschreibung teilnehmen, falls die Funktion nicht bereits zur Definition des {{Glossary("accessible_name", "zugänglichen Namens")}} verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es sich befindet.
   - {{htmlelement("input")}}-Buttons (mit Attribut `button`, `submit` oder `reset` für den Typ) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in untergeordneten Textelementen enthalten ist (z.B. [`<text>`](/de/docs/Web/SVG/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keiner der obigen Punkte eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut verwendet, vorausgesetzt, `title` ist nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element.

5. Falls keiner der obigen Punkte eine zugängliche Beschreibung definiert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind in der [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility-Tree")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
