---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen spezifischen Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, ein Stil auf ein Element nicht nur in Bezug auf den Inhalt der Dokumentstruktur, sondern auch in Bezug auf externe Faktoren anzuwenden, wie zum Beispiel die Historie des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die es Ihnen ermöglicht zu erkennen, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Pseudo-Klassen des Anzeigezustands von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigezuständen.

- {{CSSxRef(":fullscreen")}}
  - : Wählt ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":modal")}}
  - : Wählt ein Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":picture-in-picture")}}
  - : Wählt ein Element, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen stehen im Zusammenhang mit Formularelementen und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Wählt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich im aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich im deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Wählt ein Eingabefeld aus, das Platzhaltertext anzeigt. Es wird beispielsweise das `placeholder`-Attribut in den {{htmlelement("input")}} und {{htmlelement("textarea")}}-Elementen auswählen.
- {{CSSxRef(":default")}}
  - : Wählt ein oder mehrere UI-Elemente aus, die der Standard unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Wählt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Wählt UI-Elemente aus, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Wählt ein Benutzerelement aus, das leer ist und eine leere Zeichenkette oder andere null Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Wählt ein Element mit gültigen Inhalten aus. Zum Beispiel ein Eingabefeld mit dem Typ 'email', das eine gültig formatiert E-Mail-Adresse oder einen leeren Wert enthält, wenn das Steuerungselement nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Wählt ein Element mit ungültigen Inhalten aus. Zum Beispiel ein Eingabefeld mit dem Typ 'email' mit einem eingetragenen Namen.
- {{CSSxRef(":in-range")}}
  - : Wendet sich auf Elemente mit Bereichseinschränkungen an. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Wendet sich auf Elemente mit Bereichseinschränkungen an. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Wählt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Wählt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekt eingegebenen Daten, aber nur wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falsch eingegebenen Daten, aber nur wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentsprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schriftsrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtungsbestimmung durch die Dokumentsprache aus.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen stehen in Zusammenhang mit Links und mit Zielobjekten innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Wählt ein Element aus, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entspricht.
- {{CSSxRef(":link")}}
  - : Wählt Links aus, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Wählt Links aus, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Wählt Links aus, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur selben Seite.
- {{CSSxRef(":target")}}
  - : Wählt das Element aus, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Wählt Elemente aus, die das Ziel der Dokument-URL sind, sowie Elemente, die einen Nachkommen haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, um gegen sie übereinzustimmen.

## Ressourcenzustands-Pseudo-Klassen

Diese Pseudo-Klassen werden auf Medien angewandt, die sich in einem abspielbaren Zustand befinden können, wie zum Beispiel ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Medienelement, das abspielbar ist, wenn dieses Element abspielt.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Medienelement, das abspielbar ist, wenn dieses Element pausiert.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen werden angewendet, wenn etwas mit Timing betrachtet wird, wie z. B. eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Beschriftungsspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder einen Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturale Pseudo-Klassen

Diese Pseudo-Klassen stehen im Zusammenhang mit dem Standort eines Elements innerhalb der Dokumentstruktur.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder, außer Leerzeichen.
- {{CSSxRef(":nth-child")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet `An+B`-Notation, um Elemente von einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste.
- {{CSSxRef(":first-child")}}
  - : Wählt ein Element aus, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Wählt ein Element aus, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Wählt ein Element aus, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einen bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einen bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste.
- {{CSSxRef(":first-of-type")}}
  - : Wählt ein Element aus, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Wählt ein Element aus, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Wählt ein Element aus, das keine Geschwister des ausgewählten Typselektors hat.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, wie das Halten eines Zeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Wählt aus, wenn ein Benutzer ein Element mit einem Zeigergerät bezeichnet, z. B. das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Wählt aus, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Wählt aus, wenn ein Element im Fokus steht.
- {{CSSxRef(":focus-visible")}}
  - : Wählt aus, wenn ein Element im Fokus steht und das Benutzeragent es als sichtbar fokussiert identifiziert.
- {{CSSxRef(":focus-within")}}
  - : Wählt ein Element aus, auf das {{CSSxRef(":focus")}} zutrifft, plus jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [vergebende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die Matches-beliebiger-Pseudo-Klasse vertritt jedes Element, das einem der in der Liste angegebenen Selektoren entspricht. Die Liste ist vergebend.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Verneinung bzw. Nicht-Übereinstimmung Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument dargestellt wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Spezifität-Anpassungs-Pseudo-Klasse vertritt jedes Element, das einem der in der Liste angegebenen Selektoren entspricht, ohne Spezifitätsgewicht hinzuzufügen. Die Liste ist vergebend.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse stellt ein Element dar, wenn eines der relativen Selektoren beim Verankern gegen das angeschlossene Element übereinstimmt.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie so viele Pseudo-Klassen wie gewünscht in einem Selektor verkettet angeben.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen Folgendes:

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
