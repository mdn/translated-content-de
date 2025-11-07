---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Nutzers über den Button schwebt, und dieser ausgesuchte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt wird, wird als _Ankerelement_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einen Stil auf ein Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums anzuwenden, sondern auch in Bezug auf externe Faktoren wie die Historie des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} für bestimmte Formularelemente) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das Ihnen anzeigt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können mit [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) spezifische Teile eines Elements gestylt werden.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kernidentität der Elemente.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes definierte Element.
- {{CSSxRef(":heading")}}
  - : Passt auf jedes Überschriftselement (`<h1>`-`<h6>`).

## Element-Anzeigestatus-Pseudo-Klassen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das entweder geöffnet oder geschlossen sein kann und gerade offen ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich aktuell im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit externen Elementen ausschließt, bis die Interaktion zurückgewiesen wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich momentan im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich momentan im Bild-in-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das in einem aktivierten Zustand ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das in einem deaktivierten Zustand ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das nicht vom Benutzer geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitbar ist.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt auf ein Eingabeelement, das einen Platzhaltertext anzeigt. Zum Beispiel wird es auf das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen passen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt auf eines oder mehrere UI-Elemente, die das Standard-Element in einer Gruppe sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder eingeschaltet sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt auf ein Benutzereingabeelement, das leer ist, einen leeren String oder andere null Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültige E-Mail-Adresse oder einen leeren Wert enthält, wenn die Eingabe nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', bei dem ein Name eingegeben wurde.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert innerhalb des zulässigen Bereichs liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des zulässigen Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder auf {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} passen würde.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die bereits besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL mit der Ziel-URL übereinstimmt. Zum Beispiel Ankerlinks zur selben Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, gegen die abgeglichen wird.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente zu markieren, die selbst oder deren Nachkommen das Ziel der Dokument-URL sind, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen werden auf Medien angewendet, die in einem Zustand sein können, in dem sie als abgespielt beschrieben würden, wie zum Beispiel ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein Element, das momentan nach einer Wiedergabeposition in der Mediendatei sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein Element, das abgespielt wird, aber vorübergehend angehalten ist, weil die Mediendatei heruntergeladen wird.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein Element, das abgespielt wird, aber angehalten ist, weil die Mediendatei nicht heruntergeladen werden kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein klangerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein klangerzeugendes Element, bei dem die Lautstärke durch den Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten, wenn etwas betrachtet wird, das Timing hat, wie eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder einen Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Standort eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, rückwärts vom Ende der Liste zählen.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne weitere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwistern entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwistern entsprechen, rückwärts vom Ende der Liste zählen.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister des gewählten Typselektors hat.

## Schatten-strukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Shadow-DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Schattenbaum-Host des Shadow-DOM.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt auf ein Element, das auf {{CSSxRef(":host")}} passt und einem der in der Liste angegebenen Selektoren entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Shadow-DOM im Kontext des Schattenbaum-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Schlitz-Elemente, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion durch den Benutzer, um angewendet zu werden, wie das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät anzeigt, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element durch den Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzer-Agent erkennt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} angewendet wird, sowie jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} angewendet wird.
- {{CSSxRef(":target-current")}}
  - : Passt auf das {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, auf die momentan gescrollt wird, mit anderen Worten, der **aktive** Scrollmarker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [verzeihende Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die 'matches-any'-Pseudo-Klasse passt auf jedes Element, das einem der in der Liste angegebenen Selektoren entspricht. Die Liste ist verzeihend.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negations- oder 'matches-none'-Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifitätsanpassungs-Pseudo-Klasse passt auf jedes Element, das einem der in der Liste angegebenen Selektoren entspricht, ohne ein Spezifizitätsgewicht hinzuzufügen. Die Liste ist verzeihend.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren beim Ankern gegen das angehängte Element übereinstimmt.

## Benutzerdefinierte Zustands-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit dem {{CSSxRef("@page")}}-At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## View-Übergangs-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [view transition](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt auf das Root-Element eines Dokuments, wenn ein [view transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Passt auf das Root-Element eines Dokuments, wenn ein spezifischer [view transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie in einem Selektor so viele Pseudo-Klassen verketten, wie Sie möchten.

## Alphabetischer Index

Durch eine Reihe von CSS-Spezifikationen definierte Pseudo-Klassen umfassen folgende:

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

- [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
