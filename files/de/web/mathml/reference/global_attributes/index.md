---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie möglicherweise bei einigen Elementen keine Wirkung zeigen.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _auch auf denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch folgende globale Attribute:

- Die [Event-Handler](/de/docs/Web/Events/Event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste globaler Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden sollte.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) zu selektieren und zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch von proprietärer Information zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung ermöglichen, die von Skripten verwendet werden kann. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements zugänglich, auf dem das Attribut gesetzt ist. Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein [Aufzählungs]-(/de/docs/Glossary/Enumerated)Attribut, das die Leserichtung des MathML-Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. Englisch oder Marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):
  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) des Elements setzt.
    - `true`, was `normal` bedeutet.
    - `false`, was `kompakt` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), bei Skripten oder beim Styling (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Eine {{cssxref("length-percentage")}}, die als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer Nonce ("Number Used Once"), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Fetch durchgeführt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [Tiefenstufe](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und deren Zuordnung.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Es wird empfohlen, Stile in einer separaten Datei oder in Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dem Zweck des schnellen Stylings, beispielsweise für Testzwecke.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Fokus bekommen kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der ansteigende Wert des `tabindex`. Teilen sich mehrere Elemente den gleichen tabindex, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
