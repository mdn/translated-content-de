---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen liefert, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verbunden und gibt Benutzern zusätzlichen Kontext über seinen Zweck, über das hinaus, was der {{Glossary("accessible_name", "zugängliche Name")}} des Elements bereitstellt. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeitsbaums")}}.

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch ihre erste {{htmlelement("caption")}} bereitgestellt. Im Falle komplexer Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, als Beschreibung dienen. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich anderswo in der Quellreihenfolge befindet oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ebenso, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für die {{htmlelement("input")}} des Typs `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung umfasst die Anforderungen für das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit der Eingabe über ihr `aria-describedby`-Attribut verknüpft werden, welches es als 'Beschreibung' für diesen Knoten dem Zugänglichkeitsbaum hinzufügt.

Beschreibungen werden zu Textzeichenfolgen reduziert. In unserem Passwort-Beispiel, wenn der `aria-describedby`-Attributwert der Eingabe die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung zu einem zusammengefügten Text und den Textequivalenten aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite inspizieren: Schauen Sie sich den Zugänglichkeitstab in den Entwicklertools Ihres Browsers an. Dort wird die Zugänglichkeitsinformation für das derzeit ausgewählte Element bereitgestellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Funktionen der Reihe nach überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Funktionen, die an der Berechnung der Beschreibung teilnehmen, wenn die Funktion nicht bereits zur Definition des {{Glossary("accessible_name", "zugänglichen Namens")}} verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}} beschrieben, in denen es verschachtelt ist.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in untergeordneten Textcontainerelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), falls sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Falls keines der oben genannten eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, wenn `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keiner der oben genannten eine zugängliche Beschreibung definiert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation)) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die im [SVG-AAM Accessible Description](https://w3c.github.io/svg-aam/#mapping_additional_nd)) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Zugänglichkeit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Zugänglichkeit")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
