---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 634fbbb5e2707ba3ec37b52e4984418ac9b7324e
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um einen spezifischen Zustand des ausgewählten Elements (oder der Elemente) zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um eine Schaltfläche auszuwählen, wenn der Mauszeiger eines Benutzers über die Schaltfläche fährt, und diese ausgewählte Schaltfläche kann dann entsprechend gestaltet werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält zudem ein Paar Klammern, um Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren wie die Historie des Navigators (z. B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formular-Elementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das angibt, ob sich die Maus über einem Element befindet oder nicht) ein Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um _einen spezifischen Teil_ eines Elements zu stylen.

## Pseudo-Klassen für den Anzeigezustand eines Elements

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf deren Anzeigezustand.

- {{CSSxRef(":fullscreen")}}
  - : Wählt ein Element aus, das sich aktuell im Vollbild-Modus befindet.
- {{CSSxRef(":modal")}}
  - : Wählt ein Element aus, das in einem Zustand ist, in dem es die Interaktion mit Elementen außerhalb davon ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":picture-in-picture")}}
  - : Wählt ein Element aus, das sich aktuell im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formular-Elemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach einer Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Trifft zu, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Bedienelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Bedienelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitbar ist.
- {{CSSxRef(":placeholder-shown")}}
  - : Wählt ein Eingabeelement aus, das Platzhalter-Text anzeigt. Zum Beispiel wird das Attribut `placeholder` in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen berücksichtigt.
- {{CSSxRef(":default")}}
  - : Wählt ein oder mehrere Bedienelemente aus, die unter einer Gruppe von Bedienelementen als Standard festgelegt sind.
- {{CSSxRef(":checked")}}
  - : Trifft zu, wenn Elemente wie Checkboxen und Radio-Buttons aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Wählt Bedienelemente aus, die sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Wählt ein Benutzereingabe-Element aus, das leer ist, also eine leere Zeichenfolge oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Wählt ein Element mit gültigem Inhalt aus. Zum Beispiel ein Eingabeelement mit dem Typ "email", das eine korrekt formatierte E-Mail-Adresse enthält, oder einen leeren Wert, falls das Eingabefeld nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Wählt ein Element mit ungültigem Inhalt aus. Zum Beispiel ein Eingabeelement mit dem Typ "email", das einen Namen enthält.
- {{CSSxRef(":in-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu, bei denen der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu, bei denen der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Trifft zu, wenn ein Formularfeld erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Trifft zu, wenn ein Formularfeld optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen berücksichtigen die Sprachrichtung eines Dokuments und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Skriptrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf dessen Richtungsattribut aus, das durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf der Inhaltssprache aus.

## Positionsbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf zielgerichtete Elemente im aktuellen Dokument.

- {{CSSxRef(":any-link")}}
  - : Wählt ein Element aus, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Wählt Links aus, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Wählt Links aus, die besucht worden sind.
- {{CSSxRef(":local-link")}}
  - : Wählt Links aus, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Anker-Links zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Wählt das Element aus, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Wählt Elemente aus, die das Ziel der Dokument-URL sind, sowie Elemente, die einen Nachkommen haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, um sich daran auszurichten.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem abspielbaren Zustand sein können, wie beispielsweise Videos.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Medienelement, das sich in einem abspielbaren Zustand befindet und abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Medienelement, das sich in einem abspielbaren Zustand befindet und pausiert ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen finden Anwendung bei der Betrachtung von Inhalten, die zeitbasierte Elemente enthalten, wie zum Beispiel [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelspuren.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder dessen Vorfahre, das gerade angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element liegt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element liegt.

## Baumstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. Im HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder, mit Ausnahme von Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts gezählt vom Ende der Liste.
- {{CSSxRef(":first-child")}}
  - : Wählt ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Wählt ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Wählt ein Element ohne Geschwister aus. Zum Beispiel ein Listenelement, das innerhalb seiner Liste keine weiteren Listenelemente hat.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus der Liste der Geschwister entsprechen.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus der Liste der Geschwister entsprechen, rückwärts gezählt vom Ende der Liste.
- {{CSSxRef(":first-of-type")}}
  - : Wählt ein Element, das das erste seiner Geschwister ist und einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Wählt ein Element, das das letzte seiner Geschwister ist und einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Wählt ein Element, das keine Geschwister desselben Typselektors hat.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion durch den Benutzer, damit sie angewendet werden, wie das Überfahren eines Elements mit einem Mauszeiger.

- {{CSSxRef(":hover")}}
  - : Trifft zu, wenn ein Benutzer ein Element mit einem Zeigegerät bezeichnet, wie das Überfahren eines Elements mit dem Mauszeiger.
- {{CSSxRef(":active")}}
  - : Trifft zu, wenn ein Element vom Benutzer aktiviert wird. Beispielsweise, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Trifft zu, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Trifft zu, wenn ein Element den Fokus hat und das User Agent angibt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Trifft für ein Element zu, auf das {{CSSxRef(":focus")}} angewendet wird, sowie für Elemente, die einen Nachkommen mit Fokus enthalten.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [nachgiebige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die "matches-any"-Pseudo-Klasse wählt alle Elemente aus, die einem der Selektoren in der bereitgestellten Liste entsprechen. Die Liste ist nachgiebig.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Negations-, oder "matches-none"-Pseudo-Klasse repräsentiert jedes Element, das nicht durch das Argument repräsentiert wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Spezifitätsanpassungs-Pseudo-Klasse wählt alle Elemente aus, die einem der Selektoren in der bereitgestellten Liste entsprechen, ohne zusätzliche Spezifität hinzuzufügen. Die Liste ist nachgiebig.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn sie gegen das angehängte Element verankert ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Ähnlich wie bei regulären Klassen können Sie so viele Pseudo-Klassen wie gewünscht in einem Selektor verketten.

## Alphabetisches Register

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

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
- {{CSSxRef(":host_function", ":host()")}}
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
