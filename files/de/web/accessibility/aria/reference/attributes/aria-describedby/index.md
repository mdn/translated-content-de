---
title: "ARIA: Attribut aria-describedby"
short-title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das globale Attribut `aria-describedby` gibt das Element (oder die Elemente) an, das das Element beschreibt, auf dem das Attribut gesetzt ist.

## Beschreibung

Das Attribut `aria-describedby` listet die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Werte der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text herzustellen, der sie beschreibt.

Das Attribut `aria-describedby` ist nicht auf Formularsteuerelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Bereichen mit einer Überschrift, Definitionen und weiteren Inhalten zu verknüpfen. Das Attribut `aria-describedby` kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA-[`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.

Das Attribut `aria-describedby` ist dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sehr ähnlich. Während `aria-labelledby` die `id`-Werte der Beschriftungen oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`-Werte der Beschreibungen oder Elemente auf, die zusätzliche Informationen bereitstellen, die Benutzer möglicherweise benötigen. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen. Eine Beschriftung sollte jedoch knapp sein, während eine Beschreibung ausführlichere Informationen liefern soll: Eine Beschriftung beschreibt das Wesentliche eines Objekts, eine Beschreibung stellt zusätzliche Informationen bereit, die Benutzer möglicherweise benötigen.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Auch auf ein ausgeblendetes Element kann verwiesen werden. Beispielsweise kann ein Formularsteuerelement eine Beschreibung haben, die standardmäßig ausgeblendet ist und bei Bedarf über ein aufklappbares Widget wie ein Symbol für „Weitere Informationen“ angezeigt wird. Sehende Benutzer klicken auf das Symbol, um die Beschreibung anzuzeigen. Benutzer assistiver Technologien können hingegen sofort darauf zugreifen, da das Formularsteuerelement mit `aria-describedby` auf die Beschreibung verweist.

Die Eigenschaft `aria-describedby` eignet sich, wenn der verknüpfte Inhalt aus einfachem Text besteht. Wenn der Inhalt umfangreich ist, eine nützliche semantische Struktur enthält oder komplex aufgebaut ist und eine Navigation durch den Inhalt erfordert, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). Mit `aria-details` können Benutzer assistiver Technologien den verknüpften strukturierten Inhalt aufrufen und zusätzliche Navigationsbefehle nutzen. Dadurch lässt sich die Struktur leichter verstehen und die Information in kleineren Abschnitten erfassen.

> [!NOTE]
> Der Inhalt, auf den `aria-describedby` verweist, sollte nur aus einer Textzeichenfolge bestehen. Wenn der Inhalt wichtige zugrunde liegende semantische Strukturen aufweist, sollten Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

## Werte

- ID-Referenzliste
  - : Die `id` oder eine durch Leerzeichen getrennte Liste von `id`-Werten der Elemente, die das aktuelle Element beschreiben.

## Zugehörige Schnittstellen

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Die Eigenschaft `ariaDescribedByElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im Attribut `aria-describedby` widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Die Eigenschaft `ariaDescribedByElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im Attribut `aria-describedby` widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Kann mit **allen** Rollen und auch mit allen HTML-Elementen verwendet werden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das Attribut `aria-describedby` ist nicht dafür vorgesehen, auf Beschreibungen in externen Ressourcen zu verweisen. Da sein Wert aus einer oder mehreren `id`-Werten besteht (bei mehreren durch Leerzeichen getrennt), muss es auf Elemente im selben DOM-Dokument verweisen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
