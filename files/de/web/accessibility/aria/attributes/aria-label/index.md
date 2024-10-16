---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 2023c163697d2c1b4fd6d6f16bdf4e69e4096169
---

{{AccessibilitySidebar}}

Das `aria-label` Attribut definiert einen Zeichenfolgewert, der verwendet werden kann, um ein Element zu benennen, solange die Rolle des Elements dies nicht [verhindert](#zugeordnete_rollen).

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau. Es gibt keinen sichtbaren Inhalt im DOM, der mit dem Objekt verknüpft werden kann, um ihm eine Bedeutung zu geben. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotenen Liste](#zugeordnete_rollen) ist, keinen zugänglichen Namen hat oder ein zugänglicher Name nicht genau ist und es keinen sichtbaren Inhalt im DOM gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut referenziert werden kann, kann das `aria-label` Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element bezeichnet, auf dem es gesetzt ist. Dies gibt dem Element einen zugänglichen Namen.

Der untenstehende Code zeigt ein Beispiel, wie das `aria-label` Attribut verwendet werden kann, um einem `<button>` Element einen zugänglichen Namen zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, wodurch das `aria-label` für Bildschirmlesegeräte-Benutzer unerlässlich wird, um seine Funktion, die in diesem Fall "Schließen" ist, zu verstehen.

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

> **Hinweis:** `aria-label` ist vorgesehen für die Benennung von Elementen, bei denen die implizite oder explizite Rolle dies nicht verhindert. Es wird dringend empfohlen, die Verwendung von `aria-labelledby` gegenüber `aria-label` zu priorisieren, wenn ein sichtbares Label für das Element vorhanden ist, dessen Namen referenziert und erhalten werden kann.

Der meiste Inhalt hat einen zugänglichen Namen, der aus dem Textinhalt des unmittelbar umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugeordnete Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}} Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Element/img#alt) Attributs, und der zugängliche Name eines Formular-Inputs ist der Inhalt des zugeordneten {{HTMLElement('label')}} Elements.

Wenn keine dieser Optionen verfügbar ist oder der standardmäßige zugängliche Name nicht geeignet ist, verwenden Sie das `aria-label` Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` für jedes Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) berücksichtigen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element bezeichnen könnte, _nicht_ sichtbar ist. Wenn sichtbarer Text vorhanden ist, der ein Element bezeichnet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn Label-Text im DOM verfügbar ist und es möglich ist, ihn für ein akzeptables Benutzererlebnis zu referenzieren, ziehen Sie die Verwendung von `aria-labelledby` vor. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` erhält, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien bei der Verwendung von `aria-label`:

- Das `aria-label` Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen haben.
- Überbeanspruchen Sie `aria-label` nicht. Denken Sie daran, dass es primär für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Bildschirmlesegeräten (oder vorzugsweise, machen Sie Ihre Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da `aria-label` Inhalt außerhalb unterstützender Technologien nicht angezeigt wird, ziehen Sie in Betracht, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen zugänglichen Namen erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` verwendet werden, und Rollen, die nicht zur Barrierefreiheits-API zugeordnet sind, einschließlich `none`. Das `aria-label` Attribut ist für Elemente vorgesehen, einschließlich Links, Videos, Formular-Steuerelementen und diejenigen mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles); `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, ein `alt` Attribut für ein {{HTMLElement('img')}} definieren oder {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label` Attribut vorhanden ist, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>` Text des Inputs als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Zeichenfolge, die der zugängliche Name für das Objekt sein wird.

## Zugeordnete Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist, spiegelt den Wert des `aria-label` Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle ist, spiegelt den Wert des `aria-label` Attributs wider.

## Zugeordnete Rollen

Wird in fast allen Rollen verwendet **ausgenommen** Rollen, bei denen dem Autor das Bereitstellen eines zugänglichen Namens nicht möglich ist.

Das `aria-label` Attribut wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}} Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
