---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie bei manchen Elementen keine Wirkung haben mögen.

Globale Attribute können auf alle [MathML-Elemente](/de/docs/Web/MathML/Reference/Element) angewendet werden, _sogar auf diejenigen, die im Standard nicht spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch die folgenden globalen Attribute:

- Die [Event-Handler](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers)-Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein boolean-Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es, CSS und JavaScript bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch proprietärer Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements zugänglich, auf dem das Attribut gesetzt ist. Die Eigenschaft [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) bietet Zugriff auf sie.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann folgende Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):
  - : Ein boolean, das den [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [background-color](/de/docs/Web/CSS/Reference/Properties/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [color](/de/docs/Web/CSS/Reference/Properties/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Eine {{cssxref("length-percentage")}} als [font-size](/de/docs/Web/CSS/Reference/Properties/font-size) für das Element.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Eine kryptografische {{Glossary("Nonce", "nonce")}} („number used once“), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, zum Beispiel zu Testzwecken.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ergibt sich aus dem aufsteigenden Wert des `tabindex`. Wenn mehrere Elemente den gleichen `tabindex` teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
