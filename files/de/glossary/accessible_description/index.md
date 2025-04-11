---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bietet, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verknüpft und gibt Benutzern zusätzlichen Kontext über den Zweck des Elements, der über das hinausgeht, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die sich auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} verlassen. Eine zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeitsbaums")}}.

Zum Beispiel wird der zugängliche Name eines {{htmlelement("table")}} durch dessen erstes {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein Satz oder zwei, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich anderswo in der Quellcode-Reihenfolge befindet oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, stellt das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen bereit. Eine gute zugängliche Beschreibung umfasst die Anforderungen für das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über dessen `aria-describedby`-Attribut verknüpft werden, das es dem Zugänglichkeitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textstrings reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs des Eingabefeldes die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung verketteter Text und Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite überprüfen: Schauen Sie sich den Accessibility-Tab der Entwicklertools Ihres Browsers an, der die Zugänglichkeitsinformationen für das derzeit ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Beschreibungsteilnahme teilnehmen, sofern das Merkmal nicht bereits verwendet wird, um den {{Glossary("accessible_name", "zugänglichen Namen")}} zu definieren. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es verschachtelt ist.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in nachfolgenden Textelementen (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)) enthalten ist, sofern sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der oben genannten eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, sofern der `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keine der oben genannten Definitionen eine zugängliche Beschreibung bietet, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition einer zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) festgelegt. Die zugängliche Beschreibung für SVG-Elemente folgt den gleichen Schritten mit kleinen Unterschieden, die im [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgezählt sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accessibility](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Accessibility")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
