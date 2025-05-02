---
title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das globale `aria-describedby` Attribut identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby` Attribut listet die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text herzustellen, der sie beschreibt.

Das `aria-describedby` Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Gruppen von Elementen, Regionen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby` Attribut kann mit semantischen HTML-Elementen und Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.

Das `aria-describedby` Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die zusätzliche Informationen bieten, die der Benutzer möglicherweise benötigt. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen. Ein Label sollte jedoch prägnant sein, während eine Beschreibung ausführlichere Informationen bietet; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung zusätzliche Informationen bietet, die der Benutzer möglicherweise benötigt.

Die über `aria-describedby` verlinkten Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, auch wenn dieses Element versteckt ist. Beispielsweise kann ein Formularelement eine Beschreibung haben, die standardmäßig versteckt und auf Anfrage mithilfe eines Offenlegungs-Widgets wie einem "Weitere Informationen"-Symbol angezeigt wird. Die sehenden Benutzer klicken auf das Symbol, um die Beschreibung anzuzeigen, während Benutzer von unterstützender Technologie sofort darauf zugreifen können, da die Beschreibung von diesem Formularelement mit `aria-describedby` referenziert wird.

Die `aria-describedby` Eigenschaft ist geeignet, wenn der zugehörige Inhalt einfachen Text enthält. Wenn der Inhalt umfangreich ist, nützliche Semantik enthält oder eine komplexe Struktur erfordert, die Benutzernavigation erfordert, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). `aria-details` ermöglicht Benutzern von unterstützenden Technologien, den zugehörigen strukturierten Inhalt zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, um die Struktur besser zu verstehen oder die Informationen in kleineren Teilen zu erleben.

> [!NOTE]
> Der Inhalt von `aria-describedby` sollte nur eine Textzeichenkette sein. Wenn im Inhalt wichtige zugrunde liegende Semantiken vorhanden sind, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby` Attribut ist nicht dafür gedacht, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s ist (durch Leerzeichen getrennt, wenn mehrere), muss es Elemente im selben DOM-Dokument referenzieren.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Schnittstellen

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Die `ariaDescribedByElements` Eigenschaft ist Teil des Interfaces jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-describedby` Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Die `ariaDescribedByElements` Eigenschaft ist Teil des Interfaces jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-describedby` Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **allen** Rollen verwendet. Verwendbar in allen HTML-Elementen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
