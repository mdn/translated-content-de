---
title: Accessible description
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Benutzern von unterstützender Technologie zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verbunden und bietet Benutzern zusätzlichen Kontext über seinen Zweck, der über das hinausgeht, was durch den {{Glossary("accessible_name", "accessible name")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeitsbaums")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Falle von komplexen Datentabellen kann ein Satz oder zwei, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz knapp vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Ist es an anderer Stelle in der Quellreihenfolge oder um die Verbindung explizit zu machen, kann das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut verwendet werden, um die Tabelle mit ihrer Beschreibung zu verbinden.

Ähnlich, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für die {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung enthält die Anforderungen an das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über das `aria-describedby` Attribut verknüpft werden, was es dem Zugänglichkeitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden zu Textzeichenfolgen reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby` Attributs des Eingabefelds die `id` eines HTML {{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung verketteter Text und Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für ein beliebiges Element auf Ihrer Seite inspizieren: sehen Sie sich die Zugänglichkeitsregisterkarte Ihrer Entwicklertools im Browser an, die die Zugänglichkeitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung zugänglicher Beschreibungen

Für HTML-Elemente gilt, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmgesteuert mit dem betreffenden Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Merkmale in der angegebenen Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) Attribut.

3. Sprachspezifische Merkmale, die an der Beschreibungsberechnung teilnehmen, wenn das Merkmal nicht bereits zur Definition des {{Glossary("accessible_name", "accessible name")}} verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es eingebettet ist.
   - {{htmlelement("input")}} Buttons (mit dem Typattribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc) Elements, falls vorhanden, andernfalls der Text, der in nachfolgenden Textelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Element/text)), wenn er nicht bereits für den {{Glossary("accessible_name", "accessible name")}} verwendet wird.

4. Wenn keine der oben genannten Merkmale eine Beschreibung liefern, wird das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut verwendet, sofern der `title` nicht der {{Glossary("accessible_name", "accessible name")}} für das Element ist.

5. Wenn keines der oben genannten Merkmale eine zugängliche Beschreibung definiert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition zugänglicher Beschreibungen in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) definiert. Zugängliche Beschreibungen für SVG-Elemente folgen denselben Schritten mit kleinen Unterschieden, die im [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgezählt werden.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Barrierefreiheit erlernen](/de/docs/Learn/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Zugänglichkeit")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}
  - {{Glossary("Accessible_name", "Accessible name")}}
  - {{Glossary("ARIA", "ARIA")}}
