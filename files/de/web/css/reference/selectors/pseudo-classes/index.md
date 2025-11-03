---
title: Pseudoklassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudoklasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um einen bestimmten Zustand der ausgewählten Elemente zu gestalten. Zum Beispiel kann die Pseudoklasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestaltet werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudoklasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudoklasse (z.B. `:hover`). Eine funktionale Pseudoklasse enthält auch ein Paar Klammern zur Definition der Argumente (z.B. `:dir()`). Das Element, an das eine Pseudoklasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudoklassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die angibt, ob die Maus über einem Element ist oder nicht) einen Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudoklassen können [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu gestalten.

## Elementare Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes definierte Element.
- {{CSSxRef(":heading")}}
  - : Passt auf jedes Überschriftselement (`<h1>`-`<h6>`).

## Pseudoklassen für Anzeigezustände von Elementen

Diese Pseudoklassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigezuständen.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich derzeit im Anzeigenzustand befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt auf ein Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel passt es auf das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}}-Element vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt auf ein oder mehrere UI-Elemente, die die Standardeinstellung innerhalb eines Elementesets sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt auf ein Benutzereingabeelement, das leer ist, einen leeren String oder eine andere nullartige Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement des Typs 'email', das eine gültige E-Mail-Adresse enthält oder einen leeren Wert, wenn das Kontrollfeld nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement des Typs 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler-Kontrollfeld, wenn der ausgewählte Wert im zulässigen Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler-Kontrollfeld, wenn der ausgewählte Wert außerhalb des zulässigen Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit inkorrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudoklassen

Diese Pseudoklassen reflektieren die Dokumentsprache und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudoklasse wählt ein Element basierend auf seiner durch die Dokumentsprache bestimmten Richtung.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache.

## Standort-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Links und auf zielgerichtete Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entspricht.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die bereits besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL dieselbe ist wie die Ziel-URL. Zum Beispiel Anker-Links zur selben Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, die eine Übereinstimmung hoffen.

> [!NOTE]
> Eine `:target-within` Pseudoklasse, um Elemente abzugleichen, die ein Nachfahre oder selbst das Ziel der Dokument-URL sind, war definiert wurde aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudoklassen

Diese Pseudoklassen gelten für Medien, die sich in einem Zustand befinden können, in dem sie als spielend beschrieben werden, wie z.B. ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein spielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein spielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein spielbares Element, das momentan eine Abspielposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein spielbares Element, das gespielt wird, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein spielbares Element, das gespielt wird, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonproduzierendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonproduzierendes Element, dessen Lautstärke durch den Browser gesperrt ist.

## Zeitdimensionale Pseudoklassen

Diese Pseudoklassen gelten, wenn etwas betrachtet wird, das eine Zeitstruktur hat, wie zum Beispiel ein [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertiteltrack.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder ein Vorfahrelement des Elements, das gerade angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baum-strukturelle Pseudoklassen

Diese Pseudoklassen beziehen sich auf den Standort eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichenzeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts von der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Übschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister des gewählten Typ-Selektors hat.

## Schatten-strukturelle Pseudoklassen

Diese Pseudoklassen beziehen sich auf das Schatten DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Schattenbaum des Schattenhosts.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt auf ein Element, das {{CSSxRef(":host")}} entspricht und einem der in der Liste bereitgestellten Selektoren entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schattenhosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Schlitz-Elemente zu, die Inhalt zugewiesen bekommen haben.

## Benutzeraktions-Pseudoklassen

Diese Pseudoklassen erfordern eine Interaktion durch den Benutzer, damit sie angewendet werden, wie z.B. das Bewegen eines Mauszeigers über ein Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät, wie das Halten des Mauszeigers über das Element, bezeichnet.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie auf jedes Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt auf das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, die aktuell angescrollt ist, mit anderen Worten, die **aktive** Scroll-Markierung.

## Funktionale Pseudoklassen

Diese Pseudoklassen akzeptieren eine [Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [verzeihende Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die matches-any Pseudoklasse passt auf jedes Element, das einem der in der Liste bereitgestellten Selektoren entspricht. Die Liste ist verzeihend.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negation, oder matches-none, Pseudoklasse repräsentiert ein Element, das nicht durch sein Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifität Anpassungs-Pseudoklasse passt auf jedes Element, das einem der in der Liste bereitgestellten Selektoren entspricht, ohne jegliches Spezifitätsgewicht hinzuzufügen. Die Liste ist verzeihend.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudoklasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn er gegen das angehängte Element verankert ist.

## Benutzerdefinierte Zustand-Pseudoklassen

Diese Pseudoklassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## View-Transition-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Elemente, die an einer [View-Transition](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt auf das Root-Element eines Dokuments, wenn eine [View-Transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_active_) und hört auf, zu passen, sobald die Transition abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Passt auf das Root-Element eines Dokuments, wenn eine bestimmte [View-Transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_active_) und hört auf, zu passen, sobald die Transition abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie in einem Selektor beliebig viele Pseudoklassen verketten.

## Alphabetischer Index

Von einer Reihe von CSS-Spezifikationen definierte Pseudoklassen umfassen folgendes:

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

- [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
