---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Benutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verknüpft und gibt den Benutzern zusätzlichen Kontext über den Zweck des Elements, der über das hinausgeht, was durch den {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements bereitgestellt wird. Dies ist besonders wichtig für Benutzer, die auf unterstützende Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Eine zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Accessibility-Baums")}}.

Beispielsweise wird der zugängliche Name einer {{htmlelement("table")}} durch die erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellreihenfolge. Wenn es sich an anderer Stelle in der Quellreihenfolge befindet oder die Zuordnung explizit gemacht werden soll, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich ist es, wenn ein Benutzer aufgefordert wird, ein Passwort zu erstellen, das `<label>` für das {{htmlelement("input")}} des Typs `password` stellt seinen zugänglichen Namen bereit. Eine gute zugängliche Beschreibung beinhaltet die Anforderungen für das Passwort auf eine Weise, die für alle Benutzer sichtbar ist. Diese kann explizit über das `aria-describedby`-Attribut mit der Eingabe verknüpft werden, wodurch sie dem Accessibility-Baum als 'Beschreibung' für diesen Knoten hinzugefügt wird.

Beschreibungen werden auf Textzeichenfolgen reduziert. In unserem Passworteingabe-Beispiel, wenn der Wert des `aria-describedby`-Attributs des Eingabefelds die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung der zusammengefügte Text und die Textäquivalente aller Listenelemente.

Sie können die zugängliche Beschreibung jedes Elements auf Ihrer Seite inspizieren: Schauen Sie sich den Barrierefreiheitsreiter der Entwicklerwerkzeuge Ihres Browsers an, der die Barrierefreiheitsinformationen für das aktuell ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility-Objektmodell (AOM) berechnet die zugängliche Beschreibung, indem es die folgenden Merkmale in der Reihenfolge überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut.

3. Sprachspezifische Merkmale, die an der Beschreibungsberechnung teilnehmen, wenn das Merkmal nicht bereits verwendet wird, um den {{Glossary("accessible_name", "zugänglichen Namen")}} zu definieren. Beispielsweise:
   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}} beschrieben, in dem es eingebettet ist.
   - {{htmlelement("input")}} Buttons (mit Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG der Inhalt des [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc) Elements, falls vorhanden, andernfalls der Text, der in nachgeordneten Textcontaining-Elementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Reference/Element/text)), wenn sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Falls keine der oben genannten Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut verwendet, wenn der `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Falls keine der oben genannten Optionen eine zugängliche Beschreibung definiert, bleibt die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation) definiert. Zugängliche Beschreibung für SVG-Elemente folgt den gleichen Schritten mit kleinen Unterschieden, die unter [SVG-AAM Accessible Description](https://w3c.github.io/svg-aam/#mapping_additional_nd) aufgeführt sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility-Baum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
