---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 314a2f67e5462a10ee2709d8d62153eaabef49fd
---

{{AccessibilitySidebar}}

Das `aria-label` Attribut definiert einen Textwert, der ein interaktives Element kennzeichnet.

## Beschreibung

Manchmal fehlt der Standard-{{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau, und es gibt keinen sichtbaren Inhalt im DOM, der mit dem Objekt assoziiert werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Symbol ohne Text enthält.

In Fällen, in denen ein interaktives Element keinen zugänglichen Namen hat oder der zugängliche Name nicht genau ist und es keinen sichtbaren Inhalt im DOM gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut referenziert werden kann, kann das `aria-label` Attribut verwendet werden, um einen String zu definieren, der das interaktive Element, auf dem es gesetzt ist, kennzeichnet. Dies gibt dem interaktiven Element seinen zugänglichen Namen.

Der folgende Code zeigt ein Beispiel, wie man das `aria-label` Attribut verwendet, um einen zugänglichen Namen für ein `<button>` Element bereitzustellen. Der Button in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, womit das `aria-label` für Benutzer von Bildschirmlesegeräten unerlässlich wird, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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

> **Hinweis:** `aria-label` ist für interaktive Elemente oder für Elemente gedacht, die über andere ARIA-Deklarationen interaktiv gemacht werden, wenn es keinen sichtbaren Text im DOM gibt, der als Bezeichnung dienen kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des sie unmittelbar umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder angehängte Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}} Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Element/img#alt) Attributs, und der zugängliche Name eines Formulareingabefelds ist der Inhalt des zugehörigen {{HTMLElement('label')}} Elements.

Wenn keine dieser Optionen verfügbar ist oder der Standardzugängliche Name nicht geeignet ist, verwenden Sie das `aria-label` Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das ein zugängliches Name haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), [landmarks](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) berücksichtigen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element kennzeichnen könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element kennzeichnet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn kein sichtbarer Name für das Element vorhanden ist, auf den Sie verweisen können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn Labeltext im DOM verfügbar ist und es möglich ist, ihn für eine akzeptable Benutzererfahrung zu referenzieren, ziehen Sie es vor, `aria-labelledby` zu verwenden. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien bei der Verwendung von `aria-label`:

- Das `aria-label` Attribut kann mit normalen, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen wurde.
- Nutzen Sie `aria-label` nicht übermäßig. Denken Sie daran, dass es hauptsächlich für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen oder um die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Bildschirmlesegeräten (oder vorzugsweise sollte Ihre Benutzeroberfläche intuitiver werden).

  > [!NOTE]
  > Da `aria-label` Inhalt außerhalb assistiver Technologien nicht angezeigt wird, ziehen Sie in Betracht, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen zugänglichen Namen erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht mit der Zugänglichkeits-API abgebildet sind, einschließlich `none`, verwendet werden. Das `aria-label` Attribut ist für Elemente wie Links, Videos, Formularelemente und solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) vorgesehen; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} einen `title` zuweisen, ein `alt` Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht erforderlich. Ist jedoch ein `aria-label` Attribut vorhanden, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>` Text des Eingabefeldes als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Ein Textstring, der der zugängliche Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaLabel")}}
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.
- {{domxref("ElementInternals.ariaLabel")}}
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.

## Zugehörige Rollen

Verwendet in fast allen Rollen **außer** in Rollen, für die der Autor keinen zugänglichen Namen bereitstellen kann.

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
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN Blog (2023)
