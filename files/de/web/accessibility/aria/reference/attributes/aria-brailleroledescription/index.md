---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale Attribut `aria-brailleroledescription` definiert eine für Menschen lesbare, vom Autor lokalisierte, verkürzte Beschreibung für die Rolle eines Elements, die in Braille umgewandelt werden soll.

## Beschreibung

Braille ist keine eins-zu-eins Übertragung von Buchstaben und Zahlen, sondern enthält verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter repräsentieren (bekannt als Logogramme).

Anstatt lange Rollenbeschreibungen in Braille zu konvertieren, ermöglicht das Attribut `aria-brailleroledescription` die Bereitstellung einer verkürzten Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Wertes, der eine für Menschen lesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements ist, um das Benutzererlebnis mit Braille-Oberflächen zu verbessern.

Im Wesentlichen ist der Wert von `aria-brailleroledescription` eine verkürzte Version des Attributs `aria-roledescription`, die in Braille umgewandelt werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Bildschirmleseprogramme, lesen das obige Beispiel als "slide, welcome to my talk. Image, Me." Braille-Hilfstechnologien werden "sld welcome to my talk gra me" in Braille darstellen. Das semantische {{HTMLElement('article')}} hat durch das Attribut `aria-roledescription` die Rolle "slide" erhalten; "slide" ist eine Rolle, die nicht in der Spezifikation definiert ist, aber eine gängige Rolle für Folien in einer Präsentation ist. In Braille wird die Rolle als "sld" präsentiert. Das "gra" steht für "graphic", was die Abkürzung für die "image"-Rolle in Braille ist.

Das `aria-brailleroledescription`-Attribut sollte nur verwendet werden, um den Zweck von nicht interaktiven Container-Rollen wie "group" oder "region" zu klären oder um eine spezifischere Beschreibung eines Widgets im Braille-Kontext zu bieten.

Da das `aria-brailleroledescription`-Attribut überschreibt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und darstellen, verhindern unangemessene Werte, dass Benutzer ein Element auf Braille-Oberflächen verstehen und damit interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) vorhanden ist. Wenn der Wert von `aria-roledescription` in Braille funktioniert, ist die Braille-Version des Attributs nicht erforderlich. Im Allgemeinen sollte `aria-brailleroledescription` nur in dem seltenen Fall verwendet werden, wenn ein `aria-roledescription` für Braille zu ausführlich ist.

Einige Regeln, die zu beachten sind:

- Wenden Sie `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder Elemente mit impliziten Rollensemantiken an.
- Das `aria-brailleroledescription`, falls vorhanden, muss einen nicht-leeren, nicht-null Wert haben, der sich vom `aria-roledescription`-Wert unterscheidet, der wiederum von der ARIA-explicit-Rolle oder impliziten Rollensemantik abweicht.
- Vermeiden Sie die Verwendung von Unicode-Braille-Mustern. Falls sie verwendet werden müssen, stellen Sie sicher, dass der Wert von `aria-brailleroledescription` Inhalte außer Unicode-Braille-Mustern, Leerzeichen und Braille-Muster-Punkten-0 enthält.
- Stellen Sie sicher, dass der Wert immer auf die Sprache des Dokuments lokalisiert ist.

> [!WARNING]
> Wenn der Inhalt nur aus Unicode-Braille-Mustern besteht, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Dieses Attribut sollte nur dann enthalten sein, wenn `aria-roledescription` keine angemessene Braille-Darstellung bietet.

Der Wert von `aria-brailleroledescription` wird dem Braille-Nutzer nicht zugänglich gemacht, wenn:

- Der Wert leer ist oder nur aus Leerzeichen oder dem leeren Braille-Muster: Punkte-0 (U+2800) besteht.
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` nicht erlaubt ist, einschließlich der `generic`-Rolle.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Websites und Anwendungen mit täglichen Nutzern von unterstützenden Technologien, einschließlich Braille-Lesern, um sicherzustellen, dass Ihre Inhalte in Braille verständlich sind.

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein unbeschränkter Wertetyp, der in Braille umgewandelt werden soll

## Zugehörige Rollen

Verwendet in **ALLE** Rollen (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
