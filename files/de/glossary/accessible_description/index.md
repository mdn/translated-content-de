---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bietet, um Nutzern assistiver Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verknüpft und gibt den Nutzern zusätzlichen Kontext über die Zweckbestimmung des Elements hinaus, die der {{Glossary("accessible_name", "zugängliche Name")}} des Elements bietet. Dies ist besonders wichtig für Nutzer, die auf assistive Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeitsbaums")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Bei komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Falls an anderer Stelle in der Quellcode-Reihenfolge, oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich, wenn ein Nutzer gebeten wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung umfasst die Anforderungen für das Passwort auf eine Weise, die für alle Nutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über dessen `aria-describedby`-Attribut verknüpft werden, was sie als 'Beschreibung' für diesen Knoten in den Zugänglichkeitsbaum aufnimmt.

Beschreibungen werden auf Zeichenfolgen reduziert. In unserem Passwortbeispiel, wenn der `aria-describedby`-Attributwert des Eingabefelds die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung der verkettete Text und die Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite inspizieren: Sehen Sie im Zugänglichkeits-Tab der Entwicklertools Ihres Browsers nach, der die Zugänglichkeitsinformationen für das derzeit ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmgesteuert mit dem betreffenden Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Merkmale in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Berechnung der Beschreibung teilnehmen, wenn das Merkmal nicht bereits zur Definition des {{Glossary("accessible_name", "zugänglichen Namens")}} verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es verschachtelt ist.
   - {{htmlelement("input")}}-Schaltflächen (mit Typattribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, ansonsten der Text, der in nachgeordneten Textelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der oben genannten Merkmale eine Beschreibung bereitstellen, wird das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut verwendet, wenn das `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keine der oben definierten Merkmale eine zugängliche Beschreibung definieren, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind in der [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgezählt sind.

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
  - {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
