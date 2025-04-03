---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, das zusätzliche Informationen bereitstellt, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Es ist einem HTML- oder SVG-Element zugeordnet und gibt den Benutzern zusätzlichen Kontext zu seinem Zweck, über das hinaus, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil der {{Glossary("accessibility_tree", "Barrierefreiheitsbaum")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch seine erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein Satz oder zwei, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn anderswo in der Quellcode-Reihenfolge oder um die Zuordnung explizit zu machen, kann das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich dazu, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung beinhaltet die Anforderungen an das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Es kann explizit mit der Eingabe über das `aria-describedby`-Attribut verknüpft werden, das es dem Barrierefreiheitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textketten reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs der `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung als zusammengefasster Text und Textequivalente aller Listenelemente aufgelöst.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite überprüfen: Schauen Sie in den Barrierefreiheits-Tab der Entwicklerwerkzeuge Ihres Browsers, der die Barrierefreiheitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Bei HTML-Elementen, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem verwandten Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Eigenschaften in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut.

3. Sprachspezifische Funktionen, die an der Beschreibungsberechnung teilnehmen, wenn die Funktion nicht bereits verwendet wird, um den {{Glossary("accessible_name", "zugänglichen Namen")}} zu definieren. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}}, in dem es verschachtelt ist, beschrieben.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, ansonsten der Text, der in nachfolgenden Textcontainerelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keiner der oben genannten eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut verwendet, wenn der `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keiner der oben genannten eine zugängliche Beschreibung liefert, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)) aufgelistet sind.

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
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
