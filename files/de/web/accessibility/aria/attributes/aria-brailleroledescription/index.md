---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-brailleroledescription` definiert eine menschenlesbare, vom Autor lokalisierte Abkürzung für die Rolle eines Elements, die in Braille umgesetzt werden soll.

## Beschreibung

Braille ist keine Eins-zu-eins-Transkription von Buchstaben und Zahlen, sondern enthält verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter darstellen (bekannt als Logogramme).

Statt lange Rollenbeschreibungen in Braille umzuwandeln, ermöglicht das Attribut `aria-brailleroledescription` die Bereitstellung einer abgekürzten Version des Werts [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription), die eine menschenlesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements darstellt, um die Benutzererfahrung mit Braille-Schnittstellen zu verbessern.

Im Wesentlichen ist der Wert von `aria-brailleroledescription` eine abgekürzte Version des Attributs `aria-roledescription`, die in Braille umgesetzt werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Bildschirmleser, werden das oben Gesagte als "Folie, willkommen zu meinem Vortrag. Bild, Ich." lesen. Braille-Hilfstechnologien werden "sld willkommen zu meinem vtr gra ich" in Braille präsentieren. Das semantische {{HTMLElement('article')}} erhält die Rolle "Folie" durch das Attribut `aria-roledescription`; "Folie" ist dabei eine Rolle, die nicht in der Spezifikation definiert ist, sondern eine übliche Rolle für Folien in einer Präsentation darstellt. In Braille wird die Rolle als "sld" präsentiert. "gra" ist eine Abkürzung für "grafik", die zeigt, wie die Rolle "Bild" in Braille verkürzt wird.

Das Attribut `aria-brailleroledescription` sollte nur verwendet werden, um den Zweck nicht interaktiver Containerrollen wie "Gruppe" oder "Bereich" zu verdeutlichen oder um eine spezifischere Beschreibung eines Widgets im Braille-Kontext zu geben.

Da das Attribut `aria-brailleroledescription` überschreibt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und darstellen, verhindern unpassende Werte, dass Benutzer ein Element auf Braille-Schnittstellen verstehen und damit interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) vorhanden ist. Falls der Wert von `aria-roledescription` jedoch in Braille funktioniert, ist die Braille-Version des Attributs nicht nötig. Im Allgemeinen sollte `aria-brailleroledescription` nur in seltenen Fällen verwendet werden, in denen eine `aria-roledescription` in Braille zu langatmig ist.

Einige Regeln, die beachtet werden müssen:

- Wenden Sie `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder auf Elemente mit impliziter Rollensemantik an.
- Das Attribut `aria-brailleroledescription`, falls vorhanden, muss einen nicht leeren, nicht null Wert haben, der sich von dem Wert `aria-roledescription` unterscheidet, der wiederum von der expliziten ARIA- oder impliziten semantischen Rolle abweicht.
- Vermeiden Sie die Verwendung von Unicode-Braille-Mustern. Wenn sie verwendet werden müssen, stellen Sie sicher, dass der Wert von `aria-brailleroledescription` Inhalte außer Unicode-Braille-Mustern, Leerzeichen und Braille-Muster-Punkten-0 enthält.
- Stellen Sie sicher, dass der Wert immer an die Sprache des Dokuments lokalisiert ist.

> [!WARNING]
> Wenn der Inhalt nur in Unicode-Braille-Mustern vorliegt, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Fügen Sie dieses Attribut nur hinzu, wenn `aria-roledescription` keine angemessene Braille-Darstellung liefert.

Der Wert von `aria-brailleroledescription` wird dem Braille-Nutzer nicht präsentiert, wenn:

- Der Wert leer ist oder nur Leerzeichen oder das leere Braille-Muster: Dots-0 (U+2800) enthält.
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` verboten ist, einschließlich der `generic`-Rolle.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Websites und Anwendungen mit täglichen Nutzern unterstützender Technologien, einschließlich Braille-Lesern, um sicherzustellen, dass Ihre Inhalte in Braille sinnvoll sind.

## Werte

- `<string>`
  - : Der Wert ist ein String, ein uneingeschränkter Wertetyp, der in Braille umgesetzt werden soll

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
