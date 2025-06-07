---
title: Barrierefreie Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{GlossarySidebar}}

Eine **barrierefreie Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Benutzern von unterstützender Technologie das Verständnis des UI-Elements und seines Kontexts zu erleichtern. Sie ist mit einem HTML- oder SVG-Element verknüpft und bietet Benutzern zusätzlichen Kontext zu seinem Zweck, der über das hinausgeht, was vom {{Glossary("accessible_name", "barrierefreien Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die sich auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} verlassen. Die barrierefreie Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Barrierefreiheitsbaums")}}.

Zum Beispiel wird der barrierefreie Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung bieten. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn die Beschreibung an anderer Stelle in der Quellreihenfolge steht oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verbinden.

Ebenso, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen barrierefreien Namen. Eine gute barrierefreie Beschreibung enthält die Anforderungen an das Passwort, auf eine Art und Weise, die für alle Benutzer sichtbar ist. Es kann explizit über sein `aria-describedby`-Attribut mit dem Eingabefeld verknüpft werden, was es dem Barrierefreiheitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden zu Textketten reduziert. In unserem Passwort-Beispiel, wenn der `aria-describedby`-Attributwert des Eingabefeldes die `id` einer HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung aus dem zusammengefügten Text und den Textequivalenten aller Listenelemente gebildet.

Sie können die barrierefreie Beschreibung für jedes Element auf Ihrer Seite inspizieren: Sehen Sie sich das Barrierefreiheits-Tab der Entwicklertools Ihres Browsers an, das die Barrierefreiheitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der barrierefreien Beschreibung

Für HTML-Elemente gilt: Wenn ein Element keine barrierefreie Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die barrierefreie Beschreibung, indem es diese Funktionen in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Funktionen, die an der Beschreibungsberechnung teilnehmen, wenn die Funktion nicht bereits verwendet wird, um den {{Glossary("accessible_name", "barrierefreien Namen")}} zu definieren. Zum Beispiel:

   - Eine {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}}, in welcher sie verschachtelt ist, beschrieben.
   - {{htmlelement("input")}}-Schaltflächen (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, ansonsten der Text, der in Nachfahren-Textcontainern enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), wenn diese nicht bereits für den {{Glossary("accessible_name", "barrierefreien Namen")}} verwendet werden.

4. Wenn keine der oben genannten Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, wenn der `title` nicht der {{Glossary("accessible_name", "barrierefreie Name")}} für dieses Element ist.

5. Wenn keine der oben genannten Optionen eine barrierefreie Beschreibung definiert, ist die barrierefreie Beschreibung leer.

Die Schritte zur Definition einer barrierefreien Beschreibung in HTML sind im [HTML-AAM Barrierefreie Beschreibung](https://w3c.github.io/html-aam/#accdesc-computation)) definiert. Die barrierefreie Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die im [SVG-AAM Barrierefreie Beschreibung](https://w3c.github.io/svg-aam/#mapping_additional_nd)) aufgeführt sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernen Sie Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C-Web-Accessibility-Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
  - {{Glossary("Accessible_name", "Barrierefreier Name")}}
  - {{Glossary("ARIA", "ARIA")}}
