---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 4ec4913a3aaf3b20853c2fb638922c162e565ad6
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und einen besonderen Zustand des ausgewählten Elements oder der ausgewählten Elemente angibt. Beispielsweise kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern zur Definition der Argumente (z. B. `:dir()`). Das Element, an dem eine Pseudo-Klasse hängt, wird als _Ankerelement_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das angibt, ob die Maus über einem Element ist oder nicht) einen Stil anzuwenden.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Pseudo-Klassen für Anzeigestatus von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das sich in einem Zustand befindet, in dem es alle Interaktion mit Elementen außerhalb davon ausschließt, bis die Interaktion beendet ist.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Passt zu einem {{htmlelement("input")}}, das vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich in einem aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich in einem deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Es wird beispielsweise das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen matchen.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren UI-Elementen, die in einer Menge von Elementen das Standard-Element sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu UI-Elementen, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist, einen leeren String oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigem Inhalt. Beispielsweise ein Eingabeelement mit dem Typ 'email', das eine korrekt formatierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Eingabe nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigem Inhalt. Beispielsweise ein Eingabeelement mit dem Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Beispielsweise ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Beispielsweise ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Direktionalitäts-Pseudo-Klasse wählt ein Element basierend auf seiner Direktionalität, bestimmt durch die Dokumentensprache, aus.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standortbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf fokussierte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL mit der Ziel-URL übereinstimmt. Beispielsweise Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Passt zu Elementen, die das Ziel der Dokument-URL sind, aber auch zu Elementen, die einen Nachfahren haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Bezugspunkt für Selektoren sind, um übereinzustimmen.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen werden auf Medien angewendet, die in einem Zustand sein können, in dem sie als abspielend beschrieben werden, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Media-Element, das fähig ist zu spielen, wenn dieses Element spielt.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Media-Element, das fähig ist zu spielen, wenn dieses Element pausiert ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Anzeigen von etwas mit Zeitsteuerung, wie z. B. eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das sich vollständig vor dem {{CSSxRef(":current")}}-Element befindet.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das sich vollständig nach dem {{CSSxRef(":current")}}-Element befindet.

## Baumstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerraumzeichen.
- {{CSSxRef(":nth-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, beginnend vom Ende der Liste.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Beispielsweise ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ innerhalb einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ innerhalb einer Liste von Geschwisterelementen entsprechen, beginnend vom Ende der Liste.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des ausgewählten Typselektors hat.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, wie z. B. das Halten des Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät anspricht, wie z. B. das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Beispielsweise, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und die Benutzeroberfläche identifiziert, dass das Element sichtbar fokussiert werden sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} angewendet wird, sowie zu jedem Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} angewendet wird.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selector-Liste](/de/docs/Web/CSS/Selector_list) oder [forgiving Selector-Liste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die Matches-any-Pseudo-Klasse stimmt mit jedem Element überein, das mit einem der Selektoren in der bereitgestellten Liste übereinstimmt. Die Liste ist fehlertolerant.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Negations- oder Matches-none-Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Spezifitätsanpassungs-Pseudo-Klasse stimmt mit jedem Element überein, das mit einem der Selektoren in der bereitgestellten Liste übereinstimmt, ohne Gewicht an Spezifität hinzuzufügen. Die Liste ist fehlertolerant.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren beim Ankern gegen das angehängte Element übereinstimmt.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen, können Sie so viele Pseudo-Klassen in einem Selektor verketten, wie Sie möchten.

## Alphabetisches Verzeichnis

Durch einen Satz von CSS-Spezifikationen definierte Pseudo-Klassen umfassen folgende:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} {{Experimental_Inline}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}}

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
- {{CSSxRef(":future")}} {{Experimental_Inline}}

H

- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}}

M

- {{CSSxRef(":modal")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
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
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}

W

- {{CSSxRef(":where", ":where()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
