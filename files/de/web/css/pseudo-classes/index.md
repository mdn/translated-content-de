---
title: Pseudoklassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 29033c05fb95b661f58befcc106abc7e7787749a
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudoklasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudoklasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudoklasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudoklasse (z. B. `:hover`). Eine funktionale Pseudoklasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudoklasse gebunden ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudoklassen ermöglichen es Ihnen, einem Element einen Stil nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Navigators (z. B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das Ihnen mitteilt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudoklassen können [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _bestimmten Teil_ eines Elements zu stylen.

## Elementare Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Wählt jedes definierte Element aus.
- {{CSSxRef(":heading")}}
  - : Wählt jedes Überschriftselement (`<h1>`-`<h6>`) aus.

## Anzeigezustand-Pseudoklassen der Elemente

Diese Pseudoklassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigezuständen.

- {{CSSxRef(":open")}}
  - : Wählt ein Element aus, das entweder geöffnet oder geschlossen sein kann und das derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Wählt ein Popover-Element aus, das sich derzeit im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Wählt ein Element aus, das sich in einem Zustand befindet, in dem es alle Interaktionen mit außerhalb liegenden Elementen ausschließt, bis die Interaktion verworfen wurde.
- {{CSSxRef(":fullscreen")}}
  - : Wählt ein Element aus, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Wählt ein Element aus, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein UI-Element, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein UI-Element, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitbar ist.
- {{CSSxRef(":placeholder-shown")}}
  - : Wählt ein Eingabeelement aus, das Platzhaltertext anzeigt. Zum Beispiel wird das `placeholder` Attribut in den {{htmlelement("input")}} und {{htmlelement("textarea")}} Elementen entsprechend ausgewählt.
- {{CSSxRef(":autofill")}}
  - : Trifft zu, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Wählt ein oder mehrere UI-Elemente aus, die standardmäßig unter einer Menge von Elementen stehen.
- {{CSSxRef(":checked")}}
  - : Trifft zu, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Beschreibt Elemente, die sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Wählt ein Benutzereingabeelement aus, das leer ist, einen leeren String oder andere null-Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Wählt ein Element mit gültigen Inhalten aus. Zum Beispiel ein Eingabeelement vom Typ 'email', das eine korrekt formatierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Wählt ein Element mit ungültigen Inhalten aus. Zum Beispiel ein Eingabeelement vom Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im zulässigen Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des zulässigen Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Trifft zu, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Trifft zu, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit inkorrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudoklassen

Diese Pseudoklassen spiegeln die Sprache des Dokuments wider und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder Ausrichtungsrichtung des Textes.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudoklasse wählt ein Element basierend auf seiner Richtung aus, die durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache aus.

## Lokations-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Wählt ein Element aus, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Wählt Links aus, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Wählt Links aus, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Wählt Links aus, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Wählt das Element aus, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Wählt Elemente aus, die das Ziel der Dokument-URL sind, aber auch Elemente, die einen Nachfahren haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Bezugspunkt für Selektoren darstellen, gegen die geprüft wird.

## Ressourcenstatus-Pseudoklassen

Diese Pseudoklassen gelten für Medien, die sich in einem Zustand befinden können, der als abspielbar beschrieben würde, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Abspielposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber vorübergehend angehalten ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber angehalten ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonproduzierendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonproduzierendes Element, bei dem der Lautstärkepegel durch den Browser gesperrt ist.

## Zeitdimensionale Pseudoklassen

Diese Pseudoklassen gelten, wenn etwas angezeigt wird, das Zeitbegrenzungen hat, wie eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baumstruktur-Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>` Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Wählt ein Element aus, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Wählt ein Element aus, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Wählt ein Element aus, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen zu wählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen zu wählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Wählt ein Element aus, das das erste seiner Geschwister ist und auch einem bestimmten Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Wählt ein Element aus, das das letzte seiner Geschwister ist und auch einem bestimmten Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Wählt ein Element aus, das keine Geschwister des ausgewählten Typselektors hat.

## Schattenstruktur-Pseudoklassen

Diese Pseudoklassen beziehen sich auf das Shadow DOM.

- {{CSSxRef(":host")}}
  - : Wählt den Schattenbaum-Schattenhost aus.
- {{CSSxRef(":host_function", ":host()")}}
  - : Wählt ein Element aus, das {{CSSxRef(":host")}} entspricht und alle in der Liste angegebenen Selektoren entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schattenhosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Wählt Slot-Elemente aus, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudoklassen

Diese Pseudoklassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, wie das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Trifft zu, wenn ein Benutzer ein Element mit einem Zeigegerät bestimmt, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Trifft zu, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Trifft zu, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Trifft zu, wenn ein Element den Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Wählt ein Element aus, auf das {{CSSxRef(":focus")}} zutrifft, sowie jedes Element, das einen Nachfahren hat, auf das {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Wählt das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}} aus, auf das derzeit gescrollt wird, also den **aktiven** Scroll-Marker.

## Funktionale Pseudoklassen

Diese Pseudoklassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Welche-passt-Pseudoklasse trifft auf jedes Element zu, das einem der Selektoren in der angegebenen Liste entspricht. Die Liste ist nachsichtig.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negations- oder Keine-passt-Pseudoklasse entspricht jedem Element, das nicht durch ihr Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifität-Anpassungs-Pseudoklasse trifft auf jedes Element zu, das einem der Selektoren in der angegebenen Liste ohne Spezifitätsgewicht entspricht. Die Liste ist nachsichtig.
- {{CSSxRef(":has", ":has()")}}
  - : Die Relationale Pseudoklasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn an das angehängte Element angebunden.

## Benutzerdefinierte Zustands-Pseudoklassen

Diese Pseudoklassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Wählt benutzerdefinierte Elemente aus, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtstransition-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Elemente, die an einer [Ansichtstransition](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Wählt das Stamm-Element eines Dokuments aus, wenn eine [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Bearbeitung ist (_aktiv_) und hört auf, übereinzustimmen, sobald die Transition abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Wählt das Stamm-Element eines Dokuments aus, wenn eine bestimmte [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Bearbeitung ist (_aktiv_) und hört auf, übereinzustimmen, sobald die Transition abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie beliebig viele Pseudoklassen in einem Selektor miteinander verketten.

## Alphabetisches Verzeichnis

Pseudoklassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen Folgendes:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
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
- {{CSSXRef(":heading")}}
- {{CSSXRef(":heading_function", ":heading()")}}
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

- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)
