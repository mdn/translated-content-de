---
title: Zugängliche Beschreibung
slug: Glossary/Accessible_description
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Eine **zugängliche Beschreibung** ist die Beschreibung eines Elements der Benutzeroberfläche, die zusätzliche Informationen bereitstellt. Sie hilft Personen, die assistive Technologien verwenden, das Element und seinen Kontext zu verstehen. Sie ist einem HTML- oder SVG-Element zugeordnet und ergänzt dessen {{Glossary("accessible_name", "zugänglichen Namen")}} um weitere Informationen zum Zweck des Elements. Das ist besonders wichtig für Personen, die auf assistive Technologien wie {{Glossary("Screen_reader", "Screenreader")}} angewiesen sind. Die zugängliche Beschreibung eines Elements ist Teil des {{Glossary("accessibility_tree", "Barrierefreiheitsbaums")}}.

Der zugängliche Name einer {{htmlelement("table")}} wird beispielsweise durch ihre erste {{htmlelement("caption")}} bereitgestellt. Bei komplexen Datentabellen können ein oder zwei Sätze, die die Tabelle erläutern, als Beschreibung dienen. Diese können als Absatz unmittelbar vor oder nach der Tabelle stehen – sowohl in der visuellen Darstellung als auch in der Reihenfolge des Quellcodes. Steht die Beschreibung an anderer Stelle im Quellcode oder soll die Zuordnung ausdrücklich festgelegt werden, kann das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet werden, um die Tabelle mit ihrer Beschreibung zu verknüpfen.

Wenn eine Person aufgefordert wird, ein Passwort zu erstellen, stellt entsprechend das `<label>` für das {{htmlelement("input")}} vom Typ `password` dessen zugänglichen Namen bereit. Eine gute zugängliche Beschreibung nennt die Anforderungen an das Passwort so, dass sie für alle sichtbar sind. Sie kann über das Attribut `aria-describedby` ausdrücklich mit dem Eingabefeld verknüpft werden. Dadurch wird sie im Barrierefreiheitsbaum als „Beschreibung“ dieses Knotens erfasst.

Beschreibungen werden auf Textzeichenfolgen reduziert. Wenn in unserem Passwortbeispiel der Wert des Attributs `aria-describedby` des Eingabefelds der `id` eines HTML-Elements {{htmlelement("ul")}} mit einer Liste von Anforderungen entspricht, besteht die Beschreibung aus dem aneinandergereihten Text und den Textäquivalenten aller Listeneinträge.

Sie können die zugängliche Beschreibung jedes Elements auf Ihrer Seite prüfen: Auf der Registerkarte für Barrierefreiheit in den Entwicklerwerkzeugen Ihres Browsers finden Sie die Barrierefreiheitsinformationen zum aktuell ausgewählten Element.

## Berechnung der zugänglichen Beschreibung

Wenn ein HTML-Element keine zugängliche Beschreibung hat, muss eine Beschreibung programmatisch mit dem betreffenden Element verknüpft werden. Das Accessibility Object Model (AOM) berechnet die zugängliche Beschreibung, indem es die folgenden Merkmale in dieser Reihenfolge prüft, bis eine Beschreibung ermittelt ist:

1. Das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

2. Das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description).

3. Sprachspezifische Merkmale, die bei der Berechnung der Beschreibung berücksichtigt werden, sofern das jeweilige Merkmal nicht bereits den {{Glossary("accessible_name", "zugänglichen Namen")}} definiert. Zum Beispiel:
   - Ein {{htmlelement("summary")}} wird durch den Inhalt des {{htmlelement("details")}}-Elements beschrieben, in dem es verschachtelt ist.
   - {{htmlelement("input")}}-Schaltflächen (mit dem `type`-Attribut `button`, `submit` oder `reset`) werden durch den Wert ihres `value`-Attributs beschrieben.
   - Bei SVG wird der Inhalt des {{svgelement("desc")}}-Elements verwendet, sofern es vorhanden ist. Andernfalls wird der Text in untergeordneten Textcontainerelementen (also {{svgelement("text")}}) verwendet, sofern diese nicht bereits für den {{Glossary("accessible_name", "zugänglichen Namen")}} verwendet werden.

4. Wenn keine der vorherigen Möglichkeiten eine Beschreibung liefert, wird das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verwendet, sofern `title` nicht den {{Glossary("accessible_name", "zugänglichen Namen")}} dieses Elements bildet.

5. Wenn auch dadurch keine zugängliche Beschreibung definiert wird, ist die zugängliche Beschreibung leer.

Die Schritte zum Definieren der zugänglichen Beschreibung in HTML sind unter [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation) festgelegt. Für SVG-Elemente gelten dieselben Schritte mit geringfügigen Unterschieden, die unter [SVG-AAM Accessible Description](https://w3c.github.io/svg-aam/#mapping_additional_nd) aufgeführt sind.

## Siehe auch

- [Berechnung des zugänglichen Namens und der zugänglichen Beschreibung 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Barrierefreiheit im Web](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die Web Accessibility Initiative (WAI) des W3C](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
