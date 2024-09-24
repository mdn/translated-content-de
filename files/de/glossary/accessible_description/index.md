---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Benutzern von Hilfstechnologien das Verständnis des UI-Elements und seines Kontexts zu erleichtern. Sie ist mit einem HTML- oder SVG-Element verbunden und bietet Benutzern zusätzlichen Kontext zu ihrem Zweck, der über das hinausgeht, was der {{glossary("accessible name")}} des Elements bereitstellt. Dies ist besonders wichtig für Benutzer, die auf Hilfstechnologien wie {{glossary("Screen_reader", "Bildschirmleser")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{glossary("accessibility tree")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich an anderer Stelle in der Quellreihenfolge befindet oder wenn die Zuordnung explizit gemacht werden soll, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für den {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung enthält die Anforderungen für das Passwort in einer Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über das `aria-describedby`-Attribut verknüpft werden, das sie dem Zugänglichkeitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden zu Textzeichenfolgen reduziert. In unserem Beispiel mit dem Passwort, wenn der Wert des `aria-describedby`-Attributs der `id` einer HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung als zusammengefügter Text und Textäquivalente aller Listenelemente dargestellt.

Sie können die zugängliche Beschreibung für ein beliebiges Element auf Ihrer Seite inspizieren: Schauen Sie sich im Zugänglichkeitstab der Entwicklertools Ihres Browsers um, der die Zugänglichkeitsinformationen für das derzeit ausgewählte Element liefert.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmgesteuert mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen in der Reihenfolge prüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) Attribut.

3. Sprachspezifische Funktionen, die an der Beschreibungsermittlung teilnehmen, wenn die Funktion nicht bereits verwendet wird, um den {{glossary("accessible name")}} zu definieren. Zum Beispiel:

   - Eine {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}}, in dem sie verschachtelt ist, beschrieben.
   - {{htmlelement("input")}}-Buttons (mit Attributtyp `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG wird der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc)-Elements, falls vorhanden, ansonsten der Text in nachfolgenden Textcontainer-Elementen (d.h. [`<text>`](/de/docs/Web/SVG/Element/text)), verwendet, wenn sie nicht bereits für den {{glossary("accessible name")}} genutzt werden.

4. Wenn keine der oben genannten Möglichkeiten eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Global_attributes#title) Attribut verwendet, sofern `title` nicht der {{glossary("accessible name")}} für dieses Element ist.

5. Wenn keine der oben genannten Kriterien eine zugängliche Beschreibung definieren, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition einer zugänglichen Beschreibung in HTML sind in der [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) festgelegt. Für SVG-Elemente folgen sie denselben Schritten mit kleinen Unterschieden, die in [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accessibility](/de/docs/Web/Accessibility)
- [Learn accessibility](/de/docs/Learn/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [The W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility")}}
  - {{Glossary("Accessibility tree")}}
  - {{Glossary("Accessible name")}}
  - {{Glossary("ARIA")}}
