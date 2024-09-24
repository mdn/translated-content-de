---
title: Globale Attribute
slug: Web/MathML/Global_attributes
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Element) angegeben werden, _auch auf denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardmäßige Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren folgende globale Attribute:

- Die [Ereignis-Handler](/de/docs/Web/Events/Event_handlers)-Attribute wie **`onclick`**, **`onfocus`**, etc.
- Das [`href`](/de/docs/Web/MathML/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen erlauben es, dass CSS und JavaScript spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode {{DOMxRef("Document.getElementsByClassName()")}} auswählen und darauf zugreifen können.
- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die den Austausch von proprietären Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{glossary("DOM")}}-Darstellung, die von Skripten verwendet werden kann, ermöglichen. Alle solche benutzerdefinierten Daten sind über die {{DOMxRef("MathMLElement")}}-Schnittstelle des Elements verfügbar, auf dem das Attribut gesetzt ist. Die {{DOMxRef("HTMLElement.dataset")}}-Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Global_attributes/dir)

  - : Ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das die Richtung des MathML-Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
    - `rtl`, was _rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Global_attributes/displaystyle):

  - : ein boolescher Wert, der den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `kompakt` bedeutet.

- [`id`](/de/docs/Web/HTML/Global_attributes/id)

  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), beim Skripten oder Stylen (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Global_attributes/mathbackground)

  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Global_attributes/mathcolor)

  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Global_attributes/mathsize)

  - : Eine {{cssxref("length-percentage")}}, die als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.

- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)

  - : Ein kryptografischer Nonce ("Nummer einmal verwendet"), der von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.

- [`scriptlevel`](/de/docs/Web/MathML/Global_attributes/scriptlevel)

  - : Legt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element fest. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}}-Element haben hauptsächlich den Zweck, ein schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus übernehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der zunehmende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Element")}}-Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
