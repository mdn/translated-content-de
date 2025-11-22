---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

Eine **zugängliche Beschreibung** ist die Beschreibung eines Benutzerschnittstellenelements, die zusätzliche Informationen bereitstellt, um Benutzern assistiver Technologien das Verständnis des UI-Elements und seines Kontexts zu erleichtern. Sie ist mit einem HTML- oder SVG-Element verknüpft und gibt den Benutzern zusätzlich zum {{Glossary("accessible_name", "zugänglichen Namen")}} des Elements weiteren Kontext über den Zweck. Dies ist besonders wichtig für Benutzer, die auf assistive Technologien wie {{Glossary("Screen_reader", "Bildschirmleser")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Zugänglichkeit-Baums")}}.

Ein Beispiel: Der zugängliche Name einer {{htmlelement("table")}} wird durch die erste {{htmlelement("caption")}} bereitgestellt. Im Fall von komplexen Datentabellen kann ein oder zwei Sätze, die die Tabelle beschreiben, als Beschreibung dienen. Dies kann ein Absatz direkt vor oder nach der Tabelle sein, sowohl visuell als auch in der Quellcode-Reihenfolge. Wenn es sich an einer anderen Stelle in der Quellreihenfolge befindet oder die Verknüpfung explizit gemacht werden soll, kann das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Ähnlich dazu: Wenn ein Benutzer ein Passwort erstellen soll, stellt das `<label>` für das {{htmlelement("input")}} des Typs `password` seinen zugänglichen Namen bereit. Eine gute zugängliche Beschreibung enthält die Anforderungen für das Passwort in einer Weise, die für alle Benutzer sichtbar ist. Sie kann explizit mit dem Eingabefeld über das `aria-describedby`-Attribut verknüpft werden, das es dem Zugänglichkeit-Baum als 'Beschreibung' für diesen Knoten hinzufügt.

Beschreibungen werden auf Textzeichenfolgen reduziert. In unserem Passwort-Beispiel, wenn der Wert des `aria-describedby`-Attributs des Eingabefelds die `id` eines HTML-{{htmlelement("ul")}} mit einer Liste von Anforderungen ist, ist die Beschreibung der zusammengeführte Text und die Textequivalente aller Listenelemente.

Sie können die zugängliche Beschreibung für jedes Element auf Ihrer Seite überprüfen: Schauen Sie im Zugänglichkeits-Tab der Entwicklertools Ihres Browsers, der die Zugänglichkeitsinformationen für das derzeit ausgewählte Element bereitstellt.

## Berechnung der zugänglichen Beschreibung

Für HTML-Elemente, wenn ein Element keine zugängliche Beschreibung hat, muss die Beschreibung programmatisch mit dem zugehörigen Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es diese Merkmale nacheinander überprüft, bis sie definiert ist:

1. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.

2. [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut.

3. Sprachspezifische Merkmale, die an der Beschreibung teilnehmen, wenn das Merkmal nicht bereits verwendet wird, um den {{Glossary("accessible_name", "zugänglichen Namen")}} zu definieren. Zum Beispiel:
   - Eine {{htmlelement("summary")}} wird durch den Inhalt der {{htmlelement("details")}} beschrieben, in der sie verschachtelt ist.
   - {{htmlelement("input")}}-Buttons (mit dem Typ-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - In SVG, der Inhalt des {{svgelement("desc")}}-Elements, falls vorhanden, andernfalls der Text in nachgeordneten Textelementen (z. B. {{svgelement("text")}}), sofern sie nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der obigen Optionen eine Beschreibung liefert, wird das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut verwendet, sofern der `title` nicht der {{Glossary("accessible_name", "zugängliche Name")}} für dieses Element ist.

5. Wenn keine der obigen Optionen eine zugängliche Beschreibung definiert, ist die zugängliche Beschreibung leer.

Die Schritte zur Definition einer zugänglichen Beschreibung in HTML sind in der [HTML-AAM Zugängliche Beschreibung](https://w3c.github.io/html-aam/#accdesc-computation) definiert. Die zugängliche Beschreibung für SVG-Elemente folgt denselben Schritten mit kleinen Unterschieden, die in der [SVG-AAM Zugängliche Beschreibung](https://w3c.github.io/svg-aam/#mapping_additional_nd) aufgelistet sind.

## Siehe auch

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
