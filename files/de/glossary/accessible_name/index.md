---
title: Barrierefreier Name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **barrierefreier Name** ist der Name eines Benutzerschnittstellenelements; es ist der Text, der einem HTML-Element zugeordnet ist und Benutzern von unterstützenden Technologien eine Bezeichnung für das Element bietet.

Barrierefreie Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft Benutzern zu verstehen, wofür das Element gedacht ist und wie sie damit interagieren können. Im Allgemeinen sollten barrierefreie Namen für Elemente eindeutig auf einer Seite sein. Dies hilft Benutzern, ein Element von anderen Elementen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Abhängig vom Element und dem HTML-Markup kann der Wert des barrierefreien Namens aus sichtbarem (z. B. dem Text innerhalb von {{HTMLElement("figcaption")}}) oder unsichtbarem (z. B. dem `aria-label`-Attribut, das auf einem Element gesetzt ist) Inhalt oder einer Kombination aus beidem abgeleitet werden. Wie der barrierefreie Name eines Elements ermittelt wird, basiert auf der [Berechnung des barrierefreien Namens](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als barrierefreien Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren barrierefreien Namen aus ihrem Inhalt beziehen. Zum Beispiel hat der Hyperlink `<a href="foo.html">Bar</a>` "Bar" als barrierefreien Namen.

Andere Elemente erhalten ihren barrierefreien Namen aus dem Inhalt zugeordneter Elemente. Wenn ein {{HTMLElement("fieldset")}}- oder {{HTMLElement("table")}}-Element beispielsweise ein nachfolgendes {{HTMLElement("legend")}}- oder {{HTMLElement("caption")}}-Element enthält, erfolgt die Zuweisung des verschachtelten Elements, das einen barrierefreien Namen für das übergeordnete Element bereitstellt, automatisch. Für Formularelemente wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} stammt der barrierefreie Name vom zugehörigen {{HTMLElement("label")}}-Element. Diese Zuordnung muss ausdrücklich definiert werden, indem das `for`-Attribut im `<label>`-Element so gesetzt wird, dass es der `id` des Formularelements entspricht. Alternativ wird eine implizite Zuordnung erstellt, wenn das Steuerelement direkt innerhalb des `<label>`-Elements verschachtelt ist.

Für einige Elemente kommt der barrierefreie Name aus den Attributen des Elements, zum Beispiel das `alt`-Attribut im Fall von {{HTMLElement("img")}}. Bei `<img src="grape.jpg" alt="banana"/>` ist der barrierefreie Name des Bildes "banana".

Um eine Verbindung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element herzustellen, kann das [`aria-labeledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, der mit einem UI-Element, das einen barrierefreien Namen benötigt, verknüpft werden kann, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die Inline-Text markieren, wie {{HTMLElement("code")}}, {{HTMLElement("del")}} und {{HTMLElement("mark")}}.

Viele Elemente, wie z. B. Abschnitte von Textinhalten, benötigen keinen barrierefreien Namen. Alle Steuerelemente sollten einen barrierefreien Namen haben. Alle Bilder, die Informationen vermitteln und nicht rein präsentational sind, ebenfalls.

Unterstützende Technologien stellen den Benutzern die Eigenschaft des barrierefreien Namens zur Verfügung, die den barrierefreien Namen zusammen mit der Rolle des Elements enthält. Während viele Elemente keinen barrierefreien Namen benötigen, ist es notwendig, einen solchen bereitzustellen, um den Inhalt von Elementen mit bestimmten [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) ein Abschnitt von Inhalten, der erscheint, nachdem ein Benutzer das zugehörige Element mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle aktiviert hat. Diese Rolle kann auf ein Element ohne benötigten Namen gesetzt werden, wie das {{HTMLElement("div")}}-Element. Das `tab` ist das Steuerelement und muss einen barrierefreien Namen haben. Das `tabpanel` ist das Kind (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine beste Praxis.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Web-Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility")}}
  - {{Glossary("Accessibility tree")}}
  - {{Glossary("Accessible description")}}
  - {{Glossary("ARIA")}}
