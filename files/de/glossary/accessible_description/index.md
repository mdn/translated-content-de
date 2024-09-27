---
title: Accessible description
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzeroberflächenelements, die zusätzliche Informationen bereitstellt, um Nutzern von unterstützenden Technologien zu helfen, das UI-Element und seinen Kontext zu verstehen. Sie ist mit einem HTML- oder SVG-Element verbunden und gibt den Nutzern zusätzlichen Kontext über dessen Zweck, der über das hinausgeht, was durch den [zugänglichen Namen](/de/docs/Glossary/accessible_name) des Elements bereitgestellt wird. Dies ist besonders wichtig für Nutzer, die auf unterstützende Technologien wie [Screenreader](/de/docs/Glossary/Screen_reader) angewiesen sind. Eine zugängliche Beschreibung eines Elements ist Teil des [Barrierefreiheitsbaums](/de/docs/Glossary/accessibility_tree).

Zum Beispiel wird der zugängliche Name einer {{htmlelement("table")}} durch die erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, eine Beschreibung liefern. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich an anderer Stelle in der Quellreihenfolge befindet oder um die Zuordnung explizit zu machen, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich, wenn ein Nutzer aufgefordert wird, ein Passwort zu erstellen, bietet das `<label>` für das {{htmlelement("input")}} vom Typ `password` seinen zugänglichen Namen. Eine gute zugängliche Beschreibung beinhaltet die Anforderungen für das Passwort in einer Weise, die für alle Nutzer sichtbar ist. Sie kann explizit mit dem `aria-describedby`-Attribut des Eingabefeldes verknüpft werden, was sie dem Barrierefreiheitsbaum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textstrings reduziert. In unserem Passwortbeispiel, wenn der Wert des `aria-describedby`-Attributs des Eingabefeldes die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, wird die Beschreibung als verketteter Text und als Textequivalente all dieser Listenelemente bereitgestellt.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite überprüfen: Sehen Sie sich den Accessibility-Tab der Entwicklertools Ihres Browsers an, der die Barrierefreiheitsinformationen für das derzeit ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung durch Überprüfung dieser Merkmale in der angegebenen Reihenfolge, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Berechnung der Beschreibung teilnehmen, sofern das Merkmal nicht bereits zur Definition des [zugänglichen Namens](/de/docs/Glossary/accessible_name) verwendet wird. Zum Beispiel:

   - Ein {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}} beschrieben, in dem es eingebettet ist.
   - {{htmlelement("input")}}-Buttons (mit dem Typattribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG der Inhalt des [`<desc>`](/de/docs/Web/SVG/Element/desc)-Elements, falls vorhanden, andernfalls der Text, der in nachfolgeenden Textelelementen enthalten ist (d.h. [`<text>`](/de/docs/Web/SVG/Element/text)), wenn sie nicht bereits für den [zugänglichen Namen](/de/docs/Glossary/accessible_name) verwendet werden.

4. Wenn keine der oben genannten Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut verwendet, wenn `title` nicht der [zugängliche Name](/de/docs/Glossary/accessible_name) für dieses Element ist.

5. Wenn keine der oben genannten Bedingungen eine zugängliche Beschreibung definiert, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition der zugänglichen Beschreibung in HTML sind im [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die im [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - [Barrierefreiheit](/de/docs/Glossary/Accessibility)
  - [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree)
  - [Zugänglicher Name](/de/docs/Glossary/Accessible_name)
  - [ARIA](/de/docs/Glossary/ARIA)
