---
title: So deaktivieren Sie die automatische Vervollständigung von Formularen
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel erklärt, wie Sie die automatische Vervollständigung für Formularfelder auf einer Webseite deaktivieren.

## Verständnis von Autovervollständigung und Autovervollständigen

Standardmäßig merken sich Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Webseiten eingibt. Dies ermöglicht es den Browsern, Autovervollständigung (das heißt, mögliche Vervollständigungen für Felder vorzuschlagen, die der Benutzer gerade zu tippen begonnen hat) oder Autovervollständigen (das heißt, bestimmte Felder beim Laden vorab zu füllen) anzubieten.

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für die Benutzer darstellen, daher können Browser den Nutzern erlauben, sie zu deaktivieren. Allerdings sind einige Daten, die in Formularen eingegeben werden, entweder über die aktuelle Interaktion hinaus nicht nützlich (zum Beispiel eine einmalige PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige Regierungskennung oder den Sicherheitscode einer Kreditkarte). Als Webseitenautor möchten Sie möglicherweise, dass der Browser die Werte für solche Felder nicht speichert, selbst wenn die Autovervollständigung des Browsers aktiviert ist.

> **Note:** [WCAG 2.1 Erfolgskriterium 1.3.5: Eingabezweck identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass Funktionen zur automatischen Vervollständigung oder zum automatischen Ausfüllen funktionieren; es erfordert lediglich, dass Formularfelder, die sich auf spezifische persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Dies bedeutet, dass das Kriterium immer noch erfüllt werden kann (durch Hinzufügen der entsprechenden [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribute zu den einzelnen Formularfeldern), selbst wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivierung der Auto-Vervollständigung

Um die Autovervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut auf `"off"` setzen:

```plain
autocomplete="off"
```

Sie können dies entweder für ein gesamtes Formular oder für spezifische Eingabeelemente in einem Formular tun:

```html-nolint
<form method="post" action="/form" autocomplete="off">
  …
</form>
```

```html
<form method="post" action="/form">
  …
  <div>
    <label for="cc">Kreditkarte:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Die Einstellung `autocomplete="off"` auf Feldern hat zwei Auswirkungen:

- Sie informiert den Browser darüber, die vom Benutzer eingegebenen Daten nicht für die spätere Autovervollständigung auf ähnlichen Formularen zu speichern, obwohl die Heuristiken für die Einhaltung je nach Browser variieren.
- Sie verhindert, dass der Browser Formulardaten im Sitzungsverlauf zwischenspeichert. Wenn Formulardaten im Sitzungsspeicher zwischengespeichert werden, werden die vom Benutzer ausgefüllten Informationen angezeigt, falls der Benutzer das Formular abgeschickt hat und auf den Zurück-Button klickt, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, selbst nachdem die Autovervollständigung deaktiviert wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung von Autovervollständigen für Anmeldefelder

Moderne Browser implementieren ein integriertes Passwortmanagement: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Seite eingibt, bietet der Browser an, sich dieses zu merken. Wenn der Benutzer die Seite erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten aus.

Zusätzlich ermöglicht der Browser dem Benutzer, ein Master-Passwort auszuwählen, das der Browser verwenden wird, um gespeicherte Anmeldedaten zu verschlüsseln.

Auch ohne ein Master-Passwort wird Passwortmanagement im Browser allgemein als Sicherheitsgewinn angesehen. Da Benutzer sich keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen, als sie es sonst tun würden.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Anmeldefelder nicht:

- Wenn eine Seite `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Benutzername- und Passwort-Eingabefelder enthält, wird der Browser trotzdem anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder das nächste Mal, wenn der Benutzer die Seite besucht, automatisch aus.
- Wenn eine Seite `autocomplete="off"` für Benutzername- und Passwort-{{HTMLElement("input")}}-Felder setzt, wird der Browser trotzdem anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder das nächste Mal, wenn der Benutzer die Seite besucht, automatisch aus.

Wenn Sie eine Benutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person angeben kann, und daher das automatische Ausfüllen der Passwortfelder verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige möglicherweise halten es nicht ein.
