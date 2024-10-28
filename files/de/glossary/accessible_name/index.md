---
title: Zugänglicher Name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GlossarySidebar}}

Ein **zugänglicher Name** ist der Name eines Benutzeroberflächenelements; es ist der Text, der einem HTML-Element zugeordnet ist und den Nutzern von unterstützender Technologie ein Label für das Element bietet.

Zugängliche Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft den Nutzern zu verstehen, wofür das Element gedacht ist und wie sie mit ihm interagieren können. Im Allgemeinen sollten zugängliche Namen für Elemente eindeutig auf einer Seite sein. Dies hilft den Nutzern, ein Element von anderen Elementen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Je nach Element und HTML-Markup kann der Wert des zugänglichen Namens aus sichtbarem (z. B. der Text innerhalb von {{HTMLElement("figcaption")}}) oder unsichtbarem (z. B. dem `aria-label`-Attribut, das auf ein Element gesetzt ist) Inhalt oder einer Kombination aus beidem abgeleitet werden. Wie der zugängliche Name eines Elements bestimmt wird, basiert auf der [Berechnung des zugänglichen Namens](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als zugänglichen Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren zugänglichen Namen aus ihrem Inhalt beziehen. Zum Beispiel hat der Hyperlink `<a href="foo.html">Bar</a>` den zugänglichen Namen "Bar."

Andere Elemente beziehen ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente. Zum Beispiel, wenn ein {{HTMLElement("fieldset")}} oder {{HTMLElement("table")}}-Element ein untergeordnetes {{HTMLElement("legend")}}- oder {{HTMLElement("caption")}}-Element enthält, erfolgt die Zuordnung des geschachtelten Elements, das einen zugänglichen Namen für das übergeordnete Element liefert, automatisch. Bei Formularelementen wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} kommt der zugängliche Name vom zugehörigen {{HTMLElement("label")}}-Element. Die Zuordnung muss explizit definiert werden, indem das `for`-Attribut im `<label>`-Element so gesetzt wird, dass es mit dem `id`-Attribut des Formularelements übereinstimmt. Alternativ wird eine implizite Zuordnung erstellt, wenn das Formularkontroll-Element direkt innerhalb des `<label>`-Elements verschachtelt ist.

Bei einigen Elementen kommt der zugängliche Name von den Attributen des Elements; zum Beispiel das `alt`-Attribut im Fall von {{HTMLElement("img")}}. Angegeben durch `<img src="grape.jpg" alt="banana"/>`, ist der zugängliche Name des Bildes "banana."

Um eine Verbindung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element herzustellen, kann das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, der mit einem Benutzeroberflächenelement, das einen zugänglichen Namen benötigt, in Verbindung gebracht werden kann, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die In-Text-Markup wie {{HTMLElement("code")}}, {{HTMLElement("del")}} und {{HTMLElement("mark")}} kennzeichnen.

Viele Elemente, wie z.B. Textabschnitte, benötigen keinen zugänglichen Namen. Alle Bedienelemente sollten jedoch einen zugänglichen Namen haben. Alle Bilder, die Informationen vermitteln und nicht rein dekorativ sind, ebenfalls.

Hilfstechnologien bieten den Nutzern die Zugänglichkeitsnamenseigenschaft, die den zugänglichen Namen zusammen mit der Rolle des Elements einschließt. Während viele Elemente keinen zugänglichen Namen benötigen, ist es erforderlich, einen zugänglichen Namen bereitzustellen, um den Inhalt von Elementen mit bestimmten [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) ein Abschnitt von Inhalten, der erscheint, nachdem ein Benutzer das zugehörige Element mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle aktiviert hat. Diese Rolle kann auf ein Element gesetzt werden, das keinen erforderlichen Namen benötigt, wie das {{HTMLElement("div")}}-Element. Der `tab` ist das Steuerelement und muss einen zugänglichen Namen haben. Das `tabpanel` ist das untergeordnete (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine bewährte Praxis.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes)
- [Berechnung des zugänglichen Namens und der Beschreibung 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C-Initiative für Web-Barrierefreiheit (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("ARIA", "ARIA")}}
