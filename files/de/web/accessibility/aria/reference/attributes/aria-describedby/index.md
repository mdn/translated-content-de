---
title: "ARIA: aria-describedby-Attribut"
short-title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das globale `aria-describedby`-Attribut identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby`-Attribut listet die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text herzustellen, der sie beschreibt.

Das `aria-describedby`-Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Bereichen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby`-Attribut kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.

Das `aria-describedby`-Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die weitere Informationen bieten, die der Benutzer benötigen könnte. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung dazu dient, ausführlichere Informationen bereitzustellen; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung weitere Informationen bereitstellt, die der Benutzer benötigen könnte.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, selbst wenn dieses Element verborgen ist. Zum Beispiel kann ein Formularelement eine Beschreibung haben, die standardmäßig verborgen ist und auf Anfrage mit einem Offenlegen-Widget wie einem "mehr Informationen"-Icon angezeigt wird. Die sehenden Benutzer klicken auf das Icon, um die Beschreibung anzuzeigen, während Benutzer von unterstützenden Technologien sofort darauf zugreifen können, da die Beschreibung von diesem Formularelement mit `aria-describedby` referenziert wird.

Die `aria-describedby`-Eigenschaft ist geeignet, wenn der zugehörige Inhalt nur aus einfachem Text besteht. Wenn der Inhalt umfangreich ist, nützliche Semantiken enthält oder eine komplexe Struktur hat, die eine Benutzernavigation erfordert, sollte stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwendet werden. `aria-details` ermöglicht es Benutzern von unterstützenden Technologien, den verbundenen strukturierten Inhalt zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, was es einfacher macht, die Struktur zu verstehen oder die Informationen in kleinere Teile zu erleben.

> [!NOTE]
> Der `aria-describedby`-Inhalt sollte nur aus einer Textzeichenfolge bestehen. Wenn wichtige zugrunde liegende Semantiken im Inhalt vorhanden sind, sollten Sie in Betracht ziehen, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby`-Attribut ist nicht dafür vorgesehen, Beschreibungen aus externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere durch Leerzeichen getrennte `id`s sind, muss es auf Elemente im selben DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste der Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Schnittstellen

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Die `ariaDescribedByElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im `aria-describedby`-Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Die `ariaDescribedByElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im `aria-describedby`-Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in **allen** Rollen. Nutzbar in allen HTML-Elementen ebenfalls.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
