---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-brailleroledescription` definiert eine vom Autor lokalisierte, menschenlesbare, verkürzte Beschreibung für die Rolle eines Elements, die in Braille konvertiert werden soll.

## Beschreibung

Braille ist keine eins-zu-eins Transliteration von Buchstaben und Zahlen, sondern beinhaltet verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter repräsentieren (bekannt als Logogramme).

Anstatt lange Rollendefinitionen in Braille zu konvertieren, ermöglicht das Attribut `aria-brailleroledescription` das Bereitstellen einer verkürzten Version des Werts von [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription), einer menschenlesbaren, vom Autor lokalisierten Beschreibung für die Rolle eines Elements, um die Benutzererfahrung mit Braille-Oberflächen zu verbessern.

Im Grunde ist der Wert von `aria-brailleroledescription` eine abgekürzte Version des Attributs `aria-roledescription`, die in Braille konvertiert werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Bildschirmleser, werden das Obige als "slide, welcome to my talk. Image, Me." vorlesen. Unterstützende Braille-Technologien werden "sld welcome to my talk gra me" in Braille darstellen. Das semantische {{HTMLElement('article')}} erhält durch das Attribut `aria-roledescription` die Rolle "slide"; "slide" ist keine in der Spezifikation definierte Rolle, sondern eine übliche Rolle für Folien in einer Präsentation. In Braille wird die Rolle als "sld" dargestellt. Das "gra" steht für "graphic", was eine Verkürzung der "image"-Rolle im Braille ist.

Das Attribut `aria-brailleroledescription` sollte nur verwendet werden, um den Zweck von nicht-interaktiven Container-Rollen wie "group" oder "region" zu klären oder um eine spezifischere Beschreibung eines Widgets im Braille-Kontext bereitzustellen.

Da das Attribut `aria-brailleroledescription` bestimmt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und ausdrücken, werden unangemessene Werte verhindern, dass Benutzer ein Element auf Braille-Oberflächen verstehen und mit ihm interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) vorhanden ist. Wenn der `aria-roledescription`-Wert in Braille funktioniert, wird die Braille-Version des Attributs nicht benötigt. Im Allgemeinen sollte `aria-brailleroledescription` nur in den seltenen Fällen verwendet werden, wenn eine `aria-roledescription` zu ausführlich für Braille ist.

Einige Regeln zur Beachtung:

- Wenden Sie `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder Elementen mit impliziten Rollensemantiken an.
- Die `aria-brailleroledescription`, wenn vorhanden, muss einen nicht-leeren, nicht null-Wert haben, der sich von dem `aria-roledescription`-Wert unterscheidet, welches sich wiederum von der expliziten ARIA-Rolle oder impliziten semantischen Rolle unterscheidet.
- Vermeiden Sie die Verwendung von Unicode-Braille-Mustern. Wenn sie verwendet werden müssen, stellen Sie sicher, dass der Wert von `aria-brailleroledescription` Inhalte enthält, die nicht nur aus Unicode-Braille-Mustern, Leerzeichen und Braille-Musterpunkten-0 bestehen.
- Stellen Sie sicher, dass der Wert immer auf die Sprache des Dokuments lokalisiert ist.

> [!WARNING]
> Wenn der Inhalt nur aus Unicode-Braille-Mustern besteht, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Nehmen Sie dieses Attribut nur auf, wenn `aria-roledescription` keine angemessene Braille-Darstellung bietet.

Der `aria-brailleroledescription`-Wert wird dem Braille-Benutzer nicht angezeigt, wenn:

- Der Wert leer ist oder nur Leerzeichen oder das leere Braille-Muster enthält: dots-0 (U+2800).
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` verboten ist, einschließlich der Rolle `generic`.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Websites und Anwendungen mit täglichen Benutzern von unterstützenden Technologien, einschließlich Braille-Lesegeräten, um sicherzustellen, dass Ihr Inhalt in Braille sinnvoll ist.

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein unbeschränkter Wertetyp, der in Braille konvertiert werden soll.

## Assoziierte Rollen

Verwendet in **ALLEN** Rollen (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{domxref("Element.ariaBrailleRoleDescription")}}
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
