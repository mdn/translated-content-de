---
title: "ARIA: aria-details Attribut"
short-title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Das globale `aria-details` Attribut identifiziert das Element (oder die Elemente), die zusätzliche Informationen zu dem Objekt bereitstellen.

## Beschreibung

Das `aria-details` Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen hinzuzufügen. Es wird verwendet, um Nutzer von unterstützender Technologie über den Inhalt zu informieren, indem es detailliertere Informationen bereitstellt, sei es innerhalb des aktuellen Dokuments oder als Link zu zusätzlichen Ressourcen.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML {{HTMLElement('label')}} Element und die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Eigenschaften werden verwendet, um kurze Bezeichnungen für ein Objekt bereitzustellen. Das HTML `title` Attribut und die [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Eigenschaften bieten längere Klartextbeschreibungen eines Objekts an. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte im Zusammenhang mit dem Objekt erforderlich und verfügbar sind, sollte das `aria-details` Attribut verwendet werden.

Das `aria-details` Attribut erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte HTML `longdesc` Attribut － eine URL einer ausführlichen Beschreibung des Inhalts eines Ersatzelements －, das aufgrund mangelnder Unterstützung und Missbrauchs abgelehnt wurde.

Das `aria-details` Attribut nimmt das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id), oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, um detaillierte Informationen zu erhalten, als seine Werte. Wenn `aria-details` auf einem Element enthalten ist, informieren unterstützende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen und ermöglichen es dem Nutzer, zum referenzierten Inhalt zu navigieren.

Die durch `aria-details` referenzierten Elemente sind so vorgesehen, dass sie mehr Informationen enthalten als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt werden würden.

Die durch `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die ansonsten eventuell nicht in der Lage sind, den Bildschirm zu scannen und schnell zu erkennen, dass der erklärende Inhalt verfügbar ist.

> [!NOTE] > `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Anders als `aria-describedby` werden die durch `aria-details` referenzierten Elemente nicht in barrierefreien Beschreibungen verwendet und nicht in eine einfache Zeichenkette umgewandelt, wenn sie Benutzern von unterstützender Technologie präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Vereinfachen der Inhalte des referenzierten Elements zu einer einfachen Textzeichenkette keinen Informationsverlust verursachen würde, ziehen Sie in Betracht, stattdessen `aria-describedby` zu verwenden. Das heißt, es ist gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` spezifiziert hat.

## Beispiel

In Bezug auf Begriffs- und Definitionsrollen würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) Rolle aufgenommen werden.

```html
<p>
  The <strong>cubic-bezier()</strong> functional notation defines a cubic
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As these
  curves are continuous, they are often used to smooth down the start and end of
  the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">
  A <strong>Bézier curve</strong>, (Pronounced \ ˈbe-zē-ˌā \)
  <i aria-description="English pronunciation">BEH-zee-ay</i>) is a
  mathematically described curve used in computer graphics and animation. The
  curve is defined by a set of control points with a minimum of two. Web related
  graphics and animations use Cubic Béziers, which are curves with four control
  points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a
  href="bezierExplanation.html"
  id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animated Bézier curve showing 4 control points." src="bezier.gif" />
</a>
```

## Werte

- ID-Referenzliste
  - : Eine `id` oder eine durch Leerzeichen getrennte Liste von IDs von Elementen, die zusätzliche verwandte Informationen bereitstellen oder darauf verweisen.

## Zugehörige Schnittstellen

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Die `ariaDetailsElements` Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id` Referenzen im `aria-details` Attribut wiedergibt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Die `ariaDetailsElements` Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id` Referenzen im `aria-details` Attribut wiedergibt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das `alt` Attribut eines Bildes](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut
