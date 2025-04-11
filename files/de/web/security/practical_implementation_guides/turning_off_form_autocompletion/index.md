---
title: Anleitung zur Deaktivierung der automatischen Vervollständigung von Formularen
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel erklärt, wie die automatische Vervollständigung von Formularfeldern auf einer Webseite deaktiviert werden kann.

## Verständnis von automatischer Vervollständigung und automatischem Ausfüllen

Standardmäßig speichern Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Webseiten eingibt. Dies ermöglicht es Browsern, automatische Vervollständigung anzubieten (d.h. mögliche Ergänzungen für Felder vorzuschlagen, in die der Benutzer bereits zu tippen begonnen hat) oder automatisches Ausfüllen (d.h. bestimmte Felder beim Laden vorab zu füllen).

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für Benutzer darstellen, daher können Browser den Benutzern die Möglichkeit bieten, sie zu deaktivieren. Allerdings sind einige in Formularen übermittelte Daten entweder über die aktuelle Interaktion hinaus nicht nützlich (zum Beispiel ein einmaliger PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige staatliche Identifikationsnummer oder der Sicherheitscode einer Kreditkarte). Als Webseitenautor möchten Sie möglicherweise, dass der Browser die Werte für solche Felder nicht speichert, selbst wenn die Autovervollständigungsfunktion des Browsers aktiviert ist.

> **Hinweis:** [WCAG 2.1 Erfolgskriterium 1.3.5: Zweck des Eingabefelds identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass die Autovervollständigungs- oder automatischen Ausfüllfunktionen funktionieren müssen; es erfordert nur, dass Formularfelder, die sich auf bestimmte persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Das bedeutet, dass das Kriterium weiterhin erfüllt werden kann (indem die entsprechenden [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribute zu einzelnen Formularfeldern hinzugefügt werden), auch wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivierung der automatischen Vervollständigung

Um die automatische Vervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut auf `"off"` setzen:

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
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Das Setzen von `autocomplete="off"` auf Feldern hat zwei Effekte:

- Es weist den Browser an, keine vom Benutzer eingegebenen Daten für eine spätere automatische Vervollständigung in ähnlichen Formularen zu speichern (einige Browser machen Ausnahmen für spezielle Fälle, wie das Auffordern des Benutzers, Passwörter zu speichern).
- Es verhindert, dass der Browser Formulardaten im Sitzungsverlauf zwischenspeichert. Wenn Formulardaten im Sitzungsverlauf zwischengespeichert sind, werden die vom Benutzer eingegebenen Informationen im Fall angezeigt, dass der Benutzer das Formular abgeschickt hat und die Zurück-Schaltfläche gedrückt hat, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, obwohl die automatische Vervollständigung deaktiviert wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung des automatischen Ausfüllens für Anmeldefelder

Moderne Browser implementieren ein integriertes Passwortmanagement: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Seite eingibt, bietet der Browser an, dies für den Benutzer zu speichern. Wenn der Benutzer die Seite erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten aus.

Zusätzlich ermöglicht der Browser dem Benutzer, ein Master-Passwort zu wählen, das der Browser verwenden wird, um gespeicherte Anmeldedaten zu verschlüsseln.

Auch ohne ein Master-Passwort wird Passwortmanagement im Browser allgemein als Sicherheitsgewinn gesehen. Da Benutzer keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen, als sie es sonst tun würden.

Aus diesem Grund unterstützen viele moderne Browser nicht `autocomplete="off"` für Anmeldefelder:

- Wenn eine Seite `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Benutzername- und Passwortfelder enthält, wird der Browser dennoch anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder das nächste Mal ausfüllen, wenn der Benutzer die Seite besucht.
- Wenn eine Seite `autocomplete="off"` für Benutzername- und Passwort-{{HTMLElement("input")}}-Felder setzt, wird der Browser dennoch anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder das nächste Mal ausfüllen, wenn der Benutzer die Seite besucht.

Wenn Sie eine Benutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person angeben kann, und deshalb das automatische Ausfüllen von Passwortfeldern verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige können es möglicherweise nicht berücksichtigen.
