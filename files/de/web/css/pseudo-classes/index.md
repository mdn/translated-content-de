---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 16e8ac8671498ce082da742fe59bdda9f7ff38cf
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und Ihnen ermöglicht, einen spezifischen Zustand des/der ausgewählten Elemente(s) zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Pseudo-Klassennamen (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält zudem ein Paar Klammern zur Definition der Argumente (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angefügt ist, wird als _Ankerelement_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einen Stil auf ein Element anzuwenden, nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie die Navigation-Historie (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, mit der Sie wissen können, ob die Maus sich über einem Element befindet oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kerndefinition von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes definierte Element.

## Angezeigter Zustand der Pseudo-Klassen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das entweder geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich derzeit im Anzeigemodus befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert ein Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt auf ein Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen übereinstimmen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt auf ein oder mehrere UI-Elemente, die das Standard-Element unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt auf ein Benutzereingabe-Element, das leer ist, entweder eine leere Zeichenkette oder eine andere null Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email', das eine gültig formatierte E-Mail-Adresse oder einen leeren Wert enthält, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbegrenzungen. Zum Beispiel ein Schieberegler-Steuerelement, wenn der ausgewählte Wert innerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbegrenzungen. Zum Beispiel ein Schieberegler-Steuerelement, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Sprache des Dokuments wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung aus, wie durch die Dokumentensprache bestimmt.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standortbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente im aktuellen Dokument.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} übereinstimmt.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Anker-Links zur selben Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel-Element der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Passt auf Elemente, die das Ziel-Element der Dokument-URL sind, sowie auf Elemente, die einen Nachkommen haben, der das Ziel-Element der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, gegen den abgeglichen werden soll.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, in dem sie als abspielend beschrieben werden würden, wie z. B. ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das aktuell eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das abspielt, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das abspielt, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonproduzierendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonproduzierendes Element, dessen Lautstärkepegel vom Browser gesperrt wurde.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Betrachten von etwas, das zeitlich begrenzt ist, wie beispielsweise eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements im Dokumentenbaum.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne andere Kinder als Leerzeichenelemente.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister des gewählten Typselektors hat.

## Schattenstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Shadow DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Schattenhost des Schattensbaums.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt auf ein Element, das {{CSSxRef(":host")}} entspricht und mit einem der in der bereitgestellten Liste enthaltenen Selektoren übereinstimmt.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattendoms im Kontext des Schattenhosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Slot-Elemente, denen Inhalte zugewiesen wurden.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion durch den Benutzer, damit sie anwendbar sind, wie beispielsweise das Halten eines Mauszeigers über ein Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät bezeichnet, wie beispielsweise das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element durch den Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent identifiziert, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie auf jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Matches-Any-Pseudo-Klasse passt auf jedes Element, das einem der in der bereitgestellten Liste enthaltenen Selektoren entspricht. Die Liste ist fehlertolerant.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negation oder Matches-None-Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument dargestellt wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifitätsanpassungs-Pseudo-Klasse passt auf jedes Element, das einem der in der bereitgestellten Liste enthaltenen Selektoren entspricht, ohne eine Spezifitätsgewichtung hinzuzufügen. Die Liste ist fehlertolerant.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmen, wenn die Ankerung gegen das angefügte Element erfolgt.

## Benutzerdefinierte Status-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit dem {{CSSxRef("@page")}}-At-Rule verwendet.

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

Wie reguläre Klassen können Sie so viele Pseudo-Klassen wie gewünscht in einem Selektor verketten.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, schließen Folgendes ein:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (input) {{Experimental_Inline}}
- `:blank` (page)
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
