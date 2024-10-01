---
title: Accessible description
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **accessible description** ist die Beschreibung eines Benutzerschnittstellenelements, die zusätzliche Informationen bietet, um Benutzern von unterstützender Technologie zu helfen, das UI-Element und seinen Kontext zu verstehen. Es ist mit einem HTML- oder SVG-Element verbunden und bietet den Benutzern zusätzlichen Kontext über seinen Zweck über das hinaus, was durch den {{Glossary("accessible_name", "accessible name")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf Hilfstechnologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die accessible description eines Elements ist Teil des {{Glossary("accessibility_tree", "accessibility tree")}}.

Zum Beispiel wird der accessible name eines {{htmlelement("table")}} durch seine erste {{htmlelement("caption")}} bereitgestellt. Bei komplexen Datentabellen kann ein bis zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich an anderer Stelle in der Quellcode-Reihenfolge befindet oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen accessible name. Eine gute accessible description beinhaltet die Anforderungen für das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Es kann explizit über das `aria-describedby`-Attribut mit dem Eingabefeld verknüpft werden, das es dem accessibility tree als „Beschreibung“ für diesen Knoten hinzufügt.

Beschreibungen werden auf Textstrings reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs des Eingabefelds die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung zu einem zusammengefügten Text und Textequivalenten aller Listenelemente.

Sie können die accessible description für jedes Element auf Ihrer Seite inspizieren: Schauen Sie sich den Barrierefreie-Ausgaben-Tab der Entwicklertools Ihres Browsers an, der die Zugänglichkeitsinformationen für das derzeit ausgewählte Element bietet.

## Berechnung der Accessible Description

Für HTML-Elemente, wenn ein Element keine accessible description hat, muss die Beschreibung programmgesteuert mit dem zugehörigen Element verbunden sein. Das Accessibility Object Model (AOM) berechnet die accessible description, indem es diese Merkmale in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Berechnung der Beschreibung teilnehmen, wenn das Merkmal nicht bereits verwendet wird, um den {{Glossary("accessible_name", "accessible name")}} zu definieren. Beispielsweise:

   - Eine {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}} beschrieben, in der sie verschachtelt ist.
   - {{htmlelement("input")}}-Buttons (mit Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in nachfolgenden Textcontainer-Elementen enthalten ist (d. h. [`<text>`](/de/docs/Web/SVG/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "accessible name")}} verwendet werden.

4. Wenn keine der oben genannten Möglichkeiten eine Beschreibung bietet, wird das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut verwendet, falls der `title` nicht der {{Glossary("accessible_name", "accessible name")}} für dieses Element ist.

5. Wenn keine der oben genannten Möglichkeiten eine accessible description definiert, bleibt die accessible description leer.

Die Schritte zur Definition der accessible description in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation) definiert. Die accessible description für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd) aufgezählt werden.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accessibility](/de/docs/Web/Accessibility)
- [Accessibility lernen](/de/docs/Learn/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Accessibility")}}
  - {{Glossary("Accessibility_tree", "Accessibility tree")}}
  - {{Glossary("Accessible_name", "Accessible name")}}
  - {{Glossary("ARIA", "ARIA")}}
