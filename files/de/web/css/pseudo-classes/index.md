---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 4ec4913a3aaf3b20853c2fb638922c162e565ad6
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen speziellen Zustand des ausgewählten Elements bzw. der ausgewählten Elemente zu kennzeichnen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Nutzers über dem Button ist, und dieser ausgewählte Button kann dann entsprechend gestylt werden.

```css
/* Jeder Button, über dem der Zeiger des Nutzers schwebt */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die angibt, ob sich die Maus über einem Element befindet oder nicht) einen Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Anzeigezustand von Elementen: Pseudo-Klassen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigenzustand.

- {{CSSxRef(":fullscreen")}}
  - : Trifft auf ein Element zu, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":modal")}}
  - : Trifft auf ein Element zu, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":picture-in-picture")}}
  - : Trifft auf ein Element zu, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Status, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Trifft zu, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das sich in einem aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das sich in einem deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Trifft auf ein Eingabeelement zu, das Platzhalter-Text anzeigt. Zum Beispiel wird es das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen erfassen.
- {{CSSxRef(":default")}}
  - : Trifft auf eines oder mehrere UI-Elemente zu, die die Standardeinstellung in einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Trifft zu, wenn Elemente wie Kontrollkästchen und Optionsschaltflächen aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Trifft auf UI-Elemente zu, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Trifft auf ein Benutzereingabeelement zu, das leer ist und einen leeren String oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Trifft auf ein Element mit gültigem Inhalt zu. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig formatierte E-Mail-Adresse oder einen leeren Wert enthält, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Trifft auf ein Element mit ungültigem Inhalt zu. Zum Beispiel ein Eingabeelement vom Typ 'email', in das ein Name eingegeben wurde.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichseinschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichseinschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Trifft zu, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Trifft zu, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, aber nur wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, aber nur wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen reflektieren die Sprache des Dokuments und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungspseudo-Klasse wählt ein Element basierend auf seiner Richtung aus, die durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Trifft auf ein Element zu, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Trifft auf Links zu, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Trifft auf Links zu, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Trifft auf Links zu, deren absolute URL dieselbe ist wie die Ziel-URL. Zum Beispiel Anker-Links zur selben Seite.
- {{CSSxRef(":target")}}
  - : Trifft auf das Element zu, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Trifft auf Elemente zu, welche das Ziel der Dokument-URL sind, aber auch auf Elemente, die einen Nachfahren haben, welcher das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Bezugspunkt für Selektoren darstellen, um gegen sie übereinzustimmen.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, der als Abspielen beschrieben wird, wie beispielsweise ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Medienelement, das abgespielt werden kann, wenn dieses Element abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Medienelement, das abgespielt werden kann, wenn dieses Element pausiert ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Betrachten von etwas, das eine Zeitsteuerung hat, wie zum Beispiel ein [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelpfad.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element vorkommt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element vorkommt.

## Baum-strukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. Im HTML ist das normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichensymbolen.
- {{CSSxRef(":nth-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts von der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Trifft auf ein Element zu, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Trifft auf ein Element zu, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Trifft auf ein Element zu, das keine Geschwister hat. Zum Beispiel ein Listeneintrag ohne andere Listeneinträge in dieser Liste.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts von der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Trifft auf ein Element zu, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Trifft auf ein Element zu, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Trifft auf ein Element zu, das keine Geschwister des gewählten Typen-Selektors hat.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern einige Interaktionen durch den Benutzer, damit sie angewendet werden, wie das Überfahren eines Elements mit einem Zeigegerät.

- {{CSSxRef(":hover")}}
  - : Trifft zu, wenn ein Benutzer ein Element mit einem Zeigegerät markiert, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Trifft zu, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Trifft zu, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Trifft zu, wenn ein Element den Fokus hat und der Benutzeragent erkennt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Trifft auf ein Element zu, auf das {{CSSxRef(":focus")}} zutrifft, sowie auf jedes Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} zutrifft.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die "matches-any"-Pseudo-Klasse trifft auf jedes Element zu, das einem der in der Liste bereitgestellten Selektoren entspricht. Die Liste ist fehlertolerant.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Negations- oder "matches-none"-Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Spezifizitätsanpassungspseudo-Klasse trifft auf jedes Element zu, das einem der in der Liste bereitgestellten Selektoren entspricht, ohne dabei irgendein Spezifizitätsgewicht hinzuzufügen. Die Liste ist fehlertolerant.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn er gegen das angehängte Element verankert wird.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie in einem Selektor beliebig viele Pseudo-Klassen verkettet anwenden.

## Alphabetisches Verzeichnis

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
