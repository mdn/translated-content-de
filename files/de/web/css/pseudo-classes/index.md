---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um eine Schaltfläche zu selektieren, wenn der Zeiger eines Benutzers über die Schaltfläche schwebt, und diese ausgewählte Schaltfläche kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern zur Definition der Argumente (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einen Stil auf ein Element nicht nur in Bezug auf den Inhalt des Dokumentbaums anzuwenden, sondern auch in Bezug auf externe Faktoren wie die Verlaufshistorie des Navigators (z.B. {{CSSxRef(":visited")}}), den Status seines Inhalts (z.B. {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie bei {{CSSxRef(":hover")}}, das Ihnen mitteilt, ob die Maus über einem Element schwebt oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _bestimmten Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt zu jedem definierten Element.

## Pseudo-Klassen zum Anzeigestatus von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt zu einem Element, das entweder geöffnet oder geschlossen sein kann und aktuell geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt zu einem Popover-Element, das sich derzeit im anzeigenden Zustand befindet.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb blockiert, bis die Interaktion beendet ist.
- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das sich gerade im Bild-in-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das sich im aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das sich im deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert ein beliebiges Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein beliebiges Element, das vom Benutzer bearbeitbar ist.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen finden.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren UI-Elementen, die standardmäßig innerhalb einer Menge von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder eingeschaltet sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu UI-Elementen, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist, ein leerer String oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig geformte E-Mail-Adresse oder einen leeren Wert enthält, wenn das Eingabeelement nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das einen Namen enthält.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachbezogene Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Sprach des Dokuments wider und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder der Ausrichtung des Skripts.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungspseudo-Klasse wählt ein Element basierend auf seiner Richtung, die durch die Sprach des Dokuments bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache.

## Positionsbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL dieselbe ist wie die Ziel-URL. Zum Beispiel Ankerlinks zur selben Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Passt zu Elementen, die das Ziel der Dokument-URL sind, aber auch zu Elementen, die einen Nachkommen haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, die zu vergleichen sind.

## Zustandsbezogene Pseudo-Klassen für Medien

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, den man als spielend beschreiben würde, wie z.B. ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein spielbares Element, das gerade spielt.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein spielbares Element, das unterbrochen wurde.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein spielbares Element, das derzeit eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein spielbares Element, das spielt, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein spielbares Element, das spielt, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonproduzierendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonproduzierendes Element, dessen Lautstärkepegel vom Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten, wenn etwas betrachtet wird, das eine zeitliche Komponente hat, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen, rückwärts vom Ende der Liste gezählt, auszuwählen.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einen bestimmten Typ von einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen, die einen bestimmten Typ entsprechen, rückwärts vom Ende der Liste auszuwählen.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des gewählten Typselektors hat.

## Schattenstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Schatten-DOM.

- {{CSSxRef(":host")}}
  - : Passt zum Schattenbaum-Haupt-Wirt.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt zu einem Element, das {{CSSxRef(":host")}} entspricht und irgendeinem der Selektoren in der bereitgestellten Liste entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Wirts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt zu Schlitz-Elementen, die Inhalten zugewiesen wurden.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine gewisse Interaktion durch den Benutzer, damit sie angewendet werden, z.B. das Überfahren eines Elements mit einem Mauszeiger.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät, wie z.B. dem Überfahren des Elements mit der Maus, auswählt.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent erkennt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} zutrifft, plus jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt zu dem {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, das aktuell gescrollt wird, mit anderen Worten, der **aktive** Scroll-Marker.

## Funktionelle Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selectorliste](/de/docs/Web/CSS/Selector_list) oder eine [nachsichtige Selectorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Pseudo-Klasse matches-any passt zu jedem Element, das einem der Selektoren in der bereitgestellten Liste entspricht. Die Liste ist nachsichtig.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negation oder matches-none Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Pseudo-Klasse zur Spezifitätseinstellung passt zu jedem Element, das einem der Selektoren in der bereitgestellten Liste entspricht, ohne jegliches Spezifitätsgewicht hinzuzufügen. Die Liste ist nachsichtig.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn irgendeiner der relativen Selektoren übereinstimmt, wenn sie gegen das angehängte Element verankert sind.

## Benutzerdefinierte Zustands-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt zu benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seitenbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie beliebig viele Pseudo-Klassen in einem Selektor verketten.

## Alphabetische Index

Von einer Reihe von CSS-Spezifikationen definierte Pseudo-Klassen umfassen die folgenden:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (Eingabe) {{Experimental_Inline}}
- `:blank` (Seite)
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where", ":where()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
