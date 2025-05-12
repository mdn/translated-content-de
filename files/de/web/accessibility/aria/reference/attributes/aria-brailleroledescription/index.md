---
title: "ARIA: aria-brailleroledescription Attribut"
short-title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-brailleroledescription`-Attribut definiert eine menschenlesbare und vom Autor lokalisierte abgekürzte Beschreibung für die Rolle eines Elements, die in Braille konvertiert werden soll.

## Beschreibung

Braille ist keine eins-zu-eins Transliteration von Buchstaben und Zahlen, sondern es beinhaltet verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter repräsentieren (bekannt als Logogramme).

Anstatt lange Rollenbeschreibungen in Braille zu konvertieren, ermöglicht das `aria-brailleroledescription`-Attribut, eine abgekürzte Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Wertes bereitzustellen, welche eine menschenlesbare und vom Autor lokalisierte Beschreibung für die Rolle eines Elements ist, um die Benutzererfahrung mit Braille-Schnittstellen zu verbessern.

Grundsätzlich ist der Wert von `aria-brailleroledescription` eine abgekürzte Version des `aria-roledescription`-Attributs, die in Braille konvertiert werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Screenreader, werden das obige als "slide, welcome to my talk. Image, Me." vorlesen. Braille-Hilfstechnologien werden "sld welcome to my talk gra me" in Braille präsentieren. Das semantische {{HTMLElement('article')}} erhält die Rolle "slide" durch das `aria-roledescription`-Attribut; "slide" ist eine Rolle, die nicht in der Spezifikation definiert ist, aber eine übliche Rolle für Folien in einer Präsentation ist. In Braille wird die Rolle als "sld" präsentiert. Das "gra" ist die Abkürzung für "graphic", was die verkürzte Form für die Rolle "image" in Braille ist.

Das `aria-brailleroledescription`-Attribut sollte nur verwendet werden, um den Zweck von nicht interaktiven Containerrollen wie "group" oder "region" zu verdeutlichen oder um eine spezifischere Beschreibung eines Widgets im Braille-Kontext zu geben.

Da das `aria-brailleroledescription`-Attribut bestimmt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und interpretieren, verhindern unangemessene Werte, dass Benutzer ein Element in Braille-Schnittstellen verstehen und damit interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) vorhanden ist. Sollte jedoch der `aria-roledescription`-Wert in Braille funktionieren, ist die Braille-Version des Attributs nicht nötig. Generell sollte `aria-brailleroledescription` nur in seltenen Fällen verwendet werden, wenn `aria-roledescription` für Braille zu umfassend ist.

Einige Regeln, die Sie sich merken sollten:

- Wenden Sie `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder auf Elemente mit impliziten Rollensemantiken an.
- Das `aria-brailleroledescription`, falls vorhanden, muss einen nicht-leeren, nicht null Wert haben, der sich vom `aria-roledescription`-Wert unterscheidet, welcher sich wiederum von der expliziten oder impliziten semantischen ARIA-Rolle unterscheidet.
- Vermeiden Sie die Verwendung von Unicode-Braille-Mustern. Wenn sie verwendet werden müssen, stellen Sie sicher, dass der `aria-brailleroledescription`-Wert Inhalte enthält, die nicht nur aus Unicode-Braille-Mustern, Leerzeichen oder Braille-Muster-Punkten-0 bestehen.
- Stellen Sie sicher, dass der Wert immer an die Sprache des Dokuments lokalisiert ist.

> [!WARNING]
> Wenn der Inhalt nur aus Unicode-Braille-Mustern besteht, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Fügen Sie dieses Attribut nur hinzu, wenn `aria-roledescription` keine angemessene Darstellung für Braille bietet.

Der `aria-brailleroledescription`-Wert wird dem Braille-Benutzer nicht angezeigt, wenn:

- Der Wert leer ist oder nur aus Leerzeichen oder dem leeren Braille-Muster: Punkte-0 (U+2800) besteht.
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` verboten ist, einschließlich der `generic`-Rolle.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Webseiten und Anwendungen mit täglichen Nutzern von unterstützender Technologie, einschließlich Braille-Lesern, um sicherzustellen, dass Ihre Inhalte auch in Braille sinnvoll sind.

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein unbeschränkter Werttyp, welcher in Braille konvertiert werden soll

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
