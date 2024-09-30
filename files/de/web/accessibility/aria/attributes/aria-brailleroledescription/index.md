---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{AccessibilitySidebar}}

Das globale `aria-brailleroledescription`-Attribut definiert eine lesbare, autorspezifische, lokalisierte, abgekürzte Beschreibung für die Rolle eines Elements, das in Braille umgesetzt werden soll.

## Beschreibung

Braille ist keine buchstäbliche Eins-zu-Eins-Transliteration von Buchstaben und Zahlen, sondern enthält verschiedene Abkürzungen, Kontraktionen und Zeichen, die Wörter repräsentieren (sogenannte Logogramme).

Anstatt lange Rollenbeschreibungen in Braille zu konvertieren, erlaubt das `aria-brailleroledescription`-Attribut die Bereitstellung einer abgekürzten Version des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Wertes, der eine lesbare, autorspezifische, lokalisierte Beschreibung für die Rolle eines Elements ist, um die Benutzererfahrung mit Braille-Schnittstellen zu verbessern.

Grundsätzlich ist der Wert von `aria-brailleroledescription` eine abgekürzte Version des `aria-roledescription`-Attributs, die in Braille umgesetzt werden soll.

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

Die meisten unterstützenden Technologien, wie Bildschirmleser, lesen das obige Beispiel als "slide, welcome to my talk. Image, Me." Braille-Hilfstechnologien präsentieren "sld welcome to my talk gra me" in Braille. Das semantische {{HTMLElement('article')}} erhält durch das `aria-roledescription`-Attribut die Rolle "slide". "Slide" ist eine Rolle, die nicht in der Spezifikation definiert ist, aber eine übliche Rolle für Folien in Präsentationen darstellt. In Braille wird die Rolle als "sld" präsentiert. Das "gra" steht für "graphic", das abgekürzt wird, um die "image"-Rolle in Braille darzustellen.

Das `aria-brailleroledescription`-Attribut sollte nur verwendet werden, um den Zweck nicht-interaktiver Containerrollen wie "group" oder "region" zu verdeutlichen oder um eine spezifischere Beschreibung eines Widgets im Zusammenhang mit Braille bereitzustellen.

Da das `aria-brailleroledescription`-Attribut die Art und Weise überschreibt, wie unterstützende Technologien den Namen einer Rolle in Braille lokalisieren und ausgeben, verhindern unangemessene Werte, dass Benutzer ein Element in Braille-Schnittstellen verstehen und damit interagieren können.

Verwenden Sie `aria-brailleroledescription` nur, wenn [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) vorhanden ist. Sollte jedoch der `aria-roledescription`-Wert in Braille funktionieren, ist die Braille-Version des Attributs nicht erforderlich. Allgemein sollte `aria-brailleroledescription` nur in seltenen Fällen verwendet werden, wenn eine `aria-roledescription` für Braille zu ausführlich ist.

Einige Regeln zur Beachtung:

- Wenden Sie `aria-brailleroledescription` nur auf Elemente mit einer gültigen ARIA-Rolle oder auf Elemente mit impliziten Rollen-Semantiken an.
- Das `aria-brailleroledescription`, falls vorhanden, muss einen nicht-leeren, nicht-nullwertigen Wert haben, der sich vom `aria-roledescription`-Wert unterscheidet, welches wiederum von der ARIA-expliziten oder impliziten semantischen Rolle unterschiedlich ist.
- Vermeiden Sie die Verwendung von Unicode-Braille-Mustern. Falls sie verwendet werden müssen, stellen Sie sicher, dass der `aria-brailleroledescription`-Wert andere Inhalte als Unicode-Braille-Muster, Leerzeichen und Braille-Muster-Punkte-0 enthält.
- Stellen Sie sicher, dass der Wert immer an die Sprache des Dokuments angepasst ist.

> [!WARNING]
> Wenn der Inhalt nur aus Unicode-Braille-Mustern besteht, wird der Wert nicht gemäß der bevorzugten Übersetzungstabelle des Benutzers übersetzt.

> [!NOTE]
> Verwenden Sie `aria-brailleroledescription` NICHT, um `aria-roledescription` zu replizieren. Fügen Sie dieses Attribut nur hinzu, wenn `aria-roledescription` keine angemessene Braille-Darstellung bietet.

Der Wert von `aria-brailleroledescription` wird dem Braille-Nutzer nicht angezeigt, wenn:

- Der Wert leer ist oder nur Leerzeichen oder das leere Braille-Muster: dots-0 (U+2800) enthält.
- Das Element, auf das das Attribut angewendet wird, eine explizite oder implizite WAI-ARIA-Rolle hat, bei der `aria-brailleroledescription` verboten ist, einschließlich der `generic`-Rolle.
- Das Element, auf das das Attribut angewendet wird, keine gültige `aria-roledescription` hat.

> [!NOTE]
> Testen Sie Ihre Webseiten und Anwendungen mit alltäglichen Nutzern von unterstützenden Technologien, einschließlich Braille-Lesegeräten, um sicherzustellen, dass Ihr Inhalt in Braille Sinn ergibt.

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenkette, ein unbeschränkter Werttyp, der in Braille umgesetzt werden soll.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen (außer [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
