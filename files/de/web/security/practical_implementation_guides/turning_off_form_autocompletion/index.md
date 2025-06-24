---
title: Anleitung zum Deaktivieren der Formular-Autovervollständigung
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Dieser Artikel erklärt, wie die Autovervollständigung für Formularfelder auf einer Website deaktiviert werden kann.

## Verständnis von Autovervollständigung und Autofill

Standardmäßig speichern Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Websites eingibt. Dadurch können Browser Autovervollständigung anbieten (d.h. Vorschläge für mögliche Eingaben machen, die der Benutzer begonnen hat einzugeben) oder Autofill (d.h. bestimmte Felder beim Laden vorab ausfüllen).

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für Benutzer darstellen. Browser erlauben es Benutzern jedoch, sie zu deaktivieren. Einige Daten, die in Formularen übermittelt werden, sind entweder nur für die aktuelle Interaktion nützlich (z. B. eine einmalige PIN) oder enthalten sensible Informationen (z. B. eine eindeutige staatliche Kennung oder ein Sicherheitscode einer Kreditkarte). Als Website-Autor möchten Sie möglicherweise, dass der Browser die Werte für solche Felder nicht speichert, selbst wenn die Autovervollständigungsfunktion des Browsers aktiviert ist.

> [!NOTE] > [WCAG 2.1 Erfolgskriterium 1.3.5: Eingabezweck identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass die Funktionen zur Autovervollständigung oder Autofill funktionieren; es erfordert lediglich, dass Formularfelder, die mit spezifischen persönlichen Benutzerinformationen zusammenhängen, programmatisch identifiziert werden. Dies bedeutet, dass das Kriterium trotzdem erfüllt werden kann (indem die relevanten [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribute zu einzelnen Formularfeldern hinzugefügt werden), selbst wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivierung der Autovervollständigung

Um die Autovervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut auf `"off"` setzen:

```plain
autocomplete="off"
```

Dies können Sie entweder für ein gesamtes Formular oder für spezifische Eingabeelemente in einem Formular tun:

```html-nolint
<form method="post" action="/form" autocomplete="off">
  …
</form>
```

```html
<form method="post" action="/form">
  …
  <div>
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Das Setzen von `autocomplete="off"` auf Feldern hat zwei Effekte:

- Es teilt dem Browser mit, dass er keine vom Benutzer eingegebenen Daten für eine spätere Autovervollständigung bei ähnlichen Formularen speichern soll (einige Browser machen Ausnahmen in Sonderfällen, z. B. beim Speichern von Passwörtern).
- Es verhindert, dass der Browser Formulardaten im Sitzungsspeicher zwischenspeichert. Wenn Formulardaten im Sitzungsspeicher zwischengespeichert werden, werden die vom Benutzer eingegebenen Informationen angezeigt, wenn der Benutzer das Formular übermittelt hat und auf die Schaltfläche Zurück klickt, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser auch nach dem Setzen von autocomplete auf "off" weiterhin Vorschläge macht, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung von Autofill für Anmeldefelder

Moderne Browser implementieren ein integriertes Passwort-Management: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Seite eingibt, bietet der Browser an, diese für den Benutzer zu speichern. Wenn der Benutzer die Seite erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten aus.

Zusätzlich ermöglicht der Browser dem Benutzer, ein Master-Passwort zu wählen, mit dem der Browser gespeicherte Anmeldedetails verschlüsselt.

Auch ohne ein Master-Passwort wird das Passwort-Management im Browser im Allgemeinen als Sicherheitsgewinn angesehen. Da Benutzer sich keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen, als sie es sonst täten.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Anmeldefelder nicht:

- Wenn eine Website `autocomplete="off"` für ein {{HTMLElement("form")}}-Element setzt und das Formular Benutzername- und Passwort-Eingabefelder enthält, bietet der Browser trotzdem an, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder beim nächsten Besuch der Seite automatisch ausfüllen.
- Wenn eine Website `autocomplete="off"` für Benutzername- und Passwort-{{HTMLElement("input")}}-Felder setzt, bietet der Browser trotzdem an, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder beim nächsten Besuch der Seite automatisch ausfüllen.

Wenn Sie eine Benutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person festlegen kann und daher das Autofill für Passwortfelder verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige können diesem möglicherweise nicht folgen.
