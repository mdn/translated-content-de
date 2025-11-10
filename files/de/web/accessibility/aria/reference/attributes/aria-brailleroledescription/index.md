---
title: "ARIA: aria-brailleroledescription-Attribut"
short-title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das globale `aria-brailleroledescription`-Attribut definiert eine für Menschen lesbare, vom Autor lokalisierte, abgekürzte Beschreibung der Rolle eines Elements, die in Braille umgewandelt werden soll.

## Beschreibung

Braille ist keine Eins-zu-Eins-Transliteration von Buchstaben und Zahlen, sondern enthält verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter repräsentieren (bekannt als Logogramme).

Anstatt lange Rollenbeschreibungen in Braille zu konvertieren, ermöglicht das `aria-brailleroledescription`-Attribut das Bereitstellen einer abgekürzten Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Wertes, der eine für Menschen lesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements darstellt, um die Benutzerfreundlichkeit bei Braille-Oberflächen zu verbessern.

Grundsätzlich ist der Wert von `aria-brailleroledescription` eine abgekürzte Version des `aria-roledescription`-Attributs, die in Braille umgewandelt werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Bildschirmleseprogramme, lesen das oben genannte Beispiel als "slide, welcome to my talk. Image, Me." Assistive Technologien für Braille zeigen „sld welcome to my talk gra me“ in Braille an. Das semantische {{HTMLElement('article')}} wird durch das `aria-roledescription`-Attribut mit der Rolle "slide" versehen; "slide" ist eine Rolle, die nicht in der Spezifikation definiert ist, aber eine gängige Rolle für Folien in einer Präsentation ist. In Braille wird die Rolle als "sld" dargestellt. "gra" ist die Abkürzung für "graphic", was die gekürzte Form der "image"-Rolle in Braille ist.

Das `aria-brailleroledescription`-Attribut sollte nur verwendet werden, um den Zweck von nicht interaktiven Containerrollen wie "group" oder "region" zu verdeutlichen oder um eine genauere Beschreibung eines Widgets in einem Braille-Kontext bereitzustellen.

Da das `aria-brailleroledescription`-Attribut überschreibt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und ausdrücken, verhindern unangemessene Werte, dass Benutzer ein Element auf Braille-Oberflächen verstehen und damit interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) vorhanden ist. Wenn jedoch der `aria-roledescription`-Wert in Braille funktioniert, ist die Braille-Version des Attributs nicht erforderlich. Im Allgemeinen sollte `aria-brailleroledescription` nur in seltenen Fällen verwendet werden, wenn ein `aria-roledescription` zu ausführlich für Braille ist.

Einige Regeln, die zu beachten sind:

- `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder Elementen mit impliziten Rollensemantiken anwenden.
- Das `aria-brailleroledescription`, falls vorhanden, muss einen nicht leeren, nicht nullierten Wert haben, der sich vom `aria-roledescription`-Wert unterscheidet, der sich wiederum von der ARIA expliziten oder impliziten semantischen Rolle unterscheidet.
- Vermeiden Sie die Verwendung von Unicode-Braillemustern. Wenn sie verwendet werden müssen, stellen Sie sicher, dass der `aria-brailleroledescription`-Wert neben Unicode-Braillemustern, Leerzeichen und Braille-Punkten-0 noch andere Inhalte enthält.
- Stellen Sie sicher, dass der Wert immer auf die Sprache des Dokuments lokalisiert ist.

> [!WARNING]
> Wenn der Inhalt nur in Unicode-Braillemustern vorliegt, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Fügen Sie dieses Attribut nur hinzu, wenn `aria-roledescription` keine angemessene Darstellung in Braille bietet.

Der `aria-brailleroledescription`-Wert wird nicht dem Braille-Nutzer angezeigt, wenn:

- Der Wert leer ist oder nur Leerzeichen oder das leere Braille-Muster enthält: dots-0 (U+2800).
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` verboten ist, einschließlich der `generic`-Rolle.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Websites und Anwendungen mit täglichen Nutzern von unterstützenden Technologien, einschließlich Braille-Lesern, um sicherzustellen, dass Ihr Inhalt in Braille Sinn ergibt.

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein unbeschränkter Werttyp, die in Braille umgewandelt werden soll.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
