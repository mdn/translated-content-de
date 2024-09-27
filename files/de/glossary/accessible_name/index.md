---
title: Zugänglicher Name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **zugänglicher Name** ist der Name eines Benutzeroberflächenelements; es ist der Text, der einem HTML-Element zugeordnet ist und Benutzern von unterstützenden Technologien ein Label für das Element bietet.

Zugängliche Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft Benutzern, zu verstehen, wofür das Element da ist und wie sie damit interagieren können. Generell sollten zugängliche Namen für Elemente auf einer Seite eindeutig sein. Dies hilft Benutzern, ein Element von anderen Elementen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Je nach Element und HTML-Markup kann der Wert des zugänglichen Namens aus sichtbarem (z.B. dem Text innerhalb von {{HTMLElement("figcaption")}}) oder unsichtbarem (z.B. dem auf ein Element gesetzten `aria-label`-Attribut) Inhalt oder einer Kombination von beidem abgeleitet werden. Wie der zugängliche Name eines Elements ermittelt wird, basiert auf der [Berechnung des zugänglichen Namens](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als zugänglichen Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren zugänglichen Namen aus ihrem Inhalt beziehen. Zum Beispiel hat der Hyperlink `<a href="foo.html">Bar</a>` den zugänglichen Namen "Bar."

Andere Elemente beziehen ihren zugänglichen Namen aus dem Inhalt assoziierter Elemente. Wenn beispielsweise ein {{HTMLElement("fieldset")}}- oder {{HTMLElement("table")}}-Element ein Nachkommen-{{HTMLElement("legend")}}- oder {{HTMLElement("caption")}}-Element enthält, ist die Zuordnung des verschachtelten Elements, das einen zugänglichen Namen für das übergeordnete Element bereitstellt, automatisch. Für Formularelemente wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} stammt der zugängliche Name vom zugeordneten {{HTMLElement("label")}}-Element. Die Zuordnung muss explizit definiert werden, indem das `for`-Attribut im `<label>`-Element so gesetzt wird, dass es mit der `id` des Formularelements übereinstimmt. Alternativ wird eine implizite Zuordnung erstellt, wenn das Formularsteuerungselement direkt innerhalb des `<label>`-Elements verschachtelt ist.

Für einige Elemente stammt der zugängliche Name aus den Attributen des Elements, zum Beispiel das `alt`-Attribut im Fall von {{HTMLElement("img")}}. Gegeben `<img src="grape.jpg" alt="banana"/>`, ist der zugängliche Name des Bildes "banana."

Um eine Zuordnung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element zu erstellen, kann das [`aria-labeledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, um ihn mit einem UI-Element zu verknüpfen, das einen zugänglichen Namen benötigt, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die Inline-Text auszeichnen, wie {{HTMLElement("code")}}, {{HTMLElement("del")}} und {{HTMLElement("mark")}}.

Viele Elemente, wie z.B. Abschnitte von Textinhalt, benötigen keinen zugänglichen Namen. Alle Steuerungselemente sollten jedoch einen zugänglichen Namen haben. Alle Bilder, die Informationen vermitteln und nicht rein dekorativ sind, benötigen dies ebenfalls.

Unterstützende Technologien bieten den Benutzern die Eigenschaft des Zugänglichkeitsnamens, die den zugänglichen Namen zusammen mit der Rolle des Elements umfasst. Während viele Elemente keinen zugänglichen Namen benötigen, ist es notwendig, einen zugänglichen Namen bereitzustellen, um den Inhalt von Elementen mit bestimmten [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) ein Abschnitt von Inhalt, der erscheint, nachdem ein Benutzer das zugehörige Element mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle aktiviert hat. Diese Rolle kann auf ein Element gesetzt werden, das keinen benötigten Namen hat, wie das {{HTMLElement("div")}}-Element. Das `tab` ist die Steuerung und muss einen zugänglichen Namen haben. Das `tabpanel` ist das Kind (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine bewährte Methode.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Zugänglichkeit lernen](/de/docs/Learn/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - [Zugänglichkeit](/de/docs/Glossary/Accessibility)
  - [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree)
  - [Zugängliche Beschreibung](/de/docs/Glossary/Accessible_description)
  - [ARIA](/de/docs/Glossary/ARIA)
