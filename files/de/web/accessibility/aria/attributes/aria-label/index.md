---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 314a2f67e5462a10ee2709d8d62153eaabef49fd
---

{{AccessibilitySidebar}}

Das `aria-label`-Attribut definiert einen Zeichenfolgenwert, der ein interaktives Element bezeichnet.

## Beschreibung

Manchmal fehlt der standardmäßige [zugängliche Name](/de/docs/Glossary/accessible_name) eines Elements oder der Name beschreibt den Inhalt des Elements nicht genau, und es gibt im DOM keinen sichtbaren Inhalt, der dem Objekt Bedeutung geben könnte. Ein häufiges Beispiel für ein solches Element ist eine Schaltfläche, die ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein interaktives Element keinen zugänglichen Namen hat oder der Name ungenau ist und es im DOM keinen sichtbaren Inhalt gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut referenziert werden kann, kann das `aria-label`-Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element beschriftet, auf dem es gesetzt wurde. Dies gibt dem interaktiven Element seinen zugänglichen Namen.

Der folgende Code zeigt ein Beispiel, wie das `aria-label`-Attribut verwendet wird, um einen zugänglichen Namen für ein `<button>`-Element bereitzustellen. Die Schaltfläche in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, was das `aria-label` für Benutzer von Screenreadern unerlässlich macht, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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

> **Note:** `aria-label` ist für interaktive Elemente oder für Elemente gedacht, die über andere ARIA-Deklarationen interaktiv gemacht wurden, wenn im DOM kein sichtbarer Text vorhanden ist, der als Label dient.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des sie umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugehörige Elemente erstellt werden.

Standardmäßig ist der zugängliche Name einer Schaltfläche der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs und der Name eines Formular-Eingabefeldes ist der Inhalt des zugehörigen {{HTMLElement('label')}}-Elements.

Wenn keine dieser Optionen verfügbar ist oder der standardmäßige zugängliche Name nicht geeignet ist, verwenden Sie das `aria-label`-Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Obwohl `aria-label` bei jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis nur bei interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Beim Verwenden von `aria-label` sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) berücksichtigen:

- `aria-label` kann in Fällen verwendet werden, in denen der Text, der das Element beschreiben könnte, _nicht_ sichtbar ist. Wenn es einen sichtbaren Text gibt, der ein Element beschriftet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn im DOM vorhandener Beschriftungstext verfügbar ist und es möglich ist, ihn für eine akzeptable Benutzererfahrung zu referenzieren, bevorzugen Sie die Verwendung von `aria-labelledby`. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Behalten Sie die folgenden zusätzlichen Richtlinien im Kopf, wenn Sie `aria-label` verwenden:

- Das `aria-label`-Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen wurde.
- Verwenden Sie `aria-label` nicht zu häufig. Denken Sie daran, dass es in erster Linie für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Screenreadern (oder vorzugsweise Ihre Benutzeroberfläche intuitiver gestalten).

  > [!NOTE]
  > Da der `aria-label`-Inhalt außerhalb von unterstützenden Technologien nicht angezeigt wird, sollten Sie erwägen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht allen Elementen kann ein zugänglicher Name gegeben werden. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturelementrollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht in die Zugänglichkeits-API abgebildet sind, einschließlich `none`, verwendet werden. Das `aria-label`-Attribut ist für Elemente wie Links, Videos, Formularelemente und solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) bestimmt; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} einen `title` zuweisen, ein `alt`-Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Ist jedoch ein `aria-label`-Attribut vorhanden, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem Text des `<label>` des Eingabefeldes als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Textzeichenfolge, die der zugängliche Name für das Objekt ist.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet **außer** in Rollen, die keinen zugänglichen Namen vom Autor erhalten können.

Das `aria-label`-Attribut wird **NICHT** unterstützt in:

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
