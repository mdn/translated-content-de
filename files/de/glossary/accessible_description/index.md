---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verbunden und gibt Benutzern zusätzlichen Kontext über seinen Zweck, über das hinaus, was der {{Glossary("accessible_name", "zugängliche Name")}} des Elements bereitstellt. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeitstrees")}}.

Beispielsweise wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Befindet sich die Beschreibung anderswo in der Quellreihenfolge oder soll die Zuordnung explizit gemacht werden, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ebenso, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, liefert das `<label>` für die {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung enthält die Anforderungen an das Passwort auf eine Art und Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über das Attribut `aria-describedby` verknüpft werden, das es dem Zuganglichkeitstree als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textzeichenfolgen reduziert. In unserem Passwortbeispiel, wenn der Wert des Attributs `aria-describedby` des Eingabefelds die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung der zusammengefügte Text und die Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite inspizieren: Schauen Sie in die Zugänglichkeitsregisterkarte der Entwicklertools Ihres Browsers, die die Zugänglichkeitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung durch Überprüfung dieser Merkmale in der Reihenfolge, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Beschreibungsberechnung teilnehmen, wenn das Merkmal nicht bereits zur Definition des {{Glossary("accessible_name", "zugänglichen Namens")}} verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es verschachtelt ist.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG wird der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc)-Elements verwendet, wenn vorhanden, andernfalls der Text, der in nachfolgenden Textelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keiner der obigen Punkte eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut verwendet, wenn `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keiner der obigen Punkte eine zugängliche Beschreibung definiert, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition einer zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) definiert. Zugängliche Beschreibungen für SVG-Elemente folgen denselben Schritten mit kleinen Unterschieden, die im [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgezählt sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Website Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Zugänglichkeit")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
