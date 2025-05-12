---
title: "ARIA: aria-describedby-Attribut"
short-title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-describedby`-Attribut identifiziert das Element (oder die Elemente), das das Element beschreibt, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby`-Attribut listet die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das `aria-describedby`-Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Gruppen von Elementen, Regionen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby`-Attribut kann sowohl mit semantischen HTML-Elementen als auch mit Elementen, die eine ARIA-`role` haben, verwendet werden.

Das `aria-describedby`-Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die dem Benutzer mehr Informationen liefern könnten. Sowohl `aria-labelledby` als auch `aria-describedby` beziehen sich auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung dazu gedacht ist, umfangreichere Informationen bereitzustellen; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung mehr Informationen liefert, die der Benutzer benötigen könnte.

Die über `aria-describedby` verlinkten Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, selbst wenn dieses Element versteckt ist. Beispielsweise kann ein Formularelement eine Beschreibung haben, die standardmäßig versteckt ist und auf Anfrage über ein Aufklapp-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Die sehenden Benutzer klicken auf das Symbol, um die Beschreibung anzusehen, während Benutzer von unterstützenden Technologien sofort darauf zugreifen können, da die Beschreibung von diesem Formularelement mit `aria-describedby` referenziert wird.

Die `aria-describedby`-Eigenschaft ist geeignet, wenn der zugehörige Inhalt aus einfachem Text besteht. Wenn der Inhalt umfangreich ist, nützliche Semantiken enthält oder eine komplexe Struktur hat, die eine Benutzerführung erfordert, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von unterstützenden Technologien, den zugehörigen strukturierten Inhalt zu besuchen und es bietet zusätzliche Navigationsbefehle, was das Verständnis der Struktur erleichtert oder das Erleben der Informationen in kleineren Teilen ermöglicht.

> [!NOTE]
> Der `aria-describedby`-Inhalt sollte nur eine Textzeichenkette sein. Wenn im Inhalt wichtige zugrundeliegende Semantiken vorhanden sind, erwägen Sie die Verwendung von [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby`-Attribut ist nicht dafür vorgesehen, Beschreibungen aus externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s sind (bei mehreren durch Leerzeichen getrennt), muss es sich auf Elemente im selben DOM-Dokument beziehen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Schnittstellen

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Die `ariaDescribedByElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-describedby`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Die `ariaDescribedByElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-describedby`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **allen** Rollen verwendet. Kann in allen HTML-Elementen verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
