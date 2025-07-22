---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 462dc4b2f5c9eaef94d21da0f37ec3bf977c5592
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es ermöglicht, einen spezifischen Zustand des ausgewählten Elements oder der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über dem Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern zur Definition der Argumente (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es, einen Stil auf ein Element in Bezug auf den Inhalt des Dokumentenbaums sowie auf externe Faktoren wie die Historie des Browsers (z.B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die anzeigt, ob die Maus über einem Element ist oder nicht) anzuwenden.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt zu jedem Element, das definiert ist.

## Anzeigezustand von Elementen Pseudo-Klassen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigezustand.

- {{CSSxRef(":open")}}
  - : Passt zu einem Element, das entweder geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt zu einem Popover-Element, das sich derzeit im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb davon ausschließt, bis die Interaktion aufgehoben wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das derzeit im Vollbildmodus ist.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das derzeit im Bild-im-Bild-Modus ist.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld befindet vor und nach der Interaktion.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert ein Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel passt es zum `placeholder`-Attribut in den {{htmlelement("input")}} und {{htmlelement("textarea")}} Elementen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren Benutzerschnittstellenelementen, die standardmäßig unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsschaltflächen aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu Benutzerschnittstellenelementen, wenn sie in einem unbestimmten Zustand sind.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist, eine leere Zeichenfolge oder andere Null-Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig formatierte E-Mail-Adresse oder einen leeren Wert enthält, wenn das Steuerelement nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im zulässigen Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des zulässigen Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, aber nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, aber nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtlinien-Pseudo-Klasse wählt ein Element basierend auf seiner Richtlinie aus, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache aus.

## Positions-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente im aktuellen Dokument.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL mit der Ziel-URL übereinstimmt. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Passt zu Elementen, die das Ziel der Dokument-URL sind, aber auch zu Elementen, die einen Nachkommen haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, gegen die verglichen werden soll.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die sich in einem Zustand befinden, in dem sie als abspielbar beschrieben werden können, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das abspielt, aber vorübergehend pausiert ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das abspielt, aber pausiert ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein klangerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein klangerzeugendes Element, dessen Lautstärkepegel vom Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Ansehen von etwas, das eine Zeitsteuerung hat, wie eine [WebVTT](/de/docs/Web/API/WebVTT_API) Beschriftungsspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baum-strukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements im Dokumentenbaum.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das der Wurzel des Dokuments entspricht. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ in einer Liste von Geschwistern entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ in einer Liste von Geschwistern entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch zu einem bestimmten Typselektor passt.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch zu einem bestimmten Typselektor passt.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des ausgewählten Typselektors hat.

## Schatten-strukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Shadow-DOM.

- {{CSSxRef(":host")}}
  - : Passt zu dem Schattenbaum-Schatten-Host.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt zu einem Element, das {{CSSxRef(":host")}} entspricht und zu einem der in der Liste bereitgestellten Selektoren passt.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt zu Slot-Elementen, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion durch den Benutzer, damit sie anwendbar sind, wie das Halten eines Mauszeigers über ein Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät anzeigt, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent erkennt, dass das Element sichtbar fokussiert werden sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} anwendbar ist, sowie zu jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} anwendbar ist.
- {{CSSxRef(":target-current")}}
  - : Passt zum {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, die derzeit gescrollt wurde, mit anderen Worten, die **aktive** Scrollemarkierung.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [verzeiherische Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Alles-zulassen-Pseudo-Klasse passt zu jedem Element, das einem der in der Liste bereitgestellten Selektoren entspricht. Die Liste ist verzeihend.
- {{CSSxRef(":not", ":not()")}}
  - : Die Verneinung, oder Alles-ausschließen-Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifizitätsanpassungs-Pseudo-Klasse passt zu jedem Element, das einem der in der Liste bereitgestellten Selektoren entspricht, ohne eine Spezifizitätsgewichtung hinzuzufügen. Die Liste ist verzeihend.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn eines der relativen Selektoren übereinstimmt, wenn es gegen das angehängte Element verankert ist.

## Benutzerdefinierte Zustand-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt zu benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden zusammen mit der {{CSSxRef("@page")}} At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtsübergang-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein bestimmter [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Pseudo-Klassen in einem Selektor miteinander verkettet werden.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

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
