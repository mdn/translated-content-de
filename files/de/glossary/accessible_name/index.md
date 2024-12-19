---
title: Accessible name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein **accessible name** (zugänglicher Name) ist der Name eines Benutzeroberflächenelements; er ist der Text, der einem HTML-Element zugeordnet ist und den Benutzern von unterstützenden Technologien ein Label für das Element bereitstellt.

Zugängliche Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft den Benutzern zu verstehen, wofür das Element gedacht ist und wie sie damit interagieren können. Im Allgemeinen sollten zugängliche Namen für Elemente eindeutig auf einer Seite sein. Dies hilft den Benutzern, ein Element von anderen Elementen zu unterscheiden und das gewünschte Element zu identifizieren, mit dem sie interagieren möchten.

Je nach Element und HTML-Markup kann der Wert des zugänglichen Namens aus sichtbarem (z.B. der Text innerhalb des {{HTMLElement("figcaption")}}) oder unsichtbarem Inhalt (z.B. das `aria-label`-Attribut, das auf einem Element gesetzt ist) oder einer Kombination aus beidem abgeleitet werden. Wie der zugängliche Name eines Elements bestimmt wird, basiert auf der [accessible name calculation](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als zugänglichen Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren zugänglichen Namen aus ihrem Inhalt beziehen. Zum Beispiel hat `<a href="foo.html">Bar</a>` den zugänglichen Namen "Bar" für diesen Hyperlink.

Andere Elemente erhalten ihren zugänglichen Namen aus dem Inhalt assoziierter Elemente. Zum Beispiel, wenn ein {{HTMLElement("fieldset")}} oder {{HTMLElement("table")}}-Element ein {{HTMLElement("legend")}} oder {{HTMLElement("caption")}}-Element als Nachfahre enthält, erfolgt die Zuordnung des verschachtelten Elements, das einen zugänglichen Namen für das Elternteil bereitstellt, automatisch. Für Formularelemente wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} kommt der zugängliche Name aus dem zugeordneten {{HTMLElement("label")}}-Element. Die Zuordnung muss explizit durch Festlegen des `for`-Attributs im `<label>`-Element definiert werden, um mit der `id` des Formularelements übereinzustimmen. Alternativ wird eine implizite Zuordnung erstellt, wenn das Formularsteuerelement direkt im `<label>`-Element verschachtelt ist.

Für einige Elemente stammt der zugängliche Name aus den Attributen des Elements; zum Beispiel das `alt`-Attribut im Fall von {{HTMLElement("img")}}. Bei `<img src="grape.jpg" alt="banana"/>` ist der zugängliche Name des Bildes "banana".

Um eine Zuordnung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element zu erstellen, kann das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, den man mit einem UI-Element, das einen zugänglichen Namen benötigt, assoziieren kann, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die Inline-Text auszeichnen, wie {{HTMLElement("code")}}, {{HTMLElement("del")}} und {{HTMLElement("mark")}}.

Viele Elemente, wie Abschnitte von Textinhalten, benötigen keinen zugänglichen Namen. Alle Steuerelemente sollten jedoch einen zugänglichen Namen haben. Alle Bilder, die Informationen vermitteln und nicht rein präsent sind, ebenfalls.

Unterstützungstechnologien stellen Benutzern die Accessibility-Name-Eigenschaft zur Verfügung, die den zugänglichen Namen zusammen mit der Rolle des Elements umfasst. Während viele Elemente keinen zugänglichen Namen benötigen, ist es notwendig, einen zugänglichen Namen bereitzustellen, um den Inhalt von Elementen mit festgelegten [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) ein Abschnitt von Inhalten, der nach der Aktivierung des zugehörigen Elements mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle durch den Benutzer erscheint. Diese Rolle kann auf einem Element gesetzt werden, das keinen benötigten Namen hat, wie das {{HTMLElement("div")}}-Element. Die `tab` ist das Steuerelement und muss einen zugänglichen Namen haben. Das `tabpanel` ist das Kind (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine bewährte Praktik.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility-Tree")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("ARIA", "ARIA")}}
