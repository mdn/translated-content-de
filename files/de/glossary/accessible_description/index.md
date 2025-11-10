---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bietet, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verknüpft und gibt Benutzern zusätzlichen Kontext über dessen Zweck, der über das hinausgeht, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Accessibility-Baums")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch seine erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung bieten. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn sie anderswo in der Quellreihenfolge steht oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich ist es, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen. Das `<label>` für das {{htmlelement("input")}} vom Typ `password` liefert seinen zugänglichen Namen. Eine gute zugängliche Beschreibung umfasst die Anforderungen an das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Input über dessen `aria-describedby`-Attribut verknüpft werden, was sie dem Accessibility-Baum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textzeichenfolgen reduziert. In unserem Passwort-Beispiel, wenn der Wert des `aria-describedby`-Attributs des Inputs die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, besteht die Beschreibung aus einem zusammengefügten Text und Textequivalenten aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite inspizieren: Sehen Sie sich den Accessibility-Tab der Entwickler-Tools Ihres Browsers an, der die Accessibility-Informationen für das aktuell ausgewählte Element liefert.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmgesteuert mit dem zugehörigen Element verbunden werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen in der Reihenfolge prüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Funktionen, die an der Beschreibungskomposition teilnehmen, falls das Merkmal nicht bereits zur Definition des {{Glossary("accessible_name", "zugänglichen Namens")}} verwendet wird. Zum Beispiel:
   - Ein {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}} beschrieben, in dem es sich befindet.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, ansonsten der Text, der in den nachgeordneten Textcontainer-Elementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), falls sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der oben genannten Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, sofern der `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keine der oben genannten Definitionen eine zugängliche Beschreibung liefert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation)) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://w3c.github.io/svg-aam/#mapping_additional_nd)) aufgezählt sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility-Baum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
