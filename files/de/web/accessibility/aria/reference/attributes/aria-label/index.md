---
title: "ARIA: aria-label Attribut"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-label`-Attribut definiert einen Zeichenfolgewert, der verwendet werden kann, um ein Element zu benennen, solange die Rolle des Elements nicht [Naming verbietet](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der Standard-{{Glossary("accessible_name", "accessible name")}} eines Elements oder der accessible name beschreibt nicht genau den Inhalt des Elements und es gibt keinen im DOM sichtbaren Inhalt, der dem Objekt zugeordnet werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist eine Schaltfläche, die ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotenen Liste](#zugehörige_rollen) ist, keinen accessible name hat oder ein accessible name nicht genau ist und es keinen sichtbaren Inhalt im DOM gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut referenziert werden kann, kann das `aria-label`-Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element, auf dem es gesetzt ist, beschreibt. Dies gibt dem Element einen accessible name.

Der folgende Code zeigt ein Beispiel, wie das `aria-label`-Attribut verwendet wird, um einer `<button>`-Element eine verständliche Benennung zu geben. Die Schaltfläche in diesem Beispiel enthält eine SVG-Grafik und hat keinen Textinhalt, wodurch das `aria-label` für Benutzer von Screenreadern unverzichtbar wird, um ihre Funktion zu verstehen, die in diesem Fall "Close" ist.

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **Note:** `aria-label` ist zum Benennen von Elementen gedacht, deren implizite oder explizite Rolle kein Naming verbietet. Es wird dringend empfohlen, `aria-labelledby` dem `aria-label` vorzuziehen, wenn für das Element ein sichtbar beschriftetes Label existiert, auf das verwiesen werden kann, um seinen Namen zu erhalten.

Die meisten Inhalte haben einen accessible name, der aus dem unmittelbaren Textinhalt des umschließenden Elements generiert wird. Accessible names können auch durch bestimmte Attribute oder zugeordnete Elemente erstellt werden.

Standardmäßig ist der accessible name einer Schaltfläche der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der accessible name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs und der accessible name eines Formularelements ist der Inhalt des zugeordneten {{HTMLElement('label')}}-Elements.

Falls keine dieser Optionen verfügbar ist oder der standardmäßige accessible name nicht geeignet ist, verwenden Sie das `aria-label`-Attribut, um den accessible name eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das einen accessible name haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Meilenstein](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element benennen könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element beschriftet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie von `aria-labelledby`. Beide bieten einen accessible name für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren accessible name bereitzustellen. Wenn Etikettentext im DOM verfügbar ist und es möglich ist, darauf zu verweisen, um eine akzeptable Benutzererfahrung zu bieten, verwenden Sie `aria-labelledby`. Verwenden Sie nicht beides am selben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien, wenn Sie `aria-label` verwenden:

- Das `aria-label`-Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen wurde.
- Verwenden Sie `aria-label` nicht übermäßig. Denken Sie daran, dass es in erster Linie für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen bereitzustellen oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Screenreadern (oder vorzugsweise, machen Sie Ihre Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb assistiver Technologien nicht angezeigt wird, sollten Sie in Erwägung ziehen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen accessible name erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht auf die Accessibility-API abgebildet sind, einschließlich `none`, verwendet werden. Das `aria-label`-Attribut ist für Elemente vorgesehen, einschließlich Links, Videos, Formularelementen und solchen mit [Meilensteinrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widgetrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles); `aria-label` bietet einen accessible name, wenn im DOM kein sichtbares Label vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, ein `alt`-Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label`-Attribut vorhanden ist, wird es den Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>`-Text des Eingabeelements als der accessible name für dieses Element haben.

## Werte

- `<string>`
  - : Eine Zeichenfolge, die der accessible name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet **außer** in Rollen, die keinen von den Autoren zugewiesenen accessible name erhalten können.

Das `aria-label`-Attribut wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}-Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Using HTML landmark roles to improve accessibility](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN-Blog (2023)
