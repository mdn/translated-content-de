---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzerschnittstellenelements, die zusätzliche Informationen bereitstellt, um Benutzern von assistiver Technologie zu helfen, das UI-Element und dessen Kontext zu verstehen. Sie wird einem HTML- oder SVG-Element zugeordnet und gibt Benutzern zusätzlichen Kontext über seinen Zweck, jenseits dessen, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf assistive Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Accessibility Tree")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn anderswo im Quellcode oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

In ähnlicher Weise, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} des Typs `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung enthält die Anforderungen an das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Input über dessen `aria-describedby`-Attribut verknüpft werden, das es dem Accessibility Tree als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textstrings reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs des Inputs die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung ein verketteter Text und die Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite inspizieren: Schauen Sie sich das Accessibility-Tab der Entwicklertools Ihres Browsers an, das die Zugänglichkeitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verbunden werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut.

3. Sprachspezifische Funktionen, die an der Berechnungsbeschreibung teilnehmen, wenn die Funktion nicht bereits verwendet wird, um den {{Glossary("accessible_name", "zugänglichen Namen")}} zu definieren. Zum Beispiel:

   - Eine {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem sie eingebettet ist.
   - {{htmlelement("input")}}-Buttons (mit dem Attribut `type` `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG: Der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in nachgeordneter Textelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), falls sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der oben genannten Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, sofern `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keine der obigen Maßnahmen eine zugängliche Beschreibung definiert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind in [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation)) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die bei [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - {{Glossary("Accessibility", "Zugänglichkeit")}}
  - {{Glossary("Accessibility_tree", "Accessibility Tree")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
