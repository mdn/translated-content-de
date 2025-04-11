---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf alle Elemente angewendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _sogar auf denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden MathML-Globalattributen existieren auch folgende globale Attribute:

- Die [Event-Handler](/de/docs/Web/Events/Event_handlers)-Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)

  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite den Fokus erhalten soll.

- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)

  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und auf sie zuzugreifen.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)

  - : Bildet eine Klasse von Attributen, die benutzerdefinierte Datenattribute genannt werden und den Austausch von proprietären Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff darauf.

- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)

  - : Ein {{Glossary("Enumerated", "enumerated")}}-Attribut, das die Richtung des MathML-Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
    - `rtl`, was _rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):

  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.

- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)

  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Ihr Zweck ist es, das Element beim Verknüpfen (unter Verwendung eines Fragment-Identifiers), Scripting oder Styling (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)

  - : Eine [background-color](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)

  - : Eine [color](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)

  - : Eine {{cssxref("length-percentage")}} zur Verwendung als [font-size](/de/docs/Web/CSS/font-size) für das Element.

- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)

  - : Ein kryptographisches "nonce" ("Nummer nur einmal verwendet"), das von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.

- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)

  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)

  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Stilgestaltung zu ermöglichen, zum Beispiel zu Testzwecken.

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ob es _fokussierbar_ ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll, und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert ist;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der zunehmende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
