---
title: "ARIA: aria-label-Attribut"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Das `aria-label`-Attribut definiert einen Zeichenfolgewert, der zur Benennung eines Elements verwendet werden kann, sofern die Rolle des Elements das Benennen nicht [verhindert](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt dem Standard-{{Glossary("accessible_name", "zugänglichen Namen")}} eines Elements oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau und es gibt keinen im DOM sichtbaren Inhalt, der mit dem Objekt assoziiert werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotsliste](#zugehörige_rollen) ist, keinen zugänglichen Namen hat oder ein zugänglicher Name nicht genau ist und es keinen im DOM sichtbaren Inhalt gibt, auf den über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut verwiesen werden kann, kann das `aria-label`-Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element, auf dem es gesetzt ist, kennzeichnet. Dies gibt dem Element einen zugänglichen Namen.

Der folgende Code zeigt ein Beispiel, wie das `aria-label`-Attribut verwendet wird, um einem `<button>`-Element einen zugänglichen Namen zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und hat keinen Textinhalt, was das `aria-label` für Benutzer von Bildschirmleseprogrammen unerlässlich macht, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

```html
<button aria-label="Close">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="black" />
  </svg>
</button>
```

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> [!NOTE]
> `aria-label` ist dazu gedacht, Elemente zu benennen, deren implizite oder explizite Rolle das Benennen nicht verhindert. Es wird dringend empfohlen, `aria-labelledby` zu priorisieren, wenn ein sichtbares Label für das Element existiert, auf das verwiesen und von dem der Name abgeleitet werden kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des umschließenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder assoziierte Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, ein Bild hat einen zugänglichen Namen, der dem Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs entspricht, und ein Formularelement erhält seinen zugänglichen Namen über den Inhalt des zugehörigen {{HTMLElement('label')}}-Elements.

Wenn keine dieser Optionen verfügbar ist oder der Standard-zugängliche Name nicht geeignet ist, verwenden Sie das `aria-label`-Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Beim Verwenden von `aria-label` sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen der Text, der das Element etikettieren könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element etikettiert, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einem Element einen zugänglichen Namen. Wenn es keinen sichtbaren Namen für das Element gibt, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen bereitzustellen. Wenn Label-Text im DOM verfügbar ist und es möglich ist, ihn für ein akzeptables Benutzererlebnis zu referenzieren, ziehen Sie `aria-labelledby` vor. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie beim Verwenden von `aria-label` die folgenden zusätzlichen Richtlinien:

- Das `aria-label`-Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen haben.
- Nutzen Sie `aria-label` nicht übermäßig. Denken Sie daran, dass es in erster Linie für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen bereitzustellen oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für Benutzer von Bildschirmleseprogrammen (oder vorzugsweise sollte Ihre Benutzeroberfläche intuitiver gestaltet werden).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb unterstützender Technologien nicht angezeigt wird, sollten Sie in Erwägung ziehen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können mit einem zugänglichen Namen versehen werden. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht auf die Barrierefreiheits-API abgebildet sind, inklusive `none`, verwendet werden. Das `aria-label`-Attribut ist für Elemente wie Links, Videos, Formularelemente sowie solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) vorgesehen; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} einen `title` zuweisen, einem {{HTMLElement('img')}} ein `alt`-Attribut definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label`-Attribut vorhanden ist, hat es Vorrang vor dem `title` des iframes, dem `alt` eines Bildes oder dem Text des `<label>`-Elements als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Zeichenkette, die der zugängliche Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, denen der Autor keinen zugänglichen Namen geben kann.

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

{{Spezifikationen}}

## Siehe auch

- {{HTMLElement('label')}}-Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
